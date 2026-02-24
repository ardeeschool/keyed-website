"use client";

import { useState, useRef } from "react";
import { Twitter, Facebook, Instagram, Paperclip } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, phone, message, fileName });
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFileName(e.target.files[0].name);
  };

  const socials = [
    { label: "Twitter / X", icon: Twitter, href: "#" },
    { label: "Facebook", icon: Facebook, href: "#" },
    { label: "Instagram", icon: Instagram, href: "#" },
  ];

  return (
    <section className=" px-6 py-10 md:px-12 mb-30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">

        {/* ── LEFT ── */}
        <div className="flex-1 flex flex-col justify-between min-h-[590px]">
          {/* Badge */}
          <div>
            <span className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1.5 text-sm font-medium text-gray-700 bg-[#e8e8e8] mb-8">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
              Contact
            </span>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#2a2a2a] leading-tight tracking-tight mb-6">
             Get in Touch<br />
              
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-base leading-relaxed max-w-md">
             Whether you're exploring KeyEd for the first time or ready to implement, we're here to help. Fill out the form and we'll get back to you within 24 hours.
            </p>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-3 gap-3 mt-12 max-w-lg">
            {socials.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                className={`flex items-center justify-between bg-white rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow ${
                  label === "Instagram" ? "col-span-1" : ""
                }`}
                style={{
                  boxShadow:
                    "0px 7.77px 16px 0px rgba(0, 0, 0, 0.0588235294), 0px 3px 3px 0px rgba(0, 0, 0, 0.1019607843), 0px -8px 0px 0px rgba(0, 0, 0, 0.0509803922) inset, 0px 4px 0px 0px rgba(255, 255, 255, 0.6) inset",
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
        <div
          className="flex-1 bg-[#f0f0f0] rounded-3xl p-8 md:p-10 w-full"
        >
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8">
            Fill this form below
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Your Name */}
            <div>
              <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-gray-600 outline-none py-2 text-sm text-gray-700 placeholder-gray-400 transition-colors"
              />
            </div>

            {/* Your Phone */}
            <div>
              <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                Your Phone
              </label>
              <input
                type="text"
                placeholder="Enter the e-mail"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-gray-600 outline-none py-2 text-sm text-gray-700 placeholder-gray-400 transition-colors"
              />
            </div>

            {/* More About The Project */}
            <div>
              <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                More About The Project
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-gray-600 outline-none py-2 text-sm text-gray-700 placeholder-gray-400 transition-colors resize-none"
              />
            </div>

            {/* Attachment */}
            <div>
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] hover:text-gray-600 transition-colors"
              >
                <Paperclip className="w-4 h-4" strokeWidth={2} />
                {fileName ? fileName : "Add an Attachment"}
              </button>
              <input
                ref={fileRef}
                type="file"
                className="hidden"
                onChange={handleFile}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#1a1a1a] text-white font-semibold text-base rounded-full py-4 mt-2 hover:bg-[#333] transition-colors"
            >
              Submit Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
