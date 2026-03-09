'use client'

import { motion } from 'motion/react'
import { School, Wrench, BadgeCheck, FileText, MessageCircle, BarChart2, Clock } from 'lucide-react'

const cards = [
  {
    icon: School,
    title: 'Built from Experience',
    subtitle: 'Running real institutions',
  },
  {
    icon: Wrench,
    title: 'Designed Around Pain Points',
    subtitle: 'Real school challenges',
  },
  {
    icon: BadgeCheck,
    title: 'Tested in Live Campuses',
    subtitle: 'Before product launch',
  },
]

const comingSoon = [
  { icon: FileText, label: 'Case Studies' },
  { icon: MessageCircle, label: 'School Testimonials' },
  { icon: BarChart2, label: 'Performance Metrics' },
]

export default function BuiltByEducators() {
  return (
    <section className="py-12 lg:py-20 mt-10" style={{ background: '#f5f5f533' }}>
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-medium text-center mb-4"
        >
          <span className="text-black">Built by Educators. </span>
          <span className="text-primary">Proven in Real Schools.</span>
        </motion.h2>

        <p className='text-sm text-center mb-12 text-primary-light '>Designed from inside institutions — not outside them. With over 20 years of leadership experience building The Ardee Group of Schools, KeyEd was created to replace reactive reporting with continuous performance visibility.</p>

        {/* Three cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 flex flex-col items-center text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-5">
                  <Icon className="w-12 h-12 text-primary" strokeWidth={1.6} />
                </div>
                <h3 className="text-base font-medium text-[#0A2540] mb-2">{card.title}</h3>
                <p className="text-sm text-gray-400">{card.subtitle}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Coming Soon card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="bg-white rounded-2xl px-10 py-10 border border-gray-100 shadow-sm text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Clock className="w-5 h-5 text-secondary" />
            <h3 className="text-lg font-medium text-[#0A2540]">Coming Soon</h3>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {comingSoon.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2 text-gray-500 text-sm font-medium"
                >
                  <Icon className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.8} />
                  {item.label}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  )
}