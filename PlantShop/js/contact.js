// JavaScript to handle form submission 
document.querySelector("#contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get form values using querySelector
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    
    // Perform form validation 
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }
    
    alert("Thank you for reaching out! We will get back to you soon.");
    
    // Clear the form
    document.querySelector("#contactForm").reset();
});

document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
  });