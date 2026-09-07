# Investigación: Librerías de Generación de PDF

## Resumen Ejecutivo
Para certificados con diseño rico (tipografía, colores, imágenes), **Puppeteer** es la mejor opción. Renderiza HTML/CSS exactamente como un navegador.

## Comparativa

### Puppeteer
- **Enfoque:** HTML → PDF via Chrome headless
- **Memoria:** 100-200MB por instancia
- **Velocidad:** 1.5-2.5s por documento
- **CSS:** ✅ Soporte completo (flexbox, grid, fuentes web, colores)
- **Imágenes:** ✅ PNG, JPG, SVG
- **Layout:** ✅ Control total via CSS
- **Despliegue:** Requiere Chromium (incluido en Render)
- **Ideal para:** Diseños complejos, plantillas HTML ricas
- **Nuestro caso:** ✅ **RECOMENDADO**

### PDFKit
- **Enfoque:** Programático (dibujar en canvas)
- **Memoria:** 5-10MB
- **Velocidad:** <100ms
- **CSS:** ❌ No renderiza HTML
- **Imágenes:** ✅
- **Layout:** Manual (posición absoluta)
- **Ideal para:** Facturas simples, documentos estructurados
- **Nuestro caso:** ❌ Demasiado trabajo manual para un certificado visual

### jsPDF
- **Enfoque:** Browser-first
- **Memoria:** 20-40MB
- **Velocidad:** 200-500ms
- **CSS:** ❌ Limitado
- **Imágenes:** ✅ via html2canvas (rasterizado)
- **Ideal para:** Generación en cliente, documentos simples
- **Nuestro caso:** ❌ No apto para server-side complejo

## Conclusión
Usaremos **Puppeteer** en el servidor (Next.js API Route) para:
1. Renderizar plantilla HTML del certificado con datos dinámicos
2. Convertir a PDF de alta calidad
3. Almacenar y servir al usuario

## Rendimiento Esperado
- Generación: ~2 segundos por certificado
- Memoria: ~150MB por generación
- Aceptable para nuestro volumen estimado
