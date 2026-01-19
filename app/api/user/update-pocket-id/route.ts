import { NextRequest, NextResponse } from 'next/server';
import { dbUsers } from '@/lib/db';
import { notifyPocketIdVerificationRequest } from '@/lib/telegram';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, pocketOptionsId } = body;

    if (!userId || !pocketOptionsId) {
      return NextResponse.json(
        { error: 'ID користувача та Pocket Options ID обов\'язкові' },
        { status: 400 }
      );
    }

    // Оновлюємо Pocket Options ID
    const user = dbUsers.update(userId, {
      pocketOptionsId: pocketOptionsId.trim(),
      isPocketOptionsIdVerified: false, // Скидаємо підтвердження при оновленні
    });
    
    if (!user) {
      return NextResponse.json(
        { error: 'Користувача не знайдено' },
        { status: 404 }
      );
    }

    // Відправляємо сповіщення в Telegram про запит на перевірку (не блокуємо відповідь якщо не вдалося)
    try {
      await notifyPocketIdVerificationRequest(user.email, user.id, user.pocketOptionsId || '');
    } catch (telegramError) {
      // Не обробляємо помилки Telegram, щоб не заважати оновленню
      console.error('Telegram notification error:', telegramError);
    }

    // Повертаємо дані без пароля
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      { 
        message: 'ID акаунту оновлено. Очікуйте підтвердження від адміністратора.',
        user: userWithoutPassword 
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Update pocket ID error:', error);
    return NextResponse.json(
      { error: 'Помилка оновлення ID акаунту. Спробуйте пізніше.' },
      { status: 500 }
    );
  }
}
