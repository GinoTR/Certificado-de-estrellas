# Star Certificate

Certificados simbólicos y conmemorativos de estrellas y cuerpos celestes.

> **Naturaleza del producto:** Este es un producto simbólico y conmemorativo. No se vende, transfiere ni otorga propiedad sobre cuerpos celestes.

## Stack

- **Frontend/Backend:** Next.js 16 (App Router)
- **Estilos:** Tailwind CSS + shadcn/ui
- **Base de datos:** PostgreSQL (Prisma ORM)
- **Autenticación:** NextAuth.js (Auth.js)
- **PDF:** Puppeteer
- **Pagos:** Culqi
- **Despliegue:** Render

## Inicio Rápido

```bash
# Clonar
git clone https://github.com/GinoTR/repo-ginotr-star-certificate.git
cd repo-ginotr-star-certificate

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus valores

# Ejecutar migraciones
npx prisma migrate dev

# Sembrar datos de cuerpos celestes
npx tsx scripts/seed-celestial-bodies.ts

# Iniciar servidor de desarrollo
npm run dev
```

Abrir http://localhost:3000

## Documentación

La documentación de especificaciones (SDD) se encuentra en `docs/sdd/`:

- [Visión del Producto](docs/sdd/01-product-vision.md)
- [Requisitos Funcionales](docs/sdd/02-functional-requirements/)
- [Requisitos No Funcionales](docs/sdd/03-non-functional-requirements.md)
- [Arquitectura](docs/sdd/04-architecture.md)
- [Modelo de Datos](docs/sdd/05-data-model.md)
- [Diseño UI](docs/sdd/06-ui-design.md)
- [API](docs/sdd/07-api-spec.md)
- [Seguridad](docs/sdd/08-security.md)
- [Testing](docs/sdd/09-testing.md)
- [Deployment](docs/sdd/10-deployment.md)
- [Decisiones (ADR)](docs/sdd/11-decisions/)

## Licencia

MIT License - Copyright (c) 2026 Gino Trujillo
