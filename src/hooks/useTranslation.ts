'use client'

import { useLanguage } from '@/context/LanguageContext'

const translations = {
  en: {
    // Header
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
    
    // Hero
    availableForProjects: 'Available for Projects',
    greeting: 'Backend Developer & Integrations',
    name: 'Gabriel Barreto',
    role: 'Backend Developer',
    heroDescription: 'I build APIs, integrations and bots that automate processes and connect systems. Specialized in Node.js, Express, and professional webhooks.',
    viewProjects: 'View Projects',
    getInTouch: 'Get in Touch',
    
    // About
    aboutTitle: 'About Me',
    aboutSubtitle: 'Specialized in backend development and systems integration',
    aboutDescription: 'Backend developer focused on building scalable APIs, CRM integrations with advertising platforms, and automation bots. I work with Node.js, Express, Python, and modern tools like Docker and CI/CD. Based in Portugal, available for projects worldwide.',
    integrations: 'Integrations',
    integrationsDesc: 'CRM connection with Meta Ads, Google Ads, and other platforms.',
    apis: 'REST APIs',
    apisDesc: 'Scalable and secure APIs with Node.js, Express, and FastAPI.',
    bots: 'Bots',
    botsDesc: 'Telegram, WhatsApp, and Discord bots for automation.',
    automations: 'Automations',
    automationsDesc: 'Process automation with n8n, webhooks, and custom scripts.',
    
    // Projects
    projectsTitle: 'Projects',
    
    // Skills
    skillsTitle: 'Skills',
    
    // Contact
    contactTitle: 'Get in Touch',
  },
  pt: {
    // Header
    about: 'Sobre',
    projects: 'Projetos',
    skills: 'Skills',
    contact: 'Contato',
    
    // Hero
    availableForProjects: 'Disponível para Projetos',
    greeting: 'Backend Developer & Integrações',
    name: 'Gabriel Barreto',
    role: 'Backend Developer',
    heroDescription: 'Construo APIs, integrações e bots que automatizam processos e conectam sistemas. Especializado em Node.js, Express e webhooks profissionais.',
    viewProjects: 'Ver Projetos',
    getInTouch: 'Entre em Contato',
    
    // About
    aboutTitle: 'Sobre Mim',
    aboutSubtitle: 'Especializado em desenvolvimento backend e integrações de sistemas',
    aboutDescription: 'Desenvolvedor backend focado em criar APIs escaláveis, integrações de CRMs com plataformas de anúncios, e bots de automação. Trabalho com Node.js, Express, Python e ferramentas modernas como Docker e CI/CD. Baseado em Portugal, disponível para projetos em todo o mundo.',
    integrations: 'Integrações',
    integrationsDesc: 'Conexão de CRMs com Meta Ads, Google Ads e outras plataformas.',
    apis: 'APIs RESTful',
    apisDesc: 'APIs escaláveis e seguras com Node.js, Express e FastAPI.',
    bots: 'Bots',
    botsDesc: 'Bots para Telegram, WhatsApp e Discord para automação.',
    automations: 'Automações',
    automationsDesc: 'Automação de processos com n8n, webhooks e scripts customizados.',
    
    // Projects
    projectsTitle: 'Projetos',
    
    // Skills
    skillsTitle: 'Skills',
    
    // Contact
    contactTitle: 'Entre em Contato',
  },
}

export const useTranslation = () => {
  const { language } = useLanguage()

  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key] || translations.en[key] || key
  }

  return { t, language }
}
