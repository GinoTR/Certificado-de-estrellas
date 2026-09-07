# Especificación de API

## Convenciones
- Base URL: `/api/`
- Formato: JSON
- Autenticación: Cookie de sesión (NextAuth.js)
- Errores: `{ error: "mensaje" }` con status code apropiado

## Endpoints

### Auth
| Método | Ruta | Descripción | Auth |
|--------|------|-------------|------|
| POST | `/api/auth/register` | Registrar usuario | No |
| POST | `/api/auth/[...nextauth]` | Login/Logout/Session | No |

### Celestial Bodies
| Método | Ruta | Descripción | Auth |
|--------|------|-------------|------|
| GET | `/api/celestial-bodies` | Listar (con filtros) | No |
| GET | `/api/celestial-bodies/[id]` | Detalle | No |

### Certificates
| Método | Ruta | Descripción | Auth |
|--------|------|-------------|------|
| GET | `/api/certificates` | Mis certificados | Sí |
| POST | `/api/certificates` | Crear borrador | Sí |
| GET | `/api/certificates/[id]` | Detalle | Sí |
| GET | `/api/certificates/[id]/pdf` | Descargar PDF | Sí |

### Payment
| Método | Ruta | Descripción | Auth |
|--------|------|-------------|------|
| POST | `/api/payment/create` | Crear pago | Sí |
| POST | `/api/payment/webhook` | Webhook Culqi | No (firma) |

### Verification
| Método | Ruta | Descripción | Auth |
|--------|------|-------------|------|
| GET | `/api/verify/[code]` | Verificar certificado | No |

## Ejemplo: Crear Certificado
```json
// POST /api/certificates
// Body:
{
  "celestialBodyId": "clxxx...",
  "symbolicName": "Estrella de María",
  "recipientName": "María García",
  "recipientEmail": "maria@email.com",
  "message": "Feliz cumpleaños"
}

// Response 201:
{
  "id": "clxxx...",
  "uniqueCode": "SC-A7F3-B291",
  "status": "PENDING",
  "celestialBody": {
    "officialName": "Sirius",
    "type": "STAR"
  }
}
```
