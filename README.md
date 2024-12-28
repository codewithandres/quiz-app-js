# Interactive Quiz Application

This project is an interactive quiz application built with TypeScript and Vite, offering a customizable and engaging quiz experience across various categories.

The application provides a user-friendly interface for taking quizzes on different topics, with features such as timed questions, multiple-choice answers, and instant feedback. It's designed to be easily extendable, allowing for the addition of new question categories and customization of quiz parameters.

Key features include:

-   Multiple quiz categories (e.g., programming, geography)
-   Configurable number of questions per quiz
-   Timed questions with automatic progression
-   Randomized question selection
-   Instant feedback on answer selection
-   Final score display and option to restart

## Repository Structure

```
.
├── index.html
├── package.json
├── src
│   ├── app
│   │   ├── app.ts
│   │   └── domElement.ts
│   ├── css
│   │   ├── index.css
│   │   ├── quiz.css
│   │   ├── responsive.css
│   │   └── resul-quiz.css
│   ├── index.ts
│   ├── interface
│   │   └── index.ts
│   ├── models
│   │   └── questions.ts
│   └── vite-env.d.ts
└── tsconfig.json
```

### Key Files:

-   `src/app/app.ts`: Main application logic
-   `src/index.ts`: Entry point for the application
-   `src/models/questions.ts`: Question data storage
-   `src/interface/index.ts`: TypeScript interfaces for data structures
-   `package.json`: Project configuration and dependencies
-   `tsconfig.json`: TypeScript compiler options

## Usage Instructions

### Installation

Prerequisites:

-   Node.js (version 12 or higher)
-   npm (usually comes with Node.js)

Steps:

1. Clone the repository
2. Navigate to the project directory
3. Run `npm install` to install dependencies

### Getting Started

To start the development server:

```bash
npm run dev
```

This will start the Vite development server, typically at `http://localhost:5173`.

### Building for Production

To create a production build:

```bash
npm run build
```

This will generate optimized files in the `dist` directory.

### Configuration

The quiz can be customized by modifying the following files:

-   `src/models/questions.ts`: Add or modify quiz questions and categories
-   `src/app/app.ts`: Adjust quiz parameters like time limit or number of questions

### Common Use Cases

1. Taking a Quiz:

    - Select a category and number of questions
    - Click "Start Quiz"
    - Answer questions within the time limit
    - View your final score

2. Adding New Questions:

    - Open `src/models/questions.ts`
    - Add new question objects to the appropriate category array

3. Creating a New Category:
    - In `src/models/questions.ts`, add a new category object with questions
    - Update the UI in `src/app/app.ts` to include the new category option

### Troubleshooting

Common Issue: Quiz doesn't start

-   Check if all question categories have at least one question
-   Ensure the selected number of questions doesn't exceed available questions

Debugging:

-   Open browser developer tools (F12 in most browsers)
-   Check the console for any error messages
-   Set breakpoints in `src/app/app.ts` to step through the quiz initialization process

Performance Optimization:

-   Monitor the time taken to load questions and render the UI
-   Consider lazy-loading question data for large question sets

## Data Flow

The quiz application follows a straightforward data flow:

1. User selects quiz category and number of questions
2. Application loads questions from the selected category
3. Questions are randomly selected and presented one at a time
4. User selects an answer, triggering the answer handling logic
5. Application provides feedback and moves to the next question
6. After all questions are answered, the final score is calculated and displayed

```
[User Input] -> [Question Selection] -> [Question Display]
     ^                                         |
     |                                         v
[Score Display] <- [Answer Handling] <- [User Answer]
```

Note: The application uses a timer for each question, automatically progressing if the time limit is reached.

## Dependencies

This project uses the following main dependencies:

- TypeScript: A superset of JavaScript that adds static typing
- Vite: A fast and lightweight development server and build tool
- animate.css: A library for adding CSS animations to elements