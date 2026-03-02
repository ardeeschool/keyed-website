"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="7" r="4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 11l1.5 1.5L20 10" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Role-based Access Controls",
    description:
      "Granular permissions ensure every user sees only what they need, maintaining security and privacy across your institution.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Secure Data Ownership",
    description:
      "Your data belongs to you. Complete ownership with enterprise-grade encryption and compliance standards.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 3v5h5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 7v5l4 2" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Audit & Activity Tracking",
    description:
      "Complete visibility into system activity with comprehensive audit logs for compliance and accountability.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-5 0V4.5A2.5 2.5 0 0 1 9.5 2z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.5 8A2.5 2.5 0 0 1 17 10.5v9a2.5 2.5 0 0 1-5 0v-9A2.5 2.5 0 0 1 14.5 8z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "AI with Human Oversight",
    description:
      "Intelligent automation powered by AI, always with human oversight to ensure accuracy and institutional control.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Reliable, Scalable Infrastructure",
    description:
      "Built on enterprise-grade cloud infrastructure that grows with your institution. 99.9% uptime guaranteed.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Enterprise Security Standards",
    description:
      "SOC 2 compliant with industry-leading security practices. Regular security audits and penetration testing.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const { ref, inView } = useInView(0.1);

  return (
    <div
      ref={ref}
      className="bg-white shadow-2xl rounded-2xl border border-gray-100 p-8 flex flex-col gap-5 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group cursor-default"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(36px)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
    >
      {/* Icon circle */}
      <div className="w-12 h-12 rounded-md bg-[#272727] flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110"   style={{
    boxShadow:
      "rgba(0, 0, 0, 0.06) 0px 7.77px 16px 0px, \
       rgba(0, 0, 0, 0.1) 0px 3px 3px 0px, \
       rgba(0, 0, 0, 0.05) 0px -8px 0px 0px inset, \
       rgba(255, 255, 255, 0.6) 0px 4px 0px 0px inset",
  }}>
        {feature.icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-medium text-primary leading-snug">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-[15px] text-gray-500 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}

export default function BuiltForInstitutions() {
  const { ref: headingRef, inView: headingInView } = useInView(0.2);

  return (
    <section className="w-full  bg-[linear-gradient(180deg,#F5F3F3_100%,FFFBFB00_0)] py-6 md:py-20 px-4 sm:px-8 pb-16 md:pb-40">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div
          ref={headingRef}
          className="text-center mb-14"
          style={{
            opacity: headingInView ? 1 : 0,
            transform: headingInView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <h2 className="text-[24px] sm:text-[42px] font-medium text-primary-dark leading-tight">
            Built for Institutions
          
          </h2>
          <p className="mt-3 text-[15px] text-gray-400">
            KeyEd is designed for long-term institutional reliability.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
