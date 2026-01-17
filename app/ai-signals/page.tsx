'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, TrendingUp, TrendingDown, RefreshCw, Loader2 } from 'lucide-react';
import { translations, Language, Translations } from '../lib/translations';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const OTC_PAIRS = [
  "AED/CNY OTC",
  "BHD/CNY OTC",
  "CAD/JPY OTC",
  "CHF/NOK OTC",
  "EUR/HUF OTC",
  "EUR/JPY OTC",
  "EUR/TRY OTC",
  "GBP/AUD OTC",
  "JOD/CNY OTC",
  "KES/USD OTC",
  "OMR/CNY OTC",
  "QAR/CNY OTC",
  "SAR/CNY OTC",
  "TND/USD OTC",
  "UAH/USD OTC",
  "USD/ARS OTC",
  "USD/BDT OTC",
  "USD/CHF OTC",
  "USD/CNH OTC",
  "USD/COP OTC",
  "USD/EGP OTC",
  "USD/INR OTC",
  "USD/JPY OTC",
  "USD/MYR OTC",
  "ZAR/USD OTC",
  "EUR/GBP OTC",
  "GBP/USD OTC",
  "AUD/CHF OTC",
  "MAD/USD OTC",
  "USD/THB OTC",
  "AUD/JPY OTC",
  "USD/PKR OTC",
  "AUD/CAD OTC",
  "EUR/CHF OTC",
  "CHF/JPY OTC",
  "EUR/NZD OTC",
  "LBP/USD OTC",
  "NZD/USD OTC",
  "AUD/USD OTC",
  "USD/PHP OTC",
  "AUD/NZD OTC",
  "YER/USD OTC",
];

const REGULAR_PAIRS = [
  "CAD/CHF",
  "CAD/JPY",
  "CHF/JPY",
  "EUR/AUD",
  "EUR/CAD",
  "EUR/GBP",
  "EUR/JPY",
  "AUD/CHF",
  "USD/JPY",
];

const TIMEFRAMES = [
  { key: "sec10", value: "timeframe_10s" },
  { key: "sec15", value: "timeframe_15s" },
  { key: "sec30", value: "timeframe_30s" },
  { key: "min1", value: "timeframe_1m" },
  { key: "min5", value: "timeframe_5m" },
];

// Currency to flag mapping
const CURRENCY_FLAGS: Record<string, string> = {
  'AED': '🇦🇪', 'BHD': '🇧🇭', 'CAD': '🇨🇦', 'CHF': '🇨🇭', 'CNY': '🇨🇳', 'CNH': '🇨🇳',
  'EUR': '🇪🇺', 'GBP': '🇬🇧', 'HUF': '🇭🇺', 'JPY': '🇯🇵', 'JOD': '🇯🇴', 'KES': '🇰🇪',
  'NOK': '🇳🇴', 'OMR': '🇴🇲', 'QAR': '🇶🇦', 'SAR': '🇸🇦', 'TRY': '🇹🇷', 'TND': '🇹🇳',
  'UAH': '🇺🇦', 'USD': '🇺🇸', 'ARS': '🇦🇷', 'BDT': '🇧🇩', 'COP': '🇨🇴', 'EGP': '🇪🇬',
  'INR': '🇮🇳', 'MYR': '🇲🇾', 'ZAR': '🇿🇦', 'AUD': '🇦🇺', 'MAD': '🇲🇦', 'THB': '🇹🇭',
  'PKR': '🇵🇰', 'PHP': '🇵🇭', 'NZD': '🇳🇿', 'LBP': '🇱🇧', 'YER': '🇾🇪',
};

const getPairWithFlags = (pair: string): { baseFlag: string; base: string; quoteFlag: string; quote: string; suffix: string } => {
  const parts = pair.replace(' OTC', '').split('/');
  if (parts.length === 2) {
    const [base, quote] = parts;
    const baseFlag = CURRENCY_FLAGS[base] || '';
    const quoteFlag = CURRENCY_FLAGS[quote] || '';
    const suffix = pair.includes('OTC') ? ' OTC' : '';
    return { baseFlag, base, quoteFlag, quote, suffix };
  }
  return { baseFlag: '', base: pair, quoteFlag: '', quote: '', suffix: '' };
};

interface Signal {
  symbol: string;
  direction: 'buy' | 'sell';
  timeTo: string;
}

function AISignalsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const langParam = searchParams.get('lang') as Language | null;
  const [language, setLanguage] = useState<Language>(langParam && ['ua', 'en', 'ru', 'sk', 'pl', 'hi', 'tr'].includes(langParam) ? langParam : 'ua');
  const [selectedPair, setSelectedPair] = useState<string>('');
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [signal, setSignal] = useState<Signal | null>(null);
  const [pairType, setPairType] = useState<'otc' | 'regular'>('otc');

  useEffect(() => {
    if (langParam && langParam !== language) {
      setLanguage(langParam);
    }
  }, [langParam, language]);

  useEffect(() => {
    // Check authentication and Pocket Options ID verification
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    const isPocketOptionsIdVerified = sessionStorage.getItem('isPocketOptionsIdVerified') === 'true';
    const userEmail = sessionStorage.getItem('userEmail');
    
    if (!isAuthenticated || !userEmail) {
      router.push('/login');
      return;
    }

    if (!isPocketOptionsIdVerified) {
      // Show message that Pocket Options ID needs verification
      alert('Ваш Pocket Options ID не підтверджено. Очікуйте підтвердження від адміністратора.');
      router.push('/');
      return;
    }
  }, [router]);

  const t: Translations = translations[language];

  const generateSignal = async () => {
    if (!selectedPair || !selectedTimeframe) {
      alert(t.aiSignals.selectPairAndGenerate);
      return;
    }

    setIsGenerating(true);
    setSignal(null);

    // Simulate signal generation (2-4 seconds)
    const delay = Math.random() * 2000 + 2000;
    await new Promise(resolve => setTimeout(resolve, delay));

    // Generate random signal
    const direction = Math.random() > 0.5 ? 'buy' : 'sell';
    const now = new Date();
    const timeTo = new Date(now.getTime() + 60000); // 1 minute from now
    const timeToStr = `${String(timeTo.getHours()).padStart(2, '0')}:${String(timeTo.getMinutes()).padStart(2, '0')}`;

    setSignal({
      symbol: selectedPair,
      direction,
      timeTo: timeToStr,
    });

    setIsGenerating(false);
  };

  const getCurrentPairs = () => {
    return pairType === 'otc' ? OTC_PAIRS : REGULAR_PAIRS;
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    router.push(`/ai-signals?lang=${lang}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-black text-white font-sans relative overflow-hidden" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <Navigation 
        t={t} 
        language={language} 
        onLanguageChange={handleLanguageChange}
        onRegisterClick={() => router.push(`/?lang=${language}`)}
      />
      
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={() => router.push(`/?lang=${language}`)}
            className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>{t.aiSignals.backToHome}</span>
          </button>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-purple-400 bg-clip-text text-transparent">AI</span>{' '}
              <span className="text-white">{t.aiSignals.title.replace('AI ', '')}</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl">{t.aiSignals.subtitle}</p>
          </div>
        </div>

        {/* Top Section - Quick Selection */}
        <div className="mb-8">
          <div className="bg-gradient-to-br from-slate-900/70 to-slate-950/70 backdrop-blur-xl border border-blue-900/30 rounded-3xl p-6 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Pair Type */}
              <div>
                <h3 className="text-sm font-semibold text-slate-400 mb-3">{t.aiSignals.pairType}</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setPairType('otc');
                      setSelectedPair('');
                    }}
                    className={`flex-1 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                      pairType === 'otc'
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-slate-800/40 text-slate-400 hover:bg-slate-800/60 hover:text-slate-300 border border-slate-700/50'
                    }`}
                  >
                    {t.aiSignals.otcPairs}
                  </button>
                  <button
                    onClick={() => {
                      setPairType('regular');
                      setSelectedPair('');
                    }}
                    className={`flex-1 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                      pairType === 'regular'
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-slate-800/40 text-slate-400 hover:bg-slate-800/60 hover:text-slate-300 border border-slate-700/50'
                    }`}
                  >
                    {t.aiSignals.regularPairs}
                  </button>
                </div>
              </div>

              {/* Timeframe */}
              <div>
                <h3 className="text-sm font-semibold text-slate-400 mb-3">{t.aiSignals.timeframe}</h3>
                <div className="grid grid-cols-5 gap-1.5">
                  {TIMEFRAMES.map((tf) => (
                    <button
                      key={tf.value}
                      onClick={() => setSelectedTimeframe(tf.value)}
                      className={`px-2 py-2 rounded-lg font-medium text-xs transition-all duration-300 ${
                        selectedTimeframe === tf.value
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30'
                          : 'bg-slate-800/40 text-slate-400 hover:bg-slate-800/60 hover:text-slate-300 border border-slate-700/50'
                      }`}
                    >
                      {t.aiSignals.timeframes[tf.key as keyof typeof t.aiSignals.timeframes]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <div className="flex items-end">
                <button
                  onClick={generateSignal}
                  disabled={isGenerating || !selectedPair || !selectedTimeframe}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-xl text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/30 border border-blue-500/30 flex items-center justify-center space-x-2 group"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span className="hidden sm:inline">{t.aiSignals.generating}</span>
                    </>
                  ) : (
                    <>
                      <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                      <span>{t.aiSignals.generate}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
          {/* Signal Display - Mobile first (order-1), Desktop second (order-2) */}
          {(signal || isGenerating) && (
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="bg-gradient-to-br from-slate-900/70 to-slate-950/70 backdrop-blur-xl border border-blue-900/30 rounded-3xl p-8 min-h-[400px] lg:min-h-[600px] flex items-center justify-center shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
              {isGenerating ? (
                <div className="text-center space-y-4">
                  <div className="relative">
                    <Loader2 className="w-20 h-20 animate-spin mx-auto text-blue-400" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-full blur-xl"></div>
                    </div>
                  </div>
                  <p className="text-xl text-slate-300 font-medium">{t.aiSignals.generating}</p>
                  <p className="text-sm text-slate-500">{t.aiSignals.analyzing}</p>
                </div>
              ) : signal ? (
                <div className="w-full space-y-6">
                  <div className="text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-2">
                      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{t.aiSignals.signalGenerated}</h3>
                    <p className="text-sm text-slate-400">{t.aiSignals.readyToUse}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-950/30 to-slate-900/50 border border-blue-900/30 rounded-2xl p-6 space-y-5 backdrop-blur-sm">
                    <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-400 font-medium text-sm">{t.aiSignals.symbol}</span>
                      <span className="text-white font-bold text-lg flex items-center space-x-2">
                        {(() => {
                          const { baseFlag, base, quoteFlag, quote, suffix } = getPairWithFlags(signal.symbol);
                          return (
                            <>
                              <span className="text-2xl">{baseFlag}</span>
                              <span>{base}/{quote}</span>
                              <span className="text-2xl">{quoteFlag}</span>
                              {suffix && <span className="text-xs text-slate-400">{suffix}</span>}
                            </>
                          );
                        })()}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                      <span className="text-slate-400 font-medium text-sm">{t.aiSignals.direction}</span>
                      <div className={`flex items-center space-x-2 ${
                        signal.direction === 'buy' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {signal.direction === 'buy' ? (
                          <TrendingUp className="w-6 h-6" />
                        ) : (
                          <TrendingDown className="w-6 h-6" />
                        )}
                        <span className="font-bold text-lg">
                          {signal.direction === 'buy' ? t.aiSignals.buy : t.aiSignals.sell}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-2">
                      <span className="text-slate-400 font-medium text-sm">{t.aiSignals.timeTo}</span>
                      <span className="text-white font-bold text-xl">{signal.timeTo}</span>
                    </div>
                  </div>

                  <button
                    onClick={generateSignal}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-6 py-3.5 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/30 border border-blue-500/30 flex items-center justify-center space-x-2 group"
                  >
                    <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                    <span>{t.aiSignals.getNewSignal}</span>
                  </button>
                </div>
              ) : (
                <div className="text-center space-y-4 w-full">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-slate-800/50 border border-slate-700/50 mb-4">
                    <svg className="w-12 h-12 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <p className="text-2xl text-slate-300 font-semibold">{t.aiSignals.readyToGenerate}</p>
                    <p className="text-slate-500">{t.aiSignals.selectPairAndGenerate}</p>
                  </div>
                  {(!selectedPair || !selectedTimeframe) && (
                    <div className="mt-6 space-y-2 text-sm text-slate-400">
                      {!selectedPair && (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                          <span>{t.aiSignals.selectPairHint}</span>
                        </div>
                      )}
                      {!selectedTimeframe && (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                          <span>{t.aiSignals.selectTimeframeHint}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
              </div>
            </div>
          )}

          {/* Left - Pair Selection - Mobile second (order-2), Desktop first (order-1) */}
          <div className={`lg:col-span-1 ${(signal || isGenerating) ? 'order-2' : 'order-1'} lg:order-1`}>
            <div className="bg-gradient-to-br from-slate-900/70 to-slate-950/70 backdrop-blur-xl border border-blue-900/30 rounded-3xl p-6 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 h-full">
              <h2 className="text-lg font-semibold mb-4 text-slate-300">{t.aiSignals.selectPair}</h2>
              <div className="grid grid-cols-2 gap-2 max-h-[600px] overflow-y-auto custom-scrollbar">
                {getCurrentPairs().map((pair) => {
                  const { baseFlag, base, quoteFlag, quote, suffix } = getPairWithFlags(pair);
                  return (
                    <button
                      key={pair}
                      onClick={() => setSelectedPair(pair)}
                      className={`px-2 py-2 rounded-xl font-medium text-xs transition-all duration-300 flex items-center justify-center space-x-1 group whitespace-nowrap ${
                        selectedPair === pair
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30 scale-105'
                          : 'bg-slate-800/40 text-slate-400 hover:bg-slate-800/60 hover:text-slate-300 border border-slate-700/50 hover:border-slate-600/50'
                      }`}
                    >
                      <span className="text-sm">{baseFlag}</span>
                      <span className="font-semibold">{base}</span>
                      <span className="text-slate-500">/</span>
                      <span className="font-semibold">{quote}</span>
                      <span className="text-sm">{quoteFlag}</span>
                      {suffix && <span className="text-[10px] opacity-70 ml-0.5">{suffix}</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer t={t} />
    </div>
  );
}

export default function AISignalsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-black" />}>
      <AISignalsContent />
    </Suspense>
  );
}

