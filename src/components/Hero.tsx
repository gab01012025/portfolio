'use client'

import { ArrowRight, Server, Download } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

const Hero = () => {
  const { t } = useTranslation()
  
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center py-20">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-emerald-300">{t('availableForProjects')}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-slate-100">{t('hello')}</span>
            <span className="text-emerald-400"> Gabriel Barreto</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 mb-4">
            {t('role')}
          </p>
          
          <p className="text-base text-slate-500 mb-8">
            Node.js • Python • APIs • Webhooks • MongoDB
          </p>
          
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
            {t('heroDescription')}
          </p>
          
          <div className="flex justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-100">15+</div>
              <div className="text-sm text-slate-500">{t('projects_count')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-100">100%</div>
              <div className="text-sm text-slate-500">{t('delivery')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-100">24h</div>
              <div className="text-sm text-slate-500">{t('response')}</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
            >
              {t('letsWorkTogether')}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-slate-100 font-medium rounded-lg border border-slate-700 hover:bg-slate-700 transition-colors"
            >
              {t('viewWorks')}
            </a>
            <a
              href="/Gabriel_Barreto_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-slate-100 font-medium rounded-lg border border-slate-700 hover:border-emerald-500 transition-colors"
            >
              <Download className="w-4 h-4" />
              CV
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <div className="w-5 h-8 border border-slate-700 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-emerald-500 rounded-full mt-1.5 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
