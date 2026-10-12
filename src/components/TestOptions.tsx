import { InlineText } from './Text';

const LETTERS = ['A', 'B', 'C', 'D'];

interface Props {
  options: string[];
  correctAnswer: string;
  chosen: string | null;
  onChoose: (index: number) => void;
}

export function TestOptions({ options, correctAnswer, chosen, onChoose }: Props) {
  const answered = chosen !== null;
  return (
    <>
      <ul className="options">
        {options.map((option, i) => {
          const isRight = answered && option === correctAnswer;
          const isWrongPick = answered && option === chosen && option !== correctAnswer;
          const className = ['opt', isRight && 'opt--right', isWrongPick && 'opt--wrong', option === chosen && 'opt--chosen']
            .filter(Boolean)
            .join(' ');
          return (
            <li key={option}>
              <button type="button" className={className} disabled={answered} onClick={() => onChoose(i)}>
                <span className="bubble" aria-hidden="true">
                  {LETTERS[i]}
                </span>
                <span className="opt__text">
                  {isRight ? (
                    <span className="hl hl--anim">
                      <InlineText text={option} />
                    </span>
                  ) : (
                    <InlineText text={option} />
                  )}
                </span>
                {isRight && <span className="sr-only">(right answer)</span>}
                {isWrongPick && <span className="sr-only">(your answer)</span>}
              </button>
            </li>
          );
        })}
      </ul>
      {answered ? (
        <p className={chosen === correctAnswer ? 'verdict verdict--ok' : 'verdict verdict--no'} role="status">
          {chosen === correctAnswer ? 'Correct.' : 'Not this one. The right answer is highlighted.'}
        </p>
      ) : (
        <p className="hint keys">Press 1–4 or A–D to answer.</p>
      )}
    </>
  );
}
