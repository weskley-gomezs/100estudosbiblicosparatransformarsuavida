import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { PainPointsSection } from './components/PainPointsSection';
import { ThemesSection } from './components/ThemesSection';
import { DifferenceSection } from './components/DifferenceSection';
import { BenefitsSection } from './components/BenefitsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { OfferSection } from './components/OfferSection';
import { FinalSection } from './components/FinalSection';
import { DecorativeDivider } from './components/DecorativeDivider';
import { CheckoutModal } from './components/CheckoutModal';
import { NotificationToast } from './components/NotificationToast';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleCtaClick = () => {
    window.location.href = 'https://pay.kiwify.com.br/9n5XBzJ';
  };

  return (
    <main className="min-h-screen bg-[#0B132B] text-slate-100 font-sans-body selection:bg-amber-400 selection:text-slate-950 overflow-x-hidden">
      {/* HERO SECTION */}
      <HeroSection onCtaClick={handleCtaClick} />

      <DecorativeDivider />

      {/* VOCÊ SENTE QUE... SECTION */}
      <PainPointsSection onCtaClick={handleCtaClick} />

      <DecorativeDivider />

      {/* O QUE VOCÊ ENCONTRARÁ (18 THEMES) SECTION */}
      <ThemesSection onCtaClick={handleCtaClick} />

      <DecorativeDivider />

      {/* POR QUE ESTE MATERIAL É DIFERENTE? SECTION */}
      <DifferenceSection onCtaClick={handleCtaClick} />

      <DecorativeDivider />

      {/* BENEFÍCIOS SECTION */}
      <BenefitsSection onCtaClick={handleCtaClick} />

      <DecorativeDivider />

      {/* DEPOIMENTOS (6 BRAZILIAN NAMES) SECTION */}
      <TestimonialsSection onCtaClick={handleCtaClick} />

      <DecorativeDivider />

      {/* GARANTIA DE 7 DIAS SECTION */}
      <GuaranteeSection onCtaClick={handleCtaClick} />

      <DecorativeDivider />

      {/* PERGUNTAS FREQUENTES (FAQ ACCORDION) SECTION */}
      <FaqSection />

      <DecorativeDivider />

      {/* OFERTA ESPECIAL (R$19,90 + COUNTDOWN) SECTION */}
      <OfferSection onCtaClick={handleCtaClick} />

      <DecorativeDivider />

      {/* ÚLTIMA SESSÃO (EMOTIONAL CLOSING) SECTION */}
      <FinalSection onCtaClick={handleCtaClick} />

      {/* SIMULATED HIGH-CONVERSION CHECKOUT MODAL */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* LIVE SOCIAL PROOF TOAST NOTIFICATIONS */}
      <NotificationToast />
    </main>
  );
}

