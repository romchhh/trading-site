'use client';

import React from 'react';
import Link from 'next/link';
import { TrendingUp, Globe, Target, Target as MissionIcon, Users, Zap, Shield, TrendingUp as GrowthIcon } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { translations, Language, Translations } from '../lib/translations';
import { useState } from 'react';

export default function AboutPage() {
  const [language, setLanguage] = useState<Language>('ua');
  const t: Translations = translations[language];

  const achievements = [
    { value: '8000+', label: 'задоволених користувачів у всьому світі', icon: TrendingUp },
    { value: '25', label: 'країн', icon: Globe },
    { value: '87%', label: 'точність наших сигналів', icon: Target },
  ];

  const team = [
    { name: 'Ігор', role: 'Засновник та CEO', avatar: '👨‍💼' },
    { name: 'Софія', role: 'Розробник', avatar: '👩‍💻' },
    { name: 'Денис', role: 'Менеджер підтримки', avatar: '👨‍💬' },
    { name: 'Дмитро', role: 'AI розробник', avatar: '🤖' },
    { name: 'Анна', role: 'Старший розробник', avatar: '👩‍💻' },
    { name: 'Олександр', role: 'Менеджер підтримки', avatar: '👨‍💼' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-black text-white font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <Navigation t={t} language={language} onLanguageChange={setLanguage} />
      
      {/* Hero Section with Background */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[70vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: 'url(/about-background.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <ScrollReveal>
            <div className="text-center">
              <div className="inline-block mb-6">
                <span className="text-sm md:text-base font-semibold text-blue-400 bg-blue-950/40 px-4 py-2 rounded-full border border-blue-800/30">
                  Про компанію
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
                Про нас
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Ми допомагаємо трейдерам досягати фінансової свободи через інноваційні технології та професійну підтримку
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <div className="bg-gradient-to-br from-blue-900/30 to-blue-950/30 backdrop-blur-xl border border-blue-700/30 rounded-2xl px-6 py-3">
                  <div className="text-2xl font-bold text-white">8000+</div>
                  <div className="text-sm text-slate-400">Користувачів</div>
                </div>
                <div className="bg-gradient-to-br from-blue-900/30 to-blue-950/30 backdrop-blur-xl border border-blue-700/30 rounded-2xl px-6 py-3">
                  <div className="text-2xl font-bold text-white">25</div>
                  <div className="text-sm text-slate-400">Країн</div>
                </div>
                <div className="bg-gradient-to-br from-blue-900/30 to-blue-950/30 backdrop-blur-xl border border-blue-700/30 rounded-2xl px-6 py-3">
                  <div className="text-2xl font-bold text-white">87%</div>
                  <div className="text-sm text-slate-400">Точність</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-slate-900/70 to-slate-950/70 backdrop-blur-xl border-2 border-blue-900/50 rounded-3xl p-10 md:p-14 shadow-2xl">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center mb-6">
                  <Target className="w-10 h-10 md:w-12 md:h-12 text-blue-400 mr-4 opacity-80" />
                  <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-100 font-bold leading-tight">
                    Ми допомагаємо трейдерам досягати фінансової свободи
                  </h2>
                  <Target className="w-10 h-10 md:w-12 md:h-12 text-blue-400 ml-4 opacity-80" />
                </div>
                <div className="w-40 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mx-auto rounded-full" />
              </div>
              
              <div className="space-y-8">
                <ScrollReveal delay={200}>
                  <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/40 rounded-3xl p-8 md:p-10 border-2 border-blue-900/30 hover:border-blue-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-[1.02] group">
                    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                      <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600/30 to-blue-800/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Users className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">Наша місія</h3>
                        <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                          Наша платформа створена для того, щоб зробити торгівлю доступною, зрозумілою та прибутковою для кожного. 
                          Ми об'єднуємо експертів у галузі фінансів, технологій та аналітики, щоб надати вам найкращі рішення для 
                          успішного трейдингу та досягнення фінансових цілей.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/40 rounded-3xl p-8 md:p-10 border-2 border-blue-900/30 hover:border-blue-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:scale-[1.02] group">
                    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                      <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-600/30 to-purple-800/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Zap className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">Інновації та якість</h3>
                        <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                          Ми пишаємося тим, що пропонуємо інноваційні рішення, які допомагають трейдерам приймати правильні рішення, 
                          зменшувати ризики та максимізувати прибуток. Кожен наш сигнал ретельно аналізується командою професіоналів, 
                          а кожен інструмент розроблений з урахуванням потреб як початківців, так і досвідчених трейдерів.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={600}>
                  <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/40 rounded-3xl p-8 md:p-10 border-2 border-blue-900/30 hover:border-blue-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:scale-[1.02] group">
                    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                      <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-600/30 to-indigo-800/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <GrowthIcon className="w-8 h-8 md:w-10 md:h-10 text-indigo-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">Ваш успіх — наш пріоритет</h3>
                        <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                          Ми віримо, що за допомогою правильних сигналів, даних та знань кожен може стати успішним трейдером. 
                          Наша місія - надати вам всі необхідні ресурси та підтримку для досягнення фінансової свободи та незалежності.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-black/20 to-transparent relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Наші досягнення у цифрах
              </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Ми віримо, що за допомогою правильних сигналів, даних та знань кожен може стати успішним трейдером
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, i) => {
              const IconComponent = achievement.icon;
              return (
                <ScrollReveal key={i} delay={200 + i * 100}>
                  <div
                    className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border-2 border-blue-900/40 rounded-3xl p-10 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-105 hover:border-blue-700/60 text-center group"
                  >
                  <div className="flex justify-center mb-6">
                    <IconComponent className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {achievement.value}
                  </div>
                  <div className="text-lg text-slate-300 font-medium">
                    {achievement.label}
                  </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Наша команда
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Команда, яка працює для вас
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={i} delay={200 + i * 100}>
                <div
                  className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border-2 border-blue-900/40 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-105 hover:border-blue-700/60 text-center group"
                >
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                    {member.avatar}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-lg text-slate-400">
                    {member.role}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-black/20 to-transparent relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Відгуки про нас
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Ми завжди прагнемо досягати найвищих стандартів якості та підтримувати наших клієнтів на кожному кроці
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Олександр', text: 'Чудова платформа! Сигнали дуже точні, прибуток зріс на 40% за місяць.', rating: 5 },
              { name: 'Марія', text: 'Найкраща підтримка та зрозумілий інтерфейс. Рекомендую всім!', rating: 5 },
              { name: 'Дмитро', text: 'Професійний підхід до трейдингу. Дякую команді за якісний сервіс.', rating: 5 },
              { name: 'Олена', text: 'Інструменти дуже зручні, аналітика детальна. Дуже задоволена результатами.', rating: 5 },
              { name: 'Андрій', text: 'Швидкі сигнали та точний аналіз. Це саме те, що потрібно для успішного трейдингу.', rating: 5 },
              { name: 'Юлія', text: 'Відмінний сервіс! Змогла швидко навчитися та почати заробляти.', rating: 5 },
            ].map((testimonial, i) => (
              <ScrollReveal key={i} delay={200 + i * 50}>
                <div
                  className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border-2 border-blue-900/40 rounded-3xl p-6 shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02] hover:border-blue-700/60"
                >
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500/30 to-blue-700/30 rounded-full flex items-center justify-center text-blue-400 font-bold">
                        {testimonial.name[0]}
                      </div>
                      <div>
                        <p className="text-white font-bold">{testimonial.name}</p>
                        <div className="flex text-yellow-400 text-sm">
                          {'★'.repeat(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-base">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal delay={300}>
            <div className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border-2 border-blue-900/40 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Маєте торгову ідею?
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Почніть реалізовувати її з нами вже сьогодні!
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-10 py-4 rounded-xl text-lg font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50 border border-blue-500/30 active:scale-95">
              Авторизація
            </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer t={t} />
    </div>
  );
}

