import { setupCart } from './cartLogic.js';

const products = [
  { name: 'Apple', price: 50, stock: 3 },
  { name: 'Banana', price: 30, stock: 0 },
  { name: 'Orange', price: 40, stock: 2 }
];

const cartElement = document.getElementById('cart');
setupCart(cartElement, products);