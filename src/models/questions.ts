// Array of questions grouped by category (25 questions each)

import { Category } from '../types/quiz.model';

export const questions: Category[] = [
    {
        category: 'programming',
        questions: [
            {
                question: 'What does HTML stand for?',
                options: [
                    'Hyper Text Pre Processor',
                    'Hyper Text Markup Language',
                    'Hyper Text Multiple Language',
                    'Hyper Tool Multi Language',
                ],
                correctAnswer: 1,
            },
            {
                question:
                    'Which of the following is a correct way to declare a variable in JavaScript?',
                options: [
                    'var x = 10;',
                    'variable x = 10;',
                    'int x = 10;',
                    'let 10 = x;',
                ],
                correctAnswer: 0,
            },
            {
                question: 'How do you write comment in Python?',
                options: [
                    '// This is a comment',
                    '# This is a comment',
                    '/* This is a comment */',
                    '<!-- This is a comment -->',
                ],
                correctAnswer: 1,
            },
            {
                question: 'What does CSS stand for?',
                options: [
                    'Cascading Style Sheets',
                    'Colorful Style Sheets',
                    'Computer Style Sheets',
                    'Cascading Simple Sheets',
                ],
                correctAnswer: 0,
            },
            {
                question: 'In JavaScript, how do you create a function?',
                options: [
                    'create function myFunction()',
                    'def function myFunction()',
                    'func myFunction()',
                    'function myFunction()',
                ],
                correctAnswer: 3,
            },
            {
                question: "What does the 'typeof' operator do in JavaScript?",
                options: [
                    'Checks the type of a variable',
                    'Declares a variable',
                    'Assigns a value to a variable',
                    'Converts a variable to another type',
                ],
                correctAnswer: 0,
            },
            {
                question: 'In C, how do you define a function?',
                options: [
                    'function myFunction()',
                    'def myFunction()',
                    'void myFunction()',
                    'func myFunction()',
                ],
                correctAnswer: 2,
            },
            {
                question:
                    'Which of the following is a characteristic of Python?',
                options: [
                    'Compiled language',
                    'Dynamic typing',
                    'Low-level language',
                    'Static typing',
                ],
                correctAnswer: 3,
            },
            {
                question: 'Which language is used for Android development?',
                options: ['Python', 'Java', 'JavaScript', 'C++'],
                correctAnswer: 1,
            },
            {
                question:
                    "What is the purpose of the 'forEach()' method in JavaScript?",
                options: [
                    'Removes duplicate elements from an array',
                    'Filters elements in an array',
                    'Sorts an array',
                    'Iterates through each element in an array',
                ],
                correctAnswer: 3,
            },
            {
                question: "What does the 'return' keyword do in a function?",
                options: [
                    'Ends the function and returns a value',
                    'Continues the function',
                    'Exits the function without value',
                    'Ends the program execution',
                ],
                correctAnswer: 0,
            },
            {
                question:
                    'Which of the following is NOT a semantic HTML element?',
                options: ['<header>', '<footer>', '<div>', '<article>'],
                correctAnswer: 2,
            },
            {
                question:
                    "What is the primary purpose of a 'for' loop in programming?",
                options: [
                    'Repeat code for a specified number of times',
                    'Repeat code until a condition is true',
                    'Define a function',
                    'Evaluate conditions in the loop',
                ],
                correctAnswer: 0,
            },
            {
                question:
                    'Which data structure is ideal for LIFO (Last In First Out)?',
                options: ['Queue', 'Stack', 'Linked list', 'Array'],
                correctAnswer: 1,
            },
            {
                question:
                    'Which command is used in Git to store changes in the repository?',
                options: ['git commit', 'git push', 'git pull', 'git add'],
                correctAnswer: 0,
            },
            {
                question: "What does the 'map()' function do in JavaScript?",
                options: [
                    'Sorts an array',
                    'Filters out items',
                    'Creates a new array',
                    'Modifies the original array',
                ],
                correctAnswer: 2,
            },
            {
                question: 'What is an IDE?',
                options: [
                    'An Integrated Development Environment',
                    'A function for code execution',
                    'An interpreter',
                    'An input method for writing code',
                ],
                correctAnswer: 0,
            },
            {
                question:
                    'Which of the following is a feature of object-oriented programming?',
                options: [
                    'Encapsulation',
                    'Modularity',
                    'Recursion',
                    'Memory Management',
                ],
                correctAnswer: 0,
            },
            {
                question: 'What does SQL stand for?',
                options: [
                    'Simple Question Language',
                    'Systematic Query Language',
                    'Standard Question Language',
                    'Structured Query Language',
                ],
                correctAnswer: 3,
            },
            {
                question:
                    'Which of these is an example of a non-relational database?',
                options: ['MongoDB', 'MySQL', 'PostgreSQL', 'Oracle'],
                correctAnswer: 0,
            },
            {
                question: 'How do you write comment in CSS?',
                options: [
                    '// This is a comment',
                    '/* This is a comment */',
                    '# This is a comment',
                    '<!-- This is a comment -->',
                ],
                correctAnswer: 1,
            },
            {
                question:
                    'Which of the following algorithms is used to sort an array by comparing elements?',
                options: [
                    'Bubble sort',
                    'Insertion sort',
                    'Quick sort',
                    'Merge sort',
                ],
                correctAnswer: 0,
            },
            {
                question: "What does the 'finally' block in Java do?",
                options: [
                    'Handles all exceptions',
                    'Attempts to handle runtime exceptions',
                    'Executes code after try-catch',
                    'Defines execution start point',
                ],
                correctAnswer: 2,
            },
            {
                question:
                    'Which data structure is best for searching elements quickly?',
                options: [
                    'Binary search tree',
                    'Array',
                    'Linked list',
                    'Queue',
                ],
                correctAnswer: 0,
            },
            {
                question:
                    'What is the correct syntax for a JavaScript if statement?',
                options: [
                    'if (condition) {}',
                    'if condition {}',
                    'if {} else',
                    'if {condition}',
                ],
                correctAnswer: 0,
            },
        ],
    },

    {
        category: 'geography',
        questions: [
            {
                question: 'Which is the longest river in the world?',
                options: [
                    'Amazon River',
                    'Nile River',
                    'Yangtze River',
                    'Mississippi River',
                ],
                correctAnswer: 1,
            },
            {
                question:
                    'Which country is known as the Land of the Rising Sun?',
                options: ['China', 'South Korea', 'Japan', 'Thailand'],
                correctAnswer: 2,
            },
            {
                question: 'What is the largest ocean in the world?',
                options: [
                    'Atlantic Ocean',
                    'Indian Ocean',
                    'Arctic Ocean',
                    'Pacific Ocean',
                ],
                correctAnswer: 3,
            },
            {
                question:
                    'Which country has the largest population in the world?',
                options: ['India', 'China', 'United States', 'Indonesia'],
                correctAnswer: 1,
            },
            {
                question: 'Which country is known for the Great Barrier Reef?',
                options: [
                    'Australia',
                    'United States',
                    'South Africa',
                    'New Zealand',
                ],
                correctAnswer: 0,
            },
            {
                question: 'Which is the smallest country in the world?',
                options: [
                    'Monaco',
                    'Liechtenstein',
                    'Vatican City',
                    'San Marino',
                ],
                correctAnswer: 2,
            },
            {
                question: 'Which is the tallest mountain in the world?',
                options: [
                    'K2',
                    'Mount Kilimanjaro',
                    'Mount Everest',
                    'Mount Fuji',
                ],
                correctAnswer: 2,
            },
            {
                question: 'What is the capital of Canada?',
                options: ['Ottawa', 'Toronto', 'Vancouver', 'Montreal'],
                correctAnswer: 0,
            },
            {
                question:
                    'Which desert is the largest hot desert in the world?',
                options: [
                    'Gobi Desert',
                    'Atacama Desert',
                    'Sahara Desert',
                    'Karakum Desert',
                ],
                correctAnswer: 2,
            },
            {
                question:
                    'Which country is known as the Land of the Midnight Sun?',
                options: ['Sweden', 'Finland', 'Norway', 'Denmark'],
                correctAnswer: 2,
            },
            {
                question: 'What is the longest mountain range in the world?',
                options: ['Himalayas', 'Rocky Mountains', 'Andes', 'Alps'],
                correctAnswer: 2,
            },
            {
                question: 'Which river flows through Egypt?',
                options: [
                    'Amazon River',
                    'Yangtze River',
                    'Nile River',
                    'Ganges River',
                ],
                correctAnswer: 2,
            },
            {
                question: 'Which is the largest island in the world?',
                options: ['Greenland', 'New Guinea', 'Borneo', 'Madagascar'],
                correctAnswer: 0,
            },
            {
                question: 'What is the capital of Japan?',
                options: ['Beijing', 'Seoul', 'Tokyo', 'Hong Kong'],
                correctAnswer: 2,
            },
            {
                question: 'Which country has the most time zones?',
                options: ['United States', 'Russia', 'Canada', 'Australia'],
                correctAnswer: 1,
            },
            {
                question: 'Which country is known for the Eiffel Tower?',
                options: ['Germany', 'Italy', 'Spain', 'France'],
                correctAnswer: 3,
            },
            {
                question: 'Which is the most populous city in the world?',
                options: ['Tokyo', 'Shanghai', 'New York City', 'Delhi'],
                correctAnswer: 0,
            },
        ],
    },
];
