import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquareQuote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/landingData';
import { GoldButton } from './GoldButton';

interface TestimonialsSectionProps {
  onCtaClick: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 md:py-24 bg-[#080d1e] text-slate-100 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <MessageSquareQuote className="w-4 h-4 text-amber-400" />
            <span>Vidas Impactadas Pela Palavra</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight"
          >
            O Que Dizem Nossos <span className="gold-gradient-text">Leitores</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 font-sans-body text-base md:text-lg leading-relaxed"
          >
            Pessoas comuns de todo o Brasil que decidiram renovar sua mente e transformar seu dia a dia.
          </motion.p>
        </div>

        {/* 6 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 p-6 rounded-2xl shadow-xl flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-slate-400 ml-1 font-semibold">5.0</span>
                </div>

                {/* Comment quote */}
                <p className="text-sm text-slate-200 font-sans-body italic leading-relaxed mb-6">
                  "{t.comment}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 font-extrabold text-sm flex items-center justify-center shadow-md">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm font-sans-body flex items-center gap-1.5">
                      <span>{t.name}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" title="Comprador Verificado" />
                    </h4>
                    <span className="text-xs text-slate-400 block">{t.city}</span>
                  </div>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">{t.time}</span>
              </div>

            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="max-w-xl mx-auto text-center">
          <GoldButton onClick={onCtaClick} size="large" fullWidth>
            QUERO SEPARAR MEU EXEMPLAR DIGITAL AGORA
          </GoldButton>
        </div>

      </div>
    </section>
  );
};
