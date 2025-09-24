"use client";
import React, { useState } from "react";
import Link from "next/link"; // import Next.js Link

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md text-gray-900 shadow-lg">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 max-w-7xl mx-auto">
        <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl">
          <span
            className="font-extrabold bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent"
          >
            Web Dev tutorial
          </span>
        </h3>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setIsOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-8">
          <Link className="hover:text-blue-600" href="/">Home</Link>
          <Link className="hover:text-blue-600" href="/courses">Courses</Link>
          <Link className="hover:text-blue-600" href="/about">Contact us</Link>
          <Link className="hover:text-blue-600" href="/product">Product</Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 sm:px-6 pb-4">
          <div className="flex flex-col gap-2 bg-white rounded-lg p-3 shadow">
            <Link onClick={() => setIsOpen(false)} className="py-2 rounded hover:bg-gray-100 px-2" href="/">Home</Link>
            <Link onClick={() => setIsOpen(false)} className="py-2 rounded hover:bg-gray-100 px-2" href="/courses">Courses</Link>
            <Link onClick={() => setIsOpen(false)} className="py-2 rounded hover:bg-gray-100 px-2" href="/about">Contact us</Link>
            <Link onClick={() => setIsOpen(false)} className="py-2 rounded hover:bg-gray-100 px-2" href="/product">Product</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
