# Requisitos Funcionales: Pagos

## FR-PAY-001: Flujo de Pago (Sandbox)
**Como** usuario, **quiero** completar una compra para recibir mi certificado.

### Estado del MVP: Pago Simulado
Durante el MVP, se utiliza Culqi en modo sandbox. No se procesan pagos reales.

### Datos del checkout
- Nombre en la tarjeta
- Número de tarjeta (sandbox: 4111111111111111)
- Fecha de expiración
- CVV
- Email de confirmación

### Comportamiento
- Formulario de pago integrado (Culqi Checkout)
- Procesamiento en sandbox (sin cargo real)
- Confirmación exitosa → generar certificado
- Error → mostrar mensaje, permitir reintentar

## FR-PAY-002: Confirmación del Pago
**Como** sistema, **debo** confirmar el pago antes de generar el certificado.

### Flujo
1. Usuario completa formulario de pago
2. Culqi procesa en sandbox
3. Webhook o respuesta de confirmación
4. Actualizar estado del certificado a PAID
5. Generar PDF
6. Actualizar estado a GENERATED
7. Notificar al usuario

## FR-PAY-003: Precio (MVP)
- Precio fijo por certificado
- Configurable en variables de entorno
- Mostrado antes del checkout
- Sin impuestos adicionales en MVP (considerar IGV posterior)

## FR-PAY-004: Webhook de Culqi
- Endpoint: `/api/payment/webhook`
- Verificar firma del webhook
- Procesar eventos: `payment.success`, `payment.failed`
- Idempotencia: no procesar el mismo evento dos veces
