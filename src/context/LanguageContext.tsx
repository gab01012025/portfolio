'use client'

import { createContext, useContext, useState, useEffect } from 'react'

type Language = 'pt' | 'en'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  pt: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'Serviços',
    'nav.skills': 'Skills',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    'nav.hire': 'Contratar',

    // Hero
    'hero.available': 'Disponível para projetos',
    'hero.hello': 'Olá, sou',
    'hero.role': 'Backend Developer & Integrações',
    'hero.subtitle': 'Node.js ■ Python ■ APIs ■ Webhooks',
    'hero.description': 'Desenvolvo APIs, integrações de sistemas e automações. Especializado em conectar CRMs com plataformas de ads, criar webhooks e APIs REST.',
    'hero.stats.years': 'Projetos',
    'hero.stats.projects': 'Entrega',
    'hero.stats.dedication': 'Resposta',
    'hero.cta.work': 'Fale Comigo',
    'hero.cta.projects': 'Ver Projetos',
    'hero.cta.cv': 'CV',

    // About
    'about.title': 'O que faço',
    'about.subtitle': 'Soluções backend para o seu negócio',
    'about.feature1.title': 'Integrações',
    'about.feature1.desc': 'CRMs, ERPs, Meta Ads, Google Ads',
    'about.feature2.title': 'APIs RESTful',
    'about.feature2.desc': 'Node.js, Express, Python, FastAPI',
    'about.feature3.title': 'Bots & Scraping',
    'about.feature3.desc': 'Telegram, WhatsApp, Discord',
    'about.feature4.title': 'Automações',
    'about.feature4.desc': 'n8n, webhooks, scripts',

    // Skills
    'skills.title': 'Tecnologias',
    'skills.subtitle': 'Stack principal que uso nos projetos',

    // Projects
    'projects.title': 'Projetos',
    'projects.subtitle': 'Alguns trabalhos recentes',
    'projects.featured': 'Destaque',
    'projects.project': 'Projeto',
    'projects.viewCode': 'Código',
    'projects.viewDemo': 'Demo',
    'projects.more': 'Ver mais no GitHub',

    // Contact
    'contact.title': 'Vamos conversar?',
    'contact.subtitle': 'Descreva seu projeto e respondo em até 24 horas.',
    'contact.info': 'Contato',
    'contact.availability': 'Disponibilidade',
    'contact.availability.text': 'Disponível para projetos de integrações, APIs e automações. Trabalho remoto para clientes em Portugal, Brasil e Europa.',
    'contact.form.name': 'Nome',
    'contact.form.email': 'Email',
    'contact.form.message': 'Descreva seu projeto...',
    'contact.form.send': 'Enviar',

    // Footer
    'footer.made': '',
    'footer.by': 'Gabriel Barreto',
    'footer.rights': '',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'Services',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.hire': 'Hire Me',

    // Hero
    'hero.available': 'Available for projects',
    'hero.hello': "Hi, I'm",
    'hero.role': 'Backend Developer & Integrations',
    'hero.subtitle': 'Node.js ■ Python ■ APIs ■ Webhooks',
    'hero.description': 'I build APIs, system integrations and automations. Specialized in connecting CRMs with ad platforms, webhooks and REST APIs.',
    'hero.stats.years': 'Projects',
    'hero.stats.projects': 'Delivery',
    'hero.stats.dedication': 'Response',
    'hero.cta.work': 'Contact Me',
    'hero.cta.projects': 'View Projects',
    'hero.cta.cv': 'CV',

    // About
    'about.title': 'What I do',
    'about.subtitle': 'Backend solutions for your business',
    'about.feature1.title': 'Integrations',
    'about.feature1.desc': 'CRMs, ERPs, Meta Ads, Google Ads',
    'about.feature2.title': 'RESTful APIs',
    'about.feature2.desc': 'Node.js, Express, Python, FastAPI',
    'about.feature3.title': 'Bots & Scraping',
    'about.feature3.desc': 'Telegram, WhatsApp, Discord',
    'about.feature4.title': 'Automations',
    'about.feature4.desc': 'n8n, webhooks, scripts',

    // Skills
    'skills.title': 'Technologies',
    'skills.subtitle': 'Main stack I use in projects',

    // Projects
    'projects.title': 'Projects',
    'projects.subtitle': 'Some recent work',
    'projects.featured': 'Featured',
    'projects.project': 'Project',
    'projects.viewCode': 'Code',
    'projects.viewDemo': 'Demo',
    'projects.more': 'View more on GitHub',

    // Contact
    'contact.title': "Let's talk?",
    'contact.subtitle': 'Describe your project and I will respond within 24 hours.',
    'contact.info': 'Contact',
    'contact.availability': 'Availability',
    'contact.availability.text': 'Available for integration, API and automation projects. Remote work for clients in Portugal, Brazil and Europe.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Describe your project...',
    'contact.form.send': 'Send',

    // Footer
    'footer.made': '',
    'footer.by': 'Gabriel Barreto',
    'footer.rights': '',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLang = localStorage.getItem('language') as Language | null
    if (savedLang) {
      setLanguage(savedLang)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language)
      document.documentElement.lang = language
    }
  }, [language, mounted])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt')
  }

  const t = (key: string): string => {
    const translation = translations[language as keyof typeof translations]
    return (translation as Record<string, string>)[key] || key
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
