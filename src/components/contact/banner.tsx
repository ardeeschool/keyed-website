"use client";

export default function Banner() {
  return (
    <section className="relative w-full min-h-[480px] flex flex-col items-center justify-center overflow-hidden bg-linear-gradient(135deg, var(--beige) 0%, var(--white) 100%)from-zinc-900 via-neutral-800 to-zinc-900 px-6 py-24">

      {/* ECG Heartbeat Line — centered behind text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-32 opacity-25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ecgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
              <stop offset="35%" stopColor="#fb923c" stopOpacity="1" />
              <stop offset="65%" stopColor="#fbbf24" stopOpacity="1" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ECG Line: flat → small blip → big spike → flat */}
          <path
            className="ecg-line"
            d="M0,60 L150,60 L170,54 L185,66 L200,60 L260,60 L278,18 L292,102 L302,12 L318,68 L334,60 L390,60 L408,54 L423,66 L438,60 L600,60 L750,60 L770,54 L785,66 L800,60 L860,60 L878,18 L892,102 L902,12 L918,68 L934,60 L990,60 L1008,54 L1023,66 L1038,60 L1200,60"
            fill="none"
            stroke="url(#ecgGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Glowing traveling dot */}
          <circle r="4" fill="#fbbf24" filter="url(#glow)">
            <animateMotion
              dur="3.2s"
              repeatCount="indefinite"
              path="M0,60 L150,60 L170,54 L185,66 L200,60 L260,60 L278,18 L292,102 L302,12 L318,68 L334,60 L390,60 L408,54 L423,66 L438,60 L600,60"
            />
          </circle>
        </svg>
      </div>

      {/* Radial orange glow center */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(251,146,60,0.07), transparent 70%)" }}
      />

      {/* Top subtle glow blob */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Bottom subtle glow blob */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Static heading */}
      <h1 className="relative z-10 text-5xl md:text-6xl lg:text-7xl font-bold  text-center leading-tight text-black tracking-tight">
       Ready to Transform
      </h1>

      {/* Animated orange gradient line — slides in from top */}
      <h1
        className="relative z-10 text-5xl md:text-6xl lg:text-7xl font-semi-bold text-center leading-tight tracking-tight mb-8 animate-slide-down"
        style={{
          background: "linear-gradient(90deg, rgb(29, 29, 31) 0%, rgb(4, 86, 201) 100%) text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Your Institution?
      </h1>

      {/* Divider */}
      <div
        className="relative z-10 w-16 h-px mb-8"
        style={{ background: "linear-gradient(to right, transparent, rgba(251,146,60,0.5), transparent)" }}
      />

      {/* Subtext */}
      <p className="relative z-10 text-base md:text-lg text-zinc-500 max-w-xl text-center leading-relaxed italic">
        Let's discuss how KeyEd can help your institution achieve operational excellence.
      </p>

      <style>{`
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-80px);
          }
          55% {
            opacity: 1;
          }
          75% {
            transform: translateY(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slideDown 1.1s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes ecgPulse {
          0% {
            stroke-dashoffset: 2000;
            opacity: 0.1;
          }
          10% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0.15;
          }
        }

        .ecg-line {
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          animation: ecgPulse 3.2s linear infinite;
        }
      `}</style>
    </section>
  );
}