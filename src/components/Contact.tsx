'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `*${t('subject')}:* ${formData.subject}%0A%0A*${t('yourName')}:* ${formData.name}%0A*${t('email')}:* ${formData.email}%0A%0A*${t('yourMessage')}:*%0A${formData.message}`
    
    const whatsappUrl = `https://wa.me/351969318391?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const contactInfo = [
    {
      icon: Phone,
      label: t('phone'),
      value: '+351 969 318 391',
      href: 'tel:+351969318391',
    },
    {
      icon: Mail,
      label: t('email'),
      value: 'gabrielbarreto900@gmail.com',
      href: 'mailto:gabrielbarreto900@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Gabriel Barreto',
      href: 'https://linkedin.com/in/gabriel-barreto-610a72370',
    },
    {
      icon: MapPin,
      label: t('location'),
      value: t('lisbon'),
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium mb-4">
            {t('contact')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contactSubtitle')}
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <h3 className="text-xl font-semibold text-white mb-6">{t('orContactDirectly')}</h3>
              
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-emerald-500/50 transition-all group"
                    >
                      <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                        <item.icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">{item.label}</p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-xl">
                      <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">{item.label}</p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 sm:p-8">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">{t('yourName')}</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="Gabriel"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">{t('yourEmail')}</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="gabriel@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-slate-300 text-sm font-medium mb-2">{t('subject')}</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-colors"
                    required
                  >
                    <option value="">{t('selectSubject')}</option>
                    <option value="crm-integration">{t('crmIntegration')}</option>
                    <option value="api-rest">{t('restApi')}</option>
                    <option value="bot">{t('telegramBot')}</option>
                    <option value="automation">{t('automation')}</option>
                    <option value="other">{t('other')}</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label className="block text-slate-300 text-sm font-medium mb-2">{t('yourMessage')}</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                    placeholder={t('tellAboutProject')}
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/25"
                >
                  <Send className="w-5 h-5" />
                  {t('sendWhatsApp')}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
