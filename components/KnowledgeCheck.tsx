"use client";

import { useState, useSyncExternalStore } from "react";
import type { Module } from "@/lib/curriculum";

const KEY = "ilacaf-workshop-completed-v1";

function subscribeProgress(notify: () => void) {
  window.addEventListener("storage", notify);
  window.addEventListener("ilacaf-progress-changed", notify);
  return () => {
    window.removeEventListener("storage", notify);
    window.removeEventListener("ilacaf-progress-changed", notify);
  };
}
function progressSnapshot(slug: string) {
  try {
    const stored: unknown = JSON.parse(window.localStorage.getItem(KEY) || "[]");
    return Array.isArray(stored) && stored.includes(slug);
  } catch { return false; }
}

export default function KnowledgeCheck({
  slug,
  questions,
}: {
  slug: string;
  questions: Module["quiz"];
}) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const saved = useSyncExternalStore(subscribeProgress, () => progressSnapshot(slug), () => false);
  const [storageError, setStorageError] = useState(false);
  const correct = questions.filter((q, index) => answers[index] === q.answer).length;
  const allAnswered = questions.every((_, index) => Number.isInteger(answers[index]));


  const submit = () => {
    if (!allAnswered) return;
    setSubmitted(true);
    if (correct !== questions.length) return;
    try {
      const stored: unknown = JSON.parse(window.localStorage.getItem(KEY) || "[]");
      const existing = Array.isArray(stored) ? stored.filter((entry): entry is string => typeof entry === "string") : [];
      window.localStorage.setItem(KEY, JSON.stringify([...new Set([...existing, slug])]));
      window.dispatchEvent(new Event("ilacaf-progress-changed"));
    } catch {
      setStorageError(true);
    }
  };

  const reset = () => { setAnswers({}); setSubmitted(false); };

  return (
    <section aria-labelledby="assessment-title" className="rounded-3xl border border-cyan-400/25 bg-cyan-300/[.055] p-6 sm:p-9">
      <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold tracking-[.2em] text-cyan-300 uppercase">Evaluación / aprendizaje</p>
          <h2 id="assessment-title" className="mt-2 text-2xl font-semibold tracking-tight text-white">Comprueba lo aprendido</h2>
        </div>
        <span className="text-sm text-slate-300">{questions.length} preguntas · sin registro</span>
      </div>
      <div className="space-y-8">
        {questions.map((q, index) => (
          <fieldset key={index} className="space-y-3">
            <legend className="mb-4 font-semibold text-white">{index + 1}. {q.prompt}</legend>
            {q.options.map((option, optionIndex) => (
              <label key={optionIndex} className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 hover:border-cyan-300/50">
                <input
                  className="mt-0.5 accent-cyan-300"
                  type="radio"
                  name={`quiz-${slug}-${index}`}
                  checked={answers[index] === optionIndex}
                  onChange={() => { setAnswers((prev) => ({ ...prev, [index]: optionIndex })); setSubmitted(false); }}
                />
                {option}
              </label>
            ))}
            {submitted && (
              <p role="status" className={`rounded-lg p-3 text-sm ${answers[index] === q.answer ? "bg-emerald-300/10 text-emerald-200" : "bg-amber-300/10 text-amber-100"}`}>
                {answers[index] === q.answer ? "Correcto. " : "Revisa esta respuesta. "}{q.explanation}
              </p>
            )}
          </fieldset>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button type="button" disabled={!allAnswered} onClick={submit} className="rounded-lg bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 disabled:cursor-not-allowed disabled:opacity-40">Corregir evaluación</button>
        <button type="button" onClick={reset} className="rounded-lg border border-white/20 px-5 py-3 text-sm text-slate-100 hover:bg-white/10">Repetir</button>
      </div>
      {submitted && <p className="mt-5 font-medium text-white" aria-live="polite">Resultado: {correct}/{questions.length}. {correct === questions.length ? "Unidad completada. Repasa el proyecto práctico para consolidar." : "Revisa los apartados y vuelve a intentarlo."}</p>}
      {saved && <p className="mt-4 text-sm text-emerald-200">✓ Autoevaluación aprobada en este navegador.</p>}
      {storageError && <p className="mt-4 text-sm text-amber-200">El navegador no permite guardar el progreso. La evaluación sigue disponible sin almacenamiento.</p>}
      <p className="mt-5 text-xs leading-relaxed text-slate-400">Autoevaluación formativa, sin acreditación profesional, sin cuenta ni envío de respuestas a servidores.</p>
    </section>
  );
}
