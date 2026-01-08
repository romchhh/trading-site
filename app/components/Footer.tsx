'use client';

import React from 'react';
import { Translations } from '../lib/translations';
import Link from 'next/link';

interface FooterProps {
  t: Translations;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-gradient-to-t from-slate-950 via-slate-950 to-black border-t-2 border-blue-900/30 py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="text-center md:text-left">
            <Link href="/">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4 cursor-pointer hover:opacity-80 transition-opacity inline-block">AI.BOOST</h3>
            </Link>
            <p className="text-slate-400 text-base leading-relaxed max-w-md mx-auto md:mx-0">
              {t.footer.description}
            </p>
          </div>
          <div className="text-center md:text-right">
            <h4 className="text-lg font-bold text-white mb-4">{t.footer.quickLinks}</h4>
            <div className="space-y-3">
              <Link href="#" className="block text-slate-400 hover:text-blue-400 transition-colors text-base">{t.footer.telegram}</Link>
              <Link href="/terms" className="block text-slate-400 hover:text-blue-400 transition-colors text-base">{t.footer.terms}</Link>
              <Link href="/privacy" className="block text-slate-400 hover:text-blue-400 transition-colors text-base">{t.footer.privacy}</Link>
              <Link href="/cookies" className="block text-slate-400 hover:text-blue-400 transition-colors text-base">{t.footer.cookies}</Link>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-blue-900/30 text-center">
          <p className="text-base text-slate-400 font-medium">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
