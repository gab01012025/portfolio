'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

const Projects = () => {
  const { t } = useTranslation()
  const projects = [
    {
      title: 'Task Manager',
      description: 'Aplicação full-stack de gerenciamento de tarefas com autenticação segura JWT e integração com MongoDB Atlas. Frontend publicado no GitHub Pages e backend deployado via Node/Express.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'JWT', 'REST API'],
      github: 'https://github.com/gab01012025',
      live: '#',
      featured: true,
    },
    {
      title: 'MiniBlog',
      description: 'Plataforma completa de blog com sistema de autenticação, criação de posts, edição e comentários. Login/register seguro com JWT e integração com MongoDB Atlas.',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'Vercel'],
      github: 'https://github.com/gab01012025',
      live: '#',
      featured: true,
    },
    {
      title: 'DevFinance',
      description: 'Personal Budget Tracker com CRUD completo de transações, persistência com localStorage e validação de inputs. Dashboard interativo com gráficos usando Chart.js.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Chart.js'],
      github: 'https://github.com/gab01012025',
      live: '#',
      featured: false,
    },
    {
      title: 'Portfolio Website (2025)',
      description: 'Portfolio pessoal moderno showcasing projetos, stack tecnológico e formulário de contato. Implementa dark mode e UI responsiva.',
      tech: ['React', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/gab01012025',
      live: 'https://gabrielbarreto.vercel.app',
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-100 mb-4">
            {t('projectsTitle')} <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">{t('projectsHighlight')}</span>
          </h2>
          <p className="text-xl text-slate-400">
            {t('projectsSubtitle')}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <motion.div 
                  className={`lg:col-span-7 ${index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-6'} z-10 space-y-4`}
                  whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-indigo-400 text-sm font-semibold">
                    {project.featured ? t('featuredProject') : t('project')}
                  </p>
                  <h3 className="text-3xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <motion.div 
                    className="bg-slate-800/90 p-6 rounded-xl border border-slate-700 backdrop-blur-sm"
                    whileHover={{ 
                      boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)',
                      borderColor: 'rgba(99, 102, 241, 0.5)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-slate-300">{project.description}</p>
                  </motion.div>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span 
                        key={tech} 
                        className="px-4 py-2 text-sm font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-lg cursor-default"
                        whileHover={{ 
                          scale: 1.1, 
                          backgroundColor: 'rgba(99, 102, 241, 0.2)',
                          borderColor: 'rgba(99, 102, 241, 0.4)',
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2">
                    <motion.a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Github size={20} />
                      <span>{t('viewCode')}</span>
                    </motion.a>
                    {project.live !== '#' && (
                      <motion.a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <ExternalLink size={20} />
                        <span>{t('viewDemo')}</span>
                      </motion.a>
                    )}
                  </div>
                </motion.div>

                <motion.div 
                  className={`lg:col-span-7 ${index % 2 === 0 ? 'lg:col-start-6' : 'lg:col-start-1'} lg:row-start-1`}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center text-6xl opacity-20 group-hover:opacity-30 transition-all duration-300 shadow-xl">
                    {index === 0 && '✓'}
                    {index === 1 && '📝'}
                    {index === 2 && '💰'}
                    {index === 3 && '🎨'}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-20 text-center">
          <a href="https://github.com/gab01012025" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold text-lg">
            {t('viewMoreGithub')}
            <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
