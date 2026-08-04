import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, Check, ShieldCheck, Zap, Sparkles, CreditCard, Lock, Smartphone } from 'lucide-react';
import { GoldButton } from './GoldButton';

interface OfferSectionProps {
  onCtaClick: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onCtaClick }) => {
  // Countdown timer state (starts at 14m 52s)
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 52);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 14 * 60 + 52));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section id="oferta" className="py-16 md:py-24 bg-[#080d1f] text-slate-100 relative overflow-hidden">
      {/* Background glow behind offer card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Main Offer Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-slate-900 via-slate-900 to-[#0c1630] border-2 border-amber-400/60 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl shadow-amber-500/10 relative"
        >
          {/* Top Banner Tag */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-black text-xs md:text-sm tracking-widest uppercase px-6 py-2 rounded-full shadow-lg border border-amber-200 flex items-center gap-2 shrink-0 whitespace-nowrap">
            <Zap className="w-4 h-4 fill-slate-950" />
            <span>OFERTA ESPECIAL DE LANÇAMENTO</span>
          </div>

          <div className="text-center pt-4">
            
            {/* Title */}
            <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">
              100 Estudos Bíblicos Para <br className="hidden sm:inline" />
              <span className="gold-gradient-text">Transformar Sua Vida</span>
            </h2>

            <p className="text-slate-300 font-sans-body text-base md:text-lg mb-8 max-w-xl mx-auto">
              Sua oportunidade de renovar sua mente, vencer a ansiedade e crescer na Palavra por um valor simbólico.
            </p>

            {/* Countdown Box */}
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 bg-red-950/40 border border-red-500/40 px-6 py-3 rounded-2xl mb-8 shadow-inner">
              <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
                <Clock className="w-5 h-5 animate-pulse" />
                <span>Esta oferta expira em:</span>
              </div>
              <div className="font-mono font-extrabold text-2xl text-amber-300 tracking-wider">
                {formatTime(timeLeft)}
              </div>
            </div>

            {/* Price Box */}
            <div className="bg-slate-950/80 border border-amber-500/30 rounded-2xl p-6 mb-8 max-w-lg mx-auto text-center shadow-xl">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-1">
                De <span className="line-through text-red-400/80">R$ 97,00</span> por apenas
              </span>
              <div className="flex items-baseline justify-center gap-1 my-1">
                <span className="text-2xl font-bold text-amber-400">R$</span>
                <span className="text-5xl md:text-6xl font-black gold-gradient-text tracking-tight">19,90</span>
              </div>
              <span className="text-xs text-emerald-400 font-bold block mt-1">
                Pagamento Único | Sem Assinatura | Acesso Vitalício
              </span>
            </div>

            {/* Included Checklist */}
            <div className="max-w-md mx-auto text-left space-y-3 mb-8 bg-slate-900/60 p-5 rounded-xl border border-slate-800">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <Check className="w-5 h-5 text-amber-400 stroke-[3] shrink-0" />
                <span><strong>100 Estudos Bíblicos Completos</strong> em PDF</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <Check className="w-5 h-5 text-amber-400 stroke-[3] shrink-0" />
                <span><strong>18 Temas Cruciais</strong> (Ansiedade, Fé, Família, etc.)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <Check className="w-5 h-5 text-amber-400 stroke-[3] shrink-0" />
                <span><strong>Acesso Imediato</strong> no seu e-mail</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <Check className="w-5 h-5 text-amber-400 stroke-[3] shrink-0" />
                <span>Leitura Otimizada para <strong>Celular, Tablet e Computador</strong></span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <Check className="w-5 h-5 text-amber-400 stroke-[3] shrink-0" />
                <span><strong>Garantia Total de 7 Dias</strong></span>
              </div>
            </div>

            {/* Warning Text */}
            <p className="text-amber-300/90 text-xs md:text-sm font-semibold mb-6 flex items-center justify-center gap-1.5">
              <span>Atenção: Essa condição especial pode ser encerrada a qualquer momento sem aviso prévio.</span>
            </p>

            {/* HUGE CTA Button */}
            <div className="max-w-xl mx-auto">
              <GoldButton
                onClick={onCtaClick}
                size="giant"
                fullWidth
                subtext="Acesso Imediato • Compra 100% Segura • PIX ou Cartão"
              >
                EU QUERO COMEÇAR AGORA
              </GoldButton>
            </div>

            {/* Payment Method Badges */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>Aprovação Imediata no PIX</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                <CreditCard className="w-4 h-4 text-amber-400" />
                <span>Até 3x no Cartão</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                <Lock className="w-4 h-4 text-blue-400" />
                <span>Ambiente Criptografado</span>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
