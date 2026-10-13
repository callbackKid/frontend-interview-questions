import type { VariablesScopeQuestion } from './types';

export const variablesScopeQuestions: VariablesScopeQuestion[] = [
  {
    id: "scope-001",
    question: "What is the difference between `var`, `let` and `const`?",
    theme: "Variables & scope",
    subCategory: "Declarations",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`var` is block-scoped; `let` and `const` are function-scoped",
      "`var` is function-scoped and can be redeclared; `let` and `const` are block-scoped, and `const` can't be reassigned",
      "They differ only in style; all three behave the same",
      "`let` can't be reassigned; `const` can be reassigned but not redeclared"
    ],
    correctAnswer: "`var` is function-scoped and can be redeclared; `let` and `const` are block-scoped, and `const` can't be reassigned",
    explanation: "`var` is scoped to the function (or global), can be redeclared, is hoisted and initialised to `undefined`, and at top level becomes a property of `window`. `let` and `const` are scoped to the nearest `{ }` block, can't be redeclared in the same scope, and are in the temporal dead zone until their declaration runs. `const` must be initialised and can't be reassigned. Default to `const`, use `let` when the value changes, avoid `var`."
  },
  {
    id: "scope-002",
    question: "What does this log?\n\nfor (var i = 0; i < 3; i++) setTimeout(() => console.log(i));\nfor (let j = 0; j < 3; j++) setTimeout(() => console.log(j));",
    theme: "Variables & scope",
    subCategory: "Declarations",
    level: "medium",
    fourOptionsForAnAnswer: [
      "0 1 2, then 0 1 2",
      "0 1 2, then 3 3 3",
      "3 3 3, then 0 1 2",
      "3 3 3, then 3 3 3"
    ],
    correctAnswer: "3 3 3, then 0 1 2",
    explanation: "There is a single function-scoped `var i`, and all three callbacks close over it. They run after the loop has finished, when `i` is 3. With `let`, each loop iteration gets a new binding of `j`, so every callback keeps its own value."
  },
  {
    id: "scope-003",
    question: "Can you change a property of an object declared with `const`?",
    theme: "Variables & scope",
    subCategory: "Declarations",
    level: "easy",
    fourOptionsForAnAnswer: [
      "No; `const` makes the object and all nested objects immutable",
      "Only in non-strict mode",
      "Only if the property already existed",
      "Yes; `const` prevents reassigning the variable, not changing the object"
    ],
    correctAnswer: "Yes; `const` prevents reassigning the variable, not changing the object",
    explanation: "`const user = {}; user.name = 'Ann'` and `const list = []; list.push(1)` both work. Only `user = {}` throws a `TypeError`. To prevent changes to the object itself, use `Object.freeze` (shallow)."
  },
  {
    id: "scope-004",
    question: "What happens when you read a variable that was never declared?\n\nconsole.log(foo); // no foo anywhere",
    theme: "Variables & scope",
    subCategory: "Declarations",
    level: "easy",
    fourOptionsForAnAnswer: [
      "A `ReferenceError` is thrown; only `typeof foo` safely returns 'undefined'",
      "It logs `undefined`",
      "It logs `null`",
      "It creates a global `foo` and logs `undefined`"
    ],
    correctAnswer: "A `ReferenceError` is thrown; only `typeof foo` safely returns 'undefined'",
    explanation: "An undeclared variable has no binding in any scope, so reading it throws 'foo is not defined'. That differs from a declared variable with no value, which is `undefined`. `typeof` is the one operator that doesn't throw. Assigning to an undeclared variable (`foo = 1`) creates an accidental global in sloppy mode and throws a `ReferenceError` in strict mode."
  },
  {
    id: "scope-005",
    question: "Which is a valid variable name?",
    theme: "Variables & scope",
    subCategory: "Declarations",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`2value`",
      "`my-value`",
      "`_$value2`",
      "`class`"
    ],
    correctAnswer: "`_$value2`",
    explanation: "Names may contain letters, digits, `_` and `$`, can't start with a digit, can't contain hyphens or spaces, and can't be reserved words such as `class`, `return` or `let`. They are case-sensitive. Conventions: camelCase for variables and functions, PascalCase for classes and components, UPPER_SNAKE_CASE for constants, and descriptive names (verbs for functions, `is`/`has` for booleans)."
  },
  {
    id: "scope-006",
    question: "What does this log?\n\nconsole.log(a);\nvar a = 1;\nconsole.log(b);\nlet b = 2;",
    theme: "Variables & scope",
    subCategory: "Hoisting",
    level: "medium",
    fourOptionsForAnAnswer: [
      "`1`, then `2`",
      "`undefined`, then `undefined`",
      "A `ReferenceError` on the first line",
      "`undefined`, then a `ReferenceError`"
    ],
    correctAnswer: "`undefined`, then a `ReferenceError`",
    explanation: "Hoisting means declarations are processed before the code runs, as if moved to the top of their scope. `var` is hoisted and initialised to `undefined`, so the first log works. `let`, `const` and `class` are hoisted too, but stay uninitialised in the temporal dead zone until their line runs, so reading `b` early throws. Function declarations are hoisted with their body."
  },
  {
    id: "scope-007",
    question: "Why can you call a function declaration before it appears in the code?",
    theme: "Variables & scope",
    subCategory: "Hoisting",
    level: "easy",
    fourOptionsForAnAnswer: [
      "The engine reruns the file until every call succeeds",
      "Function declarations are hoisted with their body, so they exist before the code runs",
      "All functions are global and loaded before any script",
      "It works only in strict mode"
    ],
    correctAnswer: "Function declarations are hoisted with their body, so they exist before the code runs",
    explanation: "When a scope is set up, the engine creates every function declaration in it in full. A function expression assigned to a variable follows the variable's rules: with `var` it is `undefined` before the assignment (calling it throws a `TypeError`), with `let`/`const` it is in the temporal dead zone (`ReferenceError`)."
  },
  {
    id: "scope-008",
    question: "What kinds of scope does JavaScript have?",
    theme: "Variables & scope",
    subCategory: "Scope & closures",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Global and function scope only, resolved where a function is called",
      "Only block scope, since ES2015 removed function scope",
      "Global, class and file scope, resolved at runtime",
      "Global, module, function and block scope, resolved lexically by where code is written"
    ],
    correctAnswer: "Global, module, function and block scope, resolved lexically by where code is written",
    explanation: "Scope is the region of code where a name is visible. Variables are looked up from the current scope outwards through enclosing scopes (the scope chain) to the global one. Scope is lexical: it depends on where a function is written, not where it is called. `let`/`const`/`class` are block-scoped, `var` is function-scoped, and top-level names in an ES module are module-scoped."
  },
  {
    id: "scope-009",
    question: "What is a closure?",
    theme: "Variables & scope",
    subCategory: "Scope & closures",
    level: "medium",
    fourOptionsForAnAnswer: [
      "A function that has finished running and freed its memory",
      "A function together with the variables of the scope it was created in, which it can still access after that scope has finished",
      "A block of code wrapped in curly braces",
      "A function that can't access any outer variables"
    ],
    correctAnswer: "A function together with the variables of the scope it was created in, which it can still access after that scope has finished",
    explanation: "Every function keeps a reference to its lexical environment. When an inner function outlives its outer function (returned, stored as a callback), the outer variables stay alive for it. Closures give private state (counters, the module pattern), function factories, memoization caches and event handlers that remember data. They can also keep large objects in memory longer than intended."
  },
  {
    id: "scope-010",
    question: "What does this log?\n\nfunction counter() {\n  let n = 0;\n  return () => ++n;\n}\nconst a = counter();\nconst b = counter();\na();\na();\nconsole.log(a(), b());",
    theme: "Variables & scope",
    subCategory: "Scope & closures",
    level: "medium",
    fourOptionsForAnAnswer: [
      "3 1",
      "3 3",
      "1 1",
      "3 4"
    ],
    correctAnswer: "3 1",
    explanation: "Each `counter()` call creates a new scope with its own `n`, and the returned arrow function closes over that one. `a` has been called three times, so it returns 3; `b` has its own `n` and returns 1."
  },
  {
    id: "scope-011",
    question: "What happens when a function's execution context is created?",
    theme: "Variables & scope",
    subCategory: "Execution context",
    level: "hard",
    fourOptionsForAnAnswer: [
      "The function's code is compiled again and saved to the global object",
      "Its variables are copied into the global scope until it returns",
      "It is pushed onto the call stack and gets an environment for its variables, a link to its outer scope, and a `this` binding",
      "The function is queued as a macrotask and runs after the current script"
    ],
    correctAnswer: "It is pushed onto the call stack and gets an environment for its variables, a link to its outer scope, and a `this` binding",
    explanation: "An execution context is the environment code runs in. The global context is created first; each function call creates a new one and pushes it onto the call stack. In the creation phase the engine sets up the lexical environment (hoisting `var` as `undefined`, functions in full, `let`/`const` uninitialised), the reference to the outer environment that forms the scope chain, and `this`. In the execution phase the code runs line by line. On return the context is popped."
  },
  {
    id: "scope-012",
    question: "What does 'Maximum call stack size exceeded' usually mean?",
    theme: "Variables & scope",
    subCategory: "Execution context",
    level: "easy",
    fourOptionsForAnAnswer: [
      "The heap ran out of memory because of large arrays",
      "A function recursed without reaching a base case, so the call stack overflowed",
      "Too many promises are pending in the microtask queue",
      "Too many timers were scheduled with `setTimeout`"
    ],
    correctAnswer: "A function recursed without reaching a base case, so the call stack overflowed",
    explanation: "Each call adds a frame to the call stack, which has a limited size. Infinite or very deep recursion fills it and throws a `RangeError`. Typical causes: a missing or wrong base case, a getter or setter that reads or writes its own property, two functions calling each other, or `JSON.stringify` on circular data with a `toJSON` that recurses. Fix the base case, or switch to a loop for very deep data."
  },
  {
    id: "scope-013",
    question: "What does `'use strict'` do?",
    theme: "Variables & scope",
    subCategory: "Strict mode",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Enables static type checking for the file",
      "Makes all variables constants",
      "Opts the script or function into strict mode, which turns silent mistakes into errors and removes some unsafe features",
      "Forces `==` to behave like `===`"
    ],
    correctAnswer: "Opts the script or function into strict mode, which turns silent mistakes into errors and removes some unsafe features",
    explanation: "Strict mode is a restricted variant of JavaScript, enabled by the directive at the top of a script or a function body. It throws on assignments to undeclared variables and read-only properties, forbids duplicate parameter names, `with` and octal literals like `010`, leaves `this` as `undefined` in plain function calls, and makes `eval` keep its own scope. These rules also let engines optimise better."
  },
  {
    id: "scope-014",
    question: "Which of these behaves differently in strict mode?",
    theme: "Variables & scope",
    subCategory: "Strict mode",
    level: "medium",
    fourOptionsForAnAnswer: [
      "`let` becomes function-scoped",
      "Assigning to an undeclared variable throws a `ReferenceError` instead of creating a global",
      "Arrow functions get their own `this`",
      "`typeof null` returns 'null'"
    ],
    correctAnswer: "Assigning to an undeclared variable throws a `ReferenceError` instead of creating a global",
    explanation: "In sloppy mode a typo like `totl = 5` silently creates `window.totl`. Strict mode makes it an error. Other differences: writing to a non-writable or frozen property throws, deleting a non-configurable property throws, and in a plain call `this` is `undefined` instead of the global object."
  },
  {
    id: "scope-015",
    question: "Where is strict mode on automatically, without writing `'use strict'`?",
    theme: "Variables & scope",
    subCategory: "Strict mode",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Inside ES modules and class bodies",
      "In every function since ES2015",
      "Only inside arrow functions",
      "Nowhere; it always needs the directive"
    ],
    correctAnswer: "Inside ES modules and class bodies",
    explanation: "Modules (`<script type='module'>`, `import`/`export` files) and `class` code are always strict, so modern code rarely needs the directive. Pros of strict mode: earlier errors, no accidental globals, safer `this`, better optimisation. Cons: older code that relies on sloppy behaviour can break when it is made strict, concatenating strict and non-strict files can change behaviour, and a function with the directive can't use default or rest parameters."
  }
];
