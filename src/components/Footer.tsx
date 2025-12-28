'use client'

import { Github, Linkedin, Mail, Phone, Heart, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const links = {
    navigation: [
      { name: 'Sobre', href: '#about' },
      { name: 'Projetos', href: '#projects' },
      { name: 'Skills', href: '#skills' },
      { name: 'Contato', href: '#contact' },
    ],
    services: [
      { name: 'Integrações', href: '#about' },
      { name: 'APIs REST', href: '#about' },
      { name: 'Bots', href: '#about' },
      { name: 'Automações', href: '#about' },
    ],
    social: [
      { icon: Github, href: 'https://github.com/gab01012025', label: 'GitHub' },
      { icon: Linkedin, href: 'https://linkedin.com/in/gabriel-barreto-610a72370', label: 'LinkedIn' },
      { icon: Mail, href: 'mailto:gabrielbarreto900@gmail.com', label: 'Email' },
      { icon: Phone, href: 'https://wa.me/351969318391', label: 'WhatsApp' },
    ],
  }

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white">
                GB<span className="text-emerald-400">.</span>
              </span>
            </a>
            <p className="text-slate-400 mb-4 max-w-sm">
              Backend Developer especializado em integrações de sistemas, APIs REST e automações. 
              Transformando ideias em soluções técnicas robustas.
            </p>
            <div className="flex gap-3">
              {links.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800/50 hover:bg-emerald-500 border border-slate-700 hover:border-emerald-500 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {links.navigation.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {links.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} Gabriel Barreto. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-4">
              <span className="text-slate-500 text-sm">Lisboa, Portugal 🇵🇹</span>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-slate-800 hover:bg-emerald-500 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
