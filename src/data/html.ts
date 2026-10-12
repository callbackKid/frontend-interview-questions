import type { HtmlQuestion } from './types';

export const htmlQuestions: HtmlQuestion[] = [
  {
    "id": "html-001",
    "question": "What does `<!DOCTYPE html>` do?",
    "theme": "HTML",
    "subCategory": "Document basics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Makes the browser render in standards mode instead of quirks mode",
      "Is required for JavaScript to work",
      "Loads the HTML5 library",
      "Declares the character encoding"
    ],
    "correctAnswer": "Makes the browser render in standards mode instead of quirks mode",
    "explanation": "The doctype tells the browser to use standards mode. Without it, browsers fall back to quirks mode, which emulates old rendering bugs (for example a different box model for tables and images)."
  },
  {
    "id": "html-002",
    "question": "Where should `<meta charset=\"utf-8\">` be placed?",
    "theme": "HTML",
    "subCategory": "Head & metadata",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "In an HTTP-equiv tag only",
      "Early in <head>, within the first 1024 bytes",
      "At the end of <head>",
      "Anywhere in the body"
    ],
    "correctAnswer": "Early in <head>, within the first 1024 bytes",
    "explanation": "The encoding must be known before the parser reads any text, so the spec requires the charset declaration within the first 1024 bytes. Put it first in `<head>`, before `<title>`."
  },
  {
    "id": "html-003",
    "question": "What does `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">` do?",
    "theme": "HTML",
    "subCategory": "Head & metadata",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Disables zoom",
      "Enables dark mode",
      "Makes images responsive",
      "Sets the layout viewport to the device width on mobile"
    ],
    "correctAnswer": "Sets the layout viewport to the device width on mobile",
    "explanation": "Without it, mobile browsers render the page on a virtual desktop-width canvas (about 980px) and zoom out. `width=device-width` makes the layout viewport match the device, so media queries work as intended."
  },
  {
    "id": "html-004",
    "question": "Why set the `lang` attribute on `<html>`?",
    "theme": "HTML",
    "subCategory": "Internationalization",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Screen readers, translation tools, and hyphenation use it",
      "It is required for CSS to load",
      "It sets the text direction automatically",
      "It changes the default font"
    ],
    "correctAnswer": "Screen readers, translation tools, and hyphenation use it",
    "explanation": "`lang` tells screen readers which pronunciation rules to use, lets browsers offer correct translation, and drives language-aware features like CSS `hyphens` and quotation marks."
  },
  {
    "id": "html-005",
    "question": "Which of these is a void element (no closing tag)?",
    "theme": "HTML",
    "subCategory": "Document basics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "<img>",
      "<p>",
      "<span>",
      "<div>"
    ],
    "correctAnswer": "<img>",
    "explanation": "Void elements such as `<img>`, `<br>`, `<input>`, and `<meta>` can't have content, so they have no closing tag. A trailing slash (`<br/>`) is allowed but does nothing in HTML."
  },
  {
    "id": "html-006",
    "question": "Can the same `id` be used on several elements?",
    "theme": "HTML",
    "subCategory": "Document basics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Only on inline elements",
      "No, it must be unique in the document",
      "Yes, freely",
      "Yes, if they are in different sections"
    ],
    "correctAnswer": "No, it must be unique in the document",
    "explanation": "`id` must be unique in a document. Duplicates break `getElementById`, label `for` references, ARIA relationships, and fragment links, and they fail validation."
  },
  {
    "id": "html-007",
    "question": "How do you read a `data-*` attribute in JavaScript?",
    "theme": "HTML",
    "subCategory": "DOM & attributes",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "element.data",
      "element.attributes.data",
      "element.dataset",
      "element.getData()"
    ],
    "correctAnswer": "element.dataset",
    "explanation": "Every `data-*` attribute is exposed on `element.dataset` as a DOMStringMap, and writing to `dataset` updates the attribute too."
  },
  {
    "id": "html-008",
    "question": "`data-user-id` is available in JS as:",
    "theme": "HTML",
    "subCategory": "DOM & attributes",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "dataset.userId",
      "dataset.UserId",
      "dataset.user_id",
      "dataset['user-id']"
    ],
    "correctAnswer": "dataset.userId",
    "explanation": "The `data-` prefix is dropped and the rest is converted from kebab-case to camelCase, so `data-user-id` becomes `dataset.userId`."
  },
  {
    "id": "html-009",
    "question": "What is `&nbsp;`?",
    "theme": "HTML",
    "subCategory": "Document basics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "An empty element",
      "A non-breaking space",
      "A tab character",
      "A newline"
    ],
    "correctAnswer": "A non-breaking space",
    "explanation": "`&nbsp;` is a non-breaking space: it renders as a space but prevents a line break at that point, as in `10&nbsp;km`. It shouldn't be used for layout spacing."
  },
  {
    "id": "html-010",
    "question": "Are HTML tag names case-sensitive?",
    "theme": "HTML",
    "subCategory": "Document basics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Only for custom elements",
      "Only in <head>",
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "explanation": "HTML tag and attribute names are case-insensitive (`<DIV>` equals `<div>`), but lowercase is the convention. Attribute values can be case-sensitive, and SVG/XML contexts differ."
  },
  {
    "id": "html-011",
    "question": "What does `<noscript>` contain?",
    "theme": "HTML",
    "subCategory": "Document basics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Content shown when scripting is disabled",
      "Comments ignored by the browser",
      "Scripts that run before others",
      "Server-side code"
    ],
    "correctAnswer": "Content shown when scripting is disabled",
    "explanation": "Content inside `<noscript>` is used only when scripting is disabled or unsupported, for example a message or a fallback tracking pixel."
  },
  {
    "id": "html-012",
    "question": "What does the `<base>` element do?",
    "theme": "HTML",
    "subCategory": "Head & metadata",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Sets the base URL for all relative URLs in the document",
      "Defines the root element",
      "Loads base CSS",
      "Sets the base font size"
    ],
    "correctAnswer": "Sets the base URL for all relative URLs in the document",
    "explanation": "`<base href>` sets the base URL for every relative URL in the document, and `<base target>` sets a default link target. There can be only one, and it affects even `#anchor` links."
  },
  {
    "id": "html-013",
    "question": "How does a browser handle invalid or unclosed HTML?",
    "theme": "HTML",
    "subCategory": "Document basics",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "It stops parsing",
      "It recovers using the spec's error-handling rules and builds a DOM anyway",
      "It renders the raw source",
      "It shows an error page"
    ],
    "correctAnswer": "It recovers using the spec's error-handling rules and builds a DOM anyway",
    "explanation": "The HTML spec defines exact error recovery, so every browser builds the same DOM from broken markup: it auto-closes elements, moves misplaced nodes, and so on. The result may not be the structure you intended."
  },
  {
    "id": "html-014",
    "question": "What is the difference between an HTML attribute and a DOM property like `input.value`?",
    "theme": "HTML",
    "subCategory": "DOM & attributes",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "The attribute is the initial/default value; the property reflects the current state",
      "Properties are read-only",
      "Attributes update as the user types",
      "None"
    ],
    "correctAnswer": "The attribute is the initial/default value; the property reflects the current state",
    "explanation": "The `value` attribute is the initial value from the markup. The `value` property is the live state as the user types. Changing the property doesn't update the attribute (use `defaultValue` for that)."
  },
  {
    "id": "html-015",
    "question": "What's the difference between `<strong>` and `<b>`?",
    "theme": "HTML",
    "subCategory": "Semantics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "<strong> is only for headings",
      "<strong> marks importance; <b> is stylistic attention without extra importance",
      "<b> is deprecated",
      "None"
    ],
    "correctAnswer": "<strong> marks importance; <b> is stylistic attention without extra importance",
    "explanation": "`<strong>` marks content as important, serious, or urgent. `<b>` draws attention without adding importance, for example keywords or product names. Both render bold by default; the difference is meaning."
  },
  {
    "id": "html-016",
    "question": "What does `<em>` represent?",
    "theme": "HTML",
    "subCategory": "Semantics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "An email address",
      "Stress emphasis that changes the meaning of a sentence",
      "An embedded element",
      "Italic text"
    ],
    "correctAnswer": "Stress emphasis that changes the meaning of a sentence",
    "explanation": "`<em>` marks stress emphasis that changes the meaning of a sentence, the way you'd stress a word when speaking. Italic styling is just its default presentation."
  },
  {
    "id": "html-017",
    "question": "How many visible `<main>` elements should a page have?",
    "theme": "HTML",
    "subCategory": "Semantics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Zero; it's optional and deprecated",
      "Any number",
      "One per section",
      "One"
    ],
    "correctAnswer": "One",
    "explanation": "A document should have only one visible `<main>`. It marks the dominant content and maps to the `main` landmark. Others must be `hidden` (useful in SPAs)."
  },
  {
    "id": "html-018",
    "question": "What is `<nav>` meant for?",
    "theme": "HTML",
    "subCategory": "Semantics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Footer links only",
      "Every link on the page",
      "Breadcrumbs only",
      "Major blocks of navigation links"
    ],
    "correctAnswer": "Major blocks of navigation links",
    "explanation": "`<nav>` is for major navigation blocks such as the main menu, a table of contents, or pagination. Not every group of links needs it; a footer's legal links usually don't."
  },
  {
    "id": "html-019",
    "question": "When should you use `<article>` instead of `<section>`?",
    "theme": "HTML",
    "subCategory": "Semantics",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Always inside <main>",
      "When the content is long",
      "When the content is self-contained and could be distributed on its own",
      "When it has a heading"
    ],
    "correctAnswer": "When the content is self-contained and could be distributed on its own",
    "explanation": "`<article>` is self-contained content that makes sense on its own, like a post, a comment, or a product card. `<section>` is a thematic grouping inside something larger, normally with a heading."
  },
  {
    "id": "html-020",
    "question": "What is `<aside>` for?",
    "theme": "HTML",
    "subCategory": "Semantics",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Sidebars only",
      "Footnotes only",
      "Advertisements only",
      "Content tangentially related to the content around it"
    ],
    "correctAnswer": "Content tangentially related to the content around it",
    "explanation": "`<aside>` holds content tangentially related to its surroundings: sidebars, pull quotes, related links. It maps to the `complementary` landmark when top-level."
  },
  {
    "id": "html-021",
    "question": "What happened to the HTML5 'document outline algorithm' (nested sections resetting heading levels)?",
    "theme": "HTML",
    "subCategory": "Semantics",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "It is the standard way to structure headings",
      "It replaced heading levels",
      "It was never implemented by browsers or screen readers and was removed from the spec",
      "It only works with <article>"
    ],
    "correctAnswer": "It was never implemented by browsers or screen readers and was removed from the spec",
    "explanation": "The outline algorithm (where nested sections reset `<h1>` levels) was never implemented by browsers or assistive tech and was removed from the spec in 2022. Use `<h1>`–`<h6>` levels that reflect the real hierarchy."
  },
  {
    "id": "html-022",
    "question": "What is `<dl>` for?",
    "theme": "HTML",
    "subCategory": "Semantics",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Dialog layouts",
      "Dynamic lists",
      "Groups of names and values (terms and descriptions)",
      "Download links"
    ],
    "correctAnswer": "Groups of names and values (terms and descriptions)",
    "explanation": "A description list groups terms (`<dt>`) with descriptions (`<dd>`). It's good for glossaries, metadata, or key/value pairs like specs on a product page."
  },
  {
    "id": "html-023",
    "question": "Which element provides a caption for `<figure>`?",
    "theme": "HTML",
    "subCategory": "Semantics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "<legend>",
      "<figcaption>",
      "<label>",
      "<caption>"
    ],
    "correctAnswer": "<figcaption>",
    "explanation": "`<figcaption>` is the first or last child of `<figure>` and becomes its accessible name. `<caption>` is for tables and `<legend>` is for fieldsets."
  },
  {
    "id": "html-024",
    "question": "What do `<details>` and `<summary>` give you?",
    "theme": "HTML",
    "subCategory": "Semantics",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "A tooltip",
      "A modal",
      "A native disclosure widget that opens and closes without JavaScript",
      "A collapsible table"
    ],
    "correctAnswer": "A native disclosure widget that opens and closes without JavaScript",
    "explanation": "`<details>` with a `<summary>` is a native disclosure widget: keyboard-accessible, announced correctly by screen readers, and toggled without any JavaScript."
  },
  {
    "id": "html-025",
    "question": "What does the `name` attribute do on several `<details>` elements?",
    "theme": "HTML",
    "subCategory": "Semantics",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Submits them with a form",
      "Gives them an accessible name",
      "Nothing",
      "Groups them so only one can be open at a time (exclusive accordion)"
    ],
    "correctAnswer": "Groups them so only one can be open at a time (exclusive accordion)",
    "explanation": "`<details>` elements with the same `name` form an exclusive group: opening one closes the others, which gives you a native accordion."
  },
  {
    "id": "html-026",
    "question": "What does `dialog.showModal()` do that `dialog.show()` does not?",
    "theme": "HTML",
    "subCategory": "Dialogs & popovers",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Nothing; they are aliases",
      "Opens with animation",
      "Puts the dialog in the top layer, makes the rest of the page inert, enables Esc and ::backdrop",
      "Centers the dialog"
    ],
    "correctAnswer": "Puts the dialog in the top layer, makes the rest of the page inert, enables Esc and ::backdrop",
    "explanation": "`showModal()` puts the dialog in the top layer, makes the rest of the page inert, closes on Esc, and enables `::backdrop`. `show()` opens it as a non-modal dialog."
  },
  {
    "id": "html-027",
    "question": "What does `::backdrop` style?",
    "theme": "HTML",
    "subCategory": "Dialogs & popovers",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "The shadow of a button",
      "The dialog's border",
      "The background of the page",
      "The area behind a modal dialog, popover, or fullscreen element"
    ],
    "correctAnswer": "The area behind a modal dialog, popover, or fullscreen element",
    "explanation": "`::backdrop` is a box rendered just below a top-layer element (modal dialog, popover, fullscreen element). It's typically used to dim the page."
  },
  {
    "id": "html-028",
    "question": "What does the `popover` attribute provide?",
    "theme": "HTML",
    "subCategory": "Dialogs & popovers",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "A non-modal top-layer element with light dismiss, toggled without JavaScript",
      "A tooltip on hover only",
      "A modal dialog",
      "A browser notification"
    ],
    "correctAnswer": "A non-modal top-layer element with light dismiss, toggled without JavaScript",
    "explanation": "Any element with `popover` can be toggled by a button with `popovertarget`. It renders in the top layer, light-dismisses on outside click or Esc, and needs no JavaScript. Unlike `showModal()`, it doesn't make the page inert."
  },
  {
    "id": "html-029",
    "question": "How is the content of `<template>` treated?",
    "theme": "HTML",
    "subCategory": "Web Components",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Parsed but inert: not rendered, scripts don't run, images don't load until cloned",
      "Rendered after page load",
      "Ignored entirely",
      "Rendered but hidden"
    ],
    "correctAnswer": "Parsed but inert: not rendered, scripts don't run, images don't load until cloned",
    "explanation": "Template content lives in an inert DocumentFragment (`template.content`). Nothing renders, scripts don't run, and images don't load until you clone it into the document."
  },
  {
    "id": "html-030",
    "question": "When should you use `<button>` instead of `<a>`?",
    "theme": "HTML",
    "subCategory": "Semantics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "<button> for actions, <a> for navigation to a URL",
      "For anything clickable",
      "They are interchangeable",
      "<a> for actions, <button> for navigation"
    ],
    "correctAnswer": "<button> for actions, <a> for navigation to a URL",
    "explanation": "Links navigate to a URL; buttons perform actions. Using the right one gives the correct role, keyboard behavior (Enter vs Space), and expectations like open-in-new-tab."
  },
  {
    "id": "html-031",
    "question": "What is the default `type` of a `<button>` inside a `<form>`?",
    "theme": "HTML",
    "subCategory": "Semantics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "button",
      "none",
      "reset",
      "submit"
    ],
    "correctAnswer": "submit",
    "explanation": "A `<button>` inside a form defaults to `type=\"submit\"`. That's why buttons meant for JavaScript actions need `type=\"button\"` to avoid submitting the form by accident."
  },
  {
    "id": "html-032",
    "question": "Why is `<div onclick=\"...\">` a bad replacement for a button?",
    "theme": "HTML",
    "subCategory": "Accessibility (a11y)",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "It isn't focusable, has no role, and doesn't respond to Enter/Space by default",
      "It cannot be styled",
      "onclick doesn't work on divs",
      "It is slower"
    ],
    "correctAnswer": "It isn't focusable, has no role, and doesn't respond to Enter/Space by default",
    "explanation": "A `<div>` has no button role, isn't focusable, and doesn't react to Enter or Space. To fix it you'd need `role`, `tabindex`, and key handlers. A `<button>` gives you all of that for free."
  },
  {
    "id": "html-033",
    "question": "Do you still need `rel=\"noopener\"` with `target=\"_blank\"` in modern browsers?",
    "theme": "HTML",
    "subCategory": "Links & resource hints",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Only in Chrome",
      "Yes, always",
      "No, target=\"_blank\" implies noopener by default now",
      "Only for same-origin links"
    ],
    "correctAnswer": "No, target=\"_blank\" implies noopener by default now",
    "explanation": "Modern browsers treat `target=\"_blank\"` as `rel=\"noopener\"` by default, so the new page can't access `window.opener`. Adding it explicitly is still harmless for very old browsers."
  },
  {
    "id": "html-034",
    "question": "What does `rel=\"noreferrer\"` do?",
    "theme": "HTML",
    "subCategory": "Links & resource hints",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Opens in a new tab",
      "Hides the Referer header and also implies noopener",
      "Blocks the link",
      "Prevents indexing"
    ],
    "correctAnswer": "Hides the Referer header and also implies noopener",
    "explanation": "`noreferrer` stops the browser from sending the `Referer` header and also implies `noopener`. Use it when the destination shouldn't learn where the visitor came from."
  },
  {
    "id": "html-035",
    "question": "What does `<link rel=\"preconnect\">` do?",
    "theme": "HTML",
    "subCategory": "Links & resource hints",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Prerenders a page",
      "Prefetches images",
      "Sets up DNS, TCP, and TLS to an origin early",
      "Downloads a file"
    ],
    "correctAnswer": "Sets up DNS, TCP, and TLS to an origin early",
    "explanation": "`preconnect` performs the DNS lookup, TCP handshake, and TLS negotiation with an origin ahead of time, saving round trips when resources from that origin are requested later."
  },
  {
    "id": "html-036",
    "question": "What's the difference between `preload` and `prefetch`?",
    "theme": "HTML",
    "subCategory": "Links & resource hints",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "None",
      "prefetch is for current page, preload for the next",
      "preload only works for scripts",
      "preload: high priority for the current page; prefetch: low priority for future navigation"
    ],
    "correctAnswer": "preload: high priority for the current page; prefetch: low priority for future navigation",
    "explanation": "`preload` fetches a resource the current page will definitely need, with high priority. `prefetch` fetches something a future navigation might need, at low priority when the browser is idle."
  },
  {
    "id": "html-037",
    "question": "What does the `download` attribute on `<a>` do?",
    "theme": "HTML",
    "subCategory": "Links & resource hints",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Prefetches the link",
      "Shows a download icon",
      "Opens a new window",
      "Downloads the resource instead of navigating (for same-origin URLs)"
    ],
    "correctAnswer": "Downloads the resource instead of navigating (for same-origin URLs)",
    "explanation": "`download` tells the browser to save the linked resource instead of navigating to it, optionally with a suggested filename. It only works for same-origin, blob:, or data: URLs."
  },
  {
    "id": "html-038",
    "question": "What does `rel=\"canonical\"` tell search engines?",
    "theme": "HTML",
    "subCategory": "SEO & metadata",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "The page is the homepage",
      "Not to follow links",
      "The preferred URL among duplicate pages",
      "The page is secure"
    ],
    "correctAnswer": "The preferred URL among duplicate pages",
    "explanation": "`<link rel=\"canonical\">` names the preferred URL among pages with duplicate or similar content, for example with tracking parameters, so search engines consolidate ranking signals on it."
  },
  {
    "id": "html-039",
    "question": "Where does a GET form put its data?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "In the request body",
      "In headers",
      "In the URL query string",
      "In cookies"
    ],
    "correctAnswer": "In the URL query string",
    "explanation": "A GET form encodes fields as a query string in the URL, which makes results bookmarkable (good for search) but exposes data in history and logs and limits length."
  },
  {
    "id": "html-040",
    "question": "When must you use `enctype=\"multipart/form-data\"`?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "For JSON data",
      "For file uploads",
      "For password fields",
      "For GET forms"
    ],
    "correctAnswer": "For file uploads",
    "explanation": "Files can't be sent as `application/x-www-form-urlencoded`. `multipart/form-data` (with `method=\"post\"`) sends each field as a separate part, including binary file data."
  },
  {
    "id": "html-041",
    "question": "Which form field is submitted: `disabled` or `readonly`?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Both",
      "readonly is submitted, disabled is not",
      "Neither",
      "disabled is submitted, readonly is not"
    ],
    "correctAnswer": "readonly is submitted, disabled is not",
    "explanation": "`readonly` fields can't be edited but are still focusable and submitted. `disabled` fields are skipped entirely: not focusable, not validated, not submitted."
  },
  {
    "id": "html-042",
    "question": "What are the two ways to associate a `<label>` with an input?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Wrap the input in the label, or use for pointing at the input's id",
      "aria-label and title",
      "placeholder and name",
      "class and name"
    ],
    "correctAnswer": "Wrap the input in the label, or use for pointing at the input's id",
    "explanation": "You can wrap the control inside the `<label>`, or use `for` with the control's `id`. Either way, clicking the label focuses the control and the label becomes its accessible name."
  },
  {
    "id": "html-043",
    "question": "Why is `placeholder` not a substitute for `<label>`?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "It doesn't render on mobile",
      "It disappears when typing, often has low contrast, and isn't a reliable accessible name",
      "It is deprecated",
      "It cannot contain text"
    ],
    "correctAnswer": "It disappears when typing, often has low contrast, and isn't a reliable accessible name",
    "explanation": "Placeholder text disappears when you type, is usually low contrast, and isn't reliably used as an accessible name. Keep a visible `<label>` and use placeholders only for example input."
  },
  {
    "id": "html-044",
    "question": "What are `<fieldset>` and `<legend>` for?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Grouping related controls with a caption, e.g. a radio group",
      "Styling forms",
      "Hiding fields",
      "Validation"
    ],
    "correctAnswer": "Grouping related controls with a caption, e.g. a radio group",
    "explanation": "`<fieldset>` groups related controls and `<legend>` gives the group a caption that screen readers announce, essential for radio and checkbox groups."
  },
  {
    "id": "html-045",
    "question": "What does `inputmode` do?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Makes the input read-only",
      "Sets the input language",
      "Changes validation",
      "Hints which virtual keyboard to show, without changing the input type or validation"
    ],
    "correctAnswer": "Hints which virtual keyboard to show, without changing the input type or validation",
    "explanation": "`inputmode` (like `numeric`, `decimal`, `email`, `tel`) only changes which virtual keyboard appears. Unlike `type`, it doesn't add validation or change the value's behavior."
  },
  {
    "id": "html-046",
    "question": "What is `autocomplete=\"one-time-code\"` for?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Passwords",
      "Disabling autocomplete",
      "Credit cards",
      "Autofilling verification codes, e.g. from SMS"
    ],
    "correctAnswer": "Autofilling verification codes, e.g. from SMS",
    "explanation": "`one-time-code` lets browsers and OSes offer to autofill verification codes received by SMS or email, a big usability win for 2FA flows."
  },
  {
    "id": "html-047",
    "question": "What does `input.setCustomValidity('message')` do?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Validates the field once",
      "Shows an alert",
      "Clears validation",
      "Marks the field invalid with that message until reset to an empty string"
    ],
    "correctAnswer": "Marks the field invalid with that message until reset to an empty string",
    "explanation": "A non-empty message makes the field invalid and is shown by the browser's validation UI. You must reset it with `setCustomValidity('')` when the input becomes valid again."
  },
  {
    "id": "html-048",
    "question": "How does `:user-invalid` differ from `:invalid`?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "No difference",
      "It only matches after the user has interacted with the field",
      "It matches valid fields",
      "It only works on forms"
    ],
    "correctAnswer": "It only matches after the user has interacted with the field",
    "explanation": "`:invalid` matches immediately, so empty required fields look like errors on page load. `:user-invalid` only matches after the user has interacted with the field or tried to submit."
  },
  {
    "id": "html-049",
    "question": "What does the `form` attribute on an `<input>` allow?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Submitting to a different URL",
      "Associating the input with a form by id even when it's outside that form",
      "Styling the form",
      "Nesting forms"
    ],
    "correctAnswer": "Associating the input with a form by id even when it's outside that form",
    "explanation": "`form=\"someId\"` associates a control with a form anywhere in the document, which is useful when layout puts a control outside the `<form>` element."
  },
  {
    "id": "html-050",
    "question": "What does `formaction` on a submit button do?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Adds validation",
      "Disables submission",
      "Resets the form",
      "Overrides the form's action for that button"
    ],
    "correctAnswer": "Overrides the form's action for that button",
    "explanation": "`formaction` (along with `formmethod`, `formenctype`, `formtarget`, `formnovalidate`) overrides the form's settings when that specific button submits it, for example 'Save draft' vs 'Publish'."
  },
  {
    "id": "html-051",
    "question": "How are radio buttons grouped?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "By giving them the same name",
      "By giving them the same id",
      "By putting them in the same div",
      "By using <fieldset>"
    ],
    "correctAnswer": "By giving them the same name",
    "explanation": "Radios with the same `name` in the same form form a group: only one can be checked, and arrow keys move between them."
  },
  {
    "id": "html-052",
    "question": "How do you make a checkbox indeterminate?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "checked=\"mixed\"",
      "Only via the JS property checkbox.indeterminate = true",
      "indeterminate attribute in HTML",
      "aria-checked only"
    ],
    "correctAnswer": "Only via the JS property checkbox.indeterminate = true",
    "explanation": "There's no HTML attribute for it. Set `checkbox.indeterminate = true` in JavaScript. It's purely visual (for example a 'select all' with partial selection) and doesn't change the submitted value."
  },
  {
    "id": "html-053",
    "question": "What happens when the user presses Enter in a text input inside a form?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "The form is submitted (implicit submission)",
      "Focus moves to the next field",
      "Nothing",
      "A newline is added"
    ],
    "correctAnswer": "The form is submitted (implicit submission)",
    "explanation": "Implicit submission: pressing Enter in a single-line input submits the form through its default (first) submit button, if one exists or the form has only one field."
  },
  {
    "id": "html-054",
    "question": "Which fields does `new FormData(form)` include?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Inputs with an id",
      "Only visible inputs",
      "All inputs",
      "Enabled controls that have a name attribute"
    ],
    "correctAnswer": "Enabled controls that have a name attribute",
    "explanation": "`FormData` collects successful controls: enabled, with a `name`, and for checkboxes and radios only when checked. Disabled fields and fields without `name` are skipped."
  },
  {
    "id": "html-055",
    "question": "What does `<datalist>` provide?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Suggestions for an input while still allowing free text",
      "A table of data",
      "Data binding",
      "A select with multiple choice"
    ],
    "correctAnswer": "Suggestions for an input while still allowing free text",
    "explanation": "`<datalist>` attached through `list=\"id\"` gives an input autocomplete suggestions while still allowing any value, unlike `<select>`."
  },
  {
    "id": "html-056",
    "question": "What's the difference between `<progress>` and `<meter>`?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "<progress> is deprecated",
      "None",
      "<progress> shows task completion; <meter> shows a scalar value in a known range",
      "<meter> is for loading"
    ],
    "correctAnswer": "<progress> shows task completion; <meter> shows a scalar value in a known range",
    "explanation": "`<progress>` shows how far a task has gone (and can be indeterminate). `<meter>` shows a measurement in a known range, like disk usage, with optional `low`, `high`, and `optimum` thresholds."
  },
  {
    "id": "html-057",
    "question": "When should an image have an empty `alt=\"\"`?",
    "theme": "HTML",
    "subCategory": "Accessibility (a11y)",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "When it is purely decorative",
      "When the image fails to load",
      "Never",
      "When it is a logo"
    ],
    "correctAnswer": "When it is purely decorative",
    "explanation": "`alt=\"\"` tells screen readers to skip a purely decorative image. Omitting `alt` entirely is different: screen readers may read the file name instead."
  },
  {
    "id": "html-058",
    "question": "Why add `width` and `height` attributes to `<img>`?",
    "theme": "HTML",
    "subCategory": "Loading & performance",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "To resize it",
      "It's required for lazy loading",
      "So the browser can reserve space and avoid layout shift (CLS)",
      "For SEO only"
    ],
    "correctAnswer": "So the browser can reserve space and avoid layout shift (CLS)",
    "explanation": "From `width` and `height` the browser computes the aspect ratio and reserves space before the image loads, preventing layout shift (CLS). CSS can still make the image responsive."
  },
  {
    "id": "html-059",
    "question": "When `srcset` uses `w` descriptors, what else should you provide?",
    "theme": "HTML",
    "subCategory": "Media & embeds",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "media",
      "sizes",
      "loading",
      "type"
    ],
    "correctAnswer": "sizes",
    "explanation": "With `w` descriptors the browser needs `sizes` to know how wide the image will display. Without it, `sizes` defaults to `100vw` and the browser may download a much larger file than needed."
  },
  {
    "id": "html-060",
    "question": "When should you use `<picture>` rather than just `srcset`?",
    "theme": "HTML",
    "subCategory": "Media & embeds",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "For lazy loading",
      "For SVG only",
      "For art direction or serving different formats with fallbacks",
      "Never"
    ],
    "correctAnswer": "For art direction or serving different formats with fallbacks",
    "explanation": "Use `<picture>` with `<source media>` for art direction (a different crop on mobile) or `<source type>` for format fallbacks like AVIF, then WebP, then JPEG. Plain resolution switching only needs `srcset`."
  },
  {
    "id": "html-061",
    "question": "Which image should NOT get `loading=\"lazy\"`?",
    "theme": "HTML",
    "subCategory": "Loading & performance",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "The LCP / above-the-fold hero image",
      "Thumbnails in a long list",
      "Images in a carousel's hidden slides",
      "Images in the footer"
    ],
    "correctAnswer": "The LCP / above-the-fold hero image",
    "explanation": "Lazy loading delays the request until the image approaches the viewport. On the hero (LCP) image that delay directly worsens Largest Contentful Paint."
  },
  {
    "id": "html-062",
    "question": "What does `fetchpriority=\"high\"` on an image do?",
    "theme": "HTML",
    "subCategory": "Loading & performance",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Raises its fetch priority, useful for the LCP image",
      "Prevents caching",
      "Loads it synchronously",
      "Decodes it on the main thread"
    ],
    "correctAnswer": "Raises its fetch priority, useful for the LCP image",
    "explanation": "`fetchpriority=\"high\"` hints that this image matters more than others discovered at the same time. Use it on the LCP image so it isn't queued behind less important resources."
  },
  {
    "id": "html-063",
    "question": "What is usually required for a video to autoplay?",
    "theme": "HTML",
    "subCategory": "Media & embeds",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "poster",
      "controls",
      "muted",
      "loop"
    ],
    "correctAnswer": "muted",
    "explanation": "Browsers block autoplay with sound. `autoplay` combined with `muted` (and `playsinline` on iOS) is reliably allowed."
  },
  {
    "id": "html-064",
    "question": "What does `playsinline` do on iOS?",
    "theme": "HTML",
    "subCategory": "Media & embeds",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Mutes the video",
      "Plays inline instead of forcing fullscreen",
      "Loops the video",
      "Disables controls"
    ],
    "correctAnswer": "Plays inline instead of forcing fullscreen",
    "explanation": "Without `playsinline`, iPhone Safari plays videos in fullscreen. With it, the video plays within the page layout, needed for background or decorative videos."
  },
  {
    "id": "html-065",
    "question": "What format does `<track>` use for captions?",
    "theme": "HTML",
    "subCategory": "Media & embeds",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "JSON",
      "WebVTT",
      "XML",
      "SRT"
    ],
    "correctAnswer": "WebVTT",
    "explanation": "`<track>` loads timed text in WebVTT (`.vtt`) format for captions, subtitles, descriptions, or chapters on `<video>` and `<audio>`."
  },
  {
    "id": "html-066",
    "question": "What does an iframe with an empty `sandbox` attribute do?",
    "theme": "HTML",
    "subCategory": "Security",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Applies all restrictions: no scripts, forms, popups, and a unique opaque origin",
      "Nothing",
      "Allows everything",
      "Only blocks scripts"
    ],
    "correctAnswer": "Applies all restrictions: no scripts, forms, popups, and a unique opaque origin",
    "explanation": "An empty `sandbox` applies every restriction: no scripts, forms, popups, or top navigation, and the frame gets a unique opaque origin. You relax it with tokens like `allow-scripts`."
  },
  {
    "id": "html-067",
    "question": "Main difference between `<canvas>` and SVG?",
    "theme": "HTML",
    "subCategory": "Media & embeds",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "SVG is raster",
      "Canvas is raster, drawn imperatively; SVG is vector and part of the DOM",
      "Canvas is accessible by default",
      "None"
    ],
    "correctAnswer": "Canvas is raster, drawn imperatively; SVG is vector and part of the DOM",
    "explanation": "Canvas is an immediate-mode bitmap you draw on with JS; nothing remains as objects. SVG is retained-mode vector graphics in the DOM, scalable, styleable, and accessible."
  },
  {
    "id": "html-068",
    "question": "Should tables be used for page layout?",
    "theme": "HTML",
    "subCategory": "Tables",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Only for emails",
      "No, only for tabular data",
      "Yes",
      "Only on mobile"
    ],
    "correctAnswer": "No, only for tabular data",
    "explanation": "Tables are for tabular data. Layout tables confuse screen readers, which announce rows and columns, and they're rigid. CSS Grid and Flexbox handle layout."
  },
  {
    "id": "html-069",
    "question": "What does the `scope` attribute on `<th>` do?",
    "theme": "HTML",
    "subCategory": "Tables",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Styles the header",
      "Associates the header with a row or column for assistive tech",
      "Makes it sortable",
      "Merges cells"
    ],
    "correctAnswer": "Associates the header with a row or column for assistive tech",
    "explanation": "`scope=\"col\"` or `scope=\"row\"` tells assistive technology which cells a header applies to, so screen readers can announce the right header with each data cell."
  },
  {
    "id": "html-070",
    "question": "What is the first rule of ARIA?",
    "theme": "HTML",
    "subCategory": "Accessibility (a11y)",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "ARIA overrides CSS",
      "If a native HTML element provides the semantics you need, use it instead of ARIA",
      "Always use role attributes",
      "Use aria-label everywhere"
    ],
    "correctAnswer": "If a native HTML element provides the semantics you need, use it instead of ARIA",
    "explanation": "If a native element already has the semantics and behavior you need, use it. ARIA only changes how things are announced; it doesn't add focus or keyboard behavior."
  },
  {
    "id": "html-071",
    "question": "If an element has both `aria-labelledby` and `aria-label`, which wins?",
    "theme": "HTML",
    "subCategory": "Accessibility (a11y)",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "aria-label",
      "Neither; the text content wins",
      "Both are combined",
      "aria-labelledby"
    ],
    "correctAnswer": "aria-labelledby",
    "explanation": "In the accessible name computation, `aria-labelledby` takes precedence over `aria-label`, which in turn overrides native labels and content."
  },
  {
    "id": "html-072",
    "question": "What is `aria-describedby` used for?",
    "theme": "HTML",
    "subCategory": "Accessibility (a11y)",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "The accessible name",
      "Links between pages",
      "Supplementary descriptive text, such as hints or errors",
      "Tooltips only"
    ],
    "correctAnswer": "Supplementary descriptive text, such as hints or errors",
    "explanation": "`aria-describedby` points to elements that provide extra description, such as format hints or error messages. Screen readers announce it after the name and role."
  },
  {
    "id": "html-073",
    "question": "What is the problem with `aria-hidden=\"true\"` on a focusable element?",
    "theme": "HTML",
    "subCategory": "Accessibility (a11y)",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "It stays focusable but is hidden from assistive tech, confusing users",
      "None",
      "It removes it visually",
      "It becomes unclickable"
    ],
    "correctAnswer": "It stays focusable but is hidden from assistive tech, confusing users",
    "explanation": "`aria-hidden` removes an element from the accessibility tree but not from the tab order. Keyboard users then focus something screen readers can't announce."
  },
  {
    "id": "html-074",
    "question": "What does the `inert` attribute do?",
    "theme": "HTML",
    "subCategory": "Accessibility (a11y)",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Disables CSS",
      "Hides elements visually",
      "Prevents re-renders",
      "Makes a subtree non-interactive, unfocusable, and hidden from assistive tech"
    ],
    "correctAnswer": "Makes a subtree non-interactive, unfocusable, and hidden from assistive tech",
    "explanation": "`inert` makes a whole subtree unclickable, unfocusable, and hidden from assistive tech. It's ideal for the background behind a custom modal."
  },
  {
    "id": "html-075",
    "question": "Difference between `aria-live=\"polite\"` and `\"assertive\"`?",
    "theme": "HTML",
    "subCategory": "Accessibility (a11y)",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "polite only works on forms",
      "polite waits until the user is idle; assertive interrupts immediately",
      "assertive is quieter",
      "None"
    ],
    "correctAnswer": "polite waits until the user is idle; assertive interrupts immediately",
    "explanation": "`polite` announces updates when the screen reader is idle; `assertive` interrupts immediately. Use `assertive` sparingly, for urgent errors only."
  },
  {
    "id": "html-076",
    "question": "What does `tabindex=\"-1\"` do?",
    "theme": "HTML",
    "subCategory": "Accessibility (a11y)",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Makes it unfocusable everywhere",
      "Focusable via JavaScript but removed from the tab order",
      "Makes the element first in tab order",
      "Hides the element"
    ],
    "correctAnswer": "Focusable via JavaScript but removed from the tab order",
    "explanation": "`tabindex=\"-1\"` makes an element focusable with `element.focus()` but keeps it out of Tab navigation. It's useful for focus management, for example moving focus to a heading after navigation."
  },
  {
    "id": "html-077",
    "question": "What does `tabindex=\"0\"` do?",
    "theme": "HTML",
    "subCategory": "Accessibility (a11y)",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Makes it first in tab order",
      "Removes focus",
      "Adds the element to the natural tab order",
      "Nothing"
    ],
    "correctAnswer": "Adds the element to the natural tab order",
    "explanation": "`tabindex=\"0\"` adds a normally non-focusable element to the Tab sequence in DOM order. Custom interactive widgets need it."
  },
  {
    "id": "html-078",
    "question": "Why avoid positive `tabindex` values?",
    "theme": "HTML",
    "subCategory": "Accessibility (a11y)",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "They break the natural focus order and are hard to maintain",
      "They're invalid",
      "They hide the outline",
      "They disable the element"
    ],
    "correctAnswer": "They break the natural focus order and are hard to maintain",
    "explanation": "Positive values jump the element ahead of everything else in tab order, creating a confusing sequence that breaks whenever the page changes. Fix the DOM order instead."
  },
  {
    "id": "html-079",
    "question": "What is a skip link?",
    "theme": "HTML",
    "subCategory": "Accessibility (a11y)",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "A link to skip ads",
      "A redirect",
      "A link at the top that lets keyboard users jump to the main content",
      "A broken link"
    ],
    "correctAnswer": "A link at the top that lets keyboard users jump to the main content",
    "explanation": "A skip link is the first focusable element on the page, often visible only on focus. It jumps keyboard users past repeated navigation straight to `<main>`."
  },
  {
    "id": "html-080",
    "question": "What is a 'roving tabindex'?",
    "theme": "HTML",
    "subCategory": "Accessibility (a11y)",
    "level": "hard",
    "fourOptionsForAnAnswer": [
      "One item in a widget has tabindex 0, the rest -1, and arrow keys move focus",
      "Using tabindex on every element",
      "Random focus order",
      "Auto-focusing on hover"
    ],
    "correctAnswer": "One item in a widget has tabindex 0, the rest -1, and arrow keys move focus",
    "explanation": "In composite widgets (toolbars, tabs, grids) only the active item has `tabindex=\"0\"`. Tab enters and leaves the widget as one stop, and arrow keys move focus inside it."
  },
  {
    "id": "html-081",
    "question": "What does `aria-current=\"page\"` indicate?",
    "theme": "HTML",
    "subCategory": "Accessibility (a11y)",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "The current item in a set, e.g. the active nav link",
      "The first page",
      "The page is loading",
      "A visited link"
    ],
    "correctAnswer": "The current item in a set, e.g. the active nav link",
    "explanation": "`aria-current` marks the current item within a set, like the active nav link (`page`), the current step (`step`), or a date (`date`). Screen readers announce it as 'current page'."
  },
  {
    "id": "html-082",
    "question": "A top-level `<header>` (not inside article/section) maps to which landmark role?",
    "theme": "HTML",
    "subCategory": "Accessibility (a11y)",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "contentinfo",
      "banner",
      "navigation",
      "heading"
    ],
    "correctAnswer": "banner",
    "explanation": "A `<header>` that isn't inside `<article>`, `<aside>`, `<main>`, `<nav>`, or `<section>` maps to the `banner` landmark, the site header."
  },
  {
    "id": "html-083",
    "question": "A top-level `<footer>` maps to which landmark role?",
    "theme": "HTML",
    "subCategory": "Accessibility (a11y)",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "complementary",
      "contentinfo",
      "region",
      "banner"
    ],
    "correctAnswer": "contentinfo",
    "explanation": "A top-level `<footer>` maps to the `contentinfo` landmark: copyright, contact, and legal information for the page."
  },
  {
    "id": "html-084",
    "question": "Which WCAG level do most legal requirements target?",
    "theme": "HTML",
    "subCategory": "Accessibility (a11y)",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "None",
      "AAA",
      "A",
      "AA"
    ],
    "correctAnswer": "AA",
    "explanation": "Most laws and policies (ADA guidance, EN 301 549, the European Accessibility Act) reference WCAG level AA. A is the minimum; AAA isn't required for whole sites."
  },
  {
    "id": "html-085",
    "question": "Difference between `defer` and `async` on scripts?",
    "theme": "HTML",
    "subCategory": "Loading & performance",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "defer blocks parsing",
      "defer runs in order after parsing; async runs as soon as downloaded, in any order",
      "None",
      "async runs in order; defer runs in any order"
    ],
    "correctAnswer": "defer runs in order after parsing; async runs as soon as downloaded, in any order",
    "explanation": "Both download in parallel without blocking parsing. `defer` scripts run in document order after parsing; `async` scripts run as soon as they arrive, in any order. Use `async` for independent scripts like analytics."
  },
  {
    "id": "html-086",
    "question": "How does `<script type=\"module\">` load by default?",
    "theme": "HTML",
    "subCategory": "Loading & performance",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Lazy, on first use",
      "Blocking",
      "Deferred",
      "Async"
    ],
    "correctAnswer": "Deferred",
    "explanation": "Module scripts are deferred by default: they download in parallel and run after parsing, in order. Add `async` to run them as soon as they and their imports are ready."
  },
  {
    "id": "html-087",
    "question": "What does `nomodule` do?",
    "theme": "HTML",
    "subCategory": "Loading & performance",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Runs the script twice",
      "Disables modules",
      "Loads a module without imports",
      "The script runs only in browsers that don't support modules (legacy fallback)"
    ],
    "correctAnswer": "The script runs only in browsers that don't support modules (legacy fallback)",
    "explanation": "Browsers that support ES modules skip `nomodule` scripts, so legacy browsers get a fallback bundle while modern ones load the module version."
  },
  {
    "id": "html-088",
    "question": "What does an import map do?",
    "theme": "HTML",
    "subCategory": "Loading & performance",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Lazy loads modules",
      "Lists exported functions",
      "Maps bare module specifiers like 'react' to URLs",
      "Bundles modules"
    ],
    "correctAnswer": "Maps bare module specifiers like 'react' to URLs",
    "explanation": "`<script type=\"importmap\">` maps bare specifiers like `react` or `lodash/` to URLs, so native ES modules can use package-style imports without a bundler."
  },
  {
    "id": "html-089",
    "question": "What are Speculation Rules (`<script type=\"speculationrules\">`) for?",
    "theme": "HTML",
    "subCategory": "Loading & performance",
    "level": "hard",
    "fourOptionsForAnAnswer": [
      "Prefetching or prerendering likely future navigations",
      "Running code speculatively in workers",
      "A/B testing",
      "Feature detection"
    ],
    "correctAnswer": "Prefetching or prerendering likely future navigations",
    "explanation": "Speculation Rules declare which URLs the browser may prefetch or fully prerender. When the user clicks, the next page can appear almost instantly."
  },
  {
    "id": "html-090",
    "question": "What is the browser's preload scanner?",
    "theme": "HTML",
    "subCategory": "Loading & performance",
    "level": "hard",
    "fourOptionsForAnAnswer": [
      "A virus scanner",
      "A secondary parser that discovers resources to fetch while the main parser is blocked",
      "A tool in DevTools",
      "A service worker"
    ],
    "correctAnswer": "A secondary parser that discovers resources to fetch while the main parser is blocked",
    "explanation": "While the main parser is blocked on a script, the preload scanner looks ahead through the raw HTML and starts fetching images, stylesheets, and scripts. That's why resources hidden inside JS load later."
  },
  {
    "id": "html-091",
    "question": "A classic `<script>` without async/defer is:",
    "theme": "HTML",
    "subCategory": "Loading & performance",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Non-blocking",
      "Lazy loaded",
      "Render-blocking only",
      "Parser-blocking"
    ],
    "correctAnswer": "Parser-blocking",
    "explanation": "A classic script without `async` or `defer` stops HTML parsing while it downloads and runs, because it could call `document.write`. That's why such scripts traditionally go at the end of `<body>`."
  },
  {
    "id": "html-092",
    "question": "What does LCP measure?",
    "theme": "HTML",
    "subCategory": "Loading & performance",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Total page weight",
      "Time to first byte",
      "Render time of the largest visible content element",
      "JS execution time"
    ],
    "correctAnswer": "Render time of the largest visible content element",
    "explanation": "Largest Contentful Paint is when the largest image or text block in the viewport is rendered. 'Good' is 2.5s or less."
  },
  {
    "id": "html-093",
    "question": "What does INP measure?",
    "theme": "HTML",
    "subCategory": "Loading & performance",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Input field count",
      "Image load time",
      "Responsiveness to user interactions",
      "Network latency"
    ],
    "correctAnswer": "Responsiveness to user interactions",
    "explanation": "Interaction to Next Paint measures the delay from a user interaction (click, tap, key) to the next frame, reporting roughly the worst one. 'Good' is 200ms or less. It replaced FID in 2024."
  },
  {
    "id": "html-094",
    "question": "What does CLS measure?",
    "theme": "HTML",
    "subCategory": "Loading & performance",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Click count",
      "CSS load speed",
      "Cache hit rate",
      "Unexpected layout shifts"
    ],
    "correctAnswer": "Unexpected layout shifts",
    "explanation": "Cumulative Layout Shift sums unexpected movements of visible content, caused by images without dimensions, late-loading ads, or font swaps. 'Good' is 0.1 or less."
  },
  {
    "id": "html-095",
    "question": "What are Open Graph meta tags for?",
    "theme": "HTML",
    "subCategory": "SEO & metadata",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Rich link previews on social platforms and messengers",
      "Accessibility",
      "SEO ranking",
      "Analytics"
    ],
    "correctAnswer": "Rich link previews on social platforms and messengers",
    "explanation": "Open Graph tags (`og:title`, `og:description`, `og:image`) control the preview card shown when a link is shared on social networks and messengers."
  },
  {
    "id": "html-096",
    "question": "What is JSON-LD used for?",
    "theme": "HTML",
    "subCategory": "SEO & metadata",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Storing local data",
      "Translating pages",
      "Structured data that can produce rich results in search",
      "Configuring bundlers"
    ],
    "correctAnswer": "Structured data that can produce rich results in search",
    "explanation": "JSON-LD in `<script type=\"application/ld+json\">` describes the page with Schema.org vocabulary (product, article, FAQ), which can earn rich results in search."
  },
  {
    "id": "html-097",
    "question": "What does `hreflang` indicate?",
    "theme": "HTML",
    "subCategory": "SEO & metadata",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Alternate versions of a page for other languages or regions",
      "Font language",
      "The link's language direction",
      "The document encoding"
    ],
    "correctAnswer": "Alternate versions of a page for other languages or regions",
    "explanation": "`hreflang` on alternate links tells search engines which URL serves which language or region, so users are sent to the right version."
  },
  {
    "id": "html-098",
    "question": "What does `<meta name=\"robots\" content=\"noindex\">` do?",
    "theme": "HTML",
    "subCategory": "SEO & metadata",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Blocks bots from loading the page",
      "Prevents link following only",
      "Hides the page from users",
      "Asks search engines not to include the page in their index"
    ],
    "correctAnswer": "Asks search engines not to include the page in their index",
    "explanation": "`noindex` asks crawlers not to include the page in search results. The page must still be crawlable: blocking it in robots.txt would hide the noindex directive."
  },
  {
    "id": "html-099",
    "question": "Main risk of assigning user input to `innerHTML`?",
    "theme": "HTML",
    "subCategory": "Security",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Slow rendering",
      "Layout shift",
      "Memory leaks",
      "XSS (cross-site scripting)"
    ],
    "correctAnswer": "XSS (cross-site scripting)",
    "explanation": "`innerHTML` parses the string as HTML, so input like `<img src=x onerror=...>` executes script. That's DOM-based XSS."
  },
  {
    "id": "html-100",
    "question": "Safe alternative for inserting plain user text into the DOM?",
    "theme": "HTML",
    "subCategory": "Security",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "textContent",
      "outerHTML",
      "document.write",
      "innerHTML"
    ],
    "correctAnswer": "textContent",
    "explanation": "`textContent` inserts text as text: characters like `<` are never parsed as markup. Use it, or a sanitizer, whenever content comes from users."
  },
  {
    "id": "html-101",
    "question": "Which CSP directive cannot be set through `<meta http-equiv>`?",
    "theme": "HTML",
    "subCategory": "Security",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "img-src",
      "frame-ancestors",
      "script-src",
      "default-src"
    ],
    "correctAnswer": "frame-ancestors",
    "explanation": "`frame-ancestors`, `report-uri`, and `sandbox` are ignored in a meta-tag CSP. Anti-framing protection must be sent as an HTTP header."
  },
  {
    "id": "html-102",
    "question": "What does Subresource Integrity (`integrity` attribute) protect against?",
    "theme": "HTML",
    "subCategory": "Security",
    "level": "hard",
    "fourOptionsForAnAnswer": [
      "A third-party file being modified, by verifying its hash",
      "XSS in your own code",
      "CSRF",
      "Clickjacking"
    ],
    "correctAnswer": "A third-party file being modified, by verifying its hash",
    "explanation": "`integrity=\"sha384-...\"` makes the browser hash the downloaded file and refuse to run it if it doesn't match, protecting you from a compromised CDN."
  },
  {
    "id": "html-103",
    "question": "What does `crossorigin=\"anonymous\"` do?",
    "theme": "HTML",
    "subCategory": "Security",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Hides the user's IP",
      "Makes a CORS request without credentials",
      "Disables CORS",
      "Sends cookies"
    ],
    "correctAnswer": "Makes a CORS request without credentials",
    "explanation": "`crossorigin=\"anonymous\"` makes the request in CORS mode without cookies or credentials. It's required for SRI on cross-origin files and for reading cross-origin images in canvas."
  },
  {
    "id": "html-104",
    "question": "What protects a page from clickjacking?",
    "theme": "HTML",
    "subCategory": "Security",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "CORS",
      "HTTPS",
      "CSP frame-ancestors or X-Frame-Options",
      "SRI"
    ],
    "correctAnswer": "CSP frame-ancestors or X-Frame-Options",
    "explanation": "Clickjacking loads your page in an invisible iframe to trick clicks. `Content-Security-Policy: frame-ancestors 'self'` (or the older `X-Frame-Options`) stops other sites from framing it."
  },
  {
    "id": "html-105",
    "question": "What are Trusted Types?",
    "theme": "HTML",
    "subCategory": "Security",
    "level": "hard",
    "fourOptionsForAnAnswer": [
      "TypeScript types for the DOM",
      "A type of cookie",
      "A mechanism that forces typed, sanitized values into dangerous DOM sinks like innerHTML",
      "A certificate type"
    ],
    "correctAnswer": "A mechanism that forces typed, sanitized values into dangerous DOM sinks like innerHTML",
    "explanation": "With Trusted Types enforced by CSP, sinks like `innerHTML` reject plain strings and only accept values produced by approved policies, which shuts down most DOM XSS."
  },
  {
    "id": "html-106",
    "question": "What must a custom element's name contain?",
    "theme": "HTML",
    "subCategory": "Web Components",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "The prefix 'x-'",
      "A capital letter",
      "A hyphen",
      "A number"
    ],
    "correctAnswer": "A hyphen",
    "explanation": "Custom element names must contain a hyphen (`my-button`). That guarantees they never clash with current or future built-in HTML elements."
  },
  {
    "id": "html-107",
    "question": "What does `element.shadowRoot` return for a shadow root created with `mode: 'closed'`?",
    "theme": "HTML",
    "subCategory": "Web Components",
    "level": "hard",
    "fourOptionsForAnAnswer": [
      "null",
      "An error",
      "The shadow root",
      "undefined"
    ],
    "correctAnswer": "null",
    "explanation": "With a closed shadow root, `element.shadowRoot` returns `null`, so outside scripts can't reach in. Only the component keeps the reference returned by `attachShadow`."
  },
  {
    "id": "html-108",
    "question": "How do you create Declarative Shadow DOM in HTML?",
    "theme": "HTML",
    "subCategory": "Web Components",
    "level": "hard",
    "fourOptionsForAnAnswer": [
      "<slot shadow>",
      "<shadow>",
      "<template shadowrootmode=\"open\">",
      "<div shadow=\"open\">"
    ],
    "correctAnswer": "<template shadowrootmode=\"open\">",
    "explanation": "A `<template shadowrootmode=\"open\">` inside an element is turned into its shadow root during parsing, so server-rendered web components can display without JavaScript."
  },
  {
    "id": "html-109",
    "question": "When is a custom element's `connectedCallback` called?",
    "theme": "HTML",
    "subCategory": "Web Components",
    "level": "hard",
    "fourOptionsForAnAnswer": [
      "When it's created with new",
      "When the element is inserted into the document",
      "When an attribute changes",
      "When defined"
    ],
    "correctAnswer": "When the element is inserted into the document",
    "explanation": "`connectedCallback` runs each time the element is inserted into a document (it can run more than once if the element is moved). It's the place to render and add listeners."
  },
  {
    "id": "html-110",
    "question": "What is `<bdi>` for?",
    "theme": "HTML",
    "subCategory": "Internationalization",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Bidirectional links",
      "Isolating text of unknown direction (e.g. user names in RTL/LTR)",
      "Bold italic text",
      "Base direction of the document"
    ],
    "correctAnswer": "Isolating text of unknown direction (e.g. user names in RTL/LTR)",
    "explanation": "`<bdi>` isolates text whose direction is unknown, such as a user name that might be Arabic or Hebrew, so it doesn't scramble the surrounding text."
  },
  {
    "id": "html-111",
    "question": "What does `translate=\"no\"` do?",
    "theme": "HTML",
    "subCategory": "Internationalization",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Sets the language",
      "Disables RTL",
      "Tells translation tools not to translate that content",
      "Hides the text"
    ],
    "correctAnswer": "Tells translation tools not to translate that content",
    "explanation": "`translate=\"no\"` tells translation tools like Google Translate to leave the content as is. It's useful for brand names, code, or product names."
  },
  {
    "id": "html-112",
    "question": "What's wrong with this markup?\n\n<button><a href=\"/home\">Home</a></button>",
    "theme": "HTML",
    "subCategory": "Semantics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Nothing",
      "The link needs target",
      "Buttons can't contain text",
      "Interactive content inside a button is invalid; use one or the other"
    ],
    "correctAnswer": "Interactive content inside a button is invalid; use one or the other",
    "explanation": "The content model of `<button>` forbids interactive content. Nesting a link inside makes behavior and screen reader output unpredictable. Use a link styled as a button, or a button."
  },
  {
    "id": "html-113",
    "question": "What DOM does the browser build from this?\n\n<p><div>Text</div></p>",
    "theme": "HTML",
    "subCategory": "Document basics",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "An error page",
      "<p></p><div>Text</div><p></p>",
      "A div nested in a p",
      "Only <div>Text</div>"
    ],
    "correctAnswer": "<p></p><div>Text</div><p></p>",
    "explanation": "A `<p>` can only contain phrasing content. When the parser sees `<div>`, it auto-closes the paragraph, and the stray `</p>` creates a second empty paragraph."
  },
  {
    "id": "html-114",
    "question": "What happens when the button is clicked?\n\n<form>\n  <input name=\"q\">\n  <button onclick=\"search()\">Search</button>\n</form>",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Only search() runs",
      "search() runs and then the form submits, reloading the page",
      "The form submits without calling search()",
      "Nothing"
    ],
    "correctAnswer": "search() runs and then the form submits, reloading the page",
    "explanation": "A button inside a form defaults to `type=\"submit\"`, so the click runs `search()` and then submits the form, reloading the page. Add `type=\"button\"` or call `event.preventDefault()`."
  },
  {
    "id": "html-115",
    "question": "What's wrong with this?\n\n<ul>\n  <div><li>Item</li></div>\n</ul>",
    "theme": "HTML",
    "subCategory": "Semantics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Nothing",
      "<ul> may only contain <li> (plus script/template) as children",
      "<div> must have a role",
      "<li> must have a class"
    ],
    "correctAnswer": "<ul> may only contain <li> (plus script/template) as children",
    "explanation": "Lists may only contain `<li>` elements (plus `script` and `template`) as direct children. The wrapping `<div>` breaks list semantics for screen readers and fails validation."
  },
  {
    "id": "html-116",
    "question": "What's the problem?\n\n<label>Name</label>\n<input id=\"name\">",
    "theme": "HTML",
    "subCategory": "Accessibility (a11y)",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "The label is not associated with the input (no for=\"name\" or wrapping)",
      "Inputs can't have ids",
      "Labels must come after inputs",
      "Nothing"
    ],
    "correctAnswer": "The label is not associated with the input (no for=\"name\" or wrapping)",
    "explanation": "Without `for=\"name\"` or wrapping, the label isn't linked to the input. Clicking it does nothing and screen readers announce the input without a name."
  },
  {
    "id": "html-117",
    "question": "What's the issue with this heading structure?\n\n<h1>Site</h1>\n<h4>Section</h4>",
    "theme": "HTML",
    "subCategory": "Accessibility (a11y)",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "It skips heading levels, which confuses screen reader navigation",
      "Nothing",
      "<h4> must come first",
      "Only one heading is allowed"
    ],
    "correctAnswer": "It skips heading levels, which confuses screen reader navigation",
    "explanation": "Screen reader users navigate by heading levels. Jumping from `<h1>` to `<h4>` suggests missing sections. Use the next level and style it with CSS."
  },
  {
    "id": "html-118",
    "question": "In what order do these scripts execute?\n\n<script src=\"app.js\"></script>\n<script src=\"analytics.js\" async></script>\n<script src=\"vendor.js\" defer></script>",
    "theme": "HTML",
    "subCategory": "Loading & performance",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "All in parallel",
      "vendor, app, analytics",
      "app first; vendor after parsing; analytics whenever it finishes downloading",
      "app, analytics, vendor always"
    ],
    "correctAnswer": "app first; vendor after parsing; analytics whenever it finishes downloading",
    "explanation": "`app.js` blocks parsing and runs first. The `async` script runs whenever it finishes downloading, which could be before or after parsing ends. The `defer` script runs after parsing completes."
  },
  {
    "id": "html-119",
    "question": "What's wrong here?\n\n<a href=\"#\" onclick=\"openMenu()\">Menu</a>",
    "theme": "HTML",
    "subCategory": "Semantics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "onclick doesn't work on links",
      "Nothing",
      "It's an action, so it should be a <button>",
      "href must be a full URL"
    ],
    "correctAnswer": "It's an action, so it should be a <button>",
    "explanation": "`href=\"#\"` with an onclick is an action pretending to be a link: it may jump to the top of the page and is announced as a link. A `<button type=\"button\">` is the correct element."
  },
  {
    "id": "html-120",
    "question": "What is HTML mainly used for?",
    "theme": "HTML",
    "subCategory": "Document basics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Describing the structure and meaning of web content",
      "Adding interactivity and logic",
      "Styling web pages",
      "Storing data on the server"
    ],
    "correctAnswer": "Describing the structure and meaning of web content",
    "explanation": "HTML (HyperText Markup Language) describes the structure and meaning of content: headings, paragraphs, links, forms. CSS handles presentation and JavaScript handles behavior."
  },
  {
    "id": "html-121",
    "question": "What does a typical HTML element consist of?",
    "theme": "HTML",
    "subCategory": "Document basics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "An opening tag (with optional attributes), content, and a closing tag",
      "A key and a value",
      "A selector and declarations",
      "Only a tag name"
    ],
    "correctAnswer": "An opening tag (with optional attributes), content, and a closing tag",
    "explanation": "An element is an opening tag (with optional attributes), content, and a closing tag, for example `<a href=\"/\">Home</a>`. Void elements like `<img>` have only the opening tag."
  },
  {
    "id": "html-122",
    "question": "Which is the correct basic structure of an HTML page?",
    "theme": "HTML",
    "subCategory": "Document basics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "<!DOCTYPE html><body><html>…</html></body>",
      "<!DOCTYPE html><html><head>…</head><body>…</body></html>",
      "<html><body><head></head></body></html>",
      "<head><html><body></body></html></head>"
    ],
    "correctAnswer": "<!DOCTYPE html><html><head>…</head><body>…</body></html>",
    "explanation": "A page starts with `<!DOCTYPE html>`, then `<html lang>` containing `<head>` (metadata, title) followed by `<body>` (visible content)."
  },
  {
    "id": "html-123",
    "question": "What is an inline style?",
    "theme": "HTML",
    "subCategory": "Document basics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "CSS written in an element's style attribute",
      "Styles inside a <style> tag",
      "Default browser styles",
      "A style in an external .css file"
    ],
    "correctAnswer": "CSS written in an element's style attribute",
    "explanation": "An inline style is a `style` attribute on the element itself. It applies only to that element and beats any selector from stylesheets in specificity."
  },
  {
    "id": "html-124",
    "question": "Can an inline style be overridden from a stylesheet?",
    "theme": "HTML",
    "subCategory": "Document basics",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Only with a more specific selector",
      "Yes, with an !important declaration in the stylesheet",
      "No, never",
      "Only with an id selector"
    ],
    "correctAnswer": "Yes, with an !important declaration in the stylesheet",
    "explanation": "Inline styles win over normal stylesheet rules, but an `!important` declaration in a stylesheet beats a normal inline style. JavaScript can also change `element.style` directly."
  },
  {
    "id": "html-125",
    "question": "Do HTML elements have their own default styles?",
    "theme": "HTML",
    "subCategory": "Document basics",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Only headings",
      "Only in quirks mode",
      "No, everything is unstyled",
      "Yes, from the browser's user-agent stylesheet"
    ],
    "correctAnswer": "Yes, from the browser's user-agent stylesheet",
    "explanation": "Every browser ships a user-agent stylesheet: margins on `<body>` and `<p>`, bold headings, list bullets, and so on. Resets and normalize.css exist to smooth out the differences."
  },
  {
    "id": "html-126",
    "question": "Where are attributes written in HTML?",
    "theme": "HTML",
    "subCategory": "DOM & attributes",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "In the closing tag",
      "Between the tags",
      "In the opening tag, usually as name=\"value\"",
      "In a separate <attr> element"
    ],
    "correctAnswer": "In the opening tag, usually as name=\"value\"",
    "explanation": "Attributes go in the opening tag as `name=\"value\"` pairs, separated by spaces. Boolean attributes can appear without a value."
  },
  {
    "id": "html-127",
    "question": "What does `disabled=\"false\"` on a button do?",
    "theme": "HTML",
    "subCategory": "DOM & attributes",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "It's invalid and ignored",
      "The button is still disabled; for boolean attributes, presence alone means true",
      "Enables the button",
      "Disables only clicks"
    ],
    "correctAnswer": "The button is still disabled; for boolean attributes, presence alone means true",
    "explanation": "For boolean attributes, presence alone means true and the value is ignored, so `disabled=\"false\"` still disables. Remove the attribute to enable the element."
  },
  {
    "id": "html-128",
    "question": "Which of these is a global attribute (valid on any element)?",
    "theme": "HTML",
    "subCategory": "DOM & attributes",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "hidden",
      "src",
      "href",
      "alt"
    ],
    "correctAnswer": "hidden",
    "explanation": "Global attributes like `hidden`, `id`, `class`, `title`, `lang`, `tabindex`, and `data-*` work on any element. `href`, `src`, and `alt` only apply to specific elements."
  },
  {
    "id": "html-129",
    "question": "Which of these is NOT a global attribute?",
    "theme": "HTML",
    "subCategory": "DOM & attributes",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "class",
      "title",
      "tabindex",
      "href"
    ],
    "correctAnswer": "href",
    "explanation": "`href` only applies to elements like `<a>`, `<area>`, `<link>`, and `<base>`. `class`, `title`, and `tabindex` are global."
  },
  {
    "id": "html-130",
    "question": "What are `data-*` attributes for?",
    "theme": "HTML",
    "subCategory": "DOM & attributes",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Storing custom data on elements for scripts and CSS, without non-standard attributes",
      "Sending data to the server",
      "Defining database fields",
      "SEO metadata"
    ],
    "correctAnswer": "Storing custom data on elements for scripts and CSS, without non-standard attributes",
    "explanation": "`data-*` attributes store custom data on elements in valid HTML. Scripts read it through `dataset`, and CSS can select or display it."
  },
  {
    "id": "html-131",
    "question": "How can CSS use a `data-*` attribute?",
    "theme": "HTML",
    "subCategory": "DOM & attributes",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Only through custom properties",
      "With the :data() pseudo-class",
      "With attribute selectors like [data-state=\"open\"] and attr() in content",
      "It can't"
    ],
    "correctAnswer": "With attribute selectors like [data-state=\"open\"] and attr() in content",
    "explanation": "CSS can target data attributes with attribute selectors (`[data-state=\"open\"]`) and show their value with `content: attr(data-label)` in pseudo-elements."
  },
  {
    "id": "html-132",
    "question": "How do you hide an element without CSS or JavaScript?",
    "theme": "HTML",
    "subCategory": "DOM & attributes",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "visible=\"false\"",
      "aria-hidden=\"true\"",
      "<hide>",
      "The hidden attribute"
    ],
    "correctAnswer": "The hidden attribute",
    "explanation": "The `hidden` attribute hides an element through the user-agent style `display: none`, and the element is also removed from the accessibility tree."
  },
  {
    "id": "html-133",
    "question": "Can CSS override the `hidden` attribute?",
    "theme": "HTML",
    "subCategory": "DOM & attributes",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Only with !important in the HTML",
      "Only in Safari",
      "Yes, e.g. display: block on the element, because hidden is just a user-agent display: none",
      "No"
    ],
    "correctAnswer": "Yes, e.g. display: block on the element, because hidden is just a user-agent display: none",
    "explanation": "`hidden` is just a low-priority user-agent rule, so author CSS like `display: flex` on the same element makes it visible again. Some resets add `[hidden] { display: none !important; }` to prevent that."
  },
  {
    "id": "html-134",
    "question": "What does `hidden=\"until-found\"` do?",
    "theme": "HTML",
    "subCategory": "DOM & attributes",
    "level": "hard",
    "fourOptionsForAnAnswer": [
      "Hides content but lets find-in-page and fragment links reveal it",
      "Hides it from search engines only",
      "Shows it after page load",
      "Hides the element permanently"
    ],
    "correctAnswer": "Hides content but lets find-in-page and fragment links reveal it",
    "explanation": "`hidden=\"until-found\"` hides content but keeps it searchable: find-in-page or a fragment link reveals it and fires `beforematch`. It's great for collapsed sections."
  },
  {
    "id": "html-135",
    "question": "What are content categories in HTML?",
    "theme": "HTML",
    "subCategory": "Content categories",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "MIME types",
      "SEO page types",
      "CSS display types",
      "Groups of elements with shared characteristics that define which elements may be nested where"
    ],
    "correctAnswer": "Groups of elements with shared characteristics that define which elements may be nested where",
    "explanation": "Content categories (flow, phrasing, sectioning, and so on) group elements by shared traits. Each element's content model is defined in terms of them, which determines what can be nested where."
  },
  {
    "id": "html-136",
    "question": "Which category covers most elements allowed inside <body>?",
    "theme": "HTML",
    "subCategory": "Content categories",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Embedded content",
      "Flow content",
      "Heading content",
      "Metadata content"
    ],
    "correctAnswer": "Flow content",
    "explanation": "Flow content covers almost everything used in `<body>`: text, `<div>`, `<p>`, lists, forms, sectioning elements, media."
  },
  {
    "id": "html-137",
    "question": "What is phrasing content?",
    "theme": "HTML",
    "subCategory": "Content categories",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Only paragraphs",
      "Text and text-level elements like <span>, <em>, <a>",
      "Headings",
      "Script elements"
    ],
    "correctAnswer": "Text and text-level elements like <span>, <em>, <a>",
    "explanation": "Phrasing content is text and the text-level elements that mark it up, such as `<span>`, `<em>`, `<a>`, `<code>`, `<img>`. Elements like `<p>` only accept phrasing content."
  },
  {
    "id": "html-138",
    "question": "Which elements are sectioning content?",
    "theme": "HTML",
    "subCategory": "Content categories",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "<header>, <footer>",
      "<h1>–<h6>",
      "<article>, <aside>, <nav>, <section>",
      "<div>, <span>"
    ],
    "correctAnswer": "<article>, <aside>, <nav>, <section>",
    "explanation": "Sectioning content is `<article>`, `<aside>`, `<nav>`, and `<section>`. These elements define the scope of headers and footers inside them."
  },
  {
    "id": "html-139",
    "question": "Which elements are heading content?",
    "theme": "HTML",
    "subCategory": "Content categories",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "<header> and <hgroup>",
      "<title> and <h1>",
      "<thead> and <th>",
      "<h1>–<h6> and <hgroup>"
    ],
    "correctAnswer": "<h1>–<h6> and <hgroup>",
    "explanation": "Heading content is `<h1>`–`<h6>` and `<hgroup>`. `<header>` is a flow element that usually contains a heading but isn't heading content itself."
  },
  {
    "id": "html-140",
    "question": "Which elements are metadata content?",
    "theme": "HTML",
    "subCategory": "Content categories",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "<abbr>, <time>, <data>",
      "<base>, <link>, <meta>, <script>, <style>, <title>",
      "<header>, <footer>",
      "<main>, <nav>"
    ],
    "correctAnswer": "<base>, <link>, <meta>, <script>, <style>, <title>",
    "explanation": "Metadata content sets up the document rather than displaying it: `<base>`, `<link>`, `<meta>`, `<noscript>`, `<script>`, `<style>`, `<template>`, `<title>`."
  },
  {
    "id": "html-141",
    "question": "Which of these belongs to embedded content?",
    "theme": "HTML",
    "subCategory": "Content categories",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "<legend>",
      "<nav>",
      "<label>",
      "<iframe>"
    ],
    "correctAnswer": "<iframe>",
    "explanation": "Embedded content imports another resource into the document: `<iframe>`, `<img>`, `<video>`, `<audio>`, `<canvas>`, `<svg>`, `<embed>`, `<object>`, `<picture>`, `<math>`."
  },
  {
    "id": "html-142",
    "question": "Which of these is interactive content?",
    "theme": "HTML",
    "subCategory": "Content categories",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "<div>",
      "<button>",
      "<span>",
      "<p>"
    ],
    "correctAnswer": "<button>",
    "explanation": "Interactive content is meant for user interaction: `<button>`, `<a href>`, `<input>` (not hidden), `<select>`, `<textarea>`, `<details>`, `<label>`, `<iframe>`, among others."
  },
  {
    "id": "html-143",
    "question": "What does the <head> element contain?",
    "theme": "HTML",
    "subCategory": "Head & metadata",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "The navigation menu",
      "Metadata: title, meta tags, links to stylesheets, scripts, base URL",
      "Only the page title",
      "Visible page content"
    ],
    "correctAnswer": "Metadata: title, meta tags, links to stylesheets, scripts, base URL",
    "explanation": "`<head>` holds metadata about the document: `<title>`, `<meta>` tags, stylesheets and preload links, scripts, `<base>`. Its content isn't rendered as part of the page."
  },
  {
    "id": "html-144",
    "question": "Which element is required inside <head> for a valid document?",
    "theme": "HTML",
    "subCategory": "Head & metadata",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "<meta>",
      "<link>",
      "<style>",
      "<title>"
    ],
    "correctAnswer": "<title>",
    "explanation": "`<title>` is required for a valid document (except in some embedded contexts). It's shown in the tab, used by search engines, and announced first by screen readers."
  },
  {
    "id": "html-145",
    "question": "What are meta tags?",
    "theme": "HTML",
    "subCategory": "Head & metadata",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Elements that provide metadata about the document, such as charset, description, viewport",
      "Visible page headings",
      "CSS variables",
      "JavaScript modules"
    ],
    "correctAnswer": "Elements that provide metadata about the document, such as charset, description, viewport",
    "explanation": "`<meta>` elements provide document metadata that has no other element: character set, viewport, description, robots directives, theme color, social sharing data."
  },
  {
    "id": "html-146",
    "question": "What is `<meta name=\"description\">` used for?",
    "theme": "HTML",
    "subCategory": "Head & metadata",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Page ranking",
      "Social media image",
      "Screen reader page title",
      "A page summary that search engines may show in results"
    ],
    "correctAnswer": "A page summary that search engines may show in results",
    "explanation": "Search engines often use the description as the snippet under the page title in results. It doesn't affect ranking directly but influences click-through."
  },
  {
    "id": "html-147",
    "question": "What does `user-scalable=no` in the viewport meta tag cause?",
    "theme": "HTML",
    "subCategory": "Accessibility (a11y)",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Fixes layout shifts",
      "Nothing",
      "It tries to disable zooming, which hurts accessibility",
      "Better performance"
    ],
    "correctAnswer": "It tries to disable zooming, which hurts accessibility",
    "explanation": "`user-scalable=no` or `maximum-scale=1` tries to block pinch zoom, which fails WCAG for low-vision users. Many browsers now ignore it for that reason."
  },
  {
    "id": "html-148",
    "question": "What is HTML validation?",
    "theme": "HTML",
    "subCategory": "Validation",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Checking a document against the HTML specification for syntax and structure errors",
      "Checking page speed",
      "Checking form input",
      "Checking JavaScript for errors"
    ],
    "correctAnswer": "Checking a document against the HTML specification for syntax and structure errors",
    "explanation": "Validation checks markup against the HTML specification: unclosed or misnested elements, invalid attributes, forbidden children, duplicate ids, missing required elements."
  },
  {
    "id": "html-149",
    "question": "Which tool is the standard HTML validator?",
    "theme": "HTML",
    "subCategory": "Validation",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "The W3C Markup Validation Service (Nu Html Checker)",
      "ESLint",
      "Can I Use",
      "Lighthouse"
    ],
    "correctAnswer": "The W3C Markup Validation Service (Nu Html Checker)",
    "explanation": "The W3C Markup Validation Service (validator.w3.org, powered by the Nu Html Checker) is the reference validator. Editors and CI often integrate the same checker."
  },
  {
    "id": "html-150",
    "question": "In which three ways can you submit a document to the W3C validator?",
    "theme": "HTML",
    "subCategory": "Validation",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Browser extension only",
      "URL, file upload, direct input",
      "Git, FTP, email",
      "Only by URL"
    ],
    "correctAnswer": "URL, file upload, direct input",
    "explanation": "The W3C validator accepts a public URL, an uploaded file, or pasted markup. The URL option checks what the server actually sends, headers included."
  },
  {
    "id": "html-151",
    "question": "Which of these is an HTML validation error?",
    "theme": "HTML",
    "subCategory": "Validation",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Using inline styles",
      "Too many classes on an element",
      "Not using <article>",
      "<div> used as a direct child of <ul>"
    ],
    "correctAnswer": "<div> used as a direct child of <ul>",
    "explanation": "Content models are part of the spec: `<ul>` may only contain `<li>`, `script`, and `template`. Style choices like many classes or inline styles are not validation errors."
  },
  {
    "id": "html-152",
    "question": "What's the difference between errors and warnings in the W3C validator?",
    "theme": "HTML",
    "subCategory": "Validation",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "None",
      "Warnings are worse than errors",
      "Errors are spec violations; warnings flag likely problems or recommendations",
      "Errors only concern CSS"
    ],
    "correctAnswer": "Errors are spec violations; warnings flag likely problems or recommendations",
    "explanation": "Errors are spec violations. Warnings point to things that are allowed but likely mistakes or not recommended, such as an unnecessary `role` attribute or a missing `lang`."
  },
  {
    "id": "html-153",
    "question": "Why validate HTML if browsers render invalid markup anyway?",
    "theme": "HTML",
    "subCategory": "Validation",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "It's required for HTTPS",
      "Browsers refuse invalid HTML",
      "To get a predictable DOM across browsers and avoid accessibility and SEO issues",
      "It makes pages load faster"
    ],
    "correctAnswer": "To get a predictable DOM across browsers and avoid accessibility and SEO issues",
    "explanation": "Browsers repair invalid markup silently, so the DOM may differ from what you wrote. Validation catches structure bugs that affect styling, scripts, accessibility, and SEO."
  },
  {
    "id": "html-154",
    "question": "Seen as an open web platform, which building blocks make up HTML5?",
    "theme": "HTML",
    "subCategory": "HTML5 platform",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "HTML, PHP, MySQL",
      "Semantics, connectivity, offline & storage, multimedia, 2D/3D graphics, device access, performance, styling",
      "Canvas and video only",
      "Only new tags and forms"
    ],
    "correctAnswer": "Semantics, connectivity, offline & storage, multimedia, 2D/3D graphics, device access, performance, styling",
    "explanation": "HTML5 was marketed as a platform built from several technology classes: semantics, connectivity (WebSockets), offline and storage, multimedia, 2D/3D graphics, device access, performance and integration, and CSS3 styling."
  },
  {
    "id": "html-155",
    "question": "What was ApplicationCache in HTML5?",
    "theme": "HTML",
    "subCategory": "HTML5 platform",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "A way to cache JS modules",
      "A CDN feature",
      "A manifest-based offline caching mechanism, now deprecated and removed",
      "A browser memory cache"
    ],
    "correctAnswer": "A manifest-based offline caching mechanism, now deprecated and removed",
    "explanation": "ApplicationCache used a manifest file listing resources to cache for offline use. It was hard to control and buggy, so it was deprecated and removed from browsers."
  },
  {
    "id": "html-156",
    "question": "What replaced ApplicationCache?",
    "theme": "HTML",
    "subCategory": "HTML5 platform",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Service Workers with the Cache API",
      "Cookies",
      "localStorage",
      "IndexedDB alone"
    ],
    "correctAnswer": "Service Workers with the Cache API",
    "explanation": "Service Workers intercept network requests in JavaScript, and the Cache API stores responses. Together they give full programmatic control over offline behavior."
  },
  {
    "id": "html-157",
    "question": "What is semantic markup?",
    "theme": "HTML",
    "subCategory": "Semantics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Minified HTML",
      "Markup that looks good",
      "Using only <div>",
      "Using elements according to their meaning, not their appearance"
    ],
    "correctAnswer": "Using elements according to their meaning, not their appearance",
    "explanation": "Semantic markup chooses elements for what the content is (a heading, a list, navigation) rather than how it should look. Appearance belongs to CSS."
  },
  {
    "id": "html-158",
    "question": "What are the main benefits of semantic tags?",
    "theme": "HTML",
    "subCategory": "Semantics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Better accessibility, SEO, and readability of code",
      "Faster CSS",
      "No need for CSS",
      "Smaller file size"
    ],
    "correctAnswer": "Better accessibility, SEO, and readability of code",
    "explanation": "Semantic elements give assistive tech roles and landmarks, help search engines understand content, and make code easier to read and maintain, often with built-in behavior."
  },
  {
    "id": "html-159",
    "question": "What does <i> represent in HTML5?",
    "theme": "HTML",
    "subCategory": "Semantics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Text in an alternate voice, like terms, foreign words, or thoughts",
      "Important text",
      "An icon",
      "Italic emphasis that changes meaning"
    ],
    "correctAnswer": "Text in an alternate voice, like terms, foreign words, or thoughts",
    "explanation": "`<i>` marks text in an alternate voice or mood: technical terms, foreign phrases, thoughts, taxonomic names. For stress emphasis, use `<em>`."
  },
  {
    "id": "html-160",
    "question": "What are <sup> and <sub> for?",
    "theme": "HTML",
    "subCategory": "Semantics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Supporting and subtitle text",
      "Footnote links",
      "Superscript and subscript, e.g. x² and H₂O",
      "Headings levels"
    ],
    "correctAnswer": "Superscript and subscript, e.g. x² and H₂O",
    "explanation": "`<sup>` and `<sub>` are for typographic conventions that carry meaning, like exponents (x²), chemical formulas (H₂O), and footnote markers. They aren't meant for visual effects."
  },
  {
    "id": "html-161",
    "question": "Which three list types exist in HTML?",
    "theme": "HTML",
    "subCategory": "Semantics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "<ol>, <nl>, <dl>",
      "<ul>, <ol>, <dl>",
      "<ul>, <li>, <dt>",
      "<list>, <item>, <menu>"
    ],
    "correctAnswer": "<ul>, <ol>, <dl>",
    "explanation": "`<ul>` is an unordered list, `<ol>` an ordered list where sequence matters, and `<dl>` a description list of term/description pairs."
  },
  {
    "id": "html-162",
    "question": "What does the `start` attribute on <ol> do?",
    "theme": "HTML",
    "subCategory": "Semantics",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Starts the list animation",
      "Starts with bullets",
      "Sets the number the list starts counting from",
      "Marks the first item"
    ],
    "correctAnswer": "Sets the number the list starts counting from",
    "explanation": "`start` sets the first number of an ordered list (for example `start=\"5\"`). `reversed` counts down, and `type` changes the marker style (1, a, A, i, I)."
  },
  {
    "id": "html-163",
    "question": "Which elements can use the `alt` attribute?",
    "theme": "HTML",
    "subCategory": "Media & embeds",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Any element",
      "<img>, <area>, and <input type=\"image\">",
      "<img> and <video>",
      "Only <img>"
    ],
    "correctAnswer": "<img>, <area>, and <input type=\"image\">",
    "explanation": "`alt` provides alternative text for image-like content: `<img>`, `<area>` in image maps, and `<input type=\"image\">`. Other media use different mechanisms, like captions for video."
  },
  {
    "id": "html-164",
    "question": "Which input type shows a native date picker?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "datetime",
      "date",
      "calendar",
      "text"
    ],
    "correctAnswer": "date",
    "explanation": "`type=\"date\"` gives a native date picker and submits values as `YYYY-MM-DD`. `datetime` was never implemented; use `datetime-local` for date and time."
  },
  {
    "id": "html-165",
    "question": "Which input type validates email format?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "text",
      "mail",
      "email",
      "url"
    ],
    "correctAnswer": "email",
    "explanation": "`type=\"email\"` checks the value looks like an email address, shows an email-friendly keyboard on mobile, and supports `multiple` for comma-separated addresses."
  },
  {
    "id": "html-166",
    "question": "Which of these is NOT a valid input type?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "color",
      "phone",
      "search",
      "tel"
    ],
    "correctAnswer": "phone",
    "explanation": "Phone numbers use `type=\"tel\"`, which shows a numeric keypad but doesn't validate a format, since formats vary by country. There's no `type=\"phone\"`."
  },
  {
    "id": "html-167",
    "question": "What does `type=\"hidden\"` do?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Makes it a password field",
      "Isn't displayed but its value is submitted with the form",
      "Hides only on mobile",
      "Hides the input but doesn't submit it"
    ],
    "correctAnswer": "Isn't displayed but its value is submitted with the form",
    "explanation": "Hidden inputs aren't rendered but are submitted with the form, for example IDs or CSRF tokens. Users can still see and change them in DevTools, so never trust them."
  },
  {
    "id": "html-168",
    "question": "What does `<input type=\"range\">` render?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "A text box for numbers",
      "A slider for picking an approximate number",
      "A date range picker",
      "Two inputs"
    ],
    "correctAnswer": "A slider for picking an approximate number",
    "explanation": "`type=\"range\"` renders a slider for choosing a number within `min`/`max`/`step` where precision doesn't matter much, like volume. Show the value next to it."
  },
  {
    "id": "html-169",
    "question": "What is the <output> element for?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Logging to the console",
      "Showing the result of a calculation or user action",
      "Printing the page",
      "Form submit results from the server"
    ],
    "correctAnswer": "Showing the result of a calculation or user action",
    "explanation": "`<output>` holds the result of a calculation or user action, and many screen readers announce its updates like a polite live region."
  },
  {
    "id": "html-170",
    "question": "What does the `for` attribute on <output> contain?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "A JS function",
      "A URL",
      "Ids of the elements that contributed to the result",
      "A form name"
    ],
    "correctAnswer": "Ids of the elements that contributed to the result",
    "explanation": "`for` lists the ids of the elements that contributed to the result (for example `for=\"a b\"`), documenting the relationship for assistive tech."
  },
  {
    "id": "html-171",
    "question": "What does the `novalidate` attribute on <form> do?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Disables submission",
      "Removes required fields",
      "Turns off the browser's built-in validation when submitting",
      "Validates on the server only"
    ],
    "correctAnswer": "Turns off the browser's built-in validation when submitting",
    "explanation": "`novalidate` turns off the browser's built-in validation UI on submit. It's common when you handle validation in JavaScript but still want semantic input types."
  },
  {
    "id": "html-172",
    "question": "What does `formnovalidate` on a submit button do?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Validates only that button",
      "Resets the form",
      "Disables the button",
      "Skips built-in validation only when that button submits the form"
    ],
    "correctAnswer": "Skips built-in validation only when that button submits the form",
    "explanation": "`formnovalidate` skips validation only when that button is used, for example 'Save draft' on an incomplete form, while 'Submit' still validates."
  },
  {
    "id": "html-173",
    "question": "What does the `pattern` attribute do?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Adds a background pattern",
      "Masks input as you type",
      "Specifies a regular expression the whole value must match",
      "Formats the value"
    ],
    "correctAnswer": "Specifies a regular expression the whole value must match",
    "explanation": "`pattern` is a regular expression that the entire value must match: it's implicitly anchored with `^(?:...)$`. Use `title` or a visible hint to explain the format."
  },
  {
    "id": "html-174",
    "question": "On which input type is `pattern` ignored?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "tel",
      "text",
      "number",
      "email"
    ],
    "correctAnswer": "number",
    "explanation": "`pattern` applies to text-like inputs: `text`, `tel`, `email`, `url`, `password`, `search`. It's ignored on `number`, which uses `min`, `max`, and `step`."
  },
  {
    "id": "html-175",
    "question": "What does the `capture` attribute on <input type=\"file\"> do?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Hints that the device should capture new media with its camera or microphone",
      "Uploads automatically",
      "Takes a screenshot",
      "Captures form data"
    ],
    "correctAnswer": "Hints that the device should capture new media with its camera or microphone",
    "explanation": "On mobile, `capture` on a file input with `accept=\"image/*\"` (or video or audio) opens the camera or microphone directly instead of the file picker."
  },
  {
    "id": "html-176",
    "question": "What does `capture=\"environment\"` request?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "The front camera",
      "Screen recording",
      "The rear (outward-facing) camera",
      "Microphone"
    ],
    "correctAnswer": "The rear (outward-facing) camera",
    "explanation": "`capture=\"environment\"` asks for the outward-facing (rear) camera, for example to scan documents. `capture=\"user\"` asks for the front camera."
  },
  {
    "id": "html-177",
    "question": "What does `autocomplete=\"off\"` ask the browser to do?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Disable spellcheck",
      "Disable validation",
      "Clear the field",
      "Not to autofill the field (some password managers may ignore it)"
    ],
    "correctAnswer": "Not to autofill the field (some password managers may ignore it)",
    "explanation": "`autocomplete=\"off\"` asks the browser not to autofill or remember the field. Browsers and password managers often ignore it on login fields, so use precise tokens instead."
  },
  {
    "id": "html-178",
    "question": "What does `autocomplete=\"new-password\"` signal?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "A password manager should suggest a new password rather than fill a saved one",
      "The field is optional",
      "Hide the password",
      "The password must be changed"
    ],
    "correctAnswer": "A password manager should suggest a new password rather than fill a saved one",
    "explanation": "`new-password` tells password managers this is a sign-up or change-password field, so they offer to generate a strong password instead of filling the saved one."
  },
  {
    "id": "html-179",
    "question": "What does a form's `action` attribute specify?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "The validation rules",
      "The URL where form data is sent",
      "The JS handler",
      "The HTTP method"
    ],
    "correctAnswer": "The URL where form data is sent",
    "explanation": "`action` is the URL that receives the submitted data. `method` chooses GET or POST, and `enctype` chooses the encoding."
  },
  {
    "id": "html-180",
    "question": "If `method` and `action` are omitted, how does a form submit?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "GET to the current page URL",
      "It doesn't submit",
      "POST to /submit",
      "POST to the current page URL"
    ],
    "correctAnswer": "GET to the current page URL",
    "explanation": "The defaults are `method=\"get\"` and `action` set to the current document's URL, so the form reloads the same page with the data in the query string."
  },
  {
    "id": "html-181",
    "question": "Why is the `name` attribute important on form controls?",
    "theme": "HTML",
    "subCategory": "Forms",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "For accessibility only",
      "For styling",
      "It sets the label",
      "Controls without a name aren't included in the submitted data"
    ],
    "correctAnswer": "Controls without a name aren't included in the submitted data",
    "explanation": "Submitted data is built from `name`/`value` pairs. A control without `name` is never sent, even if it has an `id`."
  },
  {
    "id": "html-182",
    "question": "What does `target=\"_blank\"` do?",
    "theme": "HTML",
    "subCategory": "Links & resource hints",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "Opens the link in the same tab",
      "Opens the link in a new tab or window",
      "Opens in the parent frame",
      "Opens in a blank iframe"
    ],
    "correctAnswer": "Opens the link in a new tab or window",
    "explanation": "`target=\"_blank\"` opens the link in a new browsing context, usually a new tab. Modern browsers apply `noopener` to it automatically."
  },
  {
    "id": "html-183",
    "question": "What is the default value of `target`?",
    "theme": "HTML",
    "subCategory": "Links & resource hints",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "_top",
      "_self",
      "_blank",
      "_parent"
    ],
    "correctAnswer": "_self",
    "explanation": "Without `target` (or a `<base target>`), links open in the same browsing context, which is `_self`."
  },
  {
    "id": "html-184",
    "question": "What does `target=\"_top\"` do?",
    "theme": "HTML",
    "subCategory": "Links & resource hints",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Opens in a new tab",
      "Opens in the parent frame",
      "Loads the link in the top-level window, breaking out of all frames",
      "Scrolls to the top"
    ],
    "correctAnswer": "Loads the link in the top-level window, breaking out of all frames",
    "explanation": "`_top` loads the link in the topmost window, escaping all nested frames. `_parent` goes only one level up."
  },
  {
    "id": "html-185",
    "question": "What does `target=\"myFrame\"` do?",
    "theme": "HTML",
    "subCategory": "Links & resource hints",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Opens a modal",
      "Opens the link in the iframe or window named myFrame",
      "Nothing",
      "Creates a frame"
    ],
    "correctAnswer": "Opens the link in the iframe or window named myFrame",
    "explanation": "A custom target name opens the link in the iframe or window with that `name`. If none exists, the browser opens a new window or tab with that name."
  },
  {
    "id": "html-186",
    "question": "What does `<link rel=\"dns-prefetch\">` do?",
    "theme": "HTML",
    "subCategory": "Links & resource hints",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Preloads fonts",
      "Downloads the page",
      "Caches the page",
      "Resolves a domain's DNS early"
    ],
    "correctAnswer": "Resolves a domain's DNS early",
    "explanation": "`dns-prefetch` only resolves the domain name early. It's cheaper than `preconnect` and works as a fallback in browsers without preconnect support."
  },
  {
    "id": "html-187",
    "question": "What is an <iframe>?",
    "theme": "HTML",
    "subCategory": "Media & embeds",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "An element that embeds another HTML page in a nested browsing context",
      "A form element",
      "An image frame",
      "A video player"
    ],
    "correctAnswer": "An element that embeds another HTML page in a nested browsing context",
    "explanation": "An iframe embeds another document in a nested browsing context with its own window, history, and JavaScript environment, for example maps, videos, or third-party widgets."
  },
  {
    "id": "html-188",
    "question": "What does the iframe `allow` attribute control?",
    "theme": "HTML",
    "subCategory": "Media & embeds",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Allowed URLs",
      "Cookie access",
      "Allowed scripts",
      "Which features (camera, fullscreen, etc.) the embedded page may use"
    ],
    "correctAnswer": "Which features (camera, fullscreen, etc.) the embedded page may use",
    "explanation": "`allow` sets the Permissions Policy for the frame, such as `allow=\"camera; fullscreen\"`, so the embedded page can only use the powerful features you grant."
  },
  {
    "id": "html-189",
    "question": "What does the iframe `srcdoc` attribute do?",
    "theme": "HTML",
    "subCategory": "Media & embeds",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Links documentation",
      "Loads a PDF",
      "Provides inline HTML content for the frame",
      "Sets the source domain"
    ],
    "correctAnswer": "Provides inline HTML content for the frame",
    "explanation": "`srcdoc` provides the frame's HTML directly as an attribute and overrides `src`. Combined with `sandbox` it's useful for previews of untrusted content."
  },
  {
    "id": "html-190",
    "question": "What does <tr> represent?",
    "theme": "HTML",
    "subCategory": "Tables",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "A table title",
      "A table header",
      "A table cell",
      "A table row"
    ],
    "correctAnswer": "A table row",
    "explanation": "`<tr>` is a table row. It contains cells: `<td>` for data and `<th>` for headers."
  },
  {
    "id": "html-191",
    "question": "What's the difference between <th> and <td>?",
    "theme": "HTML",
    "subCategory": "Tables",
    "level": "easy",
    "fourOptionsForAnAnswer": [
      "None",
      "<th> is a header cell; <td> is a data cell",
      "<td> is a header cell",
      "<th> is a row"
    ],
    "correctAnswer": "<th> is a header cell; <td> is a data cell",
    "explanation": "`<th>` is a header cell (bold and centered by default) that labels a row or column. `<td>` holds data. Screen readers announce the header together with each data cell."
  },
  {
    "id": "html-192",
    "question": "What does `colspan=\"2\"` do?",
    "theme": "HTML",
    "subCategory": "Tables",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Makes a cell span two columns",
      "Creates two columns",
      "Makes two rows",
      "Doubles cell width in pixels"
    ],
    "correctAnswer": "Makes a cell span two columns",
    "explanation": "`colspan` makes a cell stretch across several columns. `rowspan` does the same vertically."
  },
  {
    "id": "html-193",
    "question": "Where must <caption> be placed?",
    "theme": "HTML",
    "subCategory": "Tables",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Anywhere in the table",
      "Inside <thead>",
      "After </table>",
      "As the first child of <table>"
    ],
    "correctAnswer": "As the first child of <table>",
    "explanation": "`<caption>` must be the first child of `<table>`. It titles the table and becomes its accessible name."
  },
  {
    "id": "html-194",
    "question": "What are <colgroup> and <col> used for?",
    "theme": "HTML",
    "subCategory": "Tables",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Merging columns",
      "Sorting columns",
      "Grouping rows",
      "Applying attributes or styles to whole columns"
    ],
    "correctAnswer": "Applying attributes or styles to whole columns",
    "explanation": "`<colgroup>` and `<col>` let you apply widths and a few styles (background, border, width, visibility) to entire columns without touching each cell."
  },
  {
    "id": "html-195",
    "question": "What does the parser do if <tr> is placed directly inside <table>?",
    "theme": "HTML",
    "subCategory": "Tables",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Inserts a <tbody> automatically",
      "Wraps it in <thead>",
      "Throws an error",
      "Ignores the row"
    ],
    "correctAnswer": "Inserts a <tbody> automatically",
    "explanation": "The HTML parser always inserts an implicit `<tbody>` around rows placed directly in a table. That's why a selector like `table > tr` doesn't match."
  },
  {
    "id": "html-196",
    "question": "What is special about <thead> and <tfoot> when printing a long table?",
    "theme": "HTML",
    "subCategory": "Tables",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Browsers may repeat them on each printed page",
      "They're hidden",
      "They print first",
      "Nothing"
    ],
    "correctAnswer": "Browsers may repeat them on each printed page",
    "explanation": "`<thead>` and `<tfoot>` mark header and footer row groups. Browsers can repeat them on every printed page so long tables stay readable."
  },
  {
    "id": "html-197",
    "question": "Which HTML technique improves page performance?",
    "theme": "HTML",
    "subCategory": "Loading & performance",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "Using tables for layout",
      "Many blocking scripts in <head>",
      "Removing the doctype",
      "Lazy-loading below-the-fold images"
    ],
    "correctAnswer": "Lazy-loading below-the-fold images",
    "explanation": "`loading=\"lazy\"` defers off-screen images until they're needed, saving bandwidth and speeding up the initial load. The other options make performance worse or break rendering."
  },
  {
    "id": "html-198",
    "question": "Why does a very large DOM hurt performance?",
    "theme": "HTML",
    "subCategory": "Loading & performance",
    "level": "medium",
    "fourOptionsForAnAnswer": [
      "It blocks the preload scanner",
      "It increases download size only",
      "It raises memory use and the cost of style calculation and layout",
      "It disables caching"
    ],
    "correctAnswer": "It raises memory use and the cost of style calculation and layout",
    "explanation": "Every DOM node costs memory, and style recalculation and layout scale with the number of nodes affected. Huge DOMs make interactions (INP) slower."
  }
];
