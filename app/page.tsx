import React, { useState } from 'react';
import { Globe, Menu, X, ChevronDown, TrendingUp, BarChart3, Zap } from 'lucide-react';

const translations = {
  ua: {
    nav: {
      home: 'Головна',
      about: 'Про нас',
      instructions: 'Інструкція',
      contest: 'Конкурс',
      register: 'Реєстрація'
    },
    hero: {
      title: 'Ваш ключ до фінансового успіху',
      subtitle: 'Відстежуйте ринки з нашими інноваційними інструментами і будьте завжди в курсі',
      stats: {
        users: 'Користувачів сервісу',
        successful: 'Успішних сигналів',
        failed: 'Невдалих сигналів',
        label: 'Статистика за останні 24 години'
      }
    },
    trading: {
      title: 'для тих, хто готовий діяти',
      subtitle: 'Приєднуйтесь до спільноти лідерів, що створюють своє майбутнє вже сьогодні',
      button: 'Авторизація'
    },
    pairs: {
      title: 'Пари та Інструменти для трейдингу',
      subtitle: 'Кожен сигнал ретельно аналізується, щоб забезпечити найкращі результати для вас',
      table: {
        pair: 'Валютна пара',
        expiration: 'Час експерації',
        duration: 'Тривалість',
        entry: 'Ціна входу'
      }
    },
    faq: {
      title: 'Поширені запитання',
      subtitle: 'Все, що вам потрібно знати для успішного старту',
      questions: [
        'Як розпочати торгівлю на вашій платформі?',
        'Чи потрібно мати досвід для торгівлі?',
        'Що таке торгові сигнали і як ними користуватись?',
        'Які методи поповнення рахунку доступні?',
        'Чи є підтримка 24/7?'
      ]
    },
    confident: {
      title: 'Впевнений трейдинг з нашими рішеннями',
      subtitle: 'Інтуїтивні інструменти та аналітика для ефективної торгівлі',
      features: [
        {
          title: 'Інтуїтивний Інтерфейс',
          desc: 'Зручний інтерфейс, який дозволяє легко орієнтуватися та швидко здійснювати операції з будь-якого пристрою'
        },
        {
          title: 'Точні Торгові Сигнали',
          desc: 'Отримуйте актуальні торгові сигнали, що допоможуть вам приймати обґрунтовані рішення в реальному часі'
        },
        {
          title: 'Швидкий Старт',
          desc: 'Миттєво почніть торгівлю — реєстрація займає кілька хвилин, і ви готові до ринку'
        }
      ]
    },
    tools: {
      title: 'які підвищать ваш успіх',
      subtitle: 'Всі необхідні ресурси для впевненого трейдингу',
      items: [
        {
          title: 'Аналітичні графіки',
          desc: 'Отримуйте глибоку аналітику ринків за допомогою точних і зручних графіків для ухвалення кращих рішень'
        },
        {
          title: 'Торгові сигнали',
          desc: 'Використовуйте надійні торгові сигнали для своєчасного входу та виходу з угод'
        },
        {
          title: 'Платформа для соціального трейдингу',
          desc: 'Використовуйте надійні торгові сигнали для своєчасного входу та виходу з угод'
        }
      ]
    },
    howItWorks: {
      title: 'Як це працює',
      subtitle: 'Простий шлях до старту в трейдингу',
      steps: [
        'Реєстрація',
        'Поповнення рахунку',
        'Вибір інструментів',
        'Торгівля'
      ],
      cta: 'Маєте торгову ідею? Почніть реалізовувати її з нами вже сьогодні!',
      button: 'Авторизація'
    },
    footer: {
      copyright: 'Авторське право © 2026 AI.BOOST | Усі права захищено',
      telegram: 'Telegram support',
      terms: 'Умови використання',
      privacy: 'Політика конфіденційності',
      cookies: 'Політика файлів cookie'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      instructions: 'Instructions',
      contest: 'Contest',
      register: 'Register'
    },
    hero: {
      title: 'Your Key to Financial Success',
      subtitle: 'Track markets with our innovative tools and stay always informed',
      stats: {
        users: 'Service Users',
        successful: 'Successful Signals',
        failed: 'Failed Signals',
        label: 'Statistics for the last 24 hours'
      }
    },
    trading: {
      title: 'for those ready to act',
      subtitle: 'Join the community of leaders creating their future today',
      button: 'Login'
    },
    pairs: {
      title: 'Trading Pairs and Instruments',
      subtitle: 'Each signal is carefully analyzed to ensure the best results for you',
      table: {
        pair: 'Currency Pair',
        expiration: 'Expiration Time',
        duration: 'Duration',
        entry: 'Entry Price'
      }
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know for a successful start',
      questions: [
        'How to start trading on your platform?',
        'Do I need trading experience?',
        'What are trading signals and how to use them?',
        'What deposit methods are available?',
        'Is there 24/7 support?'
      ]
    },
    confident: {
      title: 'Confident Trading with Our Solutions',
      subtitle: 'Intuitive tools and analytics for effective trading',
      features: [
        {
          title: 'Intuitive Interface',
          desc: 'User-friendly interface that allows easy navigation and quick operations from any device'
        },
        {
          title: 'Accurate Trading Signals',
          desc: 'Get relevant trading signals that help you make informed decisions in real-time'
        },
        {
          title: 'Quick Start',
          desc: 'Start trading instantly — registration takes just a few minutes and you\'re ready for the market'
        }
      ]
    },
    tools: {
      title: 'that boost your success',
      subtitle: 'All necessary resources for confident trading',
      items: [
        {
          title: 'Analytical Charts',
          desc: 'Get deep market analytics using accurate and user-friendly charts for making better decisions'
        },
        {
          title: 'Trading Signals',
          desc: 'Use reliable trading signals for timely entry and exit from trades'
        },
        {
          title: 'Social Trading Platform',
          desc: 'Use reliable trading signals for timely entry and exit from trades'
        }
      ]
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Simple path to start trading',
      steps: [
        'Registration',
        'Account Funding',
        'Choose Instruments',
        'Trading'
      ],
      cta: 'Have a trading idea? Start implementing it with us today!',
      button: 'Login'
    },
    footer: {
      copyright: 'Copyright © 2026 AI.BOOST | All rights reserved',
      telegram: 'Telegram support',
      terms: 'Terms of Use',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy'
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'О нас',
      instructions: 'Инструкция',
      contest: 'Конкурс',
      register: 'Регистрация'
    },
    hero: {
      title: 'Ваш ключ к финансовому успеху',
      subtitle: 'Отслеживайте рынки с нашими инновационными инструментами и будьте всегда в курсе',
      stats: {
        users: 'Пользователей сервиса',
        successful: 'Успешных сигналов',
        failed: 'Неудачных сигналов',
        label: 'Статистика за последние 24 часа'
      }
    },
    trading: {
      title: 'для тех, кто готов действовать',
      subtitle: 'Присоединяйтесь к сообществу лидеров, создающих свое будущее уже сегодня',
      button: 'Авторизация'
    },
    pairs: {
      title: 'Пары и Инструменты для трейдинга',
      subtitle: 'Каждый сигнал тщательно анализируется, чтобы обеспечить лучшие результаты для вас',
      table: {
        pair: 'Валютная пара',
        expiration: 'Время экспирации',
        duration: 'Длительность',
        entry: 'Цена входа'
      }
    },
    faq: {
      title: 'Частые вопросы',
      subtitle: 'Все, что вам нужно знать для успешного старта',
      questions: [
        'Как начать торговлю на вашей платформе?',
        'Нужен ли опыт для торговли?',
        'Что такое торговые сигналы и как ими пользоваться?',
        'Какие методы пополнения счета доступны?',
        'Есть ли поддержка 24/7?'
      ]
    },
    confident: {
      title: 'Уверенный трейдинг с нашими решениями',
      subtitle: 'Интуитивные инструменты и аналитика для эффективной торговли',
      features: [
        {
          title: 'Интуитивный Интерфейс',
          desc: 'Удобный интерфейс, который позволяет легко ориентироваться и быстро совершать операции с любого устройства'
        },
        {
          title: 'Точные Торговые Сигналы',
          desc: 'Получайте актуальные торговые сигналы, которые помогут вам принимать обоснованные решения в реальном времени'
        },
        {
          title: 'Быстрый Старт',
          desc: 'Мгновенно начните торговлю — регистрация занимает несколько минут, и вы готовы к рынку'
        }
      ]
    },
    tools: {
      title: 'которые повысят ваш успех',
      subtitle: 'Все необходимые ресурсы для уверенного трейдинга',
      items: [
        {
          title: 'Аналитические графики',
          desc: 'Получайте глубокую аналитику рынков с помощью точных и удобных графиков для принятия лучших решений'
        },
        {
          title: 'Торговые сигналы',
          desc: 'Используйте надежные торговые сигналы для своевременного входа и выхода из сделок'
        },
        {
          title: 'Платформа для социального трейдинга',
          desc: 'Используйте надежные торговые сигналы для своевременного входа и выхода из сделок'
        }
      ]
    },
    howItWorks: {
      title: 'Как это работает',
      subtitle: 'Простой путь к старту в трейдинге',
      steps: [
        'Регистрация',
        'Пополнение счета',
        'Выбор инструментов',
        'Торговля'
      ],
      cta: 'Есть торговая идея? Начните реализовывать ее с нами уже сегодня!',
      button: 'Авторизация'
    },
    footer: {
      copyright: 'Авторское право © 2026 AI.BOOST | Все права защищены',
      telegram: 'Telegram support',
      terms: 'Условия использования',
      privacy: 'Политика конфиденциальности',
      cookies: 'Политика файлов cookie'
    }
  }
};

export default function AIBoostLanding() {
  const [language, setLanguage] = useState('ua');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🎅</span>
              </div>
              <span className="text-xl font-bold">AI.BOOST</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm hover:text-blue-400 transition">{t.nav.home}</a>
              <a href="#" className="text-sm hover:text-blue-400 transition">{t.nav.about}</a>
              <a href="#" className="text-sm hover:text-blue-400 transition">{t.nav.instructions}</a>
              <a href="#" className="text-sm hover:text-blue-400 transition">{t.nav.contest}</a>
              
              <div className="relative">
                <button className="flex items-center space-x-1 text-sm hover:text-blue-400 transition">
                  <Globe className="w-4 h-4" />
                  <span>{language.toUpperCase()}</span>
                </button>
                <div className="absolute top-full mt-2 bg-slate-800 rounded-lg shadow-xl py-2 min-w-[100px]">
                  <button onClick={() => setLanguage('ua')} className="block w-full px-4 py-2 text-sm hover:bg-slate-700 text-left">UA</button>
                  <button onClick={() => setLanguage('en')} className="block w-full px-4 py-2 text-sm hover:bg-slate-700 text-left">EN</button>
                  <button onClick={() => setLanguage('ru')} className="block w-full px-4 py-2 text-sm hover:bg-slate-700 text-left">RU</button>
                </div>
              </div>
              
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-sm font-semibold transition">
                {t.nav.register}
              </button>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              {t.hero.subtitle}
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-right text-sm text-slate-400 mb-4">{t.hero.stats.label}</p>
            <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6">
              <div className="text-4xl font-bold text-blue-400 mb-2">7237 <span className="text-sm text-slate-400">(+3)</span></div>
              <div className="text-sm text-slate-300">{t.hero.stats.users}</div>
            </div>
            <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6">
              <div className="text-4xl font-bold text-blue-400 mb-2">11180</div>
              <div className="text-sm text-slate-300">{t.hero.stats.successful}</div>
            </div>
            <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-6">
              <div className="text-4xl font-bold text-blue-400 mb-2">5543</div>
              <div className="text-sm text-slate-300">{t.hero.stats.failed}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-blue-500">Трейдинг</span> {t.trading.title}
          </h2>
          <p className="text-lg text-slate-300 mb-8">{t.trading.subtitle}</p>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition">
            {t.trading.button}
          </button>
        </div>
        
        {/* Trading Chart Placeholder */}
        <div className="max-w-6xl mx-auto mt-12 bg-slate-900/50 backdrop-blur-sm border border-blue-900/30 rounded-2xl p-6">
          <div className="h-96 bg-slate-950/50 rounded-xl flex items-center justify-center">
            <p className="text-slate-500">Trading Chart Visualization</p>
          </div>
        </div>
      </section>

      {/* Pairs Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">{t.pairs.title}</h2>
          <p className="text-center text-slate-300 mb-12">{t.pairs.subtitle}</p>
          
          <div className="bg-slate-900/50 backdrop-blur-sm border border-blue-900/30 rounded-2xl p-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-blue-900/30">
                  <th className="text-left py-4 px-4 text-slate-400 font-semibold">{t.pairs.table.pair}</th>
                  <th className="text-left py-4 px-4 text-slate-400 font-semibold">{t.pairs.table.expiration}</th>
                  <th className="text-left py-4 px-4 text-slate-400 font-semibold">{t.pairs.table.duration}</th>
                  <th className="text-left py-4 px-4 text-slate-400 font-semibold">{t.pairs.table.entry}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pair: 'EUR/USD', time: '17:33', duration: '1-5 хвилин', price: '1.04091', color: 'red' },
                  { pair: 'GBP/JPY', time: '12:16', duration: '2 хвилини', price: '163.509', color: 'green' },
                  { pair: 'USD/CHF', time: '09:05', duration: '2 хвилини', price: '1.49508', color: 'blue' },
                ].map((item, i) => (
                  <tr key={i} className="border-b border-blue-900/10">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${item.color === 'red' ? 'bg-red-500' : item.color === 'green' ? 'bg-green-500' : 'bg-blue-500'}`} />
                        <span>{item.pair}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-300">{item.time}</td>
                    <td className="py-4 px-4 text-slate-300">{item.duration}</td>
                    <td className="py-4 px-4 text-slate-300">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">{t.faq.title}</h2>
          <p className="text-center text-slate-300 mb-12">{t.faq.subtitle}</p>
          
          <div className="space-y-4">
            {t.faq.questions.map((question, i) => (
              <div key={i} className="bg-slate-900/50 backdrop-blur-sm border border-blue-900/30 rounded-xl p-6">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="font-semibold">{question}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confident Trading Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">{t.confident.title}</h2>
          <p className="text-center text-slate-300 mb-12">{t.confident.subtitle}</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {t.confident.features.map((feature, i) => (
              <div key={i} className="bg-slate-900/50 backdrop-blur-sm border border-blue-900/30 rounded-2xl p-8">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  {i === 0 ? <BarChart3 className="w-6 h-6 text-blue-400" /> : 
                   i === 1 ? <TrendingUp className="w-6 h-6 text-blue-400" /> : 
                   <Zap className="w-6 h-6 text-blue-400" />}
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="text-blue-500">Інструменти</span>, {t.tools.title}
          </h2>
          <p className="text-center text-slate-300 mb-12">{t.tools.subtitle}</p>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-blue-900/30 rounded-2xl p-6">
              <div className="h-64 bg-slate-950/50 rounded-xl flex items-center justify-center">
                <p className="text-slate-500">Chart Visualization</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {t.tools.items.map((item, i) => (
                <div key={i}>
                  <h3 className="text-xl font-bold text-blue-400 mb-2">{item.title}</h3>
                  <p className="text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Як це <span className="text-blue-500">працює</span>
          </h2>
          <p className="text-center text-slate-300 mb-12">{t.howItWorks.subtitle}</p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {t.howItWorks.steps.map((step, i) => (
              <div key={i} className={`${i === 0 ? 'border-2 border-blue-600' : 'border border-blue-900/30'} bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 text-center`}>
                <div className="text-2xl font-bold mb-2">0{i + 1}.</div>
                <div className="text-lg font-semibold">{step}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-lg mb-6">{t.howItWorks.cta}</p>
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition">
              {t.howItWorks.button}
            </button>
          </div>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-30">
          <svg viewBox="0 0 1200 120" className="w-full h-full">
            <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" fill="#3b82f6" opacity="0.3" />
            <path d="M0,80 Q300,40 600,80 T1200,80 L1200,120 L0,120 Z" fill="#8b5cf6" opacity="0.3" />
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-blue-900/20 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-slate-400 mb-4">{t.footer.copyright}</p>
          <div className="flex justify-center space-x-6 text-sm text-slate-400">
            <a href="#" className="hover:text-blue-400 transition">{t.footer.telegram}</a>
            <a href="#" className="hover:text-blue-400 transition">{t.footer.terms}</a>
            <a href="#" className="hover:text-blue-400 transition">{t.footer.privacy}</a>
            <a href="#" className="hover:text-blue-400 transition">{t.footer.cookies}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}