"use client";

import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  MessageSquare,
  Calculator,
  ClipboardList,
  UserCheck,
  AlertTriangle,
  WifiOff,
  X,
  ArrowDown,
  CheckCircle2,
} from "lucide-react";

// ─── Disconnected tools schools actually use ──────────────────────────────────
const tools = [
  {
    name: "Excel / Sheets",
    use: "Admissions tracking",
    Icon: FileSpreadsheet,
    pos: "top-0 left-[8%]",
    delay: 0.1,
  },
  {
    name: "WhatsApp",
    use: "Parent communication",
    Icon: MessageSquare,
    pos: "top-0 right-[8%]",
    delay: 0.2,
  },
  {
    name: "Tally / QuickBooks",
    use: "Fee & accounts",
    Icon: Calculator,
    pos: "top-[38%] left-0",
    delay: 0.3,
  },
  {
    name: "Paper Registers",
    use: "Attendance & grades",
    Icon: ClipboardList,
    pos: "top-[38%] right-0",
    delay: 0.4,
  },
  {
    name: "Manual HR Files",
    use: "Staff management",
    Icon: UserCheck,
    pos: "bottom-0 left-[8%]",
    delay: 0.5,
  },
  {
    name: "No Dashboard",
    use: "Leadership reporting",
    Icon: WifiOff,
    pos: "bottom-0 right-[8%]",
    delay: 0.6,
  },
];

// ─── Broken connection SVG lines ─────────────────────────────────────────────
function BrokenLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 500 380"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Dashed broken lines from each tool toward centre */}
      {[
        "M 100 60 L 250 190",
        "M 400 60 L 250 190",
        "M 50 190 L 250 190",
        "M 450 190 L 250 190",
        "M 100 320 L 250 190",
        "M 400 320 L 250 190",
      ].map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="#000000"
          strokeWidth="1.5"
          strokeDasharray="6 5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
        />
      ))}

      {/* Centre broken/X indicator */}
      <motion.circle
        cx="250" cy="190" r="22"
        fill="#fb2c36" stroke="#ddd" strokeWidth="1.5"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1 }}
      />
      <motion.text
        x="250" y="196"
        textAnchor="middle"
        fontSize="16"
        fill="#fff"
        fontWeight="bold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1 }}
      >
        ✕
      </motion.text>
    </svg>
  );
}

// ─── Tool Node ────────────────────────────────────────────────────────────────
function ToolNode({
  name, use, Icon, color, bg, border, pos, delay,
}: (typeof tools)[0]) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay, type: "spring", stiffness: 180, damping: 18 }}
      className={`absolute ${pos} w-[140px]`}
    >
      <div
        className="rounded-xl p-3 border-2 shadow-md text-center bg-primary-dark border-gray-50"
      >
        {/* Error badge */}
        <div className="relative inline-block mb-2">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto"
          >
            <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
          </div>
          <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <X className="w-2.5 h-2.5 text-white" strokeWidth={3} />
          </div>
        </div>
        <p className="text-[11px] font-bold text-gray-50 leading-tight">{name}</p>
        <p className="text-[9px] text-gray-400 mt-0.5 leading-tight">{use}</p>
      </div>
    </motion.div>
  );
}

// ─── Pain points list ─────────────────────────────────────────────────────────
const painPoints = [
  "Data lives in 6+ different places",
  "No real-time visibility for leadership",
  "Manual reconciliation wastes hours weekly",
  "Errors multiply across disconnected systems",
  "Every report requires starting from scratch",
];

// ─── KeyEd unified modules (solution side) ───────────────────────────────────
const keyedModules = [
  { label: "Academics", color: "#ffffff" },
  { label: "Admissions", color: "#ffffff" },
  { label: "Finance", color: "#ffffff" },
  { label: "Operations", color: "#ffffff" },
  { label: "People", color: "#ffffff" },
  { label: "Analytics", color: "#ffffff" },
];

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function ProblemSection() {
  return (
    <section className="w-full bg-white py-24 px-20 overflow-hidden">
      <div className="">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary border-primary text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            The Reality Today
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-primary-dark leading-tight mb-4">
            The Problem Schools 
              Face Today
          
          </h2>
          <p className="text-[#6b7a8d] text-lg max-w-xl mx-auto">
            Schools run on <strong className="text-gray-700">6+ disconnected tools</strong> that never talk to each other — creating chaos, blind spots, and wasted hours.
          </p>
        </motion.div>

        {/* ── Two column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">

          {/* LEFT — Fragmented tool map */}
          <div className="relative" style={{ height: 420 }}>
            <BrokenLines />
            {tools.map((tool) => (
              <ToolNode key={tool.name} {...tool} />
            ))}

            {/* Centre label */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none mt-8">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
                className="text-[10px] font-bold text-primary-dark uppercase tracking-widest mt-18"
              >
                No connection
              </motion.p>
            </div>
          </div>

          {/* RIGHT — Pain points */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl border border-red-100 p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-primary-dark" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary-dark uppercase tracking-widest">The consequence</p>
                  <p className="text-base font-bold text-primary-dark">What this costs you daily</p>
                </div>
              </div>

              <div className="space-y-4">
                {painPoints.map((point, i) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-primary/15 border border-gray-100"
                  >
                    <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-primary-black" strokeWidth={3} />
                    </div>
                    <p className="text-sm font-medium text-black leading-snug">{point}</p>
                  </motion.div>
                ))}
              </div>

              {/* Result callout */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="mt-6 p-4 rounded-xl border-2 border-dashed border-primary/20 bg-gray-100 text-center"
              >
                <p className="text-sm font-bold text-gray-800">Result: <span className="text-gray-900">No single view of school health.</span></p>
                <p className="text-xs text-gray-500 mt-1">Leadership makes decisions without reliable data.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ── Transition arrow ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col items-center gap-2 mb-12"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-8 h-8 text-primary-dark" strokeWidth={2.5} />
          </motion.div>
          <p className="text-sm font-bold text-primary-dark uppercase tracking-widest">KeyEd fixes this</p>
        </motion.div>

        {/* ── Solution: KeyEd unified hub ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-black rounded-3xl overflow-hidden"
        >
          {/* BG dot grid */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">

            {/* Left text */}
            <div className="lg:w-1/2 p-10">
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-3">The KeyEd Way</p>
              <h3 className="text-3xl font-extrabold text-white leading-tight mb-4">
                One platform.<br />
                <span className="text-white">Everything connected.</span>
              </h3>
              <p className="text-blue-200/60 text-base mb-6">
                KeyEd replaces all disconnected tools with a single intelligent operating system — where every module shares live data, and leadership always has a real-time view.
              </p>
              <div className="flex flex-col gap-2.5">
                {[
                  "Live data across every department",
                  "One login for all stakeholders",
                  "AI-powered KeyEd Score™ always visible",
                  "Decisions backed by real-time intelligence",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                    <p className="text-sm text-white/80 font-medium">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right — unified hub diagram */}
            <div className="lg:w-1/2 flex items-center justify-center">
              
             
                  <img
      src="/keyedscreen.png"
      alt="Hero"
      width={700}
      height={350}
      className="mx-auto"
      />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}