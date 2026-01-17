import { NextRequest, NextResponse } from 'next/server';
import { getUserByEmail, verifyUserAccount } from '@/lib/auth';

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

    // Підтверджуємо користувача
    const user = await verifyUserAccount(userId);

    // Повертаємо дані без пароля
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      { 
        message: 'Користувача підтверджено',
        user: userWithoutPassword 
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Verify user error:', error);
    return NextResponse.json(
      { error: 'Помилка підтвердження користувача' },
      { status: 500 }
    );
  }
}
