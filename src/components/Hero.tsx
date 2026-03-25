'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Gradient orb */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[120px] opacity-20"
        style={{ background: 'radial-gradient(circle, #00e87b, transparent)' }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-72 h-72 rounded-full blur-[100px] opacity-10"
        style={{ background: 'radial-gradient(circle, #00e87b, transparent)' }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 px-6 lg:px-12 w-full max-w-6xl mx-auto">
        {/* Top label */}
        <motion.div
          className="mb-6 flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="w-2 h-2 rounded-full status-dot" style={{ backgroundColor: '#00e87b' }} />
          <span className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: '#737373' }}>
            Backend Developer &mdash; Lisboa, Portugal
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="overflow-hidden">
          <motion.h1
            className="text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[0.9] tracking-tighter"
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="block" style={{ color: '#e8e8e8' }}>Gabriel</span>
            <span
              className="block glitch-text glow-accent"
              data-text="Barreto"
              style={{ color: '#00e87b' }}
            >
              Barreto
            </span>
          </motion.h1>
        </div>

        {/* Description */}
        <motion.div
          className="mt-8 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <p className="text-lg leading-relaxed" style={{ color: '#737373' }}>
            Construo a engenharia invisível que faz sistemas funcionarem.{' '}
            <span style={{ color: '#e8e8e8' }}>APIs, integrações, automações</span>{' '}
            e arquiteturas que escalam — do zero à produção.
          </p>
        </motion.div>

        {/* CTA row */}
        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.6 }}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center gap-2 px-6 py-3 font-mono text-sm tracking-wider uppercase overflow-hidden"
            style={{ backgroundColor: '#00e87b', color: '#060606', borderRadius: '2px' }}
            data-cursor-hover
          >
            <span className="relative z-10">Ver Projetos</span>
            <svg className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm tracking-wider uppercase border transition-colors duration-300 hover:border-[#00e87b] hover:text-[#00e87b]"
            style={{ borderColor: '#2a2a2a', color: '#737373', borderRadius: '2px' }}
            data-cursor-hover
          >
            Fale Comigo
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mt-16 flex flex-wrap gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.8 }}
        >
          {[
            { value: '20+', label: 'Projetos Entregues' },
            { value: '3+', label: 'Anos de Código' },
            { value: '<24h', label: 'Tempo de Resposta' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-2xl font-bold font-mono" style={{ color: '#00e87b' }}>
                {stat.value}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider mt-1" style={{ color: '#4a4a4a' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: '#4a4a4a' }}>
          scroll
        </span>
        <motion.div
          className="w-[1px] h-8"
          style={{ backgroundColor: '#2a2a2a' }}
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
