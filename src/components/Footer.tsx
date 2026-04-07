'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative px-6 lg:px-12 py-12" style={{ borderTop: '1px solid #1a1a1a' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-6">
            <span className="font-mono text-sm tracking-widest" style={{ color: '#00e87b' }}>
              GB<span style={{ color: '#737373' }}>.dev</span>
            </span>
            <span className="font-mono text-xs" style={{ color: '#4a4a4a' }}>
              &copy; {currentYear}
            </span>
          </div>

          {/* Center */}
          <motion.div
            className="font-mono text-xs"
            style={{ color: '#4a4a4a' }}
            whileHover={{ color: '#00e87b' }}
          >
            {t('footer.credit')}
          </motion.div>

          {/* Right - Social */}
          <div className="flex items-center gap-4">
            {[
              { label: 'GitHub', href: 'https://github.com/gab01012025' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/gabriel-barreto-610a72370' },
              { label: 'Email', href: 'mailto:gabrielbarreto900@gmail.com' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest transition-colors duration-300 hover:text-[#00e87b]"
                style={{ color: '#4a4a4a' }}
                data-cursor-hover
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
