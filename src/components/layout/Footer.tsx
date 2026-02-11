import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(101.89deg,#698EA1_4.95%,#142833_101.24%)] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-12 items-center">
          {/* Left Side - Menu */}
          <div>
            {/* Logo */}
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-2">KeyEd</h2>
              <hr className="border-[#fff] m-1 w-[105]" />
              <p className="text-sm text-gray-300 mb-1">AN ARDEE VENTURE</p>
              <p className="text-sm mt-4">Learning creates value. Value unlocks access.</p>
            </div>

            {/* Orange Divider */}
            <div className="w-24 h-1 bg-[rgba(229,169,124,1)]
 mb-8"></div>

            {/* Menu Columns */}
            <div className="grid grid-cols-2 gap-8">
              {/* Platform Column */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Platform</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/students" className="hover:text-gray-300 transition">
                      For Students
                    </Link>
                  </li>
                  <li>
                    <Link href="/teachers" className="hover:text-gray-300 transition">
                      For Teachers
                    </Link>
                  </li>
                  <li>
                    <Link href="/marketplace" className="hover:text-gray-300 transition">
                      Marketplace
                    </Link>
                  </li>
                  <li>
                    <Link href="/open-learning" className="hover:text-gray-300 transition">
                      Open Learning
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Support Column */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Support</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/help" className="hover:text-gray-300 transition">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-gray-300 transition">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-gray-300 transition">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>

                {/* Social Icons */}
                <div className="flex gap-3 mt-6">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 border border-white rounded flex items-center justify-center hover:bg-white hover:text-[#5a7a8a] transition"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 border border-white rounded flex items-center justify-center hover:bg-white hover:text-[#5a7a8a] transition"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 border border-white rounded flex items-center justify-center hover:bg-white hover:text-[#5a7a8a] transition"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Hero Text */}
          <div className="lg:pl-12">
            <div className="relative">
              {/* Background Text */}
              <div className="hidden md:block lg:block text-[4rem] md:text-[6rem] lg:text-[8rem] leading-none font-light text-white/10 select-none">
                The Power
                <br />
                of Learning
              </div>

              {/* Highlighted Text */}
              <div className="absolute inset-0 text-[4rem] md:text-[6rem] hidden md:block lg:block lg:text-[8rem] leading-none font-light">
                <div className="relative">
                  <span className="bg-[linear-gradient(99.14deg,#4E6D7E_5.1%,#F1F1F1_34.17%,#F1F1F1_69.14%,#203642_99.57%)]
  bg-clip-text text-transparent">The </span>
                  <span className="relative">
                    <span className="text-white">Power</span>
                    <div className="hidden absolute bottom-4 left-0 right-0 h-1 bg-[linear-gradient(101.89deg,#698EA1_4.95%,#142833_101.24%)]"></div>
                  </span>
                  <br />
                  <span className="text-white/40">of </span>
                  <span className="relative">
                    <span className="text-white">Learning</span>
                    <div className="hidden absolute bottom-4 left-0 right-0 h-1 bg-[linear-gradient(101.89deg,#698EA1_4.95%,#142833_101.24%)]"></div>
                  </span>
                </div>
            </div>
            <div>
                  <p className="md:hidden lg:hidden text-whhite text-[24px] text-center ">The Power of Learning</p>
                </div>
              </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="w-full h-px bg-white/30 mt-12 mb-6"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-300">
          © 2026 KeyED. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
