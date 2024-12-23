// Array of questions grouped by category (25 questions each)

export const questions = [
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
    {
        category: 'entertainment',
        questions: [
            {
                question:
                    'Which actor played Iron Man in the Marvel Cinematic Universe?',
                options: [
                    'Chris Evans',
                    'Robert Downey Jr.',
                    'Chris Hemsworth',
                    'Mark Ruffalo',
                ],
                correctAnswer: 1,
            },
            {
                question: 'What is the highest-grossing film of all time?',
                options: [
                    'Avengers: Endgame',
                    'Avatar',
                    'Titanic',
                    'Star Wars: The Force Awakens',
                ],
                correctAnswer: 1,
            },
            {
                question: 'Which band released the album "Abbey Road"?',
                options: [
                    'The Rolling Stones',
                    'The Who',
                    'The Beatles',
                    'Led Zeppelin',
                ],
                correctAnswer: 2,
            },
            {
                question: 'Who won the Academy Award for Best Actor in 2020?',
                options: [
                    'Joaquin Phoenix',
                    'Leonardo DiCaprio',
                    'Adam Driver',
                    'Antonio Banderas',
                ],
                correctAnswer: 0,
            },
            {
                question:
                    'Which TV series features dragons and is based on books by George R.R. Martin?',
                options: [
                    'The Witcher',
                    'Lord of the Rings',
                    'Game of Thrones',
                    'The Last Kingdom',
                ],
                correctAnswer: 2,
            },
            {
                question: 'Who is known as the "King of Pop"?',
                options: [
                    'Elvis Presley',
                    'Prince',
                    'Michael Jackson',
                    'David Bowie',
                ],
                correctAnswer: 2,
            },
            {
                question: 'Which streaming service produced "Stranger Things"?',
                options: ['Amazon Prime', 'Hulu', 'Disney+', 'Netflix'],
                correctAnswer: 3,
            },
            {
                question: 'Who directed the film "Inception"?',
                options: [
                    'Christopher Nolan',
                    'Steven Spielberg',
                    'Martin Scorsese',
                    'Quentin Tarantino',
                ],
                correctAnswer: 0,
            },
            {
                question: 'Which artist painted the Mona Lisa?',
                options: [
                    'Vincent van Gogh',
                    'Pablo Picasso',
                    'Leonardo da Vinci',
                    'Michelangelo',
                ],
                correctAnswer: 2,
            },
            {
                question: "What was Disney's first full-length animated film?",
                options: [
                    'Pinocchio',
                    'Snow White and the Seven Dwarfs',
                    'Bambi',
                    'Fantasia',
                ],
                correctAnswer: 1,
            },
            {
                question: 'Which band performed "Bohemian Rhapsody"?',
                options: [
                    'The Rolling Stones',
                    'Led Zeppelin',
                    'Pink Floyd',
                    'Queen',
                ],
                correctAnswer: 3,
            },
            {
                question: 'Who played Harry Potter in the film series?',
                options: [
                    'Daniel Radcliffe',
                    'Rupert Grint',
                    'Tom Felton',
                    'Matthew Lewis',
                ],
                correctAnswer: 0,
            },
            {
                question:
                    'Which video game franchise features a character named Mario?',
                options: ['Sonic', 'Nintendo', 'PlayStation', 'Xbox'],
                correctAnswer: 1,
            },
            {
                question: 'Who is the creator of Star Wars?',
                options: [
                    'Steven Spielberg',
                    'J.J. Abrams',
                    'George Lucas',
                    'James Cameron',
                ],
                correctAnswer: 2,
            },
            {
                question:
                    'Which actress won an Oscar for her role in "La La Land"?',
                options: [
                    'Emma Watson',
                    'Emma Stone',
                    'Jennifer Lawrence',
                    'Natalie Portman',
                ],
                correctAnswer: 1,
            },
        ],
    },
    {
        category: 'mathematics',
        questions: [
            {
                question: 'What is the value of π (pi) to two decimal places?',
                options: ['3.14', '3.16', '3.12', '3.18'],
                correctAnswer: 0,
            },
            {
                question: 'Which of these numbers is a prime number?',
                options: ['15', '21', '23', '25'],
                correctAnswer: 2,
            },
            {
                question: 'What is the square root of 144?',
                options: ['10', '11', '12', '13'],
                correctAnswer: 2,
            },
            {
                question: 'What is 7 x 8?',
                options: ['54', '56', '58', '60'],
                correctAnswer: 1,
            },
            {
                question: 'Which number is not a factor of 24?',
                options: ['2', '3', '5', '8'],
                correctAnswer: 2,
            },
            {
                question:
                    'What is the next number in the sequence: 2, 4, 8, 16, ...?',
                options: ['24', '30', '32', '36'],
                correctAnswer: 2,
            },
            {
                question: 'What is the sum of angles in a triangle?',
                options: ['90°', '180°', '270°', '360°'],
                correctAnswer: 1,
            },
            {
                question: 'What is 25% of 80?',
                options: ['15', '20', '25', '30'],
                correctAnswer: 1,
            },
            {
                question: 'Which of these fractions is the largest?',
                options: ['1/2', '2/5', '3/4', '1/3'],
                correctAnswer: 2,
            },
            {
                question:
                    'What is the area of a square with sides of length 5?',
                options: ['20', '25', '30', '35'],
                correctAnswer: 1,
            },
            {
                question: 'What is 3 squared?',
                options: ['6', '8', '9', '12'],
                correctAnswer: 2,
            },
            {
                question: 'What is the least common multiple of 4 and 6?',
                options: ['8', '10', '12', '14'],
                correctAnswer: 2,
            },
            {
                question: 'What is the value of x in the equation 2x + 4 = 10?',
                options: ['2', '3', '4', '5'],
                correctAnswer: 1,
            },
            {
                question: 'How many sides does a hexagon have?',
                options: ['5', '6', '7', '8'],
                correctAnswer: 1,
            },
            {
                question:
                    'What is the perimeter of a rectangle with length 5 and width 3?',
                options: ['12', '14', '16', '18'],
                correctAnswer: 2,
            },
        ],
    },
];
