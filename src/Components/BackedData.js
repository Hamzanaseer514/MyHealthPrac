"use client";

import { ArrowUpRight } from 'lucide-react'; // Make sure you have lucide-react installed

export default function BackedData() {

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/backeddata.avif')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 flex min-h-screen">
        <div className="flex items-center max-w-7xl  px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
       
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4">
              <div className="mb-2">Backed by Data.</div>
              <div className="mb-2">Built for Complexity.</div>
              <div className="text-white/90">Designed for You.</div>
            </h1>

            <p className="text-md md:text-lg text-white/80 mb-4 max-w-lg leading-relaxed">
              Join the waitlist for early access, founding member benefits, and exclusive launch offers.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="flex max-[480px]:w-full sm:w-auto justify-between items-center bg-white text-black font-medium text-sm px-5 py-1 rounded-full hover:opacity-90 transition-all">
                Join the Waitlist
                <span className="ml-6 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-xs">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200" />
                </span>
              </button>

            
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
}
