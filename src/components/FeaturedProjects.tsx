'use client'
import { ExternalLink, Github, Star, TrendingUp } from 'lucide-react'

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Task Manager",
      description: "Aplicação completa de gerenciamento de tarefas com autenticação, categorias e filtros avançados. Interface intuitiva e responsiva.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
      github: "https://github.com/gabrielbarreto/task-manager",
      demo: "https://task-manager-demo.vercel.app",
      color: "from-blue-500 to-cyan-500",
      featured: true,
      metrics: { users: "1.2k+", rating: "4.9" }
    },
    {
      id: 2,
      title: "DevFinance",
      description: "Dashboard financeiro para desenvolvedores com controle de receitas, despesas e relatórios detalhados com gráficos interativos.",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Chart.js"],
      github: "https://github.com/gabrielbarreto/devfinance",
      demo: "https://devfinance-demo.vercel.app",
      color: "from-green-500 to-emerald-500",
      featured: true,
      metrics: { users: "800+", rating: "4.8" }
    },
    {
      id: 3,
      title: "Secret Word Game",
      description: "Jogo interativo de adivinhação de palavras com múltiplas categorias, sistema de pontuação e design gamificado.",
      technologies: ["React", "TypeScript", "CSS Modules", "Local Storage"],
      github: "https://github.com/gabrielbarreto/secret-word-game",
      demo: "https://secret-word-demo.vercel.app",
      color: "from-purple-500 to-pink-500",
      featured: false,
      metrics: { users: "2.5k+", rating: "5.0" }
    },
    {
      id: 4,
      title: "MiniBlog",
      description: "Plataforma de blog minimalista com editor de texto rico, categorização, sistema de comentários e otimização SEO.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "Markdown"],
      github: "https://github.com/gabrielbarreto/miniblog",
      demo: "https://miniblog-demo.vercel.app",
      color: "from-orange-500 to-red-500",
      featured: false,
      metrics: { users: "500+", rating: "4.7" }
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-4">
            <Star className="text-purple-400" size={16} />
            <span className="text-purple-400 text-sm font-medium">Portfolio</span>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-4">Projetos em Destaque</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Alguns dos meus trabalhos mais recentes, demonstrando diferentes tecnologias e abordagens de desenvolvimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] card-hover"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Project header with gradient */}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <Star size={12} className="mr-1 fill-current" />
                    Destaque
                  </div>
                )}
                
                {/* Animated pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-grid-pattern"></div>
                </div>
                
                {/* Project title overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
                  <h3 className="text-3xl font-bold text-white text-center px-4">{project.title}</h3>
                </div>

                {/* Hover overlay with quick actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-full transition-colors"
                  >
                    <Github size={20} className="text-white" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-full transition-colors"
                  >
                    <ExternalLink size={20} className="text-white" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                {/* Metrics */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center text-gray-400 text-sm">
                    <TrendingUp size={14} className="mr-1 text-green-400" />
                    {project.metrics.users} users
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Star size={14} className="mr-1 text-yellow-400 fill-current" />
                    {project.metrics.rating}
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 pt-4 border-t border-gray-800">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 py-2 rounded-lg transition-all duration-200"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Código</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-2 rounded-lg transition-all duration-200 glow-button"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Quer ver mais? Confira meu GitHub para projetos completos e open-source
          </p>
          <a
            href="https://github.com/gabrielbarreto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} />
            <span>Ver Todos os Projetos</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects