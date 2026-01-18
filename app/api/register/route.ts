import { NextRequest, NextResponse } from 'next/server';
import { createUser, getUserByEmail } from '@/lib/auth';
import { notifyNewRegistration } from '@/lib/telegram';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, pocketOptionsId } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email та пароль обов\'язкові' },
        { status: 400 }
      );
    }

    // Перевірка чи користувач вже існує
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { error: 'Користувач з таким email вже існує' },
        { status: 400 }
      );
    }

    // Створення користувача
    const user = await createUser(email, password, pocketOptionsId);

    // Відправляємо сповіщення в Telegram (не блокуємо відповідь якщо не вдалося)
    try {
      await notifyNewRegistration(email, user.id);
    } catch (telegramError) {
      // Не обробляємо помилки Telegram, щоб не заважати реєстрації
      console.error('Telegram notification error:', telegramError);
    }

    // Повертаємо дані без пароля
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      { 
        message: 'Реєстрація успішна. Очікуйте підтвердження від адміністратора.',
        user: userWithoutPassword 
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Помилка реєстрації. Спробуйте пізніше.' },
      { status: 500 }
    );
  }
}
