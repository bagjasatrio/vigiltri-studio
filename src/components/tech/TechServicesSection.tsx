import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

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

export const TechServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto relative z-10 border-t border-slate-800/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">
            VIGILTRI TECH
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            LAYANAN IT & REKAYASA SISTEM
          </h2>
        </div>
        <div className="text-xs text-slate-400 font-medium">
          TARGET KLIEN: UMKM, STARTUP, AGENCY, INDIVIDU
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {itServices.map((svc) => (
          <motion.div
            key={svc.number}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="p-8 bg-gradient-to-b from-[#101322]/90 to-[#0A0C16]/95 border border-slate-800/80 hover:border-indigo-500/50 rounded-2xl shadow-lg hover:shadow-[0_15px_30px_rgba(99,102,241,0.12)] transition-all flex flex-col justify-between group relative overflow-hidden backdrop-blur-md"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 group-hover:bg-indigo-500/15 blur-2xl rounded-full transition-all duration-500 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold text-indigo-400/80 bg-indigo-950/40 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">
                  {svc.number}
                </span>
                <span className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-indigo-400 group-hover:scale-125 transition-all" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-indigo-300 transition-colors">
                {svc.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                {svc.desc}
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
              {svc.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium text-slate-400 group-hover:text-slate-200 bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-6 bg-gradient-to-r from-[#0C0F1D] to-[#090A12] border border-slate-800/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
        <div className="text-xs text-slate-400 font-medium">
          Portofolio digital & implementasi proyek pribadi founder:
        </div>
        <a
          href="https://bagjasatrio.vercel.app"
          target="_blank"
          rel="noreferrer"
          data-cursor="hover"
          className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 font-bold px-4 py-2 bg-indigo-950/40 border border-indigo-500/30 rounded-full hover:bg-indigo-900/50 transition-colors"
        >
          <span>Buka Portofolio Bagja</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};

