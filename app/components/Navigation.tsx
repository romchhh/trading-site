'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Globe } from 'lucide-react';
import { Translations, Language } from '../lib/translations';

interface NavigationProps {
  t: Translations;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ t, language, onLanguageChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/90 backdrop-blur-xl border-b border-blue-900/30 shadow-lg' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 group cursor-pointer">
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">AI.BOOST</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="/" className="text-base font-bold hover:text-blue-400 transition-all duration-300 hover:scale-105">{t.nav.home}</a>
            <a href="/about" className="text-base font-bold hover:text-blue-400 transition-all duration-300 hover:scale-105">{t.nav.about}</a>
            <a href="/instructions" className="text-base font-bold hover:text-blue-400 transition-all duration-300 hover:scale-105">{t.nav.instructions}</a>
            
            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center space-x-2 text-base font-bold hover:text-blue-400 transition-all duration-300 hover:scale-105 px-4 py-2 rounded-xl hover:bg-blue-950/30"
              >
                <Globe className="w-5 h-5" />
                <span>{language.toUpperCase()}</span>
              </button>
              {languageMenuOpen && (
                <div className="absolute top-full mt-3 bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-2xl py-2 min-w-[120px] border border-blue-900/30 animate-fadeIn">
                  <button 
                    onClick={() => { onLanguageChange('ua'); setLanguageMenuOpen(false); }} 
                    className="block w-full px-6 py-3 text-base font-medium hover:bg-blue-900/30 text-left rounded-lg transition-all duration-200"
                  >
                    UA
                  </button>
                  <button 
                    onClick={() => { onLanguageChange('en'); setLanguageMenuOpen(false); }} 
                    className="block w-full px-6 py-3 text-base font-medium hover:bg-blue-900/30 text-left rounded-lg transition-all duration-200"
                  >
                    EN
                  </button>
                  <button 
                    onClick={() => { onLanguageChange('ru'); setLanguageMenuOpen(false); }} 
                    className="block w-full px-6 py-3 text-base font-medium hover:bg-blue-900/30 text-left rounded-lg transition-all duration-200"
                  >
                    RU
                  </button>
                </div>
              )}
            </div>
            
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-8 py-3 rounded-xl text-base font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50 border border-blue-500/30 active:scale-95">
              {t.nav.register}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-3 rounded-xl hover:bg-blue-950/30 transition-all duration-300 relative z-50 overflow-visible" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-7 h-5 flex flex-col justify-between items-start relative">
              <span className={`block h-1 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'w-full rotate-45 translate-y-2.5' : 'w-full'}`}></span>
              <span className={`block h-1 w-full bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-1 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'w-full -rotate-45 -translate-y-2.5' : 'w-4/5'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Rendered via Portal */}
      {mounted && mobileMenuOpen && createPortal(
        <div className="md:hidden fixed inset-0 top-20 bg-slate-950/98 backdrop-blur-xl z-[100] overflow-y-auto">
          <div className="px-6 py-8 space-y-6 min-h-full flex flex-col">
            <a 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xl font-bold text-white hover:text-blue-400 transition-colors py-3"
            >
              {t.nav.home}
            </a>
            <a 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xl font-bold text-white hover:text-blue-400 transition-colors py-3"
            >
              {t.nav.about}
            </a>
            <a 
              href="/instructions" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xl font-bold text-white hover:text-blue-400 transition-colors py-3"
            >
              {t.nav.instructions}
            </a>
            
            <div className="pt-6 mt-auto border-t border-blue-900/30 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-slate-400">Мова</span>
                <div className="relative">
                  <button 
                    onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                    className="flex items-center space-x-2 text-lg font-bold text-white hover:text-blue-400 transition-colors px-4 py-2 rounded-xl hover:bg-blue-950/30"
                  >
                    <Globe className="w-5 h-5" />
                    <span>{language.toUpperCase()}</span>
                  </button>
                  {languageMenuOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-2xl py-2 min-w-[120px] border border-blue-900/30 animate-fadeIn z-[101]">
                      <button 
                        onClick={() => { onLanguageChange('ua'); setLanguageMenuOpen(false); }} 
                        className="block w-full px-6 py-3 text-base font-bold hover:bg-blue-900/30 text-left rounded-lg transition-all duration-200"
                      >
                        UA
                      </button>
                      <button 
                        onClick={() => { onLanguageChange('en'); setLanguageMenuOpen(false); }} 
                        className="block w-full px-6 py-3 text-base font-bold hover:bg-blue-900/30 text-left rounded-lg transition-all duration-200"
                      >
                        EN
                      </button>
                      <button 
                        onClick={() => { onLanguageChange('ru'); setLanguageMenuOpen(false); }} 
                        className="block w-full px-6 py-3 text-base font-bold hover:bg-blue-900/30 text-left rounded-lg transition-all duration-200"
                      >
                        RU
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-8 py-4 rounded-xl text-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/50 border border-blue-500/30 active:scale-95"
              >
                {t.nav.register}
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
};
