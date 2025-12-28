'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

const Footer = () => {
  const { t } = useTranslation()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/gab01012025', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/gabriel-barreto-610a72370', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:gabrielbarreto900@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold text-white mb-4 inline-block">
              GB<span className="text-emerald-400">.</span>
            </a>
            <p className="text-slate-400 text-sm max-w-sm mb-4">
              {t('footerDescription')}
            </p>
            <p className="text-slate-500 text-sm">
              {t('lisbon')} 🇵🇹
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('navigation')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">{t('home')}</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">{t('about')}</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">{t('projects')}</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">{t('contact')}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('servicesFooter')}</h4>
            <ul className="space-y-2">
              <li><span className="text-slate-400 text-sm">{t('crmIntegrations')}</span></li>
              <li><span className="text-slate-400 text-sm">{t('restApis')}</span></li>
              <li><span className="text-slate-400 text-sm">{t('telegramBots')}</span></li>
              <li><span className="text-slate-400 text-sm">{t('automations')}</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Gabriel Barreto. {t('allRightsReserved')}.
          </p>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800/50 hover:bg-emerald-500/20 border border-slate-700 hover:border-emerald-500/50 rounded-lg flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              className="w-10 h-10 bg-emerald-500 hover:bg-emerald-600 rounded-lg flex items-center justify-center text-white transition-all"
              aria-label={t('backToTop')}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
