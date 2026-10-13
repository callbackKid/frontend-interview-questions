import type { PromisesQuestion } from './types';

export const promisesQuestions: PromisesQuestion[] = [
  {
    id: "promises-001",
    question: "Which states can a Promise be in?",
    theme: "Promises",
    subCategory: "Fundamentals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Waiting, done, failed",
      "Created, running, finished",
      "Pending, fulfilled, rejected",
      "Pending, resolved, cancelled"
    ],
    correctAnswer: "Pending, fulfilled, rejected",
    explanation: "A promise starts `pending` and settles exactly once, either `fulfilled` with a value or `rejected` with a reason. 'Resolved' is not a state: it means the promise's fate is locked in, possibly to another promise."
  },
  {
    id: "promises-002",
    question: "Can a promise change its state after it has been settled?",
    theme: "Promises",
    subCategory: "Fundamentals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Yes, by calling resolve again",
      "Yes, but only from fulfilled to rejected",
      "Only if no .then handler is attached yet",
      "No, a settled state is final"
    ],
    correctAnswer: "No, a settled state is final",
    explanation: "Settling is final. Any later call to `resolve` or `reject` is ignored, which is why a promise is safe to share: every consumer sees the same single outcome."
  },
  {
    id: "promises-003",
    question: "When is the executor function passed to `new Promise()` executed?",
    theme: "Promises",
    subCategory: "Fundamentals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Only when .then() is called",
      "In the next macrotask",
      "In the next microtask",
      "Immediately and synchronously, during the constructor call"
    ],
    correctAnswer: "Immediately and synchronously, during the constructor call",
    explanation: "The executor runs synchronously inside the `new Promise()` call. Only the reactions (`.then`, `.catch`, `.finally` callbacks) are asynchronous."
  },
  {
    id: "promises-004",
    question: "What does `.then()` return?",
    theme: "Promises",
    subCategory: "Fundamentals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "The value returned by its callback",
      "The same promise it was called on",
      "A new promise",
      "undefined"
    ],
    correctAnswer: "A new promise",
    explanation: "`.then()` always returns a new promise that settles with whatever its callback returns or throws. That new promise is what makes chaining possible."
  },
  {
    id: "promises-005",
    question: "`promise.catch(f)` is equivalent to:",
    theme: "Promises",
    subCategory: "Fundamentals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "promise.then(f)",
      "promise.then(f, f)",
      "promise.finally(f)",
      "promise.then(undefined, f)"
    ],
    correctAnswer: "promise.then(undefined, f)",
    explanation: "`.catch(f)` is literally `.then(undefined, f)`: it only registers a rejection handler and passes fulfilled values through untouched."
  },
  {
    id: "promises-006",
    question: "What arguments does a `.finally()` callback receive?",
    theme: "Promises",
    subCategory: "Fundamentals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "The rejection reason",
      "No arguments",
      "Both the value and the reason",
      "The fulfilled value"
    ],
    correctAnswer: "No arguments",
    explanation: "`.finally()` receives no arguments because it's meant for cleanup that runs regardless of outcome. It passes the original value or reason through to the next handler."
  },
  {
    id: "promises-007",
    question: "What happens if the executor function throws an error synchronously?",
    theme: "Promises",
    subCategory: "Fundamentals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "The error is thrown out of the constructor",
      "The promise stays pending forever",
      "The error is silently ignored",
      "The promise is rejected with that error"
    ],
    correctAnswer: "The promise is rejected with that error",
    explanation: "The constructor catches a synchronous throw in the executor and turns it into a rejection, so `new Promise(() => { throw err })` behaves like `Promise.reject(err)`."
  },
  {
    id: "promises-008",
    question: "What happens if `resolve()` is called twice inside an executor?",
    theme: "Promises",
    subCategory: "Fundamentals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "The .then handlers run twice",
      "Only the first call takes effect; later calls are ignored",
      "An error is thrown",
      "The promise resolves with the last value"
    ],
    correctAnswer: "Only the first call takes effect; later calls are ignored",
    explanation: "Only the first `resolve` or `reject` call counts; the rest are silently ignored. That's why the promise in the classic `resolve(1); setTimeout(() => resolve(2))` example ends with 1."
  },
  {
    id: "promises-009",
    question: "If a promise is already fulfilled, when does a newly attached `.then` callback run?",
    theme: "Promises",
    subCategory: "Fundamentals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Synchronously, immediately",
      "Never, because it was attached too late",
      "As a macrotask, like setTimeout",
      "Asynchronously, as a microtask"
    ],
    correctAnswer: "Asynchronously, as a microtask",
    explanation: "Promise reactions are always queued as microtasks, even if the promise has already settled. This guarantees consistent asynchronous behavior (no 'sometimes sync, sometimes async' surprises)."
  },
  {
    id: "promises-010",
    question: "What does an `async` function always return?",
    theme: "Promises",
    subCategory: "Fundamentals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "A promise",
      "undefined",
      "The value of its return statement",
      "A generator object"
    ],
    correctAnswer: "A promise",
    explanation: "An `async` function always returns a promise. A returned value becomes the fulfillment value; a thrown error becomes the rejection reason."
  },
  {
    id: "promises-011",
    question: "What happens when an error is thrown inside an `async` function?",
    theme: "Promises",
    subCategory: "Fundamentals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "The function returns undefined",
      "The error is logged and ignored",
      "The program crashes immediately",
      "The returned promise is rejected with that error"
    ],
    correctAnswer: "The returned promise is rejected with that error",
    explanation: "Errors thrown in an async function don't escape synchronously. They reject the returned promise, so you handle them with `try/catch` around `await` or with `.catch()`."
  },
  {
    id: "promises-012",
    question: "Does `await` block the main thread?",
    theme: "Promises",
    subCategory: "Fundamentals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Only in Node.js",
      "No, it only pauses the current async function",
      "Yes, until the promise settles",
      "Only when awaiting a fetch call"
    ],
    correctAnswer: "No, it only pauses the current async function",
    explanation: "`await` suspends only the current async function and yields control back to the event loop. Other code, events, and rendering keep running until the awaited promise settles."
  },
  {
    id: "promises-013",
    question: "Can you get the value of a pending promise synchronously?",
    theme: "Promises",
    subCategory: "Fundamentals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Yes, through promise.value",
      "Yes, with JSON.stringify(promise)",
      "Yes, with Promise.resolve(promise)",
      "No, the value is only available asynchronously"
    ],
    correctAnswer: "No, the value is only available asynchronously",
    explanation: "There's no synchronous accessor for a promise's value. You can only read it through `.then` or `await`, which always run asynchronously."
  },
  {
    id: "promises-014",
    question: "What is a 'thenable'?",
    theme: "Promises",
    subCategory: "Advanced & internals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "A promise that has been resolved",
      "Any object with a then method",
      "A function that returns a promise",
      "An async function"
    ],
    correctAnswer: "Any object with a then method",
    explanation: "A thenable is any object with a `then` method. Promises interoperate with thenables: `Promise.resolve(thenable)` and `await thenable` call its `then` to adopt its result."
  },
  {
    id: "promises-015",
    question: "What is the main problem promises solved compared with nested callbacks?",
    theme: "Promises",
    subCategory: "Fundamentals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Callback hell and scattered error handling",
      "Performance of async code",
      "Multithreading",
      "Memory leaks in closures"
    ],
    correctAnswer: "Callback hell and scattered error handling",
    explanation: "Nested callbacks lead to deep pyramids and error handling repeated at every level. Promises flatten the flow into chains and let one `.catch` handle errors from any earlier step."
  },
  {
    id: "promises-016",
    question: "Which method waits for all promises and rejects as soon as one of them rejects?",
    theme: "Promises",
    subCategory: "Static methods",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Promise.race",
      "Promise.any",
      "Promise.all",
      "Promise.allSettled"
    ],
    correctAnswer: "Promise.all",
    explanation: "`Promise.all` fulfills with an array of all values, or rejects immediately with the first rejection reason. Use it when every result is required."
  },
  {
    id: "promises-017",
    question: "Which method never rejects and reports the outcome of every promise?",
    theme: "Promises",
    subCategory: "Static methods",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Promise.any",
      "Promise.all",
      "Promise.race",
      "Promise.allSettled"
    ],
    correctAnswer: "Promise.allSettled",
    explanation: "`Promise.allSettled` waits for every promise and resolves with a status object per item, so failures don't cancel the whole batch."
  },
  {
    id: "promises-018",
    question: "Which method resolves with the first FULFILLED promise and ignores rejections unless all reject?",
    theme: "Promises",
    subCategory: "Static methods",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Promise.race",
      "Promise.any",
      "Promise.allSettled",
      "Promise.all"
    ],
    correctAnswer: "Promise.any",
    explanation: "`Promise.any` resolves with the first fulfilled value and ignores rejections. It only rejects, with an `AggregateError`, when all inputs reject."
  },
  {
    id: "promises-019",
    question: "Which method settles as soon as the first promise settles, whether fulfilled or rejected?",
    theme: "Promises",
    subCategory: "Static methods",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Promise.all",
      "Promise.allSettled",
      "Promise.any",
      "Promise.race"
    ],
    correctAnswer: "Promise.race",
    explanation: "`Promise.race` adopts the outcome of whichever input settles first, success or failure. It's commonly used for timeouts."
  },
  {
    id: "promises-020",
    question: "In what order does `Promise.all` return its results?",
    theme: "Promises",
    subCategory: "Static methods",
    level: "medium",
    fourOptionsForAnAnswer: [
      "In the same order as the input",
      "In order of completion",
      "Fulfilled first, then rejected",
      "In random order"
    ],
    correctAnswer: "In the same order as the input",
    explanation: "Results are placed at the index of their input, regardless of which finished first. That makes destructuring like `const [a, b] = await Promise.all([pa, pb])` safe."
  },
  {
    id: "promises-021",
    question: "When one promise in `Promise.all` rejects, what happens to the other promises?",
    theme: "Promises",
    subCategory: "Static methods",
    level: "medium",
    fourOptionsForAnAnswer: [
      "They are rejected too",
      "They are cancelled automatically",
      "They are retried",
      "They keep running, but their results are ignored"
    ],
    correctAnswer: "They keep running, but their results are ignored",
    explanation: "Promises can't be cancelled, so the other operations keep running. `Promise.all` just stops caring about them. To actually stop work, use an `AbortController`."
  },
  {
    id: "promises-022",
    question: "What does `Promise.all([])` return?",
    theme: "Promises",
    subCategory: "Static methods",
    level: "medium",
    fourOptionsForAnAnswer: [
      "A promise that stays pending forever",
      "undefined",
      "A promise rejected with AggregateError",
      "A promise that fulfills immediately with []"
    ],
    correctAnswer: "A promise that fulfills immediately with []",
    explanation: "With nothing to wait for, `Promise.all([])` fulfills right away with an empty array."
  },
  {
    id: "promises-023",
    question: "What does `Promise.race([])` return?",
    theme: "Promises",
    subCategory: "Static methods",
    level: "medium",
    fourOptionsForAnAnswer: [
      "A promise rejected with TypeError",
      "A promise fulfilled with undefined",
      "A promise fulfilled with []",
      "A promise that stays pending forever"
    ],
    correctAnswer: "A promise that stays pending forever",
    explanation: "No input can ever settle, so the race never finishes and the promise stays pending forever. That's a classic trick question."
  },
  {
    id: "promises-024",
    question: "What does `Promise.any([])` return?",
    theme: "Promises",
    subCategory: "Static methods",
    level: "medium",
    fourOptionsForAnAnswer: [
      "A promise that stays pending forever",
      "A promise fulfilled with []",
      "A promise fulfilled with undefined",
      "A promise rejected with an AggregateError"
    ],
    correctAnswer: "A promise rejected with an AggregateError",
    explanation: "With no inputs there's no fulfilled promise, so `Promise.any([])` rejects immediately with an `AggregateError` with an empty `errors` array."
  },
  {
    id: "promises-025",
    question: "What is the shape of each result returned by `Promise.allSettled`?",
    theme: "Promises",
    subCategory: "Static methods",
    level: "medium",
    fourOptionsForAnAnswer: [
      "[error, value] tuples",
      "{ ok, data, error }",
      "{ status: 'fulfilled', value } or { status: 'rejected', reason }",
      "{ resolved: boolean, result }"
    ],
    correctAnswer: "{ status: 'fulfilled', value } or { status: 'rejected', reason }",
    explanation: "Each entry is `{ status: 'fulfilled', value }` or `{ status: 'rejected', reason }`, so you can filter results by `status`."
  },
  {
    id: "promises-026",
    question: "Which error type does `Promise.any` reject with when all promises reject?",
    theme: "Promises",
    subCategory: "Static methods",
    level: "medium",
    fourOptionsForAnAnswer: [
      "TypeError",
      "AggregateError",
      "The first rejection reason",
      "RangeError"
    ],
    correctAnswer: "AggregateError",
    explanation: "`AggregateError` bundles multiple errors; its `errors` property holds every rejection reason in input order."
  },
  {
    id: "promises-027",
    question: "If `p` is a native promise, what does `Promise.resolve(p)` return?",
    theme: "Promises",
    subCategory: "Static methods",
    level: "medium",
    fourOptionsForAnAnswer: [
      "p's fulfilled value",
      "A new promise wrapping p",
      "The same promise p",
      "A rejected promise"
    ],
    correctAnswer: "The same promise p",
    explanation: "If `p` is a native promise from the same constructor, `Promise.resolve(p)` returns `p` itself (`Promise.resolve(p) === p`) instead of wrapping it."
  },
  {
    id: "promises-028",
    question: "What does `Promise.reject(somePromise)` reject with?",
    theme: "Promises",
    subCategory: "Static methods",
    level: "medium",
    fourOptionsForAnAnswer: [
      "The promise object itself, without unwrapping",
      "somePromise's eventual value",
      "somePromise's eventual reason",
      "A TypeError"
    ],
    correctAnswer: "The promise object itself, without unwrapping",
    explanation: "Unlike `resolve`, `reject` never unwraps: the reason is exactly the value you pass, even if that value is a promise."
  },
  {
    id: "promises-029",
    question: "How does `Promise.all` treat non-promise values in its input, like `Promise.all([1, 2])`?",
    theme: "Promises",
    subCategory: "Static methods",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Treats them as already fulfilled values",
      "Throws a TypeError",
      "Treats them as rejections",
      "Ignores them"
    ],
    correctAnswer: "Treats them as already fulfilled values",
    explanation: "Each item is passed through `Promise.resolve`, so plain values count as already fulfilled. `Promise.all([1, 2])` resolves to `[1, 2]`."
  },
  {
    id: "promises-030",
    question: "Do `Promise.all` and similar methods accept any iterable or only arrays?",
    theme: "Promises",
    subCategory: "Static methods",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Any iterable",
      "Only arrays and Sets",
      "Only arrays",
      "Only array-like objects with length"
    ],
    correctAnswer: "Any iterable",
    explanation: "The combinators accept any iterable: arrays, Sets, generators, and so on. They iterate it once and treat each item with `Promise.resolve`."
  },
  {
    id: "promises-031",
    question: "What does `Promise.withResolvers()` (ES2024) return?",
    theme: "Promises",
    subCategory: "Static methods",
    level: "hard",
    fourOptionsForAnAnswer: [
      "An array of resolved values",
      "An object { promise, resolve, reject }",
      "A deferred function",
      "A promise with a cancel method"
    ],
    correctAnswer: "An object { promise, resolve, reject }",
    explanation: "`Promise.withResolvers()` returns `{ promise, resolve, reject }`, so you can settle a promise from outside without the `let resolve; new Promise(r => resolve = r)` boilerplate."
  },
  {
    id: "promises-032",
    question: "What is the main purpose of `Promise.try(fn)`?",
    theme: "Promises",
    subCategory: "Static methods",
    level: "hard",
    fourOptionsForAnAnswer: [
      "To run fn in a worker",
      "To retry a function until it succeeds",
      "To call fn and turn both its result and synchronous throws into a promise",
      "To catch unhandled rejections globally"
    ],
    correctAnswer: "To call fn and turn both its result and synchronous throws into a promise",
    explanation: "`Promise.try(fn)` calls `fn` immediately and always returns a promise: a value fulfills it, a returned promise is adopted, and a synchronous throw becomes a rejection."
  },
  {
    id: "promises-033",
    question: "If a `.then` callback returns a plain value, what does the next `.then` receive?",
    theme: "Promises",
    subCategory: "Chaining",
    level: "medium",
    fourOptionsForAnAnswer: [
      "A promise wrapping that value",
      "Nothing, the chain stops",
      "That value",
      "undefined"
    ],
    correctAnswer: "That value",
    explanation: "The returned value becomes the fulfillment value of the promise that `.then` returned, so the next handler receives it directly."
  },
  {
    id: "promises-034",
    question: "If you forget to `return` a promise inside a `.then` callback, what happens?",
    theme: "Promises",
    subCategory: "Chaining",
    level: "medium",
    fourOptionsForAnAnswer: [
      "The next .then waits for it anyway",
      "A TypeError is thrown",
      "The next .then gets undefined and does not wait for it",
      "The chain is rejected"
    ],
    correctAnswer: "The next .then gets undefined and does not wait for it",
    explanation: "Without `return`, the callback returns `undefined`. The chain continues immediately with `undefined` and doesn't wait for the inner promise, which also leaves its errors unhandled."
  },
  {
    id: "promises-035",
    question: "What happens if you pass a non-function to `.then`, like `.then(2)`?",
    theme: "Promises",
    subCategory: "Chaining",
    level: "medium",
    fourOptionsForAnAnswer: [
      "The chain is rejected",
      "TypeError is thrown",
      "The value 2 is passed down the chain",
      "It is ignored and the previous value passes through"
    ],
    correctAnswer: "It is ignored and the previous value passes through",
    explanation: "Non-function arguments are ignored and replaced by an identity pass-through, so `.then(2)` lets the previous value continue down the chain."
  },
  {
    id: "promises-036",
    question: "If you attach several `.then` handlers to the same promise (not chained), what do they receive?",
    theme: "Promises",
    subCategory: "Chaining",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Each one receives the same value",
      "They receive values in random order",
      "Each receives the previous handler's return value",
      "Only the first one is called"
    ],
    correctAnswer: "Each one receives the same value",
    explanation: "Each `.then` on the same promise is an independent branch. Every handler receives the same value, and they run in the order they were registered."
  },
  {
    id: "promises-037",
    question: "A `.catch` handler returns a value. What does the following `.then` receive?",
    theme: "Promises",
    subCategory: "Chaining",
    level: "medium",
    fourOptionsForAnAnswer: [
      "The original error",
      "Nothing, .then after .catch is skipped",
      "undefined",
      "The value returned by .catch; the chain has recovered"
    ],
    correctAnswer: "The value returned by .catch; the chain has recovered",
    explanation: "Returning from `.catch` means the error was handled. The promise it returns fulfills with that value, so the following `.then` runs normally."
  },
  {
    id: "promises-038",
    question: "A `.finally` callback returns the value 2. What does the next `.then` receive?",
    theme: "Promises",
    subCategory: "Chaining",
    level: "medium",
    fourOptionsForAnAnswer: [
      "undefined",
      "2",
      "A promise of 2",
      "The original value from before .finally"
    ],
    correctAnswer: "The original value from before .finally",
    explanation: "The return value of `.finally` is ignored (unless it's a rejected promise or a throw). The original value passes through unchanged."
  },
  {
    id: "promises-039",
    question: "A `.finally` callback throws an error. What happens to the resulting promise?",
    theme: "Promises",
    subCategory: "Chaining",
    level: "medium",
    fourOptionsForAnAnswer: [
      "The error is ignored",
      "It keeps the original outcome",
      "It rejects with the new error",
      "It stays pending"
    ],
    correctAnswer: "It rejects with the new error",
    explanation: "A throw (or rejected promise) inside `.finally` overrides the original outcome, and the chain rejects with the new error."
  },
  {
    id: "promises-040",
    question: "What is the difference between 'resolved' and 'fulfilled'?",
    theme: "Promises",
    subCategory: "Fundamentals",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Resolved means its fate is locked in, possibly to another still-pending promise; fulfilled means it has a value",
      "Resolved applies only to async functions",
      "They mean the same thing",
      "Fulfilled means locked in, resolved means it has a value"
    ],
    correctAnswer: "Resolved means its fate is locked in, possibly to another still-pending promise; fulfilled means it has a value",
    explanation: "A promise is resolved once its fate is fixed, for example by calling `resolve(otherPromise)`. It may still be pending until `otherPromise` settles. Fulfilled means it actually has a value."
  },
  {
    id: "promises-041",
    question: "What happens if you resolve a promise with another promise?",
    theme: "Promises",
    subCategory: "Fundamentals",
    level: "medium",
    fourOptionsForAnAnswer: [
      "The outer promise fulfills with the inner promise object",
      "The inner promise is cancelled",
      "The outer promise adopts the inner promise's state",
      "TypeError is thrown"
    ],
    correctAnswer: "The outer promise adopts the inner promise's state",
    explanation: "Resolving with a promise or thenable makes the outer promise follow it, adopting its eventual fulfillment or rejection. You never get a 'promise of a promise'."
  },
  {
    id: "promises-042",
    question: "Why is nesting `.then` inside `.then` usually considered an anti-pattern?",
    theme: "Promises",
    subCategory: "Chaining",
    level: "medium",
    fourOptionsForAnAnswer: [
      "It recreates callback hell; returning the promise keeps the chain flat",
      "Nested .then is not allowed by the spec",
      "It causes memory leaks",
      "It is slower"
    ],
    correctAnswer: "It recreates callback hell; returning the promise keeps the chain flat",
    explanation: "Nesting rebuilds callback hell and makes error handling harder. Returning the inner promise keeps the chain flat with a single `.catch`. Nesting is only justified when an inner step needs a closure variable."
  },
  {
    id: "promises-043",
    question: "What is the 'explicit promise construction anti-pattern'?",
    theme: "Promises",
    subCategory: "Chaining",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Using async functions inside the executor",
      "Calling resolve without arguments",
      "Wrapping an existing promise in new Promise unnecessarily",
      "Using Promise.resolve instead of new Promise"
    ],
    correctAnswer: "Wrapping an existing promise in new Promise unnecessarily",
    explanation: "Wrapping something that already returns a promise in `new Promise(...)` adds code and often swallows errors. Just return or chain the existing promise."
  },
  {
    id: "promises-044",
    question: "How do `promise.then(f1).catch(f2)` and `promise.then(f1, f2)` differ?",
    theme: "Promises",
    subCategory: "Error handling",
    level: "medium",
    fourOptionsForAnAnswer: [
      "The second form catches errors from f1 but not from promise",
      "In the second form, an error thrown inside f1 is not caught by f2",
      "In the first form, f2 never runs",
      "They behave identically"
    ],
    correctAnswer: "In the second form, an error thrown inside f1 is not caught by f2",
    explanation: "In `then(f1, f2)`, `f2` only handles rejections of the original promise; an error thrown inside `f1` goes to the next handler in the chain. `.then(f1).catch(f2)` catches both."
  },
  {
    id: "promises-045",
    question: "Will `.catch` catch an error thrown inside a `setTimeout` callback within the executor?",
    theme: "Promises",
    subCategory: "Error handling",
    level: "medium",
    fourOptionsForAnAnswer: [
      "No, the throw happens later outside the executor, so it is an uncaught exception",
      "Only in Node.js",
      "Yes, always",
      "Yes, if the timeout is 0"
    ],
    correctAnswer: "No, the throw happens later outside the executor, so it is an uncaught exception",
    explanation: "Only synchronous throws in the executor become rejections. The timer callback runs later in its own task, so its error is an uncaught exception and the promise stays pending."
  },
  {
    id: "promises-046",
    question: "What is the default behavior of Node.js (v15+) on an unhandled promise rejection?",
    theme: "Promises",
    subCategory: "Error handling",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Logs a warning and continues",
      "Terminates the process",
      "Ignores it silently",
      "Retries the promise"
    ],
    correctAnswer: "Terminates the process",
    explanation: "Since Node 15 the default `--unhandled-rejections=throw` mode crashes the process on an unhandled rejection, treating it like an uncaught exception."
  },
  {
    id: "promises-047",
    question: "Which browser event fires for a rejected promise with no handler?",
    theme: "Promises",
    subCategory: "Error handling",
    level: "medium",
    fourOptionsForAnAnswer: [
      "unhandledrejection",
      "rejectionhandled",
      "error",
      "promiseerror"
    ],
    correctAnswer: "unhandledrejection",
    explanation: "Browsers dispatch `unhandledrejection` on `window` (and workers) for rejections without handlers. It's useful for global error logging."
  },
  {
    id: "promises-048",
    question: "When does the `rejectionhandled` event fire?",
    theme: "Promises",
    subCategory: "Error handling",
    level: "hard",
    fourOptionsForAnAnswer: [
      "When Promise.allSettled finishes",
      "When .finally runs after a rejection",
      "When any rejection is caught",
      "When a handler is attached to a rejection that was already reported as unhandled"
    ],
    correctAnswer: "When a handler is attached to a rejection that was already reported as unhandled",
    explanation: "If a handler is attached after the rejection was already reported as unhandled, the browser fires `rejectionhandled` so error trackers can take the report back."
  },
  {
    id: "promises-049",
    question: "Does `fetch` reject on an HTTP 404 or 500 response?",
    theme: "Promises",
    subCategory: "Error handling",
    level: "medium",
    fourOptionsForAnAnswer: [
      "No, it resolves; you must check response.ok",
      "Only for 500",
      "Only when the body is empty",
      "Yes, for any status >= 400"
    ],
    correctAnswer: "No, it resolves; you must check response.ok",
    explanation: "`fetch` only cares whether a response arrived. 404 and 500 are valid responses, so check `response.ok` or `response.status` yourself."
  },
  {
    id: "promises-050",
    question: "When does `fetch` reject?",
    theme: "Promises",
    subCategory: "Error handling",
    level: "medium",
    fourOptionsForAnAnswer: [
      "On any non-2xx status",
      "On network failure, CORS failure, or abort",
      "On redirects",
      "On JSON parsing errors"
    ],
    correctAnswer: "On network failure, CORS failure, or abort",
    explanation: "`fetch` rejects when there's no usable response: network errors, CORS failures, invalid URLs, or an abort through `AbortController`."
  },
  {
    id: "promises-051",
    question: "Why should you reject with `Error` objects instead of strings?",
    theme: "Promises",
    subCategory: "Error handling",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Error objects carry a stack trace and a consistent shape",
      "Strings cannot be rejected",
      "Error objects are faster",
      "Strings trigger unhandled rejections"
    ],
    correctAnswer: "Error objects carry a stack trace and a consistent shape",
    explanation: "`Error` objects capture a stack trace and support `name`, `message`, and `cause`, which makes debugging and `instanceof` checks possible. A string has none of that."
  },
  {
    id: "promises-052",
    question: "Why doesn't a `try/catch` around `promise.then(...)` (without await) catch its rejection?",
    theme: "Promises",
    subCategory: "Error handling",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Rejections are not errors",
      "It does catch it",
      "The rejection happens asynchronously, after the try block has finished",
      "try/catch doesn't work with promises at all"
    ],
    correctAnswer: "The rejection happens asynchronously, after the try block has finished",
    explanation: "`try/catch` only sees errors thrown while its block runs. A promise rejects later, after the block finished. You need `await` inside the `try`, or a `.catch`."
  },
  {
    id: "promises-053",
    question: "Inside `try { ... } catch`, what's the difference between `return promise` and `return await promise`?",
    theme: "Promises",
    subCategory: "Error handling",
    level: "medium",
    fourOptionsForAnAnswer: [
      "return promise is faster and catches errors too",
      "None",
      "return await creates an unhandled rejection",
      "Only return await lets the catch block handle a rejection"
    ],
    correctAnswer: "Only return await lets the catch block handle a rejection",
    explanation: "With `return promise`, the function exits the `try` before the promise settles, so a rejection skips `catch`. `return await` keeps the function inside the `try` until the result is known."
  },
  {
    id: "promises-054",
    question: "What is `Error.prototype.cause` useful for in async code?",
    theme: "Promises",
    subCategory: "Error handling",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Cancelling a promise",
      "Suppressing unhandled rejections",
      "Wrapping a low-level error in a higher-level one while keeping the original",
      "Retrying the operation"
    ],
    correctAnswer: "Wrapping a low-level error in a higher-level one while keeping the original",
    explanation: "`new Error('Failed to load user', { cause: err })` adds context while preserving the original error, so logs show both the high-level and the root cause."
  },
  {
    id: "promises-055",
    question: "What happens with `await 5`?",
    theme: "Promises",
    subCategory: "async/await",
    level: "medium",
    fourOptionsForAnAnswer: [
      "It returns a promise of 5",
      "SyntaxError",
      "It evaluates to 5 after a microtask",
      "TypeError"
    ],
    correctAnswer: "It evaluates to 5 after a microtask",
    explanation: "`await` wraps non-promises with `Promise.resolve`, so `await 5` evaluates to 5, but only after yielding to the microtask queue."
  },
  {
    id: "promises-056",
    question: "What is the problem with `array.forEach(async item => await work(item))`?",
    theme: "Promises",
    subCategory: "async/await",
    level: "medium",
    fourOptionsForAnAnswer: [
      "It runs items strictly sequentially",
      "It throws a SyntaxError",
      "async callbacks are ignored",
      "forEach doesn't wait; code after it runs before the work finishes"
    ],
    correctAnswer: "forEach doesn't wait; code after it runs before the work finishes",
    explanation: "`forEach` ignores the promises returned by async callbacks, so all items start at once and nothing waits. Use `for...of` with `await` (sequential) or `Promise.all(items.map(...))` (parallel)."
  },
  {
    id: "promises-057",
    question: "Two `await delay(1000)` calls one after another take about how long? And `Promise.all` of the same two?",
    theme: "Promises",
    subCategory: "async/await",
    level: "medium",
    fourOptionsForAnAnswer: [
      "1s and 2s",
      "2s and 1s",
      "2s and 2s",
      "1s and 1s"
    ],
    correctAnswer: "2s and 1s",
    explanation: "Sequential awaits add up (about 2s) because the second delay only starts after the first finishes. `Promise.all` starts both together, so the total is the longest one (about 1s)."
  },
  {
    id: "promises-058",
    question: "Does `for await...of` process items in parallel?",
    theme: "Promises",
    subCategory: "async/await",
    level: "medium",
    fourOptionsForAnAnswer: [
      "No, it awaits each item sequentially",
      "It depends on the iterator",
      "Only for arrays of promises",
      "Yes, all at once"
    ],
    correctAnswer: "No, it awaits each item sequentially",
    explanation: "`for await` awaits each value before starting the next iteration, so it is sequential by design. For parallelism, map to promises and use `Promise.all`."
  },
  {
    id: "promises-059",
    question: "Where can top-level `await` be used?",
    theme: "Promises",
    subCategory: "async/await",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Only inside Web Workers",
      "Anywhere",
      "Only in ES modules",
      "Only in CommonJS"
    ],
    correctAnswer: "Only in ES modules",
    explanation: "Top-level `await` works only in ES modules (`type=\"module\"`, `.mjs`, bundled ESM). CommonJS and classic scripts still need an async wrapper."
  },
  {
    id: "promises-060",
    question: "How does top-level `await` in a module affect the modules that import it?",
    theme: "Promises",
    subCategory: "async/await",
    level: "hard",
    fourOptionsForAnAnswer: [
      "They throw an error",
      "They are evaluated only after the awaited promise settles",
      "They receive a promise instead of exports",
      "No effect"
    ],
    correctAnswer: "They are evaluated only after the awaited promise settles",
    explanation: "A module with top-level `await` doesn't finish evaluating until the await settles, and every module importing it waits for that too. Slow top-level awaits delay the whole graph."
  },
  {
    id: "promises-061",
    question: "Can a class constructor be `async`?",
    theme: "Promises",
    subCategory: "async/await",
    level: "hard",
    fourOptionsForAnAnswer: [
      "No; a common pattern is a static async factory method",
      "Only with decorators",
      "Only in TypeScript",
      "Yes"
    ],
    correctAnswer: "No; a common pattern is a static async factory method",
    explanation: "Constructors must return the instance synchronously, so `async constructor` is a syntax error. The usual pattern is `static async create()` that awaits setup and then calls `new`."
  },
  {
    id: "promises-062",
    question: "What does calling an async generator function return?",
    theme: "Promises",
    subCategory: "async/await",
    level: "hard",
    fourOptionsForAnAnswer: [
      "A promise",
      "An async iterator whose next() returns promises",
      "A regular generator",
      "An array of promises"
    ],
    correctAnswer: "An async iterator whose next() returns promises",
    explanation: "An async generator returns an async iterator: each `next()` returns a promise of `{ value, done }`, consumed with `for await...of`."
  },
  {
    id: "promises-063",
    question: "What does `Symbol.asyncIterator` enable?",
    theme: "Promises",
    subCategory: "async/await",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Cancelling iterators",
      "Converting promises to arrays",
      "Using an object in for await...of",
      "Parallel iteration"
    ],
    correctAnswer: "Using an object in for await...of",
    explanation: "An object with a `[Symbol.asyncIterator]()` method returning an async iterator can be consumed with `for await...of`, for example for paginated APIs or streams."
  },
  {
    id: "promises-064",
    question: "How is async/await related to generators?",
    theme: "Promises",
    subCategory: "Advanced & internals",
    level: "hard",
    fourOptionsForAnAnswer: [
      "async/await can be seen as generators yielding promises plus an automatic runner",
      "Generators are built on top of async/await",
      "They are unrelated",
      "async functions compile to Web Workers"
    ],
    correctAnswer: "async/await can be seen as generators yielding promises plus an automatic runner",
    explanation: "Before native async/await, libraries like `co` ran generators that `yield`ed promises and resumed them with the results. Async functions are essentially that pattern built into the language."
  },
  {
    id: "promises-065",
    question: "What is a 'floating promise'?",
    theme: "Promises",
    subCategory: "async/await",
    level: "medium",
    fourOptionsForAnAnswer: [
      "A promise resolved with another promise",
      "A promise inside a setTimeout",
      "A promise stored in a global variable",
      "A promise that is neither awaited nor handled with .catch"
    ],
    correctAnswer: "A promise that is neither awaited nor handled with .catch",
    explanation: "A floating promise is created but never awaited or handled, so its errors become unhandled rejections and its timing is unpredictable. The `no-floating-promises` lint rule catches this."
  },
  {
    id: "promises-066",
    question: "In which queue are promise reaction callbacks scheduled?",
    theme: "Promises",
    subCategory: "Event loop & microtasks",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Macrotask queue",
      "Microtask queue",
      "Idle callback queue",
      "Animation frame queue"
    ],
    correctAnswer: "Microtask queue",
    explanation: "Promise reactions are microtasks. The microtask queue is drained completely after each task, before timers or rendering get a turn."
  },
  {
    id: "promises-067",
    question: "Which runs first: `setTimeout(fn, 0)` or `Promise.resolve().then(fn)`?",
    theme: "Promises",
    subCategory: "Event loop & microtasks",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Promise.then",
      "setTimeout",
      "It's random",
      "Both at the same time"
    ],
    correctAnswer: "Promise.then",
    explanation: "`Promise.then` is a microtask and runs as soon as the current synchronous code finishes. `setTimeout` is a macrotask and waits for the next turn of the event loop."
  },
  {
    id: "promises-068",
    question: "What does `queueMicrotask(fn)` do?",
    theme: "Promises",
    subCategory: "Event loop & microtasks",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Schedules fn as a microtask without creating a promise",
      "Runs fn synchronously",
      "Schedules fn as a macrotask",
      "Schedules fn before the next animation frame"
    ],
    correctAnswer: "Schedules fn as a microtask without creating a promise",
    explanation: "`queueMicrotask` puts a callback directly on the microtask queue. It has the same timing as `Promise.resolve().then(fn)`, without allocating a promise or swallowing errors."
  },
  {
    id: "promises-069",
    question: "When does the browser get a chance to render, relative to microtasks?",
    theme: "Promises",
    subCategory: "Event loop & microtasks",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Before microtasks run",
      "Rendering and microtasks run in parallel",
      "Only after the microtask queue is fully drained",
      "Between every microtask"
    ],
    correctAnswer: "Only after the microtask queue is fully drained",
    explanation: "Rendering happens between tasks, and only after the microtask queue is empty. A long chain of microtasks therefore delays painting."
  },
  {
    id: "promises-070",
    question: "Can an endless chain of microtasks freeze the page?",
    theme: "Promises",
    subCategory: "Event loop & microtasks",
    level: "hard",
    fourOptionsForAnAnswer: [
      "No, the browser interrupts it",
      "Yes, microtasks run until the queue is empty, starving rendering and macrotasks",
      "Only if there is a setTimeout too",
      "Only in Safari"
    ],
    correctAnswer: "Yes, microtasks run until the queue is empty, starving rendering and macrotasks",
    explanation: "Because the loop drains all microtasks before moving on, a microtask that keeps scheduling another blocks timers, input, and rendering. It's 'microtask starvation'."
  },
  {
    id: "promises-071",
    question: "In a Node.js CommonJS script, what runs first: `process.nextTick` callbacks or promise callbacks?",
    theme: "Promises",
    subCategory: "Node.js",
    level: "hard",
    fourOptionsForAnAnswer: [
      "process.nextTick callbacks",
      "Promise callbacks",
      "They run in parallel",
      "Whichever was scheduled first"
    ],
    correctAnswer: "process.nextTick callbacks",
    explanation: "Node processes the `process.nextTick` queue before the promise microtask queue, so `nextTick` callbacks run first. (In ES modules, the order can differ because module code itself runs inside a microtask.)"
  },
  {
    id: "promises-072",
    question: "In a Node.js main module, what is the order of `setTimeout(fn, 0)` vs `setImmediate(fn)`?",
    theme: "Promises",
    subCategory: "Node.js",
    level: "hard",
    fourOptionsForAnAnswer: [
      "setImmediate always first",
      "setTimeout always first",
      "They never both run",
      "Non-deterministic; inside an I/O callback setImmediate always runs first"
    ],
    correctAnswer: "Non-deterministic; inside an I/O callback setImmediate always runs first",
    explanation: "From the main module the order depends on process timing, so it's non-deterministic. Inside an I/O callback, `setImmediate` always runs first because the check phase comes right after the poll phase."
  },
  {
    id: "promises-073",
    question: "Returning a native promise from a `.then` callback, compared with returning a plain value, delays the chain by:",
    theme: "Promises",
    subCategory: "Advanced & internals",
    level: "hard",
    fourOptionsForAnAnswer: [
      "One macrotask",
      "Two extra microtask ticks",
      "Nothing",
      "One animation frame"
    ],
    correctAnswer: "Two extra microtask ticks",
    explanation: "Adopting a returned promise goes through extra jobs (a resolve-thenable job plus its `then`), costing two additional microtask ticks. That's why `return Promise.resolve(4)` lands later than you'd expect."
  },
  {
    id: "promises-074",
    question: "Since the ES2019 spec change (V8 7.2), how many microtask ticks does `await` on a native promise take?",
    theme: "Promises",
    subCategory: "Advanced & internals",
    level: "hard",
    fourOptionsForAnAnswer: [
      "One",
      "One macrotask",
      "Zero",
      "Three"
    ],
    correctAnswer: "One",
    explanation: "The ES2019 change lets `await` on a native promise reuse it instead of wrapping it, cutting the cost from three ticks to one. V8 shipped it in 7.2 (Node 12)."
  },
  {
    id: "promises-075",
    question: "Can a native promise be cancelled?",
    theme: "Promises",
    subCategory: "Concurrency & cancellation",
    level: "hard",
    fourOptionsForAnAnswer: [
      "No; you cancel the underlying operation, e.g. with AbortController",
      "Yes, with promise.cancel()",
      "Yes, by setting it to null",
      "Yes, with Promise.reject(promise)"
    ],
    correctAnswer: "No; you cancel the underlying operation, e.g. with AbortController",
    explanation: "Native promises have no cancel method. Cancellation belongs to the operation: pass an `AbortSignal` to `fetch` or your own functions and abort it."
  },
  {
    id: "promises-076",
    question: "What does `AbortSignal.timeout(ms)` return?",
    theme: "Promises",
    subCategory: "Concurrency & cancellation",
    level: "medium",
    fourOptionsForAnAnswer: [
      "A signal that aborts automatically after ms with a TimeoutError",
      "A setTimeout id",
      "A cancellable promise",
      "A promise that rejects after ms"
    ],
    correctAnswer: "A signal that aborts automatically after ms with a TimeoutError",
    explanation: "`AbortSignal.timeout(ms)` gives you a signal that aborts on its own after `ms` with a `TimeoutError` DOMException, for example `fetch(url, { signal: AbortSignal.timeout(5000) })`."
  },
  {
    id: "promises-077",
    question: "What does `AbortSignal.any([s1, s2])` do?",
    theme: "Promises",
    subCategory: "Concurrency & cancellation",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Waits for all signals to abort",
      "Returns a signal that aborts when any of the given signals aborts",
      "Returns the first signal that aborted",
      "Aborts s1 and s2"
    ],
    correctAnswer: "Returns a signal that aborts when any of the given signals aborts",
    explanation: "`AbortSignal.any` combines signals: the result aborts as soon as any input does, which is handy for 'user cancelled OR timed out'."
  },
  {
    id: "promises-078",
    question: "When a `withTimeout(promise, ms)` helper built on `Promise.race` times out, does the original operation stop?",
    theme: "Promises",
    subCategory: "Concurrency & cancellation",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Yes, race cancels the loser",
      "No, it keeps running unless explicitly aborted",
      "Yes, always",
      "Only if it's a fetch"
    ],
    correctAnswer: "No, it keeps running unless explicitly aborted",
    explanation: "`Promise.race` only decides which result you observe. The losing operation keeps running and using resources unless you also abort it."
  },
  {
    id: "promises-079",
    question: "In async memoization, why cache the promise rather than the resolved value?",
    theme: "Promises",
    subCategory: "Concurrency & cancellation",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Concurrent callers share the same in-flight request instead of firing duplicates",
      "It makes errors disappear",
      "Values cannot be cached",
      "Promises use less memory"
    ],
    correctAnswer: "Concurrent callers share the same in-flight request instead of firing duplicates",
    explanation: "Caching the pending promise means concurrent callers share one in-flight request. If you only cached the resolved value, every call made before the first one finished would fire a duplicate."
  },
  {
    id: "promises-080",
    question: "What is a race condition in async UI code, such as search-as-you-type?",
    theme: "Promises",
    subCategory: "Concurrency & cancellation",
    level: "medium",
    fourOptionsForAnAnswer: [
      "A promise rejecting twice",
      "Using Promise.race",
      "An older, slower response overwriting the result of a newer request",
      "Two promises resolving at the same time"
    ],
    correctAnswer: "An older, slower response overwriting the result of a newer request",
    explanation: "Responses can arrive out of order. If an old, slow search response lands after a newer one, it overwrites fresh results. Ignore or abort stale requests."
  },
  {
    id: "promises-081",
    question: "A common way to prevent stale responses in a React `useEffect` fetch is:",
    theme: "Promises",
    subCategory: "React",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Using async useEffect directly",
      "Wrapping fetch in setTimeout",
      "Aborting or ignoring the request in the effect's cleanup",
      "Using Promise.all"
    ],
    correctAnswer: "Aborting or ignoring the request in the effect's cleanup",
    explanation: "The effect cleanup runs before the next effect and on unmount. Abort the request there (or set an `ignore` flag) so a stale response never updates state."
  },
  {
    id: "promises-082",
    question: "What does Node's `AsyncLocalStorage` provide?",
    theme: "Promises",
    subCategory: "Node.js",
    level: "hard",
    fourOptionsForAnAnswer: [
      "A promise pool",
      "Persistent storage for promises",
      "Context that propagates across async boundaries",
      "Local storage like the browser"
    ],
    correctAnswer: "Context that propagates across async boundaries",
    explanation: "`AsyncLocalStorage` keeps a store that follows the async call chain, so a request ID or user context is available deep in async code without passing it through every function."
  },
  {
    id: "promises-083",
    question: "Which callback signature does Node's `util.promisify` expect?",
    theme: "Promises",
    subCategory: "Node.js",
    level: "medium",
    fourOptionsForAnAnswer: [
      "(value) => void",
      "(resolve, reject) => void",
      "(err, value) => void as the last argument",
      "Any signature"
    ],
    correctAnswer: "(err, value) => void as the last argument",
    explanation: "`util.promisify` expects the Node convention: the callback is the last argument and is called as `(err, value)`. A truthy `err` rejects; otherwise the promise resolves with `value`."
  },
  {
    id: "promises-084",
    question: "Main difference between promises and RxJS Observables:",
    theme: "Promises",
    subCategory: "Advanced & internals",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Promises can emit multiple values",
      "Promises are eager and deliver one value; Observables are lazy, can emit many values, and are cancellable",
      "None",
      "Observables are always synchronous"
    ],
    correctAnswer: "Promises are eager and deliver one value; Observables are lazy, can emit many values, and are cancellable",
    explanation: "A promise starts work immediately and settles once. An Observable starts on `subscribe`, can emit many values over time, and can be unsubscribed (cancelled)."
  },
  {
    id: "promises-085",
    question: "What is the 'Zalgo' problem that promises avoid?",
    theme: "Promises",
    subCategory: "Advanced & internals",
    level: "hard",
    fourOptionsForAnAnswer: [
      "APIs that call back sometimes synchronously and sometimes asynchronously",
      "Deeply nested callbacks",
      "Memory leaks",
      "Unhandled rejections"
    ],
    correctAnswer: "APIs that call back sometimes synchronously and sometimes asynchronously",
    explanation: "An API that calls back synchronously in some cases and asynchronously in others creates ordering bugs. Promises avoid this by always running reactions asynchronously."
  },
  {
    id: "promises-086",
    question: "What does React 19's `use(promise)` require of the promise?",
    theme: "Promises",
    subCategory: "React",
    level: "hard",
    fourOptionsForAnAnswer: [
      "It must come from fetch",
      "It must be already resolved",
      "It must be created during render",
      "It should be stable (cached) across renders, not recreated on each render"
    ],
    correctAnswer: "It should be stable (cached) across renders, not recreated on each render",
    explanation: "`use` suspends on the promise you pass. If you create a new promise on every render, it never stops suspending. Create it outside render, in a cache, a loader, or a parent component."
  },
  {
    id: "promises-087",
    question: "When subclassing Promise, what does calling `.then` on a subclass instance return by default?",
    theme: "Promises",
    subCategory: "Advanced & internals",
    level: "hard",
    fourOptionsForAnAnswer: [
      "An instance of the subclass (via Symbol.species)",
      "A thenable object",
      "A plain Promise",
      "undefined"
    ],
    correctAnswer: "An instance of the subclass (via Symbol.species)",
    explanation: "`.then` builds its result with the constructor found at `this.constructor[Symbol.species]`, which by default is the subclass. So chained promises stay instances of your subclass."
  },
  {
    id: "promises-088",
    question: "What does this code alert?\n\nlet promise = new Promise(function(resolve, reject) {\n  resolve(1);\n  setTimeout(() => resolve(2), 1000);\n});\npromise.then(alert);",
    theme: "Promises",
    subCategory: "Fundamentals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "2",
      "Nothing",
      "1, then 2 after a second",
      "1"
    ],
    correctAnswer: "1",
    explanation: "`resolve(1)` settles the promise immediately. The later `resolve(2)` is ignored because a promise settles only once, so `alert` shows 1."
  },
  {
    id: "promises-089",
    question: "What is logged?\n\nconsole.log(1);\nsetTimeout(() => console.log(2));\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);",
    theme: "Promises",
    subCategory: "Event loop & microtasks",
    level: "easy",
    fourOptionsForAnAnswer: [
      "1 2 3 4",
      "1 3 4 2",
      "1 4 2 3",
      "1 4 3 2"
    ],
    correctAnswer: "1 4 3 2",
    explanation: "Synchronous code logs 1 and 4 first. The `.then` callback is a microtask and runs before the `setTimeout` macrotask, giving 1 4 3 2."
  },
  {
    id: "promises-090",
    question: "What is logged?\n\nnew Promise(res => { console.log(1); res(); console.log(2); })\n  .then(() => console.log(3));\nconsole.log(4);",
    theme: "Promises",
    subCategory: "Event loop & microtasks",
    level: "easy",
    fourOptionsForAnAnswer: [
      "1 2 3 4",
      "1 3 2 4",
      "4 1 2 3",
      "1 2 4 3"
    ],
    correctAnswer: "1 2 4 3",
    explanation: "The executor runs synchronously and `res()` doesn't stop it, so 1 and 2 log immediately, then 4 from the outer code. The `.then` callback runs last as a microtask: 1 2 4 3."
  },
  {
    id: "promises-091",
    question: "What is logged?\n\nasync function a() { console.log('a1'); await b(); console.log('a2'); }\nasync function b() { console.log('b'); }\nconsole.log('start'); a(); console.log('end');",
    theme: "Promises",
    subCategory: "async/await",
    level: "medium",
    fourOptionsForAnAnswer: [
      "start a1 b end a2",
      "start a1 b a2 end",
      "start end a1 b a2",
      "start a1 end b a2"
    ],
    correctAnswer: "start a1 b end a2",
    explanation: "`a()` runs synchronously until its first `await`: it logs a1, then `b()` logs b. The `await` suspends `a`, so 'end' logs, and a2 runs later as a microtask."
  },
  {
    id: "promises-092",
    question: "What is logged?\n\nPromise.resolve(1)\n  .then(2)\n  .then(Promise.resolve(3))\n  .then(console.log);",
    theme: "Promises",
    subCategory: "Chaining",
    level: "medium",
    fourOptionsForAnAnswer: [
      "2",
      "undefined",
      "1",
      "3"
    ],
    correctAnswer: "1",
    explanation: "Both `.then(2)` and `.then(Promise.resolve(3))` receive non-functions, which are ignored, so the original value 1 passes through to `console.log`."
  },
  {
    id: "promises-093",
    question: "What is logged?\n\nPromise.resolve(1)\n  .then(x => { throw x + 1; })\n  .catch(x => x + 1)\n  .then(console.log);",
    theme: "Promises",
    subCategory: "Error handling",
    level: "medium",
    fourOptionsForAnAnswer: [
      "2",
      "1",
      "Nothing; unhandled rejection",
      "3"
    ],
    correctAnswer: "3",
    explanation: "The throw rejects with 2, `.catch` returns 2 + 1 = 3 and recovers the chain, and the final `.then` logs 3."
  },
  {
    id: "promises-094",
    question: "Which values are logged (ignoring order)?\n\nPromise.resolve(1).finally(() => 2).then(console.log);\nPromise.reject(1).finally(() => { throw 3; }).catch(console.log);",
    theme: "Promises",
    subCategory: "Chaining",
    level: "medium",
    fourOptionsForAnAnswer: [
      "1 and 3",
      "2 and 1",
      "2 and 3",
      "1 and 1"
    ],
    correctAnswer: "1 and 3",
    explanation: "`.finally` ignores its return value, so the first chain logs the original 1. In the second, the throw inside `.finally` replaces the rejection reason with 3, which `.catch` logs."
  },
  {
    id: "promises-095",
    question: "What is logged?\n\nPromise.resolve().then(() => console.log('a')).then(() => console.log('b'));\nPromise.resolve().then(() => console.log('c')).then(() => console.log('d'));",
    theme: "Promises",
    subCategory: "Event loop & microtasks",
    level: "medium",
    fourOptionsForAnAnswer: [
      "a b c d",
      "c d a b",
      "a c b d",
      "a c d b"
    ],
    correctAnswer: "a c b d",
    explanation: "Microtasks from both chains interleave. The first callbacks of each chain run (a, c), and each schedules its follow-up, which then run in order (b, d)."
  },
  {
    id: "promises-096",
    question: "What is logged?\n\nPromise.resolve().then(() => { console.log(0); return Promise.resolve(4); }).then(console.log);\nPromise.resolve().then(() => console.log(1)).then(() => console.log(2))\n  .then(() => console.log(3)).then(() => console.log(5)).then(() => console.log(6));",
    theme: "Promises",
    subCategory: "Event loop & microtasks",
    level: "hard",
    fourOptionsForAnAnswer: [
      "0 1 2 3 4 5 6",
      "0 1 4 2 3 5 6",
      "0 1 2 4 3 5 6",
      "0 4 1 2 3 5 6"
    ],
    correctAnswer: "0 1 2 3 4 5 6",
    explanation: "Returning a promise from a `.then` callback costs two extra microtask ticks to adopt it. So 4 is logged after 1, 2, 3 from the other chain, giving 0 1 2 3 4 5 6."
  },
  {
    id: "promises-097",
    question: "What is logged?\n\nasync function f() {\n  try { return Promise.reject('x'); }\n  catch (e) { console.log('caught'); }\n}\nf().catch(e => console.log('outer', e));",
    theme: "Promises",
    subCategory: "Error handling",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Nothing",
      "caught, then outer x",
      "caught",
      "outer x"
    ],
    correctAnswer: "outer x",
    explanation: "`return Promise.reject('x')` without `await` leaves the `try` immediately, so `catch` never sees the rejection. The returned promise rejects and the outer `.catch` logs 'outer x'."
  },
  {
    id: "promises-098",
    question: "What is logged? (delay resolves after ms)\n\n[1, 2, 3].forEach(async n => { await delay(100); console.log(n); });\nconsole.log('done');",
    theme: "Promises",
    subCategory: "async/await",
    level: "easy",
    fourOptionsForAnAnswer: [
      "done 1 2 3",
      "1 2 3 done",
      "3 2 1 done",
      "done"
    ],
    correctAnswer: "done 1 2 3",
    explanation: "`forEach` doesn't wait for async callbacks, so 'done' logs first. About 100ms later the three delays resolve and log 1, 2, 3."
  },
  {
    id: "promises-099",
    question: "What is logged?\n\nconst p = new Promise((res, rej) => { res('a'); rej('b'); res('c'); });\np.then(console.log, console.log);",
    theme: "Promises",
    subCategory: "Fundamentals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "b",
      "a b c",
      "a",
      "c"
    ],
    correctAnswer: "a",
    explanation: "The first call wins: `res('a')` settles the promise, and the later `rej` and `res` calls are ignored, so 'a' is logged."
  },
  {
    id: "promises-100",
    question: "What happens?\n\nasync function f() { await null; throw new Error('boom'); }\ntry { f(); } catch { console.log('caught'); }",
    theme: "Promises",
    subCategory: "Error handling",
    level: "medium",
    fourOptionsForAnAnswer: [
      "'caught' is logged",
      "SyntaxError",
      "Nothing is logged; there is an unhandled rejection",
      "'boom' is logged"
    ],
    correctAnswer: "Nothing is logged; there is an unhandled rejection",
    explanation: "`f()` returns a promise that rejects later, after `await null`. The synchronous `try/catch` has already finished, so nothing is caught and the rejection is unhandled."
  },
  {
    id: "promises-101",
    question: "What is logged?\n\nconst thenable = { then(res) { console.log('then called'); res(42); } };\nPromise.resolve(thenable).then(console.log);\nconsole.log('sync');",
    theme: "Promises",
    subCategory: "Event loop & microtasks",
    level: "medium",
    fourOptionsForAnAnswer: [
      "sync, then called, 42",
      "then called, 42, sync",
      "then called, sync, 42",
      "sync, 42"
    ],
    correctAnswer: "sync, then called, 42",
    explanation: "`Promise.resolve(thenable)` calls the thenable's `then` in a microtask (a PromiseResolveThenableJob), not synchronously. So 'sync' logs first, then 'then called', then 42."
  },
  {
    id: "promises-102",
    question: "In a Node.js CommonJS script, what is logged first and last among the deterministic parts?\n\nsetTimeout(() => console.log('timeout'));\nqueueMicrotask(() => console.log('micro'));\nprocess.nextTick(() => console.log('tick'));\nPromise.resolve().then(() => console.log('promise'));",
    theme: "Promises",
    subCategory: "Event loop & microtasks",
    level: "hard",
    fourOptionsForAnAnswer: [
      "tick, promise, micro, timeout",
      "tick, micro, promise, timeout",
      "timeout, tick, micro, promise",
      "micro, promise, tick, timeout"
    ],
    correctAnswer: "tick, micro, promise, timeout",
    explanation: "Synchronous code finishes, then Node runs the `nextTick` queue (tick), then promise microtasks in the order they were queued (micro, promise), and finally the timer phase (timeout)."
  }
];
