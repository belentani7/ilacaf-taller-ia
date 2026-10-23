import assert from "node:assert/strict";
import { test } from "node:test";
import {
  EMPTY_LESSON_PROGRESS,
  MAX_NOTES,
  lessonStorageKey,
  reviveLessonProgress,
} from "../lib/lessonProgress.mjs";

test("older notes are restored without reading unknown personal fields", () => {
  const recovered = reviveLessonProgress(JSON.stringify({
    notes: "Comprobar fuente primaria",
    completed: true,
    privateAccount: "must-not-appear",
  }));
  assert.deepEqual(recovered, { notes: "Comprobar fuente primaria", completed: true });
});

test("bad or incompatible browser values do not crash course", () => {
  for (const raw of [null, "not-json", "null", "[]", "3", '"string"']) {
    assert.deepEqual(reviveLessonProgress(raw), EMPTY_LESSON_PROGRESS);
  }
  assert.deepEqual(
    reviveLessonProgress(JSON.stringify({ notes: 123, completed: "true" })),
    EMPTY_LESSON_PROGRESS,
  );
});

test("notes are bounded to the textarea limit when restoring historic data", () => {
  const restored = reviveLessonProgress(JSON.stringify({ notes: "x".repeat(MAX_NOTES + 30), completed: false }));
  assert.equal(restored.notes.length, MAX_NOTES);
});

test("each of the nine lessons has a distinct stable storage key", () => {
  const keys = Array.from({ length: 3 }, (_, block) =>
    Array.from({ length: 3 }, (_, lesson) => lessonStorageKey(`0${block + 1}-${lesson + 1}`)),
  ).flat();
  assert.equal(new Set(keys).size, 9);
  assert.throws(() => lessonStorageKey("../other-project"), /Invalid lesson identifier/);
});
