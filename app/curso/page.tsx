import Link from "next/link";
import { ArrowLeft, ArrowRight, ClipboardList, FileCheck2, ShieldCheck } from "lucide-react";
import PracticeLab from "../../components/PracticeLab";
import LessonWorkspace from "../../components/LessonWorkspace";

const modules = [
  {
    id: "auditoria",
    number: "01",
    title: "Auditoría: de la hipótesis a la evidencia",
    intro: "La IA ayuda a organizar preguntas y comparar documentos, pero un hallazgo requiere una prueba verificable y una explicación del procedimiento.",
    goals: ["Distinguir anomalía, observación y hallazgo confirmado.", "Definir controles y evidencia suficiente.", "Crear una pista de auditoría legible."],
    lessons: [
      {
        title: "Planificar una revisión basada en riesgos",
        theory: "Empieza por el proceso, no por la herramienta. Identifica activos, responsables, objetivo de control, amenazas y consecuencia. Solicita al modelo una matriz de riesgos provisional, nunca un dictamen.",
        example: "Proceso ficticio: pagos duplicados en una empresa con tres aprobadores. Pregunta: ¿qué evidencia demuestra que una misma factura fue procesada dos veces?",
        action: "Redacta tres pruebas: comparación de identificadores, conciliación de extractos y revisión de autorizaciones.",
        prompt: "Actúa como asistente de planificación. Con este proceso ficticio [descripción], propone riesgos, pruebas y evidencia esperada en tres columnas. Separa datos conocidos de hipótesis; no inventes resultados.",
      },
      {
        title: "Analizar evidencias con trazabilidad",
        theory: "Cada afirmación debe asociarse a un registro, periodo, versión del documento y procedimiento. Nunca conviertas patrones estadísticos en hechos sin comparar contra el origen.",
        example: "En un archivo de ejemplo hay 20 facturas; dos comparten importe y proveedor pero tienen fechas diferentes. Eso es una señal que requiere revisión, no una duplicidad demostrada.",
        action: "Diseña un registro con: código de prueba, documento, fecha, resultado, limitación y revisor.",
        prompt: "Clasifica estos registros ficticios por posible duplicidad. Devuelve ID de cada fila, regla utilizada, coincidencias y dudas. No concluyas fraude ni inventes datos ausentes.",
      },
      {
        title: "Redactar hallazgos defendibles",
        theory: "Una observación sólida separa criterio, condición, causa posible, impacto estimado y recomendación. Explicita el grado de certeza y conserva las discrepancias.",
        example: "En una prueba no consta doble aprobación para 4 de 30 expedientes. La falta de constancia no demuestra que la aprobación jamás existió.",
        action: "Escribe una conclusión que describa el alcance de la muestra y proponga comprobar autorizaciones en los sistemas de origen.",
        prompt: "Revisa el hallazgo adjunto e identifica expresiones absolutas no respaldadas, evidencias faltantes y recomendaciones verificables. No añadas hechos ni porcentajes.",
      },
    ],
  },
  {
    id: "derecho",
    number: "02",
    title: "Derecho: fuentes, revisión y límites",
    intro: "Un modelo puede ordenar argumentos, pero no garantiza vigencia normativa, exactitud de citas ni aplicabilidad a una jurisdicción.",
    goals: ["Precisar jurisdicción, fecha y alcance.", "Revisar contratos mediante una lista de control.", "Evitar citas inventadas y exposiciones de información protegida."],
    lessons: [
      {
        title: "Verificar la fuente y la vigencia",
        theory: "Antes de usar cualquier norma, confirma número, texto oficial, fecha y reformas. Desconfía de sentencias citadas sin enlace comprobable al órgano emisor.",
        example: "El modelo propone una resolución judicial. No puedes localizarla en el repositorio oficial: debe marcarse como referencia no verificada, nunca incluirse como autoridad.",
        action: "Crea una ficha de verificación con fuente primaria, jurisdicción, fecha de consulta, texto aplicable y dudas pendientes.",
        prompt: "A partir de esta pregunta jurídica hipotética, enumera qué normas y fuentes oficiales habría que consultar. No proporciones citas ni decisiones que no puedas verificar y señala la jurisdicción faltante.",
      },
      {
        title: "Revisión contractual asistida",
        theory: "Primero define riesgos concretos: duración, renovación, confidencialidad, tratamiento de datos, responsabilidad, rescisión y ley aplicable. Trabaja con un contrato de prueba.",
        example: "En un contrato ficticio se dice 'renovación automática' pero no aparece el plazo de preaviso. Esto es una laguna a examinar, no necesariamente una nulidad.",
        action: "Construye una tabla cláusula/riesgo/pregunta/evidencia; marca desconocidos antes de proponer redacciones.",
        prompt: "Analiza el contrato sintético a continuación. Señala cláusulas ambiguas con extractos exactos, preguntas para un abogado y aspectos que dependen de jurisdicción. No emitas asesoría concluyente.",
      },
      {
        title: "Confidencialidad y responsabilidad",
        theory: "Distingue datos públicos, internos, personales y sujetos a secreto profesional. La anonimización puede ser insuficiente si quedan identificadores indirectos.",
        example: "Eliminar el nombre de una parte no vuelve anónimo un escrito que incluye fechas, direcciones e identificadores únicos.",
        action: "Redacta un protocolo que impida enviar contenido confidencial a servicios sin autorización, revisión contractual y controles de acceso.",
        prompt: "Propón una checklist preventiva para trabajar con IA en un despacho sin introducir documentos de clientes, datos identificativos ni secretos comerciales.",
      },
    ],
  },
  {
    id: "finanzas",
    number: "03",
    title: "Finanzas: números antes que narrativa",
    intro: "Toda explicación financiera depende de una conciliación de datos, unidades, periodos y supuestos; la IA puede equivocarse incluso con operaciones sencillas.",
    goals: ["Comprobar conciliaciones y variaciones.", "Analizar escenarios sin falsas certezas.", "Comunicar supuestos y sensibilidad."],
    lessons: [
      {
        title: "Calidad de datos y comparabilidad",
        theory: "Comprueba moneda, escala, periodos, inflaciones, categorías y duplicados antes de interpretar. No compares un trimestre con un año sin normalizar.",
        example: "Ventas Q1: 120 000 €, Q2: 132 000 €. Diferencia 12 000 €; variación sobre Q1 = 12 000 / 120 000 = 10 %. No es 12 %.",
        action: "Calcula manualmente variación absoluta y relativa y solicita a la IA que describa supuestos, sin atribuir la causa al mercado.",
        prompt: "Para los importes de prueba proporcionados, presenta cálculo paso a paso de la variación porcentual, unidades y denominador. Distingue observaciones de causas no probadas.",
      },
      {
        title: "Modelar escenarios",
        theory: "Construye un caso base, uno conservador y uno expansivo. Explicita qué variable cambia y cómo afecta al resultado. No confundas escenario con pronóstico.",
        example: "Costes fijos: 40 000 €. Ingreso base: 55 000 €. Si el ingreso cae 15 % y no hay costes variables adicionales, el margen pasa de 15 000 € a 6 750 €.",
        action: "Verifica el cálculo 55 000 × 0,85 − 40 000 = 6 750. Discute qué ocurriría si los costes también cambian.",
        prompt: "Modela tres escenarios con estas cifras ficticias. Explica cada fórmula, verifica las sumas y lista todas las hipótesis. No presentes resultados como predicciones garantizadas.",
      },
      {
        title: "Comunicar una decisión con límites",
        theory: "Una presentación ejecutiva debe mostrar resultados, supuestos, riesgos y fuente. Las cifras calculadas no justifican por sí solas una recomendación.",
        example: "Una medida reduce costes operativos estimados 8 %, pero el coste de transición y el impacto en calidad son desconocidos. La recomendación debe dejarlo visible.",
        action: "Redacta una nota de decisión de 150 palabras con tres métricas contrastadas, una limitación y un criterio para revisarla.",
        prompt: "Reescribe esta nota financiera ficticia para dirección. Conserva cifras comprobadas, explicita supuestos y señala lagunas. No inventes ROI ni probabilidades.",
      },
    ],
  },
];

const protocol = [
  ["01 · Delimita", "Problema, destinatario, periodo, jurisdicción y restricciones del ejercicio."],
  ["02 · Introduce datos de prueba", "Usa información inventada, pública o adecuadamente autorizada; minimiza datos."],
  ["03 · Solicita un formato verificable", "Pide tablas con referencia a filas, fórmulas, supuestos y dudas."],
  ["04 · Verifica fuera del modelo", "Contrasta cálculos, documentos y normas en fuentes independientes."],
  ["05 · Registra la revisión", "Conserva el resultado, el control realizado y los límites de la conclusión."],
];

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-100">
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:bg-white focus:p-3 focus:text-slate-900">Saltar al contenido</a>
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5" aria-label="Navegación del curso">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200 hover:text-white"><ArrowLeft size={17}/> ILACAF / Inicio</Link>
          <span className="text-sm text-slate-400">Biblioteca de formación · Acceso abierto</span>
        </nav>
      </header>
      <main id="contenido" className="mx-auto max-w-6xl px-6 pb-24">
        <section className="max-w-4xl py-20">
          <p className="text-sm font-semibold uppercase tracking-[.18em] text-cyan-300">Curso práctico</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">Trabajar con IA sin perder el juicio profesional.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Nueve lecciones en tres áreas. Cada lección incluye explicación, caso, una actividad y un prompt que puedes adaptar con datos ficticios. No necesitas una cuenta ni compartir información.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {modules.map(m => <a key={m.id} href={`#${m.id}`} className="rounded-full border border-cyan-300/30 px-4 py-2 text-sm text-cyan-100 hover:bg-cyan-300/10">{m.number} · {m.title.split(":")[0]}</a>)}
            <a href="#laboratorio" className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950">Ejercicio final</a>
          </div>
        </section>
        <aside className="mb-20 flex items-start gap-4 rounded-2xl border border-amber-200/20 bg-amber-200/5 p-5 text-sm leading-7 text-amber-100">
          <ShieldCheck className="mt-1 shrink-0" size={21} />
          <p><strong>Antes de empezar:</strong> estos materiales son educativos. Ninguna respuesta de IA sustituye una comprobación independiente o el criterio de un profesional habilitado. No uses datos identificables de clientes en los ejercicios.</p>
        </aside>
        <div className="space-y-24">
          {modules.map(module => (
            <section key={module.id} id={module.id} aria-labelledby={`title-${module.id}`} className="scroll-mt-8 border-t border-white/15 pt-12">
              <p className="font-mono text-sm text-cyan-300">BLOQUE {module.number}</p>
              <h2 id={`title-${module.id}`} className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{module.title}</h2>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">{module.intro}</p>
              <div className="mt-8 rounded-2xl bg-[#101b2b] p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold"><FileCheck2 className="text-cyan-300" size={20}/> Lo que practicarás</h3>
                <ul className="mt-4 grid gap-3 md:grid-cols-3">{module.goals.map(goal => <li className="border-l-2 border-cyan-300/50 pl-3 text-sm leading-6 text-slate-300" key={goal}>{goal}</li>)}</ul>
              </div>
              <div className="mt-8 grid gap-5">
                {module.lessons.map((lesson, i) => (
                  <article key={lesson.title} className="rounded-3xl border border-white/10 bg-white/[.03] p-6 sm:p-8">
                    <h3 className="text-2xl font-semibold text-white"><span className="mr-3 font-mono text-base text-cyan-300">{module.number}.{i + 1}</span>{lesson.title}</h3>
                    <div className="mt-7 grid gap-6 lg:grid-cols-2">
                      <div className="space-y-6">
                        <div><h4 className="text-sm font-semibold uppercase tracking-widest text-cyan-200">Concepto</h4><p className="mt-2 leading-7 text-slate-300">{lesson.theory}</p></div>
                        <div><h4 className="text-sm font-semibold uppercase tracking-widest text-cyan-200">Caso ficticio</h4><p className="mt-2 leading-7 text-slate-300">{lesson.example}</p></div>
                      </div>
                      <div className="space-y-6">
                        <div className="rounded-xl border border-cyan-300/15 bg-cyan-300/5 p-5">
                          <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-cyan-200"><ClipboardList size={17}/> Tu tarea</h4>
                          <p className="mt-3 leading-7 text-slate-200">{lesson.action}</p>
                        </div>
                        <div className="rounded-xl bg-slate-950 p-5">
                          <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Prompt de trabajo</h4>
                          <p className="mt-3 whitespace-pre-wrap font-mono text-sm leading-7 text-slate-200">{lesson.prompt}</p>
                        </div>
                        <LessonWorkspace id={`${module.number}-${i + 1}`} title={`${module.title} · ${lesson.title}`} />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
        <section className="mt-24 scroll-mt-8" id="protocolo">
          <h2 className="text-3xl font-semibold text-white">Protocolo de trabajo repetible</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-400">Úsalo como lista de comprobación en cada ejercicio, también cuando la respuesta del modelo parece correcta.</p>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {protocol.map(([title, body]) => <li key={title} className="rounded-2xl border border-white/10 bg-[#101b2b] p-6"><h3 className="font-semibold text-cyan-200">{title}</h3><p className="mt-3 leading-7 text-slate-300">{body}</p></li>)}
          </ol>
        </section>
        <div id="laboratorio" className="mt-24 scroll-mt-8"><PracticeLab/></div>
        <section className="mt-16 rounded-3xl border border-white/10 p-7">
          <h2 className="text-xl font-semibold text-white">Has completado el itinerario</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">Puedes repetir las actividades con otros casos sintéticos. Ningún resultado se envía a un servidor; tampoco se emite un certificado o una calificación formal.</p>
          <Link href="/" className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-200 hover:text-white">Volver al inicio <ArrowRight size={17}/></Link>
        </section>
      </main>
    </div>
  );
}
