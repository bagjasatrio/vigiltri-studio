import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Sparkles, Flame } from 'lucide-react';

const gameData = {
  title: 'Tales Beneath the Lantern',
  genre: 'Fantasy RPG',
  theme: 'Folklore, Mystery',
  artStyle: 'Pixel Art (2D)',
  platform: 'PC Only (Steam)',
  status: 'Dalam Pengembangan',
  progress: 40,
  quote: 'Game 2D RPG pertama kami. Masih jauh dari jadi, tapi tiap malam kami cicil. Cerita, sistem combat, dan dunianya masih kami rahasiain dulu.',
  features: [
    'Singleplayer Experience',
    'Full Controller Support',
    '2D RPG & Pixel Art World',
    'Game Design & Narrative Writing',
    'Interactive Digital Media',
    'Gamification Systems',
  ],
};

export const GameSection: React.FC = () => {
  return (
    <section id="game" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <div className="mb-12">
        <div className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">
          PROYEK GAME PERTAMA
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          TALES BENEATH THE LANTERN
        </h2>
      </div>

      <div className="relative">
        {/* Soft Ambient Indigo Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Interactive Story & Features */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-indigo-950/60 border border-indigo-500/40 text-indigo-300 text-xs font-semibold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-indigo-400" />
                  {gameData.genre}
                </span>
                <span className="text-xs text-slate-400 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800">
                  {gameData.platform}
                </span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-100 mb-6 tracking-tight">
                {gameData.title}
              </h3>

              <div className="p-6 bg-gradient-to-r from-slate-900/90 to-[#0F121C]/80 border-l-4 border-indigo-500 rounded-r-2xl shadow-xl backdrop-blur-md mb-8">
                <p className="text-slate-200 text-base leading-relaxed italic">
                  "{gameData.quote}"
                </p>
              </div>

              <div className="p-6 bg-[#0B0D15]/80 border border-slate-800/80 rounded-2xl">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-3">
                  <span className="uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    Progress Pengubahan Hobi Jadi Karya
                  </span>
                  <span className="text-indigo-400 font-bold">{gameData.progress}% (Dicicil Tiap Malam)</span>
                </div>
                <div className="w-full h-3 bg-slate-950 rounded-full p-0.5 border border-slate-800 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${gameData.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full shadow-[0_0_12px_rgba(99,102,241,0.5)]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Organic Lantern Data Sheet */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0D101C] to-[#080910] border border-indigo-500/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-2xl pointer-events-none rounded-full" />

            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <Gamepad2 className="w-4 h-4 text-indigo-400" />
                  IDENTITAS GAME
                </span>
                <span className="text-[10px] font-semibold bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 px-2.5 py-0.5 rounded-full">
                  {gameData.status}
                </span>
              </div>

              <div className="space-y-3.5 pt-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-medium">GENRE:</span>
                  <span className="text-slate-100 font-semibold">{gameData.genre}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-medium">ART STYLE:</span>
                  <span className="text-slate-100 font-semibold">{gameData.artStyle}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-medium">TEMA:</span>
                  <span className="text-slate-100 font-semibold">{gameData.theme}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-medium">DISTRIBUSI:</span>
                  <span className="text-indigo-400 font-semibold">{gameData.platform}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-medium">TARGET AUDIENS:</span>
                  <span className="text-slate-100 font-semibold">Indie RPG Players</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-[#0A0C14] border border-indigo-500/30 rounded-2xl text-center text-xs text-indigo-300 font-medium flex items-center justify-center gap-2 shadow-inner">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Segera hadir di Steam Wishlist.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

