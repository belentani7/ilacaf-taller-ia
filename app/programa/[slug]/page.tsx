import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import KnowledgeCheck from "@/components/KnowledgeCheck";
import { findModule, modules } from "@/lib/curriculum";

export function generateStaticParams() {
  return modules.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const module = findModule(slug);
  if (!module) return { title: "Unidad no disponible — ILACAF" };
  return { title: `${module.title} — ILACAF`, description: module.promise };
}

export default async function UnitPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const module = findModule(slug);
  if (!module) notFound();
  const index = modules.findIndex((item) => item.slug === slug);
  const next = modules[index + 1];
  const previous = modules[index - 1];

  return (
    <div className="min-h-screen bg-[#070d16] text-slate-100">
      <a href="#leccion" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-cyan-200 focus:p-3 focus:text-slate-950">Saltar al contenido de la unidad</a>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070d16]/95 backdrop-blur">
        <nav aria-label="Navegación de la unidad" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-5 px-6">
          <Link href="/" className="font-semibold tracking-[.13em] text-white">ILACAF<span className="ml-2 text-cyan-300">/ AULA</span></Link>
          <div className="flex gap-5 text-xs text-slate-300"><Link href="/#temario" className="hover:text-white">Todas las unidades</Link><Link href="/recursos" className="hover:text-white">Plantillas</Link></div>
        </nav>
      </header>
      <main id="leccion" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="border-b border-white/10 py-12 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-cyan-300">UNIDAD {module.number} / {module.area} · {module.duration}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-.05em] text-white sm:text-6xl">{module.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">{module.promise}</p>
          <div className="mt-9 flex flex-wrap gap-3 text-xs font-semibold text-slate-300"><a href="#teoria" className="rounded-full border border-white/20 px-4 py-2 hover:bg-white/10">Teoría</a><a href="#caso" className="rounded-full border border-white/20 px-4 py-2 hover:bg-white/10">Caso</a><a href="#practica" className="rounded-full border border-white/20 px-4 py-2 hover:bg-white/10">Práctica</a><a href="#evaluacion" className="rounded-full border border-white/20 px-4 py-2 hover:bg-white/10">Evaluación</a></div>
        </div>
        <div className="grid gap-10 py-12 lg:grid-cols-[270px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-white/10 bg-[#101b29] p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Al finalizar sabrás</p>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
                {module.outcomes.map((outcome) => <li key={outcome} className="flex gap-3"><span aria-hidden="true" className="text-cyan-300">✓</span>{outcome}</li>)}
              </ul>
              <p className="mt-7 border-t border-white/10 pt-5 text-xs leading-6 text-slate-500">Contenido didáctico. Contrasta requisitos y normas vigentes con fuentes autorizadas y un profesional responsable.</p>
            </div>
          </aside>
          <div className="space-y-14">
            <section id="teoria" aria-labelledby="teoria-title">
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-cyan-300">01 / Marco conceptual</p>
              <h2 id="teoria-title" className="mt-2 text-2xl font-semibold text-white">Aprende los fundamentos</h2>
              <div className="mt-6 space-y-8">
                {module.theory.map((part,i) => (
                  <article key={part.heading} className="border-l border-cyan-300/35 pl-6">
                    <p className="mb-2 font-mono text-xs text-cyan-300">{String(i+1).padStart(2,"0")}</p>
                    <h3 className="text-xl font-semibold text-white">{part.heading}</h3>
                    {part.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-sm leading-8 text-slate-300">{paragraph}</p>)}
                  </article>
                ))}
              </div>
            </section>
            <section id="caso" aria-labelledby="caso-title" className="rounded-2xl border border-white/10 bg-[#101b29] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-cyan-300">02 / Caso profesional ficticio</p>
              <h2 id="caso-title" className="mt-3 text-2xl font-semibold text-white">{module.scenario.title}</h2>
              <p className="mt-5 text-sm leading-8 text-slate-300">{module.scenario.context}</p>
              <h3 className="mt-8 text-sm font-semibold text-white">Material disponible</h3>
              <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-300">{module.scenario.evidence.map(item=><li key={item}>{item}</li>)}</ul>
              <div className="mt-7 rounded-xl border border-cyan-300/20 bg-cyan-300/[.06] p-5">
                <h3 className="font-semibold text-cyan-200">Decisión profesional razonada</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{module.scenario.decision}</p>
              </div>
            </section>
            <section id="practica" aria-labelledby="practice-title">
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-cyan-300">03 / Trabajo aplicado</p>
              <h2 id="practice-title" className="mt-3 text-2xl font-semibold text-white">{module.exercise.title}</h2>
              <ol className="mt-6 space-y-4">
                {module.exercise.instructions.map((instruction,i)=><li key={instruction} className="flex gap-4 rounded-xl border border-white/10 bg-white/[.025] p-4 text-sm leading-7 text-slate-300"><span className="font-mono font-bold text-cyan-300">{String(i+1).padStart(2,"0")}</span>{instruction}</li>)}
              </ol>
              <h3 className="mt-7 font-semibold text-white">Qué debes entregar</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">{module.exercise.deliverable}</p>
              <h3 className="mt-7 font-semibold text-white">Criterios de revisión</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {module.exercise.rubric.map(item=><li key={item} className="rounded-lg bg-cyan-300/[.05] px-4 py-3 text-sm text-slate-200">✓ {item}</li>)}
              </ul>
              <Link href="/recursos" className="mt-6 inline-flex border-b border-cyan-300 pb-1 text-sm font-semibold text-cyan-200 hover:text-white">Consultar las plantillas de trabajo ↗</Link>
            </section>
            <div id="evaluacion"><KnowledgeCheck slug={module.slug} questions={module.quiz}/></div>
            <section aria-labelledby="resources-title" className="border-t border-white/10 pt-8">
              <h2 id="resources-title" className="text-lg font-semibold text-white">Consulta y contrasta</h2>
              <p className="mt-2 text-xs leading-6 text-slate-500">Fuentes externas para profundizar; su contenido y vigencia deben verificarse antes de uso profesional.</p>
              <ul className="mt-4 space-y-3">
                {module.furtherReading.map(source=><li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-cyan-200 underline underline-offset-4 hover:text-white">{source.title} ↗</a></li>)}
              </ul>
            </section>
          </div>
        </div>
        <nav aria-label="Navegación entre unidades" className="flex flex-wrap justify-between gap-4 border-t border-white/10 pt-7 text-sm">
          {previous ? <Link href={`/programa/${previous.slug}`} className="rounded-lg border border-white/15 px-5 py-3 text-white hover:bg-white/10">← {previous.title}</Link> : <Link href="/" className="rounded-lg border border-white/15 px-5 py-3 text-white hover:bg-white/10">← Inicio</Link>}
          {next ? <Link href={`/programa/${next.slug}`} className="rounded-lg bg-cyan-200 px-5 py-3 font-semibold text-slate-950 hover:bg-white">{next.title} →</Link> : <Link href="/recursos" className="rounded-lg bg-cyan-200 px-5 py-3 font-semibold text-slate-950">Recursos finales →</Link>}
        </nav>
      </main>
    </div>
  );
}
