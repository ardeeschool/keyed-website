"use client";

import { motion } from "motion/react";

const cards = [
  {
    title: "Academic &\nExperience Layer",
    description:
      "Curriculum, assessments, teacher workflows, student performance and classroom intelligence.",
    deliverables: "Curriculum management, Track attendance, assignments & grades",
    industry: "Education",
    image: "/keyed.png",
    color: "#f8f8f8",
  },
  {
    title: "Campus\nOperations",
    description:
      "Campus operations, facilities, inventory, IT support, transport and security workflows.",
    deliverables: "Facilities management, Transport tracking, Security systems",
    industry: "Operations",
    image: "/keyed.png",
    color: "#f3f4f6",
  },
  {
    title: "Admissions &\nMarketing Growth",
    description:
      "Lead management, admissions funnel, conversion tracking and enrollment forecasting.",
    deliverables: "Lead pipeline management, Conversion analytics, Enrollment forecasting",
    industry: "Finance",
    image: "/keyed.png",
    color: "#eef2f7",
  },
  {
    title: "AI &\nAnalytics",
    description:
      "Real-time dashboards, predictive insights and institutional health analytics through AI.",
    deliverables: "Live dashboards, Predictive analytics, weekly scoring with drill-down visibility across institution pillars",
    industry: "Technology",
    image: "/keyed.png",
    color: "#f0f0f5",
  },
  {
    title: "Finance &\nCompliance",
    description:
      "Fee management, collections, budgeting, expense tracking and financial visibility.",
    deliverables: "Fee collection automation, Budget management, Financial reporting",
    industry: "Finance",
    image: "/keyed.png",
    color: "#f5f3f0",
  },
  {
    title: "People &\nCulture",
    description:
      "HR management, hiring workflows, attendance, performance and retention analytics.",
    deliverables: "HR management system, Performance tracking, Retention analytics",
    industry: "Human Resource",
    image: "/keyed.png",
    color: "#f2f5f3",
  },
];

const TOTAL_DOTS = cards.length;
const BASE_TOP = 90;
const TOP_INCREMENT = 18;
const isMobile = window.innerWidth < 768;

function ShowcaseCard({
  title,
  description,
  deliverables,
  industry,
  image,
  color,
  index,
}: (typeof cards)[0] & { index: number }) {
  const filledDots = index + 1;
  const stickyTop = BASE_TOP + index * TOP_INCREMENT;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="sticky p-4 md:p-6 rounded-2xl md:rounded-3xl overflow-hidden border border-gray-400 transition-shadow duration-300"
      style={{
        top: stickyTop,
        zIndex: index + 1,
        background: color,
        marginBottom: index < cards.length - 1 ? 80 : 0,
      }}
    >
      {/* ── Image area ── */}
      <div
        className="w-full relative overflow-hidden"
      >
        <img src={image} alt={title} className="object-cover w-full rounded-2xl" />
      </div>

      {/* ── Bottom content ── */}
      <div className="px-4 py-6 sm:px-6 sm:py-7 md:px-10 md:py-8">
        {/* Progressive dots */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-5 md:mb-6">
          {Array.from({ length: TOTAL_DOTS }).map((_, dotIndex) => (
            <span
              key={dotIndex}
              className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors duration-300"
              style={{
                background:
                  dotIndex < filledDots ? "#ef4444" : "rgba(0,0,0,0.10)",
              }}
            />
          ))}
        </div>

        {/* Info — stacked on mobile, 4-col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr_1.2fr_0.6fr] items-start gap-3 sm:gap-4 md:gap-8">
          {/* Title */}
          <h3 className="font-interTight text-lg sm:text-xl md:text-2xl font-medium text-[#1a1a1c] leading-tight md:whitespace-pre-line">
            {title}
          </h3>

          {/* Description */}
          <div>
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1.5 sm:mb-2 text-[#9ca3af]">
              Description
            </p>
            <p className="text-[13px] sm:text-sm text-[#6b7a8d] leading-relaxed">
              {description}
            </p>
          </div>

          {/* Deliverables */}
          <div>
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1.5 sm:mb-2 text-[#9ca3af]">
              Deliverables
            </p>
            <p className="text-[13px] sm:text-sm text-[#6b7a8d] leading-relaxed">
              {deliverables}
            </p>
          </div>

          {/* Industry */}
          <div>
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1.5 sm:mb-2 text-[#9ca3af]">
              Industry
            </p>
            <p className="text-[13px] sm:text-sm text-[#6b7a8d]">{industry}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Showcase() {
  return (
    <section className="bg-white py-12 pb-0 md:py-24 px-4 sm:px-6 md:pb-0">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="font-interTight text-2xl sm:text-3xl lg:text-5xl font-medium text-[#1a1a1c] leading-tight mb-3 sm:mb-4">
            Everything Your Institution Runs On
          </h2>
          <p className="text-sm md:text-lg text-primary/70 max-w-xl mx-auto">
            One ecosystem covering academics, operations, finance, and intelligence.
          </p>
        </motion.div>

        {/* Stacking Cards */}
        <div className="flex flex-col">
          {cards.map((card, i) => (
            <ShowcaseCard key={card.title} {...card} index={i} />
          ))}
        </div>

        {/* Extra space so last card can be scrolled into full sticky view */}
        

  <div
  style={{
    height: isMobile
      ? cards.length * (TOP_INCREMENT / 2) + 0
      : cards.length * TOP_INCREMENT + 20
  }}
/>
      </div>
    </section>
  );
}