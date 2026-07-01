"use client";

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-black-100">
      <h1 className="text-4xl font-bold text-black mb-10">Count</h1>

      <div className="flex items-center gap-10">
        <button
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
          className="w-16 h-16 bg-red-500 text-white text-3xl rounded-lg hover:bg-red-600"
        >
          -
        </button>

        <span className="text-5xl font-bold text-black">{count}</span>

        <button
          onClick={() => setCount(count + 1)}
          className="w-16 h-16 bg-green-500 text-white text-3xl rounded-lg hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
