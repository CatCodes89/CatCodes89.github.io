let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const videoElement = document.querySelector('.hero-video'); // Target the video
let autoSlideInterval;
let isTransitioning = false; // Prevents spam clicking

// Show the selected slide
function showSlide(index) {
  slideIndex = Math.max(0, Math.min(index, totalSlides - 1));

  // Hide all slides
  slides.forEach((slide, i) => {
    slide.style.opacity = i === slideIndex ? 1 : 0;
  });

  // Handle video playback only on the last slide
  if (slideIndex === totalSlides - 1) {
    if (videoElement) {
      videoElement.currentTime = 0;
      videoElement.play().catch(error => console.error("Autoplay prevented:", error));
    }
    clearInterval(autoSlideInterval); // Stop auto-sliding on last slide
  } else if (videoElement) {
    videoElement.pause();
  }
}

// Move to the next or previous slide
function moveSlide(direction) {
  if (isTransitioning) return; // Prevent moving while transitioning

  isTransitioning = true;

  // Stop the auto-slide when user manually navigates
  clearInterval(autoSlideInterval);

  // Calculate new slide index
  slideIndex += direction;

  // Looping behavior
  if (slideIndex >= totalSlides) {
    slideIndex = 0;  // Go to the first slide
  } else if (slideIndex < 0) {
    slideIndex = totalSlides - 1;  // Go to the last slide
  }

  showSlide(slideIndex);

  // Restart auto-slide if not on the last slide
  if (slideIndex < totalSlides - 1) {
    startAutoSlide();
  }

  setTimeout(() => {
    isTransitioning = false;
  }, 1000); // Matches CSS transition duration
}

// Initialize the carousel
showSlide(slideIndex);

// Auto-slide function
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    if (slideIndex < totalSlides - 1) {
      moveSlide(1);
    } else {
      clearInterval(autoSlideInterval);
    }
  }, 4000);
}

// Start auto-slide unless on last slide
if (slideIndex < totalSlides - 1) {
  startAutoSlide();
}

// Event listeners for navigation buttons
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));
