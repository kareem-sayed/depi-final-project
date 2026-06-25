# DEPI Backend

Node.js, Express, and MongoDB backend scaffold.

## Getting Started

```bash
npm install
cp .env.example .env
npm run dev
```

The API starts on `http://localhost:5000` by default.

## Structure

```text
src/
  app.js
  server.js
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
