'use client'
import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar } from 'lucide-react'

const Writing = () => {
  const articles = [
    {
      title: 'React Hooks: Guia Completo de useState e useEffect',
      description: 'Domine os hooks fundamentais do React e aprenda padrões avançados para gerenciar estado e side effects de forma eficiente.',
      date: '2024',
      readTime: '10 min',
      link: '#',
      tags: ['React', 'Hooks', 'JavaScript']
    },
    {
      title: 'Performance em Next.js: Otimização e Best Practices',
      description: 'Técnicas avançadas para melhorar o Core Web Vitals, lazy loading, code splitting e estratégias de renderização.',
      date: '2024',
      readTime: '12 min',
      link: '#',
      tags: ['Next.js', 'Performance', 'SEO']
    },
    {
      title: 'Tailwind CSS: Do Básico ao Avançado',
      description: 'Aprenda a criar interfaces modernas e responsivas com Tailwind CSS, incluindo custom themes e componentes reutilizáveis.',
      date: '2024',
      readTime: '8 min',
      link: '#',
      tags: ['Tailwind CSS', 'CSS', 'UI/UX']
    },
    {
      title: 'JavaScript ES6+: Recursos Modernos que Todo Dev Deve Conhecer',
      description: 'Arrow functions, destructuring, spread operator, async/await e outros recursos essenciais do JavaScript moderno.',
      date: '2023',
      readTime: '15 min',
      link: '#',
      tags: ['JavaScript', 'ES6+', 'Frontend']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="writing" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4">
              Artigos & <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Tutoriais</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl">
              Compartilhando conhecimento sobre React, JavaScript e desenvolvimento Frontend moderno
            </p>
          </motion.div>

          {/* Articles Grid */}
          <div className="space-y-6">
            {articles.map((article, index) => (
              <motion.a
                key={index}
                href={article.link}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="group block p-6 rounded-xl border border-slate-800 bg-slate-900/30 backdrop-blur-sm hover:bg-slate-900/60 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  {/* Date & Read Time */}
                  <div className="sm:w-32 flex-shrink-0">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className="text-sm text-slate-600 mt-1">
                      {article.readTime} leitura
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                      {article.title}
                      <ArrowUpRight size={18} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-slate-400 mb-4">
                      {article.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-medium text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* View All Link */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold group"
            >
              Ver todos os artigos
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Writing
