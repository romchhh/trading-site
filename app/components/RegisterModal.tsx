'use client';

import React, { useState } from 'react';
import { X, Copy, Check, Send, ExternalLink, Eye, EyeOff, LogIn, UserPlus } from 'lucide-react';
import { Translations } from '../lib/translations';
import { useRouter } from 'next/navigation';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translations;
}

const REGISTER_URL = 'https://u3.shortink.io/register?utm_campaign=827452&utm_source=affiliate&utm_medium=sr&a=l2oL1jN9TpLZqE&ac=pocket_ua&code=WELCOME50';
const PROMO_CODE = 'PRT932';

type ModalMode = 'choice' | 'login' | 'register' | 'post-register';

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, t }) => {
  const router = useRouter();
  const [mode, setMode] = useState<ModalMode>('choice');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [accountId, setAccountId] = useState('');
  const [copied, setCopied] = useState(false);
  const [registering, setRegistering] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [registeredUserId, setRegisteredUserId] = useState<number | null>(null);

  if (!isOpen) return null;

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setAccountId('');
    setError('');
    setMode('choice');
    setRegisteredUserId(null);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleCopyPromoCode = () => {
    navigator.clipboard.writeText(PROMO_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      setError('Будь ласка, введіть email та пароль');
      return;
    }

    setLoggingIn(true);
    setError('');

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
        throw new Error(data.error || 'Невірний email або пароль');
      }

      // Store user data in sessionStorage
      sessionStorage.setItem('isAuthenticated', 'true');
      sessionStorage.setItem('userEmail', data.user.email);
      sessionStorage.setItem('userId', data.user.id.toString());
      sessionStorage.setItem('isVerified', data.user.isVerified.toString());
      sessionStorage.setItem('isPocketOptionsIdVerified', data.user.isPocketOptionsIdVerified?.toString() || 'false');
      sessionStorage.setItem('isAdmin', data.user.isAdmin.toString());
      
      handleClose();
      
      // Redirect based on user role
      if (data.user.isAdmin) {
        router.push('/admin');
      } else if (data.user.isPocketOptionsIdVerified) {
        router.push('/ai-signals');
      } else {
        setMode('post-register');
        setEmail(data.user.email);
        setRegisteredUserId(data.user.id);
      }
    } catch (err: any) {
      setError(err.message || 'Помилка входу. Спробуйте пізніше.');
    } finally {
      setLoggingIn(false);
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
      
      setTimeout(() => {
        setSent(false);
        handleClose();
      }, 2000);
    } catch (err: any) {
      setError(err.message || 'Помилка відправки. Спробуйте пізніше.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-black border-2 border-blue-900/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-6 sm:right-6 text-slate-400 hover:text-white transition-colors p-2 hover:bg-blue-950/30 rounded-xl z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="space-y-4 sm:space-y-6">
          {/* Choice Mode - Login or Register */}
          {mode === 'choice' && (
            <>
              <div className="text-center pt-2 sm:pt-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Вхід або Реєстрація
                </h2>
                <p className="text-slate-300 text-sm sm:text-base md:text-lg">
                  Оберіть дію
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setMode('login')}
                  className="bg-gradient-to-br from-blue-950/40 to-slate-900/60 border-2 border-blue-900/40 rounded-xl p-6 sm:p-8 hover:border-blue-600 transition-all duration-300 hover:scale-105 group"
                >
                  <LogIn className="w-12 h-12 mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-2">Вхід</h3>
                  <p className="text-slate-400 text-sm">Якщо у вас вже є акаунт</p>
                </button>

                <button
                  onClick={() => setMode('register')}
                  className="bg-gradient-to-br from-purple-950/40 to-slate-900/60 border-2 border-purple-900/40 rounded-xl p-6 sm:p-8 hover:border-purple-600 transition-all duration-300 hover:scale-105 group"
                >
                  <UserPlus className="w-12 h-12 mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-2">Реєстрація</h3>
                  <p className="text-slate-400 text-sm">Створити новий акаунт</p>
                </button>
              </div>
            </>
          )}

          {/* Login Mode */}
          {mode === 'login' && (
            <>
              <div className="text-center pt-2 sm:pt-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Вхід
                </h2>
                <p className="text-slate-300 text-sm sm:text-base md:text-lg">
                  Введіть ваші дані для входу
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-950/40 to-slate-900/60 border-2 border-blue-900/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-slate-800/60 border-2 border-blue-900/40 rounded-xl px-4 sm:px-6 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 transition-colors text-sm sm:text-base"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleLogin();
                      }
                    }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2">
                    Пароль
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Введіть пароль"
                      className="w-full bg-slate-800/60 border-2 border-blue-900/40 rounded-xl px-4 sm:px-6 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 transition-colors text-sm sm:text-base pr-12"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleLogin();
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
                  onClick={handleLogin}
                  disabled={loggingIn}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50 border border-blue-500/30 flex items-center justify-center space-x-2"
                >
                  {loggingIn ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span className="text-sm sm:text-base">Вхід...</span>
                    </>
                  ) : (
                    <>
                      <LogIn className="w-5 h-5" />
                      <span className="text-sm sm:text-base">Увійти</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setMode('choice')}
                  className="w-full text-sm text-slate-400 hover:text-slate-300 transition-colors"
                >
                  ← Назад
                </button>
              </div>
            </>
          )}

          {/* Register Mode */}
          {mode === 'register' && (
            <>
              <div className="text-center pt-2 sm:pt-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Реєстрація
                </h2>
                <p className="text-slate-300 text-sm sm:text-base md:text-lg">
                  Створіть новий акаунт
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-950/40 to-slate-900/60 border-2 border-purple-900/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-slate-800/60 border-2 border-blue-900/40 rounded-xl px-4 sm:px-6 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 transition-colors text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2">
                    Пароль
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Мінімум 6 символів"
                      className="w-full bg-slate-800/60 border-2 border-blue-900/40 rounded-xl px-4 sm:px-6 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 transition-colors text-sm sm:text-base pr-12"
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
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span className="text-sm sm:text-base">Реєстрація...</span>
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-5 h-5" />
                      <span className="text-sm sm:text-base">Зареєструватися</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setMode('choice')}
                  className="w-full text-sm text-slate-400 hover:text-slate-300 transition-colors"
                >
                  ← Назад
                </button>
              </div>
            </>
          )}

          {/* Post-Register Mode - Show referral link and ID submission */}
          {mode === 'post-register' && (
            <>
              <div className="text-center pt-2 sm:pt-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                  Реєстрація успішна!
                </h2>
                <p className="text-slate-300 text-sm sm:text-base md:text-lg">
                  Завершіть налаштування акаунту
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-950/40 to-slate-900/60 border-2 border-blue-900/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2 sm:mb-3">
                    {t.registerModal.registerLink}
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
                  <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-slate-400 text-center break-all px-2">
                    {REGISTER_URL}
                  </p>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
                    {t.registerModal.promoCode}
                  </label>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="flex-1 bg-slate-800/60 border-2 border-blue-900/40 rounded-xl px-4 sm:px-6 py-2.5 sm:py-3 text-white font-bold text-base sm:text-lg">
                      {PROMO_CODE}
                    </div>
                    <button
                      onClick={handleCopyPromoCode}
                      className="px-3 sm:px-4 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white transition-all duration-300 hover:scale-105 flex-shrink-0"
                      aria-label="Copy promo code"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : (
                        <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-950/40 to-slate-900/60 border-2 border-green-900/40 rounded-xl p-3 sm:p-4">
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    <span className="font-bold text-green-400">{t.registerModal.minDeposit}: $50</span>
                    <br />
                    <span className="font-bold text-green-400">{t.registerModal.bonus}: 60%</span> {t.registerModal.bonusDescription}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-950/40 to-slate-900/60 border-2 border-purple-900/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
                <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-2">
                  {t.registerModal.checkBalance}
                </label>
                <input
                  type="text"
                  value={accountId}
                  onChange={(e) => setAccountId(e.target.value)}
                  placeholder={t.registerModal.accountIdPlaceholder || "ID акаунту Pocket Options"}
                  className="w-full bg-slate-800/60 border-2 border-blue-900/40 rounded-xl px-4 sm:px-6 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 transition-colors text-sm sm:text-base"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSendAccountId();
                    }
                  }}
                />
                <button
                  onClick={handleSendAccountId}
                  disabled={sending || sent}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50 border border-blue-500/30 flex items-center justify-center space-x-2"
                >
                  {sending ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span className="text-sm sm:text-base">{t.registerModal.sending}</span>
                    </>
                  ) : sent ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span className="text-sm sm:text-base">{t.registerModal.sent}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span className="text-sm sm:text-base">{t.registerModal.sendButton}</span>
                    </>
                  )}
                </button>
                {error && (
                  <p className="text-red-400 text-xs sm:text-sm">{error}</p>
                )}
                {sent && (
                  <p className="text-green-400 text-xs sm:text-sm">{t.registerModal.successMessage}</p>
                )}
              </div>
            </>
          )}

          {error && mode !== 'post-register' && (
            <div className="bg-red-950/40 border-2 border-red-900/40 rounded-xl p-4">
              <p className="text-red-400 text-xs sm:text-sm">{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
