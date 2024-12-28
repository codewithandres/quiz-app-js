import 'animate.css';

import type { AnswerHandlingPros, Category, Question } from '../interface';
import { questions } from '../models/questions';
import { $domElement } from './domElement';

const QUIZ_TIME_LIMIT: number = 5,
    questionIndexHistory: number[] = [];

let QUIZ_CATEGORY: string = 'mathematics',
    currentQuestion: Question | Category | null,
    numberOfQuestions: number = 3,
    currentTime = QUIZ_TIME_LIMIT,
    timer: string | number | NodeJS.Timeout | undefined,
    correctAnswerCount = 0;

// Disable the quiz result and hide the quiz container
const showQuizResult = (): void => {
    const { quizContainer, resultContainer, resultMessage } = $domElement;

    quizContainer.style.display = ' none ';
    resultContainer.style.display = ' block ';
    resultContainer.classList.add('animate__rubberBand');

    const $resultText = ` You answer 
            <b>${correctAnswerCount}</b> out of <b>${numberOfQuestions}</b> 
        question correctly great effort! `;

    resultMessage.innerHTML = $resultText;
};

// clear and reset the timer
const resetTimer = (): void => {
    clearInterval(timer);
    currentTime = QUIZ_TIME_LIMIT;
};

// Initialize and start the timer for the current question
const starTime = (): void => {
    timer = setInterval(() => {
        currentTime--;

        $domElement.timerDisplay.textContent = ` ${currentTime}s `;

        if (currentTime <= 0) {
            clearInterval(timer);

            const { correctAnswer } = getRandomQuestion();

            highlightCorrectAnswer(correctAnswer);

            $domElement.nextQuestionButton.style.visibility = 'visible';
            $domElement.quizTimer.style.backgroundColor = ' #c31402 ';

            $domElement.answerOptions
                .querySelectorAll<HTMLLIElement>('.answer-option')
                .forEach(Option => (Option.style.pointerEvents = ' none '));
        }
    }, 1000);
};

// Obtener una pregunta aleatoria basada en la categoría seleccionada
const getRandomQuestion = (): Question => {
    // Get questions for the selected category once
    const categoryQuestions =
        questions.find(
            ({ category }) =>
                category.toLowerCase() === QUIZ_CATEGORY.toLowerCase()
        )?.questions ?? [];

    const maxQuestions = Math.min(categoryQuestions.length, numberOfQuestions);

    // Check if we've reached the end of available questions
    if (questionIndexHistory.length >= maxQuestions) {
        showQuizResult();
        return {} as Question; // Return empty Question object to satisfy return type
    }

    // Get available question indices instead of filtering the array
    const availableIndices = Array.from(
        { length: categoryQuestions.length },
        (_, i) => i
    ).filter(index => !questionIndexHistory.includes(index));

    // Select a random index from available indices
    const randomIndex =
        availableIndices[Math.floor(Math.random() * availableIndices.length)];

    questionIndexHistory.push(randomIndex);
    return categoryQuestions[randomIndex];
};

// Resalte la opción de respuesta correcta
const highlightCorrectAnswer = (correctAnswer: number): void => {
    const correctOption = document.querySelector<HTMLLIElement>(
        `.answer-option:nth-child(${correctAnswer + 1})`
    );

    if (!correctOption) return;

    correctOption.classList.add('correct');

    const icon = document.createElement('span');
    icon.className = 'material-symbols-outlined';
    icon.textContent = 'task_alt';

    correctOption.appendChild(icon);
};

// Manejar la selección de respuestas del usuario
const handleAnswer = ({
    $li,
    answerIndex,
    correctAnswer,
}: AnswerHandlingPros): void => {
    clearInterval(timer);

    const isCorrect = correctAnswer === answerIndex;

    $li.classList.add(isCorrect ? 'correct' : 'incorrect');
    $li.classList.add(isCorrect ? 'animate__pulse' : 'animate__headShake');

    !isCorrect ? highlightCorrectAnswer(correctAnswer) : correctAnswerCount++;

    const iconHtml = `
                 <span class="material-symbols-outlined">
                        ${isCorrect ? ' task_alt' : 'cancel'} 
                  </span>`;

    // inser icon based on crrect answer
    $li.insertAdjacentHTML('beforeend', iconHtml);

    // Disable all answer option after one option is selected
    $domElement.answerOptions
        .querySelectorAll<HTMLLIElement>('.answer-option')
        .forEach(Option => (Option.style.pointerEvents = 'none'));

    $domElement.nextQuestionButton.style.visibility = 'visible';
};

// Representar la pregunta actual y sus opciones en el cuestionario
const renderQuestion = (): void => {
    currentQuestion = getRandomQuestion();

    if (!currentQuestion) return;

    const { options, correctAnswer } = currentQuestion;

    resetTimer();
    starTime();

    // Actualizar la interfaz de usuario
    $domElement.quizText.innerHTML = `<p> ${currentQuestion.question} </p>`;
    $domElement.answerOptions.innerHTML = '';
    $domElement.nextQuestionButton.style.visibility = 'hidden';
    $domElement.quizTimer.style.backgroundColor = ' hwb(245 19% 76%) ';
    $domElement.questionStatus.innerHTML = `<b> ${questionIndexHistory.length} </b> Of <b> ${numberOfQuestions} </b>`;

    // Cree el elemento <li> y añádalo, y agregue un detector de eventos de clic
    options.forEach((Option, answerIndex) => {
        const $li = document.createElement('li');

        $li.classList.add('answer-option', 'animate__animated');
        $li.textContent = Option;
        $li.addEventListener('click', () =>
            handleAnswer({ $li, answerIndex, correctAnswer })
        );

        $domElement.answerOptions.appendChild($li);
    });
};

const startQuiz = (): void => {
    const { configContainer, quizContainer } = $domElement;

    configContainer.style.display = ' none ';
    quizContainer.style.display = ' block ';
    quizContainer.classList.add('animate__bounceIn');

    const category_active = document.querySelector<HTMLButtonElement>(
        '.category-option.active'
    );

    const question_active = document.querySelector<HTMLButtonElement>(
        '.question-option.active'
    );
    QUIZ_CATEGORY = category_active?.dataset.category!;

    numberOfQuestions = +question_active?.dataset.nquestion!;

    console.log(QUIZ_CATEGORY, numberOfQuestions);

    renderQuestion();
};

//  reset the quiz and return to the configuration container
const resetQuiz = (): void => {
    const { configContainer, resultContainer } = $domElement;

    resetTimer();
    correctAnswerCount = 0;
    questionIndexHistory.length = 0;

    configContainer.style.display = ' block ';
    resultContainer.style.display = ' none ';
};

$domElement.category_question_option.forEach(Option => {
    Option.addEventListener('click', () => {
        Option.parentNode?.querySelector('.active')?.classList.remove('active');
        Option.classList.add('active');
    });
});

$domElement.nextQuestionButton.addEventListener('click', renderQuestion);
$domElement.restartQuizButton.addEventListener('click', resetQuiz);
$domElement.startQuizButton.addEventListener('click', startQuiz);
