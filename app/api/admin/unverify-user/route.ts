import { NextRequest, NextResponse } from 'next/server';
import { getUserByEmail } from '@/lib/auth';
import { dbUsers } from '@/lib/db';

// Middleware для перевірки адміна
async function checkAdmin(request: NextRequest) {
  const email = request.headers.get('x-user-email');
  
  if (!email) {
    return { error: 'Не авторизовано', status: 401 };
  }

  const user = await getUserByEmail(email);
  if (!user || !user.isAdmin) {
    return { error: 'Доступ заборонено. Потрібні права адміністратора.', status: 403 };
  }

  return null;
}

export async function POST(request: NextRequest) {
  try {
    // Перевірка прав адміна
    const adminCheck = await checkAdmin(request);
    if (adminCheck) {
      return NextResponse.json(
        { error: adminCheck.error },
        { status: adminCheck.status }
      );
    }

    const body = await request.json();
    const { userId } = body;

    if (!userId) {
      return NextResponse.json(
        { error: 'ID користувача обов\'язковий' },
        { status: 400 }
      );
    }

    // Скасовуємо підтвердження користувача
    const user = dbUsers.update(userId, { isVerified: false });
    if (!user) {
      return NextResponse.json(
        { error: 'Користувача не знайдено' },
        { status: 404 }
      );
    }

    // Повертаємо дані без пароля
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      { 
        message: 'Підтвердження користувача скасовано',
        user: userWithoutPassword 
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Unverify user error:', error);
    return NextResponse.json(
      { error: 'Помилка скасування підтвердження користувача' },
      { status: 500 }
    );
  }
}
