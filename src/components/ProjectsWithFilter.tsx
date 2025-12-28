'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Star } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

const ProjectsWithFilter = () => {
  const { t, language } = useTranslation()
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: t('filterAll') },
    { id: 'integrations', label: t('filterIntegrations') },
    { id: 'apis', label: t('filterApis') },
    { id: 'bots', label: t('filterBots') },
  ]

  const projects = [
    {
      id: 1,
      title: 'Webhook Piperun + Meta Ads',
      description: language === 'pt' 
        ? 'Integração completa entre CRM Piperun e Meta Ads API. Sincronização automática de leads e conversões offline.'
        : 'Complete integration between Piperun CRM and Meta Ads API. Automatic synchronization of leads and offline conversions.',
      category: 'integrations',
      tech: ['Node.js', 'Express', 'Webhooks', 'Meta API'],
      github: 'https://github.com/gab01012025/webhook-piperun',
      featured: true,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      title: 'Task Manager API',
      description: language === 'pt'
        ? 'API RESTful completa para gerenciamento de tarefas. Autenticação JWT, CRUD completo, documentação Swagger.'
        : 'Complete RESTful API for task management. JWT authentication, full CRUD, Swagger documentation.',
      category: 'apis',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/gab01012025/task-manager-api',
      featured: true,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      title: 'Telegram Bot',
      description: language === 'pt'
        ? 'Bot para Telegram com comandos customizados, integração com APIs externas e automações.'
        : 'Telegram bot with custom commands, external API integrations and automations.',
      category: 'bots',
      tech: ['Python', 'Telegram API', 'MongoDB'],
      github: 'https://github.com/gab01012025/telegram-bot',
      featured: false,
      color: 'from-green-500 to-emerald-500',
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium mb-4">
            {t('projectsTitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t('projectsSubtitle')}
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all"
              >
                {/* Project Header */}
                <div className={`h-32 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                      backgroundSize: '20px 20px'
                    }}
                  />
                  {project.featured && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-yellow-500/90 text-yellow-900 text-xs font-semibold rounded-full">
                      <Star className="w-3 h-3 fill-current" />
                      {t('featured')}
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-white text-sm font-medium rounded-lg transition-all"
                    >
                      <Github className="w-4 h-4" />
                      {t('viewCode')}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default ProjectsWithFilter
