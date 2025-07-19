"use client"
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-between">
 
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

     
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />


      <div className="relative z-10 h-full w-full px-4 md:px-10 py-10 text-white flex flex-col justify-between">
        
        <div className="pt-10">
          <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl font-semibold leading-tight tracking-wide">
            See Beyond.
            <br />
            Unlock Your Health
          </h1>
        </div>

       
        <div className="mt-auto w-full flex flex-col md:flex-row justify-between gap-6 pt-10">
        
          <div className="space-y-6 w-full lg:w-1/2 max-[480px]:hidden block custom-hide-350">
           
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 relative">
                <Image
                  src="/icon1.avif"
                  alt="Real-Time Analysis"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div>
                <p className="text-base sm:text-sm font-semibold">Real-Time Analysis</p>
                <p className="text-sm text-white/80 mt-1 max-w-xs">
                  Fast, actionable insights without long wait times.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 relative">
                <Image
                  src="/icon2.avif"
                  alt="Personalized Health Icon"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div>
                <p className="text-base sm:text-sm font-semibold">
                  Personalized Health Insights
                </p>
                <p className="text-sm text-white/80 mt-1 max-w-xs">
                  Tailored recommendations based on your unique biomarkers.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 relative">
                <Image
                  src="/icon3.avif"
                  alt="Holistic Monitoring"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div>
                <p className="text-base sm:text-sm font-semibold">
                  Holistic Health Monitoring
                </p>
                <p className="text-sm text-white/80 mt-1 max-w-xs">
                  Combining physical, nutritional, and mental data for a complete picture.
                </p>
              </div>
            </div>
          </div>

          {/* Right CTA */}
          <div className="flex flex-col  max-[480px]:mb-10 items-start w-full lg:w-1/2 md:mt-12 xl:mt-8">
            <p className="max-[400px]:text-[23px] text-3xl md:text-2xl lg:text-4xl xl:text-5xl mb-6 leading-tight">
              Your body holds the answers <br />
              — we help you see them.
            </p>
            <button className="flex max-[480px]:w-full sm:w-auto justify-between items-center bg-white text-black font-medium text-sm px-5 py-1 rounded-full hover:opacity-90 transition-all">
              Join the Waitlist
              <span className="ml-6 bg-black text-white rounded-full w-12 h-12 flex items-center justify-center text-xs">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS for hiding under 450px */}
      <style jsx>{`
        @media (max-width: 450px) {
          .custom-hide-450 {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
