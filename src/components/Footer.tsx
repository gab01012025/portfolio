'use client'

import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/gab01012025', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contato@gabrielbarreto.dev', label: 'Email' },
  ]

  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-white">
              GB<span className="text-emerald-400">.</span>
            </span>
            <span className="text-slate-400 text-sm">Backend Developer</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800/50 hover:bg-emerald-500 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-sm flex items-center gap-1">
            © {currentYear} Gabriel Barreto
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
