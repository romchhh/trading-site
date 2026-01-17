'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
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
function AIBoostLandingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const langParam = searchParams.get('lang') as Language | null;
  const [language, setLanguage] = useState<Language>(langParam && ['ua', 'en', 'ru', 'sk', 'pl', 'hi', 'tr'].includes(langParam) ? langParam : 'ua');
  
  useEffect(() => {
    if (langParam && langParam !== language) {
      setLanguage(langParam);
    }
  }, [langParam, language]);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    router.push(`/?lang=${lang}`);
  };
  
  const t: Translations = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-black text-white font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <Navigation 
        t={t} 
        language={language} 
        onLanguageChange={handleLanguageChange}
        onRegisterClick={() => router.push('/login')}
      />
      <Hero t={t} />
      <TradingSection 
        t={t} 
        onRegisterClick={() => router.push('/login')}
        onLoginClick={() => router.push('/login')}
      />
      <PairsSection t={t} />
      <FAQSection t={t} />
      <ConfidentSection t={t} />
      <ToolsSection t={t} />
      <HowItWorksSection t={t} onRegisterClick={() => router.push('/login')} />
      <Footer t={t} />
    </div>
  );
}

export default function AIBoostLanding() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-black" />}>
      <AIBoostLandingContent />
    </Suspense>
  );
}
