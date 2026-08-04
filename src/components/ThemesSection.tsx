import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Sparkles, CheckCircle } from 'lucide-react';
import { THEMES } from '../data/landingData';
import { GoldButton } from './GoldButton';

interface ThemesSectionProps {
  onCtaClick: () => void;
}

export const ThemesSection: React.FC<ThemesSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 md:py-24 bg-[#0B132B] text-slate-100 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>100 Estudos Organizados em Temas Vitais</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight"
          >
            O Que Você Encontrará Dentro Do <span className="gold-gradient-text">Ebook Digital</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 font-sans-body text-base md:text-lg leading-relaxed"
          >
            Um acervo completo de sabedoria transformadora dividido em 18 áreas cruciais para o seu fortalecimento espiritual e emocional.
          </motion.p>
        </div>

        {/* 18 Themes Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-14">
          {THEMES.map((theme, idx) => {
            const Icon = theme.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 6) * 0.06 }}
                className="bg-slate-900/90 border border-slate-800/90 hover:border-amber-400/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1.5 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-sans-body text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {theme.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {theme.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-amber-400/80 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Estudos práticos inclusos</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-8 text-center max-w-3xl mx-auto shadow-xl"
        >
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Conteúdo 100% Organizado e Didático</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Tudo pronto para você ler e aplicar em apenas 10 minutos por dia!
          </h3>
          <p className="text-slate-300 text-sm md:text-base mb-6">
            Acesse imediatamente no seu celular ou computador sem complicações.
          </p>
          <GoldButton onClick={onCtaClick} size="large" fullWidth>
            QUERO GARANTIR MEUS 100 ESTUDOS POR R$ 19,90
          </GoldButton>
        </motion.div>

      </div>
    </section>
  );
};
