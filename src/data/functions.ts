import type { FunctionsQuestion } from './types';

export const functionsQuestions: FunctionsQuestion[] = [
  {
    id: "functions-001",
    question: "What is the main practical difference between a function declaration and a function expression?",
    theme: "Functions",
    subCategory: "Basics",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Declarations can't take parameters; expressions can",
      "Expressions are hoisted with their body; declarations are not",
      "Declarations are hoisted with their body; expressions can only be used after the line that assigns them",
      "Declarations always return `undefined`; expressions return a value"
    ],
    correctAnswer: "Declarations are hoisted with their body; expressions can only be used after the line that assigns them",
    explanation: "`function sum(a, b) {}` is a declaration: a statement that is hoisted, so it can be called earlier in its scope. `const sum = function (a, b) {}` or an arrow function is an expression: the function exists only once that line runs. Expressions can be anonymous, passed inline as callbacks or used as IIFEs, and a named function expression's name is visible only inside itself."
  },
  {
    id: "functions-002",
    question: "What is the difference between `call()`, `apply()` and `bind()`?",
    theme: "Functions",
    subCategory: "this & context",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`call` and `apply` invoke the function now (arguments listed vs as an array); `bind` returns a new function with `this` fixed",
      "`bind` invokes the function now; `call` and `apply` return new functions",
      "`apply` works only with arrow functions; `call` only with methods",
      "They are identical; `apply` is just the older name"
    ],
    correctAnswer: "`call` and `apply` invoke the function now (arguments listed vs as an array); `bind` returns a new function with `this` fixed",
    explanation: "All three set `this` explicitly. `fn.call(ctx, a, b)` calls immediately with listed arguments. `fn.apply(ctx, [a, b])` calls immediately with an array (mnemonic: Apply = Array). `fn.bind(ctx, a)` doesn't call; it returns a bound function, optionally with preset arguments (partial application), useful for callbacks and event handlers. None of them change `this` for arrow functions."
  },
  {
    id: "functions-003",
    question: "What does this log?\n\nconst user = { name: 'Ann' };\nfunction greet(greeting, mark) {\n  return greeting + ', ' + this.name + mark;\n}\nconst hi = greet.bind(user, 'Hi');\nconsole.log(greet.apply(user, ['Hello', '!']), hi('?'));",
    theme: "Functions",
    subCategory: "this & context",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Hello, undefined! Hi, Ann?",
      "Hello, Ann! Hi, Ann?",
      "Hello, Ann! Hi, undefined?",
      "TypeError: hi is not a function"
    ],
    correctAnswer: "Hello, Ann! Hi, Ann?",
    explanation: "`apply` calls `greet` with `this = user` and the arguments from the array. `bind` returns a new function with `this = user` and the first argument preset to 'Hi', so `hi('?')` passes '?' as `mark`."
  },
  {
    id: "functions-004",
    question: "What is `this` inside the call?\n\nfunction f() { return this; }\nconst a = { id: 'a' };\nconst b = { id: 'b' };\nf.bind(a).bind(b)();",
    theme: "Functions",
    subCategory: "this & context",
    level: "hard",
    fourOptionsForAnAnswer: [
      "`b`, because the last `bind` wins",
      "`undefined`, because double binding resets `this`",
      "The global object",
      "`a`, because a bound function's `this` can't be changed again"
    ],
    correctAnswer: "`a`, because a bound function's `this` can't be changed again",
    explanation: "`bind` returns a bound function that always calls the original with the stored `this`. Binding it again wraps the wrapper; the inner one still uses `a`. `call` and `apply` on a bound function can't override `this` either. Only `new` ignores the bound `this`."
  },
  {
    id: "functions-005",
    question: "What determines the value of `this` inside a regular function?",
    theme: "Functions",
    subCategory: "this & context",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Where the function is defined, like any other variable",
      "Always the object whose code contains the function",
      "How the function is called: the object before the dot, `new`, `call`/`apply`/`bind`, or a plain call",
      "Always `window` in browsers"
    ],
    correctAnswer: "How the function is called: the object before the dot, `new`, `call`/`apply`/`bind`, or a plain call",
    explanation: "Rules in order of priority: with `new`, `this` is the new object; with `call`/`apply`/`bind`, it is the given value; as a method `obj.fn()`, it is `obj`; in a plain call `fn()`, it is `undefined` in strict mode or the global object otherwise. A method passed as a callback loses its object. Arrow functions have no `this` of their own and use the one from the enclosing scope. In event handlers `this` is the element; in classes it is the instance."
  },
  {
    id: "functions-006",
    question: "What does this log in an ES module?\n\nconst obj = {\n  name: 'obj',\n  regular() { return this.name; },\n  arrow: () => this?.name,\n};\nconsole.log(obj.regular(), obj.arrow());",
    theme: "Functions",
    subCategory: "this & context",
    level: "medium",
    fourOptionsForAnAnswer: [
      "obj undefined",
      "obj obj",
      "undefined obj",
      "TypeError: Cannot read properties of undefined"
    ],
    correctAnswer: "obj undefined",
    explanation: "`regular` is called as `obj.regular()`, so `this` is `obj`. The arrow function doesn't get `this` from the call; it uses `this` of the scope where the object literal is written, the module's top level, where `this` is `undefined`. The `?.` avoids the error. That is why arrow functions are a poor fit for object methods but a good fit for callbacks inside methods."
  },
  {
    id: "functions-007",
    question: "What is a higher-order function?",
    theme: "Functions",
    subCategory: "Higher-order functions",
    level: "easy",
    fourOptionsForAnAnswer: [
      "A function declared at the top level of a file",
      "A function that takes a function as an argument or returns a function",
      "A function with more than three parameters",
      "A method defined on a class prototype"
    ],
    correctAnswer: "A function that takes a function as an argument or returns a function",
    explanation: "Higher-order functions are possible because functions are values. Examples: `map`, `filter`, `reduce`, `setTimeout`, `addEventListener` (take a function), and `bind`, `debounce`, `memoize` (return a function). They let you abstract over behaviour, not just data."
  },
  {
    id: "functions-008",
    question: "In `arr.map(fn)`, what is `fn` called, and what is `map`?",
    theme: "Functions",
    subCategory: "Higher-order functions",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`fn` is a higher-order function; `map` is a callback",
      "`fn` is a closure; `map` is a constructor",
      "`fn` is a callback; `map` is a higher-order function",
      "`fn` is a pure function; `map` is a first-order function"
    ],
    correctAnswer: "`fn` is a callback; `map` is a higher-order function",
    explanation: "By how they deal with other functions, functions are first-order (they neither take nor return functions, e.g. `Math.max`) or higher-order (they take and/or return functions). A function passed to another one to be called later is a callback."
  },
  {
    id: "functions-009",
    question: "Why are functions called first-class objects in JavaScript?",
    theme: "Functions",
    subCategory: "Higher-order functions",
    level: "easy",
    fourOptionsForAnAnswer: [
      "They are values: they can be stored in variables, passed as arguments, returned and given properties",
      "They always run before any other code",
      "They are the only objects that can't be garbage-collected",
      "They are compiled before the rest of the code"
    ],
    correctAnswer: "They are values: they can be stored in variables, passed as arguments, returned and given properties",
    explanation: "A function is a callable object: it has properties like `name` and `length`, can be stored in arrays and objects, passed to and returned from other functions. This is what makes callbacks, higher-order functions, closures and functional programming possible."
  },
  {
    id: "functions-010",
    question: "Which function is pure?",
    theme: "Functions",
    subCategory: "Functional techniques",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`(a) => a + Math.random()`",
      "`(arr) => { arr.push(1); return arr; }`",
      "`() => Date.now()`",
      "`(a, b) => a + b`"
    ],
    correctAnswer: "`(a, b) => a + b`",
    explanation: "A pure function always returns the same output for the same input and has no side effects: it doesn't change its arguments or outside state, and doesn't do I/O. Random numbers and the current time make output unpredictable, and `push` mutates the argument. Pure functions are easy to test, cache (memoize) and reason about."
  },
  {
    id: "functions-011",
    question: "What is the difference between `.forEach()` and `.map()`?",
    theme: "Functions",
    subCategory: "Higher-order functions",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`forEach` returns a new array; `map` returns `undefined`",
      "`map` returns a new array of the callback's results; `forEach` returns `undefined` and is used for side effects",
      "`map` changes the original array; `forEach` doesn't",
      "`forEach` can be stopped with `break`; `map` can't"
    ],
    correctAnswer: "`map` returns a new array of the callback's results; `forEach` returns `undefined` and is used for side effects",
    explanation: "Use `map` to transform data into a new array of the same length (and chain it with `filter` and `reduce`). Use `forEach` to do something for each item, like logging or updating the DOM. Neither can be stopped with `break`; use `for...of`, `some` or `find` for that. Neither waits for async callbacks."
  },
  {
    id: "functions-012",
    question: "What is an IIFE?",
    theme: "Functions",
    subCategory: "Basics",
    level: "easy",
    fourOptionsForAnAnswer: [
      "A function that is called automatically every time an import happens",
      "An interface that a function must implement",
      "A function that runs only when an error is thrown",
      "A function expression called right where it is defined, e.g. `(function () { … })()`, to create a private scope"
    ],
    correctAnswer: "A function expression called right where it is defined, e.g. `(function () { … })()`, to create a private scope",
    explanation: "IIFE stands for Immediately Invoked Function Expression. The parentheses make the function an expression so it can be called at once. Before modules and `let`, it was the main way to avoid polluting the global scope and to build the module pattern with private variables. Today it is still used for one-off async code (`(async () => { … })()`) and for isolating library code."
  },
  {
    id: "functions-013",
    question: "What is `arguments` inside a function?",
    theme: "Functions",
    subCategory: "Basics",
    level: "medium",
    fourOptionsForAnAnswer: [
      "A real array of the declared parameters",
      "An array-like object of all passed arguments, with indexes and `length` but no array methods; arrow functions don't have it",
      "A global object holding the arguments of the last call",
      "A `Set` of the unique arguments passed"
    ],
    correctAnswer: "An array-like object of all passed arguments, with indexes and `length` but no array methods; arrow functions don't have it",
    explanation: "`arguments` is available in regular functions and holds every argument, even extra ones. It isn't an array: no `map` or `forEach`, so convert it with `Array.from(arguments)` or `[...arguments]`. Arrow functions use the outer function's `arguments`. In modern code rest parameters (`...args`) replace it: they are a real array and clearer."
  },
  {
    id: "functions-014",
    question: "In `function sum(a, b) {}` called as `sum(1, 2)`, what are `a, b` and `1, 2`?",
    theme: "Functions",
    subCategory: "Basics",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Both pairs are called arguments",
      "`a, b` are arguments; `1, 2` are parameters",
      "`a, b` are parameters; `1, 2` are arguments",
      "`a, b` are properties; `1, 2` are values"
    ],
    correctAnswer: "`a, b` are parameters; `1, 2` are arguments",
    explanation: "Parameters are the names listed in the function definition; arguments are the actual values passed in a call. Missing arguments make parameters `undefined` (or their default value), and extra arguments are ignored but available in `arguments` or a rest parameter."
  },
  {
    id: "functions-015",
    question: "What does this log?\n\nfunction change(obj, num) {\n  obj.x = 2;\n  obj = { x: 3 };\n  num = 5;\n}\nconst o = { x: 1 };\nlet n = 1;\nchange(o, n);\nconsole.log(o.x, n);",
    theme: "Functions",
    subCategory: "Basics",
    level: "medium",
    fourOptionsForAnAnswer: [
      "3 5",
      "1 1",
      "3 1",
      "2 1"
    ],
    correctAnswer: "2 1",
    explanation: "JavaScript always passes by value. For an object, the value is a reference, so the parameter points to the same object and `obj.x = 2` changes it. Reassigning the parameter (`obj = { x: 3 }`) only changes the local copy of the reference, and `num = 5` only changes the local copy of the number. This is sometimes called call by sharing."
  },
  {
    id: "functions-016",
    question: "What is currying?",
    theme: "Functions",
    subCategory: "Functional techniques",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Caching a function's results by its arguments",
      "Turning `f(a, b, c)` into `f(a)(b)(c)`, a chain of functions that each take one argument",
      "Permanently fixing the `this` value of a function",
      "Calling a function repeatedly until it returns a truthy value"
    ],
    correctAnswer: "Turning `f(a, b, c)` into `f(a)(b)(c)`, a chain of functions that each take one argument",
    explanation: "Example: `const add = a => b => a + b; const inc = add(1); inc(5) === 6`. Each call returns a closure that remembers the earlier arguments. It allows building specialised functions from general ones and composing them. A generic `curry(fn)` collects arguments until `fn.length` is reached, then calls `fn`."
  },
  {
    id: "functions-017",
    question: "What is memoization, and when does it help?",
    theme: "Functions",
    subCategory: "Functional techniques",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Saving a function's source code to localStorage; it speeds up page loads",
      "Running a function in a Web Worker; it helps for any slow function",
      "Caching a function's results by its arguments; it helps for pure, expensive functions called again with the same input",
      "Removing unused functions at build time; it helps reduce bundle size"
    ],
    correctAnswer: "Caching a function's results by its arguments; it helps for pure, expensive functions called again with the same input",
    explanation: "A memoized function checks a cache first and computes only on a miss. It trades memory for speed and only makes sense for pure functions. Examples: recursive Fibonacci, expensive calculations, React's `useMemo`/`memo`. Watch out for unbounded caches and for object arguments, which are compared by reference."
  },
  {
    id: "functions-018",
    question: "Which line completes this memoize helper?\n\nfunction memoize(fn) {\n  const cache = new Map();\n  return (n) => {\n    // ???\n  };\n}",
    theme: "Functions",
    subCategory: "Functional techniques",
    level: "medium",
    fourOptionsForAnAnswer: [
      "`if (!cache.has(n)) cache.set(n, fn(n)); return cache.get(n);`",
      "`cache.set(n, fn(n)); return fn(n);`",
      "`return cache.get(n) ?? fn(n);`",
      "`if (cache.has(n)) cache.delete(n); return fn(n);`"
    ],
    correctAnswer: "`if (!cache.has(n)) cache.set(n, fn(n)); return cache.get(n);`",
    explanation: "The closure keeps `cache` between calls: compute and store only when the key is missing, then return the cached value. The other options call `fn` every time or never store the result. Using `has` instead of a truthiness check also caches results like `0` or `undefined`. For several arguments, build a key, e.g. `JSON.stringify(args)`."
  },
  {
    id: "functions-019",
    question: "What must every recursive function have to avoid infinite recursion?",
    theme: "Functions",
    subCategory: "Recursion",
    level: "easy",
    fourOptionsForAnAnswer: [
      "A `try/catch` block around the recursive call",
      "A base case that returns without calling the function again",
      "At least two parameters",
      "An `async` keyword"
    ],
    correctAnswer: "A base case that returns without calling the function again",
    explanation: "Recursion is a function calling itself on a smaller part of the problem, e.g. `factorial(n) = n * factorial(n - 1)` with base case `n <= 1`. It suits tree-like data: the DOM, nested objects, file systems. Each call takes a stack frame, so very deep recursion throws 'Maximum call stack size exceeded'; a loop or an explicit stack avoids that."
  },
  {
    id: "functions-020",
    question: "What is a tail call, and do JavaScript engines optimise it?",
    theme: "Functions",
    subCategory: "Recursion",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Any recursive call; V8 turns all recursion into loops",
      "A call at the very end of a file; engines inline it",
      "A recursive call that is the function's last action; all engines reuse the frame since ES2015",
      "A recursive call that is the function's last action; the spec allows reusing the stack frame, but in practice only Safari does"
    ],
    correctAnswer: "A recursive call that is the function's last action; the spec allows reusing the stack frame, but in practice only Safari does",
    explanation: "In tail recursion nothing is left to do after the recursive call (`return f(n - 1, acc * n)`, not `return n * f(n - 1)`), so the current frame could be reused. ES2015 specified proper tail calls in strict mode, but only JavaScriptCore (Safari) implements them. To make deep recursion safe everywhere, rewrite it as a loop, use an explicit stack, or use a trampoline that returns functions and calls them in a loop."
  },
  {
    id: "functions-021",
    question: "How do you make methods chainable, like `calc.add(2).multiply(3)`?",
    theme: "Functions",
    subCategory: "Functional techniques",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Declare the methods with `async`",
      "Return `this` (or a new object of the same type) from each method",
      "Call each method with `bind`",
      "Store the methods in an array and call them with `forEach`"
    ],
    correctAnswer: "Return `this` (or a new object of the same type) from each method",
    explanation: "Method chaining calls the next method on whatever the previous one returned. Mutable builders return `this` (jQuery, query builders); immutable APIs return a new instance (array `map`/`filter`, promises with `then`). A final method usually returns the result, e.g. `.value()` or `.build()`."
  },
  {
    id: "functions-022",
    question: "What is a generator function?",
    theme: "Functions",
    subCategory: "Generators",
    level: "easy",
    fourOptionsForAnAnswer: [
      "A function that creates new functions at runtime with `new Function`",
      "A `function*` that can pause at `yield` and resume later; calling it returns an iterator",
      "A function that runs in a separate thread",
      "A class constructor that generates IDs"
    ],
    correctAnswer: "A `function*` that can pause at `yield` and resume later; calling it returns an iterator",
    explanation: "Calling a generator doesn't run its body; it returns a generator object. Each `next()` runs until the next `yield` and returns `{ value, done }`. Generators are iterable, so they work with `for...of` and spread. Uses: lazy or infinite sequences (`function* ids() { let i = 0; while (true) yield i++; }`), custom iterators, and two-way communication via `next(value)`. Async generators (`async function*`) work with `for await`."
  },
  {
    id: "functions-023",
    question: "What does this log?\n\nfunction* gen() {\n  yield 1;\n  yield 2;\n  return 3;\n}\nconst g = gen();\nconsole.log(g.next().value, g.next().value, g.next(), [...gen()]);",
    theme: "Functions",
    subCategory: "Generators",
    level: "medium",
    fourOptionsForAnAnswer: [
      "1 2 { value: 3, done: false } [1, 2, 3]",
      "1 2 3 [1, 2, 3]",
      "1 2 { value: 3, done: true } [1, 2]",
      "1 1 1 [1]"
    ],
    correctAnswer: "1 2 { value: 3, done: true } [1, 2]",
    explanation: "Each `next()` resumes until the next `yield`. After the second `yield`, the third `next()` reaches `return 3`, so it gets `{ value: 3, done: true }`. Spread and `for...of` stop at `done: true` and ignore the returned value, so a fresh generator spreads to `[1, 2]`."
  },
  {
    id: "functions-024",
    question: "What is the difference between debounce and throttle?",
    theme: "Functions",
    subCategory: "Functional techniques",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Debounce runs the function once events stop for a delay; throttle runs it at most once per interval while events continue",
      "Throttle runs the function once events stop for a delay; debounce runs it at most once per interval",
      "Debounce cancels the function forever; throttle delays it by one frame",
      "They are the same technique with different names"
    ],
    correctAnswer: "Debounce runs the function once events stop for a delay; throttle runs it at most once per interval while events continue",
    explanation: "Both are higher-order functions that limit how often a handler runs. Debounce resets a timer on every call (`clearTimeout` then `setTimeout`) so the function runs only after a quiet period. Throttle ignores calls until the interval has passed, giving a steady rate. Debounce suits search inputs, form validation and resize-end; throttle suits scroll, mousemove and drag."
  },
  {
    id: "functions-025",
    question: "Which case fits debounce better than throttle?",
    theme: "Functions",
    subCategory: "Functional techniques",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Updating a progress bar while the user scrolls",
      "Tracking the pointer position during a drag",
      "Sending a search request after the user stops typing",
      "Running an animation on every frame"
    ],
    correctAnswer: "Sending a search request after the user stops typing",
    explanation: "For search you only care about the final input once the user pauses, so debounce avoids a request per keystroke. Scroll progress and drag need regular updates while the action continues, which is throttling. Per-frame animation belongs in `requestAnimationFrame`."
  }
];
