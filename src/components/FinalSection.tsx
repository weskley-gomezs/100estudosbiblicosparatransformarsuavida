import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, ArrowUpRight, ShieldCheck, BookOpen } from 'lucide-react';
import { GoldButton } from './GoldButton';

interface FinalSectionProps {
  onCtaClick: () => void;
}

export const FinalSection: React.FC<FinalSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#080d1e] via-[#060a18] to-[#040711] text-slate-100 relative overflow-hidden">
      {/* Background glowing cross rays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/10 via-amber-400/5 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10 text-center space-y-8">
        
        {/* Decorative Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest"
        >
          <Heart className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
          <span>Sua Hora de Decidir Chegou</span>
        </motion.div>

        {/* Headlines */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl mx-auto"
        >
          Nenhuma Transformação Acontece <span className="gold-gradient-text">Por Acaso.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans-body text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          Você pode fechar esta página e continuar na mesma rotina de ansiedade, cansaço e distância espiritual... <br />
          <strong className="text-amber-200">Ou pode dar um passo simples hoje e permitir que a Palavra de Deus renove a sua história.</strong>
        </motion.p>

        {/* Emotional Decision Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-slate-900/80 border border-amber-500/30 p-8 rounded-3xl max-w-2xl mx-auto shadow-2xl backdrop-blur-md space-y-4"
        >
          <p className="font-serif-quote text-2xl md:text-3xl italic text-amber-100 font-semibold leading-relaxed">
            "Toda mudança profunda começa por uma decisão."
          </p>
          <p className="text-slate-300 text-sm md:text-base font-sans-body">
            Por apenas <strong>R$ 19,90</strong>, você garante acesso vitalício a 100 estudos bíblicos que alimentarão sua alma todos os dias.
          </p>
        </motion.div>

        {/* GIGANTIC CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-4 max-w-2xl mx-auto"
        >
          <GoldButton
            onClick={onCtaClick}
            size="giant"
            fullWidth
            subtext="Envio Imediato por E-mail • Garantia de 7 Dias"
          >
            QUERO TRANSFORMAR MINHA VIDA AGORA
          </GoldButton>
        </motion.div>

        {/* Footer Micro-note (NO NAVBAR, NO FOOTER - as requested) */}
        <p className="text-xs text-slate-500 pt-6">
          © {new Date().getFullYear()} - 100 Estudos Bíblicos Para Transformar Sua Vida. Todos os direitos reservados.
        </p>

      </div>
    </section>
  );
};
