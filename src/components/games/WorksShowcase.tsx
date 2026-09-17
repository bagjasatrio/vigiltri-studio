import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const gameData = {
  title: 'Tales Beneath the Lantern',
  genre: 'Fantasy RPG',
  theme: 'Folklore, Mystery',
  artStyle: 'Pixel Art (2D)',
  platform: 'PC (Steam)',
  status: 'Dalam Pengembangan',
  progress: 40,
  quote: 'Game 2D RPG pertama kami. Masih jauh dari jadi, tapi tiap malam kami cicil. Cerita, sistem combat, dan dunianya masih kami rahasiain dulu.',
  features: [
    'Singleplayer Experience',
    'Full Controller Support',
    '2D RPG & Pixel Art World',
    'Deep Narrative & Folklore Mystery',
    'Dynamic Combat Mechanics',
    'Atmospheric Audio Landscape',
  ],
};

const itServices = [
  {
    number: '01',
    title: 'Web & App Development',
    desc: 'Website, web app, dan mobile app. Rapi, cepat, dan scalable tanpa beban bloated code.',
    tech: ['Astro', 'React', 'TypeScript', 'Tailwind', 'Next.js'],
  },
  {
    number: '02',
    title: 'IT Consulting',
    desc: 'Pemetaan kebutuhan arsitektur dan eksekusi solusi teknologi yang realistis.',
    tech: ['System Design', 'Cloud Strategy', 'Code Audit'],
  },
  {
    number: '03',
    title: 'AI Integration',
    desc: 'Integrasi fitur kecerdasan buatan, LLM, dan automasi ke produk atau alur kerja bisnis klien.',
    tech: ['LLM APIs', 'Vector DB', 'Automation Pipelines'],
  },
  {
    number: '04',
    title: 'API Integration',
    desc: 'Menyambungkan sistem internal dengan berbagai layanan pihak ketiga secara aman & stabil.',
    tech: ['REST', 'GraphQL', 'Webhooks', 'Microservices'],
  },
  {
    number: '05',
    title: 'Payment Gateway',
    desc: 'Menerima pembayaran online dengan verifikasi instan, aman, dan tanpa celah keamanan.',
    tech: ['Midtrans', 'Xendit', 'Stripe', 'Sub-second Webhooks'],
  },
];

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

export const WorksShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'GAME' | 'TECH' | 'FOUNDERS'>('GAME');

  return (
    <div id="works" className="py-28 px-6 max-w-7xl mx-auto relative z-10 border-t border-slate-800/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="font-mono text-xs text-indigo-400 uppercase tracking-widest mb-2">
            // DIVISI KARYA & LAYANAN
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            GAME & VIGILTRI TECH
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 bg-[#0B0D14] border border-slate-800 p-1.5">
          <button
            onClick={() => setActiveTab('GAME')}
            data-cursor="hover"
            className={`px-4 py-2 font-mono text-xs font-semibold tracking-wider transition-all uppercase ${
              activeTab === 'GAME'
                ? 'bg-slate-100 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            GAME PERTAMA
          </button>
          <button
            onClick={() => setActiveTab('TECH')}
            data-cursor="hover"
            className={`px-4 py-2 font-mono text-xs font-semibold tracking-wider transition-all uppercase ${
              activeTab === 'TECH'
                ? 'bg-slate-100 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            LAYANAN IT
          </button>
          <button
            onClick={() => setActiveTab('FOUNDERS')}
            data-cursor="hover"
            className={`px-4 py-2 font-mono text-xs font-semibold tracking-wider transition-all uppercase ${
              activeTab === 'FOUNDERS'
                ? 'bg-slate-100 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            TIM FOUNDER
          </button>
        </div>
      </div>

      {/* Game Section */}
      {activeTab === 'GAME' && (
        <motion.div
          id="game"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0F121C] border border-slate-800 p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 bg-indigo-950/60 border border-indigo-500/40 text-indigo-300 font-mono text-[10px] uppercase tracking-wider">
                    {gameData.genre}
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    Platform: {gameData.platform}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mb-4">
                  {gameData.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic bg-slate-950/60 border-l-2 border-indigo-500 p-4 font-mono">
                  {`"${gameData.quote}"`}
                </p>

                <div className="mb-8">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span>PROGRESS PENGEMBANGAN</span>
                    <span className="text-indigo-400 font-bold">{gameData.progress}% (CICIL TIAP MALAM)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-950 border border-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-sky-400 transition-all duration-1000"
                      style={{ width: `${gameData.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {gameData.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-950 border border-slate-850 font-mono text-xs text-slate-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-indigo-400" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 p-6 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="font-mono text-xs text-slate-500 uppercase border-b border-slate-900 pb-2">
                  DATA SHEET GAME
                </div>
                <div className="flex justify-between font-mono text-xs">
                  <span className="text-slate-500">ART STYLE:</span>
                  <span className="text-slate-200">{gameData.artStyle}</span>
                </div>
                <div className="flex justify-between font-mono text-xs">
                  <span className="text-slate-500">TEMA:</span>
                  <span className="text-slate-200">{gameData.theme}</span>
                </div>
                <div className="flex justify-between font-mono text-xs">
                  <span className="text-slate-500">DISTRIBUSI:</span>
                  <span className="text-indigo-400">{gameData.platform}</span>
                </div>
                <div className="flex justify-between font-mono text-xs">
                  <span className="text-slate-500">TARGET:</span>
                  <span className="text-slate-200">Semua Kalangan</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-[#0B0D14] border border-slate-800/80 text-center font-mono text-xs text-slate-400">
                Segera hadir di Steam Wishlist.
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* IT Services Section */}
      {activeTab === 'TECH' && (
        <motion.div
          id="services"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itServices.map((svc) => (
              <div
                key={svc.number}
                className="p-8 bg-[#0F121C] border border-slate-800 hover:border-indigo-500/80 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-slate-500">{svc.number}</span>
                    <span className="w-2 h-2 bg-slate-800 group-hover:bg-indigo-400 transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-indigo-300 transition-colors">
                    {svc.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                    {svc.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-900">
                  {svc.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-[10px] text-slate-500 bg-slate-950 px-2 py-0.5 border border-slate-850"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#0B0D14] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="font-mono text-xs text-slate-400">
              Klien Target: UMKM, Startup, Agency, dan Individu.
            </div>
            <a
              href="https://bagjasatrio.vercel.app"
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="font-mono text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 uppercase"
            >
              <span>Lihat Portofolio Bagja</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      )}

      {/* Founders Section */}
      {activeTab === 'FOUNDERS' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {founders.map((f, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#0F121C] border border-slate-800 hover:border-slate-600 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-[11px] text-indigo-400 mb-2">
                  // {f.tag}
                </div>
                <h4 className="text-2xl font-extrabold text-slate-100 mb-1">
                  {f.name}
                </h4>
                <div className="font-mono text-xs text-slate-400 mb-6">
                  {f.role}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  {f.desc}
                </p>
              </div>

              {f.portfolio && (
                <div className="pt-4 border-t border-slate-900">
                  <a
                    href={f.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-indigo-400 hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>bagjasatrio.vercel.app</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};
