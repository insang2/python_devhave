'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Curriculum', href: '/curriculum' },
    { name: 'Practice', href: '/practice' },
    { name: 'Community', href: '/community' },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group relative z-50">
          <div className="relative w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path fillRule="evenodd" clipRule="evenodd" d="M64.004 0C28.267 0 25.132 15.65 25.132 15.65L24.908 40.57H64.444V49.07H14.168C2.553 49.07 0 66.86 0 66.86C0 85.122 3.86 86.896 14.168 86.896V86.894H25.021V72.29C25.021 57.55 36.963 45.602 51.714 45.602H76.326C84.346 45.602 90.849 39.096 90.849 31.066V13.804C90.849 4.887 81.936 0 64.004 0ZM46.91 14.502C43.52 14.502 40.768 17.252 40.768 20.645C40.768 24.037 43.52 26.786 46.91 26.786C50.301 26.786 53.052 24.037 53.052 20.645C53.052 17.252 50.301 14.502 46.91 14.502Z" fill="url(#paint0_linear_logo)"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M63.996 128C99.733 128 102.868 112.35 102.868 112.35L103.092 87.43H63.556V78.93H113.832C125.447 78.93 128 61.14 128 61.14C128 42.878 124.14 41.104 113.832 41.104V41.106H102.979V55.71C102.979 70.45 91.037 82.398 76.286 82.398H51.674C43.654 82.398 37.151 88.904 37.151 96.934V114.196C37.151 123.113 46.064 128 63.996 128ZM81.09 113.498C84.48 113.498 87.232 110.748 87.232 107.355C87.232 103.963 84.48 101.214 81.09 101.214C77.699 101.214 74.948 103.963 74.948 107.355C74.948 110.748 77.699 113.498 81.09 113.498Z" fill="url(#paint1_linear_logo)"/>
              <defs>
                <linearGradient id="paint0_linear_logo" x1="16.529" y1="12.029" x2="68.272" y2="70.522" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#387EB8"/>
                  <stop offset="1" stopColor="#366994"/>
                </linearGradient>
                <linearGradient id="paint1_linear_logo" x1="110.604" y1="116.504" x2="63.528" y2="52.484" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFE052"/>
                  <stop offset="1" stopColor="#FFC331"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">Python dev Have</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  isActive ? 'text-white' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Menu Button (CSS Only approach, no external icons) */}
        <button
          className="md:hidden relative z-50 p-2 w-10 h-10 flex flex-col justify-center items-center gap-[5px]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`w-6 h-[2px] bg-white transition-transform duration-300 origin-center ${
              mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-opacity duration-300 ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-transform duration-300 origin-center ${
              mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl transition-all duration-300 ease-in-out px-6 pt-24 pb-8 flex flex-col ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto transform-none'
            : 'opacity-0 pointer-events-none translate-y-4'
        }`}
      >
        <nav className="flex flex-col gap-6 text-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-200 hover:text-white font-medium border-b border-white/10 pb-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/login"
            className="text-gray-200 hover:text-white font-medium border-b border-white/10 pb-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="text-black bg-white rounded-xl py-3 text-center font-bold mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sign up
          </Link>
        </nav>
      </div>
    </header>
  );
}
