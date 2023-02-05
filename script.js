// Keep track of the products in the cart
let cart = [];

// Add a product to the cart
function addToCart(productId) {
  // Get the product details from the product section
  let product = document.querySelector(`#products .product:nth-child(${productId})`);
  let productName = product.querySelector(".product-name").textContent;
  let productPrice = parseFloat(product.querySelector(".product-price").textContent.replace("Price: $", ""));

  // Check if the product is already in the cart
  let existingProduct = cart.find(p => p.id === productId);
  if (existingProduct) {
    // Update the quantity and total price of the product in the cart
    existingProduct.quantity += 1;
    existingProduct.totalPrice = existingProduct.quantity * productPrice;
    document.querySelector(`#cartTable tr[data-id="${productId}"] .quantity`).textContent = existingProduct.quantity;
    document.querySelector(`#cartTable tr[data-id="${productId}"] .total`).textContent = "$" + existingProduct.totalPrice.toFixed(2);
  } else {
    // Add the product to the cart
    cart.push({
      id: productId,
      name: productName,
      price: productPrice,
      quantity: 1,
      totalPrice: productPrice
    });

    // Add the product to the cart table
    let cartTable = document.querySelector("#cartTable");
    let row = cartTable.insertRow();
    row.setAttribute("data-id", productId);
    row.insertCell().textContent = productName;
    row.insertCell().textContent = "$" + productPrice.toFixed(2);
    row.insertCell().innerHTML = `<span class="quantity">1</span>`;
    row.insertCell().innerHTML = `<span class="total">$` + productPrice.toFixed(2) + `</span>`;
  }
}
