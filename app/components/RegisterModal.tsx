'use client';

import React, { useState } from 'react';
import { X, Copy, Check, Send, ExternalLink } from 'lucide-react';
import { Translations } from '../lib/translations';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translations;
}

const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN || '';
const TELEGRAM_USER_ID = process.env.NEXT_PUBLIC_TELEGRAM_USER_ID || '';
const REGISTER_URL = 'https://u3.shortink.io/register?utm_campaign=827452&utm_source=affiliate&utm_medium=sr&a=l2oL1jN9TpLZqE&ac=pocket_ua&code=WELCOME50';
const PROMO_CODE = 'PRT932';

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, t }) => {
  const [accountId, setAccountId] = useState('');
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleCopyPromoCode = () => {
    navigator.clipboard.writeText(PROMO_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendAccountId = async () => {
    if (!accountId.trim()) {
      setError(t.registerModal.accountIdRequired || 'Будь ласка, введіть ID акаунту');
      return;
    }

    setSending(true);
    setError('');

    try {
      const message = `Новий запит на перевірку балансу:\nID акаунту: ${accountId}`;
      const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_USER_ID,
          text: message,
          parse_mode: 'HTML'
        })
      });

      if (response.ok) {
        setSent(true);
        setAccountId('');
        setTimeout(() => {
          setSent(false);
          onClose();
        }, 2000);
      } else {
        throw new Error('Помилка відправки');
      }
    } catch (err) {
      setError(t.registerModal.sendError || 'Помилка відправки. Спробуйте пізніше.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-black border-2 border-blue-900/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-6 sm:right-6 text-slate-400 hover:text-white transition-colors p-2 hover:bg-blue-950/30 rounded-xl z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="space-y-4 sm:space-y-6">
          <div className="text-center pt-2 sm:pt-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {t.registerModal.title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg">
              {t.registerModal.subtitle}
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
              placeholder={t.registerModal.accountIdPlaceholder}
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
        </div>
      </div>
    </div>
  );
};

