# Estrategia de Testing

## Nivel de Testing para MVP
- **Unit tests:** Componentes React críticos
- **Integration tests:** API routes principales
- **E2E tests:** Flujo completo de compra (post-MVP)
- **Manual:** Checklist de aceptación por hito

## Herramientas
- **Vitest:** Unit testing (integrado con Next.js)
- **Testing Library:** Tests de componentes React
- **Playwright:** E2E testing (post-MVP)

## Casos de Prueba Críticos

### Autenticación
- Registro con datos válidos
- Registro con email duplicado
- Login con credenciales correctas/incorrectas
- Protección de rutas autenticadas

### Catálogo
- Listado de cuerpos celestes
- Búsqueda por nombre
- Filtro por tipo
- Detalle de cuerpo celeste

### Certificado
- Personalización con datos válidos
- Validación de campos requeridos
- Generación de código único único
- Generación de PDF

### Pago
- Flujo sandbox exitoso
- Flujo sandbox con error
- Webhook de confirmación

### Verificación
- Código existente muestra datos
- Código inexistente muestra error
- Datos del comprador no se exponen

## Checklist de Aceptación por Hito
Cada hito termina con una prueba concreta que el usuario ejecuta manualmente.
