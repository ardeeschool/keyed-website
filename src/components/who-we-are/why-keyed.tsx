"use client";

// ── Bubble bounce animation ───────────────────────────────────
const bubbleStyle = `
  @keyframes bubbleBounce {
    0%   { transform: translateY(0px) scale(1); }
    30%  { transform: translateY(-10px) scale(1.08); }
    50%  { transform: translateY(-16px) scale(1.04); }
    70%  { transform: translateY(-8px) scale(1.06); }
    85%  { transform: translateY(-12px) scale(1.03); }
    100% { transform: translateY(0px) scale(1); }
  }
  .bubble-1 { animation: bubbleBounce 3s ease-in-out infinite; }
  .bubble-2 { animation: bubbleBounce 3s ease-in-out infinite 0.4s; }
  .bubble-3 { animation: bubbleBounce 3s ease-in-out infinite 0.8s; }
`;

// ── Orange gradient icon wrapper ──────────────────────────────
function IconBubble({ children, delay }: { children: React.ReactNode; delay: string }) {
  return (
    <div
      className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 ${delay}`}
      style={{
        background: "linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fbbf24 100%)",
        boxShadow: "0 4px 20px rgba(249,115,22,0.3), 0 1px 4px rgba(249,115,22,0.15)",
      }}
    >
      {children}
    </div>
  );
}

// ── Icons ─────────────────────────────────────────────────────
function LightbulbIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V17a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-2.8C7.21 13.16 6 11.22 6 9a6 6 0 0 1 6-6z"
        stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
        stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <polyline points="20 6 9 17 4 12" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── Main component ────────────────────────────────────────────
export default function WhyKeyEd() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-20">

      {/* Subtle warm glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 20%, rgba(251,146,60,0.04), transparent 70%)",
        }}
      />

      {/* Heading */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semi-bold text-zinc-900 mb-3">
          Why KeyEd{" "}
          <span style={{
            background: "linear-gradient(90deg, #f97316, #fbbf24)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Was Created
          </span>
        </h2>
        <p className="text-zinc-400 text-base md:text-lg italic">
          Born from necessity, built with purpose
        </p>
      </div>

      {/* Quote + body card */}
      <div className="relative z-10 max-w-4xl mx-auto mb-14">
        <div
          className="rounded-2xl p-8 md:p-12 flex gap-6"
          style={{
            background: "#ffffff",
            border: "1px solid rgba(0,0,0,0.07)",
            boxShadow: "0 2px 24px rgba(0,0,0,0.05)",
          }}
        >
          {/* Orange-to-yellow left border line */}
          <div className="flex-shrink-0 self-stretch">
            <div
              className="w-[3px] h-full rounded-full"
              style={{
                background: "linear-gradient(to bottom, #f97316 0%, #fb923c 35%, #fbbf24 70%, transparent 100%)",
                boxShadow: "0 0 6px rgba(249,115,22,0.3)",
              }}
            />
          </div>

          {/* Card content */}
          <div>
            <p className="text-lg md:text-xl text-zinc-500 italic leading-relaxed mb-6">
              "After years of operating real schools and facing the daily complexities of institutional
              management, we realized that schools weren't struggling because of a lack of effort —
              they were struggling because of fragmented systems."
            </p>
            <p className="text-zinc-500 text-base leading-relaxed mb-4">
              KeyEd was built after years of operating real schools and facing operational complexity
              firsthand. We experienced the frustration of disconnected admissions systems, manual
              academic tracking, siloed financial data, and leadership decisions made with incomplete
              information.
            </p>
            <p className="text-zinc-500 text-base leading-relaxed">
              The platform solves real institutional pain points — not theoretical problems imagined
              in a boardroom, but daily challenges encountered while running campuses, managing teams,
              serving parents, and educating students.
            </p>
          </div>
        </div>
      </div>

      {/* Three cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">

        <div
          className="rounded-2xl p-8 flex flex-col items-center text-center"
          style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
        >
          <IconBubble delay="bubble-1"><LightbulbIcon /></IconBubble>
          <h3 className="text-lg font-bold text-zinc-900 mb-2">Real Problems</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">Identified through years of school operations</p>
        </div>

        <div
          className="rounded-2xl p-8 flex flex-col items-center text-center"
          style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
        >
          <IconBubble delay="bubble-2"><WrenchIcon /></IconBubble>
          <h3 className="text-lg font-bold text-zinc-900 mb-2">Real Solutions</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">Built by educators who've lived these challenges</p>
        </div>

        <div
          className="rounded-2xl p-8 flex flex-col items-center text-center"
          style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
        >
          <IconBubble delay="bubble-3"><CheckIcon /></IconBubble>
          <h3 className="text-lg font-bold text-zinc-900 mb-2">Real Results</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">Proven in live campuses before launch</p>
        </div>

      </div>

      <style>{bubbleStyle}</style>
    </section>
  );
}
