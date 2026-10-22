/**
 * Local-only export of formative learning feedback.
 * Does not include names, student identifiers, timestamps or network calls.
 */
export function buildLabFeedback(questions, answers) {
  if (!Array.isArray(questions) || !answers || typeof answers !== "object" ||
      Array.isArray(answers)) throw new TypeError("Invalid lab results");
  const rows = [];
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    const item = questions[i];
    if (!item || typeof item.question !== "string" ||
        !Array.isArray(item.answers) || item.answers.length < 2 ||
        typeof item.explanation !== "string" ||
        !Number.isInteger(item.correct) || item.correct < 0 ||
        item.correct >= item.answers.length ||
        !item.answers.every(v => typeof v === "string")) {
      throw new TypeError("Invalid question definition");
    }
    const chosen = answers[i];
    if (!Number.isInteger(chosen) || chosen < 0 || chosen >= item.answers.length) {
      throw new TypeError("Complete all questions before exporting");
    }
    const passed = chosen === item.correct;
    if (passed) score++;
    // Use paragraphs rather than Markdown links or tables: all text is local
    // trusted educational copy, without personally identifying user input.
    rows.push([
      "## " + (i + 1) + ". " + item.question,
      "**Tu respuesta:** " + item.answers[chosen],
      "**Respuesta recomendada:** " + item.answers[item.correct],
      "**Resultado:** " + (passed ? "Correcto" : "Para revisar"),
      "**Explicación:** " + item.explanation,
    ].join("\n\n"));
  }
  return [
    "# ILACAF · Laboratorio de decisiones",
    "Material de autoevaluación, no es un certificado.",
    "**Resultado:** " + score + " de " + questions.length,
    ...rows,
    "Este archivo se genera en tu navegador. No contiene tu nombre ni se envía al centro.",
    "",
  ].join("\n\n");
}
