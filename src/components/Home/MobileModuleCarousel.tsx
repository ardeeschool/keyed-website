'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import Link from 'next/link'

interface Module {
  id: string
  name: string
  iconUrl?: string
  href: string
}

const modules: Module[] = [
  { id: 'marketing', name: 'Marketing', href: '/modules/marketing', iconUrl:'/icons/brown/hr.svg' },
  { id: 'library', name: 'Library', href: '/modules/library', iconUrl:'/icons/brown/library.svg' },
  { id: 'transit', name: 'Transit', href: '/modules/transit', iconUrl:'/icons/brown/transport.svg' },
  { id: 'it', name: 'IT', href: '/modules/it', iconUrl:'/icons/brown/it.svg' },
  { id: 'finance', name: 'Finance', href: '/modules/finance', iconUrl:'/icons/brown/finance.svg' },
  { id: 'hr', name: 'HR', href: '/modules/hr', iconUrl:'/icons/brown/hr.svg' },
  { id: 'teacher', name: 'Teachers', href: '/modules/teacher', iconUrl:'/icons/brown/teacher.svg' },
  { id: 'student', name: 'Students', href: '/modules/student', iconUrl:'/icons/brown/student.svg' },
  { id: 'parent', name: 'Parents', href: '/modules/parent', iconUrl:'/icons/brown/parents.svg' },
  { id: 'admission', name: 'Admission', href: '/modules/admission', iconUrl:'/icons/brown/admission.svg' },
  { id: 'campus', name: 'Campus Management', href: '/modules/campus', iconUrl:'/icons/brown/campus.svg' },
  { id: 'visitor', name: 'Visitor Management', href: '/modules/visitor', iconUrl:'/icons/brown/visitor.svg' },
  { id: 'institution', name: 'Institution Management', href: '/modules/institution', iconUrl:'/icons/brown/institute.svg' },
]

const MobileModuleCarousel = () => {
  const [isPaused, setIsPaused] = useState(false)
  const x = useMotionValue(0)
  const controls = useAnimation()
  
  // Duplicate modules for seamless infinite scroll
  const duplicatedModules = [...modules, ...modules, ...modules]
  
  // Card width + gap = 160px + 16px = 176px
  const CARD_WIDTH = 176
  const TOTAL_WIDTH = modules.length * CARD_WIDTH

  useEffect(() => {
    if (isPaused) {
      controls.stop()
      return
    }

    // Infinite scroll animation
    const animateScroll = async () => {
      await controls.start({
        x: -TOTAL_WIDTH,
        transition: {
          duration: 60, // Adjust speed (higher = slower)
          ease: 'linear',
          repeat: Infinity,
        },
      })
    }

    animateScroll()

    return () => controls.stop()
  }, [isPaused, controls, TOTAL_WIDTH])

  return (
    <section className="py-10 bg-white md:hidden overflow-hidden">
      {/* Header */}
      <div className="mb-8 px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-2 font-arabic">
          13 Module. One Ecosystem
        </h2>
        <div className="w-24 h-1 bg-secondary mx-auto"></div>
      </div>

      {/* Carousel Container */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Content */}
        <motion.div
          className="flex gap-4 cursor-grab active:cursor-grabbing"
          style={{ x }}
          animate={controls}
          drag="x"
          dragConstraints={{ left: -TOTAL_WIDTH, right: 0 }}
          onDragStart={() => setIsPaused(true)}
          onDragEnd={() => setIsPaused(false)}
        >
          {/* Left spacing for 4.5 cards view */}
          <div className="flex-shrink-0 w-4" />

          {/* Module Cards */}
          {duplicatedModules.map((module, index) => (
            <Link
              key={`${module.id}-${index}`}
              href={module.href}
              className="flex-shrink-0"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-30 h-36 rounded-md bg-[linear-gradient(118deg,_#678C9F_-7.76%,_#253239_95.2%)]   rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all pt-2"
              >

              <div className="h-20 w-27 mx-auto bg-white p-4 mb-1  rounded-lg flex items-center justify-center">
                      {module.iconUrl ? (
                        <img
                          src={module.iconUrl}
                          alt={module.name}
                          className="w-10 h-10 md:w-10 md:h-10 object-contain"
                        />
                      ) : (
                        <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-200 rounded" />
                      )}
                    </div>


                {/* Label Area - Primary Background */}
                <div className="h-16  flex items-center justify-center px-3 pb-1">
                  <span className="text-white font-semibold text-center text-xs leading-3">
                    {module.name}
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}

          {/* Right spacing */}
          <div className="flex-shrink-0 w-4" />
        </motion.div>
      </div>

      {/* Optional: Pause indicator */}
      {isPaused && (
        <div className="text-center mt-4 text-sm text-gray-500">
          Paused - Release to continue
        </div>
      )}
    </section>
  )
}

export default MobileModuleCarousel