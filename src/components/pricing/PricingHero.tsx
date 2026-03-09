"use client";

import { motion } from "motion/react";
import { Tag, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PricingHero() {
  return (
    <section className="relative flex items-center overflow-hidden">

      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #01174D 0%, #011035 25%, #01174D 50%, #011035 75%, #01174D 100%)",
        }}
      />

      {/* ── Floating orbs ── */}

      {/* AI icon — top-left (hidden on mobile, repositioned on tablet) */}
      <motion.div
        className="absolute top-[15%] left-[8%] w-80 h-80 rounded-full hidden sm:block"
      >
        <div
          className="absolute inset-0 rounded-full opacity-15 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgb(201, 201, 210) 0%, #000000 200%)",
          }}
        />
        <motion.img
          src="/images/icons/ai.png"
          width={80}
          height={80}
          className="relative z-10 w-12 md:w-16 lg:w-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Education icon — bottom-left (hidden on mobile) */}
      <motion.div
        className="absolute top-[80%] left-[18%] w-80 h-80 rounded-full hidden md:block"
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="absolute inset-0 rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, rgb(140, 140, 176) 0%, #000000 200%)" }}
        />
        <img
          src="/images/icons/education.png"
          width={50}
          height={50}
          className="relative z-10 w-8 md:w-10 lg:w-[50px]"
        />
      </motion.div>

      {/* Library icon — top-right (hidden on mobile) */}
      <motion.div
        className="absolute top-[15%] right-[5%] w-80 h-80 rounded-full hidden md:block"
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="absolute inset-0 rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, rgb(122, 124, 253) 0%, transparent 200%)" }}
        />
        <img
          src="/images/icons/digital-library.png"
          width={50}
          height={50}
          className="relative z-10 w-8 md:w-10 lg:w-[50px]"
        />
      </motion.div>

      {/* ── Main content ── */}
      <div className="relative z-10 px-5 sm:px-8 md:px-12 lg:px-20 py-14 sm:py-16 md:py-18 lg:py-20 w-full">
        <div className="grid grid-cols-1 gap-12 items-center">

          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-5 sm:mb-6 shadow-sm"
            >
              <Tag className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={2.5} />
              Flexible & Transparent
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-[44px] lg:text-5xl font-medium leading-[1.1] mb-5 sm:mb-6 font-interTight"
            >
              <span className="text-white font-interTight">Pricing Designed Around</span>
              <br />
              <span className="text-white font-interTight">Your Institution</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed mb-3 sm:mb-4 max-w-xl mx-auto"
            >
              Every institution is different. Our pricing adapts to your size, structure, and needs.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[13px] sm:text-sm md:text-base text-white/70 leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto"
            >
              From small schools to multi-campus institutions, KeyEd scales with you — no hidden fees, no surprises, just transparent value.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 blackbg hover:bg-[#2d2d2f] text-white font-bold rounded-xl transition-all duration-200 hover:-translate-y-1 no-underline text-sm sm:text-base"
              >
                Get Custom Quote
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
              </Link>
            </motion.div>
          </div>

        </div>

        {/* Bus animation — hidden on mobile, visible from md */}
        <motion.div className="absolute top-[50%] right-[2%] w-80 h-80 rounded-full overflow-hidden items-center hidden lg:flex">
          <div
            className="absolute inset-0 rounded-full opacity-15 blur-3xl"
            style={{
              background: "radial-gradient(circle, rgb(159, 159, 159) 0%, transparent 200%)",
            }}
          />
          <motion.img
            src="/images/icons/bus-blue.png"
            width={80}
            height={80}
            className="relative z-10 w-14 lg:w-20"
            animate={{ x: ["280%", "-280%"] }}
            transition={{
              x: { duration: 6, repeat: Infinity, ease: "linear" },
              y: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}