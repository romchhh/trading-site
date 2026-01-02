'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Повернутися на головну
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          Політика конфіденційності
        </h1>
        
        <div className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border-2 border-blue-900/40 rounded-3xl p-8 md:p-10 space-y-6 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Вступ</h2>
            <p>
              AI.BOOST зобов'язується захищати вашу конфіденційність. Ця Політика конфіденційності описує, як ми збираємо, 
              використовуємо, зберігаємо та захищаємо вашу персональну інформацію при використанні нашої платформи.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Збір інформації</h2>
            <p>Ми збираємо наступні типи інформації:</p>
            <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
              <li><strong>Персональні дані:</strong> ім'я, електронна пошта, номер телефону, які ви надаєте при реєстрації</li>
              <li><strong>Фінансова інформація:</strong> дані про ваші транзакції, баланс рахунку та історію операцій</li>
              <li><strong>Технічні дані:</strong> IP-адреса, тип браузера, пристрою та операційної системи</li>
              <li><strong>Дані використання:</strong> інформація про те, як ви використовуєте платформу</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Використання інформації</h2>
            <p>Ми використовуємо зібрану інформацію для:</p>
            <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
              <li>Надання та покращення наших послуг</li>
              <li>Обробки транзакцій та управління вашим обліковим записом</li>
              <li>Зв'язку з вами щодо послуг, оновлень та важливих повідомлень</li>
              <li>Забезпечення безпеки та запобігання шахрайству</li>
              <li>Дотримання юридичних вимог та нормативних актів</li>
              <li>Проведення аналітики для покращення користувацького досвіду</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Захист даних</h2>
            <p>
              Ми впроваджуємо різні технічні та організаційні заходи для захисту вашої персональної інформації, включаючи:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
              <li>Шифрування даних при передачі та зберіганні</li>
              <li>Регулярні перевірки безпеки системи</li>
              <li>Обмежений доступ до персональних даних лише для авторизованого персоналу</li>
              <li>Резервне копіювання даних для запобігання втраті інформації</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Передача даних третім особам</h2>
            <p>
              Ми не продаємо та не передаємо вашу персональну інформацію третім особам, за винятком випадків, коли це необхідно для:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
              <li>Надання послуг (наприклад, платіжні системи)</li>
              <li>Дотримання юридичних вимог</li>
              <li>Захисту наших прав та безпеки</li>
            </ul>
            <p className="mt-2">
              У всіх випадках ми забезпечуємо, щоб треті особи дотримувалися аналогічних стандартів захисту даних.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Ваші права</h2>
            <p>Ви маєте право:</p>
            <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
              <li>Отримувати доступ до своїх персональних даних</li>
              <li>Виправляти неточні або неповні дані</li>
              <li>Вимагати видалення ваших даних (за наявності законних підстав)</li>
              <li>Обмежувати обробку ваших даних</li>
              <li>Отримувати копію ваших даних у структурованому форматі</li>
              <li>Відкликати згоду на обробку даних</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Cookies та відстеження</h2>
            <p>
              Ми використовуємо cookies та подібні технології для покращення функціональності платформи. 
              Детальну інформацію дивіться в нашій <Link href="/cookies" className="text-blue-400 hover:text-blue-300">Політиці файлів cookie</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Зміни політики</h2>
            <p>
              Ми можемо оновлювати цю Політику конфіденційності час від часу. Про значні зміни ми повідомимо вас 
              через платформу або електронну пошту.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Контакти</h2>
            <p>
              Якщо у вас є питання щодо цієї Політики конфіденційності або обробки ваших даних, будь ласка, 
              зв'яжіться з нами через Telegram support або форму звернення на платформі.
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

