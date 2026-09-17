import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom Space-Themed SVG Icons (Space Station Shield, Stellar Comet, Orbital Nexus) — Monochromatic Deep Space Indigo
const StationShieldIcon = () => (
  <svg className="w-5 h-5 text-indigo-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8v8M8 12h8" strokeWidth="1.2" strokeDasharray="2 2" />
  </svg>
);

const StellarCometIcon = () => (
  <svg className="w-5 h-5 text-indigo-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
  </svg>
);

const SatelliteArrayIcon = () => (
  <svg className="w-5 h-5 text-indigo-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="9" strokeDasharray="3 3" />
    <polygon points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9" />
  </svg>
);

interface Pillar {
  id: string;
  number: string;
  title: string;
  sub: string;
  tagline: string;
  desc: string;
  icon: React.ReactNode;
}

const PILLARS: Pillar[] = [
  {
    id: 'jaga',
    number: '01',
    title: 'JAGA',
    sub: 'REKAYASA & KEANDALAN TEKNOLOGI',
    tagline: 'Proaktif & Teliti Tanpa Menunggu Masalah',
    desc: 'Pertahanan dan performa arsitektur tertanam sejak baris kode pertama. Uptime terjaga, latensi diminimalkan, dan sistem siap menghadapi lonjakan beban.',
    icon: <StationShieldIcon />,
  },
  {
    id: 'cipta',
    number: '02',
    title: 'CIPTA',
    sub: 'DESAIN ESTETIKA & GAMEPLAY',
    tagline: 'Visual & Interaksi Karya Seni Berkarakter',
    desc: 'Setiap frame animasi, respons mekanik game, dan estetika antarmuka dirancang presisi untuk menghadirkan pengalaman imersif yang tak terlupakan.',
    icon: <StellarCometIcon />,
  },
  {
    id: 'tiga',
    number: '03',
    title: 'TIGA',
    sub: 'KESEIMBANGAN & STRATEGI BISNIS',
    tagline: 'Tervalidasi dari Tiga Sudut Pandang',
    desc: 'Menyelaraskan keindahan desain, keandalan rekayasa, dan tujuan bisnis agar produk tidak hanya indah tapi memberi dampak nyata.',
    icon: <SatelliteArrayIcon />,
  },
];

export const TriadPillars: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activePillar = PILLARS[activeIdx];

  return (
    <div id="triad" className="py-28 px-6 max-w-7xl mx-auto relative z-10">
      {/* Background Star Chart & Deep Space Nebula Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-indigo-600/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-indigo-400">
              Fondasi Studio
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-slate-100">
            TIGA YANG BERJAGA
          </h2>
        </div>
        <p className="text-sm text-slate-400 max-w-md leading-relaxed">
          Tiga pilar tak terpisahkan yang mendefinisikan standar mutu dari setiap game dan infrastruktur yang kami rilis.
        </p>
      </div>

      {/* Deep-Space Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: 3 Pillar Selectors */}
        <div className="lg:col-span-5 flex flex-col gap-4 relative">
          {PILLARS.map((pillar, idx) => {
            const isActive = activeIdx === idx;

            return (
              <motion.div
                key={pillar.id}
                onClick={() => setActiveIdx(idx)}
                data-cursor="hover"
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                className={`group relative rounded-2xl p-6 cursor-pointer border transition-all overflow-hidden ${
                  isActive
                    ? 'bg-slate-900/90 border-indigo-500/80 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(99,102,241,0.2)] border-l-4 border-l-indigo-400'
                    : 'bg-[#090B13]/90 border-slate-800/80 hover:border-slate-700/80 hover:bg-[#0D101C]'
                }`}
              >
                {/* Active Indicator Line */}
                {isActive && (
                  <motion.div
                    layoutId="satelliteGlowLine"
                    className="absolute right-0 top-0 bottom-0 w-1 bg-indigo-400"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Space Module Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-indigo-950/80 border border-indigo-400/50 shadow-[0_0_20px_rgba(99,102,241,0.3)]'
                          : 'bg-slate-900 border border-slate-800 group-hover:border-slate-700'
                      }`}
                    >
                      {pillar.icon}
                    </div>

                    <div>
                      <h3 className="font-heading font-extrabold text-xl text-slate-100 tracking-tight">
                        {pillar.title}
                      </h3>
                      <div className="text-[11px] font-heading font-bold text-indigo-400/90 uppercase tracking-wider mt-0.5">
                        {pillar.sub}
                      </div>
                    </div>
                  </div>

                  <span className="font-heading font-extrabold text-xs text-slate-500">
                    {pillar.number}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Column: Clean Deep Space Detail Panel */}
        <div className="lg:col-span-7 relative">
          <div className="relative rounded-3xl bg-gradient-to-b from-[#111424] via-[#0D0F1A] to-[#080911] border border-slate-700/80 p-8 sm:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border-t-indigo-400/30 overflow-hidden">
            
            {/* Star Chart Background */}
            <svg
              className="absolute right-0 top-0 w-80 h-80 opacity-10 pointer-events-none text-indigo-300"
              viewBox="0 0 200 200"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="100" cy="100" r="80" strokeDasharray="4 4" strokeWidth="0.8" />
              <circle cx="100" cy="100" r="50" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="20" strokeWidth="0.5" />
            </svg>

            {/* Dynamic Content Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative z-10 space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                  <span className="font-heading font-extrabold text-xs text-indigo-300 uppercase tracking-widest">
                    PILAR {activePillar.number} — {activePillar.title}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-100 leading-tight">
                  "{activePillar.tagline}"
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activePillar.desc}
                </p>

                <div className="pt-6 border-t border-slate-800/80 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {activePillar.sub}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
};

