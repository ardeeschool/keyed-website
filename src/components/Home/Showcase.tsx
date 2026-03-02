"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    title: "Academic &\nExperience Layer",
    description:
      "Curriculum, assessments, teacher workflows, student performance and classroom intelligence.",
    deliverables: "Curriculum management, Track attendance, assignments & grades",
    industry: "Education",
    image: "/keyed.png",
  },
  {
    title: "Campus\nOperations",
    description:
      "Campus operations, facilities, inventory, IT support, transport and security workflows.",
    deliverables: "Facilities management, Transport tracking, Security systems",
    industry: "Operations",
    image: "/operation.png",
  },
  {
    title: " Admissions &\nMarketing Growth",
    description:
      "Lead management, admissions funnel, conversion tracking and enrollment forecasting.",
    deliverables: "Lead pipeline management, Conversion analytics, Enrollment forecasting",
    industry: "Finance",
    image: "/finance.png",
  },
  {
    title: "AI &\nAnalytics",
    description:
      "Real-time dashboards, predictive insights and institutional health analytics through AI.",
    deliverables: "Live dashboards, Predictive analytics, weekly scoring with drill-down visiblity across institution pillars",
    industry: "Technology",
    image: "/finance.png",
  },
  {
    title: "Finance &\nCompliance",
    description:
      "Fee management, collections, budgeting, expense tracking and financial visibility.",
    deliverables: "Fee collection automation, Budget management, Financial reporting",
    industry: "Finance",
    image: "/finance.png",
  },
  {
    title: "People  &\nCulture",
    description:
      "HR management, hiring workflows, attendance, performance and retention analytics.",
    deliverables: "HR management system, Performance tracking, Retention analytics",
    industry: "Human Resource",
    image: "/finance.png",
  },
];

const TOTAL_DOTS = cards.length; // 6

function ShowcaseCard({
  title,
  description,
  deliverables,
  industry,
  image,
  index,
}: (typeof cards)[0] & { index: number }) {
  // Cards are 0-indexed; dot fill count = index + 1
  const filledDots = index + 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="cardstyle rounded-3xl rounded-xl overflow-hidden mb-12 md:mb-20"
    >
      {/* ── Image area ── */}
      <div
        className="w-full relative overflow-hidden h-full md:h[460px]"
        style={{
          background: "linear-gradient(135deg, #a9acb1 0%, #acafb7 100%)",
        }}
      >
        <img src={image} alt={title} className="object-cover w-full" />
      </div>

      {/* ── Bottom content ── */}
      <div className="px-4 py-8 md:px-10 md:py-8">
        {/* Progressive dots */}
        <div className="flex items-center gap-2 mb-6">
          {Array.from({ length: TOTAL_DOTS }).map((_, dotIndex) => (
            <span
              key={dotIndex}
              className="w-2.5 h-2.5 rounded-full transition-colors duration-300"
              style={{
                background:
                  dotIndex < filledDots
                    ? "#ef4444"
                    : "rgba(0,0,0,0.12)",
              }}
            />
          ))}
        </div>

        {/* Info row */}
       <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr_1.2fr_0.6fr] items-start gap-4 md:gap-8">
          {/* Title */}
          <h3 className="font-interTight text-xl md:text-2xl font-medium text-[#1a1a1c] leading-tight md:whitespace-pre-line">
            {title}
          </h3>

          {/* Description */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-2"
              style={{ color: "#9ca3af" }}
            >
              Description
            </p>
            <p className="text-sm text-[#6b7a8d] leading-relaxed">
              {description}
            </p>
          </div>

          {/* Deliverables */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-2"
              style={{ color: "#9ca3af" }}
            >
              Deliverables
            </p>
            <p className="text-sm text-[#6b7a8d] leading-relaxed">
              {deliverables}
            </p>
          </div>

          {/* Industry */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-2"
              style={{ color: "#9ca3af" }}
            >
              Industry
            </p>
            <p className="text-sm text-[#6b7a8d]">{industry}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Showcase() {
  return (
    <section className="bg-white py-4 md:py-24 px-4 md:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 ldg:mb-16"
        >
          <h2 className="font-interTight text-2xl lg:text-5xl font-medium text-[#1a1a1c] leading-tight mb-4">
            Everything Your Institution Runs On
          </h2>
          <p className="text-sm md:text-lg text-[#6b7a8d] max-w-xl mx-auto">
            One ecosystem covering academics, operations, finance, and intelligence.
          </p>
        </motion.div>

        {/* Cards */}
        {cards.map((card, i) => (
          <ShowcaseCard key={card.title} {...card} index={i} />
        ))}
      </div>
    </section>
  );
}
