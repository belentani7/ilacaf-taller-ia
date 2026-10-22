export interface LabQuestion {
  readonly question: string;
  readonly answers: readonly string[];
  readonly correct: number;
  readonly explanation: string;
}
export declare function buildLabFeedback(
  questions: readonly LabQuestion[],
  answers: Readonly<Record<number, number>>
): string;
