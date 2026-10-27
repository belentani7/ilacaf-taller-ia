/**
 * @typedef {{question: string, answers: readonly string[], correct: number, explanation: string}} LabQuestion
 */

/**
 * Build a local-only, formative feedback report. Reject incomplete or corrupt
 * answers instead of exporting an apparently valid but misleading score.
 * @param {readonly LabQuestion[]} questions
 * @param {Readonly<Record<number, number>>} answers
 * @returns {string}
 */
export function buildLabFeedback(questions, answers) {
  if (!Array.isArray(questions) || questions.length === 0 || !answers || typeof answers !== "object") {
    throw new TypeError("El laboratorio no contiene respuestas válidas.");
  }

  let score = 0;
  const rows = questions.map((question, index) => {
    const selected = answers[index];
    if (
      !Array.isArray(question.answers) ||
      !Number.isInteger(question.correct) ||
      question.correct < 0 ||
      question.correct >= question.answers.length ||
      !Number.isInteger(selected) ||
      selected < 0 ||
      selected >= question.answers.length
    ) {
      throw new RangeError(`Respuesta inválida en la pregunta ${index + 1}.`);
    }
    const correct = selected === question.correct;
    if (correct) score += 1;
    return [
      `${index + 1}. ${question.question}`,
      `Tu respuesta: ${question.answers[selected]}`,
      `Resultado: ${correct ? "Correcto" : "Para revisar"}`,
      `Respuesta recomendada: ${question.answers[question.correct]}`,
      `Explicación: ${question.explanation}`,
    ].join("\n");
  });

  return [
    "ILACAF · Laboratorio de práctica profesional",
    `Resultado: ${score} / ${questions.length}`,
    "Evaluación formativa sin certificación. Verifica las fuentes antes de aplicar los ejemplos.",
    ...rows,
  ].join("\n\n");
}
