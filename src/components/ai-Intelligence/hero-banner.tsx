"use client";

import { useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";

// ─── Words ────────────────────────────────────────────────────────────────────
const TITLE_LINE_1 = ["AI-Powered", "Intelligence", "for."];
const TITLE_LINE_2 = ["Institutional", "Decisions."];

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
    opacity: 1, y: 0,
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 2.4 },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: -8 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 2.9 },
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
      className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden px-6 py-20"
      style={{ background: "linear-gradient(135deg, var(--beige) 0%, var(--white) 100%)" }}
    >
      {/* Background blobs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 520, height: 520,
          background: "radial-gradient(circle, #f7e4d5 0%, transparent 70%)",
          filter: "blur(90px)", opacity: 0.4, top: -120, left: -160,
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 480, height: 480,
          background: "radial-gradient(circle, #fdecd6 0%, transparent 70%)",
          filter: "blur(90px)", opacity: 0.4, bottom: -140, right: -140,
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-4 max-w-3xl w-full">

        {/* ── Badge ── */}
        <motion.div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full backdrop-blur-sm"
          style={{
            background: "",
            border: "",
            boxShadow: "",
          }}
          variants={badgeVariants}
          initial="hidden"
          animate={controls}
        >
          <span className="text-sm hidden" style={{ color: "#e07b39" }}>🔶</span>
          <span
            className="text-[13px] font-semibold tracking-wide hidden"
            style={{ color: "#c96a28"
              
             }}
          >
            Intelligent Decision Support
          </span>
        </motion.div>

        {/* ── Heading ── */}
        <h1 className="m-0 flex flex-col items-center gap-1.5 font-interTight">

          {/* Line 1 — large dark */}
          <span
            className="block whitespace-nowrap font-medium leading-tight"
            style={{
              fontSize: "clamp(42px, 7vw, 76px)",
              color: "#1D1D1F ",
              letterSpacing: "-0.025em",
            }}
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
                {word}{i < TITLE_LINE_1.length - 1 ? "\u00A0" : ""}
              </motion.span>
            ))}
          </span>

          {/* Line 2 — smaller orange gradient */}
          <span
            className="block whitespace-nowrap font-medium leading-tight font-interTight"
            style={{
              fontSize: "clamp(26px, 4vw, 50px)",
              background: "linear-gradient(90deg, #1D1D1F 0%, #0456C9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.025em",
            }}
          >
            {TITLE_LINE_2.map((word, j) => {
              const globalIdx = TITLE_LINE_1.length + j;
              return (
                <motion.span
                  key={`l2-${word}`}
                  className="inline-block overflow-hidden whitespace-nowrap align-bottom font-interTight"
                  custom={globalIdx}
                  variants={wordVariants}
                  initial="hidden"
                  animate={controls}
                >
                  {word}{j < TITLE_LINE_2.length - 1 ? "\u00A0" : ""}
                </motion.span>
              );
            })}
          </span>
        </h1>

        {/* ── Subtitle ── */}
        <motion.p
          className="m-0 max-w-xl leading-relaxed font-normal"
          style={{
            fontSize: "clamp(15px, 1.6vw, 17px)",
            color: "#000",
          }}
          variants={subtitleVariants}
          initial="hidden"
          animate={controls}
        >
          KeyEd uses data and AI responsibly to help school leadership predict risks, improve performance, and make faster decisions.
        </motion.p>

        {/* ── CTA Button ── */}
        <motion.div
          className="mt-2"
          variants={buttonVariants}
          initial="hidden"
          animate={controls}
        >
          <button
            className="group inline-flex items-center gap-2.5 px-9 py-4 rounded-[14px] text-white font-bold text-base tracking-wide border-none cursor-pointer transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.99]"
            style={{
              background: "#0456C9",
              boxShadow: "0 4px 20px rgba(224,123,57,0.35), 0 1px 3px rgba(0,0,0,0.08)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 8px 28px rgba(224,123,57,0.45), 0 2px 6px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 4px 20px rgba(224,123,57,0.35), 0 1px 3px rgba(0,0,0,0.08)";
            }}
          >
            Request Callback
            <span className="text-lg transition-transform duration-200 ease-out group-hover:translate-x-1">
              →
            </span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
