'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

const ProjectsWithFilter = () => {
  const [filter, setFilter] = useState<string>('all')
  const { t } = useTranslation()

  const projects = [
    {
      title: 'Webhook Piperun → Meta Ads',
      description: 'Integração de CRM com Meta Conversions API. Recebe eventos do Piperun via webhook e envia conversões para o Facebook Ads em tempo real. Deploy em produção.',
      tech: ['Node.js', 'Express', 'Meta CAPI', 'Docker'],
      category: 'integration',
      github: 'https://github.com/gab01012025/webhook-piperun-luana',
      live: '#',
      featured: true,
    },
    {
      title: 'Task Manager API',
      description: 'API RESTful completa com autenticação JWT, CRUD de tarefas, validação com Joi e testes automatizados. Inclui Docker e CI/CD.',
      tech: ['Node.js', 'Express', 'MongoDB', 'Jest', 'Docker'],
      category: 'api',
      github: 'https://github.com/gab01012025/task-manager-fullstack',
      live: '#',
      featured: true,
    },
    {
      title: 'Portfolio',
      description: 'Este site. Frontend moderno com Next.js 15, TypeScript e Tailwind. Sistema de tradução PT/EN e modo escuro.',
      tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS'],
      category: 'frontend',
      github: 'https://github.com/gab01012025/portfolio',
      live: '#',
      featured: false,
    },
  ]

  const filters = [
    { id: 'all', label: t('filterAll') },
    { id: 'integration', label: t('filterIntegration') },
    { id: 'api', label: t('filterApi') },
  ]

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true
    return project.category === filter
  })

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            {t('projectsTitle')}
          </h2>
          <p className="text-lg text-slate-400">
            {t('projectsSubtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2 rounded-lg font-medium transition-colors ${
                filter === f.id
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/30 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold text-slate-100">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-emerald-500/20 text-emerald-400 rounded">
                        {t('featured')}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 text-sm text-slate-300 bg-slate-700/50 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 text-slate-400 hover:text-emerald-400 transition-colors"
                    title="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  {project.live !== '#' && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 text-slate-400 hover:text-emerald-400 transition-colors"
                      title="Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }} 
          className="mt-12 text-center"
        >
          <a 
            href="https://github.com/gab01012025" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-emerald-400 hover:text-emerald-300 font-medium"
          >
            {t('viewMoreGithub')} →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsWithFilter
