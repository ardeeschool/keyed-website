'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CalendarCheck, Users, ClipboardList } from 'lucide-react'


export default function MiddleCta() {
  return (
    // sticky + z-index so the NEXT section slides over this one
   
      <section
        className="relative  overflow-hidden py-12 pb-42 flex items-center justify-center max-w-7xl mx-auto mt-[-140px]  z-1 rounded-2xl bg-primary-dark"
      >
        {/* Subtle dot texture */}
        <div className="background-overlayscore"></div>
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Soft glow blobs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(244,130,31,0.08) 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)' }} />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-3xl font-medium text-white leading-tight mb-5 font-interTight"
          >
           What financial statements are to companies, the KeyEd Score™ is to schools.
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-blue-100/60 text-md leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            One number that tells the complete story of institutional health.


          </motion.p>

          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-3 bg-secondary text-white text-[15px] font-medium rounded-xl hover:bg-secondary/65 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 no-underline shadow-lg shadow-orange-900/30"
            >
              Book Leadership Demo
              <span className="text-xl">→</span>
            </Link>
          </motion.div>

          {/* Fine print */}
        

        </div>
      </section>

  )
}