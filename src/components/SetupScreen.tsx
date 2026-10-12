import { useMemo } from 'react';
import { ALL_QUESTIONS, type Level, type Theme } from '../data';
import { LEVELS, LEVEL_LABELS, THEMES, themeLabel } from '../config/themes';
import { planTest, type TestPlan } from '../lib/selection';
import type { Mode, Settings } from '../types';

interface Props {
  settings: Settings;
  onChange: (next: Settings) => void;
  onStart: (plan: TestPlan) => void;
}

export function SetupScreen({ settings, onChange, onStart }: Props) {
  const plan = useMemo(() => planTest(settings), [settings]);
  const anyTheme = THEMES.some((t) => settings.themes[t.key].enabled);
  const maxCount = Math.max(1, plan.available);

  const updateTheme = (key: Theme, patch: Partial<Settings['themes'][Theme]>) =>
    onChange({ ...settings, themes: { ...settings.themes, [key]: { ...settings.themes[key], ...patch } } });

  const toggleSub = (key: Theme, sub: string) => {
    const current = settings.themes[key].subCategories;
    updateTheme(key, { subCategories: current.includes(sub) ? current.filter((s) => s !== sub) : [...current, sub] });
  };

  const toggleLevel = (level: Level) => {
    const levels = settings.levels.includes(level)
      ? settings.levels.filter((l) => l !== level)
      : LEVELS.filter((l) => l === level || settings.levels.includes(l));
    onChange({ ...settings, levels });
  };

  const setCount = (raw: string) => {
    const n = Math.max(1, Math.floor(Number(raw) || 1));
    onChange({ ...settings, count: n });
  };

  const countFor = (key: Theme, sub?: string) =>
    ALL_QUESTIONS.filter(
      (q) =>
        q.theme === key &&
        settings.levels.includes(q.level) &&
        (sub ? q.subCategory === sub : !settings.themes[key].enabled || settings.themes[key].subCategories.includes(q.subCategory)),
    ).length;

  return (
    <>
      <h1>Interview drill</h1>
      <p className="lede">
        Pick the topics and level, then answer questions picked at random, in proportion to how many each topic has.
      </p>

      <section className="block" aria-labelledby="h-topics">
        <h2 id="h-topics">Topics</h2>
        {THEMES.map((t) => {
          const state = settings.themes[t.key];
          return (
            <div className="theme" key={t.key}>
              <button
                type="button"
                className="theme-row"
                aria-pressed={state.enabled}
                onClick={() => updateTheme(t.key, { enabled: !state.enabled })}
              >
                <span className="bubble" aria-hidden="true">
                  {state.enabled ? '✓' : ''}
                </span>
                <span className="theme-row__name">
                  {t.name}
                  {t.detail && <small>{t.detail}</small>}
                </span>
                <span className="theme-row__count">{countFor(t.key)} questions</span>
              </button>

              {state.enabled && (
                <div className="subs">
                  <div className="subs__head">
                    <span className="hint">
                      {state.subCategories.length} of {t.subCategories.length} subtopics
                    </span>
                    <button type="button" className="linkish" onClick={() => updateTheme(t.key, { subCategories: [...t.subCategories] })}>
                      Select all
                    </button>
                    <button type="button" className="linkish" onClick={() => updateTheme(t.key, { subCategories: [] })}>
                      Clear
                    </button>
                  </div>
                  <div className="chips">
                    {t.subCategories.map((sub) => (
                      <button
                        type="button"
                        key={sub}
                        className="chip"
                        aria-pressed={state.subCategories.includes(sub)}
                        onClick={() => toggleSub(t.key, sub)}
                      >
                        {sub}
                        <span className="chip__count">{countFor(t.key, sub)}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      <section className="block" aria-labelledby="h-level">
        <h2 id="h-level">Level</h2>
        <div className="seg" role="group" aria-labelledby="h-level">
          {LEVELS.map((level) => (
            <button type="button" key={level} aria-pressed={settings.levels.includes(level)} onClick={() => toggleLevel(level)}>
              {LEVEL_LABELS[level]}
            </button>
          ))}
        </div>
        <p className="hint note">You can pick more than one.</p>
      </section>

      <section className="block" aria-labelledby="h-mode">
        <h2 id="h-mode">Format</h2>
        <div className="seg" role="radiogroup" aria-labelledby="h-mode">
          {(['test', 'open'] as Mode[]).map((mode) => (
            <button
              type="button"
              role="radio"
              key={mode}
              aria-checked={settings.mode === mode}
              onClick={() => onChange({ ...settings, mode })}
            >
              {mode === 'test' ? 'Test' : 'Open question'}
            </button>
          ))}
        </div>
        <p className="hint note">
          {settings.mode === 'test'
            ? 'Choose one of four answers. The right answer shows as soon as you pick.'
            : 'Type your answer, then check it. The app compares it with the right answer, and you confirm whether you got it.'}
        </p>
      </section>

      <section className="block" aria-labelledby="h-count">
        <h2 id="h-count">Number of questions</h2>
        <div className="count-row">
          <input
            type="number"
            min={1}
            max={maxCount}
            value={settings.count}
            aria-labelledby="h-count"
            onChange={(e) => setCount(e.target.value)}
          />
          <input
            type="range"
            min={1}
            max={maxCount}
            value={Math.min(settings.count, maxCount)}
            disabled={!plan.available}
            aria-label="Number of questions"
            onChange={(e) => setCount(e.target.value)}
          />
          <span className="hint">{plan.available} available</span>
        </div>
      </section>

      <section className="block" aria-labelledby="h-plan">
        <h2 id="h-plan">This test</h2>
        <div className="panel">
          {!anyTheme ? (
            <p className="empty">Choose at least one topic.</p>
          ) : settings.levels.length === 0 ? (
            <p className="empty">Choose at least one level.</p>
          ) : plan.available === 0 ? (
            <p className="empty">No questions match. Add subtopics or levels.</p>
          ) : (
            plan.groups.map((g) => (
              <div className="bar-row" key={g.theme}>
                <span>{themeLabel(g.theme)}</span>
                <span className="bar">
                  <i style={{ width: `${plan.total ? (g.count / plan.total) * 100 : 0}%` }} />
                </span>
                <b>{g.count}</b>
              </div>
            ))
          )}
          {plan.available > 0 && settings.count > plan.available && (
            <p className="hint warn">
              Only {plan.available} questions match, so the test will have {plan.available}.
            </p>
          )}
        </div>
        <div className="actions">
          <button type="button" className="primary" disabled={!plan.total} onClick={() => onStart(plan)}>
            Start {plan.total || ''} question{plan.total === 1 ? '' : 's'}
          </button>
        </div>
      </section>
    </>
  );
}
