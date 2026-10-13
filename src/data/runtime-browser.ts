import type { RuntimeBrowserQuestion } from './types';

export const runtimeBrowserQuestions: RuntimeBrowserQuestion[] = [
  {
    id: "runtime-001",
    question: "How do CommonJS, AMD and ES modules differ?",
    theme: "Runtime & browser",
    subCategory: "Modules",
    level: "medium",
    fourOptionsForAnAnswer: [
      "They are three names for the same format",
      "ES modules load synchronously in Node only; CommonJS is the browser standard; AMD is for CSS",
      "CommonJS (`require`) loads synchronously and is Node's original format; AMD (`define`) loads asynchronously in browsers; ES modules (`import`/`export`) are the language standard",
      "AMD is the newest standard and replaces ES modules"
    ],
    correctAnswer: "CommonJS (`require`) loads synchronously and is Node's original format; AMD (`define`) loads asynchronously in browsers; ES modules (`import`/`export`) are the language standard",
    explanation: "A module system lets each file have its own scope and explicitly share code. CommonJS: `module.exports` / `require()`, synchronous and dynamic. AMD (RequireJS): `define(['dep'], factory)`, built for async loading in browsers before native modules. UMD wraps code so it works in both. ES modules: static `import`/`export`, live bindings, strict mode by default, async loading, top-level `await`, supported natively in browsers and Node."
  },
  {
    id: "runtime-002",
    question: "In modern JavaScript, how do you share a function between files?",
    theme: "Runtime & browser",
    subCategory: "Modules",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Declare it with `var` so every file can see it",
      "`export` it from one module and `import` it in another",
      "Put both files in the same folder",
      "Call it through `window.share()`"
    ],
    correctAnswer: "`export` it from one module and `import` it in another",
    explanation: "`export function sum() {}` (named) or `export default ...`, then `import { sum } from './math.js'` or `import sum from ...`. Dynamic `import('./x.js')` loads on demand and returns a promise. In the browser this needs `<script type='module'>`. Older ways: CommonJS `require`, or globals on `window` shared between classic scripts, which risk name collisions."
  },
  {
    id: "runtime-003",
    question: "Why can bundlers tree-shake ES modules more reliably than CommonJS?",
    theme: "Runtime & browser",
    subCategory: "Modules",
    level: "medium",
    fourOptionsForAnAnswer: [
      "ES modules are always smaller files",
      "`import` and `export` are static, so unused exports are known at build time; `require` can be dynamic",
      "CommonJS modules can't export functions",
      "Tree-shaking is only possible with minified code"
    ],
    correctAnswer: "`import` and `export` are static, so unused exports are known at build time; `require` can be dynamic",
    explanation: "ES module imports must be at the top level with string paths, so a bundler can see exactly which exports are used and drop the rest. `require` is an ordinary function call that can be conditional or use computed names, and `module.exports` can be changed at runtime. Mark packages as side-effect free (`sideEffects: false`) to help further."
  },
  {
    id: "runtime-004",
    question: "Which timer functions does JavaScript provide in the browser?",
    theme: "Runtime & browser",
    subCategory: "Timers",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Only `setTimeout`",
      "`setTimeout`, `setInterval` (cancelled with `clearTimeout`/`clearInterval`) and `requestAnimationFrame`",
      "`sleep()`, `wait()` and `delay()`",
      "`setTimeout` and `Promise.delay`"
    ],
    correctAnswer: "`setTimeout`, `setInterval` (cancelled with `clearTimeout`/`clearInterval`) and `requestAnimationFrame`",
    explanation: "`setTimeout(fn, ms)` runs once after at least `ms`; `setInterval(fn, ms)` repeats. Both return an ID to cancel with `clearTimeout`/`clearInterval`. `requestAnimationFrame(fn)` runs before the next repaint (about 60 times a second, paused in background tabs) and suits animations. `requestIdleCallback` runs when the browser is idle. Node.js adds `setImmediate` and `process.nextTick`. A recursive `setTimeout` is often better than `setInterval` because calls can't overlap."
  },
  {
    id: "runtime-005",
    question: "What does `setTimeout(fn, 0)` guarantee?",
    theme: "Runtime & browser",
    subCategory: "Timers",
    level: "medium",
    fourOptionsForAnAnswer: [
      "`fn` runs immediately, before the next line",
      "`fn` runs exactly 0 ms later, in parallel with the current code",
      "`fn` runs after the current code and all pending microtasks finish, not immediately",
      "`fn` never runs, because 0 ms is invalid"
    ],
    correctAnswer: "`fn` runs after the current code and all pending microtasks finish, not immediately",
    explanation: "Timers are macrotasks. The delay is a minimum: the callback is queued when the time is up and runs only when the call stack is empty and microtasks (promise callbacks) are done. Browsers also clamp nested timers to at least 4 ms, and background tabs can throttle them much more."
  },
  {
    id: "runtime-006",
    question: "How does the garbage collector decide which memory to free?",
    theme: "Runtime & browser",
    subCategory: "Memory",
    level: "medium",
    fourOptionsForAnAnswer: [
      "It frees every object after its function returns",
      "It uses reference counting only, so objects in cycles are never freed",
      "You must call `delete` or `free()` on every object",
      "It frees objects that are no longer reachable from the roots (globals, the call stack), using mark-and-sweep"
    ],
    correctAnswer: "It frees objects that are no longer reachable from the roots (globals, the call stack), using mark-and-sweep",
    explanation: "Memory is allocated automatically and reclaimed automatically. The collector starts from the roots, marks everything reachable through references, and sweeps the rest. Unreachable cycles are collected too, unlike with pure reference counting. V8 uses a generational collector: most objects die young and are collected cheaply in the young generation; survivors move to the old generation. You can't trigger it from page code; you can only stop holding references."
  },
  {
    id: "runtime-007",
    question: "What is a memory leak in JavaScript?",
    theme: "Runtime & browser",
    subCategory: "Memory",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Memory the app no longer needs but that stays reachable, so the garbage collector can't free it",
      "Data that is sent to another website by mistake",
      "Any variable declared with `var`",
      "Memory that is freed too early, while still in use"
    ],
    correctAnswer: "Memory the app no longer needs but that stays reachable, so the garbage collector can't free it",
    explanation: "The collector frees only unreachable objects, so a forgotten reference keeps data alive. Leaks show up as memory that keeps growing, slower pages and eventually crashes, especially in long-lived single-page apps. Find them with the DevTools Memory panel: take heap snapshots before and after an action and compare."
  },
  {
    id: "runtime-008",
    question: "Which is a common cause of memory leaks?",
    theme: "Runtime & browser",
    subCategory: "Memory",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Using `const` instead of `let`",
      "Too many local variables inside a function",
      "Using arrow functions instead of regular ones",
      "Timers or event listeners that are never removed and reference large objects or removed DOM nodes"
    ],
    correctAnswer: "Timers or event listeners that are never removed and reference large objects or removed DOM nodes",
    explanation: "Main types: accidental globals (assigning to undeclared variables); forgotten `setInterval`s and event listeners, e.g. on `window` from a component that was unmounted; closures that keep large data alive; detached DOM nodes still referenced from JavaScript; caches and maps that only grow (use `WeakMap` or a size limit); and unclosed subscriptions such as WebSockets or observers. Clean up in teardown code, e.g. React `useEffect` cleanup or `AbortController`."
  },
  {
    id: "runtime-009",
    question: "What is a polyfill?",
    theme: "Runtime & browser",
    subCategory: "Compatibility",
    level: "easy",
    fourOptionsForAnAnswer: [
      "A tool that converts new syntax like arrow functions into old syntax",
      "Code that implements a missing standard feature in older environments, e.g. `Array.prototype.includes`",
      "A CSS technique for filling empty space",
      "A browser setting that turns on experimental features"
    ],
    correctAnswer: "Code that implements a missing standard feature in older environments, e.g. `Array.prototype.includes`",
    explanation: "A polyfill checks whether a feature exists and, if not, adds an implementation that follows the spec: `if (!Array.prototype.includes) { Array.prototype.includes = function (...) { ... }; }`. It works for APIs (methods, `fetch`, `Promise`) but not new syntax, which needs a transpiler like Babel or TypeScript. core-js is the usual polyfill library."
  },
  {
    id: "runtime-010",
    question: "Which error does `null.x` throw?",
    theme: "Runtime & browser",
    subCategory: "Errors",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`ReferenceError`",
      "`SyntaxError`",
      "`TypeError`",
      "`RangeError`"
    ],
    correctAnswer: "`TypeError`",
    explanation: "Built-in error types: `TypeError` (wrong type for an operation, e.g. reading a property of `null` or calling a non-function), `ReferenceError` (undeclared variable or temporal dead zone), `SyntaxError` (invalid code or `JSON.parse` input), `RangeError` (value out of range, e.g. `new Array(-1)` or stack overflow), `URIError` (bad `decodeURIComponent` input), `EvalError` (legacy), and `AggregateError` (several errors, from `Promise.any`). All extend `Error` and have `name`, `message`, `stack` and optional `cause`."
  },
  {
    id: "runtime-011",
    question: "Which mechanisms catch errors in a web app?",
    theme: "Runtime & browser",
    subCategory: "Errors",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Only `try/catch`, which also catches errors in callbacks scheduled inside it",
      "`try/catch` for sync code and `await`, `.catch()` for promises, and global `error` / `unhandledrejection` handlers",
      "Only `window.onerror`; `try/catch` doesn't work in browsers",
      "Errors can't be caught; you can only log them"
    ],
    correctAnswer: "`try/catch` for sync code and `await`, `.catch()` for promises, and global `error` / `unhandledrejection` handlers",
    explanation: "Layers of error handling: `try/catch/finally` around synchronous code and awaited promises; `.catch()` on promise chains; custom error classes (`class ApiError extends Error`) for clear handling; `window.addEventListener('error')` and `'unhandledrejection'` as a last resort for logging; error boundaries in React for render errors; checking `response.ok` after `fetch`, which doesn't reject on HTTP errors; and reporting to a monitoring service like Sentry. Show the user a helpful message rather than failing silently."
  },
  {
    id: "runtime-012",
    question: "Why doesn't this catch the error?\n\ntry {\n  setTimeout(() => {\n    throw new Error('x');\n  });\n} catch (e) {\n  console.log('caught');\n}",
    theme: "Runtime & browser",
    subCategory: "Errors",
    level: "medium",
    fourOptionsForAnAnswer: [
      "`setTimeout` swallows all errors",
      "`catch` needs to be written as `catch (Error e)`",
      "Arrow functions can't throw errors",
      "The callback runs later, after the `try` block has already finished, so the error escapes it"
    ],
    correctAnswer: "The callback runs later, after the `try` block has already finished, so the error escapes it",
    explanation: "`try/catch` only catches errors thrown while its block is on the call stack. `setTimeout` just schedules the callback and returns, so the `try` is long gone when it throws. Put the `try/catch` inside the callback, or use promises with `await` so the error comes back to the awaiting code."
  },
  {
    id: "runtime-013",
    question: "Which native dialogs can JavaScript show to the user?",
    theme: "Runtime & browser",
    subCategory: "Browser APIs",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`alert()`, `confirm()` (returns a boolean) and `prompt()` (returns a string or `null`)",
      "Only `console.log()`",
      "`popup()`, `modal()` and `toast()`",
      "`alert()` only; the others need a library"
    ],
    correctAnswer: "`alert()`, `confirm()` (returns a boolean) and `prompt()` (returns a string or `null`)",
    explanation: "`alert(msg)` shows a message; `confirm(msg)` returns true for OK and false for Cancel; `prompt(msg, default)` returns the typed text or `null` if cancelled. They are modal and block the main thread, can't be styled, and some contexts suppress them. For real UIs use the HTML `<dialog>` element (`showModal()`) or custom components. `Notification` shows system notifications with permission."
  },
  {
    id: "runtime-014",
    question: "What does `el.dataset.userId` return for `<div data-user-id=\"42\">`?",
    theme: "Runtime & browser",
    subCategory: "Browser APIs",
    level: "easy",
    fourOptionsForAnAnswer: [
      "The number `42`",
      "The string '42'",
      "`undefined`, because the key must be written `dataset['user-id']`",
      "`null`"
    ],
    correctAnswer: "The string '42'",
    explanation: "`dataset` exposes all `data-*` attributes of an element as a `DOMStringMap`. Hyphenated names become camelCase (`data-user-id` → `userId`). Values are always strings, so convert them yourself (`Number(el.dataset.userId)`). Setting `el.dataset.state = 'open'` writes `data-state='open'`, and `delete el.dataset.state` removes it. It is used to keep small bits of data on elements, e.g. IDs for event delegation, or state for CSS selectors."
  },
  {
    id: "runtime-015",
    question: "What is the difference between the `input` and `change` events on a text field?",
    theme: "Runtime & browser",
    subCategory: "Browser APIs",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`change` fires on every keystroke; `input` fires on blur",
      "`input` works only on `<textarea>`; `change` only on `<input>`",
      "`input` fires on every edit of the value; `change` fires when the edit is committed, e.g. on blur",
      "They are identical aliases"
    ],
    correctAnswer: "`input` fires on every edit of the value; `change` fires when the edit is committed, e.g. on blur",
    explanation: "`input` fires immediately for typing, pasting, deleting and autofill, good for live search or validation. `change` fires on text fields when the value changed and the field loses focus or Enter is pressed. For checkboxes, radios, `<select>` and file inputs, `change` fires right away when the selection changes. React's `onChange` actually listens to `input`."
  },
  {
    id: "runtime-016",
    question: "What is the simplest way to lazy-load images?",
    theme: "Runtime & browser",
    subCategory: "Browser APIs",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Set `src` inside a `setTimeout`",
      "Add the `defer` attribute to the `<img>`",
      "Put every image inside `<noscript>`",
      "Add `loading=\"lazy\"` to the `<img>` and set `width` and `height`"
    ],
    correctAnswer: "Add `loading=\"lazy\"` to the `<img>` and set `width` and `height`",
    explanation: "Native lazy loading lets the browser fetch an image only when it gets close to the viewport. Setting dimensions (or `aspect-ratio`) reserves space and prevents layout shift. Don't lazy-load images that are visible on first screen, like the LCP hero image. For custom behaviour or older browsers, use `IntersectionObserver`."
  },
  {
    id: "runtime-017",
    question: "How do you lazy-load images manually without the `loading` attribute?",
    theme: "Runtime & browser",
    subCategory: "Browser APIs",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Listen to `scroll` and call `getBoundingClientRect()` on every image on each event",
      "Load all images in a hidden `<div>` first, then move them",
      "Use `fetch()` for every image at page load",
      "Keep the URL in `data-src` and move it to `src` when an `IntersectionObserver` reports the image entering the viewport"
    ],
    correctAnswer: "Keep the URL in `data-src` and move it to `src` when an `IntersectionObserver` reports the image entering the viewport",
    explanation: "`const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.src = e.target.dataset.src; io.unobserve(e.target); } }), { rootMargin: '200px' });` then observe each image. The observer runs off the main scroll path, unlike a `scroll` handler that measures layout on every event. `rootMargin` starts loading a bit before the image appears."
  }
];
