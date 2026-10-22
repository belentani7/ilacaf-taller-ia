import Link from "next/link";
import Hero from "@/components/Hero";
import UrgencyBar from "@/components/UrgencyBar";
import { modules, totalMinutes } from "@/lib/curriculum";

const benefits = [
  { number: "01", title: "Contenido real", description: "Seis módulos con teoría original, caso profesional, ejercicio, evidencia esperada y comprobación." },
  { number: "02", title: "Aprendizaje verificable", description: "Autoevaluaciones con explicación y seguimiento local. Los resultados no se envían a terceros." },
  { number: "03", title: "Criterio profesional", description: "Separación explícita entre los borradores de IA, los datos comprobados y las decisiones humanas." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070d16] text-slate-100">
      <a href="#contenido" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-cyan-200 focus:p-3 focus:text-slate-950">Ir al contenido</a>
      <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#070d16]/95 backdrop-blur-md" aria-label="Principal">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
          <Link href="/" className="font-semibold tracking-[.15em] text-white" aria-label="ILACAF — Inicio">ILA<span className="text-cyan-300">CAF</span><span className="ml-2 font-normal text-slate-500">/ AI</span></Link>
          <div className="flex items-center gap-5 text-xs font-semibold text-slate-300">
            <a href="#temario" className="hidden hover:text-white sm:block">Programa</a>
            <a href="#metodo" className="hidden hover:text-white sm:block">Método</a>
            <Link href="/curso" className="hidden text-cyan-200 hover:text-white sm:block">9 lecciones + laboratorio</Link>
            <Link href="/recursos" className="rounded-lg border border-cyan-300/35 px-3 py-2.5 text-cyan-200 hover:bg-cyan-200/10">Recursos ↗</Link>
          </div>
        </div>
      </nav>
      <main id="contenido">
        <Hero />
        <UrgencyBar />
        <section className="mx-auto max-w-6xl px-6 py-20" id="temario" aria-labelledby="temario-title">
          <div className="mb-10 grid gap-5 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">01 / Programa de aprendizaje</p>
              <h2 id="temario-title" className="mt-4 text-4xl font-semibold tracking-[-.045em] text-white sm:text-5xl">Aprender no es acumular prompts.</h2>
            </div>
            <p className="text-sm leading-7 text-slate-400">{modules.length} unidades · {Math.floor(totalMinutes / 60)} h {totalMinutes % 60} min estimados de estudio guiado. Cada módulo termina con un caso aplicado y una evaluación.</p>
          </div>
          <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((module) => (
              <li key={module.slug}>
                <Link href={`/programa/${module.slug}`} className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#111c2a] p-7 transition-colors hover:border-cyan-300/45 hover:bg-[#152334] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200">
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-300"><span>UNIDAD / {module.number}</span><span>{module.duration}</span></div>
                  <p className="mt-10 text-xs uppercase tracking-[.12em] text-slate-500">{module.area}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">{module.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">{module.promise}</p>
                  <span className="mt-8 inline-flex items-center gap-2 border-t border-white/10 pt-5 text-sm font-semibold text-cyan-200">Abrir unidad <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span></span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
        <section aria-labelledby="laboratorio-complementario" className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-cyan-300/25 bg-gradient-to-br from-[#12283c] to-[#080f19] p-8 sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">Práctica complementaria / Casos profesionales</p>
            <h2 id="laboratorio-complementario" className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">Nueve lecciones aplicadas y un laboratorio de cinco decisiones.</h2>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-300">Amplía los seis módulos principales con tres recorridos específicos de auditoría, derecho y finanzas, situaciones ficticias y explicaciones inmediatas. Las respuestas del laboratorio no se envían a ningún servidor.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/curso" className="rounded-lg bg-cyan-200 px-5 py-3 font-semibold text-slate-950 hover:bg-white">Abrir lecciones ↗</Link>
              <Link href="/curso#laboratorio" className="rounded-lg border border-white/25 px-5 py-3 font-semibold text-white hover:bg-white/10">Practicar decisiones ↗</Link>
            </div>
          </div>
        </section>
        <section id="metodo" className="border-y border-white/10 bg-[#0d1622] py-20" aria-labelledby="metodo-title">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">02 / Método ILACAF</p>
            <h2 id="metodo-title" className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white">Del concepto a la evidencia.</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {benefits.map((x) => (
                <article key={x.number} className="rounded-2xl border border-white/10 p-7">
                  <p className="font-mono text-sm text-cyan-300">{x.number}</p>
                  <h3 className="mt-8 text-lg font-semibold text-white">{x.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{x.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-2">
          <div><p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">03 / Práctica final</p><h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">Un proyecto que se puede revisar.</h2></div>
          <div><p className="text-sm leading-8 text-slate-300">El itinerario termina con el diseño de un piloto responsable: alcance, matriz de riesgos, datos permitidos, casos de prueba, responsable y acta de aprobación humana. No entregamos una certificación ficticia ni atribuimos avales de terceros.</p>
          <div className="mt-6 flex flex-wrap gap-3"><Link href="/programa/implantacion-y-proyecto-final" className="rounded-lg bg-cyan-200 px-5 py-3 font-semibold text-slate-950">Ver proyecto final →</Link><Link href="/recursos" className="rounded-lg border border-white/20 px-5 py-3 font-semibold text-white">Abrir plantillas</Link></div></div>
        </section>
      </main>
      <footer className="border-t border-white/10 px-6 py-9 text-xs text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4"><span>ILACAF / Formación práctica en IA · 2026</span><div className="flex items-center gap-5"><Link href="/privacidad" className="hover:text-white">Privacidad</Link><Link href="/recursos" className="hover:text-white">Recursos</Link><span>Contenido educativo. No constituye asesoramiento legal ni financiero.</span></div></div>
      </footer>
    </div>
  );
}
