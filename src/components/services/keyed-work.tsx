"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const steps = [
  {
    number: 1,
    title: "Unified Data Layer",
    description:
      "All modules operate on a single database, ensuring data consistency and eliminating duplicate entry across systems.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    alt: "Unified data dashboard screenshot",
  },
  {
    number: 2,
    title: "Real-Time Sync",
    description:
      "Updates in one module instantly reflect across the entire platform, giving leadership current information at all times.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    alt: "Real-time sync analytics screenshot",
  },
  {
    number: 3,
    title: "Cross-Module Intelligence",
    description:
      "AI analyzes patterns across all modules to provide institutional insights that single systems could never deliver.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    alt: "Cross-module intelligence screenshot",
  },
  {
    number: 4,
    title: "Single Dashboard View",
    description:
      "Leadership sees the complete picture from one dashboard — no more switching between disconnected systems.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80",
    alt: "Single dashboard view screenshot",
  },
];

const STEP_DURATION = 3000; // ms per step

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Observe when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-advance steps when in view and not paused
  useEffect(() => {
    if (isInView && !isPaused) {
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % steps.length);
      }, STEP_DURATION);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isInView, isPaused]);

  // Manual click — pause auto-play for 8s then resume
  const handleManualClick = (i: number) => {
    setActive(i);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  return (
    <section ref={sectionRef} className="w-full bg-white lg:py-20 lg:px-6 lg:pb-30 py-12 px-4 pb-12">

      {/* Header */}
      <motion.div
        className="text-center mb-8 md:mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="m-0 text-3xl md:text-5xl font-medium text-primary tracking-tight leading-tight">
          How KeyEd Works Together
        </h2>
        <p className="mt-3 text-base text-gray-500 font-normal">
          All modules share a single data layer for seamless operations
        </p>
      </motion.div>

      {/* Main Card */}
      <div className="max-w-[1000px] mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[460px]">

          {/* LEFT — Steps list */}
          <div className="flex flex-col lg:w-[42%] border-b lg:border-b-0 lg:border-r border-gray-100">
            {steps.map((step, i) => (
              <button
                key={step.number}
                onClick={() => handleManualClick(i)}
                className={`
                  relative w-full text-left px-4 md:px-7 py-6 flex items-start gap-5
                  border-b border-gray-100 last:border-b-0
                  transition-colors duration-200 cursor-pointer outline-none
                  ${active === i ? "bg-primary" : "bg-white hover:bg-gray-50"}
                `}
              >
                {/* Active left border */}
                {active === i && (
                  <motion.div
                    layoutId="activeBar"
                    className="absolute left-0 top-0 h-full w-[3px] rounded-r-full bg-gradient-to-br from-primary to-secondary"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}

                {/* Progress bar at bottom of active step */}
                {active === i && !isPaused && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-white"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: STEP_DURATION / 1000, ease: "linear" }}
                    key={`progress-${active}`}
                  />
                )}

                {/* Number bubble */}
                <div
                  className={`
                    w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center
                    text-sm font-medium transition-all duration-200
                    ${active === i
                      ? "text-white shadow-md"
                      : "bg-gradient-to-br from-primary-light to-secondary/25 text-white"
                    }
                  `}
                  style={
                    active === i
                      ? { background: "linear-gradient(135deg, #999999, #0456c9)" }
                      : {}
                  }
                >
                  {step.number}
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1.5 pt-0.5">
                  <span
                    className={`text-[15px] font-medium leading-snug transition-colors duration-200 ${
                      active === i ? "text-white" : "text-black"
                    }`}
                  >
                    {step.title}
                  </span>
                  <span className={`text-[13px] leading-relaxed font-normal ${
                    active === i ? "text-white" : "text-black"
                  }`}>
                    {step.description}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT — Image panel */}
          <div className="lg:w-[58%] relative overflow-hidden bg-gray-50 flex items-center justify-center min-h-[320px] lg:min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={steps[active].image}
                  alt={steps[active].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  priority={active === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b4a]/30 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <span className="text-white text-sm font-semimedium bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {steps[active].title}
                  </span>

                  {/* Dot indicators */}
                  <div className="flex gap-1.5">
                    {steps.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => handleManualClick(i)}
                        className={`rounded-full transition-all duration-300 outline-none ${
                          active === i
                            ? "w-6 h-2 bg-[#f5a623]"
                            : "w-2 h-2 bg-white/60 hover:bg-white"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}