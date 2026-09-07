# Requisitos No Funcionales

## Rendimiento
- Landing page carga en < 3 segundos en 3G
- Imágenes optimizadas (Next.js Image component)
- Generación de PDF en < 5 segundos
- Lighthouse score > 80 en todas las categorías

## Seguridad
- Contraseñas hasheadas con bcrypt (nunca en texto plano)
- Variables de entorno (.env) nunca en el repositorio
- CSRF protection via NextAuth.js
- Rate limiting en endpoints públicos
- Validación de entrada en todos los forms
- HTTPS en producción

## Accesibilidad
- HTML semántico
- Contraste WCAG AA
- Navegación por teclado
- Alt text en imágenes
- Labels en todos los formularios

## Responsive Design
- Mobile-first
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch targets mínimo 44x44px
- Texto legible sin zoom

## SEO
- Meta tags por página
- Open Graph tags
- Structured data (JSON-LD) para el producto
- Sitemap.xml
- robots.txt

## Navegadores Soportados
- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## Disponibilidad
- MVP: best-effort (hosting gratuito/bajo costo)
- Post-MVP: 99.5% uptime

## Escalabilidad
-Soportar al menos 100 usuarios simultáneos en MVP
- Base de datos relacional (PostgreSQL) para integridad de datos
