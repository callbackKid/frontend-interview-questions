import type { QuizQuestion } from '../data';
import type { OpenCheck } from '../types';

/** Test mode: an answer is right when it is exactly the correct option. */
export function isCorrectChoice(question: QuizQuestion, choice: string): boolean {
  return choice === question.correctAnswer;
}

const STOP_WORDS = new Set(
  (
    'a an the and or but if then than so to of in on at by for from with without into onto as is are was were be been ' +
    'being it its this that these those there their they them it\'s just also can could may might must ' +
    'should would will do does did done has have had all any each every some such same other more most less very ' +
    'when where which who what why how while after before about over under between through via e.g eg etc one two ' +
    'you your we our us use used using uses make makes made like'
  ).split(' '),
);

function tokens(text: string): string[] {
  return (text.toLowerCase().match(/[a-z0-9][a-z0-9_$-]*(?:\.[a-z0-9_$-]+)*/g) ?? []).filter(Boolean);
}

/** Loose match so "rejects" ≈ "rejected" and "promise" ≈ "promises". */
function sameWord(a: string, b: string): boolean {
  if (a === b) return true;
  if (a.length < 4 || b.length < 4) return false;
  const stem = Math.min(5, a.length, b.length);
  return a.slice(0, stem) === b.slice(0, stem) && Math.abs(a.length - b.length) <= 4;
}

/**
 * Open mode: compare a typed answer with the right answer, fully offline.
 *
 * - Short sequence answers ("1 4 3 2", "a c b d") are compared token by token, in order.
 * - Otherwise the key terms of the right answer (stop words removed) are looked up in the
 *   typed answer. It is a hint for the user, not a grade: they confirm the result themselves.
 */
export function checkOpenAnswer(typed: string, reference: string): OpenCheck {
  const refTokens = tokens(reference);
  const typedTokens = tokens(typed);

  const isSequence = refTokens.length > 1 && refTokens.every((t) => t.length <= 2);
  if (isSequence) {
    const ok = refTokens.length === typedTokens.length && refTokens.every((t, i) => t === typedTokens[i]);
    return { verdict: ok ? 'close' : 'far', matched: ok ? refTokens : [], missing: ok ? [] : refTokens, ordered: true };
  }

  // A yes/no answer with the opposite polarity is wrong whatever else matches.
  const polarity = (list: string[]) => list.find((t) => t === 'yes' || t === 'no');
  const refPolarity = polarity(refTokens.slice(0, 2));
  const typedPolarity = polarity(typedTokens.slice(0, 3));
  if (refPolarity && typedPolarity && refPolarity !== typedPolarity) {
    return { verdict: 'far', matched: [], missing: [refPolarity], ordered: false };
  }

  const isKeyTerm = (t: string) => t === 'yes' || t === 'no' || (!STOP_WORDS.has(t) && (t.length >= 3 || /\d/.test(t)));
  const keyTerms = [...new Set(refTokens.filter(isKeyTerm))];
  const terms = keyTerms.length ? keyTerms : [...new Set(refTokens)];
  const matched = terms.filter((term) => typedTokens.some((t) => sameWord(t, term)));
  const missing = terms.filter((term) => !matched.includes(term));
  const ratio = terms.length ? matched.length / terms.length : 0;
  const verdict = ratio >= 0.6 ? 'close' : ratio >= 0.3 ? 'partial' : 'far';
  return { verdict, matched, missing, ordered: false };
}
