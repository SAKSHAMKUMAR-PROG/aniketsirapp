import Link from "next/link";
import React from "react";
import { FaHome, FaInfoCircle, FaRegFileAlt, FaCog } from "react-icons/fa";

function Nav() {
  return (
    <nav className="flex flex-col text-black font-extrabold gap-4">
      <Link
        href="/"
        className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
      >
        <FaHome className="text-lg" />
        <span>Home</span>
      </Link>

      <Link
        href="/about"
        className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
      >
        <FaInfoCircle className="text-lg" />
        <span>About</span>
      </Link>

      <Link
        href="/blogs"
        className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
      >
        <FaRegFileAlt className="text-lg" />
        <span>Blogs</span>
      </Link>

      <Link
        href="/settings"
        className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
      >
        <FaCog className="text-lg" />
        <span>Settings</span>
      </Link>

      <Link
        href="/counter"
        className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
      >
        <FaCog className="text-lg" />
        <span>counter</span>
      </Link>
    </nav>
  );
}

export default Nav;
