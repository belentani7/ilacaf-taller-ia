import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const root = process.cwd();
const source = readFileSync(resolve(root, "lib/curriculum.ts"), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  reportDiagnostics: true,
});
assert.deepEqual(compiled.diagnostics?.filter((d) => d.category === ts.DiagnosticCategory.Error), []);
const context = { exports: {} };
runInNewContext(compiled.outputText, context, { timeout: 1000 });
const modules = context.exports.modules;
const get = context.exports.findModule;

test("six complete teaching units have unique stable routes", () => {
  assert.equal(modules.length, 6);
  assert.equal(new Set(modules.map((m) => m.slug)).size, modules.length);
  for (const unit of modules) {
    assert.match(unit.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.equal(get(unit.slug).title, unit.title);
    assert.ok(unit.title.length > 12);
    assert.ok(unit.promise.length > 25);
    assert.equal(unit.outcomes.length, 3);
    assert.ok(unit.theory.length >= 3);
    assert.ok(unit.theory.every((part) => part.paragraphs.length >= 2 &&
      part.paragraphs.every((p) => p.length >= 65)));
    assert.ok(unit.scenario.evidence.length >= 2);
    assert.ok(unit.scenario.decision.length > 30);
    assert.ok(unit.exercise.instructions.length >= 4);
    assert.ok(unit.exercise.rubric.length >= 4);
    assert.ok(unit.exercise.deliverable.length > 20);
    assert.ok(unit.quiz.length >= 2);
  }
});

test("questions have valid answers and non-empty explanations", () => {
  for (const unit of modules) {
    for (const question of unit.quiz) {
      assert.ok(question.prompt.length > 10);
      assert.ok(question.options.length >= 3);
      assert.ok(Number.isInteger(question.answer));
      assert.ok(question.answer >= 0 && question.answer < question.options.length);
      assert.ok(question.explanation.length >= 20);
    }
  }
});

test("references are external HTTPS sources with usable descriptions", () => {
  for (const unit of modules) {
    assert.ok(unit.furtherReading.length);
    for (const source of unit.furtherReading) {
      assert.match(source.url, /^https:\/\/[^\s]+$/);
      assert.ok(source.title.length >= 8);
    }
  }
});

test("all routes and four promised downloadable learning resources exist", () => {
  for (const path of ["app/page.tsx", "app/programa/[slug]/page.tsx", "app/recursos/page.tsx", "app/privacidad/page.tsx", "components/KnowledgeCheck.tsx"]) {
    assert.ok(existsSync(resolve(root, path)), path);
  }
  for (const path of ["matriz-riesgos.csv", "trazabilidad-fuentes.csv", "conciliacion-financiera.csv", "ficha-piloto.md"]) {
    assert.ok(existsSync(resolve(root, "public/templates", path)), path);
  }
});

test("misleading scarcity and expired dates are absent from published entrypoints", () => {
  const home = readFileSync(resolve(root, "app/page.tsx"), "utf8");
  const hero = readFileSync(resolve(root, "components/Hero.tsx"), "utf8");
  const progress = readFileSync(resolve(root, "components/UrgencyBar.tsx"), "utf8");
  assert.doesNotMatch(home + hero + progress, /cupos vendidos|solo quedan \d+|septiembre 23/i);
  assert.match(home, /lib\/curriculum/);
  assert.match(progress, /localStorage/);
});
