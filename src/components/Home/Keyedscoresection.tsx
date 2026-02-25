'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from "react";
import { Sparkles } from 'lucide-react'

const metrics = [
    { label: 'Learning Impact',         value: 88, description: 'Are students improving?' },
  { label: 'Teaching Discipline',       value: 92, description: 'Are classrooms executing consistently?' },
  { label: 'Operational Control',          value: 76, description: 'Are systems tight and responsive?' },
  { label: 'Institutional Health',          value: 83, description: 'Based on all scores is the institution stable and sustainable?' },


]

// ── Circular Progress SVG ─────────────────────────────────
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
        <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-widest mb-1">KeyEd Score™</p>
        <p className="text-[#1a1a1c] font-black text-6xl leading-none">{score}</p>
        <p className="text-gray-400 text-[11px] mt-2">out of 100</p>
      </div>
    </div>
  );
}

// ── Metric Card — 2-per-row, screenshot style ─────────────
function MetricCard({ metric, index }: { metric: (typeof metrics)[0]; index: number }) {
  const status = metric.value >= 85 ? 'Strong' : metric.value >= 75 ? 'Good' : 'Needs work'
  const statusDot = metric.value >= 85 ? 'bg-green-400' : metric.value >= 75 ? 'bg-yellow-400' : 'bg-red-400'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.75, delay: index * 0.05 }}
      className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Label + score */} 
      <div className="flex items-center justify-between mb-3">
        <p className="text-lg font-bold text-gray-800 leading-tight">{metric.label}</p>
        <span className="text-lg font-bold text-primary tabular-nums">{metric.value}</span>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-gray-300 rounded-full overflow-hidden mb-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${metric.value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.05 + 0.2 }}
          className="h-full rounded-full bg-gradient-to-br
      from-primary
      to-[#df0000]"
        />
      </div>

      {/* Divider with centre dot — from screenshot */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex-1 h-px bg-gray-100" />
        <div className="w-2 h-2 rounded-full border-2 border-primary" />
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      {/* Description + status pill */}
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm text-gray-400 leading-relaxed">{metric.description}</p>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-50 border border-gray-100 rounded-full text-[10px] font-semibold text-gray-500 whitespace-nowrap flex-shrink-0">
          <span className={`w-1.5 h-1.5 rounded-full ${statusDot}`} />
          {status}
        </span>
      </div>
    </motion.div>
  )
}

// ── Main Component ────────────────────────────────────────
export default function KeyEdScoreSection() {
  return (
    <section className="bg-white p-20 pt-50">
      <div className="px-4">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* ── LEFT — sticky ── */}
          <div
            className="lg:w-2/5 flex-shrink-0"
            style={{ alignSelf: 'flex-start', position: 'sticky', top: '110px' }}
          >
            {/* Label 
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary border border-primary-dark text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              India’s First Institutional Performance Score
            </motion.div>
*/}
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold text-primary leading-tight mb-4"
            >
              India’s First Institutional Performance Score
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 text-md leading-relaxed mb-4"
            >
             A weekly 0–100 performance score reflecting Learning Impact, Teaching Discipline, Operational Control, and Institutional Health.

            </motion.p>

            {/* Circular progress */}
           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center mb-8"
            >
              <DashedCircleProgress score={94} />
            </motion.div>

            {/* AI note */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-start gap-3 bg-primary rounded-2xl px-5 py-4 mt-20"
            >
              <Sparkles className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
              <p className="text-xs text-gray-300 leading-relaxed">
                <span className="text-white font-semibold">AI continuously predicts</span>{' '}
                risks and improvement areas — so leadership can act before problems escalate.
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT — scrollable ── */}
          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-8 content-start">
            {metrics.map((metric, index) => (
              <MetricCard key={metric.label} metric={metric} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}