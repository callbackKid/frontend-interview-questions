import { useEffect, useState } from 'react';
import { themeLabel } from '../config/themes';
import type { Session } from '../types';
import { Explanation } from './Explanation';
import { OpenAnswer } from './OpenAnswer';
import { TestOptions } from './TestOptions';
import { QuestionText } from './Text';

interface Props {
  session: Session;
  onChoose: (optionIndex: number) => void;
  onType: (text: string) => void;
  onCheck: () => void;
  onMark: (correct: boolean) => void;
  onNext: () => void;
  onFinish: () => void;
}

export function QuizScreen({ session, onChoose, onType, onCheck, onMark, onNext, onFinish }: Props) {
  const { question, options } = session.questions[session.index]!;
  const answer = session.answers[session.index]!;
  const total = session.questions.length;
  const isLast = session.index === total - 1;
  const answered = session.mode === 'test' ? answer.chosen !== null : answer.revealed;
  const canGoOn = answer.correct !== null;

  // Explanation starts closed for every new question.
  const [explanationOpen, setExplanationOpen] = useState(false);
  useEffect(() => setExplanationOpen(false), [session.index]);

  // Keyboard: 1–4 / A–D to answer in test mode, E to toggle the explanation.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement;
      if (target.tagName === 'TEXTAREA' || target.tagName === 'INPUT') return;
      const key = e.key.toLowerCase();
      if (session.mode === 'test' && answer.chosen === null) {
        const index = ['1', '2', '3', '4'].indexOf(key) >= 0 ? Number(key) - 1 : ['a', 'b', 'c', 'd'].indexOf(key);
        if (index >= 0) {
          e.preventDefault();
          onChoose(index);
          return;
        }
      }
      if (key === 'e' && answered) {
        e.preventDefault();
        setExplanationOpen((open) => !open);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [session.mode, answer.chosen, answered, onChoose]);

  // After answering, move focus to "Next" so Enter continues.
  useEffect(() => {
    if (canGoOn) document.getElementById('next-btn')?.focus({ preventScroll: true });
  }, [canGoOn, session.index]);

  return (
    <>
      <div className="topbar">
        <button type="button" className="secondary" onClick={onFinish}>
          {session.answers.some((a) => a.correct !== null) ? 'Finish' : 'Back'}
        </button>
        <div className="progress" role="progressbar" aria-label="Progress" aria-valuemin={1} aria-valuemax={total} aria-valuenow={session.index + 1}>
          <i style={{ width: `${((session.index + 1) / total) * 100}%` }} />
        </div>
        <span className="qnum">
          {session.index + 1} / {total}
        </span>
      </div>

      <article className="sheet" key={question.id}>
        <div className="tags">
          <span className="tag">{themeLabel(question.theme)}</span>
          <span className="tag">{question.subCategory}</span>
          <span className={`tag tag--${question.level}`}>{question.level}</span>
        </div>

        <QuestionText text={question.question} />

        {session.mode === 'test' ? (
          <TestOptions options={options} correctAnswer={question.correctAnswer} chosen={answer.chosen} onChoose={onChoose} />
        ) : (
          <OpenAnswer
            question={question.question}
            options={options}
            correctAnswer={question.correctAnswer}
            answer={answer}
            onType={onType}
            onCheck={onCheck}
            onMark={onMark}
          />
        )}

        {answered && (
          <Explanation
            id={question.id}
            text={question.explanation}
            open={explanationOpen}
            onToggle={() => setExplanationOpen((open) => !open)}
          />
        )}

        {canGoOn && (
          <div className="actions">
            <button type="button" id="next-btn" className="primary" onClick={onNext}>
              {isLast ? 'See results' : 'Next question'}
            </button>
          </div>
        )}
      </article>
    </>
  );
}
