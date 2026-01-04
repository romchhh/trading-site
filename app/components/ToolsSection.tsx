'use client';

import React from 'react';
import { LineChart, TrendingUp, Users } from 'lucide-react';
import { Translations } from '../lib/translations';
import { ScrollReveal } from './ScrollReveal';

interface ToolsSectionProps {
  t: Translations;
}

export const ToolsSection: React.FC<ToolsSectionProps> = ({ t }) => {
  const icons = [LineChart, TrendingUp, Users];

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-black/40 to-transparent relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">{t.tools.mainTitle}</span>
            <span className="text-white">, {t.tools.title}</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">{t.tools.subtitle}</p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal delay={200}>
            <div className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border-2 border-blue-900/40 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-[1.02] hover:border-blue-700/60 group overflow-hidden">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
              <img 
                src="/tools-chart.avif" 
                alt={t.tools.chartAlt} 
                className="w-full h-full object-cover"
              />
            </div>
            </div>
          </ScrollReveal>
          
          <div className="space-y-8">
            {t.tools.items.map((item, i) => {
              const IconComponent = icons[i] || LineChart;
              return (
                <ScrollReveal key={i} delay={300 + i * 100}>
                  <div 
                    className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border-2 border-blue-900/40 rounded-3xl p-8 shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02] hover:border-blue-700/60 group"
                  >
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">{item.title}</h3>
                      <p className="text-slate-300 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
