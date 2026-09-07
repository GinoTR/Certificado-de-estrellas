# Arquitectura Técnica

## Tipo de Arquitectura
**Monolito Next.js** — Frontend + Backend en un solo proyecto usando App Router.

## Por qué esta arquitectura
- Un solo deploy, una sola base de código
- API Routes para el backend (sin servidor separado)
- Server Components para SEO y rendimiento
- Server Actions para mutaciones
- Menor complejidad operativa para un proyecto pequeño

## Stack

| Capa | Tecnología | Versión |
|------|------------|---------|
| Framework | Next.js | 16.x |
| Language | TypeScript | 5.x |
| UI | Tailwind CSS | 4.x |
| Components | shadcn/ui | latest |
| ORM | Prisma | 6.x |
| Database | PostgreSQL | 16.x |
| Auth | NextAuth.js (Auth.js) | 5.x |
| PDF | Puppeteer | latest |
| Payments | Culqi API | v2 |
| Hosting | Render | - |

## Diagrama de Componentes

```
┌──────────────────────────────────────────────────┐
│                   CLIENTE                        │
│  Browser (Desktop / Mobile)                      │
│  ┌────────────────────────────────────────────┐  │
│  │  Next.js App (React + Tailwind)            │  │
│  │  - Pages (Server Components)               │  │
│  │  - Interactive (Client Components)         │  │
│  │  - Forms (Server Actions)                  │  │
│  └────────────────────────────────────────────┘  │
└─────────────────────┬────────────────────────────┘
                      │ HTTPS
┌─────────────────────▼────────────────────────────┐
│                SERVIDOR (Next.js)                 │
│  ┌────────────────────────────────────────────┐  │
│  │  API Routes (/api/*)                       │  │
│  │  - /api/auth/*     (NextAuth.js)           │  │
│  │  - /api/celestial/* (Catálogo)             │  │
│  │  - /api/certificates/* (Certificados)      │  │
│  │  - /api/pdf/*      (Generación PDF)        │  │
│  │  - /api/payment/*  (Culqi)                 │  │
│  │  - /api/verify/*   (Verificación pública)  │  │
│  └────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────┐  │
│  │  Services Layer                            │  │
│  │  - CertificateService                      │  │
│  │  - PaymentService                          │  │
│  │  - PDFService                              │  │
│  │  - CelestialBodyService                    │  │
│  └────────────────────────────────────────────┘  │
└────────┬────────────────────────────┬────────────┘
         │                            │
┌────────▼──────────┐     ┌──────────▼────────────┐
│    PostgreSQL      │     │    Culqi API           │
│    (Prisma ORM)    │     │    (Pagos)             │
│    - users         │     │    - Sandbox            │
│    - bodies        │     │    - Producción         │
│    - certificates  │     │                         │
└───────────────────┘     └────────────────────────┘
```

## Capas de la Aplicación

### 1. Presentation Layer
- Server Components (pages, layouts)
- Client Components (interactividad)
- Tailwind CSS (estilos)

### 2. API Layer
- API Routes (endpoints REST)
- Server Actions (formularios)
- Middleware (auth, rate limiting)

### 3. Service Layer
- Lógica de negocio
- Validaciones
- Transformaciones de datos

### 4. Data Layer
- Prisma ORM
- PostgreSQL

## Decisiones Clave
- [ADR-001: Stack Tecnológico](11-decisions/ADR-001-tech-stack.md)
- [ADR-002: Proveedor de Pagos](11-decisions/ADR-002-payment-provider.md)
- [ADR-003: Generación de PDF](11-decisions/ADR-003-pdf-generation.md)
