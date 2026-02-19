"use client";

import { useEffect, useRef, useState } from "react";

const lines = ["From School Operators", "to EdTech", "Innovators"];

export default function Vision() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [triggered, setTriggered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [triggered]);

  useEffect(() => {
    if (!triggered) return;
    lines.forEach((_, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, i * 450);
    });
  }, [triggered]);

  return (
    <section className="bg-black min-h-screen flex flex-col items-center justify-center px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Our Vision{" "}
          <span className="text-orange-500">Forward</span>
        </h1>
        <p className="text-gray-500 text-sm md:text-base mt-3 tracking-widest font-light">
          Expanding from operations to education technology leadership
        </p>
      </div>

      {/* Card */}
      <div
        ref={sectionRef}
        className="bg-[#111] border border-[#222] rounded-2xl max-w-2xl w-full px-10 py-14 text-center shadow-[0_0_80px_rgba(0,0,0,0.9)]"
      >
        {/* Animated Title Lines */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-snug mb-8">
          {lines.map((line, i) => (
            <span
              key={i}
              className="block transition-all duration-500 ease-out"
              style={{
                opacity: visibleLines.includes(i) ? 1 : 0,
                transform: visibleLines.includes(i)
                  ? "translateY(0)"
                  : "translateY(20px)",
              }}
            >
              {line}
            </span>
          ))}
        </h2>

        {/* Body Text */}
        <p className="text-gray-300 text-base leading-relaxed mb-6">
          Having mastered the art of running successful educational institutions,
          we&apos;re now leveraging that expertise to transform how schools
          everywhere operate. KeyEd represents our expansion into education
          technology — bringing institutional intelligence to schools that need
          it most.
        </p>

        <p className="text-gray-300 text-base leading-relaxed">
          Our vision is to empower educational institutions worldwide with tools
          built by people who understand education from the inside out — not just
          as software, but as a mission.
        </p>
      </div>
    </section>
  );
}
