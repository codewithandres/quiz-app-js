import './app/imporStyle';
import { questions } from './models/questions';
import { Question } from './types/quiz.model';

const $answerOption = document.querySelector(
    '.answer-options'
) as HTMLLIElement;

let quizCategory: string = 'programming';

type getRandomQuestionType = Question | undefined;

const getRandomQuestion = (): getRandomQuestionType => {
    // Fetch add ramdom question from based on the selectd category
    const randomIndex = Math.floor(Math.random() * 25);

    return questions.find(
        ({ category }) =>
            category.toLocaleLowerCase() === quizCategory.toLocaleLowerCase()
    )?.questions[randomIndex];
};

const renderQuestion = () => {
    const currentQuestion: getRandomQuestionType = getRandomQuestion();

    if (!currentQuestion) return;

    $answerOption.innerHTML = '';

    (document.querySelector('.queztion-text') as Element).textContent =
        currentQuestion.question;

    currentQuestion.options.map(option => {
        const $li = document.createElement('li') as HTMLLIElement;

        $li.classList.add('answer-option');
        $li.textContent = option;

        $answerOption?.appendChild($li);
    });
};

renderQuestion();
