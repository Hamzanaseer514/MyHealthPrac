"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const cards = [
  {
    id: 1,
    value: "948",
    unit: "μmol/L",
    title: "Glutathione",
    subtitle: "GSH",
    description:
      "Your body’s main antioxidant, protecting cells from damage and helping your liver clear out toxins.",
    image: "/images/1.avif",
  },
  {
    id: 2,
    value: "550",
    unit: "pmol/L",
    title: "Vitamin B12",
    subtitle: "Serum Cobalamin",
    description: "Supports red blood cells, energy, memory, and nerve health.",
    image: "/images/2.avif",
  },
  {
    id: 3,
    value: "80",
    unit: "nmol/L",
    title: "Vitamin D",
    subtitle: "(25(OH)D)",
    description:
      "Regulates your immune system, mood, and bones. Essential in early development.",
    image: "/images/3.avif",
  },
  {
    id: 4,
    value: "120",
    unit: "ng/mL",
    title: "Iron",
    subtitle: "Ferritin",
    description:
      "Vital for energy production and oxygen transport in your blood.",
    image: "/images/4.avif",
  },
  {
    id: 5,
    value: "32",
    unit: "mg/dL",
    title: "Zinc",
    subtitle: "Serum Zinc",
    description:
      "Helps your immune system and wound healing function properly.",
    image: "/images/5.avif",
  },
  {
    id: 6,
    value: "10.5",
    unit: "mg/dL",
    title: "Calcium",
    subtitle: "Blood Calcium",
    description: "Essential for bone health, nerves, muscles, and the heart.",
    image: "/images/6.avif",
  },
  {
    id: 7,
    value: "4.2",
    unit: "mmol/L",
    title: "Potassium",
    subtitle: "Blood Potassium",
    description: "Helps muscles contract and nerves function properly.",
    image: "/images/7.avif",
  },
];

export default function HealthCards() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let animationId;
    const speed = 0.7;

    const animateScroll = () => {
      if (container) {
        container.scrollLeft += speed;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(animateScroll);
    };

    if (container && container.children.length > 0) {
      container.innerHTML += container.innerHTML;
    }

    animationId = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="bg-[#f3f3f3] py-10 overflow-hidden">
      <div
        ref={containerRef}
        className="flex w-max gap-6 px-6 animate-scroll whitespace-nowrap"
      >
        {[...cards, ...cards].map((card, index) => (
          <div
            key={index}
            className="relative w-[300px] sm:w-[350px] md:w-[500px] h-[400px] md:h-[500px] md:h-[650px] flex-shrink-0 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.01] transition-transform duration-300"
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
              priority
            />

            <div className="absolute top-5 left-5 right-5 flex justify-between items-start text-white z-10">
              {/* Value and Unit */}
              <div className="text-left leading-tight">
                <div className="text-sm">{card.unit}</div>
                <div className="text-3xl md:text-5xl lg:text-6xl font-bold">
                  {card.value}
                </div>
              </div>

              {/* Vertical Line */}
              <div className="w-px h-20 bg-white opacity-50 mx-4 " />

              {/* Title and Subtitle + Dots */}
              <div className="flex flex-row justify-between space-x-10 items-center space-y-1 text-right">
                <div className="flex flex-col ">
                  <div className="text-md md:text-lg font-semibold">{card.title}</div>
                  <div className="text-xs md:text-sm opacity-90">{card.subtitle}</div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="w-2 h-2 bg-white"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Horizontal Divider Line Below Top Section */}
            <div className="absolute left-6 right-6 top-[120px] h-px opacity-50 bg-white  z-10" />

            {/* Description at Bottom */}
            <div className="absolute w-[300px] items-center bottom-6 left-6 right-6 text-white text-sm font-light leading-relaxed drop-shadow z-10">
              {card.description}
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .animate-scroll {
          display: flex;
          animation: scroll-left 60s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
