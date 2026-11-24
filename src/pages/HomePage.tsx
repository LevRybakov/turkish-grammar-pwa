import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GitBranch,
  Layers,
  Search,
  Sparkles,
  Table2,
} from 'lucide-react';
import { ALL_TOPIC_META } from '../data';
import {
  CEFR_LEVEL_COLORS,
  MORPHEME_COLORS,
  MORPHEME_ORDER,
} from '../constants/morphemeColors';
import type { CEFRLevel, MorphemeToken, TopicMeta } from '../types/grammar';
import { useSearchModal } from '../components/Layout';
import { MorphemeSequence } from '../components/MorphemeSequence';
import { useCompletedTopics } from '../components/useCompletedTopics';

const LEVELS: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1'];

const LEVEL_DESCRIPTIONS: Record<CEFRLevel, string> = {
  A1: 'Алфавит, гармония гласных, базовые падежи и настоящее время',
  A2: 'Прошедшее и будущее время, принадлежность, сравнение и модальность',
  B1: 'Причастия, деепричастия, условное наклонение и страдательный залог',
  B2: 'Сложные союзы, косвенная речь, понудительный залог и оттенки',
  C1: 'Академические конструкции, редкие формы и стилистические нюансы',
};

const EXAMPLE_SEARCH_PILLS = ['-yor', '-dığı', '-(y)ebil', '-ken', 'şart'] as const;

const DEMO_WORD_TOKENS: MorphemeToken[] = [
  { text: 'ev', type: 'root', gloss: 'дом' },
  { text: 'ler', type: 'affix', gloss: 'мн.ч.' },
  { text: 'imiz', type: 'person', gloss: 'наш' },
  { text: 'de', type: 'affix', gloss: 'в (местн. падеж)' },
];

export function HomePage() {
  const { openSearch } = useSearchModal();
  const { completedIds } = useCompletedTopics();

  const totalTopics = ALL_TOPIC_META.length;
  const readyTopics = useMemo(
    () => ALL_TOPIC_META.filter((t) => !t.isDraft),
    []
  );
  const completedCount = useMemo(
    () => ALL_TOPIC_META.filter((t) => completedIds.has(t.id)).length,
    [completedIds]
  );
  const progressPct =
    totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  const topicsByLevel = useMemo(() => {
    const grouped: Record<CEFRLevel, TopicMeta[]> = {
      A1: [],
      A2: [],
      B1: [],
      B2: [],
      C1: [],
    };
    for (const topic of ALL_TOPIC_META) {
      grouped[topic.level].push(topic);
    }
    return grouped;
  }, []);

  return (
    <div className="space-y-8">
      {/* Hero section */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-blue-50 via-white to-indigo-50/70 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/40 p-6 sm:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-100/70 dark:bg-blue-950/70 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Интерактивный справочник по турецкому языку (A1–C1)</span>
          </div>

          <h1 className="mt-4 text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Грамматика турецкого языка через живую морфологию
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Находите любой аффикс даже без турецкой раскладки, разбирайте слова по цветным морфемам и закрепляйте правила в интерактивных тренажёрах.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => openSearch('')}
              className="flex-1 sm:max-w-md flex items-center justify-between gap-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3 text-left text-sm text-slate-500 dark:text-slate-400 shadow-sm hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <span className="flex items-center gap-2.5 truncate">
                <Search className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                <span className="truncate">
                  Поиск по аффиксам, темам и глаголам...
                </span>
              </span>
              <kbd className="hidden sm:inline-flex items-center rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-2 py-0.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                Ctrl+K
              </kbd>
            </button>

            {readyTopics[0] && (
              <Link
                to={`/topic/${readyTopics[0].id}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 text-sm font-semibold shadow-sm transition-colors shrink-0"
              >
                <BookOpen className="h-4 w-4" />
                <span>Начать с первой темы</span>
              </Link>
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Быстрый тест поиска:
            </span>
            {EXAMPLE_SEARCH_PILLS.map((pill) => (
              <button
                key={pill}
                type="button"
                onClick={() => openSearch(pill)}
                className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {pill}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Progress & 3 Interactive Tools */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Progress card */}
        <section className="lg:col-span-1 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Ваш прогресс
              </h2>
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                {completedCount}
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                из {totalTopics} тем
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Готовых карточек с мини-чеком: {readyTopics.length}
            </p>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
              <span>Освоено</span>
              <span>{progressPct}%</span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all duration-300"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        </section>

        {/* 3 Interactive trainer cards */}
        <section className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            to="/tools/noun-simulator"
            className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:border-blue-400 dark:hover:border-blue-600 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="mt-3.5 text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Симулятор падежей
              </h3>
              <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Сборка форм существительных: мн. число, принадлежность, падеж и озвончение.
              </p>
            </div>
            <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
              <span>Открыть</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          <Link
            to="/tools/verb-government"
            className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:border-indigo-400 dark:hover:border-indigo-600 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400">
                <GitBranch className="h-5 w-5" />
              </div>
              <h3 className="mt-3.5 text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Управление глаголов
              </h3>
              <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Словарь падежного управления глаголов с фильтрами и разбором «ловушек».
              </p>
            </div>
            <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <span>Открыть</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          <Link
            to="/tools/tense-matrix"
            className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:border-emerald-400 dark:hover:border-emerald-600 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400">
                <Table2 className="h-5 w-5" />
              </div>
              <h3 className="mt-3.5 text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Матрица времён
              </h3>
              <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Спряжение любого глагола по 5 временам, 6 лицам и 4 полярностям.
              </p>
            </div>
            <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span>Открыть</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </section>
      </div>

      {/* Quick start by CEFR level */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Быстрый старт по уровням A1–C1
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-3.5">
          {LEVELS.map((level) => {
            const levelTopics = topicsByLevel[level];
            const levelReady = levelTopics.filter((t) => !t.isDraft);
            const firstTarget = levelReady[0] ?? levelTopics[0];
            const levelCompleted = levelTopics.filter((t) =>
              completedIds.has(t.id)
            ).length;

            return (
              <div
                key={level}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs font-bold ${CEFR_LEVEL_COLORS[level]}`}
                    >
                      {level}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {levelCompleted}/{levelTopics.length} тем
                    </span>
                  </div>
                  <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {LEVEL_DESCRIPTIONS[level]}
                  </p>
                </div>

                {firstTarget ? (
                  <Link
                    to={`/topic/${firstTarget.id}`}
                    className="mt-4 inline-flex items-center justify-between gap-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span className="truncate">{firstTarget.titleRu}</span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                  </Link>
                ) : (
                  <span className="mt-4 text-xs text-slate-400 dark:text-slate-500">
                    Скоро появятся темы
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Morpheme color coding legend */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Цветовое кодирование морфем
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Единая палитра во всех формулах, таблицах спряжения и интерактивных примерах.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 px-4 py-3">
            <MorphemeSequence
              tokens={DEMO_WORD_TOKENS}
              mode="formula"
              showGloss
              size="sm"
            />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {MORPHEME_ORDER.map((type) => {
            const cfg = MORPHEME_COLORS[type];
            return (
              <div
                key={type}
                className="flex items-center gap-3 rounded-xl border border-slate-200/70 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 px-3.5 py-2.5"
              >
                <span
                  className={`h-3 w-3 shrink-0 rounded-full ${cfg.dot}`}
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <span
                    className={`inline-block rounded border px-1.5 py-0.5 text-[11px] font-semibold ${cfg.badge}`}
                  >
                    {cfg.shortLabelRu}
                  </span>
                  <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                    {cfg.labelRu}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
