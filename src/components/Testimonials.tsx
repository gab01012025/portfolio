'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'João Silva',
      role: 'CEO, TechStart',
      avatar: '👨‍💼',
      rating: 5,
      text: 'Excelente trabalho! Gabriel desenvolveu uma interface moderna e responsiva para nosso e-commerce. Design impecável e código limpo. Entrega dentro do prazo!',
    },
    {
      name: 'Maria Costa',
      role: 'Product Manager, InnovaCorp',
      avatar: '👩‍💻',
      rating: 5,
      text: 'Profissional muito competente em React e Next.js. Implementou dashboard complexo com performance excepcional. Recomendo!',
    },
    {
      name: 'Pedro Santos',
      role: 'CTO, WebSolutions',
      avatar: '👨‍🚀',
      rating: 5,
      text: 'Ótima comunicação e expertise técnica. Desenvolveu aplicação web moderna com Tailwind CSS. Interface fluida e responsiva em todos os dispositivos.',
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              O que Dizem Sobre Mim
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Feedback de clientes e parceiros de projetos
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-indigo-500/50 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-indigo-500/20" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-slate-300 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
