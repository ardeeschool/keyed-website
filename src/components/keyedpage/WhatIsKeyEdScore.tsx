"use client";

import { motion } from "motion/react";
import { useRef, useEffect, useState } from "react";
import {
  GraduationCap,
  Settings2,
  BadgeDollarSign,
  TrendingUp,
  MonitorPlay,
  Smile,
  Building2,
} from "lucide-react";

const dimensions = [
  {
    Icon: GraduationCap,
    title: "Academic Performance",
    desc: "Student achievement trends, learning outcomes, assessment results, and academic progress across all grades and subjects.",
    weight: 88,
  },
  {
    Icon: Settings2,
    title: "Operational Efficiency",
    desc: "Campus operations, resource utilization, process effectiveness, and overall institutional productivity.",
    weight: 92,
  },
  {
    Icon: BadgeDollarSign,
    title: "Financial Stability",
    desc: "Revenue health, collection efficiency, expense management, budget adherence, and overall financial sustainability.",
    weight: 76,
  },
  {
    Icon: TrendingUp,
    title: "Enrollment Momentum",
    desc: "Admissions pipeline health, conversion rates, enrollment growth trends, and retention metrics.",
    weight: 83,
  },
  {
    Icon: MonitorPlay,
    title: "Teacher Engagement",
    desc: "Faculty satisfaction, retention rates, professional development participation, and overall teacher well-being.",
    weight: 79,
  },
  {
    Icon: Smile,
    title: "Parent & Student Satisfaction",
    desc: "Community engagement, feedback scores, satisfaction ratings, and overall stakeholder happiness.",
    weight: 85,
  },
  {
    Icon: Building2,
    title: "Infrastructure Readiness",
    desc: "Facilities quality, technology infrastructure, maintenance status, and overall campus preparedness.",
    weight: 71,
  },
];

// ─── Dashed circular progress ─────────────────────────────────────────────────
function DashedCircleProgress({ score = 94 }: { score?: number }) {
  const SIZE = 220;
  const DASH_COUNT = 60;
  const R = 96;
  const [animFilled, setAnimFilled] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const filledDashes = Math.round((score / 100) * DASH_COUNT);

  // ── Trigger only when scrolled into view ──
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  // ── rAF counter ──
  useEffect(() => {
    if (!hasStarted) return;
    let frame: number;
    let start: number | null = null;
    const duration = 1800;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setAnimFilled(Math.round(ease * filledDashes));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [hasStarted, filledDashes]);

  const dashes = Array.from({ length: DASH_COUNT }, (_, i) => {
    const angle = (i / DASH_COUNT) * 360 - 90;
    const rad = (angle * Math.PI) / 180;
    const cx = SIZE / 2, cy = SIZE / 2;
    const inner = R - 7, outer = R + 7;
    return (
      <line
        key={i}
        x1={cx + inner * Math.cos(rad)}
        y1={cy + inner * Math.sin(rad)}
        x2={cx + outer * Math.cos(rad)}
        y2={cy + outer * Math.sin(rad)}
        strokeWidth="5"
        strokeLinecap="round"
        stroke={i < animFilled ? "#1a1a1c" : "#E5E7EB"}
        style={{ transition: "stroke 0.05s ease" }}
      />
    );
  });

  return (
    <div
      ref={wrapperRef}
      className="relative flex items-center justify-center"
      style={{ width: SIZE, height: SIZE }}
    >
      <svg width={SIZE} height={SIZE} className="absolute inset-0">{dashes}</svg>
      <div className="flex flex-col items-center justify-center text-center z-10">
        <p className="text-gray-400 text-[10px] font-medium uppercase tracking-widest mb-1">KeyEd Score™</p>
        <p className="text-[#1a1a1c] font-black text-6xl leading-none">{score}</p>
        <p className="text-gray-400 text-[11px] mt-2">out of 100</p>
      </div>
    </div>
  );
}

// ─── Dimension card ───────────────────────────────────────────────────────────
function DimensionCard({
  Icon, title, desc, index,
}: (typeof dimensions)[0] & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#F9FAFB] rounded-2xl p-6 flex items-start gap-5 flex-col hover:bg-[#EEEEF1] transition-colors duration-200 sticky top-[100px]"
    >
      <div className="flex-shrink-0 mt-0.5">
        <Icon className="w-14 h-14 text-[#1a1a1c]" strokeWidth={0.6} />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-xl md:text-2xl font-normal text-[#1a2b4a] leading-snug mb-1">{title}</h3>
        <p className="text-sm text-[#6b7a8d] leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function WhatIsKeyEdScore() {
  return (
    <section className="relative bg-[linear-gradient(180deg,#FFFBFB00_0%,#F5F3F3_100%)]">
      <div className="mx-auto px-4 pb-42 md:px-30 md:pb-32">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-16">

          {/* ── LEFT sticky — circle centred ── */}
          <div className="lg:w-[55%] lg:sticky lg:top-16 lg:h-screen py-10 pb-0 md:py-20" style={{ display: 'flex', flexDirection: 'column' }}>

            <p className="text-xs font-normal text-white bg-[#1a1a1c] w-[150px] p-2 text-center rounded-2xl uppercase tracking-widest mb-4">
              KeyEd Score™
            </p>

            <h2 className="text-3xl lg:text-5xl font-[400] text-[#1a1a1c] leading-tight mb-3">
              What is the{" "}
              <span className="text-[#1a1a1c] p-2 rounded-xl">KeyEd Score™?</span>
            </h2>

            <p className="text-[#6b7a8d] text-md md:mb-6 md:mt-6 mb-2 mt-2">
              A real-time health indicator for educational institutions
            </p>

            <div className="relative rounded-2xl mb-10">
              <p className="text-md text-[#6b7a8d] leading-relaxed mb-3">
                The KeyEd Score™ is a comprehensive institutional health metric that combines data from
                every aspect of your school into a single, easy-to-understand number between 0–100.
              </p>
              <p className="text-md text-[#6b7a8d] leading-relaxed">
                Just as credit scores measure financial health and NPS measures customer satisfaction,
                the KeyEd Score™ measures your institution's overall health across all critical dimensions.
              </p>
            </div>

            {/* Circle — takes remaining height and centres itself */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <DashedCircleProgress score={94} />
            </div>

          </div>

          {/* ── RIGHT scrolling cards ── */}
          <div className="lg:w-[45%] md:py-20 py-4 lg:py-28 flex flex-col gap-4">

            {/*<motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <h3 className="text-2xl font-medium text-[#1a2b4a] leading-tight mb-1">
                Seven Dimensions of Institutional Health
              </h3>
              <p className="text-[#6b7a8d] text-sm">
                Your KeyEd Score™ is calculated from these critical metrics
              </p>
            </motion.div>*/}

            {dimensions.map((dim, i) => (
              <DimensionCard key={dim.title} {...dim} index={i} />
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-2 rounded-2xl p-5 text-center border-2 border-dashed border-gray-200 bg-gray-50"
            >
              <p className="text-sm font-medium text-[#1a2b4a] mb-1">
                All 7 dimensions · Weighted & calculated in real-time
              </p>
              <p className="text-xs text-[#6b7a8d]">
                Your score updates automatically as your institution evolves
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}