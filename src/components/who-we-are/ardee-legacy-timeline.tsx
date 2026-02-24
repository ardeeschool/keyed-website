"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
const milestones = [
  {
    year: "2003",
    src: "/images/Theardee-ssp.jpg",
    alt: "Sujan Singh",
    name: "The Ardee School, Sujan Singh Park",
    location: "New Delhi",
    desc: "The journey began with The Ardee School, Sujan Singh Park — our first campus, built on the belief that quality education needs strong operational foundations.",
    bg: "#7dd3fc",
    link: "",
  },
  {
    year: "2009",
    src: "/images/goa.png",
    alt: "Goa Campus",
    name: "The Ardee School",
    location: "Goa",
    desc: "Expanded to India's west coast, bringing the Ardee philosophy of academic excellence to a whole new community of learners.",
    bg: "#fde68a",
    link: "https://goa.theardeeschool.com/",
  },
   {
    year: "2014",
    src: "/images/noida.jpg",
    alt: "Noida Campus",
    name: "The Ardee School, Noida",
    location: "Noida, UP",
    desc: "A new campus in South Delhi strengthened our presence in the capital, serving thousands of families with modern educational practices.",
    bg: "#fca5a5",
    link: "https://noida.theardeeschool.com/",
  },
    {
    year: "2017",
    src: "/images/nfc.jpg",
    alt: "NFC School",
    name: "The Ardee School, New Friends Colony",
    location: "New Delhi",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    bg: "#7dd3fc",
    link: "https://nfc.theardeeschool.com/",
  },
  
  {
    year: "2024",
    src: "/images/munirka.jpg",
    alt: "Munirka Campus",
    name: "Ardee Montessori House",
    location: "Munirka",
     desc: "Our latest campus and the catalyst for KeyEd — the operational complexity of four campuses demanded a smarter, unified platform.",
    bg: "#c4b5fd",
    link: "",
  },
 
];

function TimelineCard({
  item,
  index,
}: {
  item: (typeof milestones)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <div ref={cardRef} className="relative flex gap-8">
      {/* ── Timeline node ── */}
      <div className="flex flex-col items-center flex-shrink-0" style={{ width: 60 }}>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.4,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
          style={{
            background: "#09090B",
            boxShadow:
              "0px -2px 0px 0px #000 inset, 0px 1px 0px 0px rgba(255,255,255,0.2) inset, 0 4px 16px rgba(0,0,0,0.2)",
          }}
        >
          <span className="font-interTight text-xs font-bold text-white">
            {item.year}
          </span>
        </motion.div>
      </div>

      {/* ── Card content ── */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.6,
          delay: 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="cardstyle rounded-2xl overflow-hidden flex-1"
      >
        {/* Image */}
        <motion.div
          style={{ scale: imageScale, opacity: imageOpacity }}
          className="relative w-full overflow-hidden rounded-t-2xl"
        >
          <div
            className="w-full relative"
            style={{ height: 220, background: item.bg }}
          >
                <Link
            href={item.link} target="_blank">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
            />
            </Link>
          </div>
        </motion.div>

        {/* Text */}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <h4 className="font-interTight text-lg font-medium text-[#1a1a1c]">
              {item.name}
            </h4>
            <span
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(0,0,0,0.05)",
                color: "#6b7a8d",
              }}
            >
              {item.location}
            </span>
          </div>
          <p className="text-sm text-[#6b7a8d] leading-relaxed">
            {item.desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function ArdeeLegacy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-white py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div ref={containerRef} className="flex gap-16 relative" style={{ alignItems: "flex-start" }}>
          {/* ═══════════════════════════════════════════
           *  LEFT — Sticky text (45%)
           * ═══════════════════════════════════════════ */}
          <div className="w-[45%] flex-shrink-0 lg:sticky lg:top-16 lg:h-screen py-20 ">
            <div className="sticky top-24">
              {/* Heading row */}
              <div className="flex gap-4 items-start justify-between mb-10">
                <div className="bg-primary-dark rounded-lg w-20 h-20 relative shadow-sm border border-primary/30 flex-shrink-0">
                  <Image
                    src="/images/asign.png"
                    alt="Ardee Sign"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-0">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-interTight text-4xl lg:text-5xl font-medium text-[#1a1a1c] leading-tight mb-2"
                  >
                    The Ardee Legacy
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-md text-primary/40 font-medium"
                  >
                    Over 20 years of educational excellence and innovation
                  </motion.p>
                </div>

                
              </div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px bg-[rgba(0,0,0,0.1)] mb-10 origin-left"
              />

              {/* Sub heading */}
              <motion.h3
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="font-interTight text-2xl font-medium text-[#1a1a1c] mb-5"
              >
                Ardee Schools: Where it All Began
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-base text-[#6b7a8d] leading-relaxed mb-5"
              >
                Ardee Schools has been a trusted name in education for over two
                decades, operating multiple campuses and educating thousands of
                students across various stages of learning. From early childhood
                education to advanced academics, Ardee has consistently delivered
                quality education while managing complex institutional operations.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="text-base text-[#6b7a8d] leading-relaxed"
              >
                Through years of hands-on operational experience, managing diverse
                campuses, coordinating hundreds of staff members, and serving
                thousands of families, the Ardee team developed deep insights into
                what schools truly need — insights that became the foundation for
                KeyEd.
              </motion.p>

              {/* Scroll progress bar */}
              <motion.div className="mt-10 flex items-center gap-3">
                <div
                  className="h-1.5 rounded-full flex-1 overflow-hidden"
                  style={{ background: "rgba(0,0,0,0.06)" }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      width: lineHeight,
                      background: "#09090B",
                    }}
                  />
                </div>
                <span className="text-xs text-[#9ca3af] font-medium font-interTight whitespace-nowrap">
                  2003 — 2024
                </span>
              </motion.div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════
           *  RIGHT — Scrollable timeline (55%)
           * ═══════════════════════════════════════════ */}
          <div className="w-[55%] relative">
            {/* Timeline line (background track) */}
            <div
              className="absolute left-[30px] top-0 bottom-0 w-px"
              style={{ background: "rgba(0,0,0,0.08)" }}
            />

            {/* Timeline line (animated fill) */}
            <motion.div
              className="absolute left-[30px] top-0 w-px origin-top"
              style={{
                height: lineHeight,
                background: "#09090B",
              }}
            />

            {/* Milestone cards */}
            <div className="flex flex-col gap-12 pt-2 pb-8">
              {milestones.map((item, i) => (
                <TimelineCard key={item.year} item={item} index={i} />
              ))}

              {/* ── End node: KeyEd ── */}
              <div className="relative flex gap-8">
                <div
                  className="flex flex-col items-center flex-shrink-0"
                  style={{ width: 60 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-14 h-14 rounded-full flex items-center justify-center relative z-10"
                    style={{
                      background:
                        "linear-gradient(135deg, #0456c9 0%, #000000 100%)",
                      boxShadow: "0 4px 20px rgba(1,145,146,0.3)",
                    }}
                  >
                    <span className="font-interTight text-[10px] font-bold text-white tracking-wider">
                      NOW
                    </span>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center pt-3"
                >
                  <div>
                    <h4 className="font-interTight text-xl font-bold text-[#1a1a1c] mb-1">
                      KeyEd is Born
                    </h4>
                    <p className="text-sm text-[#6b7a8d]">
                      Two decades of operational insights transformed into one
                      intelligent platform.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}