export type Level = 'easy' | 'medium' | 'hard';

export const PROMISES_SUBCATEGORIES = [
  'Fundamentals',
  'Advanced & internals',
  'Static methods',
  'Chaining',
  'Error handling',
  'async/await',
  'Event loop & microtasks',
  'Node.js',
  'Concurrency & cancellation',
  'React',
] as const;

export const HTML_SUBCATEGORIES = [
  'Document basics',
  'Head & metadata',
  'Internationalization',
  'DOM & attributes',
  'Semantics',
  'Dialogs & popovers',
  'Web Components',
  'Accessibility (a11y)',
  'Links & resource hints',
  'SEO & metadata',
  'Forms',
  'Loading & performance',
  'Media & embeds',
  'Security',
  'Tables',
  'Content categories',
  'Validation',
  'HTML5 platform',
] as const;

export const CSS_SUBCATEGORIES = [
  'Cascade & specificity',
  'Selectors',
  'Units & values',
  'Colors',
  'Nesting',
  'Box model',
  'Display & formatting contexts',
  'Positioning',
  'Stacking & z-index',
  'Flexbox',
  'Grid',
  'Responsive design',
  'Visual effects',
  'Typography',
  'Transitions & animations',
  'Accessibility (a11y)',
  'Custom properties & theming',
  'Architecture & methodology',
  'Rendering & performance',
  'Shadow DOM styling',
] as const;

export const DATA_TYPES_SUBCATEGORIES = [
  'Primitives & objects',
  'Type checking',
  'Special values',
  'Coercion',
  'Collections',
  'JSON',
] as const;

export const OPERATORS_SUBCATEGORIES = [
  'Equality',
  'Logical operators',
  'Arithmetic',
  'Spread & rest',
  'Syntax & statements',
] as const;

export const VARIABLES_SCOPE_SUBCATEGORIES = [
  'Declarations',
  'Hoisting',
  'Scope & closures',
  'Execution context',
  'Strict mode',
] as const;

export const FUNCTIONS_SUBCATEGORIES = [
  'Basics',
  'this & context',
  'Higher-order functions',
  'Functional techniques',
  'Recursion',
  'Generators',
] as const;

export const OBJECTS_OOP_SUBCATEGORIES = [
  'Creating objects',
  'Prototypes & inheritance',
  'Properties',
  'Immutability',
  'Equality & copying',
  'Classes & encapsulation',
  'Paradigms & environment',
] as const;

export const ARRAYS_STRINGS_SUBCATEGORIES = [
  'Array methods',
  'Strings',
  'Regular expressions',
] as const;

export const RUNTIME_BROWSER_SUBCATEGORIES = [
  'Modules',
  'Timers',
  'Memory',
  'Errors',
  'Browser APIs',
  'Compatibility',
] as const;

export const REACT_SUBCATEGORIES = [
  'Fundamentals',
  'JSX & rendering',
  'Components & patterns',
  'State & data flow',
  'Lifecycle & effects',
  'Hooks',
  'Concurrent features',
  'Performance',
  'Internals',
  'Events',
  'Routing',
  'Security',
] as const;

export const TYPESCRIPT_SUBCATEGORIES = [
  'Fundamentals',
  'Basic types',
  'Unions & literals',
  'Objects & interfaces',
  'Narrowing',
  'Type operators',
  'Generics',
  'Advanced types',
  'Functions',
  'Classes',
  'Modules & config',
  'React',
  'Practice',
] as const;

export type PromisesSubCategory = (typeof PROMISES_SUBCATEGORIES)[number];
export type HtmlSubCategory = (typeof HTML_SUBCATEGORIES)[number];
export type CssSubCategory = (typeof CSS_SUBCATEGORIES)[number];
export type DataTypesSubCategory = (typeof DATA_TYPES_SUBCATEGORIES)[number];
export type OperatorsSubCategory = (typeof OPERATORS_SUBCATEGORIES)[number];
export type VariablesScopeSubCategory = (typeof VARIABLES_SCOPE_SUBCATEGORIES)[number];
export type FunctionsSubCategory = (typeof FUNCTIONS_SUBCATEGORIES)[number];
export type ObjectsOopSubCategory = (typeof OBJECTS_OOP_SUBCATEGORIES)[number];
export type ArraysStringsSubCategory = (typeof ARRAYS_STRINGS_SUBCATEGORIES)[number];
export type RuntimeBrowserSubCategory = (typeof RUNTIME_BROWSER_SUBCATEGORIES)[number];
export type ReactSubCategory = (typeof REACT_SUBCATEGORIES)[number];
export type TypeScriptSubCategory = (typeof TYPESCRIPT_SUBCATEGORIES)[number];

interface BaseQuestion {
  id: string;
  question: string;
  level: Level;
  fourOptionsForAnAnswer: [string, string, string, string];
  correctAnswer: string; // always equal to one of fourOptionsForAnAnswer
  explanation: string; // why the answer is right and the theory behind it; may contain inline code in backticks
}

export interface PromisesQuestion extends BaseQuestion { theme: 'Promises'; subCategory: PromisesSubCategory; }
export interface HtmlQuestion extends BaseQuestion { theme: 'HTML'; subCategory: HtmlSubCategory; }
export interface CssQuestion extends BaseQuestion { theme: 'CSS'; subCategory: CssSubCategory; }
export interface DataTypesQuestion extends BaseQuestion { theme: 'Data types'; subCategory: DataTypesSubCategory; }
export interface OperatorsQuestion extends BaseQuestion { theme: 'Operators'; subCategory: OperatorsSubCategory; }
export interface VariablesScopeQuestion extends BaseQuestion { theme: 'Variables & scope'; subCategory: VariablesScopeSubCategory; }
export interface FunctionsQuestion extends BaseQuestion { theme: 'Functions'; subCategory: FunctionsSubCategory; }
export interface ObjectsOopQuestion extends BaseQuestion { theme: 'Objects & OOP'; subCategory: ObjectsOopSubCategory; }
export interface ArraysStringsQuestion extends BaseQuestion { theme: 'Arrays & strings'; subCategory: ArraysStringsSubCategory; }
export interface RuntimeBrowserQuestion extends BaseQuestion { theme: 'Runtime & browser'; subCategory: RuntimeBrowserSubCategory; }
export interface ReactQuestion extends BaseQuestion { theme: 'React'; subCategory: ReactSubCategory; }
export interface TypeScriptQuestion extends BaseQuestion { theme: 'TypeScript'; subCategory: TypeScriptSubCategory; }

export type QuizQuestion =
  | HtmlQuestion
  | CssQuestion
  | DataTypesQuestion
  | OperatorsQuestion
  | VariablesScopeQuestion
  | FunctionsQuestion
  | ObjectsOopQuestion
  | ArraysStringsQuestion
  | RuntimeBrowserQuestion
  | PromisesQuestion
  | ReactQuestion
  | TypeScriptQuestion;
export type Theme = QuizQuestion['theme'];
