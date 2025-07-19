"use client"
import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

 

  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-white">MyHealthPrac</h2>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-xl font-semibold  text-gray-500">Be the first to know</h3>
            <p className="text-gray-400 text-base">
              We'll send you only what matters — no noise, no spam.
            </p>
            <form  className="flex gap-3 mt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter e-mail address"
                className="flex-1 px-2  py-3 bg-transparent border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                required
              />
              <button
                type="submit"
                className="p-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-full transition-colors duration-200 text-white font-medium"
              >
                Ok
              </button>
            </form>
          </div>
          <div className="lg:col-span-2">
            <h4 className="text-gray-500 font-semibold mb-4 text-lg">Information</h4>
            <ul className=" text-base">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">What's included</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Health conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">For you</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">For professionals</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <div className="mb-2">
              <h4 className="text-gray-500 font-semibold  text-lg">Social Media</h4>
              <ul className=" text-base">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-500 font-semibold mb-1 text-lg">Contact</h4>
              <a 
                href="mailto:info@myhealthprac.com" 
                className="text-gray-300 hover:text-white transition-colors text-base"
              >
                info@myhealthprac.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 text-base text-gray-400">
            <div className="flex flex-col lg:flex-row gap-6">
              <span>© 2025. MyHealthPrac. All Rights Reserved.</span>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
            <div>
              <span>Website by </span>
              <a href="#" className="hover:text-white transition-colors">Ameer Hamza</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;