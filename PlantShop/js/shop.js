// Cart Data Storage
let cart = [];

// Selectors
const cartItemsContainer = document.querySelector("#cart-items");
const cartTotal = document.querySelector("#cart-total");
const cartCount = document.querySelector("#cart-count");
const checkoutBtn = document.querySelector("#checkout-btn");
const cartSummary = document.querySelector(".cart-summary");

// Add Item to Cart
const addToCart = (event) => {
    const shopItem = event.target.closest(".shop-item");
    const itemId = shopItem.dataset.id;
    const itemName = shopItem.querySelector("h3").textContent;
    const itemPrice = parseFloat(shopItem.querySelector(".item-price").textContent.replace("$", ""));

    const existingItem = cart.find(item => item.id === itemId);
    existingItem ? existingItem.quantity++ : cart.push({ id: itemId, name: itemName, price: itemPrice, quantity: 1 });

    updateCart();
};

// Remove Item from Cart
const removeFromCart = (itemId) => {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
};

// Adjust Item Quantity
const changeQuantity = (itemId, amount) => {
    const item = cart.find(item => item.id === itemId);
    if (!item) return;

    item.quantity += amount;
    if (item.quantity < 1) removeFromCart(itemId);

    updateCart();
};

// Update Cart Display
const updateCart = () => {
    cartItemsContainer.innerHTML = "";
    let totalPrice = 0;
    let totalItems = 0;

    cart.forEach(({ id, name, price, quantity }) => {
        const cartItem = document.createElement("li");
        cartItem.innerHTML = `
            <div class="cart-item-info">
                ${name} (x${quantity}) - $${(price * quantity).toFixed(2)}
            </div>
            <div class="cart-item-buttons">
                <button class="decrease-btn" data-id="${id}">-</button>
                <button class="increase-btn" data-id="${id}">+</button>
                <button class="remove-btn" data-id="${id}">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
        totalPrice += price * quantity;
        totalItems += quantity;
    });

    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    cartCount.textContent = totalItems;
};

// Event Listeners
cartSummary.addEventListener("click", (event) => {
    const { id } = event.target.dataset;
    if (event.target.classList.contains("decrease-btn")) changeQuantity(id, -1);
    if (event.target.classList.contains("increase-btn")) changeQuantity(id, 1);
    if (event.target.classList.contains("remove-btn")) removeFromCart(id);
});

document.querySelectorAll(".shop-item-btn").forEach(button => button.addEventListener("click", addToCart));

checkoutBtn.addEventListener("click", () => alert("Proceeding to checkout! (This can be linked to a payment page)"));