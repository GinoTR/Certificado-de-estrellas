# Diseño UI / UX

## Principios de Diseño
1. **Limpieza** — Espacio negativo generoso, sin clutter
2. **Elegancia** — Tipografía premium, colores sobrios
3. **Espacial** — Inspiración en el cosmos sin ser cursi
4. **Minimalista** — Solo lo esencial, sin excesos
5. **Premium** — Sensación de producto de calidad

## Paleta de Colores
```
--bg-primary: #0a0a0f        (fondo casi negro)
--bg-secondary: #111118      (fondo secundario)
--bg-card: #16161f           (fondos de tarjetas)
--text-primary: #f0f0f5      (texto principal)
--text-secondary: #8888a0    (texto secundario)
--accent: #6366f1            (índigo — acento principal)
--accent-hover: #818cf8      (índigo claro — hover)
--gold: #d4a843              (dorado — para certificados)
--border: #2a2a35            (bordes sutiles)
--success: #22c55e           (éxito)
--error: #ef4444             (error)
```

## Tipografía
- **Títulos:** Inter (Google Fonts) — limpia, moderna, profesional
- **Cuerpo:** Inter
- **Certificado:** Playfair Display (serif) — elegante, premium

## Layout por Página

### Landing Page
1. **Hero** — Fondo con estrellas/parallax, título grande, subtítulo, CTA
2. **Concepto** — Qué es el servicio, íconos animados
3. **Cómo funciona** — 3-4 pasos con íconos
4. **Vista previa del certificado** — Mockup del certificado
5. **Explorador** — Preview del catálogo
6. **FAQ** — Preguntas frecuentes
7. **Aviso legal** — Naturaleza simbólica
8. **CTA final** — Último llamado a acción
9. **Footer** — Links, legal, copyright

### Catálogo
1. **Filtros** — Tipo, búsqueda
2. **Grid de tarjetas** — Imagen, nombre, tipo, constelación
3. **Paginación**

### Checkout
1. **Resumen** — Certificado seleccionado
2. **Formulario de pago** — Culqi embebido
3. **Confirmación**

### Dashboard
1. **Sidebar** — Navegación
2. ** Lista de certificados** — Cards con código, fecha, estado
3. **Detalle** — Info completa + descargar PDF

## Efectos
- **Parallax:** Fondo de estrellas con movimiento sutil al scroll
- **Hover:** Brillo sutil en tarjetas
- **Transiciones:** 200ms ease-in-out
- **Loading:** Skeleton screens

## Responsive
- Mobile: 1 columna, texto grande, CTAs full-width
- Tablet: 2 columnas
- Desktop: 3-4 columnas, sidebar en dashboard

## Componentes (shadcn/ui)
- Button, Card, Input, Label, Dialog
- Select, Badge, Separator, Avatar
- DropdownMenu, Sheet (mobile nav)
