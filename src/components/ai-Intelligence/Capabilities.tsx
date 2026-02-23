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

const verticalOffsets = ["mt-0", "mt-12", "mt-0", "mt-12", "mt-0", "mt-12"];

export default function Capabilities() {
  return (
    <section className="py-24 px-6 bg-white min-h-screen">
      <style>{`
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .card-float:nth-child(1) { animation: floatCard 3.5s ease-in-out infinite; animation-delay: 0.5s; }
        .card-float:nth-child(2) { animation: floatCard 3.5s ease-in-out infinite; animation-delay: 1.0s; }
        .card-float:nth-child(3) { animation: floatCard 3.5s ease-in-out infinite; animation-delay: 1.5s; }
        .card-float:nth-child(4) { animation: floatCard 3.5s ease-in-out infinite; animation-delay: 2.0s; }
        .card-float:nth-child(5) { animation: floatCard 3.5s ease-in-out infinite; animation-delay: 2.5s; }
        .card-float:nth-child(6) { animation: floatCard 3.5s ease-in-out infinite; animation-delay: 3.0s; }

        
      `}</style>

      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-primary">
          IntelligenceCapabilities
        </h2>
        <p className="mt-3 text-#000 text-base">
          AI-powered insights across every aspect of your institution
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 items-start">
        {capabilities.map((cap, i) => {
          const { Icon } = cap;
          return (
            <div key={cap.title} className={`card-float ${verticalOffsets[i]}`}>
              <div className="relative cardstyle rounded-2xl p-8 flex flex-col gap-4 cursor-default overflow-hidden">
                {/* Dark icon box */}
                <div className="iconStyle w-12 h-12 rounded-xl flex items-center justify-center">
                  <Icon className="text-white w-7 h-7" strokeWidth={1.8} />
                </div>

                {/* Text */}
                <h3 className="text-[#000] font-semibold text-lg mb-2 leading-snug">
                  {cap.title}
                </h3>
                <p className="text-#000 text-sm leading-relaxed">
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
