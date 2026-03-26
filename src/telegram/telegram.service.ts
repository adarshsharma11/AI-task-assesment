import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TelegramService {

  async handleUpdate(body: any) {
    const message = body.message;
    if (!message) return;

    const chatId = message.chat.id;

    if (message.text) {
      await this.sendMessage(chatId, "Received: " + message.text);
    }

    return { status: 'ok' };
  }

  async sendMessage(chatId: number, text: string) {
    const BOT_TOKEN = process.env.BOT_TOKEN;

    await axios.post(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        chat_id: chatId,
        text,
      }
    );
  }
}
