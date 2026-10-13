import type { TypeScriptQuestion } from './types';

export const typescriptQuestions: TypeScriptQuestion[] = [
  {
    id: "ts-001",
    question: "What is TypeScript, and why use it?",
    theme: "TypeScript",
    subCategory: "Fundamentals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "A new runtime that replaces Node.js and runs `.ts` files faster",
      "A superset of JavaScript that adds static types, checked at build time, to catch errors early and improve tooling",
      "A framework for building user interfaces, like React",
      "A JavaScript linter that only enforces code style"
    ],
    correctAnswer: "A superset of JavaScript that adds static types, checked at build time, to catch errors early and improve tooling",
    explanation: "TypeScript, made by Microsoft, is JavaScript plus a type system. The compiler (`tsc`) checks types and then emits plain JavaScript with the types removed, so types have no runtime cost or effect. Benefits: errors like typos, wrong arguments and `undefined` access are found before running; editors give accurate autocomplete, navigation and refactoring; types document the code and make large codebases and teams safer to change."
  },
  {
    id: "ts-002",
    question: "How does TypeScript differ from JavaScript?",
    theme: "TypeScript",
    subCategory: "Fundamentals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "TypeScript has different runtime behaviour for operators like `+` and `==`",
      "TypeScript code runs directly in browsers without compilation",
      "TypeScript adds type annotations and type checking at compile time; after compilation it's ordinary JavaScript with the same runtime behaviour",
      "TypeScript removes prototypes and uses classes only"
    ],
    correctAnswer: "TypeScript adds type annotations and type checking at compile time; after compilation it's ordinary JavaScript with the same runtime behaviour",
    explanation: "Every valid JavaScript program is (mostly) valid TypeScript. TypeScript adds annotations, interfaces, generics, enums, access modifiers and other type-level features, and needs a compile step (tsc, esbuild, swc, Babel, or Node's type stripping). Types are erased, so they can't be checked at runtime: data from APIs still needs validation, e.g. with Zod. A few features (enums, namespaces, parameter properties) do emit code."
  },
  {
    id: "ts-003",
    question: "What is static typing?",
    theme: "TypeScript",
    subCategory: "Fundamentals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Checking the types of variables and expressions before the code runs, at compile time",
      "Typing that never allows a variable's value to change",
      "Checking types only when the code is executed",
      "Declaring every variable with `static`"
    ],
    correctAnswer: "Checking the types of variables and expressions before the code runs, at compile time",
    explanation: "In a statically typed language each variable and expression has a type known before execution, and mismatches are compile errors. JavaScript is dynamically typed: types belong to values and problems appear at runtime. TypeScript is statically typed but gradual (you can opt out with `any`) and structural: compatibility depends on an object's shape, not its declared name."
  },
  {
    id: "ts-004",
    question: "Which are basic types in TypeScript?",
    theme: "TypeScript",
    subCategory: "Basic types",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`int`, `float`, `char`, `string`",
      "`string`, `number`, `boolean`, `bigint`, `symbol`, `null`, `undefined`, plus `any`, `unknown`, `void`, `never`, `object`, arrays and tuples",
      "`String`, `Number` and `Boolean` only",
      "`text`, `integer`, `decimal`, `date`"
    ],
    correctAnswer: "`string`, `number`, `boolean`, `bigint`, `symbol`, `null`, `undefined`, plus `any`, `unknown`, `void`, `never`, `object`, arrays and tuples",
    explanation: "The primitive types mirror JavaScript's primitives; `number` covers integers and floats. Arrays are `string[]` or `Array<string>`, tuples `[string, number]`. Special types: `any` (opt out), `unknown` (safe unknown), `void` (no return value), `never` (no value possible), `object` (non-primitive). Use lowercase `string`, not the wrapper type `String`."
  },
  {
    id: "ts-005",
    question: "What is type inference?",
    theme: "TypeScript",
    subCategory: "Basic types",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Converting types to runtime checks",
      "TypeScript working out a type from context, e.g. `let x = 5` gives `number`, so you don't have to annotate everything",
      "Guessing types randomly when annotations are missing",
      "Reading types from comments only"
    ],
    correctAnswer: "TypeScript working out a type from context, e.g. `let x = 5` gives `number`, so you don't have to annotate everything",
    explanation: "Types are inferred from initial values, return statements, generic arguments and context (a callback passed to `arr.map` gets its parameter types). `let x = 'a'` is `string`, but `const x = 'a'` is the literal type 'a'. Annotate function parameters, public APIs and empty values (`useState<User | null>(null)`); let inference handle the rest."
  },
  {
    id: "ts-006",
    question: "What is the difference between `any` and `unknown`?",
    theme: "TypeScript",
    subCategory: "Basic types",
    level: "medium",
    fourOptionsForAnAnswer: [
      "`unknown` turns off type checking; `any` requires a check before use",
      "Both accept any value, but `unknown` must be narrowed before you use it, while `any` turns off type checking",
      "`any` accepts only primitives; `unknown` accepts only objects",
      "They are identical aliases"
    ],
    correctAnswer: "Both accept any value, but `unknown` must be narrowed before you use it, while `any` turns off type checking",
    explanation: "With `any`, `value.foo.bar()` compiles and may crash at runtime, and `any` spreads to everything it touches. With `unknown` you must first narrow it (`typeof value === 'string'`, `instanceof`, a type guard, or validation) before accessing properties. Use `unknown` for untrusted data like `JSON.parse` results, API responses and `catch (e)` errors."
  },
  {
    id: "ts-007",
    question: "When is the `never` type used?",
    theme: "TypeScript",
    subCategory: "Basic types",
    level: "medium",
    fourOptionsForAnAnswer: [
      "For variables that hold `null`",
      "For functions that return nothing useful",
      "For values that can't exist: functions that always throw or loop forever, and exhaustive checks where all cases are handled",
      "For optional properties"
    ],
    correctAnswer: "For values that can't exist: functions that always throw or loop forever, and exhaustive checks where all cases are handled",
    explanation: "`never` is the empty type. Examples: `function fail(msg: string): never { throw new Error(msg); }`; after narrowing away every member of a union, the remaining type is `never`, so `const _exhaustive: never = shape;` in a `default` branch fails to compile when a new case is added. In conditional types, returning `never` removes members from a union (that's how `Exclude` works)."
  },
  {
    id: "ts-008",
    question: "What is `void`, and when do you use it?",
    theme: "TypeScript",
    subCategory: "Basic types",
    level: "easy",
    fourOptionsForAnAnswer: [
      "The return type of functions that don't return a meaningful value",
      "A type for values that can never exist",
      "An alias of `null`",
      "A type for empty objects `{}`"
    ],
    correctAnswer: "The return type of functions that don't return a meaningful value",
    explanation: "`function log(msg: string): void { console.log(msg); }`. Unlike `never`, a `void` function does return (with `undefined`). A function type with a `void` return, like a callback `() => void`, accepts functions that return something; the value is just ignored. That's why `arr.forEach(x => list.push(x))` compiles even though `push` returns a number."
  },
  {
    id: "ts-009",
    question: "What is a union type?",
    theme: "TypeScript",
    subCategory: "Unions & literals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "A type whose value has all properties of several types at once",
      "A type that merges two interfaces with the same name",
      "A type whose value can be one of several types, e.g. `string | number`",
      "A type that combines two arrays"
    ],
    correctAnswer: "A type whose value can be one of several types, e.g. `string | number`",
    explanation: "`let id: string | number`. You can only use members common to all types until you narrow: `if (typeof id === 'string') id.toUpperCase()`. Unions of literals model fixed options (`'sm' | 'md' | 'lg'`), and `T | null` models optional values. Unions of objects are the basis for discriminated unions."
  },
  {
    id: "ts-010",
    question: "What is an intersection type?",
    theme: "TypeScript",
    subCategory: "Unions & literals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "A type that has all members of several types at once, e.g. `A & B`",
      "A type that keeps only the properties both types share",
      "A type that can be either `A` or `B`",
      "A type for the overlapping values of two arrays"
    ],
    correctAnswer: "A type that has all members of several types at once, e.g. `A & B`",
    explanation: "`type Admin = User & { permissions: string[] }` requires every property of `User` and `permissions`. Used to compose types and mixins, similar to `interface extends`. If properties conflict (`{ a: string } & { a: number }`), that property becomes `never`. Intersecting primitives like `string & number` gives `never`."
  },
  {
    id: "ts-011",
    question: "What are literal types?",
    theme: "TypeScript",
    subCategory: "Unions & literals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Types written only in comments",
      "Types that represent one exact value, like `'left'`, `42` or `true`, usually combined into unions",
      "Types for string literals only",
      "Types that can't be used in unions"
    ],
    correctAnswer: "Types that represent one exact value, like `'left'`, `42` or `true`, usually combined into unions",
    explanation: "`type Align = 'left' | 'center' | 'right'` allows only these strings. `const` declarations infer literal types, `let` widens them (`let a = 'x'` is `string`). Template literal types build string patterns, e.g. every event name prefixed with 'on'. `as const` keeps literals in objects and arrays."
  },
  {
    id: "ts-012",
    question: "How does an `enum` differ from a union of string literals?",
    theme: "TypeScript",
    subCategory: "Unions & literals",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Enums are erased at compile time; unions generate an object",
      "An enum creates a runtime object and its own nominal type; a literal union is type-only, emits no code and accepts plain strings",
      "Unions can't be used in `switch` statements",
      "They are identical after compilation"
    ],
    correctAnswer: "An enum creates a runtime object and its own nominal type; a literal union is type-only, emits no code and accepts plain strings",
    explanation: "`enum Role { Admin = 'ADMIN' }` emits an object you can iterate, but you must pass `Role.Admin`, not 'ADMIN'. Numeric enums get a reverse mapping. `type Role = 'ADMIN' | 'USER'` has no runtime cost and works with plain strings and JSON. Many teams prefer unions, or a `const` object with `as const` plus `typeof obj[keyof typeof obj]`, also because enums are not supported by type-stripping tools (`erasableSyntaxOnly`). `const enum` is inlined but has its own build caveats."
  },
  {
    id: "ts-013",
    question: "What is a tuple type?",
    theme: "TypeScript",
    subCategory: "Unions & literals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "An array of unlimited length where every element has the same type",
      "An immutable object type",
      "An array with a fixed length and a known type at each position, e.g. `[string, number]`",
      "A pair of interfaces"
    ],
    correctAnswer: "An array with a fixed length and a known type at each position, e.g. `[string, number]`",
    explanation: "`const entry: [string, number] = ['age', 30]`. Tuples can have optional elements (`[string, number?]`), rest elements (`[string, ...number[]]`) and labels (`[name: string, age: number]`). `useState` returns a tuple. Use `readonly [string, number]` or `as const` to prevent `push`, which plain tuples still allow."
  },
  {
    id: "ts-014",
    question: "What is the difference between `type` and `interface`?",
    theme: "TypeScript",
    subCategory: "Objects & interfaces",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Interfaces can describe unions and tuples; types can only describe objects",
      "`type` aliases can describe any type, including unions, tuples and mapped types; interfaces describe object shapes and can be merged by redeclaring them",
      "Interfaces exist at runtime; types are erased",
      "Types can be extended; interfaces can't"
    ],
    correctAnswer: "`type` aliases can describe any type, including unions, tuples and mapped types; interfaces describe object shapes and can be merged by redeclaring them",
    explanation: "Both describe objects and are mostly interchangeable there. Interfaces: `extends`, declaration merging (useful to augment library types like `Window`), slightly clearer error messages. Types: unions, intersections, primitives, tuples, conditional and mapped types, extended with `&`. Classes can `implements` either. A common rule: `interface` for object shapes and public APIs, `type` for everything else, and be consistent."
  },
  {
    id: "ts-015",
    question: "How do you declare optional and read-only properties?",
    theme: "TypeScript",
    subCategory: "Objects & interfaces",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`optional name: string` and `const id: number`",
      "`name: string = undefined` and `final id: number`",
      "`name?: string` and `readonly id: number`",
      "`name: string?` and `static id: number`"
    ],
    correctAnswer: "`name?: string` and `readonly id: number`",
    explanation: "`interface User { readonly id: number; name: string; email?: string; }`. An optional property may be missing; its type is `string | undefined` (with `exactOptionalPropertyTypes` it can't be explicitly `undefined`). `readonly` forbids reassignment through that type, only at compile time and only shallowly. Utility types `Partial<T>` and `Readonly<T>` apply these to every property; `ReadonlyArray<T>` / `readonly T[]` for arrays."
  },
  {
    id: "ts-016",
    question: "What is an index signature?",
    theme: "TypeScript",
    subCategory: "Objects & interfaces",
    level: "medium",
    fourOptionsForAnAnswer: [
      "A type for objects with arbitrary keys of a given type, e.g. `{ [key: string]: number }`",
      "A way to make array indexes start at 1",
      "A signature that numbers the overloads of a function",
      "A property that holds the object's index in an array"
    ],
    correctAnswer: "A type for objects with arbitrary keys of a given type, e.g. `{ [key: string]: number }`",
    explanation: "Use it for dictionaries whose keys aren't known in advance: `const scores: { [name: string]: number } = {}`. `Record<string, number>` is equivalent. Known properties must match the index type. By default `scores['x']` is typed `number` even if it's missing; enable `noUncheckedIndexedAccess` to get `number | undefined`. If keys are a known set, use `Record<'a' | 'b', number>` or a `Map`."
  },
  {
    id: "ts-017",
    question: "What is type narrowing?",
    theme: "TypeScript",
    subCategory: "Narrowing",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Converting `number` to `int`",
      "Making a type shorter by removing comments",
      "Refining a broad type to a more specific one inside a branch, based on checks like `typeof`, `instanceof`, `in` or equality",
      "Casting any value with `as`"
    ],
    correctAnswer: "Refining a broad type to a more specific one inside a branch, based on checks like `typeof`, `instanceof`, `in` or equality",
    explanation: "Control flow analysis tracks checks: `function f(x: string | number) { if (typeof x === 'string') { x.toUpperCase(); } else { x.toFixed(); } }`. Narrowing works with `typeof`, `instanceof`, `'key' in obj`, `=== null`, truthiness, `Array.isArray`, discriminant properties, type guards and assertion functions. Assignments and early returns narrow too."
  },
  {
    id: "ts-018",
    question: "What are type guards and assertion functions?",
    theme: "TypeScript",
    subCategory: "Narrowing",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Runtime decorators that block wrong types",
      "Functions whose return type is `value is T` (narrow when true) or `asserts value is T` (narrow after the call, throwing otherwise)",
      "Compiler options that forbid `any`",
      "Synonyms for `as` casts"
    ],
    correctAnswer: "Functions whose return type is `value is T` (narrow when true) or `asserts value is T` (narrow after the call, throwing otherwise)",
    explanation: "Type guard: `function isUser(x: unknown): x is User { return typeof x === 'object' && x !== null && 'id' in x; }` then `if (isUser(data)) data.id`. Assertion function: `function assertDefined<T>(v: T): asserts v is NonNullable<T> { if (v == null) throw new Error(); }`; after `assertDefined(el)`, `el` is non-null. TypeScript trusts the declared predicate, so a wrong implementation lies. Since 5.5, simple guards like `x => x !== null` are inferred automatically."
  },
  {
    id: "ts-019",
    question: "What is a discriminated union?",
    theme: "TypeScript",
    subCategory: "Narrowing",
    level: "medium",
    fourOptionsForAnAnswer: [
      "A union of object types that share a literal property (like `kind` or `status`) used to tell them apart",
      "A union that excludes `null`",
      "A union where every member is a class",
      "A union with exactly two members"
    ],
    correctAnswer: "A union of object types that share a literal property (like `kind` or `status`) used to tell them apart",
    explanation: "`type State = { status: 'loading' } | { status: 'ok'; data: User } | { status: 'error'; error: string }`. Checking `state.status === 'ok'` narrows to the member that has `data`. Combined with `switch` and a `never` check in `default`, the compiler ensures every case is handled. It models state machines, API results and Redux actions much better than one object with many optional fields."
  },
  {
    id: "ts-020",
    question: "What does the `keyof` operator do?",
    theme: "TypeScript",
    subCategory: "Type operators",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Returns the keys of an object at runtime",
      "Produces a union of an object type's property names, e.g. `keyof { a: 1; b: 2 }` is `'a' | 'b'`",
      "Makes all properties of a type optional",
      "Checks whether a key exists in an object"
    ],
    correctAnswer: "Produces a union of an object type's property names, e.g. `keyof { a: 1; b: 2 }` is `'a' | 'b'`",
    explanation: "Typical use: type-safe property access with generics: `function get<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key]; }`. `T[K]` is an indexed access type. With an index signature, `keyof { [k: string]: X }` is `string | number`. Combined with `typeof`: `keyof typeof config` gives the keys of a value. `Object.keys` returns `string[]`, not `keyof T`, because objects may have extra keys."
  },
  {
    id: "ts-021",
    question: "How does `typeof` in a type position differ from JavaScript's `typeof`?",
    theme: "TypeScript",
    subCategory: "Type operators",
    level: "medium",
    fourOptionsForAnAnswer: [
      "They are the same: both return a string like 'object'",
      "In types, `typeof value` gives the TypeScript type of a variable or property; in expressions, it returns a runtime string like 'string'",
      "The type-level `typeof` works only on classes",
      "The JavaScript `typeof` is removed by the compiler"
    ],
    correctAnswer: "In types, `typeof value` gives the TypeScript type of a variable or property; in expressions, it returns a runtime string like 'string'",
    explanation: "`const config = { port: 3000, host: 'localhost' }; type Config = typeof config;` derives a type from a value, so it stays in sync. Also `ReturnType<typeof fn>`, `keyof typeof obj`, `typeof import('./x')`. The JavaScript `typeof x === 'string'` runs at runtime and is used for narrowing. The context (type annotation vs expression) decides which one you get."
  },
  {
    id: "ts-022",
    question: "What does `as const` do?",
    theme: "TypeScript",
    subCategory: "Type operators",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Makes the object frozen at runtime",
      "Converts a `let` into a `const`",
      "Infers the narrowest types: literal values, `readonly` properties and readonly tuples instead of arrays",
      "Casts the value to `any`"
    ],
    correctAnswer: "Infers the narrowest types: literal values, `readonly` properties and readonly tuples instead of arrays",
    explanation: "`const sizes = ['sm', 'md'] as const` is `readonly ['sm', 'md']`, so `type Size = typeof sizes[number]` is `'sm' | 'md'`. Without it the type is `string[]`. On objects it makes nested properties readonly literals, a popular enum alternative. It is compile-time only; use `Object.freeze` for runtime protection."
  },
  {
    id: "ts-023",
    question: "What is the `satisfies` operator for?",
    theme: "TypeScript",
    subCategory: "Type operators",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Casting a value to a type without checking it",
      "Checking that a value matches a type while keeping the value's own, more specific inferred type",
      "Making a function's parameters optional",
      "Declaring that a class implements an interface"
    ],
    correctAnswer: "Checking that a value matches a type while keeping the value's own, more specific inferred type",
    explanation: "With `const colors: Record<string, string | number[]> = {...}`, `colors.red` is `string | number[]` and typos in keys go unnoticed in usage. `const colors = { red: '#f00', green: [0, 255, 0] } satisfies Record<string, string | number[]>` validates the object, but `colors.red` stays `string` and `colors.green` stays `number[]`. Unlike `as`, it doesn't override the type or hide errors. Added in TypeScript 4.9; often combined with `as const`."
  },
  {
    id: "ts-024",
    question: "What are generics, and why are they needed?",
    theme: "TypeScript",
    subCategory: "Generics",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Type parameters that let a function, class or type work with many types while keeping the relationship between them, e.g. `function first<T>(arr: T[]): T`",
      "Built-in types such as `string` and `number`",
      "A way to make all parameters `any`",
      "Runtime classes that check types"
    ],
    correctAnswer: "Type parameters that let a function, class or type work with many types while keeping the relationship between them, e.g. `function first<T>(arr: T[]): T`",
    explanation: "Without generics you'd write one function per type or use `any` and lose type information. With `first<T>`, `first([1, 2])` returns `number` and `first(['a'])` returns `string`; `T` is inferred. Generics power `Array<T>`, `Promise<T>`, `useState<T>`, API clients (`fetchJson<User>(url)`), containers and utility types."
  },
  {
    id: "ts-025",
    question: "How do you constrain a generic with `extends`?",
    theme: "TypeScript",
    subCategory: "Generics",
    level: "medium",
    fourOptionsForAnAnswer: [
      "`function f<T implements Lengthwise>(x: T)`",
      "`function f<T>(x: T extends Lengthwise)`",
      "`function f<T: Lengthwise>(x: T)`",
      "`function f<T extends { length: number }>(x: T)` so `T` must have a `length` property"
    ],
    correctAnswer: "`function f<T extends { length: number }>(x: T)` so `T` must have a `length` property",
    explanation: "A constraint limits which types can be used and lets you access their members inside the function: `function longest<T extends { length: number }>(a: T, b: T) { return a.length >= b.length ? a : b; }` works for strings and arrays but rejects numbers. A common pattern: `<T, K extends keyof T>` to require a valid key of `T`."
  },
  {
    id: "ts-026",
    question: "What are default type parameters?",
    theme: "TypeScript",
    subCategory: "Generics",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Type parameters that are always `any`",
      "Defaults used when a type argument isn't given or inferred, e.g. `interface Response<T = unknown>`",
      "Default values for function parameters",
      "Parameters that are removed at compile time"
    ],
    correctAnswer: "Defaults used when a type argument isn't given or inferred, e.g. `interface Response<T = unknown>`",
    explanation: "`type ApiResponse<T = unknown, E = Error> = { data?: T; error?: E }` lets callers write `ApiResponse` or `ApiResponse<User>`. Defaults can reference earlier parameters and must satisfy any constraint (`<T extends object = {}>`). Parameters with defaults must come after required ones. React's types use them, e.g. `useRef<T = undefined>`."
  },
  {
    id: "ts-027",
    question: "What is a conditional type?",
    theme: "TypeScript",
    subCategory: "Advanced types",
    level: "medium",
    fourOptionsForAnAnswer: [
      "A type that exists only in `if` blocks",
      "A type chosen by a runtime condition",
      "A type of the form `T extends U ? X : Y` that picks a type based on whether `T` is assignable to `U`",
      "A type that may be `null`"
    ],
    correctAnswer: "A type of the form `T extends U ? X : Y` that picks a type based on whether `T` is assignable to `U`",
    explanation: "`type IsString<T> = T extends string ? true : false`. When `T` is a bare type parameter and receives a union, the condition distributes over each member: `IsString<'a' | 1>` is `true | false`. Wrap in brackets (`[T] extends [string]`) to prevent that. Conditional types implement `Exclude`, `Extract`, `NonNullable`, `ReturnType` and `Awaited`."
  },
  {
    id: "ts-028",
    question: "How does `infer` work in conditional types?",
    theme: "TypeScript",
    subCategory: "Advanced types",
    level: "hard",
    fourOptionsForAnAnswer: [
      "It infers the type of a variable at runtime",
      "It declares a type variable inside the `extends` clause that captures part of the matched type, usable in the true branch",
      "It turns off type inference for a generic",
      "It infers the return value of `JSON.parse`"
    ],
    correctAnswer: "It declares a type variable inside the `extends` clause that captures part of the matched type, usable in the true branch",
    explanation: "`type ElementOf<T> = T extends (infer U)[] ? U : never;` gives `ElementOf<string[]>` = `string`. `ReturnType` is `T extends (...args: any) => infer R ? R : any`, and `Awaited` unwraps promises with `infer`. You can constrain it (`infer U extends string`) and use it inside template literal types to pull parts out of string patterns."
  },
  {
    id: "ts-029",
    question: "What is a mapped type?",
    theme: "TypeScript",
    subCategory: "Advanced types",
    level: "medium",
    fourOptionsForAnAnswer: [
      "A type for `Map` objects",
      "A type created by iterating over keys, e.g. `{ [K in keyof T]?: T[K] }`, to transform every property",
      "A type that maps runtime values to types",
      "A JSON schema converted to TypeScript"
    ],
    correctAnswer: "A type created by iterating over keys, e.g. `{ [K in keyof T]?: T[K] }`, to transform every property",
    explanation: "`Partial`, `Required`, `Readonly` and `Record` are mapped types. You can add or remove modifiers (`-readonly`, `-?`), and remap keys with `as`, e.g. to turn `name` into a `getName` method type; mapping a key to `never` filters it out. They keep derived types in sync with the source type."
  },
  {
    id: "ts-030",
    question: "Which utility types are most useful, and what do they do?",
    theme: "TypeScript",
    subCategory: "Advanced types",
    level: "medium",
    fourOptionsForAnAnswer: [
      "`Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`, `Exclude`, `Extract`, `NonNullable`, `ReturnType`, `Parameters`, `Awaited`",
      "`Optional`, `Mandatory`, `Freeze`, `Clone`",
      "`StringType`, `NumberType`, `ArrayType`",
      "`Merge`, `DeepPartial` and `ValueOf`, which ship with TypeScript"
    ],
    correctAnswer: "`Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`, `Exclude`, `Extract`, `NonNullable`, `ReturnType`, `Parameters`, `Awaited`",
    explanation: "`Partial<T>` for update payloads; `Required<T>` after defaults are applied; `Readonly<T>` for immutable data; `Pick<T, K>`/`Omit<T, K>` to derive subsets (e.g. a form without `id`); `Record<K, V>` for dictionaries; `Exclude`/`Extract` to filter unions; `NonNullable<T>` to remove `null`/`undefined`; `ReturnType`, `Parameters` and `Awaited` to reuse types of functions and promises. Also `InstanceType`, `NoInfer` and string helpers like `Uppercase`. `DeepPartial` and `ValueOf` aren't built in."
  },
  {
    id: "ts-031",
    question: "How do you describe a function's type?",
    theme: "TypeScript",
    subCategory: "Functions",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`type Fn = function(number): string`",
      "`type Fn = Function<number, string>`",
      "`type Fn = (a: number, b?: string) => boolean`, or a call signature in an interface",
      "`type Fn = number -> string`"
    ],
    correctAnswer: "`type Fn = (a: number, b?: string) => boolean`, or a call signature in an interface",
    explanation: "Annotate parameters and optionally the return type: `function add(a: number, b: number): number`. Optional (`b?`), default (`b = 1`) and rest (`...nums: number[]`) parameters are supported. Function type expressions describe callbacks; an interface with `(a: number): boolean` adds properties to a callable. Avoid the broad `Function` type; it accepts any function and returns `any`."
  },
  {
    id: "ts-032",
    question: "What are function overloads?",
    theme: "TypeScript",
    subCategory: "Functions",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Several functions with the same name, each with its own body, chosen at runtime",
      "Several call signatures declared before one implementation, so the return type can depend on the argument types",
      "Functions that accept more arguments than declared",
      "Functions that call themselves recursively"
    ],
    correctAnswer: "Several call signatures declared before one implementation, so the return type can depend on the argument types",
    explanation: "`function parse(x: string): Date; function parse(x: number): Date; function parse(x: string | number): Date { return new Date(x); }`. There is one body (JavaScript has no real overloading); the implementation signature isn't visible to callers and must be compatible with all overloads. Order from most specific to most general. Often a union parameter or generics is simpler; use overloads when the return type depends on the input."
  },
  {
    id: "ts-033",
    question: "How do you type `this` inside a function?",
    theme: "TypeScript",
    subCategory: "Functions",
    level: "hard",
    fourOptionsForAnAnswer: [
      "With a fake first parameter named `this`, e.g. `function onClick(this: HTMLButtonElement, e: MouseEvent)`, which is removed in the output",
      "With `this as HTMLButtonElement` inside the body only",
      "`this` can't be typed in TypeScript",
      "By declaring `const this: HTMLButtonElement`"
    ],
    correctAnswer: "With a fake first parameter named `this`, e.g. `function onClick(this: HTMLButtonElement, e: MouseEvent)`, which is removed in the output",
    explanation: "The `this` parameter isn't a real argument; the compiler checks that callers invoke the function with the right `this` (as a method or via `call`). `noImplicitThis` (part of `strict`) reports `this` of type `any`. In classes `this` is typed automatically, and the polymorphic `this` type lets fluent methods return the subclass type. `ThisParameterType` and `OmitThisParameter` work with these signatures."
  },
  {
    id: "ts-034",
    question: "Which typing features do classes have in TypeScript?",
    theme: "TypeScript",
    subCategory: "Classes",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Only `public` properties; everything else is JavaScript",
      "Classes can't be typed; use interfaces instead",
      "Access modifiers (`public`, `private`, `protected`), `readonly`, parameter properties, `abstract`, `implements`, `override`, `static`, and generics",
      "Multiple inheritance with `extends A, B`"
    ],
    correctAnswer: "Access modifiers (`public`, `private`, `protected`), `readonly`, parameter properties, `abstract`, `implements`, `override`, `static`, and generics",
    explanation: "`class User { constructor(private readonly id: number, public name: string) {} }` declares and assigns fields in one go (parameter properties). TypeScript's `private` is compile-time only; JavaScript's `#field` is truly private at runtime. `override` (with `noImplicitOverride`) marks overridden methods. Classes can be generic (`class Box<T>`), and a class is both a value and an instance type."
  },
  {
    id: "ts-035",
    question: "What is the difference between an abstract class and `implements`?",
    theme: "TypeScript",
    subCategory: "Classes",
    level: "medium",
    fourOptionsForAnAnswer: [
      "`implements` copies methods from an interface into the class",
      "An abstract class can't have any implemented methods",
      "They are the same; `abstract` is an alias of `interface`",
      "An abstract class can't be instantiated and can share code with subclasses; `implements` only checks that a class matches an interface's shape"
    ],
    correctAnswer: "An abstract class can't be instantiated and can share code with subclasses; `implements` only checks that a class matches an interface's shape",
    explanation: "`abstract class Shape { abstract area(): number; describe() { return 'Area: ' + this.area(); } }`: subclasses must implement `area` and inherit `describe`; `new Shape()` is an error. The class exists at runtime. `class Circle implements HasArea` adds no code or behaviour; it's a compile-time contract. A class extends one class but can implement many interfaces."
  },
  {
    id: "ts-036",
    question: "What are decorators in TypeScript?",
    theme: "TypeScript",
    subCategory: "Classes",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Functions applied with `@` to classes and their members to wrap or annotate them; TS 5 supports standard decorators, and `experimentalDecorators` enables the older version used by Angular and NestJS",
      "CSS classes that TypeScript adds to components",
      "Type annotations written in JSDoc comments",
      "A way to add types to JavaScript files"
    ],
    correctAnswer: "Functions applied with `@` to classes and their members to wrap or annotate them; TS 5 supports standard decorators, and `experimentalDecorators` enables the older version used by Angular and NestJS",
    explanation: "Standard (TC39) decorators receive the decorated value and a context object: `function logged(fn, ctx) { return function (...args) { console.log(ctx.name); return fn.apply(this, args); }; }`. Legacy decorators have a different signature and support parameter decorators and, with `emitDecoratorMetadata`, type metadata for dependency injection. Uses: logging, validation, routing (`@Get()`), DI (`@Injectable()`), ORMs (`@Column()`)."
  },
  {
    id: "ts-037",
    question: "How do modules and imports work in TypeScript?",
    theme: "TypeScript",
    subCategory: "Modules & config",
    level: "medium",
    fourOptionsForAnAnswer: [
      "TypeScript has its own module system that replaces `import`",
      "TypeScript uses ES `import`/`export`; `import type` imports only types and is erased; `.d.ts` files and `@types/*` packages describe JavaScript libraries",
      "All `.ts` files share one global scope",
      "Imports must always use the `.ts` extension"
    ],
    correctAnswer: "TypeScript uses ES `import`/`export`; `import type` imports only types and is erased; `.d.ts` files and `@types/*` packages describe JavaScript libraries",
    explanation: "A file with a top-level `import`/`export` is a module; otherwise its declarations are global. `import type { User }` (or `import { type User }`) guarantees removal from output, and `verbatimModuleSyntax` enforces it. `module` and `moduleResolution` (`bundler`, `node16`/`nodenext`) control how imports are resolved and emitted; with Node ESM you write `.js` extensions in imports. `declare module 'x'` types untyped packages, and `paths` sets aliases like `@/`."
  },
  {
    id: "ts-038",
    question: "Which `tsconfig.json` options are used most often?",
    theme: "TypeScript",
    subCategory: "Modules & config",
    level: "medium",
    fourOptionsForAnAnswer: [
      "`strict`, `target`, `module`, `moduleResolution`, `lib`, `jsx`, `outDir`/`noEmit`, `paths`, `esModuleInterop`, `skipLibCheck`",
      "`minify`, `port`, `watchFiles`, `browser`",
      "`eslint`, `prettier`, `babel`",
      "`compilerSpeed`, `typeLevel`, `allowErrors`"
    ],
    correctAnswer: "`strict`, `target`, `module`, `moduleResolution`, `lib`, `jsx`, `outDir`/`noEmit`, `paths`, `esModuleInterop`, `skipLibCheck`",
    explanation: "`strict` turns on all strict checks (`strictNullChecks`, `noImplicitAny` …). `target` is the emitted JS version; `lib` the available built-in types (e.g. `DOM`, `ES2022`). `module`/`moduleResolution` control module format and lookup. `jsx` (`react-jsx`) handles JSX. `outDir`, `rootDir`, `declaration` for emitting; `noEmit` when a bundler builds. `paths` for aliases. `esModuleInterop` for CommonJS default imports. `skipLibCheck` speeds up builds. Also useful: `noUncheckedIndexedAccess`, `isolatedModules`, `include`/`exclude`."
  },
  {
    id: "ts-039",
    question: "How do you type a React component and its props?",
    theme: "TypeScript",
    subCategory: "React",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Props can't be typed; use PropTypes instead",
      "Declare a props type and annotate the parameter: `function Button({ label, onClick }: ButtonProps) { ... }`",
      "Add `: JSX` after the component name",
      "Use `React.Props<any>` for every component"
    ],
    correctAnswer: "Declare a props type and annotate the parameter: `function Button({ label, onClick }: ButtonProps) { ... }`",
    explanation: "`type ButtonProps = { label: string; variant?: 'primary' | 'ghost'; onClick: () => void }`. Defaults go in destructuring (`variant = 'primary'`). To accept native attributes, extend `React.ComponentProps<'button'>` or `ButtonHTMLAttributes<HTMLButtonElement>`. Events are typed like `React.ChangeEvent<HTMLInputElement>`, state via `useState<User | null>(null)`, refs via `useRef<HTMLInputElement>(null)`. `React.FC` works but is optional and, since React 18's types, doesn't add `children`."
  },
  {
    id: "ts-040",
    question: "How do you type `children` in React?",
    theme: "TypeScript",
    subCategory: "React",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`children: string`",
      "`children: HTMLElement[]`",
      "`children: React.ReactNode`, or wrap the props with `PropsWithChildren<Props>`",
      "`children: any` is the only option"
    ],
    correctAnswer: "`children: React.ReactNode`, or wrap the props with `PropsWithChildren<Props>`",
    explanation: "`ReactNode` covers everything React can render: elements, strings, numbers, arrays, fragments, `null`, `undefined` and booleans. Use `React.ReactElement` when you need exactly one element (e.g. to clone it), and a function type for render props: `children: (data: T) => ReactNode`. Since React 18's types, `React.FC` doesn't include `children`, so declare it explicitly."
  },
  {
    id: "ts-041",
    question: "Practice: which signature types this function correctly?\n\n// greet('Ann') → 'Hello, Ann'\n// greet('Ann', 30) → 'Hello, Ann (30)'\nfunction greet(name, age) {\n  return age === undefined ? `Hello, ${name}` : `Hello, ${name} (${age})`;\n}",
    theme: "TypeScript",
    subCategory: "Practice",
    level: "easy",
    fourOptionsForAnAnswer: [
      "`function greet(name: string, age: number): string`",
      "`function greet(name?: string, age: number): string`",
      "`function greet(name: string, age?: number): string`",
      "`function greet(name: any, age: any): void`"
    ],
    correctAnswer: "`function greet(name: string, age?: number): string`",
    explanation: "`age` can be omitted, so it must be optional (`age?: number`, typed `number | undefined`), and optional parameters must come after required ones, which rules out `name?` first. The function returns a string, so `void` is wrong, and `any` throws away checking. The return type could also be inferred, but writing it on exported functions documents the contract and catches mistakes in the body."
  },
  {
    id: "ts-042",
    question: "Practice: which line causes a type error?\n\ninterface User {\n  readonly id: number;\n  name: string;\n  email?: string;\n}\nconst u: User = { id: 1, name: 'Ann' }; // line A\nu.name = 'Bob';                       // line B\nconst len = u.email?.length;          // line C\nu.id = 2;                             // line D",
    theme: "TypeScript",
    subCategory: "Practice",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Line A, because `email` is missing",
      "Line B, because `u` is declared with `const`",
      "Line C, because `email` may be undefined",
      "Line D, because `id` is `readonly`"
    ],
    correctAnswer: "Line D, because `id` is `readonly`",
    explanation: "`email` is optional, so omitting it is fine (A). `const` prevents reassigning `u`, not changing its properties (B). Optional chaining handles the possibly undefined `email`, giving `len` the type `number | undefined` (C). Only the `readonly` property can't be assigned after creation (D): 'Cannot assign to 'id' because it is a read-only property'."
  },
  {
    id: "ts-043",
    question: "Practice: what are `A` and `B`?\n\ntype User = { id: number; name: string; email?: string };\ntype Wrap<T> = T extends string ? { text: T } : { data: T };\n\ntype A = Wrap<'ok' | 42>;\ntype B = Required<Pick<User, 'id' | 'email'>>;",
    theme: "TypeScript",
    subCategory: "Practice",
    level: "hard",
    fourOptionsForAnAnswer: [
      "`A` is `{ data: 'ok' | 42 }`; `B` is `{ id: number; email?: string }`",
      "`A` is `{ text: 'ok' } | { data: 42 }`; `B` is `{ id: number; email: string }`",
      "`A` is `{ text: 'ok' | 42 }`; `B` is `{ id: number; name: string; email: string }`",
      "`A` is `never`; `B` is `{ email: string }`"
    ],
    correctAnswer: "`A` is `{ text: 'ok' } | { data: 42 }`; `B` is `{ id: number; email: string }`",
    explanation: "A conditional type on a bare type parameter distributes over a union: `Wrap<'ok'>` | `Wrap<42>` gives `{ text: 'ok' } | { data: 42 }`. To avoid distribution, write `[T] extends [string]`. `Pick` keeps only `id` and `email` (still optional), then `Required` removes the `?`, so `email` becomes `string`."
  }
];
