/**
 * @typedef {{ notes: string, completed: boolean }} LessonProgress
 */
export const MAX_NOTES = 12000;

/** @type {LessonProgress} */
export const EMPTY_LESSON_PROGRESS = { notes: "", completed: false };

/**
 * Old or malformed browser data must never stop an educational lesson.
 * Unknown properties are deliberately discarded.
 * @param {string | null} raw
 * @returns {LessonProgress}
 */
export function reviveLessonProgress(raw) {
  if (!raw) return { ...EMPTY_LESSON_PROGRESS };
  try {
    const value = JSON.parse(raw);
    if (!value || typeof value !== "object" || Array.isArray(value)) {
      return { ...EMPTY_LESSON_PROGRESS };
    }
    return {
      notes: typeof value.notes === "string" ? value.notes.slice(0, MAX_NOTES) : "",
      completed: value.completed === true,
    };
  } catch {
    return { ...EMPTY_LESSON_PROGRESS };
  }
}

/**
 * Lessons have a stable, explicit id controlled by the curriculum.
 * @param {string} lessonId
 */
export function lessonStorageKey(lessonId) {
  if (!/^0[1-3]-[1-3]$/.test(lessonId)) throw new Error("Invalid lesson identifier");
  return `ilacaf-lesson-v1:${lessonId}`;
}
