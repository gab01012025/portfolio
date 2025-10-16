'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2 } from 'lucide-react'
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
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      toast.error(
        language === 'pt'
          ? '⚠️ Por favor, preencha todos os campos.'
          : '⚠️ Please fill in all fields.',
        {
          duration: 3000,
          position: 'bottom-center',
        }
      )
      return
    }

    setIsSubmitting(true)

    try {
      // EmailJS send with explicit parameters
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
        language === 'pt' 
          ? '✅ Mensagem enviada com sucesso! Entrarei em contato em breve.' 
          : '✅ Message sent successfully! I\'ll get back to you soon.',
        {
          duration: 5000,
          position: 'bottom-center',
        }
      )

      // Limpar formulário
      setFormData({ name: '', email: '', message: '' })
      
      // Reset success state após 3 segundos
      setTimeout(() => setIsSuccess(false), 3000)
    } catch (error) {
      const emailError = error as { text?: string }
      toast.error(
        language === 'pt'
          ? `❌ Erro ao enviar: ${emailError?.text || 'Tente novamente.'}`
          : `❌ Send error: ${emailError?.text || 'Please try again.'}`,
        {
          duration: 5000,
          position: 'bottom-center',
        }
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: Mail, text: 'gabrielbarreto900@gmail.com', href: 'mailto:gabrielbarreto900@gmail.com' },
    { icon: Phone, text: '+351 969 318 391', href: 'tel:+351969318391' },
    { icon: MapPin, text: 'Lisbon, Portugal', href: '#' },
  ]

  return (
    <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
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
              {t('contactTitle')}
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">{t('contactInfo')}</h3>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, text, href }) => (
                  <motion.a
                    key={text}
                    href={href}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 text-slate-300 hover:text-indigo-400 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-indigo-500/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span>{text}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl">
              <h4 className="text-xl font-bold text-white mb-4">{t('availability')}</h4>
              <p className="text-slate-300 leading-relaxed mb-6">
                {t('availabilityText')}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm">Disponível para projetos</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                  <span className="text-sm">Resposta em até 24h</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span className="text-sm">Orçamento sem compromisso</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-slate-300 mb-2 font-medium">
                {t('yourName')}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                placeholder={t('yourName')}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-slate-300 mb-2 font-medium">
                {t('yourEmail')}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                placeholder={t('yourEmail')}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-slate-300 mb-2 font-medium">
                {t('yourMessage')}
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
                placeholder={t('yourMessage')}
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting || isSuccess}
              whileHover={!isSubmitting && !isSuccess ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting && !isSuccess ? { scale: 0.98 } : {}}
              className={`w-full py-4 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                isSuccess
                  ? 'bg-green-600 hover:bg-green-700'
                  : isSubmitting
                  ? 'bg-slate-700 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg hover:shadow-indigo-500/50'
              } text-white`}
            >
              {isSuccess ? (
                <>
                  <CheckCircle2 size={20} />
                  <span>{language === 'pt' ? 'Enviado!' : 'Sent!'}</span>
                </>
              ) : isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  <span>{language === 'pt' ? 'Enviando...' : 'Sending...'}</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  {t('sendMessage')}
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
      <Toaster />
    </section>
  )
}

export default Contact
