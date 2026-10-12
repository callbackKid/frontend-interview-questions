import { cssQuestions } from './css';
import { htmlQuestions } from './html';
import { promisesQuestions } from './promises';
import type { QuizQuestion } from './types';

export * from './types';
export { cssQuestions, htmlQuestions, promisesQuestions };

export const ALL_QUESTIONS: QuizQuestion[] = [...htmlQuestions, ...cssQuestions, ...promisesQuestions];
