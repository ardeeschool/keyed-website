"use client";

import { motion } from "framer-motion";

// ─── Data ─────────────────────────────────────────────────────────────────────
const modules = [
  {
    icon: "🎓",
    iconBg: "bg-gray-100",
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
    icon: "📈",
    iconBg: "bg-orange-50",
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
    icon: "⚙️",
    iconBg: "bg-gray-100",
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
    icon: "💲",
    iconBg: "bg-yellow-50",
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
    icon: "👥",
    iconBg: "bg-gray-100",
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
    icon: "🧠",
    iconBg: "bg-orange-50",
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
  icon,
  iconBg,
  title,
  description,
  features,
  index,
}: (typeof modules)[0] & { index: number }) {
  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col gap-4 cursor-default"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
        delay: (index % 3) * 0.12,
      }}
      whileHover={{
        scale: 1.035,
        boxShadow: "0 20px 48px rgba(0,0,0,0.11)",
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
      }}
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${iconBg}`}
      >
        <span className="text-2xl leading-none">{icon}</span>
      </div>

      {/* Title */}
      <h3 className="text-[20px] font-extrabold text-[#1a2b4a] leading-snug tracking-tight m-0">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[14.5px] leading-relaxed text-[#6b7a8d] m-0">
        {description}
      </p>

      {/* Feature list */}
      <ul className="list-none m-0 p-0 flex flex-col gap-2.5 mt-1">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm font-medium text-gray-700">
            <span className="text-[#f5a623] font-bold text-xs flex-shrink-0">✓</span>
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
    <section className="w-full bg-white py-20 px-6 box-border">

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
