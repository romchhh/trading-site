'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { translations, Language, Translations } from '../lib/translations';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const TRADER_EMAIL = process.env.NEXT_PUBLIC_TRADER_EMAIL || 'trader@gmail.com';
const TRADER_PASSWORD = process.env.NEXT_PUBLIC_TRADER_PASSWORD || 'ai-trading-2026';

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const langParam = searchParams.get('lang') as Language | null;
  const [language, setLanguage] = useState<Language>(langParam && ['ua', 'en', 'ru', 'sk', 'pl', 'hi', 'tr'].includes(langParam) ? langParam : 'ua');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [stars, setStars] = useState<Array<{ left: string; top: string; delay: string; size: number }>>([]);

  useEffect(() => {
    if (langParam && langParam !== language) {
      setLanguage(langParam);
    }
  }, [langParam, language]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 150 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        size: Math.random() * 2 + 0.5
      }));
      setStars(newStars);
    };
    generateStars();
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    router.push(`/login?lang=${lang}`);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));

    if (email.trim() === TRADER_EMAIL && password === TRADER_PASSWORD) {
      // Store auth in sessionStorage
      sessionStorage.setItem('isAuthenticated', 'true');
      setLoading(false);
      router.push(`/ai-signals?lang=${language}`);
    } else {
      setError(t.login.error);
      setLoading(false);
    }
  };

  const t: Translations = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-black text-white font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <Navigation 
        t={t} 
        language={language} 
        onLanguageChange={handleLanguageChange}
        onRegisterClick={() => router.push('/')}
      />
      
      <div className="relative min-h-[calc(100vh-160px)] flex items-center justify-center py-20">
        {/* Starry Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/50 to-purple-950/30">
          <div className="absolute inset-0 opacity-40">
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
          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Minimalist Chart */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <div className="relative">
                {/* Subtle glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
                
                {/* Main card */}
                <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl border border-blue-900/30 rounded-3xl p-12 shadow-2xl">
                  {/* Chart visualization */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="h-2 bg-slate-700/50 rounded-full w-24"></div>
                        <div className="h-2 bg-slate-700/50 rounded-full w-16"></div>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="relative h-32">
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="minimalChartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 10,70 Q 40,50 70,45 T 130,40 T 190,35 L 190,100 L 10,100 Z"
                          fill="url(#minimalChartGradient)"
                        />
                        <path
                          d="M 10,70 Q 40,50 70,45 T 130,40 T 190,35"
                          stroke="url(#lineGradient)"
                          strokeWidth="2.5"
                          fill="none"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#a855f7" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                      <div>
                        <div className="text-xs text-slate-400 mb-1">Точність</div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">87%</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 mb-1">Сигналів</div>
                        <div className="text-2xl font-bold text-white">55K+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-3">
                  <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">{t.login.title}</span>
                </h2>
                <p className="text-slate-400 text-lg">{t.login.subtitle}</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-300">
                    {t.login.email}<span className="text-red-400 ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.login.email}
                    className="w-full bg-slate-900/50 border border-slate-700/50 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all text-base placeholder:text-slate-500"
                    required
                    disabled={loading}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-300">
                    {t.login.password}<span className="text-red-400 ml-1">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={t.login.password}
                      className="w-full bg-slate-900/50 border border-slate-700/50 text-white rounded-xl px-4 py-3.5 pr-12 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all text-base placeholder:text-slate-500"
                      required
                      disabled={loading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors p-1"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="bg-red-950/30 border border-red-900/50 rounded-xl p-3 backdrop-blur-sm">
                    <p className="text-red-400 text-sm">{t.login.error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-4 rounded-xl text-white font-semibold text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/30 border border-blue-500/30 flex items-center justify-center space-x-2 group"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>{t.login.loggingIn}</span>
                    </>
                  ) : (
                    <>
                      <span>{t.login.loginButton}</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer t={t} />
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-black" />}>
      <LoginContent />
    </Suspense>
  );
}

