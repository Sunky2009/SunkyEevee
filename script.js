// script.js - Shopweb Checkout Script

document.addEventListener("DOMContentLoaded", () => {
    const checkoutForm = document.getElementById("checkout-form");
    const totalPriceElement = document.getElementById("total-price");
    const paymentButton = document.getElementById("payment-button");

    // Example: Calculate total price dynamically
    function calculateTotalPrice() {
        const items = document.querySelectorAll(".cart-item");
        let total = 0;

        items.forEach(item => {
            const price = parseFloat(item.dataset.price) || 0;
            const quantity = parseInt(item.querySelector(".item-quantity").value) || 0;
            total += price * quantity;
        });

        totalPriceElement.textContent = `$${total.toFixed(2)}`;
    }

    // Handle form submission
    checkoutForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(checkoutForm);
        const customerDetails = Object.fromEntries(formData.entries());

        console.log("Customer Details:", customerDetails);
        alert("Thank you for your purchase!");
    });

    // Update total price on quantity change
    document.querySelectorAll(".item-quantity").forEach(input => {
        input.addEventListener("input", calculateTotalPrice);
    });

    // Simulate payment button click
    paymentButton.addEventListener("click", () => {
        alert("Redirecting to payment gateway...");
    });

    // Initial calculation
    calculateTotalPrice();
});