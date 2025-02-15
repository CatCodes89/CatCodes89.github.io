document.addEventListener('DOMContentLoaded', function () {
    const spinnerText = document.querySelector('#spinner-text');
    const questionContainer = document.querySelector('#question-container');
    const shakeButton = document.querySelector('#shake-button');
    const answerText = document.querySelector('#answer-text');
    const tryAgainButton = document.createElement('button');
    tryAgainButton.textContent = "Try again?";

    // List of random 8-ball answers
    const answers = [
        "Yes",
        "No",
        "Unlikely",
        "Fortune favors you",
        "Absolutely",
        "Not a chance",
        "Ask again later",
        "Definitely not",
        "I wouldn't count on it",
        "Outlook is good"
    ];

    // Function to fade out the "Click to Begin" text and show the question section
    function startGame() {
        console.log("Ask a question!");  // Debugging log

        // Fade out the "Click to Begin" text smoothly
        spinnerText.style.transition = "opacity 1s ease-out";
        spinnerText.style.opacity = 0;

        // After 1 second (fade duration), hide the spinner and show the question input
        setTimeout(() => {
            spinnerText.style.display = 'none';
            questionContainer.style.display = 'block';  // Show the question container
        }, 1000); // Timeout duration to match the fade-out
    }

    // Function to generate a random 8-ball answer
    function shake8Ball() {
        const questionInput = document.querySelector('#question-input').value;

        // Check if the question input is empty
        if (questionInput.trim() === "") {
            alert("Please type in a question before shaking the 8-Ball.");
            return;
        }

        // Get a random answer from the array
        const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
        answerText.textContent = randomAnswer;

        // Hide the input and the "Shake the 8-Ball" button
        document.querySelector('#question-input').style.display = 'none';
        shakeButton.style.display = 'none';

        // Show the answer and the "Try again?" button
        answerText.style.display = 'block';
        questionContainer.appendChild(tryAgainButton);  // Add the "Try again?" button
        tryAgainButton.style.display = 'block'; // Make it visible
    }

    // Function to restart the game
    function restartGame() {
        // Hide the "Try again?" button and reset the answer
        tryAgainButton.style.display = 'none';
        answerText.style.display = 'none';
        
        // Show the input and shake button again
        document.querySelector('#question-input').style.display = 'block';
        shakeButton.style.display = 'block';

        // Clear the previous question input
        document.querySelector('#question-input').value = '';

        // Show the "Click to Begin" text again
        questionContainer.style.display = 'none';
        spinnerText.style.display = 'block';
        spinnerText.style.opacity = 1;
    }

    // Add event listener to "Click to Begin" text
    spinnerText.addEventListener('click', startGame);

    // Add event listener to the "Shake the 8-Ball" button
    shakeButton.addEventListener('click', shake8Ball);

    // Add event listener to the "Try again?" button
    tryAgainButton.addEventListener('click', restartGame);

    console.log("Script loaded and ready!");
});
