# Modelo de Datos

## Entidades Principales

### User
Almacena los datos de los usuarios registrados.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | String (cuid) | Identificador único |
| email | String (unique) | Email del usuario |
| name | String? | Nombre |
| lastName | String? | Apellido |
| passwordHash | String | Contraseña hasheada (bcrypt) |
| emailVerified | DateTime? | Fecha de verificación del email |
| createdAt | DateTime | Fecha de creación |
| updatedAt | DateTime | Última actualización |

### CelestialBody
Catálogo de cuerpos celestes disponibles.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | String (cuid) | Identificador único |
| internalCode | String (unique) | Código interno, ej: "STAR-0001" |
| simbadId | String? (unique) | ID en SIMBAD si existe |
| officialName | String? | Nombre científico oficial |
| designation | String? | Designación astronómica |
| commonName | String? | Nombre común |
| type | Enum | Tipo de cuerpo celeste |
| constellation | String? | Constelación |
| rightAscension | String? | Ascensión recta |
| declination | String? | Declinación |
| magnitude | Float? | Magnitud aparente |
| spectralType | String? | Tipo espectral |
| distanceLightYears | Float? | Distancia en años luz |
| description | String? | Descripción |
| imageUrl | String? | URL de imagen |
| isAvailable | Boolean | Disponible para certificados |

### Certificate
Certificados emitidos.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | String (cuid) | Identificador único |
| uniqueCode | String (unique) | Código único del certificado |
| userId | String (FK) | Usuario propietario |
| celestialBodyId | String (FK) | Cuerpo celeste seleccionado |
| symbolicName | String | Nombre simbólico elegido |
| recipientName | String | Nombre del destinatario |
| recipientEmail | String? | Email del destinatario |
| message | String? | Mensaje personalizado |
| status | Enum | Estado del certificado |
| issuedAt | DateTime? | Fecha de emisión |
| pdfUrl | String? | URL del PDF generado |
| paymentId | String? | ID de transacción Culqi |
| createdAt | DateTime | Fecha de creación |
| updatedAt | DateTime | Última actualización |

## Enums

### CelestialType
```
STAR, PLANET, DWARF_PLANET, MOON, ASTEROID, COMET,
NEBULA, GALAXY, CONSTELLATION, OTHER
```

### CertStatus
```
PENDING, PAID, GENERATED, DELIVERED, CANCELLED
```

## Relaciones

```
User 1 ──── N Certificate
CelestialBody 1 ──── N Certificate
```

## Código Único del Certificado
- Formato: `SC-XXXX-XXXX` (ej: `SC-A7F3-B291`)
- Generado aleatoriamente al crear el certificado
- Base32 sin caracteres ambiguos (0/O, 1/I/L)
- 16 caracteres de entropía = 3.4 × 10^24 combinaciones

## Código Interno del Cuerpo Celeste
- Formato: `TIPO-NNNN` (ej: `STAR-0001`, `NEBULA-0003`)
- Asignado al importar del catálogo astronómico
- Secuencial por tipo
