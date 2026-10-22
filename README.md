# ILACAF — IA para Profesionales

**Aprender · Verificar · Aplicar.** Aula abierta para trabajo responsable con inteligencia artificial en auditoría, derecho y finanzas. Un proyecto educativo propio que conserva su identidad y componentes anteriores, corrigiendo la página inicial genérica y los reclamos de plazas y fechas no comprobados.

## Producto

- Página de inicio completa con propuesta formativa, índice real de seis unidades, metodología y acceso a plantillas.
- **Seis unidades desarrolladas:** (1) fundamentos y criterio, (2) documentos y evidencia, (3) auditoría y controles, (4) uso jurídico responsable, (5) análisis financiero, (6) implantación y proyecto final.
- **Cada unidad** incluye resultados, teoría en tres capítulos, caso ficticio, material de soporte, toma de decisión, actividad paso a paso, criterios de revisión, autoevaluación explicada y referencia externa.
- Evaluación interactiva accesible. Cuando se supera, el progreso se guarda localmente, por módulo, sin formularios de registro ni APIs.
- Cuatro [plantillas descargables](app/recursos/page.tsx): matriz de riesgos, trazabilidad documental, conciliación financiera y ficha final de piloto. Los archivos viven dentro de `public/templates/` y no requieren proveedores externos.
- [Página de privacidad](app/privacidad/page.tsx) con alcance y limitaciones reales, sin inventar servicios o acreditaciones.

**No hay inscripciones activas, pagos, plazas vendidas, certificados, tutorización humana ni aprobaciones externas implementadas.** No se atribuyen cifras reales a una convocatoria histórica ni se publican testimonios inventados.

## Desarrollo local

Next.js 16 + React 19 + TypeScript + Tailwind 4. Requiere Node 22.

```bash
npm install --no-audit --no-fund
npm run dev
```

Abre http://localhost:3000 en un navegador.

## Arquitectura y rutas

```text
app/
  page.tsx                       homepage corporativa y catálogo
  programa/[slug]/page.tsx       lecciones dinámicas; se generan 6 rutas
  recursos/page.tsx              descargas gratuitas
  privacidad/page.tsx            límites de privacidad y producto
  layout.tsx                     metadatos y estructura global
components/
  Hero.tsx                       portada editorial
  UrgencyBar.tsx                 avance real, sustituye contador ficticio
  KnowledgeCheck.tsx            evaluación y progreso local
lib/
  curriculum.ts                  fuente canónica de todo el temario
public/templates/
  matriz-riesgos.csv
  trazabilidad-fuentes.csv
  conciliacion-financiera.csv
  ficha-piloto.md
tests/
  curriculum.test.mjs           pruebas contractuales del material
```

## Verificación de entrega

```bash
npm run test
npm run typecheck
npm run lint
npm run build
```

Los controles revisan contenido, navegación, unicidad de lecciones, respuestas y explicaciones de las evaluaciones, existencia de plantillas, compilación TypeScript y producción. `.github/workflows/ci.yml` ejecuta esa secuencia sobre la rama de publicación. No declarar el sitio publicado hasta obtener resultados verificables y desplegar/visitar la instancia real.

## Privacidad y ética

El seguimiento de unidades superadas se guarda en `localStorage` bajo `ilacaf-workshop-completed-v1`, sin sincronización de cuentas. Las preguntas se corrigen en el navegador. No introduzcas datos personales reales ni información confidencial en ejercicios. Las plantillas usan datos ficticios. Los enlaces de referencia externos tienen políticas independientes.

Este material no sustituye asesoramiento legal, contable, financiero o de seguridad profesional; su exactitud y vigencia deben revisarse antes de usarlo en un caso real. No incluye un backend de acreditación. Para publicar un programa con inscripción real harían falta operaciones, responsables, consentimiento y documentación legal específicos.

Proyecto: `belentani7/ilacaf-taller-ia`. Publicación condicionada a pruebas e infraestructura de despliegue verificadas.
