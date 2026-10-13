import type { ReactQuestion } from './types';

export const reactQuestions: ReactQuestion[] = [
  {
    id: "react-001",
    question: "What is React?",
    theme: "React",
    subCategory: "Fundamentals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "A full-stack framework with a built-in database and router",
      "A JavaScript library for building user interfaces from components",
      "A CSS framework for responsive layouts",
      "A browser engine that replaces the DOM"
    ],
    correctAnswer: "A JavaScript library for building user interfaces from components",
    explanation: "React, created at Facebook (Meta), is a library for the view layer. You describe the UI as a function of state using components and JSX, and React updates the DOM to match. Routing, data fetching and global state come from other libraries or frameworks built on React, like Next.js or React Router. React also renders to other targets, e.g. React Native for mobile."
  },
  {
    id: "react-002",
    question: "Which list describes React's main features?",
    theme: "React",
    subCategory: "Fundamentals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Two-way data binding, templates in HTML strings and dirty checking",
      "Declarative components, JSX, a virtual DOM with reconciliation, and one-way data flow",
      "Direct DOM manipulation, global variables and jQuery plugins",
      "Server-only rendering, SQL queries and built-in routing"
    ],
    correctAnswer: "Declarative components, JSX, a virtual DOM with reconciliation, and one-way data flow",
    explanation: "Key features: declarative UI (describe what to show, not how to change the DOM); reusable components; JSX syntax; a virtual DOM and reconciliation to apply minimal DOM updates; one-way data flow through props; hooks for state and side effects; concurrent rendering and Suspense; server rendering and React Server Components; and a large ecosystem."
  },
  {
    id: "react-003",
    question: "What are the main advantages of using React?",
    theme: "React",
    subCategory: "Fundamentals",
    level: "easy",
    fourOptionsForAnAnswer: [
      "It needs no build tools and no JavaScript knowledge",
      "It makes every app faster than plain JavaScript in all cases",
      "Reusable components, predictable one-way data flow, efficient updates and a huge ecosystem",
      "It includes a database, authentication and hosting"
    ],
    correctAnswer: "Reusable components, predictable one-way data flow, efficient updates and a huge ecosystem",
    explanation: "Advantages: components make UI modular and reusable; declarative code is easier to reason about and test; one-way data flow makes state changes predictable; React handles DOM updates efficiently; skills transfer to React Native; and there is a large community, tooling (DevTools) and libraries. Downsides: it is only the view layer, so you assemble the rest, and JSX and the build step add a learning curve."
  },
  {
    id: "react-004",
    question: "Is React 'reactive'?",
    theme: "React",
    subCategory: "Fundamentals",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Yes; it tracks every variable read and re-runs only the exact expressions that depend on it",
      "No; it never updates the UI unless you reload the page",
      "Yes; it uses observables like RxJS for all state",
      "Not in the fine-grained sense: you call a state setter and React schedules a re-render of that component and its children"
    ],
    correctAnswer: "Not in the fine-grained sense: you call a state setter and React schedules a re-render of that component and its children",
    explanation: "Libraries like Vue, MobX, Solid or Svelte track dependencies automatically and push changes to exactly what uses them. React is pull-based: you tell it state changed (`setState`), and it decides when to re-render, then diffs the result. The React team itself has said React is not fully reactive, and that this scheduling control is deliberate. The UI is still a function of state, which is why it is often loosely called reactive."
  },
  {
    id: "react-005",
    question: "What is the virtual DOM, and how does React use it?",
    theme: "React",
    subCategory: "Internals",
    level: "medium",
    fourOptionsForAnAnswer: [
      "A copy of the real DOM stored in localStorage to restore the page after reload",
      "A lightweight in-memory tree of elements; React builds a new one on each render, diffs it with the previous one and applies only the changes to the real DOM",
      "A hidden browser DOM that React renders into first and then swaps in",
      "A browser API that makes DOM updates asynchronous"
    ],
    correctAnswer: "A lightweight in-memory tree of elements; React builds a new one on each render, diffs it with the previous one and applies only the changes to the real DOM",
    explanation: "Components return React elements: plain objects like `{ type: 'div', props: {...} }`. On an update React renders a new tree, compares it with the previous one (reconciliation) and commits the minimal set of DOM operations. This lets you write code as if you re-render everything, while React batches and limits the expensive DOM work. It is not automatically faster than careful manual DOM code; its value is a simple programming model with good-enough performance."
  },
  {
    id: "react-006",
    question: "What is reconciliation in React?",
    theme: "React",
    subCategory: "Internals",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Merging two Redux stores into one",
      "Synchronising state between server and client",
      "The diffing process that compares the new element tree with the previous one to decide what to update in the DOM",
      "Resolving merge conflicts in JSX files"
    ],
    correctAnswer: "The diffing process that compares the new element tree with the previous one to decide what to update in the DOM",
    explanation: "A full tree diff is O(n³), so React uses heuristics that make it O(n): elements of different types (e.g. `<div>` → `<span>`, or `ComponentA` → `ComponentB`) produce a new subtree and the old one is unmounted with its state; elements of the same type are updated in place with new props; children in lists are matched by `key`. That is why stable keys matter, and why defining a component inside another component's body resets its state on every render."
  },
  {
    id: "react-007",
    question: "What is React Fiber?",
    theme: "React",
    subCategory: "Internals",
    level: "hard",
    fourOptionsForAnAnswer: [
      "A CSS-in-JS library maintained by the React team",
      "The reconciliation engine since React 16, which splits rendering into small units of work that can be paused, prioritised and resumed",
      "A tool for server-side rendering to streams",
      "A type of thread that runs components in parallel on several CPU cores"
    ],
    correctAnswer: "The reconciliation engine since React 16, which splits rendering into small units of work that can be paused, prioritised and resumed",
    explanation: "Before React 16 the 'stack' reconciler processed the whole tree recursively in one go and could block the main thread. Fiber represents each component as a fiber node, a unit of work in a linked tree, so React can work incrementally. Rendering happens in two phases: an interruptible render phase that computes changes, and a synchronous commit phase that applies them to the DOM. Fiber made concurrent features, Suspense, transitions and error boundaries possible."
  },
  {
    id: "react-008",
    question: "What is the main goal of React Fiber?",
    theme: "React",
    subCategory: "Internals",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Incremental rendering: splitting work into chunks and prioritising urgent updates like typing over less urgent ones",
      "Reducing bundle size by removing class components",
      "Replacing JSX with templates",
      "Running React in a Web Worker by default"
    ],
    correctAnswer: "Incremental rendering: splitting work into chunks and prioritising urgent updates like typing over less urgent ones",
    explanation: "With Fiber, React can pause work to let the browser handle input and paint, abort work that is no longer needed, reuse finished work, and give different updates different priorities. This keeps the UI responsive during large renders and underpins `useTransition`, `useDeferredValue` and Suspense."
  },
  {
    id: "react-009",
    question: "What is the difference between the shadow DOM and the virtual DOM?",
    theme: "React",
    subCategory: "Internals",
    level: "medium",
    fourOptionsForAnAnswer: [
      "They are the same thing with different names",
      "The shadow DOM is a React feature; the virtual DOM is a browser API",
      "The virtual DOM is used only for SVG; the shadow DOM only for canvas",
      "The shadow DOM is a browser API that encapsulates a component's DOM and styles; the virtual DOM is a library's in-memory tree used to compute updates"
    ],
    correctAnswer: "The shadow DOM is a browser API that encapsulates a component's DOM and styles; the virtual DOM is a library's in-memory tree used to compute updates",
    explanation: "The shadow DOM (part of Web Components, `element.attachShadow()`) creates a hidden, scoped DOM subtree whose styles don't leak in or out. The virtual DOM is a JavaScript concept used by React, Vue and others to describe the UI and diff changes efficiently. They solve different problems (encapsulation vs efficient updates) and can be combined."
  },
  {
    id: "react-010",
    question: "What is JSX, and what is it compiled to?",
    theme: "React",
    subCategory: "JSX & rendering",
    level: "easy",
    fourOptionsForAnAnswer: [
      "A syntax extension that looks like HTML and compiles to function calls such as `jsx('div', props)` or `React.createElement`",
      "A template language that the browser parses natively",
      "HTML that React fetches from the server at runtime",
      "A CSS preprocessor for React components"
    ],
    correctAnswer: "A syntax extension that looks like HTML and compiles to function calls such as `jsx('div', props)` or `React.createElement`",
    explanation: "Browsers don't understand JSX, so Babel, TypeScript, esbuild or SWC transform it. `<h1 className='title'>Hi</h1>` becomes `jsx('h1', { className: 'title', children: 'Hi' })` with the automatic runtime (React 17+, imported from 'react/jsx-runtime'), or `React.createElement('h1', { className: 'title' }, 'Hi')` with the classic one. The call returns a plain element object. Lowercase tags become strings, capitalised names refer to components."
  },
  {
    id: "react-011",
    question: "Which is a real difference between JSX and HTML?",
    theme: "React",
    subCategory: "JSX & rendering",
    level: "easy",
    fourOptionsForAnAnswer: [
      "JSX doesn't allow nesting elements",
      "JSX uses `className` and `htmlFor`, camelCase event props, `style` objects, and requires all tags to be closed",
      "JSX attributes must always be written in uppercase",
      "HTML supports JavaScript expressions in `{ }` but JSX doesn't"
    ],
    correctAnswer: "JSX uses `className` and `htmlFor`, camelCase event props, `style` objects, and requires all tags to be closed",
    explanation: "Differences: `class` → `className`, `for` → `htmlFor`; events are camelCase and take functions (`onClick={handle}`); `style={{ fontSize: 14 }}` takes an object; void tags must self-close (`<img />`); JavaScript expressions go in `{ }`; a component returns one root (use a fragment `<>...</>`); comments are `{/* */}`; text is escaped automatically. `aria-*` and `data-*` keep their hyphens."
  },
  {
    id: "react-012",
    question: "What is the difference between a React element and a component?",
    theme: "React",
    subCategory: "JSX & rendering",
    level: "medium",
    fourOptionsForAnAnswer: [
      "An element is a class; a component is an object",
      "There is no difference",
      "An element is a plain, immutable object describing what to render; a component is a function or class that returns elements",
      "Elements can hold state; components can't"
    ],
    correctAnswer: "An element is a plain, immutable object describing what to render; a component is a function or class that returns elements",
    explanation: "`function Button(props) { return <button>{props.label}</button>; }` is a component. `<Button label='OK' />` creates an element: `{ type: Button, props: { label: 'OK' } }`. Elements are cheap descriptions; React calls the component when it renders the element, and the component instance holds state and effects."
  },
  {
    id: "react-013",
    question: "What is the difference between rendering and mounting?",
    theme: "React",
    subCategory: "JSX & rendering",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Rendering means calling a component to compute its elements and can happen many times; mounting is when the component is first added to the DOM",
      "Mounting happens on every state change; rendering happens once",
      "They are the same step",
      "Rendering writes to the DOM; mounting only computes elements"
    ],
    correctAnswer: "Rendering means calling a component to compute its elements and can happen many times; mounting is when the component is first added to the DOM",
    explanation: "On mount React renders the component and commits its output to the DOM; effects then run. Later state or prop changes cause re-renders, but if the output didn't change, the DOM isn't touched. A render doesn't always lead to DOM changes, and with concurrent rendering a render can even be thrown away. Unmounting removes the component and runs cleanups."
  },
  {
    id: "react-014",
    question: "How do you render an HTML string inside a React component?",
    theme: "React",
    subCategory: "JSX & rendering",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Put the string in JSX: `<div>{html}</div>`",
      "Use `dangerouslySetInnerHTML={{ __html: html }}`, after sanitising the HTML",
      "Use `ref.current.innerText = html`",
      "Call `React.parseHTML(html)`"
    ],
    correctAnswer: "Use `dangerouslySetInnerHTML={{ __html: html }}`, after sanitising the HTML",
    explanation: "React escapes strings in `{ }`, so `<div>{html}</div>` shows the tags as text. `dangerouslySetInnerHTML` inserts raw HTML and is named that way because untrusted HTML enables XSS. Sanitise it first, e.g. with DOMPurify, or parse it into React elements with a library like html-react-parser."
  },
  {
    id: "react-015",
    question: "When rendering a list with `map()`, what does each element need?",
    theme: "React",
    subCategory: "JSX & rendering",
    level: "easy",
    fourOptionsForAnAnswer: [
      "An `id` prop that matches a DOM id",
      "A `ref` attached to the element",
      "A `key` prop that is unique among its siblings and stable between renders",
      "Wrapping in a `<Fragment>` without props"
    ],
    correctAnswer: "A `key` prop that is unique among its siblings and stable between renders",
    explanation: "Keys let React match list items between renders, so it can move, insert and remove the right DOM nodes and keep each item's state. Use an id from the data. Array indexes as keys cause bugs when items are reordered, inserted or removed (state and input values attach to the wrong row). Random keys like `Math.random()` remount every item on each render. Keys aren't passed to the component as a prop."
  },
  {
    id: "react-016",
    question: "What is conditional rendering, and which is a common pitfall?",
    theme: "React",
    subCategory: "JSX & rendering",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Rendering only on the server; it can't be used in the browser",
      "Showing different UI based on state with `if`, `? :` or `&&`; `{count && <List />}` renders `0` when `count` is 0",
      "Using CSS `display: none` for every hidden element; it is the only correct way",
      "Rendering components in random order; it breaks keys"
    ],
    correctAnswer: "Showing different UI based on state with `if`, `? :` or `&&`; `{count && <List />}` renders `0` when `count` is 0",
    explanation: "Options: an early `return` with `if`, a ternary `cond ? <A /> : <B />`, logical `cond && <A />`, returning `null` to render nothing, or a lookup object of components. With `&&`, a falsy number like `0` is rendered as text; use `count > 0 && ...` or a ternary. Unmounting a component resets its state, while hiding it with CSS keeps it."
  },
  {
    id: "react-017",
    question: "What is a switching component?",
    theme: "React",
    subCategory: "Components & patterns",
    level: "medium",
    fourOptionsForAnAnswer: [
      "A component that renders one of several components based on a prop or state, e.g. via a lookup object",
      "A toggle UI element like a checkbox",
      "A component that switches between class and function syntax",
      "A component that changes the theme between light and dark"
    ],
    correctAnswer: "A component that renders one of several components based on a prop or state, e.g. via a lookup object",
    explanation: "Example: `const PAGES = { home: HomePage, about: AboutPage }; function Page({ name }) { const Component = PAGES[name] ?? NotFound; return <Component />; }`. It keeps choice logic in one place instead of long `if`/`switch` chains in JSX. Routers are a large-scale version of the same idea."
  },
  {
    id: "react-018",
    question: "What is the `children` prop?",
    theme: "React",
    subCategory: "Components & patterns",
    level: "easy",
    fourOptionsForAnAnswer: [
      "A list of the component's child components' state",
      "The content placed between a component's opening and closing tags, passed in as `props.children`",
      "An array of DOM nodes created by the component",
      "A prop that lists every component that imports this one"
    ],
    correctAnswer: "The content placed between a component's opening and closing tags, passed in as `props.children`",
    explanation: "`<Card><h2>Title</h2></Card>` gives `Card` the `<h2>` as `children`, which it can render anywhere: `function Card({ children }) { return <div className='card'>{children}</div>; }`. It can be text, elements, arrays or even a function (render props). It enables composition: layouts, modals and wrappers that don't need to know their contents, which also reduces prop drilling."
  },
  {
    id: "react-019",
    question: "What is a higher-order component (HOC)?",
    theme: "React",
    subCategory: "Components & patterns",
    level: "medium",
    fourOptionsForAnAnswer: [
      "A component placed higher in the tree than all others",
      "A class component with more than one `render` method",
      "A function that takes a component and returns a new component with added behaviour, e.g. `withAuth(Profile)`",
      "A component that renders other components' state"
    ],
    correctAnswer: "A function that takes a component and returns a new component with added behaviour, e.g. `withAuth(Profile)`",
    explanation: "`const withLoading = (Wrapped) => (props) => props.loading ? <Spinner /> : <Wrapped {...props} />;`. HOCs reuse logic such as auth checks, data loading or logging; Redux's `connect` and React Router's old `withRouter` are examples. Drawbacks: wrapper nesting, prop name collisions, and static methods and refs need forwarding. Custom hooks have largely replaced them."
  },
  {
    id: "react-020",
    question: "What is inheritance inversion in HOCs?",
    theme: "React",
    subCategory: "Components & patterns",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Passing props from child to parent instead of parent to child",
      "A HOC that returns a class extending the wrapped component, so it can override or wrap its `render` and lifecycle methods",
      "Reversing the order of components in a list",
      "Using composition instead of inheritance"
    ],
    correctAnswer: "A HOC that returns a class extending the wrapped component, so it can override or wrap its `render` and lifecycle methods",
    explanation: "`const withLog = (Wrapped) => class extends Wrapped { render() { console.log(this.state); return super.render(); } };`. The HOC is a subclass of the wrapped class, so it can read `this.state` and `this.props` and change the rendered output (render hijacking). The usual alternative is props proxy, where the HOC renders the component and passes props. It works only with class components, is tightly coupled, and is rarely used today."
  },
  {
    id: "react-021",
    question: "What is the difference between a presentational component and a container?",
    theme: "React",
    subCategory: "Components & patterns",
    level: "easy",
    fourOptionsForAnAnswer: [
      "A presentational component focuses on how things look and gets data via props; a container handles data and logic and passes it down",
      "A container is a `<div>` wrapper; a component is anything else",
      "Containers must be class components; presentational ones must be functions",
      "There is no difference in React"
    ],
    correctAnswer: "A presentational component focuses on how things look and gets data via props; a container handles data and logic and passes it down",
    explanation: "Presentational (dumb) components render UI from props and are easy to reuse and test. Containers (smart components) fetch data, hold state, connect to stores and choose what to render. Dan Abramov popularised the split; with hooks the logic often moves into custom hooks instead of separate container components, but separating concerns still helps."
  },
  {
    id: "react-022",
    question: "What is the difference between class and function components?",
    theme: "React",
    subCategory: "Components & patterns",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Function components can't have state",
      "Class components are faster and recommended for new code",
      "Classes extend `React.Component` and use `this.state` and lifecycle methods; functions use hooks and are the recommended style",
      "Function components can't receive props"
    ],
    correctAnswer: "Classes extend `React.Component` and use `this.state` and lifecycle methods; functions use hooks and are the recommended style",
    explanation: "Classes have `render()`, `this.props`, `this.setState` and methods like `componentDidMount`, and need `this` binding for handlers. Functions are plain functions that return JSX and use `useState`, `useEffect` and other hooks; they are shorter, easier to share logic in (custom hooks), and capture props per render. Classes are still needed for error boundaries and remain supported, but new features target hooks."
  },
  {
    id: "react-023",
    question: "How can you optimise a function component that always renders the same output for the same props?",
    theme: "React",
    subCategory: "Performance",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Wrap it in `useEffect` so it renders once",
      "Wrap it in `React.memo` so it skips re-rendering when its props are shallowly equal",
      "Convert it into a class component",
      "Put it inside `React.StrictMode`"
    ],
    correctAnswer: "Wrap it in `React.memo` so it skips re-rendering when its props are shallowly equal",
    explanation: "`export default React.memo(Avatar)` makes React reuse the last result when the parent re-renders but the props are the same by `Object.is`. Pass stable props: inline objects and functions are new every render, so combine `memo` with `useMemo`/`useCallback` where needed. A second argument can customise the comparison. The class equivalent is `PureComponent`. The React Compiler can add such memoization automatically."
  },
  {
    id: "react-024",
    question: "Which techniques optimise React performance?",
    theme: "React",
    subCategory: "Performance",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Store all state at the top of the app so everything re-renders together",
      "Use array indexes as keys and inline every component",
      "Avoid unnecessary re-renders (`memo`, `useMemo`, `useCallback`, local state), virtualise long lists, split code with `lazy`, and use transitions for heavy updates",
      "Replace all components with direct DOM manipulation"
    ],
    correctAnswer: "Avoid unnecessary re-renders (`memo`, `useMemo`, `useCallback`, local state), virtualise long lists, split code with `lazy`, and use transitions for heavy updates",
    explanation: "Measure first with the React DevTools Profiler. Then: keep state as low in the tree as possible and split contexts; memoise components and expensive values; use stable keys; render only visible rows of long lists (react-window, TanStack Virtual); lazy-load routes and heavy components; debounce input; use `useTransition`/`useDeferredValue` for slow updates; avoid creating components inside components; optimise images and bundle size; use the production build; consider SSR and the React Compiler."
  },
  {
    id: "react-025",
    question: "When should you use `useMemo`, and when `useCallback`?",
    theme: "React",
    subCategory: "Performance",
    level: "medium",
    fourOptionsForAnAnswer: [
      "`useMemo` caches a computed value; `useCallback` caches a function itself, mainly to pass a stable callback to memoised children or effect dependencies",
      "`useCallback` caches a computed value; `useMemo` caches a function",
      "Both should wrap every value and function in every component",
      "`useMemo` runs side effects; `useCallback` replaces `useEffect`"
    ],
    correctAnswer: "`useMemo` caches a computed value; `useCallback` caches a function itself, mainly to pass a stable callback to memoised children or effect dependencies",
    explanation: "`const sorted = useMemo(() => sortItems(items), [items])` avoids recomputing an expensive value. `const onSave = useCallback(() => save(id), [id])` keeps the same function reference while `id` is unchanged; it equals `useMemo(() => fn, deps)`. Both only help when the work is expensive or the reference matters (`React.memo` children, effect deps). Elsewhere they add overhead and noise. The React Compiler can memoise automatically."
  },
  {
    id: "react-026",
    question: "What is prop drilling, and how do you avoid it?",
    theme: "React",
    subCategory: "State & data flow",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Passing props through many intermediate components that don't use them; avoid it with composition (`children`), Context or a state library",
      "Mutating props inside a child; avoid it with `Object.freeze`",
      "Fetching data inside every component; avoid it with Redux middleware",
      "Passing too many props to one component; avoid it by using classes"
    ],
    correctAnswer: "Passing props through many intermediate components that don't use them; avoid it with composition (`children`), Context or a state library",
    explanation: "When a deep child needs data from a distant ancestor, every component in between must forward it, which couples them and makes refactoring hard. Fixes: pass components via `children` or props so the owner renders the child directly; use `createContext` + `useContext` for app-wide data like theme, user or locale; or use a store (Redux Toolkit, Zustand, Jotai). Some drilling across two or three levels is fine and explicit."
  },
  {
    id: "react-027",
    question: "What is lifting state up?",
    theme: "React",
    subCategory: "State & data flow",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Moving state to a global variable",
      "Storing state in the URL",
      "Moving shared state to the closest common parent and passing it down with props and callbacks",
      "Calling `setState` in a parent from `componentDidMount`"
    ],
    correctAnswer: "Moving shared state to the closest common parent and passing it down with props and callbacks",
    explanation: "When two siblings must stay in sync (e.g. a filter input and a list), neither should own the state. Their parent holds it, passes the value down as props and passes a setter or handler so children can request changes. This keeps a single source of truth. If the common parent is far away, consider Context."
  },
  {
    id: "react-028",
    question: "What is inverse data flow in React?",
    theme: "React",
    subCategory: "State & data flow",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Children mutating their props directly",
      "Data flowing from the DOM back into the virtual DOM",
      "The parent reading the child's state through a ref on every render",
      "A child sending data up by calling a callback function the parent passed as a prop"
    ],
    correctAnswer: "A child sending data up by calling a callback function the parent passed as a prop",
    explanation: "Data in React flows one way: down through props. To go the other way, the parent passes a function (`<Search onChange={setQuery} />`) and the child calls it with the new value. The parent updates its state and re-renders the child with new props. This keeps changes explicit and traceable, unlike two-way binding."
  },
  {
    id: "react-029",
    question: "How do you implement two-way data binding in React?",
    theme: "React",
    subCategory: "State & data flow",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Use the `v-model` attribute",
      "Set both `value` and `defaultValue` on the input",
      "Bind the input's `value` to state and update the state in `onChange`",
      "React binds inputs to state automatically"
    ],
    correctAnswer: "Bind the input's `value` to state and update the state in `onChange`",
    explanation: "React has no built-in two-way binding. You combine one-way data flow with an event: `const [name, setName] = useState(''); <input value={name} onChange={(e) => setName(e.target.value)} />`. State drives the input, and the input updates the state. For checkboxes use `checked`. Form libraries like React Hook Form reduce the boilerplate."
  },
  {
    id: "react-030",
    question: "What is the difference between controlled and uncontrolled components?",
    theme: "React",
    subCategory: "State & data flow",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Controlled inputs can't be edited by the user",
      "A controlled input's value comes from React state via `value` + `onChange`; an uncontrolled input keeps its own value in the DOM, read with a ref",
      "Uncontrolled components don't render anything",
      "Controlled components are class components; uncontrolled ones are functions"
    ],
    correctAnswer: "A controlled input's value comes from React state via `value` + `onChange`; an uncontrolled input keeps its own value in the DOM, read with a ref",
    explanation: "Controlled: React is the source of truth, so you can validate, format or disable things on every keystroke, at the cost of a re-render per change. Uncontrolled: set an initial `defaultValue`/`defaultChecked` and read the value when needed via `useRef` or `FormData` on submit; less code and fewer renders. File inputs are always uncontrolled. Switching an input from `undefined` to a value triggers a warning about changing from uncontrolled to controlled."
  },
  {
    id: "react-031",
    question: "How does React check that props have the expected types?",
    theme: "React",
    subCategory: "State & data flow",
    level: "medium",
    fourOptionsForAnAnswer: [
      "React converts props to the right type automatically",
      "React throws at runtime if a prop isn't a string",
      "Props can't be typed in React",
      "With TypeScript or Flow at build time, or the `prop-types` package at runtime in development"
    ],
    correctAnswer: "With TypeScript or Flow at build time, or the `prop-types` package at runtime in development",
    explanation: "React itself doesn't enforce prop types. Historically `Component.propTypes = { name: PropTypes.string.isRequired }` logged warnings in development. React 19 no longer checks `propTypes` at all, so TypeScript is the standard way: `function Button({ label }: { label: string })`. Default values come from default parameters (`defaultProps` for function components was also removed in React 19)."
  },
  {
    id: "react-032",
    question: "What are the lifecycle stages of a React component?",
    theme: "React",
    subCategory: "Lifecycle & effects",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Mounting, updating and unmounting (plus error handling)",
      "Loading, parsing and executing",
      "Creating, compiling, linking and running",
      "Init, render and destroy only on page load"
    ],
    correctAnswer: "Mounting, updating and unmounting (plus error handling)",
    explanation: "Mounting: the component is created and inserted into the DOM. Updating: it re-renders because props, state or context changed. Unmounting: it is removed and cleans up. Errors thrown while rendering children can be handled by error boundaries. In function components `useEffect` covers all three: the effect runs after mount and relevant updates, and its cleanup runs before the next effect and on unmount."
  },
  {
    id: "react-033",
    question: "Which class lifecycle methods run when a component mounts, in order?",
    theme: "React",
    subCategory: "Lifecycle & effects",
    level: "medium",
    fourOptionsForAnAnswer: [
      "`componentDidMount`, `render`, `constructor`",
      "`render`, `componentDidUpdate`, `componentWillUnmount`",
      "`constructor`, `getDerivedStateFromProps`, `render`, `componentDidMount`",
      "`shouldComponentUpdate`, `render`, `componentDidMount`"
    ],
    correctAnswer: "`constructor`, `getDerivedStateFromProps`, `render`, `componentDidMount`",
    explanation: "Mounting: `constructor` → `static getDerivedStateFromProps` → `render` → `componentDidMount` (fetch data, subscribe, touch the DOM). Updating: `getDerivedStateFromProps` → `shouldComponentUpdate` → `render` → `getSnapshotBeforeUpdate` → `componentDidUpdate`. Unmounting: `componentWillUnmount` (cleanup). Errors: `static getDerivedStateFromError` and `componentDidCatch`. The old `componentWillMount`, `componentWillReceiveProps` and `componentWillUpdate` are deprecated as `UNSAFE_`."
  },
  {
    id: "react-034",
    question: "How do you run an operation only once, after the initial render?",
    theme: "React",
    subCategory: "Lifecycle & effects",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Call it directly in the component body",
      "`useEffect(() => { ... })` with no dependency array",
      "`useMemo(() => { ... })` without dependencies",
      "`useEffect(() => { ... }, [])` with an empty dependency array"
    ],
    correctAnswer: "`useEffect(() => { ... }, [])` with an empty dependency array",
    explanation: "An empty array means the effect has no dependencies, so it runs after mount and its cleanup runs on unmount, like `componentDidMount`/`componentWillUnmount`. Without the array it runs after every render. In development `StrictMode` mounts components twice to expose missing cleanups, so the effect runs twice there; write effects that tolerate it (cleanup, abort fetches). For truly once-per-app work, run it at module level or guard with a ref."
  },
  {
    id: "react-035",
    question: "What is polling, and how do you implement it in React?",
    theme: "React",
    subCategory: "Lifecycle & effects",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Asking the user for input with `prompt`; call it in `render`",
      "Requesting data from the server at regular intervals; start a `setInterval` in `useEffect` and clear it in the cleanup",
      "Reading `localStorage` on every render",
      "Opening a WebSocket and never closing it"
    ],
    correctAnswer: "Requesting data from the server at regular intervals; start a `setInterval` in `useEffect` and clear it in the cleanup",
    explanation: "`useEffect(() => { const id = setInterval(load, 5000); return () => clearInterval(id); }, []);`. Clearing on unmount prevents leaks and updates to unmounted components. Improvements: chain `setTimeout` so slow requests don't overlap, pause when the tab is hidden (`document.visibilityState`), abort in-flight fetches, or use a library option like TanStack Query's `refetchInterval`. For real-time data prefer WebSockets or Server-Sent Events."
  },
  {
    id: "react-036",
    question: "What are error boundaries?",
    theme: "React",
    subCategory: "Lifecycle & effects",
    level: "medium",
    fourOptionsForAnAnswer: [
      "A `try/catch` that wraps the whole app automatically",
      "CSS rules that hide components with errors",
      "Components that catch rendering errors in their child tree and show a fallback UI instead of crashing the whole app",
      "Hooks that catch errors in event handlers"
    ],
    correctAnswer: "Components that catch rendering errors in their child tree and show a fallback UI instead of crashing the whole app",
    explanation: "An error boundary is a class component with `static getDerivedStateFromError` (to show a fallback) and/or `componentDidCatch` (to log). There is no hook equivalent; the react-error-boundary package wraps it. It catches errors during rendering, in lifecycle methods and constructors of children, but not in event handlers, async code (`setTimeout`, promises), server rendering, or the boundary itself. Use `try/catch` in handlers for those."
  },
  {
    id: "react-037",
    question: "What are React hooks?",
    theme: "React",
    subCategory: "Hooks",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Functions starting with `use` that let function components use state, effects, context and other React features",
      "Event listeners attached to DOM nodes",
      "Methods of class components for lifecycle events",
      "Git hooks that run before a React build"
    ],
    correctAnswer: "Functions starting with `use` that let function components use state, effects, context and other React features",
    explanation: "Hooks arrived in React 16.8. Built-in ones include `useState`, `useReducer` (state), `useEffect`, `useLayoutEffect`, `useInsertionEffect` (effects), `useContext`, `useRef`, `useMemo`, `useCallback`, `useId`, `useTransition`, `useDeferredValue`, `useSyncExternalStore`, `useImperativeHandle`, and in React 19 `use`, `useActionState`, `useOptimistic`. Custom hooks combine them to share stateful logic."
  },
  {
    id: "react-038",
    question: "What are the main advantages of hooks?",
    theme: "React",
    subCategory: "Hooks",
    level: "easy",
    fourOptionsForAnAnswer: [
      "They make components run in a separate thread",
      "They let you reuse stateful logic via custom hooks, keep related code together, and avoid classes and `this`",
      "They remove the need for state entirely",
      "They make every component render only once"
    ],
    correctAnswer: "They let you reuse stateful logic via custom hooks, keep related code together, and avoid classes and `this`",
    explanation: "Before hooks, logic reuse needed HOCs or render props, causing 'wrapper hell'. Custom hooks (`useFetch`, `useWindowSize`) share logic without changing the tree. Effects group setup and cleanup for one concern instead of splitting it across lifecycle methods. Function components are shorter, need no `this` binding, and work better with minification and the React Compiler."
  },
  {
    id: "react-039",
    question: "What are common drawbacks of hooks?",
    theme: "React",
    subCategory: "Hooks",
    level: "medium",
    fourOptionsForAnAnswer: [
      "They can only be used in class components",
      "They can't hold state between renders",
      "They make code impossible to test",
      "Stale closures, tricky effect dependency arrays, and rules that forbid calling them conditionally"
    ],
    correctAnswer: "Stale closures, tricky effect dependency arrays, and rules that forbid calling them conditionally",
    explanation: "Each render's functions capture that render's props and state, so a callback in a timer can read stale values. Missing or excessive dependencies cause bugs or infinite loops, and overusing `useEffect` for derived data is common. The rules of hooks restrict where they can be called. Memoization hooks add noise. There is still no hook for error boundaries. The ESLint plugin and the React Compiler address many of these issues."
  },
  {
    id: "react-040",
    question: "Which rules apply to calling hooks?",
    theme: "React",
    subCategory: "Hooks",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Call them at the top level of function components or custom hooks, never inside conditions, loops or nested functions",
      "Call them anywhere, including inside `if` blocks and loops",
      "Call them only inside `useEffect`",
      "Call them only in class components"
    ],
    correctAnswer: "Call them at the top level of function components or custom hooks, never inside conditions, loops or nested functions",
    explanation: "React identifies each hook by its call order in a render, so the order must be the same every time. Don't call hooks in conditions, loops, after an early `return`, in event handlers, in class components or in regular functions. Custom hooks must start with `use`. `eslint-plugin-react-hooks` enforces this. The React 19 `use` API is an exception and can be called conditionally."
  },
  {
    id: "react-041",
    question: "What is `useId` used for?",
    theme: "React",
    subCategory: "Hooks",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Generating keys for list items",
      "Generating unique IDs that are stable between server and client, e.g. to link a `<label>` and an input via `htmlFor` and `aria-*`",
      "Reading the `id` attribute of the root element",
      "Creating database IDs"
    ],
    correctAnswer: "Generating unique IDs that are stable between server and client, e.g. to link a `<label>` and an input via `htmlFor` and `aria-*`",
    explanation: "`const id = useId(); <label htmlFor={id}>Email</label><input id={id} />`. The ID is unique per component instance, so a reusable component can be rendered many times, and it matches during hydration, unlike a counter or `Math.random()`. Use one ID with suffixes (`id + '-hint'`) for several elements. Don't use it for list keys; keys should come from data."
  },
  {
    id: "react-042",
    question: "What does `useTransition` do?",
    theme: "React",
    subCategory: "Concurrent features",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Animates components when they mount and unmount",
      "Delays a state update by a fixed number of milliseconds",
      "Marks a state update as non-urgent so React can keep urgent updates like typing responsive, and gives an `isPending` flag",
      "Switches routes in React Router"
    ],
    correctAnswer: "Marks a state update as non-urgent so React can keep urgent updates like typing responsive, and gives an `isPending` flag",
    explanation: "`const [isPending, startTransition] = useTransition(); startTransition(() => setTab('posts'));`. React renders the transition in the background and can interrupt it if a more urgent update arrives, showing the old UI meanwhile. Use it for tab switches, filtering big lists or navigation. It doesn't work for controlled input values themselves, which must update synchronously. In React 19 the callback can be async (Actions)."
  },
  {
    id: "react-043",
    question: "What does `useDeferredValue` do?",
    theme: "React",
    subCategory: "Concurrent features",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Returns a version of a value that may lag behind during heavy renders, so urgent UI updates first",
      "Debounces a value by 300 ms",
      "Loads a value lazily from the server",
      "Defers an effect until the component unmounts"
    ],
    correctAnswer: "Returns a version of a value that may lag behind during heavy renders, so urgent UI updates first",
    explanation: "`const deferredQuery = useDeferredValue(query); <Results query={deferredQuery} />`. The input updates with `query` immediately, while the slow list renders with the deferred value in the background and can be interrupted. Compare `query !== deferredQuery` to show staleness. Unlike debounce there is no fixed delay; it adapts to device speed. It helps only if the slow child is memoised. Use it when you don't own the state update; use `useTransition` when you do."
  },
  {
    id: "react-044",
    question: "What is `useSyncExternalStore` for?",
    theme: "React",
    subCategory: "Concurrent features",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Syncing state between browser tabs automatically",
      "Saving component state to localStorage",
      "Running effects synchronously before paint",
      "Subscribing to an external store safely with concurrent rendering: `useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)`"
    ],
    correctAnswer: "Subscribing to an external store safely with concurrent rendering: `useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)`",
    explanation: "Reading mutable data outside React (a Redux store, browser APIs like `navigator.onLine`, a custom store) with `useEffect` + `useState` can cause tearing in concurrent rendering, where parts of the UI show different values. This hook gives React a `subscribe` function and a `getSnapshot` that returns the current value (it must return the same value if nothing changed). It is used mainly by libraries like Redux, Zustand and Jotai."
  },
  {
    id: "react-045",
    question: "What is `useInsertionEffect` for?",
    theme: "React",
    subCategory: "Concurrent features",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Inserting DOM nodes manually",
      "Injecting styles from CSS-in-JS libraries before layout effects run, so layout reads see the final styles",
      "Inserting items into a list state",
      "Running code before the component's first render"
    ],
    correctAnswer: "Injecting styles from CSS-in-JS libraries before layout effects run, so layout reads see the final styles",
    explanation: "It fires before `useLayoutEffect` and `useEffect`. Libraries like Emotion or styled-components insert `<style>` rules there, so a layout effect that measures elements doesn't see unstyled content and cause extra layout work. It can't update state and has no access to refs. Application code almost never needs it."
  },
  {
    id: "react-046",
    question: "What is `React.lazy`?",
    theme: "React",
    subCategory: "Performance",
    level: "medium",
    fourOptionsForAnAnswer: [
      "A function that delays every state update",
      "A hook that renders a component only when it is visible",
      "A way to load a component's code on demand: `lazy(() => import('./Chart'))`, rendered inside `<Suspense>` with a fallback",
      "A setting that lowers the priority of all renders"
    ],
    correctAnswer: "A way to load a component's code on demand: `lazy(() => import('./Chart'))`, rendered inside `<Suspense>` with a fallback",
    explanation: "Dynamic `import()` lets the bundler put the component in a separate chunk, loaded the first time it renders. `<Suspense fallback={<Spinner />}>` shows a placeholder meanwhile. Common for routes, modals and heavy widgets to shrink the initial bundle. Declare lazy components at module level, not inside other components, and add an error boundary for network failures. The module must have a default export."
  },
  {
    id: "react-047",
    question: "What are synthetic events in React?",
    theme: "React",
    subCategory: "Events",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Fake events used only in tests",
      "Cross-browser wrappers around native events with the same interface (`preventDefault`, `stopPropagation`), handled via delegation at the root",
      "Events created with `new CustomEvent()`",
      "Events that run in a Web Worker"
    ],
    correctAnswer: "Cross-browser wrappers around native events with the same interface (`preventDefault`, `stopPropagation`), handled via delegation at the root",
    explanation: "Handlers like `onClick` receive a `SyntheticEvent` that normalises browser differences; the native one is at `e.nativeEvent`. Since React 17 listeners are attached to the root container (not `document`), and event pooling was removed, so you can use the event asynchronously. Returning `false` doesn't prevent default; call `e.preventDefault()`. Some events differ from the DOM, e.g. `onChange` behaves like `input`."
  },
  {
    id: "react-048",
    question: "What are pointer events in React?",
    theme: "React",
    subCategory: "Events",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Events for JavaScript pointers to memory",
      "Events that fire only for mouse clicks",
      "Events for the CSS `cursor` property",
      "Unified events for mouse, touch and pen input, such as `onPointerDown`, `onPointerMove` and `onPointerUp`"
    ],
    correctAnswer: "Unified events for mouse, touch and pen input, such as `onPointerDown`, `onPointerMove` and `onPointerUp`",
    explanation: "Pointer events (supported in React since 16.4) let one handler work for every input device instead of separate mouse and touch handlers. The event has `pointerType` ('mouse', 'touch', 'pen'), `pressure` and `pointerId`. Others: `onPointerEnter`, `onPointerLeave`, `onPointerCancel`, `onGotPointerCapture`. `setPointerCapture` keeps receiving events during a drag. Use the CSS `touch-action` property to control browser gestures."
  },
  {
    id: "react-049",
    question: "What is `React.StrictMode`, and what does it give you?",
    theme: "React",
    subCategory: "Fundamentals",
    level: "medium",
    fourOptionsForAnAnswer: [
      "It enables JavaScript strict mode for the whole bundle in production",
      "A development-only wrapper that double-invokes rendering and effects and warns about deprecated APIs, to surface bugs early",
      "A wrapper that makes props read-only",
      "A mode that disables all warnings"
    ],
    correctAnswer: "A development-only wrapper that double-invokes rendering and effects and warns about deprecated APIs, to surface bugs early",
    explanation: "`<StrictMode><App /></StrictMode>` renders nothing visible and has no effect in production. In development it calls component bodies, initialisers and reducers twice to expose impure rendering; it mounts, unmounts and re-mounts components to check effect cleanups; and it warns about legacy APIs like string refs and `findDOMNode`. Benefits: catches side effects in render, missing cleanups, and readiness for concurrent features."
  },
  {
    id: "react-050",
    question: "What is a distributed component?",
    theme: "React",
    subCategory: "Components & patterns",
    level: "hard",
    fourOptionsForAnAnswer: [
      "A component that renders on several servers at once",
      "A component split into one file per prop",
      "A component built and published independently, e.g. as an npm package or via Module Federation, so several apps can share it",
      "A component whose state is stored in several databases"
    ],
    correctAnswer: "A component built and published independently, e.g. as an npm package or via Module Federation, so several apps can share it",
    explanation: "In large organisations UI components are shared across projects through a design-system package, a monorepo, tools like Bit, or loaded at runtime from another app with Webpack Module Federation (micro-frontends). Good distributed components have a clear props API, versioning, documentation (Storybook), no hidden dependencies on app state, and peer dependencies on React instead of bundling their own copy."
  },
  {
    id: "react-051",
    question: "How does client-side routing with React Router differ from traditional routing?",
    theme: "React",
    subCategory: "Routing",
    level: "easy",
    fourOptionsForAnAnswer: [
      "It changes the URL with the History API and renders matching components in the browser, without reloading the page",
      "Each link sends a request and the server returns a new HTML page",
      "It works only with hash URLs like `#/about`",
      "It requires a separate HTML file for every route"
    ],
    correctAnswer: "It changes the URL with the History API and renders matching components in the browser, without reloading the page",
    explanation: "In traditional multi-page routing every navigation is a full page load. React Router intercepts link clicks (`<Link>`), updates the URL with `history.pushState`, and renders the components for the matching route, keeping app state and avoiding reloads. The server must return `index.html` for all app URLs (a fallback) so deep links work. Modern versions also handle data loading and nested layouts."
  },
  {
    id: "react-052",
    question: "Which hooks were added in React Router v5 (5.1)?",
    theme: "React",
    subCategory: "Routing",
    level: "medium",
    fourOptionsForAnAnswer: [
      "`useNavigate`, `useRoutes`, `useOutlet` and `useSearchParams`",
      "`useHistory`, `useLocation`, `useParams` and `useRouteMatch`",
      "`useRouter`, `usePathname` and `useQuery`",
      "`useLoaderData` and `useActionData`"
    ],
    correctAnswer: "`useHistory`, `useLocation`, `useParams` and `useRouteMatch`",
    explanation: "React Router 5.1 added hooks to replace `withRouter` and render props: `useHistory` (navigate with `history.push`), `useLocation` (current location), `useParams` (URL params like `:id`) and `useRouteMatch` (match info). Version 6 replaced `useHistory` with `useNavigate` and `useRouteMatch` with `useMatch`, and added `useRoutes`, `useOutlet` and `useSearchParams`. Data APIs like `useLoaderData` came in 6.4."
  },
  {
    id: "react-053",
    question: "How do you pass extra props to a route component in React Router?",
    theme: "React",
    subCategory: "Routing",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Add them to the URL as JSON",
      "Use `<Route component={Page} props={{ theme }} />`",
      "Routes can't receive props; use global variables",
      "In v6, pass them in the element: `<Route path='/' element={<Page theme={theme} />} />`; in v5, use `render={(props) => <Page {...props} theme={theme} />}`"
    ],
    correctAnswer: "In v6, pass them in the element: `<Route path='/' element={<Page theme={theme} />} />`; in v5, use `render={(props) => <Page {...props} theme={theme} />}`",
    explanation: "In v5, `component={Page}` creates the element itself, so you can't add props (and an inline arrow remounts on every render); `render` or children are the way. In v6 `element` takes a ready element. URL data is read inside the component with `useParams` and `useSearchParams`, and non-URL data can go through `navigate(path, { state })` and `useLocation().state`, context, or route loaders."
  },
  {
    id: "react-054",
    question: "What is Reselect, and how does it work?",
    theme: "React",
    subCategory: "State & data flow",
    level: "medium",
    fourOptionsForAnAnswer: [
      "A library that resets Redux state on logout",
      "A router for selecting pages",
      "A library for memoised Redux selectors: `createSelector` recomputes the result only when its input selectors return new references",
      "A form library for select boxes"
    ],
    correctAnswer: "A library for memoised Redux selectors: `createSelector` recomputes the result only when its input selectors return new references",
    explanation: "`const selectVisibleTodos = createSelector([selectTodos, selectFilter], (todos, filter) => todos.filter(...))`. Input selectors pull raw data from state; the result function derives data and runs only if any input changed. This avoids repeated expensive work and, importantly, returns the same reference so `useSelector` doesn't re-render components. It is included in Redux Toolkit. By default each selector caches one result, so per-component parameters need a selector per instance."
  },
  {
    id: "react-055",
    question: "Which are good security practices in React?",
    theme: "React",
    subCategory: "Security",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Use `dangerouslySetInnerHTML` for all user content because React sanitises it",
      "Store secrets and API keys in the frontend bundle",
      "Disable JSX escaping for better performance",
      "Rely on JSX escaping, sanitise any raw HTML, validate URLs in `href`, keep secrets on the server, and use a CSP"
    ],
    correctAnswer: "Rely on JSX escaping, sanitise any raw HTML, validate URLs in `href`, keep secrets on the server, and use a CSP",
    explanation: "React escapes values in `{ }`, which blocks most XSS. Risks remain: `dangerouslySetInnerHTML` (sanitise with DOMPurify); user-provided URLs like `javascript:` in `href` or `src` (allow only http/https); refs and direct DOM APIs (`innerHTML`); server-rendered state injected into HTML without escaping; and vulnerable dependencies (`npm audit`). Everything in the bundle is public, so never ship secrets. Use HTTPS, a Content Security Policy, httpOnly cookies for tokens, and CSRF protection."
  }
];
