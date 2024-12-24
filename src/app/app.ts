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
    };

    let QUIZ_CATEGORY: string = 'mathematics';
    let currentQuestion: Question | Category | null;
    let numberOfQuestions: number = 3;
    const questionIndexHistory: number[] = [];

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
            throw new Error('Quiz complete');
        }

        // Filtrar las consultas ya realizadas según la categoría seleccionada
        const availableQuestions = categoryQuestions.filter(
            (_, index) => !questionIndexHistory.includes(index)
        );

        const randomQuestion = categoryQuestions.at(
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
        const isCorrect = correctAnswer === answerIndex;
        $li.classList.add(isCorrect ? 'correct' : 'incorrect');

        !isCorrect ? highligthCorrectAnswer(correctAnswer) : null;

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
