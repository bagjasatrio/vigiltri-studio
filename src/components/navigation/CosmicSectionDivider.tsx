import React from 'react';
import { motion } from 'framer-motion';
import { Moon } from 'lucide-react';

interface CosmicSectionDividerProps {
  label?: string;
}

export const CosmicSectionDivider: React.FC<CosmicSectionDividerProps> = ({
  label,
}) => {
  return (
    <div className="relative w-full py-16 overflow-hidden flex flex-col items-center justify-center pointer-events-none select-none z-20">
      {/* Dynamic Organic Curved Planetary Horizon SVG */}
      <div className="w-full relative flex items-center justify-center z-10">
        <svg
          className="w-full h-24 sm:h-32 text-indigo-500/25"
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Subtle Ambient Glow Fill underneath the horizon curve */}
          <path
            d="M0,120 L0,50 Q360,105 720,60 Q1080,15 1440,75 L1440,120 Z"
            fill="url(#horizon-gradient)"
            opacity="0.35"
          />

          {/* Primary Base Horizon Curved Line */}
          <motion.path
            d="M0,50 Q360,105 720,60 Q1080,15 1440,75"
            stroke="url(#stroke-gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0.3 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: false, margin: '-40px' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />

          {/* Continuous Traveling Luminous Light Beam Following the Exact Curve (Left to Right) */}
          <path
            d="M0,50 Q360,105 720,60 Q1080,15 1440,75"
            stroke="url(#curve-beam-gradient)"
            strokeWidth="5"
            fill="none"
            opacity="0.85"
            filter="url(#cosmic-beam-glow)"
          />
          <path
            d="M0,50 Q360,105 720,60 Q1080,15 1440,75"
            stroke="url(#curve-beam-gradient)"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />

          <defs>
            {/* Traveling Light Beam Linear Gradient */}
            <linearGradient id="curve-beam-gradient" x1="-30%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0" />
              <stop offset="25%" stopColor="#818CF8" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="75%" stopColor="#818CF8" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
              <animate attributeName="x1" from="-30%" to="100%" dur="4s" repeatCount="indefinite" />
              <animate attributeName="x2" from="0%" to="130%" dur="4s" repeatCount="indefinite" />
            </linearGradient>

            {/* Glowing Bloom Filter */}
            <filter id="cosmic-beam-glow" x="-20%" y="-100%" width="140%" height="300%">
              <feGaussianBlur stdDeviation="4" result="blur1" />
              <feGaussianBlur stdDeviation="1.5" result="blur2" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient id="horizon-gradient" x1="0" y1="0" x2="0" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366F1" stopOpacity="0.25" />
              <stop offset="1" stopColor="#08090C" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="stroke-gradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="rgba(99, 102, 241, 0.05)" />
              <stop offset="0.3" stopColor="rgba(165, 180, 252, 0.6)" />
              <stop offset="0.5" stopColor="rgba(224, 231, 255, 0.9)" />
              <stop offset="0.7" stopColor="rgba(165, 180, 252, 0.6)" />
              <stop offset="1" stopColor="rgba(99, 102, 241, 0.05)" />
            </linearGradient>
          </defs>
        </svg>

        {/* 3. Crescent Moon Node Sitting Cleanly IN FRONT of Line (z-30) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2.5 z-30 pointer-events-auto">
          {/* Frameless Crescent Moon Container with Orbiting Satellite */}
          <div className="relative w-14 h-14 flex items-center justify-center">
            {/* Soft ambient blur backdrop without any hard frame/border */}
            <div className="absolute inset-2 rounded-full bg-[#08090C]/85 blur-sm pointer-events-none" />

            {/* Orbiting Satellite (Frameless, without ring border) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 flex items-start justify-center pointer-events-none"
            >
              {/* Glowing Orbiting Satellite Bead */}
              <div className="w-1.5 h-1.5 -mt-0.5 rounded-full bg-indigo-200 shadow-[0_0_8px_rgba(165,180,252,1)]" />
            </motion.div>

            {/* Central Crescent Moon Icon */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 6, 0, -6, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10 flex items-center justify-center text-indigo-300 drop-shadow-[0_0_16px_rgba(165,180,252,0.95)]"
            >
              <Moon className="w-7 h-7 fill-indigo-400/30 stroke-indigo-200 stroke-[1.75]" />
            </motion.div>
          </div>

          {/* Pure Frameless Floating Typography */}
          {label && (
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-indigo-400/80 animate-ping" />
              <span className="text-[11px] font-heading font-extrabold uppercase tracking-widest text-slate-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                {label}
              </span>
              <span className="w-1 h-1 rounded-full bg-indigo-400/80 animate-ping" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

