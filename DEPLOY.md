# Інструкції по деплою Options Site

## Локальний запуск

### 1. Встановлення залежностей

```bash
npm install
```

### 2. Налаштування змінних оточення

Створіть файл `.env` у корені проекту:

```env
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_secure_password
```

### 3. Налаштування бази даних

**Важливо:** Якщо у вас є файл `prisma.config.ts` на сервері, видаліть його:
```bash
rm -f prisma.config.ts
```

База даних SQLite створюється автоматично при першому запуску. Просто створіть адміністраторський акаунт:

```bash
# Створити адміністраторський акаунт
npm run db:seed
```

### 4. Запуск сервера розробки

```bash
npm run dev
```

Сайт буде доступний на `http://localhost:3003`

### 5. Збірка для продакшн

```bash
npm run build
npm start
```

## Деплой на Vercel

### 1. Підготовка

1. Зареєструйтеся на [Vercel](https://vercel.com)
2. Встановіть Vercel CLI:
```bash
npm i -g vercel
```

### 2. Налаштування проекту

1. Створіть файл `vercel.json` (опціонально):
```json
{
  "buildCommand": "next build",
  "installCommand": "npm install"
}
```

2. Додайте змінні оточення в Vercel Dashboard:
   - `ADMIN_EMAIL` - Email адміністратора
   - `ADMIN_PASSWORD` - Пароль адміністратора
   - `DATABASE_URL` - URL бази даних (для продакшн)

### 3. Деплой

```bash
# Логін в Vercel
vercel login

# Деплой
vercel

# Або через GitHub:
# 1. Пуште код в GitHub репозиторій
# 2. Підключіть репозиторій в Vercel Dashboard
# 3. Налаштуйте змінні оточення
# 4. Деплой відбудеться автоматично
```

### 4. Налаштування бази даних на Vercel

Для продакшн використовуйте:
- **Vercel Postgres** (рекомендовано)
- **PlanetScale** (MySQL)
- **Supabase** (PostgreSQL)
- **Railway** (PostgreSQL/SQLite)

Для продакшн потрібно оновити `lib/db.ts` для використання PostgreSQL або MySQL замість SQLite.

## Деплой на інші платформи

### Railway

1. Створіть аккаунт на [Railway](https://railway.app)
2. Створіть новий проект
3. Додайте PostgreSQL або SQLite базу даних
4. Підключіть GitHub репозиторій
5. Налаштуйте змінні оточення
6. Railway автоматично задеплоїть проект

### Render

1. Створіть аккаунт на [Render](https://render.com)
2. Створіть новий Web Service
3. Підключіть GitHub репозиторій
4. Налаштуйте:
   - Build Command: `npm install && npx prisma generate && npm run build`
   - Start Command: `npm start`
5. Додайте PostgreSQL базу даних
6. Налаштуйте змінні оточення

### DigitalOcean App Platform

1. Створіть аккаунт на [DigitalOcean](https://www.digitalocean.com)
2. Створіть новий App
3. Підключіть GitHub репозиторій
4. Налаштуйте:
   - Build Command: `npm install && npx prisma generate && npm run build`
   - Run Command: `npm start`
5. Додайте Managed Database (PostgreSQL)
6. Налаштуйте змінні оточення

## Важливі моменти

### База даних

- **Розробка**: SQLite (локально)
- **Продакшн**: PostgreSQL або MySQL (рекомендовано)

### Змінні оточення

Обов'язкові для продакшн:
- `ADMIN_EMAIL` - Email адміністратора
- `ADMIN_PASSWORD` - Пароль адміністратора
- `DATABASE_URL` - URL бази даних (для продакшн)

### База даних

База даних SQLite створюється автоматично. Для продакшн рекомендується використовувати PostgreSQL або MySQL.

### Безпека

- Ніколи не комітьте файл `.env` в Git
- Використовуйте сильні паролі для адміністратора
- Налаштуйте HTTPS для продакшн
- Регулярно оновлюйте залежності

## Troubleshooting

### Помилка з базою даних

База даних створюється автоматично. Якщо виникають проблеми, перевірте права доступу до директорії `prisma/`.

### Помилка при деплої

1. Перевірте логи в панелі деплою
2. Переконайтеся, що всі змінні оточення налаштовані
3. Перевірте, чи Prisma Client згенерований перед build

## Підтримка

Якщо виникли проблеми:
1. Перевірте консоль браузера (F12)
2. Перевірте логи сервера
3. Перевірте налаштування бази даних
4. Перевірте змінні оточення
