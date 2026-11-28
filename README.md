# 💬 VIBE – Full-Stack Social Media Platform

A modern and scalable Full-Stack Social Media Platform built with **Next.js** and **NestJS**, designed to provide users with an interactive social networking experience through dynamic posts, user relationships, likes, comments, and media sharing.

## 🌐 Live Demo & Project Links

- **Frontend Application:** [Visit VIBE](https://social-media-full-stack-fzzf.vercel.app/)
- **Backend API:** [Backend Server](https://social-media-full-stack-green.vercel.app/)

## ✨ Key Features

- **📰 Dynamic Activity Feed:** Browse and interact with posts shared by users.
- **👥 Social Networking:** Follow and unfollow users and manage social relationships.
- **❤️ Post Interactions:** Like posts and engage with other users' content.
- **💬 Nested Comments:** Comment on posts and interact through nested discussions.
- **📸 Media Uploads:** Upload and manage images using Cloudinary.
- **👤 User Management:** Manage user profiles and social connections.
- **📱 Responsive Design:** Modern and mobile-friendly interface with a clean and intuitive user experience.

## 🛠️ Technical Stack

### Frontend
- Next.js
- React.js
- TypeScript
- Tailwind CSS v4
- Redux Toolkit
- Shadcn/ui

### Backend
- NestJS
- Node.js
- TypeScript
- RESTful APIs
- Class Validator

### Database & ORM
- PostgreSQL
- Prisma ORM

### Cloud & Media Storage
- Cloudinary

### Deployment & Tools
- Vercel
- Git & GitHub
- Postman

## 📐 Database Architecture

- Designed relational database models using PostgreSQL and Prisma ORM.
- Implemented self-referential database relationships to efficiently manage followers and following.
- Structured database models to support users, posts, comments, likes, and social relationships.

## 🏗️ Project Architecture

The project follows a full-stack architecture, separating the frontend application from the backend API.

### Frontend
- Built with Next.js and TypeScript.
- Uses Redux Toolkit for frontend state management.
- Styled with Tailwind CSS v4.
- Uses Shadcn/ui for reusable interface components.
- Communicates with the backend through RESTful APIs.

### Backend
- Built with NestJS and Node.js.
- Uses a modular backend architecture.
- Provides RESTful APIs to handle posts, comments, likes, users, and social relationships.
- Uses Prisma ORM to interact with PostgreSQL.
- Implements self-referential relationships for follower and following functionality.
- Uses Class Validator for request validation.
- Integrates Cloudinary for cloud-based image uploading and media management.

## 📁 Project Structure

```text
VIBE/
│
├── front_end/
│   ├── src/
│   │   └── app/
│   ├── public/
│   ├── package.json
│   └── .env.local
│
├── back_end/
│   ├── src/
│   ├── prisma/
│   ├── package.json
│   └── .env
│
└── README.md
```

## ⚙️ Environment Configuration

The project consists of two independent applications, each requiring its own environment configuration.

### 1. Frontend Environment

Create a `.env.local` file inside the `front_end` directory:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_API_KEY=
API_URL=
NODE_ENV=development
```

**Environment Variables:**

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `NEXT_PUBLIC_CLOUDINARY_API_KEY` | Public Cloudinary API key |
| `API_URL` | Backend API base URL, used by server-side code |
| `NODE_ENV` | Frontend application environment |

### 2. Backend Environment

Create a `.env` file inside the `back_end` directory:

```env
PORT=
NODE_ENV=development
DATABASE_URL=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
COOKIE_MAX_AGE1=
JWT_SECRET_KEY=
JWT_EXPIRES_IN=
COOKIE_DOMAIN=
```

**Environment Variables:**

| Variable | Description |
|---|---|
| `PORT` | Backend server port |
| `NODE_ENV` | Application environment |
| `DATABASE_URL` | PostgreSQL database connection string |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Private Cloudinary API secret |
| `COOKIE_MAX_AGE1` | Cookie expiration duration in milliseconds |
| `JWT_SECRET_KEY` | Secret key used for JWT authentication |
| `JWT_EXPIRES_IN` | JWT token expiration duration |
| `COOKIE_DOMAIN` | Cookie domain configuration |

**Important Security Notes:**

- Never expose `JWT_SECRET_KEY` or `CLOUDINARY_API_SECRET` in frontend environment variables.
- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser and should never contain private credentials.
- Keep private Cloudinary credentials and JWT secrets exclusively on the backend.
- Ensure `API_URL` is used only in server-side code if it does not have the `NEXT_PUBLIC_` prefix.
- Never commit real `.env` or `.env.local` files to GitHub.

## 💻 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Alaa-Fawaz-Manea-AFM/social-media-Full-Stack.git
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd back_end
npm install
```

Configure your backend `.env` file.

Run Prisma migrations:

```bash
npx prisma migrate dev
```

Generate Prisma Client:

```bash
npx prisma generate
```

Start the backend development server:

```bash
npm run start:dev
```

### 3. Frontend Setup

Open another terminal and navigate to the frontend directory:

```bash
cd front_end
npm install
```

Configure your frontend `.env.local` file.

Start the frontend development server:

```bash
npm run dev
```

### 4. Access the Application

Open the frontend application:

```text
http://localhost:3000
```

The backend runs on the configured server port.

## 🔒 Security

- Implemented JWT-based authentication for secure user access.
- Kept JWT secrets and private Cloudinary credentials exclusively on the backend.
- Separated frontend and backend environment configurations.
- Used environment variables to manage sensitive application credentials.
- Configured CORS and cookie security according to the deployed frontend and backend domains.
- Avoided exposing private credentials through public frontend environment variables.

## 🚀 Deployment

The project is deployed using **Vercel**.

- **Frontend Application:** Vercel.
- **Backend API:** Vercel.

Make sure to configure the required environment variables in the deployment settings for both applications.

## 👨‍💻 Author

**Alaa Fawaz Manea**

- **GitHub:** [Alaa-Fawaz-Manea-AFM](https://github.com/Alaa-Fawaz-Manea-AFM)
- **LinkedIn:** [Alaa Fawaz Manea](https://linkedin.com/in/alaa-fawaz-manea/)

---

**VIBE – A Full-Stack Social Media Platform built with Next.js, NestJS, PostgreSQL, Prisma, and Cloudinary.**
