"use client";

import { useState, useRef } from "react";
import { Twitter, Facebook, Instagram, Paperclip, X, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState("");

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [field]: e.target.value }));

  function validate() {
    const err: Record<string, string> = {};

    if (!form.name.trim()) err.name = "Name is required";

    if (!form.email.trim()) err.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = "Enter a valid email address";

    if (form.phone && !/^[+]?[\d\s\-()]{7,15}$/.test(form.phone))
      err.phone = "Enter a valid phone number";

    if (!form.message.trim()) err.message = "Message is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setApiError("");

    if (!validate()) return;

    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
    } catch (err: any) {
      setApiError(err.message || "Failed to send. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const socials = [
    { label: "Twitter / X", icon: Twitter, href: "#" },
    { label: "Facebook", icon: Facebook, href: "#" },
    { label: "Instagram", icon: Instagram, href: "#" },
  ];

  return (
    <section className="px-6 py-10 md:px-12 mb-30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">

        {/* ── LEFT ── */}
        <div className="flex-1 flex flex-col justify-between min-h-[590px]">
          <div>
            <span className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1.5 text-sm font-medium text-gray-700 bg-[#e8e8e8] mb-8">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
              Contact
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold text-[#2a2a2a] leading-tight tracking-tight mb-6">
              Get in Touch<br />
            </h1>

            <p className="text-gray-500 text-base leading-relaxed max-w-md">
              Whether you&apos;re exploring KeyEd for the first time or ready to implement, we&apos;re here to help. Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-3 gap-3 mt-12 max-w-lg">
            {socials.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center justify-between bg-white rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow"
                style={{
                  boxShadow:
                    "0px 7.77px 16px 0px rgba(0,0,0,0.059), 0px 3px 3px 0px rgba(0,0,0,0.102), 0px -8px 0px 0px rgba(0,0,0,0.051) inset, 0px 4px 0px 0px rgba(255,255,255,0.6) inset",
                }}
              >
                <span className="font-semibold text-[#1a1a1a] text-sm">
                  {label}
                </span>
                <span className="w-9 h-9 bg-[#1a1a1a] rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                  <Icon className="text-white w-4 h-4" strokeWidth={2} />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* ── RIGHT — Form Card ── */}
        <div className="flex-1 bg-[#f0f0f0] rounded-3xl p-8 md:p-10 w-full">

          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-16">
              <div className="w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-5">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-500 text-sm max-w-xs">
                Thank you for reaching out. We&apos;ll get back to you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", phone: "", subject: "", message: "" });
                }}
                className="mt-6 text-sm font-semibold text-[#1a1a1a] underline underline-offset-4 hover:text-gray-600 transition-colors cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8">
                Fill this form below
              </h2>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={set("name")}
                    className={`w-full bg-transparent border-0 border-b outline-none py-2 text-sm text-gray-700 placeholder-gray-400 transition-colors ${
                      errors.name ? "border-red-400" : "border-gray-300 focus:border-gray-600"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                    Your Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={form.email}
                    onChange={set("email")}
                    className={`w-full bg-transparent border-0 border-b outline-none py-2 text-sm text-gray-700 placeholder-gray-400 transition-colors ${
                      errors.email ? "border-red-400" : "border-gray-300 focus:border-gray-600"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                    Your Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={form.phone}
                    onChange={set("phone")}
                    className={`w-full bg-transparent border-0 border-b outline-none py-2 text-sm text-gray-700 placeholder-gray-400 transition-colors ${
                      errors.phone ? "border-red-400" : "border-gray-300 focus:border-gray-600"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={set("subject")}
                    className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-gray-600 outline-none py-2 text-sm text-gray-700 placeholder-gray-400 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                    Your Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us how we can help..."
                    value={form.message}
                    onChange={set("message")}
                    className={`w-full bg-transparent border-0 border-b outline-none py-2 text-sm text-gray-700 placeholder-gray-400 transition-colors resize-none ${
                      errors.message ? "border-red-400" : "border-gray-300 focus:border-gray-600"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>
                  )}
                </div>

                {/* API Error */}
                {apiError && (
                  <div className="px-4 py-3 rounded-xl text-sm text-red-500 bg-red-50 border border-red-100">
                    {apiError}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#1a1a1a] text-white font-semibold text-base rounded-full py-4 mt-2 hover:bg-[#333] transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {submitting ? (
                    <span className="inline-flex items-center gap-2 justify-center">
                      Sending
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </span>
                  ) : (
                    "Submit Message"
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}