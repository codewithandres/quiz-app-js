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

type getRandomQuestionType = Question | void;

// quiz state variables
const QUIZ_TIME_LIMIT = 15;

let quizCategory: string = 'programming';
let currentQuestion: getRandomQuestionType;
let numberOfQuestions: number = 10;
let currentTime = QUIZ_TIME_LIMIT;
let timer: NodeJS.Timeout;

const questionIndexHistoy: number[] = [];

// initialize and start the timer for the current question
const starTime = (): void => {
    timer = setInterval(() => {
        currentTime--;
        $timerDisplay.textContent = `${currentTime}s`;

        if (currentTime <= 0) {
            clearInterval(timer);
        }
    }, 1000);
};

const getRandomQuestion = (): getRandomQuestionType => {
    //* Fetch add ramdom question from based on the selectd category
    const categoryQuestions =
        questions.find(
            Category =>
                Category.category.toLocaleLowerCase() ===
                quizCategory.toLocaleLowerCase()
        )?.questions ?? [];

    //* show the result if all question have been used
    if (
        questionIndexHistoy.length >=
        Math.min(categoryQuestions.length, numberOfQuestions)
    ) {
        return console.log('Quiz Completed');
    }

    //* filter out already asked question and choose a random one
    const aviableQuestions = categoryQuestions.filter(
        (_, index) => !questionIndexHistoy.includes(index)
    );

    const randomQuestion =
        aviableQuestions[Math.floor(Math.random() * aviableQuestions.length)];

    questionIndexHistoy.push(categoryQuestions.indexOf(randomQuestion));

    return randomQuestion;
};

//* Highiligth the correct answer option
const highligthCorrectAnswer = () => {
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
const handelAnswer = ($li: HTMLLIElement, answerIndex: number) => {
    clearInterval(timer);

    const isCorrent = currentQuestion?.correctAnswer === answerIndex;

    $li.classList.add(isCorrent ? 'correct' : 'incorrect');

    !isCorrent && highligthCorrectAnswer();

    const $iconHtml = `<span class="material-symbols-outlined">
              ${isCorrent ? 'task_alt' : 'cancel'}
         </span>`;

    // inser icon based to correctness
    $li.insertAdjacentHTML('beforeend', $iconHtml);

    //*  Disable all answer option after one option is selected
    $answerOption
        .querySelectorAll<HTMLLIElement>('.answer-option')
        .forEach(Option => (Option.style.pointerEvents = 'none'));

    $nextQuestion.style.visibility = 'visible';
};

const renderQuestion = () => {
    currentQuestion = getRandomQuestion();

    if (!currentQuestion) return;

    starTime();

    // * Update UI
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

$nextQuestion.addEventListener('click', renderQuestion);
