const spinnerText = document.querySelector('#spinner-text');
const instructions = document.querySelector('#instructions');

// Function to fade out "Click to Begin" text and show instructions
function startGame() {
    console.log("Click to Begin clicked!");  // Debugging log to ensure the function is firing

    // Fade out the "Click to Begin" text smoothly
    spinnerText.style.transition = "opacity 1s ease-out"; // Add a smooth transition for the fade-out effect
    spinnerText.style.opacity = 0;

    // After 1 second (fade duration), hide the spinner and show instructions
    setTimeout(() => {
        spinnerText.style.display = 'none'; // Hide the spinner text
        instructions.style.display = 'block'; // Show the instructions (dropdown)
        instructions.style.opacity = 1; // Ensure the instructions are visible
    }, 1000); // Timeout duration to match the fade-out duration
}

// Add event listener to "Click to Begin" text
spinnerText.addEventListener('click', startGame);

// Ensure the script is executing by logging this in the console
console.log("Script loaded and ready!");
