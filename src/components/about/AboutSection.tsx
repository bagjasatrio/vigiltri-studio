import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSegment, setActiveSegment] = useState<number>(0);

  // Mouse tracking for Moonlight ray angle
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });

  const moonRotate = useTransform(springX, [0, 1], [-12, 12]);
  const rayShiftX = useTransform(springX, [0, 1], [-80, 80]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const storySegments = [
    {
      step: '01',
      title: 'Arti Nama & Cerita Kami',
      headline: 'Hai, kenalan dulu.',
      text: 'Vigiltri itu singkatan dari Vigil (berjaga di malam) dan Tri (tiga). Jadi artinya: tiga orang yang berjaga.',
      subtext: 'Bukan sekadar nama keren, ini identitas dan cara kami berkarya.',
    },
    {
      step: '02',
      title: 'Ritme Malam',
      headline: 'Malam itu waktu kami.',
      text: 'Kami bertiga — Fauzan, Bagja, Kenny — paling produktif kalau matahari udah turun.',
      subtext: 'Saat dunia tertidur, ide, baris kode, dan visual dunia fantasi mulai kami bangun.',
    },
    {
      step: '03',
      title: 'Realita & Bahan Bakar',
      headline: 'Bukan kantor mewah.',
      text: 'Kami nggak punya kantor keren. Yang kami punya: chemistry, rasa penasaran, dan kebiasaan ngopi yang mungkin agak berlebihan.',
      subtext: 'Dari obrolan kopi malam bertiga, lahirlah studio indie ini.',
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="pt-16 pb-20 px-6 max-w-6xl mx-auto relative z-10 select-none"
    >
      {/* 1. Realistic Celestial Moon Light Source */}
      <div className="flex flex-col items-center text-center relative mb-6">
        {/* Realistic Glowing Moon Sphere */}
        <motion.div
          style={{ rotate: moonRotate }}
          animate={{
            y: [-3, 3, -3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative z-20 cursor-pointer group mt-2"
        >
          {/* Ambient Moonlight Halo */}
          <div className="absolute -inset-10 bg-gradient-to-b from-indigo-300/20 via-indigo-600/15 to-transparent blur-[50px] rounded-full pointer-events-none" />

          {/* Semi-realistic Moon Body with Surface Texture, Craters, and Limb Shadow */}
          <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full relative overflow-hidden shadow-[0_0_70px_rgba(199,210,254,0.35)] border border-slate-300/30">
            {/* Base lunar surface gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0F1322] via-[#2A324B] to-[#E2E8F0]" />

            {/* Crater 1 (Mare Tranquillitatis vibe) */}
            <div className="absolute top-7 left-11 w-16 h-14 rounded-full bg-[#181E32]/70 blur-[3px] rotate-12" />
            {/* Crater 2 */}
            <div className="absolute bottom-11 right-13 w-20 h-16 rounded-full bg-[#15192C]/65 blur-[4px]" />
            {/* Crater 3 */}
            <div className="absolute top-18 right-8 w-10 h-8 rounded-full bg-[#1C233B]/60 blur-[2px]" />
            {/* Smaller Crater Pits */}
            <div className="absolute top-9 right-18 w-4 h-4 rounded-full bg-[#121626]/80 blur-[1px]" />
            <div className="absolute bottom-14 left-14 w-6 h-5 rounded-full bg-[#121626]/75 blur-[1px]" />

            {/* Lunar Crescent Illuminator (Simulated Sun Angle from Top-Right) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080A12]/40 to-[#05060A]/95" />

            {/* Subtle Surface Dust / Noise Overlay */}
            <div className="absolute inset-0 bg-indigo-400/10 mix-blend-overlay" />
            
            {/* High-contrast rim light */}
            <div className="absolute -top-1 -right-1 w-full h-full rounded-full border-t-2 border-r-2 border-slate-100/60 blur-[0.5px]" />
          </div>
        </motion.div>

        {/* Volumetric Moonlight Beam */}
        <motion.div
          style={{ x: rayShiftX }}
          className="w-full max-w-4xl h-36 bg-gradient-to-b from-indigo-300/15 via-indigo-600/10 to-transparent blur-3xl pointer-events-none -mt-20"
        />

        <div className="relative z-30 -mt-6">
          <div className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-1.5">
            TENTANG KAMI
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
            TIGA ORANG YANG BERJAGA.
          </h2>
        </div>
      </div>

      {/* 2. Interactive Spotlight Narrative (Teks yang Disinari Bulan) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20">
        {storySegments.map((seg, idx) => {
          const isSelected = activeSegment === idx;
          return (
            <motion.div
              key={seg.step}
              onClick={() => setActiveSegment(idx)}
              onMouseEnter={() => setActiveSegment(idx)}
              whileHover={{ y: -6 }}
              className={`p-8 transition-all duration-500 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-b from-[#14182C] to-[#0A0C16] border border-indigo-500/80 shadow-[0_0_35px_rgba(99,102,241,0.25)]'
                  : 'bg-[#0B0D16]/60 border border-slate-800/80 hover:border-slate-600 opacity-60 hover:opacity-90'
              }`}
            >
              {/* Moon Ray Light Leak Indicator for Active Card */}
              {isSelected && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-extrabold tracking-wider ${
                      isSelected ? 'text-indigo-400' : 'text-slate-600'
                    }`}
                  >
                    {seg.step}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {seg.title}
                  </span>
                </div>

                <h3
                  className={`text-xl sm:text-2xl font-bold mb-4 transition-colors ${
                    isSelected ? 'text-slate-100' : 'text-slate-300'
                  }`}
                >
                  "{seg.headline}"
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {seg.text}
                </p>
              </div>

              <div
                className={`pt-4 border-t text-xs transition-colors italic ${
                  isSelected
                    ? 'border-indigo-500/30 text-indigo-300/90 font-medium'
                    : 'border-slate-800/60 text-slate-500'
                }`}
              >
                {seg.subtext}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 3. Pure Decorative Ambient Accent */}
      <div className="mt-12 flex items-center justify-center gap-3 opacity-40 pointer-events-none select-none">
        <span className="w-16 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
        <span className="w-1 h-1 rounded-full bg-indigo-400 animate-pulse" />
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-300 shadow-[0_0_8px_rgba(165,180,252,0.8)]" />
        <span className="w-1 h-1 rounded-full bg-indigo-400 animate-pulse" />
        <span className="w-16 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
      </div>
    </section>
  );
};

