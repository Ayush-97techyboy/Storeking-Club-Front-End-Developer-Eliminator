export function setupTotal(element, cart) {
  const calcTotal = (cart) => cart.reduce((sum, price) => sum + price, 0);
  const total = calcTotal(cart);
  element.innerHTML = `Total = ${total}`;
}