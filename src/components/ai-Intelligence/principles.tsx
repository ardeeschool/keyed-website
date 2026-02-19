"use client";

import { motion, Variants } from "framer-motion";

const font = { fontFamily: '"DM Sans","Helvetica Neue",sans-serif' };

// ─── Animation Variants ───────────────────────────────────────────────────────
const floatVariants: Variants = {
  animate: (i: number) => ({
    y: [0, -10, 0],
    transition: {
      duration: 3 + i * 0.4,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: i * 0.5,
    },
  }),
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: i * 0.15,
    },
  }),
};

// ─── Icons ────────────────────────────────────────────────────────────────────
function IconHuman() {
  return (
    <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
      <circle cx="17" cy="13" r="6" fill="#f5a623" />
      <path d="M5 34c0-6.627 5.373-12 12-12h0c6.627 0 12 5.373 12 12" stroke="#f5a623" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="30" cy="28" r="7" fill="#e07b39" />
      <path d="M27 28l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconAssist() {
  return (
    <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
      <path d="M10 24l4-12a2 2 0 0 1 4 0v7l2-3a2 2 0 0 1 4 0l1 2a2 2 0 0 1 4 0v6c0 4-3 8-8 8h-4c-3 0-5-1-7-3z" fill="#f5a623" opacity="0.9" />
      <circle cx="32" cy="10" r="4" fill="#e07b39" />
      <path d="M32 7v2M32 11v2M29 10h2M33 10h2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
      <path d="M20 4l13 5v9c0 8-6 14-13 17C13 32 7 26 7 18V9l13-5z" fill="#f5a623" opacity="0.9" />
      <rect x="14" y="20" width="12" height="9" rx="2" fill="white" opacity="0.9" />
      <path d="M16 20v-3a4 4 0 0 1 8 0v3" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="20" cy="24" r="1.5" fill="#e07b39" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const principles = [
  {
    Icon: IconHuman,
    title: "Human Decision Remains Primary",
    desc: "AI provides recommendations and insights. Final decisions always rest with institutional leadership. Technology augments, never overrides, human judgment.",
    ring1: "rgba(245,166,35,0.18)",
    ring2: "rgba(245,166,35,0.08)",
    glow: "rgba(245,166,35,0.35)",
  },
  {
    Icon: IconAssist,
    title: "AI Assists, Not Replaces",
    desc: "Our AI is designed to enhance institutional capacity, not replace staff. It empowers teams to make better decisions faster, not eliminate human expertise.",
    ring1: "rgba(224,123,57,0.18)",
    ring2: "rgba(224,123,57,0.08)",
    glow: "rgba(224,123,57,0.35)",
  },
  {
    Icon: IconShield,
    title: "Secure and Ethical Data Handling",
    desc: "Student and institutional data is handled with the highest security and privacy standards. AI models are trained ethically, transparently, and responsibly.",
    ring1: "rgba(245,166,35,0.18)",
    ring2: "rgba(245,166,35,0.08)",
    glow: "rgba(245,166,35,0.35)",
  },
];

// ─── Full-section animated network background ─────────────────────────────────
function NetworkBackground() {
  const nodes = [
    { cx: 80,  cy: 100 },
    { cx: 300, cy: 50  },
    { cx: 520, cy: 130 },
    { cx: 750, cy: 60  },
    { cx: 950, cy: 120 },
    { cx: 180, cy: 400 },
    { cx: 480, cy: 450 },
    { cx: 780, cy: 380 },
    { cx: 960, cy: 500 },
  ];

  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [0, 5], [2, 6], [4, 7],
    [5, 6], [6, 7], [7, 8],
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1024 640"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="pulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f5a623" stopOpacity="0" />
          <stop offset="50%" stopColor="#f5a623" stopOpacity="1" />
          <stop offset="100%" stopColor="#e07b39" stopOpacity="0" />
        </linearGradient>
        <filter id="nodeGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Static dim base lines */}
      {connections.map(([a, b], idx) => (
        <line
          key={`base-${idx}`}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke="rgba(245,166,35,0.1)"
          strokeWidth="1"
        />
      ))}

      {/* Animated travelling pulses */}
      {connections.map(([a, b], idx) => {
        const dur = 2.5 + (idx % 6) * 0.5;
        const delay = (idx * 0.35) % 5;
        return (
          <motion.line
            key={`pulse-${idx}`}
            x1={nodes[a].cx} y1={nodes[a].cy}
            x2={nodes[b].cx} y2={nodes[b].cy}
            stroke="rgba(245,166,35,0.35)"
            strokeWidth="1.5"
            filter="url(#nodeGlow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{
              duration: dur,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Nodes with pulse rings */}
      {nodes.map((n, idx) => (
        <g key={`node-${idx}`}>
          <motion.circle
            cx={n.cx} cy={n.cy} r={5}
            fill="none"
            stroke="rgba(245,166,35,0.3)"
            strokeWidth="1"
            animate={{ r: [5, 14], opacity: [0.6, 0] }}
            transition={{
              duration: 2.2,
              delay: idx * 0.25,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          <circle
            cx={n.cx} cy={n.cy} r={3}
            fill="#f5a623"
            opacity={0.4}
            filter="url(#nodeGlow)"
          />
        </g>
      ))}
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function AIPrinciples() {
  return (
    <section
      className="relative w-full flex flex-col items-center text-center px-6 py-24 overflow-hidden mb-20"
      style={{
        background: "#0f1e35",
      }}
    >
      {/* ── Full-section network background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <NetworkBackground />
      </div>

      {/* Dark overlay so text stays readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, rgba(13,71,161,0.45) 0%, rgba(10,61,143,0.7) 100%)",
        }}
      />

      {/* ── All content sits above the network ── */}
      <div className="relative z-10 w-full flex flex-col items-center">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-16"
        >
          <h2
            className="m-0 font-extrabold leading-tight"
            style={{
              ...font,
              fontSize: "clamp(28px,4vw,48px)",
              letterSpacing: "-0.025em",
              color: "#ffffff",
            }}
          >
            Responsible{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f5a623 0%, #e07b39 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AI Principles
            </span>
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto leading-relaxed"
            style={{ ...font, fontSize: "clamp(15px,1.5vw,17px)", color: "#8a9bb5" }}
          >
            Trust, transparency, and ethics guide every AI decision at KeyEd
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-8 w-full max-w-5xl mb-16">
          {principles.map(({ Icon, title, desc, ring1, ring2, glow }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col items-center text-center flex-1"
            >
              {/* Floating bubble */}
              <motion.div
                custom={i}
                variants={floatVariants}
                animate="animate"
                className="relative mb-8 flex items-center justify-center"
                style={{ width: 120, height: 120 }}
              >
                <div
                  className="absolute rounded-full"
                  style={{
                    inset: 0,
                    background: `radial-gradient(circle, ${ring1} 0%, ${ring2} 60%, transparent 100%)`,
                    border: `1px solid ${ring1}`,
                  }}
                />
                <motion.div
                  className="absolute rounded-full"
                  style={{ width: 8, height: 8, background: "#f5a623", top: 6, left: "50%", marginLeft: -4 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6 + i, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute rounded-full"
                  style={{ width: 5, height: 5, background: "#e07b39", bottom: 8, right: 14 }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 8 + i, repeat: Infinity, ease: "linear" }}
                />
                <div
                  className="relative z-10 rounded-full flex items-center justify-center"
                  style={{
                    width: 80, height: 80,
                    background: "linear-gradient(145deg, #1e3452 0%, #162840 100%)",
                    boxShadow: `0 0 28px ${glow}, 0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)`,
                    border: "1.5px solid rgba(245,166,35,0.25)",
                  }}
                >
                  <Icon />
                </div>
                <div
                  className="absolute rounded-full pointer-events-none"
                  style={{ width: 80, height: 80, background: glow, filter: "blur(18px)", opacity: 0.4, zIndex: 0 }}
                />
              </motion.div>

              <h3
                className="m-0 mb-3 font-bold leading-snug"
                style={{ ...font, fontSize: 18, color: "#ffffff", letterSpacing: "-0.01em", maxWidth: 220 }}
              >
                {title}
              </h3>
              <p
                className="m-0 leading-relaxed"
                style={{ ...font, fontSize: 14, color: "#8a9bb5", maxWidth: 280 }}
              >
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Quote block ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 }}
          className=" hidden w-full max-w-2xl rounded-2xl px-10 py-10 text-center"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(245,166,35,0.2)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 4px 40px rgba(0,0,0,0.2)",
          }}
        >
          <div
            className="text-5xl font-serif mb-4 leading-none"
            style={{ color: "#f5a623", opacity: 0.85 }}
          >
            ❝
          </div>
          <p
            className="hidden m-0 leading-relaxed"
            style={{
              ...font,
              fontSize: "clamp(15px,1.6vw,18px)",
              color: "#e8f0fe",
              fontStyle: "italic",
            }}
          >
            "AI at KeyEd exists to give educators and leaders more time, better
            insights, and clearer paths forward — not to replace the human wisdom
            that makes great institutions."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
