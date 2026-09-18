import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Disc as Discord, Send, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3500);
  };

  return (
    <footer className="relative pt-12 z-10 w-full">
      {/* Full-width Curved Canopy Notch & Body */}
      <div className="w-full relative">
        {/* Top Notch Curved SVG Geometry */}
        <div className="relative -mb-[1px] flex justify-center">
          <svg
            className="w-full max-w-[720px] h-14 text-[#0D101C]"
            viewBox="0 0 600 50"
            fill="none"
          >
            <path
              d="M0 50 C80 50 100 0 170 0 L430 0 C500 0 520 50 600 50 Z"
              fill="currentColor"
            />
            {/* Top Curved Rim Highlight */}
            <path
              d="M0 50 C80 50 100 0 170 0 L430 0 C500 0 520 50 600 50"
              stroke="rgba(99, 102, 241, 0.4)"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>

        {/* Main Full-Width Footer Body Container */}
        <div className="relative w-full rounded-t-3xl bg-gradient-to-b from-[#0D101C] via-[#090B14] to-[#05060A] border-t border-indigo-500/30 px-6 sm:px-12 md:px-20 py-12 sm:py-16 shadow-[0_-20px_50px_rgba(0,0,0,0.9),0_0_50px_rgba(99,102,241,0.12)] overflow-hidden">
          
          {/* Deep Night & Lunar Surface Ambient Atmosphere */}
          {/* 1. Deep Space Nebula Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/20 blur-[160px] rounded-full pointer-events-none" />

          {/* 2. Giant Lunar Crater Horizon & Crescent Atmosphere (Right Wing Background) */}
          <svg
            className="absolute -right-12 -bottom-16 w-[520px] h-[520px] pointer-events-none opacity-55 text-indigo-300/80 z-0"
            viewBox="0 0 500 500"
            fill="none"
          >
            {/* Giant Moon Rim */}
            <circle cx="250" cy="250" r="220" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.8" />
            <circle cx="250" cy="250" r="190" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
            
            {/* Craters with subtle depth */}
            <circle cx="200" cy="180" r="32" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.75" />
            <circle cx="200" cy="180" r="20" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
            <circle cx="290" cy="240" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.75" />
            <circle cx="290" cy="240" r="30" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
            <circle cx="170" cy="290" r="24" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />
            <circle cx="340" cy="160" r="18" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
            <circle cx="240" cy="340" r="28" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />

            {/* Orbiting Dust Arc */}
            <ellipse cx="250" cy="250" rx="240" ry="120" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" transform="rotate(-30 250 250)" opacity="0.6" />
          </svg>

          {/* 3. Star Constellation & Deep Night Sky Texture (Left Wing Background) */}
          <svg
            className="absolute -left-8 top-2 w-[460px] h-[360px] pointer-events-none opacity-50 text-indigo-200/80 z-0"
            viewBox="0 0 400 300"
            fill="none"
          >
            {/* Constellation Lines */}
            <polyline points="50,40 120,70 180,40 240,110 320,80" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" opacity="0.8" />
            <polyline points="120,70 140,160 210,190 280,150" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" opacity="0.8" />
            <polyline points="60,180 140,160" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" opacity="0.8" />
            
            {/* Star Nodes */}
            <circle cx="50" cy="40" r="2.5" fill="currentColor" />
            <circle cx="120" cy="70" r="3" fill="#818CF8" />
            <circle cx="180" cy="40" r="2.5" fill="currentColor" />
            <circle cx="240" cy="110" r="3.5" fill="#A5B4FC" />
            <circle cx="320" cy="80" r="2.5" fill="currentColor" />
            <circle cx="140" cy="160" r="3" fill="currentColor" />
            <circle cx="210" cy="190" r="2.5" fill="#818CF8" />
            <circle cx="280" cy="150" r="2.5" fill="currentColor" />
            <circle cx="60" cy="180" r="2.5" fill="currentColor" />

            {/* Star Dust */}
            <circle cx="90" cy="110" r="1.5" fill="currentColor" opacity="0.8" />
            <circle cx="220" cy="60" r="1.5" fill="currentColor" opacity="0.8" />
            <circle cx="290" cy="210" r="1.5" fill="currentColor" opacity="0.8" />
            <circle cx="30" cy="240" r="1.5" fill="currentColor" opacity="0.8" />
          </svg>

          {/* Top Bar: Nav Links | Centered Glowing Studio Branding | Social Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 pb-12 border-b border-slate-800/80 relative z-10">
            
            {/* Left: Quick Nav Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-xs font-heading font-bold text-slate-300 uppercase tracking-wider">
              <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
              <a href="#game" className="hover:text-indigo-400 transition-colors">Games</a>
              <a href="#services-expedition" className="hover:text-indigo-400 transition-colors">Layanan</a>
              <a href="#contact" className="hover:text-indigo-400 transition-colors">Kontak</a>
            </div>

            {/* Center: Logo & Tagline */}
            <div className="flex flex-col items-center text-center">
              <motion.div
                whileHover={{ scale: 1.05, rotate: [0, -3, 3, 0] }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3 mb-2"
              >
                <img
                  src="/img/vigiltristudio_logo.png"
                  alt="Vigiltri Studio Logo"
                  className="h-9 w-auto object-contain drop-shadow-[0_0_12px_rgba(99,102,241,0.5)]"
                />
                <span className="font-heading font-black text-xl text-slate-100 tracking-wider">
                  VIGILTRI
                </span>
              </motion.div>
              <span className="text-[10px] font-heading font-extrabold text-indigo-400 uppercase tracking-widest">
                TIGA YANG BERJAGA
              </span>
            </div>

            {/* Right: Social Tactile 3D Buttons & Scroll Top */}
            <div className="flex items-center justify-center md:justify-end gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                className="w-10 h-10 rounded-xl bg-[#121626] border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-400/60 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                className="w-10 h-10 rounded-xl bg-[#121626] border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-400/60 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all"
                aria-label="Discord"
              >
                <Discord className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                data-cursor="hover"
                className="w-10 h-10 rounded-xl bg-gradient-to-b from-indigo-500 to-indigo-700 border border-indigo-400/50 flex items-center justify-center text-white shadow-[0_4px_0_#3730a3] hover:shadow-[0_6px_0_#3730a3] active:shadow-[0_1px_0_#3730a3] active:translate-y-1 transition-all"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Center Newsletter & Update Broadcast Section (Inspired by Leolit & 21st.dev) */}
          <div className="py-12 max-w-xl mx-auto text-center relative z-10">
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-100 tracking-tight mb-3">
              Tetap Terhubung Bersama Kami
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-7">
              Dapatkan pembaruan rilis game Tales Beneath the Lantern, devlog eksklusif, serta kabar arsitektur teknologi dari kami bertiga.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-heading font-bold flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Terima kasih! Anda kini terhubung dengan broadcast kami.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan alamat email Anda..."
                  className="w-full bg-[#060810]/90 border border-slate-700/80 rounded-xl px-5 py-3 text-slate-100 text-xs focus:border-indigo-500 focus:shadow-[0_0_15px_rgba(99,102,241,0.25)] focus:outline-none transition-all placeholder:text-slate-500"
                />
                <motion.button
                  type="submit"
                  data-cursor="hover"
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ y: 2, scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="w-full sm:w-auto shrink-0 px-6 py-3 rounded-xl bg-gradient-to-b from-indigo-500 via-indigo-600 to-indigo-700 text-white font-heading font-extrabold text-xs uppercase tracking-wider shadow-[0_4px_0_#3730a3,0_8px_16px_rgba(99,102,241,0.35)] hover:shadow-[0_6px_0_#3730a3,0_12px_24px_rgba(99,102,241,0.5)] active:shadow-[0_1px_0_#3730a3] transition-all border-t border-indigo-300/40 flex items-center justify-center gap-2"
                >
                  <span>Langganan</span>
                  <Send className="w-3.5 h-3.5" />
                </motion.button>
              </form>
            )}
          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-8 border-t border-slate-800/80 text-center text-[11px] text-slate-500 font-medium relative z-10">
            &copy; 2026 Vigiltri Studio. Seluruh hak cipta dilindungi.
          </div>

        </div>
      </div>
    </footer>
  );
};
