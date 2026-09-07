# Especificación de Seguridad

## Autenticación
- Contraseñas hasheadas con bcrypt (12 rounds)
- Sesiones via NextAuth.js (cookies httpOnly, secure, sameSite)
- Expiración de sesión: 30 días
- No almacenar contraseñas en texto plano NUNCA

## Variables de Entorno
- `.env` y `.env.local` en `.gitignore`
- `.env.example` sin valores sensibles (solo nombres de variables)
- Secretos: DATABASE_URL, NEXTAUTH_SECRET, CULQI_SECRET_KEY

## Validación de Entrada
- Todos los formularios validados en cliente y servidor
- Sanitización de strings (prevenir XSS)
- Validación de tipos con Zod o TypeScript

## Protección de Datos
- Datos del comprador NUNCA se muestran en verificación pública
- Email del destinatario solo visible para el comprador
- Certificados vinculados al usuario (no accesibles por otros)

## Headers de Seguridad
- Content-Security-Policy
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

## Rate Limiting
- Login: máximo 5 intentos por minuto por IP
- API públicas: máximo 60 requests por minuto por IP
- Generación PDF: máximo 10 por usuario por hora

## Pagos
- Nunca almacenar datos de tarjeta
- Culqi maneja el tokenizado
- Webhook verificado con firma Culqi
- Transacciones idempotentes

## Repositorio
- `.gitignore` excluye `.env*`
- Nunca commitear API keys
- GitHub Secrets para CI/CD
- Revisión de dependencias periódica
