# 💬 VIBE – Full-Stack Social Media Platform

A modern Full-Stack Social Media Platform built with Next.js and NestJS, designed to provide users with an interactive social networking experience through dynamic posts, user relationships, likes, comments, and media sharing.

## 🌐 Live Demo & Project Links

- **Frontend Application:** [Visit VIBE](https://social-media-full-stack-fzzf.vercel.app/)
- **Backend API:** [Backend Server](https://social-media-full-stack-green.vercel.app/)
- **API Documentation:** [Swagger Documentation](https://social-media-full-stack-green.vercel.app/)

## ✨ Key Features

- **📰 Dynamic Activity Feed:** Browse and interact with posts shared by users.
- **👥 Social Networking:** Follow and unfollow users and manage social relationships.
- **❤️ Post Interactions:** Like posts and engage with other users' content.
- **💬 Nested Comments:** Comment on posts and interact through nested discussions.
- **📸 Media Uploads:** Upload and manage images using Cloudinary.
- **👤 User Management:** Manage user profiles and social connections.
- **📱 Responsive Design:** Mobile-friendly interface with a clean and intuitive user experience.

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

## 🏗️ Architecture & Engineering

- Developed a modular backend architecture using NestJS.
- Designed relational database models using Prisma and PostgreSQL.
- Implemented self-referential database relationships to manage followers and following.
- Built RESTful APIs to handle posts, comments, likes, users, and social relationships.
- Integrated Cloudinary for cloud-based image uploading and media management.
- Used Redux Toolkit for frontend state management.
- Separated frontend and backend applications for independent development and deployment.

## ⚙️ Environment Configuration

The project consists of two separate applications, each requiring its own environment configuration.

### 1. Backend Environment

Create a `.env` file inside the backend directory.

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
- `PORT`: Backend server port.
- `NODE_ENV`: Application environment.
- `DATABASE_URL`: PostgreSQL database connection string.
- `CLOUDINARY_CLOUD_NAME`: Cloudinary cloud name.
- `CLOUDINARY_API_KEY`: Cloudinary API key.
- `CLOUDINARY_API_SECRET`: Private Cloudinary API secret.
- `COOKIE_MAX_AGE1`: Cookie expiration duration in milliseconds.
- `JWT_SECRET_KEY`: Secret key used for JWT authentication.
- `JWT_EXPIRES_IN`: JWT expiration duration.
- `COOKIE_DOMAIN`: Cookie domain configuration.

### 2. Frontend Environment

Create a `.env.local` file inside the frontend directory.

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_API_KEY=

API_URL=
NODE_ENV=development
```

**Environment Variables:**
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`: Cloudinary cloud name.
- `NEXT_PUBLIC_CLOUDINARY_API_KEY`: Public Cloudinary API key.
- `API_URL`: Backend API base URL.
- `NODE_ENV`: Frontend application environment.

## 💻 Getting Started

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

Run database migrations:

```bash
npx prisma migrate dev
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

- Keep JWT secrets and Cloudinary API secrets exclusively on the backend.
- Never expose private credentials through `NEXT_PUBLIC_` environment variables.
- Keep `.env` and `.env.local` files out of public repositories.
- Use environment variables to manage production credentials.
- Configure CORS and cookie security according to the deployed frontend and backend domains.

---

**VIBE – A Full-Stack Social Media Platform built with Next.js, NestJS, PostgreSQL, Prisma, and Cloudinary.**
