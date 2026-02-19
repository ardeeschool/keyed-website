"use client";

import { motion } from "framer-motion";
import { Tag, ArrowRight, GraduationCap, BadgeDollarSign, TrendingUp, Settings2, Users2, BrainCircuit } from "lucide-react";
import Link from "next/link";

export default function PricingHero() {
  return (
    <section className="relative flex items-center overflow-hidden">
      
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #FAFAFA 0%, #F5F5F5 25%, #ECECEC 50%, #F5F5F5 75%, #FAFAFA 100%)",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-[15%] left-[8%] w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(26,26,28,0.2) 0%, transparent 70%)" }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-[10%] right-[5%] w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(107,122,141,0.3) 0%, transparent 70%)" }}
        animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      <div className="relative z-10 px-20 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT — Text content ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm"
            >
              <Tag className="w-3.5 h-3.5" strokeWidth={2.5} />
              Flexible & Transparent
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-5xl font-medium leading-[1.1] mb-6 font-interTight"
            >
              <span className="text-[#1a1a1c] font-interTight">Pricing Designed Around</span>
              <br />
              <span className="text-[#4a4a4c] font-interTight">Your Institution</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#6b7a8d] leading-relaxed mb-4 max-w-lg"
            >
              Every institution is different. Our pricing adapts to your size, structure, and needs.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base text-[#6b7a8d] leading-relaxed mb-10 max-w-lg"
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
                href="/demo"
                className="inline-flex items-center gap-2.5 px-8 py-4 blackbg hover:bg-[#2d2d2f] text-white font-bold rounded-xl transition-all duration-200 hover:-translate-y-1 no-underline text-base"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
              </Link>
            </motion.div>

            {/* Trust indicators */}
           
          </div>

          {/* ── RIGHT — Phone mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:flex items-center justify-center"
            style={{ perspective: 1200 }}
          >
            {/* Floating elements around phone */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] left-[5%] bg-white rounded-xl shadow-lg p-3 border border-gray-200 z-10"
            >
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">KeyEd Score™</p>
              <p className="text-2xl font-black text-[#1a1a1c] leading-none">94</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[15%] right-[8%] bg-white rounded-xl shadow-lg p-3 border border-gray-200 z-10"
            >
              <p className="text-[9px] font-semibold text-gray-400 mb-1">Fee Collection</p>
              <p className="text-sm font-bold text-[#1a1a1c]">₹12.8L</p>
              <p className="text-[8px] text-gray-500">↑ 12% vs last month</p>
            </motion.div>

            {/* Phone device */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
              style={{
                width: 320,
                height: 650,
                transformStyle: "preserve-3d",
                transform: "rotateY(-8deg) rotateX(2deg)",
              }}
            >
              {/* Phone frame */}
              <div
                className="absolute inset-0 rounded-[48px] overflow-hidden shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #1a1a1c 0%, #2d2d2f 100%)",
                  border: "8px solid #1a1a1c",
                }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#0a0a0a] rounded-b-3xl z-20" />

                {/* Screen content */}
                <div className="relative w-full h-full bg-white overflow-hidden">
                  
                  {/* Status bar */}
                  <div className="absolute top-0 left-0 right-0 h-12 bg-[#1a1a1c] flex items-center justify-between px-8 pt-2 z-10">
                    <span className="text-white text-xs font-semibold">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 border border-white rounded-sm opacity-60" />
                      <div className="w-1 h-3 bg-white rounded-sm opacity-60" />
                    </div>
                  </div>

                  {/* App content — Dashboard */}
                  <div className="absolute inset-0 pt-12 px-5 pb-8 bg-[#FAFAFA]">
                    
                    {/* Header */}
                    <div className="mb-5 mt-4">
                      <p className="text-xs text-gray-400 mb-1">Welcome back,</p>
                      <p className="text-xl font-bold text-[#1a1a1c]">Principal Sharma</p>
                    </div>

                    {/* Score card */}
                  <div className="relative rounded-2xl p-5 mb-4 shadow-2xl overflow-hidden
bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617] border border-white/10">
  
  <div className="absolute -top-20 -right-20 w-60 h-60 bg-black-600/20 blur-3xl rounded-full"></div>
  <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-blue-500/20 blur-3xl rounded-full"></div>
                      <p className="text-white/60 text-xs font-semibold mb-1 uppercase tracking-wide">Institutional Health</p>
                      <div className="flex items-end gap-2 mb-3">
                        <span className="text-white text-5xl font-black leading-none">94</span>
                        <span className="text-gray-300 text-sm font-bold mb-1">↑ +2.4%</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full bg-white rounded-full" style={{ width: '94%' }} />
                        </div>
                        <span className="text-white/70 text-[10px] font-semibold">Excellent</span>
                      </div>
                    </div>

                    {/* Quick stats */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-white rounded-xl p-3 border border-gray-200">
                        <p className="text-[10px] text-gray-400 mb-1">Attendance</p>
                        <p className="text-xl font-bold text-[#1a1a1c]">94%</p>
                        <p className="text-[9px] text-gray-500 font-semibold">↑ 2% today</p>
                      </div>
                      <div className="bg-white rounded-xl p-3 border border-gray-200">
                        <p className="text-[10px] text-gray-400 mb-1">Fee Collection</p>
                        <p className="text-xl font-bold text-[#1a1a1c]">92%</p>
                        <p className="text-[9px] text-gray-500 font-semibold">₹1.28L today</p>
                      </div>
                    </div>

                    {/* Module tiles */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { Icon: GraduationCap, label: 'Academics' },
                        { Icon: BadgeDollarSign, label: 'Finance' },
                        { Icon: TrendingUp, label: 'Growth' },
                        { Icon: Settings2, label: 'Operations' },
                        { Icon: Users2, label: 'People' },
                        { Icon: BrainCircuit, label: 'Analytics' },
                      ].map((m, i) => (
                        <div key={i} className="bg-white rounded-xl p-2.5 border border-gray-200 flex flex-col items-center justify-center">
                          <m.Icon className="w-6 h-6 text-[#1a1a1c] mb-1" strokeWidth={1.5} />
                          <p className="text-[9px] font-semibold text-gray-600">{m.label}</p>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Side buttons */}
                <div className="absolute right-0 top-[30%] w-1 h-12 bg-[#0a0a0a] rounded-l-sm" />
                <div className="absolute right-0 top-[42%] w-1 h-16 bg-[#0a0a0a] rounded-l-sm" />
              </div>

              {/* Phone glow */}
              <div className="absolute inset-0 rounded-[48px] shadow-2xl pointer-events-none" style={{ 
                boxShadow: '0 25px 60px rgba(0,0,0,0.3), 0 0 80px rgba(0,0,0,0.1)' 
              }} />
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}