'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSolutionOpen, setIsMobileSolutionOpen] = useState(false);

  const solutionSubmenus = [
    'Demo 1',
    'Demo 2',
    'Demo 3',
    'Demo 4',
    'Demo 5',
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="flex lg:justify-center md:gap-[90px] justify-evenly items-center px-5 lg:px-10 py-5 max-w-[1400px] mx-auto text-[#142833]">
        
        {/* Left Side - Navigation (Desktop) */}
        <nav className="hidden lg:flex items-center gap-10">
          <Link 
            href="/" 
            className="text-[#142833] text-base font-medium hover:text-teal-700 transition-colors"
          >
            Home
          </Link>

          {/* The Solution - Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsSolutionOpen(true)}
            onMouseLeave={() => setIsSolutionOpen(false)}
          >
            <button 
              className="text-[#142833] text-base font-medium inline-flex items-center gap-1.5 hover:text-teal-700 transition-colors"
            >
              Solution
              <span className={`text-[10px] transition-transform duration-300 ${isSolutionOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            
            {/* Dropdown Menu */}
            {isSolutionOpen && (
              <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white border-2 border-[#142833] rounded-lg py-3 min-w-[220px] shadow-lg z-50 animate-fadeIn">
                {solutionSubmenus.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={`/solutions/${item.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                      className="block px-6 py-2.5 text-[#142833] text-[15px] font-medium whitespace-nowrap hover:bg-blue-50 hover:text-teal-700 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        {/* Center - Logo */}
        <Link href="/" className="flex flex-col gap-0.5  left-1/2 -translate-x-1/2 lg:relative lg:left-auto lg:translate-x-0">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight leading-none text-center">
            KeyEd
          </h1>
          <hr className="border-[#142833] m-1" />
          <p className="text-[10px] lg:text-[12px] font-semibold tracking-[2px] uppercase text-center">
            AN ARDEE VENTURE
          </p>
        </Link>

        {/* Right Side - Pricing & Button (Desktop) */}
        <div className="hidden lg:flex items-center gap-10">
          <Link 
            href="/pricing" 
            className="text-[#142833] text-base font-medium  transition-colors"
          >
            Pricing
          </Link>
          
          <Link 
            href="/enquire" 
            className="bg-[#142833] text-white px-6 py-2.5 rounded-lg font-medium  transition-colors"
          >
            Enquiry
          </Link>
        </div>

        {/* Hamburger Menu Button - Mobile */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-[#142833] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#142833] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#142833] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="bg-white border-t border-gray-200 px-5 py-4">
          <ul className="flex flex-col gap-4">
            {/* Home */}
            <li>
              <Link 
                href="/" 
                className="text-[#142833] text-base font-medium block py-2 hover:text-teal-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* The Solution - Mobile Dropdown */}
            <li>
              <button 
                className="text-[#142833] text-base font-medium py-2 flex items-center justify-between w-full hover:text-teal-700 transition-colors"
                onClick={() => setIsMobileSolutionOpen(!isMobileSolutionOpen)}
              >
                Solution
                <span className={`text-[10px] transition-transform duration-300 ${isMobileSolutionOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {/* Mobile Submenu */}
              <ul className={`overflow-hidden transition-all duration-300 ${isMobileSolutionOpen ? 'max-h-96 mt-2' : 'max-h-0'}`}>
                {solutionSubmenus.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={`/solutions/${item.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                      className="block px-4 py-2 text-[#142833] text-sm font-medium hover:bg-blue-50 hover:text-teal-700 transition-colors rounded"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileSolutionOpen(false);
                      }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Pricing */}
            <li>
              <Link 
                href="/pricing" 
                className="text-[#142833] text-base font-medium block py-2 hover:text-teal-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
            </li>

            {/* Enquire Now Button */}
            <li>
              <Link 
                href="/enquire" 
                className="bg-[#142833] text-white px-6 py-2.5 rounded-lg font-medium  transition-colors block text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enquiry
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
