'use client'

import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'

const Skills = () => {
  const { t } = useTranslation()

  const skillCategories = [
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 85 },
        { name: 'Python', level: 70 },
        { name: 'FastAPI', level: 65 },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'Supabase', level: 75 },
        { name: 'Redis', level: 50 },
      ],
    },
    {
      title: t('integrations'),
      skills: [
        { name: 'REST APIs', level: 90 },
        { name: 'Webhooks', level: 85 },
        { name: 'Meta CAPI', level: 80 },
        { name: 'OAuth/JWT', level: 80 },
      ],
    },
    {
      title: 'DevOps',
      skills: [
        { name: 'Docker', level: 70 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'Linux', level: 75 },
        { name: 'CI/CD', level: 60 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-100">
            {t('skillsTitle')}
          </h2>
          <p className="text-slate-400 text-lg">
            {t('skillsDescription')}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-emerald-400 mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
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
                        transition={{ duration: 0.8, delay: 0.2 }}
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
