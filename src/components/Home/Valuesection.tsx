'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const values = [
  'Make faster leadership decisions',
  'Track campus performance in real time',
  'Improve operational efficiency',
  'Grow admissions predictably',
  'Improve student & teacher outcomes',
  'Create financial visibility',
  'Standardize multi-campus operations',
]

const stats = [
  { prefix: 'REAL', highlight: 'TIME', desc: 'Live dashboards update every second' },
  { prefix: 'ONE', highlight: 'LOGIN', desc: 'All modules under a single platform' },
  { prefix: 'ZERO', highlight: 'PAPER', desc: 'Fully digital institution workflows' },
  { prefix: 'EVERY', highlight: 'CAMPUS', desc: 'Multi-branch management built in' },
  { prefix: 'AI', highlight: 'FIRST', desc: 'Predictions before problems escalate' },
]

// ── Animated Globe ────────────────────────────────────────
function Globe() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer glow */}
      <div
        className="absolute rounded-full"
        style={{
          width: 720,
          height: 720,
          background: 'radial-gradient(circle, rgba(65,153,234,0.12) 0%, transparent 70%)',
        }}
      />

      {/* SVG globe — slow CSS spin */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        style={{ width: 700, height: 700 }}
      >
        <svg
          viewBox="0 0 1496 1360"
          width="700"
          height="700"
          preserveAspectRatio="xMidYMid meet"
          style={{ opacity: 0.9 }}
        >
          <defs>
            <linearGradient id="globeGrad" spreadMethod="pad" gradientUnits="userSpaceOnUse"
              x1="-243" y1="-480" x2="-86" y2="-171">
              <stop offset="0%" stopColor="rgb(65,153,234)" stopOpacity="0.3" />
              <stop offset="35%" stopColor="rgb(35,93,147)" stopOpacity="0.3" />
              <stop offset="70%" stopColor="rgb(5,33,60)" stopOpacity="0.3" />
            </linearGradient>
            <clipPath id="globeClip">
              <rect width="1496" height="1360" x="0" y="0" />
            </clipPath>
          </defs>
          <g clipPath="url(#globeClip)">
            {/* Background fill */}
            <g transform="matrix(1,0,0,1,748,680.2)">
              <path fill="rgb(10,30,55)" fillOpacity="1"
                d="M748,-680.2 C748,-680.2 748,680.2 748,680.2 C748,680.2 -748,680.2 -748,680.2 C-748,680.2 -748,-680.2 -748,-680.2z" />
            </g>
            {/* Latitude arc lines */}
            {[
              { t: "575.2,282.2", d: "M225.8,-98 C160.3,-51.6 88.1,-10.8 10,23.1 C-68,-57 -147.2,81.8 -225.8,98" },
              { t: "604.5,350.3", d: "M317.9,-137.9 C229.7,-68.3 129,-7.6 18,40.6 C-93.3,88.9 -206.6,121 -317.9,137.9" },
              { t: "644.3,441.2", d: "M389.9,-169.2 C283,-82.1 159.8,-6.4 23,53 C-113.8,112.3 -253.2,150.6 -389.9,169.2" },
              { t: "692.5,552.3", d: "M438.7,-190.4 C318,-92.8 179.3,-8.1 25.5,58.7 C-128.3,125.4 -285,168.8 -438.7,190.4" },
              { t: "802.9,806.8", d: "M-438.7,190.4 C-318,92.8 -179.3,8.1 -25.5,-58.7 C128.3,-125.4 285,-168.8 438.7,-190.4" },
              { t: "851.1,917.9", d: "M-389.9,169.2 C-283,82.1 -159.8,6.4 -23,-53 C113.8,-112.3 253.2,-150.6 389.9,-169.2" },
              { t: "890.9,1008.8", d: "M-317.9,137.9 C-229.7,68.3 -129,7.6 -18,-40.6 C93.3,-88.9 206.6,-121 317.9,-137.9" },
              { t: "920.2,1076.9", d: "M-225.8,98 C-160.3,51.6 -88.1,10.8 -10,-23.1 C68,-57 147.2,-81.8 225.8,-98" },
            ].map((arc, i) => (
              <g key={i} transform={`matrix(1,0,0,1,${arc.t})`} opacity="0.15">
                <path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0"
                  strokeMiterlimit="10" stroke="rgb(255,255,255)" strokeOpacity="1"
                  strokeWidth="1" d={arc.d} />
              </g>
            ))}
            {/* Globe sphere gradient */}
            <g transform="matrix(0.917,-0.398,0.398,0.917,748,680.2)">
              <path fill="url(#globeGrad)" fillOpacity="1"
                d="M0,-498 C274.9,-498 498,-274.9 498,0 C498,274.9 274.9,498 0,498 C-274.9,498 -498,274.9 -498,0 C-498,-274.9 -274.9,-498 0,-498z" />
            </g>
            {/* Globe outline */}
            <g transform="matrix(0.917,-0.398,0.398,0.917,748,680.2)">
              <path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0"
                strokeMiterlimit="10" stroke="rgb(11,53,92)" strokeOpacity="1"
                strokeWidth="1"
                d="M0,-498 C274.9,-498 498,-274.9 498,0 C498,274.9 274.9,498 0,498 C-274.9,498 -498,274.9 -498,0 C-498,-274.9 -274.9,-498 0,-498z" />
            </g>
            {/* Longitude arc lines */}
            {[
              "M-348.2,-436.2 C-122.9,-534.4 145.6,-408.3 254.8,-155.8 C363.8,96.2 272,380.6 48.3,477.5",
              "M-348.2,-436.2 C-184.5,-508.7 27.3,-358.8 135.8,-106 C243.7,145.5 206.5,409.4 48.3,477.5",
              "M-348.2,-436.2 C-246.1,-483 -90.9,-309.3 16.7,-56.2 C123.5,194.7 141,438.1 48.3,477.5",
              "M-348.2,-436.2 C-307.7,-457.3 -209.2,-259.8 -102.3,-6.4 C3.4,244 75.6,466.9 48.3,477.5",
              "M-348.2,-436.2 C-369.4,-431.5 -327.5,-210.3 -221.3,43.5 C-116.8,293.2 10.1,495.7 48.3,477.5",
              "M-348.2,-436.2 C-430.9,-405.8 -445.7,-160.8 -340.3,93.3 C-236.9,342.4 -55.3,524.4 48.3,477.5",
              "M-348.2,-436.2 C-492.6,-380.1 -564,-111.3 -459.4,143.1 C-357.1,391.7 -120.8,553.2 48.3,477.5",
              "M-348.2,-436.2 C-554.2,-354.3 -682.3,-61.8 -578.4,192.9 C-477.2,440.9 -186.3,581.9 48.3,477.5",
            ].map((d, i) => (
              <g key={i} transform="matrix(1,0,0,1,897.9,659.6)" opacity="0.15">
                <path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0"
                  strokeMiterlimit="10" stroke="rgb(255,255,255)" strokeOpacity="1"
                  strokeWidth="1" d={d} />
              </g>
            ))}
          </g>
        </svg>
      </motion.div>

      {/* Floating label on globe */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none"
      >
        <p className="text-6xl font-bold text-white/10 select-none">KeyEd</p>
      </motion.div>

      {/* Pulsing ring */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.05, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute rounded-full border border-blue-400/20"
        style={{ width: 640, height: 640 }}
      />
    </div>
  )
}

// ── Main Component ────────────────────────────────────────
export default function ValueSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1E37] py-24 pt-10">
<div class="transform-bg-polygon-bottom"></div>
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ── Top: Left text + Right globe ── */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-10">

          {/* Left */}
          <div className="lg:w-1/2">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-1.5 h-4 bg-[#4199ea] rounded-full" />
              <p className="text-xs font-bold tracking-[0.2em] text-[#b6d3ee] uppercase">
                Why KeyEd
              </p>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-[#b6d3ee] leading-tight mb-4"
            >
              How KeyEd{' '}
              <span className="text-primary">Adds Value</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#81a1bf] mb-10 text-base"
            >
              KeyEd enables institutions to:
            </motion.p>

            {/* Checklist with bracket */}
            <div className="relative pl-6">
              {/* Left bracket — orange curved line */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
                style={{ background: 'linear-gradient(to bottom, #F97316, #FBBF24)' }}
              />
              <div className="space-y-4">
                {values.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-[#81a1bf] text-sm font-medium">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 flex items-center justify-center overflow-visible"
            style={{ height: 680 }}
          >
            <Globe />
          </motion.div>
        </div>

        {/* ── Bottom stat cards ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.highlight}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative rounded-xl p-5 overflow-hidden border border-white/5"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              {/* Accent line — alternating orange/blue */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl"
                style={{ background: i % 2 === 0 ? '#F97316' : '#3B82F6' }}
              />
              <p className="text-[10px] font-bold tracking-[0.18em] text-white/30 uppercase mb-1">
                {stat.prefix}{' '}
                <span className="text-secondary">{stat.highlight}</span>
              </p>
              <p className="text-xs text-white/50 leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
      <div className='transform-bg-polygon-top'></div>
    </section>
  )
}