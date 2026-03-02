"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import {
  Building2,
  GraduationCap,
  Rocket,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */

type Milestone = {
  year: string;
  src: string;
  alt: string;
  name: string;
  location: string;
  desc: string;
  link: string;
  type: "school" | "realestate";
};

const milestones: Milestone[] = [
  {
    year: "1978",
    src: "/images/projects/vijaya-building-5.jpg",
    alt: "Vijaya Building",
    name: "Vijaya Building",
    location: "Barakhamba Road, Delhi",
    desc: "A prime commercial office space on Barakhamba Road, providing ideal accessibility and convenience for business operations.",
    link: "",
    type: "realestate",
  },
  {
    year: "1998",
    src: "/images/projects/gopaldas-building-1.jpg",
    alt: "Gopaldas Building",
    name: "Gopaldas Building",
    location: "Connaught Place, Delhi",
    desc: "The prestigious Gopaldas Bhawan stands as our initial flagship commercial property, offering extensive facilities and a prime address.",
    link: "",
    type: "realestate",
  },
  {
    year: "2000",
    src: "/images/projects/golf-apartments.png",
    alt: "Golf Apartments",
    name: "Golf Apartments",
    location: "Khan Market, Delhi",
    desc: "Premium residential apartments offering luxurious living with an exceptional mix of modern amenities and a prestigious address.",
    link: "",
    type: "realestate",
  },
  {
    year: "2003",
    src: "/images/projects/ssp.jpg",
    alt: "Sujan Singh Park",
    name: "The Ardee School, Sujan Singh Park",
    location: "New Delhi",
    desc: "The journey began here — our first campus, built on the belief that quality education needs strong operational foundations.",
    link: "",
    type: "school",
  },
  {
    year: "2006",
    src: "/images/projects/ardee-city-5.jpg",
    alt: "Ardee City",
    name: "Ardee City",
    location: "Gurgaon, HR",
    desc: "An established residential community in Sector 52, Gurugram, that made a noteworthy impression on the real estate landscape of Delhi-NCR.",
    link: "",
    type: "realestate",
  },
  {
    year: "2009",
    src: "/images/projects/goa.jpeg",
    alt: "Goa Campus",
    name: "The Ardee School, Goa",
    location: "Goa",
    desc: "Expanded to India's west coast, bringing the Ardee philosophy of academic excellence to a whole new community of learners.",
    link: "https://goa.theardeeschool.com/",
    type: "school",
  },
  {
    year: "2012",
    src: "/images/projects/commercial.png",
    alt: "Ardee Mall",
    name: "Ardee Mall",
    location: "Gurugram, HR",
    desc: "The retail revolution in Gurugram — an all-inclusive shopping and leisure experience with an exceptional mix of brands and amenities.",
    link: "",
    type: "realestate",
  },
  {
    year: "2014",
    src: "/images/projects/noidas.jpeg",
    alt: "Noida Campus",
    name: "The Ardee School, Noida",
    location: "Noida, UP",
    desc: "A new campus strengthening our presence in NCR, serving thousands of families with modern educational practices.",
    link: "https://noida.theardeeschool.com/",
    type: "school",
  },
  {
    year: "2017",
    src: "/images/projects/nfcg.jpg",
    alt: "NFC School",
    name: "The Ardee School, New Friends Colony",
    location: "New Delhi",
    desc: "Brought the Ardee legacy to one of Delhi's most established and beloved neighbourhoods.",
    link: "https://nfc.theardeeschool.com/",
    type: "school",
  },
  {
    year: "2024",
    src: "/images/projects/munirkam.png",
    alt: "Munirka Campus",
    name: "Ardee Montessori House",
    location: "Munirka, Delhi",
    desc: "Our latest campus and the catalyst for KeyEd — the operational complexity of five campuses demanded a smarter, unified platform.",
    link: "",
    type: "school",
  },
  {
    year: "2025",
    src: "/images/projects/ardeeResidences.png",
    alt: "The Ardee Residences",
    name: "The Ardee Residences",
    location: "Goa",
    desc: "A ready-to-move residential development offering ultra-luxurious apartments with the best interior finishes and specifications.",
    link: "",
    type: "realestate",
  },
];

/* ═══════════════════════════════════════════════════════
   CATEGORY CONFIG
   ═══════════════════════════════════════════════════════ */

const categoryStyle: Record<
  string,
  { label: string; icon: typeof Building2; gradient: string; dot: string }
> = {
  school: {
    label: "Education",
    icon: GraduationCap,
    gradient: "linear-gradient(135deg, #0456c9, #0a1628)",
    dot: "#0456c9",
  },
  realestate: {
    label: "Real Estate",
    icon: Building2,
    gradient: "linear-gradient(135deg, #2a2a2a, #6b6b6b)",
    dot: "#9e9e9e",
  },
};

/* ═══════════════════════════════════════════════════════
   FILM CARD  – individual cinematic card in the strip
   ═══════════════════════════════════════════════════════ */

function FilmCard({ item }: { item: Milestone }) {
  const cat = categoryStyle[item.type];
  const Icon = cat.icon;

  return (
    <div
      className="flex-shrink-0 relative rounded-2xl overflow-hidden group cursor-pointer"
      style={{ width: 400, background: "#0a0a0a" }}
    >
      {/* ── Image ── */}
      <div className="absolute inset-0">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
        />
      </div>

      {/* ── Gradient overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/10 transition-opacity duration-500 group-hover:from-black/80" />

      {/* ── Category accent — left edge stripe ── */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] z-20"
        style={{ background: cat.gradient }}
      />

      {/* ── Year watermark ── */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[140px] font-black text-white/[0.03] leading-none select-none pointer-events-none tracking-tighter">
        {item.year}
      </span>

      {/* ── Top bar: badge + year ── */}
      <div className="absolute top-5 left-5 right-5 flex items-start justify-between z-10">
        <span
          className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-white px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-white/10"
          style={{ background: cat.gradient }}
        >
          <Icon className="w-3 h-3" strokeWidth={2.5} />
          {cat.label}
        </span>
        <span className="text-md font-bold text-white/70 font-interTight">
          {item.year}
        </span>
      </div>

      {/* ── Bottom content ── */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-center gap-1 text-white/40 text-[11px] mb-2">
          <MapPin className="w-3 h-3" />
          {item.location}
        </div>
        <h3 className="font-interTight text-[22px] font-bold text-white mb-2 leading-tight">
          {item.name}
        </h3>
        <p className="text-[13px] text-white/50 leading-relaxed line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {item.desc}
        </p>
        {item.link && (
          <Link
            href={item.link}
            target="_blank"
            className="inline-flex items-center gap-1 text-xs font-medium text-teal-400 mt-3 hover:text-teal-300 transition-colors opacity-0 group-hover:opacity-100 duration-500"
          >
            Visit Website
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   KEYED END CARD
   ═══════════════════════════════════════════════════════ */

function KeyEdCard() {
  return (
    <div
      className="flex-shrink-0 relative rounded-2xl overflow-hidden flex items-center justify-center"
      style={{
        width: 400,
        background: "linear-gradient(160deg, #019192, #013f40, #011e1e)",
      }}
    >
      {/* Glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-44 h-44 bg-teal-400/20 rounded-full blur-[80px]" />
        <div className="absolute bottom-[20%] right-[15%] w-36 h-36 bg-white/10 rounded-full blur-[70px]" />
      </div>

      {/* Accent stripe */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] z-20"
        style={{ background: "linear-gradient(180deg, #019192, #5eead4)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-8">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-white px-3.5 py-1.5 rounded-full mb-8 border border-white/10 backdrop-blur-sm bg-white/10">
          <Rocket className="w-3 h-3" strokeWidth={2.5} />
          EdTech
        </span>
        <div className="mb-6">
          <img src="/whitelogo.svg" alt="KeyEd" className="w-36 mx-auto" />
        </div>
        <h3 className="font-interTight text-2xl font-bold text-white mb-3 leading-tight">
          KeyEd is Born
        </h3>
        <p className="text-[13px] text-white/50 leading-relaxed max-w-[280px] mx-auto">
          Two decades of building schools and infrastructure converge into one
          intelligent platform.
        </p>
        <div className="mt-8">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          <p className="text-[10px] text-white/25 tracking-[0.2em] uppercase mt-2">
            Now
          </p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   PROGRESS BAR — bottom of desktop viewport
   ═══════════════════════════════════════════════════════ */

function ProgressBar({
  progress,
  activeIndex,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  activeIndex: number;
}) {
  const barWidth = useTransform(progress, [0, 1], ["0%", "100%"]);
  const allYears = [...milestones.map((m) => m.year), "NOW"];

  return (
    <div className="px-12 pb-5 pt-3 relative z-10">
      {/* Track */}
      <div className="relative h-[2px] bg-white/[0.06] rounded-full mb-3 overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{
            width: barWidth,
            background:
              "linear-gradient(90deg, #6b6b6b, #0456c9, #019192)",
          }}
        />
      </div>

      {/* Year dots */}
      <div className="flex justify-between items-center">
        {allYears.map((yr, i) => {
          const isActive = i <= activeIndex;
          const isCurrent = i === activeIndex;
          return (
            <div key={yr} className="flex flex-col items-center gap-1.5">
              <div
                className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                style={{
                  background: isCurrent
                    ? "#019192"
                    : isActive
                    ? "rgba(255,255,255,0.4)"
                    : "rgba(255,255,255,0.08)",
                  boxShadow: isCurrent
                    ? "0 0 8px rgba(1,145,146,0.6)"
                    : "none",
                  transform: isCurrent ? "scale(1.8)" : "scale(1)",
                }}
              />
              <span
                className="text-sm font-medium transition-all duration-300"
                style={{
                  color: isCurrent
                    ? "rgba(255,255,255,0.8)"
                    : "rgba(255,255,255,0.2)",
                }}
              >
                {yr}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MOBILE CARD
   ═══════════════════════════════════════════════════════ */

function MobileCard({ item, index }: { item: Milestone; index: number }) {
  const cat = categoryStyle[item.type];
  const Icon = cat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-2xl overflow-hidden"
      style={{ height: 380, background: "#0a0a0a" }}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />

      {/* Left accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] z-20"
        style={{ background: cat.gradient }}
      />

      {/* Year watermark */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] font-black text-white/[0.04] leading-none select-none pointer-events-none">
        {item.year}
      </span>

      {/* Top */}
      <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-10">
        <span
          className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-white px-3 py-1.5 rounded-full border border-white/10"
          style={{ background: cat.gradient }}
        >
          <Icon className="w-3 h-3" strokeWidth={2.5} />
          {cat.label}
        </span>
        <span className="text-xs font-bold text-white/30">{item.year}</span>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <div className="flex items-center gap-1 text-white/40 text-[11px] mb-1.5">
          <MapPin className="w-3 h-3" />
          {item.location}
        </div>
        <h3 className="font-interTight text-lg font-bold text-white mb-1.5 leading-tight">
          {item.name}
        </h3>
        <p className="text-[13px] text-white/45 leading-relaxed line-clamp-2">
          {item.desc}
        </p>
        {item.link && (
          <Link
            href={item.link}
            target="_blank"
            className="inline-flex items-center gap-1 text-xs font-medium text-teal-400 mt-2"
          >
            Visit <ArrowUpRight className="w-3 h-3" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════════════ */

export default function legacyupdated() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({ target: sectionRef });

  /* Measure filmstrip overflow so we know how far to translate */
  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        const total = trackRef.current.scrollWidth;
        const view =
          trackRef.current.parentElement?.offsetWidth ?? 0;
        setScrollRange(Math.max(total - view, 0));
      }
    };
    // measure after fonts / images settle
    const id = setTimeout(measure, 100);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(id);
      window.removeEventListener("resize", measure);
    };
  }, []);

  /* Fallback so animation works before measurement */
  const CARD_W = 400;
  const GAP = 20;
  const totalCards = milestones.length + 1;
  const fallback = totalCards * (CARD_W + GAP) + 48;

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(scrollRange || fallback)]
  );

  /* Track which card is "active" */
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      Math.round(v * totalCards),
      totalCards - 1
    );
    setActiveIndex(idx);
  });

  /* Dynamic year shown in header */
  const activeYear =
    activeIndex < milestones.length
      ? milestones[activeIndex].year
      : "NOW";

  /* Vertical scroll height drives the horizontal movement */
  const scrollH = `${(totalCards + 2) * 45}vh`;

  return (
    <section className="bg-[#f3f3f3] relative">
      {/* ──────────────────────────────────────────────
          DESKTOP  — horizontal‑scroll filmstrip
          ────────────────────────────────────────────── */}
      <div
        ref={sectionRef}
        className="hidden lg:block relative"
        style={{ height: scrollH }}
      >
        <div className="sticky top-0 h-screen px-6 xl:px-20 py-8 flex items-center">
          <div
            className="max-w-[1400px] mx-auto w-full bg-primary rounded-3xl relative overflow-hidden flex flex-col"
            style={{ height: "85vh" }}
          >
            {/* ── Decorative lights
            <div className="light-box" />
            <img
              className="light-top absolute top-0 w-md left-1/2 -translate-x-1/2 pointer-events-none opacity-60"
              src="/light-top.png"
              alt=""
            />
            <img
              className="light-top absolute bottom-0 w-md left-1/2 -translate-x-1/2 pointer-events-none opacity-40"
              src="/light-bot.png"
              alt=""
            />
            ── */}
            {/* ── Floating particles ── */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 2 + (i % 3) * 2,
                  height: 2 + (i % 3) * 2,
                  background: `rgba(255,255,255,${0.03 + (i % 3) * 0.02})`,
                  left: `${12 + i * 15}%`,
                  top: `${15 + ((i * 23) % 60)}%`,
                }}
                animate={{
                  y: [0, -25, 0],
                  opacity: [0.15, 0.5, 0.15],
                }}
                transition={{
                  duration: 5 + i * 0.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.9,
                }}
              />
            ))}

            {/* ── Header row ── */}
            <div className="px-12 pt-10 pb-4 relative z-10 flex items-end justify-between">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="font-interTight text-3xl xl:text-4xl font-medium text-white leading-tight"
                >
                  Highlights over the years
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-white/30 text-sm mt-2 tracking-wide"
                >
                  Scroll to explore our journey
                </motion.p>
              </div>

              {/* Animated active year */}
              <div className="overflow-hidden h-[60px] flex items-end">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={activeYear}
                    initial={{ y: 40, opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -40, opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl xl:text-6xl font-black text-white/[0.07] font-interTight leading-none block"
                  >
                    {activeYear}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* ── Filmstrip ── */}
            <div className="flex-1 overflow-hidden relative z-10">
              <motion.div
                ref={trackRef}
                style={{ x }}
                className="flex gap-5 h-full items-stretch pl-12 pr-12 py-4"
              >
                {milestones.map((item, i) => (
                  <FilmCard
                    key={`${item.year}-${item.name}`}
                    item={item}
                  />
                ))}
                <KeyEdCard />
              </motion.div>
            </div>

            {/* ── Progress ── */}
            <ProgressBar
              progress={scrollYProgress}
              activeIndex={activeIndex}
            />
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────
          MOBILE  — vertical card stack
          ────────────────────────────────────────────── */}
      <div className="lg:hidden px-5 py-14">
        <div className="text-center mb-10">
          <h2 className="font-interTight text-3xl font-medium text-[#1a1a1c] mb-2">
            Highlights over the years
          </h2>
          <p className="text-sm text-[#6b7a8d]">
            Our journey from 1978 to today
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {milestones.map((item, i) => (
            <MobileCard
              key={`m-${item.year}-${item.name}`}
              item={item}
              index={i}
            />
          ))}

          {/* KeyEd mobile card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden flex items-center justify-center"
            style={{
              height: 320,
              background:
                "linear-gradient(160deg, #019192, #013f40, #011e1e)",
            }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[25%] left-[20%] w-36 h-36 bg-teal-400/20 rounded-full blur-[60px]" />
              <div className="absolute bottom-[20%] right-[15%] w-28 h-28 bg-white/10 rounded-full blur-[50px]" />
            </div>
            <div className="relative z-10 text-center px-6">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-white px-3 py-1.5 rounded-full mb-5 border border-white/10 bg-white/10">
                <Rocket className="w-3 h-3" strokeWidth={2.5} />
                EdTech
              </span>
              <div className="mb-4">
                <img
                  src="/whitelogo.svg"
                  alt="KeyEd"
                  className="w-32 mx-auto"
                />
              </div>
              <h3 className="font-interTight text-xl font-bold text-white mb-2">
                KeyEd is Born
              </h3>
              <p className="text-[13px] text-white/50 leading-relaxed">
                Two decades of building schools and infrastructure converge
                into one intelligent platform.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}