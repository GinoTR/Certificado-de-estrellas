# ADR-001: Stack Tecnológico

## Estado
Aprobado

## Contexto
Necesitamos elegir un stack tecnológico para una web de certificados simbólicos de estrellas. El proyecto es pequeño/mediano, el desarrollador es principiante, y se requiere costo mínimo.

## Decisión
Usar **Next.js + TypeScript + Tailwind + Prisma + PostgreSQL**.

## Alternativas Evaluadas

### Frontend
| Opción | Ventajas | Desventajas |
|--------|----------|-------------|
| Next.js | SSR/SSG, SEO, API routes, gran comunidad | Curva inicial |
| Vite + React | Rápido, simple | Sin SSR nativo, más configuración |
| Astro | Excelente performance | Menos ecosistema para apps dinámicas |

### Backend
| Opción | Ventajas | Desventajas |
|--------|----------|-------------|
| Next.js API Routes | Todo en un proyecto | Acoplado a Next.js |
| Express separado | Flexible | Dos proyectos, más complejidad |
| NestJS | Estructurado | Overkill para este proyecto |

### Base de Datos
| Opción | Ventajas | Desventajas |
|--------|----------|-------------|
| PostgreSQL | Robusto, gratis, escalable | Más pesado que SQLite |
| SQLite | Simple, sin servidor | Limitado para producción |
| MongoDB | Flexible | No relacional, más complejo |

## Consecuencias
- Un solo proyecto (monolito Next.js) = simpler deploy
- TypeScript = menos bugs en runtime
- Prisma = type-safe database queries
- PostgreSQL en Render = gratis en tier free
