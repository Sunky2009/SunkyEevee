// Basic checkout functionality

// Sample cart items
const cart = [
    { id: 1, name: "Item 1", price: 9.99, quantity: 2 },
];

// Function to calculate total price
function calculateTotal(cart) {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
}

// Function to simulate checkout process
function checkout(cart) {
    if (cart.length === 0) {
        console.log("Your cart is empty.");
        return;
    }

    const total = calculateTotal(cart);
    console.log("Checkout Summary:");
    cart.forEach(item => {
        console.log(`${item.name} - $${item.price} x ${item.quantity}`);
    });
    console.log(`Total: $${total}`);
    console.log("Thank you for your purchase!");
}

// Perform checkout
checkout(cart);