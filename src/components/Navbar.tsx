'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/lib/ThemeContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Tentang' },
    { href: '#projects', label: 'Proyek' },
    { href: '#contact', label: 'Kontak' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/95 light:bg-white/95 border-b border-slate-800 light:border-slate-200 shadow-lg shadow-black/30 light:shadow-slate-200/30 backdrop-blur-xl transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 light:from-blue-600 light:to-cyan-600 bg-clip-text text-transparent hover:scale-105 transition-transform">
          AP
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 light:text-slate-600 hover:text-blue-400 light:hover:text-blue-600 transition-colors font-medium text-sm relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-slate-800 light:bg-slate-200 border border-slate-700 light:border-slate-300 hover:bg-slate-700 light:hover:bg-slate-300 transition-all duration-300 flex items-center justify-center text-lg hover:scale-110 active:scale-95"
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-slate-800 light:bg-slate-200 border border-slate-700 light:border-slate-300 hover:bg-slate-700 light:hover:bg-slate-300 transition-all duration-300 flex items-center justify-center text-lg active:scale-95"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-300 light:text-slate-600 p-2 hover:bg-slate-800 light:hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 light:bg-white border-t border-slate-800 light:border-slate-200 px-6 py-4 space-y-2 backdrop-blur-lg transition-colors duration-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-slate-300 light:text-slate-600 hover:text-blue-400 light:hover:text-blue-600 py-2 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
