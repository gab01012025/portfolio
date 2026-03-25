'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FACTS = [
  { label: 'const location', value: '"Lisboa, Portugal 🇵🇹"' },
  { label: 'const focus', value: '"Backend & Integrações"' },
  { label: 'const experience', value: '"3+ anos construindo sistemas"' },
  { label: 'const approach', value: '"Código limpo, entrega rápida"' },
  { label: 'const tools', value: '"100% GitHub Copilot Pro"' },
  { label: 'const available', value: 'true' },
];

const PRINCIPLES = [
  {
    number: '01',
    title: 'Zero bullshit',
    description: 'Comunicação direta, prazos realistas, sem enrolação. Se algo não faz sentido, eu digo.',
  },
  {
    number: '02',
    title: 'Código > Conversa',
    description: 'Prefiro mostrar resultado a fazer reunião. O código fala por si.',
  },
  {
    number: '03',
    title: 'Produção first',
    description: 'Tudo que construo roda em produção. Docker, CI/CD, monitoramento — do primeiro dia.',
  },
  {
    number: '04',
    title: 'Entrega completa',
    description: 'Não entrego "quase pronto". Documentação, testes, deploy — tudo incluso.',
  },
];

export default function About() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="h-[1px] w-full mb-16" style={{ backgroundColor: '#1a1a1a' }} />

        <div ref={headerRef}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs tracking-[0.3em] uppercase block mb-4" style={{ color: '#00e87b' }}>
              {'// Sobre'}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4" style={{ color: '#e8e8e8' }}>
              Quem tá por trás do código
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Left: Terminal-style about */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            {/* Terminal window */}
            <div className="rounded-sm overflow-hidden" style={{ border: '1px solid #1a1a1a' }}>
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3" style={{ backgroundColor: '#0d0d0d', borderBottom: '1px solid #1a1a1a' }}>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff5f57' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#febc2e' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28c840' }} />
                <span className="font-mono text-xs ml-2" style={{ color: '#4a4a4a' }}>
                  gabriel.config.ts
                </span>
              </div>

              {/* Content */}
              <div className="p-5 font-mono text-sm leading-loose" style={{ backgroundColor: '#0a0a0a' }}>
                <div style={{ color: '#4a4a4a' }}>{'// gabriel.config.ts'}</div>
                <div className="mt-2">
                  <span style={{ color: '#c678dd' }}>export</span>{' '}
                  <span style={{ color: '#c678dd' }}>const</span>{' '}
                  <span style={{ color: '#e8e8e8' }}>gabriel</span>{' '}
                  <span style={{ color: '#737373' }}>=</span>{' '}
                  <span style={{ color: '#737373' }}>{'{'}</span>
                </div>
                {FACTS.map((fact, i) => (
                  <div key={i} className="ml-4">
                    <span style={{ color: '#e06c75' }}>{fact.label.replace('const ', '')}</span>
                    <span style={{ color: '#737373' }}>: </span>
                    <span style={{ color: fact.value === 'true' ? '#00e87b' : '#98c379' }}>
                      {fact.value}
                    </span>
                    <span style={{ color: '#737373' }}>,</span>
                  </div>
                ))}
                <div>
                  <span style={{ color: '#737373' }}>{'}'}</span>
                  <span style={{ color: '#737373' }}>;</span>
                </div>
                <div className="mt-3 typing-cursor">
                  <span style={{ color: '#4a4a4a' }}>{'>'} </span>
                </div>
              </div>
            </div>

            {/* Bio text below terminal */}
            <div className="mt-8">
              <p className="text-base leading-relaxed" style={{ color: '#737373' }}>
                Desenvolvedor backend focado em resolver problemas reais com código que funciona.
                Trabalho com clientes do Brasil, Portugal e internacional, construindo desde
                APIs simples até sistemas complexos com múltiplas integrações.
              </p>
              <p className="text-base leading-relaxed mt-4" style={{ color: '#737373' }}>
                Meu processo é direto:{' '}
                <span style={{ color: '#e8e8e8' }}>entender o problema → desenhar a solução → entregar funcionando</span>.
                Sem frameworks da moda desnecessários, sem overengineering — só o que o projeto precisa.
              </p>
            </div>
          </motion.div>

          {/* Right: Principles */}
          <div className="space-y-6">
            {PRINCIPLES.map((principle, i) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex gap-4 p-4 rounded-sm transition-colors duration-300 hover:bg-[#0d0d0d]"
              >
                <span className="font-mono text-xs shrink-0 mt-1" style={{ color: '#00e87b' }}>
                  {principle.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold mb-1 transition-colors duration-300 group-hover:text-[#00e87b]" style={{ color: '#e8e8e8' }}>
                    {principle.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#737373' }}>
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Contact links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-4 rounded-sm"
              style={{ backgroundColor: '#0d0d0d', border: '1px solid #1a1a1a' }}
            >
              <div className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: '#4a4a4a' }}>
                Links rápidos
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'GitHub', href: 'https://github.com/gab01012025' },
                  { label: 'LinkedIn', href: 'https://linkedin.com/in/gabriel-barreto-610a72370' },
                  { label: 'Email', href: 'mailto:gabrielbarreto900@gmail.com' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm transition-colors duration-300 hover:text-[#00e87b]"
                    style={{ color: '#737373' }}
                    data-cursor-hover
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
