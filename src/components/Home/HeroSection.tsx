'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  return (
      <section className="flex items-center justify-center md:p-32 lg:p-32 p-8 bg-[linear-gradient(102deg,_#698EA1_4.95%,_#142833_101.24%)]">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl md:text-6xl lg:text-8xl  font-arabic font-bold text-white md:leading-20 lg:leading-20 leading-10 tracking-tight mb-6"
          >
            <span>One Platform. One Login.</span>
       
            <span className='block'>One Source of Truth.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-md md:text-2xl text-white mb-8 font-medium font-montserrat"
          >
            Run your entire school on a single Ecosystem.
          </motion.p>

          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mb-6"
          >
            <p className="text-3xl md:text-4xl font-normal  font-arabic text-white">
              RunOnKeyEd
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#000000] text-[#172C37] font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl hover:text-white"
            href="">
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
