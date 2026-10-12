import { Fragment } from 'react';

/** Renders text where `backticks` mark inline code. */
export function InlineText({ text }: { text: string }) {
  const parts = text.split(/(`[^`]+`)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.length > 2 && part.startsWith('`') && part.endsWith('`') ? (
          <code key={i}>{part.slice(1, -1)}</code>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

/** A question's prose, plus a code block when the question contains one (after a blank line). */
export function QuestionText({ text, compact = false }: { text: string; compact?: boolean }) {
  const split = text.indexOf('\n\n');
  const prose = split === -1 ? text : text.slice(0, split);
  const code = split === -1 ? null : text.slice(split + 2);
  return (
    <>
      <p className={compact ? 'qtext qtext--compact' : 'qtext'}>
        <InlineText text={prose} />
      </p>
      {code && (
        <pre>
          <code>{code}</code>
        </pre>
      )}
    </>
  );
}
