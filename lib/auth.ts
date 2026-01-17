import { compare, hash } from 'bcryptjs';
import { dbUsers, User } from './db';

export async function hashPassword(password: string): Promise<string> {
  return hash(password, 12);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return compare(password, hashedPassword);
}

export async function createUser(email: string, password: string, pocketOptionsId?: string): Promise<User> {
  const hashedPassword = await hashPassword(password);
  
  const user = dbUsers.create(email, hashedPassword, pocketOptionsId || null);
  if (!user) {
    throw new Error('Помилка створення користувача');
  }
  return user;
}

export async function getUserByEmail(email: string): Promise<User | null> {
  return dbUsers.getByEmail(email);
}

export async function verifyUserAccount(userId: number): Promise<User> {
  const user = dbUsers.update(userId, { isVerified: true });
  if (!user) {
    throw new Error('Користувача не знайдено');
  }
  return user;
}
