const questions = [
    {
        question: "Who is the most decorated Olympian of all time, with the highest number of Olympic ",
        choices: [
            { text: "Usain Bolt", correct: false },
            { text: "Michael Phelps", correct: true },
            { text: "Simone Biles", correct: false },
            { text: "Carl Lewis", correct: false },
        ]
    },

    {
        question: "Which football club won the UEFA Champions League in 2021?",
        choices: [
            { text: "Bayern Munich", correct: false },
            { text: "Manchester City", correct: false },
            { text: "Real Madrid", correct: false },
            { text: "Chelsea", correct: true },
        ]
    },

    {
        question: "In which sport do competitors try to hit a shuttlecock over a net using rackets?",
        choices: [
            { text: "Badminton", correct: true },
            { text: "Squash", correct: false },
            { text: "Table Tennis", correct: false },
            { text: "Tennis", correct: false },
        ],
    },

    {
        question: "Which athlete is known as 'The Greatest' in the sport of boxing?",
        choices: [
            { text: "Muhammad Ali", correct: true },
            { text: "Mike Tyson", correct: false },
            { text: "Sugar Ray Robinson", correct: false },
            { text: "Floyd Mayweather Jr.", correct: false },
        ],
    },
    {
        question: "Which country has won the most gold medals in the history of the Winter Olympics?",
        correctAnswer: "Norway",
        choices: [
            { text: "United States", correct: false },
            { text: "Norway", correct: true },
            { text: "Russia", correct: false },
            { text: "Germany", correct: false },
        ],
    },
    {
        question: "In which city did the 2016 Summer Olympics take place?",
        choices: [
            { text: "London", correct: false },
            { text: "Rio de Janeiro", correct: true },
            { text: "Beijing", correct: false },
            { text: "Sydney", correct: false },
        ],
    },
    {
        question: "Which golfer has the most major championship wins in history?",
        choices: [
            { text: "Tiger Woods", correct: false },
            { text: "Phil Mickelson", correct: false },
            { text: "Arnold Palmer", correct: false },
            { text: "Jack Nicklaus", correct: true },
        ],
    },
    {
        question: "Which sport is associated with the Stanley Cup?",
        choices: [
            { text: "American Football", correct: false },
            { text: "Phil Mickelson", correct: false },
            { text: "Ice Hockey", correct: true },
            { text: "Baseball", correct: false },
        ],
    },
    {
        question: "Which country has won the most Women's World Cup titles in football (soccer)?",
        choices: [
            { text: "Brazil", correct: false },
            { text: "United States", correct: true },
            { text: "Germany", correct: false },
            { text: "Norway", correct: false },
        ],
    },
    {
        question: "Who won the NBA MVP (Most Valuable Player) award for the 2020-2021 season?",
        choices: [
            { text: "LeBron James", correct: false },
            { text: "Giannis Antetokounmpo", correct: true },
            { text: "Kevin Durant", correct: false },
            { text: "Nikola Jokić", correct: true },
        ]
    }
];

const questionElement = document.getElementById("question");
const choiceButton = document.getElementById("choice-buttons");
const nextButton = document.getElementById("next-button");


let usernameInput = document.getElementById("username-input");
let startButton = document.getElementById("start-button");

let currentQuestionIndex = 0; // Track the current question
let score = 0;

startButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission

    let username = usernameInput.value;
    if (username.trim() !== "") {
        // Store the username in local storage
        localStorage.setItem("username", username);

        // Redirect the user to the questions page
        window.location.href = "quiz.html";
    } else {

        // Display an alert message if the username is empty
        alert("Please enter a valid username.");
    }
});

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerHTML = choice.text;
        button.classList.add("btn");
        choiceButton.appendChild(button);

    });
}

startQuiz();

