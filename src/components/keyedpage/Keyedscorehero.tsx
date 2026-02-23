"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, GraduationCap, Settings2, BadgeDollarSign, TrendingUp, Users2 } from "lucide-react";

// ─── Hub nodes ────────────────────────────────────────────────────────────────
const nodes = [
  {
    label: "Academic",
    sub: "Learning outcomes & grades",
    Icon: GraduationCap,
    // position on the circle (angle in degrees, 0 = top)
    angle: -90,
  },
  {
    label: "Operations",
    sub: "Attendance & facilities",
    Icon: Settings2,
    angle: -18,
  },
  {
    label: "Finance",
    sub: "Fee & budget health",
    Icon: BadgeDollarSign,
    angle: 54,
  },
  {
    label: "Growth",
    sub: "Admissions & enrollment",
    Icon: TrendingUp,
    angle: 126,
  },
  {
    label: "Engagement",
    sub: "Staff & parent satisfaction",
    Icon: Users2,
    angle: 198,
  },
];

// ─── Animated dashed spoke ────────────────────────────────────────────────────
function AnimatedSpoke({
  x1, y1, x2, y2, delay,
}: {
  x1: number; y1: number; x2: number; y2: number; delay: number;
}) {
  return (
    <>
      {/* Static base line */}
      <line
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="#0456c9" strokeWidth="1.5" strokeOpacity="0.15"
        strokeDasharray="6 5"
      />
      {/* Animated travelling dash */}
      <motion.line
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="#0456c9"
        strokeWidth="2"
        strokeDasharray="14 100"
        strokeDashoffset="120"
        strokeLinecap="round"
        fill="none"
        animate={{ strokeDashoffset: [-120, 120] }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "linear",
          delay,
        }}
      />
    </>
  );
}

// ─── Hub diagram (SVG + absolutely positioned cards) ─────────────────────────
const CX = 220, CY = 220, RADIUS = 155, SVG_SIZE = 480;

function HubDiagram() {
  // compute node positions
  const nodePositions = nodes.map((n) => {
    const rad = (n.angle * Math.PI) / 180;
    return {
      ...n,
      nx: CX + RADIUS * Math.cos(rad),
      ny: CY + RADIUS * Math.sin(rad),
    };
  });

  return (
    <div className="relative" style={{ width: SVG_SIZE, height: SVG_SIZE }}>

      {/* SVG layer for spokes */}
      <svg
        width={SVG_SIZE} height={SVG_SIZE}
        className="absolute inset-0 pointer-events-none"
      >
        {nodePositions.map((n, i) => (
          <AnimatedSpoke
            key={n.label}
            x1={CX} y1={CY}
            x2={n.nx} y2={n.ny}
            delay={i * 0.44}
          />
        ))}

        {/* Faint orbit ring */}
        <circle
          cx={CX} cy={CY} r={RADIUS}
          fill="none" stroke="rgba(255,255,255,0.05)"
          strokeWidth="1" strokeDasharray="4 8"
        />
      </svg>

      {/* Centre hub */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 160 }}
        style={{
          position: "absolute",
          left: CX - 52, top: CY - 52,
          width: 104, height: 104,
          borderRadius: "50%",
          boxShadow: "0 0 0 12px rgba(249,236,236,0.12), 0 0 40px rgba(249,236,236,0.3)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          zIndex: 20,
        }}
        className="bg-gradient-to-br
      from-primary
      to-secondary"
      >
        {/* Slow pulse ring */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", inset: -16,
            borderRadius: "50%",
            border: "2px solid rgba(249,236,236,0.4)",
          }}
        />
        <span className="text-white font-extrabold text-md leading-none">KeyEd</span>
        <span className="text-white/70 text-sm mt-0.5">Score</span>
        <span className="text-white font-black text-lg leading-none mt-1">94</span>
      </motion.div>

      {/* Node cards */}
      {nodePositions.map((n, i) => {
        const { Icon } = n;
        // offset card so it's centred on the node point
        const cardW = 178, cardH = 78;
        // smart offset so cards don't clip at edges
        const offsetX = n.nx < CX ? -cardW : n.nx === CX ? -cardW / 2 : 0;
        const offsetY = n.ny < CY ? -cardH : n.ny === CY ? -cardH / 2 : -cardH / 2;

        return (
          <motion.div
            key={n.label}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.12, type: "spring", stiffness: 170, damping: 18 }}
            style={{
              position: "absolute",
              left: n.nx + offsetX,
              top: n.ny + offsetY,
              zIndex: 10,
            }}
          >
            {/* Dot at spoke end */}
          

            <div
              className="rounded-2xl p-3 shadow-lg border border-white/25"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
                width: cardW,
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-white" strokeWidth={1.8} />
                </div>
                <span className="text-white text-[12px] font-bold leading-tight">{n.label}</span>
              </div>
              <p className="text-white/40 text-xs leading-tight pl-9">{n.sub}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

// ─── Main Hero ────────────────────────────────────────────────────────────────
export default function KeyEdScoreHero() {
  return (
    <section
      className="relative w-full flex items-center overflow-hidden bg-primary-dark"
    >
      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Radial glow behind right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)" }}
      />

      <div className="
      flex flex-col lg:flex-row gap-16
      relative z-10 px-20 py-24 items-center w-full">

        {/* ── LEFT — Text & CTA ── */}
        <div className="lg:w-2/5 flex-shrink-0">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white shadow-sm"
          >
            <Star className="w-3.5 h-3.5 text-primary fill-primary-dark" />
            <span className="text-primary text-xs font-bold tracking-wide">
              India's First Campus Health Score
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-5xl lg:text-5xl font-medium leading-[1.1] mb-5 text-white font-interTight"
          >The KeyEd Score
           
            <br />
              Institutional Health
              <br />
              at a Glance
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white text-lg leading-relaxed max-w-md mb-10"
          >
            One number that tells you how healthy your institution really is —
            across <span className="text-white/80 font-medium">academics, operations, finance, growth,</span> and{" "}
            <span className="text-white/80 font-medium">engagement.</span>
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-secondary hover:bg-secondary/70 text-white font-bold text-base rounded-full transition-all duration-150 hover:-translate-y-0.5 shadow-lg shadow-orange-900/30 no-underline"
            >
              See Your Score
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/keyed-score"
              className="inline-flex text-white items-center gap-2 px-8 py-4 gray-btn text-primary hover:text-white text-base font-medium transition-colors transition-all no-underline border border-white/10 rounded-full hover:-translate-y-0.5 hover:border-white/20"
            >
              How it works
            </Link>
          </motion.div>

         
        </div>

        {/* ── RIGHT — Hub diagram ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="hidden lg:flex items-center justify-center lg:w-3/5"
        >
          <HubDiagram />
        </motion.div>

      </div>
    </section>
  );
}