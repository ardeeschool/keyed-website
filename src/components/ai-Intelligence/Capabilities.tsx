"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// ─── Steps Data ───────────────────────────────────────────────────────────────
const steps = [
  {
    number: 1,
    title: "Enrollment Forecasting",
    description:
      "Predict enrollment trends, identify admissions bottlenecks, and optimize your recruitment strategy based on historical patterns and market signals.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    alt: "Unified data dashboard screenshot",
  },
  {
    number: 2,
    title: "Academic Risk Detection",
    description:
      "Identify students at risk of falling behind, detect patterns in academic performance, and enable early intervention before issues escalate.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    alt: "Real-time sync analytics screenshot",
  },
  {
    number: 3,
    title: "Operational Bottleneck Alerts",
    description:
      "Receive real-time alerts about operational inefficiencies, resource constraints, and process delays across campus operations.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    alt: "Cross-module intelligence screenshot",
  },
  {
    number: 4,
    title: "Teacher Workload Intelligence",
    description:
      "Monitor teacher workload distribution, identify burnout risks, and optimize resource allocation for better faculty well-being",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80",
    alt: "Single dashboard view screenshot",
  },
  {
    number: 5,
    title: "Financial Forecasting",
    description:
      "Predict revenue patterns, identify collection risks, and optimize budget allocation with AI-powered financial intelligence.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80",
    alt: "Single dashboard view screenshot",
  },
  {
    number: 6,
    title: "Institutional Performance Trends",
    description:
      "Track long-term institutional health metrics, benchmark against goals, and identify strategic opportunities for growth.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80",
    alt: "Single dashboard view screenshot",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Capabilities() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-[#faf8f5] py-20 px-6">

      {/* ── Header ── */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="m-0 text-[clamp(28px,4vw,44px)] font-extrabold text-[#1a2b4a] tracking-tight leading-tight">
          How KeyEd{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #f5a623 0%, #e07b39 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Works Together
          </span>
        </h2>
        <p className="mt-3 text-base text-[#6b7a8d] font-normal">
          All modules share a single data layer for seamless operations
        </p>
      </motion.div>

      {/* ── Main Card ── */}
      <div className="mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden p-20">
        <div className="flex flex-col lg:flex-row min-h-[460px]">

          {/* ── LEFT — Steps list ── */}
          <div className="flex flex-col lg:w-[42%] border-b lg:border-b-0 lg:border-r border-gray-100">
            {steps.map((step, i) => (
              <div
                key={step.number}
                onMouseEnter={() => setActive(i)}
                className={`
                  relative w-full text-left px-7 py-6 flex items-start gap-5
                  border-b border-gray-100 last:border-b-0
                  transition-colors duration-200 cursor-pointer outline-none
                  ${active === i ? "bg-orange-50" : "bg-white hover:bg-gray-50"}
                `}
              >
                {/* Active left border */}
                {active === i && (
                  <motion.div
                    layoutId="activeBar"
                    className="absolute left-0 top-0 h-full w-[3px] rounded-r-full"
                    style={{
                      background: "linear-gradient(180deg, #f5a623 0%, #e07b39 100%)",
                    }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}

                {/* Number bubble */}
                <div
                  className={`
                    w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center
                    text-sm font-bold transition-all duration-200
                    ${active === i ? "text-white shadow-md" : "bg-orange-100 text-[#f5a623]"}
                  `}
                  style={
                    active === i
                      ? { background: "linear-gradient(135deg, #f5a623, #e07b39)" }
                      : {}
                  }
                >
                  {step.number}
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1.5 pt-0.5">
                  <span
                    className={`text-[15px] font-bold leading-snug transition-colors duration-200 ${
                      active === i ? "text-[#1a2b4a]" : "text-[#374151]"
                    }`}
                  >
                    {step.title}
                  </span>
                  <span className="text-[13px] text-[#6b7a8d] leading-relaxed font-normal">
                    {step.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ── RIGHT — Image panel ── */}
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
                {/* Image */}
                <Image
                  src={steps[active].image}
                  alt={steps[active].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  priority={active === 0}
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b4a]/30 via-transparent to-transparent" />

                {/* Step label on image */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <span className="text-white text-sm font-semibold bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {steps[active].title}
                  </span>

                  {/* Dot indicators */}
                  <div className="flex gap-1.5">
                    {steps.map((_, i) => (
                      <button
                        key={i}
                        onMouseEnter={() => setActive(i)}
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
