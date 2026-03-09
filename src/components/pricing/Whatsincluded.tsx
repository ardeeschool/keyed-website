"use client";

import { motion } from "motion/react";
import {
  Headset,
  GraduationCap,
  RefreshCcw,
  Shield,
  Cloud,
  Smartphone,
} from "lucide-react";

const leftFeatures = [
  { Icon: Headset, title: "Dedicated Support", desc: "Priority support with dedicated account management" },
  { Icon: GraduationCap, title: "Training & Onboarding", desc: "Comprehensive training for staff and leadership" },
  { Icon: RefreshCcw, title: "Regular Updates", desc: "Continuous platform improvements and new features" },
];

const rightFeatures = [
  { Icon: Shield, title: "Enterprise Security", desc: "Bank-grade encryption and data protection" },
  { Icon: Cloud, title: "Cloud Infrastructure", desc: "99.9% uptime with automatic backups" },
  { Icon: Smartphone, title: "Mobile Access", desc: "Full platform access on any device" },
];

const allFeatures = [
  leftFeatures[0], rightFeatures[0],
  leftFeatures[1], rightFeatures[1],
  leftFeatures[2], rightFeatures[2],
];

// ── Styles ────────────────────────────────────────────────
const cardStyle = {
  backgroundColor: "#f5f5f5",
  boxShadow:
    "0px 7.77px 16px 0px rgba(0,0,0,0.059), 0px 3px 3px 0px rgba(0,0,0,0.102), 0px -8px 0px 0px rgba(0,0,0,0.051) inset, 0px 4px 0px 0px rgba(255,255,255,0.6) inset",
};

const iconStyle = {
  backgroundColor: "#272727",
  boxShadow:
    "0px -3px 0px 0px #080808 inset, 0px 1px 0px 0px rgba(255,255,255,0.302) inset, 0px 2.77px 2.21px 0px rgba(0,0,0,0.122), 0px 3px 3px 0px rgba(0,0,0,0.141), 0px 12.52px 10.02px 0px rgba(0,0,0,0.133), 0px 22.34px 17.87px 0px rgba(0,0,0,0.141), 0px 41.78px 33.42px 0px rgba(0,0,0,0.149), 0px 100px 80px 0px rgba(0,0,0,0.149)",
};

const logoStyle = {
  background:
    "linear-gradient(180deg, #000000 0%, #7f7f7f 100%), radial-gradient(62.56% 62.56% at 28.14% -10.42%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
  boxShadow:
    "0px -3px 0px 0px rgba(0, 0, 0, 0.059) inset, 0px 1px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 3.44px 5.57px 0px rgba(0, 0, 0, 0.086), 0px 22.91px 37.08px 0px rgb(190 190 190 / 17%), 0px 76px 123px 0px rgba(0, 145, 146, 0.051), 0px 5.05px 8.18px 0px rgb(117 120 120 / 10%), 0px 16.98px 27.47px 0px rgba(0, 145, 146, 0.047), 0px 56px 83px 0px rgb(133 133 133 / 25%), 0px 14px 34px 0px rgb(175 175 175 / 25%), 0px 1px 2px 0px rgb(179 179 179 / 40%)",
};

// ── Desktop Feature Card (with side slide) ────────────────
function FeatureCard({
  Icon,
  title,
  desc,
  index,
  side,
}: {
  Icon: any;
  title: string;
  desc: string;
  index: number;
  side: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl p-6 relative"
      style={{ ...cardStyle, zIndex: 2 }}
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={iconStyle}>
        <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
      </div>
      <h3 className="font-interTight text-lg font-bold text-[#1a1a1c] mb-2">{title}</h3>
      <p className="text-sm text-[#6b7a8d] leading-relaxed">{desc}</p>
    </motion.div>
  );
}

// ── Mobile/Tablet Card (fade up) ──────────────────────────
function SimpleCard({
  Icon,
  title,
  desc,
  index,
}: {
  Icon: any;
  title: string;
  desc: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl p-5 relative"
      style={{ ...cardStyle, zIndex: 2 }}
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={iconStyle}>
        <Icon className="w-4 h-4 text-white" strokeWidth={1.8} />
      </div>
      <h3 className="font-interTight text-[15px] sm:text-base font-bold text-[#1a1a1c] mb-1.5">{title}</h3>
      <p className="text-[13px] text-[#6b7a8d] leading-relaxed">{desc}</p>
    </motion.div>
  );
}

// ── Center Logo ───────────────────────────────────────────
function CenterLogo({ size = "lg" }: { size?: "sm" | "md" | "lg" }) {
  const dims = size === "sm" ? "w-18 h-18" : size === "md" ? "w-20 h-20" : "w-24 h-24";
  const textSize = size === "sm" ? "text-lg" : size === "md" ? "text-xl" : "text-2xl";
  const radius = size === "sm" ? "rounded-2xl" : "rounded-3xl";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="flex justify-center"
    >
      <div
        className={`${dims} ${radius} flex flex-col items-center justify-center`}
        style={logoStyle}
      >
        <span className={`font-interTight ${textSize} font-bold text-white leading-none tracking-tight`}>
          KeyEd
        </span>
      </div>
    </motion.div>
  );
}

// ── Main Component ────────────────────────────────────────
export default function WhatsIncluded() {
  return (
    <>
      {/* Desktop-only connector animations */}
      <style>{`
        @keyframes dot-travel-right {
          0%   { left: 0%;   opacity: 0; }
          5%   { opacity: 1; }
          90%  { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes dot-travel-left {
          0%   { right: 0%;   opacity: 0; }
          5%   { opacity: 1; }
          90%  { opacity: 1; }
          100% { right: 100%; opacity: 0; }
        }

        .h-connector {
          position: absolute;
          top: 50%;
          height: 1px;
          transform: translateY(-50%);
          z-index: 1;
          background: repeating-linear-gradient(
            90deg,
            rgba(0,0,0,0.10) 0px,
            rgba(0,0,0,0.10) 5px,
            transparent 5px,
            transparent 11px
          );
        }
        .h-connector::after {
          content: '';
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(80,80,80,0.5);
          top: -2px;
          box-shadow: 0 0 6px rgba(80,80,80,0.3);
        }

        .h-connector-left {
          right: -90px;
          width: calc(32px + 90px);
        }
        .h-connector-left::after {
          animation: dot-travel-right 2.5s ease-in-out infinite;
        }

        .h-connector-right {
          left: -90px;
          width: calc(32px + 90px);
        }
        .h-connector-right::after {
          animation: dot-travel-left 2.5s ease-in-out infinite;
        }

        .connector-row-0::after { animation-delay: 0s; }
        .connector-row-1::after { animation-delay: 0.8s; }
        .connector-row-2::after { animation-delay: 1.6s; }

        @keyframes v-pulse {
          0%, 100% { opacity: 0.10; }
          50%      { opacity: 0.25; }
        }

        .v-line {
          position: absolute;
          left: 16%;
          width: 1px;
          transform: translateX(-16%);
          background: repeating-linear-gradient(
            180deg,
            rgba(0,0,0,10) 0px,
            rgba(0,0,0,10) 5px,
            transparent 5px,
            transparent 11px
          );
          animation: v-pulse 3s ease-in-out infinite;
          z-index: 0;
        }
      `}</style>

      <section className="bg-[#ffffff] py-14 sm:py-16 md:py-20 lg:py-24 pb-20 sm:pb-24 md:pb-28 lg:pb-36 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="font-interTight text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1a1a1c] leading-tight">
              What&apos;s <span className="text-[#4a4a4c]">Included</span>
            </h2>
          </motion.div>

          {/* ═══════════════════════════════════════════
              MOBILE — single column
              < 768px
              ═══════════════════════════════════════════ */}
          <div className="md:hidden">
            <div className="mb-8">
              <CenterLogo size="sm" />
            </div>
            <div className="flex flex-col gap-3">
              {allFeatures.map((f, i) => (
                <SimpleCard key={f.title} Icon={f.Icon} title={f.title} desc={f.desc} index={i} />
              ))}
            </div>
          </div>

          {/* ═══════════════════════════════════════════
              TABLET — 2-col grid + logo above
              768px – 1023px
              ═══════════════════════════════════════════ */}
          <div className="hidden md:block lg:hidden">
            <div className="mb-10">
              <CenterLogo size="md" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {allFeatures.map((f, i) => (
                <SimpleCard key={f.title} Icon={f.Icon} title={f.title} desc={f.desc} index={i} />
              ))}
            </div>
          </div>

          {/* ═══════════════════════════════════════════
              DESKTOP — 3-col with connectors + center logo
              ≥ 1024px
              ═══════════════════════════════════════════ */}
          <div
            className="relative hidden lg:grid"
            style={{
              gridTemplateColumns: "1fr 180px 1fr",
              gap: "28px 0",
              alignItems: "center",
            }}
          >
            {/* Vertical line */}
            <div
              className="v-line"
              style={{
                gridColumn: "2",
                gridRow: "1 / 4",
                top: 0, bottom: 0,
                height: "100%",
                pointerEvents: "none",
              }}
            />

            {/* ROW 1 */}
            <div className="relative pr-8" style={{ overflow: "visible" }}>
              <FeatureCard Icon={leftFeatures[0].Icon} title={leftFeatures[0].title} desc={leftFeatures[0].desc} index={0} side="left" />
              <div className="h-connector h-connector-left connector-row-0" />
            </div>
            <div />
            <div className="relative pl-8" style={{ overflow: "visible" }}>
              <FeatureCard Icon={rightFeatures[0].Icon} title={rightFeatures[0].title} desc={rightFeatures[0].desc} index={0} side="right" />
              <div className="h-connector h-connector-right connector-row-0" />
            </div>

            {/* ROW 2 — center logo */}
            <div className="relative pr-8" style={{ overflow: "visible" }}>
              <FeatureCard Icon={leftFeatures[1].Icon} title={leftFeatures[1].title} desc={leftFeatures[1].desc} index={1} side="left" />
              <div className="h-connector h-connector-left connector-row-1" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center relative"
              style={{ zIndex: 3 }}
            >
              <div
                className="w-24 h-24 rounded-3xl flex flex-col items-center justify-center"
                style={logoStyle}
              >
                <span className="font-interTight text-2xl font-bold text-white leading-none tracking-tight">
                  KeyEd
                </span>
              </div>
            </motion.div>

            <div className="relative pl-8" style={{ overflow: "visible" }}>
              <FeatureCard Icon={rightFeatures[1].Icon} title={rightFeatures[1].title} desc={rightFeatures[1].desc} index={1} side="right" />
              <div className="h-connector h-connector-right connector-row-1" />
            </div>

            {/* ROW 3 */}
            <div className="relative pr-8" style={{ overflow: "visible" }}>
              <FeatureCard Icon={leftFeatures[2].Icon} title={leftFeatures[2].title} desc={leftFeatures[2].desc} index={2} side="left" />
              <div className="h-connector h-connector-left connector-row-2" />
            </div>
            <div />
            <div className="relative pl-8" style={{ overflow: "visible" }}>
              <FeatureCard Icon={rightFeatures[2].Icon} title={rightFeatures[2].title} desc={rightFeatures[2].desc} index={2} side="right" />
              <div className="h-connector h-connector-right connector-row-2" />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}