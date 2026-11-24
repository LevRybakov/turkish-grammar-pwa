import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Layers, RotateCcw, Sparkles, X } from 'lucide-react';
import {
  MORPHEME_COLORS,
  MORPHEME_ORDER,
} from '../../constants/morphemeColors';
import { declineNoun, getLastVowel, toTurkishLower } from '../../engine';
import { MorphemeSequence } from '../../components/MorphemeSequence';
import type { PossessivePerson } from '../../types/morphology';

const TURKISH_LETTERS = ['ğ', 'ı', 'ö', 'ü', 'ş', 'ç'] as const;

const QUICK_EXAMPLES = [
  'ev',
  'araba',
  'kitap',
  'dolap',
  'ağaç',
  'burun',
  'su',
  'saat',
  'kalp',
  'şehir',
  'renk',
] as const;

const POSSESSIVE_OPTIONS: ReadonlyArray<{
  id: PossessivePerson;
  label: string;
}> = [
  { id: 'none', label: 'нет' },
  { id: 'benim', label: 'benim (мой)' },
  { id: 'senin', label: 'senin (твой)' },
  { id: 'onun', label: 'onun (его/её)' },
  { id: 'bizim', label: 'bizim (наш)' },
  { id: 'sizin', label: 'sizin (ваш)' },
  { id: 'onlarin', label: 'onlarin (их)' },
];

export function NounSimulatorPage() {
  const [word, setWord] = useState('kitap');
  const [plural, setPlural] = useState(false);
  const [possessive, setPossessive] = useState<PossessivePerson>('none');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const normalizedInput = useMemo(() => toTurkishLower(word.trim()), [word]);

  const vowelInfo = useMemo(
    () => getLastVowel(normalizedInput),
    [normalizedInput]
  );

  const simulation = useMemo(
    () => declineNoun(word, { plural, possessive }),
    [word, plural, possessive]
  );

  const handleInsertTurkishLetter = (letter: string) => {
    const inputEl = inputRef.current;
    if (!inputEl) {
      setWord((prev) => prev + letter);
      return;
    }

    const start = inputEl.selectionStart ?? word.length;
    const end = inputEl.selectionEnd ?? word.length;
    const nextValue = word.slice(0, start) + letter + word.slice(end);
    setWord(nextValue);

    window.requestAnimationFrame(() => {
      inputEl.focus();
      const nextPos = start + letter.length;
      inputEl.setSelectionRange(nextPos, nextPos);
    });
  };

  const handleReset = () => {
    setWord('kitap');
    setPlural(false);
    setPossessive('none');
  };

  const isDefaultState =
    normalizedInput === 'kitap' && !plural && possessive === 'none';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>На главную</span>
          </Link>

          {!isDefaultState && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Сбросить</span>
            </button>
          )}
        </div>

        <div className="mt-4 flex items-start gap-3.5">
          <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400">
            <Layers className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Симулятор падежей существительных
            </h1>
            <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
              Введите любое турецкое слово и комбинируйте множественное число, принадлежность и все 6 падежей с автоматическим разбором гармонии гласных, буферов и чередований согласных.
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm space-y-6">
        {/* Word input + Turkish keyboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          <div className="lg:col-span-7 space-y-3">
            <label
              htmlFor="noun-input"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
            >
              Турецкое существительное
            </label>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  id="noun-input"
                  type="text"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                  placeholder="Например: kitap, ev, araba..."
                  autoComplete="off"
                  spellCheck={false}
                  className="w-full rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-4 py-3 pr-10 text-base font-semibold text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
                {word.length > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      setWord('');
                      inputRef.current?.focus();
                    }}
                    aria-label="Очистить слово"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div
                className="flex flex-wrap items-center gap-1.5"
                aria-label="Быстрая вставка турецких букв"
              >
                {TURKISH_LETTERS.map((letter) => (
                  <button
                    key={letter}
                    type="button"
                    onClick={() => handleInsertTurkishLetter(letter)}
                    className="h-11 min-w-[40px] rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-2.5 text-sm font-bold text-slate-800 dark:text-slate-100 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/60 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick examples */}
            <div className="pt-1">
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
                Быстрые примеры:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_EXAMPLES.map((example) => {
                  const isActive = normalizedInput === example;
                  return (
                    <button
                      key={example}
                      type="button"
                      onClick={() => setWord(example)}
                      className={`rounded-xl border px-3 py-1.5 text-xs font-semibold transition-colors ${
                        isActive
                          ? 'border-blue-500 bg-blue-600 text-white shadow-sm'
                          : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:border-blue-400 dark:hover:border-blue-500'
                      }`}
                    >
                      {example}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Harmony summary */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60 p-4 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Сводка гармонии слова
              </span>
              {vowelInfo.isSoftLoanword && normalizedInput.length > 0 && (
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700 dark:text-amber-300">
                  <Sparkles className="h-3 w-3" />
                  Мягкое заимствование
                </span>
              )}
            </div>

            {normalizedInput.length > 0 ? (
              <div className="grid grid-cols-3 gap-2.5">
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    Посл. гласная
                  </div>
                  <div className="mt-1 text-lg font-bold text-slate-900 dark:text-slate-100">
                    {vowelInfo.vowel ?? '—'}
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    Гармония на 2
                  </div>
                  <div className="mt-1 text-lg font-bold text-blue-600 dark:text-blue-400">
                    -{vowelInfo.harmony2}
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    Гармония на 4
                  </div>
                  <div className="mt-1 text-lg font-bold text-emerald-600 dark:text-emerald-400">
                    -{vowelInfo.harmony4}
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Введите слово, чтобы определить тип гармонии гласных.
              </p>
            )}

            {vowelInfo.isSoftLoanword && normalizedInput.length > 0 && (
              <p className="text-xs text-amber-700 dark:text-amber-300 leading-relaxed">
                Слово «{normalizedInput}» относится к заимствованиям с мягким произношением — несмотря на заднюю гласную «{vowelInfo.vowel}», оно присоединяет передние аффиксы (-{vowelInfo.harmony2} / -{vowelInfo.harmony4}).
              </p>
            )}
          </div>
        </div>

        {/* Modifiers: Plural + Possessive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="lg:col-span-4 space-y-2">
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Множественное число
            </span>
            <div className="inline-flex rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 p-1">
              <button
                type="button"
                onClick={() => setPlural(false)}
                className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors ${
                  !plural
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                нет
              </button>
              <button
                type="button"
                onClick={() => setPlural(true)}
                className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors ${
                  plural
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                -lar, -ler
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-2">
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Принадлежность (iyelik)
            </span>
            <div className="flex flex-wrap gap-1.5">
              {POSSESSIVE_OPTIONS.map((option) => {
                const isSelected = possessive === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setPossessive(option.id)}
                    className={`rounded-xl border px-3 py-2 text-xs font-semibold transition-colors ${
                      isSelected
                        ? 'border-emerald-500 bg-emerald-600 text-white shadow-sm'
                        : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-slate-700 dark:text-slate-200 hover:border-emerald-400 dark:hover:border-emerald-500'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Cases output */}
      {simulation.normalizedWord.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 text-center">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            Введите существительное в поле выше или выберите один из быстрых примеров, чтобы увидеть склонение по 6 падежам.
          </p>
        </div>
      ) : (
        <>
          {/* Desktop table */}
          <div className="hidden md:block rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60">
                    <th className="py-3.5 px-5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-56">
                      Падеж
                    </th>
                    <th className="py-3.5 px-5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Форма и морфемный разбор
                    </th>
                    <th className="py-3.5 px-5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-72">
                      Сработавшие правила
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {simulation.cases.map((item) => (
                    <tr
                      key={item.caseId}
                      className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors"
                    >
                      <td className="py-4 px-5 align-top">
                        <div className="font-bold text-sm text-slate-900 dark:text-slate-100">
                          {item.caseNameRu}
                        </div>
                        <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                          {item.caseNameTr}
                        </div>
                        <div className="mt-1 inline-block rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:text-slate-300">
                          {item.caseQuestion}
                        </div>
                      </td>

                      <td className="py-4 px-5 align-top">
                        <MorphemeSequence
                          tokens={item.morphemes}
                          mode="word"
                          showGloss
                          size="lg"
                        />
                      </td>

                      <td className="py-4 px-5 align-top">
                        {item.appliedRules.length > 0 ? (
                          <div className="flex flex-wrap gap-1.5">
                            {item.appliedRules.map((rule, idx) => (
                              <span
                                key={`${item.caseId}-rule-${idx}`}
                                className="inline-flex items-center rounded-lg border border-blue-200/80 dark:border-blue-800/80 bg-blue-50/70 dark:bg-blue-950/50 px-2 py-0.5 text-[11px] font-medium text-blue-800 dark:text-blue-200"
                              >
                                {rule}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-xs text-slate-400 dark:text-slate-500">
                            Базовая форма без изменений
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {simulation.cases.map((item) => (
              <div
                key={item.caseId}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      {item.caseNameRu}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {item.caseNameTr}
                    </div>
                  </div>
                  <span className="rounded-lg bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:text-slate-300 shrink-0">
                    {item.caseQuestion}
                  </span>
                </div>

                <div className="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/50 px-3.5 py-3">
                  <MorphemeSequence
                    tokens={item.morphemes}
                    mode="word"
                    showGloss
                    size="lg"
                  />
                </div>

                {item.appliedRules.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {item.appliedRules.map((rule, idx) => (
                      <span
                        key={`${item.caseId}-mrule-${idx}`}
                        className="inline-flex items-center rounded-lg border border-blue-200/80 dark:border-blue-800/80 bg-blue-50/70 dark:bg-blue-950/50 px-2 py-0.5 text-[11px] font-medium text-blue-800 dark:text-blue-200"
                      >
                        {rule}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Compact morpheme color legend */}
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
    </div>
  );
}
