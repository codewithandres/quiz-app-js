import { Category, Question } from '../interface';
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
    };

    let QUIZ_CATEGORY = 'mathematics';
    let currentQuestion: Question | Category | null;

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
    // highligth the correct answer option
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

    // handle the user's answer selection
    const handleAnswer = (
        option: HTMLLIElement,
        answerIndex: number,
        correctAnswer: number
    ) => {
        const isCorrect = correctAnswer === answerIndex;
        option.classList.add(isCorrect ? 'correct' : 'incorrect');

        !isCorrect ? highligthCorrectAnswer(correctAnswer) : null;

        const iconHtml = `
                 <span class="material-symbols-outlined">
                        ${isCorrect ? ' task_alt' : 'cancel'} 
                  </span>`;

        // inser icon based on crrect answer
        option.insertAdjacentHTML('beforeend', iconHtml);

        // Disable all answer option after one option is selected
        $domElement.answerOptions
            .querySelectorAll<HTMLLIElement>('.answer-option')
            .forEach(Option => (Option.style.pointerEvents = 'none'));
    };

    // Render the current question and its options  in the quiz
    const renderQuestion = () => {
        currentQuestion = getRandomQuestion();

        const { options, correctAnswer } = currentQuestion;

        if (!currentQuestion) return;

        // update UI
        $domElement.quizText.textContent = currentQuestion.question;
        $domElement.answerOptions.innerHTML = '';

        // Create option <li> Element and append them, and add click event listener
        options.forEach((Option, index) => {
            const $li = document.createElement('li');

            $li.classList.add('answer-option');
            $li.textContent = Option;
            $li.addEventListener('click', () =>
                handleAnswer($li, index, correctAnswer)
            );

            $domElement.answerOptions.appendChild($li);
        });
    };

    renderQuestion();

    $domElement.nextQuestionButton.addEventListener('click', renderQuestion);
});
