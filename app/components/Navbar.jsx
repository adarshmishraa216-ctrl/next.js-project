import React from "react";
import Link from "next/link"; // import Next.js Link

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-7 py-3 bg-white backdrop-blur-md text-gray-900 font-semibold shadow-lg">
      <h3 className="font-bold text-5xl">
        <span
          className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent 
               hover:scale-110 transition duration-300"
        >
          Web Dev tutorial
        </span>
      </h3>
      <div className="flex items-center gap-20">
        
        <Link className="hover:text-blue-600 cursor-pointer hover:underline" href="/">
          Home
        </Link>
        <Link className="hover:text-blue-600 cursor-pointer hover:underline" href="/courses">
          Courses
        </Link>
        <Link className="hover:text-blue-600 cursor-pointer hover:underline" href="/about">
          Contact us
        </Link>
        <Link className="hover:text-blue-600 cursor-pointer hover:underline" href="/product">
          Product
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
