"use client";

import { useEffect, useState } from "react";

import {
  EMPTY_LESSON_PROGRESS as EMPTY,
  MAX_NOTES,
  lessonStorageKey,
  reviveLessonProgress,
} from "../lib/lessonProgress.mjs";

type LessonProgress = { notes: string; completed: boolean };

/**
 * Each lesson has its own opt-in, browser-only workspace. Do not synchronize
 * notes to a server or log them: they may contain sensitive professional work.
 */
export default function LessonWorkspace({ id, title }: { id: string; title: string }) {
  const storageKey = lessonStorageKey(id);
  const [progress, setProgress] = useState<LessonProgress>(EMPTY);
  const [ready, setReady] = useState(false);
  const [saveStatus, setSaveStatus] = useState("Preparando espacio personal…");
  const [confirmClear, setConfirmClear] = useState(false);

  useEffect(() => {
    // Read only after hydration. A deferred read avoids server/client markup
    // mismatches and keeps the first paint usable on a slow device.
    const timer = window.setTimeout(() => {
      try {
        setProgress(reviveLessonProgress(window.localStorage.getItem(storageKey)));
      } catch {
        setProgress({ ...EMPTY });
        setSaveStatus("El almacenamiento local no está disponible.");
      }
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [storageKey]);

  const save = (next: LessonProgress) => {
    setProgress(next);
    try {
      if (!next.notes.trim() && !next.completed) {
        window.localStorage.removeItem(storageKey);
      } else {
        window.localStorage.setItem(storageKey, JSON.stringify(next));
      }
      setSaveStatus("Guardado en este navegador");
    } catch {
      setSaveStatus("No se pudo guardar. Exporta tus notas antes de cerrar.");
    }
  };

  const exportNotes = () => {
    const text = `ILACAF · Notas personales\nLección: ${title}\nEstado: ${progress.completed ? "Revisada" : "Pendiente"}\n\n${progress.notes}\n`;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `ilacaf-${id}-notas.txt`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  };

  return (
    <section
      aria-label={`Espacio personal: ${title}`}
      className="mt-6 rounded-xl border border-cyan-300/20 bg-slate-950/60 p-5"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-200">Mi práctica · notas privadas</h4>
        <span role="status" aria-live="polite" className="text-xs text-slate-400">
          {ready ? saveStatus : "Preparando espacio personal…"}
        </span>
      </div>
      <p className="mt-3 text-xs leading-6 text-slate-400">
        Estas notas no se envían a ILACAF: se guardan en el almacenamiento de este navegador.
        No escribas datos reales de clientes ni información confidencial.
        En un dispositivo compartido otras personas podrían leerlas.
      </p>
      <label htmlFor={`notes-${id}`} className="mt-5 block text-sm font-medium text-slate-200">
        Mi respuesta, controles y fuentes por verificar
      </label>
      <textarea
        id={`notes-${id}`}
        value={progress.notes}
        maxLength={MAX_NOTES}
        rows={5}
        disabled={!ready}
        onChange={(event) => {
          setConfirmClear(false);
          save({ ...progress, notes: event.target.value });
        }}
        placeholder="Escribe el razonamiento, la evidencia que falta y tu siguiente comprobación..."
        className="mt-2 w-full resize-y rounded-xl border border-white/20 bg-slate-900 p-3 text-sm leading-6 text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
      />
      <p className="mt-1 text-right text-xs text-slate-500">{progress.notes.length} / {MAX_NOTES} caracteres</p>
      <label className="mt-4 inline-flex cursor-pointer items-center gap-3 text-sm text-slate-200">
        <input
          type="checkbox"
          checked={progress.completed}
          disabled={!ready}
          onChange={(event) => save({ ...progress, completed: event.target.checked })}
          className="h-4 w-4 accent-cyan-300"
        />
        He revisado esta lección y sus comprobaciones
      </label>
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          disabled={!ready || (!progress.notes && !progress.completed)}
          onClick={exportNotes}
          className="rounded-lg border border-cyan-300/40 px-4 py-2 text-sm font-semibold text-cyan-200 hover:bg-cyan-300/10 disabled:opacity-40"
        >
          Exportar mis notas
        </button>
        {confirmClear ? (
          <>
            <button
              type="button"
              onClick={() => { save({ ...EMPTY }); setConfirmClear(false); }}
              className="rounded-lg border border-amber-300/50 px-4 py-2 text-sm text-amber-200 hover:bg-amber-300/10"
            >
              Confirmar borrado
            </button>
            <button
              type="button"
              onClick={() => setConfirmClear(false)}
              className="rounded-lg border border-white/20 px-4 py-2 text-sm text-slate-200 hover:bg-white/10"
            >
              Cancelar
            </button>
          </>
        ) : (
          <button
            type="button"
            disabled={!ready || (!progress.notes && !progress.completed)}
            onClick={() => setConfirmClear(true)}
            className="rounded-lg border border-white/20 px-4 py-2 text-sm text-slate-300 hover:bg-white/10 disabled:opacity-40"
          >
            Borrar mis datos de esta lección
          </button>
        )}
      </div>
    </section>
  );
}
