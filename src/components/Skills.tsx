'use client'

import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'

const Skills = () => {
  const { t } = useTranslation()
  
  const skillCategories = [
    {
      title: 'Backend & APIs',
      icon: '⚡',
      color: 'emerald',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 90 },
        { name: 'Python', level: 75 },
        { name: 'FastAPI', level: 70 },
      ]
    },
    {
      title: 'Databases',
      icon: '🗄️',
      color: 'blue',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Redis', level: 60 },
        { name: 'Mongoose ODM', level: 85 },
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: '🛠️',
      color: 'purple',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'Linux/CLI', level: 75 },
        { name: 'CI/CD', level: 70 },
      ]
    },
    {
      title: 'Integrações',
      icon: '🔗',
      color: 'orange',
      skills: [
        { name: 'Meta CAPI', level: 85 },
        { name: 'Webhooks', level: 90 },
        { name: 'REST APIs', level: 90 },
        { name: 'n8n', level: 70 },
      ]
    },
  ]

  const colorClasses = {
    emerald: 'from-emerald-500 to-emerald-400',
    blue: 'from-blue-500 to-blue-400',
    purple: 'from-purple-500 to-purple-400',
    orange: 'from-orange-500 to-orange-400',
  }

  const additionalSkills = [
    'JWT/OAuth', 'REST APIs', 'WebSockets', 'Jest', 'Joi Validation',
    'Telegram Bot API', 'WhatsApp API', 'Axios', 'Postman', 'VS Code'
  ]

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-sm text-emerald-400 mb-4">
            Stack Técnica
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Tecnologias & Skills
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            As ferramentas que uso para criar soluções robustas e escaláveis
          </p>
        </motion.div>

        {/* Main skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl hover:border-slate-600 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${colorClasses[category.color as keyof typeof colorClasses]} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h4 className="text-center text-slate-400 text-sm font-medium mb-6">Outras tecnologias</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm rounded-full hover:border-emerald-500/50 hover:text-emerald-400 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
