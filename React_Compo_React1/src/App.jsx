import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function ProductCard({ name, price }) {
  const [bought, setBought] = useState(false);

  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      {bought ? (
        <button disabled>Purchased</button>
      ) : (
        <button onClick={() => setBought(true)}>Buy Now</button>
      )}
    </div>
  );
}

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
      <ProductCard name="Sample Product" price={499} />
    </>
  );
}

export default App;
