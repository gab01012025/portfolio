'use client'

import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'

const Footer = () => {
  const { t } = useTranslation()
  const socialLinks = [
    { icon: Github, href: 'https://github.com/gab01012025', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/gabriel-barreto-610a72370', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:gabrielbarreto900@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-slate-900 text-slate-400 rounded-xl border border-slate-800 hover:border-indigo-500 hover:text-indigo-400 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span>{t('madeWith')}</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>{t('by')} Gabriel Barreto</span>
          </div>

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
