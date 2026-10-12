import { ALL_QUESTIONS, type QuizQuestion, type Theme } from '../data';
import { THEMES } from '../config/themes';
import type { Mode, Session, Settings } from '../types';
import { shuffle } from './random';

/**
 * Split `n` across buckets in proportion to their sizes (largest remainder method).
 * A bucket never receives more than its size.
 */
export function allocate(sizes: readonly number[], n: number): number[] {
  const total = sizes.reduce((a, b) => a + b, 0);
  if (total === 0 || n <= 0) return sizes.map(() => 0);
  const target = Math.min(n, total);
  const exact = sizes.map((s) => (s * target) / total);
  const result = exact.map(Math.floor);
  let rest = target - result.reduce((a, b) => a + b, 0);
  const byRemainder = exact
    .map((value, index) => ({ index, remainder: value - Math.floor(value) }))
    .sort((a, b) => b.remainder - a.remainder);
  for (const { index } of byRemainder) {
    if (rest <= 0) break;
    if (result[index]! < sizes[index]!) {
      result[index]! += 1;
      rest -= 1;
    }
  }
  return result;
}

/** Questions of one theme that match the selected subcategories and levels. */
export function matchingQuestions(settings: Settings, theme: Theme): QuizQuestion[] {
  const t = settings.themes[theme];
  if (!t.enabled) return [];
  return ALL_QUESTIONS.filter(
    (q) => q.theme === theme && t.subCategories.includes(q.subCategory) && settings.levels.includes(q.level),
  );
}

export interface PlanGroup {
  theme: Theme;
  pool: QuizQuestion[];
  count: number;
}

export interface TestPlan {
  groups: PlanGroup[];
  /** Questions matching the filters */
  available: number;
  /** Questions the test will actually have */
  total: number;
}

/** How many questions each selected topic contributes, proportional to its pool size. */
export function planTest(settings: Settings): TestPlan {
  const pools = THEMES.filter((t) => settings.themes[t.key].enabled).map((t) => ({
    theme: t.key,
    pool: matchingQuestions(settings, t.key),
  }));
  const available = pools.reduce((sum, g) => sum + g.pool.length, 0);
  const counts = allocate(
    pools.map((g) => g.pool.length),
    settings.count,
  );
  const groups = pools.map((g, i) => ({ ...g, count: counts[i] ?? 0 }));
  return { groups, available, total: groups.reduce((sum, g) => sum + g.count, 0) };
}

/** Pick questions per topic, spread proportionally across that topic's subcategories. */
export function pickQuestions(plan: TestPlan): QuizQuestion[] {
  const picked: QuizQuestion[] = [];
  for (const group of plan.groups) {
    const bySub = new Map<string, QuizQuestion[]>();
    for (const q of group.pool) {
      const list = bySub.get(q.subCategory) ?? [];
      list.push(q);
      bySub.set(q.subCategory, list);
    }
    const subs = [...bySub.values()];
    const perSub = allocate(
      subs.map((s) => s.length),
      group.count,
    );
    subs.forEach((list, i) => picked.push(...shuffle(list).slice(0, perSub[i])));
  }
  return shuffle(picked);
}

export function createSession(questions: QuizQuestion[], mode: Mode): Session {
  return {
    mode,
    index: 0,
    questions: questions.map((question) => ({ question, options: shuffle(question.fourOptionsForAnAnswer) })),
    answers: questions.map(() => ({ chosen: null, typed: '', revealed: false, correct: null, check: null })),
  };
}
