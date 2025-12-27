'use client'

import { motion } from 'framer-motion'
import { Webhook, Database, Bot, Zap } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

const About = () => {
  const { t } = useTranslation()
  
  const services = [
    {
      icon: Webhook,
      title: t('integrations'),
      description: t('integrationsDesc'),
    },
    {
      icon: Database,
      title: t('apis'),
      description: t('apisDesc'),
    },
    {
      icon: Bot,
      title: t('bots'),
      description: t('botsDesc'),
    },
    {
      icon: Zap,
      title: t('automations'),
      description: t('automationsDesc'),
    },
  ]

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-100">
            {t('aboutTitle')}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t('aboutSubtitle')}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 mb-12"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              {t('aboutDescription')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:border-emerald-500/30 transition-colors"
              >
                <service.icon className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-slate-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
