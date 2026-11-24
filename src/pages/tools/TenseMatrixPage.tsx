import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Info,
  Table2,
  X,
} from 'lucide-react';
import { VERB_PRESETS, getTopicMetaById } from '../../data';
import {
  MORPHEME_COLORS,
  MORPHEME_ORDER,
} from '../../constants/morphemeColors';
import { conjugateVerb } from '../../engine';
import { MorphemeSequence } from '../../components/MorphemeSequence';
import type {
  CompoundType,
  Polarity,
  SimpleTenseId,
  TenseMatrixCell,
  VerbPerson,
  VerbPreset,
} from '../../types/morphology';

const QUICK_VERB_INFINITIVES = [
  'gelmek',
  'gitmek',
  'yapmak',
  'okumak',
  'yemek',
  'beklemek',
  'almak',
  'vermek',
  'bilmek',
  'görmek',
  'olmak',
] as const;

const PERSON_OPTIONS: ReadonlyArray<{ id: VerbPerson; label: string }> = [
  { id: 'ben', label: 'Ben' },
  { id: 'sen', label: 'Sen' },
  { id: 'o', label: 'O' },
  { id: 'biz', label: 'Biz' },
  { id: 'siz', label: 'Siz' },
  { id: 'onlar', label: 'Onlar' },
];

const POLARITY_OPTIONS: ReadonlyArray<{
  id: Polarity;
  badge: string;
  label: string;
}> = [
  { id: 'affirmative', badge: '+', label: 'Утверждение' },
  { id: 'negative', badge: '−', label: 'Отрицание' },
  { id: 'question', badge: '?', label: 'Вопрос' },
  { id: 'negativeQuestion', badge: '−?', label: 'Отриц. вопрос' },
];

const SIMPLE_TENSES: ReadonlyArray<{
  id: SimpleTenseId;
  shortRu: string;
  affixHint: string;
}> = [
  { id: 'simdiki', shortRu: 'Настоящее', affixHint: '-(I)yor' },
  { id: 'genis', shortRu: 'Широкое', affixHint: '-(A/I)r' },
  { id: 'gecmis_di', shortRu: 'Прош. -DI', affixHint: '-DI' },
  { id: 'gecmis_mis', shortRu: 'Прош. -mIş', affixHint: '-mIş' },
  { id: 'gelecek', shortRu: 'Будущее', affixHint: '-(y)AcAk' },
  { id: 'gereklilik', shortRu: 'Долженств.', affixHint: '-mAlI' },
  { id: 'sart', shortRu: 'Условное', affixHint: '-sA' },
];

const COMPOUND_COLUMNS: ReadonlyArray<{
  id: Exclude<CompoundType, 'none'>;
  titleRu: string;
  titleTr: string;
  affix: string;
  subtitle: string;
}> = [
  {
    id: 'hikaye',
    titleRu: 'Прошедшее',
    titleTr: 'Hikâye',
    affix: '-di',
    subtitle: 'было / делал бы в прошлом',
  },
  {
    id: 'rivayet',
    titleRu: 'Пересказ',
    titleTr: 'Rivayet',
    affix: '-miş',
    subtitle: 'оказывается / говорят, что',
  },
  {
    id: 'sart',
    titleRu: 'Условие',
    titleTr: 'Şart',
    affix: '-sa',
    subtitle: 'если ...',
  },
];

interface SelectedCellKey {
  tense: SimpleTenseId;
  compoundType: CompoundType;
}

function isCompoundCellUnavailable(
  cell: TenseMatrixCell,
  tense: SimpleTenseId,
  compoundType: CompoundType
): boolean {
  const trimmedSurface = cell.surface.trim();
  return (
    cell.morphemes.length === 0 ||
    trimmedSurface.length === 0 ||
    trimmedSurface === '—' ||
    (tense === 'sart' && compoundType === 'sart')
  );
}

export function TenseMatrixPage() {
  const [selectedVerbId, setSelectedVerbId] = useState<string>(
    VERB_PRESETS[0]?.id ?? 'gelmek'
  );
  const [person, setPerson] = useState<VerbPerson>('ben');
  const [polarity, setPolarity] = useState<Polarity>('affirmative');
  const [selectedKey, setSelectedKey] = useState<SelectedCellKey | null>(null);

  const selectedVerb = useMemo<VerbPreset | undefined>(
    () =>
      VERB_PRESETS.find((v) => v.id === selectedVerbId) ?? VERB_PRESETS[0],
    [selectedVerbId]
  );

  const quickVerbs = useMemo(() => {
    const byInfinitive = new Map(
      VERB_PRESETS.map((verb) => [verb.infinitive, verb])
    );
    return QUICK_VERB_INFINITIVES.map((inf) => byInfinitive.get(inf)).filter(
      (v): v is VerbPreset => v !== undefined
    );
  }, []);

  const simpleCells = useMemo(() => {
    if (!selectedVerb) {
      return [];
    }
    return SIMPLE_TENSES.map((t) => ({
      meta: t,
      cell: conjugateVerb(selectedVerb, t.id, 'none', person, polarity),
    }));
  }, [selectedVerb, person, polarity]);

  const compoundRows = useMemo(() => {
    if (!selectedVerb) {
      return [];
    }
    return SIMPLE_TENSES.map((t) => {
      const simpleMetaCell = conjugateVerb(
        selectedVerb,
        t.id,
        'none',
        person,
        polarity
      );
      const columns = COMPOUND_COLUMNS.map((col) => {
        const cell = conjugateVerb(
          selectedVerb,
          t.id,
          col.id,
          person,
          polarity
        );
        return {
          col,
          cell,
          unavailable: isCompoundCellUnavailable(cell, t.id, col.id),
        };
      });

      return {
        tenseMeta: t,
        titleRu: simpleMetaCell.titleRu,
        titleTr: simpleMetaCell.titleTr,
        columns,
      };
    });
  }, [selectedVerb, person, polarity]);

  const activeCell = useMemo<TenseMatrixCell | null>(() => {
    if (!selectedKey || !selectedVerb) {
      return null;
    }
    const cell = conjugateVerb(
      selectedVerb,
      selectedKey.tense,
      selectedKey.compoundType,
      person,
      polarity
    );
    if (
      selectedKey.compoundType !== 'none' &&
      isCompoundCellUnavailable(
        cell,
        selectedKey.tense,
        selectedKey.compoundType
      )
    ) {
      return null;
    }
    return cell;
  }, [selectedKey, selectedVerb, person, polarity]);

  useEffect(() => {
    if (!activeCell) {
      return undefined;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedKey(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCell]);

  const activeTopicMeta = useMemo(
    () =>
      activeCell ? getTopicMetaById(activeCell.relatedTopicId) : undefined,
    [activeCell]
  );

  const activePersonLabel = useMemo(
    () => PERSON_OPTIONS.find((p) => p.id === person)?.label ?? person,
    [person]
  );

  const activePolarityLabel = useMemo(() => {
    const opt = POLARITY_OPTIONS.find((p) => p.id === polarity);
    return opt ? `${opt.label} (${opt.badge})` : polarity;
  }, [polarity]);

  if (!selectedVerb) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>На главную</span>
          </Link>

          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            7 простых времён × 3 составные формы
          </span>
        </div>

        <div className="mt-4 flex items-start gap-3.5">
          <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400">
            <Table2 className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Матрица времён и наклонений
            </h1>
            <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
              Выберите глагол, лицо и полярность, чтобы увидеть все простые и составные формы. Нажмите на любую карточку или ячейку матрицы для полного разбора морфем и формулы.
            </p>
          </div>
        </div>
      </div>

      {/* Verb selector + Controls */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm space-y-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Select + quick chips */}
          <div className="lg:col-span-7 space-y-3">
            <label
              htmlFor="verb-preset-select"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
            >
              Выбор глагола
            </label>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <select
                id="verb-preset-select"
                value={selectedVerb.id}
                onChange={(e) => setSelectedVerbId(e.target.value)}
                className="w-full sm:w-72 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-4 py-2.5 text-sm font-semibold text-slate-900 dark:text-slate-100 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              >
                {VERB_PRESETS.map((verb) => (
                  <option key={verb.id} value={verb.id}>
                    {verb.infinitive} — {verb.translationRu}
                  </option>
                ))}
              </select>

              <div className="text-sm text-slate-600 dark:text-slate-300">
                <span className="font-bold text-slate-900 dark:text-slate-100">
                  {selectedVerb.infinitive}
                </span>{' '}
                — {selectedVerb.translationRu}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {quickVerbs.map((verb) => {
                const isSelected = verb.id === selectedVerb.id;
                return (
                  <button
                    key={verb.id}
                    type="button"
                    onClick={() => setSelectedVerbId(verb.id)}
                    className={`rounded-xl border px-3 py-1.5 text-xs font-semibold transition-colors ${
                      isSelected
                        ? 'border-emerald-500 bg-emerald-600 text-white shadow-sm'
                        : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-700 dark:text-slate-200 hover:border-emerald-400 dark:hover:border-emerald-500'
                    }`}
                  >
                    {verb.infinitive}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Verb note */}
          <div className="lg:col-span-5">
            {selectedVerb.note ? (
              <div className="rounded-2xl border border-amber-200/80 dark:border-amber-800/70 bg-amber-50/70 dark:bg-amber-950/30 p-4 flex items-start gap-2.5">
                <Info className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
                <div className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
                  <div className="font-bold mb-0.5">
                    Особенность глагола «{selectedVerb.infinitive}»
                  </div>
                  <p>{selectedVerb.note}</p>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/50 p-4 text-xs text-slate-500 dark:text-slate-400">
                Стандартное спряжение по правилам гармонии гласных.
              </div>
            )}
          </div>
        </div>

        {/* Person & Polarity controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="lg:col-span-6 space-y-2">
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Лицо
            </span>
            <div className="flex flex-wrap gap-1.5">
              {PERSON_OPTIONS.map((opt) => {
                const isActive = person === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setPerson(opt.id)}
                    className={`rounded-xl border px-3.5 py-2 text-xs font-semibold transition-colors ${
                      isActive
                        ? 'border-blue-500 bg-blue-600 text-white shadow-sm'
                        : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-700 dark:text-slate-200 hover:border-blue-400 dark:hover:border-blue-500'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-2">
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Полярность
            </span>
            <div className="flex flex-wrap gap-1.5">
              {POLARITY_OPTIONS.map((opt) => {
                const isActive = polarity === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setPolarity(opt.id)}
                    className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-colors ${
                      isActive
                        ? 'border-emerald-500 bg-emerald-600 text-white shadow-sm'
                        : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-700 dark:text-slate-200 hover:border-emerald-400 dark:hover:border-emerald-500'
                    }`}
                  >
                    <span className="font-mono font-bold">[{opt.badge}]</span>
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Simple tenses and moods */}
      <section className="space-y-3">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Простые времена и наклонения
          </h2>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Нажмите на карточку для разбора морфем
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
          {simpleCells.map(({ meta, cell }) => {
            const isSelected =
              selectedKey?.tense === meta.id &&
              selectedKey?.compoundType === 'none';

            return (
              <button
                key={meta.id}
                type="button"
                onClick={() =>
                  setSelectedKey({ tense: meta.id, compoundType: 'none' })
                }
                className={`group text-left rounded-2xl border p-4 shadow-sm transition-all flex flex-col justify-between gap-3 ${
                  isSelected
                    ? 'border-emerald-500 ring-2 ring-emerald-500/20 bg-emerald-50/40 dark:bg-emerald-950/30'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-emerald-400 dark:hover:border-emerald-600'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {cell.titleRu}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {cell.titleTr}
                    </div>
                  </div>
                  <span className="rounded-lg bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[11px] font-semibold text-slate-600 dark:text-slate-300 shrink-0">
                    {meta.affixHint}
                  </span>
                </div>

                <div className="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/50 px-3 py-2.5">
                  <MorphemeSequence
                    tokens={cell.morphemes}
                    mode="word"
                    size="lg"
                  />
                </div>

                <div className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
                  {cell.translationRu}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Section 2: Compound tenses matrix */}
      <section className="space-y-3">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Составные времена (матрица)
          </h2>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Основа времени + копула (-di / -miş / -sa)
          </span>
        </div>

        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60">
                  <th className="py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-52">
                    Базовое время
                  </th>
                  {COMPOUND_COLUMNS.map((col) => (
                    <th
                      key={col.id}
                      className="py-3.5 px-4 text-left align-top"
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-100">
                          {col.titleTr}
                        </span>
                        <span className="rounded-md bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 px-1.5 py-0.5 text-[11px] font-bold text-blue-700 dark:text-blue-300">
                          {col.affix}
                        </span>
                      </div>
                      <div className="mt-0.5 text-[11px] font-normal text-slate-500 dark:text-slate-400">
                        {col.titleRu} ({col.subtitle})
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {compoundRows.map((row) => (
                  <tr
                    key={row.tenseMeta.id}
                    className="hover:bg-slate-50/40 dark:hover:bg-slate-800/20 transition-colors"
                  >
                    <td className="py-3.5 px-4 align-middle">
                      <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        {row.tenseMeta.shortRu}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {row.titleTr}
                      </div>
                    </td>

                    {row.columns.map(({ col, cell, unavailable }) => {
                      const isSelected =
                        selectedKey?.tense === row.tenseMeta.id &&
                        selectedKey?.compoundType === col.id;

                      if (unavailable) {
                        return (
                          <td
                            key={col.id}
                            className="py-3 px-4 align-middle"
                            title="В современном турецком языке эта комбинация не употребляется"
                          >
                            <div className="rounded-xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 px-3 py-2.5 text-center text-sm font-semibold text-slate-400 dark:text-slate-600 select-none">
                              —
                            </div>
                          </td>
                        );
                      }

                      return (
                        <td key={col.id} className="py-3 px-4 align-middle">
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedKey({
                                tense: row.tenseMeta.id,
                                compoundType: col.id,
                              })
                            }
                            className={`w-full text-left rounded-xl border px-3 py-2.5 transition-all ${
                              isSelected
                                ? 'border-emerald-500 ring-2 ring-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-950/40'
                                : 'border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40 hover:border-emerald-400 dark:hover:border-emerald-600 hover:bg-white dark:hover:bg-slate-900'
                            }`}
                          >
                            <MorphemeSequence
                              tokens={cell.morphemes}
                              mode="word"
                              size="md"
                            />
                            <div className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 truncate">
                              {cell.translationRu}
                            </div>
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Compact morpheme legend */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3.5 shadow-sm">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Цвета морфем:
          </span>
          {MORPHEME_ORDER.map((type) => {
            const cfg = MORPHEME_COLORS[type];
            return (
              <div key={type} className="inline-flex items-center gap-1.5">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${cfg.dot}`}
                  aria-hidden="true"
                />
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  {cfg.shortLabelRu}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Details Drawer / Modal */}
      {activeCell && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-slate-950/50 backdrop-blur-sm"
          onClick={() => setSelectedKey(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cell-details-title"
        >
          <div
            className="relative h-full w-full max-w-lg overflow-y-auto bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl p-5 sm:p-7 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Panel header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <span>{activePersonLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activePolarityLabel}</span>
                </div>
                <h2
                  id="cell-details-title"
                  className="mt-1 text-xl font-bold text-slate-900 dark:text-slate-100"
                >
                  {activeCell.titleRu}
                </h2>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {activeCell.titleTr}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedKey(null)}
                aria-label="Закрыть панель деталей"
                className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Large surface + word morphemes */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-4 space-y-2">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Собранная форма
              </div>
              <div className="text-2xl sm:text-3xl font-bold">
                <MorphemeSequence
                  tokens={activeCell.morphemes}
                  mode="word"
                  size="lg"
                  className="text-2xl sm:text-3xl"
                />
              </div>
              <p className="pt-1 text-sm font-medium text-slate-700 dark:text-slate-200">
                {activeCell.translationRu}
              </p>
            </div>

            {/* Step-by-step MorphemeToken breakdown */}
            <div className="space-y-2.5">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Пошаговый разбор морфем
              </div>
              <div className="space-y-2">
                {activeCell.morphemes.map((token, idx) => {
                  const cfg = MORPHEME_COLORS[token.type];
                  return (
                    <div
                      key={`${token.type}-${idx}-${token.text}`}
                      className="flex items-center justify-between gap-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 px-3.5 py-2.5"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span
                          className={`inline-flex items-center rounded-lg border px-2.5 py-1 text-sm font-bold shrink-0 ${cfg.badge}`}
                        >
                          {token.text}
                        </span>
                        <span className="text-xs text-slate-700 dark:text-slate-200 leading-snug">
                          {token.gloss}
                        </span>
                      </div>
                      <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500 shrink-0">
                        {cfg.shortLabelRu}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Formula */}
            {activeCell.formula.length > 0 && (
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Формула образования
                </div>
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/50 p-3.5">
                  <MorphemeSequence
                    tokens={activeCell.formula}
                    mode="formula"
                    showGloss
                    size="sm"
                  />
                </div>
              </div>
            )}

            {/* Notes */}
            {activeCell.notes && activeCell.notes.length > 0 && (
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Примечания и фонетические правила
                </div>
                <ul className="space-y-1.5 rounded-2xl border border-amber-200/80 dark:border-amber-800/70 bg-amber-50/70 dark:bg-amber-950/30 p-3.5 text-xs text-amber-900 dark:text-amber-200">
                  {activeCell.notes.map((note, idx) => (
                    <li key={`note-${idx}`} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Related topic link */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <Link
                to={`/topic/${activeCell.relatedTopicId}`}
                className="flex items-center justify-between gap-3 rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50/80 dark:bg-blue-950/50 px-4 py-3 text-sm font-semibold text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-950/80 transition-colors"
              >
                <span className="flex items-center gap-2.5 min-w-0">
                  <BookOpen className="h-4 w-4 shrink-0" />
                  <span className="truncate">
                    {activeTopicMeta
                      ? `Тема: ${activeTopicMeta.titleRu}`
                      : 'Перейти к правилу в справочнике'}
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
