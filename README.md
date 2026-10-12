# Interview drill

A quiz app for frontend interview prep: HTML, CSS and JavaScript (Promises), 428 questions.
React 18 + TypeScript + Vite. Everything runs locally; there is no backend and no AI call.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

## How it works

1. **Setup**: pick topics (and their subtopics), one or more levels (easy, medium, hard),
   the format (test or open question) and the number of questions. Settings are saved in localStorage.
2. **Selection** (`src/lib/selection.ts`): the requested count is split across topics in proportion to
   how many questions match in each, then inside each topic across its subtopics, using the largest
   remainder method (`allocate`). Questions are picked at random within each bucket, the final list is
   shuffled, and the four options are shuffled again for every session.
3. **Test mode**: clicking an option (or pressing 1–4 / A–D) checks it against `correctAnswer`
   and highlights the right answer immediately.
4. **Open mode**: type an answer and press "Check answer" (or Ctrl+Enter). `checkOpenAnswer` in
   `src/lib/check.ts` compares it with the right answer offline:
   - sequence answers such as `1 4 3 2` are compared token by token, in order;
   - yes/no answers with the opposite polarity are marked as not matching;
   - otherwise it counts how many key terms of the right answer appear in yours (stop words removed,
     loose matching so "rejects" matches "rejected").
   The result pre-selects "Got it" or "Missed it", and you confirm or change it.
   Leave the box empty to just reveal the answer and mark yourself.
5. **Explanation**: after answering, "Show explanation" (or the E key) toggles the question's
   `explanation` field.
6. **Results**: score, score by topic, weakest subtopics, and every missed question with its
   explanation. "Retake the missed" starts a test with only those questions.

## Project structure

```
src/
  data/                 question bank (one file per topic) + types
    types.ts            QuizQuestion, Level, subcategory lists
    html.ts css.ts promises.ts
    index.ts            ALL_QUESTIONS
  config/themes.ts      topics shown on the setup screen
  lib/
    selection.ts        proportional selection, session creation
    check.ts            answer checking (test and open modes)
    settings.ts         default settings + validation of saved settings
    storage.ts random.ts
  hooks/usePersistentState.ts
  components/           SetupScreen, QuizScreen, TestOptions, OpenAnswer, Explanation, ResultsScreen, Text
  App.tsx               screen flow and session state
  styles.css
```

## Question format

```ts
{
  id: 'css-042',
  question: 'Why does a flex item with long text overflow, and how is it fixed?',
  theme: 'CSS',
  subCategory: 'Flexbox',
  level: 'medium',
  fourOptionsForAnAnswer: ['…', '…', '…', '…'],
  correctAnswer: '…',      // must equal one of the four options
  explanation: '…',        // shown after answering
}
```

- Text between backticks is rendered as inline code.
- In `question`, everything after the first blank line (`\n\n`) is rendered as a code block.
- To add a question, append an object to the topic's file with a new unique `id`.
- To add a subcategory, add it to the topic's list in `data/types.ts`; TypeScript then accepts it in
  `subCategory`.
- To add a topic: create a data file, extend the `Theme` union and the `QuizQuestion` union in
  `data/types.ts`, export it from `data/index.ts`, and add an entry to `config/themes.ts`.
