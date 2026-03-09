"use client";

import { motion, useScroll, useTransform } from "motion/react";
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
    bg: "#e9d5ff",
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
    bg: "#fed7aa",
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
    bg: "#e9d5ff",
    link: "",
    type: "realestate",
  },
  {
    year: "2003",
    src: "/images/projects/Theardee-ssp.jpg",
    alt: "Sujan Singh Park",
    name: "The Ardee School, Sujan Singh Park",
    location: "New Delhi",
    desc: "The journey began with The Ardee School, Sujan Singh Park — our first campus, built on the belief that quality education needs strong operational foundations.",
    bg: "#7dd3fc",
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
    bg: "#fde68a",
    link: "",
    type: "realestate",
  },
  {
    year: "2009",
    src: "/images/projects/goa.png",
    alt: "Goa Campus",
    name: "The Ardee School, Goa",
    location: "Goa",
    desc: "Expanded to India's west coast, bringing the Ardee philosophy of academic excellence to a whole new community of learners.",
    bg: "#bbf7d0",
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
    bg: "#e9d5ff",
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
    bg: "#fca5a5",
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
    bg: "#c4b5fd",
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
    bg: "#a5f3fc",
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
    bg: "#e9d5ff",
    link: "",
    type: "realestate",
  },
];

export default function ArdeeLegacyleftright() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-[#f3f3f3] relative pb-20">
      {/* Watermark */}
      <div className="absolute right-0 top-6 h-full hidden lg:flex items-start justify-end pointer-events-none">
        <div
          className="sticky top-1/2 -translate-y-1/2 text-[200px] font-semibold text-black/5 select-none leading-none"
          style={{ writingMode: "vertical-rl" }}
        >
          Ardee
        </div>
      </div>

      <div className="px-6 lg:px-20">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl py-18 px-12">
          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-interTight text-4xl lg:text-4xl font-medium text-primary-dark leading-[1.08] mb-16"
            >
              Highlights over the years
            </motion.h2>

            {/* Legend 
            <div className="flex items-center justify-center gap-8">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #000000, #9c9c9c)" }}
                >
                  <Building2 className="w-4 h-4 text-white" strokeWidth={2} />
                </span>
                <span className="text-sm font-medium text-[#1a1a1c]">Real Estate</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #0456c9, #000000)" }}
                >
                  <GraduationCap className="w-4 h-4 text-white" strokeWidth={2} />
                </span>
                <span className="text-sm font-medium text-[#1a1a1c]">Schools</span>
              </div>
            </div>*/}
          </motion.div>

          {/* ── Timeline ── */}
          <div ref={containerRef} className="relative mt-16">
            {/* Center line (background) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[rgba(0,0,0,0.1)]" />

            {/* Center line (animated fill) */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 top-0 w-px origin-top"
              style={{ height: lineHeight, background: "#09090B" }}
            />

            {/* ── Rows ── */}
            <div className="flex flex-col gap-28 pb-8">
              {milestones.map((item) => {
                const isSchool = item.type === "school";

                return (
                  <div
                    key={`${item.year}-${item.name}`}
                    className="grid items-center"
                    style={{
                      gridTemplateColumns: "1fr 60px 1fr",
                    }}
                  >
                    {/* ─── LEFT COLUMN ─── */}
                    <div
                      className={
                        isSchool
                          ? "text-right pr-10"
                          : "pr-10"
                      }
                    >
                      {isSchool ? (
                        /* School: text on left */
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{
                            duration: 0.6,
                            delay: 0.15,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        >
                          <span
                            className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-white px-4 py-1.5 rounded-full mb-3"
                            style={{ background: "linear-gradient(135deg, #0456c9, #000000)" }}
                          >
                            <GraduationCap className="w-3 h-3" strokeWidth={2.5} />
                            Education
                          </span>
                          <h4 className="font-interTight text-xl font-semibold text-[#1a1a1c] mb-2">
                            {item.name}
                          </h4>
                          <p className="text-sm text-[#6b7a8d] leading-relaxed">
                            {item.desc}
                          </p>
                        </motion.div>
                      ) : (
                        /* Real estate: image on left */
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{
                            duration: 0.6,
                            delay: 0.15,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="relative w-full overflow-hidden rounded-xl"
                          style={{ height: 300, background: item.bg }}
                        >
                          {item.link ? (
                            <Link href={item.link} target="_blank">
                              <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover"
                              />
                            </Link>
                          ) : (
                            <Image
                              src={item.src}
                              alt={item.alt}
                              fill
                              className="object-cover"
                            />
                          )}
                        </motion.div>
                      )}
                    </div>

                    {/* ─── CENTER NODE ─── */}
                    <div className="flex justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{
                          duration: 0.4,
                          delay: 0.05,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="w-14 h-14 rounded-full flex items-center justify-center z-10 relative"
                        style={{
                          background: isSchool
                            ? "linear-gradient(135deg, #0456c9, #000000)"
                            : "linear-gradient(135deg, #000000, #9c9c9c)",
                          boxShadow: isSchool
                            ? "0 4px 16px rgba(4,86,201,0.3)"
                            : "0 4px 16px rgba(0,0,0,0.2)",
                        }}
                      >
                        <span className="font-interTight text-xs font-medium text-white">
                          {item.year}
                        </span>
                      </motion.div>
                    </div>

                    {/* ─── RIGHT COLUMN ─── */}
                    <div
                      className={
                        isSchool
                          ? "pl-10"
                          : "pl-10"
                      }
                    >
                      {isSchool ? (
                        /* School: image on right */
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{
                            duration: 0.6,
                            delay: 0.15,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="relative w-full overflow-hidden rounded-xl"
                          style={{ height: 300, background: item.bg }}
                        >
                          {item.link ? (
                            <Link href={item.link} target="_blank">
                              <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover"
                              />
                            </Link>
                          ) : (
                            <Image
                              src={item.src}
                              alt={item.alt}
                              fill
                              className="object-cover"
                            />
                          )}
                        </motion.div>
                      ) : (
                        /* Real estate: text on right */
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{
                            duration: 0.6,
                            delay: 0.15,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        >
                          <span
                            className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-white px-4 py-1.5 rounded-full mb-3"
                            style={{ background: "linear-gradient(135deg, #000000, #9c9c9c)" }}
                          >
                            <Building2 className="w-3 h-3" strokeWidth={2.5} />
                            Real Estate
                          </span>
                          <h4 className="font-interTight text-xl font-semibold text-[#1a1a1c] mb-2">
                            {item.name}
                          </h4>
                          <p className="text-sm text-[#6b7a8d] leading-relaxed">
                            {item.desc}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* ── End node: KeyEd ── */}
              <div
                className="grid items-center"
                style={{ gridTemplateColumns: "1fr 60px 1fr" }}
              >
                {/* Left: text */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-right pr-10"
                >
                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-white px-4 py-1.5 rounded-full mb-3"
                    style={{ background: "linear-gradient(135deg, #019192, #017172)" }}
                  >
                    <Rocket className="w-3 h-3" strokeWidth={2.5} />
                    EdTech
                  </span>
                  <h4 className="font-interTight text-xl font-semibold text-[#1a1a1c] mb-2">
                    KeyEd is Born
                  </h4>
                  <p className="text-sm text-[#6b7a8d] leading-relaxed">
                    Two decades of building schools and infrastructure converge
                    into one intelligent platform.
                  </p>
                </motion.div>

                {/* Center node */}
                <div className="flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center z-10 relative"
                    style={{
                      background: "linear-gradient(135deg, #019192, #017172)",
                      boxShadow: "0 4px 24px rgba(1,145,146,0.35)",
                    }}
                  >
                    <span className="font-interTight text-[10px] font-medium text-white tracking-wider">
                      NOW
                    </span>
                  </motion.div>
                </div>

                {/* Right: logo */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="pl-10 flex items-center"
                >
                  <img src="/key.svg" alt="KeyEd" width="140" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}