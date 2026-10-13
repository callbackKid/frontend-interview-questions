import type { ObjectsOopQuestion } from './types';

export const objectsOopQuestions: ObjectsOopQuestion[] = [
  {
    id: "oop-001",
    question: "Which list shows ways to create an object in JavaScript?",
    theme: "Objects & OOP",
    subCategory: "Creating objects",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Only `{}` and `new Object()`",
      "`{}`, `JSON.stringify()` and `Object.keys()`",
      "Only classes; constructor functions were removed in ES2015",
      "An object literal, `new` with a constructor or class, `Object.create(proto)`, and factory functions"
    ],
    correctAnswer: "An object literal, `new` with a constructor or class, `Object.create(proto)`, and factory functions",
    explanation: "Object literal `{ a: 1 }` is the most common. A constructor function or `class` with `new` creates instances that share methods through the prototype. `Object.create(proto)` sets the prototype directly. A factory function returns a new literal and can use closures for private state. Others: `Object.fromEntries`, `Object.assign({}, src)`, `structuredClone`, and `new Object()` (rarely used)."
  },
  {
    id: "oop-002",
    question: "What does `new Fn()` do?",
    theme: "Objects & OOP",
    subCategory: "Creating objects",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Copies `Fn` and its prototype into a new function",
      "Creates an object whose prototype is `Fn.prototype`, runs `Fn` with `this` set to it, and returns it unless `Fn` returns another object",
      "Calls `Fn` with `this` set to the global object and returns `undefined`",
      "Creates a deep copy of the object that `Fn` returns"
    ],
    correctAnswer: "Creates an object whose prototype is `Fn.prototype`, runs `Fn` with `this` set to it, and returns it unless `Fn` returns another object",
    explanation: "`new` is used to create instances from a constructor or class. Under the hood: 1) create an empty object; 2) set its `[[Prototype]]` to `Fn.prototype`; 3) call `Fn` with `this` bound to it; 4) return it, unless `Fn` explicitly returns an object. Roughly: `const o = Object.create(Fn.prototype); const r = Fn.apply(o, args); return r instanceof Object ? r : o;`. Arrow functions and methods can't be used with `new`."
  },
  {
    id: "oop-003",
    question: "What does this log?\n\nfunction A() {\n  this.x = 1;\n  return { x: 2 };\n}\nfunction B() {\n  this.x = 1;\n  return 2;\n}\nconsole.log(new A().x, new B().x);",
    theme: "Objects & OOP",
    subCategory: "Creating objects",
    level: "medium",
    fourOptionsForAnAnswer: [
      "1 1",
      "2 2",
      "2 1",
      "1 2"
    ],
    correctAnswer: "2 1",
    explanation: "If a constructor returns an object, `new` returns that object instead of `this`, so `new A()` gives `{ x: 2 }`. A returned primitive is ignored and `new B()` returns `this` with `x = 1`."
  },
  {
    id: "oop-004",
    question: "Which call turns `[['a', 1], ['b', 2]]` into `{ a: 1, b: 2 }`?",
    theme: "Objects & OOP",
    subCategory: "Creating objects",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`Object.fromEntries(arr)`",
      "`Object.assign(arr)`",
      "`{ ...arr }`",
      "`Object.keys(arr)`"
    ],
    correctAnswer: "`Object.fromEntries(arr)`",
    explanation: "`Object.fromEntries` takes key/value pairs (also a `Map`). Other ways to turn an array into an object: `arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {})` to index by a field, a `for...of` loop, or `{ ...arr }` / `Object.assign({}, arr)`, which use indexes as keys: `{ 0: ['a', 1], 1: ['b', 2] }`."
  },
  {
    id: "oop-005",
    question: "What is an object's prototype?",
    theme: "Objects & OOP",
    subCategory: "Prototypes & inheritance",
    level: "easy",
    fourOptionsForAnAnswer: [
      "A copy of the object made when it is created",
      "Another object it is linked to, where property lookup continues when the object itself doesn't have the property",
      "The class the object was declared in",
      "The list of the object's own property names"
    ],
    correctAnswer: "Another object it is linked to, where property lookup continues when the object itself doesn't have the property",
    explanation: "Every object has an internal `[[Prototype]]` link to another object or `null`. Methods like `arr.map` and `obj.toString` aren't on the object itself; they are found on `Array.prototype` and `Object.prototype`. Read it with `Object.getPrototypeOf(obj)` (the legacy `__proto__` also works) and set it with `Object.create` or `Object.setPrototypeOf`."
  },
  {
    id: "oop-006",
    question: "What is the difference between `Fn.prototype` and `Object.getPrototypeOf(obj)`?",
    theme: "Objects & OOP",
    subCategory: "Prototypes & inheritance",
    level: "medium",
    fourOptionsForAnAnswer: [
      "They are always the same object",
      "`Fn.prototype` is `Fn`'s own prototype; `getPrototypeOf` returns the constructor",
      "`Fn.prototype` becomes the prototype of instances created with `new Fn()`; `getPrototypeOf` returns an object's actual `[[Prototype]]`",
      "`Fn.prototype` exists only on classes; `getPrototypeOf` only on plain objects"
    ],
    correctAnswer: "`Fn.prototype` becomes the prototype of instances created with `new Fn()`; `getPrototypeOf` returns an object's actual `[[Prototype]]`",
    explanation: "The `prototype` property exists on regular functions and classes and is used only by `new`. So for `const u = new User()`, `Object.getPrototypeOf(u) === User.prototype`. The function's own prototype is something else: `Object.getPrototypeOf(User) === Function.prototype`. `User.prototype.constructor` points back to `User`."
  },
  {
    id: "oop-007",
    question: "With prototypal inheritance, what happens when you read `child.greet` and `child` has no own `greet`?",
    theme: "Objects & OOP",
    subCategory: "Prototypes & inheritance",
    level: "medium",
    fourOptionsForAnAnswer: [
      "A `ReferenceError` is thrown",
      "`greet` is copied from the parent when `child` is created, so it's always found",
      "The engine searches every object in memory for a `greet`",
      "The engine walks up the prototype chain and uses the first `greet` it finds, or returns `undefined` at the end"
    ],
    correctAnswer: "The engine walks up the prototype chain and uses the first `greet` it finds, or returns `undefined` at the end",
    explanation: "In prototypal inheritance objects inherit directly from other objects through links, not copies. A method on the prototype is shared by all instances and called with `this` set to the instance. Writing `child.greet = ...` creates an own property that shadows the inherited one. `class ... extends` is syntax over the same mechanism."
  },
  {
    id: "oop-008",
    question: "How do you create an object with no prototype at all?",
    theme: "Objects & OOP",
    subCategory: "Prototypes & inheritance",
    level: "medium",
    fourOptionsForAnAnswer: [
      "`{}`",
      "`new Object(null)`",
      "`Object.create(null)`",
      "`Object.create({})`"
    ],
    correctAnswer: "`Object.create(null)`",
    explanation: "`Object.create(null)` returns an object whose `[[Prototype]]` is `null`, so it has no `toString`, `hasOwnProperty` or other inherited keys. It is a clean dictionary where a key like 'constructor' or '__proto__' can't clash with built-ins. `{}` and `new Object(null)` both inherit from `Object.prototype`."
  },
  {
    id: "oop-009",
    question: "What does `Object.create(proto, descriptors)` do?",
    theme: "Objects & OOP",
    subCategory: "Prototypes & inheritance",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Creates a new object whose prototype is `proto`, optionally with properties from descriptors, without calling any constructor",
      "Deep-copies `proto` into a new object",
      "Calls `proto` as a constructor with `new`",
      "Creates a new class that extends `proto`"
    ],
    correctAnswer: "Creates a new object whose prototype is `proto`, optionally with properties from descriptors, without calling any constructor",
    explanation: "Example: `const animal = { speak() { return this.name; } }; const dog = Object.create(animal); dog.name = 'Rex'; dog.speak()` returns 'Rex'. The second argument takes property descriptors like `{ id: { value: 1, writable: false, enumerable: true } }`. It was the classic way to set up inheritance before `class`, and `Object.create(null)` makes prototype-less objects."
  },
  {
    id: "oop-010",
    question: "Which check is true for a property that exists but holds `undefined`?",
    theme: "Objects & OOP",
    subCategory: "Properties",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`obj.key !== undefined`",
      "`Object.hasOwn(obj, 'key')`",
      "`Boolean(obj.key)`",
      "`obj.key != null`"
    ],
    correctAnswer: "`Object.hasOwn(obj, 'key')`",
    explanation: "Comparing the value can't tell a missing property from one set to `undefined`. Ways to check existence: `Object.hasOwn(obj, 'key')` or `obj.hasOwnProperty('key')` for own properties, `'key' in obj` to include inherited ones, or `Object.keys(obj).includes('key')` for own enumerable ones. `Object.hasOwn` also works on objects without a prototype."
  },
  {
    id: "oop-011",
    question: "What is the difference between `'key' in obj` and `obj.hasOwnProperty('key')`?",
    theme: "Objects & OOP",
    subCategory: "Properties",
    level: "medium",
    fourOptionsForAnAnswer: [
      "`hasOwnProperty` also finds inherited properties; `in` checks only own properties",
      "`in` works only for arrays",
      "`in` also finds inherited properties; `hasOwnProperty` checks only the object's own properties",
      "They are identical"
    ],
    correctAnswer: "`in` also finds inherited properties; `hasOwnProperty` checks only the object's own properties",
    explanation: "`'toString' in {}` is true because it is inherited from `Object.prototype`, but `({}).hasOwnProperty('toString')` is false. `hasOwnProperty` can be shadowed or missing (on `Object.create(null)`), so `Object.hasOwn(obj, key)` is the safer modern form. `for...in` also walks inherited enumerable properties."
  },
  {
    id: "oop-012",
    question: "What is the difference between `Object.freeze()` and `Object.seal()`?",
    theme: "Objects & OOP",
    subCategory: "Immutability",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`freeze` allows changing values; `seal` doesn't",
      "`seal` makes nested objects immutable too; `freeze` doesn't",
      "`freeze` works only on arrays; `seal` only on objects",
      "Both forbid adding and deleting properties; `seal` still allows changing existing values, `freeze` doesn't"
    ],
    correctAnswer: "Both forbid adding and deleting properties; `seal` still allows changing existing values, `freeze` doesn't",
    explanation: "`Object.preventExtensions` blocks new properties; `seal` also makes properties non-configurable (no delete); `freeze` also makes them read-only. All three are shallow. Check with `Object.isFrozen` / `Object.isSealed`. Violations fail silently in sloppy mode and throw a `TypeError` in strict mode."
  },
  {
    id: "oop-013",
    question: "What is `Object.seal()` useful for?",
    theme: "Objects & OOP",
    subCategory: "Immutability",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Encrypting an object's values",
      "Fixing an object's shape: no properties can be added or removed, but existing ones stay writable",
      "Making an object and all nested objects fully read-only",
      "Hiding properties from `Object.keys`"
    ],
    correctAnswer: "Fixing an object's shape: no properties can be added or removed, but existing ones stay writable",
    explanation: "A sealed object is good for config or state objects with a known set of fields: typos like `settings.colr = 'red'` don't silently add a new key (they throw in strict mode), while `settings.color = 'red'` still works."
  },
  {
    id: "oop-014",
    question: "What does this log in non-strict mode?\n\nconst o = Object.freeze({ a: 1, inner: { b: 1 } });\no.a = 2;\no.inner.b = 2;\nconsole.log(o.a, o.inner.b);",
    theme: "Objects & OOP",
    subCategory: "Immutability",
    level: "hard",
    fourOptionsForAnAnswer: [
      "2 2",
      "1 1",
      "1 2",
      "TypeError: Cannot assign to read only property"
    ],
    correctAnswer: "1 2",
    explanation: "`Object.freeze` is shallow: `o.a` can't change (the write is silently ignored outside strict mode), but `o.inner` is a separate, unfrozen object. A deep freeze has to recurse into nested objects and freeze each one."
  },
  {
    id: "oop-015",
    question: "What is a trade-off of immutable data?",
    theme: "Objects & OOP",
    subCategory: "Immutability",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Changes are predictable and easy to detect by reference, but each update creates new objects",
      "It makes code faster in every case, with no downsides",
      "It prevents all bugs, but works only with classes",
      "It saves memory, but breaks `===` comparisons"
    ],
    correctAnswer: "Changes are predictable and easy to detect by reference, but each update creates new objects",
    explanation: "Pros: no hidden mutations from shared references, simple change detection (`prev !== next`, which React and Redux rely on), easy undo/history, safer concurrency. Cons: more allocations and copying, verbose updates of nested data. How to achieve it: `const`, spread and `Object.assign` to make updated copies, non-mutating methods (`map`, `filter`, `toSorted`, `with`), `Object.freeze`, and libraries like Immer."
  },
  {
    id: "oop-016",
    question: "How do you check whether two objects have the same content?",
    theme: "Objects & OOP",
    subCategory: "Equality & copying",
    level: "medium",
    fourOptionsForAnAnswer: [
      "`a == b`, because loose equality compares contents",
      "`Object.is(a, b)`",
      "Compare their keys and values, recursing into nested objects, or use a helper like lodash `isEqual`",
      "`a.valueOf() === b.valueOf()`"
    ],
    correctAnswer: "Compare their keys and values, recursing into nested objects, or use a helper like lodash `isEqual`",
    explanation: "`==`, `===` and `Object.is` compare references for objects. A deep comparison checks that both have the same keys and that each value is equal, recursing for nested objects and arrays. `JSON.stringify(a) === JSON.stringify(b)` is a quick hack that fails with different key order, `undefined` values, dates and functions."
  },
  {
    id: "oop-017",
    question: "What is the difference between a shallow and a deep copy, and how do you make each?",
    theme: "Objects & OOP",
    subCategory: "Equality & copying",
    level: "medium",
    fourOptionsForAnAnswer: [
      "A shallow copy (`{ ...obj }`, `Object.assign`) shares nested objects; a deep copy (`structuredClone(obj)`) copies them too",
      "A shallow copy copies only primitives and drops nested objects; a deep copy is `const copy = obj`",
      "Both share nested objects; a deep copy also copies methods",
      "A deep copy (`{ ...obj }`) copies everything; a shallow copy is `structuredClone`"
    ],
    correctAnswer: "A shallow copy (`{ ...obj }`, `Object.assign`) shares nested objects; a deep copy (`structuredClone(obj)`) copies them too",
    explanation: "A shallow copy duplicates only the top level, so changing `copy.inner.x` also changes the original. Shallow: spread, `Object.assign`, `arr.slice()`, `Array.from`. Deep: `structuredClone` (handles dates, maps, sets and cycles, but not functions or DOM nodes), `JSON.parse(JSON.stringify(obj))` (loses dates, `undefined`, functions), lodash `cloneDeep`, or a recursive function."
  },
  {
    id: "oop-018",
    question: "What is the difference between native and host objects?",
    theme: "Objects & OOP",
    subCategory: "Paradigms & environment",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Native objects are written in C++; host objects are written in JavaScript",
      "Host objects are created with `new`; native objects with literals",
      "There is no difference since ES2015",
      "Native objects are defined by the ECMAScript spec (`Array`, `Date`); host objects come from the environment (`window`, `document`, `process`)"
    ],
    correctAnswer: "Native objects are defined by the ECMAScript spec (`Array`, `Date`); host objects come from the environment (`window`, `document`, `process`)",
    explanation: "Native (built-in) objects exist in every JavaScript engine: `Object`, `Array`, `Function`, `Promise`, `Math`, `JSON`. Host objects are provided by the runtime: the browser gives `window`, `document`, `fetch`, `localStorage`; Node.js gives `process`, `Buffer`, `require`. Host objects differ between environments, so browser code using `document` doesn't run in Node."
  },
  {
    id: "oop-019",
    question: "Why is adding methods to `Array.prototype` considered bad practice?",
    theme: "Objects & OOP",
    subCategory: "Prototypes & inheritance",
    level: "medium",
    fourOptionsForAnAnswer: [
      "It makes arrays immutable",
      "It can clash with future standard methods or other libraries, and it changes behaviour for all code on the page",
      "Browsers throw a `TypeError` when prototypes are changed",
      "Prototype methods can't access `this`"
    ],
    correctAnswer: "It can clash with future standard methods or other libraries, and it changes behaviour for all code on the page",
    explanation: "Extending built-ins (monkey patching) affects every array in every script. If the language later adds a method with the same name but different behaviour, sites break. MooTools' `Array.prototype.flatten` forced the standard to rename `flatten` to `flat`. Added enumerable properties also appear in `for...in`. Use utility functions or subclasses instead. Polyfills of standard features that follow the spec exactly are the accepted exception."
  },
  {
    id: "oop-020",
    question: "How can you make truly private fields in a JavaScript class?",
    theme: "Objects & OOP",
    subCategory: "Classes & encapsulation",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Prefix the name with `_`",
      "Freeze the instance with `Object.freeze`",
      "Use the `#field` syntax, or keep data in a closure or a `WeakMap` outside the object",
      "Declare the field with the `private` keyword"
    ],
    correctAnswer: "Use the `#field` syntax, or keep data in a closure or a `WeakMap` outside the object",
    explanation: "`class Account { #balance = 0; #log() {} deposit(x) { this.#balance += x; } }`: `#` fields and methods are accessible only inside the class body; outside access is a syntax error. Before that: closures in factory functions or constructors (`function createUser() { let secret; return { get: () => secret }; }`) and `WeakMap`s keyed by the instance. `_name` is only a naming convention, and TypeScript's `private` is checked only at compile time."
  },
  {
    id: "oop-021",
    question: "What is `Proxy` used for?",
    theme: "Objects & OOP",
    subCategory: "Classes & encapsulation",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Sending network requests through a proxy server",
      "Wrapping an object to intercept operations like get, set and delete with handler traps, e.g. for validation or reactivity",
      "Creating a deep copy that updates when the original changes",
      "Making an object immutable"
    ],
    correctAnswer: "Wrapping an object to intercept operations like get, set and delete with handler traps, e.g. for validation or reactivity",
    explanation: "`new Proxy(target, handler)` returns a wrapper; operations on it call handler traps (`get`, `set`, `has`, `deleteProperty`, `apply`, `construct` …) that can change the result or forward to the target with `Reflect`. Uses: validation, default values, logging, read-only views, and reactivity systems like Vue 3 and MobX that track property reads and writes."
  },
  {
    id: "oop-022",
    question: "What does a standard decorator like `@logged` on a class method receive, and what can it return?",
    theme: "Objects & OOP",
    subCategory: "Classes & encapsulation",
    level: "hard",
    fourOptionsForAnAnswer: [
      "It receives the class source code as a string and returns modified code",
      "It receives nothing and must return `true` to enable the method",
      "It receives the instance and returns a new instance",
      "It receives the method and a context object, and can return a replacement function that wraps it"
    ],
    correctAnswer: "It receives the method and a context object, and can return a replacement function that wraps it",
    explanation: "A decorator is a function applied with `@` to a class, method, field or accessor. `function logged(fn, context) { return function (...args) { console.log(context.name); return fn.apply(this, args); }; }`. The context has the member's `name`, `kind`, `static`/`private` flags and `addInitializer`. Uses: logging, memoization, binding, validation, dependency injection. Decorators are a TC39 proposal (Stage 3) supported by TypeScript 5+ and Babel; check native browser support before shipping them untranspiled. Older TypeScript 'experimentalDecorators' use a different signature."
  },
  {
    id: "oop-023",
    question: "Which programming paradigms does JavaScript support?",
    theme: "Objects & OOP",
    subCategory: "Paradigms & environment",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Only object-oriented, because everything is an object",
      "Only functional, because functions are first-class",
      "Several: imperative/procedural, object-oriented (prototype-based) and functional",
      "Only logic programming"
    ],
    correctAnswer: "Several: imperative/procedural, object-oriented (prototype-based) and functional",
    explanation: "JavaScript is multi-paradigm. Imperative: step-by-step loops and mutations. Object-oriented: objects, prototypes and classes with encapsulation, inheritance and polymorphism. Functional: first-class functions, closures, pure functions, `map`/`filter`/`reduce`, immutability. It is also event-driven and asynchronous (callbacks, promises, `async/await`), and declarative styles are common in UI libraries like React."
  }
];
