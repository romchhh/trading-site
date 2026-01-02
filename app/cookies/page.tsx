'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Повернутися на головну
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          Політика файлів cookie
        </h1>
        
        <div className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border-2 border-blue-900/40 rounded-3xl p-8 md:p-10 space-y-6 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Що таке cookies?</h2>
            <p>
              Cookies - це невеликі текстові файли, які зберігаються на вашому пристрої (комп'ютері, планшеті або мобільному телефоні) 
              при відвідуванні веб-сайтів. Вони дозволяють сайту запам'ятовувати ваші дії та налаштування протягом певного періоду, 
              тому вам не потрібно вводити цю інформацію знову при поверненні на сайт або перегляді з однієї сторінки на іншу.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Як ми використовуємо cookies</h2>
            <p>AI.BOOST використовує cookies для наступних цілей:</p>
            <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
              <li><strong>Необхідні cookies:</strong> забезпечують базову функціональність сайту, наприклад, збереження сесії користувача</li>
              <li><strong>Функціональні cookies:</strong> запам'ятовують ваші налаштування (мова, тема) для покращення користувацького досвіду</li>
              <li><strong>Аналітичні cookies:</strong> допомагають нам зрозуміти, як відвідувачі використовують сайт, для його покращення</li>
              <li><strong>Маркетингові cookies:</strong> використовуються для відстеження відвідувачів на різних сайтах з метою показу релевантної реклами</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Типи cookies, які ми використовуємо</h2>
            
            <div className="mt-4 space-y-4">
              <div className="bg-slate-900/50 rounded-xl p-4">
                <h3 className="text-lg font-bold text-white mb-2">Строкові cookies (Session cookies)</h3>
                <p>
                  Ці cookies тимчасові та видаляються після закриття браузера. Вони необхідні для роботи основних функцій сайту.
                </p>
              </div>

              <div className="bg-slate-900/50 rounded-xl p-4">
                <h3 className="text-lg font-bold text-white mb-2">Постійні cookies (Persistent cookies)</h3>
                <p>
                  Ці cookies залишаються на вашому пристрої на визначений період або до їх ручного видалення. 
                  Вони дозволяють сайту запам'ятовувати ваші налаштування між відвідуваннями.
                </p>
              </div>

              <div className="bg-slate-900/50 rounded-xl p-4">
                <h3 className="text-lg font-bold text-white mb-2">Cookies третіх осіб</h3>
                <p>
                  Деякі cookies встановлюються сторонніми сервісами, які ми використовуємо (наприклад, аналітика, платіжні системи). 
                  Ці cookies регулюються політикою конфіденційності відповідних третіх осіб.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Управління cookies</h2>
            <p>
              Ви можете контролювати та/або видаляти cookies за бажанням. Ви можете видалити всі cookies, які вже знаходяться 
              на вашому комп'ютері, та налаштувати більшість браузерів так, щоб вони не встановлювалися. Однак у цьому випадку 
              вам, можливо, доведеться вручну налаштовувати деякі параметри щоразу під час відвідування сайту, а деякі послуги 
              та функції можуть не працювати.
            </p>
            <p className="mt-4">
              Налаштування cookies у популярних браузерах:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
              <li><strong>Google Chrome:</strong> Налаштування → Конфіденційність і безпека → Cookies та інші дані сайтів</li>
              <li><strong>Mozilla Firefox:</strong> Налаштування → Приватність і захист → Cookies та дані сайтів</li>
              <li><strong>Safari:</strong> Налаштування → Конфіденційність → Cookies та дані веб-сайтів</li>
              <li><strong>Microsoft Edge:</strong> Налаштування → Cookies та дозволи сайту</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Cookies, які ми використовуємо</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-blue-900/30">
                    <th className="text-left py-3 px-4 text-white font-bold">Назва</th>
                    <th className="text-left py-3 px-4 text-white font-bold">Призначення</th>
                    <th className="text-left py-3 px-4 text-white font-bold">Тривалість</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-blue-900/20">
                    <td className="py-3 px-4">session_id</td>
                    <td className="py-3 px-4">Збереження сесії користувача</td>
                    <td className="py-3 px-4">До закриття браузера</td>
                  </tr>
                  <tr className="border-b border-blue-900/20">
                    <td className="py-3 px-4">language</td>
                    <td className="py-3 px-4">Збереження вибраної мови</td>
                    <td className="py-3 px-4">1 рік</td>
                  </tr>
                  <tr className="border-b border-blue-900/20">
                    <td className="py-3 px-4">theme</td>
                    <td className="py-3 px-4">Збереження налаштувань теми</td>
                    <td className="py-3 px-4">1 рік</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Оновлення політики</h2>
            <p>
              Ми можемо періодично оновлювати цю Політику файлів cookie. Будь ласка, перевіряйте цю сторінку регулярно, 
              щоб бути в курсі будь-яких змін.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Контакти</h2>
            <p>
              Якщо у вас є питання щодо нашої Політики файлів cookie, будь ласка, зв'яжіться з нами через Telegram support 
              або форму звернення на платформі.
            </p>
          </section>

          <div className="pt-6 border-t border-blue-900/30 text-sm text-slate-400">
            <p>Останнє оновлення: {new Date().toLocaleDateString('uk-UA', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

