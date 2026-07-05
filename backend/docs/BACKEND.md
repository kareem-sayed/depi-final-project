# Prophets Stories Platform — Backend Documentation

> **Version:** 1.0.0 | **Environment:** Node.js + TypeScript | **Database:** MongoDB
>
> Production-grade REST API for an educational Islamic web application covering the 25 Prophets of Islam.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Problem Statement](#2-problem-statement)
3. [Features](#3-features)
4. [Tech Stack](#4-tech-stack)
5. [Architecture Design](#5-architecture-design)
6. [Folder Structure](#6-folder-structure)
7. [Database Design](#7-database-design)
8. [API Overview](#8-api-overview)
9. [Authentication Flow](#9-authentication-flow)
10. [Module Responsibilities](#10-module-responsibilities)
11. [Middleware Explanation](#11-middleware-explanation)
12. [Validation Strategy](#12-validation-strategy)
13. [Error Handling Strategy](#13-error-handling-strategy)
14. [Security Practices](#14-security-practices)
15. [Scalability Considerations](#15-scalability-considerations)
16. [Deployment Recommendations](#16-deployment-recommendations)
17. [Future Improvements](#17-future-improvements)
18. [Setup & Installation](#18-setup--installation)

---

## 1. Project Overview

The **Prophets Stories Platform** is a full-stack educational Islamic web application designed to help users learn about the 25 Prophets of Islam through an engaging, gamified reading experience.

The backend is a **production-grade REST API** built with Node.js, Express.js, and TypeScript in **strict mode**, following a **Feature-Based Modular Architecture** pattern. It provides all the data and business logic needed for the frontend to deliver a rich, interactive learning experience.

**API Base URL:** `http://localhost:5000/api`
**Interactive API Docs:** `http://localhost:5000/api/docs` *(development only)*

---

## 2. Problem Statement

Traditional Islamic educational content is often:
- Static and unengaging — plain text or PDF formats with no interactivity
- Fragmented across multiple sources with inconsistent quality
- Lacking personalization — no progress tracking, no feedback loops
- Not gamified — nothing to motivate continued learning

**This platform solves these problems by:**
- Delivering structured, bilingual (Arabic/English) content about all 25 Prophets
- Enabling chapter-by-chapter reading with progress persistence
- Testing knowledge through server-graded quizzes
- Rewarding engagement through an achievement and streak system
- Providing a personal dashboard with learning analytics

---

## 3. Features

### Core Content
| Feature | Description |
|---|---|
| Prophet Catalog | Browse all 25 Prophets in chronological order |
| Story Reader | Read prophet stories chapter by chapter |
| Bilingual Content | Full Arabic and English support via LangText schema |
| Quiz Engine | Multiple-choice quizzes per prophet, graded server-side |

### User Engagement
| Feature | Description |
|---|---|
| Progress Tracking | Per-prophet reading progress with completion state |
| Bookmarks | Save and organize favorite stories |
| Achievement System | 8 badge types awarded automatically on milestones |
| Dashboard | Personal analytics: completion rate, quiz pass rate, streaks |

### Administration
| Feature | Description |
|---|---|
| User Management | Admin can list, view, promote, demote, and delete users |
| Cascade Delete | Deleting a user removes all associated data atomically |
| Platform Stats | Platform-wide aggregations for admins |
| Role-Based Access | Dual-role system: user / admin |

---

## 4. Tech Stack

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| Runtime | Node.js | >= 20 | JavaScript runtime |
| Framework | Express.js | ^5 | HTTP server and routing |
| Language | TypeScript | ^5 (strict) | Type safety across the codebase |
| Database | MongoDB | >= 7 | Document-oriented persistence |
| ODM | Mongoose | ^8 | Schema definition and query builder |
| Authentication | JSON Web Tokens (JWT) | — | Stateless auth token issuance and verification |
| Validation | Zod | ^3 | Runtime schema validation with full TypeScript inference |
| Password Hashing | bcryptjs | ^3 | Secure password hashing with salt rounds |
| Security | Helmet | — | HTTP security headers |
| CORS | cors | — | Cross-Origin Resource Sharing |
| Logging | Morgan | — | HTTP request logging |
| API Docs | swagger-jsdoc + swagger-ui-express | — | Interactive OpenAPI 3.0 documentation |

---

## 5. Architecture Design

### Pattern: Feature-Based Modular Architecture

This project deliberately avoids traditional MVC. Instead, **each feature (module) owns its entire vertical slice** of the application: model, service, controller, and routes. This makes the codebase independently scalable.

### Request Lifecycle

```
+------------------------------------------------------------------+
|                         CLIENT REQUEST                           |
+------------------------------------------------------------------+
                            |
                            v HTTP Request
+------------------------------------------------------------------+
|                    Express.js Application                        |
|                                                                  |
|   Global Middleware Chain                                        |
|   helmet() -> cors() -> express.json() -> morgan()               |
|                            |                                     |
|                            v                                     |
|   routes/index.ts (Centralized route mounting)                   |
|                            |                                     |
|                            v                                     |
|   Route-Level Middleware                                         |
|   protect (JWT verify) -> authorize (role) -> validateRequest    |
|                            |                                     |
|                            v                                     |
|   Controller (parse req -> call service -> send response)        |
|                            |                                     |
|                            v                                     |
|   Service (business logic, error throwing)                       |
|                            |                                     |
|                            v                                     |
|   Mongoose Model (schema, indexes, instance methods)             |
|                            |                                     |
+----------------------------+-------------------------------------+
                             | Mongoose Query
                             v
               +---------------------------+
               |          MongoDB          |
               +---------------------------+
```

### Layer Responsibilities

```
Route       ->  Declares HTTP verb + path + middleware chain
Controller  ->  Extracts request data, calls service, sends response
Service     ->  Contains all business logic and data access
Model       ->  Mongoose schema, indexes, virtuals, instance methods
```

> **Rule:** Controllers never contain business condition logic.
> **Rule:** Services never touch req or res objects.

---

## 6. Folder Structure

```
backend/
└── src/
    ├── config/
    │   ├── env.ts                     # Zod-validated environment variables
    │   └── swagger.ts                 # OpenAPI 3.0 specification
    │
    ├── middleware/
    │   ├── asyncHandler.ts            # Wraps async controllers
    │   ├── errorHandler.ts            # Global error handler
    │   ├── notFound.ts                # 404 catch-all
    │   ├── auth.middleware.ts         # JWT verification
    │   ├── authorize.middleware.ts    # Role-based access control
    │   └── validate.middleware.ts     # Zod schema validation
    │
    ├── modules/
    │   ├── auth/                      # Registration + login
    │   ├── users/                     # User model
    │   ├── prophets/                  # Prophet catalog
    │   ├── stories/                   # Story content + chapters
    │   ├── quizzes/                   # Quiz questions
    │   ├── quizresult/                # Quiz submission + grading
    │   ├── progress/                  # Reading progress
    │   ├── bookmarks/                 # Story bookmarks
    │   ├── achievements/              # Gamification badges
    │   └── dashboard/                 # Stats + admin tools
    │
    ├── routes/
    │   └── index.ts                   # Centralized route registry
    │
    ├── shared/
    │   ├── schemas/                   # Zod validation schemas
    │   ├── types/                     # Shared TypeScript types
    │   └── utils/
    │       ├── apiResponse.ts         # sendSuccess() / sendCreated()
    │       └── jwt.ts                 # generateToken()
    │
    ├── app.ts                         # Express app factory
    └── server.ts                      # HTTP server + DB bootstrap
```

Each module follows this internal structure:
```
module/
├── module.model.ts       # Mongoose schema and interface
├── module.service.ts     # Business logic
├── module.controller.ts  # Request/response handling
└── module.routes.ts      # Route definitions + middleware chain
```

---

## 7. Database Design

### Collections and Schemas

#### users
```
_id        : ObjectId
name       : String     (required, trimmed)
email      : String     (required, unique, lowercase)
password   : String     (select: false, bcrypt hashed)
role       : "user" | "admin"   (default: "user")
createdAt  : Date
updatedAt  : Date
```

#### prophets
```
_id        : ObjectId
slug       : String     (unique, indexed)
name       : LangText { ar, en }
order      : Number     (chronological order, unique)
summary    : LangText
coverImage : String
createdAt  : Date
```

#### stories
```
_id        : ObjectId
slug       : String     (unique, indexed)
prophet    : ObjectId   -> prophets
title      : LangText
summary    : LangText
coverImage : String
readTime   : Number     (minutes)
chapters   : [{
  chapterNumber : Number
  title         : LangText
  content       : LangText
}]
createdAt  : Date
```

#### quizzes
```
_id        : ObjectId
prophetId  : ObjectId   -> prophets (indexed)
slug       : String     (unique, indexed)
questions  : [{
  question      : LangText
  options       : [LangText]    (min 2)
  correctAnswer : Number        (index into options[])
  explanation   : LangText
}]
createdAt  : Date
```

#### quizresults
```
_id            : ObjectId
userId         : ObjectId -> users (indexed)
quizId         : ObjectId -> quizzes (indexed)
score          : Number   (0-100, percentage)
totalQuestions : Number
correctAnswers : Number
passed         : Boolean  (score >= 60%)
answers        : [{
  questionIndex  : Number
  selectedAnswer : Number
  correctAnswer  : Number
  isCorrect      : Boolean
}]
createdAt      : Date
```

#### progress
```
_id            : ObjectId
userId         : ObjectId -> users (indexed)
prophetSlug    : String
currentChapter : Number (default: 1)
completed      : Boolean (default: false)
lastReadAt     : Date
createdAt      : Date
```

#### bookmarks
```
_id       : ObjectId
userId    : ObjectId -> users   (indexed)
storyId   : ObjectId -> stories
createdAt : Date

Compound unique index: { userId: 1, storyId: 1 }
```

#### achievements
```
_id         : ObjectId
userId      : ObjectId -> users (indexed)
type        : Enum (8 values — see Achievement Types below)
title       : String
description : String
icon        : String (emoji)
earnedAt    : Date

Compound unique index: { userId: 1, type: 1 }
```

### Achievement Types
| Type | Title | Trigger |
|---|---|---|
| first_story | First Steps | Complete 1 story |
| story_streak_5 | Avid Reader | Complete 5 stories |
| story_streak_10 | Scholar | Complete 10 stories |
| quiz_passed | Quiz Taker | Pass 1 quiz |
| quiz_perfect | Perfectionist | Score 100% on a quiz |
| quiz_streak_5 | Quiz Champion | Pass 5 quizzes |
| first_bookmark | Bookworm | Add 1 bookmark |
| prophet_complete | Deep Dive | Complete all stories for a prophet |

### Index Strategy

| Collection | Index | Type | Purpose |
|---|---|---|---|
| users | email | unique | Login lookup |
| prophets | slug | unique | URL-based fetch |
| prophets | order | unique | Chronological sort |
| stories | slug | unique | URL-based fetch |
| quizzes | slug | unique | URL-based fetch |
| quizzes | prophetId | normal | Fetch by prophet |
| quizresults | userId | normal | User history |
| quizresults | quizId | normal | Quiz stats |
| progress | userId | normal | User progress |
| bookmarks | userId | normal | List queries |
| bookmarks | {userId, storyId} | compound unique | Deduplication |
| achievements | userId | normal | List queries |
| achievements | {userId, type} | compound unique | Deduplication |

---

## 8. API Overview

### Route Groups

| Prefix | Auth Required | Role | Module |
|---|---|---|---|
| /api/auth | No | — | Authentication |
| /api/prophets | No | — | Prophet catalog |
| /api/stories | No | — | Story content |
| /api/quizzes | No | — | Quiz questions |
| /api/quiz-results | Yes | user | Quiz submission |
| /api/progress | Yes | user | Reading progress |
| /api/bookmarks | Yes | user | Saved stories |
| /api/achievements | Yes | user | Gamification |
| /api/dashboard | Yes | user | Personal stats |
| /api/admin | Yes | admin | Platform management |

### Standard Response Envelope

```json
// Success
{
  "success": true,
  "message": "Human-readable message",
  "data": { ... }
}

// Error
{
  "success": false,
  "message": "Error description"
}

// Validation Error
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    { "path": ["body", "email"], "message": "Invalid email format" }
  ]
}
```

### Complete Endpoint Reference

#### Auth
| Method | Path | Description |
|---|---|---|
| POST | /auth/register | Create account, returns user + JWT |
| POST | /auth/login | Authenticate, returns user + JWT |

#### Prophets
| Method | Path | Description |
|---|---|---|
| GET | /prophets | List all prophets (paginated) |
| GET | /prophets/:slug | Get prophet by slug |

#### Stories
| Method | Path | Description |
|---|---|---|
| GET | /stories/:slug | Story overview + chapter list |
| GET | /stories/:slug/chapter/:chapterNumber | Read a single chapter |

#### Quizzes
| Method | Path | Description |
|---|---|---|
| GET | /quizzes/:slug | Get quiz questions (answers excluded) |

#### Quiz Results (Protected)
| Method | Path | Description |
|---|---|---|
| POST | /quiz-results | Submit answers, server grades |
| GET | /quiz-results | My results history (paginated) |
| GET | /quiz-results/best/:quizId | My best score for a quiz |
| GET | /quiz-results/:resultId | Get single result detail |

#### Progress (Protected)
| Method | Path | Description |
|---|---|---|
| GET | /progress | All my progress records |
| POST | /progress/save | Upsert progress for a prophet |

#### Bookmarks (Protected)
| Method | Path | Description |
|---|---|---|
| GET | /bookmarks | My bookmarks (paginated) |
| POST | /bookmarks/:storyId | Add bookmark |
| GET | /bookmarks/:storyId/check | Check if story is bookmarked |
| DELETE | /bookmarks/:storyId | Remove bookmark |

#### Achievements (Protected)
| Method | Path | Description |
|---|---|---|
| GET | /achievements | My earned achievements + summary |
| POST | /achievements/check | Trigger achievement evaluation |

#### Dashboard (Protected)
| Method | Path | Description |
|---|---|---|
| GET | /dashboard | Aggregated personal stats |

#### Admin (Protected — Admin Only)
| Method | Path | Description |
|---|---|---|
| GET | /admin/stats | Platform-wide statistics |
| GET | /admin/users | All users (paginated, filterable) |
| GET | /admin/users/:userId | Single user detail |
| PATCH | /admin/users/:userId/role | Change user role |
| DELETE | /admin/users/:userId | Delete user + cascade all data |

---

## 9. Authentication Flow

### Registration Flow
```
Client                       Server                      MongoDB
  |                             |                            |
  |-- POST /auth/register ----->|                            |
  |   { name, email, password } |                            |
  |                             |-- findOne({ email }) ----->|
  |                             |<-- null (not exists) -------|
  |                             |-- User.create({...}) ----->|
  |                             |   pre-save: bcrypt hash    |
  |                             |<-- user document ----------|
  |                             |-- generateToken(id, role)  |
  |<-- 201 { user, token } -----|                            |
```

### Login Flow
```
Client                       Server                      MongoDB
  |                             |                            |
  |-- POST /auth/login -------->|                            |
  |   { email, password }       |                            |
  |                             |-- findOne({ email })       |
  |                             |   .select('+password') --->|
  |                             |<-- user (with hash) -------|
  |                             |-- bcrypt.compare(pw, hash) |
  |                             |-- generateToken(id, role)  |
  |<-- 200 { user, token } -----|                            |
```

### Protected Route Flow
```
Client                     protect middleware           MongoDB
  |                             |                            |
  |-- GET /progress ----------->|                            |
  |   Authorization: Bearer JWT |                            |
  |                             |-- jwt.verify(token)        |
  |                             |-- User.findById(id) ------>|
  |                             |<-- user document ----------|
  |                             |-- req.user = user          |
  |                             |-- next()                   |
  |                             |       v                    |
  |                             |   Controller / Service     |
  |<-- 200 { success, data } ---|                            |
```

### JWT Token Structure
```
Header:  { "alg": "HS256", "typ": "JWT" }
Payload: { "userId": "...", "role": "user", "iat": 000, "exp": 000 }
```

---

## 10. Module Responsibilities

### auth
Handles registration and login. Delegates to the User model. Responsible for JWT generation and password comparison via bcryptjs.

### users
Owns the User Mongoose model. Defines IUser interface, UserRole type, and comparePassword instance method. Password field has select: false for security.

### prophets
CRUD for the prophet catalog. Slugs are the primary public-facing identifier. All content is bilingual via LangText.

### stories
Manages story documents with embedded chapters. Exposes a metadata overview endpoint and individual chapter content endpoint. Chapter data is served on demand to minimize payload size.

### quizzes
Serves quiz questions to the client. **Correct answers are never exposed in the quiz fetch response.** Grading is always server-side via the quizresult module.

### quizresult
Receives submitted answer arrays, fetches the actual quiz from MongoDB, grades each answer, computes score percentage, determines pass/fail (60% threshold), and persists the full result with per-question breakdown.

### progress
Tracks reading as an upsert on { userId, prophetSlug }. Records currentChapter, completed state, and lastReadAt timestamp.

### bookmarks
Links a user to a story. Uses a compound unique index enforced at the MongoDB level. Duplicate bookmark attempts return a clean 409 Conflict.

### achievements
An idempotent award system. The checkAndAwardAchievements function queries aggregate stats across progress, quizresult, and bookmarks collections, then calls Achievement.create() for each milestone met. Duplicate awards are silently swallowed via MongoDB's 11000 error code.

### dashboard
Read-only aggregation module. Uses Promise.all to run all stat queries in parallel. Returns a single comprehensive payload covering progress, quizzes, bookmarks, and achievements.

### dashboard (admin sub-module)
Admin-only operations: user CRUD, role management, cascade deletes, and platform stats. Every endpoint is double-protected with protect + authorize('admin').

---

## 11. Middleware Explanation

### asyncHandler.ts
```
Purpose: Eliminates try/catch boilerplate from controllers.
Pattern: Wraps any async function, routes all rejections to next(error).
Usage:   router.get('/path', asyncHandler(controller.method))
```

### auth.middleware.ts — protect
```
Purpose: Authenticates requests via JWT.
Steps:
  1. Extract token from Authorization: Bearer <token>
  2. Verify signature and expiry via jwt.verify()
  3. Fetch user from DB (validates user still exists)
  4. Attach user to req.user
  5. Call next() — or return 401 on any failure
```

### authorize.middleware.ts — authorize(...roles)
```
Purpose: Role-based access control (RBAC).
Usage:   router.delete('/users/:id', protect, authorize('admin'), controller)
Checks:  req.user.role is in the allowed roles array.
Errors:  401 if no user on request, 403 if role not permitted.
```

### validate.middleware.ts — validateRequest(schema)
```
Purpose: Runtime request validation using Zod schemas.
Validates: { body, query, params } together in one schema call.
On success: calls next()
On failure: returns 400 with structured Zod issues array.
```

### errorHandler.ts
```
Purpose: Centralized error formatting.
Reads:   error.statusCode (custom) or defaults to 500.
Returns: { success: false, message: error.message }
```

### notFound.ts
```
Purpose: Catch-all for any route not matched by the router.
Returns: 404 { success: false, message: 'Route not found' }
```

---

## 12. Validation Strategy

**Runtime Validator:** Zod — chosen for full TypeScript type inference.

### Schema Pattern
```ts
// shared/schemas/example.schema.ts
const schema = z.object({
  body: z.object({
    field: z.string().min(1),
  }),
});
```

### Applying Validation to Routes
```ts
import { validateRequest } from '../../middleware/validate.middleware.js';
import { mySchema } from '../../shared/schemas/example.schema.js';

router.post('/', validateRequest(mySchema), asyncHandler(controller));
```

### Validated Fields Per Module

| Module | Validated Fields |
|---|---|
| Auth | name, email (regex), password (complexity regex) |
| Progress | prophetSlug, currentChapter (int >= 1), completed |
| Quiz Results | quizId (ObjectId regex), answers (int array) |
| Admin | role (enum: user or admin) |

---

## 13. Error Handling Strategy

### Throwing Errors in Services
```ts
const error = new Error('Resource not found') as Error & { statusCode: number };
error.statusCode = 404;
throw error;
```

### HTTP Status Code Convention

| Code | Meaning | When Used |
|---|---|---|
| 200 | OK | Successful GET / PUT / PATCH / DELETE |
| 201 | Created | Successful POST creating a resource |
| 400 | Bad Request | Validation failure |
| 401 | Unauthorized | Missing or invalid JWT token |
| 403 | Forbidden | Valid token, insufficient role |
| 404 | Not Found | Resource does not exist |
| 409 | Conflict | Duplicate resource (bookmark, achievement, email) |
| 500 | Server Error | Unhandled exception |

---

## 14. Security Practices

| Practice | Implementation |
|---|---|
| Password Hashing | bcryptjs with 12 salt rounds via Mongoose pre-save hook |
| Password Exclusion | select: false on the password field in User schema |
| Stateless Auth | JWT tokens — no server-side session storage |
| Secret Management | JWT secret loaded from env variables, never hardcoded |
| HTTP Headers | helmet() sets CSP, X-Frame-Options, HSTS, etc. |
| CORS | Restricted to known client origin via env.clientUrl |
| Input Validation | All mutation endpoints validated with Zod before business logic |
| RBAC | Admin routes double-protected: protect + authorize('admin') |
| Self-Delete Guard | Admin cannot delete their own account |
| Score Integrity | Quiz answers graded server-side — clients cannot submit fake scores |
| Ownership Checks | Quiz results fetched by ID verify userId matches authenticated user |
| MongoDB Injection | Mongoose ODM parameterizes all queries |

---

## 15. Scalability Considerations

### Design Choices That Aid Scale

**1. Stateless Authentication**
JWT requires no shared session store. Multiple Node.js instances can handle requests without session affinity.

**2. Parallel Database Queries**
Dashboard and admin stats use Promise.all() to run all MongoDB aggregations concurrently.

**3. Lean Queries**
Read-only endpoints use .lean() to return plain JS objects, reducing memory overhead.

**4. MongoDB Indexing**
Compound indexes on { userId, storyId } and { userId, type } enforce uniqueness and enable O(log n) lookups.

**5. Pagination**
All list endpoints have server-side bound limits to prevent unbounded queries.

**6. Modular Architecture**
Feature-based modules are independently deployable and can be extracted into microservices.

### Scale Architecture

```
Current (Single Server)
  Node.js -> MongoDB Atlas (single cluster)

Medium Scale
  Node.js (PM2 cluster, N workers)
  -> MongoDB Atlas M10+ (replica set)
  -> Redis (caching hot content)

High Scale
  Load Balancer (AWS ALB / Nginx)
  -> Node.js containers (Docker + Kubernetes)
  -> MongoDB Atlas M30+ (sharded cluster)
  -> Redis Cluster (distributed cache)
  -> CDN (CloudFront for static assets)
```

---

## 16. Deployment Recommendations

### Environment Variables
```bash
NODE_ENV=production
PORT=5000
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/prophets
JWT_SECRET=your-256-bit-random-secret-here
JWT_EXPIRES_IN=24h
CLIENT_URL=https://prophets-stories.com
```

### Docker Setup
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS production
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 5000
CMD ["node", "dist/server.js"]
```

### Production Checklist
- [ ] NODE_ENV=production (disables Swagger UI)
- [ ] Strong JWT_SECRET (minimum 256-bit random string)
- [ ] MongoDB Atlas IP whitelist configured
- [ ] HTTPS enforced (TLS at load balancer)
- [ ] Rate limiting enabled (express-rate-limit)
- [ ] PM2 or container orchestration for process management
- [ ] Structured logging replacing Morgan
- [ ] Health check endpoint implemented (GET /api/health)

---

## 17. Future Improvements

### Short-Term
| Improvement | Priority |
|---|---|
| Health check endpoint | High |
| Rate limiting per IP / per user | High |
| Refresh token rotation | High |
| Winston structured logging | Medium |
| Unit + integration tests (Vitest + Supertest) | Medium |

### Medium-Term
| Improvement | Priority |
|---|---|
| Redis caching for prophet/story data | Medium |
| Streak system (daily login tracking) | Medium |
| Points/XP system | Medium |
| Email verification on registration | Medium |
| Password reset via email | Medium |
| Admin content management (CRUD prophets/stories/quizzes) | Medium |

### Long-Term
| Improvement | Priority |
|---|---|
| WebSocket (real-time achievement notifications) | Low |
| CDN integration for media assets | Low |
| Elasticsearch for full-text story search | Low |
| Microservices extraction | Low |

---

## 18. Setup & Installation

### Prerequisites
- Node.js >= 20
- MongoDB >= 7 (local) or MongoDB Atlas account
- npm >= 10

### Local Development

```bash
# 1. Install dependencies
npm install

# 2. Install Swagger dependencies
npm install swagger-jsdoc swagger-ui-express
npm install -D @types/swagger-jsdoc @types/swagger-ui-express

# 3. Configure environment
cp .env.example .env

# 4. Run development server
npm run dev

# 5. Access API Documentation
# http://localhost:5000/api/docs
```

### Available Scripts

```bash
npm run dev        # Start with hot reload
npm run build      # Compile TypeScript to dist/
npm run start      # Run compiled production build
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

---

*Prophets Stories Platform — Backend v1.0.0*
*Architecture: Feature-Based Modular | Flow: Route -> Controller -> Service -> Model*
