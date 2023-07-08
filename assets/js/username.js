let usernameInput = document.getElementById("username-input");
let startButton = document.getElementById("start-button");

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