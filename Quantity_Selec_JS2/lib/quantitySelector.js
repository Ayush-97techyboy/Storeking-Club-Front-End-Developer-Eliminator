export function setupQuantitySelector(element, pricePerItem) {
  let quantity = 1;

  function updateDisplay() {
    element.innerHTML = `
      <button id="decrement">–</button>
      <span id="qty">${quantity}</span>
      <button id="increment">+</button>
      <div>Total = ${quantity * pricePerItem}</div>
    `;

    element.querySelector("#decrement").onclick = () => {
      if (quantity > 1) {
        quantity--;
        updateDisplay();
      }
    };
    element.querySelector("#increment").onclick = () => {
      if (quantity < 5) {
        quantity++;
        updateDisplay();
      }
    };
  }

  updateDisplay();
}
