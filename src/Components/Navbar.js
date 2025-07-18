"use client";
import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-10">
      <div className="text-white font-semibold text-xl">MyHealthPrac</div>
      <div className="hidden md:flex gap-6 text-white text-sm">
        <a href="#">What’s included</a>
        <a href="#">Health conditions</a>
        <a href="#">For you</a>
        <a href="#">For professionals</a>
        <a href="#">FAQ</a>
      </div>
      <button className="bg-black text-white px-5 py-2 rounded-full flex items-center gap-2">
        Join Waitlist
        <span className="bg-white text-black rounded-full w-6 h-6 flex justify-center items-center">↗</span>
      </button>
    </nav>
  );
};

export default Navbar;
