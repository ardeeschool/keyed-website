"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { View } from 'lucide-react'

export default function VisionForwards() {
  return (
    <section className="overflow-hidden">
      {/* ── Black header area ── */}
      <div
        className="md:pt-24 md:pb-52 md:px-6 px-4 pb-20 pt-12"
        style={{ background: "#09090B" }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-interTight text-3xl lg:text-5xl font-medium text-white leading-tight mb-4"
          >
            Our Vision Forward
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base text-gray-400"
          >
            Expanding from operations to education technology leadership
          </motion.p>
        </div>
      </div>

      {/* ── White card overlapping the black ── */}
      <div className="md:px-6 md:-mt-36 md:pb-24 pb-12 -mt-12 px-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:max-w-5xl mx-auto cardstyle rounded-3xl overflow-hidden"
        >
          <div className="flex">
            {/* Left — Text (55%) */}
            <div className="w-full md:w-[55%] flex-shrink-0 p-6 py-12 md:p-12 lg:p-14">
              {/* Tag */}
               <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white shadow-sm border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <View className="w-4 h-4" />
              Vision
            </motion.div>

              {/* Heading */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="font-interTight text-3xl lg:text-4xl font-medium text-[#1a1a1c] leading-tight mb-2"
              >
                From Institute Operators To
                <br />
                EdTech{" "}
                <span className="relative inline-block">
                  <span className="italic">Innovators</span>
                  {/* Underline accent */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="absolute bottom-0 left-0 w-full h-[3px] rounded-full bg-secondary origin-left"
                  />
                </span>
              </motion.h3>

              {/* Paragraph 1 */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-[15px] text-[#6b7a8d] leading-relaxed mt-7 mb-5"
              >
                Having mastered the art of running successful educational
                institutions, we&apos;re now leveraging that expertise to
                transform how schools everywhere operate. KeyEd represents our
                expansion into education technology — bringing institutional
                intelligence to schools that need it most.
              </motion.p>

              {/* Paragraph 2 */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-[15px] text-[#6b7a8d] leading-relaxed"
              >
                Our vision is to empower educational institutions worldwide with
                tools built by people who understand education from the inside
                out — not just as software, but as a mission.
              </motion.p>
            </div>

            {/* Right — Image (45%) */}
            <div className="w-full w-[45%] flex-shrink-0 relative p-8 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full rounded-2xl overflow-hidden"
                style={{
                  height: 340,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                }}
              >
                <Image
                  src="https://brighthub.casethemes.net/wp-content/uploads/2025/06/story-3.webp"
                  alt="EdTech Innovators"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}