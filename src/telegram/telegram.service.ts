import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as fs from 'fs';
import { TasksService } from '../tasks/tasks.service';

@Injectable()
export class TelegramService {
  constructor(private tasksService: TasksService) {}

  async handleUpdate(body: any) {
    const message = body.message;
    if (!message) return;

    const chatId = message.chat.id;

    //  TEXT MESSAGE (working already)
    if (message.text) {
      await this.sendMessage(chatId, "Received: " + message.text);
      return;
    }

    //  VOICE MESSAGE START
    if (message.voice) {
      await this.sendMessage(chatId, "Voice received, processing...");

      const fileId = message.voice.file_id;

      // STEP 1: get file path
      const fileRes = await axios.get(
        `https://api.telegram.org/bot${process.env.BOT_TOKEN}/getFile?file_id=${fileId}`
      );

      const filePath = fileRes.data.result.file_path;

      //  STEP 2: download file
      const fileUrl = `https://api.telegram.org/file/bot${process.env.BOT_TOKEN}/${filePath}`;

      const response = await axios({
        url: fileUrl,
        method: "GET",
        responseType: "stream",
      });

      const fileName = `voice_${Date.now()}.ogg`;
      const writer = fs.createWriteStream(fileName);

      response.data.pipe(writer);

      await new Promise((resolve) => writer.on("finish", resolve));

      console.log("Voice downloaded:", fileName);

      //  TEMP TEXT 
      const text = "Test task from voice";

      //  STEP 3: CREATE TASK
      const task = await this.tasksService.createTask(text, chatId);

      // STEP 4: CONFIRMATION
      await this.sendMessage(chatId, `Task created: ${task.title}`);
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