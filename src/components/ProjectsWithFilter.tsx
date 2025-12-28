'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ArrowRight, Folder } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

const ProjectsWithFilter = () => {
  const { t } = useTranslation()
  const [filter, setFilter] = useState('all')
  
  const projects = [
    {
      title: 'Webhook Piperun → Meta Ads',
      description: 'Integração profissional que sincroniza conversões do CRM Piperun com a Meta Conversions API (CAPI) em tempo real. Permite rastrear leads e vendas com precisão para otimização de campanhas.',
      tags: ['Node.js', 'Express', 'Meta CAPI', 'Docker', 'CI/CD'],
      github: 'https://github.com/gab01012025/webhook-piperun-luana',
      demo: null,
      category: 'integration',
      featured: true,
      icon: '🔗'
    },
    {
      title: 'Task Manager API',
      description: 'API RESTful completa com autenticação JWT, CRUD de tarefas, validação com Joi e testes automatizados com Jest. Arquitetura MVC profissional.',
      tags: ['Node.js', 'MongoDB', 'JWT', 'Jest', 'Docker'],
      github: 'https://github.com/gab01012025/task-manager-fullstack',
      demo: null,
      category: 'api',
      featured: true,
      icon: '🚀'
    },
    {
      title: 'Telegram Bot Demo',
      description: 'Bot para Telegram com comandos personalizados e integração com APIs externas. Demonstra habilidades em automação e desenvolvimento de bots.',
      tags: ['Node.js', 'Telegram API', 'Docker', 'Grammy'],
      github: 'https://github.com/gab01012025/telegram-bot-demo',
      demo: null,
      category: 'bot',
      featured: false,
      icon: '🤖'
    },
  ]

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'integration', label: 'Integrações' },
    { id: 'api', label: 'APIs' },
    { id: 'bot', label: 'Bots' },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-sm text-emerald-400 mb-4">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Alguns dos projetos que demonstram minhas habilidades em backend e integrações
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                filter === f.id
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white border border-slate-700 hover:border-slate-600'
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`group relative bg-slate-800/30 border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  project.featured 
                    ? 'border-emerald-500/30 hover:border-emerald-500/50 hover:shadow-emerald-500/10' 
                    : 'border-slate-700/50 hover:border-slate-600'
                }`}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full border border-emerald-500/30">
                      ★ Destaque
                    </span>
                  </div>
                )}

                {/* Project header with icon */}
                <div className="h-32 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
                  <span className="text-5xl relative z-10">{project.icon}</span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/50">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Ver código
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub profile link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/gab01012025"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-white rounded-xl transition-all"
          >
            <Github className="w-5 h-5" />
            Ver todos os projetos no GitHub
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsWithFilter
