'use client';

import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Translations } from '../lib/translations';
import { ScrollReveal } from './ScrollReveal';

interface PairsSectionProps {
  t: Translations;
}

export const PairsSection: React.FC<PairsSectionProps> = ({ t }) => {
  const pairs = [
    { pair: 'EUR/USD', time: '17:33', duration: '1-5 хвилин', price: '1.04091', color: 'red', trend: 'down' },
    { pair: 'GBP/JPY', time: '12:16', duration: '2 хвилини', price: '163.509', color: 'green', trend: 'up' },
    { pair: 'USD/CHF', time: '09:05', duration: '2 хвилини', price: '1.49508', color: 'blue', trend: 'neutral' },
    { pair: 'AUD/USD', time: '14:22', duration: '1-5 хвилин', price: '0.65234', color: 'green', trend: 'up' },
    { pair: 'USD/JPY', time: '16:45', duration: '2 хвилини', price: '149.876', color: 'red', trend: 'down' },
    { pair: 'EUR/GBP', time: '11:30', duration: '1-5 хвилин', price: '0.86542', color: 'blue', trend: 'neutral' },
  ];

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-transparent via-black/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">{t.pairs.title}</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">{t.pairs.subtitle}</p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="bg-gradient-to-br from-slate-900/70 to-slate-950/70 backdrop-blur-xl border-2 border-blue-900/50 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden relative">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 pointer-events-none" />
          
          <div className="relative">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-blue-900/50">
                  <th className="text-left py-6 px-6 text-lg text-slate-300 font-bold">{t.pairs.table.pair}</th>
                  <th className="text-left py-6 px-6 text-lg text-slate-300 font-bold">{t.pairs.table.expiration}</th>
                  <th className="text-left py-6 px-6 text-lg text-slate-300 font-bold">{t.pairs.table.duration}</th>
                  <th className="text-left py-6 px-6 text-lg text-slate-300 font-bold">{t.pairs.table.entry}</th>
                </tr>
              </thead>
              <tbody>
                {pairs.map((item, i) => (
                  <tr 
                    key={i} 
                    className="border-b border-blue-900/20 hover:bg-blue-950/40 transition-all duration-300 group cursor-pointer relative"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    <td className="py-6 px-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${item.color === 'red' ? 'bg-red-500 shadow-lg shadow-red-500/50' : item.color === 'green' ? 'bg-green-500 shadow-lg shadow-green-500/50' : 'bg-blue-500 shadow-lg shadow-blue-500/50'} group-hover:scale-150 transition-transform`} />
                        <span className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">{item.pair}</span>
                      </div>
                    </td>
                    <td className="py-6 px-6 text-lg text-slate-300 font-medium">{item.time}</td>
                    <td className="py-6 px-6 text-lg text-slate-300 font-medium">{item.duration}</td>
                    <td className="py-6 px-6">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg text-white font-bold">{item.price}</span>
                        {item.trend === 'up' && (
                          <TrendingUp className="w-5 h-5 text-green-400" />
                        )}
                        {item.trend === 'down' && (
                          <TrendingDown className="w-5 h-5 text-red-400" />
                        )}
                        {item.trend === 'neutral' && (
                          <Minus className="w-5 h-5 text-blue-400" />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
