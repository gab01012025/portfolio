'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import type { TranslationKey } from '@/lib/i18n';

interface StackCategory {
  titleKey?: TranslationKey;
  titleStatic?: string;
  icon: string;
  items: { name: string; level: string }[];
}

const STACK_CATEGORIES: StackCategory[] = [
  {
    titleStatic: 'Backend & Runtime',
    icon: '⚡',
    items: [
      { name: 'Node.js', level: 'primary' },
      { name: 'NestJS', level: 'primary' },
      { name: 'Python', level: 'primary' },
      { name: 'FastAPI', level: 'primary' },
      { name: 'Express', level: 'secondary' },
      { name: 'TypeScript', level: 'primary' },
    ],
  },
  {
    titleStatic: 'Frontend & UI',
    icon: '◆',
    items: [
      { name: 'Next.js 15', level: 'primary' },
      { name: 'React', level: 'primary' },
      { name: 'Tailwind CSS', level: 'primary' },
      { name: 'Framer Motion', level: 'secondary' },
      { name: 'React Native', level: 'secondary' },
    ],
  },
  {
    titleStatic: 'Databases',
    icon: '▣',
    items: [
      { name: 'PostgreSQL', level: 'primary' },
      { name: 'MySQL', level: 'primary' },
      { name: 'MongoDB', level: 'secondary' },
      { name: 'Prisma', level: 'primary' },
      { name: 'Drizzle', level: 'secondary' },
      { name: 'Redis', level: 'secondary' },
    ],
  },
  {
    titleStatic: 'DevOps & Cloud',
    icon: '☁',
    items: [
      { name: 'Docker', level: 'primary' },
      { name: 'Railway', level: 'primary' },
      { name: 'Vercel', level: 'primary' },
      { name: 'GitHub Actions', level: 'secondary' },
      { name: 'Linux', level: 'secondary' },
    ],
  },
  {
    titleKey: 'stack.integrations',
    icon: '⟷',
    items: [
      { name: 'REST APIs', level: 'primary' },
      { name: 'Webhooks', level: 'primary' },
      { name: 'Meta Ads API', level: 'primary' },
      { name: 'Amazon SP-API', level: 'primary' },
      { name: 'OpenAI/Gemini', level: 'secondary' },
      { name: 'OAuth/JWT', level: 'primary' },
    ],
  },
  {
    titleKey: 'stack.tools',
    icon: '⌘',
    items: [
      { name: 'Git/GitHub', level: 'primary' },
      { name: 'VS Code + Copilot', level: 'primary' },
      { name: 'Postman', level: 'secondary' },
      { name: 'Swagger', level: 'secondary' },
      { name: 'Jest', level: 'secondary' },
    ],
  },
];

function StackCard({
  category,
  index,
}: {
  category: StackCategory;
  index: number;
}) {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const title = category.titleKey ? t(category.titleKey) : category.titleStatic!;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="p-5 rounded-sm transition-colors duration-300 hover:bg-[#111111]"
      style={{ backgroundColor: '#0d0d0d', border: '1px solid #1a1a1a' }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-lg">{category.icon}</span>
        <h3 className="font-mono text-xs uppercase tracking-widest" style={{ color: '#e8e8e8' }}>
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {category.items.map((item) => (
          <span
            key={item.name}
            className="text-xs font-mono px-2.5 py-1.5 rounded-sm transition-colors"
            style={{
              backgroundColor: item.level === 'primary' ? '#00e87b11' : '#ffffff05',
              color: item.level === 'primary' ? '#00e87b' : '#4a4a4a',
              border: `1px solid ${item.level === 'primary' ? '#00e87b22' : '#1a1a1a'}`,
            }}
          >
            {item.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Stack() {
  const { t } = useLanguage();
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="stack" className="relative py-32 px-6 lg:px-12">
      {/* Divider */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="h-[1px] w-full mb-16" style={{ backgroundColor: '#1a1a1a' }} />

        <div ref={headerRef}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs tracking-[0.3em] uppercase block mb-4" style={{ color: '#00e87b' }}>
              {t('stack.tag')}
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold tracking-tight mb-4"
              style={{ color: '#e8e8e8' }}
            >
              {t('stack.title')}
            </h2>
            <p className="max-w-xl text-base" style={{ color: '#737373' }}>
              {t('stack.subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {STACK_CATEGORIES.map((category, i) => (
          <StackCard key={category.titleKey ?? category.titleStatic} category={category} index={i} />
        ))}
      </div>

      {/* Marquee */}
      <div className="mt-16 overflow-hidden" style={{ borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}>
        <div className="py-4 marquee-track whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-block">
              {[
                'Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'Docker',
                'Next.js', 'React', 'Prisma', 'FastAPI', 'NestJS',
                'REST APIs', 'Webhooks', 'JWT', 'Git', 'Linux',
              ].map((tech) => (
                <span key={`${i}-${tech}`} className="inline-block mx-6">
                  <span className="font-mono text-xs uppercase tracking-widest" style={{ color: '#2a2a2a' }}>
                    {tech}
                  </span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
