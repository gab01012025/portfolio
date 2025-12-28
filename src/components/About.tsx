'use client'

import { motion } from 'framer-motion'
import { Webhook, Server, Bot, Workflow, ArrowRight } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

const About = () => {
  const { t } = useTranslation()
  
  const services = [
    {
      icon: Webhook,
      title: t('integrations'),
      description: t('integrationsDesc'),
      tags: ['Meta Ads', 'Google Ads', 'CRMs', 'ERPs'],
      color: 'emerald'
    },
    {
      icon: Server,
      title: t('apis'),
      description: t('apisDesc'),
      tags: ['Node.js', 'Express', 'FastAPI', 'JWT'],
      color: 'blue'
    },
    {
      icon: Bot,
      title: t('bots'),
      description: t('botsDesc'),
      tags: ['Telegram', 'WhatsApp', 'Discord', 'Scraping'],
      color: 'purple'
    },
    {
      icon: Workflow,
      title: t('automations'),
      description: t('automationsDesc'),
      tags: ['n8n', 'Webhooks', 'Cron Jobs', 'Scripts'],
      color: 'orange'
    },
  ]

  const colorClasses = {
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  }

  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('aboutTitle')}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t('aboutSubtitle')}
          </p>
        </motion.div>

        {/* About text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
            <p className="text-slate-300 text-lg leading-relaxed">
              {t('aboutDescription')}
            </p>
          </div>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 bg-slate-800/20 border border-slate-700/50 rounded-xl hover:border-slate-600 transition-all"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                <service.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-slate-400 mb-4">{service.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs bg-slate-700/50 text-slate-300 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium"
          >
            Solicitar orçamento
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default About
