"use client";

import { useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";

// ─── Words ────────────────────────────────────────────────────────────────────
const TITLE_LINE_1 = ["One", "Ecosystem."];
const TITLE_LINE_2 = ["Every", "Function", "Connected."];

// ─── Variants ─────────────────────────────────────────────────────────────────

// Progress-bar reveal: width 0 → auto, very slow & smooth
const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    width: 0,
    overflow: "hidden",
    display: "inline-block",
    whiteSpace: "nowrap",
  },
  visible: (i: number) => ({
    opacity: 1,
    width: "auto",
    transition: {
      width: {
        duration: 0.85,          // slower reveal per word
        ease: [0.16, 1, 0.3, 1], // smooth expo-out
        delay: i * 0.38,         // bigger gap between words
      },
      opacity: {
        duration: 0.01,
        delay: i * 0.38,
      },
    },
  }),
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1],
      delay: 2.4,               // waits for all words to finish
    },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: -8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function HeroBanner() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section className="hero-section">
      {/* Background blobs */}
      <div className="blob blob-left" />
      <div className="blob blob-right" />

      <div className="hero-inner">

        {/* ── Badge ── */}
        <motion.div
          className="badge"
          variants={badgeVariants}
          initial="hidden"
          animate={controls}
        >
          
          
        </motion.div>

        {/* ── Heading ── */}
        <h1 className="heading">

          {/* Line 1 — large dark */}
          <span className="line line-dark">
            {TITLE_LINE_1.map((word, i) => (
              <motion.span
                key={`l1-${word}`}
                className="word"
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate={controls}
              >
                {word}{i < TITLE_LINE_1.length - 1 ? "\u00A0" : ""}
              </motion.span>
            ))}
          </span>

          {/* Line 2 — smaller orange, always single line */}
          <span className="line line-orange">
            {TITLE_LINE_2.map((word, j) => {
              const globalIdx = TITLE_LINE_1.length + j;
              return (
                <motion.span
                  key={`l2-${word}`}
                  className="word"
                  custom={globalIdx}
                  variants={wordVariants}
                  initial="hidden"
                  animate={controls}
                >
                  {word}{j < TITLE_LINE_2.length - 1 ? "\u00A0" : ""}
                </motion.span>
              );
            })}
          </span>
        </h1>

        {/* ── Subtitle ── */}
        <motion.p
          className="subtitle"
          variants={subtitleVariants}
          initial="hidden"
          animate={controls}
        >
          KeyEd runs your school’s core operations across academics, admissions, finance, people, and governance — on a single system.
        </motion.p>
      </div>

      {/* ── Styles ── */}
      <style jsx>{`
        .hero-section {
          position: relative;
          width: 100%;
          min-height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--beige) 0%, var(--white) 100%);
          overflow: hidden;
          padding: 80px 24px 90px;
        }

        /* Blobs */
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.4;
          pointer-events: none;
        }
        .blob-left {
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, #f7e4d5 0%, transparent 70%);
          top: -120px;
          left: -160px;
        }
        .blob-right {
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, #fdecd6 0%, transparent 70%);
          bottom: -140px;
          right: -140px;
        }

        /* Inner */
        .hero-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
          max-width: 820px;
          width: 100%;
        }

        /* Badge */
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          background: rgba(255, 255, 255, 0.75);
          border: 1.5px solid #f0c9a8;
          border-radius: 999px;
          backdrop-filter: blur(6px);
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
        }
        .badge-icon {
          font-size: 14px;
          color: #e07b39;
        }
        .badge-text {
          font-size: 13px;
          font-weight: 600;
          color: #c96a28;
          letter-spacing: 0.02em;
        }

        /* Heading wrapper */
        .heading {
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        /* Shared line styles */
        .line {
          display: block;
          white-space: nowrap;     /* NEVER wrap — always single line */
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 1.1;
        }

        /* Line 1 — bigger, dark navy */
        .line-dark {
          font-size: clamp(42px, 7vw, 76px);
          color: #000;
        }

        /* Line 2 — smaller, orange gradient, strictly single line */
        .line-orange {
          font-size: clamp(26px, 4vw, 50px);   /* noticeably smaller than line 1 */
          background: linear-gradient(90deg, #000000 0%, #0456c9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Animated word span */
        .word {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          vertical-align: bottom;
        }

        /* Subtitle */
        .subtitle {
          margin: 0;
          max-width: 560px;
          font-size: clamp(15px, 1.6vw, 17px);
          line-height: 1.7;
          color: #1D1D1F;
          font-weight: 400;
        }

        @media (max-width: 600px) {
          .hero-section {
            padding: 60px 20px 70px;
          }
          .line-orange {
            white-space: normal;
          }
        }
      `}</style>
    </section>
  );
}
