"use client";

import { useEffect, useState } from "react";
import { modules } from "@/lib/curriculum";

const KEY = "ilacaf-workshop-completed-v1";

export default function UrgencyBar() {
  const [done, setDone] = useState(0);
  const [available, setAvailable] = useState(true);
  useEffect(() => {
    const refresh = () => {
      try {
        const stored: unknown = JSON.parse(localStorage.getItem(KEY) || "[]");
        const ids = new Set(Array.isArray(stored) ? stored : []);
        setDone(modules.filter((unit) => ids.has(unit.slug)).length);
        setAvailable(true);
      } catch { setAvailable(false); }
    };
    refresh();
    window.addEventListener("storage", refresh);
    window.addEventListener("ilacaf-progress-changed", refresh);
    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener("ilacaf-progress-changed", refresh);
    };
  }, []);
  const percent = Math.round((done / modules.length) * 100);

  return (
    <section id="progreso" className="border-b border-white/10 bg-[#0a1421] py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-3 flex flex-wrap items-end justify-between gap-4">
          <div><h2 className="font-semibold text-white">Tu itinerario, a tu ritmo.</h2><p className="mt-1 text-xs text-slate-400">El avance se guarda únicamente en este navegador.</p></div>
          <p className="font-mono text-sm text-cyan-300">{done} / {modules.length} evaluaciones superadas</p>
        </div>
        <div role="progressbar" aria-valuenow={done} aria-valuemin={0} aria-valuemax={modules.length} aria-label="Progreso del itinerario" className="h-2 overflow-hidden rounded-full bg-slate-800">
          <div className="h-full rounded-full bg-cyan-300 transition-[width] duration-300" style={{ width: `${percent}%` }} />
        </div>
        {!available && <p className="mt-3 text-xs text-amber-200">No es posible recuperar el progreso guardado. Los contenidos siguen disponibles.</p>}
      </div>
    </section>
  );
}
