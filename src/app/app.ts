import { time } from 'console';
import { AnswerHandlingPros, Category, Question } from '../interface';
import { questions } from '../models/questions';

document.addEventListener('DOMContentLoaded', () => {
    // DOM
    const $domElement = {
        quizText: document.querySelector(
            '.queztion-text'
        ) as HTMLHeadingElement,
        answerOptions: document.querySelector(
            '.answer-options'
        ) as HTMLUListElement,
        nextQuestionButton: document.querySelector(
            '.next-question-button'
        ) as HTMLButtonElement,
        questionStatus: document.querySelector(
            '.question-status'
        ) as HTMLParagraphElement,
        timerDisplay: document.querySelector(
            '.timer-duration'
        ) as HTMLParagraphElement,
        resultContainer: document.querySelector(
            '.result-container'
        ) as HTMLElement,
        quizContainer: document.querySelector('.quiz-container') as HTMLElement,
        resultMessage: document.querySelector(
            '.result-mesaage'
        ) as HTMLParagraphElement,
        restartQuizButton: document.querySelector(
            '.restart-quiz-button'
        ) as HTMLButtonElement,
    };
    const QUIZ_TIME_LIMIT: number = 5,
        questionIndexHistory: number[] = [];

    let QUIZ_CATEGORY: string = 'mathematics',
        currentQuestion: Question | Category | null,
        numberOfQuestions: number = 3,
        currentTime = QUIZ_TIME_LIMIT,
        timer: NodeJS.Timeout,
        correctAnswerCount = 0;

    // Disable the quiz result and hide the quiz container
    const showQuizResult = () => {
        const { quizContainer, resultContainer, resultMessage } = $domElement;

        quizContainer.style.display = ' none ';
        resultContainer.style.display = ' block ';

        const $resultText = ` You answer 
            <b>${correctAnswerCount}</b> out of <b>${numberOfQuestions}</b> 
        question correctly great effort! `;

        resultMessage.innerHTML = $resultText;
    };

    // clear and reset the timer
    const resetTimer = () => {
        clearInterval(timer);
        currentTime = QUIZ_TIME_LIMIT;
    };

    // Initialize and start the timer for the current question
    const starTime = () => {
        timer = setInterval(() => {
            currentTime--;

            $domElement.timerDisplay.textContent = ` ${currentTime}s `;

            if (currentTime <= 0) {
                clearInterval(timer);

                const { correctAnswer } = getRandomQuestion();

                highligthCorrectAnswer(correctAnswer);

                $domElement.nextQuestionButton.style.visibility = 'visible';
                $domElement.answerOptions
                    .querySelectorAll<HTMLLIElement>('.answer-option')
                    .forEach(Option => (Option.style.pointerEvents = ' none '));
            }
        }, 1000);
    };

    // Obtener una pregunta aleatoria basada en la categoría seleccionada
    const getRandomQuestion = (): Question => {
        const categoryQuestions =
            questions.find(
                ({ category }) =>
                    category.toLowerCase() === QUIZ_CATEGORY.toLowerCase()
            )?.questions ?? [];

        if (
            questionIndexHistory.length >=
            Math.min(categoryQuestions.length, numberOfQuestions)
        ) {
            return showQuizResult();
        }

        // Filtrar las consultas ya realizadas según la categoría seleccionada
        const availableQuestions = categoryQuestions.filter(
            (_, index) => !questionIndexHistory.includes(index)
        );

        const randomQuestion = availableQuestions.at(
            Math.floor(Math.random() * categoryQuestions.length)
        )!;

        questionIndexHistory.push(categoryQuestions.indexOf(randomQuestion));

        return randomQuestion;
    };
    // Resalte la opción de respuesta correcta
    const highligthCorrectAnswer = (correctAnswer: number) => {
        const correcOption =
            $domElement.answerOptions.querySelectorAll<HTMLLIElement>(
                '.answer-option'
            )[correctAnswer];

        correcOption.classList.add('correct');

        const iconHtml = `<span class="material-symbols-outlined"> task_alt </span>`;

        // inser icon based on crrect answer
        correcOption.insertAdjacentHTML('beforeend', iconHtml);
    };

    // Manejar la selección de respuestas del usuario
    const handleAnswer = ({
        $li,
        answerIndex,
        correctAnswer,
    }: AnswerHandlingPros) => {
        clearInterval(timer);

        const isCorrect = correctAnswer === answerIndex;
        $li.classList.add(isCorrect ? 'correct' : 'incorrect');

        !isCorrect
            ? highligthCorrectAnswer(correctAnswer)
            : correctAnswerCount++;

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
    const renderQuestion = () => {
        currentQuestion = getRandomQuestion();

        const { options, correctAnswer } = currentQuestion;

        if (!currentQuestion) return;

        resetTimer();
        starTime();

        // Actualizar la interfaz de usuario
        $domElement.quizText.textContent = currentQuestion.question;
        $domElement.answerOptions.innerHTML = '';
        $domElement.nextQuestionButton.style.visibility = 'hidden';
        $domElement.questionStatus.innerHTML = `<b> ${questionIndexHistory.length} </b> Of <b> ${numberOfQuestions} </b>`;

        // Cree el elemento <li> y añádalo, y agregue un detector de eventos de clic
        options.forEach((Option, answerIndex) => {
            const $li = document.createElement('li');

            $li.classList.add('answer-option');
            $li.textContent = Option;
            $li.addEventListener('click', () =>
                handleAnswer({ $li, answerIndex, correctAnswer })
            );

            $domElement.answerOptions.appendChild($li);
        });
    };

    renderQuestion();

    $domElement.nextQuestionButton.addEventListener('click', renderQuestion);
});
