"use client";

import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";

const bottomCards = [
  {
    title: "Real Problems",
    desc: "Identified through years of school operations",
  },
  {
    title: "Real Solutions",
    desc: "Built by educators who've lived these challenges",
  },
  {
    title: "Real Results",
    desc: "Proven in live campuses before launch",
  },
];

export default function WhyKeyEdCreated() {
  return (
    <section className="bg-[linear-gradient(180deg,#FFFBFB00_0%,#F5F3F3_100%)] py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* ── Top: Image + Text (50/50) ── */}
        <div className="flex gap-14 items-start mb-20">

          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-1/2 flex-shrink-0"
          >
            <div
              className="rounded-2xl overflow-hidden relative"
              style={{
                height: 440,
                background: "linear-gradient(135deg, #d4d4d8 0%, #a1a1aa 100%)",
              }}
            >
              {/* Replace with your image */}
              {/* <Image
                src="/images/why-keyed.png"
                alt="Why KeyEd"
                fill
                className="object-cover"
              /> */}
            </div>
          </motion.div>

          {/* Right — Text */}
          <div className="w-1/2 flex-shrink-0">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-interTight text-4xl font-medium text-[#1a1a1c] leading-tight mb-5"
            >
              Why KeyEd Was Created
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-interTight text-base font-semibold text-[#1a1a1c] mb-5"
            >
              Born from necessity, built with purpose
            </motion.p>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[15px] text-[#4a5568] leading-relaxed mb-5 italic"
            >
              &ldquo;After years of operating real schools and facing the daily
              complexities of institutional management, we realized that{" "}
              <span
                className="not-italic font-semibold px-1 py-0.5 rounded"
                style={{ background: "rgba(0,0,0,0.08)", color: "#1a1a1c" }}
              >
                schools
              </span>{" "}
              weren&apos;t struggling because of a lack of effort — they were
              struggling because of fragmented systems.&rdquo;
            </motion.p>

            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-[15px] text-[#4a5568] leading-relaxed mb-5"
            >
              KeyEd was built after years of operating real schools and facing
              operational complexity firsthand. We experienced the frustration of
              disconnected admissions systems, manual academic tracking, siloed
              financial data, and leadership decisions made with incomplete
              information.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-[15px] text-[#4a5568] leading-relaxed"
            >
              The platform solves real institutional pain points — not theoretical
              problems imagined in a boardroom, but daily challenges encountered
              while running campuses, managing teams, serving parents, and
              educating students.
            </motion.p>
          </div>
        </div>

        {/* ── Bottom: 3 Cards ── */}
        <div className="grid grid-cols-3 gap-6">
          {bottomCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="cardstyle rounded-2xl px-7 py-6 flex items-center gap-4"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #1a1a1c 0%, #3f3f46 100%)",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
                }}
              >
                <CircleCheckBig className="w-5 h-5 text-white" strokeWidth={2} />
              </div>

              {/* Text */}
              <div>
                <p className="font-interTight text-base font-bold text-[#1a1a1c] mb-1">
                  {card.title}
                </p>
                <p className="text-sm text-[#6b7a8d] leading-snug">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}