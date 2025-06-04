export function setupCart(element, products) {
  const availableProducts = products.filter(product => product.stock > 0);
  let cart = [];

  function updateDisplay() {
    let html = '<h3>Products</h3><ul>';
    availableProducts.forEach((product, idx) => {
      html += `
        <li>
          ${product.name} - ₹${product.price} 
          <button data-idx="${idx}" ${product.stock === 0 ? 'disabled' : ''}>Add to Cart</button>
        </li>
      `;
    });
    html += '</ul>';

    html += '<h3>Cart</h3><ul>';
    cart.forEach(item => {
      html += `<li>${item.name} - ₹${item.price}</li>`;
    });
    html += '</ul>';

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    html += `<div><strong>Total Cart Value: ₹${total}</strong></div>`;

    element.innerHTML = html;

    availableProducts.forEach((product, idx) => {
      const btn = element.querySelector(`button[data-idx="${idx}"]`);
      if (btn) {
        btn.onclick = () => {
          if (product.stock > 0) {
            cart.push({ name: product.name, price: product.price });
            product.stock--;
            updateDisplay();
          }
        };
      }
    });
  }

  updateDisplay();
}