'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import type { Locale } from '@/lib/i18n';

const LANG_OPTIONS: { code: Locale; flag: string }[] = [
  { code: 'pt', flag: '🇧🇷' },
  { code: 'en', flag: '🇺🇸' },
  { code: 'es', flag: '🇪🇸' },
];

export default function Navigation() {
  const { t, locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [langOpen, setLangOpen] = useState(false);

  const NAV_ITEMS = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.stack'), href: '#stack' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'projects', 'stack', 'about', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop nav - Minimal side dots */}
      <nav
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-4"
        aria-label="Navigation"
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.href}
            onClick={() => handleClick(item.href)}
            className="group flex items-center gap-3"
            data-cursor-hover
            aria-label={item.label}
          >
            <span
              className="text-xs font-mono tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
              style={{ color: activeSection === item.href.replace('#', '') ? '#00e87b' : '#737373' }}
            >
              {item.label}
            </span>
            <div className="relative">
              <div
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: activeSection === item.href.replace('#', '') ? '#00e87b' : '#2a2a2a',
                  boxShadow: activeSection === item.href.replace('#', '') ? '0 0 12px #00e87b44' : 'none',
                }}
              />
            </div>
          </button>
        ))}
      </nav>

      {/* Top bar */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div
          className="flex items-center justify-between py-4 transition-all duration-500"
          style={{
            borderBottom: scrolled ? '1px solid #1a1a1a' : '1px solid transparent',
            backgroundColor: scrolled ? 'rgba(6,6,6,0.85)' : 'transparent',
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            marginLeft: scrolled ? '-1.5rem' : '0',
            marginRight: scrolled ? '-1.5rem' : '0',
            padding: scrolled ? '1rem 1.5rem' : '1rem 0',
          }}
        >
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleClick('#hero'); }}
            className="font-mono text-sm tracking-widest"
            style={{ color: '#00e87b' }}
            data-cursor-hover
          >
            GB<span style={{ color: '#737373' }}>.dev</span>
          </a>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full status-dot" style={{ backgroundColor: '#00e87b' }} />
              <span className="font-mono text-xs" style={{ color: '#737373' }}>
                {t('nav.available')}
              </span>
            </div>

            {/* Language switcher */}
            <div className="relative ml-2">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-2 py-1 rounded-sm font-mono text-xs uppercase tracking-wider transition-colors duration-300 hover:text-[#00e87b]"
                style={{ color: '#737373', border: '1px solid #1a1a1a' }}
                data-cursor-hover
              >
                {LANG_OPTIONS.find((l) => l.code === locale)?.flag}{' '}
                {locale.toUpperCase()}
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    className="absolute right-0 top-full mt-1 rounded-sm overflow-hidden"
                    style={{ backgroundColor: '#0d0d0d', border: '1px solid #1a1a1a' }}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                  >
                    {LANG_OPTIONS.filter((l) => l.code !== locale).map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { setLocale(l.code); setLangOpen(false); }}
                        className="flex items-center gap-2 w-full px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors duration-200 hover:bg-[#111111] hover:text-[#00e87b]"
                        style={{ color: '#737373' }}
                        data-cursor-hover
                      >
                        {l.flag} {l.code.toUpperCase()}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile: lang + menu */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile lang switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-2 py-1 rounded-sm font-mono text-xs"
                style={{ color: '#737373', border: '1px solid #1a1a1a' }}
                data-cursor-hover
              >
                {LANG_OPTIONS.find((l) => l.code === locale)?.flag}
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    className="absolute right-0 top-full mt-1 rounded-sm overflow-hidden"
                    style={{ backgroundColor: '#0d0d0d', border: '1px solid #1a1a1a', zIndex: 60 }}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                  >
                    {LANG_OPTIONS.filter((l) => l.code !== locale).map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { setLocale(l.code); setLangOpen(false); }}
                        className="flex items-center gap-2 w-full px-3 py-2 font-mono text-xs"
                        style={{ color: '#737373' }}
                        data-cursor-hover
                      >
                        {l.flag} {l.code.toUpperCase()}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile menu button */}
            <button
              className="flex flex-col gap-1.5 p-2"
              onClick={() => setIsOpen(!isOpen)}
              data-cursor-hover
              aria-label="Menu"
            >
              <motion.span
                className="block w-6 h-[1.5px]"
                style={{ backgroundColor: '#e8e8e8' }}
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
              />
              <motion.span
                className="block w-6 h-[1.5px]"
                style={{ backgroundColor: '#e8e8e8' }}
                animate={{ opacity: isOpen ? 0 : 1 }}
              />
              <motion.span
                className="block w-6 h-[1.5px]"
                style={{ backgroundColor: '#e8e8e8' }}
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile fullscreen nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center lg:hidden"
            style={{ backgroundColor: 'rgba(6,6,6,0.97)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleClick(item.href)}
                  className="text-3xl font-light tracking-wider"
                  style={{ color: '#e8e8e8' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  data-cursor-hover
                >
                  <span className="font-mono text-xs mr-3" style={{ color: '#00e87b' }}>
                    0{i + 1}
                  </span>
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
