import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const founders = [
  {
    name: 'Fauzan',
    role: 'Lead Developer & Systems',
    tag: 'SYSTEMS & CODE',
    desc: 'Memastikan pondasi logika kode, arsitektur server, dan stabilitas performa sistem terjaga tanpa kompromi.',
  },
  {
    name: 'Bagja',
    role: 'Creative Director & Game Design',
    tag: 'DESIGN & LORE',
    desc: 'Merancang atmosfer dunia game, mekanik gameplay, storytelling, dan estetika visual antarmuka.',
    portfolio: 'https://bagjasatrio.vercel.app',
  },
  {
    name: 'Kenny',
    role: 'Technical Artist & Operations',
    tag: 'ART & OPERATIONS',
    desc: 'Menghubungkan visual pixel art dengan pipeline teknis game engine dan operasional studio.',
  },
];

export const FoundersSection: React.FC = () => {
  // SVG Path dimension for responsive rounding box
  // Using viewBox="0 0 400 500" with rx="28" path
  const cardPath = 'M 48 4 H 352 A 44 44 0 0 1 396 48 V 452 A 44 44 0 0 1 352 496 H 48 A 44 44 0 0 1 4 452 V 48 A 44 44 0 0 1 48 4 Z';

  return (
    <section id="founders" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <div className="mb-12">
        <div className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">
          TIM FOUNDER
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          TIGA ANGGOTA PENJAGA MALAM
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {founders.map((f, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group p-8 rounded-3xl flex flex-col justify-between relative transition-all"
          >
            {/* 1. Orbiting Cosmic Rocket (Clean Frameless) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-20"
              viewBox="0 0 400 500"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                {/* Glow Filter for Rocket */}
                <filter id={`rocket-glow-${idx}`} x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Reusable Path definition */}
                <path id={`orbit-track-${idx}`} d={cardPath} />
              </defs>

              {/* Faint ambient guide orbit track */}
              <path
                d={cardPath}
                stroke="rgba(99, 102, 241, 0.12)"
                strokeWidth="1.2"
                strokeDasharray="4 6"
                fill="none"
              />

              {/* Orbiting Rocket Element following the exact curve & auto-orienting */}
              <g filter={`url(#rocket-glow-${idx})`}>
                <animateMotion
                  dur="10s"
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath href={`#orbit-track-${idx}`} />
                </animateMotion>

                {/* Thruster exhaust flare */}
                <ellipse cx="-11" cy="0" rx="3.5" ry="2" fill="#FFFFFF" opacity="0.9" />
                <ellipse cx="-15" cy="0" rx="5" ry="3" fill="#818CF8" opacity="0.6" />

                {/* Stylized Cosmic Rocket Body (Indigo & Slate aesthetic) */}
                <g transform="scale(0.85)">
                  {/* Left & Right Wing Fins */}
                  <path d="M -10 -7 L -4 -2 L -10 0 Z" fill="#4338CA" stroke="#818CF8" strokeWidth="0.8" />
                  <path d="M -10 7 L -4 2 L -10 0 Z" fill="#4338CA" stroke="#818CF8" strokeWidth="0.8" />

                  {/* Main Fuselage */}
                  <path
                    d="M 12 0 C 7 -4.5 -4 -4.5 -9 -3 C -10 0 -10 0 -9 3 C -4 4.5 7 4.5 12 0 Z"
                    fill="#1E1B4B"
                    stroke="#A5B4FC"
                    strokeWidth="1.2"
                  />

                  {/* Rocket Nosecone Tip */}
                  <path d="M 6 -2.8 C 9 -1.8 12 0 12 0 C 12 0 9 1.8 6 2.8 Z" fill="#6366F1" />

                  {/* Cockpit Porthole Glow */}
                  <circle cx="1" cy="0" r="1.8" fill="#FFFFFF" />
                </g>
              </g>
            </svg>

            {/* Subtle Hover Glow behind frameless text */}
            <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/[0.04] rounded-3xl blur-2xl transition-all duration-500 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider">
                  {f.tag}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-indigo-400 group-hover:scale-125 transition-all" />
              </div>

              <h3 className="text-3xl font-extrabold text-slate-100 mb-1 group-hover:text-indigo-300 transition-colors">
                {f.name}
              </h3>
              <div className="text-xs font-semibold text-slate-400 mb-6">
                {f.role}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                {f.desc}
              </p>
            </div>

            <div className="relative z-10 pt-4">
              {f.portfolio ? (
                <a
                  href={f.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>bagjasatrio.vercel.app</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <div className="text-xs text-slate-500 font-medium">
                  Vigiltri Studio Founder
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
