document.addEventListener("DOMContentLoaded", () => {
    const revealButton = document.querySelector("#reveal-button");
    const homeButton = document.querySelector("#home-button");
    const intro = document.querySelector("#intro");
    const content = document.querySelector("#content");
    const footer = document.querySelector("#footer");
    const orderForm = document.querySelector("#order-form");
    const orderSummary = document.querySelector("#order-summary");
    const resetOrderButton = document.querySelector("#reset-order");
    const orderPageBackground = document.querySelector("#orderPageBackground");

    // Show the main content and hide intro image when the 'Enter the Coffee Shop' button is clicked
    revealButton.addEventListener("click", () => {
        intro.style.display = "none";  
        content.style.display = "block"; 
        footer.style.display = "block"; 
        revealButton.style.display = "none"; 
        homeButton.style.display = "inline-block"; 

        // Show the order page background with opacity
        orderPageBackground.classList.add("visible");
    });

    // Handle the order form submission
    orderForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const coffee = document.querySelector("#coffee-type").value;
        const size = document.querySelector("#coffee-size").value;
        const extras = [];
        if (document.querySelector("#sugar").checked) extras.push("Sugar");
        if (document.querySelector("#milk").checked) extras.push("Milk");

        const waitTime = Math.floor(Math.random() * 11) + 5; // Random time between 5-15 minutes
        const orderText = `You ordered a ${size} ${coffee} with ${extras.join(", ") || "no extras"}.\nEstimated wait time: ${waitTime} minutes.`;

        // Show the confirmation dialog with the order summary
        if (confirm(`Confirm your order:\n${orderText}`)) {
            orderSummary.innerText = orderText;
        } else {
            orderSummary.innerText = "Order canceled.";
        }
    });

    // Reset Order Button
    resetOrderButton.addEventListener("click", () => {
        orderForm.reset(); // Reset the form fields
        orderSummary.innerText = ""; // Clear the order summary
    });

    // Handle the 'Return to Home' button click
    homeButton.addEventListener("click", () => {
        intro.style.display = "flex";  
        content.style.display = "none"; 
        orderPageBackground.classList.remove("visible");
        revealButton.style.display = "inline-block"; 
        homeButton.style.display = "none"; 
    });
});