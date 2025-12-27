'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import ProjectsWithFilter from '@/components/ProjectsWithFilter'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import ThemeToggleSimple from '@/components/ThemeToggleSimple'
import LanguageToggleSimple from '@/components/LanguageToggleSimple'

export default function HomeClient() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <Hero />
      <About />
      <Skills />
      <ProjectsWithFilter />
      <Contact />
      <Footer />
      <ScrollToTop />
      <ThemeToggleSimple />
      <LanguageToggleSimple />
    </main>
  )
}
