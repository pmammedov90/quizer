let questions = [
    {
        question_number: 1,
        question: "Who is the most decorated Olympian of all time, with the highest number of Olympic ",
        choices: ["Usain Bolt", "Michael Phelps", "Simone Biles", "Carl Lewis"],
        correctAnswer: 1 // Index 1 corresponds to the correct choice "Michael Phelps"
    },
    {
        question_number: 2,
        question: "Which football club won the UEFA Champions League in 2021?",
        choices: ["Bayern Munich", "Manchester City", "Real Madrid", "Chelsea"],
        correctAnswer: 3 // Index 3 corresponds to the correct choice "Real Madrid"
    },
    {
        question_number: 3,
        question: "In which sport do competitors try to hit a shuttlecock over a net using rackets?",
        choices: ["Badminton", "Squash", "Table Tennis", "Tennis"],
        correctAnswer: 0 // Index 0 corresponds to the correct choice "Badminton"
    },
    {
        question_number: 4,
        question: "Which athlete is known as 'The Greatest' in the sport of boxing?",
        choices: ["Muhammad Ali", "Mike Tyson", "Sugar Ray Robinson", "Floyd Mayweather Jr."],
        correctAnswer: 0 // Index 0 corresponds to the correct choice "Muhammad Ali"
    },
    {
        question_number: 5,
        question: "Which country has won the most gold medals in the history of the Winter Olympics?",
        choices: ["United States", "Norway", "Russia", "Germany"],
        correctAnswer: 1 // Index 1 corresponds to the correct choice "Norway"
    },
    {
        question_number: 6,
        question: "In which city did the 2016 Summer Olympics take place?",
        choices: ["Rio de Janeiro", "London", "Beijing", "Sydney"],
        correctAnswer: 0 // Index 0 corresponds to the correct choice "Rio de Janeiro"
    },
    {
        question_number: 7,
        question: "Which golfer has the most major championship wins in history?",
        choices: ["Tiger Woods", "Jack Nicklaus", "Arnold Palmer", "Phil Mickelson"],
        correctAnswer: 1 // Index 1 corresponds to the correct choice "Jack Nicklaus"
    },
    {
        question_number: 8,
        question: "Which sport is associated with the Stanley Cup?",
        choices: ["Ice Hockey", "Basketball", "American Football", "Baseball"],
        correctAnswer: 0 // Index 0 corresponds to the correct choice "Ice Hockey"
    },
    {
        question_number: 9,
        question: "Which country has won the most Women's World Cup titles in football (soccer)?",
        choices: ["United States", "Brazil", "Germany", "Norway"],
        correctAnswer: 0 // Index 0 corresponds to the correct choice "United States"
    },
    {
        question_number: 10,
        question: "Who won the NBA MVP (Most Valuable Player) award for the 2020-2021 season?",
        choices: ["LeBron James", "Giannis Antetokounmpo", "Kevin Durant", "Nikola Jokić"],
        correctAnswer: 3 // Index 3 corresponds to the correct choice "Nikola Jokić"
    }
];

// Track the current question, correct score, incorrect score, and username
let currentQuestion = 0;
let correctScore = 0;
let incorrectScore = 0;
let username;


// Get the necessary HTML elements
let questionElement = document.getElementById('question');
let choicesElement = document.getElementById('choices');
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');
let submitBtn = document.getElementById('submitBtn');
let scoreElement = document.getElementById('score');
let usernameInput = document.getElementById('usernameInput');
let startBtn = document.getElementById('startBtn');


// Event listener for the start button
startBtn.addEventListener("click", function () {
    let usernameInput = document.getElementById('usernameInput');
    let username = usernameInput.value;

    if (username.trim() !== "") {
        localStorage.setItem("username", username); // Store the username in local storage
        window.location.href = "../questions.html"; // Redirect to the questions page
    } else {
        alert("Please enter a valid username.");
    }
});



// Function to display the current question and its choices
function showQuestion() {

    let question = questions[currentQuestion];
    questionElement.textContent = question.question;

    // Generate buttons for each choise
    choicesElement.innerHTML = "";

    for (let i = 0; i < question.choices.length; i++) {
        let choice = document.createElement("button");
        choice.textContent = question.choices[i];
        choice.value = i;
        choice.addEventListener("click", checkAnswer);
        choicesElement.appendChild(choice);
    }

    // Enable or disable the back button based on the current question
    if (currentQuestion === 0) {
        backBtn.disabled = true; // Disable the back button on the first question  
    } else {
        backBtn.disabled = false; // Enable the back button on subsequent questions
    }

    // Show or hide the next and submit buttons based on the current question
    if (currentQuestion === questions.length - 1) {
        nextBtn.style.display = "none"; // Hide the next button on the last question
        submitBtn.style.display = "block"; // Show the submit button on the last question
    } else {
        nextBtn.style.display = "block"; // Show the next button on all other questions
        submitBtn.style.display = "none"; // Hide the submit button on all other questions
    }
}

// Function to check the selected answer and update the scores
function checkAnswer() {
    let selectedChoice = parseInt(this.value);

    // Check if the selected choice is the correct answer
    if (selectedChoice === questions[currentQuestion].correctAnswer) {
        correctScore++; // Increment the correct score if the answer is correct
    } else {
        incorrectScore++; // Increment the incorrect score ifthe answer is incorrect
    }
    currentQuestion++; // Move to the next question
    showQuestion(); // Display the next question
}

// Function to display the final score
function showScore() {
    questionElement.style.display = "none";
    choicesElement.style.display = "none";
    backBtn.style.display = "none";
    nextBtn.style.display = "none";
    submitBtn.style.display = "none";
    scoreElement.innerHTML = "Username: " + username + "<br> Your score: <br> Correct answers: " + correctScore + " out of " + questions.length + "<br> Incorrect answers: " + incorrectScore;
    scoreElement.style.display = "block";
}

// Event listener for the back button
backBtn.addEventListener("click", function () {
    currentQuestion--; // Move back to the previous question
    showQuestion(); // Display the previous question
});

// Event listener for the next button
nextBtn.addEventListener("click", function () {
    currentQuestion++; // Move to the next question
    showQuestion(); // Display the next question
});

// Event listener for the submit button
submitBtn.addEventListener("click", function () {
    showScore(); // Show the final score
});

// Initialize the quiz
showQuestion(); // Start displaying the questions