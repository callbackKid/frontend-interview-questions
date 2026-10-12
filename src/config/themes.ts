import {
  CSS_SUBCATEGORIES,
  HTML_SUBCATEGORIES,
  PROMISES_SUBCATEGORIES,
  type Level,
  type Theme,
} from '../data';

export interface ThemeConfig {
  key: Theme;
  /** Main label, e.g. "JavaScript" */
  name: string;
  /** Optional detail shown next to the name, e.g. "Promises" */
  detail?: string;
  subCategories: readonly string[];
}

/**
 * Topics shown on the setup screen. To add a topic, add its data file in src/data,
 * extend the Theme union there, and add an entry here.
 */
export const THEMES: ThemeConfig[] = [
  { key: 'HTML', name: 'HTML', subCategories: HTML_SUBCATEGORIES },
  { key: 'CSS', name: 'CSS', subCategories: CSS_SUBCATEGORIES },
  { key: 'Promises', name: 'JavaScript', detail: 'Promises', subCategories: PROMISES_SUBCATEGORIES },
];

export const LEVELS: Level[] = ['easy', 'medium', 'hard'];

export const LEVEL_LABELS: Record<Level, string> = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };

export function themeConfig(key: Theme): ThemeConfig {
  const found = THEMES.find((t) => t.key === key);
  if (!found) throw new Error(`Unknown theme: ${key}`);
  return found;
}

export function themeLabel(key: Theme): string {
  const t = themeConfig(key);
  return t.detail ? `${t.name}: ${t.detail}` : t.name;
}
