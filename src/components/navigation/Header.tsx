import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [timeStr, setTimeStr] = useState('');

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
    <header className="fixed top-0 left-0 w-full z-50 px-6 sm:px-12 py-3 flex items-start justify-between pointer-events-none">
      {/* 1. Left: Floating Brand Logo */}
      <div className="pointer-events-auto pt-1">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <img
            src="/img/vigiltristudio_nobg.png"
            alt="Vigiltri Studio Logo"
            className="h-8 w-auto object-contain"
          />
          <span className="font-heading font-extrabold text-sm tracking-wider text-slate-100 group-hover:text-indigo-400 transition-colors">
            VIGILTRI
          </span>
        </a>
      </div>

      {/* 2. Center: Prominent Sweeping Organic Notch Tab */}
      <div className="pointer-events-auto -mt-3 relative flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          {/* SVG Smooth Curved Background with Wide Sweeping Concave/Convex Wings */}
          <svg
            className="absolute -inset-x-20 -top-1 w-[calc(100%+10rem)] h-[calc(100%+22px)] pointer-events-none drop-shadow-[0_16px_40px_rgba(0,0,0,0.9)]"
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
          <div className="relative z-10 px-16 sm:px-24 pt-5 pb-4">
            <nav className="hidden md:flex items-center gap-7 sm:gap-9">
              {navItems.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-xs sm:text-sm font-heading font-semibold transition-colors uppercase tracking-wider ${
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

      {/* 3. Right: Dark Brutalist Chronometer & Contact Button */}
      <div className="pointer-events-auto pt-1 flex items-center gap-3">
        {/* Frameless Editorial Time Display */}
        <div className="hidden sm:flex items-center gap-2 px-1 py-1 text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          <span className="font-heading text-[11px] font-bold text-slate-300 tracking-widest uppercase">
            {timeStr || '10:00:00 WIB'}
          </span>
        </div>

        <motion.a
          href="#contact"
          whileHover={{ y: -3, scale: 1.04 }}
          whileTap={{ y: 2, scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 400, damping: 18 }}
          className="group relative inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-b from-indigo-500 via-indigo-600 to-indigo-700 text-white font-heading font-extrabold text-[11px] uppercase tracking-wider shadow-[0_5px_0_#3730a3,0_10px_20px_rgba(99,102,241,0.35)] hover:shadow-[0_8px_0_#3730a3,0_15px_30px_rgba(99,102,241,0.5)] active:shadow-[0_1px_0_#3730a3] transition-all border-t border-indigo-300/50"
        >
          <span className="relative z-10 flex items-center gap-1.5">
            <span>Hubungi Kami</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-400/0 via-white/25 to-indigo-400/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.a>
      </div>
    </header>
  );
};
