import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  type User,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  onSnapshot,
  serverTimestamp,
  setDoc,
  type Unsubscribe,
} from 'firebase/firestore';
import { auth, db, googleProvider, isFirebaseConfigured } from '../lib/firebase';
import {
  COMPLETED_USER_MUTATION_EVENT,
  readCompletedIdsFromStorage,
  sanitizeCompletedTopicIds,
  writeCompletedIdsToStorage,
} from './useCompletedTopics';

export type SyncStatus = 'idle' | 'syncing' | 'synced' | 'error';

export interface AuthContextValue {
  user: User | null;
  loading: boolean;
  isConfigured: boolean;
  syncStatus: SyncStatus;
  syncError: string | null;
  retrySync: () => void;
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  sendPasswordReset: (email: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function extractFirebaseErrorCode(error: unknown): string {
  if (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    typeof (error as { code: unknown }).code === 'string'
  ) {
    return (error as { code: string }).code;
  }
  return '';
}

function formatFirestoreSyncError(error: unknown): string {
  const code = extractFirebaseErrorCode(error);
  switch (code) {
    case 'permission-denied':
      return 'Нет прав доступа (проверьте firestore.rules)';
    case 'not-found':
      return 'База Firestore не найдена';
    case 'unavailable':
      return 'Нет связи с Firestore (офлайн)';
    case 'failed-precondition':
      return 'База Firestore не готова';
    case 'unauthenticated':
      return 'Сессия истекла — войдите снова';
    default:
      return code ? `Ошибка синхронизации (${code})` : 'Офлайн-режим';
  }
}

export function formatFirebaseAuthError(error: unknown): string {
  const code = extractFirebaseErrorCode(error);

  switch (code) {
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'Неверный email или пароль. Проверьте данные и попробуйте снова.';
    case 'auth/email-already-in-use':
      return 'Пользователь с таким email уже зарегистрирован. Попробуйте войти.';
    case 'auth/weak-password':
      return 'Пароль слишком короткий — используйте минимум 6 символов.';
    case 'auth/invalid-email':
      return 'Укажите корректный адрес электронной почты.';
    case 'auth/popup-closed-by-user':
      return 'Окно входа через Google было закрыто до завершения.';
    case 'auth/popup-blocked':
      return 'Браузер заблокировал всплывающее окно Google. Разрешите pop-up для этого сайта.';
    case 'auth/unauthorized-domain':
      return 'Этот домен ещё не добавлен в Authorized Domains в настройках Firebase Authentication.';
    case 'auth/too-many-requests':
      return 'Слишком много попыток входа. Подождите немного и попробуйте снова.';
    case 'auth/network-request-failed':
      return 'Нет подключения к сети. Вы можете продолжить учиться офлайн — прогресс сохранится локально.';
    case 'auth/operation-not-allowed':
      return 'Этот способ входа ещё не включён в консоли Firebase (Authentication -> Sign-in method).';
    default:
      return 'Не удалось выполнить авторизацию. Попробуйте ещё раз.';
  }
}

function extractRemoteTopics(data: Record<string, unknown> | undefined): string[] {
  if (!data || !Array.isArray(data.completedTopics)) {
    return [];
  }
  return sanitizeCompletedTopicIds(
    data.completedTopics.filter((item): item is string => typeof item === 'string')
  );
}

function areSetsEqual(a: Set<string>, b: Set<string>): boolean {
  if (a.size !== b.size) {
    return false;
  }
  for (const item of a) {
    if (!b.has(item)) {
      return false;
    }
  }
  return true;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(isFirebaseConfigured);
  const [syncStatus, setSyncStatus] = useState<SyncStatus>('idle');
  const [syncError, setSyncError] = useState<string | null>(null);
  const [syncAttempt, setSyncAttempt] = useState<number>(0);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  const userRef = useRef<User | null>(null);
  userRef.current = user;

  // Observe Firebase Auth state
  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setLoading(false);
      if (!nextUser) {
        setSyncStatus('idle');
        setSyncError(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Merge local + cloud progress on sign-in and subscribe to real-time updates
  useEffect(() => {
    if (!user || !db) {
      return;
    }

    const firestore = db;
    const progressDocRef = doc(firestore, 'userProgress', user.uid);
    let cancelled = false;
    let unsubscribeSnapshot: Unsubscribe | null = null;

    const initSync = async () => {
      setSyncStatus('syncing');
      setSyncError(null);
      try {
        const localIds = readCompletedIdsFromStorage();
        const snap = await getDoc(progressDocRef);
        if (cancelled) {
          return;
        }

        const remoteList = snap.exists()
          ? extractRemoteTopics(snap.data() as Record<string, unknown>)
          : [];
        const remoteSet = new Set<string>(remoteList);
        const mergedSet = new Set<string>([...localIds, ...remoteSet]);

        if (!areSetsEqual(localIds, mergedSet)) {
          writeCompletedIdsToStorage(mergedSet, { fromCloud: true });
        }

        if (!snap.exists() || !areSetsEqual(remoteSet, mergedSet)) {
          await setDoc(progressDocRef, {
            completedTopics: sanitizeCompletedTopicIds(mergedSet),
            updatedAt: serverTimestamp(),
          });
        }

        if (cancelled) {
          return;
        }
        setSyncStatus('synced');
        setSyncError(null);

        unsubscribeSnapshot = onSnapshot(
          progressDocRef,
          (liveSnap) => {
            if (!liveSnap.exists()) {
              return;
            }
            const nextRemote = new Set<string>(
              extractRemoteTopics(liveSnap.data() as Record<string, unknown>)
            );
            const currentLocal = readCompletedIdsFromStorage();
            if (!areSetsEqual(currentLocal, nextRemote)) {
              writeCompletedIdsToStorage(nextRemote, { fromCloud: true });
            }
            setSyncStatus('synced');
            setSyncError(null);
          },
          (err) => {
            console.error('[Firestore onSnapshot error]', err);
            setSyncStatus('error');
            setSyncError(formatFirestoreSyncError(err));
          }
        );
      } catch (err) {
        console.error('[Firestore initSync error]', err);
        if (!cancelled) {
          setSyncStatus('error');
          setSyncError(formatFirestoreSyncError(err));
        }
      }
    };

    void initSync();

    return () => {
      cancelled = true;
      if (unsubscribeSnapshot) {
        unsubscribeSnapshot();
      }
    };
  }, [user, syncAttempt]);

  // Push local completed-topic mutations to Firestore when signed in
  useEffect(() => {
    if (!db) {
      return;
    }
    const firestore = db;

    const handleUserMutation = (event: Event) => {
      const currentUser = userRef.current;
      if (!currentUser) {
        return;
      }

      const customEvent = event as CustomEvent<string[]>;
      const topics = Array.isArray(customEvent.detail)
        ? sanitizeCompletedTopicIds(customEvent.detail)
        : sanitizeCompletedTopicIds(readCompletedIdsFromStorage());

      setSyncStatus('syncing');
      setSyncError(null);
      const progressDocRef = doc(firestore, 'userProgress', currentUser.uid);
      void setDoc(progressDocRef, {
        completedTopics: topics,
        updatedAt: serverTimestamp(),
      })
        .then(() => {
          setSyncStatus('synced');
          setSyncError(null);
        })
        .catch((err: unknown) => {
          console.error('[Firestore setDoc error]', err);
          setSyncStatus('error');
          setSyncError(formatFirestoreSyncError(err));
        });
    };

    window.addEventListener(COMPLETED_USER_MUTATION_EVENT, handleUserMutation);
    return () => {
      window.removeEventListener(
        COMPLETED_USER_MUTATION_EVENT,
        handleUserMutation
      );
    };
  }, []);

  const retrySync = useCallback(() => {
    setSyncAttempt((prev) => prev + 1);
  }, []);

  const openAuthModal = useCallback(() => setIsAuthModalOpen(true), []);
  const closeAuthModal = useCallback(() => setIsAuthModalOpen(false), []);

  const signInWithEmail = useCallback(async (email: string, password: string) => {
    if (!auth) {
      throw new Error('Firebase не настроен');
    }
    await signInWithEmailAndPassword(auth, email.trim(), password);
    setIsAuthModalOpen(false);
  }, []);

  const signUpWithEmail = useCallback(async (email: string, password: string) => {
    if (!auth) {
      throw new Error('Firebase не настроен');
    }
    await createUserWithEmailAndPassword(auth, email.trim(), password);
    setIsAuthModalOpen(false);
  }, []);

  const signInWithGoogle = useCallback(async () => {
    if (!auth) {
      throw new Error('Firebase не настроен');
    }
    await signInWithPopup(auth, googleProvider);
    setIsAuthModalOpen(false);
  }, []);

  const sendPasswordReset = useCallback(async (email: string) => {
    if (!auth) {
      throw new Error('Firebase не настроен');
    }
    await sendPasswordResetEmail(auth, email.trim());
  }, []);

  const logout = useCallback(async () => {
    if (!auth) {
      return;
    }
    await signOut(auth);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isConfigured: isFirebaseConfigured,
        syncStatus,
        syncError,
        retrySync,
        isAuthModalOpen,
        openAuthModal,
        closeAuthModal,
        signInWithEmail,
        signUpWithEmail,
        signInWithGoogle,
        sendPasswordReset,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return ctx;
}
