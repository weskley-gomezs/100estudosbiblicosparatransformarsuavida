import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQS } from '../data/landingData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-24 bg-[#080d1e] text-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>Tire Suas Dúvidas</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight"
          >
            Perguntas <span className="gold-gradient-text">Frequentes</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 font-sans-body text-base md:text-lg leading-relaxed"
          >
            Tudo o que você precisa saber antes de garantir o seu acesso digital.
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-sans-body font-bold text-base md:text-lg text-white hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-amber-400 text-sm font-mono">0{idx + 1}.</span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-300 text-sm md:text-base leading-relaxed border-t border-slate-800/60 font-sans-body">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
