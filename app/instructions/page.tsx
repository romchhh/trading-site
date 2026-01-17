'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { translations, Language, Translations } from '../lib/translations';
import { ScrollReveal } from '../components/ScrollReveal';

function InstructionsPageContent() {
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
    router.push(`/instructions?lang=${lang}`);
  };
  
  const t: Translations = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-black text-white font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <Navigation t={t} language={language} onLanguageChange={handleLanguageChange} onRegisterClick={() => router.push('/login')} />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                {t.instructions.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                {t.instructions.hero.subtitle}
              </p>
            </div>
          </ScrollReveal>

          {/* Video Section */}
          <ScrollReveal delay={200}>
            <div className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border-2 border-blue-900/40 rounded-3xl p-6 md:p-8 shadow-2xl mb-12 overflow-hidden">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900/50 border border-blue-900/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-600/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-10 h-10 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-slate-400 text-lg font-medium">{t.instructions.video.title}</p>
                    <p className="text-slate-500 text-sm mt-2">{t.instructions.video.placeholder}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Buttons Section */}
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href={`/?lang=${language}`}>
                <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-10 py-4 rounded-xl text-lg font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50 border border-blue-500/30 active:scale-95">
                  {t.instructions.buttons.home}
                </button>
              </Link>
              <button 
                onClick={() => router.push('/login')}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-10 py-4 rounded-xl text-lg font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50 border border-blue-500/30 active:scale-95"
              >
                {t.instructions.buttons.register}
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer t={t} />
    </div>
  );
}

export default function InstructionsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-black" />}>
      <InstructionsPageContent />
    </Suspense>
  );
}

