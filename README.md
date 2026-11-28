# 💬 VIBE – Social Media Platform

A modern full-stack social networking platform built with Next.js and NestJS, featuring real-time messaging, dynamic activity feeds, social interactions, and instant notifications.

## 🌐 Live Demo

- **Frontend:** [Visit VIBE](https://social-media-full-stack-fzzf.vercel.app/)
- **Backend API:** [API Base URL](https://social-media-full-stack-green.vercel.app/)
- **API Documentation:** [Swagger Docs](https://social-media-full-stack-green.vercel.app/)

## ✨ Key Features

- **Dynamic Activity Feed:** Interactive posts with likes, nested comments, and user interactions.
- **Social Networking:** Follow/unfollow functionality and user relationship management.
- **Responsive Design:** Mobile-friendly interface with a WhatsApp-like messaging experience.
- **Media Uploads:** Image uploading and optimized media handling.

## 🛠️ Technical Stack

- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **Backend:** NestJS
- **Database & ORM:** PostgreSQL, Prisma ORM
- **Deployment:** Vercel

## 📐 Database Architecture & Real-Time Optimization

- Designed self-referential database relationships using Prisma and PostgreSQL to manage followers and following efficiently.
- Implemented event-driven WebSocket communication in NestJS for real-time messaging and user interactions.
- Optimized database queries and real-time communication to improve application responsiveness.

## 💻 Getting Started

1. Clone the repository:
   `git clone https://github.com/Alaa-Fawaz-Manea-AFM/social-media-Full-Stack`

2. Install dependencies in the frontend and backend directories.

3. Configure environment variables in `.env` files.

4. Run database migrations:
   `npx prisma migrate dev`

5. Start the frontend and backend development servers.
