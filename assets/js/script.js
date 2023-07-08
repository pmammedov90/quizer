// Array of questions and choices
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
    // ... rest of the questions and choices
];

// Get the necessary DOM elements
const questionElement = document.getElementById("question");
const choiceButtons = document.getElementById("choice-buttons");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0; // Track the current question index
let score = 0;

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// Function to display a question and its choices
function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerHTML = choice.text;
        button.classList.add("btn");
        choiceButtons.appendChild(button);

        if (choice.correct) {
            button.dataset.correct = choice.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Function to reset the state of the quiz
function resetState() {
    nextButton.style.display = "none";
    while (choiceButtons.firstChild) {
        choiceButtons.removeChild(choiceButtons.firstChild);
    }
}

// Function to handle the selection of an answer
function selectAnswer(element) {
    const selectedButton = element.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }
    Array.from(choiceButtons.children).forEach(choice => {
        if (choice.dataset.correct === "true") {
            choice.classList.add("correct");
        }
        choice.disabled = true;
    });
    nextButton.style.display = "block";
}

// Function to show the final score
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Start Again";
    nextButton.style.display = "block";
}

// Function to handle the next button click
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Event listener for the next button
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

// Start the quiz
startQuiz();