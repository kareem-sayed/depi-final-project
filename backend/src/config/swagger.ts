// ─── OpenAPI 3.0 Specification ────────────────────────────────────────────────
const port = Number(process.env.PORT) || 3001;
const swaggerDefinition = {
  openapi: '3.0.3',
  info: {
    title: 'Prophets Stories Platform — API',
    version: '1.0.0',
    description: `
## Overview
REST API for the **Prophets Stories Platform** — an educational Islamic web application
covering the 25 Prophets of Islam.

Users can explore prophets, read stories chapter-by-chapter, attempt quizzes,
track reading progress, save bookmarks, and earn achievements.

## Authentication
All protected routes require a **JWT Bearer token** obtained via \`POST /auth/login\`.

Attach the token to every protected request:
\`\`\`
Authorization: Bearer <token>
\`\`\`
    `,
    contact: {
      name: 'Backend Team — Prophets Stories Platform',
    },
    license: {
      name: 'MIT',
    },
  },
  servers: [
    {
      url: `http://localhost:${port}/api`,
      description: 'Local Development Server',
    },
    {
      url: 'https://api.prophets-stories.com/api',
      description: 'Production Server',
    },
  ],

  // ─── Security Scheme ────────────────────────────────────────────────────────
  components: {
    securitySchemes: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Enter your JWT token (without the "Bearer " prefix).',
      },
    },

    // ─── Reusable Schemas ──────────────────────────────────────────────────────
    schemas: {
      // ── Primitives ──────────────────────────────────────────────────────────
      LangText: {
        type: 'object',
        required: ['ar', 'en'],
        properties: {
          ar: { type: 'string', example: 'نوح عليه السلام' },
          en: { type: 'string', example: 'Prophet Noah' },
        },
      },
      ObjectId: {
        type: 'string',
        pattern: '^[a-f\\d]{24}$',
        example: '64f8a1b2c3d4e5f6a7b8c9d0',
      },

      // ── Auth ────────────────────────────────────────────────────────────────
      RegisterRequest: {
        type: 'object',
        required: ['name', 'email', 'password'],
        properties: {
          name: { type: 'string', example: 'Ahmed Ali' },
          email: { type: 'string', format: 'email', example: 'ahmed@example.com' },
          password: { type: 'string', minLength: 6, example: 'Secret@123' },
        },
      },
      LoginRequest: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: { type: 'string', format: 'email', example: 'ahmed@example.com' },
          password: { type: 'string', example: 'Secret@123' },
        },
      },
      AuthResponse: {
        type: 'object',
        properties: {
          user: { $ref: '#/components/schemas/User' },
          token: { type: 'string', example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' },
        },
      },

      // ── User ────────────────────────────────────────────────────────────────
      User: {
        type: 'object',
        properties: {
          _id: { $ref: '#/components/schemas/ObjectId' },
          name: { type: 'string', example: 'Ahmed Ali' },
          email: { type: 'string', example: 'ahmed@example.com' },
          role: { type: 'string', enum: ['user', 'admin'], example: 'user' },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' },
        },
      },

      // ── Prophet ─────────────────────────────────────────────────────────────
      Prophet: {
        type: 'object',
        properties: {
          _id: { $ref: '#/components/schemas/ObjectId' },
          slug: { type: 'string', example: 'noah' },
          name: { $ref: '#/components/schemas/LangText' },
          order: { type: 'integer', example: 3 },
          summary: { $ref: '#/components/schemas/LangText' },
          coverImage: { type: 'string', example: 'https://cdn.example.com/noah.jpg' },
          createdAt: { type: 'string', format: 'date-time' },
        },
      },

      // ── Story ────────────────────────────────────────────────────────────────
      Story: {
        type: 'object',
        properties: {
          _id: { $ref: '#/components/schemas/ObjectId' },
          slug: { type: 'string', example: 'story-of-noah' },
          prophet: { $ref: '#/components/schemas/ObjectId' },
          title: { $ref: '#/components/schemas/LangText' },
          summary: { $ref: '#/components/schemas/LangText' },
          coverImage: { type: 'string' },
          readTime: { type: 'integer', description: 'Estimated read time in minutes', example: 12 },
          chapters: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                chapterNumber: { type: 'integer', example: 1 },
                title: { $ref: '#/components/schemas/LangText' },
                content: { $ref: '#/components/schemas/LangText' },
              },
            },
          },
          createdAt: { type: 'string', format: 'date-time' },
        },
      },

      // ── Quiz ────────────────────────────────────────────────────────────────
      QuizQuestion: {
        type: 'object',
        properties: {
          question: { $ref: '#/components/schemas/LangText' },
          options: { type: 'array', items: { $ref: '#/components/schemas/LangText' } },
          correctAnswer: { type: 'integer', example: 2 },
          explanation: { $ref: '#/components/schemas/LangText' },
        },
      },
      Quiz: {
        type: 'object',
        properties: {
          _id: { $ref: '#/components/schemas/ObjectId' },
          prophetId: { $ref: '#/components/schemas/ObjectId' },
          slug: { type: 'string', example: 'quiz-noah' },
          questions: { type: 'array', items: { $ref: '#/components/schemas/QuizQuestion' } },
        },
      },

      // ── Quiz Result ──────────────────────────────────────────────────────────
      QuizResult: {
        type: 'object',
        properties: {
          _id: { $ref: '#/components/schemas/ObjectId' },
          userId: { $ref: '#/components/schemas/ObjectId' },
          quizId: { $ref: '#/components/schemas/ObjectId' },
          score: { type: 'number', minimum: 0, maximum: 100, example: 80 },
          totalQuestions: { type: 'integer', example: 10 },
          correctAnswers: { type: 'integer', example: 8 },
          passed: { type: 'boolean', example: true },
          answers: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                questionIndex: { type: 'integer' },
                selectedAnswer: { type: 'integer' },
                correctAnswer: { type: 'integer' },
                isCorrect: { type: 'boolean' },
              },
            },
          },
          createdAt: { type: 'string', format: 'date-time' },
        },
      },

      // ── Progress ─────────────────────────────────────────────────────────────
      Progress: {
        type: 'object',
        properties: {
          _id: { $ref: '#/components/schemas/ObjectId' },
          userId: { $ref: '#/components/schemas/ObjectId' },
          prophetSlug: { type: 'string', example: 'noah' },
          currentChapter: { type: 'integer', example: 3 },
          completed: { type: 'boolean', example: false },
          lastReadAt: { type: 'string', format: 'date-time' },
        },
      },

      // ── Bookmark ─────────────────────────────────────────────────────────────
      Bookmark: {
        type: 'object',
        properties: {
          _id: { $ref: '#/components/schemas/ObjectId' },
          userId: { $ref: '#/components/schemas/ObjectId' },
          storyId: { $ref: '#/components/schemas/ObjectId' },
          createdAt: { type: 'string', format: 'date-time' },
        },
      },

      // ── Achievement ──────────────────────────────────────────────────────────
      Achievement: {
        type: 'object',
        properties: {
          _id: { $ref: '#/components/schemas/ObjectId' },
          userId: { $ref: '#/components/schemas/ObjectId' },
          type: {
            type: 'string',
            enum: [
              'first_story', 'story_streak_5', 'story_streak_10',
              'quiz_passed', 'quiz_perfect', 'quiz_streak_5',
              'first_bookmark', 'prophet_complete',
            ],
          },
          title: { type: 'string', example: 'First Steps' },
          description: { type: 'string', example: 'Completed your first story' },
          icon: { type: 'string', example: '📖' },
          earnedAt: { type: 'string', format: 'date-time' },
        },
      },

      // ── Shared Response Wrappers ─────────────────────────────────────────────
      SuccessResponse: {
        type: 'object',
        properties: {
          success: { type: 'boolean', example: true },
          message: { type: 'string', example: 'Success' },
          data: { type: 'object', nullable: true },
        },
      },
      ErrorResponse: {
        type: 'object',
        properties: {
          success: { type: 'boolean', example: false },
          message: { type: 'string', example: 'Resource not found' },
        },
      },
      ValidationErrorResponse: {
        type: 'object',
        properties: {
          success: { type: 'boolean', example: false },
          message: { type: 'string', example: 'Validation failed' },
          errors: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                path: { type: 'array', items: { type: 'string' } },
                message: { type: 'string' },
              },
            },
          },
        },
      },
      PaginationMeta: {
        type: 'object',
        properties: {
          total:  { type: 'integer', example: 42 },
          page:   { type: 'integer', example: 1 },
          pages:  { type: 'integer', example: 5 },
        },
      },
    },

    // ─── Reusable Parameters ────────────────────────────────────────────────────
    parameters: {
      PageParam: {
        name: 'page', in: 'query', schema: { type: 'integer', default: 1, minimum: 1 },
        description: 'Page number for pagination',
      },
      LimitParam: {
        name: 'limit', in: 'query', schema: { type: 'integer', default: 10, minimum: 1, maximum: 50 },
        description: 'Number of results per page',
      },
      SlugParam: {
        name: 'slug', in: 'path', required: true, schema: { type: 'string' },
        description: 'URL-friendly identifier',
      },
      UserIdParam: {
        name: 'userId', in: 'path', required: true,
        schema: { $ref: '#/components/schemas/ObjectId' },
        description: 'MongoDB ObjectId of the user',
      },
    },

    // ─── Reusable Responses ─────────────────────────────────────────────────────
    responses: {
      Unauthorized: {
        description: '401 — Missing or invalid JWT token',
        content: { 'application/json': { schema: { $ref: '#/components/schemas/ErrorResponse' } } },
      },
      Forbidden: {
        description: '403 — Insufficient permissions (admin required)',
        content: { 'application/json': { schema: { $ref: '#/components/schemas/ErrorResponse' } } },
      },
      NotFound: {
        description: '404 — Resource not found',
        content: { 'application/json': { schema: { $ref: '#/components/schemas/ErrorResponse' } } },
      },
      ValidationError: {
        description: '400 — Request body / query failed validation',
        content: { 'application/json': { schema: { $ref: '#/components/schemas/ValidationErrorResponse' } } },
      },
      Conflict: {
        description: '409 — Duplicate resource',
        content: { 'application/json': { schema: { $ref: '#/components/schemas/ErrorResponse' } } },
      },
    },
  },

  // ─── API Tags ─────────────────────────────────────────────────────────────────
  tags: [
    { name: 'Auth',         description: 'User registration and authentication' },
    { name: 'Prophets',     description: 'Browse the 25 Prophets of Islam' },
    { name: 'Stories',      description: 'Read prophet stories chapter by chapter' },
    { name: 'Quizzes',      description: 'Knowledge quizzes per prophet' },
    { name: 'Quiz Results', description: 'Submit and review quiz attempts' },
    { name: 'Progress',     description: 'Track reading progress per prophet' },
    { name: 'Bookmarks',    description: 'Save and manage story bookmarks' },
    { name: 'Achievements', description: 'Gamification — earn achievement badges' },
    { name: 'Dashboard',    description: 'Aggregated user statistics' },
    { name: 'Admin',        description: 'Admin-only: user management and platform stats' },
  ],

  // ─── Paths ────────────────────────────────────────────────────────────────────
  paths: {

    // ══════════════════════════════════════════════════════════════════════════
    // AUTH
    // ══════════════════════════════════════════════════════════════════════════
    '/auth/register': {
      post: {
        tags: ['Auth'],
        summary: 'Register a new user',
        requestBody: {
          required: true,
          content: {
            'application/json': { schema: { $ref: '#/components/schemas/RegisterRequest' } },
          },
        },
        responses: {
          201: {
            description: 'User created — returns user object and JWT token',
            content: {
              'application/json': {
                schema: {
                  allOf: [{ $ref: '#/components/schemas/SuccessResponse' }],
                  properties: { data: { $ref: '#/components/schemas/AuthResponse' } },
                },
              },
            },
          },
          400: { $ref: '#/components/responses/ValidationError' },
          409: { $ref: '#/components/responses/Conflict' },
        },
      },
    },

    '/auth/login': {
      post: {
        tags: ['Auth'],
        summary: 'Login and receive a JWT token',
        requestBody: {
          required: true,
          content: {
            'application/json': { schema: { $ref: '#/components/schemas/LoginRequest' } },
          },
        },
        responses: {
          200: {
            description: 'Authenticated — returns user object and JWT token',
            content: {
              'application/json': {
                schema: {
                  allOf: [{ $ref: '#/components/schemas/SuccessResponse' }],
                  properties: { data: { $ref: '#/components/schemas/AuthResponse' } },
                },
              },
            },
          },
          400: { $ref: '#/components/responses/ValidationError' },
          401: { description: 'Invalid credentials' },
          404: { $ref: '#/components/responses/NotFound' },
        },
      },
    },

    // ══════════════════════════════════════════════════════════════════════════
    // PROPHETS
    // ══════════════════════════════════════════════════════════════════════════
    '/prophets': {
      get: {
        tags: ['Prophets'],
        summary: 'Get all prophets',
        description: 'Returns a list of all 25 prophets ordered chronologically.',
        parameters: [
          { $ref: '#/components/parameters/PageParam' },
          { $ref: '#/components/parameters/LimitParam' },
        ],
        responses: {
          200: {
            description: 'List of prophets',
            content: {
              'application/json': {
                schema: {
                  allOf: [{ $ref: '#/components/schemas/SuccessResponse' }],
                  properties: {
                    data: {
                      allOf: [{ $ref: '#/components/schemas/PaginationMeta' }],
                      properties: {
                        prophets: { type: 'array', items: { $ref: '#/components/schemas/Prophet' } },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },

    '/prophets/{slug}': {
      get: {
        tags: ['Prophets'],
        summary: 'Get a prophet by slug',
        parameters: [{ $ref: '#/components/parameters/SlugParam' }],
        responses: {
          200: {
            description: 'Prophet detail',
            content: {
              'application/json': {
                schema: {
                  allOf: [{ $ref: '#/components/schemas/SuccessResponse' }],
                  properties: { data: { $ref: '#/components/schemas/Prophet' } },
                },
              },
            },
          },
          404: { $ref: '#/components/responses/NotFound' },
        },
      },
    },

    // ══════════════════════════════════════════════════════════════════════════
    // STORIES
    // ══════════════════════════════════════════════════════════════════════════
    '/stories/{slug}': {
      get: {
        tags: ['Stories'],
        summary: 'Get story metadata and chapter list',
        parameters: [{ $ref: '#/components/parameters/SlugParam' }],
        responses: {
          200: {
            description: 'Story overview',
            content: {
              'application/json': {
                schema: {
                  allOf: [{ $ref: '#/components/schemas/SuccessResponse' }],
                  properties: { data: { $ref: '#/components/schemas/Story' } },
                },
              },
            },
          },
          404: { $ref: '#/components/responses/NotFound' },
        },
      },
    },

    '/stories/{slug}/chapter/{chapterNumber}': {
      get: {
        tags: ['Stories'],
        summary: 'Get a single chapter of a story',
        parameters: [
          { $ref: '#/components/parameters/SlugParam' },
          {
            name: 'chapterNumber', in: 'path', required: true,
            schema: { type: 'integer', minimum: 1 },
            description: 'Chapter index (1-based)',
          },
        ],
        responses: {
          200: {
            description: 'Chapter content',
            content: {
              'application/json': {
                schema: {
                  allOf: [{ $ref: '#/components/schemas/SuccessResponse' }],
                  properties: {
                    data: {
                      type: 'object',
                      properties: {
                        chapterNumber: { type: 'integer' },
                        title: { $ref: '#/components/schemas/LangText' },
                        content: { $ref: '#/components/schemas/LangText' },
                        totalChapters: { type: 'integer' },
                      },
                    },
                  },
                },
              },
            },
          },
          404: { $ref: '#/components/responses/NotFound' },
        },
      },
    },

    // ══════════════════════════════════════════════════════════════════════════
    // QUIZZES
    // ══════════════════════════════════════════════════════════════════════════
    '/quizzes/{slug}': {
      get: {
        tags: ['Quizzes'],
        summary: 'Get a quiz by prophet slug',
        parameters: [{ $ref: '#/components/parameters/SlugParam' }],
        responses: {
          200: {
            description: 'Quiz with questions (correct answers excluded from response)',
            content: {
              'application/json': {
                schema: {
                  allOf: [{ $ref: '#/components/schemas/SuccessResponse' }],
                  properties: { data: { $ref: '#/components/schemas/Quiz' } },
                },
              },
            },
          },
          404: { $ref: '#/components/responses/NotFound' },
        },
      },
    },

    // ══════════════════════════════════════════════════════════════════════════
    // QUIZ RESULTS
    // ══════════════════════════════════════════════════════════════════════════
    '/quiz-results': {
      post: {
        tags: ['Quiz Results'],
        summary: 'Submit a quiz attempt',
        description: 'The server grades the answers. The client only sends selected option indices.',
        security: [{ BearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['quizId', 'answers'],
                properties: {
                  quizId: { $ref: '#/components/schemas/ObjectId' },
                  answers: {
                    type: 'array',
                    items: { type: 'integer', minimum: 0 },
                    example: [0, 2, 1, 3, 2],
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Quiz graded — returns full result with score and per-question breakdown',
            content: {
              'application/json': {
                schema: {
                  allOf: [{ $ref: '#/components/schemas/SuccessResponse' }],
                  properties: { data: { $ref: '#/components/schemas/QuizResult' } },
                },
              },
            },
          },
          400: { $ref: '#/components/responses/ValidationError' },
          401: { $ref: '#/components/responses/Unauthorized' },
          404: { $ref: '#/components/responses/NotFound' },
        },
      },
      get: {
        tags: ['Quiz Results'],
        summary: 'Get all quiz results for the authenticated user',
        security: [{ BearerAuth: [] }],
        parameters: [
          { $ref: '#/components/parameters/PageParam' },
          { $ref: '#/components/parameters/LimitParam' },
        ],
        responses: {
          200: {
            description: 'Paginated list of quiz results',
            content: {
              'application/json': {
                schema: {
                  allOf: [{ $ref: '#/components/schemas/SuccessResponse' }],
                  properties: {
                    data: {
                      allOf: [{ $ref: '#/components/schemas/PaginationMeta' }],
                      properties: {
                        results: { type: 'array', items: { $ref: '#/components/schemas/QuizResult' } },
                      },
                    },
                  },
                },
              },
            },
          },
          401: { $ref: '#/components/responses/Unauthorized' },
        },
      },
    },

    '/quiz-results/best/{quizId}': {
      get: {
        tags: ['Quiz Results'],
        summary: "Get user's best score for a specific quiz",
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            name: 'quizId', in: 'path', required: true,
            schema: { $ref: '#/components/schemas/ObjectId' },
          },
        ],
        responses: {
          200: {
            description: 'Best score and pass status',
            content: {
              'application/json': {
                schema: {
                  allOf: [{ $ref: '#/components/schemas/SuccessResponse' }],
                  properties: {
                    data: {
                      type: 'object',
                      properties: {
                        bestScore: { type: 'number', nullable: true, example: 90 },
                        passed:    { type: 'boolean', example: true },
                      },
                    },
                  },
                },
              },
            },
          },
          401: { $ref: '#/components/responses/Unauthorized' },
        },
      },
    },

    '/quiz-results/{resultId}': {
      get: {
        tags: ['Quiz Results'],
        summary: 'Get a single quiz result by ID',
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            name: 'resultId', in: 'path', required: true,
            schema: { $ref: '#/components/schemas/ObjectId' },
          },
        ],
        responses: {
          200: {
            description: 'Full quiz result with per-question breakdown',
            content: {
              'application/json': {
                schema: {
                  allOf: [{ $ref: '#/components/schemas/SuccessResponse' }],
                  properties: { data: { $ref: '#/components/schemas/QuizResult' } },
                },
              },
            },
          },
          401: { $ref: '#/components/responses/Unauthorized' },
          403: { $ref: '#/components/responses/Forbidden' },
          404: { $ref: '#/components/responses/NotFound' },
        },
      },
    },

    // ══════════════════════════════════════════════════════════════════════════
    // PROGRESS
    // ══════════════════════════════════════════════════════════════════════════
    '/progress': {
      get: {
        tags: ['Progress'],
        summary: 'Get all reading progress records for the authenticated user',
        security: [{ BearerAuth: [] }],
        responses: {
          200: {
            description: 'List of progress records',
            content: {
              'application/json': {
                schema: {
                  allOf: [{ $ref: '#/components/schemas/SuccessResponse' }],
                  properties: {
                    data: { type: 'array', items: { $ref: '#/components/schemas/Progress' } },
                  },
                },
              },
            },
          },
          401: { $ref: '#/components/responses/Unauthorized' },
        },
      },
    },

    '/progress/save': {
      post: {
        tags: ['Progress'],
        summary: 'Save or update reading progress',
        description: 'Upserts progress for a prophet. Call after each chapter read.',
        security: [{ BearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['prophetSlug', 'currentChapter'],
                properties: {
                  prophetSlug:    { type: 'string', example: 'noah' },
                  currentChapter: { type: 'integer', minimum: 1, example: 4 },
                  completed:      { type: 'boolean', example: false },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Progress saved',
            content: {
              'application/json': {
                schema: {
                  allOf: [{ $ref: '#/components/schemas/SuccessResponse' }],
                  properties: { data: { $ref: '#/components/schemas/Progress' } },
                },
              },
            },
          },
          400: { $ref: '#/components/responses/ValidationError' },
          401: { $ref: '#/components/responses/Unauthorized' },
        },
      },
    },

    // ══════════════════════════════════════════════════════════════════════════
    // BOOKMARKS
    // ══════════════════════════════════════════════════════════════════════════
    '/bookmarks': {
      get: {
        tags: ['Bookmarks'],
        summary: 'Get all bookmarks for the authenticated user',
        security: [{ BearerAuth: [] }],
        parameters: [
          { $ref: '#/components/parameters/PageParam' },
          { $ref: '#/components/parameters/LimitParam' },
        ],
        responses: {
          200: {
            description: 'Paginated list of bookmarks with populated story data',
            content: {
              'application/json': {
                schema: {
                  allOf: [{ $ref: '#/components/schemas/SuccessResponse' }],
                  properties: {
                    data: {
                      allOf: [{ $ref: '#/components/schemas/PaginationMeta' }],
                      properties: {
                        bookmarks: { type: 'array', items: { $ref: '#/components/schemas/Bookmark' } },
                      },
                    },
                  },
                },
              },
            },
          },
          401: { $ref: '#/components/responses/Unauthorized' },
        },
      },
    },

    '/bookmarks/{storyId}': {
      post: {
        tags: ['Bookmarks'],
        summary: 'Bookmark a story',
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            name: 'storyId', in: 'path', required: true,
            schema: { $ref: '#/components/schemas/ObjectId' },
          },
        ],
        responses: {
          201: {
            description: 'Bookmark created',
            content: {
              'application/json': {
                schema: {
                  allOf: [{ $ref: '#/components/schemas/SuccessResponse' }],
                  properties: { data: { $ref: '#/components/schemas/Bookmark' } },
                },
              },
            },
          },
          401: { $ref: '#/components/responses/Unauthorized' },
          409: { $ref: '#/components/responses/Conflict' },
        },
      },
      delete: {
        tags: ['Bookmarks'],
        summary: 'Remove a bookmark',
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            name: 'storyId', in: 'path', required: true,
            schema: { $ref: '#/components/schemas/ObjectId' },
          },
        ],
        responses: {
          200: { description: 'Bookmark removed' },
          401: { $ref: '#/components/responses/Unauthorized' },
          404: { $ref: '#/components/responses/NotFound' },
        },
      },
    },

    '/bookmarks/{storyId}/check': {
      get: {
        tags: ['Bookmarks'],
        summary: 'Check if a story is bookmarked by the current user',
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            name: 'storyId', in: 'path', required: true,
            schema: { $ref: '#/components/schemas/ObjectId' },
          },
        ],
        responses: {
          200: {
            description: 'Bookmark status',
            content: {
              'application/json': {
                schema: {
                  allOf: [{ $ref: '#/components/schemas/SuccessResponse' }],
                  properties: {
                    data: {
                      type: 'object',
                      properties: { bookmarked: { type: 'boolean', example: true } },
                    },
                  },
                },
              },
            },
          },
          401: { $ref: '#/components/responses/Unauthorized' },
        },
      },
    },

    // ══════════════════════════════════════════════════════════════════════════
    // ACHIEVEMENTS
    // ══════════════════════════════════════════════════════════════════════════
    '/achievements': {
      get: {
        tags: ['Achievements'],
        summary: 'Get earned achievements and summary for the authenticated user',
        security: [{ BearerAuth: [] }],
        responses: {
          200: {
            description: 'Achievement summary',
            content: {
              'application/json': {
                schema: {
                  allOf: [{ $ref: '#/components/schemas/SuccessResponse' }],
                  properties: {
                    data: {
                      type: 'object',
                      properties: {
                        earned: { type: 'integer', example: 3 },
                        total:  { type: 'integer', example: 8 },
                        achievements: { type: 'array', items: { $ref: '#/components/schemas/Achievement' } },
                      },
                    },
                  },
                },
              },
            },
          },
          401: { $ref: '#/components/responses/Unauthorized' },
        },
      },
    },

    '/achievements/check': {
      post: {
        tags: ['Achievements'],
        summary: 'Re-evaluate and award newly unlocked achievements',
        description: 'Call this after completing a story, passing a quiz, or saving a bookmark.',
        security: [{ BearerAuth: [] }],
        responses: {
          200: {
            description: 'Newly awarded achievements',
            content: {
              'application/json': {
                schema: {
                  allOf: [{ $ref: '#/components/schemas/SuccessResponse' }],
                  properties: {
                    data: {
                      type: 'object',
                      properties: {
                        newlyAwarded: { type: 'array', items: { $ref: '#/components/schemas/Achievement' } },
                        count:        { type: 'integer', example: 2 },
                      },
                    },
                  },
                },
              },
            },
          },
          401: { $ref: '#/components/responses/Unauthorized' },
        },
      },
    },

    // ══════════════════════════════════════════════════════════════════════════
    // DASHBOARD
    // ══════════════════════════════════════════════════════════════════════════
    '/dashboard': {
      get: {
        tags: ['Dashboard'],
        summary: 'Get aggregated user statistics',
        description: 'Returns a comprehensive overview: progress, quiz stats, bookmarks, and achievements.',
        security: [{ BearerAuth: [] }],
        responses: {
          200: {
            description: 'Dashboard data',
            content: {
              'application/json': {
                schema: {
                  allOf: [{ $ref: '#/components/schemas/SuccessResponse' }],
                  properties: {
                    data: {
                      type: 'object',
                      properties: {
                        progress: {
                          type: 'object',
                          properties: {
                            totalStarted:    { type: 'integer', example: 10 },
                            totalCompleted:  { type: 'integer', example: 7 },
                            completionRate:  { type: 'number',  example: 70 },
                            recentActivity:  { type: 'array', items: { $ref: '#/components/schemas/Progress' } },
                          },
                        },
                        quizzes: {
                          type: 'object',
                          properties: {
                            totalAttempted: { type: 'integer', example: 15 },
                            totalPassed:    { type: 'integer', example: 12 },
                            averageScore:   { type: 'number',  example: 78 },
                            passRate:       { type: 'number',  example: 80 },
                          },
                        },
                        bookmarks: {
                          type: 'object',
                          properties: {
                            total:  { type: 'integer', example: 5 },
                            recent: { type: 'array', items: { $ref: '#/components/schemas/Bookmark' } },
                          },
                        },
                        achievements: {
                          type: 'object',
                          properties: {
                            earned: { type: 'integer', example: 4 },
                            total:  { type: 'integer', example: 8 },
                            recent: { type: 'array', items: { $ref: '#/components/schemas/Achievement' } },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          401: { $ref: '#/components/responses/Unauthorized' },
        },
      },
    },

    // ══════════════════════════════════════════════════════════════════════════
    // ADMIN
    // ══════════════════════════════════════════════════════════════════════════
    '/admin/stats': {
      get: {
        tags: ['Admin'],
        summary: 'Get platform-wide statistics',
        security: [{ BearerAuth: [] }],
        responses: {
          200: {
            description: 'Platform stats',
            content: {
              'application/json': {
                schema: {
                  allOf: [{ $ref: '#/components/schemas/SuccessResponse' }],
                  properties: {
                    data: {
                      type: 'object',
                      properties: {
                        users:            { type: 'object', properties: { total: { type: 'integer' }, admins: { type: 'integer' } } },
                        quizzes:          { type: 'object', properties: { totalAttempts: { type: 'integer' }, averageScore: { type: 'number' } } },
                        bookmarks:        { type: 'object', properties: { total: { type: 'integer' } } },
                        achievements:     { type: 'object', properties: { total: { type: 'integer' } } },
                        storiesCompleted: { type: 'integer' },
                      },
                    },
                  },
                },
              },
            },
          },
          401: { $ref: '#/components/responses/Unauthorized' },
          403: { $ref: '#/components/responses/Forbidden' },
        },
      },
    },

    '/admin/users': {
      get: {
        tags: ['Admin'],
        summary: 'List all users',
        security: [{ BearerAuth: [] }],
        parameters: [
          { $ref: '#/components/parameters/PageParam' },
          {
            name: 'limit', in: 'query',
            schema: { type: 'integer', default: 20, minimum: 1, maximum: 100 },
          },
          {
            name: 'role', in: 'query',
            schema: { type: 'string', enum: ['user', 'admin'] },
            description: 'Filter by role',
          },
        ],
        responses: {
          200: {
            description: 'Paginated user list',
            content: {
              'application/json': {
                schema: {
                  allOf: [{ $ref: '#/components/schemas/SuccessResponse' }],
                  properties: {
                    data: {
                      allOf: [{ $ref: '#/components/schemas/PaginationMeta' }],
                      properties: {
                        users: { type: 'array', items: { $ref: '#/components/schemas/User' } },
                      },
                    },
                  },
                },
              },
            },
          },
          401: { $ref: '#/components/responses/Unauthorized' },
          403: { $ref: '#/components/responses/Forbidden' },
        },
      },
    },

    '/admin/users/{userId}': {
      get: {
        tags: ['Admin'],
        summary: 'Get a single user by ID',
        security: [{ BearerAuth: [] }],
        parameters: [{ $ref: '#/components/parameters/UserIdParam' }],
        responses: {
          200: {
            description: 'User detail',
            content: {
              'application/json': {
                schema: {
                  allOf: [{ $ref: '#/components/schemas/SuccessResponse' }],
                  properties: { data: { $ref: '#/components/schemas/User' } },
                },
              },
            },
          },
          401: { $ref: '#/components/responses/Unauthorized' },
          403: { $ref: '#/components/responses/Forbidden' },
          404: { $ref: '#/components/responses/NotFound' },
        },
      },
      delete: {
        tags: ['Admin'],
        summary: 'Delete a user and all their data (cascade)',
        description: 'Removes the user and cascades deletion of all progress, quiz results, bookmarks, and achievements.',
        security: [{ BearerAuth: [] }],
        parameters: [{ $ref: '#/components/parameters/UserIdParam' }],
        responses: {
          200: { description: 'User deleted' },
          400: { description: 'Admin cannot delete their own account' },
          401: { $ref: '#/components/responses/Unauthorized' },
          403: { $ref: '#/components/responses/Forbidden' },
          404: { $ref: '#/components/responses/NotFound' },
        },
      },
    },

    '/admin/users/{userId}/role': {
      patch: {
        tags: ['Admin'],
        summary: 'Change a user\'s role',
        security: [{ BearerAuth: [] }],
        parameters: [{ $ref: '#/components/parameters/UserIdParam' }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['role'],
                properties: {
                  role: { type: 'string', enum: ['user', 'admin'] },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Role updated',
            content: {
              'application/json': {
                schema: {
                  allOf: [{ $ref: '#/components/schemas/SuccessResponse' }],
                  properties: { data: { $ref: '#/components/schemas/User' } },
                },
              },
            },
          },
          400: { $ref: '#/components/responses/ValidationError' },
          401: { $ref: '#/components/responses/Unauthorized' },
          403: { $ref: '#/components/responses/Forbidden' },
          404: { $ref: '#/components/responses/NotFound' },
        },
      },
    },
  },
};

export const swaggerSpec = swaggerDefinition;
