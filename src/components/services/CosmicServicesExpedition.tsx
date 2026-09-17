import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, Rocket } from 'lucide-react';

// Custom Space Celestial SVGs — Unified Deep Space Monochromatic Palette (Indigo, Starlight White, Night Slate)
const SaturnPlanet = () => (
  <svg className="w-10 h-10 text-slate-300" viewBox="0 0 60 60" fill="none">
    <circle cx="30" cy="30" r="16" fill="#1E2238" stroke="#818CF8" strokeWidth="1.5" />
    <ellipse cx="30" cy="30" rx="28" ry="8" stroke="#A5B4FC" strokeWidth="1.5" strokeDasharray="3 2" transform="rotate(-25 30 30)" />
  </svg>
);

const MoonPlanet = () => (
  <svg className="w-10 h-10 text-slate-300" viewBox="0 0 60 60" fill="none">
    <circle cx="30" cy="30" r="18" fill="#1E2238" stroke="#818CF8" strokeWidth="1.5" />
    <circle cx="23" cy="24" r="4" fill="#A5B4FC" fillOpacity="0.4" />
    <circle cx="35" cy="34" r="5" fill="#A5B4FC" fillOpacity="0.3" />
    <circle cx="36" cy="22" r="3" fill="#A5B4FC" fillOpacity="0.3" />
  </svg>
);

const RingedGasGiant = () => (
  <svg className="w-10 h-10 text-slate-300" viewBox="0 0 60 60" fill="none">
    <circle cx="30" cy="30" r="15" fill="#1E2238" stroke="#818CF8" strokeWidth="1.5" />
    <ellipse cx="30" cy="30" rx="27" ry="6" stroke="#CBD5E1" strokeWidth="1.5" transform="rotate(15 30 30)" />
  </svg>
);

const AsteroidCluster = () => (
  <svg className="w-10 h-10 text-slate-300" viewBox="0 0 60 60" fill="none">
    <polygon points="25,12 36,15 44,28 38,44 24,47 16,35 18,20" stroke="#818CF8" strokeWidth="1.5" fill="#1E2238" />
    <circle cx="30" cy="28" r="3" fill="#A5B4FC" fillOpacity="0.5" />
    <circle cx="25" cy="38" r="2.5" fill="#A5B4FC" fillOpacity="0.5" />
  </svg>
);

const DeepSpaceNebulaPlanet = () => (
  <svg className="w-10 h-10 text-slate-300" viewBox="0 0 60 60" fill="none">
    <circle cx="30" cy="30" r="17" fill="#1E2238" stroke="#818CF8" strokeWidth="1.5" />
    <path d="M15 30 Q30 20 45 30 Q30 40 15 30" stroke="#C7D2FE" strokeWidth="1.5" fill="none" />
  </svg>
);

const SunFlareStation = () => (
  <svg className="w-10 h-10 text-slate-300" viewBox="0 0 60 60" fill="none">
    <circle cx="30" cy="30" r="16" fill="#1E2238" stroke="#818CF8" strokeWidth="1.5" />
    <circle cx="30" cy="30" r="24" stroke="#818CF8" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
  </svg>
);

interface ServiceStep {
  id: string;
  category: 'GAME LABS' | 'TECH & SISTEM';
  title: string;
  desc: string;
  tags: string[];
  planet: React.ReactNode;
  side: 'left' | 'right';
  badgeColor: string;
}

const STEPS: ServiceStep[] = [
  {
    id: 'step-1',
    category: 'GAME LABS',
    title: 'Singleplayer Experience Design',
    desc: 'Perancangan alur permainan singleplayer yang imersif, ritme eksplorasi mendalam, serta pacing cerita yang kuat.',
    tags: ['Level Flow', 'Atmosphere', 'Quest Rhythm'],
    planet: <SaturnPlanet />,
    side: 'left',
    badgeColor: 'text-indigo-300 border-indigo-500/30 bg-indigo-950/40',
  },
  {
    id: 'step-2',
    category: 'TECH & SISTEM',
    title: 'Web & App Development',
    desc: 'Website, web app, dan mobile app modern. Cepat, presisi, scalable, tanpa beban bloated code.',
    tags: ['Astro', 'React', 'TypeScript', 'Next.js'],
    planet: <MoonPlanet />,
    side: 'right',
    badgeColor: 'text-indigo-300 border-indigo-500/30 bg-indigo-950/40',
  },
  {
    id: 'step-3',
    category: 'GAME LABS',
    title: 'Game Design & Combat Systems',
    desc: 'Arsitektur aturan game, balancing atribut, perancangan sistem pertarungan, dan mekanik taktis berbasis strategi.',
    tags: ['Combat Mechanics', 'Stat Balancing', 'Boss AI'],
    planet: <AsteroidCluster />,
    side: 'left',
    badgeColor: 'text-indigo-300 border-indigo-500/30 bg-indigo-950/40',
  },
  {
    id: 'step-4',
    category: 'TECH & SISTEM',
    title: 'AI & Automation Integration',
    desc: 'Integrasi fitur kecerdasan buatan, LLM pipeline, vector search, dan automasi proses bisnis otomatis.',
    tags: ['LLM APIs', 'Vector DB', 'Automations'],
    planet: <DeepSpaceNebulaPlanet />,
    side: 'right',
    badgeColor: 'text-indigo-300 border-indigo-500/30 bg-indigo-950/40',
  },
  {
    id: 'step-5',
    category: 'GAME LABS',
    title: 'Game Asset Creation & Art Direction',
    desc: 'Pembuatan aset visual game 2D & 3D, konsep karakter, animasi sprite, serta alur seni yang siap diintegrasikan ke game engine.',
    tags: ['2D/3D Assets', 'Sprite Animation', 'Concept Art'],
    planet: <RingedGasGiant />,
    side: 'left',
    badgeColor: 'text-indigo-300 border-indigo-500/30 bg-indigo-950/40',
  },
  {
    id: 'step-6',
    category: 'TECH & SISTEM',
    title: 'API & Secure Payment Gateway',
    desc: 'Integrasi backend pihak ketiga dan gerbang transaksi pembayaran instan yang aman tanpa celah.',
    tags: ['Midtrans', 'Stripe', 'Microservices'],
    planet: <SunFlareStation />,
    side: 'right',
    badgeColor: 'text-indigo-300 border-indigo-500/30 bg-indigo-950/40',
  },
  {
    id: 'step-7',
    category: 'GAME LABS',
    title: 'Gamification Systems',
    desc: 'Penerapan elemen game (point, progression, badge, quest) ke dalam aplikasi edukasi, produk bisnis, atau alur kerja internal.',
    tags: ['Badges & XP', 'Progression Funnel', 'User Engagement'],
    planet: <AsteroidCluster />,
    side: 'left',
    badgeColor: 'text-indigo-300 border-indigo-500/30 bg-indigo-950/40',
  },
];

export const CosmicServicesExpedition: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Tracking for Vertical Flight Stairway
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    mass: 0.8,
  });

  // Calculate Rocket Movement & Tilt
  const rocketTop = useTransform(smoothProgress, [0, 1], ['2%', '96%']);
  const rocketRotate = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [0, 15, -15, 10, 0]);

  return (
    <section
      id="services-expedition"
      ref={containerRef}
      className="py-32 px-4 sm:px-8 max-w-7xl mx-auto relative z-10"
    >
      {/* Background Starfield and Nebula Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-900/10 blur-[180px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-28">
        <div className="flex items-center justify-center gap-2 text-indigo-400 text-xs font-heading font-extrabold uppercase tracking-widest mb-4">
          <Rocket className="w-4 h-4" />
          <span>EKSPEDISI SOLUSI VIGILTRI</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-slate-100 mb-5">
          GAME LABS & REKAYASA TEKNOLOGI
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Dari mekanik gameplay imersif hingga rekayasa arsitektur cloud terpercaya. Jelajahi keahlian kami di sepanjang tangga kosmik.
        </p>
      </div>

      {/* The Central Cosmic Stairway Trail */}
      <div className="relative">
        
        {/* Central Vertical Flight Orbit Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-indigo-500/40 to-transparent hidden md:block" />

        {/* Scroll Progress Active Glow Line */}
        <motion.div
          style={{ height: rocketTop }}
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[3px] bg-gradient-to-b from-indigo-500 via-sky-400 to-indigo-300 shadow-[0_0_15px_rgba(56,189,248,0.9)] hidden md:block"
        />

        {/* Scroll-Driven Flying Spacecraft (Rocket) */}
        <motion.div
          style={{ top: rocketTop, rotate: rocketRotate }}
          className="absolute left-1/2 -translate-x-1/2 -ml-6 w-12 h-12 z-30 pointer-events-none hidden md:flex items-center justify-center"
        >
          {/* Ion Thruster Glow Particle Trail */}
          <div className="absolute -top-3 w-4 h-8 bg-gradient-to-t from-sky-400/80 to-transparent blur-xs rounded-full animate-pulse" />
          <div className="absolute -top-6 w-6 h-10 bg-indigo-500/40 blur-md rounded-full" />

          {/* Custom Sleek Space Rocket SVG */}
          <div className="relative p-2.5 rounded-full bg-slate-950 border border-indigo-400 shadow-[0_0_25px_rgba(99,102,241,0.9)] rotate-180">
            <Rocket className="w-6 h-6 text-slate-100" />
          </div>
        </motion.div>

        {/* Alternating Orbit Planet Steps (The Stairway) */}
        <div className="space-y-16 md:space-y-24 relative z-10">
          {STEPS.map((step, idx) => {
            const isLeft = step.side === 'left';

            return (
              <div
                key={step.id}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* 1. Service Card Container — 3D Planetary Orb Module */}
                <div className="w-full md:w-1/2 relative group">
                  {/* Planetary Orbit Ring (Saturn Ring Effect behind and around card) */}
                  <svg
                    className={`absolute -inset-6 sm:-inset-10 w-[calc(100%+3rem)] sm:w-[calc(100%+5rem)] h-[calc(100%+3rem)] sm:h-[calc(100%+5rem)] pointer-events-none z-0 transition-transform duration-700 group-hover:scale-105 ${
                      isLeft ? 'rotate-[-12deg]' : 'rotate-[12deg]'
                    }`}
                    viewBox="0 0 500 300"
                    fill="none"
                  >
                    {/* Ring Outer Ellipse */}
                    <ellipse
                      cx="250"
                      cy="150"
                      rx="240"
                      ry="90"
                      stroke="url(#planetRingGrad)"
                      strokeWidth="2"
                      strokeDasharray="8 6"
                      opacity="0.6"
                    />
                    {/* Ring Inner Accent Lines */}
                    <ellipse
                      cx="250"
                      cy="150"
                      rx="210"
                      ry="75"
                      stroke="rgba(165, 180, 252, 0.3)"
                      strokeWidth="1"
                    />
                    <defs>
                      <linearGradient id="planetRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6366F1" stopOpacity="0.6" />
                        <stop offset="50%" stopColor="#94A3B8" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#818CF8" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="relative z-10 p-4 sm:p-6 transition-all overflow-hidden"
                  >
                    {/* Planet Sphere Ambient Glow (Frameless Soft Atmosphere) */}
                    <div className="absolute inset-0 bg-radial from-indigo-500/10 via-transparent to-transparent pointer-events-none blur-2xl" />

                    {/* Top Header: Category Tag & Icon */}
                    <div className="flex items-center gap-3 mb-4 relative z-10">
                      <div className="w-8 h-8 rounded-full bg-indigo-950/60 flex items-center justify-center shrink-0">
                        {step.planet}
                      </div>
                      <span className="text-[10px] font-heading font-black tracking-widest text-indigo-400 uppercase">
                        {step.category}
                      </span>
                    </div>

                    {/* Card Title & Desc */}
                    <h3 className="font-heading font-black text-xl sm:text-3xl text-slate-100 tracking-tight mb-3 group-hover:text-indigo-300 transition-colors relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-base leading-relaxed mb-6 font-normal relative z-10">
                      {step.desc}
                    </p>

                    {/* Tech & Framework Tags */}
                    <div className="flex flex-wrap gap-2 pt-2 relative z-10">
                      {step.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-medium text-indigo-300/80 bg-indigo-950/30 px-3 py-1 rounded-full border border-indigo-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* 2. Middle Orbit Celestial Node (Planet Visual & Center Connection) */}
                <div className="hidden md:flex items-center justify-center shrink-0 w-20 relative">
                  <motion.div
                    whileHover={{ scale: 1.25, rotate: 15 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="w-16 h-16 rounded-full bg-[#090B14] border border-slate-700/80 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)] z-20 group cursor-pointer"
                  >
                    {step.planet}
                  </motion.div>
                </div>

                {/* 3. Empty Balanced Spacer on the other side for Zigzag Step Alignment */}
                <div className="hidden md:block w-1/2" />
              </div>
            );
          })}
        </div>

        {/* Digital Portfolio Footer Bar */}
        <div className="mt-20 p-6 rounded-2xl bg-gradient-to-r from-[#0E1222] via-[#0B0D18] to-[#070810] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="text-xs text-slate-300 font-medium">
            Ingin melihat portofolio digital & implementasi eksperimental tim kami?
          </div>
          <a
            href="https://bagjasatrio.vercel.app"
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="px-5 py-2.5 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-500/40 text-xs font-heading font-extrabold text-white flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(99,102,241,0.2)]"
          >
            <span>Buka Portofolio Digital</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

