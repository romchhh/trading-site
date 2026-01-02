'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Translations } from '../lib/translations';
import { ScrollReveal } from './ScrollReveal';

interface FAQSectionProps {
  t: Translations;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ t }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-black/40 to-transparent relative">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">{t.faq.title}</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">{t.faq.subtitle}</p>
          </div>
        </ScrollReveal>
        
        <div className="space-y-5">
          {t.faq.questions.map((item, i) => {
            const question = typeof item === 'string' ? item : item.question;
            const answer = typeof item === 'string' ? '' : item.answer;
            
            return (
              <ScrollReveal key={i} delay={i * 100}>
                <div 
                  className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border-2 border-blue-900/40 rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02] hover:border-blue-700/60 group"
                >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center text-left group-hover:text-blue-300 transition-colors"
                >
                  <span className="text-lg md:text-xl font-bold text-white pr-4">{question}</span>
                  <ChevronDown className={`w-6 h-6 text-blue-400 transition-all duration-300 flex-shrink-0 ${openFaq === i ? 'rotate-180 text-blue-300' : ''}`} />
                </button>
                {openFaq === i && answer && (
                  <div className="mt-6 pt-6 border-t border-blue-900/30 animate-fadeIn">
                    <p className="text-slate-300 text-base md:text-lg leading-relaxed">{answer}</p>
                  </div>
                )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
