# Investigación: Fuentes de Datos Astronómicos

## Resumen Ejecutivo
Para el catálogo de cuerpos celestes, recomendamos **SIMBAD** como fuente principal, con importación inicial de datos verificables.

## Fuentes Evaluadas

### 1. SIMBAD (CDS Strasbourg)
- **URL:** https://simbad.u-strasbg.fr/simbad/
- **Datos:** Datos básicos, cross-identificaciones, bibliografía, mediciones de objetos fuera del sistema solar
- **Gratuita:** Sí
- **API:** Sí (TAP, ADQL)
- **Uso comercial:** Sí, bajo licencia ODbL
- **Licencia:** ODbL (Open Database License)
- **Facilidad de integración:** Media (API TAP)
- **Identificadores:** IDs de SIMBAD, nombres comunes, designaciones
- **Recomendación:** ✅ **FUENTE PRINCIPAL**

### 2. Hypatia Catalog
- **URL:** https://www.hypatiacatalog.com/api
- **Datos:** Propiedades estelares, composiciones, abundancias elementales
- **Gratuita:** Sí
- **API:** REST (v2.2.0)
- **Uso comercial:** No especificado claramente
- **Facilidad de integración:** Buena (API simple)
- **Recomendación:** ⚠️ Complementaria para datos de composición

### 3. NED (NASA/IPAC Extragalactic Database)
- **URL:** https://ned.ipac.caltech.edu/
- **Datos:** Objetos extragalácticos
- **Gratuita:** Sí
- **API:** TAP (ADQL)
- **Uso comercial:** Sí (gobierno de EE.UU.)
- **Recomendación:** ✅ Para galaxias y nebulosas

### 4. KeepTrack API
- **URL:** https://keeptrack.space/api
- **Datos:** Satélites, basura espacial
- **Gratuita:** Solo privada/no-comercial (CC BY-NC 4.0)
- **Recomendación:** ❌ No apta para uso comercial

## Estrategia Recomendada para MVP

1. **Importar un subconjunto curado de SIMBAD** (~200-500 estrellas notables)
2. **Enriquecer con datos de NED** para objetos extragalácticos
3. **Almacenar en PostgreSQL** — datos estáticos, no consultamos API en tiempo real
4. **Script de importación** que consulta SIMBAD, procesa y guarda en la DB
5. **Post-MVP:** posibilidad de consultar APIs en tiempo real para datos adicionales

## Campos de SIMBAD a Importar
- `main_id` — ID principal
- `ids` — Cross-identifications
- `otype` — Tipo de objeto
- `spType` — Tipo espectral
- `spProg` — Tipo espectral del programa
- `flux_V` — Magnitud V
- `coo` — Coordenadas (RA, Dec)
- `dist` — Distancia (si disponible)
- `bibcode` — Referencias bibliográficas
