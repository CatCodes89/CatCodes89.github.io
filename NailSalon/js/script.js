document.addEventListener("DOMContentLoaded", function () {
    // Review carousel functionality
    const reviews = document.querySelectorAll(".review");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentIndex = 0;

    function showReview(index) {
        reviews.forEach((review, i) => review.classList.toggle("active", i === index));
    }

    showReview(currentIndex);

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        showReview(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % reviews.length;
        showReview(currentIndex);
    });

    // Modal functionality for booking
    const bookingModal = document.querySelector("#bookingModal");
    const bookingForm = document.querySelector("#bookingForm");
    const bookButton = document.querySelector(".book-btn");
    const closeButton = document.querySelector(".close-btn");

    // Show and hide modal
    const toggleBookingForm = (display) => {
        bookingModal.style.display = display ? "flex" : "none";
    };

    bookButton.addEventListener("click", () => toggleBookingForm(true));
    closeButton.addEventListener("click", () => toggleBookingForm(false));

    // Close modal if clicked outside
    window.addEventListener("click", (event) => {
        if (event.target === bookingModal) {
            toggleBookingForm(false);
        }
    });

    // Handle booking form submission
    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const service = document.querySelector(".service-select").value;
        const date = document.querySelector(".date-input").value;
        const time = document.querySelector(".time-input").value;

        if (service && date && time) {
            alert(`Your appointment for ${service} is booked on ${date} at ${time}.`);
            toggleBookingForm(false);
        } else {
            alert("Please fill in all the details.");
        }
    });

    // Contact form functionality
    const contactForm = document.querySelector("#contactForm");
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you for reaching out! We'll get back to you soon.");
    });

    // Placeholder for booking feature
    window.bookAppointment = () => {
        alert("Booking feature coming soon!");
    };
});