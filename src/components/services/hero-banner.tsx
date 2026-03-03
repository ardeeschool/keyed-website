"use client";

import { useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";

// ─── Words ────────────────────────────────────────────────────────────────────
const TITLE_LINE_1 = ["One", "Ecosystem."];
const TITLE_LINE_2 = ["Every", "Function", "Connected."];

// ─── Variants ─────────────────────────────────────────────────────────────────
const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    width: 0,
    overflow: "hidden",
    display: "inline-block",
    whiteSpace: "nowrap",
  },
  visible: (i: number) => ({
    opacity: 1,
    width: "auto",
    transition: {
      width: { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: i * 0.38 },
      opacity: { duration: 0.01, delay: i * 0.38 },
    },
  }),
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 2.4 },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: -8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function HeroBanner() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section
      className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden px-5 sm:px-6 py-12 sm:py-[40px]"
      style={{
        background: "linear-gradient(135deg, var(--beige) 0%, var(--white) 100%)",
      }}
    >
      {/* Blob — top left */}
      <div
        className="absolute rounded-full pointer-events-none opacity-40"
        style={{
          width: 520,
          height: 520,
          background: "radial-gradient(circle, #f7e4d5 0%, transparent 70%)",
          filter: "blur(90px)",
          top: -120,
          left: -160,
        }}
      />

      {/* Blob — bottom right */}
      <div
        className="absolute rounded-full pointer-events-none opacity-40"
        style={{
          width: 480,
          height: 480,
          background: "radial-gradient(circle, #fdecd6 0%, transparent 70%)",
          filter: "blur(90px)",
          bottom: -140,
          right: -140,
        }}
      />

      {/* ── Inner ── */}
      <div className="relative z-10 flex flex-col items-center text-center gap-4 max-w-[820px] w-full">

        {/* Badge (empty as in original) */}
        <motion.div
          className=" hidden inline-flex items-center gap-2 px-5 py-2 rounded-full backdrop-blur-sm"
          style={{
            background: "",
            border: "",
            boxShadow: "",
          }}
          variants={badgeVariants}
          initial="hidden"
          animate={controls}
        />

        {/* ── Heading ── */}
        <h1 className="m-0 flex flex-col items-center gap-1.5">

          {/* Line 1 — large, dark */}
          <span
            className="block whitespace-nowrap font-medium leading-[1.1] tracking-[-0.025em] text-black"
            style={{ fontSize: "clamp(42px, 7vw, 76px)" }}
          >
            {TITLE_LINE_1.map((word, i) => (
              <motion.span
                key={`l1-${word}`}
                className="inline-block overflow-hidden whitespace-nowrap align-bottom"
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate={controls}
              >
                {word}
                {i < TITLE_LINE_1.length - 1 ? "\u00A0" : ""}
              </motion.span>
            ))}
          </span>

          {/* Line 2 — smaller, blue gradient; wraps on very small screens */}
          <span
            className="block font-medium leading-[1.1] tracking-[-0.025em] whitespace-normal sm:whitespace-nowrap"
            style={{
              fontSize: "clamp(26px, 4vw, 50px)",
              background: "linear-gradient(90deg, #000000 0%, #0456c9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {TITLE_LINE_2.map((word, j) => {
              const globalIdx = TITLE_LINE_1.length + j;
              return (
                <motion.span
                  key={`l2-${word}`}
                  className="inline-block overflow-hidden whitespace-nowrap align-bottom"
                  custom={globalIdx}
                  variants={wordVariants}
                  initial="hidden"
                  animate={controls}
                >
                  {word}
                  {j < TITLE_LINE_2.length - 1 ? "\u00A0" : ""}
                </motion.span>
              );
            })}
          </span>
        </h1>

        {/* ── Subtitle ── */}
        <motion.p
          className="m-0 max-w-[560px] leading-[1.7] font-normal text-[#1D1D1F] px-2 sm:px-0"
          style={{ fontSize: "clamp(15px, 1.6vw, 17px)" }}
          variants={subtitleVariants}
          initial="hidden"
          animate={controls}
        >
          KeyEd runs your school's core operations across academics, admissions,
          finance, people, and governance — on a single system.
        </motion.p>
      </div>
    </section>
  );
}
