'use client'

import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'

const Skills = () => {
  const { t } = useTranslation()

  const skillCategories = [
    {
      title: t('backendApis'),
      icon: '⚙️',
      color: 'bg-blue-500',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'FastAPI', level: 70 },
        { name: 'TypeScript', level: 80 },
      ],
    },
    {
      title: t('databases'),
      icon: '🗄️',
      color: 'bg-emerald-500',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Redis', level: 65 },
        { name: 'Firebase', level: 70 },
      ],
    },
    {
      title: t('devops'),
      icon: '🚀',
      color: 'bg-purple-500',
      skills: [
        { name: 'Docker', level: 75 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'CI/CD', level: 70 },
        { name: 'Linux', level: 75 },
      ],
    },
    {
      title: t('integrationsSkill'),
      icon: '🔗',
      color: 'bg-orange-500',
      skills: [
        { name: 'Webhooks', level: 90 },
        { name: 'REST APIs', level: 95 },
        { name: 'Meta Ads API', level: 80 },
        { name: 'n8n', level: 75 },
      ],
    },
  ]

  const additionalSkills = [
    'Telegram Bot API', 'WhatsApp API', 'Discord.js', 'Piperun', 
    'RD Station', 'Google Ads API', 'JWT', 'OAuth', 'Postman',
    'Swagger', 'Jest', 'Axios', 'Prisma'
  ]

  return (
    <section id="skills" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium mb-4">
            {t('skillsTitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t('skillsSubtitle')}
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1 }}
                        className={`h-full ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">{t('otherSkills')}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(16, 185, 129, 0.2)' }}
                className="px-4 py-2 bg-slate-700/50 border border-slate-600 text-slate-300 text-sm rounded-full hover:text-emerald-400 hover:border-emerald-500/50 transition-all cursor-default"
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
