"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sentence =
  "A Predictive, Personalised Health Platform — for People and Practitioners.";
const subText = "READY TO SEE WHAT YOUR BODY’S BEEN TRYING TO TELL YOU?";

export default function HealthIntro() {
  const words = sentence.split(" ");

  return (
    <div className="pb-20 bg-[#f3f3f3] flex flex-col pt-12 px-4 md:px-10">
      {/* Top Mini Heading */}
      <div className="flex items-center w-74 text-xs font-semibold tracking-wide mb-6 text-black">
        <div className="w-12 h-12 mr-4 relative">
          <Image
            src="/images/icon_shape.png"
            alt="Star Icon"
            layout="fill"
            objectFit="contain"
            className="animate-spin slow-spin" 
          />
        </div>
        {subText}
      </div>

      {/* Main Animated Heading */}
      <motion.h1
        className="max-[400px]:text-[28.8px] text-[2rem] md:text-[5rem] font-semibold mt-13 leading-tight text-black max-w-6xl"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block whitespace-nowrap"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
