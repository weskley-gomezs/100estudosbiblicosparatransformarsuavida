import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ShoppingBag } from 'lucide-react';
import { SOCIAL_PROOF_NAMES } from '../data/landingData';

export const NotificationToast: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show toast every 10 seconds
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % SOCIAL_PROOF_NAMES.length);
      setIsVisible(true);

      // Hide after 4.5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 4500);
    }, 12000);

    // Initial delay
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 4500);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  const person = SOCIAL_PROOF_NAMES[currentIdx];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -50, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-4 left-4 z-40 bg-slate-900/95 border border-amber-500/40 rounded-2xl p-3.5 shadow-2xl backdrop-blur-md max-w-xs flex items-center gap-3 text-slate-100 cursor-pointer hover:border-amber-400/70 transition-colors"
          onClick={() => {
            window.location.href = 'https://pay.kiwify.com.br/9n5XBzJ';
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <div className="text-xs">
            <p className="font-bold text-white font-sans-body flex items-center gap-1">
              <span>{person.name}</span>
              <span className="text-amber-400 text-[10px]">({person.city})</span>
            </p>
            <p className="text-slate-300">
              Acabou de adquirir os <strong className="text-amber-300">100 Estudos Bíblicos</strong>
            </p>
            <span className="text-[10px] text-emerald-400 font-semibold">{person.time} • PIX Aprovado</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
