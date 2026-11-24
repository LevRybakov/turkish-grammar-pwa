import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Cloud,
  CloudOff,
  Compass,
  GitBranch,
  Home,
  Layers,
  Loader2,
  LogIn,
  LogOut,
  Menu,
  Moon,
  RotateCcw,
  Search,
  Sun,
  Table2,
  User as UserIcon,
  X,
} from 'lucide-react';
import { ALL_TOPIC_META, SECTIONS } from '../data';
import { CEFR_LEVEL_COLORS } from '../constants/morphemeColors';
import type { CEFRLevel, Section, TopicMeta } from '../types/grammar';
import { useAuth } from './AuthContext';
import { GlobalSearchModal } from './GlobalSearchModal';
import { useCompletedTopics } from './useCompletedTopics';
import { useTheme } from './useTheme';

const ALL_LEVELS: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1'];

interface SearchModalContextValue {
  openSearch: (initialQuery?: string) => void;
}

const SearchModalContext = createContext<SearchModalContextValue>({
  openSearch: () => {},
});

export function useSearchModal(): SearchModalContextValue {
  return useContext(SearchModalContext);
}

interface LayoutProps {
  children?: ReactNode;
}

function topicMatchesLevels(topic: TopicMeta, selectedLevels: Set<CEFRLevel>): boolean {
  if (selectedLevels.size === 0) {
    return true;
  }
  if (selectedLevels.has(topic.level)) {
    return true;
  }
  return (topic.levels ?? []).some((lvl) => selectedLevels.has(lvl));
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const { topicId } = useParams<{ topicId?: string }>();
  const { isDark, toggleTheme } = useTheme();
  const { completedIds, isCompleted } = useCompletedTopics();
  const { user, loading: authLoading, syncStatus, openAuthModal, logout } =
    useAuth();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchInitialQuery, setSearchInitialQuery] = useState('');
  const [selectedLevels, setSelectedLevels] = useState<Set<CEFRLevel>>(
    () => new Set<CEFRLevel>()
  );

  const sortedSections = useMemo<Section[]>(
    () => [...SECTIONS].sort((a, b) => a.order - b.order),
    []
  );

  const [expandedSections, setExpandedSections] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    if (sortedSections[0]) {
      initial.add(sortedSections[0].id);
    }
    return initial;
  });

  // Auto-expand the section containing the active topic
  useEffect(() => {
    if (!topicId) {
      return;
    }
    const owner = sortedSections.find((sec) =>
      sec.topics.some((t) => t.id === topicId)
    );
    if (owner) {
      setExpandedSections((prev) => {
        if (prev.has(owner.id)) {
          return prev;
        }
        const next = new Set(prev);
        next.add(owner.id);
        return next;
      });
    }
  }, [topicId, sortedSections]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  // Global Cmd/Ctrl + K shortcut
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearchInitialQuery('');
        setSearchOpen((prev) => !prev);
      } else if (event.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const openSearch = useCallback((initialQuery = '') => {
    setSearchInitialQuery(initialQuery);
    setSearchOpen(true);
  }, []);

  const toggleLevel = (level: CEFRLevel) => {
    setSelectedLevels((prev) => {
      const next = new Set(prev);
      if (next.has(level)) {
        next.delete(level);
      } else {
        next.add(level);
      }
      return next;
    });
  };

  const resetLevels = () => {
    setSelectedLevels(new Set<CEFRLevel>());
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  };

  const totalTopics = ALL_TOPIC_META.length;
  const completedCount = useMemo(
    () => ALL_TOPIC_META.filter((t) => completedIds.has(t.id)).length,
    [completedIds]
  );
  const progressPct =
    totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  const sidebarContent = (
    <div className="flex h-full flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800">
      {/* Brand header */}
      <div className="flex items-center justify-between gap-2 px-4 py-4 border-b border-slate-200 dark:border-slate-800">
        <Link
          to="/"
          className="flex items-center gap-2.5 min-w-0 group"
          onClick={() => setMobileOpen(false)}
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-sm shadow-sm group-hover:bg-blue-700 transition-colors">
            TR
          </span>
          <div className="min-w-0">
            <div className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
              Турецкая грамматика
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
              Справочник A1–C1
            </div>
          </div>
        </Link>
        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          aria-label="Закрыть меню"
          className="lg:hidden rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Scrollable sidebar body */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
        {/* Progress bar */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/50 p-3">
          <div className="flex items-center justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
            <span>Прогресс по темам</span>
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              {completedCount} / {totalTopics}
            </span>
          </div>
          <div className="mt-2 h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full rounded-full bg-emerald-500 transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className="mt-2.5 flex items-center justify-between gap-2 text-[11px]">
            {user ? (
              <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400 truncate">
                {syncStatus === 'syncing' ? (
                  <>
                    <Loader2 className="h-3 w-3 animate-spin text-blue-500 shrink-0" />
                    <span>Синхронизация...</span>
                  </>
                ) : syncStatus === 'error' ? (
                  <>
                    <CloudOff className="h-3 w-3 text-amber-500 shrink-0" />
                    <span>Офлайн-режим</span>
                  </>
                ) : (
                  <>
                    <Cloud className="h-3 w-3 text-emerald-500 shrink-0" />
                    <span className="truncate">Синхронизировано</span>
                  </>
                )}
              </span>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  openAuthModal();
                }}
                className="inline-flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                <Cloud className="h-3 w-3 shrink-0" />
                <span>Войти для синхронизации</span>
              </button>
            )}
          </div>
        </div>

        {/* Home link */}
        <div>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70'
              }`
            }
          >
            <Home className="h-4 w-4 shrink-0" />
            <span>Главная страница</span>
          </NavLink>
        </div>

        {/* Interactive tools */}
        <div>
          <div className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Интерактивные модули
          </div>
          <nav className="space-y-1" aria-label="Интерактивные модули">
            <NavLink
              to="/tools/noun-simulator"
              className={({ isActive }) =>
                `flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70'
                }`
              }
            >
              <Layers className="h-4 w-4 shrink-0 text-blue-500" />
              <span>Симулятор падежей</span>
            </NavLink>
            <NavLink
              to="/tools/verb-government"
              className={({ isActive }) =>
                `flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70'
                }`
              }
            >
              <GitBranch className="h-4 w-4 shrink-0 text-indigo-500" />
              <span>Управление глаголов</span>
            </NavLink>
            <NavLink
              to="/tools/tense-matrix"
              className={({ isActive }) =>
                `flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70'
                }`
              }
            >
              <Table2 className="h-4 w-4 shrink-0 text-emerald-500" />
              <span>Матрица времён</span>
            </NavLink>
          </nav>
        </div>

        {/* CEFR filter */}
        <div>
          <div className="px-3 mb-2 flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Фильтр по уровню
            </span>
            {selectedLevels.size > 0 && (
              <button
                type="button"
                onClick={resetLevels}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                <RotateCcw className="h-3 w-3" />
                Сбросить
              </button>
            )}
          </div>
          <div className="px-2 flex flex-wrap gap-1.5">
            {ALL_LEVELS.map((level) => {
              const active = selectedLevels.has(level);
              return (
                <button
                  key={level}
                  type="button"
                  onClick={() => toggleLevel(level)}
                  aria-pressed={active}
                  className={`rounded-lg border px-2.5 py-1 text-xs font-semibold transition-all ${
                    active
                      ? `${CEFR_LEVEL_COLORS[level]} ring-2 ring-blue-500/40`
                      : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600'
                  }`}
                >
                  {level}
                </button>
              );
            })}
          </div>
        </div>

        {/* 10 Grammar sections accordion */}
        <div>
          <div className="px-3 mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Разделы грамматики</span>
          </div>
          <div className="space-y-1.5">
            {sortedSections.map((section) => {
              const matchingCount = section.topics.filter((t) =>
                topicMatchesLevels(t, selectedLevels)
              ).length;
              const isSectionDimmed =
                selectedLevels.size > 0 && matchingCount === 0;
              const isExpanded =
                expandedSections.has(section.id) ||
                (selectedLevels.size > 0 && matchingCount > 0);

              return (
                <div
                  key={section.id}
                  className={`rounded-xl border border-slate-200/70 dark:border-slate-800/80 overflow-hidden transition-opacity ${
                    isSectionDimmed ? 'opacity-45' : ''
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleSection(section.id)}
                    aria-expanded={isExpanded}
                    className="w-full flex items-center justify-between gap-2 px-3 py-2.5 text-left bg-slate-50/70 dark:bg-slate-950/40 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 transition-colors"
                  >
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                        {section.order}. {section.titleRu}
                      </div>
                      {section.titleTr && (
                        <div className="text-[11px] text-slate-400 dark:text-slate-500 truncate">
                          {section.titleTr}
                        </div>
                      )}
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4 shrink-0 text-slate-400" />
                    ) : (
                      <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="p-1.5 space-y-0.5 bg-white dark:bg-slate-900">
                      {section.topics.map((topic) => {
                        const matchesFilter = topicMatchesLevels(
                          topic,
                          selectedLevels
                        );
                        const completed = isCompleted(topic.id);

                        return (
                          <NavLink
                            key={topic.id}
                            to={`/topic/${topic.id}`}
                            className={({ isActive }) =>
                              `flex items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-xs transition-all ${
                                isActive
                                  ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-semibold'
                                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/70'
                              } ${!matchesFilter ? 'opacity-35' : ''}`
                            }
                          >
                            <div className="flex items-center gap-1.5 min-w-0">
                              {completed ? (
                                <CheckCircle2
                                  className="h-3.5 w-3.5 shrink-0 text-emerald-500"
                                  aria-label="Пройдено"
                                />
                              ) : topic.isDraft ? (
                                <Clock
                                  className="h-3.5 w-3.5 shrink-0 text-slate-400"
                                  aria-label="В разработке"
                                />
                              ) : (
                                <span
                                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/70 mx-1"
                                  aria-hidden="true"
                                />
                              )}
                              <span className="truncate">{topic.titleRu}</span>
                            </div>
                            <span
                              className={`shrink-0 rounded border px-1.5 py-0.5 text-[10px] font-semibold ${CEFR_LEVEL_COLORS[topic.level]}`}
                            >
                              {topic.level}
                            </span>
                          </NavLink>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <SearchModalContext.Provider value={{ openSearch }}>
      <div className="min-h-screen flex bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        {/* Desktop fixed sidebar */}
        <aside className="hidden lg:block w-72 xl:w-80 shrink-0 sticky top-0 h-screen">
          {sidebarContent}
        </aside>

        {/* Mobile slide-out drawer */}
        {mobileOpen && (
          <div className="fixed inset-0 z-40 lg:hidden flex">
            <div
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <aside className="relative z-10 w-80 max-w-[85vw] h-full shadow-2xl">
              {sidebarContent}
            </aside>
          </div>
        )}

        {/* Main area */}
        <div className="flex-1 min-w-0 flex flex-col">
          {/* Top header */}
          <header className="sticky top-0 z-30 border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
            <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
              <div className="flex items-center gap-2.5 min-w-0">
                <button
                  type="button"
                  onClick={() => setMobileOpen(true)}
                  aria-label="Открыть навигацию"
                  className="lg:hidden rounded-xl border border-slate-200 dark:border-slate-700 p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <Menu className="h-5 w-5" />
                </button>
                <Link
                  to="/"
                  className="lg:hidden flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-slate-100 truncate"
                >
                  <Compass className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="truncate">Турецкая грамматика</span>
                </Link>
              </div>

              <div className="flex flex-1 max-w-md items-center justify-end lg:justify-between gap-2">
                <button
                  type="button"
                  onClick={() => openSearch('')}
                  className="flex flex-1 items-center justify-between gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 px-3 py-1.5 text-sm text-slate-500 dark:text-slate-400 hover:border-blue-400 dark:hover:border-blue-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                >
                  <span className="flex items-center gap-2 truncate">
                    <Search className="h-4 w-4 shrink-0 text-slate-400" />
                    <span className="truncate hidden sm:inline">
                      Обратный поиск по аффиксам и темам...
                    </span>
                    <span className="truncate sm:hidden">Поиск...</span>
                  </span>
                  <kbd className="hidden sm:inline-flex items-center rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-1.5 py-0.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    Ctrl+K
                  </kbd>
                </button>

                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label={
                    isDark ? 'Включить светлую тему' : 'Включить тёмную тему'
                  }
                  title={isDark ? 'Светлая тема' : 'Тёмная тема'}
                  className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shrink-0"
                >
                  {isDark ? (
                    <Sun className="h-4 w-4 text-amber-400" />
                  ) : (
                    <Moon className="h-4 w-4 text-slate-600" />
                  )}
                </button>

                {authLoading ? (
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shrink-0"
                    aria-label="Загрузка профиля"
                  >
                    <Loader2 className="h-4 w-4 animate-spin text-slate-400" />
                  </div>
                ) : user ? (
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div
                      title={user.email ?? user.displayName ?? 'Аккаунт'}
                      className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-2.5 py-1.5 max-w-[160px]"
                    >
                      {user.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt=""
                          referrerPolicy="no-referrer"
                          className="h-5 w-5 rounded-full object-cover shrink-0"
                        />
                      ) : (
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/70 text-blue-700 dark:text-blue-300 shrink-0">
                          <UserIcon className="h-3 w-3" />
                        </span>
                      )}
                      <span className="hidden sm:inline text-xs font-medium text-slate-700 dark:text-slate-200 truncate">
                        {user.displayName ?? user.email ?? 'Профиль'}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        void logout();
                      }}
                      aria-label="Выйти из аккаунта"
                      title="Выйти"
                      className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-600 dark:text-slate-300 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 dark:hover:border-rose-800 transition-colors shrink-0"
                    >
                      <LogOut className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={openAuthModal}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 px-3 py-2 text-xs font-semibold text-white transition-colors shrink-0"
                  >
                    <LogIn className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Войти</span>
                  </button>
                )}
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 mx-auto w-full max-w-5xl px-4 sm:px-6 py-6 sm:py-8">
            {children ?? <Outlet />}
          </main>
        </div>

        <GlobalSearchModal
          isOpen={searchOpen}
          initialQuery={searchInitialQuery}
          onClose={() => setSearchOpen(false)}
        />
      </div>
    </SearchModalContext.Provider>
  );
}
