import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [timeStr, setTimeStr] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTimeStr(now.toLocaleTimeString('id-ID', options) + ' WIB');
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { label: 'TENTANG', href: '#about' },
    { label: 'GAME IP', href: '#game' },
    { label: 'LAYANAN', href: '#services-expedition' },
    { label: 'TIM FOUNDER', href: '#founders' },
    { label: 'PRINSIP', href: '#triad' },
    { label: 'KONTAK', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 px-4 sm:px-8 py-3 flex items-center justify-between pointer-events-none">
        {/* 1. Left: Floating Brand Logo */}
        <div className="pointer-events-auto relative z-50">
          <a href="#hero" className="flex items-center gap-2 group">
            <img
              src="/img/vigiltristudio_nobg.png"
              alt="Vigiltri Studio Logo"
              className="h-7 sm:h-8 w-auto object-contain"
            />
            <span className="font-heading font-extrabold text-xs sm:text-sm tracking-wider text-slate-100 group-hover:text-indigo-400 transition-colors">
              VIGILTRI
            </span>
          </a>
        </div>

        {/* 2. Center: Prominent Sweeping Organic Notch Tab (Desktop Only) */}
        <div className="hidden md:flex pointer-events-auto -mt-3 relative items-center justify-center max-w-full">
          <div className="relative flex items-center justify-center">
            {/* SVG Smooth Curved Background with Wide Sweeping Concave/Convex Wings */}
            <svg
              className="absolute -inset-x-16 -top-1 w-[calc(100%+8rem)] h-[calc(100%+22px)] pointer-events-none drop-shadow-[0_16px_40px_rgba(0,0,0,0.9)]"
              preserveAspectRatio="none"
              viewBox="0 0 600 75"
              fill="none"
            >
              {/* Dark background body */}
              <path
                d="M 0,0 C 45,0 60,62 105,62 L 495,62 C 540,62 555,0 600,0 Z"
                fill="#06080E"
                fillOpacity="0.97"
              />
              {/* Smooth glowing outline on bottom curved edge */}
              <path
                d="M 0,0 C 45,0 60,62 105,62 L 495,62 C 540,62 555,0 600,0"
                stroke="rgba(148, 163, 184, 0.5)"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>

            {/* Navigation Items */}
            <div className="relative z-10 px-12 sm:px-20 pt-5 pb-4">
              <nav className="flex items-center gap-6 sm:gap-8">
                {navItems.map((item, idx) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`text-xs font-heading font-semibold transition-colors uppercase tracking-wider ${
                      idx === 0
                        ? 'text-indigo-400 font-bold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* 3. Right: Chronometer, Contact CTA & Mobile Menu Trigger */}
        <div className="pointer-events-auto flex items-center gap-2.5 relative z-50">
          {/* Desktop Time Display */}
          <div className="hidden sm:flex items-center gap-2 px-1 py-1 text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="font-heading text-[11px] font-bold text-slate-300 tracking-widest uppercase">
              {timeStr || '10:00:00 WIB'}
            </span>
          </div>

          {/* Contact Button */}
          <motion.a
            href="#contact"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ y: 1, scale: 0.97 }}
            className="group relative inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-b from-indigo-500 via-indigo-600 to-indigo-700 text-white font-heading font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider shadow-[0_4px_0_#3730a3,0_8px_16px_rgba(99,102,241,0.35)] hover:shadow-[0_6px_0_#3730a3,0_12px_24px_rgba(99,102,241,0.5)] active:shadow-[0_1px_0_#3730a3] transition-all border-t border-indigo-300/50"
          >
            <span className="relative z-10 flex items-center gap-1">
              <span>Hubungi Kami</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </motion.a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="md:hidden p-2 rounded-xl bg-[#0F1322]/90 border border-slate-700/60 text-slate-200 hover:text-indigo-400 active:scale-95 transition-all shadow-md"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* 4. Fullscreen Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#06080E]/95 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 md:hidden select-none"
          >
            {/* Navigation Links List */}
            <div className="flex flex-col gap-5 my-auto">
              <div className="text-[10px] font-heading font-bold text-indigo-400 uppercase tracking-widest mb-1 border-b border-indigo-500/20 pb-2">
                NAVIKASI STUDIO
              </div>
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                  className="flex items-center justify-between text-lg font-heading font-bold text-slate-200 hover:text-indigo-400 transition-colors py-1 group"
                >
                  <span className="tracking-wider">{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Drawer Footer with WIB Time */}
            <div className="border-t border-slate-800/80 pt-6 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium text-slate-400">WAKTU STUDIO</span>
                <span className="font-heading font-bold text-indigo-300 tracking-wider">
                  {timeStr || '10:00:00 WIB'}
                </span>
              </div>
              <div className="text-[11px] text-slate-400 font-medium">
                Vigiltri Studio — Tiga yang Berjaga di Ritme Malam
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};