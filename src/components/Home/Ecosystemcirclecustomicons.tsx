'use client'

import { motion } from 'framer-motion'

interface Module {
  id: string
  name: string
  iconUrl?: string
  angle: number
}

const modules: Module[] = [
  { id: 'hr', name: 'HR', iconUrl: '/icons/hr.svg', angle: 0 },
  { id: 'marketing', name: 'Marketing', iconUrl: '/icons/hr.svg', angle: 27.7 },
  { id: 'library', name: 'Library', iconUrl: '/icons/hr.svg', angle: 55.4 },
  { id: 'transit', name: 'Transit', iconUrl: '/icons/hr.svg', angle: 83.1 },
  { id: 'it', name: 'IT', iconUrl: '/icons/hr.svg', angle: 110.8 },
  { id: 'finance', name: 'Finance', iconUrl: '/icons/hr.svg', angle: 138.5 },
  { id: 'teacher', name: 'Teacher', iconUrl: '/icons/hr.svg', angle: 166.2 },
  { id: 'student', name: 'Student', iconUrl: '/icons/hr.svg', angle: 193.8 },
  { id: 'parent', name: 'Parent', iconUrl: '/icons/hr.svg', angle: 221.5 },
  { id: 'visitor', name: 'Visitor Management', iconUrl: '/icons/hr.svg', angle: 249.2 },
  { id: 'admission', name: 'Admission', iconUrl: '/icons/hr.svg', angle: 276.9 },
  { id: 'campus', name: 'Campus Management', iconUrl: '/icons/hr.svg', angle: 304.6 },
  { id: 'institution', name: 'Institution Management', iconUrl: '/icons/hr.svg', angle: 332.3 },
]

const EcosystemCircleCustomIcons = () => {
  const handleModuleClick = (moduleId: string, moduleName: string) => {
    console.log(`Clicked: ${moduleName}`)
  }

  const handleCenterClick = () => {
    console.log('Clicked: KeyEd Ecosystem')
  }

  // Inner circle diameter = 70% of container → radius = 35%
  const innerCirclePercent = 82
  const orbitRadius = innerCirclePercent / 1.9

  return (
    <section className="flex items-center justify-center bg-[#F1F1F1] py-20">
      <div className="w-[850px] mx-auto px-4">
        <div className="relative w-full max-w-4xl mx-auto aspect-square">

          {/* Outer Circle Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute inset-0 rounded-full border-[1.5px] border-gray-300"
            style={{ zIndex: 1 }}
          />

          {/* Inner Circle Border — icons sit on this */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-gray-300"
            style={{ width: `${innerCirclePercent}%`, height: `${innerCirclePercent}%`, zIndex: 2 }}
          />

          {/* Center Circle */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
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
            onClick={handleCenterClick}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-56 md:h-56 rounded-full bg-[#008081] text-white flex flex-col items-center justify-center shadow-2xl transition-shadow duration-300 cursor-pointer"
            style={{ zIndex: 5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-1">KeyEd</h2>
            <p className="text-lg md:text-xl font-semibold">Ecosystem</p>
          </motion.button>
            <div>
          {/* Module Icons — fly inward from outside along their radial axis */}
          {modules.map((module, index) => {
            const angleRad = module.angle * (Math.PI / 180)
            // Final position: on the inner circle border
            const x = 50 + orbitRadius * Math.cos(angleRad)
            const y = 50 + orbitRadius * Math.sin(angleRad)

            // Start position: pushed outward along the same angle
            const startRadius = orbitRadius + 20
            const startX = 50 + startRadius * Math.cos(angleRad)
            const startY = 50 + startRadius * Math.sin(angleRad)

            return (
              <motion.button
                key={module.id}
                initial={{
                  opacity: 0,
                  left: `${startX}%`,
                  top: `${startY}%`,
                  scale: 0.4,
                }}
                animate={{
                  opacity: 1,
                  left: `${x}%`,
                  top: `${y}%`,
                  scale: 1,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.5 + index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.15,
                  boxShadow: '0 8px 25px rgba(0, 128, 129, 0.35)',
                }}
                whileTap={{ scale: 0.92 }}
                onClick={() => handleModuleClick(module.id, module.name)}
                style={{
                  position: 'absolute',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10,
                }}
                className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#008081] text-white flex flex-col items-center justify-center shadow-lg transition-colors duration-300 cursor-pointer group hover:bg-[#006e6f]"
              >
                {/* Icon */}
                <div className="mb-1 w-7 h-7 md:w-8 md:h-8 bg-white rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {module.iconUrl ? (
                    <img
                      src={module.iconUrl}
                      alt={module.name}
                      className="w-5 h-5 md:w-6 md:h-6 object-contain"
                    />
                  ) : (
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-200 rounded" />
                  )}
                </div>

                {/* Label */}
                <span className="text-[10px] md:text-[10px] font-semibold text-center px-1 leading-tight">
                  {module.name}
                </span>
              </motion.button>
            )
          })}
            </div>
        </div>
      </div>
    </section>
  )
}

export default EcosystemCircleCustomIcons