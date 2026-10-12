import { THEMES, LEVELS } from '../config/themes';
import type { Theme } from '../data';
import type { Settings, ThemeSettings } from '../types';

export function defaultSettings(): Settings {
  const themes = Object.fromEntries(
    THEMES.map((t) => [t.key, { enabled: t.key === 'HTML', subCategories: [...t.subCategories] }]),
  ) as Record<Theme, ThemeSettings>;
  return { themes, levels: ['medium'], mode: 'test', count: 20 };
}

/** Accept saved settings only where they still match the current data. */
export function sanitizeSettings(saved: unknown): Settings {
  const result = defaultSettings();
  if (!saved || typeof saved !== 'object') return result;
  const s = saved as Partial<Settings>;
  for (const t of THEMES) {
    const savedTheme = s.themes?.[t.key];
    if (savedTheme) {
      result.themes[t.key] = {
        enabled: Boolean(savedTheme.enabled),
        subCategories: (savedTheme.subCategories ?? []).filter((x) => t.subCategories.includes(x)),
      };
    }
  }
  if (Array.isArray(s.levels)) result.levels = LEVELS.filter((l) => s.levels!.includes(l));
  if (s.mode === 'open' || s.mode === 'test') result.mode = s.mode;
  if (typeof s.count === 'number' && s.count > 0) result.count = Math.floor(s.count);
  return result;
}
