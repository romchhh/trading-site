'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Повернутися на головну
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          Умови використання
        </h1>
        
        <div className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border-2 border-blue-900/40 rounded-3xl p-8 md:p-10 space-y-6 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Загальні положення</h2>
            <p>
              Ці Умови використання регулюють використання платформи AI.BOOST та всіх пов'язаних з нею послуг. 
              Використовуючи наші послуги, ви погоджуєтеся з цими умовами. Якщо ви не згодні з будь-якою частиною 
              цих умов, ви не повинні використовувати наші послуги.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Прийняття умов</h2>
            <p>
              Реєструючись на платформі AI.BOOST, ви підтверджуєте, що:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
              <li>Ви досягли віку, необхідного для укладення юридично обов'язкових угод у вашій юрисдикції</li>
              <li>Вся надана вами інформація є точною та актуальною</li>
              <li>Ви маєте право використовувати платформу відповідно до законодавства вашої країни</li>
              <li>Ви розумієте ризики, пов'язані з трейдингом та фінансовими операціями</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Використання послуг</h2>
            <p>
              Платформа AI.BOOST надає інформацію та інструменти для трейдингу. Використовуючи наші послуги, ви зобов'язуєтеся:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
              <li>Використовувати платформу лише для законних цілей</li>
              <li>Не намагатися отримати несанкціонований доступ до системи</li>
              <li>Не передавати свої облікові дані третім особам</li>
              <li>Не використовувати автоматизовані системи для зловживання послугами</li>
              <li>Поважати права інтелектуальної власності та інших користувачів</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Фінансові операції</h2>
            <p>
              Всі фінансові операції на платформі здійснюються на ваш власний ризик. AI.BOOST не несе відповідальності 
              за фінансові втрати, що можуть виникнути в результаті використання наших послуг. Ми рекомендуємо:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
              <li>Інвестувати лише ті кошти, втрата яких не завдасть значної шкоди вашому фінансовому стану</li>
              <li>Регулярно перевіряти свої операції та баланс</li>
              <li>Звертатися до фінансових консультантів за потреби</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Конфіденційність</h2>
            <p>
              Ми зберігаємо та обробляємо вашу персональну інформацію відповідно до нашої Політики конфіденційності. 
              Використовуючи наші послуги, ви погоджуєтеся з обробкою ваших даних, як описано в цій політиці.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Обмеження відповідальності</h2>
            <p>
              AI.BOOST надає послуги "як є" без гарантій будь-якого роду. Ми не гарантуємо безперервну роботу платформи 
              або відсутність помилок. Ми не несемо відповідальності за будь-які прямі, непрямі, випадкові або наслідкові 
              збитки, що виникають у зв'язку з використанням наших послуг.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Зміни умов</h2>
            <p>
              Ми залишаємо за собою право змінювати ці Умови використання в будь-який час. Про значні зміни ми повідомимо 
              вас через платформу або електронну пошту. Продовжуючи використовувати послуги після змін, ви погоджуєтеся 
              з оновленими умовами.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Контакти</h2>
            <p>
              Якщо у вас є питання щодо цих Умов використання, будь ласка, зв'яжіться з нами через форму звернення 
              на платформі або через Telegram support.
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

