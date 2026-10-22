import test from "node:test";
import assert from "node:assert/strict";
import { buildLabFeedback } from "../components/lab-export.mjs";
const cases = [
 {question:"Verificar fuentes", answers:["Citar sin verificar","Consultar fuente oficial"], correct:1, explanation:"Revisar vigencia"},
 {question:"Datos privados", answers:["Usar ejemplos inventados","Subir documentos reales"], correct:0, explanation:"Priorizar confidencialidad"},
];
test("exports complete local feedback and real score", () => {
 const doc=buildLabFeedback(cases,{0:1,1:1});
 assert.match(doc,/Resultado:\*\* 1 de 2/);
 assert.match(doc,/Verificar fuentes/);
 assert.match(doc,/Tu respuesta:\*\* Subir documentos reales/);
 assert.match(doc,/Respuesta recomendada:\*\* Usar ejemplos inventados/);
 assert.match(doc,/no es un certificado/);
});
test("a perfect result shows actual selected alternatives", () => {
 const doc=buildLabFeedback(cases,{0:1,1:0});
 assert.match(doc,/Resultado:\*\* 2 de 2/);
 assert.equal((doc.match(/\*\*Resultado:\*\* Correcto/g)||[]).length,2);
});
test("refuses incomplete and invalid answer indexes", () => {
 for(const answers of [{0:0},{0:1,1:-1},{0:1,1:2},{0:"1",1:0},null,[]]) {
   assert.throws(()=>buildLabFeedback(cases,answers),TypeError);
 }
});
test("rejects malformed question structures without collecting any user identifiers",()=>{
 assert.throws(()=>buildLabFeedback([{question:"Q",answers:["a"],correct:0,explanation:"yes"}],{0:0}),TypeError);
 const doc=buildLabFeedback(cases,{0:0,1:0});
 assert.ok(!/email|localStorage|fetch\(/i.test(doc));
});
