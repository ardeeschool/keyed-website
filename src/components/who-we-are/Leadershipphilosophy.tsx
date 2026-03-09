"use client";

import { motion } from "motion/react";
import { GraduationCap, Handshake, RefreshCw } from "lucide-react";

const items = [
  {
    Icon: GraduationCap,
    title: "Educators First, Technologists Second",
    desc: "We understand education because we've lived it. Every feature in KeyEd is informed by real educational experience, not market research.",
    isAccent: true,
  },
  {
    Icon: Handshake,
    title: "Long-Term Partnership Over Short-Term Sales",
    desc: "We're building long-term relationships with institutions, supporting their growth and evolution as they support their students' growth.",
    isAccent: false,
  },
  {
    Icon: RefreshCw,
    title: "Continuous Improvement, Always Learning",
    desc: "We listen to institutional feedback, adapt to changing needs, and continuously enhance KeyEd to serve schools better.",
    isAccent: true,
  },
];

const lightShadow =
  "0px 7.77px 16px 0px rgba(0,0,0,0.059), 0px 3px 3px 0px rgba(0,0,0,0.102), 0px -8px 0px 0px rgba(0,0,0,0.051) inset, 0px 4px 0px 0px rgba(255,255,255,0.6) inset";

/* ── Simple Card (mobile + tablet) ── */
function SimplePhilosophyCard({
  Icon, title, desc, isAccent, index,
}: {
  Icon: any; title: string; desc: string; isAccent: boolean; index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl sm:rounded-3xl flex flex-col items-center text-center p-8 sm:p-10"
      style={{
        background: isAccent ? "#09090B" : "#ffffff",
        boxShadow: isAccent ? "none" : lightShadow,
      }}
    >
      <div
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6"
        style={{
          background: isAccent ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.04)",
          border: isAccent ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Icon
          className={isAccent ? "text-white" : "text-[#1a1a1c]"}
          style={{ width: 24, height: 24 }}
          strokeWidth={1.5}
        />
      </div>
      <h3
        className="font-interTight text-base sm:text-lg font-medium mb-2.5 leading-snug"
        style={{ color: isAccent ? "#ffffff" : "#1a1a1c" }}
      >
        {title}
      </h3>
      <p
        className="text-[13px] sm:text-sm leading-relaxed max-w-[320px]"
        style={{ color: isAccent ? "rgba(255,255,255,0.5)" : "#6b7a8d" }}
      >
        {desc}
      </p>
    </motion.div>
  );
}

export default function LeadershipPhilosophy() {
  return (
    <>
      {/* Desktop-only puzzle styles */}
      <style>{`
        .puzzle-card { position: relative; }

        .puzzle-right-tab::after {
          content: '';
          position: absolute;
          right: -14px;
          top: 50%;
          transform: translateY(-50%);
          width: 28px;
          height: 56px;
          background: inherit;
          border-radius: 0 28px 28px 0;
          z-index: 2;
        }

        .puzzle-left-tab::before {
          content: '';
          position: absolute;
          left: -14px;
          top: 50%;
          transform: translateY(-50%);
          width: 28px;
          height: 56px;
          background: inherit;
          border-radius: 28px 0 0 28px;
          z-index: 2;
        }

        .puzzle-left-notch::before {
          content: '';
          position: absolute;
          left: -1px;
          top: 50%;
          transform: translateY(-50%);
          width: 28px;
          height: 56px;
          background: #faf9f7;
          border-radius: 0 28px 28px 0;
          z-index: 3;
        }

        .puzzle-right-notch::after {
          content: '';
          position: absolute;
          right: -1px;
          top: 50%;
          transform: translateY(-50%);
          width: 28px;
          height: 56px;
          background: #faf9f7;
          border-radius: 28px 0 0 28px;
          z-index: 3;
        }

        .notch-dots {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 5;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3px;
        }
        .notch-dots span {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(0,0,0,0.15);
        }
      `}</style>

      <section className="bg-white py-4 pb-16 sm:pb-20 md:pb-24 lg:pb-30 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
          >
            <span
              className="inline-block text-xs sm:text-sm font-medium px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 font-interTight"
              style={{
                background: "rgba(0,0,0,0.05)",
                border: "1px solid rgba(0,0,0,0.08)",
                color: "#1a1a1c",
              }}
            >
              Our Principles
            </span>

            <h2 className="font-interTight text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#1a1a1c] leading-tight mb-3 sm:mb-4">
              Our Leadership Philosophy
            </h2>
            <p className="text-sm sm:text-base text-[#6b7a8d] max-w-lg mx-auto">
              Committed to improving how institutions operate
            </p>
          </motion.div>

          {/* ═══ MOBILE — single column ═══ */}
          <div className="flex flex-col gap-4 md:hidden">
            {items.map((item, i) => (
              <SimplePhilosophyCard key={item.title} Icon={item.Icon} title={item.title} desc={item.desc} isAccent={item.isAccent} index={i} />
            ))}
          </div>

          {/* ═══ TABLET — 2+1 layout ═══ */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-2 gap-4 mb-4">
              {items.slice(0, 2).map((item, i) => (
                <SimplePhilosophyCard key={item.title} Icon={item.Icon} title={item.title} desc={item.desc} isAccent={item.isAccent} index={i} />
              ))}
            </div>
            <div className="max-w-sm mx-auto">
              <SimplePhilosophyCard Icon={items[2].Icon} title={items[2].title} desc={items[2].desc} isAccent={items[2].isAccent} index={2} />
            </div>
          </div>

          {/* ═══ DESKTOP — puzzle cards ═══ */}
          <div className="hidden lg:flex items-stretch justify-center">
            {items.map((item, i) => {
              const Icon = item.Icon;
              const isMiddle = i === 1;

              let puzzleClass = "puzzle-card";
              if (i === 0) puzzleClass += " puzzle-right-tab";
              if (isMiddle) puzzleClass += " puzzle-left-notch puzzle-right-notch";
              if (i === 2) puzzleClass += " puzzle-left-tab";

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={`${puzzleClass} rounded-3xl flex flex-col items-center text-center`}
                  style={{
                    background: item.isAccent ? "#09090B" : "#ffffff",
                    padding: "48px 32px",
                    flex: 1,
                    marginLeft: isMiddle ? 14 : 0,
                    marginRight: isMiddle ? 14 : 0,
                    boxShadow: item.isAccent ? "none" : lightShadow,
                    zIndex: 1,
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                    style={{
                      background: item.isAccent ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.04)",
                      border: item.isAccent ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <Icon className={item.isAccent ? "text-white" : "text-[#1a1a1c]"} style={{ width: 28, height: 28 }} strokeWidth={1.5} />
                  </div>

                  <div className="flex-1 min-h-[80px]" />

                  <h3 className="font-interTight text-lg font-medium mb-3 leading-snug" style={{ color: item.isAccent ? "#ffffff" : "#1a1a1c" }}>
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed max-w-[280px]" style={{ color: item.isAccent ? "rgba(255,255,255,0.5)" : "#6b7a8d" }}>
                    {item.desc}
                  </p>

                  {isMiddle && (
                    <>
                      <div className="notch-dots" style={{ left: 8 }}><span /><span /><span /><span /></div>
                      <div className="notch-dots" style={{ right: 8 }}><span /><span /><span /><span /></div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}