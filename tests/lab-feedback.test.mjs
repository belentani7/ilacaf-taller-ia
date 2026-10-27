import assert from "node:assert/strict";
import test from "node:test";
import { buildLabFeedback } from "../components/lab-feedback.mjs";

const questions = [
  { question: "¿Verificar la fuente?", answers: ["No", "Sí"], correct: 1, explanation: "Consulta el documento original." },
  { question: "¿Compartir datos privados?", answers: ["No", "Sí"], correct: 0, explanation: "Protege la confidencialidad." },
];

test("exporta puntuación real y soluciones correctas", () => {
  const report = buildLabFeedback(questions, { 0: 1, 1: 0 });
  assert.match(report, /Resultado: 2 \/ 2/);
  assert.match(report, /Respuesta recomendada: Sí/);
  assert.match(report, /Respuesta recomendada: No/);
  assert.match(report, /Evaluación formativa sin certificación/);
});

test("muestra respuesta elegida y solución al equivocarse", () => {
  const report = buildLabFeedback(questions, { 0: 0, 1: 0 });
  assert.match(report, /Resultado: 1 \/ 2/);
  assert.match(report, /Tu respuesta: No\nResultado: Para revisar\nRespuesta recomendada: Sí/);
});

test("rechaza cuestionarios incompletos", () => {
  assert.throws(() => buildLabFeedback(questions, { 0: 1 }), RangeError);
});

test("rechaza índices de respuesta fuera de rango", () => {
  assert.throws(() => buildLabFeedback(questions, { 0: 7, 1: 0 }), RangeError);
  assert.throws(() => buildLabFeedback(questions, { 0: -1, 1: 0 }), RangeError);
});

test("rechaza índices no enteros y valores corruptos", () => {
  assert.throws(() => buildLabFeedback(questions, { 0: Number.NaN, 1: 0 }), RangeError);
  assert.throws(() => buildLabFeedback(questions, { 0: 0.5, 1: 0 }), RangeError);
});

test("rechaza metadatos inválidos y cuestionarios vacíos", () => {
  assert.throws(() => buildLabFeedback([], {}), TypeError);
  assert.throws(() => buildLabFeedback(questions, null), TypeError);
  assert.throws(() => buildLabFeedback([{ ...questions[0], correct: 3 }], { 0: 0 }), RangeError);
});
