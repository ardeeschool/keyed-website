"use client";
import Link from "next/link";
import Image from "next/image";
import ScrollCircleLink from "./Scrollcirclelink";
const navLinks = [
  { label: "Solutions", href: "/solution" },
  { label: "AI & Intelligence", href: "/ai" },
  { label: "KeyEd Score", href: "/keyed-score" },
  { label: "Pricing", href: "/pricing" },

  
];
const navLinks2 = [
   { label: "Who We Are", href: "/who-we-are" },
  { label: "Success Stories", href: "/testimonials" },
  { label: "Career", href: "/career" },
  { label: "Terms of Services", href: "/terms" },
  { label: "Privacy Policy", href: "/policy"}
];

const navLinks3 = [
  { label: "Talk To Us", href: "contact-us" },
];

export default function Blackfooter() {
  return (
    <footer
      className="relative w-full text-black overflow-hidden pt-24 bg-[#f5f5f5]"
    >

   
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pt-4 md:pt-12 pb-4 md:pb-10">

       

        <div className="flex flex-col lg:flex-row items-start gap-16 flex-wrap">

          {/* LEFT — Brand + Quick Links side by side */}
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 w-full">

            {/* Brand block */}
            <div className="flex flex-col gap-4 max-w-xs">
              {/* Logo */}
              <div className="flex items-baseline gap-0.5">
                <Link
                  href="/"
                  className="flex items-baseline gap-0.5 flex-shrink-0 no-underline"
                >
                  <Image
                    src="/key.svg"
                    alt="KeyEd™"
                    width={110}
                    height={36}
                    priority
                  />
                </Link>

              </div>


              <p className="text-sm text-black leading-relaxed">
                The unified operating system for modern educational institutions.
              </p>

              <p className="text-sm text-black leading-relaxed">
                KeyEd — An Ardee Education Initiative
                <br />
                20+ Years in Education Leadership
              </p>

              {/* Orange dash */}
              <div className="flex items-center gap-2 mt-1">
                <div className="w-10 h-[3px] rounded-full bg-secondary" />
                <div className="w-4 h-[3px] rounded-full bg-secondary/30 opacity-40" />
              </div>


              <div className="flex items-center gap-2 mt-1">
                <a href="#" aria-label="Instagram"
                  className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center text-black hover:text-black hover:border-orange-400 hover:bg-orange-400/10 transition-all duration-200 no-underline">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a href="#" aria-label="Facebook"
                  className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center text-black hover:text-black hover:border-orange-400 hover:bg-orange-400/10 transition-all duration-200 no-underline">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" aria-label="X"
                  className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center text-black hover:text-black hover:border-orange-400 hover:bg-orange-400/10 transition-all duration-200 no-underline">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links — right beside brand */}
            <div className="flex flex-col gap-3 w-full md:w-1/3">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black mb-1">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-md text-black hover:text-black transition-colors duration-150 no-underline"
                    >
                      <span className="w-1 h-1 rounded-full bg-black opacity-50 group-hover:opacity-100 transition-opacity duration-150 flex-shrink-0" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

           <div className="flex flex-col gap-3  w-full md:w-1/3">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black mb-1">
                Resources
              </h4>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {navLinks2.map((link2) => (
                  <li key={link2.href}>
                    <a
                      href={link2.href}
                      className="group flex items-center gap-2 text-md text-black hover:text-black transition-colors duration-150 no-underline"
                    >
                      <span className="w-1 h-1 rounded-full bg-black opacity-50 group-hover:opacity-100 transition-opacity duration-150 flex-shrink-0" />
                      {link2.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3  w-full md:w-1/3">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black mb-1">
                Support
              </h4>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {navLinks3.map((link3) => (
                  <li key={link3.href}>
                    <a
                      href={link3.href}
                      className="group flex items-center gap-2 text-md text-black hover:text-black transition-colors duration-150 no-underline"
                    >
                      <span className="w-1 h-1 rounded-full bg-black opacity-50 group-hover:opacity-100 transition-opacity duration-150 flex-shrink-0" />
                      {link3.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>{/* end all columns */}
        </div>

        {/* Bottom bar */}

      </div>



      <div className="mt-0 md:mt-12 p-6 border-t border-primary  bg-primary">
        <div className="relative z-10 max-w-7xl mx-auto px-6  flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/60">
            © 2026 KeyEd. All rights reserved. Built by educators, for educators.
          </p>
          <div className="flex items-center gap-1.5 w-full md:w-auto">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs text-white/60">
              Empowering learners worldwide
            </span>
          </div>
        </div>
      </div>

<ScrollCircleLink />
    </footer>
  );
}
