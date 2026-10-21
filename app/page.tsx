import Link from "next/link";
import {
  ArrowRight, BookOpen, CheckCircle2, FileText, GraduationCap,
  LockKeyhole, Scale, ShieldCheck, Sparkles, Wallet,
} from "lucide-react";

const tracks = [
  {
    number: "01", name: "Auditoría y control", icon: ShieldCheck,
    summary: "Diseña pruebas auditables, compara hallazgos y documenta límites sin delegar el criterio al modelo.",
    lessons: ["Planificación basada en riesgos", "Evidencias, trazabilidad y verificaciones", "Hallazgos reproducibles"],
  },
  {
    number: "02", name: "Derecho y cumplimiento", icon: Scale,
    summary: "Usa IA para clasificar información y preparar documentos sin inventar leyes ni citas.",
    lessons: ["Fuentes y jurisdicción", "Revisión contractual asistida", "Privacidad y deber de confidencialidad"],
  },
  {
    number: "03", name: "Finanzas y decisiones", icon: Wallet,
    summary: "Formula escenarios, valida cálculos y comunica incertidumbre de manera comprensible.",
    lessons: ["Calidad de datos y supuestos", "Comparación de escenarios", "Informes verificables"],
  },
];

const principles = [
  ["Privacidad primero", "Trabaja con casos inventados o anonimizados. Nunca pegues información confidencial en servicios sin autorización."],
  ["Fuentes comprobables", "Comprueba las referencias legales, contables y técnicas en sus fuentes originales y vigentes."],
  ["Humano responsable", "La IA propone; el profesional valida la evidencia y asume la decisión final."],
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#060913] text-slate-100">
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:p-3 focus:text-slate-900">
        Saltar al contenido
      </a>
      <header className="border-b border-white/10 bg-[#060913]/95">
        <nav aria-label="Navegación principal" className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-5">
          <Link href="/" aria-label="ILACAF, inicio" className="flex items-center gap-3 font-semibold tracking-wide">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 text-cyan-200"><GraduationCap size={23}/></span>
            <span>ILACAF <span className="font-normal text-slate-400">/ IA Profesional</span></span>
          </Link>
          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-300">
            <a href="#programa" className="hover:text-white focus:text-white">Programa</a>
            <a href="#metodo" className="hover:text-white focus:text-white">Metodología</a>
            <a href="#preguntas" className="hover:text-white focus:text-white">Preguntas</a>
            <Link href="/curso" className="rounded-lg bg-cyan-300 px-4 py-2 font-semibold text-slate-950 transition hover:bg-white">Acceder al curso</Link>
          </div>
        </nav>
      </header>

      <main id="contenido">
        <section className="relative isolate border-b border-white/10">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_18%,rgba(13,148,136,.22),transparent_48%),radial-gradient(ellipse_at_15%_65%,rgba(30,64,175,.22),transparent_50%)]"/>
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-[1.15fr_.85fr] md:py-28">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/25 bg-cyan-200/5 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-cyan-200"><Sparkles size={14}/> Formación aplicada</span>
              <h1 className="mt-9 max-w-4xl text-5xl font-semibold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Inteligencia artificial con <span className="text-cyan-300">criterio profesional.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Un itinerario práctico para auditoría, derecho y finanzas. Aprende a formular preguntas útiles, revisar evidencias y detectar cuándo una respuesta de IA no debe utilizarse.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/curso" className="inline-flex items-center gap-3 rounded-xl bg-cyan-300 px-7 py-4 font-semibold text-slate-950 transition hover:bg-white">
                  Empezar las lecciones <ArrowRight size={18}/>
                </Link>
                <a href="#programa" className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-medium transition hover:bg-white/10">Explorar temario</a>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">Material educativo disponible en abierto. No se anuncian fechas, plazas o certificaciones sin confirmación.</p>
            </div>
            <div className="relative rounded-[2rem] border border-white/15 bg-[#0b1424] p-5 shadow-2xl shadow-cyan-950/30">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4 text-xs text-slate-400">
                <span className="font-mono uppercase tracking-[.16em]">Laboratorio de decisiones</span>
                <span className="flex items-center gap-2 text-emerald-300"><span className="h-2 w-2 rounded-full bg-emerald-300"/> APRENDIZAJE ABIERTO</span>
              </div>
              <div className="rounded-xl bg-slate-950 p-5 font-mono text-sm leading-7">
                <p className="text-slate-500">CASO / 001</p>
                <p className="mt-3 text-slate-100">“Resume las desviaciones del presupuesto y explica sus causas.”</p>
                <p className="mt-5 text-amber-200">⚑ ¿Se han comprobado las cifras, el periodo y las fuentes?</p>
                <p className="mt-4 border-l-2 border-cyan-300 pl-4 text-cyan-200">Una respuesta convincente no es todavía una respuesta validada.</p>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {["Evidencia", "Verificación", "Decisión"].map((item, idx) => (
                  <div key={item} className="rounded-xl border border-white/10 p-3 text-center">
                    <span className="block text-xs text-cyan-300">0{idx + 1}</span>
                    <span className="mt-1 block text-xs text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="programa" className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex max-w-3xl flex-col gap-4">
            <span className="text-sm font-semibold uppercase tracking-[.18em] text-cyan-300">El programa</span>
            <h2 className="text-4xl font-semibold tracking-tight text-white">Tres disciplinas. Un mismo estándar de rigor.</h2>
            <p className="text-lg text-slate-400">Cada bloque contiene explicaciones, casos, ejercicios aplicados y criterios para comprobar los resultados.</p>
          </div>
          <div className="mt-11 grid gap-5 lg:grid-cols-3">
            {tracks.map((track) => (
              <article key={track.name} className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[.035] p-7 transition hover:border-cyan-300/30">
                <div className="flex items-center justify-between"><track.icon size={28} className="text-cyan-300" aria-hidden="true"/><span className="font-mono text-sm text-slate-500">{track.number}</span></div>
                <h3 className="mt-8 text-2xl font-semibold">{track.name}</h3>
                <p className="mt-4 min-h-28 leading-7 text-slate-400">{track.summary}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-300">
                  {track.lessons.map(lesson => <li key={lesson} className="flex items-start gap-3"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-cyan-300"/>{lesson}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <Link href="/curso" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 underline-offset-4 hover:underline">Ver las lecciones y actividades <ArrowRight size={16}/></Link>
        </section>

        <section id="metodo" className="border-y border-white/10 bg-[#0b1424] py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[.18em] text-cyan-300">Nuestro método</span>
              <h2 className="mt-4 text-4xl font-semibold">IA útil, pero nunca a ciegas.</h2>
              <p className="mt-6 max-w-lg leading-8 text-slate-300">Trabajamos desde casos concretos. Cada ejercicio distingue entre lo que el modelo afirma, la evidencia disponible y lo que queda sin comprobar.</p>
              <Link href="/curso#laboratorio" className="mt-7 inline-flex items-center gap-2 font-semibold text-cyan-300 hover:text-white"><FileText size={18}/> Abrir el laboratorio interactivo <ArrowRight size={17}/></Link>
            </div>
            <div className="space-y-4">
              {principles.map(([title, text], idx) => (
                <div key={title} className="flex gap-5 rounded-2xl border border-white/10 bg-white/[.03] p-6">
                  <span className="font-mono text-cyan-300">0{idx + 1}</span>
                  <div><h3 className="text-lg font-semibold text-white">{title}</h3><p className="mt-2 leading-7 text-slate-400">{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="preguntas" className="mx-auto max-w-4xl px-6 py-24">
          <div className="mb-10 flex items-center gap-3"><BookOpen className="text-cyan-300"/><h2 className="text-3xl font-semibold">Preguntas frecuentes</h2></div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {[
              ["¿Necesito conocimientos de programación?", "No. El material parte de casos profesionales y ejercicios de interpretación, redacción, análisis y verificación."],
              ["¿Puedo usar datos reales de mis clientes?", "No sin autorización y garantías adecuadas. Los ejemplos son ficticios y los ejercicios recomiendan datos sintéticos o anonimizados."],
              ["¿Hay una convocatoria o certificado disponible?", "Esta versión permite estudiar el temario abierto. No confirma inscripciones, eventos futuros ni certificaciones."],
              ["¿Los resultados de IA sustituyen asesoría especializada?", "No. Los materiales son educativos y no sustituyen una revisión legal, financiera, contable o de seguridad independiente."],
            ].map(([question, answer]) => (
              <details key={question} className="group py-5"><summary className="cursor-pointer list-none font-medium text-slate-100 marker:hidden">{question}<span aria-hidden="true" className="float-right text-cyan-300 group-open:rotate-45">+</span></summary><p className="mt-4 max-w-2xl leading-7 text-slate-400">{answer}</p></details>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 bg-[#040611]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-9 text-sm text-slate-400">
          <p className="flex items-center gap-2"><LockKeyhole size={16} /> ILACAF · Formación responsable en IA</p>
          <Link href="/curso" className="font-medium text-cyan-200 hover:underline">Biblioteca de lecciones</Link>
          <p>Contenido educativo · Sin registro ni seguimiento de usuarios</p>
        </div>
      </footer>
    </div>
  );
}
