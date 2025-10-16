'use client'

import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'

const Skills = () => {
  const { t } = useTranslation()
  
  const skillCategories = [
    {
      title: t('frontend'),
      skills: ['React', 'Next.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Design', 'REST APIs'],
      color: 'indigo',
    },
    {
      title: t('backendDatabase'),
      skills: ['Node.js', 'Express', 'MongoDB', 'MongoDB Atlas', 'Git/GitHub', 'JWT'],
      color: 'purple',
    },
    {
      title: t('toolsLearning'),
      skills: ['Chart.js', 'Linux/CLI', 'Vite', 'TypeScript', 'Jest', 'React Router', 'Context API'],
      color: 'pink',
    },
  ]

  return (
    <section id="skills" className="py-20 bg-slate-950 relative overflow-hidden">
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
              {t('skillsTitle')}
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t('skillsDescription')}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl hover:border-indigo-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <div className={`w-2 h-2 rounded-full bg-${category.color}-400 group-hover:scale-150 transition-all`} />
                    <span className="text-slate-300 group-hover:text-white transition-colors">{skill}</span>
                  </motion.div>
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
