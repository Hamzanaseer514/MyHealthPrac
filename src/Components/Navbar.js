"use client";
import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "What's included",
    "Health conditions",
    "For you",
    "For professionals",
    "FAQ",
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false); 
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-12 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-semibold text-md sm:text-xl">
          MyHealthPrac
        </div>
        <div className="hidden lg:flex items-center text-white text-sm font-medium">
          {navItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <a
                href="#"
                className="hover:text-white/80 transition-colors duration-200 px-2"
              >
                {item}
              </a>
              {index !== navItems.length - 1 && (
                <span className="mx-2 text-white">•</span>
              )}
            </div>
          ))}

          <div className="ml-8">
            <button className="flex items-center bg-black text-white font-medium text-xs px-4 py-2 rounded-full hover:opacity-90 transition-all">
              Join Waitlist
              <span className="ml-4 bg-white text-black rounded-full w-9 h-9 relative -right-3 flex items-center justify-center text-xs">
                <ArrowUpRight className=" w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </span>
            </button>
          </div>
        </div>

        {/* Menu Toggle Button — always visible */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white text-xl px-4 py-2 rounded-md flex items-center gap-2 z-[100]"
        >
          {isMenuOpen ? "Close" : "Menu"}
          <span className="text-4xl leading-none">•</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black z-40 px-6 py-8 flex flex-col justify-between">
     
          <div className="pt-12">
            <p className="text-xs text-gray-400 uppercase mb-4">Discover</p>
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white text-lg font-semibold border-b border-white/10 pb-2 hover:text-white/80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <button className="w-full flex items-center justify-between bg-white text-black text-sm font-medium px-5 py-3 rounded-full hover:bg-white/90 transition-all duration-300">
                Join Waitlist
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="pb-16">
            <div className="mb-4">
              <p className="text-gray-400 text-xs uppercase mb-1">Contact</p>
              <p className="text-white/90">info@myhealthprac.com</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase mb-1">
                Social Media
              </p>
              <div className="flex flex-col space-y-1">
                <a href="#" className="text-white hover:underline">
                  Instagram
                </a>
                <a href="#" className="text-white hover:underline">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
