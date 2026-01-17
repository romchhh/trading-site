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

export async function GET(request: NextRequest) {
  try {
    // Перевірка прав адміна
    const adminCheck = await checkAdmin(request);
    if (adminCheck) {
      return NextResponse.json(
        { error: adminCheck.error },
        { status: adminCheck.status }
      );
    }

    // Отримуємо всіх користувачів
    const allUsers = dbUsers.getAll();
    const users = allUsers.map(user => ({
      id: user.id,
      email: user.email,
      pocketOptionsId: user.pocketOptionsId,
      isVerified: user.isVerified,
      isPocketOptionsIdVerified: user.isPocketOptionsIdVerified,
      isAdmin: user.isAdmin,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }));

    return NextResponse.json({ users }, { status: 200 });
  } catch (error: any) {
    console.error('Get users error:', error);
    return NextResponse.json(
      { error: 'Помилка отримання користувачів' },
      { status: 500 }
    );
  }
}
