'use client'

import { motion, animate } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import {
  ShieldCheck,
  ArrowRight,
  Play,
  GraduationCap,
  TrendingUp,
  DollarSign,
  Users,
} from 'lucide-react'

// ── Typewriter cycling words ──
const cyclingWords = ['Platform.', 'Login.', 'Source of Truth.']

// ── Stats with target numbers ──
const stats = [
  { value: 20, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Data Unified' },
  { value: 1, suffix: '', label: 'Single Platform' },
]

const dashboardModules = [
  {
    id: 'academic',
    label: 'Academic',
    icon: GraduationCap,
    iconColor: 'text-[#0A2540]',
    bg: 'bg-gray-100',
  },
  {
    id: 'enrollment',
    label: 'Enrollment',
    icon: TrendingUp,
    iconColor: 'text-[#F97316]',
    bg: 'bg-[#f973161a]',
  },
  {
    id: 'financial',
    label: 'Financial',
    icon: DollarSign,
    iconColor: 'text-[#F59E0B]',
    bg: 'bg-[#fbbf240d]',
  },
  {
    id: 'people',
    label: 'People',
    icon: Users,
    iconColor: 'text-[#4A5568]',
    bg: 'bg-gray-100',
  },
]

// ─────────────────────────────────────────────
// Typewriter Component
// ─────────────────────────────────────────────
function TypewriterCycle() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState<'typing' | 'waiting' | 'deleting'>('typing')

  useEffect(() => {
    const currentWord = cyclingWords[wordIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (phase === 'typing') {
      if (displayed.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => setPhase('waiting'), 1400)
      }
    } else if (phase === 'waiting') {
      timeout = setTimeout(() => setPhase('deleting'), 200)
    } else if (phase === 'deleting') {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 45)
      } else {
        setWordIndex((prev) => (prev + 1) % cyclingWords.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, phase, wordIndex])

  return (
    <span
      className="inline-block"
      style={{
        background: 'linear-gradient(135deg, #F97316 0%, #FBBF24 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        minWidth: '2ch',
      }}
    >
      {displayed}
      {/* Blinking cursor */}
      <span
        className="inline-block ml-0.5 w-[3px] h-[0.85em] align-middle rounded-sm animate-pulse"
        style={{ background: '#F97316', verticalAlign: 'middle' }}
      />
    </span>
  )
}

// ─────────────────────────────────────────────
// Animated Counter Component
// ─────────────────────────────────────────────
function AnimatedCounter({
  target,
  suffix,
  delay = 0,
}: {
  target: number
  suffix: string
  delay?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const controls = animate(0, target, {
            duration: 1.8,
            delay,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (v) => setCount(Math.round(v)),
          })
          return () => controls.stop()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, delay])

  return (
    <div ref={ref} className="text-2xl font-bold text-[#F97316]">
      {count}
      {suffix}
    </div>
  )
}
function AnimatedCounter94({
  target,
  suffix,
  delay = 0,
}: {
  target: number
  suffix: string
  delay?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const controls = animate(0, target, {
            duration: 1.8,
            delay,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (v) => setCount(Math.round(v)),
          })
          return () => controls.stop()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, delay])

  return (
    <div ref={ref} className="text-7xl font-bold text-[#F97316]">
      {count}
      {suffix}
    </div>
  )
}
// ─────────────────────────────────────────────
// Main Hero Component
// ─────────────────────────────────────────────
const Homecomp2 = () => {
  return (
    <section
      className="p-20 flex items-center"
      style={{ background: '#FAF7F2' }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Left Content ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#f973161a] border border-secondary/30 text-[#EA580C] px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <ShieldCheck className="w-4 h-4" />
              Trusted by Leading Institutions
            </motion.div>

            {/* Heading with Typewriter */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-6xl font-bold leading-tight mb-6"
            >
              {/* Fixed "One" + cycling word */}
              <span className="text-[#0A2540]">One </span>
              <TypewriterCycle />
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#4A5568] text-lg leading-relaxed max-w-lg mb-8"
            >
              Run your entire institution on a single intelligent platform —
              academics, operations, finance, admissions, analytics, and growth
              in one ecosystem.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-6"
            >
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-7 py-4 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold rounded-lg transition-colors"
              >
                Request Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/overview"
                className="inline-flex items-center gap-2 px-7 py-4 border-2 border-gray-800 text-gray-800 font-semibold rounded-lg hover:bg-gray-800 hover:text-white transition-all"
              >
                <Play className="w-4 h-4 fill-current" />
                Watch Overview
              </Link>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 text-sm italic font-semibold mb-10"
            >
              Built from 20+ years of running real schools.
            </motion.p>

            {/* Stats with animated counters */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-8 bg-white rounded-2xl px-8 py-5 shadow-sm border border-gray-100"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-8">
                  <div className="text-center">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      delay={0.6 + index * 0.15}
                    />
                    <div className="text-xs text-[#718096] mt-0.5 whitespace-nowrap">
                      {stat.label}
                    </div>
                  </div>
                  {index < stats.length - 1 && (
                    <div className="w-px h-8 bg-gray-200" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Dashboard Mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Glow blob */}
            <div
              className="absolute -inset-8 rounded-3xl opacity-30 blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(circle at 60% 40%, #E5A97C 0%, transparent 65%)' }}
            />

            {/* Floating Dashboard Window */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
              style={{ transform: 'rotate(1.5deg)' }}
            >
              {/* Title Bar */}
              <div className="flex items-center gap-3 px-5 py-4 bg-[#0A2540]">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-white font-semibold text-sm ml-2">
                  KeyEd Dashboard
                </span>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                {/* Health Score */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center mb-6"
                >
                  <p className="text-gray-400 text-sm mb-1">Institutional Health</p>
                  <div className="text-7xl font-bold text-[#FB923C] leading-none">
                  <AnimatedCounter94
                      target={94}
                      suffix={''}
                      delay={0.6}
                    />
                    </div>
                  
                </motion.div>

                {/* 2x2 Module Cards */}
                <div className="grid grid-cols-2 gap-3">
                  {dashboardModules.map((module, index) => {
                    const Icon = module.icon
                    return (
                      <motion.div
                        key={module.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 + index * 0.12 }}
                        whileHover={{ scale: 1.04, y: -3 }}
                        className={`${module.bg} rounded-xl p-5 flex flex-col items-center gap-2 cursor-pointer transition-shadow border-2 border-[#0a25401a] hover:shadow-md`}
                      >
                        <Icon className={`w-14 h-14 ${module.iconColor}`} strokeWidth={1.8} />
                        <span className="text-lg font-semibold text-[#0A2540]">
                          {module.label}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Homecomp2