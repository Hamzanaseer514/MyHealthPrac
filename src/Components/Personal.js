"use client";
import React from "react";

const Personal = () => {
  const personalFeatures = [
    { title: "Accessible Expert Care", description: "World-class insights without needing a specialist appointment." },
    { title: "Instant Reporting", description: "Upload labs and get results within minutes." },
    { title: "Early Risk Detection", description: "Spot dysfunction long before symptoms or diagnosis." },
    { title: "Precise Insights", description: "See exactly what's working — and what needs support." },
    { title: "Proactive Guidance", description: "Know what to do next before health problems escalate." },
    { title: "Personalised Actionable Plans", description: "Nutrition, lifestyle, and supplement suggestions tailored to you." },
    { title: "Dynamic Feedback", description: "Your plan adjusts as your biology and lifestyle evolve." },
    { title: "Real-Time Adjustments", description: "Live changes based on new data, check-ins, or symptoms." },
    { title: "Quantifiable & Trackable", description: "Health Status Watch your health improve across visual dashboards and metrics." },
    { title: "Predictive Health Forecasts", description: "Understand future health risks and how to stay ahead of them." },
    { title: "Secure Health Data", description: "End-to-end encrypted data that you fully own and control." },
  ];

  const professionalFeatures = [
    { title: "Comprehensive Screening", description: "Analyse 290+ biomarkers and over 1,800 subjective inputs in one unified system." },
    { title: "Intelligent Reporting", description: "Instantly generate functional reports that interpret the full health picture." },
    { title: "Health Alerts", description: "Auto-flags emerging patterns based on both bloods and biofeedback." },
    { title: "Data-Driven Insights", description: "Blend biometrics with behaviour for personalised, precision-led care." },
    { title: "Predictive Analytics", description: "Anticipate dysfunction trends before symptoms arise." },
    { title: "Overall Health Index", description: "A single score summarising client vitality, risk, and progress." },
    { title: "Probability of Dysfunction", description: "See what's likely to develop — before it does." },
    { title: "Streamlined Priorities", description: "Prioritise what matters most, for faster results and greater impact." },
    { title: "Retrospective Heatmaps", description: "Track marker-by-marker change across time, sessions, and protocols." },
    { title: "Client Progress Tracking", description: "View improvement trends across bio, lifestyle, and behaviour data." },
    { title: "Scheduled Check-Ins", description: "Automate review cadence for retention and results." },
    { title: "Sharable Resource", description: "Library Provide resources, protocols, and client tools with one click." },
  ];

  return (
    <div className="min-h-screen bg-[#d4d2cf] md:p-3">
      <div className="grid lg:grid-cols-2 gap-3">
        {/* Personal */}
        <div className="bg-[#f1f1f1] px-4 py-3 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 text-sm">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-900">Personal</h2>
            </div>
            <p className="text-gray-600 text-[13px] leading-tight">
              For individuals seeking clarity and balance
            </p>
          </div>

          <div className="space-y-0">
            {personalFeatures.map((feature, index) => (
              <div key={index} className="border-b border-dotted border-black pb-2">
                <h3 className="font-semibold text-gray-900 text-[13.5px] leading-snug">{feature.title}</h3>
                <p className="text-gray-600 text-[12.5px] leading-tight">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional */}
        <div className="bg-[#c5b197] px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300 text-sm">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-900">Professional</h2>
            </div>
            <p className="text-gray-700 text-[13px] leading-tight">
              For practitioners delivering truly personalised care
            </p>
          </div>

          <div className="space-y-0">
            {professionalFeatures.map((feature, index) => (
              <div key={index} className="border-b border-dotted border-black pb-2">
                <h3 className="font-semibold text-gray-900 text-[13.5px] leading-snug">{feature.title}</h3>
                <p className="text-gray-700 text-[12.5px] leading-tight">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
