document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;
  const videoElement = document.querySelector('.hero-video');
  const overlayContent = document.querySelector('.hero-overlay-content'); // Select overlay content
  let autoSlideInterval;
  let isTransitioning = false;

  const dotsContainer = document.querySelector(".dots-container");

  // Create dots dynamically
  slides.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.addEventListener("click", () => {
          clearInterval(autoSlideInterval); // Stop auto-slide when manually navigating
          showSlide(i);
          if (slideIndex < totalSlides - 1) startAutoSlide(); // Restart auto-slide if not on the last slide
      });
      dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  // Show the selected slide
  function showSlide(index) {
      slideIndex = Math.max(0, Math.min(index, totalSlides - 1));

      slides.forEach((slide, i) => {
          slide.classList.toggle("active", i === slideIndex);
          slide.setAttribute("aria-hidden", i === slideIndex ? "false" : "true");
      });

      // Update active dot
      dots.forEach((dot, i) => {
          dot.classList.toggle("active", i === slideIndex);
      });

      // Handle video playback for the last slide
      if (slideIndex === totalSlides - 1) {
          if (videoElement) {
              videoElement.currentTime = 0;
              videoElement.play();
          }
          clearInterval(autoSlideInterval);

          // Ensure overlay content is visible on the last slide with fade-in effect
          if (overlayContent) {
              overlayContent.style.opacity = "1";
              overlayContent.style.visibility = "visible";
              overlayContent.style.display = "flex"; // Ensure it's visible
          }
      } else {
          if (videoElement) {
              videoElement.pause();
          }

          // Hide overlay content on other slides with fade-out effect
          if (overlayContent) {
              overlayContent.style.opacity = "0";
              overlayContent.style.visibility = "hidden";
              setTimeout(() => {
                  overlayContent.style.display = "none";
              }, 500);
          }
      }
  }

  // Move to the next or previous slide
  function moveSlide(direction) {
      if (isTransitioning) return;
      isTransitioning = true;

      clearInterval(autoSlideInterval);

      slideIndex += direction;

      if (slideIndex >= totalSlides) {
          slideIndex = 0;
      } else if (slideIndex < 0) {
          slideIndex = totalSlides - 1;
      }

      showSlide(slideIndex);

      if (slideIndex < totalSlides - 1) {
          startAutoSlide();
      }

      setTimeout(() => {
          isTransitioning = false;
      }, 1000);
  }

  // Initialize the carousel
  showSlide(slideIndex);

  // Auto-slide every 4 seconds until the last slide
  function startAutoSlide() {
      autoSlideInterval = setInterval(() => {
          if (slideIndex < totalSlides - 1) {
              moveSlide(1);
          } else {
              clearInterval(autoSlideInterval);
          }
      }, 4000);
  }

  if (slideIndex < totalSlides - 1) {
      startAutoSlide();
  }

  // Event listeners for navigation buttons
  document.querySelector('.prev').addEventListener('click', () => {
      clearInterval(autoSlideInterval);
      moveSlide(-1);
      if (slideIndex < totalSlides - 1) startAutoSlide();
  });

  document.querySelector('.next').addEventListener('click', () => {
      clearInterval(autoSlideInterval);
      moveSlide(1);
      if (slideIndex < totalSlides - 1) startAutoSlide();
  });

  // Handling responsive changes for mobile and tablet screens
  function adjustCarouselForDevice() {
      const viewportWidth = window.innerWidth;

      if (viewportWidth <= 768) {
          // For smaller screens, make the carousel height smaller
          document.querySelector('.carousel').style.height = "80vh";
          // Hide navigation arrows on mobile
          document.querySelector('.prev').style.display = 'none';
          document.querySelector('.next').style.display = 'none';
      } else if (viewportWidth <= 1024) {
          // For tablets, adjust height and arrow visibility
          document.querySelector('.carousel').style.height = "90vh";
          document.querySelector('.prev').style.display = 'block';
          document.querySelector('.next').style.display = 'block';
      } else {
          // For larger screens, keep default height and arrows visible
          document.querySelector('.carousel').style.height = "100vh";
          document.querySelector('.prev').style.display = 'block';
          document.querySelector('.next').style.display = 'block';
      }
  }

  // Call adjust function on resize
  window.addEventListener('resize', adjustCarouselForDevice);
  adjustCarouselForDevice(); // Initial call to adjust on load
});
