"use client";

import { useEffect, useRef, useState } from "react";

// ── Counter hook ──────────────────────────────────────────────
function useCounter(target: number, duration: number = 2000, pauseAt: number = 0.9) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startedRef = useRef(false);

  const run = () => {
    if (startedRef.current) return;
    startedRef.current = true;

    const pauseTarget = Math.floor(target * pauseAt);
    let paused = false;

    const tick = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);

      if (!paused && current >= pauseTarget) {
        paused = true;
        setValue(pauseTarget);
        pauseTimerRef.current = setTimeout(() => {
          const remainStart = performance.now();
          const remainDuration = 320;
          const animRemain = (ts: number) => {
            const remProgress = Math.min((ts - remainStart) / remainDuration, 1);
            setValue(Math.floor(pauseTarget + (target - pauseTarget) * remProgress));
            if (remProgress < 1) {
              rafRef.current = requestAnimationFrame(animRemain);
            } else {
              setValue(target);
            }
          };
          rafRef.current = requestAnimationFrame(animRemain);
        }, 420);
        return;
      }

      if (!paused) {
        setValue(current);
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setValue(target);
        }
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, []);

  return { value, run };
}

// ── Shared gradient text style ────────────────────────────────
const gradientTextStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #3d3d3d 0%, #6b6b6b 40%, #2e2e2e 70%, #555555 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  letterSpacing: "-2px",
};

// ── Numeric stat card ─────────────────────────────────────────
interface StatCardProps {
  target: number;
  suffix: string;
  label: string;
  delay?: number;
  triggerStart: boolean;
}

function StatCard({ target, suffix, label, delay = 0, triggerStart }: StatCardProps) {
  const { value, run } = useCounter(target);
  const firedRef = useRef(false);

  useEffect(() => {
    if (triggerStart && !firedRef.current) {
      firedRef.current = true;
      const t = setTimeout(run, delay);
      return () => clearTimeout(t);
    }
  }, [triggerStart]);

  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-4xl md:text-5xl lg:text-6xl font-black tabular-nums leading-none" style={gradientTextStyle}>
        {value}{suffix}
      </span>
      <span className="text-xs md:text-sm font-bold text-zinc-500 tracking-widest uppercase text-center">
        {label}
      </span>
    </div>
  );
}

// ── Static text stat card ─────────────────────────────────────
interface StatTextCardProps {
  display: string;
  label: string;
}

function StatTextCard({ display, label }: StatTextCardProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-4xl md:text-5xl lg:text-6xl font-black leading-none" style={gradientTextStyle}>
        {display}
      </span>
      <span className="text-xs md:text-sm font-bold text-zinc-500 tracking-widest uppercase text-center">
        {label}
      </span>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────
export default function Legacy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-white px-6 py-20">

      {/* Subtle radial warm glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 55% at 50% 30%, rgba(251,146,60,0.05), transparent 70%)" }}
      />

      {/* Heading */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-regular text-zinc-900 mb-3 flex items-baseline flex-wrap justify-center">
          <span>The&nbsp;</span>

          {/* "A" drops from top with bounce, then floats */}
          <span
            className="a-bounce"
            style={{
              background: "linear-gradient(90deg, #f97316, #fbbf24)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
            }}
          >A</span>

          {/* rest of "rdee Legacy" — static orange */}
          <span
            style={{
              background: "linear-gradient(90deg, #f97316, #fbbf24)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >rdee Legacy</span>
        </h2>
        <p className="text-zinc-400 text-base md:text-lg">
          Over 20 years of educational excellence and innovation
        </p>
      </div>

      {/* Stats */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto mb-16">
        <StatCard     target={20}   suffix="+"  label="Years in Education" delay={0}   triggerStart={triggered} />
        <StatTextCard display="Multiple"        label="Campuses" />
        <StatCard     target={1000} suffix="s"  label="Students Educated"  delay={400} triggerStart={triggered} />
        <StatCard     target={100}  suffix="%"  label="Real Experience"    delay={600} triggerStart={triggered} />
      </div>

      {/* Divider */}
      <div className="relative z-10 max-w-4xl mx-auto h-px mb-12"
        style={{ background: "linear-gradient(to right, transparent, rgba(251,146,60,0.4), transparent)" }}
      />

      {/* Story card */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="rounded-2xl p-8 md:p-10 flex gap-8"
          style={{ background: "#fafaf9", border: "1px solid rgba(0,0,0,0.06)" }}
        >
          {/* Orange left border */}
          <div className="flex-shrink-0 self-stretch">
            <div className="w-[3px] h-full rounded-full"
              style={{
                background: "linear-gradient(to bottom, #f97316 0%, #fb923c 35%, #fbbf24 70%, transparent 100%)",
                boxShadow: "0 0 6px rgba(249,115,22,0.3)",
              }}
            />
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-5">
              Ardee Schools: Where it All Began
            </h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-4">
              Ardee Schools has been a trusted name in education for over two decades, operating
              multiple campuses and educating thousands of students across various stages of
              learning. From early childhood education to advanced academics, Ardee has
              consistently delivered quality education while managing complex institutional
              operations.
            </p>
            <p className="text-zinc-500 text-base leading-relaxed">
              Through years of hands-on operational experience, managing diverse campuses,
              coordinating hundreds of staff members, and serving thousands of families, the
              Ardee team developed deep insights into what schools truly need — insights that
              became the foundation for KeyEd.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes aDrop {
          0%   { opacity: 0; transform: translateY(-60px); }
          60%  { opacity: 1; transform: translateY(6px); }
          75%  { transform: translateY(-4px); }
          88%  { transform: translateY(3px); }
          100% { opacity: 1; transform: translateY(0px); }
        }
        @keyframes aFloat {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-5px); }
        }
        .a-bounce {
          animation:
            aDrop  0.9s cubic-bezier(0.16, 1, 0.3, 1) both,
            aFloat 2.5s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
}
