import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // Static list of products
  const products = [
    {
      id: 1,
      name: "Product A",
      description: "Description for Product A",
      price: 100,
    },
    {
      id: 2,
      name: "Product B",
      description: "Description for Product B",
      price: 200,
    },
    {
      id: 3,
      name: "Product C",
      description: "Description for Product C",
      price: 300,
    },
  ];

  // State to manage selected product
  const [selectedProduct, setSelectedProduct] = useState(null);

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
      <h2>Product List</h2>
        {products.map((product) => (
          <button id="product-button"
            key={product.id}
            style={{
              cursor: "pointer",
              fontWeight:
                selectedProduct?.id === product.id ? "bold" : "normal",
            }}
            onClick={() => setSelectedProduct(product)}
          >
            {product.name}
          </button>
        ))}
      {selectedProduct && (
        <div
          style={{
            marginTop: "1rem",
            border: "1px solid #ccc",
            padding: "1rem",
          }}
        >
          <h3>Selected Product Details</h3>
          <p>
            <strong>Name:</strong> {selectedProduct.name}
          </p>
          <p>
            <strong>Description:</strong> {selectedProduct.description}
          </p>
          <p>
            <strong>Price:</strong> ₹{selectedProduct.price}
          </p>
        </div>
      )}
    </>
  );
}

export default App;
