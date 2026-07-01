"use client";

import Image from "next/image";
import { useState } from "react";

function posts() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const resetCounts = () => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black-100">
      <div className="flex flex-col items-center">
        {/* Card */}
        <div className="w-95 h-95 bg-black-200 rounded-2xl border-2 border-black-300 mb-8">
          <Image src="/a.jpg" alt="Post Image" width={384} height={288} />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => setLike(like + 1)}
            className="bg-red-300 px-8 py-3 rounded-xl text-xl font-bold hover:bg-red-400"
          >
            👍 Like {like}
          </button>

          <button
            onClick={resetCounts}
            className="bg-gray-300 px-8 py-3 rounded-xl text-xl font-bold hover:bg-gray-400"
          >
            Reset
          </button>

          <button
            onClick={() => setDislike(dislike + 1)}
            className="bg-red-300 px-8 py-3 rounded-xl text-xl font-bold hover:bg-red-400"
          >
            👎 Dislike {dislike}
          </button>
        </div>
      </div>
    </div>
  );
}

export default posts;
