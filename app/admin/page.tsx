'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Check, X, RefreshCw, Loader2, LogOut, Shield } from 'lucide-react';
import { translations, Language, Translations } from '../lib/translations';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

interface User {
  id: number;
  email: string;
  pocketOptionsId: string | null;
  isVerified: boolean;
  isPocketOptionsIdVerified: boolean;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}

function AdminContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const langParam = searchParams.get('lang') as Language | null;
  const [language, setLanguage] = useState<Language>(langParam && ['ua', 'en', 'ru', 'sk', 'pl', 'hi', 'tr'].includes(langParam) ? langParam : 'ua');
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [verifyingId, setVerifyingId] = useState<number | null>(null);
  const [verifyingPocketId, setVerifyingPocketId] = useState<number | null>(null);

  useEffect(() => {
    if (langParam && langParam !== language) {
      setLanguage(langParam);
    }
  }, [langParam, language]);

  useEffect(() => {
    // Check if user is admin
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    const isAdmin = sessionStorage.getItem('isAdmin') === 'true';
    const userEmail = sessionStorage.getItem('userEmail');

    if (!isAuthenticated || !isAdmin || !userEmail) {
      console.log('Admin check failed:', { isAuthenticated, isAdmin, userEmail });
      setError('Доступ заборонено. Потрібні права адміністратора.');
      setTimeout(() => {
        router.push('/login');
      }, 2000);
      return;
    }

    loadUsers();
  }, [router]);

  const loadUsers = async () => {
    setLoading(true);
    setError('');
    
    try {
      const userEmail = sessionStorage.getItem('userEmail');
      if (!userEmail) {
        throw new Error('Email користувача не знайдено в сесії');
      }

      const response = await fetch('/api/admin/users', {
        headers: {
          'x-user-email': userEmail,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('API Error:', data);
        throw new Error(data.error || 'Помилка завантаження користувачів');
      }

      console.log('Users loaded:', data.users?.length || 0);
      setUsers(data.users || []);
    } catch (err: any) {
      console.error('Load users error:', err);
      setError(err.message || 'Помилка завантаження користувачів. Перевірте консоль браузера для деталей.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyUser = async (userId: number) => {
    setVerifyingId(userId);
    setError('');
    
    try {
      const userEmail = sessionStorage.getItem('userEmail');
      const response = await fetch('/api/admin/verify-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-email': userEmail || '',
        },
        body: JSON.stringify({ userId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Помилка підтвердження користувача');
      }

      // Update user in local state
      setUsers(users.map(user => 
        user.id === userId ? { ...user, isVerified: true } : user
      ));
    } catch (err: any) {
      setError(err.message || 'Помилка підтвердження користувача');
    } finally {
      setVerifyingId(null);
    }
  };

  const handleUnverifyUser = async (userId: number) => {
    setVerifyingId(userId);
    setError('');
    
    try {
      const userEmail = sessionStorage.getItem('userEmail');
      const response = await fetch('/api/admin/unverify-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-email': userEmail || '',
        },
        body: JSON.stringify({ userId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Помилка скасування підтвердження');
      }

      // Update user in local state
      setUsers(users.map(user => 
        user.id === userId ? { ...user, isVerified: false } : user
      ));
    } catch (err: any) {
      setError(err.message || 'Помилка скасування підтвердження');
    } finally {
      setVerifyingId(null);
    }
  };

  const handleVerifyPocketId = async (userId: number) => {
    setVerifyingPocketId(userId);
    setError('');
    
    try {
      const userEmail = sessionStorage.getItem('userEmail');
      const response = await fetch('/api/admin/verify-pocket-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-email': userEmail || '',
        },
        body: JSON.stringify({ userId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Помилка підтвердження Pocket Options ID');
      }

      // Update user in local state
      setUsers(users.map(user => 
        user.id === userId ? { ...user, isPocketOptionsIdVerified: true } : user
      ));
    } catch (err: any) {
      setError(err.message || 'Помилка підтвердження Pocket Options ID');
    } finally {
      setVerifyingPocketId(null);
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    router.push('/');
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    router.push(`/admin?lang=${lang}`);
  };

  const t: Translations = translations[language];

  const unverifiedUsers = users.filter(u => !u.isVerified);
  const verifiedUsers = users.filter(u => u.isVerified);
  const usersWithPocketId = users.filter(u => u.pocketOptionsId && u.pocketOptionsId.trim() !== '');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-black text-white font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <Navigation 
        t={t} 
        language={language} 
        onLanguageChange={handleLanguageChange}
        onRegisterClick={() => router.push('/')}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Адмін Панель
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={loadUsers}
              disabled={loading}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
              <span>Оновити</span>
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <LogOut className="w-5 h-5" />
              <span>Вийти</span>
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-950/40 border-2 border-red-900/40 rounded-xl text-red-400">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-blue-400" />
          </div>
        ) : (
          <div className="space-y-8">
            {/* All Users with Pocket Options ID */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-slate-300">
                Всі користувачі з Pocket Options ID ({usersWithPocketId.length})
              </h2>
              <div className="bg-gradient-to-br from-slate-900/70 to-slate-950/70 backdrop-blur-xl border border-blue-900/30 rounded-3xl p-6 shadow-2xl">
                {usersWithPocketId.length === 0 ? (
                  <p className="text-slate-400 text-center py-8">Немає користувачів з Pocket Options ID</p>
                ) : (
                  <div className="space-y-4">
                    {usersWithPocketId.map((user) => (
                      <div
                        key={user.id}
                        className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 hover:bg-slate-800/60 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <span className="font-semibold text-white">{user.email}</span>
                              {user.isVerified && (
                                <span className="px-2 py-1 bg-green-600/30 text-green-300 rounded text-xs font-semibold">
                                  Підтверджено
                                </span>
                              )}
                              {user.isPocketOptionsIdVerified ? (
                                <span className="px-2 py-1 bg-green-600/30 text-green-300 rounded text-xs font-semibold">
                                  ID підтверджено
                                </span>
                              ) : (
                                <span className="px-2 py-1 bg-yellow-600/30 text-yellow-300 rounded text-xs font-semibold">
                                  ID не підтверджено
                                </span>
                              )}
                              {user.isAdmin && (
                                <span className="px-2 py-1 bg-purple-600/30 text-purple-300 rounded text-xs font-semibold">
                                  Адмін
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-slate-400 mb-1">
                              <span className="text-slate-500">Pocket Options ID:</span>{' '}
                              <span className="text-white font-bold text-base">{user.pocketOptionsId}</span>
                            </p>
                            <p className="text-xs text-slate-500 mt-1">
                              Зареєстровано: {new Date(user.createdAt).toLocaleString('uk-UA')}
                            </p>
                          </div>
                          <div className="ml-4 flex flex-col space-y-2">
                            {!user.isPocketOptionsIdVerified && (
                              <button
                                onClick={() => handleVerifyPocketId(user.id)}
                                disabled={verifyingPocketId === user.id}
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 text-sm"
                              >
                                {verifyingPocketId === user.id ? (
                                  <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                  <Check className="w-4 h-4" />
                                )}
                                <span>Підтвердити ID</span>
                              </button>
                            )}
                            {!user.isVerified && (
                              <button
                                onClick={() => handleVerifyUser(user.id)}
                                disabled={verifyingId === user.id}
                                className="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:opacity-50 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 text-sm"
                              >
                                {verifyingId === user.id ? (
                                  <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                  <Check className="w-4 h-4" />
                                )}
                                <span>Підтвердити</span>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Unverified Users */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-slate-300">
                Очікують підтвердження ({unverifiedUsers.length})
              </h2>
              <div className="bg-gradient-to-br from-slate-900/70 to-slate-950/70 backdrop-blur-xl border border-red-900/30 rounded-3xl p-6 shadow-2xl">
                {unverifiedUsers.length === 0 ? (
                  <p className="text-slate-400 text-center py-8">Немає користувачів, що очікують підтвердження</p>
                ) : (
                  <div className="space-y-4">
                    {unverifiedUsers.map((user) => (
                      <div
                        key={user.id}
                        className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 flex items-center justify-between hover:bg-slate-800/60 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="font-semibold text-white">{user.email}</span>
                            {user.isAdmin && (
                              <span className="px-2 py-1 bg-purple-600/30 text-purple-300 rounded text-xs font-semibold">
                                Адмін
                              </span>
                            )}
                          </div>
                          {user.pocketOptionsId ? (
                            <div className="space-y-1">
                              <p className="text-sm text-slate-400">
                                Pocket Options ID: <span className="text-white font-semibold">{user.pocketOptionsId}</span>
                              </p>
                              {user.isPocketOptionsIdVerified ? (
                                <span className="inline-block px-2 py-1 bg-green-600/30 text-green-300 rounded text-xs font-semibold">
                                  ID підтверджено
                                </span>
                              ) : (
                                <span className="inline-block px-2 py-1 bg-yellow-600/30 text-yellow-300 rounded text-xs font-semibold">
                                  ID не підтверджено
                                </span>
                              )}
                            </div>
                          ) : (
                            <p className="text-sm text-slate-500">
                              Pocket Options ID не надано
                            </p>
                          )}
                          <p className="text-xs text-slate-500 mt-1">
                            Зареєстровано: {new Date(user.createdAt).toLocaleString('uk-UA')}
                          </p>
                        </div>
                        <div className="ml-4 flex flex-col space-y-2">
                          <button
                            onClick={() => handleVerifyUser(user.id)}
                            disabled={verifyingId === user.id}
                            className="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:opacity-50 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                          >
                            {verifyingId === user.id ? (
                              <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                              <Check className="w-5 h-5" />
                            )}
                            <span>Підтвердити</span>
                          </button>
                          {user.pocketOptionsId && !user.isPocketOptionsIdVerified && (
                            <button
                              onClick={() => handleVerifyPocketId(user.id)}
                              disabled={verifyingPocketId === user.id}
                              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 text-sm"
                            >
                              {verifyingPocketId === user.id ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                              ) : (
                                <Check className="w-4 h-4" />
                              )}
                              <span>Підтвердити ID</span>
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Verified Users */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-slate-300">
                Підтверджені користувачі ({verifiedUsers.length})
              </h2>
              <div className="bg-gradient-to-br from-slate-900/70 to-slate-950/70 backdrop-blur-xl border border-green-900/30 rounded-3xl p-6 shadow-2xl">
                {verifiedUsers.length === 0 ? (
                  <p className="text-slate-400 text-center py-8">Немає підтверджених користувачів</p>
                ) : (
                  <div className="space-y-4">
                    {verifiedUsers.map((user) => (
                      <div
                        key={user.id}
                        className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 flex items-center justify-between hover:bg-slate-800/60 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="font-semibold text-white">{user.email}</span>
                            <span className="px-2 py-1 bg-green-600/30 text-green-300 rounded text-xs font-semibold">
                              Підтверджено
                            </span>
                            {user.isAdmin && (
                              <span className="px-2 py-1 bg-purple-600/30 text-purple-300 rounded text-xs font-semibold">
                                Адмін
                              </span>
                            )}
                          </div>
                          {user.pocketOptionsId ? (
                            <div className="space-y-1">
                              <p className="text-sm text-slate-400">
                                Pocket Options ID: <span className="text-white font-semibold">{user.pocketOptionsId}</span>
                              </p>
                              {user.isPocketOptionsIdVerified ? (
                                <span className="inline-block px-2 py-1 bg-green-600/30 text-green-300 rounded text-xs font-semibold">
                                  ID підтверджено
                                </span>
                              ) : (
                                <span className="inline-block px-2 py-1 bg-yellow-600/30 text-yellow-300 rounded text-xs font-semibold">
                                  ID не підтверджено
                                </span>
                              )}
                            </div>
                          ) : (
                            <p className="text-sm text-slate-500">
                              Pocket Options ID не надано
                            </p>
                          )}
                          {user.pocketOptionsId && !user.isPocketOptionsIdVerified && (
                            <button
                              onClick={() => handleVerifyPocketId(user.id)}
                              disabled={verifyingPocketId === user.id}
                              className="mt-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-lg text-white text-xs font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-1"
                            >
                              {verifyingPocketId === user.id ? (
                                <Loader2 className="w-3 h-3 animate-spin" />
                              ) : (
                                <Check className="w-3 h-3" />
                              )}
                              <span>Підтвердити ID</span>
                            </button>
                          )}
                          <p className="text-xs text-slate-500 mt-1">
                            Зареєстровано: {new Date(user.createdAt).toLocaleString('uk-UA')}
                          </p>
                        </div>
                        <button
                          onClick={() => handleUnverifyUser(user.id)}
                          disabled={verifyingId === user.id}
                          className="ml-4 px-4 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                        >
                          {verifyingId === user.id ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                          ) : (
                            <X className="w-5 h-5" />
                          )}
                          <span>Скасувати</span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      
      <Footer t={t} />
    </div>
  );
}

export default function AdminPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-black" />}>
      <AdminContent />
    </Suspense>
  );
}
