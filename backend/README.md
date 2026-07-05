# DEPI Backend

TypeScript, Node.js, Express, and MongoDB backend scaffold.

## Getting Started

```bash
npm install
cp .env.example .env
npm run dev
```

The API starts on `http://localhost:5000` by default.

Build and run the compiled API:

```bash
npm run build
npm start
```

## Structure

```text
src/
  app.ts
  server.ts
  config/
  controllers/
  middleware/
  models/
  routes/
  utils/
```

## Endpoints

- `GET /api/health` checks whether the API is running.
- `GET /api/users` lists users.
- `POST /api/users` creates a user.
