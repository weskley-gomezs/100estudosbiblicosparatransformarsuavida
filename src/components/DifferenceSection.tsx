import React from 'react';
import { motion } from 'motion/react';
import { BookMarked, Sparkles, Check, Heart, Shield, ArrowRight } from 'lucide-react';
import { GoldButton } from './GoldButton';

interface DifferenceSectionProps {
  onCtaClick: () => void;
}

export const DifferenceSection: React.FC<DifferenceSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 md:py-24 bg-[#080d1e] text-slate-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Device Image Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-3 bg-gradient-to-tr from-amber-500/20 via-blue-500/10 to-amber-400/20 rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-slate-900">
                <img
                  src="https://i.imgur.com/navyo9O.png"
                  alt="Amostra do PDF Digital em tablet e smartphone"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-6 text-center">
                  <span className="text-xs uppercase font-bold tracking-widest text-amber-300">Formatado para Celulares e Tablets</span>
                  <p className="text-xs text-slate-300 mt-1">Navegação simples, fonte legível e leitura confortável a qualquer hora do dia.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Copy Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-center lg:text-left">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider"
            >
              <BookMarked className="w-4 h-4 text-amber-400" />
              <span>Metodologia Única de Leitura e Meditação</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight"
            >
              Por Que Este Material É <span className="gold-gradient-text">Completamente Diferente?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-300 font-sans-body text-base md:text-lg leading-relaxed"
            >
              A maioria dos livros cristãos apenas passa informações teóricas difíceis de aplicar. Este material foi criado para ser um <strong className="text-amber-200">guia diário de transformação real</strong>.
            </motion.p>

            {/* 4 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl text-left">
                <div className="flex items-center gap-2 text-amber-400 font-bold mb-1">
                  <Check className="w-5 h-5 stroke-[3]" />
                  <span>Versículos Selecionados</span>
                </div>
                <p className="text-xs text-slate-300">Textos bíblicos chaves destacados para memorização e meditação profunda.</p>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl text-left">
                <div className="flex items-center gap-2 text-amber-400 font-bold mb-1">
                  <Check className="w-5 h-5 stroke-[3]" />
                  <span>Reflexões Devoicionais</span>
                </div>
                <p className="text-xs text-slate-300">Explicações claras que tocam o coração e trazem luz às suas inquietações.</p>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl text-left">
                <div className="flex items-center gap-2 text-amber-400 font-bold mb-1">
                  <Check className="w-5 h-5 stroke-[3]" />
                  <span>Exercícios Práticos</span>
                </div>
                <p className="text-xs text-slate-300">Perguntas de autoexame para você avaliar sua vida e suas atitudes diárias.</p>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl text-left">
                <div className="flex items-center gap-2 text-amber-400 font-bold mb-1">
                  <Check className="w-5 h-5 stroke-[3]" />
                  <span>Aplicações para o Dia a Dia</span>
                </div>
                <p className="text-xs text-slate-300">Passos simples para colocar em prática o aprendizado imediatamente no trabalho e na família.</p>
              </div>
            </div>

            <div className="pt-4">
              <GoldButton onClick={onCtaClick} size="large" fullWidth>
                QUERO EXPERIMENTAR ESSA TRANSFORMAÇÃO
              </GoldButton>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
