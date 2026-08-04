import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle, AlertCircle, Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { PAIN_POINTS } from '../data/landingData';
import { GoldButton } from './GoldButton';

interface PainPointsSectionProps {
  onCtaClick: () => void;
}

export const PainPointsSection: React.FC<PainPointsSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 md:py-24 bg-[#080d1e] text-slate-100 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-900/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>Responda com Sinceridade ao Seu Coração</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight"
          >
            Você Sente Que A Sua Vida Está <span className="gold-gradient-text">Travada Espiritualmente?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 font-sans-body text-base md:text-lg leading-relaxed"
          >
            Quantas vezes você deitou a cabeça no travesseiro com o coração inquieto, sem saber por onde recomeçar?
          </motion.p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PAIN_POINTS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 p-6 rounded-2xl shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-amber-200 mb-2 font-sans-body group-hover:text-amber-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}

          {/* Key Insight Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 border border-amber-500/30 p-6 rounded-2xl shadow-xl flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-2">
              <Sparkles className="w-4 h-4" />
              <span>A Verdade Que Ninguém Te Conta</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              O problema raramente é apenas a falta de recursos ou de tempo.
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Quando a mente não está alinhada aos princípios de Deus, as decisões tornam-se reativas, o cansaço vira rotina e a ansiedade assume o controle.
            </p>
          </motion.div>
        </div>

        {/* Biblical Transformation Highlight Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-amber-500/15 via-amber-400/10 to-amber-500/15 border border-amber-500/40 rounded-3xl p-8 md:p-10 text-center shadow-2xl relative"
        >
          <div className="max-w-3xl mx-auto space-y-4">
            <BookOpen className="w-10 h-10 text-amber-400 mx-auto opacity-80" />
            <p className="font-serif-quote text-2xl sm:text-3xl italic text-amber-100 font-semibold leading-relaxed">
              "E não vos conformeis com este século, mas transformai-vos pela renovação da vossa mente, para que experimenteis qual seja a boa, agradável e perfeita vontade de Deus."
            </p>
            <span className="block text-xs uppercase tracking-widest text-amber-300 font-bold">
              — Romanos 12:2
            </span>
            <p className="text-slate-200 text-base md:text-lg pt-2 max-w-2xl mx-auto font-sans-body">
              Uma mente renovada pela Palavra muda suas escolhas, traz paz ao seu lar e restaura a alegria de viver.
            </p>
            
            <div className="pt-6">
              <GoldButton onClick={onCtaClick} size="large" fullWidth>
                SIM, QUERO RENOVAR MINHA MENTE HOJE
              </GoldButton>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
