"use client";

import { motion } from "motion/react";

const SENTENCE = "The Power of Learning";

// Separator dot between repetitions
function Dot() {
  return (
    <span className="mx-6 lg:mx-10 inline-block w-2 h-2 rounded-full bg-gray-300 align-middle" />
  );
}

// One full track of repeated items
function MarqueeTrack() {
  // Repeat enough times to fill wide screens seamlessly
  const items = Array.from({ length: 8 });

  return (
    <div className="flex items-center shrink-0">
      {items.map((_, i) => (
        <span key={i} className="flex items-center">
          <span className="text-2xl md:text-6xl lg:text-7xl font-medium font-interTight text-primary/80 whitespace-nowrap leading-none tracking-tight">
            {SENTENCE}
          </span>
          <Dot />
        </span>
      ))}
    </div>
  );
}

export default function MarqueeBanner() {
  return (
    <section className="w-full  py-8 lg:py-12 overflow-hidden">
      {/* Fade masks on left & right edges */}
      <div className="relative">
        <div
          className="pointer-events-none absolute left-0 top-0 h-64 w-24 lg:w-100 z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-64 w-24 lg:w-100 z-10"
          style={{
            background:
              "linear-gradient(270deg, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* Scrolling wrapper — two identical tracks side-by-side for seamless loop */}
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 6,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <MarqueeTrack />
          <MarqueeTrack />
        </motion.div>
      </div>
    </section>
  );
}