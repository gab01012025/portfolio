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
    'nav.about': 'Sobre',
    'nav.skills': 'Skills',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    'nav.hire': 'Contratar',

    // Hero
    'hero.available': 'Disponível para projetos',
    'hero.hello': 'Olá, sou',
    'hero.role': 'Frontend Developer',
    'hero.subtitle': 'React.js ■ Next.js ■ Tailwind CSS',
    'hero.description': 'Especializado em criar interfaces modernas e responsivas com React e JavaScript. Forte experiência em design, integração de APIs e performance.',
    'hero.stats.years': 'Anos Exp.',
    'hero.stats.projects': 'Projetos',
    'hero.stats.dedication': 'Dedicação',
    'hero.cta.work': 'Vamos Trabalhar Juntos',
    'hero.cta.projects': 'Ver Trabalhos',
    'hero.cta.cv': 'Download CV',

    // About
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Desenvolvedor apaixonado por criar soluções digitais inovadoras',
    'about.feature1.title': 'UI/UX Design',
    'about.feature1.desc': 'Interfaces modernas e intuitivas',
    'about.feature2.title': 'Performance',
    'about.feature2.desc': 'Otimização e carregamento rápido',
    'about.feature3.title': 'Responsive Design',
    'about.feature3.desc': 'Perfeito em todos os dispositivos',
    'about.feature4.title': 'React Expert',
    'about.feature4.desc': 'Componentes reutilizáveis e hooks',

    // Skills
    'skills.title': 'Skills & Tecnologias',
    'skills.subtitle': 'Ferramentas e tecnologias que uso para criar experiências incríveis',

    // Projects
    'projects.title': 'Projetos em Destaque',
    'projects.subtitle': 'Portfólio com projetos full-stack publicados',
    'projects.featured': 'Projeto em Destaque',
    'projects.project': 'Projeto',
    'projects.viewCode': 'Ver Código',
    'projects.viewDemo': 'Ver Demo',
    'projects.more': 'Ver mais no GitHub',

    // Contact
    'contact.title': 'Vamos Conversar?',
    'contact.subtitle': 'Tem um projeto em mente? Entre em contato e vamos criar algo incrível juntos!',
    'contact.info': 'Informações de Contato',
    'contact.availability': 'Disponibilidade',
    'contact.availability.text': 'Disponível para projetos frontend em React/Next.js/JavaScript, desenvolvimento de interfaces modernas e integração de APIs REST. Respondo geralmente em até 24 horas.',
    'contact.form.name': 'Seu nome',
    'contact.form.email': 'seu@email.com',
    'contact.form.message': 'Conte-me sobre seu projeto...',
    'contact.form.send': 'Enviar Mensagem',

    // Footer
    'footer.made': 'Feito com',
    'footer.by': 'por Gabriel Barreto',
    'footer.rights': 'Todos os direitos reservados',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.hire': 'Hire Me',

    // Hero
    'hero.available': 'Available for projects',
    'hero.hello': 'Hello, I am',
    'hero.role': 'Frontend Developer',
    'hero.subtitle': 'React.js ■ Next.js ■ Tailwind CSS',
    'hero.description': 'Specialized in creating modern and responsive interfaces with React and JavaScript. Strong experience in design, API integration and performance.',
    'hero.stats.years': 'Years Exp.',
    'hero.stats.projects': 'Projects',
    'hero.stats.dedication': 'Dedication',
    'hero.cta.work': "Let's Work Together",
    'hero.cta.projects': 'View Work',
    'hero.cta.cv': 'Download CV',

    // About
    'about.title': 'About Me',
    'about.subtitle': 'Developer passionate about creating innovative digital solutions',
    'about.feature1.title': 'UI/UX Design',
    'about.feature1.desc': 'Modern and intuitive interfaces',
    'about.feature2.title': 'Performance',
    'about.feature2.desc': 'Optimization and fast loading',
    'about.feature3.title': 'Responsive Design',
    'about.feature3.desc': 'Perfect on all devices',
    'about.feature4.title': 'React Expert',
    'about.feature4.desc': 'Reusable components and hooks',

    // Skills
    'skills.title': 'Skills & Technologies',
    'skills.subtitle': 'Tools and technologies I use to create amazing experiences',

    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Portfolio with published full-stack projects',
    'projects.featured': 'Featured Project',
    'projects.project': 'Project',
    'projects.viewCode': 'View Code',
    'projects.viewDemo': 'View Demo',
    'projects.more': 'See more on GitHub',

    // Contact
    'contact.title': "Let's Talk?",
    'contact.subtitle': "Have a project in mind? Get in touch and let's create something amazing together!",
    'contact.info': 'Contact Information',
    'contact.availability': 'Availability',
    'contact.availability.text': 'Available for frontend projects in React/Next.js/JavaScript, modern interface development and REST API integration. Usually respond within 24 hours.',
    'contact.form.name': 'Your name',
    'contact.form.email': 'your@email.com',
    'contact.form.message': 'Tell me about your project...',
    'contact.form.send': 'Send Message',

    // Footer
    'footer.made': 'Made with',
    'footer.by': 'by Gabriel Barreto',
    'footer.rights': 'All rights reserved',
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
