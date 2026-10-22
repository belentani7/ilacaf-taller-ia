"use client";

import { useState } from "react";

const questions = [
  {
    question: "Un modelo cita una sentencia con número y fecha. ¿Qué haces antes de incorporarla a un escrito?",
    answers: [
      "La cito tal como aparece, porque contiene identificadores concretos.",
      "La contrasto en la fuente jurídica oficial y reviso vigencia y jurisdicción.",
      "Pido al mismo modelo que asegure que la sentencia existe.",
    ],
    correct: 1,
    explanation: "Un identificador plausible no prueba existencia ni vigencia. La fuente original y el contexto jurisdiccional son indispensables.",
  },
  {
    question: "Quieres analizar movimientos contables de clientes con una herramienta externa. ¿Qué procedimiento es adecuado?",
    answers: [
      "Subir el archivo sin revisar el contrato de tratamiento de datos.",
      "Suprimir los nombres e incluir igualmente identificadores fiscales.",
      "Usar datos ficticios o contar con autorización y controles de confidencialidad apropiados.",
    ],
    correct: 2,
    explanation: "Los identificadores indirectos también pueden revelar personas. Antes de enviar datos reales hay que acreditar base legal, finalidad y controles.",
  },
  {
    question: "La IA predice una desviación del 18 % en el presupuesto. ¿Qué validas primero?",
    answers: [
      "Periodo, moneda, categorías, base de comparación y cálculo con datos de origen.",
      "El tono persuasivo de la explicación.",
      "Que el gráfico tenga apariencia profesional.",
    ],
    correct: 0,
    explanation: "La predicción depende de datos y supuestos; el formato nunca sustituye la reconciliación de las cifras.",
  },
  {
    question: "Una revisión asistida señala una anomalía que no aparece en la evidencia. ¿Cómo se trata?",
    answers: [
      "Se incorpora como hallazgo confirmado.",
      "Se registra como hipótesis pendiente y se verifica con pruebas independientes.",
      "Se elimina sin dejar constancia.",
    ],
    correct: 1,
    explanation: "La trazabilidad exige separar sospecha, prueba y conclusión, así como conservar el razonamiento.",
  },
  {
    question: "¿Cuál es un prompt útil para revisar un informe sin inducir hechos nuevos?",
    answers: [
      "Redacta conclusiones muy contundentes aunque falten datos.",
      "Rellena todas las referencias que falten con casos probables.",
      "Identifica afirmaciones sin respaldo, señala las lagunas y no inventes fuentes.",
    ],
    correct: 2,
    explanation: "Delimitar datos disponibles, alcance y reglas de incertidumbre mejora la revisión crítica.",
  },
] as const;

export default function PracticeLab() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const completed = Object.keys(answers).length === questions.length;
  const score = questions.filter((q, i) => answers[i] === q.correct).length;

  function choose(question: number, answer: number) {
    setAnswers((prev) => ({ ...prev, [question]: answer }));
    setSubmitted(false);
  }

  return (
    <section aria-labelledby="test-title" className="rounded-3xl border border-cyan-300/20 bg-[#102033] p-6 sm:p-9">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 id="test-title" className="text-2xl font-semibold text-white">Laboratorio interactivo · 5 decisiones</h2>
        <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">Evaluación formativa</span>
      </div>
      <p className="mt-3 text-slate-300">Selecciona la actuación profesional más adecuada en cada situación. Las respuestas se calculan únicamente en tu navegador.</p>
      <form onSubmit={(event) => { event.preventDefault(); if (completed) setSubmitted(true); }} className="mt-8 space-y-8">
        {questions.map((q, index) => (
          <fieldset key={q.question} className="min-w-0 border-t border-white/10 pt-6">
            <legend className="px-1 text-lg font-medium text-white">{index + 1}. {q.question}</legend>
            <div className="mt-4 space-y-2">
              {q.answers.map((option, optionIdx) => (
                <label key={option} className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-200/40">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    checked={answers[index] === optionIdx}
                    onChange={() => choose(index, optionIdx)}
                    className="mt-1 accent-cyan-300"
                  />
                  <span className="text-sm leading-6 text-slate-200">{option}</span>
                </label>
              ))}
            </div>
            {submitted && (
              <p className={`mt-4 rounded-lg p-4 text-sm leading-6 ${answers[index] === q.correct ? "bg-emerald-400/10 text-emerald-200" : "bg-amber-300/10 text-amber-100"}`}>
                <strong>{answers[index] === q.correct ? "Correcto." : "Para revisar."}</strong> {q.explanation}
              </p>
            )}
          </fieldset>
        ))}
        <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-7">
          <button type="submit" disabled={!completed} className="rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40">Comprobar respuestas</button>
          <button type="button" onClick={() => { setAnswers({}); setSubmitted(false); }} className="rounded-xl border border-white/20 px-6 py-3 text-sm text-slate-200 hover:bg-white/10">Repetir ejercicio</button>
          {!completed && <span className="text-sm text-slate-400">{Object.keys(answers).length} de {questions.length} respondidas</span>}
        </div>
        {submitted && (
          <div aria-live="polite" role="status" className="rounded-xl border border-cyan-300/20 bg-slate-950/70 p-5">
            <p className="text-2xl font-semibold text-white">Resultado: {score} / {questions.length}</p>
            <p className="mt-2 text-slate-300">Revisa las explicaciones anteriores. Este ejercicio no emite certificaciones ni almacena resultados.</p>
          </div>
        )}
      </form>
    </section>
  );
}
