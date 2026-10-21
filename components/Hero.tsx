"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <header id="inicio" className="relative isolate overflow-hidden border-b border-white/10 pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-52 -z-10 size-[620px] rounded-full bg-cyan-600/10 blur-[125px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 -z-10 h-64 w-96 rounded-full bg-blue-700/10 blur-[100px]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.2fr_.8fr]">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
          <p className="mb-6 text-xs font-bold uppercase tracking-[.22em] text-cyan-300">ILACAF / Aula abierta de inteligencia artificial</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-.065em] text-white sm:text-7xl">
            Criterio humano.<br/><span className="text-cyan-200">Herramientas de futuro.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Inteligencia artificial aplicada a auditoría, derecho y finanzas. Un itinerario práctico, con casos documentados, controles de riesgo, ejercicios y autoevaluaciones que puedes realizar a tu ritmo.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/programa/fundamentos-y-criterio" className="rounded-lg bg-cyan-200 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-white">Empezar a aprender →</Link>
            <a href="#temario" className="rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">Explorar el programa ↓</a>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-slate-400">Contenido abierto · Sin inscripción ficticia · Sin acreditación automática · Material formativo, no asesoramiento profesional.</p>
        </motion.div>
        <div aria-label="Representación editorial del sistema de aprendizaje" className="rounded-3xl border border-cyan-300/20 bg-[#101927] p-5 shadow-[0_30px_100px_-20px_rgba(0,0,0,.8)] sm:p-7">
          <div className="flex items-center justify-between border-b border-white/10 pb-5 text-[10px] font-bold uppercase tracking-[.18em] text-slate-400"><span>Learning system / 2026</span><span className="text-cyan-300">ABIERTO</span></div>
          <div className="my-7 space-y-3">
            {[
              ["01","Entender", "Fundamentos y criterio"],
              ["02","Verificar", "Fuentes y evidencia"],
              ["03","Controlar", "Auditoría, derecho y finanzas"],
              ["04","Aplicar", "Proyecto final"]
            ].map(([id,label,desc]) => (
              <div key={id} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[.035] p-4">
                <span className="font-mono text-sm text-cyan-300">{id}</span>
                <div><p className="font-semibold text-white">{label}</p><p className="mt-1 text-xs text-slate-400">{desc}</p></div>
                <span aria-hidden="true" className="ml-auto text-slate-500">↗</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-white/10 pt-5 text-xs text-slate-400"><span>Aprende. Comprueba. Decide.</span><span>ILACAF</span></div>
        </div>
      </div>
    </header>
  );
}
