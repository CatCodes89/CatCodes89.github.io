document.addEventListener('DOMContentLoaded', function () {
    const spinnerText = document.querySelector('#spinner-text');
    const questionContainer = document.querySelector('#question-container');
    const shakeButton = document.querySelector('#shake-button');
    const answerText = document.querySelector('#answer-text');

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

        // After 1 second (fade duration), hide the spinner text and show the question input
        setTimeout(() => {
            spinnerText.style.display = 'none';
            questionContainer.style.display = 'block';  // Show the question container
        }, 1000); // Timeout duration to match the fade-out
    }

    // Function to generate a random 8-ball answer
    function shake8Ball() {
        // Get a random answer from the array
        const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
        answerText.textContent = randomAnswer;
    }

    // Add event listener to "Click to Begin" text
    spinnerText.addEventListener('click', startGame);

    // Add event listener to the "Shake the 8-Ball" button
    shakeButton.addEventListener('click', shake8Ball);

    console.log("Script loaded and ready!");
});
