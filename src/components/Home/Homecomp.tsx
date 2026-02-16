'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ShieldCheck,
  ArrowRight,
  Play,
  GraduationCap,
  TrendingUp,
  DollarSign,
  Users,
} from 'lucide-react'

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '100%', label: 'Data Unified' },
  { value: '1', label: 'Single Platform' },
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
    bg: 'bg-secondary/10',
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

const Homecomp = () => {
  return (
    <section
      className="min-h-screen flex items-center pt-20 overflow-hidden"
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

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-[#0A2540]">One Platform.</span>
                 <br />
              <span className="text-[#0A2540]">One Login.</span>
              <br />
              <span  style={{
  background: 'linear-gradient(135deg, #F97316 0%, #FBBF24 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}}>One Source of Truth.</span>
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
                className="inline-flex items-center gap-2 px-7 py-4 bg-[#F97316] hover:bg-secondary-dark text-white font-semibold rounded-lg transition-colors"
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

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-8 bg-white rounded-2xl px-8 py-5 shadow-sm border border-gray-100"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#F97316]">{stat.value}</div>
                    <div className="text-xs text-[#718096] mt-0.5 whitespace-nowrap">{stat.label}</div>
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
            {/* Glow blob behind card */}
            <div
              className="absolute -inset-8 rounded-3xl opacity-30 blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(circle at 60% 40%, #E5A97C 0%, transparent 65%)' }}
            />

            {/* Dashboard Window — floating animation */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 w-xl"
              style={{ transform: 'rotate(1.5deg)' }}
            >
              {/* Title Bar */}
              <div className="flex items-center gap-3 px-5 py-4 bg-[#0A2540]">
                {/* Traffic lights */}
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
                {/* Institutional Health Score */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center mb-6"
                >
                  <p className="text-gray-400 text-sm mb-1">Institutional Health</p>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-7xl font-bold text-[#FB923C] leading-none"
                  >
                    94
                  </motion.div>
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

export default Homecomp