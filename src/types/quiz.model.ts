export interface Question {
    question: string;
    options: string[];
    correctAnswer: number;
}

export interface Category {
    category: string;
    questions: Question[];
}
