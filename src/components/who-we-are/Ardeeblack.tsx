"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Building2, GraduationCap, Rocket } from "lucide-react";

type Milestone = {
  year: string;
  src: string;
  alt: string;
  name: string;
  location: string;
  desc: string;
  bg: string;
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
    desc: "Vijaya Building is a prime commercial office space located on Barakhamba Road, providing ideal accessibility and convenience for business operations.",
    bg: "#000",
    link: "",
    type: "realestate",
  },
  {
    year: "1998",
    src: "/images/projects/gopaldas-building-1.jpg",
    alt: "Gopaldas Building",
    name: "Gopaldas Building",
    location: "Connaught Place, Delhi",
    desc: "The prestigious Gopaldas Bhawan stands as our initial flagship commercial property. Located on Barakhamba Road, Connaught Place, this property offers extensive facilities and a prime address for businesses.",
    bg: "#000",
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
    bg: "#000",
    link: "",
    type: "realestate",
  },
  {
    year: "2003",
    src: "/images/projects/ssp.jpg",
    alt: "Sujan Singh Park",
    name: "The Ardee School, Sujan Singh Park",
    location: "New Delhi",
    desc: "The journey began with The Ardee School, Sujan Singh Park — our first campus, built on the belief that quality education needs strong operational foundations.",
    bg: "#000",
    link: "",
    type: "school",
  },
  {
    year: "2006",
    src: "/images/projects/ardee-city-1.jpg",
    alt: "Ardee City",
    name: "Ardee City, Gurgaon",
    location: "Gurgaon, HR",
    desc: "Ardee Group is pleased to present Ardee City in Sector 52, Gurugram, an established residential community that has made a noteworthy impression on the real estate landscape of Delhi-NCR.",
    bg: "#000",
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
    bg: "#000",
    link: "https://goa.theardeeschool.com/",
    type: "school",
  },
  {
    year: "2012",
    src: "/images/projects/commercial.png",
    alt: "Ardee Mall",
    name: "Ardee Mall",
    location: "Gurugram, HR",
    desc: "Ardee Mall is the retail revolution in Gurugram, providing an all-inclusive shopping and leisure experience with an exceptional mix of brands and amenities.",
    bg: "#000",
    link: "",
    type: "realestate",
  },
  {
    year: "2014",
    src: "/images/projects/noida.jpg",
    alt: "Noida Campus",
    name: "The Ardee School, Noida",
    location: "Noida, UP",
    desc: "A new campus in Noida strengthened our presence in NCR, serving thousands of families with modern educational practices.",
    bg: "#000",
    link: "https://noida.theardeeschool.com/",
    type: "school",
  },
  {
    year: "2017",
    src: "/images/projects/nfc.jpg",
    alt: "NFC School",
    name: "The Ardee School, New Friends Colony",
    location: "New Delhi",
    desc: "Our New Friends Colony campus brought the Ardee legacy to one of Delhi's most established neighbourhoods.",
    bg: "#000",
    link: "https://nfc.theardeeschool.com/",
    type: "school",
  },
  {
    year: "2024",
    src: "/images/projects/munirka.jpg",
    alt: "Munirka Campus",
    name: "Ardee Montessori House",
    location: "Munirka",
    desc: "Our latest campus and the catalyst for KeyEd — the operational complexity of five campuses demanded a smarter, unified platform.",
    bg: "#000",
    link: "",
    type: "school",
  },
  {
    year: "2025",
    src: "/images/projects/ardeeResidences.png",
    alt: "The Ardee Residences",
    name: "The Ardee Residences",
    location: "Goa",
    desc: "The Ardee Residences will be a ready-to-move residential development offering ultra-luxurious apartments with the best interior finishes and specifications.",
    bg: "#000",
    link: "",
    type: "realestate",
  },
];

/* ── Staggered text children ── */
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const staggerItem = (side: "left" | "right") => ({
  hidden: { opacity: 0, x: side === "left" ? -20 : 20, y: 6 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
});

/* ── Parallax Image with hover zoom + location badge ── */
function ParallaxImage({ item }: { item: Milestone }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const scale = useTransform(scrollYProgress, [0, 0.35], [1.08, 1]);

  const img = (
    <motion.div className="absolute inset-0" style={{ y, scale }}>
      <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
    </motion.div>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full overflow-hidden rounded-xl group cursor-pointer"
      style={{ height: 300, background: item.bg }}
    >
      {item.link ? <Link href={item.link} target="_blank">{img}</Link> : img}

      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-500" />

      {/* Location badge slides up */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="absolute bottom-3 left-3 backdrop-blur-md px-3 py-1.5 rounded-lg text-[11px] font-medium text-white"
        style={{ background: "rgba(0,0,0,0.45)" }}
      >
        {item.location}
      </motion.div>
    </motion.div>
  );
}

/* ── Year Node with glow pulse ring ── */
function YearNode({
  year,
  gradient,
  glowColor,
}: {
  year: string;
  gradient: string;
  glowColor: string;
}) {
  return (
    <div className="flex justify-center relative">
      {/* Pulse ring */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: [0.6, 1.8, 2.1], opacity: [0, 0.35, 0] }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
        className="absolute w-14 h-14 rounded-full"
        style={{ background: `radial-gradient(circle, ${glowColor}, transparent)` }}
      />

      {/* Node */}
      <motion.div
        initial={{ scale: 0, rotate: -90 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="w-14 h-14 rounded-full flex items-center justify-center z-10 relative"
        style={{
          background: gradient,
          boxShadow: `0 4px 20px ${glowColor}, 0 0 40px ${glowColor.replace("0.4", "0.1")}`,
        }}
      >
        <span className="font-interTight text-xs font-medium text-white">{year}</span>
      </motion.div>
    </div>
  );
}

/* ── Connector line with draw-in ── */
function Connector({ isSchool }: { isSchool: boolean }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-[27px] h-px"
      style={{
        background: isSchool
          ? "linear-gradient(to right, transparent, rgba(4,86,201,0.25), transparent)"
          : "linear-gradient(to left, transparent, rgba(255,255,255,0.15), transparent)",
        ...(isSchool
          ? { left: "calc(50% + 28px)", width: "5%", transformOrigin: "left" }
          : { right: "calc(50% + 28px)", width: "5%", transformOrigin: "right" }),
      }}
    />
  );
}

export default function Ardeeblack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-[#f3f3f3] relative pb-20">
      <div className="px-6 lg:px-20">
        <div className="max-w-7xl mx-auto bg-primary rounded-2xl py-18 pb-32 px-12 relative overflow-hidden">
          {/* ── Decorative lights ── */}
          <div className="light-box"></div>
          <img className="light-top absolute top-0 w-md left-1/2 -translate-x-1/2" src="/light-top.png" alt="" />
          <img className="light-top absolute bottom-0 w-md left-1/2 -translate-x-1/2" src="/light-bot.png" alt="" />

          {/* ── Floating particles ── */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 2 + (i % 3) * 2,
                height: 2 + (i % 3) * 2,
                background: `rgba(255,255,255,${0.04 + (i % 3) * 0.03})`,
                left: `${10 + i * 11}%`,
                top: `${8 + ((i * 19) % 80)}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, (i % 2 === 0 ? 10 : -10), 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 5 + i * 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.7,
              }}
            />
          ))}

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 relative z-3 pt-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-interTight text-4xl lg:text-4xl font-medium text-white leading-[1.08] mb-24"
            >
              Highlights over the years
            </motion.h2>
          </motion.div>

          {/* ── Timeline ── */}
          <div ref={containerRef} className="relative mt-16">
            {/* Center line (background) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[rgba(255,255,255,0.1)]" />

            {/* Center line (animated glow fill) */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 top-0 origin-top"
              style={{
                height: lineHeight,
                width: 1,
                background: "rgba(255,255,255,0.85)",
                boxShadow:
                  "0 0 6px rgba(255,255,255,0.4), 0 0 16px rgba(255,255,255,0.15), 0 0 40px rgba(255,255,255,0.05)",
              }}
            />

            {/* ── Rows ── */}
            <div className="flex flex-col gap-28 pb-8">
              {milestones.map((item, i) => {
                const isSchool = item.type === "school";

                return (
                  <div
                    key={`${item.year}-${item.name}`}
                    className="grid items-center relative"
                    style={{ gridTemplateColumns: "1fr 60px 1fr" }}
                  >
                    {/* Connector */}
                    <Connector isSchool={isSchool} />

                    {/* ─── LEFT COLUMN ─── */}
                    <div className={isSchool ? "text-right pr-10" : "pr-10"}>
                      {isSchool ? (
                        /* School: staggered text on left */
                        <motion.div
                          variants={staggerContainer}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "-60px" }}
                        >
                          <motion.span
                            variants={staggerItem("left")}
                            className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-white px-4 py-1.5 rounded-full mb-3"
                            style={{ background: "linear-gradient(135deg, #0456c9, #000000)" }}
                          >
                            <GraduationCap className="w-3 h-3" strokeWidth={2.5} />
                            Education
                          </motion.span>
                          <motion.h4
                            variants={staggerItem("left")}
                            className="font-interTight text-xl font-semibold text-white mb-2"
                          >
                            {item.name}
                          </motion.h4>
                          <motion.p
                            variants={staggerItem("left")}
                            className="text-sm text-white/70 leading-relaxed"
                          >
                            {item.desc}
                          </motion.p>
                        </motion.div>
                      ) : (
                        /* Real estate: parallax image on left */
                        <ParallaxImage item={item} />
                      )}
                    </div>

                    {/* ─── CENTER NODE ─── */}
                    <YearNode
                      year={item.year}
                      gradient={
                        isSchool
                          ? "linear-gradient(135deg, #0456c9, #000000)"
                          : "linear-gradient(135deg, #000000, #9e9e9e)"
                      }
                      glowColor={
                        isSchool ? "rgba(4,86,201,0.4)" : "rgba(255,255,255,0.15)"
                      }
                    />

                    {/* ─── RIGHT COLUMN ─── */}
                    <div className="pl-10">
                      {isSchool ? (
                        /* School: parallax image on right */
                        <ParallaxImage item={item} />
                      ) : (
                        /* Real estate: staggered text on right */
                        <motion.div
                          variants={staggerContainer}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "-60px" }}
                        >
                          <motion.span
                            variants={staggerItem("right")}
                            className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-white px-4 py-1.5 rounded-full mb-3"
                            style={{ background: "linear-gradient(135deg, #000000, #9c9c9c)" }}
                          >
                            <Building2 className="w-3 h-3" strokeWidth={2.5} />
                            Real Estate
                          </motion.span>
                          <motion.h4
                            variants={staggerItem("right")}
                            className="font-interTight text-xl font-semibold text-white mb-2"
                          >
                            {item.name}
                          </motion.h4>
                          <motion.p
                            variants={staggerItem("right")}
                            className="text-sm text-white/70 leading-relaxed"
                          >
                            {item.desc}
                          </motion.p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* ── End node: KeyEd ── */}
              <div
                className="grid items-center relative"
                style={{ gridTemplateColumns: "1fr 60px 1fr" }}
              >
                {/* Connector */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute top-[31px] h-px"
                  style={{
                    background: "linear-gradient(to right, transparent, rgba(1,145,146,0.3), transparent)",
                    left: "calc(50% + 32px)",
                    width: "5%",
                    transformOrigin: "left",
                  }}
                />

                {/* Left: staggered text */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-right pr-10"
                >
                  <motion.span
                    variants={staggerItem("left")}
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-white px-4 py-1.5 rounded-full mb-3"
                    style={{ background: "linear-gradient(135deg, #019192, #017172)" }}
                  >
                    <Rocket className="w-3 h-3" strokeWidth={2.5} />
                    EdTech
                  </motion.span>
                  <motion.h4
                    variants={staggerItem("left")}
                    className="font-interTight text-xl font-semibold text-white mb-2"
                  >
                    KeyEd is Born
                  </motion.h4>
                  <motion.p
                    variants={staggerItem("left")}
                    className="text-sm text-white/70 leading-relaxed"
                  >
                    Two decades of building schools and infrastructure converge
                    into one intelligent platform.
                  </motion.p>
                </motion.div>

                {/* Center node */}
                <div className="flex justify-center relative">
                  {/* Double pulse ring for emphasis */}
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: [0.6, 2.2, 2.6], opacity: [0, 0.4, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                    className="absolute w-16 h-16 rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(1,145,146,0.5), transparent)" }}
                  />
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: [0.6, 1.6, 2.0], opacity: [0, 0.25, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                    className="absolute w-16 h-16 rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(1,145,146,0.35), transparent)" }}
                  />

                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-16 h-16 rounded-full flex items-center justify-center z-10 relative"
                    style={{
                      background: "linear-gradient(135deg, #019192, #017172)",
                      boxShadow: "0 4px 24px rgba(1,145,146,0.45), 0 0 60px rgba(1,145,146,0.15)",
                    }}
                  >
                    <span className="font-interTight text-[10px] font-medium text-white tracking-wider">
                      NOW
                    </span>
                  </motion.div>
                </div>

                {/* Right: logo with bounce */}
                <motion.div
                  initial={{ opacity: 0, x: 30, scale: 0.85 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="pl-10 flex items-center"
                >
                  <img src="/whitelogo.svg" alt="KeyEd" width="140" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}