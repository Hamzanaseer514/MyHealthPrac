"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function WhatYouNeed() {
  return (
    <div className="min-h-screen  relative overflow-hidden">
      <div className="absolute inset-0 ">
        <Image
          src="/images/whatyouneed.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
         <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row  justify-between px-4 lg:px-8 xl:px-12 py-8 gap-12 lg:gap-0">
    
        <div className="flex-1 font-semibold max-w-lg text-left">
          <h1 className="text-4xl font-light text-white  mb-8">
            Choose what You need,
            <br />
            <span className="text-white">when You need it</span>
          </h1>
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "Practice Tools",
              "Guided",
              "Tracking",
              "Insight Builder",
              "Self-Care",
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1 max-w-xl ">
          <h2 className="text-2xl md:text-4xl font-bold lg:text-5xl text-white leading-tight mb-8">
            No matter who you're
            <br />
            <span className="text-white font-bold">caring for</span>
            <br />
            <span className="text-white font-bold ">— you're in</span>
            <br />
            <span className="text-white font-bold">the right place</span>
          </h2>
          <div className="flex items-center gap-3 mb-8">
            <button className="flex items-center bg-black text-white font-medium text-xs px-4 py-2 rounded-full hover:opacity-90 transition-all">
              Join Waitlist
              <span className="ml-4 bg-white text-black rounded-full w-9 h-9 relative -right-3 flex items-center justify-center text-xs">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
