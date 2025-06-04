import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <Cart />
    </>
  );
}

export default App;

function Cart() {
  // Sample products
  const products = [
    { id: 1, name: "Apple", price: 2 },
    { id: 2, name: "Banana", price: 1 },
    { id: 3, name: "Orange", price: 3 },
  ];

  const [cart, setCart] = useState([]);

  // Add to cart handler
  const addToCart = (product) => {
    setCart((prevCart) => {
      const found = prevCart.find((item) => item.id === product.id);
      if (found) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  };

  // Log cart changes
  useEffect(() => {
    console.log("Cart changed:", cart);
  }, [cart]);

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h2>Products</h2>
      <div id="product-list">
        {products.map((prod) => (
          <div id ="prod-id" key={prod.id}>
            {prod.name} - ₹{prod.price}
            <button id="add-to-cart" onClick={() => addToCart(prod)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <ol>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} x {item.qty} = ₹{item.price * item.qty}
            </li>
          ))}
        </ol>
      )}
      <h3>Total: ₹{total}</h3>
    </div>
  );
}
