// Get the username input element and start button element
let usernameInput = document.getElementById("username-input");
let startButton = document.getElementById("start-button");

// Add a click event listener to the start button
startButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the value of the username input
    let username = usernameInput.value;

    // Check if the username is not empty or only whitespace
    if (username.trim() !== "") {
        // Store the username in local storage
        localStorage.setItem("username", username);

        // Redirect the user to the questions page (quiz.html)
        window.location.href = "quiz.html";
    } else {
        // Display an alert message if the username is empty
        alert("Please enter a valid username.");
    }
});