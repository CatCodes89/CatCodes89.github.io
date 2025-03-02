let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const videoElement = document.querySelector('.hero-video'); // Target the video
let autoSlideInterval;
let isTransitioning = false; // Track if a transition is in progress

// Show the selected slide
function showSlide(index) {
  // Ensure the index is within bounds
  slideIndex = Math.max(0, Math.min(index, totalSlides - 1));

  // Hide all slides
  slides.forEach(slide => slide.style.opacity = 0);

  // Show the selected slide
  slides[slideIndex].style.opacity = 1;

  // Handle video playback for the last slide
  if (slideIndex === totalSlides - 1) {
    if (videoElement) {
      videoElement.currentTime = 0;
      videoElement.play();
    }
    clearInterval(autoSlideInterval); // Stop auto-sliding when at the last slide
  } else if (videoElement) {
    videoElement.pause(); // Pause video if not on the last slide
  }
}

// Move to the next or previous slide
function moveSlide(direction) {
  if (isTransitioning) return; // Prevent moving while transitioning

  isTransitioning = true; // Set transition in progress

  // Stop the auto-slide when user manually clicks next or prev
  clearInterval(autoSlideInterval);

  // Calculate the new slide index
  slideIndex += direction;

  // Loop back to the first slide if we are at the last slide
  if (slideIndex >= totalSlides) {
    slideIndex = 0;  // Go to the first slide
  }

  // Loop back to the last slide if we are at the first slide
  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;  // Go to the last slide
  }

  showSlide(slideIndex);

  // Restart auto-slide if not on the last slide
  if (slideIndex < totalSlides - 1) {
    startAutoSlide();
  }

  // Allow for the transition to complete before enabling further navigation
  setTimeout(() => {
    isTransitioning = false;
  }, 1000); // Adjust time if needed based on slide transition duration
}

// Initialize the carousel
showSlide(slideIndex);

// Auto-slide every 4 seconds until the last slide
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    if (slideIndex < totalSlides - 1) {
      moveSlide(1); // Move to the next slide
    } else {
      clearInterval(autoSlideInterval); // Stop auto-sliding once the last slide is reached
    }
  }, 4000); // Change slide every 4 seconds
}

// Start auto-slide if not on the last slide
if (slideIndex < totalSlides - 1) {
  startAutoSlide();
}

// Event listeners for navigation buttons
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));