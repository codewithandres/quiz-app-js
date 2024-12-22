import './app/imporStyle';
import { questions } from './models/questions';
import type { Question } from './types/quiz.model';

const $answerOption = document.querySelector(
    '.answer-options'
) as HTMLLIElement;

const $nextQuestion = document.querySelector(
    '.next-question-button'
) as HTMLButtonElement;

const $questionStatus = document.querySelector(
    '.question-status'
) as HTMLParagraphElement;

const $timerDisplay = document.querySelector(
    '.timer-duration'
) as HTMLParagraphElement;

const $resulContainer = document.querySelector(
    '.result-container'
) as HTMLElement;

const $quizContainer = document.querySelector('.quiz-container') as HTMLElement;

const $configContainer = document.querySelector(
    '.config-container'
) as HTMLElement;

type getRandomQuestionType = Question | void;

// quiz state variables
const QUIZ_TIME_LIMIT: number = 15;

let quizCategory: string = 'programming';
let currentQuestion: getRandomQuestionType;
let numberOfQuestions: number = 10;
let currentTime = QUIZ_TIME_LIMIT;
let timer: NodeJS.Timeout;
let correctAnswerCount: number = 0;

const questionIndexHistoy: number[] = [];

// Display the quiz result and hide the quiz container
const showQuizResult = (): void => {
    $quizContainer.style.display = 'none';
    $resulContainer.style.display = 'block';

    const resultText: string = ` You answer <b>${correctAnswerCount}</b> out of <b>${numberOfQuestions}</b> question correctly great effort!`;

    (document.querySelector('.result-mesaage') as HTMLDivElement).innerHTML =
        resultText;
};

//*clean and reset the timer
const resetTimer = (): void => {
    clearInterval(timer);
    currentTime = QUIZ_TIME_LIMIT;
    $timerDisplay.textContent = `${currentTime}s`;
};

// initialize and start the timer for the current question
const starTime = (): void => {
    timer = setInterval(() => {
        currentTime--;
        $timerDisplay.textContent = `${currentTime}s`;

        if (currentTime <= 0) {
            clearInterval(timer);
            highligthCorrectAnswer();
            $nextQuestion.style.visibility = 'visible';

            $answerOption
                .querySelectorAll<HTMLLIElement>('.answer-option')
                .forEach(Option => (Option.style.pointerEvents = 'none'));
        }
    }, 1000);
};

const getRandomQuestion = (): getRandomQuestionType => {
    //Fetch add ramdom question from based on the selectd category
    const categoryQuestions =
        questions.find(
            Category =>
                Category.category.toLocaleLowerCase() ===
                quizCategory.toLocaleLowerCase()
        )?.questions ?? [];

    // show the result if all question have been used
    if (
        questionIndexHistoy.length >=
        Math.min(categoryQuestions.length, numberOfQuestions)
    ) {
        return showQuizResult();
    }

    // filter out already asked question and choose a random one
    const aviableQuestions: Question[] = categoryQuestions.filter(
        (_, index) => !questionIndexHistoy.includes(index)
    );

    const randomQuestion: Question =
        aviableQuestions[Math.floor(Math.random() * aviableQuestions.length)];

    questionIndexHistoy.push(categoryQuestions.indexOf(randomQuestion));

    return randomQuestion;
};

// Highiligth the correct answer option
const highligthCorrectAnswer = (): void => {
    const correcrOption =
        $answerOption.querySelectorAll<HTMLLIElement>('.answer-option')[
            currentQuestion?.correctAnswer!!
        ];

    correcrOption.classList.add('correct');

    const $iconHtml = `<span class="material-symbols-outlined">task_alt</span>`;

    // inser icon based to correctness
    correcrOption.insertAdjacentHTML('beforeend', $iconHtml);
};

// * Handle the use's answer selection
const handelAnswer = ($li: HTMLLIElement, answerIndex: number): void => {
    clearInterval(timer);

    const isCorrent = currentQuestion?.correctAnswer === answerIndex;

    $li.classList.add(isCorrent ? 'correct' : 'incorrect');

    !isCorrent ? highligthCorrectAnswer() : correctAnswerCount++;

    const $iconHtml = `<span class="material-symbols-outlined">
              ${isCorrent ? 'task_alt' : 'cancel'}
         </span>`;

    // inser icon based to correctness
    $li.insertAdjacentHTML('beforeend', $iconHtml);

    //  Disable all answer option after one option is selected
    $answerOption
        .querySelectorAll<HTMLLIElement>('.answer-option')
        .forEach(Option => (Option.style.pointerEvents = 'none'));

    $nextQuestion.style.visibility = 'visible';
};

const renderQuestion = (): void => {
    currentQuestion = getRandomQuestion();

    if (!currentQuestion) return;

    resetTimer();
    starTime();

    // Update UI
    $answerOption.innerHTML = '';
    $nextQuestion.style.visibility = 'hidden';
    $questionStatus.innerHTML = ` <b> ${questionIndexHistoy.length} </b> of <b> ${numberOfQuestions} </b> Question`;

    (
        document.querySelector('.queztion-text') as HTMLHeadingElement
    ).textContent = currentQuestion.question;

    currentQuestion.options.map((Option, index) => {
        const $li = document.createElement('li') as HTMLLIElement;

        $li.classList.add('answer-option');
        $li.textContent = Option;
        $li.addEventListener('click', () => handelAnswer($li, index));

        $answerOption?.appendChild($li);
    });
};

renderQuestion();

const starQuiz = (): void => {
    $configContainer.style.display = 'none';
    $quizContainer.style.display = 'block';

    renderQuestion();
};

// Reset the quiz an return to the configuration container
const restQuiz = (): void => {
    resetTimer();
    correctAnswerCount = 0;

    questionIndexHistoy.length = 0;

    $configContainer.style.display = 'block';
    $resulContainer.style.display = 'none';
};

$nextQuestion.addEventListener('click', renderQuestion);

(
    document.querySelector('.try-again-button') as HTMLButtonElement
).addEventListener('click', restQuiz);

(
    document.querySelector('.star-quizt-button') as HTMLButtonElement
).addEventListener('click', starQuiz);
