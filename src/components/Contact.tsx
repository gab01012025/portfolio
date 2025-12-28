'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'

const Contact = () => {
  const { t, language } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error(
        language === 'pt' ? 'Preencha todos os campos.' : 'Please fill in all fields.',
        { duration: 3000, position: 'bottom-center' }
      )
      return
    }

    setIsSubmitting(true)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_aorwa1q',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_3wk03g9',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Gabriel Barreto',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'abNLcfFa_DERmji_J'
      )

      setIsSuccess(true)
      toast.success(
        language === 'pt' ? 'Mensagem enviada!' : 'Message sent!',
        { duration: 4000, position: 'bottom-center' }
      )
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setIsSuccess(false), 3000)
    } catch {
      toast.error(
        language === 'pt' ? 'Erro ao enviar. Tente o WhatsApp.' : 'Send error. Try WhatsApp.',
        { duration: 4000, position: 'bottom-center' }
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: Mail, text: 'gabrielbarreto900@gmail.com', href: 'mailto:gabrielbarreto900@gmail.com' },
    { icon: Phone, text: '+351 969 318 391', href: 'tel:+351969318391' },
    { icon: MapPin, text: 'Lisboa, Portugal', href: '#' },
  ]

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-100">
            {t('contactTitle')}
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors p-3 rounded-lg hover:bg-slate-800/50"
                >
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span>{text}</span>
                </a>
              ))}
            </div>

            <a
              href="https://wa.me/351969318391"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>

            <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
              <h4 className="font-semibold text-slate-100 mb-3">{t('availability')}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t('availabilityText')}
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-slate-300">
                  {language === 'pt' ? 'Disponível agora' : 'Available now'}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-slate-300 mb-2 text-sm font-medium">
                {t('yourName')}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none transition-colors"
                placeholder={t('yourName')}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-slate-300 mb-2 text-sm font-medium">
                {t('yourEmail')}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none transition-colors"
                placeholder={t('yourEmail')}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-slate-300 mb-2 text-sm font-medium">
                {t('yourMessage')}
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                placeholder={t('yourMessage')}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`w-full py-3 font-medium rounded-lg transition-colors flex items-center justify-center gap-2 ${
                isSuccess
                  ? 'bg-green-600 text-white'
                  : isSubmitting
                  ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                  : 'bg-emerald-600 text-white hover:bg-emerald-700'
              }`}
            >
              {isSuccess ? (
                <>
                  <CheckCircle2 size={18} />
                  {language === 'pt' ? 'Enviado!' : 'Sent!'}
                </>
              ) : isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  {language === 'pt' ? 'Enviando...' : 'Sending...'}
                </>
              ) : (
                <>
                  <Send size={18} />
                  {t('sendMessage')}
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
      <Toaster />
    </section>
  )
}

export default Contact
