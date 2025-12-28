'use client'

import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'

const Skills = () => {
  const { t } = useTranslation()
  
  const skillCategories = [
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 90 },
        { name: 'Python', level: 75 },
        { name: 'FastAPI', level: 70 },
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Redis', level: 60 },
        { name: 'Mongoose', level: 85 },
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'Linux', level: 75 },
        { name: 'CI/CD', level: 70 },
      ]
    },
    {
      title: 'Integrações',
      skills: [
        { name: 'Meta CAPI', level: 85 },
        { name: 'Webhooks', level: 90 },
        { name: 'REST APIs', level: 90 },
        { name: 'n8n', level: 70 },
      ]
    },
  ]

  return (
    <section id="skills" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('skillsTitle')}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Stack focada em desenvolvimento backend e integrações
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-white mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-300 text-sm">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
