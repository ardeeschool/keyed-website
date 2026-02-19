"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  TrendingUp,
  Settings2,
  BadgeDollarSign,
  Check,
} from "lucide-react";

const modules = [
  {
    Icon: GraduationCap,
    title: "Academics & Teaching",
    badge: "Core Module",
    moduleNum: "Module 1",
    desc: "Curriculum management, lesson planning, assessment tracking, student performance analytics, and classroom intelligence.",
    includes: [
      "Curriculum & Lesson Planning",
      "Assessment & Grading",
      "Student Performance Tracking",
      "Teacher Collaboration Tools",
    ],
    isBlack: false,
  },
  {
    Icon: TrendingUp,
    title: "Admissions & Growth",
    badge: "Growth Module",
    moduleNum: "Module 2",
    desc: "Lead management, admissions pipeline, conversion tracking, enrollment forecasting, and marketing campaign management.",
    includes: [
      "Lead Capture & Management",
      "Admissions Pipeline Tracking",
      "Enrollment Forecasting",
      "Marketing Campaign Analytics",
    ],
    isBlack: true,
  },
  {
    Icon: Settings2,
    title: "Operations & Infrastructure",
    badge: "Operations Module",
    moduleNum: "Module 3",
    desc: "Campus facilities, transport management, inventory tracking, IT support, security, and maintenance workflows.",
    includes: [
      "Facilities Management",
      "Transport & Logistics",
      "Inventory & Asset Tracking",
      "Security & Maintenance",
    ],
    isBlack: false,
  },
  {
    Icon: BadgeDollarSign,
    title: "Finance & Administration",
    badge: "Finance Module",
    moduleNum: "Module 4",
    desc: "Fee management, collections, budgeting, expense tracking, financial reporting, and compliance management.",
    includes: [
      "Fee Collection & Management",
      "Budget Planning & Tracking",
      "Expense Management",
      "Financial Reports & Analytics",
    ],
    isBlack: false,
  },
];

// ── Card styles ───────────────────────────────────────────
const blackCardBg = {
  background:
    "radial-gradient(62.56% 62.56% at 28.14% -10.42%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, rgb(24, 24, 27), rgb(24, 24, 27))",
};

const greyCardStyle = {
  background: "#F4F4F5",
  boxShadow:
    "0px 7.77px 16px 0px rgba(0, 0, 0, 0.059), 0px 3px 3px 0px rgba(0, 0, 0, 0.102), 0px -8px 0px 0px rgba(0, 0, 0, 0.051) inset, 0px 4px 0px 0px rgba(255, 255, 255, 0.6) inset",
};

const buttonStyle = {
  background:
    "radial-gradient(62.56% 62.56% at 28.14% -10.42%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #272727, #272727)",
  boxShadow:
    "0px -3px 0px 0px #080808 inset, 0px 1px 0px 0px rgba(255, 255, 255, 0.302) inset, 0px 2.77px 2.21px 0px rgba(0, 0, 0, 0.122), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.129), 0px 12.52px 10.02px 0px rgba(0, 0, 0, 0.133), 0px 22.34px 17.87px 0px rgba(0, 0, 0, 0.141), 0px 41.78px 33.42px 0px rgba(0, 0, 0, 0.149), 0px 100px 80px 0px rgba(0, 0, 0, 0.149), 0px 3px 3px 0px rgba(0, 0, 0, 0.141), 0px 2.77px 2.21px 0px rgba(0, 0, 0, 0.122)",
};

const blackButtonStyle = {
  background:
    "radial-gradient(62.56% 62.56% at 28.14% -10.42%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #3f3f46, #3f3f46)",
  boxShadow:
    "0px -3px 0px 0px #27272a inset, 0px 1px 0px 0px rgba(255, 255, 255, 0.2) inset, 0px 2.77px 2.21px 0px rgba(0, 0, 0, 0.12), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.13)",
};

// ── Card content (shared between black and grey) ──────────
function CardContent({
  Icon,
  title,
  badge,
  moduleNum,
  desc,
  includes,
  isBlack,
}: Omit<(typeof modules)[0], "index"> & { index?: number }) {
  const textPrimary = isBlack ? "text-white" : "text-[#1a1a1c]";
  const textSecondary = isBlack ? "text-gray-400" : "text-[#6b7a8d]";
  const textMuted = isBlack ? "text-gray-500" : "text-[#9ca3af]";
  const dividerBg = isBlack ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.6)";

  return (
    <>
      {/* Top bar */}
      <div className="flex items-center gap-3 mb-8">
        <Icon
          className={isBlack ? "text-gray-400" : "text-[#1a1a1c]"}
          style={{ width: 28, height: 28 }}
          strokeWidth={1.6}
        />
        <span className={`text-lg font-bold ${textPrimary}`}>{title}</span>
        <div className="w-px h-5 mx-1" style={{ background: dividerBg }} />
        <span className={`text-base ${textMuted}`}>{badge}</span>
      </div>

      {/* Module number + Button */}
      <div className="flex items-end justify-between mb-10">
        <h3
          className={`font-interTight text-5xl lg:text-5xl font-normal tracking-tight leading-none ${textPrimary}`}
        >
          {moduleNum}
        </h3>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-4 rounded-full text-white text-base font-semibold cursor-pointer transition-opacity hover:opacity-90 flex-shrink-0"
          style={isBlack ? blackButtonStyle : buttonStyle}
        >
          Get Started
        </motion.button>
      </div>

      {/* Divider */}
      <div className="h-px mb-8" style={{ background: dividerBg }} />

      {/* Bottom */}
      <div className="grid grid-cols-2 gap-8">
        <div>
          <p className={`text-lg font-bold mb-3 ${textPrimary}`}>
            What&apos;s included
          </p>
          <p className={`text-[15px] leading-relaxed ${textSecondary}`}>
            {desc}
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <ul className="space-y-4">
            {includes.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: isBlack
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.06)",
                  }}
                >
                  <Check
                    style={{ width: 13, height: 13 }}
                    strokeWidth={2.5}
                    className={isBlack ? "text-gray-400" : "text-[#6b7280]"}
                  />
                </div>
                <span
                  className={`text-base font-medium leading-snug ${
                    isBlack ? "text-gray-200" : "text-[#1a1a1c]"
                  }`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

// ── Animated Black Card ───────────────────────────────────
function AnimatedBlackCard({
  module,
  index,
}: {
  module: (typeof modules)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative rounded-3xl"
    >
      {/* ── Animated gradient border ── */}
      <div
        className="absolute -inset-[1.5px] rounded-3xl overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <div className="animated-border-gradient absolute inset-0" />
      </div>

      {/* ── Card body ── */}
      <div
        className="relative rounded-3xl p-10 flex flex-col overflow-hidden"
        style={{ ...blackCardBg, zIndex: 1 }}
      >
        {/* ── Diagonal light sweep ── */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl"
          style={{ zIndex: 2 }}
        >
          <div className="diagonal-sweep" />
        </div>

        {/* ── Content ── */}
        <div className="relative" style={{ zIndex: 3 }}>
          <CardContent {...module} />
        </div>
      </div>
    </motion.div>
  );
}

// ── Grey Card (no animation) ──────────────────────────────
function GreyCard({
  module,
  index,
}: {
  module: (typeof modules)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="rounded-3xl p-10 flex flex-col"
      style={greyCardStyle}
    >
      <CardContent {...module} />
    </motion.div>
  );
}

// ── Main Component ────────────────────────────────────────
export default function ModulesAvailable() {
  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════
         * 1. ROTATING GRADIENT BORDER
         *    A conic gradient spins around the card edge.
         *    The card body sits on top, so only the 1.5px
         *    gap between them is visible as the border.
         * ═══════════════════════════════════════════════ */
        @keyframes border-spin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animated-border-gradient {
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          position: absolute;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 60deg,
            rgba(255, 255, 255, 0.5) 90deg,
            rgba(255, 255, 255, 0.08) 120deg,
            transparent 150deg,
            transparent 240deg,
            rgba(255, 255, 255, 0.3) 270deg,
            rgba(255, 255, 255, 0.05) 300deg,
            transparent 330deg,
            transparent 360deg
          );
          animation: border-spin 1s linear infinite;
        }

        /* ═══════════════════════════════════════════════
         * 2. DIAGONAL LIGHT SWEEP
         *    A thin bright band travels from left to right
         *    at a 25-degree angle, then repeats.
         * ═══════════════════════════════════════════════ */
    @keyframes diagonal-sweep {
  0% {
    transform: translateX(0%) rotate(-25deg);
    opacity: 0;
  }
  3% {
    opacity: 1;
  }
  40% {
    transform: translateX(1400%) rotate(-25deg);
    opacity: 1;
  }
  41% {
    transform: translateX(1400%) rotate(-25deg);
    opacity: 0;
  }
  42% {
    transform: translateX(0%) rotate(-25deg);
    opacity: 0;
  }
  100% {
    transform: translateX(0%) rotate(-25deg);
    opacity: 0;
  }
}

        .diagonal-sweep {
          position: absolute;
          top: -50%;
          left: 0;
          width: 60px;
          height: 200%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.04) 30%,
            rgba(255, 255, 255, 0.08) 50%,
            rgba(255, 255, 255, 0.04) 70%,
            transparent
          );
          animation: diagonal-sweep 3s ease-in-out infinite;
  animation-delay: 0s;
        }
      `}</style>

      <section className="bg-[#EDECEC] py-24 px-20">
        <div>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl lg:text-5xl font-medium text-[#1a1a1c] leading-tight mb-4 font-interTight">
              Modules Available for <span className="text-[#4a4a4c]">Selection</span>
            </h2>
            <p className="text-lg text-[#6b7a8d] max-w-2xl mx-auto">
              Choose the modules that fit your institution&apos;s needs. Start
              with core modules and add more as you grow.
            </p>
          </motion.div>

          {/* 2-column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {modules.map((module, i) =>
              module.isBlack ? (
                <AnimatedBlackCard key={module.title} module={module} index={i} />
              ) : (
                <GreyCard key={module.title} module={module} index={i} />
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}