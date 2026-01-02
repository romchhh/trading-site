'use client';

import React, { useState } from 'react';
import { translations, Language, Translations } from './lib/translations';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TradingSection } from './components/TradingSection';
import { PairsSection } from './components/PairsSection';
import { FAQSection } from './components/FAQSection';
import { ConfidentSection } from './components/ConfidentSection';
import { ToolsSection } from './components/ToolsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { Footer } from './components/Footer';

export default function AIBoostLanding() {
  const [language, setLanguage] = useState<Language>('ua');
  
  const t: Translations = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-black text-white font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <Navigation 
        t={t} 
        language={language} 
        onLanguageChange={setLanguage} 
      />
      <Hero t={t} />
      <TradingSection t={t} />
      <PairsSection t={t} />
      <FAQSection t={t} />
      <ConfidentSection t={t} />
      <ToolsSection t={t} />
      <HowItWorksSection t={t} />
      <Footer t={t} />
    </div>
  );
}
