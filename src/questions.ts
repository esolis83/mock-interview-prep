import type { Question } from './types'

export const QUESTIONS: Question[] = [

/* ══════════════════════════════════════════
   ROUND 1 — Advanced React & JavaScript
   ══════════════════════════════════════════ */
{
  id:1, round:1, roundName:"Advanced React & JavaScript", category:"React Core",
  question:"What is React Fiber, and why was it introduced?",
  options:[
    "A CSS-in-JS styling library bundled with React 18",
    "React's reimplemented reconciliation algorithm enabling incremental, priority-based rendering",
    "A lightweight global state manager built into React core",
    "A fiber-optic inspired testing utility for simulating network latency"
  ],
  correct:1,
  explanation:`<strong>React Fiber</strong> is a complete rewrite of React's reconciliation algorithm (React 16). The old stack reconciler was synchronous — it blocked the main thread until the whole tree was processed.<br><br>
Fiber breaks work into small units that can be <strong>paused, prioritized, or aborted</strong>, enabling Concurrent Mode, Suspense, useTransition, and time-slicing. Each component maps to a fiber object tracking state, props, and effects.`
},
{
  id:2, round:1, roundName:"Advanced React & JavaScript", category:"JavaScript",
  question:"What will this snippet output?\n\nconsole.log(typeof null);\nconsole.log(null instanceof Object);",
  options:[
    '"null" and true',
    '"undefined" and false',
    '"object" and false',
    '"object" and true'
  ],
  correct:2,
  explanation:`<code>typeof null === "object"</code> is a <strong>historical JavaScript bug</strong>. Early JS stored values as type-tag + value; the tag for objects was 0, and null was a null pointer (0x00), so it got the same tag.<br><br>
<code>null instanceof Object</code> is <code>false</code> because <code>instanceof</code> walks the prototype chain — null has none. Always use <code>=== null</code> for reliable null checks.`
},
{
  id:3, round:1, roundName:"Advanced React & JavaScript", category:"React Core",
  question:"What is the Virtual DOM and how does React's diffing algorithm decide what to update?",
  options:[
    "A browser API that stores a copy of the DOM in GPU memory for faster repaints",
    "A JavaScript object tree React maintains; it diffs old vs new trees and patches only changed real DOM nodes",
    "A shadow DOM implementation that isolates styles per component",
    "A server-side cache of rendered HTML strings sent to the client"
  ],
  correct:1,
  explanation:`The <strong>Virtual DOM</strong> is a lightweight JS object tree representing the real DOM. On each render React produces a new VDOM tree, diffs it against the previous one (<strong>reconciliation</strong>), and applies minimal patches to the real DOM.<br><br>
Key diffing heuristics: (1) Elements of different types are torn down entirely. (2) Elements of the same type update in-place. (3) The <code>key</code> prop is used to track list items across renders without full re-creation.`
},
{
  id:4, round:1, roundName:"Advanced React & JavaScript", category:"React Hooks",
  question:"What is the difference between useEffect and useLayoutEffect?",
  options:[
    "useLayoutEffect runs after the browser paints; useEffect runs before",
    "useEffect runs asynchronously after paint; useLayoutEffect runs synchronously after DOM mutations but before paint",
    "They are identical — useLayoutEffect is just an alias for useEffect",
    "useLayoutEffect only works in class components; useEffect is for functional components"
  ],
  correct:1,
  explanation:`<strong>useEffect</strong> fires <em>after</em> the browser has painted — it's async and non-blocking, ideal for data fetching, subscriptions, and logging.<br><br>
<strong>useLayoutEffect</strong> fires <em>synchronously after</em> React mutates the DOM but <em>before</em> the browser paints. Use it when you need to read layout (e.g. element dimensions) or make DOM mutations that must be invisible to the user — otherwise you'll see a flash. Because it's synchronous it can block paint, so default to useEffect.`
},
{
  id:5, round:1, roundName:"Advanced React & JavaScript", category:"React Hooks",
  question:"When should you use useCallback vs useMemo?",
  options:[
    "useCallback memoizes a value; useMemo memoizes a function — they are inverses",
    "useCallback memoizes a function reference; useMemo memoizes a computed value — both prevent recreation on every render",
    "useCallback is for async functions; useMemo is for synchronous computations",
    "They are only useful in class components; functional components don't need them"
  ],
  correct:1,
  explanation:`<code>useCallback(fn, deps)</code> returns a <strong>memoized function</strong> — the same reference across renders unless deps change. Use it when passing callbacks to child components wrapped in React.memo so they don't re-render unnecessarily.<br><br>
<code>useMemo(fn, deps)</code> returns the <strong>memoized return value</strong> of fn — used for expensive computations (sorting, filtering large lists) you don't want to re-run every render.<br><br>
<em>Rule of thumb:</em> don't reach for either by default — premature memoization adds complexity. Profile first.`
},
{
  id:6, round:1, roundName:"Advanced React & JavaScript", category:"React Core",
  question:"Why is using an array index as a React key considered problematic?",
  options:[
    "Array indexes are strings; React keys must be integers",
    "When items are reordered or removed, index-based keys cause React to reuse the wrong component state",
    "Array indexes are not stable — they change on every render regardless of the list content",
    "Using indexes as keys prevents the Virtual DOM from diffing the list at all"
  ],
  correct:1,
  explanation:`React uses <code>key</code> to identify which component instance maps to which list item across renders. When you use index as key and the list is <strong>sorted, filtered, or items are removed</strong>, the same index now maps to a different item — React reuses the existing component state for the wrong item.<br><br>
Example: a list of inputs at indexes [0,1,2]. Delete index 0 — indexes shift; the old index 1 becomes 0 and inherits index 0's state. Use a <strong>stable, unique ID</strong> from your data instead.`
},
{
  id:7, round:1, roundName:"Advanced React & JavaScript", category:"React Hooks",
  question:"What new concurrent features did React 18 introduce?",
  options:[
    "Hooks, Suspense, and the Virtual DOM were all introduced in React 18",
    "useTransition, useDeferredValue, automatic batching, and the createRoot API for opt-in concurrent rendering",
    "React 18 only added server components — all other APIs existed in React 17",
    "React 18 replaced class components entirely with the new use() hook"
  ],
  correct:1,
  explanation:`React 18's headline additions:<br><br>
• <strong>createRoot</strong> — opt in to concurrent rendering (replaces ReactDOM.render)<br>
• <strong>useTransition</strong> — mark state updates as non-urgent so urgent updates (typing) aren't blocked<br>
• <strong>useDeferredValue</strong> — defer re-rendering an expensive derived value<br>
• <strong>Automatic batching</strong> — state updates inside promises/timeouts are now batched too (previously only in event handlers)<br>
• <strong>Suspense on the server</strong> — streaming SSR with selective hydration`
},
{
  id:8, round:1, roundName:"Advanced React & JavaScript", category:"React Core",
  question:"What is the difference between a controlled and an uncontrolled component in React?",
  options:[
    "Controlled components use refs; uncontrolled components use useState",
    "A controlled component's value is driven by React state; an uncontrolled component stores its own state in the DOM",
    "Controlled components render faster because they skip reconciliation",
    "Uncontrolled components are deprecated in React 17+"
  ],
  correct:1,
  explanation:`A <strong>controlled component</strong> has its value set by React state: <code>&lt;input value={val} onChange={setVal} /&gt;</code>. React is the single source of truth — you control every keystroke.<br><br>
An <strong>uncontrolled component</strong> lets the DOM own the value; you read it via a ref when needed (e.g. <code>inputRef.current.value</code>). Uncontrolled components are simpler for basic forms or when integrating with non-React libraries, but controlled components are preferred for validation, conditional disabling, and dynamic form logic.`
},
{
  id:9, round:1, roundName:"Advanced React & JavaScript", category:"JavaScript",
  question:"Explain JavaScript's Event Loop in the context of this code:\n\nsetTimeout(() => console.log('A'), 0);\nPromise.resolve().then(() => console.log('B'));\nconsole.log('C');",
  options:[
    "Output: A → B → C",
    "Output: C → A → B",
    "Output: C → B → A",
    "Output: B → C → A"
  ],
  correct:2,
  explanation:`Order of execution:<br><br>
1. <strong>C</strong> — synchronous, runs immediately on the call stack<br>
2. <strong>B</strong> — Promise callbacks go to the <em>microtask queue</em>, which is drained completely before the next task<br>
3. <strong>A</strong> — setTimeout callback goes to the <em>macrotask queue</em>, processed after all microtasks<br><br>
The Event Loop processes: <em>call stack → microtasks (Promises, queueMicrotask) → render → macrotasks (setTimeout, setInterval, I/O)</em>. Microtasks always run before the next macrotask.`
},
{
  id:10, round:1, roundName:"Advanced React & JavaScript", category:"JavaScript",
  question:"What is a JavaScript closure and why is it important for React developers?",
  options:[
    "A closure is when a function returns another function — it only applies to higher-order functions",
    "A closure is a function that retains access to variables in its outer lexical scope even after the outer function has returned",
    "Closures are a memory leak pattern that React's compiler automatically prevents",
    "A closure is a pure function with no side effects — the same concept as a React pure component"
  ],
  correct:1,
  explanation:`A <strong>closure</strong> is formed when a function captures variables from its enclosing scope. In React, this matters constantly:<br><br>
• <strong>Stale closures in useEffect/useCallback</strong>: if you capture state/props in a closure but the deps array is wrong, you'll read old values. The "stale closure" bug is one of the most common React pitfalls.<br>
• <strong>Event handlers</strong>: a handler created during a render closes over that render's state snapshot.<br>
• Fix: include the variable in the dependency array, or use a ref to hold the latest value.`
},
{
  id:11, round:1, roundName:"Advanced React & JavaScript", category:"JavaScript",
  question:"What is the difference between Promise.all, Promise.allSettled, Promise.race, and Promise.any?",
  options:[
    "They all do the same thing — just aliases for different coding styles",
    "Promise.all rejects on first failure; Promise.allSettled waits for all; Promise.race resolves/rejects on first settled; Promise.any resolves on first fulfilled",
    "Promise.race cancels all other promises; Promise.any runs them in sequence",
    "Promise.allSettled is the same as Promise.all but only available in Node.js"
  ],
  correct:1,
  explanation:`<strong>Promise.all(arr)</strong> — resolves when <em>all</em> resolve; rejects immediately if <em>any</em> rejects. Use for parallel operations that all must succeed.<br><br>
<strong>Promise.allSettled(arr)</strong> — waits for <em>all</em> to settle (fulfilled or rejected); never short-circuits. Use when you need all results regardless of individual failures.<br><br>
<strong>Promise.race(arr)</strong> — settles with the first promise to settle (fulfilled or rejected). Use for timeouts.<br><br>
<strong>Promise.any(arr)</strong> — resolves with the first <em>fulfilled</em> promise; only rejects if <em>all</em> reject (AggregateError). Use for fallback strategies.`
},
{
  id:12, round:1, roundName:"Advanced React & JavaScript", category:"JavaScript",
  question:"What does JavaScript 'hoisting' mean, and how does it differ between var, let/const, and function declarations?",
  options:[
    "Hoisting moves code to the top of the file at runtime — all declarations behave identically",
    "var and function declarations are hoisted and initialized (var to undefined); let/const are hoisted but not initialized, creating a Temporal Dead Zone",
    "Only function declarations are hoisted; var, let, and const are never hoisted",
    "Hoisting is a transpiler optimization in Babel — native JS engines don't hoist"
  ],
  correct:1,
  explanation:`<strong>Hoisting</strong> means declarations are processed before code runs. But initialization differs:<br><br>
• <strong>var</strong> — hoisted and initialized to <code>undefined</code>. You can reference it before its line without an error (just get undefined).<br>
• <strong>function declarations</strong> — fully hoisted (name + body). You can call them before the line they appear on.<br>
• <strong>let/const</strong> — hoisted but <em>not</em> initialized. Accessing them before declaration throws a <strong>ReferenceError</strong> — this window is the <em>Temporal Dead Zone (TDZ)</em>.<br>
• <strong>function expressions / arrow functions</strong> — follow the rules of whatever they're assigned to (var/let/const).`
},
{
  id:13, round:1, roundName:"Advanced React & JavaScript", category:"JavaScript",
  question:"What is the difference between call(), apply(), and bind()?",
  options:[
    "call() and apply() are identical; bind() returns a string representation of the function",
    "call() invokes immediately with args as a list; apply() invokes immediately with args as an array; bind() returns a new function with 'this' fixed",
    "bind() invokes the function asynchronously; call() and apply() are synchronous",
    "apply() permanently changes a function's 'this'; call() and bind() only change it for one call"
  ],
  correct:1,
  explanation:`All three set a function's <code>this</code> context:<br><br>
<code>fn.call(thisArg, arg1, arg2)</code> — invokes <em>immediately</em>, args passed individually<br>
<code>fn.apply(thisArg, [arg1, arg2])</code> — invokes <em>immediately</em>, args as an <em>array</em> (mnemonic: <strong>A</strong>pply = <strong>A</strong>rray)<br>
<code>fn.bind(thisArg, arg1)</code> — returns a <em>new function</em> with this permanently bound; does not invoke immediately. Useful for event handlers and React class component method binding.`
},
{
  id:14, round:1, roundName:"Advanced React & JavaScript", category:"JavaScript",
  question:"What is event delegation and why is it a performance optimization?",
  options:[
    "Delegating events to a Web Worker to avoid blocking the main thread",
    "Attaching one event listener to a parent element that handles events bubbling up from children, instead of attaching listeners to each child",
    "Using passive event listeners to improve scroll performance",
    "A pattern where child components delegate event handling to their parent React component"
  ],
  correct:1,
  explanation:`<strong>Event delegation</strong> leverages event bubbling: events fired on a child propagate up to ancestors. Instead of attaching <em>N</em> listeners (one per list item), you attach <em>one</em> listener on the parent and check <code>event.target</code> to identify which child triggered it.<br><br>
Benefits:<br>
• Fewer listeners = less memory<br>
• Automatically handles <strong>dynamically added</strong> children — no need to re-attach listeners<br>
• Used internally by React — React attaches a single event listener at the root and handles all synthetic events from there.`
},
{
  id:15, round:1, roundName:"Advanced React & JavaScript", category:"JavaScript",
  question:"What is the Prototype Chain in JavaScript?",
  options:[
    "A build tool chain that compiles TypeScript prototypes to JavaScript",
    "A linked chain of objects where property lookups traverse from an object to its prototype, and so on, until null is reached",
    "The order in which constructors are called when using the new keyword",
    "A design pattern for creating objects with shared methods using the class keyword"
  ],
  correct:1,
  explanation:`Every JavaScript object has an internal <code>[[Prototype]]</code> link to another object (or null). When you access a property, the engine looks on the object first, then walks up the prototype chain until it finds the property or reaches null.<br><br>
<code>Object.create(proto)</code> — sets the prototype explicitly<br>
<code>class</code> syntax — syntactic sugar over prototype-based inheritance<br><br>
Understanding prototypes matters for:<br>
• Understanding why <code>Array.prototype.map</code> is available on every array<br>
• Debugging "property is undefined" when you expect inheritance<br>
• Performance: prototype methods are shared, not copied per instance`
},
{
  id:16, round:1, roundName:"Advanced React & JavaScript", category:"React Core",
  question:"What is React.memo and when should you NOT use it?",
  options:[
    "React.memo is a hook that memoizes the return value of an expensive function",
    "React.memo is a HOC that shallow-compares props and skips re-rendering if props haven't changed; avoid it when props are always new objects or re-renders are cheap",
    "React.memo is equivalent to shouldComponentUpdate but only works with class components",
    "React.memo replaces PureComponent entirely and should be used on every functional component by default"
  ],
  correct:1,
  explanation:`<code>React.memo(Component)</code> wraps a component so it only re-renders when its props change (shallow comparison by default). It's a performance optimization.<br><br>
<strong>When to skip it:</strong><br>
• When the component is cheap to render — memoization overhead may cost more than the render<br>
• When props include <em>new objects/arrays/functions</em> on every render (the comparison always fails anyway — fix with useMemo/useCallback first)<br>
• When the component almost always renders with different props<br><br>
Use a custom comparison function as the second arg for deep checks: <code>React.memo(Comp, (prev, next) => prev.id === next.id)</code>`
},
{
  id:17, round:1, roundName:"Advanced React & JavaScript", category:"React Hooks",
  question:"What are the non-DOM use cases for useRef?",
  options:[
    "useRef can only access DOM elements — it has no other use case",
    "useRef stores a mutable value that persists across renders without triggering a re-render — useful for previous values, timers, and instance variables",
    "useRef creates a reactive value; updating it automatically re-renders the component",
    "useRef is a performance-optimized version of useState for numeric values only"
  ],
  correct:1,
  explanation:`<code>useRef</code> returns a plain object <code>{ current: value }</code> that is <strong>stable across renders</strong>. Mutating <code>.current</code> never triggers a re-render.<br><br>
Common non-DOM uses:<br>
• <strong>Store previous state/props:</strong> <code>prevCountRef.current = count</code> inside useEffect<br>
• <strong>Store interval/timeout IDs</strong> for cleanup without re-render on set<br>
• <strong>Track mount state</strong> in async effects (isMounted pattern)<br>
• <strong>Instance variables</strong> — any value you need to persist across renders without reactive behavior (equivalent to class instance properties)`
},
{
  id:18, round:1, roundName:"Advanced React & JavaScript", category:"React Core",
  question:"What does React.StrictMode do in development?",
  options:[
    "It enforces TypeScript strict mode settings in the React compiler",
    "It renders components twice, invokes lifecycle methods twice, and warns about deprecated APIs to help surface side-effect bugs",
    "It prevents all console.log statements from running in the browser",
    "It compiles JSX with extra runtime checks that are stripped in production builds"
  ],
  correct:1,
  explanation:`<code>&lt;React.StrictMode&gt;</code> is a development-only tool (no production impact). It:<br><br>
• <strong>Double-invokes</strong> component render functions, reducers, and useState initializers — surfaces impure functions that rely on side effects<br>
• <strong>Double-fires effects</strong> (mount → unmount → mount) in React 18+ to simulate fast-refresh and expose missing cleanup logic<br>
• <strong>Warns about deprecated APIs</strong> (legacy context, string refs, findDOMNode)<br><br>
If your app behaves differently under StrictMode, you have a bug — StrictMode just makes it visible.`
},
{
  id:19, round:1, roundName:"Advanced React & JavaScript", category:"JavaScript",
  question:"What is the difference between shallow equality and deep equality in JavaScript?",
  options:[
    "Shallow equality uses == while deep equality uses ===",
    "Shallow equality compares object references; deep equality recursively compares all nested values",
    "Deep equality is only available via the lodash library; JavaScript has no built-in deep equality",
    "Shallow equality compares the first level of properties only; deep equality is handled by JSON.stringify"
  ],
  correct:1,
  explanation:`<strong>Shallow equality</strong> (<code>===</code>): two objects are equal only if they are the <em>same reference in memory</em>. <code>{a:1} === {a:1}</code> is <code>false</code> — different objects.<br><br>
<strong>Deep equality</strong>: recursively compares all nested properties and values. <code>_.isEqual({a:{b:1}}, {a:{b:1}})</code> returns true.<br><br>
Why it matters in React:<br>
• React.memo and useMemo/useCallback use <strong>shallow comparison</strong> by default<br>
• Passing <code>{ filter: 'active' }</code> inline creates a new object every render — shallow compare always says "changed"<br>
• Fix: memoize the object, or use <code>useMemo</code>`
},
{
  id:20, round:1, roundName:"Advanced React & JavaScript", category:"JavaScript",
  question:"What are JavaScript generators and what problem do they solve?",
  options:[
    "Generators are a way to create class instances without using the new keyword",
    "Generator functions can pause and resume execution using yield, enabling lazy sequences, async control flow, and cancellable operations",
    "Generators compile TypeScript generics to runtime JavaScript type checks",
    "A generator is the same as an async function — both use Promises internally"
  ],
  correct:1,
  explanation:`A <strong>generator function</strong> (<code>function*</code>) returns an iterator. Each <code>yield</code> pauses execution and returns a value; calling <code>.next()</code> resumes it.<br><br>
Use cases:<br>
• <strong>Infinite / lazy sequences</strong>: generate IDs, paginated data without loading all at once<br>
• <strong>Async control flow</strong>: redux-saga uses generators to make async code look synchronous<br>
• <strong>Cancellable operations</strong>: you can stop consuming an iterator at any point<br><br>
While async/await replaced many generator patterns, generators remain powerful for pull-based data pipelines and libraries needing fine-grained execution control.`
},
{
  id:21, round:1, roundName:"Advanced React & JavaScript", category:"React Core",
  question:"What is the difference between SSR, SSG, and CSR and when would you choose each?",
  options:[
    "They are identical rendering strategies that produce the same output — the difference is only where the JavaScript runs",
    "CSR renders in the browser (slow first load, fast navigation); SSR renders HTML per-request on the server; SSG pre-renders HTML at build time — choose based on data freshness needs",
    "SSR and SSG are only available in Next.js; CSR is native React",
    "SSG always outperforms SSR for all use cases — SSR is legacy"
  ],
  correct:1,
  explanation:`<strong>CSR (Client-Side Rendering)</strong> — blank HTML shell, JS runs in browser, builds the page. Fast after initial load; poor for SEO, slow first paint.<br><br>
<strong>SSR (Server-Side Rendering)</strong> — HTML generated per request on the server. Good for dynamic, personalized data (user dashboard). Higher server load, but fast first paint + SEO.<br><br>
<strong>SSG (Static Site Generation)</strong> — HTML pre-built at deploy time. Lightning fast, CDN-cacheable. Best for content that doesn't change per user (marketing pages, docs).<br><br>
Modern frameworks (Next.js, Remix) let you mix strategies per route.`
},
{
  id:22, round:1, roundName:"Advanced React & JavaScript", category:"React Core",
  question:"What is the useReducer hook and when should you prefer it over useState?",
  options:[
    "useReducer is a Redux alternative — it replaces the need for any external state manager",
    "useReducer manages state via a pure reducer function; prefer it when state has multiple sub-values or when next state depends on complex logic involving the current state",
    "useReducer only works with objects; useState should be used for all primitive values",
    "useReducer batches all state updates by default; useState does not"
  ],
  correct:1,
  explanation:`<code>useReducer(reducer, initialState)</code> is ideal when:<br><br>
• State is an <strong>object with multiple sub-fields</strong> that update together<br>
• <strong>Next state depends on current state</strong> with complex logic (e.g. a form with many validation rules)<br>
• You want <strong>predictable state transitions</strong> (all transitions documented in one reducer function)<br>
• State logic is complex enough to warrant <strong>unit testing in isolation</strong><br><br>
If your state is a simple boolean/number/string, useState is cleaner. Think of useReducer as useState for when the "how it changes" logic deserves its own home.`
},
{
  id:23, round:1, roundName:"Advanced React & JavaScript", category:"JavaScript",
  question:"What is the difference between WeakMap/WeakSet and Map/Set?",
  options:[
    "WeakMap and WeakSet are faster versions of Map and Set optimized for small datasets",
    "WeakMap/WeakSet hold weak references to object keys — if no other reference exists, the entry is garbage-collected automatically",
    "WeakMap is read-only; Map supports both read and write operations",
    "WeakSet can only store primitive values; Set stores objects"
  ],
  correct:1,
  explanation:`<code>WeakMap</code> and <code>WeakSet</code> hold <strong>weak references</strong> to objects. If the only reference to an object is inside a WeakMap/WeakSet, it becomes eligible for garbage collection — the entry disappears automatically.<br><br>
Practical use: caching computed results keyed by DOM nodes or objects without preventing GC:<br>
<code>const cache = new WeakMap();</code><br>
When the DOM node is removed, its cache entry is automatically freed.<br><br>
Limitations: no iteration, no <code>.size</code>. If you need iteration, use a regular Map/Set and manage memory manually.`
},
{
  id:24, round:1, roundName:"Advanced React & JavaScript", category:"React Core",
  question:"What is React's Context API best suited for, and what are its performance pitfalls?",
  options:[
    "Context is a full state management solution that replaces Redux in all cases",
    "Context is best for low-frequency global values (theme, auth, locale); every consumer re-renders when context value changes — even if the consumer only uses one field",
    "Context prevents prop drilling and has no performance cost because React memoizes context values automatically",
    "Context only works one level deep — nested providers always override parent providers"
  ],
  correct:1,
  explanation:`Context is ideal for <strong>infrequently updated, truly global</strong> data: current user, theme, language, feature flags.<br><br>
<strong>Performance pitfall:</strong> when the context value changes, <em>every</em> consumer re-renders — including those that only care about a field that didn't change. Object values like <code>value={{ user, logout }}</code> create a new object on every parent render, triggering all consumers.<br><br>
Mitigations:<br>
• Split contexts by update frequency<br>
• Memoize the context value with <code>useMemo</code><br>
• For high-frequency state, use Zustand, Jotai, or Redux which use fine-grained subscriptions`
},
{
  id:25, round:1, roundName:"Advanced React & JavaScript", category:"JavaScript",
  question:"What does 'this' refer to in an arrow function vs a regular function?",
  options:[
    "Arrow functions have their own 'this' that changes based on how they are called; regular functions inherit 'this' from their enclosing scope",
    "Regular functions define their own 'this' based on the call site; arrow functions capture 'this' from the enclosing lexical scope and cannot be rebound",
    "They are identical — 'this' always refers to the global object in both cases",
    "Arrow functions bind 'this' to the class instance; regular functions bind to the module"
  ],
  correct:1,
  explanation:`<strong>Regular functions</strong>: <code>this</code> is determined at <em>call time</em> — it depends on how the function is invoked (method call, standalone, new, call/apply).<br><br>
<strong>Arrow functions</strong>: <code>this</code> is <em>lexically bound</em> — inherited from the surrounding scope where the arrow function is defined, and <strong>cannot be changed</strong> (bind/call/apply have no effect on it).<br><br>
Why it matters in React: event handlers as class methods need <code>.bind(this)</code> or arrow function syntax to avoid losing <code>this</code>. Functional components with hooks sidestep this entirely.`
},
{
  id:26, round:1, roundName:"Advanced React & JavaScript", category:"React Core",
  question:"What is React's reconciliation 'diffing heuristic' and what are its two key assumptions?",
  options:[
    "React diffs every node exhaustively with O(n³) complexity for maximum accuracy",
    "React assumes: (1) elements of different types produce different trees; (2) keys signal stable identity across renders — enabling O(n) diffing",
    "React only diffs leaf nodes (text and inputs) and ignores structural changes",
    "React uses a hash of the rendered HTML to detect changes rather than tree diffing"
  ],
  correct:1,
  explanation:`Full tree diffing is O(n³). React uses two heuristics to achieve <strong>O(n)</strong>:<br><br>
1. <strong>Different type = tear down:</strong> If a <code>&lt;div&gt;</code> becomes a <code>&lt;span&gt;</code>, React destroys the entire subtree and builds a new one — no attempt to reconcile children.<br><br>
2. <strong>Keys signal identity:</strong> For lists, keys tell React which element maps to which between renders. Same key = update in-place. Missing/changed key = unmount + remount.<br><br>
These heuristics are accurate ~99% of the time, trading theoretical correctness for massive practical speedup.`
},
{
  id:27, round:1, roundName:"Advanced React & JavaScript", category:"JavaScript",
  question:"What is the difference between debounce and throttle?",
  options:[
    "Debounce delays execution until after a pause; throttle limits execution to once per interval — both reduce call frequency",
    "Throttle delays the first call by N ms; debounce cancels subsequent calls entirely",
    "They are the same pattern with different naming conventions across libraries",
    "Debounce is for synchronous functions; throttle is for async functions"
  ],
  correct:0,
  explanation:`<strong>Debounce</strong> — waits until activity has <em>stopped</em> for N ms before firing. The timer resets on each call. Ideal for search-as-you-type (fire only when the user stops typing).<br><br>
<strong>Throttle</strong> — fires at most once per N ms regardless of how many calls come in. Ideal for scroll, resize, and mousemove handlers (limit to 60fps).<br><br>
Mental model: debounce = "fire once after the burst ends"; throttle = "fire at a steady rate during a burst".`
},
{
  id:28, round:1, roundName:"Advanced React & JavaScript", category:"React Hooks",
  question:"Why must React hooks only be called at the top level of a component, never inside conditionals or loops?",
  options:[
    "It is a style preference enforced by ESLint — there is no technical requirement",
    "React tracks hooks by call order. Conditional or looped calls can change the order between renders, causing React to match state to the wrong hook",
    "Hooks inside conditionals are always ignored by React and produce no state",
    "Hooks can be called conditionally in React 19+ — this rule is being deprecated"
  ],
  correct:1,
  explanation:`React doesn't store hooks by name — it stores them <strong>in order of invocation</strong> as a linked list on the fiber. On every render, hooks must be called in the exact same order so React can match stored state to the right hook call.<br><br>
If a hook is inside an <code>if</code> statement:<br>
• Render 1: hooks called are [A, B, C]<br>
• Render 2 (condition false): [A, C] — now C gets B's state<br><br>
The <code>eslint-plugin-react-hooks</code> enforces the Rules of Hooks statically.`
},

/* ══════════════════════════════════════════
   ROUND 2 — Coding Round
   ══════════════════════════════════════════ */
{
  id:29, round:2, roundName:"Coding Round", category:"Custom Hooks",
  question:"You're writing a custom useFetch hook. Which pattern correctly prevents a state update on an unmounted component?",
  options:[
    "Wrap the hook in React.memo to prevent unnecessary re-renders",
    "Use useLayoutEffect instead of useEffect to run synchronously",
    "Return an AbortController from useEffect and abort in the cleanup; guard setState with an isMounted flag",
    "Use a global isMounted variable outside the component"
  ],
  correct:2,
  explanation:`<strong>Modern approach — AbortController:</strong><br><br>
<code>useEffect(() => {
  const controller = new AbortController();
  let isMounted = true;
  fetch(url, { signal: controller.signal })
    .then(r => r.json())
    .then(data => { if (isMounted) setData(data); });
  return () => { isMounted = false; controller.abort(); };
}, [url]);</code><br><br>
The <code>isMounted</code> flag guards setState; <code>controller.abort()</code> also cancels the network request — saving bandwidth, not just guarding state.`
},
{
  id:30, round:2, roundName:"Coding Round", category:"JavaScript Patterns",
  question:"Implement a debounce function. Which implementation is correct?",
  options:[
    "function debounce(fn, delay) { return fn; } // functions naturally debounce",
    "function debounce(fn, delay) { let id; return (...args) => { clearTimeout(id); id = setTimeout(() => fn(...args), delay); }; }",
    "function debounce(fn, delay) { return setTimeout(fn, delay); }",
    "function debounce(fn, delay) { let last = 0; return (...args) => { if (Date.now() - last > delay) { fn(...args); last = Date.now(); } }; }"
  ],
  correct:1,
  explanation:`The correct debounce:<br>
1. Uses a <strong>closure</strong> to hold the timer ID (<code>id</code>) across calls<br>
2. <code>clearTimeout(id)</code> — cancels any pending call on each new invocation<br>
3. <code>setTimeout(() => fn(...args), delay)</code> — restarts the timer<br><br>
Option D is a <em>throttle</em>, not debounce. Debounce fires after activity stops; throttle fires at a capped rate. The closure is key — each returned function shares the same <code>id</code> reference.`
},
{
  id:31, round:2, roundName:"Coding Round", category:"React State",
  question:"What is the correct way to update state based on the previous state value in React?",
  options:[
    "setCount(count + 1) — always safe because React batches updates",
    "setCount(prev => prev + 1) — the functional form guarantees you get the latest state, not a stale closure",
    "count++; setCount(count) — mutating the variable then setting it ensures accuracy",
    "Both A and B produce identical results in all situations"
  ],
  correct:1,
  explanation:`React state updates may be <strong>batched</strong> — multiple calls in the same event are merged. If you call <code>setCount(count + 1)</code> three times, all three see the <em>same stale count</em> and only increment once.<br><br>
The <strong>functional updater form</strong> <code>setCount(prev => prev + 1)</code> always receives the <em>latest queued state</em> regardless of batching — each call sees the result of the previous one.<br><br>
Rule: whenever next state depends on current state, always use the functional form.`
},
{
  id:32, round:2, roundName:"Coding Round", category:"Performance",
  question:"A parent component re-renders and causes an expensive child to re-render unnecessarily. What is the correct sequence of fixes?",
  options:[
    "Immediately add React.memo, useMemo, and useCallback to everything in the parent",
    "First profile in React DevTools to confirm the bottleneck; then memoize the child with React.memo; then stabilize props with useMemo/useCallback only if needed",
    "Move all state to a global store to prevent parent re-renders entirely",
    "Split the component into dozens of smaller components — smaller components always render faster"
  ],
  correct:1,
  explanation:`<strong>Process matters:</strong><br><br>
1. <strong>Profile first</strong> — React DevTools Profiler shows which renders are expensive. Don't guess.<br>
2. <strong>React.memo on the child</strong> — skips render if props haven't changed (shallow compare)<br>
3. <strong>Stabilize props</strong> — if a prop is an inline object/function, it's a new reference every render. Memoize with <code>useMemo</code> (values) or <code>useCallback</code> (functions)<br><br>
Premature memoization adds complexity and can actually slow things down due to comparison overhead. Measure before optimizing.`
},
{
  id:33, round:2, roundName:"Coding Round", category:"React Patterns",
  question:"What happens if you call setState inside useEffect with an empty dependency array []?",
  options:[
    "setState in useEffect with [] runs once on mount — safe and commonly used for initialization",
    "setState in useEffect with [] causes an infinite loop because every setState triggers a re-render",
    "React throws an error — setState cannot be called inside useEffect",
    "The state update is ignored because the empty array tells React the effect is pure"
  ],
  correct:0,
  explanation:`<code>useEffect(() => { setState(value); }, [])</code> runs <strong>once on mount</strong> — like componentDidMount. It is safe and a common pattern for:<br>
• Fetching initial data and storing it in state<br>
• Reading from localStorage on mount<br>
• Setting up a subscription and initializing state with its current value<br><br>
An <strong>infinite loop</strong> occurs when you include the state variable in the deps array: <code>[count]</code> + <code>setCount</code> inside = each setState triggers the effect again. The [] avoids this.`
},
{
  id:34, round:2, roundName:"Coding Round", category:"TypeScript",
  question:"How do you correctly type a generic React component in TypeScript?",
  options:[
    "function List(props: any[]) — use any[] for maximum flexibility",
    "function List<T>(props: { items: T[]; renderItem: (item: T) => React.ReactNode }): JSX.Element — a generic component with typed items and renderer",
    "function List<T extends object> — you must always constrain generics to objects",
    "Generic React components are not supported in TypeScript — use PropTypes instead"
  ],
  correct:1,
  explanation:`Generic components maintain type safety through the component boundary:<br><br>
<code>function List&lt;T&gt;({ items, renderItem }: {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}) {
  return &lt;&gt;{items.map(renderItem)}&lt;/&gt;;
}</code><br><br>
Usage: <code>&lt;List items={users} renderItem={u => &lt;p&gt;{u.name}&lt;/p&gt;} /&gt;</code><br><br>
TypeScript infers <code>T = User</code> from the items prop — no explicit type argument needed. The <code>renderItem</code> param is then automatically typed as <code>(item: User) => ReactNode</code>.`
},
{
  id:35, round:2, roundName:"Coding Round", category:"React Patterns",
  question:"How do you implement optimistic UI updates in React?",
  options:[
    "Optimistic updates require a server-side library like SWR or React Query — impossible with plain useState",
    "Update state immediately before the API call completes; on success, sync with the server response; on failure, roll back to the previous state",
    "Use a loading spinner and block UI interaction during the API call — this is the safest pattern",
    "Optimistic UI is only possible with WebSockets, not REST APIs"
  ],
  correct:1,
  explanation:`<strong>Optimistic update pattern:</strong><br><br>
1. Save a <strong>snapshot</strong> of current state: <code>const prev = items</code><br>
2. <strong>Immediately update</strong> local state as if the operation succeeded<br>
3. Fire the API request in the background<br>
4. On <strong>success</strong>: optionally sync with server data<br>
5. On <strong>failure</strong>: <strong>roll back</strong> to <code>prev</code> and show an error<br><br>
This gives the UI a snappy feel. Libraries like SWR and React Query have this built-in, but the pattern is trivially implementable with useState + try/catch.`
},
{
  id:36, round:2, roundName:"Coding Round", category:"Custom Hooks",
  question:"How would you implement a useLocalStorage custom hook?",
  options:[
    "useLocalStorage cannot be a custom hook because localStorage access is synchronous and React state is async",
    "Initialize state from localStorage; return a setter that updates both React state and localStorage simultaneously",
    "Read from localStorage on every render inside the component body without useState",
    "Use useEffect to sync state to localStorage after every render, with no initial read"
  ],
  correct:1,
  explanation:`Correct implementation:<br><br>
<code>function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initial;
    } catch { return initial; }
  });

  const set = useCallback(newVal => {
    setValue(newVal);
    localStorage.setItem(key, JSON.stringify(newVal));
  }, [key]);

  return [value, set];
}</code><br><br>
Key points: <strong>lazy initializer</strong> reads localStorage only once; try/catch handles SSR and JSON errors; setter is stable with useCallback.`
},
{
  id:37, round:2, roundName:"Coding Round", category:"React Patterns",
  question:"What is the compound component pattern and when is it useful?",
  options:[
    "A pattern where multiple components are merged into one file to reduce imports",
    "A pattern where a parent component implicitly shares state with child components via Context, allowing a flexible API like <Select><Option /></Select>",
    "A pattern where components are split into container and presentational pairs",
    "Compound components are just components that use both useState and useEffect simultaneously"
  ],
  correct:1,
  explanation:`<strong>Compound components</strong> expose a declarative, flexible API by having related components share implicit state via Context:<br><br>
<code>&lt;Tabs defaultTab="a"&gt;
  &lt;Tabs.List&gt;
    &lt;Tabs.Tab id="a"&gt;React&lt;/Tabs.Tab&gt;
  &lt;/Tabs.List&gt;
  &lt;Tabs.Panel id="a"&gt;...&lt;/Tabs.Panel&gt;
&lt;/Tabs&gt;</code><br><br>
The <code>Tabs</code> parent holds activeTab state in a Context; <code>Tab</code> and <code>Panel</code> consume it. The consumer never manages the state — they just compose the pieces. Great for UI libraries (Select, Accordion, Modal).`
},
{
  id:38, round:2, roundName:"Coding Round", category:"React State",
  question:"How do you handle a race condition where two parallel fetch calls can return out of order?",
  options:[
    "Use async/await — it always guarantees order of response",
    "Use a cleanup variable or AbortController in useEffect so that only the last triggered request's result is applied to state",
    "Add a delay to the faster request so they always complete in order",
    "Race conditions in useEffect are automatically handled by React's batching system"
  ],
  correct:1,
  explanation:`Race condition scenario: user types "re" → fetch fires. User types "rea" → another fetch fires. The "re" response arrives <em>after</em> "rea" and overwrites the correct result.<br><br>
Fix with a <strong>stale check flag</strong>:<br>
<code>useEffect(() => {
  let stale = false;
  fetch(url).then(r => r.json()).then(data => {
    if (!stale) setData(data);
  });
  return () => { stale = true; };
}, [url]);</code><br><br>
When url changes, the cleanup sets <code>stale = true</code> on the old effect, so its response is silently ignored. AbortController can also cancel the actual request.`
},
{
  id:39, round:2, roundName:"Coding Round", category:"TypeScript",
  question:"What are TypeScript generics and give a practical frontend example?",
  options:[
    "Generics are TypeScript's version of Java classes — only used in OOP patterns",
    "Generics are type parameters that make functions and types reusable across different types while maintaining type safety",
    "Generics are the same as TypeScript union types but with different syntax",
    "Generics only work with arrays — for objects you must use Record<string, any>"
  ],
  correct:1,
  explanation:`Generics let you write one implementation that works with <em>any</em> type:<br><br>
<code>// A typed API response wrapper
type ApiResponse&lt;T&gt; = {
  data: T;
  status: number;
  error?: string;
};

// Usage — T is inferred or explicit
const res: ApiResponse&lt;User[]&gt; = await fetchUsers();</code><br><br>
Common generic utilities: <code>Array&lt;T&gt;</code>, <code>Promise&lt;T&gt;</code>, <code>Record&lt;K, V&gt;</code>, <code>Partial&lt;T&gt;</code>, <code>Pick&lt;T, K&gt;</code>, <code>Omit&lt;T, K&gt;</code>. Generics are the foundation of type-safe reusable components and hooks.`
},
{
  id:40, round:2, roundName:"Coding Round", category:"React Patterns",
  question:"What is the correct pattern for managing loading/error/data states in a React component?",
  options:[
    "Use three separate boolean flags: isLoading, isError, hasData — toggle them independently",
    "Use a single status state machine: 'idle' | 'loading' | 'success' | 'error' plus separate data/error values",
    "Use a single isLoading boolean — data being null implies error, and non-null data implies success",
    "Use try/catch inside render functions to handle all three states"
  ],
  correct:1,
  explanation:`Three booleans create <strong>impossible states</strong>: <code>{ isLoading: true, isError: true }</code> should never exist but nothing prevents it.<br><br>
A <strong>state machine</strong> makes invalid states unrepresentable:<br>
<code>type Status = 'idle' | 'loading' | 'success' | 'error';
const [status, setStatus] = useState&lt;Status&gt;('idle');
const [data, setData]     = useState(null);
const [error, setError]   = useState(null);</code><br><br>
In JSX: <code>if (status === 'loading') return &lt;Spinner /&gt;</code>. Libraries like TanStack Query encode this pattern internally.`
},
{
  id:41, round:2, roundName:"Coding Round", category:"JavaScript Patterns",
  question:"What is structural sharing in immutable state updates?",
  options:[
    "Deeply cloning every nested object on every state update to guarantee immutability",
    "Reusing unchanged sub-tree references in a new state object — only nodes in the changed path are new",
    "Sharing component state between multiple React trees using a global store",
    "A React pattern where multiple components read from the same useState hook"
  ],
  correct:1,
  explanation:`When you update <code>state.user.name</code>, you don't deep-clone the entire state. You create new objects only for the <em>path</em> to the changed value, reusing everything else:<br><br>
<code>// state.user.name changed
const newState = {
  ...state,               // new root (rest reused)
  user: {
    ...state.user,        // new user (rest reused)
    name: 'Alice'         // new name
  }
};</code><br><br>
<code>state.todos</code> is still the <em>same reference</em> — no GC pressure, O(log n) rather than O(n). Immer.js automates this while letting you write "mutating" code.`
},
{
  id:42, round:2, roundName:"Coding Round", category:"TypeScript",
  question:"How do you type React event handlers and what's the correct type for an onChange on an input?",
  options:[
    "Use (e: Event) => void — the DOM Event type works for all React events",
    "Use React.ChangeEvent<HTMLInputElement> — React has specific synthetic event types per element and event",
    "Use (e: any) => void — event types are too complex to type precisely",
    "Event types are inferred automatically; you never need to annotate them"
  ],
  correct:1,
  explanation:`React wraps native events in <strong>SyntheticEvent</strong> objects. TypeScript's React types provide generic versions per element and event type:<br><br>
• <code>React.ChangeEvent&lt;HTMLInputElement&gt;</code> — input onChange<br>
• <code>React.MouseEvent&lt;HTMLButtonElement&gt;</code> — button onClick<br>
• <code>React.FormEvent&lt;HTMLFormElement&gt;</code> — form onSubmit<br>
• <code>React.KeyboardEvent&lt;HTMLInputElement&gt;</code> — input onKeyDown<br><br>
You can access <code>e.target.value</code> (typed as string) on a ChangeEvent. Using <code>Event</code> directly won't typecheck because React's events don't extend native DOM events.`
},

/* ══════════════════════════════════════════
   ROUND 3 — Frontend Architecture
   ══════════════════════════════════════════ */
{
  id:43, round:3, roundName:"Frontend Architecture", category:"State Management",
  question:"What are the tradeoffs between Context API, Redux Toolkit, and Zustand for state management?",
  options:[
    "They are all equivalent — choose whichever has the most GitHub stars",
    "Context is best for low-frequency global values; Redux Toolkit is best for complex, shared server state with time-travel debugging; Zustand is a lightweight alternative with no boilerplate",
    "Redux is always preferred at scale; Context and Zustand are only for prototypes",
    "Zustand requires a backend service; Redux Toolkit is purely client-side"
  ],
  correct:1,
  explanation:`<strong>Context API</strong> — zero dependencies, built-in. Best for theme, auth, locale. Poor for high-frequency updates (all consumers re-render).<br><br>
<strong>Redux Toolkit (RTK)</strong> — structured, predictable, DevTools with time-travel, great for large teams needing clear conventions. RTK Query handles server state. Verbose but explicit.<br><br>
<strong>Zustand</strong> — minimal API (~1kb), no Provider wrapper, fine-grained subscriptions (only re-renders components that use changed slices), easy to set up. Best for medium apps wanting Redux-like patterns without the boilerplate.<br><br>
<strong>Jotai/Recoil</strong> — atomic model, great for fine-grained derived state.`
},
{
  id:44, round:3, roundName:"Frontend Architecture", category:"CSS",
  question:"What is CSS Grid and when would you use it over Flexbox?",
  options:[
    "Grid is a newer, always-superior version of Flexbox — there's no reason to use Flexbox anymore",
    "Grid excels at two-dimensional layouts (rows AND columns simultaneously); Flexbox is better for one-dimensional layouts (either row or column)",
    "Grid is for block elements; Flexbox is for inline elements",
    "Grid requires JavaScript; Flexbox is pure CSS"
  ],
  correct:1,
  explanation:`<strong>Flexbox</strong> — one-dimensional layout. Align items along a main axis (row or column). Best for nav bars, card rows, button groups, centring content.<br><br>
<strong>Grid</strong> — two-dimensional layout. Place items in rows <em>and</em> columns simultaneously. Best for full-page layouts, gallery grids, complex component layouts where both axes matter.<br><br>
They complement each other: use Grid for the overall page structure, Flexbox within grid cells for component-level layout. The mental shift: Flexbox is <em>content-out</em> (items determine layout); Grid is <em>layout-in</em> (define the grid, place items into it).`
},
{
  id:45, round:3, roundName:"Frontend Architecture", category:"CSS",
  question:"What is the CSS Box Model and what does box-sizing: border-box change?",
  options:[
    "The Box Model is the browser's JavaScript engine for handling CSS animations",
    "Every element is a box of: content + padding + border + margin. border-box makes width/height include padding and border, preventing size surprises",
    "box-sizing: border-box removes the margin from width calculations",
    "The Box Model only applies to block elements — inline elements have no box model"
  ],
  correct:1,
  explanation:`The <strong>CSS Box Model</strong>: every element = <code>content + padding + border + margin</code><br><br>
Default (<code>content-box</code>): <code>width</code> = content only. If you set <code>width: 200px</code> + <code>padding: 20px</code>, the actual rendered width is 240px — frustrating.<br><br>
<code>box-sizing: border-box</code>: <code>width</code> = content + padding + border. Set <code>width: 200px</code> and it stays 200px regardless of padding/border. This is why most CSS resets include:<br>
<code>*, *::before, *::after { box-sizing: border-box; }</code>`
},
{
  id:46, round:3, roundName:"Frontend Architecture", category:"CSS",
  question:"What is z-index stacking context and why does z-index sometimes seem to 'not work'?",
  options:[
    "z-index is a global number — higher always wins regardless of DOM nesting",
    "z-index only works within its stacking context. A new context is created by position + z-index, opacity < 1, transform, filter etc. — z-index can't escape its context",
    "z-index doesn't work on flexbox children — use order instead",
    "z-index only applies to position: fixed elements"
  ],
  correct:1,
  explanation:`A <strong>stacking context</strong> is a self-contained painting group. z-index values are only compared <em>within the same context</em>.<br><br>
New stacking contexts are created by:<br>
• <code>position: relative/absolute/fixed</code> with a z-index<br>
• <code>opacity &lt; 1</code><br>
• <code>transform</code>, <code>filter</code>, <code>will-change</code><br><br>
Classic "z-index doesn't work" bug: a modal has <code>z-index: 9999</code> inside a parent with <code>transform: translateX(0)</code> (creates a stacking context with z-index: auto). The modal can never paint above elements outside the parent's context, regardless of its z-index value.`
},
{
  id:47, round:3, roundName:"Frontend Architecture", category:"Accessibility",
  question:"What is ARIA and when should you use ARIA attributes?",
  options:[
    "ARIA stands for Advanced React Interactivity API — it's a React-specific accessibility library",
    "ARIA (Accessible Rich Internet Applications) adds semantic meaning to elements for screen readers. Use it only when native HTML semantics can't describe the role or state",
    "ARIA replaces semantic HTML — you should use div + ARIA roles instead of native elements",
    "ARIA attributes are only relevant for mobile applications, not desktop web"
  ],
  correct:1,
  explanation:`ARIA's first rule: <strong>use native HTML first</strong>. A <code>&lt;button&gt;</code> is always better than <code>&lt;div role="button"&gt;</code> — native elements have built-in keyboard support, focus management, and implicit roles.<br><br>
Use ARIA when native HTML can't express the semantics:<br>
• <code>aria-label</code> — name an element with no visible text (icon buttons)<br>
• <code>aria-expanded</code> — toggle state of accordions/dropdowns<br>
• <code>aria-live</code> — announce dynamic updates (form errors, notifications)<br>
• <code>role="dialog"</code> — identify a modal<br><br>
No ARIA > bad ARIA. Incorrect ARIA actively harms screen reader users.`
},
{
  id:48, round:3, roundName:"Frontend Architecture", category:"Accessibility",
  question:"What are the WCAG 2.1 conformance levels and what does AA compliance mean in practice?",
  options:[
    "WCAG has one level — either a site is accessible or it isn't",
    "WCAG has three levels: A (minimum), AA (standard/legal requirement), AAA (highest). AA includes sufficient colour contrast (4.5:1), keyboard navigability, and no seizure-triggering content",
    "WCAG AA means only screen reader support is required — colour and keyboard are optional",
    "WCAG 2.1 only applies to government websites"
  ],
  correct:1,
  explanation:`<strong>WCAG 2.1 levels:</strong><br><br>
• <strong>A</strong> — essential baseline (no keyboard traps, alt text for images, captions for video)<br>
• <strong>AA</strong> — standard for most legal requirements (ADA, EAA). Includes 4.5:1 colour contrast for normal text, 3:1 for large text, resize text to 200%, full keyboard access, focus visible<br>
• <strong>AAA</strong> — highest level; not required by most regulations but best practice where feasible<br><br>
As a senior engineer you should know: contrast ratios, semantic HTML, focus management (especially in modals/dialogs), skip links, and ensuring all interactions are keyboard-accessible.`
},
{
  id:49, round:3, roundName:"Frontend Architecture", category:"Performance",
  question:"What is the Critical Rendering Path and how do you optimize it?",
  options:[
    "The route from the server to the user — optimized by choosing a CDN geographically close to the user",
    "The sequence the browser follows to convert HTML/CSS/JS into pixels: DOM → CSSOM → Render Tree → Layout → Paint. Optimize by reducing render-blocking resources",
    "The minimum number of components React renders on initial load",
    "The critical path only refers to the JavaScript execution time, not HTML or CSS parsing"
  ],
  correct:1,
  explanation:`The browser's <strong>Critical Rendering Path</strong>:<br>
HTML → DOM → CSSOM → Render Tree → Layout → Paint → Composite<br><br>
<strong>Optimizations:</strong><br>
• <strong>CSS</strong>: inline critical above-the-fold styles; load non-critical CSS asynchronously (<code>media="print"</code> trick or <code>rel="preload"</code>)<br>
• <strong>JavaScript</strong>: add <code>defer</code> or <code>async</code> to script tags; scripts block HTML parsing by default<br>
• <strong>Fonts</strong>: <code>font-display: swap</code> prevents invisible text during load<br>
• <strong>Images</strong>: use <code>loading="lazy"</code> for below-fold images<br>
• <strong>Preload</strong> critical assets: <code>&lt;link rel="preload" as="font"&gt;</code>`
},
{
  id:50, round:3, roundName:"Frontend Architecture", category:"Performance",
  question:"What is code splitting and how do you implement it in React?",
  options:[
    "Code splitting is manually dividing your code into multiple .js files in the src folder",
    "Code splitting lazy-loads JS bundles on demand using React.lazy + Suspense, reducing initial bundle size",
    "Code splitting is only possible with webpack — Vite and esbuild don't support it",
    "Code splitting splits CSS from JavaScript at build time — it doesn't affect JS bundle size"
  ],
  correct:1,
  explanation:`<strong>Code splitting</strong> breaks your app into smaller chunks loaded on demand, reducing the initial bundle.<br><br>
React implementation:<br>
<code>const Settings = React.lazy(() => import('./pages/Settings'));<br><br>
function App() {
  return (
    &lt;Suspense fallback={&lt;Spinner /&gt;}&gt;
      &lt;Settings /&gt;
    &lt;/Suspense&gt;
  );
}</code><br><br>
The Settings bundle is only downloaded when the component is first rendered. Combine with route-based splitting (one chunk per page) for maximum impact. Vite and webpack both support dynamic <code>import()</code> natively.`
},
{
  id:51, round:3, roundName:"Frontend Architecture", category:"Performance",
  question:"What is tree shaking and what conditions must be met for it to work?",
  options:[
    "Tree shaking removes unused CSS — it has no effect on JavaScript bundle size",
    "Tree shaking statically analyzes import/export statements and removes unused exports at build time. Requires ES modules (import/export), not CommonJS (require)",
    "Tree shaking is a runtime optimization performed by the browser's V8 engine",
    "Tree shaking requires TypeScript strict mode to be enabled"
  ],
  correct:1,
  explanation:`<strong>Tree shaking</strong> (dead code elimination) removes exported code that is never imported. The bundler (webpack, Rollup, Vite) analyzes the import/export graph statically.<br><br>
Requirements:<br>
• <strong>ES Modules</strong> (<code>import</code>/<code>export</code>) — their static structure allows static analysis. CommonJS (<code>require</code>) is dynamic — impossible to statically analyze.<br>
• <strong>No side effects in imports</strong> — or mark them in <code>package.json</code> with <code>"sideEffects": false</code><br><br>
Pitfall: <code>import _ from 'lodash'</code> imports the entire library. Use <code>import debounce from 'lodash/debounce'</code> or lodash-es for tree-shakeable imports.`
},
{
  id:52, round:3, roundName:"Frontend Architecture", category:"CSS",
  question:"What is the difference between rem, em, px, vw, and % units and when do you use each?",
  options:[
    "They are all equivalent — use px for everything since browsers convert them all to pixels anyway",
    "px is absolute; rem is relative to root font size (consistent, great for spacing); em is relative to parent font size (useful for component-scoped scaling); vw/vh are viewport percentages; % is relative to parent",
    "rem should only be used for font sizes; use px for all spacing",
    "vw and vh are deprecated — use dvw/dvh instead for all viewport-relative sizing"
  ],
  correct:1,
  explanation:`Choosing the right unit matters for responsive, accessible layouts:<br><br>
• <strong>px</strong> — absolute, predictable. Use for borders, shadows, fine-grained details<br>
• <strong>rem</strong> — relative to <code>:root</code> font size (default 16px). Scales with user browser font settings. Use for font sizes and spacing — accessibility win<br>
• <strong>em</strong> — relative to the element's own font size. Great for padding that should scale with text (buttons)<br>
• <strong>%</strong> — relative to parent. Use for widths in fluid layouts<br>
• <strong>vw/vh</strong> — relative to viewport. Use for full-height sections, hero areas. Note: <code>dvh</code> is better on mobile (excludes browser chrome)`
},
{
  id:53, round:3, roundName:"Frontend Architecture", category:"TypeScript",
  question:"What are TypeScript utility types and name five commonly used ones?",
  options:[
    "Utility types are third-party libraries that extend TypeScript's type system",
    "Built-in generic types that transform existing types: Partial<T>, Required<T>, Pick<T,K>, Omit<T,K>, Readonly<T>, Record<K,V>, ReturnType<T>",
    "Utility types are only available in TypeScript 5+ and require strict mode",
    "Utility types are runtime functions — they check types at execution, not compile time"
  ],
  correct:1,
  explanation:`TypeScript ships utility types that transform existing types — no library needed:<br><br>
• <code>Partial&lt;T&gt;</code> — all properties optional. Great for update payloads<br>
• <code>Required&lt;T&gt;</code> — all properties required<br>
• <code>Pick&lt;T, 'a' | 'b'&gt;</code> — select specific properties<br>
• <code>Omit&lt;T, 'password'&gt;</code> — exclude specific properties<br>
• <code>Readonly&lt;T&gt;</code> — prevent mutation<br>
• <code>Record&lt;string, User&gt;</code> — typed dictionary<br>
• <code>ReturnType&lt;typeof fn&gt;</code> — infer a function's return type<br>
• <code>NonNullable&lt;T&gt;</code> — remove null/undefined from a type`
},
{
  id:54, round:3, roundName:"Frontend Architecture", category:"Architecture",
  question:"What is the difference between micro-frontends and a monolithic frontend?",
  options:[
    "Micro-frontends use React; monolithic frontends use Angular — they are different framework choices",
    "Micro-frontends split the UI into independently deployable pieces owned by separate teams. Monolithic frontends are a single deployable unit. Micro-frontends add operational complexity but enable team autonomy at scale",
    "Micro-frontends always perform better than monolithic frontends because each piece is smaller",
    "Micro-frontends are the same as component libraries — reusable UI packaged as npm packages"
  ],
  correct:1,
  explanation:`<strong>Monolithic frontend</strong> — one codebase, one build, one deployment. Simple, fast, easy to share code. Becomes painful at scale (large teams, long build times, one team blocks another).<br><br>
<strong>Micro-frontends</strong> — each team owns a slice of the UI, deploys independently. Implemented via:<br>
• Module Federation (webpack 5) — dynamic remote loading at runtime<br>
• iframes — ultimate isolation, poor UX<br>
• Web Components — framework-agnostic<br><br>
Tradeoffs: enables team autonomy, different tech stacks, independent deploys — but adds complexity: shared dependencies, consistent UX, cross-app communication, and operational overhead.`
},
{
  id:55, round:3, roundName:"Frontend Architecture", category:"Performance",
  question:"What are Core Web Vitals and why do they matter for senior frontend engineers?",
  options:[
    "Core Web Vitals are Google's internal metrics used only for Search ranking — no UX relevance",
    "LCP (load), INP (interaction), CLS (layout stability) — Google's user-centric performance metrics that directly affect search ranking and UX quality",
    "Core Web Vitals measure server response time only — frontend code has no impact on them",
    "Core Web Vitals were deprecated in 2024 and replaced by Lighthouse scores"
  ],
  correct:1,
  explanation:`Google's <strong>Core Web Vitals</strong> (as of 2024):<br><br>
• <strong>LCP (Largest Contentful Paint)</strong> — how fast the largest visible element loads. Target: &lt; 2.5s. Optimize: preload LCP image, avoid lazy-loading it, use CDN<br>
• <strong>INP (Interaction to Next Paint)</strong> — responsiveness to user input. Target: &lt; 200ms. Optimize: break up long tasks, defer non-critical JS<br>
• <strong>CLS (Cumulative Layout Shift)</strong> — visual stability. Target: &lt; 0.1. Optimize: set explicit image/ad dimensions, avoid injecting content above fold<br><br>
These affect Google Search ranking. As a lead, you should be able to diagnose issues with Chrome DevTools, Lighthouse, and PageSpeed Insights.`
},
{
  id:56, round:3, roundName:"Frontend Architecture", category:"Architecture",
  question:"How would you approach folder structure for a large-scale React application?",
  options:[
    "Organize by file type: /components, /hooks, /utils, /styles — this is always the best structure",
    "Organize by feature/domain (feature-based): each feature owns its components, hooks, API calls, and types together — scales better than grouping by file type",
    "Put all files in /src with no subdirectories — modern bundlers make structure irrelevant",
    "Use a single App.tsx file with all components inlined — reduces import complexity"
  ],
  correct:1,
  explanation:`<strong>File-type grouping</strong> (<code>/components</code>, <code>/hooks</code>, <code>/utils</code>) works for small apps but breaks at scale — changing a feature means touching 4+ folders.<br><br>
<strong>Feature-based grouping:</strong><br>
<code>src/
  features/
    auth/
      components/   LoginForm, AuthGuard
      hooks/        useAuth, usePermissions
      api/          authApi.ts
      types/        auth.types.ts
      index.ts      public API
  shared/           cross-feature reusable
  pages/            route components</code><br><br>
Each feature is <em>self-contained</em> with a clear public API. Teams own features without stepping on each other. Scales to hundreds of engineers.`
},
{
  id:57, round:3, roundName:"Frontend Architecture", category:"CSS",
  question:"What is the difference between display: none, visibility: hidden, and opacity: 0?",
  options:[
    "They all make elements invisible and behave identically to browsers and assistive tech",
    "display:none removes from layout and accessibility tree; visibility:hidden hides but keeps space; opacity:0 is invisible but still interactive and occupies space",
    "visibility:hidden removes the element from the DOM; display:none just hides it visually",
    "opacity:0 is the best for hiding elements because it has the best performance"
  ],
  correct:1,
  explanation:`<strong>display: none</strong> — element removed from layout entirely. Space collapses. Not in accessibility tree (screen readers skip it). Causes reflow when toggled.<br><br>
<strong>visibility: hidden</strong> — element invisible but <em>space reserved</em>. Children with <code>visibility: visible</code> can override it. Removed from accessibility tree but still affects layout.<br><br>
<strong>opacity: 0</strong> — fully transparent but still <em>interactive</em> (click events fire!) and takes up space. Accessible (still in accessibility tree).<br><br>
Use-case guide: <code>display:none</code> for toggles; <code>visibility:hidden</code> for preserving layout; <code>opacity:0</code> for animations (GPU-accelerated).`
},
{
  id:58, round:3, roundName:"Frontend Architecture", category:"Architecture",
  question:"When would you choose Redux Toolkit over Zustand for state management in a new project?",
  options:[
    "Always choose Redux — it has more GitHub stars and community support",
    "Choose Redux Toolkit when you need: DevTools time-travel debugging, RTK Query for server state, large teams needing strict conventions, or complex middleware chains",
    "Choose Redux when the app has more than 10 components — Zustand doesn't scale beyond that",
    "Redux Toolkit and Zustand have identical APIs — choose based on file size preference"
  ],
  correct:1,
  explanation:`Choose <strong>Redux Toolkit</strong> when:<br>
• Large team needing enforced conventions and predictable patterns<br>
• You want <strong>RTK Query</strong> for server state (built-in caching, invalidation, subscriptions)<br>
• <strong>Time-travel debugging</strong> is valuable (complex state flows, bug reproduction)<br>
• Complex middleware needs (logging, analytics, optimistic rollback)<br><br>
Choose <strong>Zustand</strong> when:<br>
• Small/medium team wanting minimal boilerplate<br>
• Fine-grained subscriptions without Redux overhead<br>
• Simple global state with occasional async actions<br>
• Rapid prototyping<br><br>
Neither is wrong — the team's familiarity often matters most.`
},
{
  id:59, round:3, roundName:"Frontend Architecture", category:"Accessibility",
  question:"What is semantic HTML and why does it matter for accessibility and SEO?",
  options:[
    "Semantic HTML is HTML that uses class names to describe the element's purpose (e.g., class='header')",
    "Semantic HTML uses elements whose tag names convey meaning (<nav>, <main>, <article>), helping screen readers navigate and search engines understand content structure",
    "Semantic HTML is the same as valid HTML — it just means no syntax errors",
    "Semantic HTML only matters for SEO — screen readers ignore HTML element types"
  ],
  correct:1,
  explanation:`<strong>Semantic HTML</strong> uses meaningful elements instead of generic divs:<br><br>
• <code>&lt;nav&gt;</code> — navigation landmark (screen readers announce "navigation")<br>
• <code>&lt;main&gt;</code> — primary content (skip-to-main-content links target this)<br>
• <code>&lt;article&gt;</code> — self-contained content (blog post, comment)<br>
• <code>&lt;section&gt;</code> — thematic grouping with a heading<br>
• <code>&lt;button&gt;</code> — focusable, activatable with Enter/Space, announced as button<br><br>
Benefits:<br>
• Screen readers use landmark roles for <strong>document navigation</strong><br>
• Search engines understand content hierarchy<br>
• Built-in keyboard/focus behaviour (no JS needed)<br>
• Future-proof — CSS and JS are separate layers`
},
{
  id:60, round:3, roundName:"Frontend Architecture", category:"Architecture",
  question:"What is a monorepo and what problems does it solve for frontend teams?",
  options:[
    "A monorepo is a single GitHub repository for one application — the standard for any project",
    "A monorepo hosts multiple packages/apps in one repository, enabling shared code, atomic cross-package commits, and unified tooling for large orgs",
    "A monorepo is a database pattern for managing multiple client applications from a single backend",
    "Monorepos are deprecated — the industry has moved entirely to polyrepos"
  ],
  correct:1,
  explanation:`A <strong>monorepo</strong> (e.g. using Nx, Turborepo, pnpm workspaces) puts multiple packages in one repo:<br><br>
<code>apps/
  web/      React app
  docs/     Next.js docs
packages/
  ui/       shared component library
  utils/    shared utilities
  types/    shared TypeScript types</code><br><br>
Benefits:<br>
• <strong>Shared code</strong> without npm publish cycles<br>
• <strong>Atomic commits</strong> — change a shared type and fix all consumers in one PR<br>
• <strong>Unified tooling</strong> — one ESLint, TypeScript, and CI config<br>
• <strong>Affected builds</strong> — Turborepo/Nx only rebuild what changed<br><br>
Tradeoffs: larger repo, requires tooling investment upfront.`
},

/* ══════════════════════════════════════════
   ROUND 4 — Behavioral / HR Round
   ══════════════════════════════════════════ */
{
  id:61, round:4, roundName:"Behavioral / HR Round", category:"Leadership",
  question:"A junior developer on your team consistently submits PRs with poor error handling and no tests. How do you address this?",
  options:[
    "Reject their PRs silently with comments until they improve on their own",
    "Have a 1:1 conversation, understand their background, set clear expectations, pair program on an example, and agree on a growth plan with check-ins",
    "Escalate to their manager immediately so it's on record",
    "Fix their code yourself to keep velocity up and avoid confrontation"
  ],
  correct:1,
  explanation:`A senior/lead engineer's job is to <strong>grow the team</strong>, not just ship code. The right approach:<br><br>
1. <strong>1:1 conversation first</strong> — understand context (did they know the standards? overwhelmed?)<br>
2. <strong>Set clear expectations</strong> — share team standards explicitly, don't assume they're obvious<br>
3. <strong>Pair program</strong> — show what good looks like on a real task, not just critique<br>
4. <strong>Agree on a growth plan</strong> — specific goals, timeline, check-ins<br>
5. <strong>Code review as teaching</strong> — explain the why behind every comment<br><br>
Fixing their code for them stunts growth and creates dependency. Escalating immediately skips the coaching step a lead is responsible for.`
},
{
  id:62, round:4, roundName:"Behavioral / HR Round", category:"Collaboration",
  question:"You disagree with a senior backend engineer's API design decision that will significantly impact the frontend. How do you handle it?",
  options:[
    "Accept it silently — backend engineers make API decisions and frontend should adapt",
    "Come prepared with data: show specific frontend impact, propose an alternative, escalate to a tech lead only if the discussion stalls after good-faith debate",
    "Go directly to the engineering manager to overrule the decision",
    "Implement a workaround in the frontend BFF layer and don't mention the disagreement"
  ],
  correct:1,
  explanation:`Technical disagreements are healthy when handled professionally:<br><br>
1. <strong>Prepare your case</strong> — document the specific pain points with concrete examples (extra render cycles, over-fetching, client transformation cost)<br>
2. <strong>Propose an alternative</strong> — don't just say "this is bad", offer a specific better approach<br>
3. <strong>Engage in good-faith debate</strong> — the goal is the best outcome, not winning<br>
4. <strong>Escalate if stuck</strong> — if alignment is genuinely impossible, involve a tech lead or architect with the full context presented neutrally<br><br>
Strong engineers disagree and commit: once a decision is made, align and execute fully regardless of outcome.`
},
{
  id:63, round:4, roundName:"Behavioral / HR Round", category:"Engineering Decisions",
  question:"How do you approach technical debt in a fast-moving product with tight delivery schedules?",
  options:[
    "Always prioritize new features over technical debt — debt can be addressed during a future 'cleanup sprint'",
    "Make debt visible (tech debt backlog), quantify its cost, negotiate dedicated time in planning, and apply the 'boy scout rule' — leave code better than you found it on each feature",
    "Rewrite the entire codebase every 12-18 months to eliminate accumulated debt",
    "Technical debt is normal and has no meaningful impact on delivery velocity over time"
  ],
  correct:1,
  explanation:`Technical debt left unaddressed compounds — it slows every future feature. Senior engineers manage it proactively:<br><br>
• <strong>Track it</strong> — maintain a tech debt backlog with severity labels<br>
• <strong>Quantify cost</strong> — "this module takes 3x longer to modify than it should" makes debt visible to product<br>
• <strong>Negotiate 20% time</strong> — pitch a percentage of each sprint for debt reduction<br>
• <strong>Boy scout rule</strong> — when touching a module, leave it slightly better (refactor the function you're already editing)<br>
• <strong>Prevent at the source</strong> — code review, standards, pair programming reduce new debt<br><br>
Cleanup sprints rarely happen — treat debt like a first-class backlog item.`
},
{
  id:64, round:4, roundName:"Behavioral / HR Round", category:"Leadership",
  question:"How do you ensure consistent code quality across a team of 8 frontend engineers?",
  options:[
    "Manually review 100% of all code before it merges — you are the quality gatekeeper",
    "Automate what can be automated (ESLint, Prettier, TypeScript strict, CI checks) and focus human review energy on architecture, logic, and maintainability",
    "Trust everyone equally — code reviews slow down delivery and create bottlenecks",
    "Assign a single 'code quality engineer' to review all PRs and enforce standards"
  ],
  correct:1,
  explanation:`Quality at scale requires <strong>systems, not heroics</strong>:<br><br>
<strong>Automated layer:</strong><br>
• ESLint + Prettier — style and common bugs caught pre-commit<br>
• TypeScript strict mode — type errors caught at compile time<br>
• Unit/integration tests in CI — regressions caught before merge<br>
• Automated a11y checks (axe-core)<br><br>
<strong>Human review layer:</strong><br>
• Review for architecture decisions, readability, and logic — things linters can't catch<br>
• Written style guide so decisions aren't rediscussed in every PR<br>
• ADRs (Architecture Decision Records) for major decisions<br><br>
If you're reviewing 100% of PRs yourself, you're a bottleneck. Empower the team.`
},
{
  id:65, round:4, roundName:"Behavioral / HR Round", category:"Communication",
  question:"A product manager asks for a 'rough estimate' on a complex feature mid-sprint. How do you respond?",
  options:[
    "Give a confident number immediately to avoid looking uncertain — you can adjust later",
    "Explain the unknowns clearly, give a range with stated assumptions, and offer to do a proper spike before committing to a firm date",
    "Refuse to estimate until you have complete technical specifications",
    "Delegate the estimate to a junior engineer to avoid accountability"
  ],
  correct:1,
  explanation:`Estimation is a communication exercise, not a math problem. Best practice:<br><br>
1. <strong>Acknowledge unknowns</strong> — "I can give a range, but X and Y are unclear"<br>
2. <strong>Give a range, not a point</strong> — "2–4 days, assuming the API contract is final"<br>
3. <strong>State assumptions explicitly</strong> — this protects both parties<br>
4. <strong>Offer a spike</strong> — "Give me a day to investigate and I can give you a much tighter estimate"<br>
5. <strong>Revisit early</strong> — if scope changes mid-implementation, communicate immediately rather than at deadline<br><br>
A confident wrong number is worse than an honest range. Product managers need predictability, not false precision.`
},
{
  id:66, round:4, roundName:"Behavioral / HR Round", category:"Ownership",
  question:"You discover a critical performance issue in production that was introduced by your feature two weeks ago. What do you do?",
  options:[
    "Wait to see if anyone notices — it might resolve itself with the next deploy",
    "Immediately escalate to your team, own the issue publicly, define a mitigation path, communicate timeline, and run a blameless post-mortem after resolution",
    "Quietly fix it in the next PR without mentioning it was your change",
    "Blame the code reviewer who approved the original PR"
  ],
  correct:1,
  explanation:`<strong>Ownership</strong> is a core senior engineer attribute. The right response:<br><br>
1. <strong>Immediately alert the team</strong> — don't sit on a production issue<br>
2. <strong>Own it publicly</strong> — "this was my change; I'm on it" builds trust<br>
3. <strong>Prioritize mitigation first</strong> — can you revert? Feature-flag it off? Apply a hotfix?<br>
4. <strong>Communicate a timeline</strong> — "I'll have a fix in 2 hours" vs silence<br>
5. <strong>Post-mortem after resolution</strong> — blameless review of what happened and what process improvement prevents recurrence<br><br>
Hiding the issue or deflecting blame are career-limiting moves. Owning mistakes and fixing them openly builds your reputation as a trustworthy senior engineer.`
},
{
  id:67, round:4, roundName:"Behavioral / HR Round", category:"Leadership",
  question:"How do you onboard a new mid-level engineer to your team effectively?",
  options:[
    "Point them to the docs and expect them to be productive in a week",
    "Structured 30/60/90 day plan: first 30 days = reading + shadow + small bug fix; 60 days = first owned feature with pairing; 90 days = independently driving a feature",
    "Assign the most complex ticket to test how they handle pressure immediately",
    "Let them pick their own onboarding path — experienced engineers don't need guidance"
  ],
  correct:1,
  explanation:`Effective onboarding accelerates time-to-productivity and retention:<br><br>
<strong>Day 1–2:</strong> environment setup, codebase walkthrough, meet the team, assign a buddy<br><br>
<strong>Week 1–2:</strong> read architecture docs, shadow PRs, fix a simple bug to learn the deploy pipeline<br><br>
<strong>Month 1:</strong> first feature with close pairing — builds confidence without isolation<br><br>
<strong>Month 2:</strong> own a full feature with support available — increases autonomy<br><br>
<strong>Month 3:</strong> independently drive a feature, participate in architecture discussions<br><br>
Regular 1:1s to surface blockers early. Bad onboarding is the #1 reason new hires disengage in the first 90 days.`
},
{
  id:68, round:4, roundName:"Behavioral / HR Round", category:"Engineering Decisions",
  question:"How do you evaluate and introduce a new technology or library to your team?",
  options:[
    "Add it directly to the main codebase — the team will learn from the code",
    "Research it thoroughly, build a proof-of-concept on a real problem, present tradeoffs to the team, run a controlled pilot, then adopt/reject based on results",
    "Use it only if it has 10,000+ GitHub stars and was mentioned in a major conference talk",
    "Let each engineer choose their own tools for their features — diversity of tools is healthy"
  ],
  correct:1,
  explanation:`Introducing tech responsibly:<br><br>
1. <strong>Identify the problem it solves</strong> — is there a real pain point, or is this resume-driven development?<br>
2. <strong>Research</strong> — bundle size, maintenance health, breaking change history, community<br>
3. <strong>Proof of concept</strong> on a <em>real problem</em>, not a toy example<br>
4. <strong>Present tradeoffs</strong> to the team — get buy-in before adoption<br>
5. <strong>Controlled pilot</strong> — one feature or service first<br>
6. <strong>Decision log (ADR)</strong> — document why you chose it (or didn't)<br>
7. <strong>Rollback plan</strong> — what does migration cost if it doesn't work out?<br><br>
Unilateral tech adoption creates tribal knowledge and maintenance silos.`
},
{
  id:69, round:4, roundName:"Behavioral / HR Round", category:"Collaboration",
  question:"How do you communicate a technical constraint (e.g., 'we can't build that in 2 weeks') to a non-technical stakeholder?",
  options:[
    "Use technical jargon to explain the complexity — stakeholders should understand technical realities",
    "Translate to business impact: explain what's at risk (reliability, security, user experience), offer alternatives or phased approaches, and quantify tradeoffs in terms they care about",
    "Just say 'it's technically impossible' without further explanation — stakeholders should trust engineers",
    "Always agree with the timeline and then miss the deadline — it's better than disappointing upfront"
  ],
  correct:1,
  explanation:`Technical communication is a senior engineer's superpower:<br><br>
<strong>Frame in business terms:</strong> "Building this in 2 weeks means skipping security testing — that's a data breach risk" lands better than "we don't have time to implement proper auth"<br><br>
<strong>Offer options, not just blockers:</strong><br>
• "We can ship a basic version in 2 weeks and add X in the next sprint"<br>
• "We can hit the 2-week date if we descope Y"<br><br>
<strong>Quantify tradeoffs:</strong> "Cutting corners here typically costs 3x more to fix later"<br><br>
Stakeholders don't need the technical details — they need to understand consequences and options. Being the person who brings solutions, not just problems, is what gets engineers a seat at the table.`
},
{
  id:70, round:4, roundName:"Behavioral / HR Round", category:"Ownership",
  question:"What does 'taking ownership' mean to you as a lead frontend engineer beyond just 'writing good code'?",
  options:[
    "Ownership means reviewing all code before it ships and being personally responsible for every bug",
    "Ownership means proactively identifying risks before they become problems, driving solutions end-to-end, caring about the user outcome — not just task completion, and enabling the team to own their work too",
    "Ownership means working extra hours to ensure everything is perfect before shipping",
    "Ownership means never asking for help — a senior engineer should be self-sufficient"
  ],
  correct:1,
  explanation:`Senior-level ownership goes beyond the task ticket:<br><br>
• <strong>Proactive risk identification</strong> — you see the iceberg, not just the tip. "This data model will cause issues in 3 months"<br>
• <strong>End-to-end thinking</strong> — care about the user outcome and business impact, not just your slice of the code<br>
• <strong>Driving to resolution</strong> — if you spot a problem, you own getting it fixed even if it requires coordinating others<br>
• <strong>Enabling team ownership</strong> — the best owners distribute ownership; they build systems and culture where others take responsibility too<br>
• <strong>Accountability without blame</strong> — when things go wrong, focus on systemic fixes<br><br>
Ownership is a mindset, not a title. It's why the same engineer can be 10x more impactful than another at the same level.`
}

/* ══════════════════════════════════════════
   ROUND 2 — Coding Round (continued)
   ══════════════════════════════════════════ */
,{
  id:71, round:2, roundName:"Coding Round", category:"React Patterns",
  question:"What is the render props pattern and when would you use it over a custom hook?",
  options:[
    "Render props are deprecated — hooks replaced them entirely and they should never be used",
    "A render prop passes a function as a prop that the component calls to render its output, giving the consumer control over rendering while the component owns the logic",
    "Render props are only used in class components; hooks replaced them in functional components",
    "A render prop is the same as a children prop — they are identical patterns"
  ],
  correct:1,
  explanation:`<strong>Render props</strong> let a component share stateful logic while delegating rendering to the consumer:<br><br>
<code>&lt;Mouse render={({ x, y }) => &lt;p&gt;{x}, {y}&lt;/p&gt;} /&gt;</code><br><br>
<strong>Hooks replaced most render-prop use cases</strong> for logic sharing. But render props still shine when you need the <em>component tree</em> to change — e.g. a <code>Query</code> component that renders different children based on loading/error/data state, or when the consumer needs to control what is rendered inside a specific layout slot.<br><br>
Custom hooks share logic; render props share both logic <em>and</em> rendering control.`
},
{
  id:72, round:2, roundName:"Coding Round", category:"Performance",
  question:"How do you implement infinite scroll in React efficiently?",
  options:[
    "Use a scroll event listener that fires setState on every pixel scrolled",
    "Use the Intersection Observer API to detect when a sentinel element enters the viewport, then load the next page",
    "Load all data at once and use CSS overflow to hide it — the browser handles virtual scrolling automatically",
    "Use setInterval to poll for new data every 500ms regardless of scroll position"
  ],
  correct:1,
  explanation:`<strong>Intersection Observer</strong> is the correct approach — it's built into the browser and fires only when visibility changes, not on every scroll event (no performance cost):<br><br>
<code>const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && hasMore) loadNextPage();
}, { threshold: 0.1 });
observer.observe(sentinelRef.current);</code><br><br>
Place a "sentinel" div at the bottom of your list. When it becomes visible, load the next page. Clean up the observer in useEffect's return function.<br><br>
For very large lists (10k+ items) combine with a <strong>virtual list</strong> library (react-virtual, react-window) to only render visible DOM nodes.`
},
{
  id:73, round:2, roundName:"Coding Round", category:"React State",
  question:"How do you correctly share state between two sibling components without a state management library?",
  options:[
    "Use a ref passed between siblings — refs can hold shared state without re-renders",
    "Lift the state to the closest common ancestor and pass it down as props; use callbacks to let siblings update it",
    "Use localStorage to share state between siblings — it's accessible from any component",
    "Import the state directly from one sibling's file — exported state variables work like global state"
  ],
  correct:1,
  explanation:`<strong>Lifting state up</strong> is the fundamental React pattern for sibling communication:<br><br>
<code>function Parent() {
  const [value, setValue] = useState('');
  return (
    &lt;&gt;
      &lt;SiblingA value={value} onChange={setValue} /&gt;
      &lt;SiblingB value={value} /&gt;
    &lt;/&gt;
  );
}</code><br><br>
The parent owns the state; siblings receive it as props. If lifting becomes deeply nested (prop drilling), introduce Context or a state library. Avoid localStorage for transient UI state — it persists past unmounts and is async on some platforms.`
},
{
  id:74, round:2, roundName:"Coding Round", category:"JavaScript Patterns",
  question:"What is memoization and how would you implement it for a pure function?",
  options:[
    "Memoization is the same as debouncing — both reduce how often a function runs",
    "Memoization caches the return value of a function by input. On subsequent calls with the same args, the cached result is returned without re-execution",
    "Memoization is a React-specific pattern using the useMemo hook — it doesn't apply to plain JavaScript functions",
    "Memoization permanently stores function results in a database for cross-session reuse"
  ],
  correct:1,
  explanation:`<strong>Memoization</strong> trades memory for speed — cache expensive computations:<br><br>
<code>function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const memoFib = memoize(n => n <= 1 ? n : memoFib(n-1) + memoFib(n-2));</code><br><br>
React's <code>useMemo</code> and <code>useCallback</code> are React-scoped memoization. Pure functions with expensive computation (sorting, filtering, math) are ideal candidates.`
},
{
  id:75, round:2, roundName:"Coding Round", category:"TypeScript",
  question:"How do you correctly type React children in TypeScript?",
  options:[
    "Use children: any — the children prop is too complex to type precisely",
    "Use children: React.ReactNode for maximum flexibility — it accepts JSX, strings, numbers, arrays, null, and undefined",
    "Use children: JSX.Element — this is the only correct type for React children",
    "Children are automatically typed by TypeScript — you never need to annotate them"
  ],
  correct:1,
  explanation:`<strong>React.ReactNode</strong> is the widest children type:<br>
<code>type ReactNode = ReactElement | string | number | boolean | null | undefined | ReactPortal | ReactFragment</code><br><br>
Use cases for different types:<br>
• <code>React.ReactNode</code> — anything renderable. Use for most children props<br>
• <code>React.ReactElement</code> — only JSX elements (not strings/null). Use when you need to call React.cloneElement on children<br>
• <code>React.FC&lt;{ children: React.ReactNode }&gt;</code> — explicit component typing<br><br>
Note: In React 18+, <code>React.FC</code> no longer implicitly includes children — you must declare it explicitly.`
},
{
  id:76, round:2, roundName:"Coding Round", category:"React Hooks",
  question:"What is useImperativeHandle and when should you reach for it?",
  options:[
    "useImperativeHandle is a replacement for useRef that works across component boundaries",
    "useImperativeHandle customizes the ref handle exposed to parent components, used with forwardRef when you want to expose a limited imperative API from a child",
    "useImperativeHandle forces a component to re-render imperatively without state updates",
    "It's a legacy hook from class components — never use it in functional components"
  ],
  correct:1,
  explanation:`<code>useImperativeHandle</code> is used with <code>React.forwardRef</code> when you want a parent to call specific methods on a child without exposing the raw DOM node:<br><br>
<code>const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => { inputRef.current.value = ''; }
  }));
  return &lt;input ref={inputRef} /&gt;;
});</code><br><br>
The parent gets a ref with only <code>{ focus, clear }</code> — it can't access the raw DOM node. Use for video players, animation controls, or form elements needing imperative control. Prefer declarative patterns where possible.`
},
{
  id:77, round:2, roundName:"Coding Round", category:"React State",
  question:"What is the difference between controlled and uncontrolled form handling with React Hook Form vs built-in React state?",
  options:[
    "React Hook Form is always slower than native useState forms — use useState for all forms",
    "React Hook Form uses uncontrolled inputs (refs) by default, avoiding re-renders on each keystroke. useState-driven forms re-render on every change — fine for simple forms, costly for large ones",
    "React Hook Form requires a backend API to function — it cannot be used for client-side forms",
    "The difference is only stylistic — both approaches have identical runtime performance"
  ],
  correct:1,
  explanation:`<strong>useState-driven forms</strong>: every keystroke calls setState → re-render → re-compute the whole form. Fine for small forms.<br><br>
<strong>React Hook Form</strong>: registers inputs with refs, reads values on submit — <strong>zero re-renders during typing</strong>. Provides validation, error state, dirty/touched tracking out of the box.<br><br>
Performance difference is significant at scale (50+ field forms, tables with inline editing). RHF's register pattern:<br>
<code>const { register, handleSubmit } = useForm();
&lt;input {...register('email', { required: true })} /&gt;</code><br><br>
When you <em>need</em> controlled behavior (conditional fields based on current input), use <code>watch()</code> selectively rather than controlling all fields.`
},
{
  id:78, round:2, roundName:"Coding Round", category:"JavaScript Patterns",
  question:"What is the Observer pattern and how does it relate to React's state subscriptions?",
  options:[
    "The Observer pattern is only used in backend systems — no relevance to frontend React",
    "Observer defines a one-to-many dependency: when one object (subject) changes state, all dependents (observers) are notified automatically. Redux, Zustand, and RxJS are all built on this pattern",
    "The Observer pattern is the same as the Pub/Sub pattern — they are interchangeable terms",
    "Observers in React are created with the IntersectionObserver and MutationObserver browser APIs only"
  ],
  correct:1,
  explanation:`<strong>Observer pattern</strong>: a subject maintains a list of observers; when state changes, it notifies all observers.<br><br>
React ecosystem examples:<br>
• <strong>Zustand</strong>: stores are observable subjects; components subscribe with <code>useStore</code>. Only components using a changed slice re-render<br>
• <strong>Redux</strong>: store is the subject; <code>connect</code>/<code>useSelector</code> subscribe components<br>
• <strong>RxJS Observables</strong>: full reactive streams built on this pattern<br>
• <strong>EventEmitter</strong>: node's built-in observer implementation<br><br>
React's own state model is also observer-like: React tracks which components read a state atom (in future concurrent React) and only re-renders affected components.`
},

/* ══════════════════════════════════════════
   ROUND 3 — Frontend Architecture (continued)
   ══════════════════════════════════════════ */
{
  id:79, round:3, roundName:"Frontend Architecture", category:"CSS",
  question:"What is CSS containment (contain property) and why does it matter for performance?",
  options:[
    "CSS contain is the same as overflow: hidden — it clips child content to the parent boundary",
    "CSS contain tells the browser that a subtree is independent from the rest of the page, allowing rendering optimizations like skipping layout/paint recalculations outside the contained element",
    "CSS contain is a polyfill for Shadow DOM encapsulation in older browsers",
    "CSS contain prevents z-index stacking context creation inside the element"
  ],
  correct:1,
  explanation:`<code>contain</code> is a performance hint telling the browser the element's subtree is isolated:<br><br>
• <code>contain: layout</code> — layout changes inside don't affect outside elements<br>
• <code>contain: paint</code> — browser won't render content outside this element's bounds<br>
• <code>contain: size</code> — element's size is independent of its children<br>
• <code>contain: strict</code> — all of the above<br><br>
Real-world impact: infinite scroll lists where adding items at the bottom doesn't force the browser to recalculate layout for the whole page. Component libraries use this to guarantee isolated rendering.`
},
{
  id:80, round:3, roundName:"Frontend Architecture", category:"Performance",
  question:"What is the difference between reflow and repaint in browser rendering?",
  options:[
    "Reflow and repaint are the same operation — browser vendors use different terminology",
    "Reflow recalculates layout geometry (positions/sizes) — expensive, triggers repaint. Repaint updates visual appearance without layout change — cheaper",
    "Repaint happens on the main thread; reflow happens on the compositor thread",
    "Reflow only occurs on initial page load; repaint occurs on every DOM mutation"
  ],
  correct:1,
  explanation:`<strong>Reflow (layout)</strong>: the browser recalculates positions and sizes of elements. Triggered by: adding/removing DOM nodes, changing width/height/margin/padding, reading layout properties (<code>offsetWidth</code>, <code>getBoundingClientRect</code>). Expensive — can cascade through the DOM.<br><br>
<strong>Repaint</strong>: visual update without layout change. Triggered by color, background, border-color, visibility changes. Cheaper than reflow but still main-thread work.<br><br>
<strong>Optimizations:</strong><br>
• Batch DOM reads/writes — don't read then write then read (forced synchronous layout)<br>
• Use CSS transforms/opacity for animations — they run on the compositor thread, bypassing both reflow and repaint<br>
• Use <code>will-change: transform</code> to promote elements to their own layer`
},
{
  id:81, round:3, roundName:"Frontend Architecture", category:"Architecture",
  question:"What is an Architecture Decision Record (ADR) and why should frontend teams use them?",
  options:[
    "ADRs are a tool for backend architects only — frontend decisions don't need documentation",
    "An ADR documents a significant architectural decision: context, options considered, decision made, and consequences. They create institutional memory and prevent relitigating past decisions",
    "ADRs are the same as PRDs (Product Requirements Documents) — just a different naming convention",
    "ADRs are automatically generated by GitHub Copilot from commit messages"
  ],
  correct:1,
  explanation:`An <strong>ADR (Architecture Decision Record)</strong> is a short document capturing:<br>
1. <strong>Context</strong> — what problem and constraints exist<br>
2. <strong>Options considered</strong> — what alternatives were evaluated<br>
3. <strong>Decision</strong> — what was chosen and why<br>
4. <strong>Consequences</strong> — tradeoffs, tech debt, future implications<br><br>
Why they matter:<br>
• New team members understand <em>why</em> things are built a certain way<br>
• Prevents "why do we use X?" debates every quarter<br>
• Makes technical thinking visible to stakeholders<br>
• Forces structured thinking before committing to an approach<br><br>
Store ADRs as markdown files in the repo (e.g. <code>docs/adr/001-state-management.md</code>).`
},
{
  id:82, round:3, roundName:"Frontend Architecture", category:"Performance",
  question:"What is a Service Worker and what problems does it solve for frontend applications?",
  options:[
    "A Service Worker is a server-side Node.js process that pre-renders HTML for React apps",
    "A Service Worker is a background script that intercepts network requests, enabling offline capability, push notifications, and background sync — it runs separately from the main thread",
    "Service Workers are deprecated — replaced by IndexedDB for offline storage",
    "A Service Worker is the same as a Web Worker — both run off the main thread for the same purpose"
  ],
  correct:1,
  explanation:`A <strong>Service Worker</strong> is a JavaScript file that runs in a separate thread, acting as a network proxy:<br><br>
<strong>Capabilities:</strong><br>
• <strong>Offline caching</strong> — intercept fetch requests, serve from cache when offline<br>
• <strong>Background sync</strong> — queue actions when offline, execute when connection returns<br>
• <strong>Push notifications</strong> — receive server pushes even when app isn't open<br>
• <strong>Cache strategies</strong> — cache-first, network-first, stale-while-revalidate<br><br>
<strong>vs Web Worker</strong>: Web Workers are for compute-heavy JS (no DOM, no network interception). Service Workers specifically intercept network requests and have a lifecycle tied to the browser, not the page.<br><br>
Workbox (by Google) abstracts Service Worker complexity.`
},
{
  id:83, round:3, roundName:"Frontend Architecture", category:"CSS",
  question:"What is the BEM naming convention and what problem does it solve?",
  options:[
    "BEM stands for Browser Element Manipulation — it's a JavaScript API for DOM operations",
    "BEM (Block__Element--Modifier) is a CSS naming methodology that creates self-documenting, predictably scoped class names, preventing specificity conflicts in large codebases",
    "BEM is a CSS preprocessor like SASS — it compiles custom syntax to standard CSS",
    "BEM only applies to component libraries — regular application CSS should use descriptive class names without conventions"
  ],
  correct:1,
  explanation:`<strong>BEM</strong> = Block, Element, Modifier:<br>
• <strong>Block</strong>: standalone component — <code>.card</code><br>
• <strong>Element</strong>: part of block — <code>.card__title</code>, <code>.card__image</code><br>
• <strong>Modifier</strong>: variation — <code>.card--featured</code>, <code>.card__title--large</code><br><br>
Benefits:<br>
• <strong>Low specificity</strong> — all classes (not nested selectors), easy to override<br>
• <strong>Self-documenting</strong> — class name tells you the relationship<br>
• <strong>No specificity wars</strong> — flat structure prevents cascading overrides<br><br>
Modern alternatives: CSS Modules (auto-scoped), Tailwind (utility-first), CSS-in-JS (component-scoped). All solve the same namespacing problem differently.`
},
{
  id:84, round:3, roundName:"Frontend Architecture", category:"Architecture",
  question:"What is CORS, why does it exist, and how do you handle it in a React application?",
  options:[
    "CORS is a React-specific security feature that prevents components from fetching external data",
    "CORS is a browser security mechanism that blocks cross-origin requests unless the server explicitly allows them. Frontend engineers handle it by configuring the server or using a proxy",
    "CORS errors are caused by incorrect React Router configuration — fix by updating the base URL",
    "CORS only affects production deployments — it never occurs during local development"
  ],
  correct:1,
  explanation:`<strong>CORS (Cross-Origin Resource Sharing)</strong>: browsers block JS from reading responses from different origins (protocol + domain + port) to prevent CSRF attacks.<br><br>
<strong>How it works:</strong> browser sends a preflight OPTIONS request; server responds with <code>Access-Control-Allow-Origin</code>. If missing or wrong, browser blocks the response.<br><br>
<strong>Frontend solutions:</strong><br>
• <strong>Correct fix</strong>: configure the backend server to return the right CORS headers<br>
• <strong>Dev proxy</strong>: Vite/webpack devServer proxy — requests appear same-origin locally<br>
• <strong>BFF/API Gateway</strong>: route all API calls through your own backend proxy<br><br>
CORS errors happen in the browser only — server-to-server calls are never affected.`
},
{
  id:85, round:3, roundName:"Frontend Architecture", category:"TypeScript",
  question:"What is TypeScript's 'discriminated union' pattern and when is it useful?",
  options:[
    "A discriminated union is just a regular union type — the word 'discriminated' has no special meaning",
    "A discriminated union adds a literal type 'discriminant' field that TypeScript uses to narrow the type in conditional branches, making impossible states unrepresentable",
    "Discriminated unions are only useful for Redux action types — no other frontend use case",
    "TypeScript cannot discriminate union types — you must use type assertions (as) to access specific properties"
  ],
  correct:1,
  explanation:`A <strong>discriminated union</strong> uses a shared literal field to enable precise type narrowing:<br><br>
<code>type AsyncState&lt;T&gt; =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error';   error: string };</code><br><br>
TypeScript narrows the type based on <code>status</code>:<br>
<code>if (state.status === 'success') {
  // TypeScript knows state.data exists here
  console.log(state.data);
}</code><br><br>
This pattern makes impossible states unrepresentable — you can't access <code>data</code> when status is 'error'. Used heavily for API state, form state, and action types.`
},
{
  id:86, round:3, roundName:"Frontend Architecture", category:"Accessibility",
  question:"What is focus management in React and why is it critical for accessibility?",
  options:[
    "Focus management is handled automatically by the browser — React developers don't need to think about it",
    "Focus management means programmatically moving keyboard focus to the right element when the UI changes (modals open, page navigates, errors appear) so keyboard and screen reader users aren't lost",
    "Focus management is only needed for mobile applications — desktop users can always see where focus is",
    "Focus management refers to the React focusManager in React Query that pauses queries when the window loses focus"
  ],
  correct:1,
  explanation:`When UI changes dynamically, focus must be managed manually:<br><br>
<strong>Modal opens:</strong> move focus to the modal (first focusable element or modal heading). When it closes, return focus to the trigger element.<br><br>
<strong>Page navigation (SPA):</strong> focus the page &lt;h1&gt; or main content region on route change — screen readers announce the new page.<br><br>
<strong>Form errors:</strong> focus the first error field or an error summary at the top.<br><br>
<strong>Implementation:</strong><br>
<code>const modalRef = useRef(null);
useEffect(() => {
  if (isOpen) modalRef.current?.focus();
}, [isOpen]);</code><br><br>
<strong>Focus trap in modals:</strong> prevent focus escaping to background content (use focus-trap-react or aria-modal).`
},
{
  id:87, round:3, roundName:"Frontend Architecture", category:"Performance",
  question:"What is the difference between lazy loading and eager loading, and when would you eagerly load an asset?",
  options:[
    "Eager loading is always better — lazy loading causes visible delays that hurt UX",
    "Lazy loading defers loading until needed (reducing initial load). Eager load when the asset is needed immediately on page load — hero images, critical fonts, above-the-fold JS",
    "Lazy loading is only supported in Chrome — use eager loading for cross-browser compatibility",
    "Eager loading and lazy loading produce the same performance profile — the choice is stylistic"
  ],
  correct:1,
  explanation:`<strong>Lazy loading</strong> — defer until needed: <code>loading="lazy"</code> on images, <code>React.lazy()</code> for routes, dynamic <code>import()</code> for modules. Reduces initial bundle/payload.<br><br>
<strong>Eager loading</strong> — load immediately. Use when:<br>
• The <strong>LCP image</strong> (hero/banner) — lazy loading it tanks your LCP score<br>
• <strong>Critical fonts</strong> — preload to avoid FOUT/FOIT<br>
• <strong>Above-the-fold JavaScript</strong> — needed for interactivity<br>
• Assets with <strong>100% probability of being used</strong> on page load<br><br>
Preload critical eager assets:<br>
<code>&lt;link rel="preload" as="image" href="/hero.webp" /&gt;</code><br>
<code>&lt;link rel="preload" as="font" href="/font.woff2" crossorigin /&gt;</code>`
},
{
  id:88, round:3, roundName:"Frontend Architecture", category:"Architecture",
  question:"What is progressive enhancement vs graceful degradation and which does modern frontend favour?",
  options:[
    "They are identical philosophies — just different marketing names from different browser vendors",
    "Progressive enhancement starts with a baseline that works everywhere, then layers enhancements. Graceful degradation builds the full experience first, then adds fallbacks. Modern frontend favours progressive enhancement",
    "Graceful degradation is the modern approach — build for the best browser, then fix bugs in others",
    "Both approaches are obsolete — evergreen browsers mean you only need to target the latest Chrome"
  ],
  correct:1,
  explanation:`<strong>Progressive enhancement</strong>:<br>
Layer 1: semantic HTML — works anywhere, accessible by default<br>
Layer 2: CSS — visual enhancement<br>
Layer 3: JavaScript — behaviour enhancement<br><br>
If JS fails to load, the page still works (a form submits to a POST endpoint; a link navigates). This is the <strong>resilience-first</strong> approach favoured by modern frontend (Next.js, Remix).<br><br>
<strong>Graceful degradation</strong>: build the full JS-heavy experience, then add fallbacks. Works but the fallback is often an afterthought.<br><br>
Progressive enhancement is especially important for: poor network conditions, accessibility tools, search engine crawlers, and users who've disabled JS.`
},

/* ══════════════════════════════════════════
   ROUND 4 — Behavioral (continued)
   ══════════════════════════════════════════ */
{
  id:89, round:4, roundName:"Behavioral / HR Round", category:"Leadership",
  question:"You're asked to lead a project that requires cross-team coordination across 3 different engineering teams. What does your leadership approach look like?",
  options:[
    "Assign tasks to each team and wait for weekly status updates to see if they're on track",
    "Establish a shared technical spec upfront, define clear interface contracts between teams, create a regular sync cadence, and identify and unblock dependencies proactively",
    "Do most of the work yourself to ensure quality — other teams will slow things down",
    "Leave coordination to the project manager — technical leads should focus only on code"
  ],
  correct:1,
  explanation:`Cross-team projects fail at the <strong>boundaries</strong>. Effective cross-team leadership:<br><br>
1. <strong>Shared spec</strong> — align on architecture, API contracts, and data shapes before any team starts building<br>
2. <strong>Clear ownership</strong> — each team owns a specific surface; ambiguous ownership = dropped balls<br>
3. <strong>Interface-first development</strong> — agree on API shape, then teams can work in parallel with mocked data<br>
4. <strong>Regular sync cadence</strong> — short weekly cross-team check-in + async updates in shared Slack/Notion<br>
5. <strong>Dependency mapping</strong> — identify what blocks what; surface risks early<br>
6. <strong>Decision log</strong> — shared doc capturing cross-team decisions and rationale<br><br>
A lead's job is to <em>remove blockers</em> and ensure the right people are talking.`
},
{
  id:90, round:4, roundName:"Behavioral / HR Round", category:"Engineering Decisions",
  question:"How do you decide when to build something in-house versus using an existing library?",
  options:[
    "Always use a library — writing your own code means reinventing the wheel",
    "Evaluate: bundle cost, maintenance burden, match to your exact need, team expertise, and long-term ownership. Build when the library is a poor fit; use when the library handles complexity you don't want to own",
    "Always build in-house — external libraries introduce security vulnerabilities and should be avoided",
    "Use whichever approach requires less code — lines of code is the primary metric"
  ],
  correct:1,
  explanation:`The <strong>build vs buy (use)</strong> decision framework:<br><br>
<strong>Favour using a library when:</strong><br>
• The problem is well-solved (date parsing, form validation, animation)<br>
• Maintenance cost of owning the code is high<br>
• The library is actively maintained with a good community<br><br>
<strong>Favour building when:</strong><br>
• The library is 90% solution but you'd fight it for the 10%<br>
• Bundle size cost is unjustifiable for the use case<br>
• You need full control (custom design system, proprietary algorithm)<br>
• The library is large but you'd use 5% of it<br><br>
Always evaluate: npm download trends, last publish date, issue resolution time, and license compatibility.`
},
{
  id:91, round:4, roundName:"Behavioral / HR Round", category:"Collaboration",
  question:"A stakeholder insists on a UI pattern that you know violates accessibility standards and will create legal risk. How do you handle it?",
  options:[
    "Build it as requested — stakeholders have final authority on design decisions",
    "Refuse to build it and escalate to your manager immediately",
    "Document the accessibility impact and legal risk in writing, propose compliant alternatives, and escalate through proper channels if they insist on proceeding",
    "Build it but add a disclaimer in the code comments about the accessibility issue"
  ],
  correct:2,
  explanation:`This is a situation requiring <strong>professional responsibility</strong>:<br><br>
1. <strong>Educate</strong> — explain WCAG requirements and the legal landscape (ADA, EAA). Many stakeholders don't know the risk.<br>
2. <strong>Quantify the risk</strong> — "companies have paid $1M+ in ADA lawsuits over inaccessible UI" is more persuasive than abstract principles<br>
3. <strong>Propose alternatives</strong> — show a compliant design that achieves the same business goal<br>
4. <strong>Document in writing</strong> — if they still insist, email: "As discussed, this pattern doesn't meet WCAG AA. We're proceeding at your direction." Creates a paper trail.<br>
5. <strong>Escalate if needed</strong> — involve legal, design systems team, or accessibility specialists<br><br>
A senior engineer's job includes <strong>protecting the company</strong> from decisions it doesn't understand the implications of.`
},
{
  id:92, round:4, roundName:"Behavioral / HR Round", category:"Ownership",
  question:"Your team just shipped a feature that you're proud of, but user analytics show almost no one is using it. What do you do?",
  options:[
    "Nothing — your job was to build it to spec; product and marketing own adoption",
    "Delete the feature immediately to reduce code complexity",
    "Partner with product/data to understand why, run user research or A/B tests, and use findings to either improve the feature or make a data-driven case to deprecate it",
    "Write a blog post about the feature to drive awareness"
  ],
  correct:2,
  explanation:`Senior engineers <strong>own outcomes, not just outputs</strong>. Low adoption means the feature didn't achieve its goal — that's worth understanding:<br><br>
1. <strong>Dig into analytics</strong> — where do users drop off? Is it a discoverability problem or a value problem?<br>
2. <strong>User research</strong> — talk to actual users. Session replays (FullStory, Hotjar) can show friction points<br>
3. <strong>A/B test improvements</strong> — test different entry points, copy, or UX flows<br>
4. <strong>Make a data-driven recommendation</strong> — either iterate or deprecate with evidence<br><br>
Being able to connect engineering work to business outcomes is what distinguishes a senior engineer from someone who just closes tickets. The best engineers are curious about whether their work actually worked.`
},
{
  id:93, round:4, roundName:"Behavioral / HR Round", category:"Communication",
  question:"Describe your approach to a code review. What are you looking for beyond 'does it work'?",
  options:[
    "I focus only on bugs and test coverage — style and architecture are subjective and not worth commenting on",
    "I review for correctness, readability, maintainability, performance implications, accessibility, error handling, security edge cases, and whether the approach fits the existing architecture",
    "I approve PRs quickly to keep velocity high — detailed reviews slow the team down",
    "I only review code written by junior engineers — senior engineers don't need their work reviewed"
  ],
  correct:1,
  explanation:`A thorough code review checks multiple dimensions:<br><br>
<strong>Correctness</strong>: does it handle edge cases, errors, and null states?<br>
<strong>Readability</strong>: will someone understand this in 6 months? Are abstractions named clearly?<br>
<strong>Maintainability</strong>: is complexity justified? Could this be simpler?<br>
<strong>Performance</strong>: unnecessary renders, N+1 queries, memory leaks?<br>
<strong>Accessibility</strong>: keyboard navigation, ARIA, color contrast?<br>
<strong>Security</strong>: XSS vectors (dangerouslySetInnerHTML), exposed secrets, input validation?<br>
<strong>Testing</strong>: does test coverage reflect real risk?<br>
<strong>Architecture</strong>: does this fit the existing patterns, or does it introduce a new approach that should be discussed?<br><br>
Write review comments as questions or suggestions — it's a conversation, not a gatekeeping exercise.`
},
{
  id:94, round:4, roundName:"Behavioral / HR Round", category:"Leadership",
  question:"How do you handle a situation where your team's velocity is consistently lower than estimated, causing missed sprint commitments?",
  options:[
    "Pressure the team to work faster and longer hours to meet commitments",
    "Investigate root causes: poor estimation, unclear requirements, technical debt drag, interruptions, or scope creep. Fix systemic issues and re-calibrate estimates based on actual data",
    "Stop estimating — agile teams should never commit to timelines",
    "Replace team members who are consistently missing their estimates"
  ],
  correct:1,
  explanation:`Consistently missed estimates signal a <strong>systemic problem</strong>, not individual performance:<br><br>
<strong>Common root causes:</strong><br>
• Estimation doesn't account for review/QA/deploy time (only coding time)<br>
• Unplanned interruptions eating 30%+ of sprint capacity<br>
• Technical debt causing tasks to take 3x longer than similar clean tasks<br>
• Requirements changing mid-sprint<br>
• Underestimation due to unknown unknowns<br><br>
<strong>Solutions:</strong><br>
• Use <strong>historical velocity</strong> (actual points/tasks completed per sprint) as the baseline<br>
• Track interrupt work explicitly and account for it in capacity<br>
• Run blameless retros: "why did X take longer than expected?"<br>
• Limit WIP — partially done work doesn't count<br><br>
Pressure creates hidden problems; transparency creates solvable ones.`
},
{
  id:95, round:4, roundName:"Behavioral / HR Round", category:"Engineering Decisions",
  question:"How do you approach keeping your frontend knowledge current given how rapidly the ecosystem evolves?",
  options:[
    "Read every new framework announcement and migrate your production app to try each one",
    "Follow a few trusted sources, prioritize foundational skills over framework churn, evaluate new tools against real problems before adopting, and allocate dedicated learning time each week",
    "Only learn what's needed for the current project — proactive learning is time you're not shipping",
    "Rely on senior architects to evaluate new technologies — individual engineers shouldn't spend time on this"
  ],
  correct:1,
  explanation:`Sustainable learning as a senior engineer:<br><br>
<strong>Foundations over frameworks:</strong> JavaScript fundamentals, browser APIs, networking, accessibility, performance patterns — these transfer across every tool. Frameworks come and go.<br><br>
<strong>Trusted signal sources:</strong> TC39 proposals, React/TypeScript release notes, web.dev, MDN, JS Weekly newsletter — high signal, low noise<br><br>
<strong>Evaluation filter:</strong> "Does this solve a real problem I have?" vs "Is this just new and interesting?"<br><br>
<strong>Structured learning time:</strong> dedicated 20% time, conference talks, reading ADRs from companies you respect, writing or teaching<br><br>
<strong>Community:</strong> code reviews, open source contributions, and explaining concepts to others accelerates learning more than passive reading.<br><br>
FOMO-driven adoption is a career anti-pattern. Depth beats breadth.`
},

{
  id:96, round:3, roundName:"Frontend Architecture", category:"CSS",
  question:"What are CSS Custom Properties (variables) and what advantages do they have over preprocessor variables like SASS?",
  options:[
    "CSS custom properties are exactly the same as SASS variables — just a different syntax",
    "CSS custom properties are live and scoped to the DOM: they cascade, inherit, can be changed at runtime with JavaScript, and work in media queries — SASS variables are compiled away and static",
    "CSS custom properties are slower than SASS variables and should only be used for theming",
    "CSS custom properties require a build step to compile — they are not natively supported in browsers"
  ],
  correct:1,
  explanation:`CSS Custom Properties (<code>--my-var: value</code>) are native browser features with key advantages over SASS variables:<br><br>
<strong>Live / runtime</strong>: change them with JS — <code>el.style.setProperty('--color', 'red')</code> — enabling dynamic theming without re-compilation<br>
<strong>Cascade & inherit</strong>: they follow CSS inheritance. Override at any scope: <code>:root</code> sets global defaults; a <code>.dark-mode</code> class overrides locally<br>
<strong>Media query responsive</strong>: redefine inside <code>@media</code> to change multiple values at once<br>
<strong>No build step</strong>: zero tooling required<br><br>
SASS variables are compiled to static values — once built, they can't change at runtime. Use CSS custom properties for design tokens, theming, and any value that needs runtime flexibility.`
},
{
  id:97, round:3, roundName:"Frontend Architecture", category:"Architecture",
  question:"What is the strangler fig pattern and how does it apply to frontend migrations?",
  options:[
    "The strangler fig pattern means deleting the old codebase and rewriting everything from scratch",
    "The strangler fig pattern gradually replaces parts of an old system with new code, routing traffic to the new implementation piece by piece until the old system is fully replaced",
    "It's a design pattern for creating API wrappers that hide third-party dependencies",
    "The strangler fig is a React pattern for conditionally rendering legacy class components alongside new functional components"
  ],
  correct:1,
  explanation:`Named after the strangler fig tree that grows around and eventually replaces its host, this pattern avoids the <strong>big-bang rewrite</strong> risk:<br><br>
<strong>Frontend migration example</strong> (Angular → React):<br>
1. <strong>Identify bounded slices</strong> — choose one route or feature at a time<br>
2. <strong>Build the new version alongside the old</strong> — both live in production simultaneously<br>
3. <strong>Route traffic to new</strong> — feature flag or URL routing sends users to new implementation<br>
4. <strong>Verify, then remove old code</strong> — only delete the old once the new is stable<br>
5. <strong>Repeat</strong> until the legacy system is fully replaced<br><br>
Benefits: zero downtime, incremental validation, ability to pause/rollback. The alternative (full rewrite) almost always takes 3× longer than estimated.`
},
{
  id:98, round:4, roundName:"Behavioral / HR Round", category:"Leadership",
  question:"How do you measure success for a frontend team beyond just 'features shipped'?",
  options:[
    "Lines of code written and number of PRs merged per week are the best objective metrics",
    "Measure a balanced set of outcomes: user-facing metrics (performance, error rates, conversion), developer experience (build times, test coverage, deploy frequency), team health (satisfaction, retention, onboarding time), and business impact",
    "Frontend success is entirely subjective — there are no meaningful metrics for UI work",
    "Only measure bug count — low bugs means a successful team"
  ],
  correct:1,
  explanation:`<strong>Features shipped</strong> is an output metric, not an outcome metric. A senior lead tracks:<br><br>
<strong>User-facing quality:</strong><br>
• Core Web Vitals (LCP, INP, CLS)<br>
• Error rate / crash-free session rate<br>
• Conversion rate, task completion rate<br><br>
<strong>Developer experience:</strong><br>
• CI/CD pipeline time (fast = high DX)<br>
• Test coverage on critical paths<br>
• Deploy frequency (reflects team confidence)<br>
• Change failure rate + MTTR (DORA metrics)<br><br>
<strong>Team health:</strong><br>
• Engineer satisfaction (quarterly surveys)<br>
• Time to onboard a new engineer<br>
• Team retention<br><br>
<strong>Business impact:</strong><br>
• Feature adoption rate<br>
• A/B test win rate<br><br>
The best teams optimise for outcomes (did users benefit?) not outputs (did we ship?).`
},
{
  id:99, round:4, roundName:"Behavioral / HR Round", category:"Collaboration",
  question:"You join a team that has significant legacy code with no tests and poor documentation. What is your first 90 days approach?",
  options:[
    "Immediately rewrite everything with proper tests and documentation before touching any new features",
    "Spend the first 30 days learning the codebase deeply before proposing changes; identify the highest-risk areas, establish a baseline, and introduce improvements incrementally alongside feature work",
    "Refuse to work on the legacy code until the team adds documentation first",
    "Ignore the legacy code entirely and only write new code in a separate module"
  ],
  correct:1,
  explanation:`Joining a legacy codebase requires <strong>diagnose before prescribe</strong>:<br><br>
<strong>First 30 days — learn:</strong><br>
• Understand the architecture by reading code and running it<br>
• Talk to teammates: "what are the parts nobody wants to touch and why?"<br>
• Identify: which areas are changed most often? (highest return from improvement)<br>
• Build a mental risk map: what breaks if touched?<br><br>
<strong>Days 30–60 — baseline:</strong><br>
• Add tests to code you're modifying (boy scout rule)<br>
• Document as you learn — write the docs you wish existed<br>
• Identify the 1–2 changes with highest impact/risk ratio<br><br>
<strong>Days 60–90 — propose + pilot:</strong><br>
• Share your findings with the team<br>
• Propose a realistic improvement roadmap, not a moonshot<br>
• Implement one targeted improvement to demonstrate value<br><br>
Avoid: immediately rewriting (breaks trust, loses tribal knowledge), criticising the team (everyone made reasonable decisions given past constraints).`
},
{
  id:100, round:4, roundName:"Behavioral / HR Round", category:"Engineering Decisions",
  question:"What is your philosophy on writing documentation as a senior frontend engineer?",
  options:[
    "Documentation is a waste of time — well-written code documents itself and needs no explanation",
    "Documentation should explain the 'why' (decisions, tradeoffs, non-obvious context) not the 'what' — the code already shows what it does. Target: new team members can be productive without asking you",
    "Documentation should describe every function parameter and return value — full JSDoc on everything",
    "Only document code that is broken or confusing — good code needs no documentation at all"
  ],
  correct:1,
  explanation:`<strong>Great documentation</strong> answers questions the code can't:<br><br>
<strong>Document the WHY:</strong><br>
• Why was this approach chosen over the obvious alternative?<br>
• What constraint made this necessary?<br>
• What will break if you change this?<br><br>
<strong>Target audience</strong>: your team member at 2am debugging a production incident. Can they understand it without you?<br><br>
<strong>What to document:</strong><br>
• Architecture decisions (ADRs)<br>
• Non-obvious tradeoffs in complex logic<br>
• Setup and onboarding (README)<br>
• Public API surfaces (component props, hooks)<br>
• Known limitations and workarounds<br><br>
<strong>What NOT to document:</strong><br>
• Line-by-line explanations of obvious code<br>
• Implementation details that change frequently<br><br>
The best documentation: READMEs that let a new engineer run the project in 10 minutes, and ADRs that prevent "why do we do it this way?" debates.`
}

]; // end QUESTIONS
