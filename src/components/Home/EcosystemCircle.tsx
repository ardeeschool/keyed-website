'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Megaphone, 
  BookOpen, 
  Bus, 
  Monitor, 
  DollarSign, 
  GraduationCap,
  UserCheck,
  UsersRound,
  ClipboardCheck,
  Building2,
  School,
  Briefcase
} from 'lucide-react'

interface Module {
  id: string
  name: string
  icon: React.ReactNode
  angle: number
}

const modules: Module[] = [
  { id: 'hr', name: 'HR', icon: <Briefcase className="w-8 h-8" />, angle: 0 },
  { id: 'marketing', name: 'Marketing', icon: <Megaphone className="w-8 h-8" />, angle: 27.7 },
  { id: 'library', name: 'Library', icon: <BookOpen className="w-8 h-8" />, angle: 55.4 },
  { id: 'transit', name: 'Transit', icon: <Bus className="w-8 h-8" />, angle: 83.1 },
  { id: 'it', name: 'IT', icon: <Monitor className="w-8 h-8" />, angle: 110.8 },
  { id: 'finance', name: 'Finance', icon: <DollarSign className="w-8 h-8" />, angle: 138.5 },
  { id: 'teacher', name: 'Teacher', icon: <Users className="w-8 h-8" />, angle: 166.2 },
  { id: 'student', name: 'Student', icon: <GraduationCap className="w-8 h-8" />, angle: 193.8 },
  { id: 'parent', name: 'Parent', icon: <UsersRound className="w-8 h-8" />, angle: 221.5 },
  { id: 'visitor', name: 'Visitor Management', icon: <ClipboardCheck className="w-8 h-8" />, angle: 249.2 },
  { id: 'admission', name: 'Admission', icon: <UserCheck className="w-8 h-8" />, angle: 276.9 },
  { id: 'campus', name: 'Campus Management', icon: <School className="w-8 h-8" />, angle: 304.6 },
  { id: 'institution', name: 'Institution Management', icon: <Building2 className="w-8 h-8" />, angle: 332.3 },
]

const EcosystemCircle = () => {
  const handleModuleClick = (moduleId: string, moduleName: string) => {
    console.log(`Clicked: ${moduleName}`)
    // Add your click handler logic here
  }

  const handleCenterClick = () => {
    console.log('Clicked: KeyEd Ecosystem')
    // Add your center click handler logic here
  }

  return (
   <section className="min-h-screen flex items-center justify-center bg-[#F1F1F1] py-20">
      <div className="container mx-auto px-4">
        <div className="relative w-full max-w-4xl mx-auto aspect-square">
          {/* Outer Circle Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 rounded-full border-2 border-gray-200"
          />

          {/* Center Circle */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCenterClick}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#17a2b8] text-white flex flex-col items-center justify-center shadow-2xl hover:shadow-3xl transition-shadow duration-300 cursor-pointer z-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">KeyEd</h2>
            <p className="text-xl md:text-2xl font-semibold">Ecosystem</p>
          </motion.button>

          {/* Module Circles */}
          {modules.map((module, index) => {
            const radius = 45 // Percentage from center
            const angle = module.angle * (Math.PI / 180)
            const x = 50 + radius * Math.cos(angle)
            const y = 50 + radius * Math.sin(angle)

            return (
              <motion.button
                key={module.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4 + index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.15,
                  boxShadow: "0 10px 30px rgba(23, 162, 184, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleModuleClick(module.id, module.name)}
                style={{
                  position: 'absolute',
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#008081] text-white flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                {/* Icon Placeholder */}
                <div className="mb-2 opacity-90 group-hover:opacity-100 transition-opacity">
                  {module.icon}
                </div>
                
                {/* Module Name */}
                <span className="text-xs md:text-sm font-semibold text-center px-2 leading-tight">
                  {module.name}
                </span>
              </motion.button>
            )
          })}

          {/* Connecting Lines Animation (Optional) */}


        </div>
      </div>
    </section>
  )
}

export default EcosystemCircle