import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, RotateCcw, XCircle } from 'lucide-react';
import type { MiniCheckQuestion } from '../types/grammar';
import { normalizeTurkishAnswer } from './searchUtils';

export interface MiniCheckProps {
  questions: MiniCheckQuestion[];
  isTopicCompleted: boolean;
  onComplete: () => void;
}

interface QuestionState {
  selectedChoice?: string;
  inputValue: string;
  checked: boolean;
  isCorrect: boolean;
}

const TURKISH_SPECIAL_CHARS = ['ğ', 'ü', 'ş', 'ı', 'ö', 'ç', 'İ'] as const;

function buildInitialState(questions: MiniCheckQuestion[]): Record<string, QuestionState> {
  const map: Record<string, QuestionState> = {};
  for (const q of questions) {
    map[q.id] = {
      inputValue: '',
      checked: false,
      isCorrect: false,
    };
  }
  return map;
}

export function MiniCheck({
  questions,
  isTopicCompleted,
  onComplete,
}: MiniCheckProps) {
  const [answers, setAnswers] = useState<Record<string, QuestionState>>(() =>
    buildInitialState(questions)
  );
  const completedEmittedRef = useRef(false);

  const correctCount = questions.filter((q) => answers[q.id]?.isCorrect).length;
  const allCorrect = questions.length > 0 && correctCount === questions.length;

  useEffect(() => {
    if (allCorrect && !completedEmittedRef.current) {
      completedEmittedRef.current = true;
      onComplete();
    }
  }, [allCorrect, onComplete]);

  if (questions.length === 0) {
    return null;
  }

  const handleChoiceSelect = (q: MiniCheckQuestion, option: string) => {
    const isCorrect =
      normalizeTurkishAnswer(option) === normalizeTurkishAnswer(q.correctAnswer);
    setAnswers((prev) => ({
      ...prev,
      [q.id]: {
        ...(prev[q.id] ?? { inputValue: '' }),
        selectedChoice: option,
        checked: true,
        isCorrect,
      },
    }));
  };

  const handleInputChange = (qId: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [qId]: {
        ...(prev[qId] ?? { checked: false, isCorrect: false }),
        inputValue: value,
        checked: false,
        isCorrect: false,
      },
    }));
  };

  const handleAppendChar = (qId: string, ch: string) => {
    setAnswers((prev) => {
      const current = prev[qId] ?? { inputValue: '', checked: false, isCorrect: false };
      return {
        ...prev,
        [qId]: {
          ...current,
          inputValue: `${current.inputValue}${ch}`,
          checked: false,
          isCorrect: false,
        },
      };
    });
  };

  const handleInputSubmit = (q: MiniCheckQuestion) => {
    const state = answers[q.id];
    const userNormalized = normalizeTurkishAnswer(state?.inputValue ?? '');
    if (!userNormalized) {
      return;
    }
    const validTargets = [q.correctAnswer, ...(q.acceptedAnswers ?? [])].map(
      normalizeTurkishAnswer
    );
    const isCorrect = validTargets.includes(userNormalized);
    setAnswers((prev) => ({
      ...prev,
      [q.id]: {
        ...(prev[q.id] ?? { inputValue: '' }),
        checked: true,
        isCorrect,
      },
    }));
  };

  const handleReset = () => {
    completedEmittedRef.current = false;
    setAnswers(buildInitialState(questions));
  };

  return (
    <section
      aria-labelledby="mini-check-heading"
      className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h2
              id="mini-check-heading"
              className="text-lg font-bold text-slate-900 dark:text-slate-100"
            >
              Мини-чек: проверьте себя
            </h2>
            {(isTopicCompleted || allCorrect) && (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-2.5 py-0.5 text-xs font-semibold">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Тема пройдена
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Ответьте правильно на все {questions.length} вопроса, чтобы отметить тему как пройденную.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
            {correctCount} / {questions.length}
          </span>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Пройти заново
          </button>
        </div>
      </div>

      <div className="mt-5 space-y-6">
        {questions.map((q, index) => {
          const state = answers[q.id] ?? {
            inputValue: '',
            checked: false,
            isCorrect: false,
          };

          return (
            <div
              key={q.id}
              className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40 p-4"
            >
              <div className="flex items-start gap-2.5">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950 text-xs font-bold text-blue-700 dark:text-blue-300">
                  {index + 1}
                </span>
                <p className="text-sm sm:text-base font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
                  {q.prompt}
                </p>
              </div>

              {q.type === 'choice' && q.options && (
                <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 pl-0 sm:pl-8">
                  {q.options.map((option) => {
                    const isSelected = state.selectedChoice === option;
                    const isRightChoice =
                      state.checked && isSelected && state.isCorrect;
                    const isWrongChoice =
                      state.checked && isSelected && !state.isCorrect;

                    let optionStyle =
                      'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-blue-400 dark:hover:border-blue-600';
                    if (isRightChoice) {
                      optionStyle =
                        'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 ring-1 ring-emerald-500';
                    } else if (isWrongChoice) {
                      optionStyle =
                        'border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200 ring-1 ring-rose-500';
                    }

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleChoiceSelect(q, option)}
                        className={`flex items-center justify-between gap-2 rounded-xl border px-3.5 py-2.5 text-left text-sm font-medium transition-all ${optionStyle}`}
                      >
                        <span>{option}</span>
                        {isRightChoice && (
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                        )}
                        {isWrongChoice && (
                          <XCircle className="h-4 w-4 shrink-0 text-rose-600 dark:text-rose-400" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {q.type === 'input' && (
                <div className="mt-3.5 pl-0 sm:pl-8">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleInputSubmit(q);
                    }}
                    className="flex flex-col sm:flex-row gap-2"
                  >
                    <input
                      type="text"
                      value={state.inputValue}
                      onChange={(e) => handleInputChange(q.id, e.target.value)}
                      placeholder="Введите ответ по-турецки..."
                      autoComplete="off"
                      autoCapitalize="none"
                      spellCheck={false}
                      className={`flex-1 rounded-xl border px-3.5 py-2 text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                        state.checked
                          ? state.isCorrect
                            ? 'border-emerald-500 focus:ring-emerald-500'
                            : 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500/30'
                      }`}
                    />
                    <button
                      type="submit"
                      className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-semibold transition-colors shrink-0 disabled:opacity-50"
                      disabled={!state.inputValue.trim()}
                    >
                      Проверить
                    </button>
                  </form>

                  <div className="mt-2 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] text-slate-400 dark:text-slate-500 mr-1">
                      Буквы TR:
                    </span>
                    {TURKISH_SPECIAL_CHARS.map((ch) => (
                      <button
                        key={ch}
                        type="button"
                        onClick={() => handleAppendChar(q.id, ch)}
                        className="rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-2 py-0.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        {ch}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {state.checked && (
                <div
                  className={`mt-3 pl-0 sm:pl-8`}
                >
                  <div
                    className={`rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed ${
                      state.isCorrect
                        ? 'border-emerald-200 dark:border-emerald-800/80 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200'
                        : 'border-rose-200 dark:border-rose-800/80 bg-rose-50/70 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200'
                    }`}
                  >
                    <div className="font-semibold flex items-center gap-1.5">
                      {state.isCorrect ? (
                        <>
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                          <span>Верно!</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-4 w-4 shrink-0 text-rose-600 dark:text-rose-400" />
                          <span>
                            Попробуйте ещё раз.
                            {q.type === 'input' ? '' : ' Выберите другой вариант.'}
                          </span>
                        </>
                      )}
                    </div>
                    <p className="mt-1 text-slate-700 dark:text-slate-300">
                      {q.explanation}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {allCorrect && (
        <div className="mt-5 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/50 p-4 flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
          <p className="text-sm font-medium text-emerald-900 dark:text-emerald-200">
            Отлично! Все задания выполнены верно — тема отмечена как пройденная в вашем прогрессе.
          </p>
        </div>
      )}
    </section>
  );
}
