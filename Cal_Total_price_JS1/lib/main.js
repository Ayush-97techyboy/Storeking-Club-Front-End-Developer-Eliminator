import { setupTotal } from './calcTotal.js';

const cart = [199, 299, 499];
const totalElement = document.getElementById('total');
setupTotal(totalElement, cart);