import './css/index.css';
import './css/quiz.css';
import './css/resul-quiz.css';

import { questions } from './models/questions';
import type { Category, Question } from './interface';

// DOM
const $domElement = {
    quizText: document.querySelector('.queztion-text')!,
    answerOptions: document.querySelector('.answer-options')!,
};

let QUIZ_CATEGORY = 'mathematics';

// Fetch a random question from based on the selected category
const getRandomQuestion = (): Question => {
    const categoryQuestions =
        questions.find(
            cate =>
                cate.category.toLocaleLowerCase() ===
                QUIZ_CATEGORY.toLowerCase()
        )?.questions || [];

    const randomQuestion =
        categoryQuestions[
            Math.floor(Math.random() * categoryQuestions?.length)
        ];

    return randomQuestion;
};
// Render the current question and its options  in the quiz
const renderQuestion = () => {
    const currentQuestion: Question | Category = getRandomQuestion();

    const { options } = currentQuestion;

    if (!currentQuestion) return;

    // update UI
    $domElement.quizText.textContent = currentQuestion.question;
    $domElement.answerOptions.innerHTML = '';

    // Create option <li> Element and append them
    options.forEach(Option => {
        const $li = document.createElement('li');

        $li.classList.add('answer-option');
        $li.textContent = Option;

        $domElement.answerOptions.appendChild($li);
    });
};

renderQuestion();
