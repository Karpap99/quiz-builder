# Quiz Builder

Full-stack Quiz Builder application built with:

- NestJS
- Prisma ORM
- PostgreSQL
- Next.js
- TypeScript

---

# Project Structure

```text
quiz-builder/
├── backend/
├── frontend/
└── README.md
```

---

# Requirements

- Node.js >= 20
- PostgreSQL
- npm

---

# Backend Setup

## Navigate to backend

```bash
cd backend
```

## Install dependencies

```bash
npm install
```

## Configure environment variables

Create `.env` file inside `backend/`

```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/quiz_builder
```

## Run Prisma migrations

```bash
npx prisma migrate dev
```

## Start backend (development)

```bash
npm run start:dev
```

Backend runs on:

```text
http://localhost:3100
```

## Production build

```bash
npm run build
npm run start
```

---

# Frontend Setup

## Navigate to frontend

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Configure environment variables
## Start frontend (development)

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

---

# Prisma Commands

## Generate Prisma Client

```bash
npx prisma generate
```

## Open Prisma Studio

```bash
npx prisma studio
```

---

# API Endpoints

```http
POST   /quizzes
GET    /quizzes
GET    /quizzes/:id
DELETE /quizzes/:id
```

---

# Features

- Create quizzes
- Dynamic question builder
- Multiple question types
- Quiz list page
- Quiz details page
- Delete quizzes

---

# Supported Question Types

- Boolean
- Input
- Checkbox

---

# Notes

- `.env` files are ignored via `.gitignore`
- Prisma ORM is used for database access
- PostgreSQL is required
- Backend uses CORS for frontend communication