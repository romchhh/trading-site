export type Language = 'ua' | 'en' | 'ru' | 'sk' | 'pl' | 'hi' | 'tr';

type TranslationStructure = {
  nav: {
    home: string;
    about: string;
    instructions: string;
    contest: string;
    register: string;
  };
  hero: {
    title: string;
    subtitle: string;
    stats: {
      users: string;
      successful: string;
      failed: string;
      label: string;
    };
  };
  trading: {
    mainTitle: string;
    title: string;
    subtitle: string;
    button: string;
  };
  pairs: {
    title: string;
    subtitle: string;
    table: {
      pair: string;
      expiration: string;
      duration: string;
      entry: string;
    };
    durations: {
      minutes1to5: string;
      minutes2: string;
    };
  };
  faq: {
    title: string;
    subtitle: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  confident: {
    title: string;
    subtitle: string;
    features: Array<{
      title: string;
      desc: string;
    }>;
  };
  tools: {
    mainTitle: string;
    title: string;
    subtitle: string;
    chartAlt: string;
    items: Array<{
      title: string;
      desc: string;
    }>;
  };
  howItWorks: {
    title: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    steps: string[];
    cta: string;
    button: string;
  };
  registerModal: {
    title: string;
    subtitle: string;
    registerLink: string;
    registerLinkLabel: string;
    registerButton: string;
    promoCode: string;
    promoCodeLabel: string;
    minDeposit: string;
    bonus: string;
    bonusDescription: string;
    bonusDescriptionFull: string;
    checkBalance: string;
    accountIdPlaceholder: string;
    accountIdRequired: string;
    sendButton: string;
    sending: string;
    sent: string;
    successMessage: string;
    sendError: string;
    postRegisterTitle: string;
    postRegisterSubtitle: string;
    depositDescription: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    developedBy: string;
    copyright: string;
    telegram: string;
    terms: string;
    privacy: string;
    cookies: string;
  };
  about: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      stats: {
        users: string;
        countries: string;
        accuracy: string;
      };
    };
    whoWeAre: {
      title: string;
      mission: {
        title: string;
        text: string;
      };
      innovation: {
        title: string;
        text: string;
      };
      success: {
        title: string;
        text: string;
      };
    };
    achievements: {
      title: string;
      subtitle: string;
      items: Array<{
        value: string;
        label: string;
      }>;
    };
    team: {
      title: string;
      subtitle: string;
      members: Array<{
        name: string;
        role: string;
        avatar: string;
      }>;
    };
    testimonials: {
      title: string;
      subtitle: string;
      items: Array<{
        name: string;
        text: string;
        rating: number;
      }>;
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  instructions: {
    hero: {
      title: string;
      subtitle: string;
    };
    video: {
      title: string;
      placeholder: string;
    };
    buttons: {
      home: string;
      register: string;
    };
  };
  login: {
    title: string;
    subtitle: string;
    email: string;
    password: string;
    forgotPassword: string;
    loginButton: string;
    loggingIn: string;
    error: string;
  };
  aiSignals: {
    title: string;
    subtitle: string;
    backToHome: string;
    pairType: string;
    otcPairs: string;
    regularPairs: string;
    selectPair: string;
    timeframe: string;
    timeframes: {
      sec10: string;
      sec15: string;
      sec30: string;
      min1: string;
      min5: string;
    };
    generate: string;
    generating: string;
    signalGenerated: string;
    readyToUse: string;
    symbol: string;
    direction: string;
    timeTo: string;
    buy: string;
    sell: string;
    getNewSignal: string;
    readyToGenerate: string;
    selectPairAndGenerate: string;
    selectPairHint: string;
    selectTimeframeHint: string;
    analyzing: string;
  };
};

export const translations: Record<Language, TranslationStructure> = {
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
      mainTitle: 'Трейдинг',
      title: 'для тих, хто готовий діяти',
      subtitle: 'Приєднуйтесь до спільноти лідерів, що створюють своє майбутнє вже сьогодні',
      button: 'Авторизація'
    },
    registerModal: {
      title: 'Реєстрація',
      subtitle: 'Зареєструйтеся та отримайте бонус до балансу',
      registerLink: 'Посилання на реєстрацію',
      registerLinkLabel: 'Посилання для реєстрації на платформі PocketOption',
      registerButton: 'Зареєструватися',
      promoCode: 'Промокод',
      promoCodeLabel: 'Використовуй промокод на PocketOption при поповненні від 50$ та отримай +60% бонусу до балансу',
      minDeposit: 'Мінімальна сума поповнення',
      bonus: 'Бонус',
      bonusDescription: 'до балансу',
      bonusDescriptionFull: 'до балансу при використанні промокоду',
      checkBalance: 'Перевірка балансу',
      accountIdPlaceholder: 'Введіть ID акаунту',
      accountIdRequired: 'Будь ласка, введіть ID акаунту',
      sendButton: 'Відправити',
      sending: 'Відправка...',
      sent: 'Відправлено',
      successMessage: 'Ваш запит відправлено! Ми зв\'яжемося з вами найближчим часом.',
      sendError: 'Помилка відправки. Спробуйте пізніше.',
      postRegisterTitle: 'Реєстрація успішна!',
      postRegisterSubtitle: 'Щоб отримувати торгові сигнали, завершіть реєстрацію акаунту на платформі Pocket Option',
      depositDescription: 'Поповнюй баланс на будь-яку суму на платформі Pocket Option та отримай доступ до торгових сигналів на валютному ринку.'
    },
    pairs: {
      title: 'Пари та Інструменти для трейдингу',
      subtitle: 'Кожен сигнал ретельно аналізується, щоб забезпечити найкращі результати для вас',
      table: {
        pair: 'Валютна пара',
        expiration: 'Час експерації',
        duration: 'Тривалість',
        entry: 'Ціна входу'
      },
      durations: {
        minutes1to5: '1-5 хвилин',
        minutes2: '2 хвилини'
      }
    },
    faq: {
      title: 'Поширені запитання',
      subtitle: 'Все, що вам потрібно знати для успішного старту',
      questions: [
        {
          question: 'Як розпочати торгівлю на вашій платформі?',
          answer: 'Для початку торгівлі вам потрібно зареєструватися на нашій платформі, верифікувати обліковий запис, поповнити рахунок одним з доступних методів оплати та вибрати торгові інструменти. Весь процес займає лише кілька хвилин, після чого ви готові до торгівлі.'
        },
        {
          question: 'Чи потрібно мати досвід для торгівлі?',
          answer: 'Ні, досвід не є обов\'язковим. Наша платформа розроблена для трейдерів різного рівня - від новачків до професіоналів. Ми надаємо детальні інструкції, навчальні матеріали та торгові сигнали, які допоможуть вам приймати обґрунтовані рішення навіть без попереднього досвіду.'
        },
        {
          question: 'Що таке торгові сигнали і як ними користуватись?',
          answer: 'Торгові сигнали - це рекомендації для входу або виходу з угоди, створені на основі технічного та фундаментального аналізу. Ви отримуєте сигнали в реальному часі через нашу платформу і можете використовувати їх для прийняття торгових рішень. Кожен сигнал містить детальну інформацію про інструмент, напрямок угоди та рекомендовані параметри.'
        },
        {
          question: 'Які методи поповнення рахунку доступні?',
          answer: 'Ми підтримуємо різноманітні методи поповнення рахунку, включаючи банківські картки (Visa, Mastercard), банківські перекази, електронні гаманці та криптовалюту. Всі транзакції захищені та обробляються швидко. Мінімальна сума поповнення залежить від обраного методу оплати.'
        },
        {
          question: 'Чи є підтримка 24/7?',
          answer: 'Так, наша служба підтримки працює цілодобово 7 днів на тиждень. Ви можете зв\'язатися з нами через Telegram, електронну пошту або форму звернення на сайті. Наша команда завжди готова допомогти вам з будь-якими питаннями, що стосуються торгівлі та використання платформи.'
        }
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
      mainTitle: 'Інструменти',
      title: 'які підвищать ваш успіх',
      subtitle: 'Всі необхідні ресурси для впевненого трейдингу',
      chartAlt: 'Фінансовий графік',
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
      titlePart1: 'Як це',
      titlePart2: 'працює',
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
      description: 'Ваш надійний партнер у світі фінансових інвестицій. Ми надаємо найкращі інструменти та сигнали для успішного трейдингу.',
      quickLinks: 'Швидкі посилання',
      developedBy: 'Сайт розроблено',
      copyright: 'Авторське право © 2026 AI.BOOST | Усі права захищено',
      telegram: 'Telegram support',
      terms: 'Умови використання',
      privacy: 'Політика конфіденційності',
      cookies: 'Політика файлів cookie'
    },
    about: {
      hero: {
        badge: 'Про компанію',
        title: 'Про нас',
        subtitle: 'Ми допомагаємо трейдерам досягати фінансової свободи через інноваційні технології та професійну підтримку',
        stats: {
          users: 'Користувачів',
          countries: 'Країн',
          accuracy: 'Точність'
        }
      },
      whoWeAre: {
        title: 'Ми допомагаємо трейдерам досягати фінансової свободи',
        mission: {
          title: 'Наша місія',
          text: 'Наша платформа створена для того, щоб зробити торгівлю доступною, зрозумілою та прибутковою для кожного. Ми об\'єднуємо експертів у галузі фінансів, технологій та аналітики, щоб надати вам найкращі рішення для успішного трейдингу та досягнення фінансових цілей.'
        },
        innovation: {
          title: 'Інновації та якість',
          text: 'Ми пишаємося тим, що пропонуємо інноваційні рішення, які допомагають трейдерам приймати правильні рішення, зменшувати ризики та максимізувати прибуток. Кожен наш сигнал ретельно аналізується командою професіоналів, а кожен інструмент розроблений з урахуванням потреб як початківців, так і досвідчених трейдерів.'
        },
        success: {
          title: 'Ваш успіх — наш пріоритет',
          text: 'Ми віримо, що за допомогою правильних сигналів, даних та знань кожен може стати успішним трейдером. Наша місія - надати вам всі необхідні ресурси та підтримку для досягнення фінансової свободи та незалежності.'
        }
      },
      achievements: {
        title: 'Наші досягнення у цифрах',
        subtitle: 'Ми віримо, що за допомогою правильних сигналів, даних та знань кожен може стати успішним трейдером',
        items: [
          { value: '8000+', label: 'задоволених користувачів у всьому світі' },
          { value: '25', label: 'країн' },
          { value: '87%', label: 'точність наших сигналів' }
        ]
      },
      team: {
        title: 'Наша команда',
        subtitle: 'Команда, яка працює для вас',
        members: [
          { name: 'Ігор', role: 'Засновник та CEO', avatar: '👨‍💼' },
          { name: 'Софія', role: 'Розробник', avatar: '👩‍💻' },
          { name: 'Денис', role: 'Менеджер підтримки', avatar: '👨‍💬' },
          { name: 'Дмитро', role: 'AI розробник', avatar: '🤖' },
          { name: 'Анна', role: 'Старший розробник', avatar: '👩‍💻' },
          { name: 'Олександр', role: 'Менеджер підтримки', avatar: '👨‍💼' }
        ]
      },
      testimonials: {
        title: 'Відгуки про нас',
        subtitle: 'Ми завжди прагнемо досягати найвищих стандартів якості та підтримувати наших клієнтів на кожному кроці',
        items: [
          { name: 'Олександр', text: 'Чудова платформа! Сигнали дуже точні, прибуток зріс на 40% за місяць.', rating: 5 },
          { name: 'Марія', text: 'Найкраща підтримка та зрозумілий інтерфейс. Рекомендую всім!', rating: 5 },
          { name: 'Дмитро', text: 'Професійний підхід до трейдингу. Дякую команді за якісний сервіс.', rating: 5 },
          { name: 'Олена', text: 'Інструменти дуже зручні, аналітика детальна. Дуже задоволена результатами.', rating: 5 },
          { name: 'Андрій', text: 'Швидкі сигнали та точний аналіз. Це саме те, що потрібно для успішного трейдингу.', rating: 5 },
          { name: 'Юлія', text: 'Відмінний сервіс! Змогла швидко навчитися та почати заробляти.', rating: 5 }
        ]
      },
      cta: {
        title: 'Маєте торгову ідею?',
        subtitle: 'Почніть реалізовувати її з нами вже сьогодні!',
        button: 'Авторизація'
      }
    },
    instructions: {
      hero: {
        title: 'Інструкція',
        subtitle: 'Навчальні матеріали для успішного старту'
      },
      video: {
        title: 'Відео інструкція',
        placeholder: 'Тут буде розміщено навчальне відео'
      },
      buttons: {
        home: 'На головну',
        register: 'Реєстрація'
      }
    },
    login: {
      title: 'Увійти',
      subtitle: 'Введіть дані для доступу до AI сигналів',
      email: 'Електронна пошта',
      password: 'Пароль',
      forgotPassword: 'Забули пароль?',
      loginButton: 'Увійти',
      loggingIn: 'Вхід...',
      error: 'Невірний логін або пароль'
    },
    aiSignals: {
      title: 'AI Сигнали',
      subtitle: 'Оберіть пару та часовий фрейм для генерації точного торгового сигналу',
      backToHome: 'На головну',
      pairType: 'Тип пари',
      otcPairs: 'OTC пари',
      regularPairs: 'Звичайні пари',
      selectPair: 'Вибір пари',
      timeframe: 'Часовий фрейм',
      timeframes: {
        sec10: '10 сек',
        sec15: '15 сек',
        sec30: '30 сек',
        min1: '1 мин',
        min5: '5 мин'
      },
      generate: 'Генерувати',
      generating: 'Генерація...',
      signalGenerated: 'Сигнал згенеровано',
      readyToUse: 'Готовий до використання',
      symbol: 'Символ',
      direction: 'Напрямок',
      timeTo: 'Час до',
      buy: 'Купівля',
      sell: 'Продаж',
      getNewSignal: 'Отримати новий сигнал',
      readyToGenerate: 'Готові до генерації',
      selectPairAndGenerate: 'Оберіть пару зліва та натисніть "Генерувати"',
      selectPairHint: 'Оберіть валютну пару',
      selectTimeframeHint: 'Оберіть часовий фрейм',
      analyzing: 'Аналіз ринкових даних'
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
      mainTitle: 'Trading',
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
      },
      durations: {
        minutes1to5: '1-5 minutes',
        minutes2: '2 minutes'
      }
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know for a successful start',
      questions: [
        {
          question: 'How to start trading on your platform?',
          answer: 'To start trading, you need to register on our platform, verify your account, fund your account using one of the available payment methods, and select trading instruments. The entire process takes only a few minutes, after which you\'re ready to trade.'
        },
        {
          question: 'Do I need trading experience?',
          answer: 'No, experience is not required. Our platform is designed for traders of all levels - from beginners to professionals. We provide detailed instructions, educational materials, and trading signals that will help you make informed decisions even without prior experience.'
        },
        {
          question: 'What are trading signals and how to use them?',
          answer: 'Trading signals are recommendations for entering or exiting a trade, created based on technical and fundamental analysis. You receive signals in real-time through our platform and can use them to make trading decisions. Each signal contains detailed information about the instrument, trade direction, and recommended parameters.'
        },
        {
          question: 'What deposit methods are available?',
          answer: 'We support various deposit methods, including bank cards (Visa, Mastercard), bank transfers, e-wallets, and cryptocurrency. All transactions are secure and processed quickly. The minimum deposit amount depends on the selected payment method.'
        },
        {
          question: 'Is there 24/7 support?',
          answer: 'Yes, our support service works 24/7, 7 days a week. You can contact us via Telegram, email, or the contact form on the website. Our team is always ready to help you with any questions regarding trading and platform usage.'
        }
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
      mainTitle: 'Tools',
      title: 'that boost your success',
      subtitle: 'All necessary resources for confident trading',
      chartAlt: 'Financial Chart',
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
      titlePart1: 'How It',
      titlePart2: 'Works',
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
    registerModal: {
      title: 'Registration',
      subtitle: 'Register and get a bonus to your balance',
      registerLink: 'Registration link',
      registerLinkLabel: 'Registration link on PocketOption platform',
      registerButton: 'Register',
      promoCode: 'Promo code',
      promoCodeLabel: 'Use promo code on PocketOption when depositing from $50 and get +60% bonus to your balance',
      minDeposit: 'Minimum deposit',
      bonus: 'Bonus',
      bonusDescription: 'to balance',
      bonusDescriptionFull: 'to balance when using promo code',
      checkBalance: 'Balance check',
      accountIdPlaceholder: 'Enter account ID',
      accountIdRequired: 'Please enter account ID',
      sendButton: 'Send',
      sending: 'Sending...',
      sent: 'Sent',
      successMessage: 'Your request has been sent! We will contact you soon.',
      sendError: 'Send error. Please try again later.',
      postRegisterTitle: 'Registration successful!',
      postRegisterSubtitle: 'To receive trading signals, complete your account registration on Pocket Option platform',
      depositDescription: 'Top up your balance with any amount on the Pocket Option platform and get access to trading signals on the currency market.'
    },
    footer: {
      description: 'Your reliable partner in the world of financial investments. We provide the best tools and signals for successful trading.',
      quickLinks: 'Quick Links',
      developedBy: 'Website developed by',
      copyright: 'Copyright © 2026 AI.BOOST | All rights reserved',
      telegram: 'Telegram support',
      terms: 'Terms of Use',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy'
    },
    about: {
      hero: {
        badge: 'About Company',
        title: 'About Us',
        subtitle: 'We help traders achieve financial freedom through innovative technologies and professional support',
        stats: {
          users: 'Users',
          countries: 'Countries',
          accuracy: 'Accuracy'
        }
      },
      whoWeAre: {
        title: 'We help traders achieve financial freedom',
        mission: {
          title: 'Our Mission',
          text: 'Our platform is designed to make trading accessible, understandable, and profitable for everyone. We bring together experts in finance, technology, and analytics to provide you with the best solutions for successful trading and achieving financial goals.'
        },
        innovation: {
          title: 'Innovation and Quality',
          text: 'We are proud to offer innovative solutions that help traders make the right decisions, reduce risks, and maximize profits. Each of our signals is carefully analyzed by a team of professionals, and every tool is developed with the needs of both beginners and experienced traders in mind.'
        },
        success: {
          title: 'Your Success is Our Priority',
          text: 'We believe that with the right signals, data, and knowledge, everyone can become a successful trader. Our mission is to provide you with all the necessary resources and support to achieve financial freedom and independence.'
        }
      },
      achievements: {
        title: 'Our Achievements in Numbers',
        subtitle: 'We believe that with the right signals, data, and knowledge, everyone can become a successful trader',
        items: [
          { value: '8000+', label: 'satisfied users worldwide' },
          { value: '25', label: 'countries' },
          { value: '87%', label: 'accuracy of our signals' }
        ]
      },
      team: {
        title: 'Our Team',
        subtitle: 'The team that works for you',
        members: [
          { name: 'Ihor', role: 'Founder & CEO', avatar: '👨‍💼' },
          { name: 'Sofia', role: 'Developer', avatar: '👩‍💻' },
          { name: 'Denys', role: 'Support Manager', avatar: '👨‍💬' },
          { name: 'Dmytro', role: 'AI Developer', avatar: '🤖' },
          { name: 'Anna', role: 'Senior Developer', avatar: '👩‍💻' },
          { name: 'Oleksandr', role: 'Support Manager', avatar: '👨‍💼' }
        ]
      },
      testimonials: {
        title: 'Testimonials',
        subtitle: 'We always strive to achieve the highest quality standards and support our clients at every step',
        items: [
          { name: 'Alexander', text: 'Great platform! Signals are very accurate, profit increased by 40% in a month.', rating: 5 },
          { name: 'Maria', text: 'Best support and intuitive interface. I recommend to everyone!', rating: 5 },
          { name: 'Dmitry', text: 'Professional approach to trading. Thanks to the team for quality service.', rating: 5 },
          { name: 'Elena', text: 'Very convenient tools, detailed analytics. Very satisfied with the results.', rating: 5 },
          { name: 'Andrew', text: 'Fast signals and accurate analysis. This is exactly what you need for successful trading.', rating: 5 },
          { name: 'Julia', text: 'Excellent service! I was able to learn quickly and start earning.', rating: 5 }
        ]
      },
      cta: {
        title: 'Have a trading idea?',
        subtitle: 'Start implementing it with us today!',
        button: 'Login'
      }
    },
    instructions: {
      hero: {
        title: 'Instructions',
        subtitle: 'Educational materials for a successful start'
      },
      video: {
        title: 'Video Instructions',
        placeholder: 'Educational video will be placed here'
      },
      buttons: {
        home: 'Home',
        register: 'Register'
      }
    },
    login: {
      title: 'Login',
      subtitle: 'Enter your credentials to access AI signals',
      email: 'Email',
      password: 'Password',
      forgotPassword: 'Forgot password?',
      loginButton: 'Login',
      loggingIn: 'Logging in...',
      error: 'Invalid email or password'
    },
    aiSignals: {
      title: 'AI Signals',
      subtitle: 'Select a pair and timeframe to generate an accurate trading signal',
      backToHome: 'Back to home',
      pairType: 'Pair Type',
      otcPairs: 'OTC Pairs',
      regularPairs: 'Regular Pairs',
      selectPair: 'Select Pair',
      timeframe: 'Timeframe',
      timeframes: {
        sec10: '10 sec',
        sec15: '15 sec',
        sec30: '30 sec',
        min1: '1 min',
        min5: '5 min'
      },
      generate: 'Generate',
      generating: 'Generating...',
      signalGenerated: 'Signal Generated',
      readyToUse: 'Ready to use',
      symbol: 'Symbol',
      direction: 'Direction',
      timeTo: 'Time to',
      buy: 'Buy',
      sell: 'Sell',
      getNewSignal: 'Get New Signal',
      readyToGenerate: 'Ready to generate',
      selectPairAndGenerate: 'Select a pair on the left and click "Generate"',
      selectPairHint: 'Select currency pair',
      selectTimeframeHint: 'Select timeframe',
      analyzing: 'Analyzing market data'
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
      mainTitle: 'Трейдинг',
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
      },
      durations: {
        minutes1to5: '1-5 минут',
        minutes2: '2 минуты'
      }
    },
    faq: {
      title: 'Частые вопросы',
      subtitle: 'Все, что вам нужно знать для успешного старта',
      questions: [
        {
          question: 'Как начать торговлю на вашей платформе?',
          answer: 'Для начала торговли вам нужно зарегистрироваться на нашей платформе, верифицировать учетную запись, пополнить счет одним из доступных методов оплаты и выбрать торговые инструменты. Весь процесс занимает всего несколько минут, после чего вы готовы к торговле.'
        },
        {
          question: 'Нужен ли опыт для торговли?',
          answer: 'Нет, опыт не является обязательным. Наша платформа разработана для трейдеров разного уровня - от новичков до профессионалов. Мы предоставляем подробные инструкции, обучающие материалы и торговые сигналы, которые помогут вам принимать обоснованные решения даже без предварительного опыта.'
        },
        {
          question: 'Что такое торговые сигналы и как ими пользоваться?',
          answer: 'Торговые сигналы - это рекомендации для входа или выхода из сделки, созданные на основе технического и фундаментального анализа. Вы получаете сигналы в реальном времени через нашу платформу и можете использовать их для принятия торговых решений. Каждый сигнал содержит подробную информацию об инструменте, направлении сделки и рекомендуемых параметрах.'
        },
        {
          question: 'Какие методы пополнения счета доступны?',
          answer: 'Мы поддерживаем различные методы пополнения счета, включая банковские карты (Visa, Mastercard), банковские переводы, электронные кошельки и криптовалюту. Все транзакции защищены и обрабатываются быстро. Минимальная сумма пополнения зависит от выбранного метода оплаты.'
        },
        {
          question: 'Есть ли поддержка 24/7?',
          answer: 'Да, наша служба поддержки работает круглосуточно 7 дней в неделю. Вы можете связаться с нами через Telegram, электронную почту или форму обращения на сайте. Наша команда всегда готова помочь вам с любыми вопросами, касающимися торговли и использования платформы.'
        }
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
      mainTitle: 'Инструменты',
      title: 'которые повысят ваш успех',
      subtitle: 'Все необходимые ресурсы для уверенного трейдинга',
      chartAlt: 'Финансовый график',
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
      titlePart1: 'Как это',
      titlePart2: 'работает',
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
    registerModal: {
      title: 'Регистрация',
      subtitle: 'Зарегистрируйтесь и получите бонус на баланс',
      registerLink: 'Ссылка на регистрацию',
      registerLinkLabel: 'Ссылка для регистрации на платформе PocketOption',
      registerButton: 'Зарегистрироваться',
      promoCode: 'Промокод',
      promoCodeLabel: 'Используй промокод на PocketOption при пополнении от 50$ и получи +60% бонуса на баланс',
      minDeposit: 'Минимальная сумма пополнения',
      bonus: 'Бонус',
      bonusDescription: 'на баланс',
      bonusDescriptionFull: 'на баланс при использовании промокода',
      checkBalance: 'Проверка баланса',
      accountIdPlaceholder: 'Введите ID аккаунта',
      accountIdRequired: 'Пожалуйста, введите ID аккаунта',
      sendButton: 'Отправить',
      sending: 'Отправка...',
      sent: 'Отправлено',
      successMessage: 'Ваш запрос отправлен! Мы свяжемся с вами в ближайшее время.',
      sendError: 'Ошибка отправки. Попробуйте позже.',
      postRegisterTitle: 'Регистрация успешна!',
      postRegisterSubtitle: 'Чтобы получать торговые сигналы, завершите регистрацию аккаунта на платформе Pocket Option',
      depositDescription: 'Пополняйте баланс на любую сумму на платформе Pocket Option и получите доступ к торговым сигналам на валютном рынке.'
    },
    footer: {
      description: 'Ваш надежный партнер в мире финансовых инвестиций. Мы предоставляем лучшие инструменты и сигналы для успешного трейдинга.',
      quickLinks: 'Быстрые ссылки',
      developedBy: 'Сайт разработан',
      copyright: 'Авторское право © 2026 AI.BOOST | Все права защищены',
      telegram: 'Telegram support',
      terms: 'Условия использования',
      privacy: 'Политика конфиденциальности',
      cookies: 'Политика файлов cookie'
    },
    about: {
      hero: {
        badge: 'О компании',
        title: 'О нас',
        subtitle: 'Мы помогаем трейдерам достигать финансовой свободы через инновационные технологии и профессиональную поддержку',
        stats: {
          users: 'Пользователей',
          countries: 'Стран',
          accuracy: 'Точность'
        }
      },
      whoWeAre: {
        title: 'Мы помогаем трейдерам достигать финансовой свободы',
        mission: {
          title: 'Наша миссия',
          text: 'Наша платформа создана для того, чтобы сделать торговлю доступной, понятной и прибыльной для каждого. Мы объединяем экспертов в области финансов, технологий и аналитики, чтобы предоставить вам лучшие решения для успешного трейдинга и достижения финансовых целей.'
        },
        innovation: {
          title: 'Инновации и качество',
          text: 'Мы гордимся тем, что предлагаем инновационные решения, которые помогают трейдерам принимать правильные решения, уменьшать риски и максимизировать прибыль. Каждый наш сигнал тщательно анализируется командой профессионалов, а каждый инструмент разработан с учетом потребностей как новичков, так и опытных трейдеров.'
        },
        success: {
          title: 'Ваш успех — наш приоритет',
          text: 'Мы верим, что с помощью правильных сигналов, данных и знаний каждый может стать успешным трейдером. Наша миссия - предоставить вам все необходимые ресурсы и поддержку для достижения финансовой свободы и независимости.'
        }
      },
      achievements: {
        title: 'Наши достижения в цифрах',
        subtitle: 'Мы верим, что с помощью правильных сигналов, данных и знаний каждый может стать успешным трейдером',
        items: [
          { value: '8000+', label: 'довольных пользователей по всему миру' },
          { value: '25', label: 'стран' },
          { value: '87%', label: 'точность наших сигналов' }
        ]
      },
      team: {
        title: 'Наша команда',
        subtitle: 'Команда, которая работает для вас',
        members: [
          { name: 'Игорь', role: 'Основатель и CEO', avatar: '👨‍💼' },
          { name: 'София', role: 'Разработчик', avatar: '👩‍💻' },
          { name: 'Денис', role: 'Менеджер поддержки', avatar: '👨‍💬' },
          { name: 'Дмитрий', role: 'AI разработчик', avatar: '🤖' },
          { name: 'Анна', role: 'Старший разработчик', avatar: '👩‍💻' },
          { name: 'Александр', role: 'Менеджер поддержки', avatar: '👨‍💼' }
        ]
      },
      testimonials: {
        title: 'Отзывы о нас',
        subtitle: 'Мы всегда стремимся достигать высочайших стандартов качества и поддерживать наших клиентов на каждом шаге',
        items: [
          { name: 'Александр', text: 'Отличная платформа! Сигналы очень точные, прибыль выросла на 40% за месяц.', rating: 5 },
          { name: 'Мария', text: 'Лучшая поддержка и понятный интерфейс. Рекомендую всем!', rating: 5 },
          { name: 'Дмитрий', text: 'Профессиональный подход к трейдингу. Спасибо команде за качественный сервис.', rating: 5 },
          { name: 'Елена', text: 'Очень удобные инструменты, детальная аналитика. Очень довольна результатами.', rating: 5 },
          { name: 'Андрей', text: 'Быстрые сигналы и точный анализ. Это именно то, что нужно для успешного трейдинга.', rating: 5 },
          { name: 'Юлия', text: 'Отличный сервис! Смогла быстро научиться и начать зарабатывать.', rating: 5 }
        ]
      },
      cta: {
        title: 'Есть торговая идея?',
        subtitle: 'Начните реализовывать её с нами уже сегодня!',
        button: 'Авторизация'
      }
    },
    instructions: {
      hero: {
        title: 'Инструкция',
        subtitle: 'Обучающие материалы для успешного старта'
      },
      video: {
        title: 'Видео инструкция',
        placeholder: 'Здесь будет размещено обучающее видео'
      },
      buttons: {
        home: 'На главную',
        register: 'Регистрация'
      }
    },
    login: {
      title: 'Войти',
      subtitle: 'Введите данные для доступа к AI сигналам',
      email: 'Электронная почта',
      password: 'Пароль',
      forgotPassword: 'Забыли пароль?',
      loginButton: 'Войти',
      loggingIn: 'Вход...',
      error: 'Неверный логин или пароль'
    },
    aiSignals: {
      title: 'AI Сигналы',
      subtitle: 'Выберите пару и таймфрейм для генерации точного торгового сигнала',
      backToHome: 'На главную',
      pairType: 'Тип пары',
      otcPairs: 'OTC пары',
      regularPairs: 'Обычные пары',
      selectPair: 'Выбор пары',
      timeframe: 'Таймфрейм',
      timeframes: {
        sec10: '10 сек',
        sec15: '15 сек',
        sec30: '30 сек',
        min1: '1 мин',
        min5: '5 мин'
      },
      generate: 'Генерировать',
      generating: 'Генерация...',
      signalGenerated: 'Сигнал сгенерирован',
      readyToUse: 'Готов к использованию',
      symbol: 'Символ',
      direction: 'Направление',
      timeTo: 'Время до',
      buy: 'Покупка',
      sell: 'Продажа',
      getNewSignal: 'Получить новый сигнал',
      readyToGenerate: 'Готовы к генерации',
      selectPairAndGenerate: 'Выберите пару слева и нажмите "Генерировать"',
      selectPairHint: 'Выберите валютную пару',
      selectTimeframeHint: 'Выберите таймфрейм',
      analyzing: 'Анализ рыночных данных'
    }
  },
  sk: {
    nav: {
      home: 'Domov',
      about: 'O nás',
      instructions: 'Inštrukcie',
      contest: 'Súťaž',
      register: 'Registrácia'
    },
    hero: {
      title: 'Váš kľúč k finančnému úspechu',
      subtitle: 'Sledujte trhy pomocou našich inovatívnych nástrojov a buďte vždy informovaní',
      stats: {
        users: 'Používateľov služby',
        successful: 'Úspešných signálov',
        failed: 'Neúspešných signálov',
        label: 'Štatistiky za posledných 24 hodín'
      }
    },
    trading: {
      mainTitle: 'Obchodovanie',
      title: 'pre tých, ktorí sú pripravení konať',
      subtitle: 'Pripojte sa k komunite lídrov, ktorí vytvárajú svoju budúcnosť už dnes',
      button: 'Prihlásenie'
    },
    pairs: {
      title: 'Obchodné páry a nástroje',
      subtitle: 'Každý signál je dôkladne analyzovaný, aby sme vám zabezpečili najlepšie výsledky',
      table: {
        pair: 'Menový pár',
        expiration: 'Čas expirácie',
        duration: 'Trvanie',
        entry: 'Vstupná cena'
      },
      durations: {
        minutes1to5: '1-5 minút',
        minutes2: '2 minúty'
      }
    },
    faq: {
      title: 'Často kladené otázky',
      subtitle: 'Všetko, čo potrebujete vedieť pre úspešný štart',
      questions: [
        {
          question: 'Ako začať obchodovať na vašej platforme?',
          answer: 'Na začatie obchodovania sa musíte zaregistrovať na našej platforme, overiť svoj účet, doplniť účet jedným z dostupných spôsobov platby a vybrať obchodné nástroje. Celý proces trvá len niekoľko minút, potom ste pripravení na obchodovanie.'
        },
        {
          question: 'Potrebujem skúsenosti s obchodovaním?',
          answer: 'Nie, skúsenosti nie sú potrebné. Naša platforma je navrhnutá pre obchodníkov všetkých úrovní - od začiatočníkov po profesionálov. Poskytujeme podrobné inštrukcie, vzdelávacie materiály a obchodné signály, ktoré vám pomôžu robiť informované rozhodnutia aj bez predchádzajúcich skúseností.'
        },
        {
          question: 'Čo sú obchodné signály a ako ich používať?',
          answer: 'Obchodné signály sú odporúčania na vstup alebo výstup z obchodu, vytvorené na základe technickej a fundamentálnej analýzy. Signály dostávate v reálnom čase prostredníctvom našej platformy a môžete ich použiť na rozhodovanie o obchodovaní. Každý signál obsahuje podrobné informácie o nástroji, smere obchodu a odporúčaných parametroch.'
        },
        {
          question: 'Aké metódy vkladu sú dostupné?',
          answer: 'Podporujeme rôzne metódy vkladu vrátane bankových kariet (Visa, Mastercard), bankových prevodov, elektronických peňaženiek a kryptomien. Všetky transakcie sú zabezpečené a rýchlo spracované. Minimálna suma vkladu závisí od vybranej platobnej metódy.'
        },
        {
          question: 'Je k dispozícii podpora 24/7?',
          answer: 'Áno, naša služba podpory funguje 24/7, 7 dní v týždni. Môžete nás kontaktovať cez Telegram, e-mail alebo kontaktný formulár na webovej stránke. Náš tím je vždy pripravený pomôcť vám s akýmikoľvek otázkami týkajúcimi sa obchodovania a používania platformy.'
        }
      ]
    },
    confident: {
      title: 'Sebavedomé obchodovanie s našimi riešeniami',
      subtitle: 'Intuitívne nástroje a analýza pre efektívne obchodovanie',
      features: [
        {
          title: 'Intuitívne rozhranie',
          desc: 'Používateľsky prívetivé rozhranie, ktoré umožňuje ľahkú navigáciu a rýchle operácie z akéhokoľvek zariadenia'
        },
        {
          title: 'Presné obchodné signály',
          desc: 'Získajte relevantné obchodné signály, ktoré vám pomôžu robiť informované rozhodnutia v reálnom čase'
        },
        {
          title: 'Rýchly štart',
          desc: 'Začnite obchodovať okamžite - registrácia trvá len niekoľko minút a ste pripravení na trh'
        }
      ]
    },
    tools: {
      mainTitle: 'Nástroje',
      title: 'ktoré zvýšia váš úspech',
      subtitle: 'Všetky potrebné zdroje pre sebavedomé obchodovanie',
      chartAlt: 'Finančný graf',
      items: [
        {
          title: 'Analytické grafy',
          desc: 'Získajte hlbokú analýzu trhov pomocou presných a používateľsky prívetivých grafov pre lepšie rozhodnutia'
        },
        {
          title: 'Obchodné signály',
          desc: 'Používajte spoľahlivé obchodné signály na včasný vstup a výstup z obchodov'
        },
        {
          title: 'Platforma pre sociálne obchodovanie',
          desc: 'Používajte spoľahlivé obchodné signály na včasný vstup a výstup z obchodov'
        }
      ]
    },
    howItWorks: {
      title: 'Ako to funguje',
      titlePart1: 'Ako to',
      titlePart2: 'funguje',
      subtitle: 'Jednoduchá cesta k začatiu obchodovania',
      steps: [
        'Registrácia',
        'Doplnenie účtu',
        'Výber nástrojov',
        'Obchodovanie'
      ],
      cta: 'Máte obchodnú myšlienku? Začnite ju realizovať s nami už dnes!',
      button: 'Prihlásenie'
    },
    registerModal: {
      title: 'Registrácia',
      subtitle: 'Zaregistrujte sa a získajte bonus na váš zostatok',
      registerLink: 'Odkaz na registráciu',
      registerLinkLabel: 'Odkaz na registráciu na platforme PocketOption',
      registerButton: 'Zaregistrovať sa',
      promoCode: 'Promo kód',
      promoCodeLabel: 'Použite promo kód na PocketOption pri vklade od 50$ a získajte +60% bonusu na zostatok',
      minDeposit: 'Minimálna suma vkladu',
      bonus: 'Bonus',
      bonusDescription: 'na zostatok',
      bonusDescriptionFull: 'na zostatok pri použití promo kódu',
      checkBalance: 'Kontrola zostatku',
      accountIdPlaceholder: 'Zadajte ID účtu',
      accountIdRequired: 'Prosím, zadajte ID účtu',
      sendButton: 'Odoslať',
      sending: 'Odosielanie...',
      sent: 'Odoslané',
      successMessage: 'Vaša požiadavka bola odoslaná! Čoskoro vás budeme kontaktovať.',
      sendError: 'Chyba odoslania. Skúste to neskôr.',
      postRegisterTitle: 'Registrácia úspešná!',
      postRegisterSubtitle: 'Aby ste dostávali obchodné signály, dokončite registráciu účtu na platforme Pocket Option',
      depositDescription: 'Dobite si zostatok o akúkoľvek sumu na platforme Pocket Option a získajte prístup k obchodným signálom na menovom trhu.'
    },
    footer: {
      description: 'Váš spoľahlivý partner vo svete finančných investícií. Poskytujeme najlepšie nástroje a signály pre úspešné obchodovanie.',
      quickLinks: 'Rýchle odkazy',
      developedBy: 'Webová stránka vyvinutá',
      copyright: 'Autorské práva © 2026 AI.BOOST | Všetky práva vyhradené',
      telegram: 'Telegram podpora',
      terms: 'Podmienky použitia',
      privacy: 'Zásady ochrany súkromia',
      cookies: 'Zásady súborov cookie'
    },
    about: {
      hero: {
        badge: 'O spoločnosti',
        title: 'O nás',
        subtitle: 'Pomáhame obchodníkom dosiahnuť finančnú slobodu prostredníctvom inovatívnych technológií a profesionálnej podpory',
        stats: {
          users: 'Používateľov',
          countries: 'Krajín',
          accuracy: 'Presnosť'
        }
      },
      whoWeAre: {
        title: 'Pomáhame obchodníkom dosiahnuť finančnú slobodu',
        mission: {
          title: 'Naša misia',
          text: 'Naša platforma je navrhnutá tak, aby urobila obchodovanie dostupné, zrozumiteľné a ziskové pre každého. Spájame odborníkov v oblasti financií, technológií a analýzy, aby sme vám poskytli najlepšie riešenia pre úspešné obchodovanie a dosiahnutie finančných cieľov.'
        },
        innovation: {
          title: 'Inovácie a kvalita',
          text: 'Sme hrdí na to, že ponúkame inovatívne riešenia, ktoré pomáhajú obchodníkom robiť správne rozhodnutia, znižovať riziká a maximalizovať zisky. Každý náš signál je dôkladne analyzovaný tímom profesionálov a každý nástroj je vyvinutý s ohľadom na potreby začiatočníkov aj skúsených obchodníkov.'
        },
        success: {
          title: 'Váš úspech je naša priorita',
          text: 'Veríme, že pomocou správnych signálov, dát a znalostí sa každý môže stať úspešným obchodníkom. Naša misia je poskytnúť vám všetky potrebné zdroje a podporu na dosiahnutie finančnej slobody a nezávislosti.'
        }
      },
      achievements: {
        title: 'Naše úspechy v číslach',
        subtitle: 'Veríme, že pomocou správnych signálov, dát a znalostí sa každý môže stať úspešným obchodníkom',
        items: [
          { value: '8000+', label: 'spokojných používateľov po celom svete' },
          { value: '25', label: 'krajín' },
          { value: '87%', label: 'presnosť našich signálov' }
        ]
      },
      team: {
        title: 'Náš tím',
        subtitle: 'Tím, ktorý pre vás pracuje',
        members: [
          { name: 'Ihor', role: 'Zakladateľ a CEO', avatar: '👨‍💼' },
          { name: 'Sofia', role: 'Vývojár', avatar: '👩‍💻' },
          { name: 'Denys', role: 'Manažér podpory', avatar: '👨‍💬' },
          { name: 'Dmytro', role: 'AI vývojár', avatar: '🤖' },
          { name: 'Anna', role: 'Senior vývojár', avatar: '👩‍💻' },
          { name: 'Oleksandr', role: 'Manažér podpory', avatar: '👨‍💼' }
        ]
      },
      testimonials: {
        title: 'Recenzie o nás',
        subtitle: 'Vždy sa snažíme dosiahnuť najvyššie štandardy kvality a podporovať našich klientov na každom kroku',
        items: [
          { name: 'Alexander', text: 'Výborná platforma! Signály sú veľmi presné, zisk vzrástol o 40% za mesiac.', rating: 5 },
          { name: 'Mária', text: 'Najlepšia podpora a intuitívne rozhranie. Odporúčam všetkým!', rating: 5 },
          { name: 'Dmitrij', text: 'Profesionálny prístup k obchodovaniu. Ďakujem tímu za kvalitný servis.', rating: 5 },
          { name: 'Elena', text: 'Veľmi pohodlné nástroje, detailná analýza. Veľmi spokojná s výsledkami.', rating: 5 },
          { name: 'Andrej', text: 'Rýchle signály a presná analýza. To je presne to, čo potrebujete pre úspešné obchodovanie.', rating: 5 },
          { name: 'Júlia', text: 'Výborný servis! Dokázala som sa rýchlo naučiť a začať zarábať.', rating: 5 }
        ]
      },
      cta: {
        title: 'Máte obchodnú myšlienku?',
        subtitle: 'Začnite ju realizovať s nami už dnes!',
        button: 'Prihlásenie'
      }
    },
    instructions: {
      hero: {
        title: 'Inštrukcie',
        subtitle: 'Vzdelávacie materiály pre úspešný štart'
      },
      video: {
        title: 'Video inštrukcie',
        placeholder: 'Tu bude umiestnené vzdelávacie video'
      },
      buttons: {
        home: 'Domov',
        register: 'Registrácia'
      }
    },
    login: {
      title: 'Prihlásiť sa',
      subtitle: 'Zadajte údaje pre prístup k AI signálom',
      email: 'E-mail',
      password: 'Heslo',
      forgotPassword: 'Zabudli ste heslo?',
      loginButton: 'Prihlásiť sa',
      loggingIn: 'Prihlasovanie...',
      error: 'Nesprávny e-mail alebo heslo'
    },
    aiSignals: {
      title: 'AI Signály',
      subtitle: 'Vyberte pár a časový rámec pre generovanie presného obchodného signálu',
      backToHome: 'Domov',
      pairType: 'Typ páru',
      otcPairs: 'OTC páry',
      regularPairs: 'Bežné páry',
      selectPair: 'Výber páru',
      timeframe: 'Časový rámec',
      timeframes: {
        sec10: '10 sek',
        sec15: '15 sek',
        sec30: '30 sek',
        min1: '1 min',
        min5: '5 min'
      },
      generate: 'Generovať',
      generating: 'Generovanie...',
      signalGenerated: 'Signál vygenerovaný',
      readyToUse: 'Pripravený na použitie',
      symbol: 'Symbol',
      direction: 'Smer',
      timeTo: 'Čas do',
      buy: 'Nákup',
      sell: 'Predaj',
      getNewSignal: 'Získať nový signál',
      readyToGenerate: 'Pripravení na generovanie',
      selectPairAndGenerate: 'Vyberte pár vľavo a kliknite na "Generovať"',
      selectPairHint: 'Vyberte menový pár',
      selectTimeframeHint: 'Vyberte časový rámec',
      analyzing: 'Analýza trhových údajov'
    }
  },
  pl: {
    nav: {
      home: 'Strona główna',
      about: 'O nas',
      instructions: 'Instrukcje',
      contest: 'Konkurs',
      register: 'Rejestracja'
    },
    hero: {
      title: 'Twój klucz do sukcesu finansowego',
      subtitle: 'Śledź rynki za pomocą naszych innowacyjnych narzędzi i bądź zawsze na bieżąco',
      stats: {
        users: 'Użytkowników serwisu',
        successful: 'Udanych sygnałów',
        failed: 'Nieudanych sygnałów',
        label: 'Statystyki z ostatnich 24 godzin'
      }
    },
    trading: {
      mainTitle: 'Handel',
      title: 'dla tych, którzy są gotowi działać',
      subtitle: 'Dołącz do społeczności liderów tworzących swoją przyszłość już dziś',
      button: 'Logowanie'
    },
    pairs: {
      title: 'Pary i instrumenty handlowe',
      subtitle: 'Każdy sygnał jest dokładnie analizowany, aby zapewnić najlepsze wyniki',
      table: {
        pair: 'Para walutowa',
        expiration: 'Czas wygaśnięcia',
        duration: 'Czas trwania',
        entry: 'Cena wejścia'
      },
      durations: {
        minutes1to5: '1-5 minut',
        minutes2: '2 minuty'
      }
    },
    faq: {
      title: 'Często zadawane pytania',
      subtitle: 'Wszystko, co musisz wiedzieć, aby rozpocząć z sukcesem',
      questions: [
        {
          question: 'Jak zacząć handlować na waszej platformie?',
          answer: 'Aby rozpocząć handel, musisz zarejestrować się na naszej platformie, zweryfikować konto, zasilić konto jednym z dostępnych metod płatności i wybrać instrumenty handlowe. Cały proces zajmuje tylko kilka minut, po czym jesteś gotowy do handlu.'
        },
        {
          question: 'Czy potrzebuję doświadczenia w handlu?',
          answer: 'Nie, doświadczenie nie jest wymagane. Nasza platforma jest zaprojektowana dla traderów na wszystkich poziomach - od początkujących po profesjonalistów. Zapewniamy szczegółowe instrukcje, materiały edukacyjne i sygnały handlowe, które pomogą Ci podejmować świadome decyzje nawet bez wcześniejszego doświadczenia.'
        },
        {
          question: 'Czym są sygnały handlowe i jak z nich korzystać?',
          answer: 'Sygnały handlowe to rekomendacje dotyczące wejścia lub wyjścia z transakcji, tworzone na podstawie analizy technicznej i fundamentalnej. Otrzymujesz sygnały w czasie rzeczywistym za pośrednictwem naszej platformy i możesz ich używać do podejmowania decyzji handlowych. Każdy sygnał zawiera szczegółowe informacje o instrumencie, kierunku transakcji i zalecanych parametrach.'
        },
        {
          question: 'Jakie metody wpłaty są dostępne?',
          answer: 'Obsługujemy różne metody wpłaty, w tym karty bankowe (Visa, Mastercard), przelewy bankowe, portfele elektroniczne i kryptowaluty. Wszystkie transakcje są bezpieczne i szybko przetwarzane. Minimalna kwota wpłaty zależy od wybranej metody płatności.'
        },
        {
          question: 'Czy jest dostępne wsparcie 24/7?',
          answer: 'Tak, nasza usługa wsparcia działa 24/7, 7 dni w tygodniu. Możesz skontaktować się z nami przez Telegram, e-mail lub formularz kontaktowy na stronie. Nasz zespół jest zawsze gotowy pomóc Ci w każdej kwestii związanej z handlem i korzystaniem z platformy.'
        }
      ]
    },
    confident: {
      title: 'Pewny handel z naszymi rozwiązaniami',
      subtitle: 'Intuicyjne narzędzia i analityka dla efektywnego handlu',
      features: [
        {
          title: 'Intuicyjny interfejs',
          desc: 'Przyjazny interfejs użytkownika, który pozwala na łatwą nawigację i szybkie operacje z dowolnego urządzenia'
        },
        {
          title: 'Dokładne sygnały handlowe',
          desc: 'Otrzymuj aktualne sygnały handlowe, które pomogą Ci podejmować świadome decyzje w czasie rzeczywistym'
        },
        {
          title: 'Szybki start',
          desc: 'Zacznij handlować natychmiast - rejestracja zajmuje tylko kilka minut i jesteś gotowy na rynek'
        }
      ]
    },
    tools: {
      mainTitle: 'Narzędzia',
      title: 'które zwiększą Twój sukces',
      subtitle: 'Wszystkie niezbędne zasoby do pewnego handlu',
      chartAlt: 'Wykres finansowy',
      items: [
        {
          title: 'Wykresy analityczne',
          desc: 'Otrzymuj głęboką analitykę rynków za pomocą dokładnych i przyjaznych wykresów do podejmowania lepszych decyzji'
        },
        {
          title: 'Sygnały handlowe',
          desc: 'Używaj niezawodnych sygnałów handlowych do terminowego wejścia i wyjścia z transakcji'
        },
        {
          title: 'Platforma handlu społecznościowego',
          desc: 'Używaj niezawodnych sygnałów handlowych do terminowego wejścia i wyjścia z transakcji'
        }
      ]
    },
    howItWorks: {
      title: 'Jak to działa',
      titlePart1: 'Jak to',
      titlePart2: 'działa',
      subtitle: 'Prosta ścieżka do rozpoczęcia handlu',
      steps: [
        'Rejestracja',
        'Zasilenie konta',
        'Wybór instrumentów',
        'Handel'
      ],
      cta: 'Masz pomysł na handel? Zacznij go realizować z nami już dziś!',
      button: 'Logowanie'
    },
    registerModal: {
      title: 'Rejestracja',
      subtitle: 'Zarejestruj się i otrzymaj bonus na saldo',
      registerLink: 'Link rejestracyjny',
      registerLinkLabel: 'Link rejestracyjny na platformie PocketOption',
      registerButton: 'Zarejestruj się',
      promoCode: 'Kod promocyjny',
      promoCodeLabel: 'Użyj kodu promocyjnego na PocketOption przy wpłacie od 50$ i otrzymaj +60% bonusu na saldo',
      minDeposit: 'Minimalna kwota wpłaty',
      bonus: 'Bonus',
      bonusDescription: 'na saldo',
      bonusDescriptionFull: 'na saldo przy użyciu kodu promocyjnego',
      checkBalance: 'Sprawdzenie salda',
      accountIdPlaceholder: 'Wprowadź ID konta',
      accountIdRequired: 'Proszę wprowadzić ID konta',
      sendButton: 'Wyślij',
      sending: 'Wysyłanie...',
      sent: 'Wysłane',
      successMessage: 'Twoje żądanie zostało wysłane! Skontaktujemy się z Tobą wkrótce.',
      sendError: 'Błąd wysyłania. Spróbuj ponownie później.',
      postRegisterTitle: 'Rejestracja udana!',
      postRegisterSubtitle: 'Aby otrzymywać sygnały handlowe, dokończ rejestrację konta na platformie Pocket Option',
      depositDescription: 'Zasil saldo o dowolną kwotę na platformie Pocket Option i uzyskaj dostęp do sygnałów handlowych na rynku walutowym.'
    },
    footer: {
      description: 'Twój niezawodny partner w świecie inwestycji finansowych. Zapewniamy najlepsze narzędzia i sygnały do udanego handlu.',
      quickLinks: 'Szybkie linki',
      developedBy: 'Strona opracowana przez',
      copyright: 'Prawa autorskie © 2026 AI.BOOST | Wszelkie prawa zastrzeżone',
      telegram: 'Wsparcie Telegram',
      terms: 'Warunki użytkowania',
      privacy: 'Polityka prywatności',
      cookies: 'Polityka plików cookie'
    },
    about: { hero: { badge: 'O firmie', title: 'O nas', subtitle: 'Pomagamy traderom osiągać wolność finansową poprzez innowacyjne technologie i profesjonalne wsparcie', stats: { users: 'Użytkowników', countries: 'Krajów', accuracy: 'Dokładność' } }, whoWeAre: { title: 'Pomagamy traderom osiągać wolność finansową', mission: { title: 'Nasza misja', text: 'Nasza platforma została stworzona, aby uczynić handel dostępnym, zrozumiałym i zyskownym dla każdego. Łączymy ekspertów z dziedziny finansów, technologii i analityki, aby zapewnić Ci najlepsze rozwiązania do udanego handlu i osiągania celów finansowych.' }, innovation: { title: 'Innowacje i jakość', text: 'Jesteśmy dumni z oferowania innowacyjnych rozwiązań, które pomagają traderom podejmować właściwe decyzje, zmniejszać ryzyko i maksymalizować zyski. Każdy nasz sygnał jest dokładnie analizowany przez zespół profesjonalistów, a każdy instrument jest opracowany z myślą o potrzebach zarówno początkujących, jak i doświadczonych traderów.' }, success: { title: 'Twój sukces to nasz priorytet', text: 'Wierzymy, że dzięki właściwym sygnałom, danym i wiedzy każdy może stać się udanym traderem. Naszą misją jest zapewnienie Ci wszystkich niezbędnych zasobów i wsparcia do osiągnięcia wolności finansowej i niezależności.' } }, achievements: { title: 'Nasze osiągnięcia w liczbach', subtitle: 'Wierzymy, że dzięki właściwym sygnałom, danym i wiedzy każdy może stać się udanym traderem', items: [{ value: '8000+', label: 'zadowolonych użytkowników na całym świecie' }, { value: '25', label: 'krajów' }, { value: '87%', label: 'dokładność naszych sygnałów' }] }, team: { title: 'Nasz zespół', subtitle: 'Zespół, który pracuje dla Ciebie', members: [{ name: 'Ihor', role: 'Założyciel i CEO', avatar: '👨‍💼' }, { name: 'Sofia', role: 'Deweloper', avatar: '👩‍💻' }, { name: 'Denys', role: 'Menedżer wsparcia', avatar: '👨‍💬' }, { name: 'Dmytro', role: 'Deweloper AI', avatar: '🤖' }, { name: 'Anna', role: 'Starszy deweloper', avatar: '👩‍💻' }, { name: 'Oleksandr', role: 'Menedżer wsparcia', avatar: '👨‍💼' }] }, testimonials: { title: 'Opinie o nas', subtitle: 'Zawsze dążymy do osiągnięcia najwyższych standardów jakości i wspierania naszych klientów na każdym kroku', items: [{ name: 'Aleksander', text: 'Świetna platforma! Sygnały są bardzo dokładne, zysk wzrósł o 40% w miesiącu.', rating: 5 }, { name: 'Maria', text: 'Najlepsze wsparcie i intuicyjny interfejs. Polecam wszystkim!', rating: 5 }, { name: 'Dmitrij', text: 'Profesjonalne podejście do handlu. Dziękuję zespołowi za jakościową obsługę.', rating: 5 }, { name: 'Elena', text: 'Bardzo wygodne narzędzia, szczegółowa analityka. Bardzo zadowolona z wyników.', rating: 5 }, { name: 'Andrzej', text: 'Szybkie sygnały i dokładna analiza. To dokładnie to, czego potrzebujesz do udanego handlu.', rating: 5 }, { name: 'Julia', text: 'Doskonała obsługa! Udało mi się szybko nauczyć i zacząć zarabiać.', rating: 5 }] }, cta: { title: 'Masz pomysł na handel?', subtitle: 'Zacznij go realizować z nami już dziś!', button: 'Logowanie' } },
    instructions: {
      hero: {
        title: 'Instrukcje',
        subtitle: 'Materiały edukacyjne do udanego startu'
      },
      video: {
        title: 'Instrukcje wideo',
        placeholder: 'Tutaj zostanie umieszczony materiał edukacyjny'
      },
      buttons: {
        home: 'Strona główna',
        register: 'Rejestracja'
      }
    },
    login: {
      title: 'Zaloguj się',
      subtitle: 'Wprowadź dane, aby uzyskać dostęp do sygnałów AI',
      email: 'E-mail',
      password: 'Hasło',
      forgotPassword: 'Zapomniałeś hasła?',
      loginButton: 'Zaloguj się',
      loggingIn: 'Logowanie...',
      error: 'Nieprawidłowy e-mail lub hasło'
    },
    aiSignals: {
      title: 'Sygnały AI',
      subtitle: 'Wybierz parę i ramę czasową, aby wygenerować dokładny sygnał handlowy',
      backToHome: 'Strona główna',
      pairType: 'Typ pary',
      otcPairs: 'Pary OTC',
      regularPairs: 'Zwykłe pary',
      selectPair: 'Wybierz parę',
      timeframe: 'Rama czasowa',
      timeframes: {
        sec10: '10 sek',
        sec15: '15 sek',
        sec30: '30 sek',
        min1: '1 min',
        min5: '5 min'
      },
      generate: 'Generuj',
      generating: 'Generowanie...',
      signalGenerated: 'Sygnał wygenerowany',
      readyToUse: 'Gotowy do użycia',
      symbol: 'Symbol',
      direction: 'Kierunek',
      timeTo: 'Czas do',
      buy: 'Kupno',
      sell: 'Sprzedaż',
      getNewSignal: 'Uzyskaj nowy sygnał',
      readyToGenerate: 'Gotowi do generowania',
      selectPairAndGenerate: 'Wybierz parę po lewej stronie i kliknij "Generuj"',
      selectPairHint: 'Wybierz parę walutową',
      selectTimeframeHint: 'Wybierz ramę czasową',
      analyzing: 'Analiza danych rynkowych'
    }
  },
  hi: {
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      instructions: 'निर्देश',
      contest: 'प्रतियोगिता',
      register: 'पंजीकरण'
    },
    hero: {
      title: 'वित्तीय सफलता की आपकी कुंजी',
      subtitle: 'हमारे नवाचार उपकरणों के साथ बाजारों को ट्रैक करें और हमेशा सूचित रहें',
      stats: {
        users: 'सेवा उपयोगकर्ता',
        successful: 'सफल संकेत',
        failed: 'असफल संकेत',
        label: 'पिछले 24 घंटों के आंकड़े'
      }
    },
    trading: {
      mainTitle: 'ट्रेडिंग',
      title: 'उन लोगों के लिए जो कार्य करने के लिए तैयार हैं',
      subtitle: 'नेताओं के समुदाय में शामिल हों जो आज ही अपना भविष्य बना रहे हैं',
      button: 'लॉगिन'
    },
    pairs: {
      title: 'ट्रेडिंग जोड़े और उपकरण',
      subtitle: 'आपके लिए सर्वोत्तम परिणाम सुनिश्चित करने के लिए प्रत्येक संकेत का सावधानीपूर्वक विश्लेषण किया जाता है',
      table: {
        pair: 'मुद्रा जोड़ी',
        expiration: 'समाप्ति समय',
        duration: 'अवधि',
        entry: 'प्रवेश मूल्य'
      },
      durations: {
        minutes1to5: '1-5 मिनट',
        minutes2: '2 मिनट'
      }
    },
    faq: {
      title: 'अक्सर पूछे जाने वाले प्रश्न',
      subtitle: 'सफल शुरुआत के लिए आपको जो कुछ जानना होगा',
      questions: [
        {
          question: 'आपके प्लेटफॉर्म पर ट्रेडिंग कैसे शुरू करें?',
          answer: 'ट्रेडिंग शुरू करने के लिए, आपको हमारे प्लेटफॉर्म पर पंजीकरण करना होगा, अपने खाते को सत्यापित करना होगा, उपलब्ध भुगतान विधियों में से एक का उपयोग करके अपने खाते को फंड करना होगा और ट्रेडिंग उपकरणों का चयन करना होगा। पूरी प्रक्रिया में केवल कुछ मिनट लगते हैं, जिसके बाद आप ट्रेडिंग के लिए तैयार हैं।'
        },
        {
          question: 'क्या मुझे ट्रेडिंग अनुभव की आवश्यकता है?',
          answer: 'नहीं, अनुभव आवश्यक नहीं है। हमारा प्लेटफॉर्म सभी स्तरों के व्यापारियों के लिए डिज़ाइन किया गया है - शुरुआती से लेकर पेशेवरों तक। हम विस्तृत निर्देश, शैक्षिक सामग्री और ट्रेडिंग संकेत प्रदान करते हैं जो आपको पूर्व अनुभव के बिना भी सूचित निर्णय लेने में मदद करेंगे।'
        },
        {
          question: 'ट्रेडिंग संकेत क्या हैं और उनका उपयोग कैसे करें?',
          answer: 'ट्रेडिंग संकेत व्यापार में प्रवेश या बाहर निकलने के लिए सिफारिशें हैं, जो तकनीकी और मौलिक विश्लेषण के आधार पर बनाए जाते हैं। आप हमारे प्लेटफॉर्म के माध्यम से वास्तविक समय में संकेत प्राप्त करते हैं और उनका उपयोग ट्रेडिंग निर्णय लेने के लिए कर सकते हैं। प्रत्येक संकेत में उपकरण, व्यापार दिशा और अनुशंसित मापदंडों के बारे में विस्तृत जानकारी होती है।'
        },
        {
          question: 'कौन सी जमा विधियां उपलब्ध हैं?',
          answer: 'हम विभिन्न जमा विधियों का समर्थन करते हैं, जिसमें बैंक कार्ड (Visa, Mastercard), बैंक ट्रांसफर, इलेक्ट्रॉनिक वॉलेट और क्रिप्टोकरेंसी शामिल हैं। सभी लेनदेन सुरक्षित हैं और जल्दी से संसाधित होते हैं। न्यूनतम जमा राशि चयनित भुगतान विधि पर निर्भर करती है।'
        },
        {
          question: 'क्या 24/7 सहायता उपलब्ध है?',
          answer: 'हां, हमारी सहायता सेवा सप्ताह में 7 दिन 24/7 काम करती है। आप Telegram, ईमेल या वेबसाइट पर संपर्क फॉर्म के माध्यम से हमसे संपर्क कर सकते हैं। हमारी टीम ट्रेडिंग और प्लेटफॉर्म उपयोग से संबंधित किसी भी प्रश्न में आपकी मदद करने के लिए हमेशा तैयार है।'
        }
      ]
    },
    confident: {
      title: 'हमारे समाधानों के साथ आत्मविश्वासपूर्ण ट्रेडिंग',
      subtitle: 'प्रभावी ट्रेडिंग के लिए सहज उपकरण और विश्लेषण',
      features: [
        {
          title: 'सहज इंटरफेस',
          desc: 'उपयोगकर्ता के अनुकूल इंटरफेस जो किसी भी उपकरण से आसान नेविगेशन और त्वरित संचालन की अनुमति देता है'
        },
        {
          title: 'सटीक ट्रेडिंग संकेत',
          desc: 'प्रासंगिक ट्रेडिंग संकेत प्राप्त करें जो आपको वास्तविक समय में सूचित निर्णय लेने में मदद करेंगे'
        },
        {
          title: 'त्वरित प्रारंभ',
          desc: 'तुरंत ट्रेडिंग शुरू करें - पंजीकरण में केवल कुछ मिनट लगते हैं और आप बाजार के लिए तैयार हैं'
        }
      ]
    },
    tools: {
      mainTitle: 'उपकरण',
      title: 'जो आपकी सफलता को बढ़ाएंगे',
      subtitle: 'आत्मविश्वासपूर्ण ट्रेडिंग के लिए सभी आवश्यक संसाधन',
      chartAlt: 'वित्तीय चार्ट',
      items: [
        {
          title: 'विश्लेषणात्मक चार्ट',
          desc: 'बेहतर निर्णय लेने के लिए सटीक और उपयोगकर्ता के अनुकूल चार्ट का उपयोग करके गहन बाजार विश्लेषण प्राप्त करें'
        },
        {
          title: 'ट्रेडिंग संकेत',
          desc: 'समय पर प्रवेश और व्यापार से बाहर निकलने के लिए विश्वसनीय ट्रेडिंग संकेतों का उपयोग करें'
        },
        {
          title: 'सामाजिक ट्रेडिंग प्लेटफॉर्म',
          desc: 'समय पर प्रवेश और व्यापार से बाहर निकलने के लिए विश्वसनीय ट्रेडिंग संकेतों का उपयोग करें'
        }
      ]
    },
    howItWorks: {
      title: 'यह कैसे काम करता है',
      titlePart1: 'यह कैसे',
      titlePart2: 'काम करता है',
      subtitle: 'ट्रेडिंग शुरू करने का सरल रास्ता',
      steps: [
        'पंजीकरण',
        'खाता फंडिंग',
        'उपकरण चुनें',
        'ट्रेडिंग'
      ],
      cta: 'ट्रेडिंग विचार है? आज ही हमारे साथ इसे लागू करना शुरू करें!',
      button: 'लॉगिन'
    },
    registerModal: {
      title: 'पंजीकरण',
      subtitle: 'पंजीकरण करें और अपने बैलेंस पर बोनस प्राप्त करें',
      registerLink: 'पंजीकरण लिंक',
      registerLinkLabel: 'PocketOption प्लेटफॉर्म पर पंजीकरण लिंक',
      registerButton: 'पंजीकरण करें',
      promoCode: 'प्रोमो कोड',
      promoCodeLabel: '$50 से जमा करते समय PocketOption पर प्रोमो कोड का उपयोग करें और अपने बैलेंस पर +60% बोनस प्राप्त करें',
      minDeposit: 'न्यूनतम जमा राशि',
      bonus: 'बोनस',
      bonusDescription: 'बैलेंस पर',
      bonusDescriptionFull: 'प्रोमो कोड का उपयोग करते समय बैलेंस पर',
      checkBalance: 'बैलेंस जांच',
      accountIdPlaceholder: 'खाता ID दर्ज करें',
      accountIdRequired: 'कृपया खाता ID दर्ज करें',
      sendButton: 'भेजें',
      sending: 'भेज रहा है...',
      sent: 'भेजा गया',
      successMessage: 'आपका अनुरोध भेजा गया है! हम जल्द ही आपसे संपर्क करेंगे।',
      sendError: 'भेजने में त्रुटि। कृपया बाद में पुनः प्रयास करें।',
      postRegisterTitle: 'पंजीकरण सफल!',
      postRegisterSubtitle: 'ट्रेडिंग संकेत प्राप्त करने के लिए, Pocket Option प्लेटफॉर्म पर अपने खाते की पंजीकरण पूरी करें',
      depositDescription: 'Pocket Option प्लेटफॉर्म पर किसी भी राशि से बैलेंस भरें और मुद्रा बाजार पर ट्रेडिंग संकेतों तक पहुंच प्राप्त करें।'
    },
    footer: {
      description: 'वित्तीय निवेश की दुनिया में आपका विश्वसनीय साथी। हम सफल व्यापार के लिए सर्वोत्तम उपकरण और संकेत प्रदान करते हैं।',
      quickLinks: 'त्वरित लिंक',
      developedBy: 'वेबसाइट विकसित की गई',
      copyright: 'कॉपीराइट © 2026 AI.BOOST | सभी अधिकार सुरक्षित',
      telegram: 'Telegram सहायता',
      terms: 'उपयोग की शर्तें',
      privacy: 'गोपनीयता नीति',
      cookies: 'कुकी नीति'
    },
    about: { hero: { badge: 'कंपनी के बारे में', title: 'हमारे बारे में', subtitle: 'हम नवाचार तकनीकों और पेशेवर समर्थन के माध्यम से व्यापारियों को वित्तीय स्वतंत्रता प्राप्त करने में मदद करते हैं', stats: { users: 'उपयोगकर्ता', countries: 'देश', accuracy: 'सटीकता' } }, whoWeAre: { title: 'हम व्यापारियों को वित्तीय स्वतंत्रता प्राप्त करने में मदद करते हैं', mission: { title: 'हमारा मिशन', text: 'हमारा प्लेटफॉर्म हर किसी के लिए व्यापार को सुलभ, समझने योग्य और लाभदायक बनाने के लिए बनाया गया है। हम वित्त, प्रौद्योगिकी और विश्लेषण के क्षेत्र में विशेषज्ञों को एक साथ लाते हैं ताकि हम आपको सफल व्यापार और वित्तीय लक्ष्यों को प्राप्त करने के लिए सर्वोत्तम समाधान प्रदान कर सकें।' }, innovation: { title: 'नवाचार और गुणवत्ता', text: 'हमें गर्व है कि हम नवाचार समाधान प्रदान करते हैं जो व्यापारियों को सही निर्णय लेने, जोखिम कम करने और लाभ को अधिकतम करने में मदद करते हैं। हमारे प्रत्येक संकेत का पेशेवरों की टीम द्वारा सावधानीपूर्वक विश्लेषण किया जाता है, और प्रत्येक उपकरण शुरुआती और अनुभवी व्यापारियों दोनों की जरूरतों को ध्यान में रखकर विकसित किया गया है।' }, success: { title: 'आपकी सफलता हमारी प्राथमिकता है', text: 'हम मानते हैं कि सही संकेतों, डेटा और ज्ञान के साथ, हर कोई एक सफल व्यापारी बन सकता है। हमारा मिशन आपको वित्तीय स्वतंत्रता और स्वतंत्रता प्राप्त करने के लिए सभी आवश्यक संसाधन और समर्थन प्रदान करना है।' } }, achievements: { title: 'संख्याओं में हमारी उपलब्धियां', subtitle: 'हम मानते हैं कि सही संकेतों, डेटा और ज्ञान के साथ, हर कोई एक सफल व्यापारी बन सकता है', items: [{ value: '8000+', label: 'दुनिया भर में संतुष्ट उपयोगकर्ता' }, { value: '25', label: 'देश' }, { value: '87%', label: 'हमारे संकेतों की सटीकता' }] }, team: { title: 'हमारी टीम', subtitle: 'वह टीम जो आपके लिए काम करती है', members: [{ name: 'Ihor', role: 'संस्थापक और CEO', avatar: '👨‍💼' }, { name: 'Sofia', role: 'डेवलपर', avatar: '👩‍💻' }, { name: 'Denys', role: 'सहायता प्रबंधक', avatar: '👨‍💬' }, { name: 'Dmytro', role: 'AI डेवलपर', avatar: '🤖' }, { name: 'Anna', role: 'सीनियर डेवलपर', avatar: '👩‍💻' }, { name: 'Oleksandr', role: 'सहायता प्रबंधक', avatar: '👨‍💼' }] }, testimonials: { title: 'हमारे बारे में समीक्षा', subtitle: 'हम हमेशा उच्चतम गुणवत्ता मानकों को प्राप्त करने और हर कदम पर अपने ग्राहकों का समर्थन करने का प्रयास करते हैं', items: [{ name: 'अलेक्जेंडर', text: 'महान प्लेटफॉर्म! संकेत बहुत सटीक हैं, एक महीने में लाभ 40% बढ़ गया।', rating: 5 }, { name: 'मारिया', text: 'सर्वश्रेष्ठ समर्थन और सहज इंटरफेस। मैं सभी को सुझाव देती हूं!', rating: 5 }, { name: 'दिमित्री', text: 'व्यापार के लिए पेशेवर दृष्टिकोण। गुणवत्तापूर्ण सेवा के लिए टीम को धन्यवाद।', rating: 5 }, { name: 'एलेना', text: 'बहुत सुविधाजनक उपकरण, विस्तृत विश्लेषण। परिणामों से बहुत संतुष्ट।', rating: 5 }, { name: 'एंड्रयू', text: 'तेज संकेत और सटीक विश्लेषण। यह सफल व्यापार के लिए बिल्कुल वही है जो आपको चाहिए।', rating: 5 }, { name: 'जूलिया', text: 'उत्कृष्ट सेवा! मैं जल्दी सीखने और कमाई शुरू करने में सक्षम थी।', rating: 5 }] }, cta: { title: 'व्यापार विचार है?', subtitle: 'आज ही हमारे साथ इसे लागू करना शुरू करें!', button: 'लॉगिन' } },
    instructions: {
      hero: {
        title: 'निर्देश',
        subtitle: 'सफल शुरुआत के लिए शैक्षिक सामग्री'
      },
      video: {
        title: 'वीडियो निर्देश',
        placeholder: 'यहां शैक्षिक वीडियो रखा जाएगा'
      },
      buttons: {
        home: 'होम',
        register: 'पंजीकरण'
      }
    },
    login: {
      title: 'लॉगिन करें',
      subtitle: 'AI संकेतों तक पहुंच के लिए अपनी जानकारी दर्ज करें',
      email: 'ईमेल',
      password: 'पासवर्ड',
      forgotPassword: 'पासवर्ड भूल गए?',
      loginButton: 'लॉगिन करें',
      loggingIn: 'लॉगिन हो रहा है...',
      error: 'गलत ईमेल या पासवर्ड'
    },
    aiSignals: {
      title: 'AI संकेत',
      subtitle: 'सटीक व्यापारिक संकेत उत्पन्न करने के लिए एक जोड़ी और समय सीमा चुनें',
      backToHome: 'होम पर वापस',
      pairType: 'जोड़ी प्रकार',
      otcPairs: 'OTC जोड़े',
      regularPairs: 'नियमित जोड़े',
      selectPair: 'जोड़ी चुनें',
      timeframe: 'समय सीमा',
      timeframes: {
        sec10: '10 सेक',
        sec15: '15 सेक',
        sec30: '30 सेक',
        min1: '1 मिन',
        min5: '5 मिन'
      },
      generate: 'उत्पन्न करें',
      generating: 'उत्पन्न हो रहा है...',
      signalGenerated: 'संकेत उत्पन्न',
      readyToUse: 'उपयोग के लिए तैयार',
      symbol: 'प्रतीक',
      direction: 'दिशा',
      timeTo: 'समय तक',
      buy: 'खरीदें',
      sell: 'बेचें',
      getNewSignal: 'नया संकेत प्राप्त करें',
      readyToGenerate: 'उत्पन्न करने के लिए तैयार',
      selectPairAndGenerate: 'बाएं से एक जोड़ी चुनें और "उत्पन्न करें" पर क्लिक करें',
      selectPairHint: 'मुद्रा जोड़ी चुनें',
      selectTimeframeHint: 'समय सीमा चुनें',
      analyzing: 'बाजार डेटा का विश्लेषण'
    }
  },
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      instructions: 'Talimatlar',
      contest: 'Yarışma',
      register: 'Kayıt Ol'
    },
    hero: {
      title: 'Finansal Başarınızın Anahtarı',
      subtitle: 'Yenilikçi araçlarımızla piyasaları takip edin ve her zaman bilgili kalın',
      stats: {
        users: 'Hizmet Kullanıcıları',
        successful: 'Başarılı Sinyaller',
        failed: 'Başarısız Sinyaller',
        label: 'Son 24 saat istatistikleri'
      }
    },
    trading: {
      mainTitle: 'İşlem',
      title: 'harekete geçmeye hazır olanlar için',
      subtitle: 'Bugün geleceklerini yaratan liderler topluluğuna katılın',
      button: 'Giriş Yap'
    },
    pairs: {
      title: 'İşlem Çiftleri ve Araçlar',
      subtitle: 'Size en iyi sonuçları sağlamak için her sinyal dikkatle analiz edilir',
      table: {
        pair: 'Döviz Çifti',
        expiration: 'Son Kullanma Süresi',
        duration: 'Süre',
        entry: 'Giriş Fiyatı'
      },
      durations: {
        minutes1to5: '1-5 dakika',
        minutes2: '2 dakika'
      }
    },
    faq: {
      title: 'Sıkça Sorulan Sorular',
      subtitle: 'Başarılı bir başlangıç için bilmeniz gereken her şey',
      questions: [
        {
          question: 'Platformunuzda nasıl işlem yapmaya başlayabilirim?',
          answer: 'İşlem yapmaya başlamak için platformumuza kaydolmanız, hesabınızı doğrulamanız, mevcut ödeme yöntemlerinden birini kullanarak hesabınıza para yatırmanız ve işlem araçlarını seçmeniz gerekir. Tüm süreç sadece birkaç dakika sürer, ardından işlem yapmaya hazırsınız.'
        },
        {
          question: 'İşlem deneyimi gerekli mi?',
          answer: 'Hayır, deneyim gerekli değildir. Platformumuz tüm seviyelerdeki yatırımcılar için tasarlanmıştır - yeni başlayanlardan profesyonellere kadar. Önceki deneyim olmadan bile bilinçli kararlar vermenize yardımcı olacak detaylı talimatlar, eğitim materyalleri ve işlem sinyalleri sağlıyoruz.'
        },
        {
          question: 'İşlem sinyalleri nedir ve nasıl kullanılır?',
          answer: 'İşlem sinyalleri, teknik ve temel analize dayalı olarak oluşturulan bir işleme giriş veya çıkış önerileridir. Platformumuz aracılığıyla gerçek zamanlı olarak sinyaller alırsınız ve bunları işlem kararları vermek için kullanabilirsiniz. Her sinyal, araç, işlem yönü ve önerilen parametreler hakkında detaylı bilgi içerir.'
        },
        {
          question: 'Hangi para yatırma yöntemleri mevcut?',
          answer: 'Banka kartları (Visa, Mastercard), banka havaleleri, elektronik cüzdanlar ve kripto para birimleri dahil olmak üzere çeşitli para yatırma yöntemlerini destekliyoruz. Tüm işlemler güvenlidir ve hızlı bir şekilde işlenir. Minimum para yatırma tutarı seçilen ödeme yöntemine bağlıdır.'
        },
        {
          question: '7/24 destek var mı?',
          answer: 'Evet, destek hizmetimiz haftanın 7 günü 24 saat çalışmaktadır. Telegram, e-posta veya web sitesindeki iletişim formu aracılığıyla bizimle iletişime geçebilirsiniz. Ekibimiz, işlem ve platform kullanımıyla ilgili herhangi bir sorunuzda size yardımcı olmaya her zaman hazırdır.'
        }
      ]
    },
    confident: {
      title: 'Çözümlerimizle Güvenli İşlem',
      subtitle: 'Etkili işlem için sezgisel araçlar ve analitik',
      features: [
        {
          title: 'Sezgisel Arayüz',
          desc: 'Herhangi bir cihazdan kolay gezinme ve hızlı işlemlere izin veren kullanıcı dostu arayüz'
        },
        {
          title: 'Doğru İşlem Sinyalleri',
          desc: 'Gerçek zamanlı olarak bilinçli kararlar vermenize yardımcı olacak güncel işlem sinyalleri alın'
        },
        {
          title: 'Hızlı Başlangıç',
          desc: 'Anında işlem yapmaya başlayın - kayıt sadece birkaç dakika sürer ve piyasaya hazırsınız'
        }
      ]
    },
    tools: {
      mainTitle: 'Araçlar',
      title: 'başarınızı artıracak',
      subtitle: 'Güvenli işlem için gerekli tüm kaynaklar',
      chartAlt: 'Finansal Grafik',
      items: [
        {
          title: 'Analitik Grafikler',
          desc: 'Daha iyi kararlar vermek için doğru ve kullanıcı dostu grafikler kullanarak derinlemesine piyasa analizi alın'
        },
        {
          title: 'İşlem Sinyalleri',
          desc: 'Zamanında giriş ve işlemlerden çıkış için güvenilir işlem sinyalleri kullanın'
        },
        {
          title: 'Sosyal İşlem Platformu',
          desc: 'Zamanında giriş ve işlemlerden çıkış için güvenilir işlem sinyalleri kullanın'
        }
      ]
    },
    howItWorks: {
      title: 'Nasıl Çalışır',
      titlePart1: 'Nasıl',
      titlePart2: 'Çalışır',
      subtitle: 'İşlem yapmaya başlamanın basit yolu',
      steps: [
        'Kayıt',
        'Hesap Para Yatırma',
        'Araç Seçimi',
        'İşlem'
      ],
      cta: 'İşlem fikriniz var mı? Bugün bizimle uygulamaya başlayın!',
      button: 'Giriş Yap'
    },
    registerModal: {
      title: 'Kayıt',
      subtitle: 'Kayıt olun ve bakiyenize bonus alın',
      registerLink: 'Kayıt bağlantısı',
      registerLinkLabel: 'PocketOption platformundaki kayıt bağlantısı',
      registerButton: 'Kayıt Ol',
      promoCode: 'Promosyon kodu',
      promoCodeLabel: '$50\'den itibaren yatırım yaparken PocketOption\'da promosyon kodunu kullanın ve bakiyenize +60% bonus alın',
      minDeposit: 'Minimum yatırım tutarı',
      bonus: 'Bonus',
      bonusDescription: 'bakiyeye',
      bonusDescriptionFull: 'promosyon kodu kullanırken bakiyeye',
      checkBalance: 'Bakiye kontrolü',
      accountIdPlaceholder: 'Hesap ID\'sini girin',
      accountIdRequired: 'Lütfen hesap ID\'sini girin',
      sendButton: 'Gönder',
      sending: 'Gönderiliyor...',
      sent: 'Gönderildi',
      successMessage: 'Talebiniz gönderildi! Yakında sizinle iletişime geçeceğiz.',
      sendError: 'Gönderme hatası. Lütfen daha sonra tekrar deneyin.',
      postRegisterTitle: 'Kayıt başarılı!',
      postRegisterSubtitle: 'İşlem sinyalleri almak için Pocket Option platformunda hesap kaydınızı tamamlayın',
      depositDescription: 'Pocket Option platformunda bakiyenizi herhangi bir tutarla doldurun ve döviz piyasasındaki işlem sinyallerine erişim kazanın.'
    },
    footer: {
      description: 'Finansal yatırımlar dünyasında güvenilir ortağınız. Başarılı ticaret için en iyi araçları ve sinyalleri sağlıyoruz.',
      quickLinks: 'Hızlı Bağlantılar',
      developedBy: 'Web sitesi geliştirildi',
      copyright: 'Telif Hakkı © 2026 AI.BOOST | Tüm hakları saklıdır',
      telegram: 'Telegram desteği',
      terms: 'Kullanım Şartları',
      privacy: 'Gizlilik Politikası',
      cookies: 'Çerez Politikası'
    },
    about: { hero: { badge: 'Şirket Hakkında', title: 'Hakkımızda', subtitle: 'Yenilikçi teknolojiler ve profesyonel destek aracılığıyla yatırımcılara finansal özgürlük kazandırmalarına yardımcı oluyoruz', stats: { users: 'Kullanıcılar', countries: 'Ülkeler', accuracy: 'Doğruluk' } }, whoWeAre: { title: 'Yatırımcılara finansal özgürlük kazandırmalarına yardımcı oluyoruz', mission: { title: 'Misyonumuz', text: 'Platformumuz, herkes için ticareti erişilebilir, anlaşılır ve karlı hale getirmek için oluşturulmuştur. Başarılı ticaret ve finansal hedeflere ulaşmak için size en iyi çözümleri sunmak üzere finans, teknoloji ve analitik alanlarındaki uzmanları bir araya getiriyoruz.' }, innovation: { title: 'Yenilik ve Kalite', text: 'Yatırımcıların doğru kararlar vermesine, riskleri azaltmasına ve karları maksimize etmesine yardımcı olan yenilikçi çözümler sunmaktan gurur duyuyoruz. Her sinyalimiz profesyonellerden oluşan bir ekip tarafından dikkatle analiz edilir ve her araç hem yeni başlayanlar hem de deneyimli yatırımcıların ihtiyaçları dikkate alınarak geliştirilmiştir.' }, success: { title: 'Başarınız Önceliğimizdir', text: 'Doğru sinyaller, veriler ve bilgilerle herkesin başarılı bir yatırımcı olabileceğine inanıyoruz. Misyonumuz, finansal özgürlük ve bağımsızlığa ulaşmak için ihtiyacınız olan tüm kaynakları ve desteği sağlamaktır.' } }, achievements: { title: 'Sayılarla Başarılarımız', subtitle: 'Doğru sinyaller, veriler ve bilgilerle herkesin başarılı bir yatırımcı olabileceğine inanıyoruz', items: [{ value: '8000+', label: 'dünya çapında memnun kullanıcı' }, { value: '25', label: 'ülke' }, { value: '87%', label: 'sinyallerimizin doğruluğu' }] }, team: { title: 'Ekibimiz', subtitle: 'Sizin için çalışan ekip', members: [{ name: 'Ihor', role: 'Kurucu ve CEO', avatar: '👨‍💼' }, { name: 'Sofia', role: 'Geliştirici', avatar: '👩‍💻' }, { name: 'Denys', role: 'Destek Yöneticisi', avatar: '👨‍💬' }, { name: 'Dmytro', role: 'AI Geliştirici', avatar: '🤖' }, { name: 'Anna', role: 'Kıdemli Geliştirici', avatar: '👩‍💻' }, { name: 'Oleksandr', role: 'Destek Yöneticisi', avatar: '👨‍💼' }] }, testimonials: { title: 'Hakkımızda Yorumlar', subtitle: 'Her zaman en yüksek kalite standartlarına ulaşmaya ve müşterilerimizi her adımda desteklemeye çalışıyoruz', items: [{ name: 'Aleksandr', text: 'Harika platform! Sinyaller çok doğru, bir ayda kar %40 arttı.', rating: 5 }, { name: 'Maria', text: 'En iyi destek ve sezgisel arayüz. Herkese tavsiye ederim!', rating: 5 }, { name: 'Dmitry', text: 'Ticarete profesyonel yaklaşım. Kaliteli hizmet için ekibe teşekkürler.', rating: 5 }, { name: 'Elena', text: 'Çok kullanışlı araçlar, detaylı analitik. Sonuçlardan çok memnunum.', rating: 5 }, { name: 'Andrew', text: 'Hızlı sinyaller ve doğru analiz. Başarılı ticaret için tam olarak ihtiyacınız olan şey bu.', rating: 5 }, { name: 'Julia', text: 'Mükemmel hizmet! Hızlı öğrenebildim ve kazanmaya başladım.', rating: 5 }] }, cta: { title: 'Ticaret fikriniz var mı?', subtitle: 'Bugün bizimle uygulamaya başlayın!', button: 'Giriş Yap' } },
    instructions: {
      hero: {
        title: 'Talimatlar',
        subtitle: 'Başarılı bir başlangıç için eğitim materyalleri'
      },
      video: {
        title: 'Video Talimatları',
        placeholder: 'Eğitim videosu buraya yerleştirilecek'
      },
      buttons: {
        home: 'Ana Sayfa',
        register: 'Kayıt Ol'
      }
    },
    login: {
      title: 'Giriş Yap',
      subtitle: 'AI sinyallerine erişmek için bilgilerinizi girin',
      email: 'E-posta',
      password: 'Şifre',
      forgotPassword: 'Şifrenizi mi unuttunuz?',
      loginButton: 'Giriş Yap',
      loggingIn: 'Giriş yapılıyor...',
      error: 'Geçersiz e-posta veya şifre'
    },
    aiSignals: {
      title: 'AI Sinyalleri',
      subtitle: 'Kesin bir ticaret sinyali oluşturmak için bir çift ve zaman dilimi seçin',
      backToHome: 'Ana Sayfa',
      pairType: 'Çift Türü',
      otcPairs: 'OTC Çiftleri',
      regularPairs: 'Normal Çiftler',
      selectPair: 'Çift Seç',
      timeframe: 'Zaman Dilimi',
      timeframes: {
        sec10: '10 sn',
        sec15: '15 sn',
        sec30: '30 sn',
        min1: '1 dk',
        min5: '5 dk'
      },
      generate: 'Oluştur',
      generating: 'Oluşturuluyor...',
      signalGenerated: 'Sinyal Oluşturuldu',
      readyToUse: 'Kullanıma hazır',
      symbol: 'Sembol',
      direction: 'Yön',
      timeTo: 'Zaman',
      buy: 'Satın Al',
      sell: 'Sat',
      getNewSignal: 'Yeni Sinyal Al',
      readyToGenerate: 'Oluşturmaya hazır',
      selectPairAndGenerate: 'Soldan bir çift seçin ve "Oluştur"a tıklayın',
      selectPairHint: 'Para birimi çifti seçin',
      selectTimeframeHint: 'Zaman dilimi seçin',
      analyzing: 'Piyasa verileri analiz ediliyor'
    }
  }
};

export type Translations = TranslationStructure;

