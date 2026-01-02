'use client';

import React, { useEffect, useState } from 'react';
import { Translations } from '../lib/translations';

interface HeroProps {
  t: Translations;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  const [stars, setStars] = useState<Array<{ left: string; top: string; delay: string; size: number }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 100 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        size: Math.random() * 3 + 1
      }));
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <section className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-background.jpg)'
        }}
      />

      {/* Animated stars background */}
      <div className="absolute inset-0 opacity-30">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.delay,
              animationDuration: `${Math.random() * 2 + 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.3fr_1fr] gap-12 md:gap-20 items-center relative z-10">
        {/* Left side - Text content */}
        <div className="animate-fadeInUp">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-fadeIn">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            {t.hero.subtitle}
          </p>
        </div>
        
        {/* Right side - Statistics cards */}
        <div className="space-y-4 animate-fadeInUp md:ml-12" style={{ animationDelay: '0.3s' }}>
          <p className="text-center md:text-right text-sm text-slate-400 mb-4 font-medium">{t.hero.stats.label}</p>
          
          {/* Users Card */}
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-950/30 backdrop-blur-xl border border-blue-700/40 rounded-2xl p-5 shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02] hover:border-blue-600/60 group">
            <div className="flex items-center justify-between mb-2">
              <div className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-100 transition-colors">8157</div>
              <svg className="w-12 h-12 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.8"/>
                <path d="M12 4 C8 4 5 7 5 11 M12 20 C8 20 5 17 5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                <path d="M12 1 C6 1 1 6 1 12 M12 23 C6 23 1 18 1 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
              </svg>
            </div>
            <div className="text-sm text-slate-300 font-medium">{t.hero.stats.users}</div>
          </div>

          {/* Successful Signals Card */}
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-950/30 backdrop-blur-xl border border-blue-700/40 rounded-2xl p-5 shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02] hover:border-blue-600/60 group">
            <div className="flex items-center justify-between mb-2">
              <div className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-100 transition-colors">12520</div>
              <svg className="w-16 h-12 text-green-400" viewBox="0 0 60 40" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="successGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0,35 L10,28 L20,20 L30,15 L40,12 L50,8 L60,5 L60,40 L0,40 Z" fill="url(#successGradient)" />
                <path d="M0,35 L10,28 L20,20 L30,15 L40,12 L50,8 L60,5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="text-sm text-slate-300 font-medium">{t.hero.stats.successful}</div>
          </div>

          {/* Failed Signals Card */}
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-950/30 backdrop-blur-xl border border-blue-700/40 rounded-2xl p-5 shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02] hover:border-blue-600/60 group">
            <div className="flex items-center justify-between mb-2">
              <div className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-100 transition-colors">5115</div>
              <svg className="w-16 h-12 text-red-400" viewBox="0 0 60 40" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="failedGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0,10 L10,15 L20,18 L30,22 L40,25 L50,28 L60,30 L60,40 L0,40 Z" fill="url(#failedGradient)" />
                <path d="M0,10 L10,15 L20,18 L30,22 L40,25 L50,28 L60,30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="text-sm text-slate-300 font-medium">{t.hero.stats.failed}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
