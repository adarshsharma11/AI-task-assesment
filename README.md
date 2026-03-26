# Voice Task Assistant (NestJS + Telegram + Whisper)

## Features
- Telegram Bot Webhook
- Voice to Text (Whisper)
- Task Creation (basic)
- Auto Reply

## Setup

1. Install dependencies:
npm install

2. Run server:
npm run start

## Environment Variables
BOT_TOKEN=your_telegram_bot_token
OPENAI_API_KEY=your_openai_api_key

## Webhook Setup
https://api.telegram.org/bot<BOT_TOKEN>/setWebhook?url=https://your-domain/telegram/webhook

## Endpoint
POST /telegram/webhook

## Flow
Voice → Telegram → Backend → Whisper → Task

## Next Steps
- Add MySQL
- Add BullMQ
- Add Reminder System
# AI-task-assesment
