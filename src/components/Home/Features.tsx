'use client'

import { motion } from 'framer-motion'
import {
  Check,
  BookOpen,
  Users,
  ClipboardList,
  Bell,
  TrendingUp,
  CreditCard,
  PieChart,
  GraduationCap,
  Award,
} from 'lucide-react'

interface Section {
  number: string
  title: string
  subtitle: string
  bullets: string[]
  mockup: React.ReactNode
  accent: string
}

// ── Mockups ───────────────────────────────────────────────
const AcademicMockup = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <div className="absolute right-0 top-8 bottom-8 w-3/4 rounded-3xl bg-secondary" />
    <div className="relative z-10 bg-white rounded-2xl shadow-xl p-5 w-72 ml-[-40px]">
      <p className="text-xs text-gray-400 font-medium mb-3">Today's Schedule</p>
      <div className="space-y-3">
        {[
          { time: '8:00 AM', subject: 'Mathematics', room: 'Room 201', color: 'bg-blue-100 text-blue-600' },
          { time: '10:00 AM', subject: 'Science Lab', room: 'Lab 3', color: 'bg-green-100 text-green-600' },
          { time: '1:00 PM', subject: 'English Lit', room: 'Room 105', color: 'bg-purple-100 text-purple-600' },
        ].map((item) => (
          <div key={item.subject} className="flex items-center gap-3 p-2 rounded-xl bg-gray-50">
            <span className={`text-xs font-semibold px-2 py-1 rounded-lg ${item.color}`}>{item.time}</span>
            <div>
              <p className="text-sm font-semibold text-gray-800">{item.subject}</p>
              <p className="text-xs text-gray-400">{item.room}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 p-3 bg-secondary/10 rounded-xl">
        <GraduationCap className="w-5 h-5 text-secondary" />
        <div>
          <p className="text-xs font-semibold text-gray-700">Class Average</p>
          <p className="text-sm font-bold text-secondary">84.2%</p>
        </div>
      </div>
    </div>
    <div className="absolute bottom-12 right-4 z-20 bg-[#1a2540] rounded-xl shadow-lg p-3 flex items-center gap-2">
      <Award className="w-5 h-5 text-secondary" />
      <div>
        <p className="text-xs text-gray-300">Top Performer</p>
        <p className="text-sm font-bold text-white">Grade 10-A</p>
      </div>
    </div>
  </div>
)

const OperationsMockup = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <div className="absolute right-0 top-8 bottom-8 w-3/4 rounded-3xl bg-secondary" />
    <div className="relative z-10 bg-white rounded-2xl shadow-xl p-5 w-72 ml-[-40px]">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs text-gray-400 font-medium">Staff Overview</p>
        <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-medium">Live</span>
      </div>
      <div className="space-y-3">
        {[
          { name: 'Teaching Staff', count: 48, present: 45, icon: BookOpen },
          { name: 'Admin Staff', count: 12, present: 12, icon: ClipboardList },
          { name: 'Support Staff', count: 20, present: 18, icon: Users },
        ].map((item) => {
          const Icon = item.icon
          const pct = Math.round((item.present / item.count) * 100)
          return (
            <div key={item.name} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-secondary" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <p className="text-xs font-semibold text-gray-700">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.present}/{item.count}</p>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full" style={{ width: `${pct}%` }} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    <div className="absolute bottom-12 right-4 z-20 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
      <div className="flex items-center gap-2">
        <Bell className="w-4 h-4 text-secondary" />
        <p className="text-xs font-semibold text-gray-700">3 leave requests pending</p>
      </div>
    </div>
  </div>
)

const FinanceMockup = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <div className="absolute right-0 top-8 bottom-8 w-3/4 rounded-3xl bg-secondary" />
    <div className="relative z-10 bg-white rounded-2xl shadow-xl p-5 w-72 ml-[-40px]">
      <p className="text-xs text-gray-400 font-medium mb-1">Fee Collection</p>
      <p className="text-2xl font-bold text-gray-800 mb-4">$128,400</p>
      <div className="flex gap-2 mb-4">
        {['Jan','Feb','Mar','Apr','May','Jun'].map((m, i) => (
          <div key={m} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full rounded-t-md bg-secondary/20" style={{ height: `${[60,75,50,90,70,85][i]}px` }}>
              <div className="w-full rounded-t-md bg-secondary" style={{ height: `${[80,90,65,100,75,95][i]}%` }} />
            </div>
            <p className="text-[10px] text-gray-400">{m}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-green-50 rounded-xl p-3">
          <p className="text-[10px] text-gray-400">Collected</p>
          <p className="text-sm font-bold text-green-600">92%</p>
        </div>
        <div className="bg-red-50 rounded-xl p-3">
          <p className="text-[10px] text-gray-400">Pending</p>
          <p className="text-sm font-bold text-red-500">8%</p>
        </div>
      </div>
    </div>
    <div className="absolute bottom-12 right-4 z-20 bg-[#1a2540] rounded-xl shadow-lg p-3 flex items-center gap-2">
      <CreditCard className="w-4 h-4 text-secondary" />
      <p className="text-xs text-white font-medium">Auto-reminders sent</p>
    </div>
  </div>
)

const AnalyticsMockup = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <div className="absolute right-0 top-8 bottom-8 w-3/4 rounded-3xl bg-secondary" />
    <div className="relative z-10 bg-white rounded-2xl shadow-xl p-5 w-72 ml-[-40px]">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs text-gray-400 font-medium">KeyEd Score</p>
        <TrendingUp className="w-4 h-4 text-green-500" />
      </div>
      <div className="text-center mb-5">
        <p className="text-5xl font-bold text-secondary">94</p>
        <p className="text-xs text-green-500 font-medium mt-1">↑ +2.4% this term</p>
      </div>
      <div className="space-y-3">
        {[
          { label: 'Academic Excellence', value: 88 },
          { label: 'Operational Efficiency', value: 92 },
          { label: 'Financial Stability', value: 76 },
          { label: 'Engagement Index', value: 81 },
        ].map((item) => (
          <div key={item.label}>
            <div className="flex justify-between mb-1">
              <p className="text-xs text-gray-500">{item.label}</p>
              <p className="text-xs font-bold text-gray-700">{item.value}</p>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.value}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-full bg-secondary rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="absolute bottom-12 right-4 z-20 bg-white rounded-xl shadow-lg p-3 border border-gray-100 flex items-center gap-2">
      <PieChart className="w-4 h-4 text-secondary" />
      <p className="text-xs font-semibold text-gray-700">AI-powered insights</p>
    </div>
  </div>
)

const AdmissionsMockup = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <div className="absolute right-0 top-8 bottom-8 w-3/4 rounded-3xl bg-secondary" />
    <div className="relative z-10 bg-white rounded-2xl shadow-xl p-5 w-72 ml-[-40px]">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs text-gray-400 font-medium">Admissions Funnel</p>
        <span className="text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded-full font-medium">Live</span>
      </div>
      {/* Funnel stages */}
      <div className="space-y-2 mb-4">
        {[
          { stage: 'Inquiries', count: 340, pct: 100, color: 'bg-secondary' },
          { stage: 'Applications', count: 210, pct: 62, color: 'bg-secondary/80' },
          { stage: 'Shortlisted', count: 98, pct: 40, color: 'bg-secondary/60' },
          { stage: 'Enrolled', count: 54, pct: 25, color: 'bg-secondary/40' },
        ].map((item) => (
          <div key={item.stage}>
            <div className="flex justify-between mb-1">
              <p className="text-xs text-gray-500">{item.stage}</p>
              <p className="text-xs font-bold text-gray-700">{item.count}</p>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-secondary/10 rounded-xl p-3">
          <p className="text-[10px] text-gray-400">Conversion</p>
          <p className="text-sm font-bold text-secondary">15.9%</p>
        </div>
        <div className="bg-green-50 rounded-xl p-3">
          <p className="text-[10px] text-gray-400">vs Last Year</p>
          <p className="text-sm font-bold text-green-600">↑ +12%</p>
        </div>
      </div>
    </div>
    <div className="absolute bottom-12 right-4 z-20 bg-[#1a2540] rounded-xl shadow-lg p-3 flex items-center gap-2">
      <TrendingUp className="w-4 h-4 text-secondary" />
      <div>
        <p className="text-xs text-gray-300">New lead today</p>
        <p className="text-sm font-bold text-white">+8 inquiries</p>
      </div>
    </div>
  </div>
)

const PeopleMockup = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    <div className="absolute right-0 top-8 bottom-8 w-3/4 rounded-3xl bg-primary" />
    <div className="relative z-10 bg-white rounded-2xl shadow-xl p-5 w-72 ml-[-40px]">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs text-gray-400 font-medium">People Overview</p>
        <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-medium">Active</span>
      </div>
      {/* Staff cards */}
      <div className="space-y-3 mb-4">
        {[
          { name: 'Sarah Ahmed', role: 'Sr. Teacher', dept: 'Science', status: 'bg-green-400' },
          { name: 'James Wilson', role: 'HR Manager', dept: 'Admin', status: 'bg-green-400' },
          { name: 'Priya Nair', role: 'Counselor', dept: 'Student Affairs', status: 'bg-yellow-400' },
        ].map((person) => (
          <div key={person.name} className="flex items-center gap-3 p-2 rounded-xl bg-gray-50">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-primary">{person.name.charAt(0)}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-800 truncate">{person.name}</p>
              <p className="text-[10px] text-gray-400">{person.role} · {person.dept}</p>
            </div>
            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${person.status}`} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'Total Staff', value: '80' },
          { label: 'On Leave', value: '4' },
          { label: 'Open Roles', value: '3' },
        ].map((s) => (
          <div key={s.label} className="bg-gray-50 rounded-xl p-2 text-center">
            <p className="text-sm font-bold text-primary">{s.value}</p>
            <p className="text-[10px] text-gray-400 leading-tight">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="absolute bottom-12 right-4 z-20 bg-white rounded-xl shadow-lg p-3 border border-gray-100 flex items-center gap-2">
      <Users className="w-4 h-4 text-primary" />
      <p className="text-xs font-semibold text-gray-700">2 new hires this week</p>
    </div>
  </div>
)

const sections: Section[] = [
  {
    number: '01',
    title: 'Academic & Experience Layer',
    subtitle: 'Curriculum, assessments, teacher workflows, student performance and classroom intelligence.',
    bullets: ['Curriculum management', 'Track attendance, assignments, and grades', 'Assessment tracking', 'Performance analytics'],
    mockup: <AcademicMockup />,
    accent: 'bg-primary',
  },
  {
    number: '02',
    title: 'Campus Operations',
    subtitle: 'Campus operations, facilities, inventory, IT support, transport and security workflows.',
    bullets: ['Facilities management', 'Transport tracking', 'Security systems'],
    mockup: <OperationsMockup />,
    accent: 'bg-primary',
  },
  {
    number: '03',
    title: 'Admissions & Marketing Growth',
    subtitle: 'Lead management, admissions funnel, conversion tracking and enrollment forecasting.',
    bullets: ['Lead pipeline management', 'Conversion analytics', 'Enrollment forecasting'],
    mockup: <AdmissionsMockup />,
    accent: 'bg-primary',
  },
  {
    number: '04',
    title: 'AI & Analytics',
    subtitle: 'Real-time dashboards, predictive insights and institutional health analytics through AI.',
    bullets: ['Live dashboards', 'Predictive analytics', 'KeyEd Score™ tracking'],
    mockup: <AnalyticsMockup />,
    accent: 'bg-primary',
  },
  {
    number: '05',
    title: 'Finance & Compliance',
    subtitle: 'Fee management, collections, budgeting, expense tracking and financial visibility.',
    bullets: ['Fee collection automation', 'Budget management', 'Financial reporting'],
    mockup: <FinanceMockup />,
    accent: 'bg-primary',
  },
  {
    number: '06',
    title: 'People & Culture',
    subtitle: 'HR management, hiring workflows, attendance, performance and retention analytics.',
    bullets: ['HR management system', 'Performance tracking', 'Retention analytics'],
    mockup: <PeopleMockup />,
    accent: 'bg-primary',
  },
]

// ── Main Component ────────────────────────────────────────
// Zoho approach: each card IS the sticky element.
// No wrapper with fixed height. No JS scroll tracking.
// paddingBottom = scroll space before next card overlaps.
// z-index increments so each new card covers the previous.
export default function Features() {
  return (
    <section className="bg-[#fff3eb] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Everything Your Institution Runs On
            </h2>
            <div className="w-24 h-1 bg-secondary rounded-full mx-auto mb-4" />
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              One ecosystem covering academics, operations, finance, and intelligence.
            </p>
          </div>

          {/* Card stack */}
          <div>
            {sections.map((section, index) => (
              <div
                key={section.number}
                style={{
                  position: 'sticky',
                  top: '32px',
                  zIndex: index + 1,
                  paddingBottom: index === sections.length - 1 ? '0' : '30px',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">

                    {/* Left */}
                    <div className="flex flex-col justify-center px-10 lg:px-8 py-10">
                      <div className={`w-12 h-12 rounded-2xl ${section.accent} flex items-center justify-center mb-6`}>
                        <span className="text-sm font-bold text-white">{section.number}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                        {section.title}
                      </h2>
                      <p className="text-gray-500 text-sm mb-6">{section.subtitle}</p>
                      <div className="w-16 h-[2px] bg-secondary rounded-full mb-6" />
                      <ul className="space-y-3">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-secondary" strokeWidth={2.5} />
                            </div>
                            <span className="text-gray-600 text-sm leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right */}
                    <div className={`hidden lg:block relative ${section.accent} overflow-hidden`}>
                      {section.mockup}
                    </div>

                  </div>
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}