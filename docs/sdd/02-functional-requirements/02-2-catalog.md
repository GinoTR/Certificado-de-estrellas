# Requisitos Funcionales: Catálogo de Cuerpos Celestes

## FR-CAT-001: Listado del Catálogo
**Como** usuario, **quiero** explorar cuerpos celestes disponibles para elegir uno para mi certificado.

### Datos mostrados por cada cuerpo celeste
- Nombre común o designación
- Tipo (estrella, planeta, nebulosa, etc.)
- Constelación (si aplica)
- Magnitud (si aplica)
- Imagen representativa

### Comportamiento
- Grid de tarjetas con imagen y datos básicos
- Filtro por tipo de cuerpo celeste
- Búsqueda por nombre
- Paginación (20 elementos por página)
- Responsive: 1 columna (mobile), 2 (tablet), 3 (desktop)

## FR-CAT-002: Detalle del Cuerpo Celeste
**Como** usuario, **quiero** ver información detallada de un cuerpo celeste antes de seleccionarlo.

### Datos mostrados
- Nombre oficial/científico
- Designación alternativa
- Tipo de cuerpo celeste
- Constelación
- Coordenadas astronómicas
- Magnitud aparente
- Tipo espectral (si aplica)
- Distancia en años luz
- Descripción
- Imagen de alta resolución

### Comportamiento
- Botón "Seleccionar este cuerpo" que lleva al formulario de personalización
- Indicador de disponibilidad
- Aviso de naturaleza simbólica

## FR-CAT-003: Fuente de Datos
- Datos importados de SIMBAD (CDS Strasbourg)
- Importación inicial via script
- Datos verificables y rastreables
- Referencia a la fuente en cada cuerpo celeste
