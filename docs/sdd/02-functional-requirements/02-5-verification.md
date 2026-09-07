# Requisitos Funcionales: Verificación

## FR-VER-001: Verificación Pública
**Como** persona, **quiero** verificar si un certificado es válido usando su código único.

### URL de verificación
`/verify/SC-XXXX-XXXX`

### Datos mostrados si el certificado existe
- Código único
- Nombre simbólico
- Nombre del destinatario
- Cuerpo celeste (nombre, tipo, constelación)
- Fecha de emisión
- Estado: "Certificado Válido ✓"
- Aviso: "Certificado de naturaleza simbólica y conmemorativa"

### Comportamiento si no existe
- Mensaje: "No se encontró un certificado con este código"
- Sugerencia de verificar la escribió correctamente

## FR-VER-002: Verificación desde Cuenta
**Como** usuario, **quiero** poder verificar mis certificados desde mi dashboard.

### Comportamiento
- Lista de certificados con su código
- Botón "Verificar" que abre la URL pública
- Copiar código al portapapeles

## FR-VER-003: Acceso
- La verificación es pública (no requiere autenticación)
- Solo muestra información del certificado, no datos del comprador
- Protección de privacidad: email y datos del comprador NUNCA se muestran
