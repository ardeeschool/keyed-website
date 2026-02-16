'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CalendarCheck, Users, ClipboardList } from 'lucide-react'

const perks = [
  { icon: CalendarCheck, label: '30-Minute Consultation' },
  { icon: Users,         label: 'Personalized Demo'       },
  { icon: ClipboardList, label: 'Custom Implementation Plan' },
]

export default function CTASection() {
  return (
    // sticky + z-index so the NEXT section slides over this one
    <div>
      <section
        className="relative w-full overflow-hidden py-28 flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #0d1b35 0%, #112444 40%, #1a3260 70%, #0d2040 100%)',
          minHeight: '480px',
        }}
      >
        {/* Subtle dot texture */}
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
            className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
          >
            See How KeyEd Fits{' '}
            <span className="text-[#F97316]">Your<br />Institution</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-blue-100/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Every institution is different. Our leadership demos are tailored to your structure,
            scale and goals.
          </motion.p>

          {/* Perks row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-8 mb-10"
          >
            {perks.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="w-5 h-5 text-[#F97316] flex-shrink-0" strokeWidth={1.8} />
                <span className="text-white font-semibold text-[15px]">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#F97316] text-white text-[17px] font-bold rounded-xl hover:bg-[#ea6c0a] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 no-underline shadow-lg shadow-orange-900/30"
            >
              Book Leadership Demo
              <span className="text-xl">→</span>
            </Link>
          </motion.div>

          {/* Fine print */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-sm text-blue-200/35"
          >
            No credit card required. No sales pressure. Just a conversation about your institution.
          </motion.p>

        </div>
      </section>
    </div>
  )
}