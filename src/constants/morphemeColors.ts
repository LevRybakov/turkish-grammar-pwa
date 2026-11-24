import type { CEFRLevel, MorphemeType } from '../types/grammar';

export interface MorphemeStyleConfig {
  labelRu: string;
  shortLabelRu: string;
  text: string;
  bg: string;
  border: string;
  badge: string;
  dot: string;
}

export const MORPHEME_COLORS: Record<MorphemeType, MorphemeStyleConfig> = {
  root: {
    labelRu: 'Корень / основа',
    shortLabelRu: 'Основа',
    text: 'text-slate-900 dark:text-slate-100',
    bg: 'bg-slate-100 dark:bg-slate-800',
    border: 'border-slate-300 dark:border-slate-700',
    badge:
      'bg-slate-100 text-slate-900 border-slate-300 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700',
    dot: 'bg-slate-700 dark:bg-slate-300',
  },
  buffer: {
    labelRu: 'Буферная буква (y, s, ş, n)',
    shortLabelRu: 'Буфер',
    text: 'text-slate-400 dark:text-slate-400',
    bg: 'bg-slate-50 dark:bg-slate-900',
    border: 'border-slate-200 dark:border-slate-700',
    badge:
      'bg-slate-50 text-slate-500 border-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-700',
    dot: 'bg-slate-400',
  },
  affix: {
    labelRu: 'Грамматический аффикс',
    shortLabelRu: 'Аффикс',
    text: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-950/60',
    border: 'border-blue-200 dark:border-blue-800',
    badge:
      'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800',
    dot: 'bg-blue-600 dark:bg-blue-400',
  },
  person: {
    labelRu: 'Личное окончание / принадлежность',
    shortLabelRu: 'Лицо',
    text: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-950/60',
    border: 'border-emerald-200 dark:border-emerald-800',
    badge:
      'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800',
    dot: 'bg-emerald-600 dark:bg-emerald-400',
  },
  negation: {
    labelRu: 'Отрицание',
    shortLabelRu: 'Отрицание',
    text: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-950/60',
    border: 'border-amber-200 dark:border-amber-800',
    badge:
      'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800',
    dot: 'bg-amber-600 dark:bg-amber-400',
  },
  question: {
    labelRu: 'Вопросительная частица',
    shortLabelRu: 'Вопрос',
    text: 'text-rose-600 dark:text-rose-400',
    bg: 'bg-rose-50 dark:bg-rose-950/60',
    border: 'border-rose-200 dark:border-rose-800',
    badge:
      'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800',
    dot: 'bg-rose-600 dark:bg-rose-400',
  },
};

export const MORPHEME_ORDER: MorphemeType[] = [
  'root',
  'buffer',
  'affix',
  'person',
  'negation',
  'question',
];

export const CEFR_LEVEL_COLORS: Record<CEFRLevel, string> = {
  A1: 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800',
  A2: 'bg-teal-100 text-teal-800 border-teal-200 dark:bg-teal-950/70 dark:text-teal-300 dark:border-teal-800',
  B1: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-950/70 dark:text-blue-300 dark:border-blue-800',
  B2: 'bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-950/70 dark:text-indigo-300 dark:border-indigo-800',
  C1: 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-950/70 dark:text-purple-300 dark:border-purple-800',
};
