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
    title: "Academic & Experience Layer",
    description:
      "Comprehensive curriculum management, lesson planning, generation, assessments, intial AI grading, Year On Year student performance tracking, and classroom intelligence tools.",
    features: [
      "Curriculum & lesson plans",
      "AI created assignment & instant feedback",
      "Student performance & progress analytics",
      "Intial AI grading based on Rubric",
      
    ],
  },
  {
    Icon: TrendingUp,
    title: "Admissions & Marketing Growth",
    description:
      "End-to-end custom admissions pipeline management, lead tracking, conversion optimization, enrollment forecasting, and marketing analytics.",
    features: [
      "Lead capture & management",
      "Inquiry to admission pipeline",
      "Enrollment forecasting",
      "Marketing campaign analytics",
      "Fee collection"
    ],
  },
  {
    Icon: Settings2,
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
    title: "People & Culture",
    description:
      "HR management, hiring workflows, attendance tracking, performance reviews, professional development, and retention analytics.",
    features: [
      "Role-base access",
      "Hiring & onboarding",
      "Performance tracking",
      "Retention analytics",
    ],
  },
  {
    Icon: BrainCircuit,
    title: "AI & Analytics",
    description:
      "Real-time dashboards, predictive intelligence, institutional health monitoring, risk detection, and strategic planning insights.",
    features: [
      "Recommendation & insights ",
      "Predictive analytics",
      "Assignment creation based on syllabus",
      "Instant assignment correction",
      "AI Chatbot",
      "Risk Alerts based on trend"
    ],
  },
];

// ─── Card ─────────────────────────────────────────────────────────────────────
function ModuleCard({
  Icon,
  title,
  description,
  features,
  index,
}: (typeof modules)[0] & { index: number }) {
  return (
    <motion.div
      className="relative cardstyle rounded-2xl p-8 flex flex-col gap-4 cursor-default overflow-hidden"
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
     

      {/* Icon */}
     


<div className="w-12 h-12 rounded-xl iconStyle flex items-center justify-center">
        <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
      </div>
      

      {/* Title */}
      <h3 className="text-md font-medium text-primary leading-snug tracking-tight m-0">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[14px] leading-relaxed text-gray-500 m-0">
        {description}
      </p>

      {/* Feature list */}
      <ul className="list-none m-0 p-0 flex flex-col gap-2.5 mt-auto pt-2">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm font-medium text-gray-700">
            <span
              className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-primary-dark"
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
        <h2 className="m-0 text-5xl font-medium text-primary-dark tracking-tight leading-tight">
          What We Offer
        </h2>
        <p className="m-0 text-base text-gray-500 font-normal">
          Six integrated modules working together as one platform
        </p>
      </motion.div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {modules.map((mod, i) => (
          <ModuleCard key={mod.title} {...mod} index={i} />
        ))}
      </div>

    </section>
  );
}