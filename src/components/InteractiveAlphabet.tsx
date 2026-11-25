import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Info,
  RotateCcw,
  Sparkles,
  Volume2,
  XCircle,
} from 'lucide-react';
import {
  READING_DRILL_ITEMS,
  TURKISH_ALPHABET,
  type TurkishLetter,
} from '../data/alphabet';
import { playTurkishAudio } from '../lib/turkishAudio';

type LetterFilter = 'all' | 'special' | 'vowels' | 'consonants';

const FILTER_OPTIONS: Array<{ id: LetterFilter; label: string; count: number }> = [
  { id: 'all', label: 'Все', count: TURKISH_ALPHABET.length },
  {
    id: 'special',
    label: 'Особые',
    count: TURKISH_ALPHABET.filter((l) => l.isSpecial).length,
  },
  {
    id: 'vowels',
    label: 'Гласные',
    count: TURKISH_ALPHABET.filter((l) => l.kind === 'vowel').length,
  },
  {
    id: 'consonants',
    label: 'Согласные',
    count: TURKISH_ALPHABET.filter((l) => l.kind === 'consonant').length,
  },
];

const VOWEL_HARMONY_PREVIEW: Record<
  string,
  { a2: string; i4: string; pairExample: string }
> = {
  a: { a2: '-lar / -da', i4: '-lı / mı', pairExample: 'masa → masalar, masa mı?' },
  'dotless-i': { a2: '-lar / -da', i4: '-lı / mı', pairExample: 'kapı → kapılar, kapı mı?' },
  o: { a2: '-lar / -da', i4: '-lu / mu', pairExample: 'yol → yollar, yol mu?' },
  u: { a2: '-lar / -da', i4: '-lu / mu', pairExample: 'okul → okullar, okul mu?' },
  e: { a2: '-ler / -de', i4: '-li / mi', pairExample: 'ev → evler, ev mi?' },
  'dotted-i': { a2: '-ler / -de', i4: '-li / mi', pairExample: 'iş → işler, iş mi?' },
  'o-umlaut': { a2: '-ler / -de', i4: '-lü / mü', pairExample: 'göz → gözler, gözlük' },
  'u-umlaut': { a2: '-ler / -de', i4: '-lü / mü', pairExample: 'gün → günler, günlük' },
};

function matchesFilter(letter: TurkishLetter, filter: LetterFilter): boolean {
  if (filter === 'all') return true;
  if (filter === 'special') return letter.isSpecial;
  if (filter === 'vowels') return letter.kind === 'vowel';
  return letter.kind === 'consonant';
}

function highlightLettersInWord(
  word: string,
  targetChars: string[]
): ReactNode {
  const normalizedTargets = new Set(
    targetChars.map((ch) => ch.toLocaleLowerCase('tr-TR'))
  );
  return Array.from(word).map((ch, idx) => {
    const isMatch = normalizedTargets.has(ch.toLocaleLowerCase('tr-TR'));
    if (!isMatch) {
      return <span key={idx}>{ch}</span>;
    }
    return (
      <span
        key={idx}
        className="text-blue-600 dark:text-blue-400 underline decoration-blue-400/70 dark:decoration-blue-500/70 decoration-2 underline-offset-4 font-bold"
      >
        {ch}
      </span>
    );
  });
}

function shuffleArray<T>(items: readonly T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Block 1 of alphabet topic: Interactive 29-letter grid + detailed letter inspector.
 * Single level of filter tabs only.
 */
export function InteractiveAlphabet() {
  const [filter, setFilter] = useState<LetterFilter>('all');
  const [selectedId, setSelectedId] = useState<string>('c');
  const [playingId, setPlayingId] = useState<string | null>(null);

  const selectedIndex = useMemo(() => {
    const idx = TURKISH_ALPHABET.findIndex((l) => l.id === selectedId);
    return idx === -1 ? 0 : idx;
  }, [selectedId]);

  const selectedLetter = TURKISH_ALPHABET[selectedIndex];

  const triggerAudio = useCallback((audioId: string, fallbackText: string) => {
    setPlayingId(audioId);
    playTurkishAudio(audioId, fallbackText, () => {
      setPlayingId((curr) => (curr === audioId ? null : curr));
    });
  }, []);

  const handleSelectFilter = (nextFilter: LetterFilter) => {
    setFilter(nextFilter);
    if (!matchesFilter(selectedLetter, nextFilter)) {
      const firstMatch = TURKISH_ALPHABET.find((l) =>
        matchesFilter(l, nextFilter)
      );
      if (firstMatch) {
        setSelectedId(firstMatch.id);
      }
    }
  };

  const handleStepLetter = useCallback(
    (delta: number) => {
      const pool = TURKISH_ALPHABET.filter((l) => matchesFilter(l, filter));
      if (pool.length === 0) return;
      const currentInPool = pool.findIndex((l) => l.id === selectedLetter.id);
      const nextIdx =
        currentInPool === -1
          ? 0
          : (currentInPool + delta + pool.length) % pool.length;
      setSelectedId(pool[nextIdx].id);
    },
    [filter, selectedLetter.id]
  );

  return (
    <section
      aria-labelledby="interactive-alphabet-heading"
      className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm"
    >
      {/* Header */}
      <div className="pb-4 border-b border-slate-100 dark:border-slate-800">
        <h2
          id="interactive-alphabet-heading"
          className="text-lg font-bold text-slate-900 dark:text-slate-100"
        >
          Интерактивный алфавит
        </h2>
        <p className="mt-0.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Нажимайте на буквы, чтобы увидеть артикуляцию и послушать турецкое произношение
        </p>
      </div>

      <div className="mt-4 space-y-4">
        {/* Filter tabs + legend */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div
            role="tablist"
            aria-label="Фильтр букв алфавита"
            className="inline-flex max-w-full overflow-x-auto gap-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 p-1"
          >
            {FILTER_OPTIONS.map((opt) => {
              const active = filter === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => handleSelectFilter(opt.id)}
                  className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                    active
                      ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  <span>{opt.label}</span>
                  <span
                    className={`text-[11px] ${
                      active
                        ? 'text-blue-500/80 dark:text-blue-400/80'
                        : 'text-slate-400 dark:text-slate-500'
                    }`}
                  >
                    {opt.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              Особая буква
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Гласная
            </span>
          </div>
        </div>

        {/* 29-letter grid */}
        <div
          role="listbox"
          aria-label="Буквы турецкого алфавита"
          className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-1.5 sm:gap-2"
        >
          {TURKISH_ALPHABET.map((letter) => {
            const isSelected = letter.id === selectedLetter.id;
            const isMatched = matchesFilter(letter, filter);

            return (
              <button
                key={letter.id}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => setSelectedId(letter.id)}
                className={`relative flex flex-col items-center justify-center rounded-xl border py-2 px-1 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/60 ${
                  isSelected
                    ? 'border-blue-500 bg-blue-600 text-white shadow-sm scale-[1.03] z-10'
                    : letter.isSpecial
                      ? 'border-amber-200 dark:border-amber-800/70 bg-amber-50/70 dark:bg-amber-950/30 text-slate-900 dark:text-slate-100 hover:border-amber-400 dark:hover:border-amber-600'
                      : letter.kind === 'vowel'
                        ? 'border-blue-200/80 dark:border-blue-900/70 bg-blue-50/50 dark:bg-blue-950/25 text-slate-900 dark:text-slate-100 hover:border-blue-400 dark:hover:border-blue-600'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40 text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600'
                } ${!isMatched && !isSelected ? 'opacity-30 hover:opacity-75' : ''}`}
              >
                <span className="absolute top-1 right-1 flex gap-0.5">
                  {letter.isSpecial && (
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isSelected ? 'bg-amber-300' : 'bg-amber-500'
                      }`}
                    />
                  )}
                  {letter.kind === 'vowel' && (
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isSelected ? 'bg-blue-200' : 'bg-blue-500'
                      }`}
                    />
                  )}
                </span>

                <span className="text-base sm:text-lg font-bold leading-tight tracking-tight">
                  {letter.upper}
                  <span
                    className={`ml-0.5 font-medium ${
                      isSelected
                        ? 'text-blue-100'
                        : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {letter.lower}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected letter inspector card */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/50 p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="flex h-20 w-20 sm:h-24 sm:w-24 shrink-0 flex-col items-center justify-center rounded-2xl border border-blue-200 dark:border-blue-800/80 bg-white dark:bg-slate-900 shadow-sm">
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-none">
                  {selectedLetter.upper}
                  <span className="ml-1 font-semibold text-blue-600 dark:text-blue-400">
                    {selectedLetter.lower}
                  </span>
                </div>
                <div className="mt-1.5 text-[11px] font-medium text-slate-400 dark:text-slate-500">
                  {selectedIndex + 1} / {TURKISH_ALPHABET.length}
                </div>
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span
                    className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-semibold ${
                      selectedLetter.kind === 'vowel'
                        ? 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300'
                        : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {selectedLetter.kind === 'vowel' ? 'Гласная' : 'Согласная'}
                  </span>

                  {selectedLetter.isSpecial && (
                    <span className="inline-flex items-center gap-1 rounded-md border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/70 px-2 py-0.5 text-[11px] font-semibold text-amber-700 dark:text-amber-300">
                      <Sparkles className="h-3 w-3" />
                      Особая буква
                    </span>
                  )}

                  {selectedLetter.kind === 'vowel' && (
                    <>
                      <span className="inline-flex items-center rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:text-slate-300">
                        {selectedLetter.vowelBackness === 'back'
                          ? 'Твёрдая (kalın)'
                          : 'Мягкая (ince)'}
                      </span>
                      <span className="inline-flex items-center rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:text-slate-300">
                        {selectedLetter.vowelRounding === 'rounded'
                          ? 'Огубленная'
                          : 'Неогубленная'}
                      </span>
                    </>
                  )}

                  {selectedLetter.isVoicelessFistikci && (
                    <span className="inline-flex items-center rounded-md border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 text-[11px] font-medium text-purple-700 dark:text-purple-300">
                      Глухая · Fıstıkçı Şahap
                    </span>
                  )}
                </div>

                <div className="mt-2.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                    {selectedLetter.ruSound}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    IPA: {selectedLetter.ipa}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Название:{' '}
                    <strong className="text-slate-700 dark:text-slate-200">
                      {selectedLetter.nameTr}
                    </strong>
                  </span>
                </div>

                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedLetter.tip}
                </p>
              </div>
            </div>

            {/* Audio & Prev/Next controls */}
            <div className="flex items-center gap-2 shrink-0 self-start">
              <button
                type="button"
                onClick={() =>
                  triggerAudio(selectedLetter.audioId, selectedLetter.lower)
                }
                className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-colors ${
                  playingId === selectedLetter.audioId
                    ? 'border-blue-500 bg-blue-600 text-white'
                    : 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/70'
                }`}
                title="Озвучить букву по-турецки"
              >
                <Volume2 className="h-4 w-4" />
                <span>Озвучить</span>
              </button>

              <div className="inline-flex rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden">
                <button
                  type="button"
                  onClick={() => handleStepLetter(-1)}
                  aria-label="Предыдущая буква"
                  className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleStepLetter(1)}
                  aria-label="Следующая буква"
                  className="border-l border-slate-200 dark:border-slate-700 p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {selectedLetter.trap && (
            <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-amber-200/90 dark:border-amber-800/70 bg-amber-50/80 dark:bg-amber-950/30 px-3.5 py-2.5 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
              <span>{selectedLetter.trap}</span>
            </div>
          )}

          {/* Examples for selected letter */}
          <div className="mt-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5">
              Примеры слов с буквой «{selectedLetter.upper} {selectedLetter.lower}»
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {selectedLetter.examples.map((ex) => {
                const isPlaying = playingId === ex.audioId;
                return (
                  <div
                    key={ex.tr}
                    className="flex items-center justify-between gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3.5 py-2.5"
                  >
                    <div className="min-w-0">
                      <div className="text-base font-semibold text-slate-900 dark:text-slate-100">
                        {highlightLettersInWord(ex.tr, [
                          selectedLetter.lower,
                          selectedLetter.upper,
                        ])}
                      </div>
                      <div className="mt-0.5 flex flex-wrap items-center gap-x-2 text-xs text-slate-500 dark:text-slate-400">
                        <span className="font-mono text-slate-600 dark:text-slate-300">
                          {ex.pronunciation}
                        </span>
                        <span>— {ex.ru}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => triggerAudio(ex.audioId, ex.tr)}
                      aria-label={`Озвучить слово ${ex.tr}`}
                      className={`shrink-0 rounded-lg p-1.5 transition-colors ${
                        isPlaying
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50'
                      }`}
                    >
                      <Volume2 className="h-4 w-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Note about Q, W, X */}
        <div className="flex items-start gap-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 px-3.5 py-2.5 text-xs text-slate-600 dark:text-slate-400">
          <Info className="h-4 w-4 shrink-0 mt-0.5 text-slate-400" />
          <span>
            В турецком алфавите{' '}
            <strong className="text-slate-700 dark:text-slate-200">
              нет букв Q, W, X
            </strong>{' '}
            — в заимствованиях они передаются через{' '}
            <code className="font-semibold">k</code>,{' '}
            <code className="font-semibold">v</code>,{' '}
            <code className="font-semibold">ks</code> (например,{' '}
            <span className="italic">taksi</span>,{' '}
            <span className="italic">voleybol</span>).
          </span>
        </div>
      </div>
    </section>
  );
}

/**
 * Block 2 of alphabet topic: Standalone 8-vowel interactive matrix.
 */
export function TurkishVowelMatrix() {
  const [selectedVowelId, setSelectedVowelId] = useState<string>('o-umlaut');
  const [playingId, setPlayingId] = useState<string | null>(null);

  const vowelsById = useMemo(() => {
    const map: Record<string, TurkishLetter> = {};
    for (const letter of TURKISH_ALPHABET) {
      if (letter.kind === 'vowel') {
        map[letter.id] = letter;
      }
    }
    return map;
  }, []);

  const activeVowel = vowelsById[selectedVowelId] ?? vowelsById.a;

  const triggerAudio = useCallback((audioId: string, fallbackText: string) => {
    setPlayingId(audioId);
    playTurkishAudio(audioId, fallbackText, () => {
      setPlayingId((curr) => (curr === audioId ? null : curr));
    });
  }, []);

  const vowelMatrixRows: Array<{
    rowTitle: string;
    rowSub: string;
    toneClass: string;
    unrounded: [TurkishLetter, TurkishLetter];
    rounded: [TurkishLetter, TurkishLetter];
  }> = [
    {
      rowTitle: 'Твёрдые (kalın)',
      rowSub: 'Задний ряд',
      toneClass:
        'bg-amber-50/70 dark:bg-amber-950/20 border-amber-200/80 dark:border-amber-900/60',
      unrounded: [vowelsById.a, vowelsById['dotless-i']],
      rounded: [vowelsById.o, vowelsById.u],
    },
    {
      rowTitle: 'Мягкие (ince)',
      rowSub: 'Передний ряд',
      toneClass:
        'bg-blue-50/70 dark:bg-blue-950/20 border-blue-200/80 dark:border-blue-900/60',
      unrounded: [vowelsById.e, vowelsById['dotted-i']],
      rounded: [vowelsById['o-umlaut'], vowelsById['u-umlaut']],
    },
  ];

  const firstExample = activeVowel?.examples[0];

  return (
    <section
      aria-labelledby="vowel-matrix-heading"
      className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm"
    >
      <div className="pb-4 border-b border-slate-100 dark:border-slate-800">
        <h2
          id="vowel-matrix-heading"
          className="text-lg font-bold text-slate-900 dark:text-slate-100"
        >
          8 гласных
        </h2>
        <p className="mt-0.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Симметричная система твёрдых и мягких гласных — основа гармонии гласных. Нажмите на любую гласную:
        </p>
      </div>

      <div className="mt-4 space-y-5">
        <div className="overflow-x-auto">
          <div className="min-w-[460px] space-y-2.5">
            <div className="grid grid-cols-[140px_1fr_1fr] gap-2.5 px-1 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              <div />
              <div className="text-center">Неогубленные (düz)</div>
              <div className="text-center">Огубленные (yuvarlak)</div>
            </div>

            {vowelMatrixRows.map((row) => (
              <div
                key={row.rowTitle}
                className={`grid grid-cols-[140px_1fr_1fr] gap-2.5 rounded-2xl border p-2.5 ${row.toneClass}`}
              >
                <div className="flex flex-col justify-center px-2">
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    {row.rowTitle}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    {row.rowSub}
                  </div>
                </div>

                {[row.unrounded, row.rounded].map((pair, colIdx) => (
                  <div key={colIdx} className="grid grid-cols-2 gap-2">
                    {pair.map((vowel) => {
                      const isSelected = activeVowel?.id === vowel.id;
                      return (
                        <button
                          key={vowel.id}
                          type="button"
                          onClick={() => setSelectedVowelId(vowel.id)}
                          className={`flex flex-col items-center justify-center rounded-xl border py-2.5 px-2 transition-all ${
                            isSelected
                              ? 'border-blue-500 bg-blue-600 text-white shadow-sm'
                              : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 hover:border-blue-400 dark:hover:border-blue-500'
                          }`}
                        >
                          <span className="text-lg font-bold leading-none">
                            {vowel.upper} {vowel.lower}
                          </span>
                          <span
                            className={`mt-1 text-[11px] ${
                              isSelected
                                ? 'text-blue-100'
                                : 'text-slate-500 dark:text-slate-400'
                            }`}
                          >
                            {vowel.vowelHeight === 'wide' ? 'широкая' : 'узкая'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {activeVowel && (
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/50 p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white text-xl font-bold shadow-sm">
                  {activeVowel.upper}
                  {activeVowel.lower}
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 dark:text-slate-100">
                    Звук {activeVowel.ruSound}{' '}
                    <span className="text-xs font-mono font-normal text-slate-500 dark:text-slate-400">
                      {activeVowel.ipa}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {activeVowel.vowelBackness === 'back' ? 'Твёрдая' : 'Мягкая'} ·{' '}
                    {activeVowel.vowelRounding === 'rounded'
                      ? 'огубленная'
                      : 'неогубленная'}{' '}
                    · {activeVowel.vowelHeight === 'wide' ? 'широкая' : 'узкая'}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    triggerAudio(activeVowel.audioId, activeVowel.lower)
                  }
                  className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition-colors ${
                    playingId === activeVowel.audioId
                      ? 'border-blue-500 bg-blue-600 text-white'
                      : 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/70'
                  }`}
                >
                  <Volume2 className="h-3.5 w-3.5" />
                  <span>Звук «{activeVowel.lower}»</span>
                </button>

                {firstExample && (
                  <button
                    type="button"
                    onClick={() =>
                      triggerAudio(firstExample.audioId, firstExample.tr)
                    }
                    className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition-colors ${
                      playingId === firstExample.audioId
                        ? 'border-blue-500 bg-blue-600 text-white'
                        : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:border-blue-400 dark:hover:border-blue-600'
                    }`}
                  >
                    <Volume2 className="h-3.5 w-3.5" />
                    <span>Пример: {firstExample.tr}</span>
                  </button>
                )}
              </div>
            </div>

            <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {activeVowel.tip}
            </p>

            {VOWEL_HARMONY_PREVIEW[activeVowel.id] && (
              <div className="mt-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3.5 py-3">
                <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-slate-100">
                    Выбор аффиксов:
                  </span>{' '}
                  на 2 →{' '}
                  <code className="rounded bg-blue-50 dark:bg-blue-950/60 px-1.5 py-0.5 font-semibold text-blue-700 dark:text-blue-300">
                    {VOWEL_HARMONY_PREVIEW[activeVowel.id].a2}
                  </code>
                  , на 4 →{' '}
                  <code className="rounded bg-indigo-50 dark:bg-indigo-950/60 px-1.5 py-0.5 font-semibold text-indigo-700 dark:text-indigo-300">
                    {VOWEL_HARMONY_PREVIEW[activeVowel.id].i4}
                  </code>
                  <span className="block sm:inline sm:ml-2 text-xs text-slate-500 dark:text-slate-400">
                    ({VOWEL_HARMONY_PREVIEW[activeVowel.id].pairExample})
                  </span>
                </div>

                <Link
                  to="/topic/vowel-harmony"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline shrink-0"
                >
                  <span>Гармония гласных</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

/**
 * Block 3 of alphabet topic: Standalone interactive reading trainer (replaces "Живые примеры").
 */
export function AlphabetReadingTrainer() {
  const [drillIndex, setDrillIndex] = useState(0);
  const [drillOrder, setDrillOrder] = useState(() => READING_DRILL_ITEMS);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [drillFinished, setDrillFinished] = useState(false);
  const [playingId, setPlayingId] = useState<string | null>(null);

  const currentDrill = drillOrder[drillIndex];

  const triggerAudio = useCallback((audioId: string, fallbackText: string) => {
    setPlayingId(audioId);
    playTurkishAudio(audioId, fallbackText, () => {
      setPlayingId((curr) => (curr === audioId ? null : curr));
    });
  }, []);

  const handlePickDrillOption = (option: string) => {
    if (selectedAnswer !== null || !currentDrill) return;
    setSelectedAnswer(option);
    if (option === currentDrill.correctOption) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextDrill = () => {
    if (drillIndex + 1 >= drillOrder.length) {
      setDrillFinished(true);
    } else {
      setDrillIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    }
  };

  const handleRestartDrill = () => {
    const reshuffled = shuffleArray(READING_DRILL_ITEMS).map((item) => ({
      ...item,
      options: shuffleArray(item.options),
    }));
    setDrillOrder(reshuffled);
    setDrillIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setDrillFinished(false);
  };

  return (
    <section
      aria-labelledby="reading-trainer-heading"
      className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <h2
            id="reading-trainer-heading"
            className="text-lg font-bold text-slate-900 dark:text-slate-100"
          >
            Тренажёр чтения
          </h2>
          <p className="mt-0.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Выберите правильное произношение слов с особыми турецкими буквами
          </p>
        </div>

        {!drillFinished && (
          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span>
              Слово{' '}
              <strong className="text-slate-800 dark:text-slate-200">
                {drillIndex + 1}
              </strong>{' '}
              из {drillOrder.length}
            </span>
            <span>
              Верно:{' '}
              <strong className="text-emerald-600 dark:text-emerald-400">
                {score}
              </strong>
            </span>
          </div>
        )}
      </div>

      <div className="mt-4">
        {drillFinished ? (
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/50 p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-slate-100">
              Тренировка завершена: {score} из {drillOrder.length}
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {score === drillOrder.length
                ? 'Отлично! Вы уверенно читаете все особые буквы турецкого алфавита.'
                : 'Хорошая практика! Попробуйте пройти ещё раз — слова перемешаются в новом порядке.'}
            </p>
            <button
              type="button"
              onClick={handleRestartDrill}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              Пройти ещё раз
            </button>
          </div>
        ) : currentDrill ? (
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/50 p-4 sm:p-5 space-y-4">
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 text-center">
              <div className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Как читается это слово?
              </div>
              <div className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                {highlightLettersInWord(
                  currentDrill.wordTr,
                  currentDrill.highlightChars
                )}
              </div>
              <div className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
                «{currentDrill.meaningRu}»
              </div>

              {selectedAnswer !== null && (
                <button
                  type="button"
                  onClick={() =>
                    triggerAudio(currentDrill.audioId, currentDrill.wordTr)
                  }
                  className={`mt-3 inline-flex items-center gap-1.5 rounded-lg border px-3 py-1 text-xs font-semibold transition-colors ${
                    playingId === currentDrill.audioId
                      ? 'border-blue-500 bg-blue-600 text-white'
                      : 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/70'
                  }`}
                >
                  <Volume2 className="h-3.5 w-3.5" />
                  Послушать произношение
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {currentDrill.options.map((opt) => {
                const isPicked = selectedAnswer === opt;
                const isCorrect = opt === currentDrill.correctOption;
                const answered = selectedAnswer !== null;

                let btnClass =
                  'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 hover:border-blue-400 dark:hover:border-blue-500';
                if (answered) {
                  if (isCorrect) {
                    btnClass =
                      'border-emerald-400 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200';
                  } else if (isPicked) {
                    btnClass =
                      'border-rose-400 dark:border-rose-700 bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200';
                  } else {
                    btnClass =
                      'border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-slate-400 dark:text-slate-500 opacity-70';
                  }
                }

                return (
                  <button
                    key={opt}
                    type="button"
                    disabled={answered}
                    onClick={() => handlePickDrillOption(opt)}
                    className={`flex items-center justify-center gap-1.5 rounded-xl border px-3 py-3 text-sm font-mono font-semibold transition-all ${btnClass}`}
                  >
                    <span>{opt}</span>
                    {answered && isCorrect && (
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    )}
                    {answered && isPicked && !isCorrect && (
                      <XCircle className="h-4 w-4 text-rose-600 dark:text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {selectedAnswer !== null && (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3">
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {currentDrill.explanation}
                </p>
                <button
                  type="button"
                  onClick={handleNextDrill}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 px-4 py-2 text-xs sm:text-sm font-semibold text-white transition-colors shrink-0"
                >
                  <span>
                    {drillIndex + 1 >= drillOrder.length
                      ? 'Показать результат'
                      : 'Дальше'}
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
