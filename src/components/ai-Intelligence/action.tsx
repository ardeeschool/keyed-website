"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ctasection() {
  return (
    <section className="w-full bg-white px-6 py-14">
      <motion.div
        className="max-w-[820px] mx-auto rounded-3xl px-10 py-16 flex flex-col items-center text-center gap-7"
        style={{ background: "#faf8f5" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Title */}
        <motion.h2
          className="m-0 text-[clamp(28px,4vw,42px)] font-medium text-[#1a2b4a] tracking-tight leading-tight"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          See AI & Intelligence{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #f5a623 0%, #e07b39 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            in Action
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="m-0 max-w-[500px] text-[16px] text-[#6b7a8d] leading-relaxed font-normal"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Experience how AI-powered intelligence can transform your institution's decision-making process.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl text-white text-[16px] font-medium no-underline"
            style={{
              background: "linear-gradient(135deg, #f5a623 0%, #e07b39 100%)",
              boxShadow: "0 6px 20px rgba(240,120,50,0.35)",
            }}
          >
             Book Leadership Demo
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="text-lg"
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}