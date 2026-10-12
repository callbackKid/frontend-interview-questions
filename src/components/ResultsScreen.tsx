import { THEMES, themeLabel } from '../config/themes';
import type { Session } from '../types';
import { InlineText, QuestionText } from './Text';

interface Props {
  session: Session;
  onRetryMissed: () => void;
  onRestart: () => void;
  onSetup: () => void;
}

interface Tally {
  label: string;
  right: number;
  total: number;
}

function Bars({ rows }: { rows: Tally[] }) {
  return (
    <div className="panel">
      {rows.map((r) => (
        <div className="bar-row" key={r.label}>
          <span>{r.label}</span>
          <span className="bar">
            <i style={{ width: `${(r.right / r.total) * 100}%` }} />
          </span>
          <b>
            {r.right}/{r.total}
          </b>
        </div>
      ))}
    </div>
  );
}

export function ResultsScreen({ session, onRetryMissed, onRestart, onSetup }: Props) {
  const done = session.questions
    .map((q, i) => ({ ...q, answer: session.answers[i]! }))
    .filter((x) => x.answer.correct !== null);
  const right = done.filter((x) => x.answer.correct).length;
  const missed = done.filter((x) => !x.answer.correct);

  const byTheme: Tally[] = THEMES.map((t) => {
    const items = done.filter((x) => x.question.theme === t.key);
    return { label: themeLabel(t.key), total: items.length, right: items.filter((x) => x.answer.correct).length };
  }).filter((t) => t.total > 0);

  const subMap = new Map<string, Tally>();
  for (const x of done) {
    const label = x.question.subCategory;
    const key = `${x.question.theme}/${label}`;
    const t = subMap.get(key) ?? { label, right: 0, total: 0 };
    t.total += 1;
    if (x.answer.correct) t.right += 1;
    subMap.set(key, t);
  }
  const weakest = [...subMap.values()]
    .filter((t) => t.right < t.total)
    .sort((a, b) => a.right / a.total - b.right / b.total)
    .slice(0, 5);

  return (
    <>
      <h1>Results</h1>
      {done.length === 0 ? (
        <p className="lede">You didn't answer any questions.</p>
      ) : (
        <>
          <p className="score">
            {right}
            <small> / {done.length} correct</small>
          </p>
          <p className="lede">
            {done.length < session.questions.length && `You answered ${done.length} of ${session.questions.length} questions. `}
            {Math.round((right / done.length) * 100)}% overall.
          </p>

          <section className="block">
            <h2>By topic</h2>
            <Bars rows={byTheme} />
          </section>

          {weakest.length > 0 && (
            <section className="block">
              <h2>Worth reviewing</h2>
              <Bars rows={weakest} />
            </section>
          )}

          <section className="block">
            <h2>Missed questions</h2>
            {missed.length === 0 ? (
              <p className="empty">None. Every answer was right.</p>
            ) : (
              <ul className="missed">
                {missed.map(({ question, answer }) => (
                  <li key={question.id}>
                    <div className="tags">
                      <span className="tag">{themeLabel(question.theme)}</span>
                      <span className="tag">{question.subCategory}</span>
                    </div>
                    <QuestionText text={question.question} compact />
                    {(answer.chosen || answer.typed) && (
                      <p className="missed__yours">
                        Your answer: {answer.chosen ? <InlineText text={answer.chosen} /> : answer.typed}
                      </p>
                    )}
                    <p className="missed__right">
                      Right answer:{' '}
                      <span className="hl">
                        <InlineText text={question.correctAnswer} />
                      </span>
                    </p>
                    <details className="missed__explanation">
                      <summary>Explanation</summary>
                      <p>
                        <InlineText text={question.explanation} />
                      </p>
                    </details>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </>
      )}

      <div className="actions">
        {missed.length > 0 && (
          <button type="button" className="primary" onClick={onRetryMissed}>
            Retake the {missed.length} missed
          </button>
        )}
        <button type="button" className={missed.length ? 'secondary' : 'primary'} onClick={onRestart}>
          New test, same settings
        </button>
        <button type="button" className="secondary" onClick={onSetup}>
          Change settings
        </button>
      </div>
    </>
  );
}
