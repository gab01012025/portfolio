'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

const ProjectsWithFilter = () => {
  const [filter, setFilter] = useState<string>('all')

  const projects = [
    {
      title: 'Task Manager Full Stack',
      description: 'Sistema completo de gerenciamento de tarefas com autenticação JWT, CRUD de tarefas, filtros por status e persistência em MongoDB Atlas. Frontend React otimizado com lazy loading e backend Node.js/Express robusto.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
      category: 'fullstack',
      github: 'https://github.com/gab01012025/task-manager',
      live: 'https://task-manager-gab.vercel.app',
      featured: true,
    },
    {
      title: 'MiniBlog Platform',
      description: 'Plataforma completa de blog com autenticação segura, criação/edição de posts com editor rich text, sistema de comentários e painel administrativo. Deploy full stack com MongoDB Atlas.',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'CSS Modules'],
      category: 'fullstack',
      github: 'https://github.com/gab01012025/miniblog',
      live: 'https://miniblog-gab.vercel.app',
      featured: true,
    },
    {
      title: 'DevFinance - Controle Financeiro',
      description: 'Aplicação de controle financeiro pessoal com dashboard interativo, CRUD de transações, cálculo automático de saldo, filtros por categoria e gráficos dinâmicos com Chart.js. Dados persistidos em localStorage.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js', 'LocalStorage'],
      category: 'frontend',
      github: 'https://github.com/gab01012025/devfinance',
      live: 'https://gab01012025.github.io/devfinance',
      featured: false,
    },
    {
      title: 'Portfolio 2025',
      description: 'Portfolio profissional moderno com design responsivo, modo escuro/claro, sistema de tradução PT/EN, animações 3D com Framer Motion e formulário de contato integrado com EmailJS.',
      tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'frontend',
      github: 'https://github.com/gab01012025/portfolio-2025',
      live: 'https://gabrielbarreto.vercel.app',
      featured: false,
    },
  ]

  const filters = [
    { id: 'all', label: 'Todos', count: projects.length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'featured', label: 'Destaque', count: projects.filter(p => p.featured).length },
  ]

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true
    if (filter === 'featured') return project.featured
    return project.category === filter
  })

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
            Projetos em <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Destaque</span>
          </h2>
          <p className="text-xl text-slate-400">
            Portfólio com projetos full-stack publicados
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                filter === f.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 border border-slate-700'
              }`}
            >
              {f.label} <span className="opacity-70">({f.count})</span>
            </button>
          ))}
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-24">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className={`lg:col-span-7 ${index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-6'} z-10 space-y-4`}>
                  <p className="text-indigo-400 text-sm font-semibold">
                    {project.featured ? 'Projeto em Destaque' : 'Projeto'}
                  </p>
                  <h3 className="text-3xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  <div className="bg-slate-800/90 p-6 rounded-xl border border-slate-700">
                    <p className="text-slate-300">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-4 py-2 text-sm font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors">
                      <Github size={20} />
                      <span>Ver Código</span>
                    </a>
                    {project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors">
                        <ExternalLink size={20} />
                        <span>Ver Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className={`lg:col-span-7 ${index % 2 === 0 ? 'lg:col-start-6' : 'lg:col-start-1'} lg:row-start-1`}>
                  <div className="aspect-video rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                    {index === 0 && '✓'}
                    {index === 1 && '📝'}
                    {index === 2 && '💰'}
                    {index === 3 && '🎨'}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-slate-400 text-xl">Nenhum projeto encontrado nesta categoria.</p>
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-20 text-center">
          <a href="https://github.com/gab01012025" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold text-lg">
            Ver mais no GitHub
            <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsWithFilter
