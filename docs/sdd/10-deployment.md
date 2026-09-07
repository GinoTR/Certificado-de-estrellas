# Estrategia de Despliegue

## Proveedor: Render
- **Plan:** Free tier (desarrollo) → Starter $7/mes (producción)
- **Base de datos:** PostgreSQL en Render (free: 256MB)
- **Dominio:** Personalizado (post-MVP)

## Variables de Entorno en Render
```
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=...
NEXTAUTH_URL=https://tu-dominio.com
CULQI_PUBLIC_KEY=...
CULQI_SECRET_KEY=...
CULQI_ENVIRONMENT=sandbox|production
CERTIFICATE_PRICE=49.90
```

## Flujo de Deploy
1. Push a `main` branch en GitHub
2. Render detecta el cambio
3. Build automático (`npm run build`)
4. Deploy automático
5. Health check

## Antes de Producción
1. ✅ Culqi en modo producción (credenciales reales)
2. ✅ Dominio personalizado configurado
3. ✅ SSL activo (automático en Render)
4. ✅ Variables de entorno actualizadas
5. ✅ Base de datos con datos de producción
6. ✅ Backup de base de datos configurado

## Rollback
- Render mantiene historial de deploys
- Rollback manual desde el dashboard
- O forzar deploy del último commit funcional
