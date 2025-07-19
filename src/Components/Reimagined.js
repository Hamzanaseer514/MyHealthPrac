'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [isZoomed, setIsZoomed] = useState(false);

  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { scale: 0.3, filter: 'blur(10px)', opacity: 0 },
    visible: {
      scale: 1,
      filter: 'blur(0px)',
      opacity: 1,
      transition: { duration: 1.5, ease: 'easeInOut' },
    },
    zoomed: {
      scale: 1.5,
      filter: 'blur(0px)',
      opacity: 1,
      transition: { duration: 1.5, ease: 'easeInOut' },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 pt-10">
      <motion.div
        className="text-center mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollVariants}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
          Your Health Hub
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-2">
          Reimagined
        </h2>
        <p className="text-base text-xs text-gray-700 mt-4 max-w-xs md:max-w-md">
          MyHealthPrac brings together lab results, symptoms, and personalised insights in a single, easy-to-navigate dashboard. Track progress over time, identify key health priorities, and understand what truly matters — all at a glance.
        </p>
      </motion.div>
      <div className="w-full max-w-4xl mx-auto mb-8 flex justify-center">
        <motion.div
          className="relative overflow-hidden rounded-lg shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
          animate={isZoomed ? 'zoomed' : 'visible'}
          onClick={() => setIsZoomed(!isZoomed)}
          style={{ cursor: 'pointer' }}
        >
          <img
            src="/images/reimagine.avif"
            alt="Dashboard"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}