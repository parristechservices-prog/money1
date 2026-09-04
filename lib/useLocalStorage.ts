'use client';

import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    const stored = window.localStorage.getItem(key);
    if (!stored) return;

    try {
      const restoredValue = JSON.parse(stored) as T;
      let cancelled = false;

      queueMicrotask(() => {
        if (!cancelled) setValue(restoredValue);
      });

      return () => {
        cancelled = true;
      };
    } catch {
      // Keep the supplied initial value when persisted data is malformed.
    }
  }, [initialValue, key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
