import type { OperatorsQuestion } from './types';

export const operatorsQuestions: OperatorsQuestion[] = [
  {
    id: "operators-001",
    question: "What is the difference between `==` and `===`?",
    theme: "Operators",
    subCategory: "Equality",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`===` compares without type conversion; `==` converts operands to a common type first",
      "`==` compares values; `===` compares memory addresses, even for primitives",
      "`===` works only for primitives; `==` is for objects",
      "They behave the same, but `===` is faster"
    ],
    correctAnswer: "`===` compares without type conversion; `==` converts operands to a common type first",
    explanation: "Strict equality `===` is true only when type and value match: `1 === '1'` is false. Loose equality `==` coerces first: `1 == '1'` and `0 == ''` are true. For objects both compare references. Prefer `===`; the one common use of `==` is `x == null`, which matches both `null` and `undefined`."
  },
  {
    id: "operators-002",
    question: "Which of these comparisons is `true`?",
    theme: "Operators",
    subCategory: "Equality",
    level: "medium",
    fourOptionsForAnAnswer: [
      "`null == 0`",
      "`NaN == NaN`",
      "`null == undefined`",
      "`'' == null`"
    ],
    correctAnswer: "`null == undefined`",
    explanation: "With `==`, `null` and `undefined` are equal to each other and to nothing else, so `null == 0` and `'' == null` are false (even though `null >= 0` is true, because relational operators convert to numbers). `NaN` isn't equal to anything, including itself."
  },
  {
    id: "operators-003",
    question: "Why is `{ a: 1 } === { a: 1 }` false?",
    theme: "Operators",
    subCategory: "Equality",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Object literals are converted to strings first, and the strings differ",
      "Strict equality is always false for objects; `==` would return true",
      "Property order isn't guaranteed, so the objects may differ",
      "Objects are compared by reference, and these are two different objects"
    ],
    correctAnswer: "Objects are compared by reference, and these are two different objects",
    explanation: "Each literal creates a new object in memory. `==` and `===` both check whether two references point to the same object, not whether the contents match. `const a = {}; const b = a; a === b` is true. To compare contents, check the keys and values yourself (recursively for nested data) or use a helper like lodash `isEqual`."
  },
  {
    id: "operators-004",
    question: "What do `0 ?? 10` and `0 || 10` return?",
    theme: "Operators",
    subCategory: "Logical operators",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`10` and `10`",
      "`0` and `10`",
      "`10` and `0`",
      "`0` and `0`"
    ],
    correctAnswer: "`0` and `10`",
    explanation: "`a ?? b` (nullish coalescing) returns `b` only when `a` is `null` or `undefined`. `a || b` returns `b` whenever `a` is falsy, which also covers `0`, `''`, `false` and `NaN`. Use `??` for defaults when `0` or an empty string are valid values. `??=` assigns only if the left side is nullish. `??` can't be mixed with `||` or `&&` without parentheses."
  },
  {
    id: "operators-005",
    question: "What do `null || 'default'` and `'x' && 'y'` return?",
    theme: "Operators",
    subCategory: "Logical operators",
    level: "medium",
    fourOptionsForAnAnswer: [
      "`true` and `true`",
      "`'default'` and `true`",
      "`'default'` and `'y'`",
      "`null` and `'x'`"
    ],
    correctAnswer: "`'default'` and `'y'`",
    explanation: "`&&` and `||` return one of their operands, not a boolean. `a || b` returns the first truthy operand, or the last one. `a && b` returns the first falsy operand, or the last one. Both short-circuit: the right side isn't evaluated once the result is known, which is why `user && user.name` and `cb && cb()` work. `&&` binds tighter than `||`."
  },
  {
    id: "operators-006",
    question: "What is the double negation `!!value` used for?",
    theme: "Operators",
    subCategory: "Logical operators",
    level: "easy",
    fourOptionsForAnAnswer: [
      "To cancel out a negation and return the value unchanged",
      "To check that a value is neither `null` nor `undefined`",
      "To force strict comparison inside conditions",
      "To convert a value to its boolean equivalent, like `Boolean(value)`"
    ],
    correctAnswer: "To convert a value to its boolean equivalent, like `Boolean(value)`",
    explanation: "The first `!` converts the value to a boolean and negates it, the second negates it back. So `!!'text'` is true and `!!0` is false. It is handy when a real boolean is needed, e.g. `const hasItems = !!list.length`."
  },
  {
    id: "operators-007",
    question: "What does `-7 % 3` return?",
    theme: "Operators",
    subCategory: "Arithmetic",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`2`",
      "`1`",
      "`-1`",
      "`-2`"
    ],
    correctAnswer: "`-1`",
    explanation: "`%` is the remainder operator, and its result takes the sign of the dividend (the left operand): `-7 % 3` is -1, `7 % -3` is 1. Common uses: checking even/odd (`n % 2 === 0`), every n-th item, and wrapping an index (`(i + 1) % length`). For a always-positive modulo, use `((n % m) + m) % m`."
  },
  {
    id: "operators-008",
    question: "How do you get a random integer from 1 to 10 inclusive?",
    theme: "Operators",
    subCategory: "Arithmetic",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`Math.round(Math.random() * 10)`",
      "`Math.random(1, 10)`",
      "`Math.ceil(Math.random() * 10) + 1`",
      "`Math.floor(Math.random() * 10) + 1`"
    ],
    correctAnswer: "`Math.floor(Math.random() * 10) + 1`",
    explanation: "`Math.random()` returns a float in [0, 1). Multiplying by 10 gives [0, 10), `Math.floor` gives 0–9, and `+ 1` shifts to 1–10. In general: `Math.floor(Math.random() * (max - min + 1)) + min`. `Math.round` would make the ends half as likely and include 0. For security-sensitive values use `crypto.getRandomValues()` or `crypto.randomUUID()`."
  },
  {
    id: "operators-009",
    question: "In `function f(...args) {}` and `f(...arr)`, which `...` is rest and which is spread?",
    theme: "Operators",
    subCategory: "Spread & rest",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`...args` in the parameter list is rest (collects); `...arr` in the call is spread (expands)",
      "`...args` is spread (expands); `...arr` is rest (collects)",
      "Both are spread; rest exists only in destructuring",
      "Both are rest; spread exists only for objects"
    ],
    correctAnswer: "`...args` in the parameter list is rest (collects); `...arr` in the call is spread (expands)",
    explanation: "Same syntax, opposite direction. Spread expands an iterable or object into elements: `f(...arr)`, `[...a, ...b]`, `{ ...obj, x: 1 }`. Rest collects the remaining items into an array or object: `function f(first, ...others)`, `const [head, ...tail] = arr`, `const { id, ...props } = obj`. Rest must be last."
  },
  {
    id: "operators-010",
    question: "What does `rest` contain?\n\nconst { a, ...rest } = { a: 1, b: 2, c: 3 };",
    theme: "Operators",
    subCategory: "Spread & rest",
    level: "medium",
    fourOptionsForAnAnswer: [
      "`[2, 3]`",
      "`{ a: 1, b: 2, c: 3 }`",
      "`undefined`, because rest only works with arrays",
      "`{ b: 2, c: 3 }`"
    ],
    correctAnswer: "`{ b: 2, c: 3 }`",
    explanation: "Object rest in destructuring collects the own enumerable properties that weren't picked by name into a new object. It is a common way to omit a property without mutating the original, e.g. `const { password, ...safeUser } = user`. The copy is shallow."
  },
  {
    id: "operators-011",
    question: "Which list names JavaScript operator groups correctly?",
    theme: "Operators",
    subCategory: "Syntax & statements",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Arithmetic and logical only; comparison is done with methods",
      "Arithmetic, assignment, comparison, logical, bitwise, ternary and unary such as `typeof` and `delete`",
      "Unary, binary and quaternary operators",
      "Arithmetic, comparison and pointer operators such as `&obj`"
    ],
    correctAnswer: "Arithmetic, assignment, comparison, logical, bitwise, ternary and unary such as `typeof` and `delete`",
    explanation: "Main groups: arithmetic (`+ - * / % **`, `++ --`), assignment (`= += ??=` …), comparison (`== === != !== < >`), logical (`&& || ! ??`), bitwise (`& | ^ ~ << >> >>>`), string concatenation (`+`), the conditional/ternary `a ? b : c`, unary (`typeof`, `delete`, `void`, unary `+`/`-`), relational (`in`, `instanceof`), the comma operator and optional chaining `?.`. By operand count they are unary, binary or ternary."
  },
  {
    id: "operators-012",
    question: "What is the difference between an expression and a statement?",
    theme: "Operators",
    subCategory: "Syntax & statements",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Expressions end with a semicolon; statements don't",
      "Statements produce values; expressions only declare things",
      "An expression produces a value; a statement performs an action and can't be used where a value is expected",
      "There is no difference; the terms are interchangeable"
    ],
    correctAnswer: "An expression produces a value; a statement performs an action and can't be used where a value is expected",
    explanation: "`2 + 2`, `fn()`, `a ? b : c` and `x = 5` are expressions: they evaluate to a value and can go anywhere a value is expected. `if`, `for`, `return` and declarations like `let x` are statements. That is why you write a ternary, not an `if`, inside JSX or a template literal. Function declarations are statements, while function expressions produce a value."
  },
  {
    id: "operators-013",
    question: "What does this log?\n\nconst x = '1';\nswitch (x) {\n  case 1:\n    console.log('number');\n  case '1':\n    console.log('string');\n  default:\n    console.log('default');\n}",
    theme: "Operators",
    subCategory: "Syntax & statements",
    level: "medium",
    fourOptionsForAnAnswer: [
      "'number', then 'string', then 'default'",
      "'string' only",
      "'string', then 'default'",
      "'number' only"
    ],
    correctAnswer: "'string', then 'default'",
    explanation: "`switch` compares with strict equality, so `'1'` doesn't match `case 1`. It matches `case '1'`, and because there is no `break`, execution falls through into `default`. Rules: use `break` (or `return`) to end each case, `default` runs when nothing matches and can be placed anywhere, and wrap a case body in `{ }` if it declares `let`/`const`."
  }
];
