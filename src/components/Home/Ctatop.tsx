'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CalendarCheck, Users, ClipboardList } from 'lucide-react'

const perks = [
  { icon: CalendarCheck, label: '30-Minute Consultation' },
  { icon: Users,         label: 'Personalized Demo'       },
  { icon: ClipboardList, label: 'Custom Implementation Plan' },
]

const iconStyle = {
  backgroundColor: "#272727",
  boxShadow:
    "0px -3px 0px 0px #080808 inset, 0px 1px 0px 0px rgba(255,255,255,0.302) inset, 0px 2.77px 2.21px 0px rgba(0,0,0,0.122), 0px 3px 3px 0px rgba(0,0,0,0.141), 0px 12.52px 10.02px 0px rgba(0,0,0,0.133), 0px 22.34px 17.87px 0px rgba(0,0,0,0.141), 0px 41.78px 33.42px 0px rgba(0,0,0,0.149), 0px 100px 80px 0px rgba(0,0,0,0.149)",
};
const blackButtonStyle = {
  background:
    "radial-gradient(62.56% 62.56% at 28.14% -10.42%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #3f3f46, #3f3f46)",
  boxShadow:
    "0px -3px 0px 0px #27272a inset, 0px 1px 0px 0px rgba(255, 255, 255, 0.2) inset, 0px 2.77px 2.21px 0px rgba(0, 0, 0, 0.12), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.13)",
};
export default function CTASectiontop() {
  return (
    // sticky + z-index so the NEXT section slides over this one
   
      <section
        className="relative w-full overflow-hidden py-12 flex items-center justify-center max-w-5xl mx-auto mb-[-100px] z-1 lg:rounded-4xl"
        style={{
          background: 'linear-gradient(135deg, #6f6f6f 0%, #000000 40%, #3c3c3c 70%, #000000 100%)',
         
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
            className="text-2xl lg:text-3xl font-medium text-white leading-tight mb-5 font-interTight"
          >
            See How KeyEd Fits Your Institution
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-blue-100/60 text-md leading-relaxed md:mb-10 mb-6 max-w-2xl mx-auto"
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
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-10"
          >
            {perks.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 w-full md:w-auto">
                 <div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={iconStyle}
      >
        <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
      </div>

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
              href="/contact-us"
              className="inline-flex items-center gap-3 px-10 py-4  text-black text-[15px] font-bold rounded-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 no-underline shadow-lg shadow-orange-900/30  bg-[linear-gradient(0deg,#9d9d9d,#ffffff),radial-gradient(62.56%_62.56%_at_28.14%_-10.42%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]
  shadow-[inset_0px_-3px_0px_#080808,inset_0px_1px_0px_rgba(255,255,255,0.302),0px_2.77px_2.21px_rgba(0,0,0,0.121),0px_6.65px_5.32px_rgba(0,0,0,0.129),0px_12.52px_10.02px_rgba(0,0,0,0.133),0px_22.34px_17.87px_rgba(0,0,0,0.141),0px_41.78px_33.42px_rgba(0,0,0,0.149),0px_100px_80px_rgba(0,0,0,0.149),0px_3px_3px_rgba(0,0,0,0.141),0px_2.77px_2.21px_rgba(0,0,0,0.121)]"
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
            className="mt-3 text-sm text-white/60"
          >
            No credit card required. No sales pressure. Just a conversation about your institution.
          </motion.p>

        </div>
      </section>

  )
}