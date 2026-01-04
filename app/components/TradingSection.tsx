'use client';

import React from 'react';
import { Translations } from '../lib/translations';
import { ScrollReveal } from './ScrollReveal';

interface TradingSectionProps {
  t: Translations;
  onRegisterClick?: () => void;
}

export const TradingSection: React.FC<TradingSectionProps> = ({ t, onRegisterClick }) => {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-black/40 to-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">{t.trading.mainTitle}</span>{' '}
            <span className="text-white">{t.trading.title}</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">{t.trading.subtitle}</p>
          <button 
            onClick={onRegisterClick}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-10 py-4 rounded-xl text-lg font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50 border border-blue-500/30 active:scale-95"
          >
            {t.trading.button}
          </button>
          </div>
        </ScrollReveal>
        
        {/* Trading Image */}
        <ScrollReveal delay={200}>
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border-2 border-blue-900/40 rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02] overflow-hidden">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
            <img 
              src="/trading-horizontal.png" 
              alt="Trading" 
              className="w-full h-full object-cover"
            />
          </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
