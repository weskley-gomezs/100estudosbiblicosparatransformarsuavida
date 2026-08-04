import React from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Zap, Sparkles, BookOpen, Star } from 'lucide-react';
import { GoldButton } from './GoldButton';
import { HERO_BADGES } from '../data/landingData';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-[90vh] pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-b from-[#080d1f] via-[#0b132b] to-[#0f1b38] text-slate-100">
      {/* Background ambient light rays & divine glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-amber-500/10 via-amber-400/5 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600/10 blur-3xl pointer-events-none rounded-full" />

      {/* Top Banner Ribbon */}
      <div className="max-w-4xl mx-auto px-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs md:text-sm font-semibold mx-auto w-full justify-center shadow-lg shadow-amber-500/5 backdrop-blur-md"
        >
          <Zap className="w-4 h-4 text-amber-400 animate-pulse fill-amber-400" />
          <span>Oportunidade Única: De <span className="line-through opacity-70">R$ 97,00</span> por apenas <span className="text-amber-300 font-bold text-base">R$ 19,90</span></span>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Header Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wide uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Devocional & Estudo Prático</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight text-white"
            >
              Transforme sua <span className="gold-gradient-text">Mentalidade</span> Através da Palavra de Deus.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans-body text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0"
            >
              Descubra <strong className="text-white font-semibold">100 estudos bíblicos</strong> cuidadosamente organizados para fortalecer sua fé, renovar sua mente e aproximar você de Deus todos os dias.
            </motion.p>

            {/* Mobile Cover Image visible on small screens */}
            <div className="block lg:hidden my-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative max-w-xs mx-auto"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/30 to-blue-500/20 rounded-3xl blur-xl" />
                <img
                  src="https://i.imgur.com/navyo9O.png"
                  alt="Capa Ebook 100 Estudos Bíblicos Para Transformar Sua Vida"
                  className="relative rounded-2xl shadow-2xl shadow-slate-950 border border-amber-400/30 w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* Badges Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4 py-2"
            >
              {HERO_BADGES.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-slate-900/60 border border-amber-500/20 px-3.5 py-2 rounded-xl text-xs md:text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-medium">{badge.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Hero CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-2"
            >
              <GoldButton
                onClick={onCtaClick}
                size="large"
                fullWidth
                subtext="Acesso Imediato em PDF por apenas R$ 19,90"
              >
                QUERO TRANSFORMAR MINHA VIDA
              </GoldButton>
            </motion.div>

            {/* Micro Trust Seals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 pt-2"
            >
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Garantia de 7 dias</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>100 Estudos Completos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>4.9 / 5.0 (2.840 leitores)</span>
              </div>
            </motion.div>

          </div>

          {/* Right Image Column (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Backlight Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/30 via-amber-400/20 to-blue-600/30 rounded-3xl blur-2xl animate-pulse pointer-events-none" />

              {/* Main 3D Book Graphic */}
              <div className="relative rounded-2xl overflow-hidden border border-amber-400/40 shadow-2xl shadow-slate-950 bg-slate-900 group">
                <img
                  src="https://i.imgur.com/navyo9O.png"
                  alt="Ebook 100 Estudos Bíblicos Para Transformar Sua Vida"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Price Tag Badge */}
                <div className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-md border border-amber-400/50 rounded-2xl p-3 shadow-xl text-center">
                  <span className="block text-xs uppercase tracking-wider text-slate-400">Preço Especial</span>
                  <span className="block text-2xl font-black gold-gradient-text">R$ 19,90</span>
                  <span className="block text-[10px] text-emerald-400 font-semibold">Economia de 80%</span>
                </div>

                {/* Floating Instant Delivery Seal */}
                <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl px-3.5 py-2 flex items-center gap-2 shadow-lg">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-semibold text-slate-200">Envio Automático por E-mail</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
