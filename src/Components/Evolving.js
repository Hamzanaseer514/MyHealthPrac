"use client";

import { motion } from "framer-motion";

export default function Evolving() {
  const headingLines = [
    "Designed for You.",
    "Built to Evolve with You",
  ];

  const headingAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15 },
    }),
  };

  const features = [
    {
      title: "What's Healthy — Not Just What's Common",
      desc: "Most reference ranges reflect population averages. We focus on what's optimal for long-term health — not just statistically 'normal'.",
    },
    {
      title: "Instant Feedback. Anywhere. Anytime.",
      desc: "Upload lab results or connect data sources in seconds. Receive personalized analysis without delay — from home or on the move.",
    },
    {
      title: "Your Health. Fully Mapped.",
      desc: "Combine biomarker data with how you feel day-to-day. Build a complete picture that evolves with your lifestyle and goals.",
    },
    {
      title: "Real-Time Trends & Early Signals",
      desc: "See how your health shifts over time. Catch dysfunction early — and act before it becomes a diagnosis.",
    },
    {
      title: "One System. One Place. Any Scale.",
      desc: "Manage your own journey or support 50+ clients. All insights, notes, and history — unified, searchable, structured.",
    },
    {
      title: "Progress That Grows With You",
      desc: "Your data isn't static — neither are you. See your health adapt, improve, and shift in ways that actually matter.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 px-4 py-12 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
         
          <div className="relative">
            <div className="sticky top-20 flex flex-col space-y-6 pr-2 pb-8 bg-gray-50">
              <div className="space-y-2">
                {headingLines.map((line, lineIndex) => (
                  <h1
                    key={lineIndex}
                    className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl leading-tight flex flex-wrap"
                  >
                    {line.split(" ").map((word, wordIndex) => (
                      <motion.span
                        key={wordIndex}
                        custom={lineIndex * 10 + wordIndex}
                        initial="hidden"
                        animate="visible"
                        variants={headingAnimation}
                        className="mr-2"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </h1>
                ))}
              </div>

              <div className="space-y-3 text-lg text-gray-700 md:text-xl">
                <p>Your data, your input, your pace — all in one place.</p>
                <p>Finally, care that fits how life actually works.</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gray-900"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t-2 border-dotted border-gray-400 w-full"></div>
      </div>
    </div>
  );
}
