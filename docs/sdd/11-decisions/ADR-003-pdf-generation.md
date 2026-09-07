# ADR-003: Generación de PDF

## Estado
Aprobado

## Contexto
Necesitamos generar PDFs de certificados con diseño personalizado, tipografía, imágenes y layout controlado.

## Decisión
Usar **Puppeteer** para generar PDFs desde HTML/CSS.

## Alternativas Evaluadas

| Librería | Tipo | Memoria | Velocidad | CSS | Complejidad |
|----------|------|---------|-----------|-----|-------------|
| **Puppeteer** | HTML→PDF via Chrome | Alta (100-200MB) | Lenta (1-3s) | ✅ Completo | Fácil |
| PDFKit | Programmatico | Baja (5-10MB) | Rápida (<100ms) | ❌ Manual | Media |
| jsPDF | Browser-first | Media (20-40MB) | Media (200-500ms) | ❌ Limitado | Media |
| pdf-lib | Manipulación | Baja | Rápida | ❌ | Media |

## Por qué Puppeteer
1. **HTML/CSS = control total del diseño** — usamos plantilla HTML
2. **Fácil de diseñar** — como diseñar una web
3. **Soporte completo de CSS** — fuentes, colores, layout
4. **Ideal para certificados** — diseño complejo con imagen de fondo

## Consecuencias
- Requiere Chrome/Chromium en el servidor
- Más uso de memoria que PDFKit
- Para nuestro volumen (bajo) es perfectamente viable
- Render incluye Chrome en su runtime
- Podemos cambiar a PDFKit si necesitamos mayor performance
