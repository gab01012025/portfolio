'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

const ProjectsWithFilter = () => {
  const { t } = useTranslation()
  
  const projects = [
    {
      title: 'Webhook Piperun → Meta Ads',
      description: 'Integração profissional que sincroniza conversões do CRM Piperun com a Meta Conversions API em tempo real.',
      image: '/projects/webhook.png',
      tags: ['Node.js', 'Express', 'Meta CAPI', 'Docker'],
      github: 'https://github.com/gab01012025/webhook-piperun-luana',
      category: 'integration'
    },
    {
      title: 'Task Manager API',
      description: 'API RESTful completa com autenticação JWT, CRUD de tarefas, validação com Joi e testes automatizados.',
      image: '/projects/taskmanager.png',
      tags: ['Node.js', 'MongoDB', 'JWT', 'Jest'],
      github: 'https://github.com/gab01012025/task-manager-fullstack',
      category: 'api'
    },
    {
      title: 'Telegram Bot Demo',
      description: 'Bot para Telegram com comandos personalizados e integração com APIs externas. Demonstra habilidades em automação.',
      image: '/projects/telegram.png',
      tags: ['Node.js', 'Telegram API', 'Docker'],
      github: 'https://github.com/gab01012025/telegram-bot-demo',
      category: 'bot'
    },
  ]

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('projectsTitle')}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Projetos reais que demonstram minhas habilidades em backend e integrações
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all"
            >
              {/* Project image placeholder */}
              <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-4xl">
                  {project.category === 'integration' && '🔗'}
                  {project.category === 'api' && '🚀'}
                  {project.category === 'bot' && '🤖'}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs bg-emerald-500/10 text-emerald-400 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Código
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub profile link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/gab01012025"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
          >
            <Github className="w-5 h-5" />
            Ver todos no GitHub
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsWithFilter
