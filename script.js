const cart = [];
const cartItems = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");

document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", (e) => {
    const product = e.target.closest(".product");
    const id = product.dataset.id;
    const name = product.dataset.name;
    const price = parseInt(product.dataset.price);

    cart.push({ id, name, price });
    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} Ft`;
    cartItems.appendChild(li);
  });

  totalPriceElement.textContent = total;
}