import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, Sparkles } from 'lucide-react';
import { GoldButton } from './GoldButton';

interface GuaranteeSectionProps {
  onCtaClick: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 md:py-24 bg-[#0B132B] text-slate-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900 via-slate-900/95 to-amber-950/30 border-2 border-amber-500/40 rounded-3xl p-8 md:p-12 shadow-2xl relative text-center"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-amber-500/5 blur-2xl pointer-events-none rounded-3xl" />

          {/* Guarantee Badge */}
          <div className="relative z-10">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-amber-500/20 border-4 border-slate-900">
              <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 stroke-[2.5]" />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Lock className="w-3.5 h-3.5" />
              <span>Garantia Incondicional de 7 Dias</span>
            </div>

            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Seu Risco É <span className="gold-gradient-text">ABSOLUTAMENTE ZERO</span>
            </h2>

            <div className="space-y-4 font-sans-body text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              <p>
                Temos tanta certeza do poder transformador deste material que oferecemos uma garantia completa de 7 dias.
              </p>
              <p className="text-white font-medium bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                Se você baixar o ebook, ler os estudos e sentir que ele não fortaleceu sua fé ou não valeu cada centavo do seu investimento, basta nos enviar uma simples mensagem. Devolveremos <strong>100% do seu dinheiro</strong> imediatamente, sem letras miúdas.
              </p>
            </div>

            <div className="mt-8">
              <GoldButton onClick={onCtaClick} size="large" fullWidth>
                TESTAR POR 7 DIAS SEM RISCO
              </GoldButton>
            </div>

            <span className="block text-xs text-slate-400 mt-4">
              Transação encriptada e protegida com tecnologia SSL de 256 bits.
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
