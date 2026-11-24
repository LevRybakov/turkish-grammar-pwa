import { useCallback, useEffect, useState } from 'react';

export const COMPLETED_STORAGE_KEY = 'tr-grammar-completed-topics';
export const COMPLETED_SYNC_EVENT = 'tr-grammar-completed-sync';
export const COMPLETED_USER_MUTATION_EVENT = 'tr-grammar-completed-user-mutation';

const VALID_TOPIC_ID_RE = /^[a-zA-Z0-9_-]+$/;

export function sanitizeCompletedTopicIds(ids: Iterable<string>): string[] {
  const unique = new Set<string>();
  for (const id of ids) {
    if (typeof id === 'string' && VALID_TOPIC_ID_RE.test(id)) {
      unique.add(id);
      if (unique.size >= 200) {
        break;
      }
    }
  }
  return Array.from(unique);
}

export function readCompletedIdsFromStorage(): Set<string> {
  if (typeof window === 'undefined') {
    return new Set<string>();
  }
  try {
    const raw = window.localStorage.getItem(COMPLETED_STORAGE_KEY);
    if (!raw) {
      return new Set<string>();
    }
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return new Set<string>();
    }
    const ids = sanitizeCompletedTopicIds(
      parsed.filter((item): item is string => typeof item === 'string')
    );
    return new Set<string>(ids);
  } catch {
    return new Set<string>();
  }
}

export function writeCompletedIdsToStorage(
  ids: Set<string>,
  options?: { fromCloud?: boolean }
): void {
  if (typeof window === 'undefined') {
    return;
  }
  const cleanList = sanitizeCompletedTopicIds(ids);
  try {
    window.localStorage.setItem(
      COMPLETED_STORAGE_KEY,
      JSON.stringify(cleanList)
    );
    window.dispatchEvent(new Event(COMPLETED_SYNC_EVENT));
    if (!options?.fromCloud) {
      window.dispatchEvent(
        new CustomEvent<string[]>(COMPLETED_USER_MUTATION_EVENT, {
          detail: cleanList,
        })
      );
    }
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
      if (event.key === COMPLETED_STORAGE_KEY || event.key === null) {
        sync();
      }
    };

    window.addEventListener(COMPLETED_SYNC_EVENT, sync);
    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener(COMPLETED_SYNC_EVENT, sync);
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
