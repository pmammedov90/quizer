let usernameInput = document.getElementById("username-input");
let startButton = document.getElementById("start-button");

startButton.addEventListener("click", function () {
    let username = usernameInput.value;
    if (username.trim() !== "") {
        localStorage.setItem("username", username);
        window.location.href = "quiz.html";
    } else {
        alert("Please enter a valid username.");
    }
});

