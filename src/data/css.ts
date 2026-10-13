import type { CssQuestion } from './types';

export const cssQuestions: CssQuestion[] = [
  {
    id: "css-001",
    question: "What does 'cascading' refer to in CSS?",
    theme: "CSS",
    subCategory: "Cascade & specificity",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Animations flowing down the page",
      "The algorithm that decides which declaration wins when several apply",
      "Loading stylesheets in sequence",
      "Nested selectors"
    ],
    correctAnswer: "The algorithm that decides which declaration wins when several apply",
    explanation: "The cascade resolves conflicts between declarations for the same property: origin and `!important`, then cascade layers, then specificity, then source order."
  },
  {
    id: "css-002",
    question: "What's the difference between a pseudo-class and a pseudo-element?",
    theme: "CSS",
    subCategory: "Selectors",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Pseudo-classes need content",
      "Pseudo-elements select states",
      "A pseudo-class selects a state (:hover); a pseudo-element styles part of an element (::before)",
      "None"
    ],
    correctAnswer: "A pseudo-class selects a state (:hover); a pseudo-element styles part of an element (::before)",
    explanation: "Pseudo-classes (single colon) select elements in a state or position, like `:hover` or `:nth-child()`. Pseudo-elements (double colon) style a part of an element or generated content, like `::before` or `::placeholder`."
  },
  {
    id: "css-003",
    question: "Why does `::before` render nothing without a `content` property?",
    theme: "CSS",
    subCategory: "Selectors",
    level: "easy",
    fourOptionsForAnAnswer: [
      "It needs display: block",
      "It only works on images",
      "It needs position: absolute",
      "content is required to generate the pseudo-element box"
    ],
    correctAnswer: "content is required to generate the pseudo-element box",
    explanation: "`::before` and `::after` only generate a box when `content` is set, even to an empty string (`content: ''`)."
  },
  {
    id: "css-004",
    question: "Difference between `:nth-child(2)` and `:nth-of-type(2)`?",
    theme: "CSS",
    subCategory: "Selectors",
    level: "medium",
    fourOptionsForAnAnswer: [
      ":nth-of-type counts all siblings",
      ":nth-child counts all siblings; :nth-of-type counts only siblings of the same element type",
      "None",
      ":nth-child only works on lists"
    ],
    correctAnswer: ":nth-child counts all siblings; :nth-of-type counts only siblings of the same element type",
    explanation: "`p:nth-child(2)` matches a `<p>` only if it is the second child of any type. `p:nth-of-type(2)` matches the second `<p>` among its siblings, ignoring other element types."
  },
  {
    id: "css-005",
    question: "Difference between `em` and `rem`?",
    theme: "CSS",
    subCategory: "Units & values",
    level: "easy",
    fourOptionsForAnAnswer: [
      "em is a fixed unit",
      "em is relative to the parent's font size (for font-size); rem to the root element's",
      "rem is relative to the parent",
      "None"
    ],
    correctAnswer: "em is relative to the parent's font size (for font-size); rem to the root element's",
    explanation: "`rem` is relative to the root (`html`) font size, so it never compounds. `em` is relative to the parent's font size for `font-size` (and the element's own font size for other properties), so nested `em`s multiply."
  },
  {
    id: "css-006",
    question: "What problem do `dvh`/`svh`/`lvh` units solve?",
    theme: "CSS",
    subCategory: "Units & values",
    level: "medium",
    fourOptionsForAnAnswer: [
      "High-DPI screens",
      "Desktop zoom",
      "100vh being wrong on mobile when browser UI shows or hides",
      "Print layouts"
    ],
    correctAnswer: "100vh being wrong on mobile when browser UI shows or hides",
    explanation: "On mobile, browser toolbars appear and disappear, so `100vh` can be taller than the visible area. `svh` uses the smallest viewport, `lvh` the largest, and `dvh` follows the current one."
  },
  {
    id: "css-007",
    question: "What does `currentColor` refer to?",
    theme: "CSS",
    subCategory: "Colors",
    level: "easy",
    fourOptionsForAnAnswer: [
      "The parent's border color",
      "The element's computed color value",
      "The system accent color",
      "The background color"
    ],
    correctAnswer: "The element's computed color value",
    explanation: "`currentColor` is the element's computed `color`, which makes borders, SVG `fill`, or shadows follow the text color automatically, including on hover."
  },
  {
    id: "css-008",
    question: "Which of these properties is inherited by default?",
    theme: "CSS",
    subCategory: "Cascade & specificity",
    level: "easy",
    fourOptionsForAnAnswer: [
      "padding",
      "border",
      "color",
      "margin"
    ],
    correctAnswer: "color",
    explanation: "Text-related properties like `color`, `font`, `line-height`, and `visibility` inherit. Box properties like `margin`, `padding`, and `border` don't."
  },
  {
    id: "css-009",
    question: "Difference between `unset` and `revert`?",
    theme: "CSS",
    subCategory: "Cascade & specificity",
    level: "medium",
    fourOptionsForAnAnswer: [
      "None",
      "unset removes the element",
      "unset acts as inherit or initial; revert rolls back to the user-agent (or previous origin) style",
      "revert acts as initial"
    ],
    correctAnswer: "unset acts as inherit or initial; revert rolls back to the user-agent (or previous origin) style",
    explanation: "`unset` acts as `inherit` for inherited properties and `initial` otherwise. `revert` rolls back to what the previous cascade origin would give, usually the browser's default style."
  },
  {
    id: "css-010",
    question: "What does `color-mix(in oklch, red 40%, blue)` do?",
    theme: "CSS",
    subCategory: "Colors",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Creates a gradient",
      "Returns the contrast ratio",
      "Mixes the two colors in the given color space",
      "Picks a random color"
    ],
    correctAnswer: "Mixes the two colors in the given color space",
    explanation: "`color-mix()` blends two colors in a chosen color space by percentage. Mixing in `oklch` gives perceptually smoother results than sRGB."
  },
  {
    id: "css-011",
    question: "Which beats which: an inline `style` attribute or a stylesheet rule with `!important`?",
    theme: "CSS",
    subCategory: "Cascade & specificity",
    level: "easy",
    fourOptionsForAnAnswer: [
      "The !important rule",
      "Inline style",
      "The one declared last",
      "They merge"
    ],
    correctAnswer: "The !important rule",
    explanation: "Inline styles beat normal declarations from stylesheets, but `!important` declarations are a higher-priority group, so a stylesheet `!important` beats a normal inline style."
  },
  {
    id: "css-012",
    question: "Specificity of `#a .b p`?",
    theme: "CSS",
    subCategory: "Cascade & specificity",
    level: "easy",
    fourOptionsForAnAnswer: [
      "(0,1,2)",
      "(1,1,1)",
      "(1,0,2)",
      "(1,2,0)"
    ],
    correctAnswer: "(1,1,1)",
    explanation: "Specificity counts ids, then classes/attributes/pseudo-classes, then types/pseudo-elements. `#a .b p` has one id, one class, and one type: (1,1,1)."
  },
  {
    id: "css-013",
    question: "What is the specificity of `:where(...)`?",
    theme: "CSS",
    subCategory: "Cascade & specificity",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Zero",
      "Same as an id",
      "Same as its most specific argument",
      "Same as a class"
    ],
    correctAnswer: "Zero",
    explanation: "`:where()` always contributes zero specificity, whatever its arguments. That makes it ideal for defaults and resets that are easy to override."
  },
  {
    id: "css-014",
    question: "What is the specificity of `:is(...)`?",
    theme: "CSS",
    subCategory: "Cascade & specificity",
    level: "medium",
    fourOptionsForAnAnswer: [
      "The sum of its arguments",
      "Always that of a class",
      "The specificity of its most specific argument",
      "Zero"
    ],
    correctAnswer: "The specificity of its most specific argument",
    explanation: "`:is()` takes the specificity of its most specific argument, so `:is(#a, .b)` counts as an id even when it matches through `.b`."
  },
  {
    id: "css-015",
    question: "Normal (non-important) declarations: does unlayered CSS beat CSS in `@layer`?",
    theme: "CSS",
    subCategory: "Cascade & specificity",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Only if declared later",
      "Yes, unlayered styles beat all layered styles",
      "Only if more specific",
      "No, layers always win"
    ],
    correctAnswer: "Yes, unlayered styles beat all layered styles",
    explanation: "For normal declarations, unlayered styles act like an implicit final layer, so they beat every named layer regardless of specificity."
  },
  {
    id: "css-016",
    question: "For `!important` declarations, which cascade layer wins?",
    theme: "CSS",
    subCategory: "Cascade & specificity",
    level: "hard",
    fourOptionsForAnAnswer: [
      "The last declared layer",
      "Unlayered styles",
      "The first declared layer (order is reversed)",
      "The most specific one regardless of layer"
    ],
    correctAnswer: "The first declared layer (order is reversed)",
    explanation: "Layer order is reversed for important declarations: `!important` in the first-declared layer wins. That lets low-level layers like resets protect critical rules."
  },
  {
    id: "css-017",
    question: "What does `@scope` solve?",
    theme: "CSS",
    subCategory: "Cascade & specificity",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Media query scoping",
      "Scoping JS",
      "Variable scoping",
      "Limiting styles to a DOM subtree, optionally with a lower boundary"
    ],
    correctAnswer: "Limiting styles to a DOM subtree, optionally with a lower boundary",
    explanation: "`@scope (.card) to (.content) { ... }` limits styles to a subtree and can stop at a lower boundary (donut scope). It also prefers the closest scope root when rules conflict."
  },
  {
    id: "css-018",
    question: "In native CSS nesting, `.a { .b { } }` is equivalent to:",
    theme: "CSS",
    subCategory: "Nesting",
    level: "medium",
    fourOptionsForAnAnswer: [
      ".a > .b",
      ".b .a",
      ".a.b",
      ".a .b"
    ],
    correctAnswer: ".a .b",
    explanation: "A nested selector without `&` is treated as a descendant of the parent, so `.a { .b {} }` means `.a .b`. Write `&.b` for a compound `.a.b`."
  },
  {
    id: "css-019",
    question: "How is the specificity of a nested rule's parent selector computed?",
    theme: "CSS",
    subCategory: "Nesting",
    level: "hard",
    fourOptionsForAnAnswer: [
      "It is ignored",
      "As a single class",
      "As zero",
      "As if wrapped in :is()"
    ],
    correctAnswer: "As if wrapped in :is()",
    explanation: "The parent selector behaves like `:is(parent)`, so its specificity is that of the most specific selector in the parent's list, even if a less specific one actually matched."
  },
  {
    id: "css-020",
    question: "What does `box-sizing: border-box` do?",
    theme: "CSS",
    subCategory: "Box model",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Adds a border",
      "Makes width/height include padding and border",
      "Removes margins",
      "Excludes padding from the width"
    ],
    correctAnswer: "Makes width/height include padding and border",
    explanation: "With `border-box`, `width` and `height` include padding and border, so a `200px` box stays 200px when you add padding. That's why most resets apply it globally."
  },
  {
    id: "css-021",
    question: "What is margin collapsing?",
    theme: "CSS",
    subCategory: "Box model",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Margins being removed on mobile",
      "Adjacent vertical margins of blocks combining into one (the larger)",
      "Horizontal margins merging",
      "Negative margins being ignored"
    ],
    correctAnswer: "Adjacent vertical margins of blocks combining into one (the larger)",
    explanation: "Adjacent vertical margins of block boxes merge into a single margin equal to the larger one (or a sum when negative margins are involved). Horizontal margins never collapse."
  },
  {
    id: "css-022",
    question: "Where does margin collapsing NOT happen?",
    theme: "CSS",
    subCategory: "Box model",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Between a parent and its first child without padding/border",
      "Between flex or grid items",
      "Between sibling paragraphs",
      "In empty blocks"
    ],
    correctAnswer: "Between flex or grid items",
    explanation: "Margins don't collapse for flex and grid items, floated or absolutely positioned boxes, or across a BFC boundary, padding, or border."
  },
  {
    id: "css-023",
    question: "A percentage `padding-top` is calculated relative to:",
    theme: "CSS",
    subCategory: "Box model",
    level: "medium",
    fourOptionsForAnAnswer: [
      "The element's height",
      "The containing block's width",
      "The font size",
      "The viewport height"
    ],
    correctAnswer: "The containing block's width",
    explanation: "Percentage padding and margin, even vertical ones, are relative to the containing block's width. That's what made the old 'padding-top: 56.25%' 16:9 trick work."
  },
  {
    id: "css-024",
    question: "Can padding be negative?",
    theme: "CSS",
    subCategory: "Box model",
    level: "easy",
    fourOptionsForAnAnswer: [
      "No",
      "Only padding-left",
      "Only in flexbox",
      "Yes"
    ],
    correctAnswer: "No",
    explanation: "Negative padding is invalid and the declaration is ignored. Negative margins are allowed and commonly used for overlap effects."
  },
  {
    id: "css-025",
    question: "Main difference between `outline` and `border`?",
    theme: "CSS",
    subCategory: "Box model",
    level: "easy",
    fourOptionsForAnAnswer: [
      "None",
      "outline doesn't take up layout space",
      "border can't be rounded",
      "outline is inherited"
    ],
    correctAnswer: "outline doesn't take up layout space",
    explanation: "`outline` is drawn outside the border box without affecting layout, which makes it ideal for focus indicators. It also supports `outline-offset`."
  },
  {
    id: "css-026",
    question: "Why use logical properties like `margin-inline-start`?",
    theme: "CSS",
    subCategory: "Box model",
    level: "medium",
    fourOptionsForAnAnswer: [
      "They're faster",
      "Better browser support",
      "They adapt to writing mode and text direction (LTR/RTL)",
      "They're required for flexbox"
    ],
    correctAnswer: "They adapt to writing mode and text direction (LTR/RTL)",
    explanation: "Logical properties (`inline`/`block`, `start`/`end`) map to physical sides based on writing mode and direction, so a layout flips correctly for RTL languages without extra CSS."
  },
  {
    id: "css-027",
    question: "What does `overflow: clip` do differently from `overflow: hidden`?",
    theme: "CSS",
    subCategory: "Box model",
    level: "medium",
    fourOptionsForAnAnswer: [
      "It doesn't create a scroll container, so even programmatic scrolling is impossible",
      "Nothing",
      "It shows scrollbars",
      "It clips only horizontally"
    ],
    correctAnswer: "It doesn't create a scroll container, so even programmatic scrolling is impossible",
    explanation: "`overflow: hidden` still creates a scroll container (it can scroll through JS or focus). `overflow: clip` just clips, so it doesn't break `position: sticky` on descendants."
  },
  {
    id: "css-028",
    question: "What does `width: fit-content` compute to?",
    theme: "CSS",
    subCategory: "Units & values",
    level: "medium",
    fourOptionsForAnAnswer: [
      "The min-content size",
      "auto",
      "100%",
      "The content size, but no larger than the available space"
    ],
    correctAnswer: "The content size, but no larger than the available space",
    explanation: "`fit-content` shrinks to the content's preferred size but never exceeds the available space, then wraps. In other words, `min(max-content, max(min-content, available))`."
  },
  {
    id: "css-029",
    question: "Can you set `width` and `height` on an inline element like `<span>`?",
    theme: "CSS",
    subCategory: "Display & formatting contexts",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Only height",
      "Yes",
      "Only width",
      "No, they are ignored"
    ],
    correctAnswer: "No, they are ignored",
    explanation: "Non-replaced inline boxes take their size from their content and line height, so `width` and `height` are ignored. Use `inline-block` or `block` to size them. (Replaced elements like `<img>` are different.)"
  },
  {
    id: "css-030",
    question: "What does `display: inline-block` give you?",
    theme: "CSS",
    subCategory: "Display & formatting contexts",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Sits inline in text flow but respects width, height, and vertical margins",
      "A block that starts a new line",
      "A hidden element",
      "A flex container"
    ],
    correctAnswer: "Sits inline in text flow but respects width, height, and vertical margins",
    explanation: "`inline-block` flows inline with text but lays out its content as a block, so `width`, `height`, `padding`, and vertical margins all apply."
  },
  {
    id: "css-031",
    question: "Why is there a small gap under an `<img>` inside a div?",
    theme: "CSS",
    subCategory: "Display & formatting contexts",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Line-height of the image",
      "Default margin",
      "Browser bug",
      "Images are inline and align to the text baseline, leaving room for descenders"
    ],
    correctAnswer: "Images are inline and align to the text baseline, leaving room for descenders",
    explanation: "Images are inline by default and sit on the text baseline, leaving room for descenders below. Use `display: block` or `vertical-align: middle`/`bottom` to remove the gap."
  },
  {
    id: "css-032",
    question: "What is the cleanest way to create a new Block Formatting Context?",
    theme: "CSS",
    subCategory: "Display & formatting contexts",
    level: "medium",
    fourOptionsForAnAnswer: [
      "overflow: hidden",
      "display: flow-root",
      "position: absolute",
      "float: left"
    ],
    correctAnswer: "display: flow-root",
    explanation: "`display: flow-root` exists only to create a BFC, with no side effects like clipping (`overflow: hidden`) or taking the element out of flow (floats, absolute positioning)."
  },
  {
    id: "css-033",
    question: "What does a Block Formatting Context fix?",
    theme: "CSS",
    subCategory: "Display & formatting contexts",
    level: "medium",
    fourOptionsForAnAnswer: [
      "It contains floats and stops margins collapsing with its children",
      "Flex alignment",
      "Z-index issues",
      "Font rendering"
    ],
    correctAnswer: "It contains floats and stops margins collapsing with its children",
    explanation: "A BFC contains its floats (the parent grows around them), doesn't overlap floats, and stops its children's margins from collapsing through it."
  },
  {
    id: "css-034",
    question: "What does `display: contents` do?",
    theme: "CSS",
    subCategory: "Display & formatting contexts",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Removes the element's own box so its children act as children of its parent",
      "Hides the element",
      "Displays only text",
      "Makes it a grid"
    ],
    correctAnswer: "Removes the element's own box so its children act as children of its parent",
    explanation: "`display: contents` removes the element's own box so its children participate in the parent's layout, for example as grid items. Older browser versions also dropped its semantics."
  },
  {
    id: "css-035",
    question: "Difference between `display: none` and `visibility: hidden`?",
    theme: "CSS",
    subCategory: "Display & formatting contexts",
    level: "easy",
    fourOptionsForAnAnswer: [
      "None",
      "visibility: hidden keeps its space in the layout; display: none removes it",
      "display: none keeps space",
      "visibility: hidden removes it from the DOM"
    ],
    correctAnswer: "visibility: hidden keeps its space in the layout; display: none removes it",
    explanation: "`display: none` removes the box from layout and the accessibility tree. `visibility: hidden` hides it but keeps its space, and children can opt back in with `visibility: visible`."
  },
  {
    id: "css-036",
    question: "An element with `opacity: 0` is:",
    theme: "CSS",
    subCategory: "Display & formatting contexts",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Invisible but still takes space, receives clicks, and is exposed to screen readers",
      "Unfocusable",
      "Removed from layout",
      "Removed from the accessibility tree"
    ],
    correctAnswer: "Invisible but still takes space, receives clicks, and is exposed to screen readers",
    explanation: "`opacity: 0` only makes the element transparent: it still occupies space, receives clicks, can be focused, and is read by screen readers."
  },
  {
    id: "css-037",
    question: "An absolutely positioned element is positioned relative to:",
    theme: "CSS",
    subCategory: "Positioning",
    level: "easy",
    fourOptionsForAnAnswer: [
      "The nearest positioned (non-static) ancestor",
      "The body",
      "Its parent always",
      "The viewport always"
    ],
    correctAnswer: "The nearest positioned (non-static) ancestor",
    explanation: "The containing block of an `absolute` element is the padding box of its nearest ancestor with `position` other than `static`, or a transform/filter ancestor. If there's none, it's the initial containing block."
  },
  {
    id: "css-038",
    question: "Why might `position: fixed` behave like `absolute`?",
    theme: "CSS",
    subCategory: "Positioning",
    level: "medium",
    fourOptionsForAnAnswer: [
      "An ancestor has transform, filter, perspective, or containment",
      "Missing top value",
      "It's inside a flex container",
      "The page is scrolled"
    ],
    correctAnswer: "An ancestor has transform, filter, perspective, or containment",
    explanation: "Fixed elements normally use the viewport, but an ancestor with `transform`, `filter`, `perspective`, `contain: paint`, or `will-change: transform` becomes their containing block."
  },
  {
    id: "css-039",
    question: "Most common reason `position: sticky` doesn't work?",
    theme: "CSS",
    subCategory: "Positioning",
    level: "medium",
    fourOptionsForAnAnswer: [
      "It's an inline element",
      "It's inside a grid",
      "An ancestor has overflow hidden/auto/scroll, or no top/bottom is set",
      "Missing z-index"
    ],
    correctAnswer: "An ancestor has overflow hidden/auto/scroll, or no top/bottom is set",
    explanation: "Sticky sticks within its nearest scrolling ancestor. An ancestor with `overflow: hidden/auto/scroll` becomes that scroll container, and without `top` or `bottom` there's no threshold to stick at."
  },
  {
    id: "css-040",
    question: "What does `inset: 0` mean?",
    theme: "CSS",
    subCategory: "Positioning",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Remove shadows",
      "padding: 0",
      "margin: 0",
      "top, right, bottom, and left all 0"
    ],
    correctAnswer: "top, right, bottom, and left all 0",
    explanation: "`inset` is shorthand for `top`, `right`, `bottom`, `left`. `inset: 0` stretches a positioned element to cover its containing block."
  },
  {
    id: "css-041",
    question: "What does CSS Anchor Positioning allow?",
    theme: "CSS",
    subCategory: "Positioning",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Positioning an element relative to another element (e.g. tooltips) without JavaScript",
      "Scroll anchoring",
      "Fixed headers",
      "Anchor links smooth scrolling"
    ],
    correctAnswer: "Positioning an element relative to another element (e.g. tooltips) without JavaScript",
    explanation: "Give an element `anchor-name: --btn`, then position another with `position-anchor: --btn` and `anchor()` or `position-area`. `position-try` adds fallbacks when it doesn't fit."
  },
  {
    id: "css-042",
    question: "Why might `z-index` have no effect?",
    theme: "CSS",
    subCategory: "Stacking & z-index",
    level: "medium",
    fourOptionsForAnAnswer: [
      "z-index only works on divs",
      "The element is position: static and not a flex/grid item",
      "It needs a high value",
      "It requires opacity"
    ],
    correctAnswer: "The element is position: static and not a flex/grid item",
    explanation: "`z-index` only applies to positioned elements and to flex or grid items. Also, an element can never escape its parent's stacking context, however high its value."
  },
  {
    id: "css-043",
    question: "Which of these does NOT create a stacking context?",
    theme: "CSS",
    subCategory: "Stacking & z-index",
    level: "medium",
    fourOptionsForAnAnswer: [
      "isolation: isolate",
      "opacity: 0.99",
      "transform: translateX(0)",
      "position: relative with z-index: auto"
    ],
    correctAnswer: "position: relative with z-index: auto",
    explanation: "`position: relative` alone (with `z-index: auto`) doesn't create a stacking context. `opacity` below 1, any `transform`, and `isolation: isolate` all do."
  },
  {
    id: "css-044",
    question: "What does `isolation: isolate` do?",
    theme: "CSS",
    subCategory: "Stacking & z-index",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Disables blend modes",
      "Isolates JS events",
      "Hides the element",
      "Creates a new stacking context without other side effects"
    ],
    correctAnswer: "Creates a new stacking context without other side effects",
    explanation: "`isolation: isolate` creates a stacking context without changing position or visuals. It contains children's z-index values and limits `mix-blend-mode` to the element."
  },
  {
    id: "css-045",
    question: "What is the 'top layer'?",
    theme: "CSS",
    subCategory: "Stacking & z-index",
    level: "hard",
    fourOptionsForAnAnswer: [
      "A layer above the document for modal dialogs, popovers, and fullscreen, regardless of z-index",
      "The highest z-index",
      "The HTML element",
      "The GPU layer"
    ],
    correctAnswer: "A layer above the document for modal dialogs, popovers, and fullscreen, regardless of z-index",
    explanation: "The top layer sits above the whole document, outside normal stacking contexts. `<dialog>` opened with `showModal()`, popovers, and fullscreen elements render there, so no z-index can cover them."
  },
  {
    id: "css-046",
    question: "Default main axis direction of a flex container?",
    theme: "CSS",
    subCategory: "Flexbox",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Diagonal",
      "Depends on content",
      "Row (horizontal in LTR)",
      "Column"
    ],
    correctAnswer: "Row (horizontal in LTR)",
    explanation: "`flex-direction` defaults to `row`, so items lay out horizontally along the inline direction (left to right in LTR)."
  },
  {
    id: "css-047",
    question: "`justify-content` aligns items along the:",
    theme: "CSS",
    subCategory: "Flexbox",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Main axis",
      "Z axis",
      "Cross axis",
      "Both axes"
    ],
    correctAnswer: "Main axis",
    explanation: "`justify-content` distributes space along the main axis: horizontal in a row, vertical in a column."
  },
  {
    id: "css-048",
    question: "`align-items` aligns items along the:",
    theme: "CSS",
    subCategory: "Flexbox",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Both axes",
      "Cross axis",
      "Main axis",
      "Text baseline only"
    ],
    correctAnswer: "Cross axis",
    explanation: "`align-items` aligns items on the cross axis, perpendicular to the main axis. It defaults to `stretch`."
  },
  {
    id: "css-049",
    question: "`flex: 1` expands to:",
    theme: "CSS",
    subCategory: "Flexbox",
    level: "medium",
    fourOptionsForAnAnswer: [
      "0 0 auto",
      "1 0 auto",
      "1 1 0%",
      "1 1 auto"
    ],
    correctAnswer: "1 1 0%",
    explanation: "`flex: 1` means `flex-grow: 1; flex-shrink: 1; flex-basis: 0%`. Items ignore their content size and share space by grow factor."
  },
  {
    id: "css-050",
    question: "`flex: auto` expands to:",
    theme: "CSS",
    subCategory: "Flexbox",
    level: "medium",
    fourOptionsForAnAnswer: [
      "1 1 0%",
      "0 0 auto",
      "1 1 auto",
      "0 1 auto"
    ],
    correctAnswer: "1 1 auto",
    explanation: "`flex: auto` is `1 1 auto`: items start from their content or `width` size and then share the remaining space, so items with more content end up wider."
  },
  {
    id: "css-051",
    question: "`flex: none` expands to:",
    theme: "CSS",
    subCategory: "Flexbox",
    level: "medium",
    fourOptionsForAnAnswer: [
      "0 1 auto",
      "1 1 0%",
      "1 0 auto",
      "0 0 auto"
    ],
    correctAnswer: "0 0 auto",
    explanation: "`flex: none` is `0 0 auto`: the item keeps its natural size and neither grows nor shrinks."
  },
  {
    id: "css-052",
    question: "Why does a flex item with long text overflow, and how is it fixed?",
    theme: "CSS",
    subCategory: "Flexbox",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Flex items default to min-width: auto; set min-width: 0",
      "Text needs display: block",
      "Missing width; add width: 100%",
      "Missing flex-wrap; add it"
    ],
    correctAnswer: "Flex items default to min-width: auto; set min-width: 0",
    explanation: "Flex items have `min-width: auto`, which means they won't shrink below their content's minimum size. `min-width: 0` (or `overflow: hidden`) lets them shrink and truncate."
  },
  {
    id: "css-053",
    question: "What does `margin-left: auto` do on a flex item?",
    theme: "CSS",
    subCategory: "Flexbox",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Pushes the item (and those after it) to the end of the main axis",
      "Nothing",
      "Adds a 16px margin",
      "Centers the item"
    ],
    correctAnswer: "Pushes the item (and those after it) to the end of the main axis",
    explanation: "Auto margins absorb all free space on that side. In a row, `margin-left: auto` pushes the item and everything after it to the far end, a classic way to right-align a nav's last item."
  },
  {
    id: "css-054",
    question: "Accessibility risk of the `order` property?",
    theme: "CSS",
    subCategory: "Flexbox",
    level: "medium",
    fourOptionsForAnAnswer: [
      "It hides items from screen readers",
      "None",
      "It breaks focus outlines",
      "Visual order no longer matches DOM, reading, and tab order"
    ],
    correctAnswer: "Visual order no longer matches DOM, reading, and tab order",
    explanation: "`order` changes only the visual order. Keyboard focus and screen readers still follow the DOM, so users can jump around unpredictably."
  },
  {
    id: "css-055",
    question: "Main difference between Grid and Flexbox?",
    theme: "CSS",
    subCategory: "Grid",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Grid is older",
      "Grid only works for images",
      "Grid is two-dimensional; Flexbox is one-dimensional",
      "Flexbox is two-dimensional"
    ],
    correctAnswer: "Grid is two-dimensional; Flexbox is one-dimensional",
    explanation: "Grid lays out rows and columns together (two dimensions). Flexbox distributes items along one axis and lets content drive size. Use grid for page or card layouts, flex for components."
  },
  {
    id: "css-056",
    question: "What is the `fr` unit?",
    theme: "CSS",
    subCategory: "Grid",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Frame rate",
      "A fraction of the remaining free space in the grid container",
      "Font-relative unit",
      "Fixed ratio"
    ],
    correctAnswer: "A fraction of the remaining free space in the grid container",
    explanation: "`fr` takes a fraction of the space left after fixed and content-sized tracks are placed: `1fr 2fr` splits the rest 1:2. Unlike `%`, it accounts for gaps."
  },
  {
    id: "css-057",
    question: "Difference between `auto-fill` and `auto-fit` in `repeat()`?",
    theme: "CSS",
    subCategory: "Grid",
    level: "medium",
    fourOptionsForAnAnswer: [
      "auto-fill collapses empty tracks",
      "auto-fit collapses empty tracks so items stretch; auto-fill keeps empty tracks",
      "auto-fit only works with fixed sizes",
      "None"
    ],
    correctAnswer: "auto-fit collapses empty tracks so items stretch; auto-fill keeps empty tracks",
    explanation: "Both create as many tracks as fit. `auto-fill` keeps empty tracks; `auto-fit` collapses them to zero, so with `minmax(200px, 1fr)` the existing items stretch to fill the row."
  },
  {
    id: "css-058",
    question: "Which property sizes rows created implicitly?",
    theme: "CSS",
    subCategory: "Grid",
    level: "medium",
    fourOptionsForAnAnswer: [
      "grid-template-rows",
      "row-gap",
      "grid-row",
      "grid-auto-rows"
    ],
    correctAnswer: "grid-auto-rows",
    explanation: "Rows the grid creates for extra items (the implicit grid) are sized by `grid-auto-rows`. `grid-template-rows` only defines explicit ones."
  },
  {
    id: "css-059",
    question: "What does `grid-auto-flow: dense` do?",
    theme: "CSS",
    subCategory: "Grid",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Makes the grid smaller",
      "Back-fills holes in the grid with later items that fit",
      "Removes implicit tracks",
      "Reduces gaps"
    ],
    correctAnswer: "Back-fills holes in the grid with later items that fit",
    explanation: "`dense` lets auto-placement go back and fill earlier holes with later, smaller items. That can change visual order relative to the DOM."
  },
  {
    id: "css-060",
    question: "What problem does `subgrid` solve?",
    theme: "CSS",
    subCategory: "Grid",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Masonry layout",
      "Nested grids being slow",
      "Grid in old browsers",
      "Letting nested elements align to the parent grid's tracks"
    ],
    correctAnswer: "Letting nested elements align to the parent grid's tracks",
    explanation: "`grid-template-columns: subgrid` makes a nested grid reuse its parent's tracks, so for example titles and buttons inside separate cards line up across the row."
  },
  {
    id: "css-061",
    question: "`place-items` is shorthand for:",
    theme: "CSS",
    subCategory: "Grid",
    level: "medium",
    fourOptionsForAnAnswer: [
      "grid-row + grid-column",
      "justify-content + align-content",
      "align-items + justify-items",
      "align-self + justify-self"
    ],
    correctAnswer: "align-items + justify-items",
    explanation: "`place-items: center` sets `align-items` and `justify-items` together. In grid, that centers every item within its cell."
  },
  {
    id: "css-062",
    question: "Mobile-first CSS typically uses which media queries?",
    theme: "CSS",
    subCategory: "Responsive design",
    level: "easy",
    fourOptionsForAnAnswer: [
      "device-width",
      "max-width",
      "orientation",
      "min-width"
    ],
    correctAnswer: "min-width",
    explanation: "Mobile-first means base styles target small screens, and `min-width` queries layer on enhancements as the screen grows."
  },
  {
    id: "css-063",
    question: "How do container queries differ from media queries?",
    theme: "CSS",
    subCategory: "Responsive design",
    level: "medium",
    fourOptionsForAnAnswer: [
      "They respond to a container's size instead of the viewport's",
      "They only work in grid",
      "They respond to device type",
      "They're the same"
    ],
    correctAnswer: "They respond to a container's size instead of the viewport's",
    explanation: "Container queries let a component respond to the size of its container, so the same card can adapt in a sidebar and in main content."
  },
  {
    id: "css-064",
    question: "What must you set on the parent to use size container queries?",
    theme: "CSS",
    subCategory: "Responsive design",
    level: "medium",
    fourOptionsForAnAnswer: [
      "display: container",
      "contain: strict",
      "container-type: inline-size (or size)",
      "position: relative"
    ],
    correctAnswer: "container-type: inline-size (or size)",
    explanation: "An ancestor needs `container-type: inline-size` (or `size`) to be queryable. Optionally name it with `container-name`."
  },
  {
    id: "css-065",
    question: "What is `1cqi`?",
    theme: "CSS",
    subCategory: "Responsive design",
    level: "medium",
    fourOptionsForAnAnswer: [
      "1% of the viewport",
      "1% of the content",
      "1% of the query container's inline size",
      "1 character unit"
    ],
    correctAnswer: "1% of the query container's inline size",
    explanation: "Container query units like `cqi`, `cqw`, and `cqh` are 1% of the query container's inline size, width, or height, which is great for fluid type inside components."
  },
  {
    id: "css-066",
    question: "What does `clamp(1rem, 2.5vw, 2rem)` mean?",
    theme: "CSS",
    subCategory: "Responsive design",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Always 2rem",
      "The average of the three",
      "Preferred 2.5vw, never smaller than 1rem or larger than 2rem",
      "Random value"
    ],
    correctAnswer: "Preferred 2.5vw, never smaller than 1rem or larger than 2rem",
    explanation: "`clamp(min, preferred, max)` uses the preferred value but keeps it within the bounds. It's the standard way to write fluid typography."
  },
  {
    id: "css-067",
    question: "What does `@media (hover: none)` usually target?",
    theme: "CSS",
    subCategory: "Responsive design",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Primarily touch devices without hover capability",
      "Disabled elements",
      "Screen readers",
      "Printers"
    ],
    correctAnswer: "Primarily touch devices without hover capability",
    explanation: "`hover: none` matches devices whose primary input can't hover, mostly touchscreens. Use it to avoid hover-only interactions there."
  },
  {
    id: "css-068",
    question: "What is required for `env(safe-area-inset-*)` to return non-zero values?",
    theme: "CSS",
    subCategory: "Responsive design",
    level: "medium",
    fourOptionsForAnAnswer: [
      "HTTPS",
      "position: fixed",
      "viewport-fit=cover in the viewport meta tag",
      "@supports"
    ],
    correctAnswer: "viewport-fit=cover in the viewport meta tag",
    explanation: "Insets are only non-zero when the page extends under the notch and home indicator, which requires `viewport-fit=cover` in the viewport meta tag."
  },
  {
    id: "css-069",
    question: "What does `object-fit: cover` do?",
    theme: "CSS",
    subCategory: "Visual effects",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Fills the box while keeping aspect ratio, cropping overflow",
      "Tiles the image",
      "Stretches the image",
      "Shows the whole image with letterboxing"
    ],
    correctAnswer: "Fills the box while keeping aspect ratio, cropping overflow",
    explanation: "`object-fit: cover` scales an image or video to fill its box while keeping its aspect ratio, cropping the overflow. `object-position` controls which part stays visible."
  },
  {
    id: "css-070",
    question: "Why prefer unitless `line-height` (e.g. 1.5)?",
    theme: "CSS",
    subCategory: "Typography",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Better browser support",
      "It's faster",
      "Units are deprecated",
      "Children inherit the ratio and recompute it for their own font size"
    ],
    correctAnswer: "Children inherit the ratio and recompute it for their own font size",
    explanation: "A unitless `line-height` is inherited as a ratio and recalculated for each element's font size. With `em` or `px`, children inherit a fixed computed length that may be too tight."
  },
  {
    id: "css-071",
    question: "What does `font-display: swap` do?",
    theme: "CSS",
    subCategory: "Typography",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Shows fallback text immediately, then swaps when the web font loads (FOUT)",
      "Never uses the web font",
      "Preloads the font",
      "Hides text until the font loads"
    ],
    correctAnswer: "Shows fallback text immediately, then swaps when the web font loads (FOUT)",
    explanation: "`swap` renders text right away with a fallback font and swaps in the web font when it loads (a flash of unstyled text, FOUT), instead of keeping text invisible (FOIT)."
  },
  {
    id: "css-072",
    question: "Which three declarations create a single-line ellipsis?",
    theme: "CSS",
    subCategory: "Typography",
    level: "medium",
    fourOptionsForAnAnswer: [
      "overflow: hidden; white-space: nowrap; text-overflow: ellipsis",
      "line-clamp: 1 only",
      "overflow: scroll; text-wrap: none; ellipsis: true",
      "text-overflow: ellipsis; display: block; width: 100%"
    ],
    correctAnswer: "overflow: hidden; white-space: nowrap; text-overflow: ellipsis",
    explanation: "You need `overflow: hidden` to clip, `white-space: nowrap` to keep one line, and `text-overflow: ellipsis` to draw the '…'. For multiple lines, use `line-clamp`."
  },
  {
    id: "css-073",
    question: "What does `text-wrap: balance` do?",
    theme: "CSS",
    subCategory: "Typography",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Balances line lengths, useful for headings",
      "Justifies text",
      "Hyphenates words",
      "Prevents wrapping"
    ],
    correctAnswer: "Balances line lengths, useful for headings",
    explanation: "`text-wrap: balance` evens out line lengths in short blocks like headings, avoiding a lone word on the last line. `pretty` targets paragraphs."
  },
  {
    id: "css-074",
    question: "What is `unicode-range` in `@font-face` for?",
    theme: "CSS",
    subCategory: "Typography",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Setting text direction",
      "Restricting text input",
      "Downloading the font only if characters in that range are used on the page",
      "Defining emoji"
    ],
    correctAnswer: "Downloading the font only if characters in that range are used on the page",
    explanation: "`unicode-range` tells the browser which characters a font file covers. The file is downloaded only if the page uses those characters, which makes subsetting by script cheap."
  },
  {
    id: "css-075",
    question: "What are variable fonts?",
    theme: "CSS",
    subCategory: "Typography",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Fonts set via custom properties",
      "System fonts",
      "A single font file with continuous axes such as weight and width",
      "Fonts loaded with JS"
    ],
    correctAnswer: "A single font file with continuous axes such as weight and width",
    explanation: "A variable font contains continuous design axes (weight, width, slant, optical size) in one file, replacing many static font files and allowing any weight like `font-weight: 550`."
  },
  {
    id: "css-076",
    question: "Difference between `background-size: cover` and `contain`?",
    theme: "CSS",
    subCategory: "Visual effects",
    level: "easy",
    fourOptionsForAnAnswer: [
      "cover tiles",
      "None",
      "contain crops",
      "cover fills the box, possibly cropping; contain fits the whole image, possibly leaving gaps"
    ],
    correctAnswer: "cover fills the box, possibly cropping; contain fits the whole image, possibly leaving gaps",
    explanation: "`cover` scales the image until it covers the whole box, cropping overflow. `contain` scales it until the whole image fits, possibly leaving empty areas."
  },
  {
    id: "css-077",
    question: "Difference between `box-shadow` and `filter: drop-shadow()`?",
    theme: "CSS",
    subCategory: "Visual effects",
    level: "medium",
    fourOptionsForAnAnswer: [
      "drop-shadow can be inset",
      "box-shadow follows transparency",
      "drop-shadow follows the actual alpha shape (e.g. transparent PNG); box-shadow follows the box",
      "None"
    ],
    correctAnswer: "drop-shadow follows the actual alpha shape (e.g. transparent PNG); box-shadow follows the box",
    explanation: "`box-shadow` follows the element's box, including `border-radius`. `drop-shadow()` follows the rendered alpha shape, so it wraps around transparent PNGs and SVG icons."
  },
  {
    id: "css-078",
    question: "What does `backdrop-filter: blur()` blur?",
    theme: "CSS",
    subCategory: "Visual effects",
    level: "medium",
    fourOptionsForAnAnswer: [
      "The element's children",
      "The page background only",
      "What is behind the element",
      "The element itself"
    ],
    correctAnswer: "What is behind the element",
    explanation: "`backdrop-filter` applies effects to whatever is behind the element (the 'frosted glass' look). The element needs a partly transparent background to show it."
  },
  {
    id: "css-079",
    question: "What does `accent-color` change?",
    theme: "CSS",
    subCategory: "Visual effects",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Focus outline",
      "Text selection color",
      "The tint of native controls like checkboxes, radios, and range inputs",
      "Link colors"
    ],
    correctAnswer: "The tint of native controls like checkboxes, radios, and range inputs",
    explanation: "`accent-color` tints native checkboxes, radio buttons, range sliders, and progress bars with your brand color, without rebuilding the controls."
  },
  {
    id: "css-080",
    question: "Main difference between transitions and animations?",
    theme: "CSS",
    subCategory: "Transitions & animations",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Transitions can loop",
      "Animations need a state change",
      "Transitions need a state change; keyframe animations can run on their own and loop",
      "None"
    ],
    correctAnswer: "Transitions need a state change; keyframe animations can run on their own and loop",
    explanation: "A transition animates between two states when a property value changes. `@keyframes` animations define multiple steps and can run on load, loop, or alternate without any state change."
  },
  {
    id: "css-081",
    question: "What does `@starting-style` define?",
    theme: "CSS",
    subCategory: "Transitions & animations",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Default theme",
      "Initial custom properties",
      "Reset styles",
      "Starting values for the first style update, enabling entry transitions (e.g. from display: none)"
    ],
    correctAnswer: "Starting values for the first style update, enabling entry transitions (e.g. from display: none)",
    explanation: "Elements going from `display: none` (or newly inserted) have no 'before' style to transition from. `@starting-style` provides those starting values so entry transitions work."
  },
  {
    id: "css-082",
    question: "What does `transition-behavior: allow-discrete` enable?",
    theme: "CSS",
    subCategory: "Transitions & animations",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Step easing",
      "Transitioning discrete properties like display and overlay",
      "Faster transitions",
      "Disabling transitions"
    ],
    correctAnswer: "Transitioning discrete properties like display and overlay",
    explanation: "Discrete properties like `display` normally flip instantly. `allow-discrete` lets them take part in transitions, for example keeping `display: block` until a fade-out finishes."
  },
  {
    id: "css-083",
    question: "Which declaration enables animating to `height: auto`?",
    theme: "CSS",
    subCategory: "Transitions & animations",
    level: "hard",
    fourOptionsForAnAnswer: [
      "will-change: height",
      "transition: all",
      "interpolate-size: allow-keywords",
      "height: animate"
    ],
    correctAnswer: "interpolate-size: allow-keywords",
    explanation: "`interpolate-size: allow-keywords` (usually on `:root`) lets browsers transition between lengths and keywords like `auto`, `min-content`, or `fit-content`."
  },
  {
    id: "css-084",
    question: "Which properties are cheapest to animate?",
    theme: "CSS",
    subCategory: "Transitions & animations",
    level: "medium",
    fourOptionsForAnAnswer: [
      "width and height",
      "top and left",
      "transform and opacity",
      "margin and padding"
    ],
    correctAnswer: "transform and opacity",
    explanation: "`transform` and `opacity` can be handled by the compositor without layout or paint, so they stay smooth even when the main thread is busy."
  },
  {
    id: "css-085",
    question: "What does `animation-fill-mode: forwards` do?",
    theme: "CSS",
    subCategory: "Transitions & animations",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Repeats the animation",
      "Keeps the styles of the last keyframe after the animation ends",
      "Starts from the end",
      "Plays forwards only"
    ],
    correctAnswer: "Keeps the styles of the last keyframe after the animation ends",
    explanation: "By default, an element snaps back to its original styles when an animation ends. `forwards` keeps the final keyframe's values applied."
  },
  {
    id: "css-086",
    question: "What does the `steps()` timing function produce?",
    theme: "CSS",
    subCategory: "Transitions & animations",
    level: "medium",
    fourOptionsForAnAnswer: [
      "A bounce",
      "Linear motion",
      "Discrete jumps between frames",
      "Smooth easing"
    ],
    correctAnswer: "Discrete jumps between frames",
    explanation: "`steps(n)` jumps between `n` discrete states instead of interpolating smoothly. It's used for sprite animations and typewriter effects."
  },
  {
    id: "css-087",
    question: "What does `animation-timeline: view()` do?",
    theme: "CSS",
    subCategory: "Transitions & animations",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Ties animation to time",
      "Ties animation progress to an element's visibility within its scrollport",
      "Syncs with video",
      "Runs on page load"
    ],
    correctAnswer: "Ties animation progress to an element's visibility within its scrollport",
    explanation: "With `view()`, animation progress follows the element's journey through the scrollport (entering, crossing, exiting). It's a CSS-only scroll-reveal effect."
  },
  {
    id: "css-088",
    question: "Why shouldn't `will-change` be overused?",
    theme: "CSS",
    subCategory: "Transitions & animations",
    level: "medium",
    fourOptionsForAnAnswer: [
      "It's deprecated",
      "It breaks z-index",
      "Each hint can create layers that consume memory and can hurt performance",
      "It disables animations"
    ],
    correctAnswer: "Each hint can create layers that consume memory and can hurt performance",
    explanation: "`will-change` makes browsers prepare in advance, often by creating compositor layers that cost GPU memory. Apply it shortly before an animation and only to elements that need it."
  },
  {
    id: "css-089",
    question: "How should you respect users who dislike motion?",
    theme: "CSS",
    subCategory: "Accessibility (a11y)",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Use slower animations",
      "Use opacity only",
      "Add a JS toggle only",
      "Reduce or remove animation inside @media (prefers-reduced-motion: reduce)"
    ],
    correctAnswer: "Reduce or remove animation inside @media (prefers-reduced-motion: reduce)",
    explanation: "Users can ask their OS to reduce motion. Honor it with `@media (prefers-reduced-motion: reduce)` by removing or toning down animations, especially large movement and parallax."
  },
  {
    id: "css-090",
    question: "What does `:has()` let you do?",
    theme: "CSS",
    subCategory: "Selectors",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Select by attribute",
      "Select an element based on its descendants or following siblings (a 'parent selector')",
      "Detect browser support",
      "Check if a property is set"
    ],
    correctAnswer: "Select an element based on its descendants or following siblings (a 'parent selector')",
    explanation: "`:has()` matches an element when its argument matches relative to it, such as `.card:has(img)` or `label:has(+ input:invalid)`. That makes it a parent and previous-sibling selector."
  },
  {
    id: "css-091",
    question: "Key difference between CSS custom properties and Sass variables?",
    theme: "CSS",
    subCategory: "Custom properties & theming",
    level: "medium",
    fourOptionsForAnAnswer: [
      "None",
      "Custom properties are live at runtime and participate in the cascade and inheritance",
      "Custom properties compile away",
      "Sass variables are runtime"
    ],
    correctAnswer: "Custom properties are live at runtime and participate in the cascade and inheritance",
    explanation: "Sass variables are replaced at compile time. Custom properties exist at runtime: they cascade and inherit, can change in media queries or on `:hover`, and can be set from JavaScript."
  },
  {
    id: "css-092",
    question: "Why use `@property` to register a custom property?",
    theme: "CSS",
    subCategory: "Custom properties & theming",
    level: "hard",
    fourOptionsForAnAnswer: [
      "To make it faster",
      "To use it in JS",
      "To give it a type, initial value, and inheritance so it can be animated",
      "To make it global"
    ],
    correctAnswer: "To give it a type, initial value, and inheritance so it can be animated",
    explanation: "Unregistered custom properties are just strings, so they can't be interpolated. `@property` gives them a `syntax` (like `<color>`), an initial value, and inheritance, making them animatable."
  },
  {
    id: "css-093",
    question: "What does `light-dark(white, black)` require to work?",
    theme: "CSS",
    subCategory: "Custom properties & theming",
    level: "medium",
    fourOptionsForAnAnswer: [
      "color-scheme set to include light and dark",
      "A media query",
      "JavaScript",
      "@property"
    ],
    correctAnswer: "color-scheme set to include light and dark",
    explanation: "`light-dark()` picks its first value in light mode and its second in dark mode, but only when `color-scheme: light dark` is set on the element or an ancestor."
  },
  {
    id: "css-094",
    question: "What does `@supports` do?",
    theme: "CSS",
    subCategory: "Architecture & methodology",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Checks browser version",
      "Applies styles only if the browser supports a given property, value, or selector",
      "Polyfills features",
      "Loads fallbacks"
    ],
    correctAnswer: "Applies styles only if the browser supports a given property, value, or selector",
    explanation: "`@supports (display: grid)` or `@supports selector(:has(a))` applies the rules only if the browser understands them. It's the core tool for progressive enhancement."
  },
  {
    id: "css-095",
    question: "What is `:focus-visible` for?",
    theme: "CSS",
    subCategory: "Accessibility (a11y)",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Hiding focus",
      "Styling hovered elements",
      "Styling all focused elements",
      "Showing focus styles only when the browser decides they're needed, e.g. keyboard navigation"
    ],
    correctAnswer: "Showing focus styles only when the browser decides they're needed, e.g. keyboard navigation",
    explanation: "`:focus-visible` shows focus rings when they help, such as keyboard navigation, but usually not on mouse clicks. Designers get clean UIs without hurting keyboard users."
  },
  {
    id: "css-096",
    question: "Correct order of the rendering pipeline?",
    theme: "CSS",
    subCategory: "Rendering & performance",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Paint, layout, style, composite",
      "Composite, paint, layout, style",
      "Style, layout, paint, composite",
      "Layout, style, composite, paint"
    ],
    correctAnswer: "Style, layout, paint, composite",
    explanation: "The browser computes styles, then layout (geometry), then paint (pixels into layers), then compositing (combining layers on the GPU). Changing geometry triggers every step after layout."
  },
  {
    id: "css-097",
    question: "What is layout thrashing?",
    theme: "CSS",
    subCategory: "Rendering & performance",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Animations on scroll",
      "Interleaving DOM reads and writes, forcing repeated synchronous layouts",
      "Too many CSS files",
      "Fonts swapping"
    ],
    correctAnswer: "Interleaving DOM reads and writes, forcing repeated synchronous layouts",
    explanation: "Reading a layout property (like `offsetHeight`) right after a style write forces a synchronous layout. Doing this in a loop recalculates layout many times. Batch all reads, then all writes."
  },
  {
    id: "css-098",
    question: "What does `content-visibility: auto` do, and what pairs with it?",
    theme: "CSS",
    subCategory: "Rendering & performance",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Defers CSS; pairs with media",
      "Lazy loads images; pairs with loading",
      "Hides content; pairs with display",
      "Skips rendering of off-screen content; pairs with contain-intrinsic-size"
    ],
    correctAnswer: "Skips rendering of off-screen content; pairs with contain-intrinsic-size",
    explanation: "`content-visibility: auto` skips layout and paint for off-screen sections until they approach the viewport. `contain-intrinsic-size` gives them a placeholder size so the scrollbar doesn't jump."
  },
  {
    id: "css-099",
    question: "What does `contain: paint` guarantee?",
    theme: "CSS",
    subCategory: "Rendering & performance",
    level: "hard",
    fourOptionsForAnAnswer: [
      "GPU rendering",
      "Faster fonts",
      "Nothing is painted",
      "Descendants aren't painted outside its bounds; it also creates a stacking context and containing block"
    ],
    correctAnswer: "Descendants aren't painted outside its bounds; it also creates a stacking context and containing block",
    explanation: "With `contain: paint`, nothing inside paints outside the element's box, so the browser can skip painting it when it's off-screen. It also becomes a containing block and stacking context."
  },
  {
    id: "css-100",
    question: "In which direction do browsers match selectors?",
    theme: "CSS",
    subCategory: "Rendering & performance",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Top-down DOM order",
      "Random",
      "Right to left, starting from the key selector",
      "Left to right"
    ],
    correctAnswer: "Right to left, starting from the key selector",
    explanation: "Browsers start from the rightmost (key) selector and walk up the tree. In `.nav a`, every `a` is checked for a `.nav` ancestor."
  },
  {
    id: "css-101",
    question: "Is CSS in `<head>` render-blocking?",
    theme: "CSS",
    subCategory: "Rendering & performance",
    level: "medium",
    fourOptionsForAnAnswer: [
      "No",
      "Only with @import",
      "Only on mobile",
      "Yes, by default"
    ],
    correctAnswer: "Yes, by default",
    explanation: "Browsers won't render until stylesheets in `<head>` load, to avoid a flash of unstyled content. Inline critical CSS and load the rest with lower priority to render sooner."
  },
  {
    id: "css-102",
    question: "What does BEM stand for?",
    theme: "CSS",
    subCategory: "Architecture & methodology",
    level: "easy",
    fourOptionsForAnAnswer: [
      "Basic Element Model",
      "Box, Edge, Margin",
      "Block, Element, Modifier",
      "Browser Engine Markup"
    ],
    correctAnswer: "Block, Element, Modifier",
    explanation: "BEM (Block, Element, Modifier) names classes as `block__element--modifier`. It keeps specificity flat and makes relationships clear from the HTML alone."
  },
  {
    id: "css-103",
    question: "Which class name follows BEM?",
    theme: "CSS",
    subCategory: "Architecture & methodology",
    level: "easy",
    fourOptionsForAnAnswer: [
      ".card-title-large",
      ".cardTitleLarge",
      ".card__title--large",
      ".card .title.large"
    ],
    correctAnswer: ".card__title--large",
    explanation: "`.card__title--large` is block `card`, element `title`, modifier `large`. Double underscores separate elements and double hyphens separate modifiers."
  },
  {
    id: "css-104",
    question: "How do CSS Modules avoid name collisions?",
    theme: "CSS",
    subCategory: "Architecture & methodology",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Inline styles",
      "Locally scoped class names generated at build time",
      "Using ids",
      "Shadow DOM"
    ],
    correctAnswer: "Locally scoped class names generated at build time",
    explanation: "CSS Modules rewrite class names into unique hashed names at build time and export a mapping object, so `.title` in two files never collides."
  },
  {
    id: "css-105",
    question: "Why are runtime CSS-in-JS libraries problematic with React Server Components?",
    theme: "CSS",
    subCategory: "Architecture & methodology",
    level: "hard",
    fourOptionsForAnAnswer: [
      "They break hydration in all cases",
      "They rely on client-side runtime and context, which server components don't have",
      "They don't support TypeScript",
      "They're too large"
    ],
    correctAnswer: "They rely on client-side runtime and context, which server components don't have",
    explanation: "Libraries like styled-components inject styles at runtime through React context and client-side code, which Server Components can't run. That pushed teams toward zero-runtime options."
  },
  {
    id: "css-106",
    question: "How do you style an element inside a shadow root from outside?",
    theme: "CSS",
    subCategory: "Shadow DOM styling",
    level: "hard",
    fourOptionsForAnAnswer: [
      "::part() on elements exposed with the part attribute",
      "!important",
      "It's impossible",
      "Deep selectors (>>>)"
    ],
    correctAnswer: "::part() on elements exposed with the part attribute",
    explanation: "A component exposes internals with `part=\"label\"`, and outside CSS targets them with `my-el::part(label)`. Custom properties also pass through the shadow boundary."
  },
  {
    id: "css-107",
    question: "What does `::slotted()` select?",
    theme: "CSS",
    subCategory: "Shadow DOM styling",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Top-level light-DOM nodes assigned to a slot",
      "Empty slots",
      "The host element",
      "All shadow DOM elements"
    ],
    correctAnswer: "Top-level light-DOM nodes assigned to a slot",
    explanation: "Inside a shadow root, `::slotted(selector)` styles light-DOM elements assigned to a `<slot>`, but only the top-level slotted nodes, not their descendants."
  },
  {
    id: "css-108",
    question: "Do inherited properties and custom properties cross the shadow DOM boundary?",
    theme: "CSS",
    subCategory: "Shadow DOM styling",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Yes",
      "No",
      "Only custom properties",
      "Only with mode: open"
    ],
    correctAnswer: "Yes",
    explanation: "Shadow DOM blocks outside selectors, but inheritance still flows through, so `color`, `font`, and custom properties reach shadow content. That's how theming components works."
  },
  {
    id: "css-109",
    question: "Minimum WCAG AA contrast ratio for normal body text?",
    theme: "CSS",
    subCategory: "Accessibility (a11y)",
    level: "medium",
    fourOptionsForAnAnswer: [
      "4.5:1",
      "3:1",
      "7:1",
      "2:1"
    ],
    correctAnswer: "4.5:1",
    explanation: "WCAG AA requires 4.5:1 for normal text and 3:1 for large text (about 24px, or 18.66px bold) and for UI component boundaries."
  },
  {
    id: "css-110",
    question: "Why is `outline: none` on `:focus` without a replacement harmful?",
    theme: "CSS",
    subCategory: "Accessibility (a11y)",
    level: "medium",
    fourOptionsForAnAnswer: [
      "It's invalid CSS",
      "It breaks hover",
      "It slows rendering",
      "Keyboard users lose track of where focus is"
    ],
    correctAnswer: "Keyboard users lose track of where focus is",
    explanation: "Keyboard users rely on the focus indicator to know where they are. Removing it fails WCAG 2.4.7. Restyle it, preferably with `:focus-visible`."
  },
  {
    id: "css-111",
    question: "Which media feature detects Windows High Contrast mode?",
    theme: "CSS",
    subCategory: "Accessibility (a11y)",
    level: "medium",
    fourOptionsForAnAnswer: [
      "inverted-colors",
      "forced-colors",
      "prefers-contrast",
      "high-contrast"
    ],
    correctAnswer: "forced-colors",
    explanation: "`@media (forced-colors: active)` detects modes where the OS forces a limited palette (Windows Contrast Themes). Use system colors like `CanvasText` there."
  },
  {
    id: "css-112",
    question: "Why use `rem` for font sizes?",
    theme: "CSS",
    subCategory: "Accessibility (a11y)",
    level: "medium",
    fourOptionsForAnAnswer: [
      "It respects the user's browser font size setting",
      "It's required by WCAG",
      "Better performance",
      "It avoids rounding"
    ],
    correctAnswer: "It respects the user's browser font size setting",
    explanation: "Users can change the default font size in browser settings. Sizes in `rem` scale with that setting; sizes in `px` ignore it."
  },
  {
    id: "css-113",
    question: "What does the new `reading-flow` property address?",
    theme: "CSS",
    subCategory: "Accessibility (a11y)",
    level: "hard",
    fourOptionsForAnAnswer: [
      "Making reading and tab order follow the visual order of flex/grid layouts",
      "Text direction",
      "Scroll snapping",
      "Line height"
    ],
    correctAnswer: "Making reading and tab order follow the visual order of flex/grid layouts",
    explanation: "`reading-flow` (for example `grid-rows`) makes focus and reading order follow the visual layout of flex or grid items instead of DOM order."
  },
  {
    id: "css-114",
    question: "What color is the text?\n\n#nav .item { color: red; }\n.nav li.item.active { color: blue; }\n\n<ul id=\"nav\" class=\"nav\"><li class=\"item active\">Link</li></ul>",
    theme: "CSS",
    subCategory: "Cascade & specificity",
    level: "easy",
    fourOptionsForAnAnswer: [
      "purple",
      "black",
      "blue",
      "red"
    ],
    correctAnswer: "red",
    explanation: "`#nav .item` has specificity (1,1,0) and `.nav li.item.active` has (0,3,1). Any id outweighs any number of classes, so red wins."
  },
  {
    id: "css-115",
    question: "What is the vertical distance between the boxes?\n\n.a { margin-bottom: 30px; }\n.b { margin-top: 20px; }\n(.a and .b are sibling blocks)",
    theme: "CSS",
    subCategory: "Box model",
    level: "easy",
    fourOptionsForAnAnswer: [
      "50px",
      "10px",
      "30px",
      "20px"
    ],
    correctAnswer: "30px",
    explanation: "The adjacent vertical margins collapse into one margin equal to the larger value, so 30px, not 50px."
  },
  {
    id: "css-116",
    question: "Why does the child's margin appear above the parent instead of inside it?\n\n.parent { background: tomato; }\n.child { margin-top: 40px; }",
    theme: "CSS",
    subCategory: "Box model",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Missing position: relative",
      "The parent is inline",
      "Browser bug",
      "The child's margin collapses through the parent (no padding, border, or BFC)"
    ],
    correctAnswer: "The child's margin collapses through the parent (no padding, border, or BFC)",
    explanation: "With no padding, border, or BFC separating them, the child's top margin collapses through the parent and pushes the parent down instead."
  },
  {
    id: "css-117",
    question: "How wide is .box on screen (content-box default)?\n\n.box { width: 200px; padding: 20px; border: 5px solid; }",
    theme: "CSS",
    subCategory: "Box model",
    level: "easy",
    fourOptionsForAnAnswer: [
      "200px",
      "210px",
      "250px",
      "240px"
    ],
    correctAnswer: "250px",
    explanation: "With `content-box`, total width is 200 + 2×20 padding + 2×5 border = 250px. With `border-box` it would be exactly 200px."
  },
  {
    id: "css-118",
    question: "What is the font size of .c? (html is 16px)\n\n.a { font-size: 1.5em; }\n.b { font-size: 1.5em; }\n.c { font-size: 1.5rem; }\n<div class=\"a\"><div class=\"b\"><div class=\"c\">Text</div></div></div>",
    theme: "CSS",
    subCategory: "Units & values",
    level: "medium",
    fourOptionsForAnAnswer: [
      "36px",
      "54px",
      "16px",
      "24px"
    ],
    correctAnswer: "24px",
    explanation: "`rem` ignores the nested `em` multiplication (16 → 24 → 36px) and uses the root size: 1.5 × 16px = 24px."
  },
  {
    id: "css-119",
    question: "Why doesn't the sidebar stick?\n\n.wrapper { overflow: hidden; }\n.sidebar { position: sticky; top: 0; }",
    theme: "CSS",
    subCategory: "Positioning",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Missing z-index",
      "top must be 1px",
      "Sticky needs fixed width",
      "overflow: hidden on the ancestor makes it the scroll container"
    ],
    correctAnswer: "overflow: hidden on the ancestor makes it the scroll container",
    explanation: "`overflow: hidden` on `.wrapper` makes it the sidebar's scroll container. The wrapper itself doesn't scroll, so the sidebar never sticks. Use `overflow: clip` or remove it."
  },
  {
    id: "css-120",
    question: "Container is 600px wide. What are the widths?\n\n.container { display: flex; }\n.a { flex: 1; } .b { flex: 2; } .c { flex: 0 0 150px; }",
    theme: "CSS",
    subCategory: "Flexbox",
    level: "medium",
    fourOptionsForAnAnswer: [
      "200 / 200 / 200",
      "100 / 200 / 300",
      "150 / 300 / 150",
      "200 / 400 / 150"
    ],
    correctAnswer: "150 / 300 / 150",
    explanation: "`.c` takes a fixed 150px, leaving 450px. `.a` and `.b` have a basis of 0 and grow 1:2, so they get 150px and 300px."
  },
  {
    id: "css-121",
    question: "What color is .btn?\n\n@layer base  { .btn { color: red !important; } }\n@layer theme { .btn { color: blue !important; } }\n.btn { color: green; }",
    theme: "CSS",
    subCategory: "Cascade & specificity",
    level: "hard",
    fourOptionsForAnAnswer: [
      "black",
      "red",
      "blue",
      "green"
    ],
    correctAnswer: "red",
    explanation: "Important declarations reverse layer order, so the earliest layer (`base`) wins: red. Important declarations also beat the normal unlayered green."
  },
  {
    id: "css-122",
    question: "Why doesn't the fade-in run?\n\n.box { display: none; opacity: 0; transition: opacity .3s; }\n.box.open { display: block; opacity: 1; }",
    theme: "CSS",
    subCategory: "Transitions & animations",
    level: "medium",
    fourOptionsForAnAnswer: [
      "opacity can't transition",
      "There is no starting style while it goes from display: none; you need @starting-style (and allow-discrete for display)",
      "Missing will-change",
      "Transition must be on .open"
    ],
    correctAnswer: "There is no starting style while it goes from display: none; you need @starting-style (and allow-discrete for display)",
    explanation: "When `display` changes from `none`, there's no previous rendered style to transition from, so it jumps. Add `@starting-style { .box.open { opacity: 0 } }` (and `transition-behavior: allow-discrete` for exit animations)."
  },
  {
    id: "css-123",
    question: "Specificity of `:is(#a, .b) p`?",
    theme: "CSS",
    subCategory: "Cascade & specificity",
    level: "medium",
    fourOptionsForAnAnswer: [
      "(1,0,1)",
      "(0,1,1)",
      "(1,1,1)",
      "(0,0,1)"
    ],
    correctAnswer: "(1,0,1)",
    explanation: "`:is()` takes its most specific argument (`#a`) = (1,0,0), plus `p` (0,0,1), giving (1,0,1)."
  },
  {
    id: "css-124",
    question: "Specificity of `:where(#a, .b) p`?",
    theme: "CSS",
    subCategory: "Cascade & specificity",
    level: "medium",
    fourOptionsForAnAnswer: [
      "(0,0,0)",
      "(0,0,1)",
      "(0,1,1)",
      "(1,0,1)"
    ],
    correctAnswer: "(0,0,1)",
    explanation: "`:where()` contributes nothing, so only `p` counts: (0,0,1)."
  },
  {
    id: "css-125",
    question: "Specificity of `div:not(.x, #y)`?",
    theme: "CSS",
    subCategory: "Cascade & specificity",
    level: "medium",
    fourOptionsForAnAnswer: [
      "(1,1,1)",
      "(1,0,1)",
      "(0,0,1)",
      "(0,1,1)"
    ],
    correctAnswer: "(1,0,1)",
    explanation: "`:not()` takes its most specific argument (`#y`) = (1,0,0), plus `div` = (0,0,1), giving (1,0,1)."
  },
  {
    id: "css-126",
    question: "What is the width of .box?\n\n:root { --size: 20px; }\n.box { --size: oops; width: var(--size, 100px); }",
    theme: "CSS",
    subCategory: "Custom properties & theming",
    level: "medium",
    fourOptionsForAnAnswer: [
      "100px (fallback)",
      "20px",
      "0",
      "auto, because the value is invalid at computed-value time and the fallback isn't used"
    ],
    correctAnswer: "auto, because the value is invalid at computed-value time and the fallback isn't used",
    explanation: "`--size: oops` is a valid custom property value, so the fallback isn't used. `width: oops` is invalid at computed-value time, so `width` falls back to its initial value, `auto`."
  },
  {
    id: "css-127",
    question: "What does this select?\n\nform:has(input:user-invalid) button { opacity: .5; }",
    theme: "CSS",
    subCategory: "Selectors",
    level: "medium",
    fourOptionsForAnAnswer: [
      "Buttons inside a form that contains an input the user has made invalid",
      "Every button",
      "Invalid buttons",
      "Buttons inside invalid inputs"
    ],
    correctAnswer: "Buttons inside a form that contains an input the user has made invalid",
    explanation: "The selector matches buttons inside any form that contains an input the user has made invalid, which disables the button visually without JavaScript."
  },
  {
    id: "css-128",
    question: "Why does the fixed modal render under the header?\n\n.header { position: relative; z-index: 10; }\n.page { transform: translateZ(0); }\n.page .modal { position: fixed; z-index: 9999; }",
    theme: "CSS",
    subCategory: "Stacking & z-index",
    level: "hard",
    fourOptionsForAnAnswer: [
      "9999 is too small",
      "transform on .page creates a stacking context (and containing block) that traps the modal below the header",
      "The header is fixed",
      "Fixed elements ignore z-index"
    ],
    correctAnswer: "transform on .page creates a stacking context (and containing block) that traps the modal below the header",
    explanation: "`transform` on `.page` creates a stacking context (with z-index 0 in the root context) and a containing block for fixed elements. The modal's 9999 only applies inside `.page`, which sits below the header's 10."
  }
];
