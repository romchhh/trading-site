'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Eye, EyeOff, Loader2, LogIn, UserPlus, Copy, Check, Send, ExternalLink } from 'lucide-react';
import { translations, Language, Translations } from '../lib/translations';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const REGISTER_URL = 'https://u3.shortink.io/register?utm_campaign=827452&utm_source=affiliate&utm_medium=sr&a=l2oL1jN9TpLZqE&ac=pocket_ua&code=WELCOME50';
const PROMO_CODE = 'PRT932';

type PageMode = 'choice' | 'login' | 'register' | 'post-register';

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const langParam = searchParams.get('lang') as Language | null;
  const [language, setLanguage] = useState<Language>(langParam && ['ua', 'en', 'ru', 'sk', 'pl', 'hi', 'tr'].includes(langParam) ? langParam : 'ua');
  const [mode, setMode] = useState<PageMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [accountId, setAccountId] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [registering, setRegistering] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [registeredUserId, setRegisteredUserId] = useState<number | null>(null);
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

    // Завантажити збережені дані, якщо "Запам'ятати мене" було увімкнено
    const savedEmail = localStorage.getItem('rememberedEmail');
    const savedPassword = localStorage.getItem('rememberedPassword');
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    router.push(`/login?lang=${lang}`);
  };

  const handleCopyPromoCode = () => {
    navigator.clipboard.writeText(PROMO_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLogin = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t.login.error || 'Невірний email або пароль');
      }

      // Store user data in sessionStorage
      sessionStorage.setItem('isAuthenticated', 'true');
      sessionStorage.setItem('userEmail', data.user.email);
      sessionStorage.setItem('userId', data.user.id.toString());
      sessionStorage.setItem('isVerified', data.user.isVerified.toString());
      sessionStorage.setItem('isPocketOptionsIdVerified', data.user.isPocketOptionsIdVerified?.toString() || 'false');
      sessionStorage.setItem('isAdmin', data.user.isAdmin.toString());

      // Якщо "Запам'ятати мене" увімкнено, зберегти в localStorage
      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email.trim());
        localStorage.setItem('rememberedPassword', password);
      } else {
        localStorage.removeItem('rememberedEmail');
        localStorage.removeItem('rememberedPassword');
      }
      
      // Redirect based on user role
      if (data.user.isAdmin) {
        router.push(`/admin?lang=${language}`);
      } else if (data.user.isPocketOptionsIdVerified) {
        router.push(`/ai-signals?lang=${language}`);
      } else {
        // User needs to submit Pocket Options ID
        setMode('post-register');
        setRegisteredUserId(data.user.id);
      }
    } catch (err: any) {
      setError(err.message || t.login.error || 'Помилка входу. Спробуйте пізніше.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    if (!email.trim() || !password.trim()) {
      setError('Будь ласка, введіть email та пароль');
      return;
    }

    if (password.length < 6) {
      setError('Пароль повинен містити мінімум 6 символів');
      return;
    }

    setRegistering(true);
    setError('');

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Помилка реєстрації');
      }

      setRegisteredUserId(data.user.id);
      setMode('post-register');
    } catch (err: any) {
      setError(err.message || 'Помилка реєстрації. Спробуйте пізніше.');
    } finally {
      setRegistering(false);
    }
  };

  const handleSendAccountId = async () => {
    if (!accountId.trim()) {
      setError('Будь ласка, введіть ID акаунту');
      return;
    }

    if (!registeredUserId) {
      setError('Помилка: ID користувача не знайдено');
      return;
    }

    setSending(true);
    setError('');

    try {
      const response = await fetch('/api/user/update-pocket-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: registeredUserId,
          pocketOptionsId: accountId.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Помилка відправки ID');
      }

      setSent(true);
      setAccountId('');
    } catch (err: any) {
      setError(err.message || 'Помилка відправки. Спробуйте пізніше.');
    } finally {
      setSending(false);
    }
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

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Login Mode */}
          {mode === 'login' && (
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-full max-w-lg">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
                    <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl border border-blue-900/30 rounded-3xl p-12 shadow-2xl">
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

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 rounded border-slate-600 bg-slate-800 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 focus:ring-offset-slate-900"
                      />
                      <label htmlFor="rememberMe" className="ml-2 text-sm text-slate-400 cursor-pointer">
                        Запам'ятати мене
                      </label>
                    </div>

                    {error && (
                      <div className="bg-red-950/30 border border-red-900/50 rounded-xl p-3 backdrop-blur-sm">
                        <p className="text-red-400 text-sm">{error}</p>
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

                  <div className="text-center pt-4 border-t border-slate-700/50">
                    <p className="text-slate-400 text-sm">
                      Не маєте акаунту?{' '}
                      <button
                        onClick={() => setMode('register')}
                        className="text-blue-400 hover:text-blue-300 font-semibold transition-colors underline"
                      >
                        Зареєструйтеся
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Register Mode */}
          {mode === 'register' && (
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Реєстрація
                </h2>
                <p className="text-slate-400 text-lg">Створіть новий акаунт</p>
              </div>

              <div className="bg-gradient-to-br from-purple-950/40 to-slate-900/60 border-2 border-purple-900/40 rounded-2xl p-6 sm:p-8 space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-slate-800/60 border-2 border-purple-900/40 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Пароль
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Мінімум 6 символів"
                      className="w-full bg-slate-800/60 border-2 border-purple-900/40 rounded-xl px-4 py-3 pr-12 text-white placeholder-slate-500 focus:outline-none focus:border-purple-600 transition-colors"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleRegister();
                        }
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleRegister}
                  disabled={registering}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/50 border border-purple-500/30 flex items-center justify-center space-x-2"
                >
                  {registering ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Реєстрація...</span>
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-5 h-5" />
                      <span>Зареєструватися</span>
                    </>
                  )}
                </button>

                {error && (
                  <div className="bg-red-950/40 border-2 border-red-900/40 rounded-xl p-4">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                <div className="text-center pt-4 border-t border-slate-700/50">
                  <p className="text-slate-400 text-sm">
                    Вже маєте акаунт?{' '}
                    <button
                      onClick={() => setMode('login')}
                      className="text-purple-400 hover:text-purple-300 font-semibold transition-colors underline"
                    >
                      Увійти
                    </button>
                  </p>
                </div>

                <button
                  onClick={() => setMode('choice')}
                  className="w-full text-sm text-slate-400 hover:text-slate-300 transition-colors"
                >
                  ← Назад
                </button>
              </div>
            </div>
          )}

          {/* Post-Register Mode - Show referral link and ID submission */}
          {mode === 'post-register' && (
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                  {t.registerModal.postRegisterTitle}
                </h2>
                <p className="text-slate-400 text-lg">{t.registerModal.postRegisterSubtitle}</p>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-950/40 to-slate-900/60 border-2 border-blue-900/40 rounded-2xl p-6 sm:p-8 space-y-4">
                  <div>
                    <label className="block text-lg font-semibold text-slate-300 mb-3">
                      {t.registerModal.registerLinkLabel}
                    </label>
                    <a
                      href={REGISTER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 px-4 sm:px-8 py-3 sm:py-5 rounded-xl text-white font-bold text-base sm:text-lg text-center transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-blue-500/70 border-2 border-blue-400/50 hover:border-blue-300 flex items-center justify-center space-x-2 sm:space-x-3 group relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center space-x-2 sm:space-x-3">
                        <span>{t.registerModal.registerButton}</span>
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </a>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      {t.registerModal.promoCodeLabel}
                    </label>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-slate-800/60 border-2 border-blue-900/40 rounded-xl px-6 py-3 text-white font-bold text-lg">
                        {PROMO_CODE}
                      </div>
                      <button
                        onClick={handleCopyPromoCode}
                        className="px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white transition-all duration-300 hover:scale-105 flex-shrink-0"
                      >
                        {copied ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          <Copy className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-950/40 to-slate-900/60 border-2 border-green-900/40 rounded-xl p-4">
                    <p className="text-sm text-slate-200 leading-relaxed">
                      <span className="font-bold text-green-400">{t.registerModal.minDeposit}: $50</span>
                      <br />
                      <span className="font-bold text-green-400">{t.registerModal.bonus}: +60%</span> {t.registerModal.bonusDescriptionFull}
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-950/40 to-slate-900/60 border-2 border-purple-900/40 rounded-2xl p-6 sm:p-8 space-y-4">
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    {t.registerModal.checkBalance}
                  </label>
                  <input
                    type="text"
                    value={accountId}
                    onChange={(e) => setAccountId(e.target.value)}
                    placeholder={t.registerModal.accountIdPlaceholder || "ID акаунту Pocket Options"}
                    className="w-full bg-slate-800/60 border-2 border-blue-900/40 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 transition-colors"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSendAccountId();
                      }
                    }}
                  />
                  <button
                    onClick={handleSendAccountId}
                    disabled={sending || sent}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50 border border-blue-500/30 flex items-center justify-center space-x-2"
                  >
                    {sending ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>{t.registerModal.sending}</span>
                      </>
                    ) : sent ? (
                      <>
                        <Check className="w-5 h-5" />
                        <span>{t.registerModal.sent}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>{t.registerModal.sendButton}</span>
                      </>
                    )}
                  </button>
                  {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                  )}
                  {sent && (
                    <p className="text-green-400 text-sm">{t.registerModal.successMessage}</p>
                  )}
                </div>
              </div>
            </div>
          )}
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
