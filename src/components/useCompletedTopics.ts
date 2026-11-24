import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'tr-grammar-completed-topics';
const SYNC_EVENT = 'tr-grammar-completed-sync';

function readCompletedIdsFromStorage(): Set<string> {
  if (typeof window === 'undefined') {
    return new Set<string>();
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return new Set<string>();
    }
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return new Set<string>();
    }
    const ids = parsed.filter((item): item is string => typeof item === 'string');
    return new Set<string>(ids);
  } catch {
    return new Set<string>();
  }
}

function writeCompletedIdsToStorage(ids: Set<string>): void {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(ids)));
    window.dispatchEvent(new Event(SYNC_EVENT));
  } catch {
    // Ignore storage quota or private mode errors
  }
}

export interface UseCompletedTopicsResult {
  completedIds: Set<string>;
  markCompleted: (topicId: string) => void;
  resetCompleted: (topicId: string) => void;
  isCompleted: (topicId: string) => boolean;
}

export function useCompletedTopics(): UseCompletedTopicsResult {
  const [completedIds, setCompletedIds] = useState<Set<string>>(() =>
    readCompletedIdsFromStorage()
  );

  useEffect(() => {
    const sync = () => {
      setCompletedIds(readCompletedIdsFromStorage());
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY || event.key === null) {
        sync();
      }
    };

    window.addEventListener(SYNC_EVENT, sync);
    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener(SYNC_EVENT, sync);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  const markCompleted = useCallback((topicId: string) => {
    const next = readCompletedIdsFromStorage();
    if (next.has(topicId)) {
      return;
    }
    next.add(topicId);
    writeCompletedIdsToStorage(next);
    setCompletedIds(next);
  }, []);

  const resetCompleted = useCallback((topicId: string) => {
    const next = readCompletedIdsFromStorage();
    if (!next.has(topicId)) {
      return;
    }
    next.delete(topicId);
    writeCompletedIdsToStorage(next);
    setCompletedIds(next);
  }, []);

  const isCompleted = useCallback(
    (topicId: string) => completedIds.has(topicId),
    [completedIds]
  );

  return {
    completedIds,
    markCompleted,
    resetCompleted,
    isCompleted,
  };
}
