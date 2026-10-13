import type { DataTypesQuestion } from './types';

export const dataTypesQuestions: DataTypesQuestion[] = [
  {
    id: "types-001",
    question: "Which data types does JavaScript have?",
    theme: "Data types",
    subCategory: "Primitives & objects",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Five primitives (string, number, boolean, null, undefined) plus array and object",
      "Seven primitives (string, number, bigint, boolean, undefined, null, symbol) plus object",
      "Six types: string, number, boolean, object, array and function",
      "Eight primitives including array and function, with no separate object type"
    ],
    correctAnswer: "Seven primitives (string, number, bigint, boolean, undefined, null, symbol) plus object",
    explanation: "There are eight types in total: seven primitives (`string`, `number`, `bigint`, `boolean`, `undefined`, `null`, `symbol`) and `object`. Arrays, functions, dates and regular expressions are all objects. `typeof` returns 'function' for functions only as a convenience, and 'object' for `null` because of a historical bug."
  },
  {
    id: "types-002",
    question: "What is the key difference between a primitive and an object?",
    theme: "Data types",
    subCategory: "Primitives & objects",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Primitives are immutable and compared by value; objects are mutable and compared by reference",
      "Primitives are compared by reference; objects are compared by their contents",
      "Primitives cannot have methods called on them; objects can",
      "Primitives are always stored on the heap; objects are copied on every assignment"
    ],
    correctAnswer: "Primitives are immutable and compared by value; objects are mutable and compared by reference",
    explanation: "A primitive value can't be changed: `str.toUpperCase()` returns a new string. Assigning or passing a primitive copies the value. An object is a collection of properties that can be mutated, and a variable holds a reference to it: `const b = a` makes both names point to the same object, and `===` is true only for the same reference. Primitives can still call methods thanks to temporary wrapper objects."
  },
  {
    id: "types-003",
    question: "Which of these are all objects in JavaScript?",
    theme: "Data types",
    subCategory: "Primitives & objects",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Strings, numbers and booleans created with literals",
      "null, undefined and symbols",
      "Arrays, functions, dates and regular expressions",
      "Only values created with `{}` or `new Object()`"
    ],
    correctAnswer: "Arrays, functions, dates and regular expressions",
    explanation: "Everything that is not a primitive is an object. Common object types: plain objects, arrays, functions, `Date`, `RegExp`, `Map`/`Set`/`WeakMap`/`WeakSet`, `Error` and its subclasses, `Promise`, typed arrays, and wrapper objects like `new String('a')`. Literals such as `'a'`, `1` and `true` are primitives, and `null` is a primitive despite `typeof null === 'object'`."
  },
  {
    id: "types-004",
    question: "Is JavaScript statically or dynamically typed?",
    theme: "Data types",
    subCategory: "Primitives & objects",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Statically typed: the engine infers and fixes each variable's type at compile time",
      "Dynamically typed: types belong to values and are checked at runtime",
      "Statically typed in strict mode and dynamically typed otherwise",
      "Untyped: values have no types until TypeScript adds them"
    ],
    correctAnswer: "Dynamically typed: types belong to values and are checked at runtime",
    explanation: "A variable can hold a number now and a string later: `let x = 1; x = 'a';`. Types are attached to values, and type errors (like calling a non-function) appear only when the code runs. JavaScript is also weakly typed: operators silently convert values (`'5' * 2 === 10`). TypeScript adds static checking at build time, but it compiles to the same dynamically typed JavaScript."
  },
  {
    id: "types-005",
    question: "Which way of checking a type works for primitives and also tells arrays, `null` and dates apart?",
    theme: "Data types",
    subCategory: "Type checking",
    level: "medium",
    fourOptionsForAnAnswer: [
      "`typeof value`, which returns 'array', 'null' and 'date'",
      "`value instanceof Object`, which is true only for plain objects",
      "`value.constructor.name`, which also works for null and undefined",
      "`Object.prototype.toString.call(value)`, e.g. '[object Array]'"
    ],
    correctAnswer: "`Object.prototype.toString.call(value)`, e.g. '[object Array]'",
    explanation: "`typeof` is great for primitives and functions but returns 'object' for arrays, dates and `null`. `instanceof` checks the prototype chain, works only for objects and fails across realms (iframes). `value.constructor` throws on `null`/`undefined` and can be overwritten. `Object.prototype.toString.call(x)` returns '[object Array]', '[object Null]', '[object Date]' and so on for any value. In practice combine them: `typeof` for primitives, `Array.isArray` for arrays, `=== null` for null."
  },
  {
    id: "types-006",
    question: "What is the difference between `typeof` and `instanceof`?",
    theme: "Data types",
    subCategory: "Type checking",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`typeof` works only on objects; `instanceof` works only on primitives",
      "`typeof` returns a string naming the type; `instanceof` checks whether a constructor's prototype is in an object's prototype chain",
      "They are synonyms; `instanceof` is just the older syntax",
      "`typeof` checks the prototype chain; `instanceof` returns the type name as a string"
    ],
    correctAnswer: "`typeof` returns a string naming the type; `instanceof` checks whether a constructor's prototype is in an object's prototype chain",
    explanation: "`typeof 1` is 'number', `typeof []` is 'object'. `[] instanceof Array` is true because `Array.prototype` is in the array's prototype chain, and `1 instanceof Number` is false because primitives aren't objects. Use `typeof` for primitives and functions, `instanceof` for class instances."
  },
  {
    id: "types-007",
    question: "Why does `typeof null` return 'object'?",
    theme: "Data types",
    subCategory: "Type checking",
    level: "easy",
    fourOptionsForAnAnswer: [
      "null is an empty object instance created by `Object.create(null)`",
      "It is a bug from the first JavaScript implementation, kept for backward compatibility",
      "null inherits from `Object.prototype`, so it is an object",
      "null is converted to `{}` before `typeof` runs"
    ],
    correctAnswer: "It is a bug from the first JavaScript implementation, kept for backward compatibility",
    explanation: "In the original engine, values carried a type tag and objects had tag 0. `null` was the null pointer, which also read as 0, so `typeof` reported 'object'. Fixing it would break existing sites, so it stays. `null` is a primitive with no properties. To test for it, use `value === null`."
  },
  {
    id: "types-008",
    question: "What is the most reliable way to check whether a value is an array?",
    theme: "Data types",
    subCategory: "Type checking",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`typeof value === 'array'`",
      "`value instanceof Object`",
      "`Array.isArray(value)`",
      "`value.length !== undefined`"
    ],
    correctAnswer: "`Array.isArray(value)`",
    explanation: "`typeof []` is 'object', `instanceof Object` is also true for plain objects, and strings or array-likes have a `length` too. `value instanceof Array` mostly works but fails for arrays from another realm, such as an iframe, because they have a different `Array.prototype`. `Array.isArray` checks the internal array type and works everywhere."
  },
  {
    id: "types-009",
    question: "What is the difference between `null` and `undefined`?",
    theme: "Data types",
    subCategory: "Special values",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`null` means a variable is undeclared; `undefined` means it is declared but empty",
      "They are identical: `null === undefined` is true",
      "`undefined` is an object; `null` is a primitive",
      "`undefined` means a value was never assigned; `null` is an intentional 'no value' set by the programmer"
    ],
    correctAnswer: "`undefined` means a value was never assigned; `null` is an intentional 'no value' set by the programmer",
    explanation: "The engine gives you `undefined` for declared but unassigned variables, missing properties, missing arguments and functions without `return`. `null` is something you assign deliberately. Differences: `typeof undefined` is 'undefined' but `typeof null` is 'object'; `null == undefined` is true but `null === undefined` is false; `Number(null)` is 0 but `Number(undefined)` is `NaN`; default parameters apply for `undefined` but not for `null`."
  },
  {
    id: "types-010",
    question: "How do you reliably check that a value is `NaN`?",
    theme: "Data types",
    subCategory: "Special values",
    level: "medium",
    fourOptionsForAnAnswer: [
      "`value === NaN`",
      "`typeof value === 'NaN'`",
      "`isNaN(value)`, which never gives false positives",
      "`Number.isNaN(value)` or `Object.is(value, NaN)`"
    ],
    correctAnswer: "`Number.isNaN(value)` or `Object.is(value, NaN)`",
    explanation: "`NaN` ('Not a Number') is a number value produced by invalid math such as `0 / 0` or `Number('abc')`, and `typeof NaN` is 'number'. It is the only value not equal to itself, so `NaN === NaN` is false. The global `isNaN` converts its argument first, so `isNaN('abc')` is true. `Number.isNaN` does no conversion, and `Object.is(NaN, NaN)` is true."
  },
  {
    id: "types-011",
    question: "What is a `Symbol` and what is it typically used for?",
    theme: "Data types",
    subCategory: "Special values",
    level: "medium",
    fourOptionsForAnAnswer: [
      "A string alias that is interned, so symbols with equal descriptions are always equal",
      "A unique primitive used as a property key that can't collide with other keys, e.g. `Symbol.iterator`",
      "An object wrapper that makes properties fully private and inaccessible",
      "A numeric ID the engine assigns to each object for use as a Map key"
    ],
    correctAnswer: "A unique primitive used as a property key that can't collide with other keys, e.g. `Symbol.iterator`",
    explanation: "Every `Symbol('id')` call creates a new unique value: `Symbol('a') !== Symbol('a')`. Symbol keys don't clash with string keys or with keys other code adds, and they are skipped by `for...in`, `Object.keys` and `JSON.stringify`. They are not private, though: `Object.getOwnPropertySymbols` reveals them. Well-known symbols like `Symbol.iterator` and `Symbol.toPrimitive` customise language behaviour. `Symbol.for('key')` returns a shared symbol from a global registry."
  },
  {
    id: "types-012",
    question: "How can you call `'abc'.toUpperCase()` if strings are primitives?",
    theme: "Data types",
    subCategory: "Primitives & objects",
    level: "medium",
    fourOptionsForAnAnswer: [
      "String literals are actually objects; only numbers are primitives",
      "Methods are copied onto every string primitive when it is created",
      "The engine temporarily wraps the primitive in a `String` object to look up the method, then discards it",
      "The dot operator permanently converts the string into a `String` object"
    ],
    correctAnswer: "The engine temporarily wraps the primitive in a `String` object to look up the method, then discards it",
    explanation: "This temporary object is called a wrapper object. Accessing a property on a string, number, boolean, bigint or symbol creates a wrapper (`String`, `Number`, `Boolean`, `BigInt`, `Symbol`) whose prototype holds the methods. The wrapper is thrown away afterwards, so `str.custom = 1` is silently lost. `null` and `undefined` have no wrappers, which is why `null.x` throws."
  },
  {
    id: "types-013",
    question: "What does `typeof new Number(5)` return, and how does it become a primitive again?",
    theme: "Data types",
    subCategory: "Primitives & objects",
    level: "medium",
    fourOptionsForAnAnswer: [
      "'number'; it is no different from the literal 5",
      "'object'; it can never be turned back into a primitive",
      "'number'; unboxing happens only through `toString()`",
      "'object'; it is unboxed through `valueOf()`, e.g. in arithmetic"
    ],
    correctAnswer: "'object'; it is unboxed through `valueOf()`, e.g. in arithmetic",
    explanation: "Boxing wraps a primitive in an object (`new Number(5)`, `Object(5)`). The engine also does it implicitly when you call a method on a primitive. Unboxing extracts the primitive with `valueOf()`, which operators call automatically: `new Number(5) + 1` is 6. Avoid creating wrappers yourself: `new Number(5) === 5` is false, and `new Boolean(false)` is truthy."
  },
  {
    id: "types-014",
    question: "Which list contains exactly the falsy values in JavaScript?",
    theme: "Data types",
    subCategory: "Coercion",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`false`, `0`, `''`, `null`, `undefined`, `NaN`, `[]`, `{}`",
      "`false`, `0`, `-0`, `0n`, `''`, `null`, `undefined`, `NaN`",
      "`false`, `0`, `'0'`, `'false'`, `null`, `undefined`",
      "Only `false`, `null` and `undefined`; numbers and strings are always truthy"
    ],
    correctAnswer: "`false`, `0`, `-0`, `0n`, `''`, `null`, `undefined`, `NaN`",
    explanation: "Any value can be converted to a boolean with `Boolean(value)` or `!!value`, and conditions do it implicitly. Only these values become `false`; everything else is truthy, including `'0'`, `'false'`, `' '`, `[]`, `{}` and `new Boolean(false)`. (The legacy `document.all` is also falsy.)"
  },
  {
    id: "types-015",
    question: "Implicit coercion happens when operators convert operands for you. What do `'5' - 2` and `'5' + 2` evaluate to?",
    theme: "Data types",
    subCategory: "Coercion",
    level: "medium",
    fourOptionsForAnAnswer: [
      "`3` and `7`",
      "`'3'` and `'52'`",
      "`3` and `'52'`",
      "`NaN` and `'52'`"
    ],
    correctAnswer: "`3` and `'52'`",
    explanation: "Explicit coercion is when you convert on purpose: `Number('5')`, `String(5)`, `Boolean(x)`, `parseInt`. Implicit coercion is done by operators: `-`, `*`, `/` and comparisons like `<` convert to numbers, so `'5' - 2` is 3. Binary `+` concatenates as soon as either operand is a string, so `'5' + 2` is '52'. `==` and conditions also coerce. Explicit conversion makes intent clear and avoids surprises."
  },
  {
    id: "types-016",
    question: "What does this do?\n\nif (new Boolean(false)) console.log('yes');",
    theme: "Data types",
    subCategory: "Coercion",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Logs 'yes', because every object, even a `Boolean` wrapper of false, is truthy",
      "Logs nothing, because the wrapper is unboxed to `false`",
      "Throws a `TypeError`, because `Boolean` can't be called with `new`",
      "Logs nothing, because `new Boolean` returns `undefined`"
    ],
    correctAnswer: "Logs 'yes', because every object, even a `Boolean` wrapper of false, is truthy",
    explanation: "Conversion to boolean never calls `valueOf()`: all objects are truthy. `new Boolean(false)` is an object, so the condition passes. Use `Boolean(x)` without `new` to get a primitive boolean."
  },
  {
    id: "types-017",
    question: "How does a `WeakMap` differ from a `Map`?",
    theme: "Data types",
    subCategory: "Collections",
    level: "medium",
    fourOptionsForAnAnswer: [
      "It holds values weakly but keys strongly, and supports `.size`",
      "It is a faster `Map` limited to string keys",
      "Its keys must be objects held weakly, so entries can be garbage-collected, and it isn't iterable",
      "It deletes its entries automatically after a timeout"
    ],
    correctAnswer: "Its keys must be objects held weakly, so entries can be garbage-collected, and it isn't iterable",
    explanation: "A `Map` accepts any key, keeps insertion order, has `.size` and can be iterated. A `WeakMap` accepts only objects (and non-registered symbols) as keys and doesn't keep them alive: once nothing else references a key, its entry can be collected. Because of that it has no `.size`, `keys()` or iteration. Typical use: attaching private data or caches to objects without leaking memory. A plain object `{}` converts keys to strings and has a prototype with inherited keys."
  },
  {
    id: "types-018",
    question: "When is a `Map` a better choice than a plain object?",
    theme: "Data types",
    subCategory: "Collections",
    level: "medium",
    fourOptionsForAnAnswer: [
      "When you need JSON serialization out of the box",
      "When keys aren't strings, order and size matter, or entries are added and removed often",
      "When you want methods inherited through the prototype",
      "When all keys are known in advance and never change"
    ],
    correctAnswer: "When keys aren't strings, order and size matter, or entries are added and removed often",
    explanation: "`Map` keys can be any value (objects, numbers, functions), it has `.size`, it is directly iterable in insertion order, it has no inherited keys like `toString`, and it is optimised for frequent additions and deletions. Plain objects are better for fixed, record-like data: they have literal syntax, work with `JSON.stringify` and destructuring, and are what most APIs expect."
  },
  {
    id: "types-019",
    question: "What happens to these keys?\n\nconst obj = {};\nobj[1] = 'a';\nobj['1'] = 'b';\n\nconst map = new Map();\nmap.set(1, 'a');\nmap.set('1', 'b');",
    theme: "Data types",
    subCategory: "Collections",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Both store two different keys",
      "The object stores one key '1'; the Map stores two different keys",
      "Both store one key, because Map also converts keys to strings",
      "The object stores two keys; the Map throws on numeric keys"
    ],
    correctAnswer: "The object stores one key '1'; the Map stores two different keys",
    explanation: "Object property keys are always strings or symbols, so `1` becomes '1' and the second assignment overwrites the first. `Map` compares keys with SameValueZero, so the number `1` and the string '1' are different keys and `map.size` is 2."
  },
  {
    id: "types-020",
    question: "How does a `Set` differ from an array?",
    theme: "Data types",
    subCategory: "Collections",
    level: "easy",
    fourOptionsForAnAnswer: [
      "It stores only unique values, has no indexes, and `has()` is fast instead of a linear search",
      "It keeps values sorted and allows duplicates",
      "It supports index access like `set[0]` but can't be iterated",
      "It can only hold primitives, not objects"
    ],
    correctAnswer: "It stores only unique values, has no indexes, and `has()` is fast instead of a linear search",
    explanation: "A `Set` keeps unique values in insertion order. Adding an existing value does nothing, and uniqueness uses SameValueZero (so `NaN` equals `NaN`, but two different objects are different). It has `add`, `has`, `delete`, `size` and is iterable, but no indexes or array methods. A common idiom removes duplicates from an array: `[...new Set(arr)]`."
  },
  {
    id: "types-021",
    question: "Which pair converts an object to a JSON string and back?",
    theme: "Data types",
    subCategory: "JSON",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`JSON.parse(obj)` and `JSON.stringify(str)`",
      "`obj.toJSON()` and `String.toObject(str)`",
      "`JSON.encode(obj)` and `JSON.decode(str)`",
      "`JSON.stringify(obj)` and `JSON.parse(str)`"
    ],
    correctAnswer: "`JSON.stringify(obj)` and `JSON.parse(str)`",
    explanation: "JSON (JavaScript Object Notation) is a text format for data: objects, arrays, strings, numbers, booleans and `null`, with double-quoted keys. `JSON.stringify(value, replacer, indent)` produces a string; `JSON.parse(text, reviver)` builds the value back and throws a `SyntaxError` on invalid input. It is the usual format for APIs and `localStorage`."
  },
  {
    id: "types-022",
    question: "What does this return?\n\nJSON.stringify({ a: undefined, b: () => 1, c: new Date(0), d: NaN })",
    theme: "Data types",
    subCategory: "JSON",
    level: "medium",
    fourOptionsForAnAnswer: [
      '\'{"a":undefined,"b":"() => 1","c":"1970-01-01T00:00:00.000Z","d":NaN}\'',
      '\'{"a":null,"b":null,"c":{},"d":null}\'',
      '\'{"c":"1970-01-01T00:00:00.000Z","d":null}\'',
      '\'{"c":{},"d":"NaN"}\''
    ],
    correctAnswer: '\'{"c":"1970-01-01T00:00:00.000Z","d":null}\'',
    explanation: "JSON has no `undefined`, functions or symbols, so properties with those values are skipped (in arrays they become `null`). `NaN` and `Infinity` become `null`. `Date` has a `toJSON` method that returns an ISO string. Other things lost in a JSON round trip: `Map`/`Set` (become `{}`), class prototypes and `BigInt` (throws)."
  }
];
