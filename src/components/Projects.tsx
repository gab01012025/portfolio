'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PROJECTS = [
  {
    id: 'crm-ciatos',
    number: '01',
    title: 'CRM Ciatos',
    subtitle: 'Sistema CRM completo com IA generativa',
    description:
      'CRM full-stack com inteligência artificial integrada via Gemini API para geração de respostas a objeções de vendas, busca inteligente de leads, e pipeline completo de gestão comercial.',
    tech: ['TypeScript', 'React', 'Express', 'MySQL', 'Gemini AI', 'Vite'],
    highlights: ['IA para objeções de vendas', 'Radar de leads inteligente', 'Pipeline kanban completo'],
    link: 'https://github.com/diegociatos/CRM-Ciatos',
    category: 'FULLSTACK + IA',
  },
  {
    id: 'confea-crea',
    number: '02',
    title: 'Confea-Crea',
    subtitle: 'Hackathon — Plataforma gov de registro profissional',
    description:
      'Plataforma desenvolvida durante o CONFEA Open Day Hackathon para unificar o registro profissional de engenheiros no Brasil. Autenticação via GovBR, criação de ARTs assistida por IA, e sistema centralizado.',
    tech: ['TypeScript', 'React', 'Vite', 'Tailwind', 'Radix UI', 'Docker'],
    highlights: ['Login GovBR', 'Criação de ART com IA', 'Dashboard profissional'],
    link: 'https://github.com/odevnicolas/confea-crea',
    category: 'HACKATHON',
  },
  {
    id: 'nymu',
    number: '03',
    title: 'Nymu',
    subtitle: 'App mobile para emissão de NF-e',
    description:
      'Aplicação mobile completa em React Native/Expo para gestão de tomadores e emissão simulada de notas fiscais eletrônicas. Interface nativa com NativeWind e integração de workflows EAS.',
    tech: ['React Native', 'Expo', 'TypeScript', 'NativeWind', 'EAS'],
    highlights: ['Emissão de NF-e', 'Gestão de tomadores', 'Build nativo iOS/Android'],
    link: 'https://github.com/odevnicolas/nymu',
    category: 'MOBILE',
  },
  {
    id: 'cooperfilme',
    number: '04',
    title: 'CooperFilme',
    subtitle: 'Sistema de gestão de roteiros com Docker',
    description:
      'Plataforma full-stack containerizada para gestão colaborativa de roteiros. Backend com Prisma ORM + PostgreSQL, frontend React, todo orquestrado via Docker Compose.',
    tech: ['TypeScript', 'Prisma', 'PostgreSQL', 'Docker', 'React'],
    highlights: ['Docker Compose full', 'Prisma ORM', 'Workflow de roteiros'],
    link: 'https://github.com/odevnicolas/cooperfilme-docker',
    category: 'FULLSTACK',
  },
  {
    id: 'piperun-meta',
    number: '05',
    title: 'Piperun → Meta Ads',
    subtitle: 'Integração CRM → Conversions API',
    description:
      'Webhook bridge que sincroniza automaticamente leads do CRM Piperun com a Meta Ads Conversions API (CAPI) para tracking de conversões offline. Containerizado com Docker.',
    tech: ['Node.js', 'Express', 'Webhooks', 'Meta API', 'Docker'],
    highlights: ['Conversões offline', 'Webhook em tempo real', 'Zero perda de dados'],
    link: 'https://github.com/gab01012025/webhook-piperun-luana',
    category: 'INTEGRAÇÃO',
  },
  {
    id: 'beemed',
    number: '06',
    title: 'BeeMed',
    subtitle: 'Plataforma de saúde digital',
    description:
      'Plataforma web para o setor de saúde desenvolvida com Next.js e TypeScript. Interface para gestão de consultas médicas, formulários dinâmicos e painel profissional.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'React'],
    highlights: ['Painel médico', 'Formulários dinâmicos', 'UI responsiva'],
    link: 'https://github.com/odevnicolas/beemed',
    category: 'HEALTHTECH',
  },
];

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-6 lg:p-8 rounded-sm transition-all duration-500 gradient-border"
        style={{
          backgroundColor: '#0d0d0d',
          borderLeft: '2px solid transparent',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#111111';
          e.currentTarget.style.borderLeftColor = '#00e87b';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#0d0d0d';
          e.currentTarget.style.borderLeftColor = 'transparent';
        }}
        data-cursor-hover
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs" style={{ color: '#00e87b' }}>
              {project.number}
            </span>
            <span
              className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5"
              style={{ color: '#737373', border: '1px solid #1a1a1a' }}
            >
              {project.category}
            </span>
          </div>
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            style={{ color: '#4a4a4a' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>

        {/* Title */}
        <h3
          className="text-2xl lg:text-3xl font-bold tracking-tight mb-1 transition-colors duration-300 group-hover:text-[#00e87b]"
          style={{ color: '#e8e8e8' }}
        >
          {project.title}
        </h3>
        <p className="font-mono text-sm mb-4" style={{ color: '#737373' }}>
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-6" style={{ color: '#737373' }}>
          {project.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.highlights.map((h) => (
            <span
              key={h}
              className="text-xs font-mono px-2 py-1"
              style={{ color: '#00e87b', backgroundColor: '#00e87b11' }}
            >
              {h}
            </span>
          ))}
        </div>

        {/* Tech */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono"
              style={{ color: '#4a4a4a' }}
            >
              {t}
              {t !== project.tech[project.tech.length - 1] && (
                <span className="ml-2" style={{ color: '#1a1a1a' }}>
                  /
                </span>
              )}
            </span>
          ))}
        </div>
      </a>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-32 px-6 lg:px-12">
      {/* Section header */}
      <div ref={headerRef} className="max-w-6xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase block mb-4" style={{ color: '#00e87b' }}>
            {'// Projetos'}
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            style={{ color: '#e8e8e8' }}
          >
            Trabalhos selecionados
          </h2>
          <p className="max-w-xl text-base" style={{ color: '#737373' }}>
            Sistemas reais em produção — de plataformas gov a CRMs com IA,
            de apps mobile a integrações que processam dados em tempo real.
          </p>
        </motion.div>
      </div>

      {/* Projects grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* GitHub link */}
      <motion.div
        className="max-w-6xl mx-auto mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <a
          href="https://github.com/gab01012025"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm transition-colors duration-300 hover:text-[#00e87b]"
          style={{ color: '#737373' }}
          data-cursor-hover
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          Ver mais no GitHub →
        </a>
      </motion.div>
    </section>
  );
}
