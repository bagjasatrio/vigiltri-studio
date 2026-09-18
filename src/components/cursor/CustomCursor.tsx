import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'text' | 'drag'>('default');
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest('[data-cursor]');
      if (interactiveEl) {
        const variant = interactiveEl.getAttribute('data-cursor') as any;
        const text = interactiveEl.getAttribute('data-cursor-text') || '';
        setCursorVariant(variant || 'hover');
        setCursorText(text);
      } else if (target.closest('a, button, input, textarea, select')) {
        setCursorVariant('hover');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 18,
      y: mousePosition.y - 18,
      height: 36,
      width: 36,
      scale: 1,
      opacity: 0.85,
    },
    hover: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      height: 60,
      width: 60,
      scale: 1.15,
      opacity: 0.95,
    },
    text: {
      x: mousePosition.x - 38,
      y: mousePosition.y - 38,
      height: 76,
      width: 76,
      scale: 1.25,
      opacity: 1,
    },
    drag: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      scale: 1.2,
      opacity: 0.95,
    }
  };

  return (
    <div className="hidden lg:block">
      {/* Transparent Crescent / Glowing Moon Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center select-none"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 320,
          mass: 0.4,
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Outer Celestial Moonlight Aura */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/20 via-slate-200/10 to-transparent blur-[6px]" />

          {/* Transparent Crescent Moon Shape */}
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full drop-shadow-[0_0_8px_rgba(226,232,240,0.4)]"
          >
            {/* Crescent moon body: translucent moonlight gradient */}
            <defs>
              <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#E2E8F0" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <path
              d="M 50 10 A 40 40 0 1 0 90 50 A 32 32 0 1 1 50 10 Z"
              fill="url(#moonGrad)"
              stroke="rgba(255, 255, 255, 0.6)"
              strokeWidth="1.5"
            />
          </svg>

          {/* Optional context text embedded in moon center */}
          {cursorText && (
            <span className="absolute font-mono text-[9px] font-bold text-slate-100 tracking-wider uppercase px-1 bg-slate-950/70 border border-slate-700/60 shadow-md">
              {cursorText}
            </span>
          )}
        </div>
      </motion.div>

      {/* Center pinpoint star for precision targeting */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-slate-100 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_4px_#ffffff]"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
    </div>
  );
};
