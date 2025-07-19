'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const timelineSteps = [
  {
    id: 1,
    title: 'Instant',
    description: 'What once took months, now happens in moments.',
    side: 'left',
  },
  {
    id: 2,
    title: 'Predictive',
    description: 'So you never had to wait for symptoms.',
    side: 'right',
  },
  {
    id: 3,
    title: 'Personal',
    description: 'Tailored insights based on your unique biology.',
    side: 'left',
  },
  {
    id: 4,
    title: 'Accessible',
    description: 'Health guidance that meets you where you are.',
    side: 'right',
  },
  {
    id: 5,
    title: 'Empowered',
    description: 'Giving you the control to lead your health journey.',
    side: 'left',
  },
];

export default function HealthTimeline() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % timelineSteps.length);
        setShow(true);
      }, 800);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getVariants = (side) => {
    const xStart = side === 'left' ? -300 : 300;
    const yStart = 100;
    const xExit = side === 'left' ? -300 : 300;
    const yExit = 150;

    return {
      initial: {
        opacity: 0,
        x: xStart,
        y: yStart,
        scale: 0.8,
      },
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: { duration: 0.8 },
      },
      exit: {
        opacity: 0,
        x: xExit,
        y: yExit,
        scale: 0.8,
        transition: { duration: 0.8 },
      },
    };
  };

  const activeStep = timelineSteps[index];

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center flex-col px-4 sm:px-8">
      {/* Heading */}
      <div className="w-full py-3 md:py-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold md:mb-10 text-left">
          What If <br /> Health Was ...
        </h1>
      </div>

      <div className="relative w-full max-w-7xl h-[350px] sm:h-[400px] md:h-[500px] flex items-center justify-center">

        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 200 Q 500 -100 1000 200"
            stroke="#333"
            strokeWidth="1"
            fill="transparent"
          />
        </svg>
        <AnimatePresence mode="wait">
          {show && (
            <motion.div
              key={activeStep.id}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={getVariants(activeStep.side)}
              className="absolute flex flex-col items-center text-center px-2 sm:px-4"
            >
            
              <div className="w-8 h-8 sm:w-9 sm:h-9 -mt-14 sm:-mt-17 rounded-full border border-gray-400 text-xs sm:text-sm flex items-center justify-center">
                {activeStep.id}
              </div>
             
              <div className="w-3 h-3 bg-yellow-500 rounded-full mt-1 mb-1" />

           
              <div className="w-[1px] h-20 sm:h-28 bg-gray-400" />

              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4">
                {activeStep.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-2 max-w-xs px-2 sm:px-4">
                {activeStep.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
