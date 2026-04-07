'use client';

import { useRef, useState, FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const phone = '351969318391';
    const text = t('contact.whatsapp.msg')
      .replace('{name}', formData.name)
      .replace('{email}', formData.email)
      .replace('{subject}', formData.subject)
      .replace('{message}', formData.message);
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    setStatus('sent');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="relative py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="h-[1px] w-full mb-16" style={{ backgroundColor: '#1a1a1a' }} />

        <div ref={headerRef}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs tracking-[0.3em] uppercase block mb-4" style={{ color: '#00e87b' }}>
              {t('contact.tag')}
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4" style={{ color: '#e8e8e8' }}>
              {t('contact.title.1')}<br />
              <span style={{ color: '#00e87b' }}>{t('contact.title.2')}</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Left: Contact form styled as API request */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-sm overflow-hidden" style={{ border: '1px solid #1a1a1a' }}>
              {/* Request header */}
              <div className="flex items-center gap-3 px-4 py-3" style={{ backgroundColor: '#0d0d0d', borderBottom: '1px solid #1a1a1a' }}>
                <span
                  className="font-mono text-[10px] uppercase px-2 py-0.5 rounded-sm"
                  style={{ backgroundColor: '#00e87b22', color: '#00e87b' }}
                >
                  POST
                </span>
                <span className="font-mono text-xs" style={{ color: '#737373' }}>
                  /api/contact
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4" style={{ backgroundColor: '#0a0a0a' }}>
                <div>
                  <label className="block font-mono text-xs mb-2" style={{ color: '#4a4a4a' }}>
                    {'"name"'}:
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm font-mono text-sm outline-none transition-colors duration-300 focus:border-[#00e87b]"
                    style={{
                      backgroundColor: '#111111',
                      border: '1px solid #1a1a1a',
                      color: '#e8e8e8',
                    }}
                    placeholder={t('contact.placeholder.name')}
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs mb-2" style={{ color: '#4a4a4a' }}>
                    {'"email"'}:
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm font-mono text-sm outline-none transition-colors duration-300 focus:border-[#00e87b]"
                    style={{
                      backgroundColor: '#111111',
                      border: '1px solid #1a1a1a',
                      color: '#e8e8e8',
                    }}
                    placeholder={t('contact.placeholder.email')}
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs mb-2" style={{ color: '#4a4a4a' }}>
                    {'"subject"'}:
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm font-mono text-sm outline-none transition-colors duration-300 focus:border-[#00e87b]"
                    style={{
                      backgroundColor: '#111111',
                      border: '1px solid #1a1a1a',
                      color: '#e8e8e8',
                    }}
                    placeholder={t('contact.placeholder.subject')}
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs mb-2" style={{ color: '#4a4a4a' }}>
                    {'"message"'}:
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm font-mono text-sm outline-none transition-colors duration-300 resize-none focus:border-[#00e87b]"
                    style={{
                      backgroundColor: '#111111',
                      border: '1px solid #1a1a1a',
                      color: '#e8e8e8',
                    }}
                    placeholder={t('contact.placeholder.message')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 font-mono text-sm uppercase tracking-widest transition-all duration-300 hover:opacity-90 disabled:opacity-50"
                  style={{ backgroundColor: '#00e87b', color: '#060606', borderRadius: '2px' }}
                  data-cursor-hover
                >
                  {status === 'idle' && t('contact.btn.idle')}
                  {status === 'sending' && t('contact.btn.sending')}
                  {status === 'sent' && t('contact.btn.sent')}
                  {status === 'error' && t('contact.btn.error')}
                </button>
              </form>

              {/* Response preview */}
              {status === 'sent' && (
                <div className="px-6 py-4" style={{ borderTop: '1px solid #1a1a1a', backgroundColor: '#0a0a0a' }}>
                  <div className="font-mono text-xs" style={{ color: '#00e87b' }}>
                    {t('contact.response')}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right: Direct contact info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-8">
              <p className="text-lg leading-relaxed" style={{ color: '#737373' }}>
                {t('contact.availability')}
                <span style={{ color: '#e8e8e8' }}>{t('contact.availability.highlight')}</span>.
              </p>

              <div className="space-y-4">
                {[
                  {
                    label: 'Email',
                    value: 'gabrielbarreto900@gmail.com',
                    href: 'mailto:gabrielbarreto900@gmail.com',
                  },
                  {
                    label: 'WhatsApp',
                    value: '+351 969 318 391',
                    href: 'https://wa.me/351969318391',
                  },
                  {
                    label: 'LinkedIn',
                    value: 'Gabriel Barreto',
                    href: 'https://linkedin.com/in/gabriel-barreto-610a72370',
                  },
                  {
                    label: 'GitHub',
                    value: 'gab01012025',
                    href: 'https://github.com/gab01012025',
                  },
                ].map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-3 transition-all duration-300"
                    style={{ borderBottom: '1px solid #1a1a1a' }}
                    data-cursor-hover
                    onMouseEnter={(e) => { e.currentTarget.style.borderBottomColor = '#00e87b'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderBottomColor = '#1a1a1a'; }}
                  >
                    <div>
                      <div className="font-mono text-xs uppercase tracking-wider mb-1" style={{ color: '#4a4a4a' }}>
                        {contact.label}
                      </div>
                      <div className="text-sm transition-colors duration-300 group-hover:text-[#00e87b]" style={{ color: '#e8e8e8' }}>
                        {contact.value}
                      </div>
                    </div>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      style={{ color: '#4a4a4a' }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="mt-12 p-4 rounded-sm" style={{ backgroundColor: '#0d0d0d', border: '1px solid #1a1a1a' }}>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full status-dot" style={{ backgroundColor: '#00e87b' }} />
                <span className="font-mono text-xs" style={{ color: '#737373' }}>
                  {t('contact.location')}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
