# Investigación: Pasarelas de Pago en Perú (2026)

## Resumen Ejecutivo
Para un proyecto pequeño desde Perú, **Culqi** es la mejor opción por su ausencia de costos fijos, sandbox gratis y documentación clara. **MercadoPago** es una alternativa válida.

## Análisis Detallado

### Culqi
- **Disponibilidad en Perú:** ✅ Sí
- **Costo fijo mensual:** Ninguno
- **Comisión por transacción:** 3.44% + IGV
- **Medios de pago:** Tarjetas (Visa, MC, Amex, Diners), Yape, Plin, agentes
- **Sandbox:** ✅ Gratis, sin restricciones
- **API:** REST, documentación clara
- **Integración:** Checkout JS (embebido) o redirect
- **Webhooks:** Sí
- **Activación producción:** 1-3 días (digital)
- **Ideal para:** PMEs, startups, primeras integraciones
- **Link:** https://culqi.com

### MercadoPago
- **Disponibilidad en Perú:** ✅ Sí
- **Costo fijo mensual:** Ninguno
- **Comisión:** Variable según plan
- **Medios de pago:** Tarjetas, MP wallet, pago en efectivo
- **Sandbox:** ✅
- **API:** REST + SDK
- **Webhooks:** Sí
- **Ideal para:** Si ya vendes en MercadoLibre
- **Link:** https://mercadopago.com.pe

### Niubiz
- **Costo fijo:** ~S/59/mes
- **Comisión:** 3.5-5% + S/0.30 + IGV
- **Ideal para:** Negocios con +S/100k/mes
- **Para nuestro MVP:** ❌ Demasiado costoso

### Izipay (Interbank)
- **Costo fijo:** Ninguno
- **Comisión:** 3.44% + S/0.69 + IGV
- **Sandbox:** ✅
- **Liquidación:** D+1 (siguiente día hábil)
- **Ideal para:** Negocios que necesitan liquidez rápida
- **Alternativa válida:** Sí

## Recomendación
1. **MVP:** Culqi sandbox (sin costo)
2. **Producción:** Culqi producción (3.44% + IGV)
3. **Alternativa:** Izipay si se necesita liquidación rápida

## Cálculo de Costos Ejemplo
- 10 certificados/mes a S/50 c/u = S/500
- Comisión Culqi: 3.44% × S/500 = S/17.20 + IGV = ~S/19.26
- Neto: ~S/480.74
- Sin costo fijo mensual
