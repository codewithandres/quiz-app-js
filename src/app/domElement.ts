interface NonNullableHTMLElements {
    quizText: NonNullable<HTMLHeadingElement>;
    answerOptions: NonNullable<HTMLUListElement>;
    nextQuestionButton: NonNullable<HTMLButtonElement>;
    questionStatus: NonNullable<HTMLParagraphElement>;
    timerDisplay: NonNullable<HTMLParagraphElement>;
    resultContainer: NonNullable<HTMLElement>;
    quizContainer: NonNullable<HTMLElement>;
    resultMessage: NonNullable<HTMLParagraphElement>;
    restartQuizButton: NonNullable<HTMLButtonElement>;
    configContainer: NonNullable<HTMLDivElement>;
    startQuizButton: NonNullable<HTMLButtonElement>;
    category_question_option: NodeListOf<HTMLButtonElement>;
    quizTimer: NonNullable<HTMLDivElement>;
}

export const $domElement: NonNullableHTMLElements = {
    quizText: document.querySelector('.queztion-text') as HTMLHeadingElement,
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
    resultContainer: document.querySelector('.result-container') as HTMLElement,
    quizContainer: document.querySelector('.quiz-container') as HTMLElement,
    resultMessage: document.querySelector(
        '.result-mesaage'
    ) as HTMLParagraphElement,
    restartQuizButton: document.querySelector(
        '.try-again-button'
    ) as HTMLButtonElement,
    configContainer: document.querySelector(
        '.config-container'
    ) as HTMLDivElement,
    startQuizButton: document.querySelector(
        '.star-quizt-button'
    ) as HTMLButtonElement,
    category_question_option: document.querySelectorAll(
        ':where(.category-option, .question-option)'
    ) as NodeListOf<HTMLButtonElement>,
    quizTimer: document.querySelector('.quiz-timer') as HTMLDivElement,
};
