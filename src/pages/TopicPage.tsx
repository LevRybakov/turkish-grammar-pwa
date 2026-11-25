import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  GitBranch,
  Layers,
  Search,
  Table2,
} from 'lucide-react';
import { ALL_TOPIC_META, getTopicById, getTopicMetaById } from '../data';
import {
  CEFR_LEVEL_COLORS,
  MORPHEME_COLORS,
  MORPHEME_ORDER,
} from '../constants/morphemeColors';
import type {
  ConjugationTable,
  ExampleSentence,
  InteractiveWord,
  MorphemeToken,
} from '../types/grammar';
import {
  AlphabetReadingTrainer,
  InteractiveAlphabet,
  TurkishVowelMatrix,
} from '../components/InteractiveAlphabet';
import { InteractiveMorphemeWord } from '../components/InteractiveMorphemeWord';
import { useSearchModal } from '../components/Layout';
import { MiniCheck } from '../components/MiniCheck';
import { MorphemeSequence } from '../components/MorphemeSequence';
import { useCompletedTopics } from '../components/useCompletedTopics';

type PolarityKey = keyof ConjugationTable;

const POLARITY_LABELS: Record<PolarityKey, string> = {
  affirmative: 'Утверждение',
  negative: 'Отрицание',
  question: 'Вопрос',
  negativeQuestion: 'Отрицат. вопрос',
};

const CANONICAL_PERSONS = ['ben', 'sen', 'o', 'biz', 'siz', 'onlar'] as const;

const PERSON_LABELS_RU: Record<string, string> = {
  ben: 'ben (я)',
  sen: 'sen (ты)',
  o: 'o (он/она/оно)',
  biz: 'biz (мы)',
  siz: 'siz (вы)',
  onlar: 'onlar (они)',
};

const LETTER_OR_DIGIT_RE = /[\p{L}\p{N}]/u;

function hasWordBoundaryBefore(text: string, index: number): boolean {
  if (index <= 0) {
    return true;
  }
  return !LETTER_OR_DIGIT_RE.test(text[index - 1] ?? '');
}

function hasWordBoundaryAfter(text: string, endIndex: number): boolean {
  if (endIndex >= text.length) {
    return true;
  }
  return !LETTER_OR_DIGIT_RE.test(text[endIndex] ?? '');
}

function renderAnnotatedSentence(sentence: ExampleSentence): ReactNode {
  const { tr, annotatedWords, id } = sentence;
  if (!annotatedWords || annotatedWords.length === 0) {
    return tr;
  }

  const sortedWords: Array<{ word: InteractiveWord; lower: string }> = [
    ...annotatedWords,
  ]
    .filter((w) => w.surface.length > 0)
    .sort((a, b) => b.surface.length - a.surface.length)
    .map((word) => ({
      word,
      lower: word.surface.toLocaleLowerCase('tr-TR'),
    }));

  if (sortedWords.length === 0) {
    return tr;
  }

  const nodes: ReactNode[] = [];
  let pos = 0;
  let plainStart = 0;

  while (pos < tr.length) {
    let matched: { word: InteractiveWord; len: number } | null = null;

    for (const candidate of sortedWords) {
      const len = candidate.word.surface.length;
      if (pos + len > tr.length) {
        continue;
      }
      if (!hasWordBoundaryBefore(tr, pos) || !hasWordBoundaryAfter(tr, pos + len)) {
        continue;
      }
      const slice = tr.slice(pos, pos + len);
      if (
        slice === candidate.word.surface ||
        slice.toLocaleLowerCase('tr-TR') === candidate.lower
      ) {
        matched = { word: candidate.word, len };
        break;
      }
    }

    if (matched) {
      if (pos > plainStart) {
        nodes.push(tr.slice(plainStart, pos));
      }
      const displaySlice = tr.slice(pos, pos + matched.len);
      nodes.push(
        <InteractiveMorphemeWord
          key={`${id}-w-${pos}`}
          word={matched.word}
          displaySurface={displaySlice}
        />
      );
      pos += matched.len;
      plainStart = pos;
    } else {
      pos += 1;
    }
  }

  if (plainStart < tr.length) {
    nodes.push(tr.slice(plainStart));
  }

  return nodes;
}

function getOrderedPersons(record: Record<string, MorphemeToken[]>): string[] {
  const keys = Object.keys(record);
  const ordered: string[] = [];
  for (const person of CANONICAL_PERSONS) {
    if (Object.prototype.hasOwnProperty.call(record, person)) {
      ordered.push(person);
    }
  }
  for (const key of keys) {
    if (!ordered.includes(key)) {
      ordered.push(key);
    }
  }
  return ordered;
}

export function TopicPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const { openSearch } = useSearchModal();
  const { isCompleted, markCompleted } = useCompletedTopics();

  const meta = topicId ? getTopicMetaById(topicId) : undefined;
  const topic = topicId ? getTopicById(topicId) : undefined;

  const [polarity, setPolarity] = useState<PolarityKey>('affirmative');

  useEffect(() => {
    setPolarity('affirmative');
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [topicId]);

  const { prevTopic, nextTopic } = useMemo(() => {
    if (!topicId) {
      return { prevTopic: undefined, nextTopic: undefined };
    }
    const idx = ALL_TOPIC_META.findIndex((t) => t.id === topicId);
    if (idx === -1) {
      return { prevTopic: undefined, nextTopic: undefined };
    }
    return {
      prevTopic: idx > 0 ? ALL_TOPIC_META[idx - 1] : undefined,
      nextTopic:
        idx < ALL_TOPIC_META.length - 1 ? ALL_TOPIC_META[idx + 1] : undefined,
    };
  }, [topicId]);

  // 1. Not found anywhere
  if (!meta && !topic) {
    return (
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 text-center shadow-sm">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
          <BookOpen className="h-6 w-6" />
        </div>
        <h1 className="mt-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
          Тема не найдена
        </h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Возможно, ссылка устарела или в адресе допущена опечатка.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            На главную
          </Link>
          <button
            type="button"
            onClick={() => openSearch('')}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            <Search className="h-4 w-4" />
            Открыть поиск
          </button>
        </div>
      </div>
    );
  }

  const prevNextFooter = (
    <nav
      aria-label="Навигация по темам"
      className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2"
    >
      {prevTopic ? (
        <Link
          to={`/topic/${prevTopic.id}`}
          className="group flex-1 flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-blue-500 group-hover:-translate-x-0.5 transition-all" />
          <div className="min-w-0">
            <div className="text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Предыдущая тема
            </div>
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
              {prevTopic.titleRu}
            </div>
          </div>
        </Link>
      ) : (
        <div className="hidden sm:block sm:flex-1" />
      )}

      {nextTopic ? (
        <Link
          to={`/topic/${nextTopic.id}`}
          className="group flex-1 flex items-center justify-end gap-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-right hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
        >
          <div className="min-w-0">
            <div className="text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Следующая тема
            </div>
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
              {nextTopic.titleRu}
            </div>
          </div>
          <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" />
        </Link>
      ) : (
        <div className="hidden sm:block sm:flex-1" />
      )}
    </nav>
  );

  // 2. Draft topic fallback card
  const isDraftFallback =
    !topic ||
    (Boolean(topic.isDraft) &&
      topic.examples.length === 0 &&
      topic.miniCheck.length === 0);

  if (isDraftFallback) {
    const draftSource = topic ?? meta!;
    return (
      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs font-bold ${CEFR_LEVEL_COLORS[draftSource.level]}`}
            >
              {draftSource.level}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/60 px-3 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-300">
              <Clock className="h-3.5 w-3.5" />
              Тема в разработке
            </span>
          </div>

          <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            {draftSource.titleRu}
          </h1>
          {draftSource.titleTr && (
            <p className="mt-1 text-base font-medium text-slate-500 dark:text-slate-400">
              {draftSource.titleTr}
            </p>
          )}

          {draftSource.affixes.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {draftSource.affixes.map((affix) => (
                <span
                  key={affix}
                  className="rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300"
                >
                  {affix}
                </span>
              ))}
            </div>
          )}

          {draftSource.summary && (
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {draftSource.summary}
            </p>
          )}

          {draftSource.formula && draftSource.formula.length > 0 && (
            <div className="mt-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5">
                Базовая формула
              </div>
              <MorphemeSequence
                tokens={draftSource.formula}
                mode="formula"
                showGloss
                size="md"
              />
            </div>
          )}

          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Подробные таблицы, интерактивные примеры и мини-чек для этой темы готовятся к следующей итерации. Пока вы можете воспользоваться поиском или тренажёрами:
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={() => openSearch('')}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition-colors"
              >
                <Search className="h-4 w-4" />
                Поиск по справочнику
              </button>
              <Link
                to="/tools/noun-simulator"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3.5 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-blue-400 transition-colors"
              >
                <Layers className="h-4 w-4 text-blue-500" />
                Симулятор падежей
              </Link>
              <Link
                to="/tools/verb-government"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3.5 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-indigo-400 transition-colors"
              >
                <GitBranch className="h-4 w-4 text-indigo-500" />
                Управление глаголов
              </Link>
              <Link
                to="/tools/tense-matrix"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3.5 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-emerald-400 transition-colors"
              >
                <Table2 className="h-4 w-4 text-emerald-500" />
                Матрица времён
              </Link>
            </div>
          </div>
        </div>

        {prevNextFooter}
      </div>
    );
  }

  // 3. Full GrammarTopic view (5 modular blocks)
  const completed = isCompleted(topic.id);
  const availablePolarities: PolarityKey[] = [];
  if (topic.conjugationTable) {
    availablePolarities.push('affirmative', 'negative', 'question');
    if (
      topic.conjugationTable.negativeQuestion &&
      Object.keys(topic.conjugationTable.negativeQuestion).length > 0
    ) {
      availablePolarities.push('negativeQuestion');
    }
  }

  const activePolarity: PolarityKey = availablePolarities.includes(polarity)
    ? polarity
    : 'affirmative';

  const activeTableRecord = topic.conjugationTable?.[activePolarity];
  const orderedPersons = activeTableRecord
    ? getOrderedPersons(activeTableRecord)
    : [];

  return (
    <article className="space-y-6">
      {/* Block 1: Header & visual formula */}
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs font-bold ${CEFR_LEVEL_COLORS[topic.level]}`}
          >
            {topic.level}
          </span>
          {topic.levels &&
            topic.levels
              .filter((lvl) => lvl !== topic.level)
              .map((lvl) => (
                <span
                  key={lvl}
                  className={`inline-flex items-center rounded-lg border px-2 py-0.5 text-xs font-semibold ${CEFR_LEVEL_COLORS[lvl]}`}
                >
                  {lvl}
                </span>
              ))}
          {completed && (
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Пройдено
            </span>
          )}
        </div>

        <h1 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          {topic.titleRu}
        </h1>
        {topic.titleTr && (
          <p className="mt-1 text-base font-medium text-slate-500 dark:text-slate-400">
            {topic.titleTr}
          </p>
        )}

        {topic.affixes.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {topic.affixes.map((affix) => (
              <span
                key={affix}
                className="rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300"
              >
                {affix}
              </span>
            ))}
          </div>
        )}

        <p className="mt-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          {topic.summary}
        </p>

        {topic.formula.length > 0 && (
          <div className="mt-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/50 p-4 sm:p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Визуальная формула
            </div>
            <MorphemeSequence
              tokens={topic.formula}
              mode="formula"
              showGloss
              size="lg"
            />

            <div className="mt-4 pt-3 border-t border-slate-200/70 dark:border-slate-800 flex flex-wrap items-center gap-x-4 gap-y-1.5">
              {MORPHEME_ORDER.map((type) => {
                const cfg = MORPHEME_COLORS[type];
                return (
                  <span
                    key={type}
                    className="inline-flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400"
                  >
                    <span className={`h-2 w-2 rounded-full ${cfg.dot}`} />
                    <span>{cfg.shortLabelRu}</span>
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* Block 2a: Custom interactive blocks for the Alphabet topic */}
      {topic.customInteractiveBlock === 'alphabet' && (
        <>
          <InteractiveAlphabet />
          <TurkishVowelMatrix />
          <AlphabetReadingTrainer />
        </>
      )}

      {/* Block 2: Interactive conjugation table */}
      {topic.conjugationTable && orderedPersons.length > 0 && (
        <section
          aria-labelledby="conjugation-heading"
          className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <h2
              id="conjugation-heading"
              className="text-lg font-bold text-slate-900 dark:text-slate-100"
            >
              Таблица форм
            </h2>

            <div
              role="tablist"
              aria-label="Полярность"
              className="inline-flex flex-wrap gap-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 p-1"
            >
              {availablePolarities.map((key) => {
                const active = key === activePolarity;
                return (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setPolarity(key)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                      active
                        ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    {POLARITY_LABELS[key]}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[460px] border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  <th className="py-2.5 pr-4">Лицо / форма</th>
                  <th className="py-2.5 pr-4">Результат</th>
                  <th className="py-2.5">Состав морфем</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {orderedPersons.map((personKey) => {
                  const tokens = activeTableRecord?.[personKey] ?? [];
                  return (
                    <tr
                      key={personKey}
                      className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                    >
                      <td className="py-3 pr-4 text-sm font-medium text-slate-600 dark:text-slate-300 whitespace-nowrap">
                        {PERSON_LABELS_RU[personKey] ?? personKey}
                      </td>
                      <td className="py-3 pr-4 whitespace-nowrap">
                        <MorphemeSequence
                          tokens={tokens}
                          mode="word"
                          size="md"
                        />
                      </td>
                      <td className="py-3">
                        <MorphemeSequence
                          tokens={tokens}
                          mode="formula"
                          size="sm"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Block 3: Live examples with morpheme breakdown */}
      {topic.examples.length > 0 && (
        <section
          aria-labelledby="examples-heading"
          className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
            <h2
              id="examples-heading"
              className="text-lg font-bold text-slate-900 dark:text-slate-100"
            >
              Живые примеры с морфемным разбором
            </h2>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Наведите или нажмите на подчёркнутое слово
            </span>
          </div>

          <ul className="mt-4 space-y-3.5">
            {topic.examples.map((example) => (
              <li
                key={example.id}
                className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40 p-4"
              >
                <div className="text-base sm:text-lg font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
                  {renderAnnotatedSentence(example)}
                </div>
                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
                  {example.ru}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Block 4: Contrastive box ("Не путать с...") */}
      {topic.doNotConfuse && (
        <section
          aria-labelledby="contrast-heading"
          className="rounded-2xl border border-amber-200 dark:border-amber-900/70 bg-amber-50/50 dark:bg-amber-950/20 p-5 sm:p-6 shadow-sm"
        >
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
            <h2
              id="contrast-heading"
              className="text-lg font-bold text-slate-900 dark:text-slate-100"
            >
              {topic.doNotConfuse.title}
            </h2>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {topic.doNotConfuse.items.map((item, idx) => {
              const relatedMeta = item.relatedTopicId
                ? getTopicMetaById(item.relatedTopicId)
                : undefined;

              return (
                <div
                  key={`${item.title}-${idx}`}
                  className="rounded-xl border border-amber-200/80 dark:border-amber-800/60 bg-white dark:bg-slate-900 p-4 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.explanation}
                    </p>
                    <div className="mt-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800 p-3">
                      <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {item.exampleTr}
                      </div>
                      <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                        {item.exampleRu}
                      </div>
                    </div>
                  </div>

                  {item.relatedTopicId && (
                    <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                      <Link
                        to={`/topic/${item.relatedTopicId}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <span>
                          {relatedMeta
                            ? `Перейти к теме: ${relatedMeta.titleRu}`
                            : 'Перейти к связанной теме'}
                        </span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Block 5: Mini-check */}
      {topic.miniCheck.length > 0 && (
        <MiniCheck
          key={topic.id}
          questions={topic.miniCheck}
          isTopicCompleted={completed}
          onComplete={() => markCompleted(topic.id)}
        />
      )}

      {prevNextFooter}
    </article>
  );
}
