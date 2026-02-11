'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Module {
  id: string
  name: string
  iconUrl?: string
  angle: number
  href: string
}

const modules: Module[] = [
  { id: 'hr', name: 'HR', iconUrl: '/icons/hr.svg', angle: 0, href: '/features/hr' },
  { id: 'marketing', name: 'Marketing', iconUrl: '/icons/marketing.svg', angle: 27.7, href: '/features/marketing' },
  { id: 'library', name: 'Library', iconUrl: '/icons/library.svg', angle: 55.4, href: '/features/library' },
  { id: 'transit', name: 'Transit', iconUrl: '/icons/transport.svg', angle: 83.1, href: '/features/transit' },
  { id: 'it', name: 'IT', iconUrl: '/icons/it.svg', angle: 110.8, href: '/features/it' },
  { id: 'finance', name: 'Finance', iconUrl: '/icons/finance.svg', angle: 138.5, href: '/features/finance' },
  { id: 'teacher', name: 'Teacher', iconUrl: '/icons/teacher.svg', angle: 166.2, href: '/features/teacher' },
  { id: 'student', name: 'Student', iconUrl: '/icons/student.svg', angle: 193.8, href: '/features/student' },
  { id: 'parent', name: 'Parent', iconUrl: '/icons/parent.svg', angle: 221.5, href: '/features/parent' },
  { id: 'visitor', name: 'Visitor Management', iconUrl: '/icons/visitor.svg', angle: 249.2, href: '/features/visitor-management' },
  { id: 'admission', name: 'Admission', iconUrl: '/icons/admission.svg', angle: 276.9, href: '/features/admission' },
  { id: 'campus', name: 'Campus Management', iconUrl: '/icons/campus.svg', angle: 304.6, href: '/features/campus-management' },
  { id: 'institution', name: 'Institution Management', iconUrl: '/icons/institute.svg', angle: 332.3, href: '/features/institution-management' },
]

const CONTAINER_SIZE = 850
const INNER_CIRCLE_SIZE = CONTAINER_SIZE * 0.82
const CENTER_CIRCLE_SIZE = 350
const MODULE_SIZE = 120
const INNER_CIRCLE_RADIUS = INNER_CIRCLE_SIZE / 2
const ORBIT_DURATION = 120 // seconds for full rotation

// Time for all entrance animations to finish
const ENTRANCE_COMPLETE = (0.5 + modules.length * 0.06 + 0.7) * 1000 + 200

const EcosystemCircleCustomIcons = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const [orbitActive, setOrbitActive] = useState(false)
  const router = useRouter()

  const center = CONTAINER_SIZE / 2

  // Activate orbit after entrance animations complete
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setOrbitActive(true), ENTRANCE_COMPLETE)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <>
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counter-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 15px rgba(72, 103, 118, 0.12);
            opacity: 1;
          }
          50% {
            box-shadow: 0 0 30px rgba(72, 103, 118, 0.25);
            opacity: 0.8;
          }
        }
        @keyframes border-breathe {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .orbit-ring {
          animation: orbit ${ORBIT_DURATION}s linear infinite;
        }
        .counter-orbit {
          animation: counter-orbit ${ORBIT_DURATION}s linear infinite;
        }
        .pulse-inner {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .breathe-outer {
          animation: border-breathe 4s ease-in-out infinite;
        }
      `}</style>

      <section ref={sectionRef} className="flex items-center justify-center bg-white py-20 hidden md-block">
        <div
          style={{
            position: 'relative',
            width: CONTAINER_SIZE,
            height: CONTAINER_SIZE,
          }}
        >
          {/* Outer Circle Border — breathing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className={orbitActive ? 'breathe-outer' : ''}
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '1.5px solid #d1d5db',
              zIndex: 1,
            }}
          />

          {/* Inner Circle Border — pulse glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className={orbitActive ? 'pulse-inner' : ''}
            style={{
              position: 'absolute',
              top: center - INNER_CIRCLE_SIZE / 2,
              left: center - INNER_CIRCLE_SIZE / 2,
              width: INNER_CIRCLE_SIZE,
              height: INNER_CIRCLE_SIZE,
              borderRadius: '50%',
              border: '1.5px solid #d1d5db',
              zIndex: 2,
            }}
          />

          {/* Center Circle */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              type: 'spring',
              stiffness: 200,
              damping: 20,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(0, 128, 129, 0.3)',
            }}
            whileTap={{ scale: 0.96 }}
            onClick={() => router.push('/features')}
            style={{
              position: 'absolute',
              top: center - CENTER_CIRCLE_SIZE / 2,
              left: center - CENTER_CIRCLE_SIZE / 2,
              width: CENTER_CIRCLE_SIZE,
              height: CENTER_CIRCLE_SIZE,
              borderRadius: '50%',
              backgroundColor: '#486776',
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              cursor: 'pointer',
              border: 'none',
              zIndex: 5,
            }}
          >
            <h2 className="font-arabic text-7xl tracking-tight leading-3">KeyEd</h2>
            <h2 className="font-arabic text-7xl tracking-tight leading-none">Ecosystem</h2>
          </motion.button>

          {/* Orbit wrapper — rotates all icons as a group */}
          <div
            className={orbitActive ? 'orbit-ring' : ''}
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 10,
            }}
          >
            {modules.map((module, index) => {
              const angleRad = module.angle * (Math.PI / 180)

              const iconCenterX = center + INNER_CIRCLE_RADIUS * Math.cos(angleRad)
              const iconCenterY = center + INNER_CIRCLE_RADIUS * Math.sin(angleRad)

              const finalLeft = iconCenterX - MODULE_SIZE / 2
              const finalTop = iconCenterY - MODULE_SIZE / 2

              const pushOut = 150
              const startLeft = finalLeft + pushOut * Math.cos(angleRad)
              const startTop = finalTop + pushOut * Math.sin(angleRad)

              return (
                <motion.a
                  key={module.id}
                  href={module.href}
                  onClick={(e) => {
                    e.preventDefault()
                    router.push(module.href)
                  }}
                  initial={{
                    opacity: 0,
                    left: startLeft,
                    top: startTop,
                    scale: 0.3,
                  }}
                  animate={
                    isInView
                      ? { opacity: 1, left: finalLeft, top: finalTop, scale: 1 }
                      : { opacity: 0, left: startLeft, top: startTop, scale: 0.3 }
                  }
                  transition={{
                    duration: 0.7,
                    delay: 0.5 + index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: '0 8px 25px rgba(0, 128, 129, 0.35)',
                  }}
                  whileTap={{ scale: 0.92 }}
                  style={{
                    position: 'absolute',
                    width: MODULE_SIZE,
                    height: MODULE_SIZE,
                    borderRadius: '50%',
                    backgroundColor: '#486776',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                    textDecoration: 'none',
                  }}
                >
                  {/* Counter-rotate content so icons + text stay upright */}
                  <div
                    className={orbitActive ? 'counter-orbit' : ''}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div className="mb-1 w-8 h-8 md:w-10 md:h-10 bg-white rounded-md flex items-center justify-center">
                      {module.iconUrl ? (
                        <img
                          src={module.iconUrl}
                          alt={module.name}
                          className="w-7 h-7 md:w-7 md:h-7 object-contain"
                        />
                      ) : (
                        <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-200 rounded" />
                      )}
                    </div>
                    <span className="text-xs md:text-xl font-semibold text-center px-2 leading-4 font-arabic">
                      {module.name}
                    </span>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default EcosystemCircleCustomIcons