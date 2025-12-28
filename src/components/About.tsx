'use client'

import { motion } from 'framer-motion'
import { Webhook, Server, Bot, Workflow, ArrowRight, CheckCircle } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

const About = () => {
  const { t } = useTranslation()
  
  const services = [
    {
      icon: Webhook,
      title: 'Integrações',
      description: 'Conecto CRMs e ERPs com plataformas de anúncios (Meta, Google) usando APIs e webhooks profissionais.',
      tags: ['Meta Ads CAPI', 'Google Ads', 'Piperun', 'RD Station'],
      color: 'emerald',
      highlight: 'Especialidade principal'
    },
    {
      icon: Server,
      title: 'APIs RESTful',
      description: 'Desenvolvo APIs escaláveis, seguras e bem documentadas para aplicações web e mobile.',
      tags: ['Node.js', 'Express', 'FastAPI', 'JWT/OAuth'],
      color: 'blue',
      highlight: null
    },
    {
      icon: Bot,
      title: 'Bots & Automações',
      description: 'Crio bots para Telegram, WhatsApp e Discord que automatizam tarefas e melhoram processos.',
      tags: ['Telegram Bot', 'WhatsApp API', 'Discord.js', 'Web Scraping'],
      color: 'purple',
      highlight: null
    },
    {
      icon: Workflow,
      title: 'Automações de Processos',
      description: 'Automatizo fluxos de trabalho com ferramentas low-code e scripts customizados.',
      tags: ['n8n', 'Webhooks', 'Cron Jobs', 'Scripts Python'],
      color: 'orange',
      highlight: null
    },
  ]

  const colorClasses = {
    emerald: {
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-400',
      border: 'border-emerald-500/30',
      glow: 'group-hover:shadow-emerald-500/20'
    },
    blue: {
      bg: 'bg-blue-500/10',
      text: 'text-blue-400',
      border: 'border-blue-500/30',
      glow: 'group-hover:shadow-blue-500/20'
    },
    purple: {
      bg: 'bg-purple-500/10',
      text: 'text-purple-400',
      border: 'border-purple-500/30',
      glow: 'group-hover:shadow-purple-500/20'
    },
    orange: {
      bg: 'bg-orange-500/10',
      text: 'text-orange-400',
      border: 'border-orange-500/30',
      glow: 'group-hover:shadow-orange-500/20'
    },
  }

  const benefits = [
    'Código limpo e bem documentado',
    'Comunicação clara e transparente',
    'Entrega dentro do prazo',
    'Suporte pós-entrega incluído',
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-sm text-emerald-400 mb-4">
            Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            O que eu faço
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Soluções backend sob medida para o seu negócio
          </p>
        </motion.div>

        {/* About text with benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Sobre mim</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Sou desenvolvedor backend focado em criar soluções que realmente funcionam. 
                  Com experiência em integrações de sistemas, APIs e automações, ajudo empresas 
                  a otimizar seus processos e conectar ferramentas de forma eficiente.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Baseado em Lisboa, Portugal, trabalho remotamente com clientes de todo o mundo.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-400 mb-4">Por que trabalhar comigo</h4>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative p-6 bg-slate-800/20 border border-slate-700/50 rounded-2xl hover:border-slate-600 transition-all duration-300 hover:shadow-xl ${colors.glow}`}
              >
                {service.highlight && (
                  <span className={`absolute -top-3 right-6 px-3 py-1 ${colors.bg} ${colors.text} text-xs font-medium rounded-full border ${colors.border}`}>
                    {service.highlight}
                  </span>
                )}
                
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${colors.bg} ${colors.text}`}>
                  <service.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-5 leading-relaxed">{service.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-xl font-medium transition-all"
          >
            Solicitar orçamento gratuito
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default About
