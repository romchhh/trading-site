'use client';

import React from 'react';
import { Translations } from '../lib/translations';
import { ScrollReveal } from './ScrollReveal';

interface HowItWorksSectionProps {
  t: Translations;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ t }) => {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Як це </span>
            <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">працює</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">{t.howItWorks.subtitle}</p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {t.howItWorks.steps.map((step, i) => (
            <ScrollReveal key={i} delay={200 + i * 100}>
              <div 
                className={`${i === 0 ? 'border-2 border-blue-600 bg-gradient-to-br from-blue-950/40 to-slate-950/60 shadow-blue-500/30' : 'border-2 border-blue-900/40 bg-gradient-to-br from-slate-900/60 to-slate-950/60'} backdrop-blur-xl rounded-3xl p-8 md:p-10 text-center shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-105 hover:border-blue-700/60 group`}
              >
              <div className="text-4xl md:text-5xl font-bold mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">0{i + 1}.</div>
              <div className="text-xl md:text-2xl font-bold text-white">{step}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={600}>
          <div className="text-center">
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">{t.howItWorks.cta}</p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-10 py-4 rounded-xl text-lg font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50 border border-blue-500/30 active:scale-95">
            {t.howItWorks.button}
          </button>
          </div>
        </ScrollReveal>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-40 opacity-20">
        <svg viewBox="0 0 1200 120" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" fill="#3b82f6" opacity="0.4" />
          <path d="M0,80 Q300,40 600,80 T1200,80 L1200,120 L0,120 Z" fill="#8b5cf6" opacity="0.4" />
        </svg>
      </div>
    </section>
  );
};
