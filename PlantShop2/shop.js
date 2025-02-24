// Cart Data Storage
let cart = [];

// Function to Add Item to Cart
const addToCart = (event) => {
    const shopItem = event.target.closest(".shop-item");
    const itemId = shopItem.dataset.id;
    const itemName = shopItem.querySelector("h3").textContent;
    const itemPrice = parseFloat(shopItem.querySelector(".item-price").textContent.replace("$", ""));

    // Check if item already exists in the cart
    const existingItem = cart.find(item => item.id === itemId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id: itemId, name: itemName, price: itemPrice, quantity: 1 });
    }

    updateCart();
};

// Function to Remove Item from Cart
const removeFromCart = (event) => {
    const itemId = event.target.dataset.id;
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
};

// Function to Decrease Quantity of Item
const decreaseQuantity = (event) => {
    const itemId = event.target.dataset.id;
    const item = cart.find(item => item.id === itemId);
    
    if (item && item.quantity > 1) {
        item.quantity--;
    } else {
        removeFromCart(event);  // If quantity is 1, remove the item entirely
    }

    updateCart();
};

// Function to Increase Quantity of Item
const increaseQuantity = (event) => {
    const itemId = event.target.dataset.id;
    const item = cart.find(item => item.id === itemId);
    
    if (item) {
        item.quantity++;
    }

    updateCart();
};

// Function to Update Cart Display
const updateCart = () => {
    const cartItemsContainer = document.querySelector("#cart-items");
    const cartTotal = document.querySelector("#cart-total");
    const cartCount = document.querySelector("#cart-count");

    cartItemsContainer.innerHTML = "";
    let totalPrice = 0;

    cart.forEach(item => {
        const cartItem = document.createElement("li");
        cartItem.innerHTML = `
            <div class="cart-item-info">
                ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}
            </div>
            <div class="cart-item-buttons">
                <button class="decrease-btn" data-id="${item.id}">-</button>
                <button class="increase-btn" data-id="${item.id}">+</button>
                <button class="remove-btn" data-id="${item.id}">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
        totalPrice += item.price * item.quantity;
    });

    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);  // Update total item count
};

// Event delegation for cart buttons (decrease, increase, remove)
document.querySelector(".cart-summary").addEventListener("click", (event) => {
    if (event.target.classList.contains("decrease-btn")) {
        decreaseQuantity(event);
    } else if (event.target.classList.contains("increase-btn")) {
        increaseQuantity(event);
    } else if (event.target.classList.contains("remove-btn")) {
        removeFromCart(event);
    }
});

// Attach Event Listeners for "Add to Cart" Buttons
document.querySelectorAll(".shop-item-btn").forEach(button => {
    button.addEventListener("click", addToCart);
});

// Checkout Button Event
document.querySelector("#checkout-btn").addEventListener("click", () => {
    alert("Proceeding to checkout! (This can be linked to a payment page)");
});