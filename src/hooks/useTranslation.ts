'use client'

import { useEffect, useState } from 'react'

type Language = 'pt' | 'en'

const translations = {
  pt: {
    // Header
    home: 'Home',
    about: 'Sobre',
    skills: 'Skills',
    projects: 'Projetos',
    contact: 'Contato',
    hire: 'Contratar',
    
    // Hero
    availableForProjects: 'Disponível para projetos',
    hello: 'Olá, sou',
    frontendDeveloper: 'Frontend Developer',
    letsWorkTogether: 'Vamos Trabalhar Juntos',
    viewWorks: 'Ver Trabalhos',
    downloadCV: 'Download CV',
    yearsExp: 'Anos Exp.',
    projects_count: 'Projetos',
    dedication: 'Dedicação',
    scroll: 'Scroll',
    heroDescription: 'Especializado em criar interfaces modernas e responsivas com React e JavaScript. Forte experiência em design, integração de APIs e performance.',
    
    // About
    aboutTitle: 'Sobre Mim',
    aboutSubtitle: 'Desenvolvedor Frontend Freelancer apaixonado por criar experiências',
    aboutDescription: 'Sou um Desenvolvedor Frontend Freelancer especializado em React.js e Next.js, com forte experiência em criar interfaces web modernas, responsivas e de alto desempenho. Atualmente morando em Lisboa, Portugal, trabalho de forma independente transformando designs em código limpo e eficiente para clientes ao redor do mundo.',
    uiuxDesign: 'UI/UX Design',
    uiuxDescription: 'Implemento designs pixel-perfect com foco em acessibilidade',
    performance: 'Performance',
    performanceDescription: 'Otimizo aplicações para velocidade e eficiência',
    responsive: 'Responsive Design',
    responsiveDescription: 'Mobile-first, compatível com todos os dispositivos',
    reactExpert: 'React Expert',
    reactExpertDescription: 'Domínio em React, hooks, context e estado global',
    
    // Experience
    experienceTitle: 'Experiência',
    workExperience: 'Experiência Profissional',
    present: 'Atual',
    
    // Skills
    skillsTitle: 'Skills & Tecnologias',
    skillsDescription: 'Ferramentas e tecnologias que uso para criar experiências incríveis',
    frontend: 'Frontend',
    backendDatabase: 'Backend & Database',
    toolsLearning: 'Tools & Learning',
    
    // Projects
    projectsTitle: 'Projetos em',
    projectsHighlight: 'Destaque',
    projectsSubtitle: 'Portfólio com projetos full-stack publicados',
    featuredProject: 'Projeto em Destaque',
    project: 'Projeto',
    viewCode: 'Ver Código',
    viewDemo: 'Ver Demo',
    viewMoreGithub: 'Ver mais no GitHub',
    
    // Contact
    contactTitle: 'Vamos Conversar?',
    contactSubtitle: 'Tem um projeto em mente? Entre em contato e vamos criar algo incrível juntos!',
    contactInfo: 'Informações de Contato',
    availability: 'Disponibilidade',
    availabilityText: 'Disponível para projetos frontend em React/Next.js/JavaScript, desenvolvimento de interfaces modernas e integração de APIs REST. Respondo geralmente em até 24 horas.',
    yourName: 'Seu Nome',
    yourEmail: 'Seu Email',
    yourMessage: 'Sua Mensagem',
    sendMessage: 'Enviar Mensagem',
    or: 'ou',
    contactDirect: 'Entre em contato direto',
    
    // Footer
    madeWith: 'Feito com',
    by: 'por',
    allRightsReserved: 'Todos os direitos reservados',
  },
  en: {
    // Header
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    hire: 'Hire Me',
    
    // Hero
    availableForProjects: 'Available for projects',
    hello: "Hi, I'm",
    frontendDeveloper: 'Frontend Developer',
    letsWorkTogether: "Let's Work Together",
    viewWorks: 'View Works',
    downloadCV: 'Download CV',
    yearsExp: 'Years Exp.',
    projects_count: 'Projects',
    dedication: 'Dedication',
    scroll: 'Scroll',
    heroDescription: 'Specialized in creating modern and responsive interfaces with React and JavaScript. Strong experience in design, API integration and performance.',
    
    // About
    aboutTitle: 'About Me',
    aboutSubtitle: 'Freelance Frontend Developer passionate about creating experiences',
    aboutDescription: "I'm a Freelance Frontend Developer specialized in React.js and Next.js, with strong experience in creating modern, responsive and high-performance web interfaces. Currently living in Lisbon, Portugal, I work independently transforming designs into clean and efficient code for clients around the world.",
    uiuxDesign: 'UI/UX Design',
    uiuxDescription: 'I implement pixel-perfect designs with focus on accessibility',
    performance: 'Performance',
    performanceDescription: 'I optimize applications for speed and efficiency',
    responsive: 'Responsive Design',
    responsiveDescription: 'Mobile-first, compatible with all devices',
    reactExpert: 'React Expert',
    reactExpertDescription: 'Mastery in React, hooks, context and global state',
    
    // Experience
    experienceTitle: 'Experience',
    workExperience: 'Work Experience',
    present: 'Present',
    
    // Skills
    skillsTitle: 'Skills & Technologies',
    skillsDescription: 'Tools and technologies I use to create amazing experiences',
    frontend: 'Frontend',
    backendDatabase: 'Backend & Database',
    toolsLearning: 'Tools & Learning',
    
    // Projects
    projectsTitle: 'Featured',
    projectsHighlight: 'Projects',
    projectsSubtitle: 'Portfolio with published full-stack projects',
    featuredProject: 'Featured Project',
    project: 'Project',
    viewCode: 'View Code',
    viewDemo: 'View Demo',
    viewMoreGithub: 'View more on GitHub',
    
    // Contact
    contactTitle: "Let's Talk?",
    contactSubtitle: 'Have a project in mind? Get in touch and let\'s create something amazing together!',
    contactInfo: 'Contact Information',
    availability: 'Availability',
    availabilityText: 'Available for frontend projects in React/Next.js/JavaScript, modern interface development and REST API integration. I usually respond within 24 hours.',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    yourMessage: 'Your Message',
    sendMessage: 'Send Message',
    or: 'or',
    contactDirect: 'Contact me directly',
    
    // Footer
    madeWith: 'Made with',
    by: 'by',
    allRightsReserved: 'All rights reserved',
  },
}

export function useTranslation() {
  const [language, setLanguage] = useState<Language>('pt')

  useEffect(() => {
    // Carrega idioma salvo
    const savedLang = (localStorage.getItem('language') as Language) || 'pt'
    setLanguage(savedLang)

    // Escuta mudanças de idioma
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
