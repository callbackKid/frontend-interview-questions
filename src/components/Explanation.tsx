import { InlineText } from './Text';

interface Props {
  id: string;
  text: string;
  open: boolean;
  onToggle: () => void;
}

/** "Show explanation" toggle, available once the question is answered. */
export function Explanation({ id, text, open, onToggle }: Props) {
  const regionId = `explanation-${id}`;
  return (
    <div className="explanation">
      <button
        type="button"
        className="explanation__toggle"
        aria-expanded={open}
        aria-controls={regionId}
        onClick={onToggle}
      >
        <span className="explanation__chevron" aria-hidden="true" />
        {open ? 'Hide explanation' : 'Show explanation'}
        <kbd aria-hidden="true">E</kbd>
      </button>
      <div id={regionId} className="explanation__body" hidden={!open}>
        <p>
          <InlineText text={text} />
        </p>
      </div>
    </div>
  );
}
