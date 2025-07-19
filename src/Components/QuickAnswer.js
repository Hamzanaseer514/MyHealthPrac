"use client";
import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import Image from "next/image";

const QuickAnswer = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "How do I join MyHealthPrac?",
      answer:
        "You can join our priority waitlist in under 60 seconds. As we prepare for launch...",
    },
    {
      question: "Who is MyHealthPrac for?",
      answer:
        "MyHealthPrac is designed for healthcare practitioners, wellness coaches, and individuals...",
    },
    {
      question: "What is Functional Medicine?",
      answer:
        "Functional Medicine is a personalized, systems-oriented model that empowers patients...",
    },
    {
      question: "Where is MyHealthPrac available?",
      answer:
        "MyHealthPrac is available globally through our web platform...",
    },
    {
      question: "When's the best time to start using MyHealthPrac?",
      answer:
        "The best time to start is now! Early access members get exclusive pricing...",
    },
    {
      question: "Do I need to be a doctor to use MyHealthPrac?",
      answer:
        "No, you don't need to be a doctor. MyHealthPrac is designed for various users...",
    },
    {
      question: "What makes MyHealthPrac different?",
      answer:
        "MyHealthPrac combines diagnostic intelligence with practitioner-level precision...",
    },
    {
      question: "What features are included?",
      answer:
        "Our platform includes health assessments, personalized recommendations...",
    },
    {
      question: "How does MyHealthPrac interpret data?",
      answer:
        "MyHealthPrac uses advanced AI and clinical algorithms to interpret your health data...",
    },
    {
      question: "Can I use it for remote care at scale?",
      answer:
        "Yes! MyHealthPrac offers practitioner tools that enable you to deliver remote care at scale...",
    },
    {
      question: "Can I use it for remote care at scale?",
      answer:
        "Yes! MyHealthPrac offers practitioner tools that enable you to deliver remote care at scale...",
    },
    {
      question: "Can I use it for remote care at scale?",
      answer:
        "Yes! MyHealthPrac offers practitioner tools that enable you to deliver remote care at scale...",
    },
    {
      question: "Can I use it for remote care at scale?",
      answer:
        "Yes! MyHealthPrac offers practitioner tools that enable you to deliver remote care at scale...",
    },
    {
      question: "Can I use it for remote care at scale?",
      answer:
        "Yes! MyHealthPrac offers practitioner tools that enable you to deliver remote care at scale...",
    },
    {
      question: "Can I use it for remote care at scale?",
      answer:
        "Yes! MyHealthPrac offers practitioner tools that enable you to deliver remote care at scale...",
    },
  ];

  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#d4d2cf]">
      <div className="grid lg:grid-cols-2 gap-8 px-6 py-6 lg:py-12">
        {/* Sticky Image Column */}
        <div className="relative">
          <div className="sticky top-10">
            <div className="relative rounded-2xl overflow-hidden  p-2 ">
              <div className="relative w-full h-[400px] md:h-[650px] rounded-xl overflow-hidden">
                <Image
                  src="/images/quick.avif"
                  alt="Health and wellness"
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="" />
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10">
            Quick Answers
          </h1>

          <div className="divide-y divide-dotted divide-gray-300">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6">
                <button
                  onClick={() => toggleExpanded(index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {expandedIndex === index ? (
                      <X className="w-6 h-6 text-gray-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-600" />
                    )}
                  </div>
                </button>

                {expandedIndex === index && (
                  <div className="pt-4">
                    <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                )}
                <div className="border-t border-dotted border-gray-400 my-4"></div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAnswer;
