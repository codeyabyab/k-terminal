import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
         <a href="https://react.dev/" target="_blank">
          <img src="/react.svg" className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Next.js + React</h1>
      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>pages/index.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}