import { hash } from 'bcryptjs';
import { config } from 'dotenv';
import { resolve } from 'path';
import { dbUsers } from '../lib/db';

// Load .env file
config({ path: resolve(process.cwd(), '.env') });

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    console.error('Помилка: ADMIN_EMAIL та ADMIN_PASSWORD повинні бути встановлені в файлі .env');
    console.error('Створіть файл .env у корені проекту з наступними змінними:');
    console.error('ADMIN_EMAIL=your@email.com');
    console.error('ADMIN_PASSWORD=yourpassword');
    process.exit(1);
  }

  // Check if admin already exists
  const existingAdmin = dbUsers.getByEmail(adminEmail);

  if (existingAdmin) {
    console.log('Admin user already exists:', adminEmail);
    return;
  }

  // Create admin user
  const hashedPassword = await hash(adminPassword, 12);
  
  const admin = dbUsers.create(adminEmail, hashedPassword, null);
  
  if (!admin) {
    console.error('Помилка створення адміністратора');
    process.exit(1);
  }

  // Оновлюємо адміна для встановлення isVerified та isAdmin
  const updatedAdmin = dbUsers.update(admin.id, {
    isVerified: true,
    isAdmin: true,
  });

  if (!updatedAdmin) {
    console.error('Помилка оновлення адміністратора');
    process.exit(1);
  }

  console.log('Admin user created:', updatedAdmin.email);
  console.log('Email:', adminEmail);
  console.log('Password:', adminPassword);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
