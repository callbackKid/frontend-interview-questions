import {
  ARRAYS_STRINGS_SUBCATEGORIES,
  CSS_SUBCATEGORIES,
  DATA_TYPES_SUBCATEGORIES,
  FUNCTIONS_SUBCATEGORIES,
  HTML_SUBCATEGORIES,
  OBJECTS_OOP_SUBCATEGORIES,
  OPERATORS_SUBCATEGORIES,
  PROMISES_SUBCATEGORIES,
  REACT_SUBCATEGORIES,
  RUNTIME_BROWSER_SUBCATEGORIES,
  TYPESCRIPT_SUBCATEGORIES,
  VARIABLES_SCOPE_SUBCATEGORIES,
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
  { key: 'Data types', name: 'JavaScript', detail: 'Data types', subCategories: DATA_TYPES_SUBCATEGORIES },
  { key: 'Operators', name: 'JavaScript', detail: 'Operators', subCategories: OPERATORS_SUBCATEGORIES },
  { key: 'Variables & scope', name: 'JavaScript', detail: 'Variables & scope', subCategories: VARIABLES_SCOPE_SUBCATEGORIES },
  { key: 'Functions', name: 'JavaScript', detail: 'Functions', subCategories: FUNCTIONS_SUBCATEGORIES },
  { key: 'Objects & OOP', name: 'JavaScript', detail: 'Objects & OOP', subCategories: OBJECTS_OOP_SUBCATEGORIES },
  { key: 'Arrays & strings', name: 'JavaScript', detail: 'Arrays & strings', subCategories: ARRAYS_STRINGS_SUBCATEGORIES },
  { key: 'Runtime & browser', name: 'JavaScript', detail: 'Runtime & browser', subCategories: RUNTIME_BROWSER_SUBCATEGORIES },
  { key: 'Promises', name: 'JavaScript', detail: 'Promises', subCategories: PROMISES_SUBCATEGORIES },
  { key: 'React', name: 'React', subCategories: REACT_SUBCATEGORIES },
  { key: 'TypeScript', name: 'TypeScript', subCategories: TYPESCRIPT_SUBCATEGORIES },
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
