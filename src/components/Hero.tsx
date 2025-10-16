'use client'

import { ArrowRight, Code2, Sparkles, Download } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

const Hero = () => {
  const { t } = useTranslation()
  
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span className="text-sm text-indigo-300 font-medium">Freelancer ativo • 2025</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-slate-100">{t('hello')}</span>
                  <br />
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Gabriel Barreto
                  </span>
                </h1>
                
                <p className="text-xl sm:text-2xl text-slate-400 font-light">
                  {t('frontendDeveloper')}
                </p>
                <p className="text-base text-slate-500">
                  React.js ■ Next.js ■ Tailwind CSS
                </p>
              </div>
              
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                {t('heroDescription')}
              </p>
              
              <div className="grid grid-cols-3 gap-6 py-6">
                <div>
                  <div className="text-3xl font-bold text-slate-100 mb-1">2+</div>
                  <div className="text-sm text-slate-500">{t('yearsExp')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-100 mb-1">10+</div>
                  <div className="text-sm text-slate-500">{t('projects_count')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-100 mb-1">100%</div>
                  <div className="text-sm text-slate-500">{t('dedication')}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300"
                >
                  {t('letsWorkTogether')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-slate-100 font-semibold rounded-xl border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300"
                >
                  {t('viewWorks')}
                </a>
                <a
                  href="/Gabriel_Barreto_CV.pdf"
                  download
                  className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-slate-100 font-semibold rounded-xl border border-slate-700 hover:bg-slate-800 hover:border-indigo-500 transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  {t('downloadCV')}
                </a>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border border-indigo-500/20 rounded-full animate-pulse"></div>
                <div className="absolute w-80 h-80 border border-purple-500/10 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>

              <div className="relative z-10 p-12 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl border border-indigo-500/20 shadow-2xl">
                <Code2 className="w-32 h-32 text-indigo-400" strokeWidth={1.5} />
                
                <div className="absolute -top-4 -left-4 px-4 py-2 bg-slate-900 border border-indigo-500/30 rounded-lg shadow-lg">
                  <span className="text-sm font-semibold text-indigo-400">React</span>
                </div>
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-slate-900 border border-purple-500/30 rounded-lg shadow-lg">
                  <span className="text-sm font-semibold text-purple-400">JavaScript</span>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900 border border-pink-500/30 rounded-lg shadow-lg">
                  <span className="text-sm font-semibold text-pink-400">Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs uppercase tracking-wider">{t('scroll')}</span>
          <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-indigo-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
