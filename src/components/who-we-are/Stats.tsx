"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 20, suffix: "+", label: "Years in Education" },
  { value: null, text: "Multiple", label: "Campuses" },
  { value: 1000, suffix: "s", label: "Students Educated" },
  { value: 100, suffix: "%", label: "Real Experience" },
];

function CountUp({
  target,
  duration = 2,
  suffix = "",
}: {
  target: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const step = target / (duration * 60);
    let raf: number;

    function tick() {
      start += step;
      if (start >= target) {
        setCount(target);
        return;
      }
      setCount(Math.floor(start));
      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-white py-12 px-6 dottedbg mt-30">
      <div className="">
        <div className="grid grid-cols-4 gap-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-center"
            >
              <p className="font-interTight text-6xl lg:text-7xl font-medium text-[#0a1628] leading-none mb-3">
                {stat.value !== null ? (
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix || ""}
                    duration={2}
                  />
                ) : (
                  stat.text
                )}
              </p>
              <p className="font-interTight text-sm text-black uppercase tracking-wide font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}