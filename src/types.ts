import type { Level, QuizQuestion, Theme } from './data';

export type Mode = 'test' | 'open';

export interface ThemeSettings {
  enabled: boolean;
  subCategories: string[];
}

export interface Settings {
  themes: Record<Theme, ThemeSettings>;
  levels: Level[];
  mode: Mode;
  count: number;
}

/** Result of the in-app check of a typed (open) answer. */
export type OpenVerdict = 'close' | 'partial' | 'far';

export interface OpenCheck {
  verdict: OpenVerdict;
  matched: string[];
  missing: string[];
  /** true when the reference is a sequence (e.g. "1 4 3 2") and order was compared */
  ordered: boolean;
}

export interface AnswerRecord {
  /** Test mode: the option the user picked */
  chosen: string | null;
  /** Open mode: what the user typed */
  typed: string;
  /** Open mode: whether the right answer has been revealed */
  revealed: boolean;
  /** Final result; null while unanswered */
  correct: boolean | null;
  /** Open mode: in-app comparison of the typed answer with the right one */
  check: OpenCheck | null;
}

export interface SessionQuestion {
  question: QuizQuestion;
  /** Options in the order shown for this session */
  options: string[];
}

export interface Session {
  mode: Mode;
  questions: SessionQuestion[];
  answers: AnswerRecord[];
  index: number;
}
