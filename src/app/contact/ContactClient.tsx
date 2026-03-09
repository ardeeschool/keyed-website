'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Building2, Mail, Phone, CheckCircle2, AlertCircle } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'



interface FormData {
  fullName: string
  emailId: string
  mobileNumber: string
  schoolOrganization: string
  city: string
  website: string
  message: string
}

interface FormErrors {
  fullName?: string
  emailId?: string
  mobileNumber?: string
  schoolOrganization?: string
  city?: string
  message?: string
}

const contactInfo = [
  {
    icon: Building2,
    iconBg: 'bg-[#C1E2CC]',
    title: 'Head Office',
    description: '123 Education Street, Delhi, 12345, India',
  },
  {
    icon: Mail,
    iconBg: 'bg-[#F0BF9F]',
    title: 'Email Address',
    description: 'hello@keyed.com\nsupport@nkeyed.com',
  },
  {
    icon: Phone,
    iconBg: 'bg-[#B6B7E0]',
    title: 'Contact',
    description: '+1 (234) 567-890\n+1 (234) 567-891',
  },
]

const initialFormData: FormData = {
  fullName: '',
  emailId: '',
  mobileNumber: '',
  schoolOrganization: '',
  city: '',
  website: '',
  message: '',
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters'
    }

    if (!formData.emailId.trim()) {
      newErrors.emailId = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailId)) {
      newErrors.emailId = 'Enter a valid email address'
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required'
    } else if (!/^[\+]?[\d\s\-\(\)]{8,15}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Enter a valid mobile number'
    }

    if (!formData.schoolOrganization.trim()) {
      newErrors.schoolOrganization = 'School/Organization is required'
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    try {
      // Replace with your API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData(initialFormData)
      setErrors({})
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main>
        <Header />

      {/* ── Hero Section ── */}
      <section
        className="relative py-8 lg:py-32 flex items-center justify-center text-center overflow-hidden"
        style={{
          background: 'linear-gradient(102deg, #698EA1 4.95%, #142833 101.24%)',
        }}
      >
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl px-6"
        >
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-2 lg:mb-6 leading-tight font-arabic">
            Contact KeyEd
          </h1>
          <p className="text-sm md:text-lg text-white/80 leading-relaxed">
            Contact KeyEd Ecosystem to book a live demo of our AI-powered school Ecosystem.
            Request pricing, speak with sales, or get product support via phone, WhatsApp, or email.
          </p>
        </motion.div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4 lg:px-30">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8 items-start">

            {/* ── Left: Get In Touch ── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 bg-[#F6F7F7] rounded-lg md:rounded-2xl border border-primary p-6 md:p-8 shadow-sm min-h-full"
            >
              <h2 className="text-2xl lg:text-4xl font-bold text-black mb-3 text-center">
                Get In Touch
              </h2>
              <p className="text-black text-sm mb-2 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <div className="w-20 h-[3px] bg-secondary rounded-full mx-auto md:mt-4 mb-8 mt-6"></div>

              <div className="space-y-6 md:space-y-14">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div
                        className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 ${item.iconBg} rounded-full flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-0 text-sm md:text-lg">{item.title}</h4>
                        <p className="text-xs md:text-sm text-black leading-relaxed whitespace-pre-line">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* ── Right: Form ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3 rounded-lg md:rounded-2xl overflow-hidden shadow-lg"
              style={{ background: 'linear-gradient(319deg, #243C48 1.86%, #698EA1 106.62%)' }}
            >
              <form onSubmit={handleSubmit} noValidate className="p-6 lg:p-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <FormField
                    label="Full Name*"
                    name="fullName"
                    type="text"
                    placeholder="Full Name"
                    value={formData.fullName}
                    error={errors.fullName}
                    onChange={handleChange}
                  />

                  {/* Email ID */}
                  <FormField
                    label="Email ID*"
                    name="emailId"
                    type="email"
                    placeholder="Email ID"
                    value={formData.emailId}
                    error={errors.emailId}
                    onChange={handleChange}
                  />

                  {/* Mobile Number */}
                  <FormField
                    label="Mobile Number*"
                    name="mobileNumber"
                    type="tel"
                    placeholder="Mobile Number"
                    value={formData.mobileNumber}
                    error={errors.mobileNumber}
                    onChange={handleChange}
                  />

                  {/* School/Organization */}
                  <FormField
                    label="School/organization*"
                    name="schoolOrganization"
                    type="text"
                    placeholder="School/organization"
                    value={formData.schoolOrganization}
                    error={errors.schoolOrganization}
                    onChange={handleChange}
                  />

                  {/* City */}
                  <FormField
                    label="City"
                    name="city"
                    type="text"
                    placeholder="City"
                    value={formData.city}
                    error={errors.city}
                    onChange={handleChange}
                  />

                  {/* Website */}
                  <FormField
                    label="Website"
                    name="website"
                    type="url"
                    placeholder="Website"
                    value={formData.website}
                    onChange={handleChange}
                  />

                  {/* Message - Full Width */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-white/90 mb-1.5">
                      Your Message*
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows={4}
                      className={`w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-400 rounded-lg text-sm outline-none transition-all resize-none
                        ${errors.message
                          ? 'ring-2 ring-red-400'
                          : 'focus:ring-2 focus:ring-secondary/60'
                        }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Captcha Placeholder */}
                <div className="mt-5 flex justify-end">
                  <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-lg px-4 py-3">
                    <div className="w-5 h-5 border-2 border-white/50 rounded" />
                    <span className="text-sm text-white/80">I'm not a robot</span>
                    <div className="w-8 h-8 opacity-60">
                      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32 8C18.7 8 8 18.7 8 32s10.7 24 24 24 24-10.7 24-24S45.3 8 32 8z" fill="#4A90D9" opacity="0.8"/>
                        <path d="M32 16l4 8h-8l4-8z" fill="white"/>
                        <path d="M32 48l-4-8h8l-4 8z" fill="white"/>
                        <path d="M16 32l8-4v8l-8-4z" fill="white"/>
                        <path d="M48 32l-8 4v-8l8 4z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="mt-5 w-full py-4 bg-secondary hover:bg-secondary-dark text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-base"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"/>
                      </svg>
                      Submitting...
                    </span>
                  ) : 'Submit'}
                </motion.button>

                {/* Success / Error Message */}
                <AnimatePresence>
                  {submitStatus !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.4 }}
                      className={`mt-4 p-4 rounded-lg flex items-start gap-3 ${
                        submitStatus === 'success'
                          ? 'bg-green-500/20 border border-green-400/40'
                          : 'bg-red-500/20 border border-red-400/40'
                      }`}
                    >
                      {submitStatus === 'success' ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-green-300">
                              Message sent successfully!
                            </p>
                            <p className="text-xs text-green-400/80 mt-0.5">
                              Thank you for reaching out. Our team will get back to you within 24 hours.
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-red-300">
                              Something went wrong
                            </p>
                            <p className="text-xs text-red-400/80 mt-0.5">
                              Please try again or email us directly at hello@runonkeyed.com
                            </p>
                          </div>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
      <Footer />
      
    </main>
  )
}

// ── Reusable FormField ──
interface FormFieldProps {
  label: string
  name: string
  type: string
  placeholder: string
  value: string
  error?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function FormField({ label, name, type, placeholder, value, error, onChange }: FormFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-white/90 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-400 rounded-lg text-sm outline-none transition-all
          ${error
            ? 'ring-2 ring-red-400'
            : 'focus:ring-2 focus:ring-secondary/60'
          }`}
      />
      {error && (
        <p className="mt-1 text-xs text-red-300 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          {error}
        </p>
      )}
    </div>
  )
}