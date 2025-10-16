'use client'

import { useEffect, useState } from 'react'
import { Globe } from 'lucide-react'
import { motion } from 'framer-motion'

export default function LanguageToggleSimple() {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLang = localStorage.getItem('language') as 'pt' | 'en' || 'pt'
    setLanguage(savedLang)
    document.documentElement.lang = savedLang
    
    // Dispara evento customizado quando carrega
    window.dispatchEvent(new CustomEvent('languageChange', { detail: savedLang }))
  }, [])

  const toggleLanguage = () => {
    const newLang = language === 'pt' ? 'en' : 'pt'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
    document.documentElement.lang = newLang
    
    // Dispara evento para outros componentes ouvirem
    window.dispatchEvent(new CustomEvent('languageChange', { detail: newLang }))
    
    // Força reload da página para aplicar traduções
    window.location.reload()
  }

  if (!mounted) return null

  return (
    <motion.button
      onClick={toggleLanguage}
      className="fixed bottom-6 right-6 z-50 p-4 bg-slate-800/90 backdrop-blur-sm text-slate-100 rounded-full border border-slate-700 hover:bg-slate-700 hover:border-slate-600 shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      aria-label="Toggle language"
    >
      <div className="flex items-center gap-2">
        <Globe size={20} />
        <span className="text-sm font-semibold">{language.toUpperCase()}</span>
      </div>
    </motion.button>
  )
}
