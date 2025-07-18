import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center h-full w-full px-8 md:px-16 py-16 text-white">
        <div className="max-w-xl mt-20">
          <h1 className="text-5xl font-bold mb-4">See Beyond.<br />Unlock Your Health</h1>
          <div className="mt-6 space-y-6 text-lg">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <p className="font-semibold">Real-Time Analysis</p>
                  <p className="text-sm text-white/90">Fast, actionable insights without long wait times.</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🧬</span>
                <div>
                  <p className="font-semibold">Personalized Health Insights</p>
                  <p className="text-sm text-white/90">Tailored recommendations based on your unique biomarkers.</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">❤️</span>
                <div>
                  <p className="font-semibold">Holistic Health Monitoring</p>
                  <p className="text-sm text-white/90">Combining physical, nutritional, and mental data for a complete picture.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side CTA */}
        <div className="mt-20 md:mt-0 md:self-end">
          <p className="text-3xl font-semibold mb-6">Your body holds the answers —<br />we help you see them.</p>
          <button className="bg-white text-black px-6 py-3 rounded-full text-sm flex items-center gap-2">
            Join the Waitlist <span className="bg-black text-white rounded-full w-6 h-6 flex justify-center items-center">↗</span>
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0" />
    </section>
  );
};

export default HeroSection;
