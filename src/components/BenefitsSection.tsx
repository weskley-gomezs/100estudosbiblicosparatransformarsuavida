import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Sparkles } from 'lucide-react';
import { BENEFITS } from '../data/landingData';
import { GoldButton } from './GoldButton';

interface BenefitsSectionProps {
  onCtaClick: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 md:py-24 bg-[#0B132B] text-slate-100 relative">
      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>Resultados Reais Para Sua Vida</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight"
          >
            Os Benefícios Que Você Experimentará <span className="gold-gradient-text">Na Prática</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 font-sans-body text-base md:text-lg leading-relaxed"
          >
            Ao dedicar apenas 10 minutos por dia a estes estudos, você começará a notar mudanças profundas nas suas emoções e relacionamentos.
          </motion.p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-12">
          {BENEFITS.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              className="bg-slate-900/90 border border-slate-800 hover:border-amber-400/50 p-5 md:p-6 rounded-2xl flex items-start gap-4 shadow-lg hover:shadow-amber-500/5 transition-all group"
            >
              <div className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all">
                <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <p className="text-base md:text-lg font-bold text-slate-100 group-hover:text-amber-200 transition-colors font-sans-body leading-snug">
                  {benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="pt-4 max-w-2xl mx-auto text-center">
          <GoldButton onClick={onCtaClick} size="large" fullWidth>
            QUERO ESSES BENEFÍCIOS NA MINHA VIDA
          </GoldButton>
        </div>

      </div>
    </section>
  );
};
