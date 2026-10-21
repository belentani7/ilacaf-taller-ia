# ILACAF · Formación profesional en inteligencia artificial

Sitio Next.js de formación para profesionales de auditoría, derecho y finanzas.

## Producto

- Portada con identidad visual propia, temario, metodología, FAQ y enlaces internos.
- Biblioteca en `/curso` con **9 lecciones completas** (3 bloques), ejemplos inventados, actividades y prompts reutilizables.
- Laboratorio interactivo de cinco situaciones con explicaciones y puntuación calculada en el navegador.
- Adaptación a móvil, navegación por teclado, semántica HTML y enlaces de salto.
- Sin backend de estudiantes ni inscripción ficticia. El curso no presenta fechas, cupos, certificados ni precios no confirmados.
- El contenido no constituye asesoramiento jurídico, financiero ni de auditoría.

## Ejecutar

Requisitos: Node.js compatible con Next.js 16.

```sh
npm install
npm run lint
npm run build
npm run start
```

Desarrollo: `npm run dev`. Rutas: `/` y `/curso`.

## Principios del material

Los ejercicios utilizan ejemplos inventados. Evita enviar datos privados o sujetos a secreto profesional a servicios externos; comprueba toda referencia normativa y cálculo en sus fuentes originales. La aplicación no guarda respuestas del laboratorio ni contiene autenticación.

## Publicación

Antes de desplegar, confirma dominio, convocatoria y datos de contacto con el titular. No inventes disponibilidad ni añadas formularios que simulen una inscripción sin almacenamiento y tratamiento reales.
