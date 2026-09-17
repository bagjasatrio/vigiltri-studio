import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Send, CheckCircle2, Mail, MessageSquare, Copy, Check, Radio, Phone } from 'lucide-react';

const CATEGORIES = [
  { id: 'IT_SYSTEMS', label: 'Sistem IT & Web Dev' },
  { id: 'GAME_DEVELOPMENT', label: 'Pengembangan Game' },
  { id: 'TECHNICAL_AUDIT', label: 'Konsultasi Arsitektur' },
  { id: 'OTHER', label: 'Kolaborasi & Lainnya' },
];

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'IT_SYSTEMS',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // 3D Parallax Tilt Physics for Form Monolith Card
  const formCardRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [6, -6]);
  const rotateY = useTransform(x, [-200, 200], [-8, 8]);

  const springRotateX = useSpring(rotateX, { stiffness: 250, damping: 25 });
  const springRotateY = useSpring(rotateY, { stiffness: 250, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!formCardRef.current) return;
    const rect = formCardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', subject: 'IT_SYSTEMS', message: '' });
    }, 4500);
  };

  const copyOfficialEmail = () => {
    navigator.clipboard.writeText('hello@vigiltri.studio');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText('+62 821-2684-0738');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <div id="contact" className="py-28 px-6 max-w-7xl mx-auto relative z-10">
      {/* Background Ambient Atmospheric Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Left Column: Heading & Frameless Contact Channel Info */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
          <div>
            {/* Frameless Transmisi Pesan Label */}
            <div className="flex items-center gap-2 text-indigo-400 mb-4">
              <Radio className="w-3.5 h-3.5 animate-pulse text-indigo-400" />
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-indigo-400">
                Transmisi Pesan
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight mb-6 text-slate-100 leading-tight">
              ADA PROYEK ATAU IDE SERU?
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Mau bikin game 2D/3D, butuh website/aplikasi cepat dan scalable, atau mau konsultasi arsitektur IT? Santai saja, ngobrol dulu bersama kami bertiga.
            </p>
          </div>

          {/* Frameless Contact Channel Display — Clean, Monochromatic & Elegant */}
          <div className="pt-6 border-t border-slate-800/80 space-y-3">
            {/* 1. Email Channel */}
            <div className="flex items-center justify-between py-2 px-1">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-slate-900/80 border border-indigo-500/20 flex items-center justify-center text-slate-300 shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[10px] font-heading font-extrabold text-slate-500 uppercase tracking-widest">
                    EMAIL RESMI
                  </div>
                  <div className="text-sm font-semibold text-slate-200">
                    hello@vigiltri.studio
                  </div>
                </div>
              </div>
              <button
                onClick={copyOfficialEmail}
                data-cursor="hover"
                className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-1.5 hover:border-indigo-400 hover:text-white transition-all shadow-sm"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="text-indigo-400">Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Salin Email</span>
                  </>
                )}
              </button>
            </div>

            {/* 2. Phone & WhatsApp Channel */}
            <div className="flex items-center justify-between py-2 px-1">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-slate-900/80 border border-indigo-500/20 flex items-center justify-center text-slate-300 shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[10px] font-heading font-extrabold text-slate-500 uppercase tracking-widest">
                    WHATSAPP & KONTAK RESMI
                  </div>
                  <div className="text-sm font-semibold text-slate-200">
                    +62 821-2684-0738
                  </div>
                </div>
              </div>
              <button
                onClick={copyPhoneNumber}
                data-cursor="hover"
                className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-1.5 hover:border-indigo-400 hover:text-white transition-all shadow-sm"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="text-indigo-400">Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Salin No. HP</span>
                  </>
                )}
              </button>
            </div>

            {/* 3. Discord Community Channel */}
            <div className="flex items-center justify-between py-2 px-1">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-slate-900/80 border border-indigo-500/20 flex items-center justify-center text-slate-300 shrink-0">
                  <MessageSquare className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[10px] font-heading font-extrabold text-slate-500 uppercase tracking-widest">
                    KOMUNITAS DISCORD
                  </div>
                  <div className="text-sm font-semibold text-slate-200">
                    vigiltri.community
                  </div>
                </div>
              </div>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-1.5 hover:border-indigo-400 hover:text-white transition-all shadow-sm"
              >
                <span>Buka Discord</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Parallax Monolith Form Panel */}
        <div className="lg:col-span-7 perspective-1000">
          <motion.div
            ref={formCardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX: springRotateX,
              rotateY: springRotateY,
              transformStyle: 'preserve-3d',
            }}
            className="group relative rounded-3xl p-[2px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(99,102,241,0.15)]"
          >
            {/* Orbiting White Light Beam Inside Border Contour */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute -inset-[100%] w-[300%] h-[300%] m-auto pointer-events-none"
              style={{
                background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 310deg, rgba(255,255,255,0.2) 335deg, rgba(255,255,255,0.95) 350deg, rgba(255,255,255,1) 360deg)',
              }}
            />

            {/* Inner Monolith Card Body */}
            <div className="relative rounded-[22px] bg-gradient-to-b from-[#131728] via-[#0E111E] to-[#090B14] p-8 sm:p-10">

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center mb-5 text-emerald-400 shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-extrabold text-slate-100 mb-2">
                  Pesan Terkirim
                </h3>
                <p className="text-sm text-slate-400 max-w-md leading-relaxed">
                  Terima kasih telah menghubungi kami. Kami bertiga akan membaca dan membalas dalam waktu 1x24 jam kerja.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-heading font-bold text-slate-400 uppercase tracking-wider mb-2">
                      NAMA LENGKAP *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Contoh: Alex Pratama"
                      className="w-full bg-[#070911]/90 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-100 text-sm focus:border-indigo-500/80 focus:shadow-[0_0_15px_rgba(99,102,241,0.25)] focus:outline-none transition-all placeholder:text-slate-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-bold text-slate-400 uppercase tracking-wider mb-2">
                      ALAMAT EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="alex@perusahaan.com"
                      className="w-full bg-[#070911]/90 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-100 text-sm focus:border-indigo-500/80 focus:shadow-[0_0_15px_rgba(99,102,241,0.25)] focus:outline-none transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>

                {/* 3D Interactive Topic Pills */}
                <div>
                  <label className="block text-xs font-heading font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                    TOPIK / KATEGORI PROYEK
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {CATEGORIES.map((cat) => {
                      const isSelected = form.subject === cat.id;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setForm({ ...form, subject: cat.id })}
                          data-cursor="hover"
                          className={`px-3 py-2.5 rounded-xl text-xs font-medium text-center transition-all ${
                            isSelected
                              ? 'bg-indigo-600 text-white font-semibold border border-indigo-400/50 shadow-[0_4px_12px_rgba(99,102,241,0.4)]'
                              : 'bg-[#070911]/90 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200'
                          }`}
                        >
                          {cat.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold text-slate-400 uppercase tracking-wider mb-2">
                    PESAN / KEBUTUHAN PROYEK *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Ceritakan gambaran proyek atau ide yang ingin diwujudkan..."
                    className="w-full bg-[#070911]/90 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-100 text-sm focus:border-indigo-500/80 focus:shadow-[0_0_15px_rgba(99,102,241,0.25)] focus:outline-none transition-all resize-none placeholder:text-slate-600"
                  />
                </div>

                {/* 3D Tactile Submit Button */}
                <motion.button
                  type="submit"
                  data-cursor="hover"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ y: 2, scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                  className="group relative w-full py-4 rounded-xl bg-gradient-to-b from-indigo-500 via-indigo-600 to-indigo-700 text-white font-heading font-extrabold text-xs uppercase tracking-wider shadow-[0_6px_0_#3730a3,0_15px_30px_rgba(99,102,241,0.35)] hover:shadow-[0_10px_0_#3730a3,0_20px_40px_rgba(99,102,241,0.5)] active:shadow-[0_1px_0_#3730a3] transition-all border-t border-indigo-300/40"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>Kirim Pesan</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-400/0 via-white/20 to-indigo-400/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.button>
              </form>
            )}
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};
