"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Info, ArrowRight, Play } from 'lucide-react'

const schoolimages = [
  {
    src: "/images/nfc.jpg",
    alt: "NFC School",
    width: 300,
    height: 200,
    top: 0,
    left: 0,
    zIndex: 2,
    delay: 0,
    float: { y: [0, -8, 0], duration: 4 },
    rotate: 0,
    bg: "#7dd3fc",
  },
  {
    src: "/images/goa.png",
    alt: "Goa Campus",
    width: 300,
    height: 300,
    top: 20,
    left: 320,
    zIndex: 3,
    delay: 0.15,
    float: { y: [0, -6, 0], duration: 3.5 },
    rotate: 0,
    bg: "#fde68a",
  },
  {
    src: "/images/munirka.jpg",
    alt: "Munirka Campus",
    width: 300,
    height: 340,
    top: 340,
    left: 320,
    zIndex: 4,
    delay: 0.3,
    float: { y: [0, -10, 0], duration: 4.5 },
    rotate: 0,
    bg: "#c4b5fd",
  },
  {
    src: "/images/noida.jpg",
    alt: "Noida Campus",
    width: 300,
    height: 400,
    top: 230,
    left: 0,
    zIndex: 1,
    delay: 0.45,
    float: { y: [0, -7, 0], duration: 3.8 },
    rotate: 0,
    bg: "#fca5a5",
  },
];

export default function ArdeeLegacy() {
  return (
    <section className="bg-white py-20 px-20 overflow-hidden">
      <div className=" mx-auto">
        <div className="flex items-center gap-16">

          {/* ═══════════════════════════════════════════
           *  LEFT — 4 overlapping images (50%)
           * ═══════════════════════════════════════════ */}
          <div className="w-1/2">
            <div className="relative" style={{ height: 560 }}>
              {schoolimages.map((img, i) => (
                <motion.div
                  key={img.alt}
                  initial={{ opacity: 0, scale: 0.85, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.7,
                    delay: img.delay,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute rounded-xl overflow-hidden"
                  style={{
                    width: img.width,
                    height: img.height,
                    top: img.top,
                    left: img.left,
                    zIndex: img.zIndex,
                    rotate: img.rotate,
                  }}
                >
                  {/* Floating animation */}
                  <motion.div
                    animate={{ y: img.float.y }}
                    transition={{
                      duration: img.float.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: img.delay,
                    }}
                    className="w-full h-full relative"
                  >
                    {/* Fallback color if image not found */}
                    <div
                      className="absolute inset-0"
                      style={{ background: img.bg }}
                    />
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                    <p className="absolute top-0 bg-black  text-white p-2 text-xs">{img.alt}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ═══════════════════════════════════════════
           *  RIGHT — Text content (50%)
           * ═══════════════════════════════════════════ */}
          <div className="w-1/2">
            {/*
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white shadow-sm border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Info className="w-4 h-4" />
              About Us
            </motion.div>
                    */}
          

            {/* Main heading */}
            <div className="flex gap-2 justify-between mb-10">
                <div>
            <motion.h2
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-interTight text-4xl lg:text-5xl font-medium text-[#1a1a1c] leading-tight mb-2"
            >
              The Ardee Legacy
            </motion.h2>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-md text-primary/40 font-medium"
            >
              Over 20 years of educational excellence and innovation
            </motion.p>
                </div>

              <div className="bg-primary-dark rounded-lg w-20 h-20 relative shadow-sm border border-primary/30">
               <Image
                                 src="/images/asign.png"
                                 alt="KeyEd Mobile App"
                                 fill
                                 className="object-cover"
                               />
                              
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
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-interTight text-2xl font-bold text-[#1a1a1c] mb-5"
            >
              Ardee Schools: Where it All Began
            </motion.h3>

            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-[#6b7a8d] leading-relaxed mb-5"
            >
              Ardee Schools has been a trusted name in education for over two
              decades, operating multiple campuses and educating thousands of
              students across various stages of learning. From early childhood
              education to advanced academics, Ardee has consistently delivered
              quality education while managing complex institutional operations.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-[#6b7a8d] leading-relaxed"
            >
              Through years of hands-on operational experience, managing diverse
              campuses, coordinating hundreds of staff members, and serving
              thousands of families, the Ardee team developed deep insights into
              what schools truly need — insights that became the foundation for
              KeyEd.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}