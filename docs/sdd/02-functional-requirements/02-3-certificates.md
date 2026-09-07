# Requisitos Funcionales: Certificados

## FR-CERT-001: Personalización del Certificado
**Como** usuario, **quiero** personalizar mi certificado con datos específicos.

### Datos del formulario
- Nombre simbólico (requerido, 3-50 caracteres) — el nombre que se asocia al certificado
- Nombre del destinatario (requerido, 2-100 caracteres)
- Email del destinatario (opcional)
- Mensaje personalizado (opcional, máx 200 caracteres)

### Validaciones
- Nombre simbólico: solo letras, números, espacios, guiones
- Nombre del destinatario: letras, espacios, tildes

### Comportamiento
- Guardar borrador mientras el usuario escribe (localStorage)
- Botón "Vista previa" que muestra el certificado
- Botón "Proceder al pago"

## FR-CERT-002: Vista Previa
**Como** usuario, **quiero** ver cómo quedará mi certificado antes de comprarlo.

### Datos mostrados
- Diseño del certificado con todos los campos
- Nombre simbólico
- Nombre del destinatario
- Cuerpo celeste con datos astronómicos
- Fecha (placeholder hasta confirmar pago)
- Código único (placeholder)
- Aviso: "Certificado Simbólico / Conmemorativo"

### Comportamiento
- Generada como imagen/HTML (no PDF aún)
- Marca de agua "VISTA PREVIA"
- Botón "Confirmar y proceder al pago"

## FR-CERT-003: Generación del PDF
**Como** sistema, **debo** generar un PDF del certificado después del pago exitoso.

### Contenido del PDF
- Diseño del certificado (plantilla HTML→PDF)
- Nombre simbólico
- Nombre del destinatario
- Cuerpo celeste completo con datos astronómicos
- Código único del certificado
- Fecha de emisión
- Leyenda: "Este certificado es de naturaleza simbólica y conmemorativa. No otorga derechos de propiedad sobre cuerpos celestes."
- Referencia a la fuente de datos astronómicos

### Especificaciones técnicas
- Tamaño: A4 horizontal (landscape)
- Resolución: 300 DPI
- Formato: PDF/A si es posible
- Tamaño máximo: 2MB

## FR-CERT-004: Código Único
- Formato: SC-XXXX-XXXX
- Generado al momento del pago exitoso
- Alfanumérico, sin caracteres ambiguos
- Almacén como campo unique en la base de datos
- Utilizable para verificación pública

## FR-CERT-005: Estados del Certificado
```
PENDING → PAID → GENERATED → DELIVERED
                  ↓
              CANCELLED (en cualquier momento antes de GENERATED)
```

## FR-CERT-006: Descarga del PDF
**Como** usuario, **quiero** descargar mi certificado PDF desde mi cuenta.

### Comportamiento
- Botón "Descargar PDF" en el dashboard
- Descarga directa del archivo
- También accesible desde la página de detalle del certificado
