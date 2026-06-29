import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="flex flex-col text-black font-extrabold gap-4">
      <Link
        href="/"
        className="px-4 py-2 rounded-lg hover:bg-gray-100 transition"
      >
        Home
      </Link>

      <Link
        href="/about"
        className="px-4 py-2 rounded-lg hover:bg-gray-100 transition"
      >
        About
      </Link>

      <Link
        href="/blogs"
        className="px-4 py-2 rounded-lg hover:bg-gray-100 transition"
      >
        Blogs
      </Link>

      <Link
        href="/settings"
        className="px-4 py-2 rounded-lg hover:bg-gray-100 transition"
      >
        Settings
      </Link>
    </nav>
  );
}

export default Nav;
