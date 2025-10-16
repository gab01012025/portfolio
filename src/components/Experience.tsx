'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Calendar } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Freelance Web Developer',
      company: 'Remote',
      period: 'Jan 2023 - Jul 2024',
      description: 'Construção de websites responsivos para pequenos negócios usando HTML, CSS e JavaScript. Entrega de soluções tailored com UI limpa e performance otimizada. Colaboração direta com clientes para gather requirements e iterate quickly.',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    },
  ]

  const education = [
    {
      degree: 'The Complete 2025 Web Development Bootcamp',
      institution: 'Udemy (Angela Yu)',
      period: 'Ongoing',
      description: 'Bootcamp completo covering HTML, CSS, JavaScript, React, Node.js, MongoDB and full-stack development.',
    },
  ]

  return (
    <section id="experience" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Experiência & Educação
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Minha trajetória profissional e acadêmica
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Experiência Profissional */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
                <Briefcase className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Experiência Profissional</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 pb-8 border-l-2 border-indigo-500/20 last:pb-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-500 rounded-full border-4 border-slate-950" />
                  
                  <div className="p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-indigo-500/50 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                      <div className="flex items-center gap-2 text-slate-400 text-sm mt-2 sm:mt-0">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-indigo-400 font-semibold mb-3">{exp.company}</p>
                    <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Educação */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <GraduationCap className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Educação</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-purple-500/20"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-950" />
                  
                  <div className="p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                      <div className="flex items-center gap-2 text-slate-400 text-sm mt-2 sm:mt-0">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-purple-400 font-semibold mb-3">{edu.institution}</p>
                    <p className="text-slate-300 leading-relaxed">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
