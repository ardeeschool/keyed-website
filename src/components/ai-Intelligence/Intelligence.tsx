"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ── Globe SVG (dotted world map style) ────────────────────
function GlobeGraphic() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[320px] overflow-hidden opacity-40">
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full"
        style={{ transform: "translateY(180px)" }}
      >
        <defs>
          <radialGradient id="globe-grad" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="70%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <clipPath id="globe-clip">
            <circle cx="250" cy="250" r="220" />
          </clipPath>
        </defs>

        <circle cx="250" cy="250" r="220" fill="url(#globe-grad)" />

        <g clipPath="url(#globe-clip)" stroke="rgba(255,255,255,0.1)" fill="none" strokeWidth="0.5">
          {[80, 120, 160, 200, 240, 280, 320, 360].map((y) => (
            <ellipse
              key={`lat-${y}`}
              cx="250"
              cy={y}
              rx={220 * Math.sin(Math.acos((y - 250) / 220))}
              ry={12}
            />
          ))}
          {[-60, -30, 0, 30, 60].map((offset) => (
            <ellipse
              key={`lng-${offset}`}
              cx={250 + offset * 1.5}
              cy="250"
              rx={Math.max(10, 80 - Math.abs(offset))}
              ry="220"
            />
          ))}
        </g>

        <g clipPath="url(#globe-clip)">
          {Array.from({ length: 200 }).map((_, i) => {
            const angle = (i * 137.508 * Math.PI) / 180;
            const r = Math.sqrt(i / 200) * 200;
            const x = 250 + r * Math.cos(angle);
            const y = 250 + r * Math.sin(angle) * 0.6;
            const inContinent =
              (x > 150 && x < 300 && y > 120 && y < 220) ||
              (x > 280 && x < 400 && y > 140 && y < 260) ||
              (x > 100 && x < 230 && y > 230 && y < 340) ||
              (x > 300 && x < 420 && y > 260 && y < 380) ||
              (x > 170 && x < 260 && y > 150 && y < 300);
            if (!inContinent) return null;
            return (
              <circle key={i} cx={x} cy={y} r={1.2} fill="rgba(255,255,255,0.25)" />
            );
          })}
        </g>

        <circle cx="250" cy="250" r="220" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────
export default function Intelligence() {
  return (
    <section className="bg-[#F8F9FB] py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-medium text-gray-900 mb-3">
            Intelligence That Empowers Leadership
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
            AI assists your decision-making process — never replaces it.
          </p>
        </div>

        {/* Card grid — stacked on mobile, side-by-side on md+ */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6">

          {/* ═══════════════════════════════════════════
           *  LEFT — Black globe card
           * ═══════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="blackcardstyle relative overflow-hidden rounded-3xl w-full md:w-[55%] md:flex-shrink-0"
            style={{ minHeight: 360 }}
          >
            <GlobeGraphic />

            <div className="relative z-10 flex flex-col h-full">
              <div className="p-7 sm:p-10">
                <h3 className="font-interTight text-2xl sm:text-3xl lg:text-4xl font-medium text-white leading-tight mb-4 sm:mb-6">
                  Human-First{" "}
                  <span className="text-red-500">AI</span>
                </h3>
                <p className="text-white text-sm sm:text-base">
                  AI provides insights. Leadership makes decisions. Your judgment remains central.
                </p>
              </div>

              <div className="mt-auto flex justify-center pb-0">
                <img
                  src="/ai-img.png"
                  alt="Hero"
                  width={350}
                  height={150}
                  className="w-[200px] sm:w-[280px] md:w-[350px] mx-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT column — two cards stacked */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full md:w-[45%]">

            {/* ── Top card: Secure & Ethical ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="cardstyle rounded-3xl p-7 sm:p-8 flex-1 relative overflow-hidden flex items-center"
              style={{ minHeight: 200 }}
            >
              {/* Large bg watermark */}
              <div
                className="absolute text-6xl sm:text-8xl right-4 bottom-2 font-interTight font-medium leading-none select-none pointer-events-none"
                style={{ color: "rgba(0,0,0,0.04)" }}
              >
                Secure
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-medium font-interTight text-primary-dark leading-tight mb-3 sm:mb-6">
                  Secure &amp; Ethical
                </h3>
                <p className="font-interTight text-sm sm:text-md font-normal text-primary leading-snug max-w-[300px]">
                  Your data stays private. AI operates within strict ethical and security protocols.
                </p>
              </div>
            </motion.div>

            {/* ── Bottom card: Predict, Don't React ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="cardstyle rounded-3xl p-7 sm:p-8 flex-1 relative overflow-hidden flex items-center"
              style={{ minHeight: 200 }}
            >
              <div className="flex gap-4 sm:gap-5 items-start w-full">
                {/* Avatar */}
                <div
                  className="w-20 h-28 sm:w-28 sm:h-36 rounded-2xl flex-shrink-0 overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #fff 0%, #fff 100%)" }}
                >
                  <div className="w-full flex items-end justify-center">
                    <img
                      src="/blackmob.png"
                      alt="Hero"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Quote content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-medium font-interTight text-primary-dark leading-tight mb-3 sm:mb-6">
                    Predict, Don't React
                  </h3>
                  <p className="font-interTight text-sm sm:text-md font-normal text-primary leading-snug">
                    Identify trends, risks, and opportunities before they become critical issues.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
