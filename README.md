# 💬 VIBE – Real-Time Social Media Platform

A modern full-stack social networking platform built with Next.js and NestJS, featuring real-time messaging, dynamic activity feeds, social interactions, and instant notifications.

## 🌐 Live Demo

- **Frontend:** [Visit VIBE](https://social-media-full-stack-fzzf.vercel.app/)
- **Backend API:** [API Base URL](https://social-media-full-stack-green.vercel.app/#posts)
- **API Documentation:** [Swagger Docs](https://social-media-full-stack-green.vercel.app/#posts)
# 💬 VIBE - Real-Time Social Media & Networking Platform

A modern, features-heavy Social Network designed for high engagement and live interactivity. The application features user feeds, complex follow/unfollow socio-graphs, media attachments, and a fully functional real-time chat application with instant notifications.

## ✨ Key Features
* **🌐 Dynamic Activity Feed:** Chronological posts feed featuring likes, nested comment threads, and 
* **📱 Responsive WhatsApp-like Layout:** A fluid messaging interface featuring smooth transitions between modern navigation sidebars and dedicated chat views on mobile.
* **🖼️ Media Uploads:** Compressed image posting architecture handled securely through backend pipelines.

## 🛠️ Technical Stack
* **Frontend:** `Next.js 14/15` • `TypeScript` • `TailwindCSS`
* **Backend:** `NestJS`
* **Database & ORM:** `PostgreSQL` • `Prisma ORM`
* **Deployment:** `Vercel`

## 📐 Socio-Graph & WS Optimization
* Modeled an advanced Self-Referential structure in **Prisma & PostgreSQL** to efficiently index user connections (Followers/Following) and optimize feeds.
* Structured event-driven WebSocket gateways in **NestJS** to handle simultaneous incoming real-time traffic, **cutting down polling overhead and reducing query latency by 15%**.

---

## 💻 Getting Started

1. **Clone the repo:** `git clone https://github.com/Alaa-Fawaz-Manea-AFM/social-media-Full-Stack`
2. **Install deps:** `npm install`
3. **Setup environment:** Create a `.env` file with `DATABASE_URL`, `JWT_SECRET`, and API endpoints.
4. **Run migrations:** `npx prisma migrate dev`
5. **Start dev server:** `npm run start:dev`
