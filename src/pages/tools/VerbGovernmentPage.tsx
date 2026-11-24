import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowLeft,
  GitBranch,
  RotateCcw,
  Search,
  X,
} from 'lucide-react';
import { VERB_GOVERNMENT } from '../../data';
import { normalizeTurkishSearch } from '../../components/searchUtils';
import type { VerbCaseTag, VerbGovernmentEntry } from '../../types/verbs';

type CaseFilter = 'all' | VerbCaseTag;

const CASE_FILTERS: ReadonlyArray<{ id: CaseFilter; label: string }> = [
  { id: 'all', label: 'Все' },
  { id: '-a', label: '-a / -e (Дат.)' },
  { id: '-ı', label: '-ı / -i (Вин.)' },
  { id: '-dan', label: '-dan / -den (Исх.)' },
  { id: '-da', label: '-da / -de (Местн.)' },
  { id: 'ile', label: 'ile (С)' },
];

const CASE_BADGE_STYLES: Record<VerbCaseTag, string> = {
  '-a': 'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950/60 dark:text-blue-300',
  '-ı': 'border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300',
  '-dan':
    'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300',
  '-da':
    'border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-800 dark:bg-purple-950/60 dark:text-purple-300',
  ile: 'border-teal-200 bg-teal-50 text-teal-700 dark:border-teal-800 dark:bg-teal-950/60 dark:text-teal-300',
};

function renderHighlightedExample(
  exampleTr: string,
  highlightedSegment: string
): ReactNode {
  const segment = highlightedSegment.trim();
  if (!segment) {
    return exampleTr;
  }

  let matchIndex = exampleTr.indexOf(segment);
  if (matchIndex === -1) {
    matchIndex = exampleTr
      .toLocaleLowerCase('tr-TR')
      .indexOf(segment.toLocaleLowerCase('tr-TR'));
  }

  if (matchIndex === -1) {
    return exampleTr;
  }

  const before = exampleTr.slice(0, matchIndex);
  const match = exampleTr.slice(matchIndex, matchIndex + segment.length);
  const after = exampleTr.slice(matchIndex + segment.length);

  return (
    <>
      {before}
      <mark className="rounded bg-amber-100 dark:bg-amber-900/60 px-1 py-0.5 font-semibold text-amber-950 dark:text-amber-200">
        {match}
      </mark>
      {after}
    </>
  );
}

interface IndexedVerbEntry {
  entry: VerbGovernmentEntry;
  searchCorpus: string;
}

export function VerbGovernmentPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlQuery = searchParams.get('q') ?? '';

  const [query, setQuery] = useState(urlQuery);
  const [caseFilter, setCaseFilter] = useState<CaseFilter>('all');
  const [trapsOnly, setTrapsOnly] = useState(false);

  useEffect(() => {
    setQuery(urlQuery);
  }, [urlQuery]);

  const handleQueryChange = (nextValue: string) => {
    setQuery(nextValue);
    const nextParams = new URLSearchParams(searchParams);
    if (nextValue.length > 0) {
      nextParams.set('q', nextValue);
    } else {
      nextParams.delete('q');
    }
    setSearchParams(nextParams, { replace: true });
  };

  const handleResetFilters = () => {
    setQuery('');
    setCaseFilter('all');
    setTrapsOnly(false);
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete('q');
    setSearchParams(nextParams, { replace: true });
  };

  const indexedEntries = useMemo<IndexedVerbEntry[]>(
    () =>
      VERB_GOVERNMENT.map((entry) => ({
        entry,
        searchCorpus: [
          normalizeTurkishSearch(entry.verbTr),
          normalizeTurkishSearch(entry.translationRu),
          normalizeTurkishSearch(entry.exampleTr),
          normalizeTurkishSearch(entry.exampleRu),
        ].join(' '),
      })),
    []
  );

  const normalizedQuery = useMemo(() => normalizeTurkishSearch(query), [query]);

  const baseFilteredEntries = useMemo(() => {
    return indexedEntries
      .filter(({ entry, searchCorpus }) => {
        if (trapsOnly && !entry.isTrap) {
          return false;
        }
        if (normalizedQuery && !searchCorpus.includes(normalizedQuery)) {
          return false;
        }
        return true;
      })
      .map((item) => item.entry);
  }, [indexedEntries, normalizedQuery, trapsOnly]);

  const countsByCase = useMemo(() => {
    const counts: Record<CaseFilter, number> = {
      all: baseFilteredEntries.length,
      '-a': 0,
      '-ı': 0,
      '-dan': 0,
      '-da': 0,
      ile: 0,
    };
    for (const entry of baseFilteredEntries) {
      counts[entry.caseTag] += 1;
    }
    return counts;
  }, [baseFilteredEntries]);

  const filteredEntries = useMemo(() => {
    if (caseFilter === 'all') {
      return baseFilteredEntries;
    }
    return baseFilteredEntries.filter((entry) => entry.caseTag === caseFilter);
  }, [baseFilteredEntries, caseFilter]);

  const hasActiveFilters =
    query.trim().length > 0 || caseFilter !== 'all' || trapsOnly;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>На главную</span>
          </Link>

          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Всего в базе: {VERB_GOVERNMENT.length} глаголов
          </span>
        </div>

        <div className="mt-4 flex items-start gap-3.5">
          <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400">
            <GitBranch className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Падежное управление глаголов
            </h1>
            <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
              Справочник глаголов с фиксированным падежом дополнения. Ищите по-турецки (можно без диакритики) или по-русски и отбирайте частые «ловушки», не совпадающие с русским управлением.
            </p>
          </div>
        </div>
      </div>

      {/* Search and filters */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-col lg:flex-row gap-3 lg:items-center">
          {/* Live search */}
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              placeholder="Поиск по глаголу, переводу или примеру (например: korkmak, бояться, metro)..."
              aria-label="Поиск глаголов"
              className="w-full rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 pl-10 pr-10 py-3 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
            {query.length > 0 && (
              <button
                type="button"
                onClick={() => handleQueryChange('')}
                aria-label="Очистить поиск"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Trap toggle */}
          <button
            type="button"
            role="switch"
            aria-checked={trapsOnly}
            onClick={() => setTrapsOnly((prev) => !prev)}
            className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-xs sm:text-sm font-semibold transition-colors shrink-0 ${
              trapsOnly
                ? 'border-amber-400 bg-amber-50 text-amber-800 dark:border-amber-700 dark:bg-amber-950/60 dark:text-amber-200 shadow-sm'
                : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-700 dark:text-slate-200 hover:border-amber-300 dark:hover:border-amber-700'
            }`}
          >
            <AlertTriangle
              className={`h-4 w-4 ${
                trapsOnly
                  ? 'text-amber-600 dark:text-amber-400'
                  : 'text-slate-400 dark:text-slate-500'
              }`}
            />
            <span>Только ловушки (не совпадают с русским)</span>
          </button>
        </div>

        {/* Case filter chips */}
        <div className="flex flex-wrap items-center gap-2">
          {CASE_FILTERS.map((filter) => {
            const isActive = caseFilter === filter.id;
            const count = countsByCase[filter.id];
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setCaseFilter(filter.id)}
                className={`inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-semibold transition-colors ${
                  isActive
                    ? 'border-indigo-500 bg-indigo-600 text-white shadow-sm'
                    : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-700 dark:text-slate-200 hover:border-indigo-400 dark:hover:border-indigo-500'
                }`}
              >
                <span>{filter.label}</span>
                <span
                  className={`rounded-md px-1.5 py-0.5 text-[11px] font-bold ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Status bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          <span className="text-slate-600 dark:text-slate-300">
            Найдено глаголов:{' '}
            <strong className="font-bold text-slate-900 dark:text-slate-100">
              {filteredEntries.length}
            </strong>
          </span>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Сбросить фильтры</span>
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      {filteredEntries.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 text-center space-y-3">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            По вашему запросу ничего не найдено
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Попробуйте изменить запрос, снять фильтр по падежу или отключить режим «Только ловушки».
          </p>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 px-4 py-2 text-xs font-semibold text-white transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Сбросить фильтры</span>
            </button>
          )}
        </div>
      ) : (
        <>
          {/* Desktop table (md+) */}
          <div className="hidden md:block rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60">
                    <th className="py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-44">
                      Глагол (TR)
                    </th>
                    <th className="py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-40">
                      Падеж
                    </th>
                    <th className="py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-52">
                      Перевод (RU)
                    </th>
                    <th className="py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Пример
                    </th>
                    <th className="py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-64">
                      Примечание
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {filteredEntries.map((entry) => (
                    <tr
                      key={entry.id}
                      className="hover:bg-slate-50/70 dark:hover:bg-slate-800/30 transition-colors"
                    >
                      <td className="py-4 px-4 align-top">
                        <div className="font-bold text-sm text-slate-900 dark:text-slate-100">
                          {entry.verbTr}
                        </div>
                        {entry.isTrap && (
                          <span className="mt-1.5 inline-flex items-center gap-1 rounded-md border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 text-[11px] font-semibold text-amber-700 dark:text-amber-300">
                            <AlertTriangle className="h-3 w-3" />
                            Ловушка
                          </span>
                        )}
                      </td>

                      <td className="py-4 px-4 align-top">
                        <span
                          className={`inline-flex items-center rounded-lg border px-2.5 py-1 text-xs font-semibold whitespace-nowrap ${CASE_BADGE_STYLES[entry.caseTag]}`}
                        >
                          {entry.caseLabelRu}
                        </span>
                      </td>

                      <td className="py-4 px-4 align-top text-sm text-slate-700 dark:text-slate-200">
                        {entry.translationRu}
                      </td>

                      <td className="py-4 px-4 align-top space-y-1">
                        <div className="text-sm font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
                          {renderHighlightedExample(
                            entry.exampleTr,
                            entry.highlightedSegment
                          )}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                          {entry.exampleRu}
                        </div>
                      </td>

                      <td className="py-4 px-4 align-top text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {entry.note ?? (
                          <span className="text-slate-400 dark:text-slate-500">
                            —
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile cards (< md) */}
          <div className="md:hidden space-y-3">
            {filteredEntries.map((entry) => (
              <article
                key={entry.id}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm space-y-3"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
                        {entry.verbTr}
                      </h2>
                      {entry.isTrap && (
                        <span className="inline-flex items-center gap-1 rounded-md border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 text-[11px] font-semibold text-amber-700 dark:text-amber-300">
                          <AlertTriangle className="h-3 w-3" />
                          Ловушка
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">
                      {entry.translationRu}
                    </p>
                  </div>

                  <span
                    className={`inline-flex items-center rounded-lg border px-2.5 py-1 text-xs font-semibold shrink-0 ${CASE_BADGE_STYLES[entry.caseTag]}`}
                  >
                    {entry.caseLabelRu}
                  </span>
                </div>

                <div className="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/50 p-3 space-y-1">
                  <div className="text-sm font-medium text-slate-900 dark:text-slate-100 leading-relaxed break-words">
                    {renderHighlightedExample(
                      entry.exampleTr,
                      entry.highlightedSegment
                    )}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {entry.exampleRu}
                  </div>
                </div>

                {entry.note && (
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-l-2 border-amber-400 dark:border-amber-600 pl-2.5">
                    {entry.note}
                  </p>
                )}
              </article>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
