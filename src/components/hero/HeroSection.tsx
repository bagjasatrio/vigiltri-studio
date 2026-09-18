import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Compass } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  // 3D Magnetic Parallax Physics for interactive visual
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 14 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 14 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const headlineLetters = "KAMI BANGUN. KAMI JAGA.".split("");

  return (
    <div
      id="hero"
      className="min-h-screen pt-28 pb-16 px-6 max-w-7xl mx-auto flex flex-col justify-center relative z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Kinetic Typography & Statement */}
        <div className="lg:col-span-7 flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6 text-xs tracking-widest text-slate-400 font-semibold uppercase"
          >
            <span className="text-indigo-400 font-bold">EST. 2026</span>
            <span className="w-4 h-[1px] bg-slate-700" />
            <span>INDIE GAME STUDIO & VIGILTRI TECH</span>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 select-none">
            {headlineLetters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.025,
                  ease: [0.2, 0.65, 0.3, 0.9],
                }}
                className={`inline-block ${
                  char === " " ? "w-3 sm:w-5" : "hover:text-indigo-400 transition-colors"
                }`}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-base sm:text-lg text-slate-400 max-w-xl mb-10 leading-relaxed font-normal"
          >
            Berawal dari ide kami bertiga yang aktif begadang bareng tiap malam untuk ubah hobi jadi karya nyata. Kami bangun game RPG dan sistem IT dengan teliti, tenang, dan selalu ada saat dibutuhkan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap items-center gap-5"
          >
            {/* Primary 3D Tactile Button: Tales Beneath the Lantern */}
            <motion.a
              href="#game"
              data-cursor="hover"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ y: 2, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-b from-indigo-500 via-indigo-600 to-indigo-700 text-white font-heading font-extrabold text-xs uppercase tracking-wider shadow-[0_8px_0_#3730a3,0_15px_30px_rgba(99,102,241,0.35)] hover:shadow-[0_12px_0_#3730a3,0_20px_40px_rgba(99,102,241,0.5)] active:shadow-[0_2px_0_#3730a3] transition-all border-t border-indigo-300/40"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                <span>Tales Beneath the Lantern</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-400/0 via-white/20 to-indigo-400/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.a>

            {/* Secondary 3D Glass Bevel Button: Layanan IT Tech */}
            <motion.a
              href="#services-expedition"
              data-cursor="hover"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ y: 2, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              className="group relative inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-b from-[#161B2E] to-[#0D101D] text-slate-200 border border-slate-700/80 font-heading font-extrabold text-xs uppercase tracking-wider shadow-[0_8px_0_#060810,0_12px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_0_#060810,0_18px_35px_rgba(99,102,241,0.2)] hover:border-indigo-500/50 hover:text-white active:shadow-[0_2px_0_#060810] transition-all border-t-white/10"
            >
              <span className="relative z-10">Layanan IT Tech</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column: Frameless Celestial Triad Sanctuary */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-12">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-full max-w-md aspect-square flex items-center justify-center cursor-grab active:cursor-grabbing"
            data-cursor="drag"
          >
            {/* Ambient Moonlight Backdrop Radial Glow */}
            <div
              style={{ transform: 'translateZ(-40px)' }}
              className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-indigo-600/20 via-sky-500/15 to-transparent blur-3xl pointer-events-none animate-pulse"
            />

            {/* Concentric Celestial Orbit Rings */}
            <div
              style={{ transform: 'translateZ(-20px)' }}
              className="absolute w-[360px] h-[360px] rounded-full border border-indigo-500/25 pointer-events-none"
            />
            <div
              style={{ transform: 'translateZ(-10px)' }}
              className="absolute w-[440px] h-[440px] rounded-full border border-slate-800/60 pointer-events-none border-dashed animate-[spin_70s_linear_infinite]"
            />

            {/* Orbiting Celestial Icon 1: Custom Asteroid / Space Rock */}
            <motion.div
              style={{ transform: 'translateZ(35px)' }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute w-[360px] h-[360px] rounded-full pointer-events-none flex items-start justify-center"
            >
              <motion.div
                animate={{
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="pointer-events-auto w-10 h-10 rounded-full bg-[#0A0D1A]/90 border border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.5)] backdrop-blur-md flex items-center justify-center text-indigo-300 hover:text-white hover:scale-125 hover:border-indigo-400 transition-all -translate-y-5"
              >
                <svg
                  className="w-5 h-5 text-indigo-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Jagged Irregular Asteroid Rock Contour */}
                  <path d="M12 2.5 C15 2, 19 4, 20.5 7.5 C22 11, 21.5 15, 19 18 C16.5 21, 12 22, 8.5 21 C5 20, 2.5 17, 2 13 C1.5 9, 4.5 5, 8 3 C9.5 2.2, 10.5 2.8, 12 2.5 Z" />
                  {/* Asteroid Surface Craters */}
                  <circle cx="8" cy="8.5" r="1.5" strokeWidth="1.4" />
                  <circle cx="15.5" cy="12" r="2" strokeWidth="1.4" />
                  <circle cx="10" cy="16" r="1.2" strokeWidth="1.4" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Orbiting Celestial Icon 2: Compass (Astronavigation / Panduan Langit) */}
            <motion.div
              style={{ transform: 'translateZ(45px)' }}
              animate={{
                rotate: [120, 480],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute w-[360px] h-[360px] rounded-full pointer-events-none flex items-start justify-center"
            >
              <motion.div
                animate={{
                  rotate: [-120, -480],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="pointer-events-auto w-10 h-10 rounded-full bg-[#0A0D1A]/90 border border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.5)] backdrop-blur-md flex items-center justify-center text-indigo-300 hover:text-white hover:scale-125 hover:border-indigo-400 transition-all -translate-y-5"
              >
                <Compass className="w-5 h-5" />
              </motion.div>
            </motion.div>

            {/* Orbiting Celestial Icon 3: Ringed Planet (Saturnus) */}
            <motion.div
              style={{ transform: 'translateZ(25px)' }}
              animate={{
                rotate: [240, 600],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute w-[360px] h-[360px] rounded-full pointer-events-none flex items-start justify-center"
            >
              <motion.div
                animate={{
                  rotate: [-240, -600],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="pointer-events-auto w-10 h-10 rounded-full bg-[#0A0D1A]/90 border border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.5)] backdrop-blur-md flex items-center justify-center text-indigo-300 hover:text-white hover:scale-125 hover:border-indigo-400 transition-all -translate-y-5"
              >
                <svg
                  className="w-5 h-5 text-indigo-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Planet Sphere */}
                  <circle cx="12" cy="12" r="5" />
                  {/* Outer Planet Ring */}
                  <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(-25 12 12)" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Central Floating Levitating Vigiltri Logo */}
            <motion.div
              style={{ transform: 'translateZ(60px)' }}
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-20 flex flex-col items-center group cursor-pointer"
            >
              <div className="relative p-4">
                <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full group-hover:bg-indigo-500/35 transition-all duration-500" />
                <img
                  src="/img/vigiltristudio_nobg.png"
                  alt="Vigiltri Studio Logo"
                  className="w-32 h-32 object-contain relative z-10 drop-shadow-[0_0_25px_rgba(99,102,241,0.4)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Frameless Tagline Safely Centered Inside Orbit Clearance */}
              <div className="mt-1 flex items-center gap-2 text-slate-300 pointer-events-none select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span className="font-heading text-xs font-semibold tracking-widest uppercase text-slate-300">
                  Tiga Yang Berjaga
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

