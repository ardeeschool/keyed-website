'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
//import { ArrowRight } from 'lucide-react'
import {
  User,
  Megaphone,
  Library,
  Building2,
  Bus,
  Laptop,
  DollarSign,
  Presentation,
  GraduationCap,
  Users,
  IdCard,
  UserPlus,
  School,
  ArrowRight,
  LucideIcon
} from "lucide-react"

interface Module {
  id: string
  name: string
  icon: LucideIcon
  href: string
}

const modules: Module[] = [
  { id: 'hr', name: 'HR', icon: User, href: '/solution' },
  { id: 'marketing', name: 'Marketing', icon: Megaphone, href: '/solution' },
  { id: 'library', name: 'Library', icon: Library, href: '/solution' },
  { id: 'transit', name: 'Transit', icon: Bus, href: '/solution' },
  { id: 'it', name: 'IT', icon: Laptop, href: '/solution' },
  { id: 'finance', name: 'Finance', icon: DollarSign, href: '/solution' },
  { id: 'teacher', name: 'Teacher', icon: Presentation, href: '/solution' },
  { id: 'student', name: 'Student', icon: GraduationCap, href: '/solution' },
  { id: 'visitor', name: 'Visitor Management', icon: IdCard, href: '/solution' },
  { id: 'admission', name: 'Admission', icon: UserPlus, href: '/solution' },
  { id: 'campus', name: 'Campus Management', icon: School, href: '/solution' },
  { id: 'institution1', name: 'Institution Management', icon: Building2, href: '/solution' },
  { id: 'institution2', name: 'Institution Management', icon: Building2, href: '/solution' },
  { id: 'institution3', name: 'Institution Management', icon: Building2, href: '/solution' },
  { id: 'institution4', name: 'Institution Management', icon: Building2, href: '/solution' },
  { id: 'institution5', name: 'Institution Management', icon: Building2, href: '/solution' },
  { id: 'institution', name: 'Institution Management', icon: Building2, href: '/solution' },
  { id: 'parent', name: 'Parent', icon: Users, href: '/solution' },
]

// 7 columns — arch shape: center high (low paddingTop), edges low (high paddingTop)
// [1, 2, 2, 3, 2, 2, 1] = 13 modules total
const COLUMNS = [
  { paddingTop: -80, indices: [0] },
  { paddingTop: 0, indices: [1, 15] },
  { paddingTop: -80, indices: [2, 3] },
  { paddingTop: 0,  indices: [4, 5] },
  { paddingTop: -70,   indices: [5, 6] },   // ← center — 3 cards, tallest
  { paddingTop: 0,  indices: [7, 8] },
  { paddingTop: -40, indices: [9, 10] },
  { paddingTop: -80, indices: [11, 12] },
   { paddingTop: -40, indices: [13, 14] },
    { paddingTop: 30, indices: [16, 17] },
]

// Card approx dimensions: 144px wide, ~155px tall, 16px gap
// Center col: 3 cards + 2 gaps = 3*155 + 2*16 = 497px
// Pink bg height = paddingTop(0) + 3 cards = covers center fully
// Side cards at paddingTop 260 sit ~260px lower — below pink

function ModuleCard({
  module,
  entranceDelay,
  bounceDelay,
}: {
  module: Module
  entranceDelay: number
  bounceDelay: number
}) {
  const Icon = module.icon   // ✅ important

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        delay: entranceDelay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: bounceDelay,
        }}
      >
        <Link href={module.href}>
          <motion.div
            whileHover={{ scale: 1.07, y: -5 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl 
                       transition-all p-5 flex flex-col items-center 
                       gap-2 cursor-pointer"
            style={{ width: "clamp(120px, 8.5vw, 144px)" }}
          >
            <div className="w-14 h-14 flex items-center justify-center">
              <Icon
                className="w-12 h-12 text-gray-800 
                           transition-all duration-300"
                strokeWidth={2}
              />
            </div>

            <p className="text-sm font-semibold text-gray-800 text-center leading-snug">
              {module.name}
            </p>
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default function WhatIsKeyEds() {
  // Build delays flat in column order
  const allDelays: { entrance: number; bounce: number }[] = []
  let i = 0
  COLUMNS.forEach(col => {
    col.indices.forEach(() => {
      allDelays.push({ entrance: i * 0.06, bounce: (i * 0.28) % 3 })
      i++
    })
  })

  let dIdx = 0

  return (
    /*
      Outer section: relative + overflow:hidden (clips edge cards)
      Pink bg div sits absolute at top — covers header + upper portion of cards
      Cards row breaks out to full viewport width
    */
   <section className="relative pt-12 md:pt-20 bg-white">
  <div className="absolute top-0 left-0 right-0 h-17/20 bg-primary pointer-events-none" />
  

   

      {/* ── Header — sits on top of pink bg ── */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center pb-12 lg:pb-30">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-medium text-white mb-5 leading-tight"
        >
         What is <span className='text-gray-50'>KeyEd?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white  md:text-lg mb-8 leading-relaxed text-sm"
        >
          KeyEd is a performance-first School Operating System. It runs your institution’s core workflows - attendance, assessments, assignments, communication, and governance — and translates operational activity into structured weekly performance intelligence. 
        </motion.p>

         <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white  md:text-lg mb-8 leading-relaxed text-xs"
        >
          Leadership no longer waits for term-end reports. KeyEd shows where performance is improving and where it is declining - in real time
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/solution"
            className="inline-flex items-center gap-2 bg-secondary-dark hover:bg-secondary/70 text-white font-bold px-8 py-4 rounded-xl transition-colors uppercase tracking-wide text-sm"
          >
            Explore Modules
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/*
        ── Card row ──
        Breaks OUT of any container using negative margin trick.
        w-screen ensures it spans full viewport.
        overflow is handled by the parent section.
      */}
      






      {/* ── Mobile: 2-column grid ── */}
     <div className="relative z-10 lg:hidden px-5">
  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mx-auto">
    {modules.map((module, idx) => {
      const Icon = module.icon

      return (
        <motion.div
          key={module.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: idx * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Link href={module.href}>
            <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center gap-2.5 hover:shadow-lg transition-all duration-300">
              
              <div className="w-12 h-12 flex items-center justify-center">
                <Icon
                  className="w-12 h-12 text-gray-800 group-hover:text-primary transition-colors duration-300"
                  strokeWidth={2}
                />
              </div>

              <p className="text-sm font-semibold text-gray-800 text-center leading-snug">
                {module.name}
              </p>

            </div>
          </Link>
        </motion.div>
      )
    })}
  </div>
</div>
      {/* ── Desktop: Arch columns layout ── */}
      <div
        className="relative z-10 hidden lg:block"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
        }}
      >
    
        <div className="flex items-end justify-center px-0 gap-4">
          {COLUMNS.map((col, colIdx) => (
            <div
              key={colIdx}
              className="flex flex-col gap-4 flex-shrink-0 relative"
              style={{ top: `${col.paddingTop}px` }}
            >
              {col.indices.map((moduleIdx) => {
  const module = modules[moduleIdx]
  if (!module) return null  // ✅ prevent crash

  const d = allDelays[dIdx++]

  return (
    <ModuleCard
      key={module.id}
      module={module}
      entranceDelay={d.entrance}
      bounceDelay={d.bounce}
    />
  )
})}
            </div>
          ))}
        </div>
        </div>
     

    </section>
  )
}