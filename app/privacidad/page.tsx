import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacidad y alcance — ILACAF",
  description: "Cómo funciona el almacenamiento de progreso en la plataforma educativa ILACAF y qué funciones no están presentes.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#070d16] text-slate-100">
      <header className="border-b border-white/10"><nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6"><Link href="/" className="font-semibold tracking-widest">ILACAF<span className="text-cyan-300"> / AI</span></Link><Link href="/" className="text-sm text-cyan-200 hover:text-white">Inicio ↗</Link></nav></header>
      <main className="mx-auto max-w-4xl space-y-8 px-6 py-20">
        <p className="text-xs uppercase tracking-[.2em] text-cyan-300">Transparencia / Producto educativo</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">Privacidad y límites.</h1>
        <p className="text-base leading-8 text-slate-300">Esta versión de la web permite estudiar materiales abiertos, responder cuestionarios y registrar localmente cuáles se han superado. No dispone de autenticación, cuentas, cobros, inscripciones, certificados, entrega de tareas a un tutor ni base de datos de alumnos.</p>
        <section className="space-y-3 border-t border-white/10 pt-8">
          <h2 className="text-2xl font-semibold">Datos guardados en el navegador</h2>
          <p className="text-sm leading-8 text-slate-300">Al aprobar una autoevaluación, el identificador de esa unidad se guarda en el almacenamiento local de este dispositivo (clave <code className="rounded bg-white/10 px-1.5 py-1">ilacaf-workshop-completed-v1</code>). No enviamos esas respuestas a un servidor desde estas funciones. Si borras los datos del navegador o cambias de dispositivo, el progreso puede perderse. No introduzcas información confidencial en los ejercicios.</p>
        </section>
        <section className="space-y-3 border-t border-white/10 pt-8">
          <h2 className="text-2xl font-semibold">Fuentes externas</h2>
          <p className="text-sm leading-8 text-slate-300">Algunas unidades contienen enlaces a organismos y recursos externos. Si los abres, esos sitios tendrán sus propias reglas de privacidad. Esta descripción se limita al código educativo incluido aquí; no representa garantías sobre infraestructura de alojamiento o terceros.</p>
        </section>
        <section className="space-y-3 border-t border-white/10 pt-8">
          <h2 className="text-2xl font-semibold">Alcance profesional</h2>
          <p className="text-sm leading-8 text-slate-300">El contenido se utiliza para formación general. No reemplaza asesoramiento jurídico, financiero, tributario, contable o de seguridad aplicable a un caso concreto. Los ejercicios son ficticios y no constituyen dictámenes, certificaciones o formación profesional oficialmente acreditada.</p>
        </section>
        <Link href="/#temario" className="inline-block rounded-lg bg-cyan-200 px-5 py-3 font-semibold text-slate-950">Volver a las unidades →</Link>
      </main>
    </div>
  );
}
