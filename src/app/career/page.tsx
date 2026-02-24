"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from '@/components/layout/Headertwo'


import Footertop from '@/components/layout/footertop'

import {
  Database,
  Monitor,
  Layers,
  Palette,
  Megaphone,
  Search,
  Smartphone,
  ClipboardList,
  Cloud,
  Upload,
  X,
  ChevronDown,
  Briefcase,
  MapPin,
  FileText,
} from "lucide-react";

// ── Job data ──────────────────────────────────────────────
const jobs = [
  {
    Icon: Database,
    step: "Role 1",
    title: "Backend Developer",
    desc: "Build scalable APIs, manage databases, and architect server-side logic powering the KeyEd platform.",
    skills: ["MySQL", "Python", "PostgreSQL", "AI/ML", "Django"],
  },
  {
    Icon: Monitor,
    step: "Role 2",
    title: "Frontend Developer",
    desc: "Craft responsive, performant interfaces with modern frameworks delivering pixel-perfect user experiences.",
    skills: ["HTML/CSS", "React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    Icon: Layers,
    step: "Role 3",
    title: "Full Stack Developer",
    desc: "Own features end-to-end—from database schema to polished UI—across the entire KeyEd ecosystem.",
    skills: ["Python", "Node.js", "Next.js", "PostgreSQL", "MongoDB"],
  },
  {
    Icon: Palette,
    step: "Role 4",
    title: "Graphics & UI/UX Designer",
    desc: "Design intuitive interfaces, brand assets, and design systems that make complex workflows feel effortless.",
    skills: ["Figma", "Photoshop", "Adobe XD", "Prototyping", "Design Systems"],
  },
  {
    Icon: Megaphone,
    step: "Role 5",
    title: "Social Media Manager",
    desc: "Drive brand awareness and engagement through strategic campaigns across all social platforms.",
    skills: ["Social Media Marketing", "Google Ads", "SMO", "Content Strategy"],
  },
  {
    Icon: Search,
    step: "Role 6",
    title: "SEO Expert",
    desc: "Optimize organic visibility, drive qualified traffic, and build data-driven search strategies.",
    skills: ["PPC", "Google Analytics", "Web Analytics", "Technical SEO"],
  },
  {
    Icon: Smartphone,
    step: "Role 7",
    title: "Flutter Developer",
    desc: "Build cross-platform mobile applications with fluid animations and native-level performance.",
    skills: ["Dart", "Flutter", "Git", "Bitbucket", "REST APIs"],
  },
  {
    Icon: ClipboardList,
    step: "Role 8",
    title: "Project Manager",
    desc: "Lead cross-functional teams, manage timelines, and ensure seamless delivery of product milestones.",
    skills: ["Team Leadership", "Agile/Scrum", "Problem Solving", "Stakeholder Mgmt"],
  },
  {
    Icon: Cloud,
    step: "Role 9",
    title: "DevOps Engineer",
    desc: "Architect CI/CD pipelines, manage cloud infrastructure, and ensure 99.9% uptime across all services.",
    skills: ["AWS", "CI/CD", "GitLab", "Jenkins", "Docker"],
  },
];

// ── Card styles ───────────────────────────────────────────
const cardStyle = {
  backgroundColor: "#f5f5f5",
  boxShadow:
    "0px 7.77px 16px 0px rgba(0,0,0,0.059), 0px 3px 3px 0px rgba(0,0,0,0.102), 0px -8px 0px 0px rgba(0,0,0,0.051) inset, 0px 4px 0px 0px rgba(255,255,255,0.6) inset",
};

const iconBoxStyle = {
  backgroundColor: "#272727",
  boxShadow:
    "0px -3px 0px 0px #080808 inset, 0px 1px 0px 0px rgba(255,255,255,0.302) inset, 0px 2.77px 2.21px 0px rgba(0,0,0,0.122), 0px 3px 3px 0px rgba(0,0,0,0.141), 0px 12.52px 10.02px 0px rgba(0,0,0,0.133)",
};

// ── Experience options ────────────────────────────────────
const experienceOptions = [
  "Fresher",
  "1–2 years",
  "2–3 years",
  "3–4 years",
  "4–5 years",
  "5–6 years",
  "6–7 years",
  "7–8 years",
  "8+ years",
];

const profileOptions = [
  "Cloud Architect",
  "UI/UX Designer",
  "Front End Developer",
  "Back End Developer",
  "Full Stack Developer",
  "Data Engineer",
  "DevOps Engineer",
  "Mobile Developer",
];

// ── Job Card ──────────────────────────────────────────────
function JobCard({
  Icon,
  step,
  title,
  desc,
  skills,
  index,
}: (typeof jobs)[0] & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="rounded-3xl p-8 flex flex-col"
      style={cardStyle}
    >
      {/* Top row: Step + Icon */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-[#9ca3af] font-medium font-interTight">
          {step}
        </span>
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={iconBoxStyle}
        >
          <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
        </div>
      </div>

      {/* Title */}
      <h3 className="font-interTight text-xl font-bold text-[#1a1a1c] mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#6b7a8d] leading-relaxed mb-5">{desc}</p>

      {/* Skills */}
      <div className="mt-auto flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs font-medium text-[#4a4a4c] px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// ── Custom Select ─────────────────────────────────────────
function CustomSelect({
  value,
  onChange,
  options,
  placeholder,
  error,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
  error?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`shadow-[inset_4px_4px_10px_#c8d0e0,inset_-4px_-4px_10px_#ffffff]  w-full text-left px-5 py-4 rounded-2xl text-base transition-all cursor-pointer outline-none ${
          error
            ? "ring-2 ring-red-400/50"
            : "focus:ring-2 focus:ring-white/20"
        }`}
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: value ? "#fff" : "#000",
        }}
      >
        <span>{value || placeholder}</span>
        <ChevronDown
          className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5"
          style={{ color: "rgba(255,255,255,0.3)" }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-2 rounded-2xl overflow-hidden"
            style={{
              background: "#1c1c1f",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              maxHeight: 280,
              overflowY: "auto",
            }}
          >
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className="w-full text-left px-5 py-3 text-sm transition-colors cursor-pointer"
                style={{
                  color:
                    value === opt
                      ? "#fff"
                      : "#000",
                  background:
                    value === opt
                      ? "rgba(255,255,255,0.08)"
                      : "transparent",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(255,255,255,0.06)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    value === opt
                      ? "rgba(255,255,255,0.08)"
                      : "transparent")
                }
              >
                {opt}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <p className="text-red-400 text-xs mt-1.5 ml-1">{error}</p>
      )}
    </div>
  );
}

// ── Form Input ────────────────────────────────────────────
function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  ...props
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  [key: string]: any;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-black mb-2 ml-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`shadow-[inset_4px_4px_10px_#c8d0e0,inset_-4px_-4px_10px_#ffffff]  w-full px-5 py-4 rounded-2xl text-base text-black placeholder-black/35 outline-none transition-all ${
          error
            ? "ring-2 ring-red-400/50"
            : "focus:ring-2 focus:ring-white/20"
        }`}
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
        {...props}
      />
      {error && (
        <p className="text-red-400 text-xs mt-1.5 ml-1">{error}</p>
      )}
    </div>
  );
}

// ── Application Form ──────────────────────────────────────
function ApplicationForm() {
  const [form, setForm] = useState({
    profile: "",
    profileName: "",
    fullName: "",
    email: "",
    mobile: "",
    experience: "",
    dob: "",
    city: "",
    address: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [field]: e.target.value }));

  function validate() {
    const err: Record<string, string> = {};

    if (!form.profile) err.profile = "Please select a profile";
    if (!form.profileName.trim()) err.profileName = "Profile name is required";
    if (!form.fullName.trim()) err.fullName = "Full name is required";

    if (!form.email.trim()) err.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = "Enter a valid email address";

    if (!form.mobile.trim()) err.mobile = "Mobile number is required";
    else if (!/^[+]?[\d\s\-()]{7,15}$/.test(form.mobile))
      err.mobile = "Enter a valid mobile number";

    if (!form.experience) err.experience = "Select your experience level";
    if (!form.dob) err.dob = "Date of birth is required";
    if (!form.city.trim()) err.city = "City is required";
    if (!form.address.trim()) err.address = "Address is required";

    if (!file) err.file = "Please upload your CV";
    else {
      const ext = file.name.split(".").pop()?.toLowerCase();
      const allowed = ["txt", "doc", "docx", "pdf"];
      if (!ext || !allowed.includes(ext))
        err.file = "Only .txt, .doc, .docx, .pdf files allowed";
      else if (file.size > 5 * 1024 * 1024) err.file = "File must be under 5MB";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) setFile(f);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20"
      >
        <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
          <Briefcase className="w-9 h-9 text-white" />
        </div>
        <h3 className="font-interTight text-3xl font-bold text-white mb-3">
          Application Submitted
        </h3>
        <p className="text-gray-400 text-lg max-w-md mx-auto">
          Thank you for your interest in joining KeyEd. We&apos;ll review your
          application and get back to you soon.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex items-center gap-3 mb-10">
        <FileText className="w-6 h-6 text-gray-400" />
        <p className="text-lg text-black-300 font-medium">
          Please fill in the following details to apply
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Select Profile */}
        <div>
          <label className="block text-sm font-medium text-black mb-2 ml-1">
            Select Profile
          </label>
          <CustomSelect
            value={form.profile}
            onChange={(v) => setForm((p) => ({ ...p, profile: v }))}
            options={profileOptions}
            placeholder="Choose a role"
            error={errors.profile}
          />
        </div>

        <FormInput
          label="Profile Name"
          name="profileName"
          placeholder="e.g. john_doe"
          value={form.profileName}
          onChange={set("profileName")}
          error={errors.profileName}
        />
        <FormInput
          label="Full Name"
          name="fullName"
          placeholder="John Doe"
          value={form.fullName}
          onChange={set("fullName")}
          error={errors.fullName}
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="john@example.com"
          value={form.email}
          onChange={set("email")}
          error={errors.email}
        />
        <FormInput
          label="Mobile Number"
          name="mobile"
          type="tel"
          placeholder="+91 98765 43210"
          value={form.mobile}
          onChange={set("mobile")}
          error={errors.mobile}
        />

        {/* Experience */}
        <div>
          <label className="block text-sm font-medium text-black mb-2 ml-1">
            Experience
          </label>
          <CustomSelect
            value={form.experience}
            onChange={(v) => setForm((p) => ({ ...p, experience: v }))}
            options={experienceOptions}
            placeholder="Select experience"
            error={errors.experience}
          />
        </div>

        {/* DOB */}
        <FormInput
          label="Date of Birth"
          name="dob"
          type="date"
          placeholder=""
          value={form.dob}
          onChange={set("dob")}
          error={errors.dob}
        />

        <FormInput
          label="City"
          name="city"
          placeholder="e.g. New Delhi"
          value={form.city}
          onChange={set("city")}
          error={errors.city}
        />

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-black mb-2 ml-1">
            Upload CV
          </label>
          <input
            ref={fileRef}
            type="file"
            accept=".txt,.doc,.docx,.pdf"
            onChange={handleFile}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className={`w-full shadow-[inset_4px_4px_10px_#c8d0e0,inset_-4px_-4px_10px_#ffffff] px-5 py-4 rounded-2xl text-left text-base transition-all cursor-pointer outline-none ${
              errors.file
                ? "ring-2 ring-red-400/50"
                : "focus:ring-2 focus:ring-white/20"
            }`}
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: file ? "#000" : "#000",
            }}
          >
            {file ? (
              <span className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  <span className="truncate max-w-[200px]">{file.name}</span>
                  <span className="text-xs text-gray-500">
                    ({(file.size / 1024 / 1024).toFixed(1)}MB)
                  </span>
                </span>
                <X
                  className="w-4 h-4 text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFile(null);
                    if (fileRef.current) fileRef.current.value = "";
                  }}
                />
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Upload className="w-4 h-4" />
                .pdf, .doc, .docx, .txt (max 5MB)
              </span>
            )}
          </button>
          {errors.file && (
            <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.file}</p>
          )}
        </div>
      </div>

      {/* Address — full width */}
      <div className="mt-5">
        <label className="block text-sm font-medium text-black mb-2 ml-1">
          Address
        </label>
        <input
          type="text"
          placeholder="Full address"
          value={form.address}
          onChange={set("address")}
          className={`shadow-[inset_4px_4px_10px_#c8d0e0,inset_-4px_-4px_10px_#ffffff] w-full px-5 py-4 rounded-2xl text-base text-black placeholder-black/35 outline-none transition-all ${
            errors.address
              ? "ring-2 ring-red-400/50"
              : "focus:ring-2 focus:ring-white/20"
          }`}
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            
          }}
        />
        {errors.address && (
          <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.address}</p>
        )}
      </div>

      {/* Message — full width */}
      <div className="mt-5">
        <label className="block text-sm font-medium text-black mb-2 ml-1">
          Message (Optional)
        </label>
        <textarea
          rows={4}
          placeholder="Tell us why you'd be a great fit..."
          value={form.message}
          onChange={(e) =>
            setForm((p) => ({ ...p, message: e.target.value }))
          }
          className="shadow-[inset_4px_4px_10px_#c8d0e0,inset_-4px_-4px_10px_#ffffff]  w-full px-5 py-4 rounded-2xl text-base text-white placeholder-black/35 outline-none transition-all focus:ring-2 focus:ring-white/20 resize-none"
          style={{
            background: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        />
      </div>

      {/* Submit */}
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="mt-8 w-full py-4 rounded-2xl text-base font-semibold cursor-pointer transition-all"
        style={{
          background:
            "radial-gradient(62.56% 62.56% at 28.14% -10.42%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%), linear-gradient(0deg, #000000, #000000)",
          color: "#fff",
          boxShadow:
            "0px -3px 0px 0px #080808 inset, 0px 1px 0px 0px rgba(255,255,255,0.302) inset, 0px 2.77px 2.21px 0px rgba(0,0,0,0.122), 0px 6.65px 5.32px 0px rgba(0,0,0,0.129), 0px 12.52px 10.02px 0px rgba(0,0,0,0.133)",
        }}
      >
        Submit Application
      </motion.button>
    </form>
  );
}

// ── Main Career Page ──────────────────────────────────────
export default function Career() {
  return (
    <main>
     <Header />
      {/* ═══════════════════════════════════════════════
       *  HERO
       * ═══════════════════════════════════════════════ */}
      <section className="bg-white pt-20 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full mb-8"
              style={{
                background: "rgba(0,0,0,0.04)",
                color: "#6b7a8d",
              }}
            >
              <Briefcase className="w-4 h-4" />
              We&apos;re Hiring
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-interTight text-5xl lg:text-7xl font-medium text-[#1a1a1c] leading-[1.1] mb-6"
          >
            Career
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-[#6b7a8d] max-w-2xl mx-auto leading-relaxed"
          >
            KeyEd is looking for the next generation of talent to join its team.
            If you are passionate about your work, check out our opportunities.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
       *  CURRENT OPENINGS
       * ═══════════════════════════════════════════════ */}
      <section className="bg-[#EDECEC] py-24 px-6 hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-interTight text-4xl lg:text-5xl font-extrabold text-[#1a1a1c] leading-tight mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-[#6b7a8d] max-w-xl mx-auto">
              Find the role that matches your skills and passion.
            </p>
          </motion.div>

          {/* ── 3-column grid for 9 cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, i) => (
              <JobCard key={job.title} {...job} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
       *  APPLICATION FORM
       * ═══════════════════════════════════════════════ */}
      <section
        className="py-24 px-6 mb-20 w-6xl mx-auto mt-20 rounded-2xl relative bg-primary"
      >
        <div className="light-box"></div>
        <img className="light-top absolute top-0 w-md left-1/3" src="/light-top.png" alt=""></img>
        <img className="light-top absolute bottom-0 w-md left-1/3" src="/light-bot.png" alt=""></img>
        <div className="max-w-5xl mx-auto relative z-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full mb-6 text-white"
              style={{
                background: "rgba(255,255,255,0.06)",
              }}
            >
              <MapPin className="w-4 h-4" />
              Remote & On-site
            </span>
            <h2 className="font-interTight text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Apply Now
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              Take the first step towards an exciting career with KeyEd.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl p-8 lg:p-12 bg-[#eff0f3]"
            style={{
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <ApplicationForm />
          </motion.div>
        </div>
     </section>
       
              <Footertop />
      
            
          </main>

  );
}