# VideoCallApp

A React + Vite video call project using Zego Cloud and Tailwind CSS.

## Overview

VideoCallApp is designed for Vercel deployment with server-side token generation and secure environment handling.

## Getting Started

1. Copy `.env.example` to `.env.local`
2. Add your Zego values
3. Run:

```bash
cd VideoCallApp
npm install
npm run dev
```

## Vercel Deployment

Set the project root to `VideoCallApp` in Vercel.

Add these environment variables in Vercel:

- `ZEGO_APP_ID`
- `ZEGO_SERVER_SECRET`

The app uses `/api/token` to generate Zego kit tokens securely on the server side.

## Build

```bash
cd VideoCallApp
npm run build
```

## Notes

- Do not commit the actual `ZEGO_SERVER_SECRET`
- Use `.env.local` for local development only
- The `/api/token` route keeps the secret off the client
