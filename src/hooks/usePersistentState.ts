import { useEffect, useState } from 'react';
import { readJson, writeJson } from '../lib/storage';

/** useState that is saved to localStorage. `sanitize` repairs or rejects stale saved values. */
export function usePersistentState<T>(key: string, sanitize: (saved: unknown) => T) {
  const [value, setValue] = useState<T>(() => sanitize(readJson<unknown>(key, null)));
  useEffect(() => writeJson(key, value), [key, value]);
  return [value, setValue] as const;
}
