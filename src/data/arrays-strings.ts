import type { ArraysStringsQuestion } from './types';

export const arraysStringsQuestions: ArraysStringsQuestion[] = [
  {
    id: "arrays-001",
    question: "Which of these array methods changes the original array?",
    theme: "Arrays & strings",
    subCategory: "Array methods",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`map()`",
      "`filter()`",
      "`sort()`",
      "`concat()`"
    ],
    correctAnswer: "`sort()`",
    explanation: "Mutating methods: `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`, `fill`, `copyWithin`. Non-mutating ones return something new: `map`, `filter`, `reduce`, `slice`, `concat`, `flat`, `flatMap`, `join`, and the ES2023 copies `toSorted`, `toReversed`, `toSpliced` and `with`. Searching and testing: `find`, `findIndex`, `findLast`, `indexOf`, `includes`, `some`, `every`. Iterating: `forEach`, `keys`, `values`, `entries`."
  },
  {
    id: "arrays-002",
    question: "What does `[1, [2, [3]]].flat()` return?",
    theme: "Arrays & strings",
    subCategory: "Array methods",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`[1, 2, 3]`",
      "`[1, 2, [3]]`",
      "`[1, [2, [3]]]`",
      "`[[1], [2], [3]]`"
    ],
    correctAnswer: "`[1, 2, [3]]`",
    explanation: "`flat(depth)` flattens one level by default. Pass a depth (`flat(2)`) or `flat(Infinity)` to flatten fully. `flatMap(fn)` is `map` followed by `flat(1)`."
  },
  {
    id: "arrays-003",
    question: "What is the difference between `slice()` and `splice()`?",
    theme: "Arrays & strings",
    subCategory: "Array methods",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`slice` returns a copy of a portion without changing the array; `splice` removes or inserts elements in place and returns the removed ones",
      "`splice` returns a copy; `slice` changes the array in place",
      "Both change the original array; `splice` also sorts it",
      "`slice` works on strings only; `splice` on arrays only"
    ],
    correctAnswer: "`slice` returns a copy of a portion without changing the array; `splice` removes or inserts elements in place and returns the removed ones",
    explanation: "`arr.slice(start, end)` returns elements from `start` up to (not including) `end`; negative indexes count from the end and `arr.slice()` makes a shallow copy. Strings have `slice` too. `arr.splice(start, deleteCount, ...items)` deletes `deleteCount` items at `start`, inserts `items`, and returns an array of what was removed. `toSpliced` is the non-mutating version."
  },
  {
    id: "arrays-004",
    question: "What does this log?\n\nconst a = [1, 2, 3, 4, 5];\nconst b = a.slice(1, 3);\nconst c = a.splice(1, 3);\nconsole.log(b, c, a);",
    theme: "Arrays & strings",
    subCategory: "Array methods",
    level: "medium",
    fourOptionsForAnAnswer: [
      "[2, 3] [2, 3] [1, 4, 5]",
      "[2, 3, 4] [2, 3, 4] [1, 5]",
      "[2, 3] [2, 3, 4] [1, 2, 3, 4, 5]",
      "[2, 3] [2, 3, 4] [1, 5]"
    ],
    correctAnswer: "[2, 3] [2, 3, 4] [1, 5]",
    explanation: "`slice(1, 3)` takes indexes 1 and 2 (end is excluded) without touching `a`. `splice(1, 3)`'s second argument is a count: it removes three items starting at index 1 and returns them, leaving `a` as `[1, 5]`."
  },
  {
    id: "arrays-005",
    question: "What do `find`, `findIndex` and `indexOf` return when nothing matches?",
    theme: "Arrays & strings",
    subCategory: "Array methods",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`null`, `-1` and `-1`",
      "`-1`, `-1` and `undefined`",
      "`undefined`, `undefined` and `-1`",
      "`undefined`, `-1` and `-1`"
    ],
    correctAnswer: "`undefined`, `-1` and `-1`",
    explanation: "`find(fn)` returns the first element for which the callback is truthy; `findIndex(fn)` returns its index. `indexOf(value)` searches for a value with strict equality (so it can't find `NaN` or match objects by content). `includes(value)` returns a boolean and does find `NaN`. `findLast` and `findLastIndex` search from the end."
  },
  {
    id: "arrays-006",
    question: "Which methods add and remove elements at the start of an array?",
    theme: "Arrays & strings",
    subCategory: "Array methods",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`push()` adds and `pop()` removes",
      "`unshift()` adds and `shift()` removes",
      "`shift()` adds and `unshift()` removes",
      "`push()` adds and `shift()` removes"
    ],
    correctAnswer: "`unshift()` adds and `shift()` removes",
    explanation: "`push` and `pop` work at the end; `unshift` and `shift` work at the start. All four mutate the array. `push` and `unshift` return the new length; `pop` and `shift` return the removed element (or `undefined` if the array is empty). `shift` and `unshift` re-index every element, so they are slower on large arrays."
  },
  {
    id: "arrays-007",
    question: "What do `[].some(fn)` and `[].every(fn)` return for an empty array?",
    theme: "Arrays & strings",
    subCategory: "Array methods",
    level: "medium",
    fourOptionsForAnAnswer: [
      "`true` and `false`",
      "`false` and `false`",
      "`false` and `true`",
      "`undefined` and `undefined`"
    ],
    correctAnswer: "`false` and `true`",
    explanation: "`some` returns true if at least one element passes, and stops at the first one. `every` returns true if all elements pass, and stops at the first failure. With no elements, nothing passes (`some` is false) and nothing fails (`every` is true, 'vacuous truth')."
  },
  {
    id: "arrays-008",
    question: "What is `Array.from()` used for?",
    theme: "Arrays & strings",
    subCategory: "Array methods",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Creating a real array from an iterable or array-like (e.g. `NodeList`, `arguments`), with an optional map function",
      "Copying an array to another thread",
      "Converting an array into an object",
      "Creating an array from a JSON string"
    ],
    correctAnswer: "Creating a real array from an iterable or array-like (e.g. `NodeList`, `arguments`), with an optional map function",
    explanation: "Examples: `Array.from(document.querySelectorAll('a'))`, `Array.from(new Set(arr))`, `Array.from('abc')` gives `['a', 'b', 'c']`, and `Array.from({ length: 3 }, (_, i) => i * 2)` gives `[0, 2, 4]`. Unlike spread, it also accepts array-like objects that have only `length` and indexes."
  },
  {
    id: "arrays-009",
    question: "What is true about string methods like `toUpperCase()`, `replace()` and `slice()`?",
    theme: "Arrays & strings",
    subCategory: "Strings",
    level: "easy",
    fourOptionsForAnAnswer: [
      "They change the original string in place",
      "They work only on strings created with `new String()`",
      "They return a new string; strings are immutable so the original never changes",
      "They return `undefined` and update the variable"
    ],
    correctAnswer: "They return a new string; strings are immutable so the original never changes",
    explanation: "Common string methods: `slice`, `substring`, `at`, `indexOf`, `includes`, `startsWith`, `endsWith`, `split`, `trim`/`trimStart`/`trimEnd`, `padStart`/`padEnd`, `repeat`, `toUpperCase`/`toLowerCase`, `replace`/`replaceAll`, `match`/`matchAll`, `search`, `localeCompare`, `normalize`. Each returns a new value; to 'change' a string, reassign the result."
  },
  {
    id: "arrays-010",
    question: "Which call returns `'b-c'` from `'a-b-c'`?",
    theme: "Arrays & strings",
    subCategory: "Strings",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`'a-b-c'.split('-')[1]`",
      "`'a-b-c'.at(2)`",
      "`'a-b-c'.slice(-2)`",
      "`'a-b-c'.slice(2)`"
    ],
    correctAnswer: "`'a-b-c'.slice(2)`",
    explanation: "`slice(2)` takes everything from index 2: 'b-c'. `split('-')[1]` is 'b', `at(2)` returns the single character 'b', and `slice(-2)` takes the last two characters, '-c'."
  },
  {
    id: "arrays-011",
    question: "What is a regular expression?",
    theme: "Arrays & strings",
    subCategory: "Regular expressions",
    level: "easy",
    fourOptionsForAnAnswer: [
      "A pattern for matching text, written as `/pattern/flags` or `new RegExp('pattern', 'flags')`",
      "A function that repeats code on a schedule",
      "A strict type of string that can't be changed",
      "A standard format for writing numbers"
    ],
    correctAnswer: "A pattern for matching text, written as `/pattern/flags` or `new RegExp('pattern', 'flags')`",
    explanation: "Regexes are used to validate, search, extract and replace text. Building blocks: character classes (`\\d`, `\\w`, `\\s`, `[a-z]`), quantifiers (`*`, `+`, `?`, `{2,4}`), anchors (`^`, `$`), groups and alternation (`( )`, `(?<name> )`, `|`), and flags (`g` global, `i` ignore case, `m` multiline, `s` dot-all, `u`/`v` Unicode, `y` sticky, `d` indices). Use the constructor when the pattern is built at runtime."
  },
  {
    id: "arrays-012",
    question: "Which methods work with regular expressions?",
    theme: "Arrays & strings",
    subCategory: "Regular expressions",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Only `RegExp.match()` and `RegExp.replace()`",
      "`test` and `exec` on the RegExp; `match`, `matchAll`, `replace`, `replaceAll`, `search` and `split` on strings",
      "`find` and `filter` on the RegExp",
      "Only `String.includes()`, which accepts a regex"
    ],
    correctAnswer: "`test` and `exec` on the RegExp; `match`, `matchAll`, `replace`, `replaceAll`, `search` and `split` on strings",
    explanation: "`re.test(str)` returns a boolean; `re.exec(str)` returns one match with groups and `index`. `str.match(re)` returns the first match, or all matches with `g`. `str.matchAll(re)` (needs `g`) returns an iterator of detailed matches. `str.replace(re, replacement)` can use `$1` or a function. `str.search(re)` returns the index, and `str.split(re)` splits by a pattern. `includes`, `startsWith` and `endsWith` throw if given a regex."
  },
  {
    id: "arrays-013",
    question: "Why can `re.test(str)` alternate between `true` and `false` on the same string?",
    theme: "Arrays & strings",
    subCategory: "Regular expressions",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Regexes are compiled lazily, so the first call always fails",
      "`test` randomly samples the string for performance",
      "Strings are cached differently between calls",
      "With the `g` or `y` flag, the regex keeps `lastIndex` between calls and starts searching from there"
    ],
    correctAnswer: "With the `g` or `y` flag, the regex keeps `lastIndex` between calls and starts searching from there",
    explanation: "A global or sticky regex is stateful: after a match, `lastIndex` moves past it, the next search starts there, fails, and resets `lastIndex` to 0. Drop the `g` flag for simple checks, reset `re.lastIndex = 0`, or create the regex inside the function."
  }
];
