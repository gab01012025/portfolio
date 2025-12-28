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
    backendDeveloper: 'Backend Developer',
    apiSpecialist: 'API Specialist',
    integrationExpert: 'Integration Expert',
    projectsCompleted: 'Projects',
    satisfaction: 'Satisfaction',
    responseTime: 'Response',
    scrollDown: 'Scroll to discover',
    
    // About
    aboutTitle: 'About Me',
    aboutSubtitle: 'Specialized in backend development and systems integration',
    servicesTitle: 'Services',
    servicesSubtitle: 'Specialized solutions in backend development and integrations',
    aboutDescription: 'Backend developer focused on building scalable APIs, CRM integrations with advertising platforms, and automation bots. I work with Node.js, Express, Python, and modern tools like Docker and CI/CD. Based in Portugal, available for projects worldwide.',
    integrations: 'Integrations',
    integrationsDesc: 'CRM connection with Meta Ads, Google Ads, and other platforms.',
    mainSpecialty: 'Main Specialty',
    apis: 'REST APIs',
    apisDesc: 'Scalable and secure APIs with Node.js, Express, and FastAPI.',
    bots: 'Bots & Automation',
    botsDesc: 'Telegram, WhatsApp, and Discord bots for automation.',
    automations: 'Automations',
    automationsDesc: 'Process automation with n8n, webhooks, and custom scripts.',
    whyWorkWithMe: 'Why work with me?',
    benefit1: 'Clean and documented code',
    benefit2: 'Direct and clear communication',
    benefit3: 'Delivery within agreed deadline',
    benefit4: 'Post-delivery support included',
    benefit5: 'Modern and scalable technologies',
    benefit6: 'Tested and production-ready',
    requestQuote: 'Request free quote',
    
    // Projects
    projectsTitle: 'Projects',
    projectsSubtitle: 'Some of the projects I have developed',
    filterAll: 'All',
    filterIntegrations: 'Integrations',
    filterApis: 'APIs',
    filterBots: 'Bots',
    featured: 'Featured',
    viewCode: 'View Code',
    
    // Skills
    skillsTitle: 'Skills',
    skillsSubtitle: 'Technologies I work with',
    backendApis: 'Backend & APIs',
    databases: 'Databases',
    devops: 'DevOps & Tools',
    integrationsSkill: 'Integrations',
    otherSkills: 'Other Skills',
    
    // Contact
    contactTitle: 'Get in Touch',
    contactSubtitle: 'Have a project in mind? Get in touch!',
    yourName: 'Your name',
    yourEmail: 'Your email',
    subject: 'Subject',
    selectSubject: 'Select subject',
    crmIntegration: 'CRM/Ads Integration',
    restApi: 'REST API',
    telegramBot: 'Telegram/WhatsApp Bot',
    automation: 'Automation',
    other: 'Other',
    yourMessage: 'Your message',
    tellAboutProject: 'Tell me about your project...',
    sendWhatsApp: 'Send via WhatsApp',
    orContactDirectly: 'Or contact directly:',
    phone: 'Phone',
    email: 'Email',
    location: 'Location',
    lisbon: 'Lisbon, Portugal',
    
    // Footer
    footerDescription: 'Backend developer specialized in APIs, integrations and automations. Available for freelance projects.',
    navigation: 'Navigation',
    home: 'Home',
    servicesFooter: 'Services',
    crmIntegrations: 'CRM Integrations',
    restApis: 'REST APIs',
    telegramBots: 'Telegram Bots',
    allRightsReserved: 'All rights reserved',
    backToTop: 'Back to top',
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
    getInTouch: 'Fale Comigo',
    backendDeveloper: 'Backend Developer',
    apiSpecialist: 'API Specialist',
    integrationExpert: 'Integration Expert',
    projectsCompleted: 'Projetos',
    satisfaction: 'Satisfação',
    responseTime: 'Resposta',
    scrollDown: 'Role para descobrir',
    
    // About
    aboutTitle: 'Sobre Mim',
    aboutSubtitle: 'Especializado em desenvolvimento backend e integrações de sistemas',
    servicesTitle: 'Serviços',
    servicesSubtitle: 'Soluções especializadas em desenvolvimento backend e integrações',
    aboutDescription: 'Desenvolvedor backend focado em criar APIs escaláveis, integrações de CRMs com plataformas de anúncios, e bots de automação. Trabalho com Node.js, Express, Python e ferramentas modernas como Docker e CI/CD. Baseado em Portugal, disponível para projetos em todo o mundo.',
    integrations: 'Integrações',
    integrationsDesc: 'Conexão de CRMs com Meta Ads, Google Ads e outras plataformas.',
    mainSpecialty: 'Especialidade Principal',
    apis: 'APIs RESTful',
    apisDesc: 'APIs escaláveis e seguras com Node.js, Express e FastAPI.',
    bots: 'Bots & Automação',
    botsDesc: 'Bots para Telegram, WhatsApp e Discord para automação.',
    automations: 'Automações',
    automationsDesc: 'Automação de processos com n8n, webhooks e scripts customizados.',
    whyWorkWithMe: 'Por que trabalhar comigo?',
    benefit1: 'Código limpo e documentado',
    benefit2: 'Comunicação direta e clara',
    benefit3: 'Entrega no prazo combinado',
    benefit4: 'Suporte pós-entrega incluso',
    benefit5: 'Tecnologias modernas e escaláveis',
    benefit6: 'Testado e pronto para produção',
    requestQuote: 'Solicitar orçamento gratuito',
    
    // Projects
    projectsTitle: 'Projetos',
    projectsSubtitle: 'Alguns dos projetos que desenvolvi',
    filterAll: 'Todos',
    filterIntegrations: 'Integrações',
    filterApis: 'APIs',
    filterBots: 'Bots',
    featured: 'Destaque',
    viewCode: 'Ver Código',
    
    // Skills
    skillsTitle: 'Skills',
    skillsSubtitle: 'Tecnologias com as quais trabalho',
    backendApis: 'Backend & APIs',
    databases: 'Databases',
    devops: 'DevOps & Tools',
    integrationsSkill: 'Integrações',
    otherSkills: 'Outras Skills',
    
    // Contact
    contactTitle: 'Entre em Contato',
    contactSubtitle: 'Tem um projeto em mente? Entre em contato!',
    yourName: 'Seu nome',
    yourEmail: 'Seu email',
    subject: 'Assunto',
    selectSubject: 'Selecione o assunto',
    crmIntegration: 'Integração CRM/Ads',
    restApi: 'API REST',
    telegramBot: 'Bot Telegram/WhatsApp',
    automation: 'Automação',
    other: 'Outro',
    yourMessage: 'Sua mensagem',
    tellAboutProject: 'Conte-me sobre seu projeto...',
    sendWhatsApp: 'Enviar via WhatsApp',
    orContactDirectly: 'Ou entre em contato diretamente:',
    phone: 'Telefone',
    email: 'Email',
    location: 'Localização',
    lisbon: 'Lisboa, Portugal',
    
    // Footer
    footerDescription: 'Desenvolvedor backend especializado em APIs, integrações e automações. Disponível para projetos freelance.',
    navigation: 'Navegação',
    home: 'Início',
    servicesFooter: 'Serviços',
    crmIntegrations: 'Integrações CRM',
    restApis: 'APIs RESTful',
    telegramBots: 'Bots Telegram',
    allRightsReserved: 'Todos os direitos reservados',
    backToTop: 'Voltar ao topo',
  },
}

type TranslationKey = keyof typeof translations.en

export const useTranslation = () => {
  const { language } = useLanguage()

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key] || key
  }

  return { t, language }
}
