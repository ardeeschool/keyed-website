"use client";

import { useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import { useEffect } from "react";

// ─── Icon Components ──────────────────────────────────────────────────────────
function IconChart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="32" height="32" stroke="#e07b39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}
function IconPeople() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="32" height="32" stroke="#e07b39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function IconLock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="32" height="32" stroke="#e07b39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

// ─── Robot SVG ────────────────────────────────────────────────────────────────
function Robot({ flipped = false }: { flipped?: boolean }) {
  return (
    <svg
      width="56"
      height="72"
      viewBox="0 0 56 72"
      fill="none"
      style={{ transform: flipped ? "scaleX(-1)" : "none" }}
    >
      {/* Antenna */}
      <line x1="28" y1="0" x2="28" y2="10" stroke="#e07b39" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="28" cy="4" r="3.5" fill="#e07b39" />

      {/* Head */}
      <rect x="10" y="10" width="36" height="26" rx="7" fill="#1a2b4a" />
      {/* Eyes */}
      <circle cx="20" cy="22" r="4" fill="#faf8f5" />
      <circle cx="36" cy="22" r="4" fill="#faf8f5" />
      <circle cx="21" cy="22" r="2" fill="#e07b39" />
      <circle cx="37" cy="22" r="2" fill="#e07b39" />
      {/* Mouth */}
      <path d="M20 30 Q28 35 36 30" stroke="#f5a623" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Neck */}
      <rect x="24" y="36" width="8" height="5" rx="2" fill="#1a2b4a" />

      {/* Body */}
      <rect x="8" y="41" width="40" height="24" rx="8" fill="#1a2b4a" />
      {/* Chest light */}
      <circle cx="28" cy="53" r="5" fill="#e07b39" opacity="0.9" />
      <circle cx="28" cy="53" r="3" fill="#f5a623" />

      {/* Left arm */}
      <rect x="0" y="43" width="8" height="18" rx="4" fill="#1a2b4a" />
      {/* Right arm — slightly raised like pushing */}
      <rect x="48" y="41" width="8" height="18" rx="4" fill="#1a2b4a" />

      {/* Legs */}
      <rect x="13" y="64" width="10" height="8" rx="4" fill="#1a2b4a" />
      <rect x="33" y="64" width="10" height="8" rx="4" fill="#1a2b4a" />
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Featuressection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const leftRobot = useAnimation();
  const rightRobot = useAnimation();
  const leftCard = useAnimation();
  const rightCard = useAnimation();
  const middleCard = useAnimation();

  useEffect(() => {
    if (!inView) return;

    async function runSequence() {
      // Step 1: Robots slide in from edges (with cards)
      leftRobot.start({
        x: 0, opacity: 1,
        transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
      });
      rightRobot.start({
        x: 0, opacity: 1,
        transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
      });
      leftCard.start({
        x: 0, opacity: 1,
        transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
      });
      rightCard.start({
        x: 0, opacity: 1,
        transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
      });

      // Step 2: Cards settle, robots pause briefly then exit
      await new Promise((r) => setTimeout(r, 900));

      leftRobot.start({
        x: -160, opacity: 0,
        transition: { duration: 0.5, ease: [0.4, 0, 1, 1] },
      });
      rightRobot.start({
        x: 160, opacity: 0,
        transition: { duration: 0.5, ease: [0.4, 0, 1, 1] },
      });

      // Step 3: Middle card pops in as robots leave
      middleCard.start({
        opacity: 1, scale: 1.06,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      });
    }

    runSequence();
  }, [inView, leftRobot, rightRobot, leftCard, rightCard, middleCard]);

  const font = { fontFamily: '"DM Sans","Helvetica Neue",sans-serif' };

  return (
    <section
      className="w-full flex flex-col items-center text-center px-6 py-20 overflow-hidden"
      style={{ background: "#F8F9FB" }}
    >
      {/* ── Heading ── */}
      <h2
        className="m-0 font-extramedium leading-tight"
        style={{
          ...font,
          fontSize: "clamp(28px, 4vw, 48px)",
          letterSpacing: "-0.025em",
          color: "#1a2b4a",
        }}
      >
        Intelligence That{" "}
        <span
          style={{
            background: "linear-gradient(90deg, #1D1D1F 0%, #0456C9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Empowers Leadership
        </span>
      </h2>

      {/* ── Subheading ── */}
      <p
        className="mt-4 mb-16 max-w-lg leading-relaxed"
        style={{ ...font, fontSize: "clamp(15px, 1.5vw, 17px)", color: "#000" }}
      >
        AI assists your decision-making process — never replaces it.
      </p>

      {/* ── Cards + Robots ── */}
      <div
        ref={ref}
        className="relative flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-5xl"
      >

        {/* ── LEFT: Robot + Card together ── */}
        <div className="relative flex items-center flex-1 w-full">
          {/* Left Robot — slides in ahead of card, exits after */}
          <motion.div
            className="absolute -left-4 z-20 flex items-end"
            style={{ bottom: 8 }}
            initial={{ x: -200, opacity: 0 }}
            animate={leftRobot}
          >
            <Robot />
          </motion.div>

          {/* Left Card */}
          <motion.div
            className="flex flex-col items-center text-center rounded-2xl p-8 flex-1 w-full"
            style={{
              ...font,
              background: "#f5f0e8",
              boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
            }}
            initial={{ x: -160, opacity: 0 }}
            animate={leftCard}
          >
            <div
              className="flex items-center justify-center rounded-full mb-6"
              style={{ width: 72, height: 72, background: "rgba(224,123,57,0.15)" }}
            >
              <IconChart />
            </div>
            <h3 className="m-0 mb-3 font-medium" style={{ fontSize: 18, color: "#1a2b4a", letterSpacing: "-0.01em" }}>
              Predict, Don&apos;t React
            </h3>
            <p className="m-0 leading-relaxed" style={{ fontSize: 15, color: "#6b7a8d" }}>
              Identify trends, risks, and opportunities before they become critical issues.
            </p>
          </motion.div>
        </div>

        {/* ── MIDDLE: Card zooms in after robots leave ── */}
        <motion.div
          className="flex flex-col items-center text-center rounded-2xl p-10 flex-1 w-full z-10"
          style={{
            ...font,
            background: "#f5f0e8",
            boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={middleCard}
        >
          <div
            className="flex items-center justify-center rounded-full mb-6"
            style={{ width: 80, height: 80, background: "rgba(224,123,57,0.18)" }}
          >
            <IconPeople />
          </div>
          <h3 className="m-0 mb-3 font-medium" style={{ fontSize: 20, color: "#1a2b4a", letterSpacing: "-0.01em" }}>
            Human-First AI
          </h3>
          <p className="m-0 leading-relaxed" style={{ fontSize: 15, color: "#6b7a8d" }}>
             AI provides insights. algorithm optimize data. Leadership makes decisions. Your judgment remains central.
          </p>
        </motion.div>

        {/* ── RIGHT: Robot + Card together ── */}
        <div className="relative flex items-center flex-1 w-full">
          {/* Right Robot — flipped, slides in from right */}
          <motion.div
            className="absolute -right-4 z-20 flex items-end"
            style={{ bottom: 8 }}
            initial={{ x: 200, opacity: 0 }}
            animate={rightRobot}
          >
            <Robot flipped />
          </motion.div>

          {/* Right Card */}
          <motion.div
            className="flex flex-col items-center text-center rounded-2xl p-8 flex-1 w-full"
            style={{
              ...font,
              background: "#f5f0e8",
              boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
            }}
            initial={{ x: 160, opacity: 0 }}
            animate={rightCard}
          >
            <div
              className="flex items-center justify-center rounded-full mb-6"
              style={{ width: 72, height: 72, background: "rgba(224,123,57,0.15)" }}
            >
              <IconLock />
            </div>
            <h3 className="m-0 mb-3 font-medium" style={{ fontSize: 18, color: "#1a2b4a", letterSpacing: "-0.01em" }}>
              Secure &amp; Ethical
            </h3>
            <p className="m-0 leading-relaxed" style={{ fontSize: 15, color: "#6b7a8d" }}>
              Your data stays private. AI operates within strict ethical and security protocols.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
