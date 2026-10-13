import { arraysStringsQuestions } from './arrays-strings';
import { cssQuestions } from './css';
import { dataTypesQuestions } from './data-types';
import { functionsQuestions } from './functions';
import { htmlQuestions } from './html';
import { objectsOopQuestions } from './objects-oop';
import { operatorsQuestions } from './operators';
import { promisesQuestions } from './promises';
import { runtimeBrowserQuestions } from './runtime-browser';
import type { QuizQuestion } from './types';
import { variablesScopeQuestions } from './variables-scope';

export * from './types';
export {
  arraysStringsQuestions,
  cssQuestions,
  dataTypesQuestions,
  functionsQuestions,
  htmlQuestions,
  objectsOopQuestions,
  operatorsQuestions,
  promisesQuestions,
  runtimeBrowserQuestions,
  variablesScopeQuestions,
};

export const ALL_QUESTIONS: QuizQuestion[] = [
  ...htmlQuestions,
  ...cssQuestions,
  ...dataTypesQuestions,
  ...operatorsQuestions,
  ...variablesScopeQuestions,
  ...functionsQuestions,
  ...objectsOopQuestions,
  ...arraysStringsQuestions,
  ...runtimeBrowserQuestions,
  ...promisesQuestions,
];
