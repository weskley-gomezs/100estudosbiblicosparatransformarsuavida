import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface GoldButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'normal' | 'large' | 'giant';
  fullWidth?: boolean;
  subtext?: string;
  icon?: boolean;
}

export const GoldButton: React.FC<GoldButtonProps> = ({
  children,
  onClick,
  size = 'large',
  fullWidth = false,
  subtext,
  icon = true,
}) => {
  const sizeClasses = {
    normal: 'py-3.5 px-6 text-base font-bold',
    large: 'py-4 px-8 text-lg md:text-xl font-extrabold',
    giant: 'py-5 px-10 text-xl md:text-2xl font-black tracking-wide',
  }[size];

  return (
    <div className={`inline-block ${fullWidth ? 'w-full' : ''}`}>
      <motion.button
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className={`relative group overflow-hidden rounded-2xl gold-gradient-bg text-slate-950 shadow-2xl shadow-amber-500/20 gold-btn-hover cursor-pointer border border-amber-200/50 flex flex-col items-center justify-center text-center ${sizeClasses} ${
          fullWidth ? 'w-full' : ''
        }`}
      >
        {/* Shimmer overlay */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer pointer-events-none" />

        {/* Glow backlight */}
        <div className="absolute -inset-1 bg-amber-400/30 rounded-2xl blur-lg group-hover:bg-amber-300/50 transition-all opacity-0 group-hover:opacity-100 -z-10" />

        <div className="relative z-10 flex items-center justify-center gap-3 w-full">
          {icon && <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-slate-900 animate-pulse shrink-0" />}
          <span className="font-sans-body drop-shadow-sm uppercase tracking-wider leading-snug">
            {children}
          </span>
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-slate-900 group-hover:translate-x-1 transition-transform shrink-0" />
        </div>

        {subtext && (
          <span className="relative z-10 text-xs md:text-sm font-semibold text-slate-800/90 mt-1 flex items-center gap-1">
            {subtext}
          </span>
        )}
      </motion.button>
    </div>
  );
};
