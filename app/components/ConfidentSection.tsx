'use client';

import React from 'react';
import { BarChart3, TrendingUp, Zap } from 'lucide-react';
import { Translations } from '../lib/translations';
import { ScrollReveal } from './ScrollReveal';

interface ConfidentSectionProps {
  t: Translations;
}

export const ConfidentSection: React.FC<ConfidentSectionProps> = ({ t }) => {
  const icons = [BarChart3, TrendingUp, Zap];

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-transparent via-black/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">{t.confident.title}</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">{t.confident.subtitle}</p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          {t.confident.features.map((feature, i) => {
            const IconComponent = icons[i];
            return (
              <ScrollReveal key={i} delay={i * 150}>
                <div 
                  className="bg-gradient-to-br from-slate-900/70 to-slate-950/70 backdrop-blur-xl border-2 border-blue-900/50 rounded-3xl p-10 shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 hover:scale-105 hover:border-blue-700/70 group relative overflow-hidden"
                >
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-center">
                    <IconComponent className="w-12 h-12 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-4 group-hover:text-blue-300 transition-colors text-center">{feature.title}</h3>
                  <p className="text-slate-300 text-lg leading-relaxed text-center">{feature.desc}</p>
                </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
