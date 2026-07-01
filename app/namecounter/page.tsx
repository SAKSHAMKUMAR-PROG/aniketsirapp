"use client";

import { useState } from "react";

function NameCount() {
  const [name, setName] = useState("");

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-black-100 px-4">
      <div className="w-full max-w-md bg-white border border-black-200 rounded-xl p-8">
        <h1 className="text-4xl font-bold text-black mb-6 text-center">
          Name Counter
        </h1>

        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
          className="w-full border border-red-300 rounded-lg px-4 py-3 text-lg text-red outline-none focus:border-blue-500"
        />

        <p className="text-2xl font-bold text-black mt-6 text-center">
          Letters: {name.length}
        </p>

        {name && (
          <p className="text-lg text-black-700 mt-3 text-center">
            {name} has {name.length} letters.
          </p>
        )}

        <button
          onClick={() => setName("")}
          className="w-full mt-6 bg-red-500 text-white text-xl font-bold py-3 rounded-lg hover:bg-red-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default NameCount;
