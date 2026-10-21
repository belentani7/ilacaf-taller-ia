"use client";

import Link from "next/link";

export default function UrgencyBar() {
  return (
    <section id="progreso" className="border-b border-white/10 bg-slate-900 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-5">
        <div>
          <h2 className="text-xl font-semibold text-white">Material formativo disponible</h2>
          <p className="mt-2 text-sm text-slate-300">
            No se anuncian cupos vendidos, escasez ni fechas sin datos confirmados.
          </p>
        </div>
        <Link href="/curso" className="rounded-xl bg-cyan-300 px-5 py-3 font-semibold text-slate-950 hover:bg-white">
          Consultar el curso
        </Link>
      </div>
    </section>
  );
}
