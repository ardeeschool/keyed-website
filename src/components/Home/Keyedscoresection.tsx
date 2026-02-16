'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const metrics = [
  { label: 'Academic Performance',         value: 88, description: 'Results, attendance, assessments and learning outcomes across all grades.' },
  { label: 'Operational Efficiency',       value: 92, description: 'Campus workflows, transport, facilities and day-to-day operations running smoothly.' },
  { label: 'Financial Stability',          value: 76, description: 'Fee collection rates, budget adherence and financial health of the institution.' },
  { label: 'Enrollment Momentum',          value: 83, description: 'Admissions pipeline, conversion rates and student retention trends.' },
  { label: 'Teacher Engagement',           value: 79, description: 'Staff attendance, participation in training, collaboration and satisfaction levels.' },
  { label: 'Parent & Student Satisfaction',value: 85, description: 'Feedback scores, communication responsiveness and overall experience ratings.' },
  { label: 'Infrastructure Readiness',     value: 71, description: 'Labs, classrooms, connectivity and physical environment standards.' },
  { label: 'Infrastructure Readiness',     value: 71, description: 'Labs, classrooms, connectivity and physical environment standards.' },

    { label: 'Infrastructure Readiness',     value: 71, description: 'Labs, classrooms, connectivity and physical environment standards.' },

      { label: 'Infrastructure Readiness',     value: 71, description: 'Labs, classrooms, connectivity and physical environment standards.' },

]

// ── Circular Progress SVG ─────────────────────────────────
function CircularProgress({ value }: { value: number }) {
  const radius = 110
  const stroke = 13
  const normalised = radius - stroke / 2
  const circumference = Math.PI * normalised
  const progress = (value / 100) * circumference
  const cx = 150

  return (
    <div className="relative flex flex-col items-center">
      <svg width="300" height="180" viewBox="0 0 300 180" className="overflow-visible">
        {/* Track */}
        <path
          d={`M ${cx - normalised} ${cx + 40} A ${normalised} ${normalised} 0 0 1 ${cx + normalised} ${cx + 40}`}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth={stroke}
          strokeLinecap="round"
        />
        {/* Filled */}
        <motion.path
          d={`M ${cx - normalised} ${cx + 40} A ${normalised} ${normalised} 0 0 1 ${cx + normalised} ${cx + 40}`}
          fill="none"
          stroke="url(#scoreGrad)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: circumference - progress }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        />
        <defs>
          <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>
      </svg>

      {/* Score number */}
      <div className="absolute bottom-1 text-center">
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-5xl font-bold text-[#F97316] leading-none"
        >
          {value}
        </motion.p>
        <p className="text-sm text-gray-400 mt-2 font-medium">KeyEd Score™</p>
      </div>
    </div>
  )
}


// ── Metric Card — 2-per-row, screenshot style ─────────────
function MetricCard({ metric, index }: { metric: (typeof metrics)[0]; index: number }) {
  const status = metric.value >= 85 ? 'Strong' : metric.value >= 75 ? 'Good' : 'Needs work'
  const statusDot = metric.value >= 85 ? 'bg-green-400' : metric.value >= 75 ? 'bg-yellow-400' : 'bg-red-400'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.75, delay: index * 0.05 }}
      className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Label + score */} 
      <div className="flex items-center justify-between mb-3">
        <p className="text-lg font-bold text-gray-800 leading-tight">{metric.label}</p>
        <span className="text-lg font-bold text-[#F97316] tabular-nums">{metric.value}</span>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-gray-100 rounded-full overflow-hidden mb-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${metric.value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.05 + 0.2 }}
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #FBBF24, #F97316)' }}
        />
      </div>

      {/* Divider with centre dot — from screenshot */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex-1 h-px bg-gray-100" />
        <div className="w-2 h-2 rounded-full border-2 border-[#F97316]" />
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      {/* Description + status pill */}
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm text-gray-400 leading-relaxed">{metric.description}</p>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-50 border border-gray-100 rounded-full text-[10px] font-semibold text-gray-500 whitespace-nowrap flex-shrink-0">
          <span className={`w-1.5 h-1.5 rounded-full ${statusDot}`} />
          {status}
        </span>
      </div>
    </motion.div>
  )
}

// ── Main Component ────────────────────────────────────────
export default function KeyEdScoreSection() {
  return (
    <section className="bg-white p-20 pt-50">
      <div className="px-4">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* ── LEFT — sticky ── */}
          <div
            className="lg:w-2/5 flex-shrink-0"
            style={{ alignSelf: 'flex-start', position: 'sticky', top: '110px' }}
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#F973161A] border border-secondary/20 text-secondary px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Your Unique Selling Proposition
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold text-[#0A2540] leading-tight mb-4"
            >
              Meet India's First{' '}
              <span className="text-secondary">Campus Health Score</span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 text-md leading-relaxed mb-4"
            >
              KeyEd Score gives leadership a real-time health indicator of their
              institution — across academics, operations, finance, people, and growth.
            </motion.p>

            {/* Circular progress */}
           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center mb-8"
            >
              <CircularProgress value={94} />
            </motion.div>

            {/* AI note */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-start gap-3 bg-[#0A2540] rounded-2xl px-5 py-4 mt-20"
            >
              <Sparkles className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
              <p className="text-xs text-gray-300 leading-relaxed">
                <span className="text-white font-semibold">AI continuously predicts</span>{' '}
                risks and improvement areas — so leadership can act before problems escalate.
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT — scrollable ── */}
          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-8 content-start">
            {metrics.map((metric, index) => (
              <MetricCard key={metric.label} metric={metric} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}