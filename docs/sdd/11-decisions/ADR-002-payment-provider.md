# ADR-002: Proveedor de Pagos

## Estado
Aprobado

## Contexto
Necesitamos una pasarela de pagos que funcione en Perú, sea accesible para proyectos pequeños, y tenga modo sandbox para desarrollo.

## Decisión
Usar **Culqi** como proveedor de pagos.

## Alternativas Evaluadas (Perú, 2026)

| Proveedor | Comisión | Costo fijo | Sandbox | API | Doc |
|-----------|----------|------------|---------|-----|-----|
| **Culqi** | 3.44% + IGV | Ninguno | ✅ Gratis | REST | Buena |
| MercadoPago | Variable | Ninguno | ✅ | REST | Media |
| Niubiz | 3.5-5% + S/0.30 | ~S/59/mes | ✅ | REST | Buena |
| Izipay | 3.44% + S/0.69 + IGV | Ninguno | ✅ | REST | Mejorando |
| PayPal | 4.4% + fijo | Ninguno | ✅ | REST | Buena |

## Por qué Culqi
1. **Sin costo fijo** — ideal para empezar
2. **Sandbox gratis** — desarrollar sin pagar
3. **Documentación clara** — más fácil de integrar
4. **Fintech peruana** — soporte local
5. **Yape, Plin, tarjetas** — múltiples medios de pago
6. **Activación rápida** — 1-3 días para producción

## Consecuencias
- MVP con sandbox: sin pagos reales
- Producción: comisión 3.44% + IGV por transacción
- Necesitaremos cuenta Culqi para producción
- Webhook para confirmar pagos
