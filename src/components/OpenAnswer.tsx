import { InlineText } from './Text';
import type { AnswerRecord } from '../types';

interface Props {
  question: string;
  options: string[];
  correctAnswer: string;
  answer: AnswerRecord;
  onType: (text: string) => void;
  onCheck: () => void;
  onMark: (correct: boolean) => void;
}

const VERDICT_TEXT = {
  close: 'Looks right.',
  partial: 'Partly matches.',
  far: "Doesn't match.",
} as const;

export function OpenAnswer({ question, options, correctAnswer, answer, onType, onCheck, onMark }: Props) {
  // Questions like "Which of these…" can't be answered without seeing the options.
  const needsOptions = /\b(of these|following)\b/i.test(question);
  const hasText = answer.typed.trim().length > 0;
  const check = answer.check;

  return (
    <>
      {needsOptions && (
        <ul className="static-opts">
          {options.map((o) => (
            <li key={o}>
              <InlineText text={o} />
            </li>
          ))}
        </ul>
      )}

      <label className="sr-only" htmlFor="typed">
        Your answer
      </label>
      <textarea
        id="typed"
        value={answer.typed}
        readOnly={answer.revealed}
        placeholder="Type your answer, or answer out loud and just show the answer"
        onChange={(e) => onType(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && (e.metaKey || e.ctrlKey) && !answer.revealed) onCheck();
        }}
      />

      {!answer.revealed ? (
        <div className="actions">
          <button type="button" className="primary" onClick={onCheck}>
            {hasText ? 'Check answer' : 'Show answer'}
          </button>
          {hasText && <span className="hint">or press Ctrl+Enter</span>}
        </div>
      ) : (
        <div className="answer-box">
          <p className="answer-box__label">Right answer</p>
          <p className="answer-box__value">
            <span className="hl hl--anim">
              <InlineText text={correctAnswer} />
            </span>
          </p>

          {check && (
            <div className={`check check--${check.verdict}`} role="status">
              <b>{VERDICT_TEXT[check.verdict]}</b>{' '}
              {check.ordered
                ? check.verdict === 'close'
                  ? 'Same sequence as the right answer.'
                  : 'The sequence differs from the right answer.'
                : `Your answer covers ${check.matched.length} of ${check.matched.length + check.missing.length} key terms.`}
              {!check.ordered && check.missing.length > 0 && (
                <span className="check__missing"> Missing: {check.missing.join(', ')}.</span>
              )}
            </div>
          )}

          <div className="actions">
            <span className="hint">Did you get it?</span>
            <div className="seg" role="radiogroup" aria-label="Did you get it?">
              <button type="button" role="radio" aria-checked={answer.correct === true} onClick={() => onMark(true)}>
                Got it
              </button>
              <button type="button" role="radio" aria-checked={answer.correct === false} onClick={() => onMark(false)}>
                Missed it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
