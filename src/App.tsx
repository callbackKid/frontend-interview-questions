import { useCallback, useState } from 'react';
import { QuizScreen } from './components/QuizScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { SetupScreen } from './components/SetupScreen';
import { usePersistentState } from './hooks/usePersistentState';
import { checkOpenAnswer, isCorrectChoice } from './lib/check';
import { createSession, pickQuestions, planTest } from './lib/selection';
import { sanitizeSettings } from './lib/settings';
import type { AnswerRecord, Session } from './types';

type Screen = 'setup' | 'quiz' | 'results';

export default function App() {
  const [settings, setSettings] = usePersistentState('drill.settings', sanitizeSettings);
  const [session, setSession] = useState<Session | null>(null);
  const [screen, setScreen] = useState<Screen>('setup');

  const goTo = (next: Screen) => {
    setScreen(next);
    window.scrollTo(0, 0);
  };

  const startNew = () => {
    const plan = planTest(settings);
    if (!plan.total) return goTo('setup');
    setSession(createSession(pickQuestions(plan), settings.mode));
    goTo('quiz');
  };

  /** Update the current question's answer. */
  const updateAnswer = useCallback((update: (answer: AnswerRecord, s: Session) => Partial<AnswerRecord>) => {
    setSession((s) => {
      if (!s) return s;
      const answers = [...s.answers];
      const current = answers[s.index]!;
      answers[s.index] = { ...current, ...update(current, s) };
      return { ...s, answers };
    });
  }, []);

  const choose = useCallback(
    (optionIndex: number) =>
      updateAnswer((a, s) => {
        const { question, options } = s.questions[s.index]!;
        const option = options[optionIndex];
        if (a.chosen !== null || option === undefined) return {};
        return { chosen: option, correct: isCorrectChoice(question, option) };
      }),
    [updateAnswer],
  );

  const checkOpen = () =>
    updateAnswer((a, s) => {
      const { question } = s.questions[s.index]!;
      if (!a.typed.trim()) return { revealed: true };
      const check = checkOpenAnswer(a.typed, question.correctAnswer);
      // Pre-select the obvious cases; the user can still change it.
      const correct = check.verdict === 'close' ? true : check.verdict === 'far' ? false : null;
      return { revealed: true, check, correct };
    });

  const next = () => {
    if (!session) return;
    if (session.index < session.questions.length - 1) {
      setSession({ ...session, index: session.index + 1 });
      window.scrollTo(0, 0);
    } else goTo('results');
  };

  const finish = () => {
    if (session?.answers.some((a) => a.correct !== null)) goTo('results');
    else goTo('setup');
  };

  const retryMissed = () => {
    if (!session) return;
    const missed = session.questions.filter((_, i) => session.answers[i]!.correct === false).map((q) => q.question);
    setSession(createSession(missed, session.mode));
    goTo('quiz');
  };

  return (
    <main className="wrap">
      {screen === 'setup' || !session ? (
        <SetupScreen settings={settings} onChange={setSettings} onStart={startNew} />
      ) : screen === 'quiz' ? (
        <QuizScreen
          session={session}
          onChoose={choose}
          onType={(typed) => updateAnswer(() => ({ typed }))}
          onCheck={checkOpen}
          onMark={(correct) => updateAnswer(() => ({ correct }))}
          onNext={next}
          onFinish={finish}
        />
      ) : (
        <ResultsScreen session={session} onRetryMissed={retryMissed} onRestart={startNew} onSetup={() => goTo('setup')} />
      )}
    </main>
  );
}
