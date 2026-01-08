'use client';

import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Translations } from '../lib/translations';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translations;
}

const TRADER_EMAIL = process.env.NEXT_PUBLIC_TRADER_EMAIL || 'trader@gmail.com';
const TRADER_PASSWORD = process.env.NEXT_PUBLIC_TRADER_PASSWORD || 'ai-trading-2026';

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, t }) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [stars, setStars] = useState<Array<{ left: string; top: string; delay: string; size: number }>>([]);

  useEffect(() => {
    if (isOpen) {
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
    }
  }, [isOpen]);

  if (!isOpen) return null;

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
      onClose();
      router.push('/ai-signals');
    } else {
      setError('Невірний логін або пароль');
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center min-h-screen overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-purple-950 to-black">
        {/* Left side - more stars */}
        <div className="absolute inset-0 opacity-60">
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
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
        {/* Left Side - Chart Graphic */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-md">
            {/* Glowing circular frame */}
            <div className="relative w-full aspect-square">
              {/* Outer glow rings */}
              <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 blur-xl"></div>
              <div className="absolute inset-4 rounded-full border-4 border-purple-500/30 blur-lg"></div>
              <div className="absolute inset-8 rounded-full border-4 border-pink-500/20 blur-md"></div>
              
              {/* Main circle with segments */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 backdrop-blur-sm border-2 border-blue-400/40">
                {/* Chart inside */}
                <svg className="absolute inset-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)]" viewBox="0 0 200 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 10,80 Q 30,60 50,50 T 90,40 T 130,35 T 170,30 L 190,30 L 190,100 L 10,100 Z"
                    fill="url(#chartGradient)"
                    opacity="0.3"
                  />
                  <path
                    d="M 10,80 Q 30,60 50,50 T 90,40 T 130,35 T 170,30"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* Data points */}
                  <circle cx="50" cy="50" r="3" fill="white" />
                  <circle cx="90" cy="40" r="3" fill="white" />
                  <circle cx="130" cy="35" r="3" fill="white" />
                  <circle cx="170" cy="30" r="3" fill="white" />
                </svg>
              </div>
              
              {/* Bright highlights */}
              <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-blue-400/40 rounded-full blur-2xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <div className="bg-transparent space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Увійти
            </h2>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Електронна пошта<span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Електронна пошта"
                  className="w-full bg-white text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-base"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Пароль<span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Пароль"
                    className="w-full bg-white text-gray-900 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-base"
                    required
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* reCAPTCHA */}
              <div className="flex items-center space-x-3 py-2">
                <div className="flex items-center space-x-2 bg-white rounded px-3 py-2 border border-gray-300">
                  <input
                    type="checkbox"
                    id="recaptcha"
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    required
                  />
                  <label htmlFor="recaptcha" className="text-sm text-gray-700 cursor-pointer">
                    I'm not a robot
                  </label>
                </div>
                <div className="flex items-center space-x-1 text-xs text-white">
                  <span>reCAPTCHA</span>
                  <div className="flex space-x-2 text-xs">
                    <a href="#" className="hover:underline">Privacy</a>
                    <span>-</span>
                    <a href="#" className="hover:underline">Terms</a>
                  </div>
                </div>
              </div>

              {/* Forgot Password */}
              <div>
                <a href="#" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                  • Забули пароль?
                </a>
              </div>

              {error && (
                <div className="bg-red-950/40 border border-red-900/40 rounded-lg p-3">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:from-blue-500 hover:via-blue-400 hover:to-blue-300 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-4 rounded-lg text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Вхід...</span>
                  </>
                ) : (
                  <span>Увійти</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

