import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Sword, Palette, ScrollText, MonitorPlay, Sparkles } from 'lucide-react';

const gameServices = [
  {
    icon: Gamepad2,
    title: 'Singleplayer Experience Design',
    desc: 'Perancangan alur permainan singleplayer yang imersif, ritme eksplorasi yang mendalam, serta pacing mekanik cerita yang kuat.',
  },
  {
    icon: Sword,
    title: 'Game Design & Combat Systems',
    desc: 'Arsitektur aturan game, balancing status karakter, perancangan sistem pertarungan, dan mekanik kustom berbasis strategi.',
  },
  {
    icon: Palette,
    title: '2D RPG & Pixel Art World',
    desc: 'Pembuatan dunia 2D berkualitas tinggi dengan estetika pixel art, animasi karakter ritmis, serta lighting atmospheric.',
  },
  {
    icon: ScrollText,
    title: 'Narrative Writing & Worldbuilding',
    desc: 'Penulisan naskah dialog bercabang, lore dunia fantasi/folklore, serta penciptaan quest yang memiliki beban moral.',
  },
  {
    icon: MonitorPlay,
    title: 'Interactive Digital Media',
    desc: 'Pengembangan media digital interaktif, prototype mekanik eksperimental, serta simulasi berbasis game engine.',
  },
  {
    icon: Sparkles,
    title: 'Gamification Systems',
    desc: 'Penerapan elemen game (point, progression, badge, quest) ke dalam aplikasi edukasi, produk bisnis, atau alur kerja internal.',
  },
];

export const GameServicesSection: React.FC = () => {
  return (
    <section id="game-services" className="py-24 px-6 max-w-7xl mx-auto relative z-10 border-t border-slate-800/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">
            VIGILTRI GAME LABS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
            LAYANAN PENGEMBANGAN GAME
          </h2>
        </div>
        <p className="text-xs text-slate-400 font-medium max-w-md">
          Kami juga membuka kolaborasi dan jasa rekayasa game untuk indie developer, studio partner, maupun proyek interaktif khusus.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gameServices.map((service, idx) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="p-8 bg-gradient-to-b from-[#0F1220]/90 to-[#0A0C16]/95 border border-slate-800/80 hover:border-indigo-500/50 rounded-2xl shadow-lg hover:shadow-[0_15px_30px_rgba(99,102,241,0.12)] transition-all flex flex-col justify-between group relative overflow-hidden backdrop-blur-md"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-indigo-500/5 group-hover:bg-indigo-500/15 blur-2xl rounded-full transition-all duration-500 pointer-events-none" />

              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center mb-6 text-indigo-400 group-hover:text-white group-hover:bg-indigo-600 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-3 group-hover:text-indigo-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  {service.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-indigo-400 font-semibold">
                <span>Game Development Service</span>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

