import { arraysStringsQuestions } from './arrays-strings';
import { cssQuestions } from './css';
import { dataTypesQuestions } from './data-types';
import { functionsQuestions } from './functions';
import { htmlQuestions } from './html';
import { objectsOopQuestions } from './objects-oop';
import { operatorsQuestions } from './operators';
import { promisesQuestions } from './promises';
import { reactQuestions } from './react';
import { runtimeBrowserQuestions } from './runtime-browser';
import type { QuizQuestion } from './types';
import { typescriptQuestions } from './typescript';
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
  reactQuestions,
  runtimeBrowserQuestions,
  typescriptQuestions,
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
  ...reactQuestions,
  ...typescriptQuestions,
];
