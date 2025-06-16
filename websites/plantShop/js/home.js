// Handle product clicks to show pop-up
const productItems = document.querySelectorAll('.product-item');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup-close');
const popupProductName = document.querySelector('#popup-product-name');
const popupProductImage = document.querySelector('#popup-product-image');
const popupProductPrice = document.querySelector('#popup-product-price');

// Define product details (with provided image URLs)
const productDetails = {
    1: { 
        name: "Fiddle Leaf Fig", 
        image: "https://i.ibb.co/xqw35pQS/fiddle-Leaf-Fig.jpg", 
        price: "$35.00" 
    },
    2: { 
        name: "Snake Plant", 
        image: "https://i.ibb.co/gMywxtnv/snake-Plant.jpg", 
        price: "$25.00" 
    },
    3: { 
        name: "Aloe Vera", 
        image: "https://i.ibb.co/Pdyx9NM/aloeVera.jpg", 
        price: "$15.00" 
    },
    4: { 
        name: "Peace Lily", 
        image: "https://i.ibb.co/sdC7M3tF/peace-Lily.jpg", 
        price: "$20.00" 
    },
    5: { 
        name: "Spider Plant", 
        image: "https://i.ibb.co/LDLwDTP4/spider-Plant.jpg", 
        price: "$18.00" 
    }
};

// Handle product clicks to show pop-up
productItems.forEach(item => {
    item.addEventListener('click', () => {
        const productId = item.dataset.product; // Using data-product attribute for better data handling
        const product = productDetails[productId];

        // Update the pop-up with product details
        popupProductName.textContent = product.name;
        popupProductImage.src = product.image;
        popupProductPrice.textContent = product.price;

        // Display the pop-up
        popup.style.display = 'flex';
    });
});

// Close the pop-up
popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Optional: Close pop-up when clicking outside the popup content
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

// Carousel functionality
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel .product-item');
    const totalSlides = slides.length;

    // Hide current slide
    slides[currentSlide].style.display = 'none';

    // Update currentSlide
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Loop to the last slide
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Loop to the first slide
    }

    // Show the new slide
    slides[currentSlide].style.display = 'block';
}

const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

// Initialize the first slide to be visible
document.querySelectorAll('.carousel .product-item')[currentSlide].style.display = 'block';

// Event listeners for carousel buttons
prevButton.addEventListener('click', () => moveSlide(-1));
nextButton.addEventListener('click', () => moveSlide(1));

// Initialize the cart count on page load
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
});

