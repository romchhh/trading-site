import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const dbPath = path.join(process.cwd(), 'prisma', 'dev.db');
const dbDir = path.dirname(dbPath);

// Створюємо директорію, якщо її немає
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Ініціалізуємо БД
const db = new Database(dbPath);

// Вмикаємо foreign keys
db.pragma('foreign_keys = ON');

// Створюємо таблицю, якщо її немає
db.exec(`
  CREATE TABLE IF NOT EXISTS User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    pocketOptionsId TEXT,
    isVerified INTEGER DEFAULT 0,
    isPocketOptionsIdVerified INTEGER DEFAULT 0,
    isAdmin INTEGER DEFAULT 0,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE INDEX IF NOT EXISTS idx_user_email ON User(email);
  CREATE INDEX IF NOT EXISTS idx_user_isVerified ON User(isVerified);
  CREATE INDEX IF NOT EXISTS idx_user_isPocketOptionsIdVerified ON User(isPocketOptionsIdVerified);
  CREATE INDEX IF NOT EXISTS idx_user_isAdmin ON User(isAdmin);
`);

// Trigger для оновлення updatedAt
db.exec(`
  CREATE TRIGGER IF NOT EXISTS update_user_timestamp 
  AFTER UPDATE ON User
  BEGIN
    UPDATE User SET updatedAt = CURRENT_TIMESTAMP WHERE id = NEW.id;
  END;
`);

export interface User {
  id: number;
  email: string;
  password: string;
  pocketOptionsId: string | null;
  isVerified: boolean;
  isPocketOptionsIdVerified: boolean;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}

export const getDb = () => db;

// Функції для роботи з користувачами
export const dbUsers = {
  create: (email: string, password: string, pocketOptionsId: string | null = null) => {
    const stmt = db.prepare(`
      INSERT INTO User (email, password, pocketOptionsId, isVerified, isPocketOptionsIdVerified, isAdmin, createdAt, updatedAt)
      VALUES (?, ?, ?, 0, 0, 0, datetime('now'), datetime('now'))
    `);
    const result = stmt.run(email, password, pocketOptionsId);
    return dbUsers.getById(result.lastInsertRowid as number);
  },

  getByEmail: (email: string): User | null => {
    const stmt = db.prepare('SELECT * FROM User WHERE email = ?');
    const user = stmt.get(email) as any;
    if (!user) return null;
    return {
      ...user,
      isVerified: Boolean(user.isVerified),
      isPocketOptionsIdVerified: Boolean(user.isPocketOptionsIdVerified),
      isAdmin: Boolean(user.isAdmin),
    };
  },

  getById: (id: number): User | null => {
    const stmt = db.prepare('SELECT * FROM User WHERE id = ?');
    const user = stmt.get(id) as any;
    if (!user) return null;
    return {
      ...user,
      isVerified: Boolean(user.isVerified),
      isPocketOptionsIdVerified: Boolean(user.isPocketOptionsIdVerified),
      isAdmin: Boolean(user.isAdmin),
    };
  },

  getAll: (): User[] => {
    const stmt = db.prepare('SELECT * FROM User ORDER BY createdAt DESC');
    const users = stmt.all() as any[];
    return users.map(user => ({
      ...user,
      isVerified: Boolean(user.isVerified),
      isPocketOptionsIdVerified: Boolean(user.isPocketOptionsIdVerified),
      isAdmin: Boolean(user.isAdmin),
    }));
  },

  update: (id: number, data: Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>) => {
    const fields: string[] = [];
    const values: any[] = [];

    if (data.email !== undefined) {
      fields.push('email = ?');
      values.push(data.email);
    }
    if (data.password !== undefined) {
      fields.push('password = ?');
      values.push(data.password);
    }
    if (data.pocketOptionsId !== undefined) {
      fields.push('pocketOptionsId = ?');
      values.push(data.pocketOptionsId);
    }
    if (data.isVerified !== undefined) {
      fields.push('isVerified = ?');
      values.push(data.isVerified ? 1 : 0);
    }
    if (data.isPocketOptionsIdVerified !== undefined) {
      fields.push('isPocketOptionsIdVerified = ?');
      values.push(data.isPocketOptionsIdVerified ? 1 : 0);
    }
    if (data.isAdmin !== undefined) {
      fields.push('isAdmin = ?');
      values.push(data.isAdmin ? 1 : 0);
    }

    if (fields.length === 0) {
      return dbUsers.getById(id);
    }

    values.push(id);
    const stmt = db.prepare(`UPDATE User SET ${fields.join(', ')} WHERE id = ?`);
    stmt.run(...values);
    return dbUsers.getById(id);
  },

  delete: (id: number) => {
    const stmt = db.prepare('DELETE FROM User WHERE id = ?');
    stmt.run(id);
  },
};
