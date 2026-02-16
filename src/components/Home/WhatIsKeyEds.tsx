'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface Module {
  id: string
  name: string
  iconUrl: string
  href: string
}

const modules: Module[] = [
  { id: 'hr', name: 'HR', iconUrl: '/icons/brown/hr.svg', href: '/features/hr' },
  { id: 'marketing', name: 'Marketing', iconUrl: '/icons/marketing.svg', href: '/features/marketing' },
  { id: 'library', name: 'Library', iconUrl: '/icons/brown/library.svg', href: '/features/library' },
  { id: 'transit', name: 'Transit', iconUrl: '/icons/transport.svg', href: '/features/transit' },
  { id: 'it', name: 'IT', iconUrl: '/icons/it.svg', href: '/features/it' },
  { id: 'finance', name: 'Finance', iconUrl: '/icons/brown/finance.svg', href: '/features/finance' },
  { id: 'teacher', name: 'Teacher', iconUrl: '/icons/teacher.svg', href: '/features/teacher' },
  { id: 'student', name: 'Student', iconUrl: '/icons/student.svg', href: '/features/student' },
  { id: 'parent', name: 'Parent', iconUrl: '/icons/brown/parents.svg', href: '/features/parent' },
  { id: 'visitor', name: 'Visitor Management', iconUrl: '/icons/brown/visitor.svg', href: '/features/visitor-management' },
  { id: 'admission', name: 'Admission', iconUrl: '/icons/admission.svg', href: '/features/admission' },
  { id: 'campus', name: 'Campus Management', iconUrl: '/icons/campus.svg', href: '/features/campus-management' },
  { id: 'institution', name: 'Institution Management', iconUrl: '/icons/brown/institute.svg', href: '/features/institution-management' },
  { id: 'admissions', name: 'Admission', iconUrl: '/icons/brown/admission.svg', href: '/features/admission' },
  { id: 'campuss', name: 'Campus Management', iconUrl: '/icons/campus.svg', href: '/features/campus-management' },
  { id: 'institutions', name: 'Institution Management', iconUrl: '/icons/institute.svg', href: '/features/institution-management' },
]

// 7 columns — arch shape: center high (low paddingTop), edges low (high paddingTop)
// [1, 2, 2, 3, 2, 2, 1] = 13 modules total
const COLUMNS = [
  { paddingTop: 0, indices: [0, 1] },
  { paddingTop: -80, indices: [2, 3] },
  { paddingTop: 0,  indices: [4, 5] },
  { paddingTop: -70,   indices: [5, 6] },   // ← center — 3 cards, tallest
  { paddingTop: 0,  indices: [7, 8] },
  { paddingTop: -60, indices: [9, 10] },
  { paddingTop: 0, indices: [11, 12] },
   { paddingTop: -80, indices: [13, 14] },
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: entranceDelay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: bounceDelay,
        }}
      >
        <Link href={module.href}>
          <motion.div
            whileHover={{ scale: 1.07, y: -5, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl shadow-xl hover:shadow-xl transition-shadow p-5 flex flex-col items-center gap-2 cursor-pointer"
            style={{ width: '144px' }}
          >
            <div className="w-14 h-14 flex items-center justify-center">
              <Image
                src={module.iconUrl}
                alt={module.name}
                width={56}
                height={56}
                className="object-contain w-14 h-14"
                onError={(e) => {
                  const el = e.currentTarget
                  el.style.display = 'none'
                  const wrapper = el.parentElement!
                  const div = document.createElement('div')
                  div.className = 'w-14 h-14 rounded-xl bg-secondary/15 flex items-center justify-center'
                  div.innerHTML = `<span class="text-secondary font-bold text-xl">${module.name.charAt(0)}</span>`
                  wrapper.appendChild(div)
                }}
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
   <section className="relative pt-20" style={{ background: '#FAF7F2' }}>
  <div className="absolute top-0 left-0 right-0 h-3/4 bg-[#0A2540] pointer-events-none" />
  

   

      {/* ── Header — sits on top of pink bg ── */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center pb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
        >
         What is <span className='text-primary'>KeyEd?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white  md:text-lg mb-8 leading-relaxed text-sm"
        >
          KeyEd is an integrated operating platform for educational institutions, bringing academics, operations, finance, growth, and analytics into a single ecosystem.
        </motion.p>

         <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white  md:text-lg mb-8 leading-relaxed text-xs"
        >
          Instead of managing departments separately, institutions operate on one connected intelligence layer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/features"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-[#d4894e] text-white font-bold px-8 py-4 rounded-xl transition-colors uppercase tracking-wide text-sm"
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
      <div
        className="relative z-10"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
        }}
      >
        <div className="flex items-end justify-center gap-4 px-8">
          {COLUMNS.map((col, colIdx) => (
            <div
              key={colIdx}
              className="flex flex-col gap-4 flex-shrink-0 relative"
              style={{ top: `${col.paddingTop}px` }}
            >
              {col.indices.map((moduleIdx) => {
                const d = allDelays[dIdx++]
                return (
                  <ModuleCard
                    key={modules[moduleIdx].id}
                    module={modules[moduleIdx]}
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