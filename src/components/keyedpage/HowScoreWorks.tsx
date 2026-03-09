"use client";

import { motion, useAnimationFrame } from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  Database,
  BrainCircuit,
  BarChart3,
  Lightbulb,
  GraduationCap,
  BadgeDollarSign,
  TrendingUp,
  Settings2,
  Users2,
  ChevronDown,
} from "lucide-react";

// ─── Steps ────────────────────────────────────────────────────────────────────
const steps = [
  {
    n: 1,
    Icon: Database,
    title: "Continuous Data Collection",
    desc: "KeyEd continuously gathers data from all platform modules — academics, operations, finance, admissions, and more.",
  },
  {
    n: 2,
    Icon: BrainCircuit,
    title: "AI-Powered Analysis",
    desc: "Machine learning algorithms analyze patterns, trends, and anomalies across all seven dimensions of institutional health.",
  },
  {
    n: 3,
    Icon: BarChart3,
    title: "Score Calculation",
    desc: "Each dimension receives a weighted score, then combined into your overall KeyEd Score™ (0–100).",
  },
  {
    n: 4,
    Icon: Lightbulb,
    title: "Actionable Insights",
    desc: "AI identifies improvement opportunities and predicts risks, giving leadership clear paths to raise their score.",
  },
];

// ─── Input modules ────────────────────────────────────────────────────────────
const inputs = [
  { Icon: GraduationCap, label: "Academics" },
  { Icon: BadgeDollarSign, label: "Finance" },
  { Icon: TrendingUp, label: "Admissions" },
  { Icon: Settings2, label: "Operations" },
  { Icon: Users2, label: "People" },
];

// ─── Pipeline steps (for flow diagram) ────────────────────────────────────────
const pipeline = [
  { Icon: Database, label: "Collect", bg: "bg-black" },
  { Icon: BrainCircuit, label: "Analyse", bg: "bg-secondary" },
  { Icon: BarChart3, label: "Calculate", bg: "bg-primary-dark" },
  { Icon: Lightbulb, label: "Insights", bg: "bg-secondary" },
];

// ─── Animated travelling dot along a straight horizontal path ─────────────────
function TravellingDot({
  startX, endX, y, duration, delay, color = "#000000",
}: {
  startX: number; endX: number; y: number;
  duration: number; delay: number; color?: string;
}) {
  return (
    <motion.circle
      cx={startX} cy={y} r={3}
      fill={color}
      animate={{ cx: [startX, endX] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay,
        repeatDelay: 0,
      }}
    />
  );
}

// ─── Animated converging path dot ─────────────────────────────────────────────
function PathDot({
  path, duration, delay,
}: {
  path: string; duration: number; delay: number;
}) {
  const ref = useRef<SVGCircleElement>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const svgNS = "http://www.w3.org/2000/svg";
    const p = document.createElementNS(svgNS, "path");
    p.setAttribute("d", path);
    pathRef.current = p;
  }, [path]);

  useAnimationFrame((t) => {
    if (!ref.current || !pathRef.current) return;
    const totalLength = pathRef.current.getTotalLength();
    const offset = delay * 1000;
    const elapsed = ((t + offset) % (duration * 1000)) / (duration * 1000);
    const point = pathRef.current.getPointAtLength(elapsed * totalLength);
    ref.current.setAttribute("cx", String(point.x));
    ref.current.setAttribute("cy", String(point.y));
  });

  return <circle ref={ref} r={3} fill="#000" opacity={0.9} />;
}

// ─── Step card ────────────────────────────────────────────────────────────────
function StepCard({
  n, Icon, title, desc, index,
}: (typeof steps)[0] & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-start gap-4 bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 relative"
    >
      {/* Step number */}
      <div className="flex items-center gap-3 w-full">
        <div className="w-9 h-9 rounded-full iconStyle flex items-center justify-center flex-shrink-0">
          <span className="text-white font-black text-sm">{n}</span>
        </div>
        <div className="flex-1 h-px bg-gray-100" />
        <Icon className="w-5 h-5 text-gray-300" strokeWidth={1.5} />
      </div>

      <div>
        <h3 className="text-[15px] md:text-[16px] font-medium text-[#1a2b4a] leading-snug mb-2">{title}</h3>
        <p className="text-[13px] md:text-[13.5px] text-[#6b7a8d] leading-relaxed">{desc}</p>
      </div>

      {/* Connector dot (right edge, desktop only) */}
      {n < 4 && (
        <div className="hidden lg:block absolute -right-[9px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-primary z-10" />
      )}
    </motion.div>
  );
}

// ─── Mobile Vertical Flow ─────────────────────────────────────────────────────
function MobileFlow() {
  return (
    <div className="flex flex-col items-center gap-0">
      {/* Input modules - horizontal wrap */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-2 mb-4"
      >
        {inputs.map(({ Icon, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
            className="flex items-center gap-1.5 bg-primary border border-gray-200 rounded-lg px-2.5 py-1.5"
          >
            <Icon className="w-3.5 h-3.5 text-white" strokeWidth={1.6} />
            <span className="text-[11px] font-medium text-white">{label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Converging arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex flex-col items-center py-1"
      >
        <div className="w-px h-6 bg-gray-200" />
        <ChevronDown className="w-4 h-4 text-gray-300 -mt-1" />
      </motion.div>

      {/* Pipeline nodes — vertical */}
      {pipeline.map((step, i) => (
        <div key={step.label} className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
            className={`w-16 h-16 rounded-2xl ${step.bg} flex flex-col items-center justify-center shadow-lg`}
          >
            <step.Icon className="w-6 h-6 text-white" strokeWidth={1.6} />
            <span className="text-white text-[9px] font-medium mt-1">{step.label}</span>
          </motion.div>

          {/* Connector between nodes */}
          {i < pipeline.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
              className="flex flex-col items-center py-0.5"
            >
              <div className="w-px h-4 border-l border-dashed border-gray-300" />
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-primary"
                animate={{ y: [0, 6, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3 }}
              />
              <div className="w-px h-4 border-l border-dashed border-gray-300" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function HowScoreWorks() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="md:py-24 md:px-6 py-12 px-4 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-medium font-interTight text-primary leading-tight mb-3">
            How the Score Works
          </h2>
          <p className="text-[#6b7a8d] text-sm md:text-base">Real-time calculation powered by AI</p>
        </motion.div>

        {/* ── Flow diagram container ── */}
        <div className="bg-white rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm p-5 sm:p-6 md:p-10">

          {/* ── Desktop: horizontal flow (hidden on mobile) ── */}
          <div className="hidden lg:flex items-center justify-between gap-4 mb-2">

            {/* Input nodes */}
            <div className="flex flex-col gap-3 flex-shrink-0">
              {inputs.map(({ Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-2.5 bg-primary border border-gray-200 rounded-xl px-3 py-2"
                >
                  <Icon className="w-4 h-4 text-white" strokeWidth={1.6} />
                  <span className="text-[12px] font-medium text-white">{label}</span>
                </motion.div>
              ))}
            </div>

            {/* Animated SVG — converging lines */}
            <div className="flex-1 relative" style={{ height: 180 }}>
              {visible && (
                <svg
                  width="100%" height="180"
                  viewBox="0 0 300 180"
                  preserveAspectRatio="none"
                  className="absolute inset-0"
                >
                  {[18, 54, 90, 126, 162].map((y, i) => {
                    const d = `M 0 ${y} C 120 ${y} 180 90 300 90`;
                    return (
                      <g key={i}>
                        <path d={d} stroke="#E5E7EB" strokeWidth="1.5" fill="none" strokeDasharray="5 5" />
                        <PathDot path={d} duration={2 + i * 0.4} delay={i * 0.5} />
                      </g>
                    );
                  })}
                </svg>
              )}
            </div>

            {/* Step 1 node */}
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-black flex flex-col items-center justify-center shadow-lg shadow-orange-200">
              <Database className="w-7 h-7 text-white" strokeWidth={1.6} />
              <span className="text-white text-[10px] font-medium mt-1">Collect</span>
            </div>

            {/* Connector → Step 2 */}
            <div className="flex-1 relative" style={{ height: 4 }}>
              <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                <div className="w-full h-px border-t-2 border-dashed border-gray-200" />
              </div>
              {visible && (
                <svg className="absolute inset-0 w-full" height="4" style={{ overflow: "visible" }}>
                  <TravellingDot startX={0} endX={200} y={2} duration={1.4} delay={0} />
                </svg>
              )}
            </div>

            {/* Step 2 node */}
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-secondary flex flex-col items-center justify-center shadow-lg">
              <BrainCircuit className="w-7 h-7 text-white" strokeWidth={1.6} />
              <span className="text-white text-[10px] font-medium mt-1">Analyse</span>
            </div>

            {/* Connector → Step 3 */}
            <div className="flex-1 relative" style={{ height: 4 }}>
              <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                <div className="w-full h-px border-t-2 border-dashed border-gray-200" />
              </div>
              {visible && (
                <svg className="absolute inset-0 w-full" height="4" style={{ overflow: "visible" }}>
                  <TravellingDot startX={0} endX={200} y={2} duration={1.4} delay={0.5} />
                </svg>
              )}
            </div>

            {/* Step 3 node */}
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-primary-dark flex flex-col items-center justify-center shadow-lg shadow-orange-200 z-10 relative">
              <BarChart3 className="w-7 h-7 text-white" strokeWidth={1.6} />
              <span className="text-white text-[10px] font-medium mt-1">Calculate</span>
            </div>

            {/* Connector → Score output */}
            <div className="flex-1 relative" style={{ height: 4 }}>
              <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                <div className="w-full h-px border-t-2 border-dashed border-gray-200" />
              </div>
              {visible && (
                <svg className="absolute inset-0 w-full" height="4" style={{ overflow: "visible" }}>
                  <TravellingDot startX={0} endX={200} y={2} duration={1.4} delay={1} />
                </svg>
              )}
            </div>

            {/* Score output */}
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-secondary flex flex-col items-center justify-center shadow-lg z-1 relative">
              <Lightbulb className="w-7 h-7 text-white" strokeWidth={1.6} />
              <span className="text-white text-[10px] font-medium mt-1">Insights</span>
            </div>
          </div>

          {/* ── Mobile: vertical flow (hidden on desktop) ── */}
          <div className="lg:hidden mb-4">
            <MobileFlow />
          </div>

          {/* ── Divider ── */}
          <div className="my-6 md:my-8 border-t border-dashed border-gray-100" />

          {/* ── Step cards grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {steps.map((step, i) => (
              <StepCard key={step.n} {...step} index={i} />
            ))}
          </div>

          {/* ── Bottom: Score output pill ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 md:mt-8 flex items-center justify-center"
          >
            {/* Desktop: horizontal pill */}
            <div className="hidden sm:flex items-center gap-4 bg-gray-50 border border-primary-light rounded-2xl px-8 py-4">
              <div className="text-center">
                <p className="text-[11px] font-medium text-gray-400 uppercase tracking-widest mb-0.5">KeyEd Score™</p>
                <p className="text-4xl font-black text-primary leading-none">94</p>
                <p className="text-[10px] text-gray-400 mt-0.5">out of 100</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-left">
                <p className="text-sm font-medium text-[#1a2b4a] mb-0.5">Institutional Health</p>
                <p className="text-[12px] text-[#6b7a8d]">Updated every time data changes</p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[11px] text-green-600 font-medium">Live · Excellent</span>
                </div>
              </div>
            </div>

            {/* Mobile: stacked pill */}
            <div className="sm:hidden w-full bg-gray-50 border border-primary-light rounded-2xl px-5 py-5">
              <div className="text-center mb-3">
                <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-1">KeyEd Score™</p>
                <p className="text-4xl font-black text-primary leading-none">94</p>
                <p className="text-[10px] text-gray-400 mt-1">out of 100</p>
              </div>
              <div className="h-px w-full bg-gray-200 mb-3" />
              <div className="text-center">
                <p className="text-sm font-medium text-[#1a2b4a] mb-0.5">Institutional Health</p>
                <p className="text-[12px] text-[#6b7a8d]">Updated every time data changes</p>
                <div className="flex items-center justify-center gap-1.5 mt-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[11px] text-green-600 font-medium">Live · Excellent</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}