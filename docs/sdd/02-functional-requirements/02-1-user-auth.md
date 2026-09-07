# Requisitos Funcionales: Autenticación de Usuarios

## FR-AUTH-001: Registro
**Como** usuario nuevo, **quiero** crear una cuenta para poder comprar certificados.

### Datos del formulario
- Nombre (requerido, 2-50 caracteres)
- Email (requerido, formato válido, único)
- Contraseña (requerido, mínimo 8 caracteres)
- Confirmar contraseña (debe coincidir)

### Validaciones
- Email no puede estar ya registrado
- Contraseña mínimo 8 caracteres
- Confirmar contraseña debe coincidir
- Nombre: solo letras, espacios, tildes

### Comportamiento
- Envío exitoso: crear usuario, iniciar sesión automáticamente, redirigir a `/dashboard`
- Email duplicado: mostrar error "Este email ya está registrado"
- Datos inválidos: mostrar errores inline

## FR-AUTH-002: Inicio de Sesión
**Como** usuario registrado, **quiero** iniciar sesión para acceder a mi cuenta.

### Datos del formulario
- Email (requerido)
- Contraseña (requerido)

### Comportamiento
- Credenciales correctas: iniciar sesión, redirigir a `/dashboard`
- Credenciales incorrectas: mostrar error genérico "Email o contraseña incorrectos"
- Opción de "Recordarme" (sesión persistente)

## FR-AUTH-003: Cierre de Sesión
**Como** usuario, **quiero** cerrar sesión desde mi dashboard.

### Comportamiento
- Cerrar sesión y redirigir a la landing page

## FR-AUTH-004: Protección de Rutas
Las siguientes rutas requieren autenticación:
- `/dashboard/*`
- `/certificate/customize/*`
- `/certificate/preview/*`

Rutas públicas:
- `/` (landing)
- `/catalog` (catálogo)
- `/verify/[code]` (verificación)
- `/login`, `/register`

## FR-AUTH-005: Sesión
- Sesión persistente (cookie segura httpOnly)
- Expiración: 30 días
- Renovación automática al navegar
