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

export type PromisesSubCategory = (typeof PROMISES_SUBCATEGORIES)[number];
export type HtmlSubCategory = (typeof HTML_SUBCATEGORIES)[number];
export type CssSubCategory = (typeof CSS_SUBCATEGORIES)[number];

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

export type QuizQuestion = PromisesQuestion | HtmlQuestion | CssQuestion;
export type Theme = QuizQuestion['theme'];
