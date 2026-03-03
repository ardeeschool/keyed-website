"use client";

import React from "react";
import {
  TrendingUp,
  AlertTriangle,
  Zap,
  BookOpen,
  DollarSign,
  BarChart2,
} from "lucide-react";

const capabilities = [
  {
    title: "Enrollment Forecasting",
    description:
      "Predict enrollment trends, identify admissions bottlenecks, and optimize your recruitment strategy based on historical patterns and market signals.",
    Icon: TrendingUp,
  },
  {
    title: "Academic Risk Detection",
    description:
      "Identify students at risk of falling behind, detect patterns in academic performance, and enable early intervention before issues escalate.",
    Icon: AlertTriangle,
  },
  {
    title: "Operational Bottleneck Alerts",
    description:
      "Receive real-time alerts about operational inefficiencies, resource constraints, and process delays across campus operations.",
    Icon: Zap,
  },
  {
    title: "Teacher Workload Intelligence",
    description:
      "Monitor teacher workload distribution, identify burnout risks, and optimize resource allocation for better faculty well-being.",
    Icon: BookOpen,
  },
  {
    title: "Financial Forecasting",
    description:
      "Predict revenue patterns, identify collection risks, and optimize budget allocation with AI-powered financial intelligence.",
    Icon: DollarSign,
  },
  {
    title: "Institutional Performance Trends",
    description:
      "Track long-term institutional health metrics, benchmark against goals, and identify strategic opportunities for growth.",
    Icon: BarChart2,
  },
];

// Desktop staggered offsets only — ignored on mobile/tablet
const verticalOffsets = ["mt-0", "mt-12", "mt-0", "mt-12", "mt-0", "mt-12"];

export default function Capabilities() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white min-h-screen">
      <style>{`
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        /* Only animate on md+ so mobile stays stable */
        @media (min-width: 768px) {
          .card-float:nth-child(1) { animation: floatCard 3.5s ease-in-out infinite; animation-delay: 0.5s; }
          .card-float:nth-child(2) { animation: floatCard 3.5s ease-in-out infinite; animation-delay: 1.0s; }
          .card-float:nth-child(3) { animation: floatCard 3.5s ease-in-out infinite; animation-delay: 1.5s; }
          .card-float:nth-child(4) { animation: floatCard 3.5s ease-in-out infinite; animation-delay: 2.0s; }
          .card-float:nth-child(5) { animation: floatCard 3.5s ease-in-out infinite; animation-delay: 2.5s; }
          .card-float:nth-child(6) { animation: floatCard 3.5s ease-in-out infinite; animation-delay: 3.0s; }
        }
      `}</style>

      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 md:mb-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-primary">
          Intelligent Capabilities
        </h2>
        <p className="mt-3 text-base text-black">
          AI-powered insights across every aspect of your institution
        </p>
      </div>

      {/* Cards Grid
          - mobile  (< sm):  1 column, no vertical offsets
          - tablet  (sm–md): 2 columns, no vertical offsets
          - desktop (md+):   3 columns, staggered vertical offsets
      */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 items-start">
        {capabilities.map((cap, i) => {
          const { Icon } = cap;
          return (
            <div
              key={cap.title}
              /* Apply stagger offset only on md+ via responsive class */
              className={`card-float md:${verticalOffsets[i]}`}
            >
              <div className="relative cardstyle rounded-2xl p-6 sm:p-7 md:p-8 flex flex-col gap-3 md:gap-4 cursor-default overflow-hidden">
                {/* Icon box */}
                <div className="iconStyle w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center">
                  <Icon className="text-white w-6 h-6 md:w-7 md:h-7" strokeWidth={1.8} />
                </div>

                {/* Text */}
                <h3 className="text-black font-semibold text-base md:text-lg leading-snug">
                  {cap.title}
                </h3>
                <p className="text-black text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
