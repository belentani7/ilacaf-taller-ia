import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recursos de trabajo — ILACAF",
  description: "Plantillas educativas descargables para documentación, auditoría, conciliación y pilotos de IA.",
};

const resources = [
  { id:"01", title:"Matriz de riesgos y controles", kind:"CSV", url:"/templates/matriz-riesgos.csv", description:"Prioriza riesgos por contexto, evidencia, responsable, control preventivo y criterio de bloqueo." },
  { id:"02", title:"Registro de trazabilidad de fuentes", kind:"CSV", url:"/templates/trazabilidad-fuentes.csv", description:"Relaciona cada afirmación con su fuente, versión, pasaje y verificación pendiente." },
  { id:"03", title:"Conciliación financiera", kind:"CSV", url:"/templates/conciliacion-financiera.csv", description:"Ejemplo ficticio para comprobar variaciones absolutas y relativas, moneda y periodo." },
  { id:"04", title:"Ficha de piloto de inteligencia artificial", kind:"MD", url:"/templates/ficha-piloto.md", description:"Paquete final con alcance, datos autorizados, pruebas positivas y negativas, riesgos y acta de aprobación." },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#070d16] text-slate-100">
      <header className="border-b border-white/10"><nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6"><Link href="/" className="font-semibold tracking-[.14em]">ILACAF<span className="text-cyan-300"> / AI</span></Link><Link href="/#temario" className="text-sm text-cyan-200 hover:text-white">Volver al programa ↗</Link></nav></header>
      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[.2em] text-cyan-300">Biblioteca de trabajo / 2026</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-.05em] text-white sm:text-6xl">El aprendizaje produce evidencia.</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">Plantillas originales, editables y listas para usar en los ejercicios del itinerario. Todos los datos incluidos son ficticios y sirven exclusivamente como ejemplo.</p>
        <section aria-label="Descargas" className="mt-12 grid gap-4 md:grid-cols-2">
          {resources.map((resource) => (
            <article key={resource.id} className="flex flex-col rounded-2xl border border-white/10 bg-[#111c2a] p-7">
              <div className="flex items-center justify-between"><span className="font-mono text-sm text-cyan-300">{resource.id} / RECURSO</span><span className="rounded border border-white/20 px-2.5 py-1 font-mono text-xs text-slate-400">{resource.kind}</span></div>
              <h2 className="mt-8 text-2xl font-semibold tracking-tight text-white">{resource.title}</h2>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">{resource.description}</p>
              <a href={resource.url} download className="mt-8 inline-flex w-fit rounded-lg bg-cyan-200 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-white">Descargar plantilla ↓</a>
            </article>
          ))}
        </section>
        <section className="mt-14 rounded-2xl border border-cyan-300/25 bg-cyan-300/[.055] p-8">
          <h2 className="text-xl font-semibold text-white">Cómo trabajar con estas plantillas</h2>
          <ol className="mt-5 list-inside list-decimal space-y-3 text-sm leading-7 text-slate-300">
            <li>Descarga una copia y conserva el archivo original intacto.</li>
            <li>Trabaja con supuestos ficticios o información autorizada y minimizada.</li>
            <li>Añade documentos, responsables, fecha de revisión y pruebas reales.</li>
            <li>No presentes una ficha completada como validación normativa, certificación o aprobación de un tercero.</li>
          </ol>
          <p className="mt-6 text-xs text-slate-400">Los enlaces apuntan a archivos incluidos en este mismo proyecto; no dependen de servicios externos.</p>
        </section>
      </main>
      <footer className="border-t border-white/10 px-6 py-8 text-xs text-slate-400"><div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4"><span>ILACAF · Formación abierta</span><Link href="/privacidad" className="hover:text-white">Privacidad y límites</Link></div></footer>
    </div>
  );
}
