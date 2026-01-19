/**
 * Утиліта для відправки сповіщень в Telegram
 */

export async function sendTelegramNotification(message: string): Promise<boolean> {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Якщо змінні не встановлені, не відправляємо сповіщення
    if (!botToken || !chatId) {
      console.warn('TELEGRAM_BOT_TOKEN або TELEGRAM_CHAT_ID не встановлені в .env');
      return false;
    }

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Telegram API error:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Failed to send Telegram notification:', error);
    return false;
  }
}

/**
 * Відправляє сповіщення про нову реєстрацію
 */
export async function notifyNewRegistration(
  email: string, 
  userId: number, 
  pocketOptionsId?: string | null
): Promise<void> {
  const message = `
🆕 <b>Нова реєстрація</b>

📧 Email: <code>${email}</code>
🆔 ID користувача: <code>${userId}</code>
${pocketOptionsId ? `💼 Pocket Options ID: <code>${pocketOptionsId}</code>` : '💼 Pocket Options ID: <i>не надано</i>'}
⏰ Час: ${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kyiv' })}

Перевірте адмін панель для підтвердження.
  `.trim();

  await sendTelegramNotification(message);
}

/**
 * Відправляє сповіщення про запит на перевірку Pocket Options ID
 */
export async function notifyPocketIdVerificationRequest(
  email: string,
  userId: number,
  pocketOptionsId: string
): Promise<void> {
  const message = `
🔍 <b>Запит на перевірку Pocket Options ID</b>

📧 Email: <code>${email}</code>
🆔 ID користувача: <code>${userId}</code>
💼 Pocket Options ID: <code>${pocketOptionsId}</code>
⏰ Час: ${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kyiv' })}

Перевірте та підтвердіть ID в адмін панелі.
  `.trim();

  await sendTelegramNotification(message);
}
