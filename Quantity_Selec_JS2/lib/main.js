import { setupQuantitySelector } from './quantitySelector.js';

const pricePerItem = 299;
const selectorElement = document.getElementById('quantity-selector');
setupQuantitySelector(selectorElement, pricePerItem);