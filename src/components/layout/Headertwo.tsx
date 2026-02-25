"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";



const navLinks = [
  { label: "Home", href: "/home2" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Platform", href: "/solution" },
  { label: "AI & Intelligence", href: "/ai" },
  { label: "KeyEd Score", href: "/keyed-score" },
  { label: "Pricing", href: "/pricing" },
  
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
   const pathname = usePathname();


  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="w-full bg-white border-b border-[#e7ebf0] sticky top-0 z-50">
      {/* Main bar */}
      <div className="w-full px-[55px] h-[80px] flex items-center justify-between">

        {/* LEFT — Logo */}
        <Link href="/home2" className="flex items-baseline gap-0.5 flex-shrink-0 no-underline">
          <span className="font-bold text-[30px] text-[#0d1b35] tracking-tight font-montserrat">
            KeyEd
          </span>
          <span className="font-bold text-[11px] text-primary-dark] align-super leading-none ml-px">
            ™
          </span>
        </Link>

        {/* RIGHT — Nav links + CTA (desktop) */}
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          <ul className="flex items-center gap-1 list-none m-0 p-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
  href={link.href}
  className={`group relative px-3.5 py-2 text-[15px] font-normal rounded-md transition-colors duration-150 whitespace-nowrap no-underline
  ${
    isActive
      ? "text-[#0d1b35]"
      : "text-[#1a2c4e] hover:text-[#0d1b35]"
  }`}
>
  {link.label}

  {/* Active — always visible */}
  {isActive && (
    <span className="absolute left-0 -bottom-[6px] w-full h-[2px] bg-black rounded-full"></span>
  )}

  {/* Hover — animates in (only on non-active) */}
  {!isActive && (
    <span className="absolute left-0 -bottom-[6px] w-full h-[2px] bg-black rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
  )}
</Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact-us"
            className="ml-4 inline-flex items-center justify-center px-5 py-2.5 bg-[#0d1b35] text-white text-[15px] font-semibold rounded-lg hover:bg-[#1a3260] hover:-translate-y-px active:translate-y-0 transition-all duration-150 whitespace-nowrap no-underline flex-shrink-0"
          >
            Talk to Us
          </Link>
        </div>


        {/* RIGHT — Hamburger (mobile) */}
        <button
          className="lg:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-[#0d1b35] rounded-sm transition-all duration-200 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0d1b35] rounded-sm transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0d1b35] rounded-sm transition-all duration-200 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Scroll progress line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent">
        <div
          className="h-full transition-all duration-75 ease-out"
          style={{
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, #272727, #000000)',
            opacity: scrollProgress > 0 ? 1 : 0,
          }}
        />
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col border-t border-gray-200 px-6 pb-5 pt-3 gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2.5 text-[15px] font-semibold text-[#1a2c4e] rounded-md hover:bg-gray-100 transition-colors duration-150 no-underline"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 flex items-center justify-center px-5 py-2.5 bg-[#0d1b35] text-white text-[15px] font-semibold rounded-lg hover:bg-[#1a3260] transition-colors duration-150 no-underline"
          >
            Talk to Us
          </Link>
        </div>
      )}
    </nav>
  );
}