"use client";

import { motion } from "framer-motion";
import Link from 'next/link'
import Image from "next/image";
import { ShieldCheck, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-[#FDFDFD]  flex px-20 py-16  items-center overflow-hidden">
      <div className="w-full">
        <div className="flex  gap-12 items-center">

          {/* ═══════════════════════════════════════════
           *  LEFT — Text content (50%)
           * ═══════════════════════════════════════════ */}
          <div className="w-5xl m-auto text-center">
            {/* Small text / badge */}
         <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white shadow-sm border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 relative">
              <ShieldCheck className="w-4 h-4" />
              Trusted by Leading Institutions
            </motion.div>

            {/* Heading */}
            <div className="topheadings relative">
            <div className="pxl-container-border pxl-container-border__style-1">
                <span className="pxl-container-border__item pxl-container-border__item-top"></span>
            <span className="pxl-container-border__item pxl-container-border__item-bottom"></span></div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-interTight text-5xl lg:text-5xl font-medium text-[#1a1a1c] leading-[1.08] mt-7 mb-6 py-4"
            >
             Built From Real Educational Experience

            </motion.h1>
            </div>
            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg text-[#6b7a8d] leading-relaxed w-3xl m-auto mb-10"
            >
             KeyEd wasn't built in a tech lab. It was born from decades of running real schools, facing real challenges, and finding real solutions.


            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex items-center justify-center gap-4"
            >
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-7 py-4 bg-primary hover:bg-secondary  text-white font-semibold rounded-lg transition-colors">
                Request Demo <ArrowRight className="w-4 h-4" />
              </Link>
              
            </motion.div>

            </motion.div>
          </div>

          {/* ═══════════════════════════════════════════
           *  RIGHT — Overlapping mockup images (50%)
           * ═══════════════════════════════════════════ 
          <div className="w-3/5 relative">

           
            <motion.div
              initial={{ opacity: 0, x: 60, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 left-0 rounded-2xl"
              style={{
                width: "88%",
                height: 420,
                zIndex: 1,
              }}
            >
          
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full relative"
              >
             
               

               
                <Image
                  src="/images/desktop.png"
                  alt="KeyEd Desktop Dashboard"
                  fill
                  className="object-contain rounded-2xl"
                  priority
                />
              
              </motion.div>
            </motion.div>

           
            <motion.div
              initial={{ opacity: 0, x: 40, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="absolute rounded-3xl overflow-hidden"
              style={{
                width: 180,
                height: 360,
                right: 50,
                bottom: 0,
                zIndex: 2,
              }}
            >
            
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="w-full h-full relative"
              >
               
                
                <Image
                  src="/images/iphonex.png"
                  alt="KeyEd Mobile App"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
               
              </motion.div>
            </motion.div>

          </div>*/}
        </div>
      </div>
    </section>
  );
}