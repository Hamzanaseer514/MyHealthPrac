"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const features = [
  {
    image: "/images/f1.avif",
    title: "No Appointments. No Waiting.",
    description:
      "Get actionable insights in minutes — no needles, no labs, no delays.",
  },
  {
    image: "/images/f2.avif",
    title: "Smarter Than Guesswork",
    description:
      "We process 2,000+ medical references and millions of data points to predict your health risks — clearly and intelligently.",
  },
  {
    image: "/images/f3.avif",
    title: "Tailored to You",
    description:
      "Every scan adapts to your biofeedback, lifestyle and unique markers — not generic checklists.",
  },
  {
    image: "/images/f4.avif",
    title: "Always-On Awareness",
    description:
      "With each scan, patterns emerge. You see what’s changing — and why it matters.",
  },
];

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 * i },
  }),
};

const wordAnim = {
  hidden: { opacity: 0, y: `100%` },
  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
};

export default function HealthIntro() {
  const { ref, inView } = useInView({ triggerOnce: true });

  const title1 = "Anyone. Anywhere.";
  const title2 = "290+ markers, 160+ patterns.";

  return (
    <div className="px-4 py-12 bg-[#f3f3f3] text-black overflow-hidden">
      {/* Animated Headings */}
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mb-16 text-2xl md:text-4xl lg:text-6xl font-semibold text-gray-800 space-y-2"
      >
        <div className="flex flex-wrap px-2 overflow-hidden">
          {title1.split(" ").map((word, index) => (
            <motion.span
              key={index}
              variants={wordAnim}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </div>
        <div className="flex flex-wrap overflow-hidden">
          {title2.split(" ").map((word, index) => (
            <motion.span
              key={index}
              variants={wordAnim}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Horizontal Dotted Line */}
      <div className="border-t border-dotted border-gray-400 mb-6"></div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative p-2 flex flex-col items-start text-left border-gray-300 ${
              index !== features.length - 1 ? "lg:border-r lg:border-dashed" : ""
            }`}
          >
            <Image
              src={feature.image}
              alt={feature.title}
              width={60}
              height={60}
              className="mb-6"
            />
            <h3 className="text-xl font-semibold mb-3 mt-15 text-black">
              {feature.title}
            </h3>
            <p className="text-sm font-semibold text-black leading-relaxed">
              {feature.description}
            </p>

           <div className="block  sm:hidden absolute -bottom-3 left-0 w-full border-b border-dotted border-gray-500"></div>

          </div>
        ))}
      </div>
    </div>
  );
}
