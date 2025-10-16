'use client'

import { Globe } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { motion } from 'framer-motion'

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-4 py-3 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 font-semibold"
      aria-label="Toggle language"
    >
      <Globe size={20} />
      <span className="uppercase text-sm">{language}</span>
    </motion.button>
  )
}

export default LanguageToggle
