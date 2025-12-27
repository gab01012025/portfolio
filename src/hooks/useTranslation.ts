'use client'

import { useEffect, useState } from 'react'

type Language = 'pt' | 'en'

const translations = {
  pt: {
    // Header
    home: 'Home',
    about: 'Serviços',
    skills: 'Skills',
    projects: 'Projetos',
    contact: 'Contato',
    hire: 'Contratar',
    
    // Hero
    availableForProjects: 'Disponível para projetos',
    hello: 'Olá, sou',
    role: 'Backend Developer & Integrações',
    heroDescription: 'Desenvolvo APIs, integrações de sistemas e automações. Especializado em conectar CRMs com plataformas de ads, criar webhooks e APIs REST.',
    projects_count: 'Projetos',
    delivery: 'Entrega',
    response: 'Resposta',
    letsWorkTogether: 'Fale Comigo',
    viewWorks: 'Ver Projetos',
    
    // About/Services
    aboutTitle: 'O que faço',
    aboutSubtitle: 'Soluções backend para o seu negócio',
    aboutDescription: 'Sou desenvolvedor backend freelancer baseado em Lisboa. Trabalho com empresas e agências que precisam conectar sistemas, automatizar processos ou criar APIs. Meu foco é entregar soluções que funcionam e são fáceis de manter.',
    
    integrations: 'Integrações',
    integrationsDesc: 'Conecto CRMs, ERPs e plataformas de marketing. Piperun, RD Station, Meta Ads, Google Ads.',
    apis: 'APIs RESTful',
    apisDesc: 'Crio APIs com Node.js/Express ou Python/FastAPI. Autenticação, documentação, deploy.',
    bots: 'Bots & Scraping',
    botsDesc: 'Desenvolvo bots para WhatsApp, Telegram e Discord. Coleta de dados automatizada.',
    automations: 'Automações',
    automationsDesc: 'Automatizo processos de negócio com n8n, webhooks e scripts personalizados.',
    
    // Skills
    skillsTitle: 'Tecnologias',
    skillsDescription: 'Stack principal que uso nos projetos',
    
    // Projects
    projectsTitle: 'Projetos',
    projectsSubtitle: 'Alguns trabalhos recentes',
    filterAll: 'Todos',
    filterIntegration: 'Integrações',
    filterApi: 'APIs',
    featured: 'Destaque',
    viewMoreGithub: 'Ver mais no GitHub',
    
    // Contact
    contactTitle: 'Vamos conversar?',
    contactSubtitle: 'Descreva seu projeto e respondo em até 24 horas.',
    contactInfo: 'Contato',
    availability: 'Disponibilidade',
    availabilityText: 'Disponível para projetos de integrações, APIs e automações. Trabalho remoto para clientes em Portugal, Brasil e Europa.',
    yourName: 'Nome',
    yourEmail: 'Email',
    yourMessage: 'Descreva seu projeto',
    sendMessage: 'Enviar',
    or: 'ou',
    contactDirect: 'Contato direto',
    
    // Footer
    madeWith: 'Desenvolvido por',
    by: '',
    allRightsReserved: '',
  },
  en: {
    // Header
    home: 'Home',
    about: 'Services',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    hire: 'Hire Me',
    
    // Hero
    availableForProjects: 'Available for projects',
    hello: "Hi, I'm",
    role: 'Backend Developer & Integrations',
    heroDescription: 'I build APIs, system integrations and automations. Specialized in connecting CRMs with ad platforms, webhooks and REST APIs.',
    projects_count: 'Projects',
    delivery: 'Delivery',
    response: 'Response',
    letsWorkTogether: 'Contact Me',
    viewWorks: 'View Projects',
    
    // About/Services
    aboutTitle: 'What I do',
    aboutSubtitle: 'Backend solutions for your business',
    aboutDescription: "I'm a freelance backend developer based in Lisbon. I work with companies and agencies that need to connect systems, automate processes or build APIs. My focus is delivering solutions that work and are easy to maintain.",
    
    integrations: 'Integrations',
    integrationsDesc: 'I connect CRMs, ERPs and marketing platforms. Piperun, RD Station, Meta Ads, Google Ads.',
    apis: 'RESTful APIs',
    apisDesc: 'I build APIs with Node.js/Express or Python/FastAPI. Auth, docs, deployment.',
    bots: 'Bots & Scraping',
    botsDesc: 'I develop bots for WhatsApp, Telegram and Discord. Automated data collection.',
    automations: 'Automations',
    automationsDesc: 'I automate business processes with n8n, webhooks and custom scripts.',
    
    // Skills
    skillsTitle: 'Technologies',
    skillsDescription: 'Main stack I use in projects',
    
    // Projects
    projectsTitle: 'Projects',
    projectsSubtitle: 'Some recent work',
    filterAll: 'All',
    filterIntegration: 'Integrations',
    filterApi: 'APIs',
    featured: 'Featured',
    viewMoreGithub: 'View more on GitHub',
    
    // Contact
    contactTitle: "Let's talk?",
    contactSubtitle: 'Describe your project and I will respond within 24 hours.',
    contactInfo: 'Contact',
    availability: 'Availability',
    availabilityText: 'Available for integration, API and automation projects. Remote work for clients in Portugal, Brazil and Europe.',
    yourName: 'Name',
    yourEmail: 'Email',
    yourMessage: 'Describe your project',
    sendMessage: 'Send',
    or: 'or',
    contactDirect: 'Direct contact',
    
    // Footer
    madeWith: 'Developed by',
    by: '',
    allRightsReserved: '',
  },
}

export function useTranslation() {
  const [language, setLanguage] = useState<Language>('pt')

  useEffect(() => {
    const savedLang = (localStorage.getItem('language') as Language) || 'pt'
    setLanguage(savedLang)

    const handleLanguageChange = (event: CustomEvent<Language>) => {
      setLanguage(event.detail)
    }

    window.addEventListener('languageChange', handleLanguageChange as EventListener)
    
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener)
    }
  }, [])

  const t = (key: keyof typeof translations.pt): string => {
    return translations[language][key] || key
  }

  return { t, language }
}
