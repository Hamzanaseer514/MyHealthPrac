"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  const text = "Everyone. Everywhere.";
  const subTextLines = [
    "Health shouldn't be limited by time,",
    "location, or income. Health should",
    "be in your hands.",
  ];

  const headingAnimation = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: { delay: i * 0.5 },
    }),
  };

  const wordAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15 },
    }),
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-beige-200 overflow-hidden">
      {/* Left image */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <img
          src="/images/healthhand.avif"
          alt="Hand with light trail"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right content */}
      <div className="flex flex-col justify-between p-4 px-6 bg-[#c5b197] h-full w-full md:w-1/2 overflow-y-auto">
        <div className="flex flex-col justify-between h-full space-y-10">
          {/* Main heading */}
          <div className="text-4xl md:text-7xl font-semibold text-gray-900">
            {text.split(" ").map((word, index) => (
              <motion.span
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={headingAnimation}
                className="mr-2.5 block"
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Sub text */}
          <div className="text-base md:text-3xl font-semibold text-gray-900 space-y-2">
            {subTextLines.map((line, lineIndex) => (
              <div key={lineIndex} className="flex flex-wrap">
                {line.split(" ").map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    custom={lineIndex * 10 + wordIndex}
                    initial="hidden"
                    animate="visible"
                    variants={wordAnimation}
                    className="mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            ))}

            {/* Button */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 1.5 } },
              }}
              className="pt-3"
            >
              <button className="flex items-center bg-black text-white font-medium text-xs px-4 py-2 rounded-full hover:opacity-90 transition-all">
                Join Waitlist
                <span className="ml-4 bg-white text-black rounded-full w-9 h-9 relative -right-3 flex items-center justify-center text-xs">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200" />
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
