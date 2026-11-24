import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  GitBranch,
  Hash,
  Search,
  Sparkles,
  X,
} from 'lucide-react';
import { ALL_TOPIC_META, VERB_GOVERNMENT } from '../data';
import { CEFR_LEVEL_COLORS } from '../constants/morphemeColors';
import type { TopicMeta } from '../types/grammar';
import type { VerbGovernmentEntry } from '../types/verbs';
import { normalizeTurkishSearch } from './searchUtils';

export interface GlobalSearchModalProps {
  isOpen: boolean;
  initialQuery?: string;
  onClose: () => void;
}

interface SearchResultItem {
  key: string;
  to: string;
  category: 'topics' | 'affixes' | 'verbs';
}

interface TopicMatch {
  topic: TopicMeta;
  score: number;
}

interface AffixMatch {
  topic: TopicMeta;
  matchedAffixes: string[];
  score: number;
}

interface VerbMatch {
  entry: VerbGovernmentEntry;
  score: number;
}

const MAX_PER_CATEGORY = 8;

const QUICK_EXAMPLES = ['-yor', '-dığı', 'ebil', 'şart', '-ken', 'bakmak'] as const;

function scoreMatch(target: string, normalizedQuery: string): number {
  if (!target || !normalizedQuery) {
    return 0;
  }
  if (target === normalizedQuery) {
    return 3;
  }
  if (target.startsWith(normalizedQuery)) {
    return 2;
  }
  if (target.includes(normalizedQuery)) {
    return 1;
  }
  return 0;
}

export function GlobalSearchModal({
  isOpen,
  initialQuery = '',
  onClose,
}: GlobalSearchModalProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState(initialQuery);
  const [activeIndex, setActiveIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    if (isOpen) {
      setQuery(initialQuery);
      setActiveIndex(0);
      const timer = window.setTimeout(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
      }, 10);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [isOpen, initialQuery]);

  const indexedTopics = useMemo(
    () =>
      ALL_TOPIC_META.map((topic) => ({
        topic,
        titleRuNorm: normalizeTurkishSearch(topic.titleRu),
        titleTrNorm: normalizeTurkishSearch(topic.titleTr ?? ''),
        summaryNorm: normalizeTurkishSearch(topic.summary ?? ''),
        keywordsNorm: (topic.keywords ?? []).map(normalizeTurkishSearch),
        affixesNorm: topic.affixes.map((affix) => ({
          raw: affix,
          norm: normalizeTurkishSearch(affix),
        })),
      })),
    []
  );

  const indexedVerbs = useMemo(
    () =>
      VERB_GOVERNMENT.map((entry) => ({
        entry,
        verbNorm: normalizeTurkishSearch(entry.verbTr),
        translationNorm: normalizeTurkishSearch(entry.translationRu),
        caseNorm: normalizeTurkishSearch(entry.caseTag),
        caseLabelNorm: normalizeTurkishSearch(entry.caseLabelRu),
        segmentNorm: normalizeTurkishSearch(entry.highlightedSegment),
      })),
    []
  );

  const normalizedQuery = useMemo(() => normalizeTurkishSearch(query), [query]);

  const { topicMatches, affixMatches, verbMatches } = useMemo(() => {
    if (!normalizedQuery) {
      return {
        topicMatches: [] as TopicMatch[],
        affixMatches: [] as AffixMatch[],
        verbMatches: [] as VerbMatch[],
      };
    }

    const topics: TopicMatch[] = [];
    const affixes: AffixMatch[] = [];

    for (const item of indexedTopics) {
      const topicScore = Math.max(
        scoreMatch(item.titleRuNorm, normalizedQuery),
        scoreMatch(item.titleTrNorm, normalizedQuery),
        scoreMatch(item.summaryNorm, normalizedQuery),
        ...item.keywordsNorm.map((kw) => scoreMatch(kw, normalizedQuery))
      );
      if (topicScore > 0) {
        topics.push({ topic: item.topic, score: topicScore });
      }

      let bestAffixScore = 0;
      const matchedAffixes: string[] = [];
      for (const aff of item.affixesNorm) {
        const s = scoreMatch(aff.norm, normalizedQuery);
        if (s > 0) {
          matchedAffixes.push(aff.raw);
          if (s > bestAffixScore) {
            bestAffixScore = s;
          }
        }
      }
      if (matchedAffixes.length > 0) {
        affixes.push({
          topic: item.topic,
          matchedAffixes,
          score: bestAffixScore,
        });
      }
    }

    const verbs: VerbMatch[] = [];
    for (const item of indexedVerbs) {
      const s = Math.max(
        scoreMatch(item.verbNorm, normalizedQuery),
        scoreMatch(item.translationNorm, normalizedQuery),
        scoreMatch(item.caseNorm, normalizedQuery),
        scoreMatch(item.caseLabelNorm, normalizedQuery),
        scoreMatch(item.segmentNorm, normalizedQuery)
      );
      if (s > 0) {
        verbs.push({ entry: item.entry, score: s });
      }
    }

    topics.sort((a, b) => b.score - a.score);
    affixes.sort((a, b) => b.score - a.score);
    verbs.sort((a, b) => b.score - a.score);

    return {
      topicMatches: topics.slice(0, MAX_PER_CATEGORY),
      affixMatches: affixes.slice(0, MAX_PER_CATEGORY),
      verbMatches: verbs.slice(0, MAX_PER_CATEGORY),
    };
  }, [indexedTopics, indexedVerbs, normalizedQuery]);

  const flatResults = useMemo<SearchResultItem[]>(() => {
    const items: SearchResultItem[] = [];
    for (const m of topicMatches) {
      items.push({
        key: `topic-${m.topic.id}`,
        to: `/topic/${m.topic.id}`,
        category: 'topics',
      });
    }
    for (const m of affixMatches) {
      items.push({
        key: `affix-${m.topic.id}`,
        to: `/topic/${m.topic.id}`,
        category: 'affixes',
      });
    }
    for (const m of verbMatches) {
      items.push({
        key: `verb-${m.entry.id}`,
        to: `/tools/verb-government?q=${encodeURIComponent(m.entry.verbTr)}`,
        category: 'verbs',
      });
    }
    return items;
  }, [topicMatches, affixMatches, verbMatches]);

  useEffect(() => {
    setActiveIndex(0);
  }, [normalizedQuery]);

  useEffect(() => {
    const activeEl = itemRefs.current[activeIndex];
    if (activeEl) {
      activeEl.scrollIntoView({ block: 'nearest' });
    }
  }, [activeIndex]);

  const selectDestination = useCallback(
    (to: string) => {
      onClose();
      navigate(to);
    },
    [navigate, onClose]
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (flatResults.length === 0) {
        return;
      }
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setActiveIndex((prev) => (prev + 1) % flatResults.length);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setActiveIndex(
          (prev) => (prev - 1 + flatResults.length) % flatResults.length
        );
      } else if (event.key === 'Enter') {
        const target = flatResults[activeIndex];
        if (target) {
          event.preventDefault();
          selectDestination(target.to);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, flatResults, activeIndex, onClose, selectDestination]);

  if (!isOpen) {
    return null;
  }

  let runningIndex = 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 pt-12 sm:pt-20 bg-slate-950/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Обратный поиск по грамматике и аффиксам"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="w-full max-w-2xl rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden flex flex-col max-h-[82vh]">
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
          <Search className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Введите аффикс, тему или глагол (например: digi, sart, ebil, bakmak)..."
            aria-label="Поисковый запрос"
            autoComplete="off"
            autoCapitalize="none"
            spellCheck={false}
            className="flex-1 bg-transparent text-sm sm:text-base text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              aria-label="Очистить запрос"
              className="rounded-md p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="hidden sm:inline-flex items-center rounded-md border border-slate-200 dark:border-slate-700 px-2 py-0.5 text-[11px] font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Esc
          </button>
        </div>

        <div className="overflow-y-auto p-3 sm:p-4 space-y-5">
          {!normalizedQuery ? (
            <div className="py-4 px-2 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                <span>Попробуйте обратный поиск без турецкой раскладки</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {QUICK_EXAMPLES.map((example) => (
                  <button
                    key={example}
                    type="button"
                    onClick={() => {
                      setQuery(example);
                      inputRef.current?.focus();
                    }}
                    className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {example}
                  </button>
                ))}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Поиск автоматически распознаёт латиницу без диакритики: <code className="rounded bg-slate-100 dark:bg-slate-800 px-1 py-0.5">digi</code> найдёт <code className="rounded bg-slate-100 dark:bg-slate-800 px-1 py-0.5">-dığı</code>, <code className="rounded bg-slate-100 dark:bg-slate-800 px-1 py-0.5">sart</code> — <code className="rounded bg-slate-100 dark:bg-slate-800 px-1 py-0.5">şart</code>, <code className="rounded bg-slate-100 dark:bg-slate-800 px-1 py-0.5">ebil</code> — <code className="rounded bg-slate-100 dark:bg-slate-800 px-1 py-0.5">-(y)ebil</code>.
              </p>
            </div>
          ) : flatResults.length === 0 ? (
            <div className="py-10 text-center">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                По запросу «{query}» ничего не найдено
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Попробуйте ввести корень аффикса без дефиса (например, <code className="rounded bg-slate-100 dark:bg-slate-800 px-1">yor</code>, <code className="rounded bg-slate-100 dark:bg-slate-800 px-1">ken</code>, <code className="rounded bg-slate-100 dark:bg-slate-800 px-1">dik</code>) или русское название темы.
              </p>
            </div>
          ) : (
            <>
              {topicMatches.length > 0 && (
                <section aria-label="Темы грамматики">
                  <div className="mb-2 px-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>Темы грамматики</span>
                  </div>
                  <div className="space-y-1">
                    {topicMatches.map(({ topic }) => {
                      const idx = runningIndex++;
                      const isActive = idx === activeIndex;
                      return (
                        <button
                          key={`topic-${topic.id}`}
                          ref={(el) => {
                            itemRefs.current[idx] = el;
                          }}
                          type="button"
                          onMouseEnter={() => setActiveIndex(idx)}
                          onClick={() => selectDestination(`/topic/${topic.id}`)}
                          className={`w-full flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                            isActive
                              ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-900 dark:text-blue-100'
                              : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-800 dark:text-slate-200'
                          }`}
                        >
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="font-semibold text-sm truncate">
                                {topic.titleRu}
                              </span>
                              {topic.titleTr && (
                                <span className="text-xs text-slate-500 dark:text-slate-400 truncate">
                                  {topic.titleTr}
                                </span>
                              )}
                            </div>
                            {topic.summary && (
                              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                                {topic.summary}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span
                              className={`rounded-md border px-1.5 py-0.5 text-[11px] font-semibold ${CEFR_LEVEL_COLORS[topic.level]}`}
                            >
                              {topic.level}
                            </span>
                            <ArrowRight className="h-4 w-4 text-slate-400" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </section>
              )}

              {affixMatches.length > 0 && (
                <section aria-label="Аффиксы">
                  <div className="mb-2 px-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    <Hash className="h-3.5 w-3.5" />
                    <span>Аффиксы</span>
                  </div>
                  <div className="space-y-1">
                    {affixMatches.map(({ topic, matchedAffixes }) => {
                      const idx = runningIndex++;
                      const isActive = idx === activeIndex;
                      return (
                        <button
                          key={`affix-${topic.id}`}
                          ref={(el) => {
                            itemRefs.current[idx] = el;
                          }}
                          type="button"
                          onMouseEnter={() => setActiveIndex(idx)}
                          onClick={() => selectDestination(`/topic/${topic.id}`)}
                          className={`w-full flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                            isActive
                              ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-900 dark:text-blue-100'
                              : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-800 dark:text-slate-200'
                          }`}
                        >
                          <div className="min-w-0 flex flex-wrap items-center gap-2">
                            <div className="flex flex-wrap gap-1">
                              {matchedAffixes.slice(0, 3).map((aff) => (
                                <span
                                  key={aff}
                                  className="inline-flex items-center rounded-md border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/70 px-2 py-0.5 text-xs font-bold text-blue-700 dark:text-blue-300"
                                >
                                  {aff}
                                </span>
                              ))}
                            </div>
                            <span className="text-sm font-medium truncate">
                              {topic.titleRu}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span
                              className={`rounded-md border px-1.5 py-0.5 text-[11px] font-semibold ${CEFR_LEVEL_COLORS[topic.level]}`}
                            >
                              {topic.level}
                            </span>
                            <ArrowRight className="h-4 w-4 text-slate-400" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </section>
              )}

              {verbMatches.length > 0 && (
                <section aria-label="Управление глаголов">
                  <div className="mb-2 px-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    <GitBranch className="h-3.5 w-3.5" />
                    <span>Управление глаголов</span>
                  </div>
                  <div className="space-y-1">
                    {verbMatches.map(({ entry }) => {
                      const idx = runningIndex++;
                      const isActive = idx === activeIndex;
                      return (
                        <button
                          key={`verb-${entry.id}`}
                          ref={(el) => {
                            itemRefs.current[idx] = el;
                          }}
                          type="button"
                          onMouseEnter={() => setActiveIndex(idx)}
                          onClick={() =>
                            selectDestination(
                              `/tools/verb-government?q=${encodeURIComponent(entry.verbTr)}`
                            )
                          }
                          className={`w-full flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                            isActive
                              ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-900 dark:text-blue-100'
                              : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-800 dark:text-slate-200'
                          }`}
                        >
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="font-semibold text-sm">
                                {entry.verbTr}
                              </span>
                              <span className="rounded-md border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/60 px-1.5 py-0.5 text-[11px] font-semibold text-indigo-700 dark:text-indigo-300">
                                {entry.caseTag} ({entry.caseLabelRu})
                              </span>
                              {entry.isTrap && (
                                <span className="rounded-md border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/60 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700 dark:text-amber-300">
                                  Ловушка
                                </span>
                              )}
                            </div>
                            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 truncate">
                              {entry.translationRu} — {entry.exampleTr}
                            </p>
                          </div>
                          <ArrowRight className="h-4 w-4 shrink-0 text-slate-400" />
                        </button>
                      );
                    })}
                  </div>
                </section>
              )}
            </>
          )}
        </div>

        <div className="hidden sm:flex items-center justify-between px-4 py-2.5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40 text-[11px] text-slate-400 dark:text-slate-500">
          <div className="flex items-center gap-3">
            <span>↑↓ навигация</span>
            <span>Enter перейти</span>
            <span>Esc закрыть</span>
          </div>
          <span>Мгновенный поиск по справочнику</span>
        </div>
      </div>
    </div>
  );
}
