import { MORPHEME_COLORS, MORPHEME_ORDER } from './constants/morphemeColors';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex items-center justify-center p-6">
      <div className="max-w-xl w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
        <span className="inline-block rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 px-3 py-1 text-xs font-semibold">
          MVP Каркас • Фаза 1
        </span>
        <h1 className="mt-4 text-2xl font-bold tracking-tight">
          Интерактивный справочник по грамматике турецкого языка
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Проверка диакритики: ğ, Ğ, ı, İ, ö, Ö, ü, Ü, ş, Ş, ç, Ç — и единой палитры морфем.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {MORPHEME_ORDER.map((type) => {
            const cfg = MORPHEME_COLORS[type];
            return (
              <span
                key={type}
                className={`rounded-md border px-2.5 py-1 text-xs font-medium ${cfg.badge}`}
              >
                {cfg.labelRu}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
