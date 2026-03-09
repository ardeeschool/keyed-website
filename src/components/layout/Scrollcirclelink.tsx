"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ScrollCircleLink() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360 * 3]);

  const text = "TALK TO US • TALK TO US • TALK TO US ";
  const chars = text.split("");

  return (
    <Link
      href="/contact-us"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 no-underline group"
      aria-label="Get in touch"
    >
      <div className="relative w-[90px] h-[90px] md:w-[110px] md:h-[110px] flex items-center justify-center bg-white rounded-full">
        {/* Rotating text ring */}
        <motion.svg
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full"
          style={{ rotate }}
        >
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text
            className="fill-[#1a1a1c] uppercase"
            style={{
              fontSize: "15.5px",
              fontWeight: 700,
              letterSpacing: "3.5px",
              fontFamily: "var(--font-inter-tight), system-ui, sans-serif",
            }}
          >
            <textPath href="#circlePath" startOffset="0%">
              {text}
            </textPath>
          </text>
        </motion.svg>

        {/* Center circle with arrow */}
        <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-primary/25">
          <ArrowUpRight
            className="w-4 h-4 md:w-5 md:h-5 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2.5}
          />
        </div>
      </div>
    </Link>
  );
}