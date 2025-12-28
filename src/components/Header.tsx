'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Globe, Sun, Moon } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { useLanguage } from '@/context/LanguageContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [mounted, setMounted] = useState(false)
  const { t } = useTranslation()
  const { language, toggleLanguage } = useLanguage()

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' || 'dark'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('light', savedTheme === 'light')
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('light', newTheme === 'light')
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  const navItems = [
    { href: '#about', label: t('about') },
    { href: '#projects', label: t('projects') },
    { href: '#skills', label: t('skills') },
    { href: '#contact', label: t('contact') },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/95 backdrop-blur-lg border-b border-slate-800/50 shadow-lg shadow-black/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.a 
            href="#" 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl font-bold">
              GB<span className="text-emerald-400">.</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-slate-300 hover:text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-2">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="w-10 h-10 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}

            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded-lg text-slate-300 hover:text-white text-sm transition-all"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase font-medium">{language}</span>
            </button>

            {/* GitHub */}
            <a
              href="https://github.com/gab01012025"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all"
            >
              <Github className="w-5 h-5" />
            </a>

            {/* CTA */}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded-lg transition-all"
            >
              {t('getInTouch')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="flex items-center gap-3 pt-4 mt-2 border-t border-slate-800">
                {mounted && (
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300"
                  >
                    {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    {theme === 'dark' ? 'Light' : 'Dark'}
                  </button>
                )}
                
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-sm"
                >
                  <Globe className="w-4 h-4" />
                  {language === 'pt' ? 'PT' : 'EN'}
                </button>
              </div>
              
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 px-4 py-3 bg-emerald-500 text-white text-center font-medium rounded-lg"
              >
                {t('getInTouch')}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
