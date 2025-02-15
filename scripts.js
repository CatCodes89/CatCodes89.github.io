// script.js

// Get elements
const spinnerText = document.getElementById('spinner-text');
const instructions = document.getElementById('instructions');

// Function to fade out "Click to Begin" text and show instructions
function startGame() {
    // Fade out the "Click to Begin" text
    spinnerText.style.opacity = 0;

    // After 1 second (fade duration), hide the spinner and show instructions
    setTimeout(() => {
        spinnerText.style.display = 'none'; // Hide the spinner text
        instructions.style.display = 'block'; // Show the instructions (dropdown)
        instructions.style.opacity = 1; // Ensure the instructions are visible
    }, 1000);
}

// Add event listener to "Click to Begin" text
spinnerText.addEventListener('click', startGame);
