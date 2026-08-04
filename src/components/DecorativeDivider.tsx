import React from 'react';

export const DecorativeDivider: React.FC = () => {
  return (
    <div className="relative my-12 md:my-16 flex items-center justify-center max-w-2xl mx-auto px-4 opacity-75">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      <div className="mx-4 text-amber-400 shrink-0 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_#D4AF37]" />
        <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40" />
      </div>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
    </div>
  );
};
