"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  TrendingUp,
  Settings2,
  BadgeDollarSign,
  Users2,
  BrainCircuit,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const modules = [
  {
    Icon: GraduationCap,
    iconBg: "#EFF6FF",
    iconColor: "#1D4ED8",
    accentColor: "#3B82F6",
    title: "Academic & Experience Layer",
    description:
      "Comprehensive curriculum management, lesson planning, assessments, grading, student performance tracking, and classroom intelligence tools.",
    features: [
      "Curriculum & lesson plans",
      "Assessments & grading",
      "Student performance analytics",
      "Teacher collaboration",
    ],
  },
  {
    Icon: TrendingUp,
    iconBg: "#FFF7ED",
    iconColor: "#C2410C",
    accentColor: "#F97316",
    title: "Admissions & Marketing Growth",
    description:
      "End-to-end admissions pipeline management, lead tracking, conversion optimization, enrollment forecasting, and marketing analytics.",
    features: [
      "Lead capture & management",
      "Admissions pipeline tracking",
      "Enrollment forecasting",
      "Marketing campaign analytics",
    ],
  },
  {
    Icon: Settings2,
    iconBg: "#F0FDF4",
    iconColor: "#15803D",
    accentColor: "#22C55E",
    title: "Campus Operations",
    description:
      "Facilities management, transport logistics, inventory tracking, IT support, security workflows, and maintenance management.",
    features: [
      "Facilities management",
      "Transport & logistics",
      "Inventory tracking",
      "Security & maintenance",
    ],
  },
  {
    Icon: BadgeDollarSign,
    iconBg: "#FEFCE8",
    iconColor: "#A16207",
    accentColor: "#EAB308",
    title: "Finance & Compliance",
    description:
      "Fee management, payment collection, budget planning, expense tracking, financial reporting, and regulatory compliance management.",
    features: [
      "Fee collection & management",
      "Budget planning & tracking",
      "Expense management",
      "Financial analytics",
    ],
  },
  {
    Icon: Users2,
    iconBg: "#FDF4FF",
    iconColor: "#7E22CE",
    accentColor: "#A855F7",
    title: "People & Culture",
    description:
      "HR management, hiring workflows, attendance tracking, performance reviews, professional development, and retention analytics.",
    features: [
      "HR management system",
      "Hiring & onboarding",
      "Performance tracking",
      "Retention analytics",
    ],
  },
  {
    Icon: BrainCircuit,
    iconBg: "#FFF7ED",
    iconColor: "#C2410C",
    accentColor: "#F97316",
    title: "AI & Analytics",
    description:
      "Real-time dashboards, predictive intelligence, institutional health monitoring, risk detection, and strategic planning insights.",
    features: [
      "Live performance dashboards",
      "Predictive analytics",
      "KeyEd Score™ tracking",
      "Strategic insights",
    ],
  },
];

// ─── Card ─────────────────────────────────────────────────────────────────────
function ModuleCard({
  Icon,
  iconBg,
  iconColor,
  accentColor,
  title,
  description,
  features,
  index,
}: (typeof modules)[0] & { index: number }) {
  return (
    <motion.div
      className="relative bg-white border border-gray-100 rounded-2xl p-8 flex flex-col gap-4 cursor-default overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
        delay: (index % 3) * 0.12,
      }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 20px 48px rgba(0,0,0,0.10)",
        transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
        style={{ background: accentColor }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
        style={{ background: iconBg }}
      >
        <Icon
          style={{ color: iconColor }}
          className="w-6 h-6"
          strokeWidth={1.8}
        />
      </div>

      {/* Title */}
      <h3 className="text-[19px] font-extrabold text-[#1a2b4a] leading-snug tracking-tight m-0">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[14px] leading-relaxed text-[#6b7a8d] m-0">
        {description}
      </p>

      {/* Feature list */}
      <ul className="list-none m-0 p-0 flex flex-col gap-2.5 mt-auto pt-2">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm font-medium text-gray-700">
            <span
              className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-white"
              style={{ background: accentColor, fontSize: 9, fontWeight: 800 }}
            >
              ✓
            </span>
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function SolutionsPortfolio() {
  return (
    <section className="w-full bg-[#F8F9FB] py-20 px-6 box-border">

      {/* Header */}
      <motion.div
        className="text-center mb-14 flex flex-col items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="m-0 text-[clamp(28px,4vw,42px)] font-extrabold text-[#1a2b4a] tracking-tight leading-tight">
          Complete{" "}
          <span
            className="font-extrabold"
            style={{
              background: "linear-gradient(90deg, #f5a623 0%, #e07b39 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Solutions
          </span>{" "}
          Portfolio
        </h2>
        <p className="m-0 text-base text-[#6b7a8d] font-normal">
          Six integrated modules working together as one platform
        </p>
      </motion.div>

      {/* Grid */}
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod, i) => (
          <ModuleCard key={mod.title} {...mod} index={i} />
        ))}
      </div>

    </section>
  );
}