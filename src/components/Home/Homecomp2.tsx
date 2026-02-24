'use client'

import { motion, animate } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { ShieldCheck, ArrowRight, Play } from 'lucide-react'

const cyclingWords = ['Platform.', 'Login.', 'Source of Truth.']
const stats = [
  { value: 20, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Data Unified' },
  { value: 1, suffix: '', label: 'Single Platform' },
]

function TypewriterCycle() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState<'typing' | 'waiting' | 'deleting'>('typing')

  useEffect(() => {
    const currentWord = cyclingWords[wordIndex]
    let timeout: ReturnType<typeof setTimeout>
    if (phase === 'typing') {
      if (displayed.length < currentWord.length) {
        timeout = setTimeout(() => setDisplayed(currentWord.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setPhase('waiting'), 1400)
      }
    } else if (phase === 'waiting') {
      timeout = setTimeout(() => setPhase('deleting'), 200)
    } else if (phase === 'deleting') {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
      } else {
        setWordIndex((prev) => (prev + 1) % cyclingWords.length)
        setPhase('typing')
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, phase, wordIndex])

  return (
    <span className="inline-block bg-gradient-to-br
      from-primary
      to-secondary
      bg-clip-text
      text-transparent
      min-w-[2ch]">
      {displayed}
      <span className="inline-block
        ml-0.5
        w-[3px]
        h-[0.85em]
        align-middle
        rounded-sm
        animate-pulse
        bg-primary" />
    </span>
  )
}

function AnimatedCounter({ target, suffix, delay = 0, className = 'text-2xl font-bold text-primary' }:
  { target: number; suffix: string; delay?: number; className?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true
        const controls = animate(0, target, {
          duration: 1.8, delay, ease: [0.16, 1, 0.3, 1],
          onUpdate: (v) => setCount(Math.round(v)),
        })
        return () => controls.stop()
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, delay])

  return <div ref={ref} className={className}>{count}{suffix}</div>
}

// ─────────────────────────────────────────────
// FloatCard: outer = spring entrance, inner = perpetual bob
// ─────────────────────────────────────────────
function FloatCard({
  children, enterDelay = 0, enterFrom = {}, floatY = 10,
  floatDuration = 5, floatDelay = 0, positionStyle = {},
}: {
  children: React.ReactNode
  enterDelay?: number
  enterFrom?: Record<string, unknown>
  floatY?: number
  floatDuration?: number
  floatDelay?: number
  positionStyle?: React.CSSProperties
}) {
  return (
    <motion.div
      initial={{ opacity: 0, ...enterFrom }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
      transition={{ duration: 0.7, delay: enterDelay, type: 'spring', stiffness: 150, damping: 16 }}
      style={{ position: 'absolute', ...positionStyle }}
    >
      <motion.div
        animate={{ y: [0, -floatY, 0] }}
        transition={{ duration: floatDuration, repeat: Infinity, ease: 'easeInOut', delay: floatDelay }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────
// Main Hero
// ─────────────────────────────────────────────
const Homecomp = () => {
  return (
    <section className="pb-20 flex items-center pt-20 overflow-hidden" style={{ background: '#FAF7F2' }}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Left ── */}
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white shadow-sm border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Trusted by Leading Institutions
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-primary">One </span>
              <TypewriterCycle />
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#4A5568] text-lg leading-relaxed max-w-lg mb-8">
              Run your entire institution on a single intelligent platform —
              academics, operations, finance, admissions, analytics, and growth in one ecosystem.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-7 py-4 bg-primary hover:bg-secondary  text-white font-semibold rounded-lg transition-colors">
                Request Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/solution"
                className="inline-flex items-center gap-2 px-7 py-4 border-2 border-gray-800 text-gray-800 font-semibold rounded-lg hover:bg-gray-800 hover:text-white transition-all">
                <Play className="w-4 h-4 fill-current" /> Watch Overview
              </Link>
            </motion.div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 text-sm italic font-semibold mb-10">
              Built from 20+ years of running real schools.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-8 bg-white rounded-2xl px-8 py-5 shadow-sm border border-gray-100">
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-8">
                  <div className="text-center">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} delay={0.6 + index * 0.15} />
                    <div className="text-xs text-primary mt-0.5 whitespace-nowrap">{stat.label}</div>
                  </div>
                  {index < stats.length - 1 && <div className="w-px h-8 bg-gray-200" />}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Floating cards ── */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
            style={{ height: 540 }}
          >
            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 70% 60% at 55% 50%, rgba(249,115,22,0.08) 0%, transparent 70%)' }} />

            {/* CARD 1 — KeyEd Score */}
            <FloatCard
              enterDelay={0.5}
              enterFrom={{ scale: 0.6, y: 60 }}
              floatY={10} floatDuration={5} floatDelay={0}
              positionStyle={{ top: '30%', left: '35%', transform: 'translate(-50%,-54%) rotate(-2deg)', zIndex: 10 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 w-52">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">Institutional Health</p>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-5xl font-bold text-primary-dark leading-none">94</span>
                  <span className="text-xs font-semibold text-green-600 mb-1">↑ +2.4%</span>
                </div>
                <div className="flex items-end gap-1 mb-3" style={{ height: 36 }}>
                  {[55, 70, 48, 85, 65, 90, 78].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm relative overflow-hidden bg-gray-100">
                      <motion.div
                        initial={{ height: 0 }} animate={{ height: `${h}%` }}
                        transition={{ duration: 0.7, delay: 0.9 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute bottom-0 left-0 right-0 rounded-sm"
                        style={{ background: i === 5 ? '#F97316' : '#FBBF24' }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[8px] text-gray-300">
                  {['M','T','W','T','F','S','S'].map(d => <span key={d}>{d}</span>)}
                </div>
                <div className="mt-3 px-3 py-1.5 bg-primary-dark rounded-lg text-center">
                  <p className="text-[10px] font-bold text-white">KeyEd Score™</p>
                </div>
              </div>
            </FloatCard>

            {/* CARD 2 — Attendance */}
            <FloatCard
              enterDelay={0.7}
              enterFrom={{ x: -60, y: -30, rotate: -14 }}
              floatY={8} floatDuration={4.5} floatDelay={0.5}
              positionStyle={{ top: '8%', left: '4%', zIndex: 8, rotate: '-5deg' }}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-44">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[10px] font-bold text-gray-700">Attendance</p>
                  <span className="text-[8px] bg-green-200 text-green-600 px-1.5 py-0.5 rounded-full font-semibold">Live</span>
                </div>
                {[{ label: 'Students', pct: 94 }, { label: 'Teachers', pct: 97 }].map(r => (
                  <div key={r.label} className="mb-2">
                    <div className="flex justify-between mb-0.5">
                      <p className="text-[9px] text-gray-500">{r.label}</p>
                      <p className="text-[9px] font-bold text-primary">{r.pct}%</p>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }} animate={{ width: `${r.pct}%` }}
                        transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-1.5 mt-2 bg-gray-50 rounded-lg p-1.5">
                  <div className="w-5 h-5 rounded-full bg-primary-dark flex items-center justify-center">
                    <span className="text-[8px] font-bold text-white">A</span>
                  </div>
                  <div>
                    <p className="text-[8px] font-bold text-gray-700">Grade 10-A</p>
                    <p className="text-[7px] text-gray-400">98% present</p>
                  </div>
                </div>
              </div>
            </FloatCard>

            {/* CARD 3 — Fee Collection */}
            <FloatCard
              enterDelay={0.85}
              enterFrom={{ x: 70, y: -30, rotate: 12 }}
              floatY={12} floatDuration={5.5} floatDelay={1}
              positionStyle={{ top: '5%', right: '2%', zIndex: 7, rotate: '4deg' }}
            >
              <div className="bg-primary-dark rounded-2xl shadow-xl p-4 w-44">
                <p className="text-[10px] font-bold text-white/60 mb-1">Fee Collection</p>
                <p className="text-xl font-bold text-white leading-none mb-0.5">₹1,28,400</p>
                <p className="text-[9px] text-white/60 mb-3">↑ 12% vs last month</p>
                <div className="flex items-end gap-0.5" style={{ height: 32 }}>
                  {[40, 60, 35, 75, 55, 88].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm relative overflow-hidden bg-white/10">
                      <motion.div
                        initial={{ height: 0 }} animate={{ height: `${h}%` }}
                        transition={{ duration: 0.8, delay: 1.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute bottom-0 left-0 right-0 rounded-t-sm"
                        style={{ background: i === 5 ? '#F97316' : 'rgba(249,115,22,0.4)' }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-1.5 mt-3">
                  <div className="flex-1 bg-green-100 rounded-lg p-1.5 text-center">
                    <p className="text-[9px] font-bold text-black">92%</p>
                    <p className="text-[7px] text-black">Collected</p>
                  </div>
                  <div className="flex-1 bg-red-100 rounded-lg p-1.5 text-center">
                    <p className="text-[9px] font-bold text-red-400">8%</p>
                    <p className="text-[7px] text-black">Pending</p>
                  </div>
                </div>
              </div>
            </FloatCard>

            {/* CARD 4 — Admissions */}
            <FloatCard
              enterDelay={1.0}
              enterFrom={{ x: -60, y: 50, rotate: -10 }}
              floatY={7} floatDuration={4} floatDelay={1.5}
              positionStyle={{ bottom: '6%', left: '2%', zIndex: 9, rotate: '3deg' }}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-44">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[10px] font-bold text-gray-700">Admissions</p>
                  <span className="text-[8px] bg-primary-dark text-white px-1.5 py-0.5 rounded-full font-semibold">2025</span>
                </div>
                {[
                  { stage: 'Inquiries', n: 340, w: '100%' },
                  { stage: 'Applied', n: 210, w: '62%' },
                  { stage: 'Enrolled', n: 54, w: '25%' },
                ].map(r => (
                  <div key={r.stage} className="mb-1.5">
                    <div className="flex justify-between mb-0.5">
                      <p className="text-[8px] text-gray-500">{r.stage}</p>
                      <p className="text-[8px] font-bold text-gray-700">{r.n}</p>
                    </div>
                    <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }} animate={{ width: r.w }}
                        transition={{ duration: 0.9, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-primary-light rounded-full"
                      />
                    </div>
                  </div>
                ))}
                <p className="text-[8px] text-gray-400 mt-2">Conv. rate <strong className="text-primary">15.9%</strong></p>
              </div>
            </FloatCard>

            {/* CARD 5 — AI Alert */}
            <FloatCard
              enterDelay={1.15}
              enterFrom={{ scale: 0.5, y: 60, rotate: 10 }}
              floatY={9} floatDuration={3.5} floatDelay={0.8}
              positionStyle={{ bottom: '10%', right: '0%', zIndex: 11, rotate: '-4deg' }}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-3 w-40">
                <div className="flex items-center gap-2 mb-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-6 h-6 rounded-full bg-red-700 flex items-center justify-center flex-shrink-0"
                  >
                    <span className="text-white text-[10px] font-bold">AI</span>
                  </motion.div>
                  <p className="text-[9px] font-bold text-gray-700">Smart Alert</p>
                </div>
                <p className="text-[9px] text-gray-500 leading-tight mb-2">Fee default risk rising in Grade 8 · Act now</p>
                <div className="flex gap-1">
                  <span className="text-[8px] bg-primary text-white px-2 py-0.5 rounded font-semibold">Review</span>
                  <span className="text-[8px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded font-semibold">Snooze</span>
                </div>
              </div>
            </FloatCard>

            {/* PILL — Staff */}
            <FloatCard
              enterDelay={1.3}
              enterFrom={{ x: 40, scale: 0.7 }}
              floatY={6} floatDuration={3} floatDelay={2}
              positionStyle={{ top: '44%', right: '1%', zIndex: 6 }}
            >
              <div className="bg-gray-50 rounded-xl shadow-lg px-3 py-2 flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  {['S','R','P'].map((l, i) => (
                    <div key={i} className="w-5 h-5 rounded-full border border-primary flex items-center justify-center text-[7px] font-bold text-white"
                      style={{ background: ['#000','#0456c9','#f00'][i] }}>
                      {l}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-[8px] font-bold text-primary leading-none">80 Staff</p>
                  <p className="text-[7px] text-primary-dark">Active today</p>
                </div>
              </div>
            </FloatCard>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Homecomp