# Интерактивный PWA-справочник по грамматике турецкого языка (A1–C1)

Веб-приложение (PWA) для русскоязычных пользователей, объединяющее системный учебник турецкой грамматики, мгновенный обратный поиск по аффиксам и три алгоритмических тренажёра-симулятора.

- **Живое приложение (GitHub Pages):** https://levrybakov.github.io/turkish-grammar-pwa/
- **Режим работы:** 100% клиентское PWA с офлайн-кэшированием (Service Worker) и сохранением прогресса в `localStorage`.

---

## Возможности MVP

1. **Три режима навигации:**
   - Дерево из **10 разделов** и **47 тем** (16 полностью проработанных эталонных карточек + 31 тема-черновик с формулами и аффиксами).
   - Мультифильтр по уровням **CEFR (`A1`–`C1`)**.
   - **Обратный поиск (`Ctrl/Cmd + K`)** по названиям тем (RU/TR), аффиксам (с игнорированием дефисов и диакритики: `digi` → `-dığı`, `ebil` → `-(y)ebil`, `sart` → `şart`) и управлению глаголов.
2. **Эталонная карточка грамматической темы (`TopicPage`):**
   - Шапка, бейдж уровня, теги аффиксов, правило и цветовая визуальная формула.
   - Интерактивная таблица форм с табами `[+]`, `[−]`, `[?]`, `[−?]`.
   - Живые примеры с интерактивным поморфемным разбором (hover на десктопе + тап/клик на мобильных).
   - Блок «Не путать с...» (Contrastive Box) со ссылками на смежные темы.
   - Интерактивный `MiniCheck` с мгновенным разбором и сохранением галочек прогресса в `localStorage`.
3. **Три интерактивных модуля:**
   - **Симулятор гармонии и падежей (`/tools/noun-simulator`):** склонение любого турецкого существительного по 6 падежам с учётом мн.ч., принадлежности (6 лиц), гармонии гласных, *Fıstıkçı Şahap*, озвончения, буферных `y/s/n` и словарей исключений (`burun`, `saat`, `kalp`, `su`, `at`, `hukuk` и др.).
   - **База управления глаголов (`/tools/verb-government`):** 94 частотных глагола с живым поиском, фильтрами по падежам (`-a`, `-ı`, `-dan`, `-da`, `ile`) и тогглом «Только ловушки» (49 глаголов с интерференцией с русским).
   - **Сводная матрица времён (`/tools/tense-matrix`):** 18 глаголов-пресетов (включая исключения `gitmek`, `yemek`, `demek`, `beklemek`, `gelmek`, `almak`, `vermek`, `bilmek`, `görmek`, `olmak`), 7 простых времён и матрица составных времён (*Hikaye*, *Rivayet*, *Şart*) с боковой панелью разбора каждой ячейки.

---

## Технологический стек

- **Frontend:** React 18 + TypeScript (strict) + Vite + React Router v6
- **Стили:** Tailwind CSS + `lucide-react` + шрифт `Inter` (полная поддержка кириллицы и турецкой диакритики `ğ, Ğ, ı, İ, ö, Ö, ü, Ü, ş, Ş, ç, Ç`)
- **PWA:** `vite-plugin-pwa` (Web App Manifest, Workbox Service Worker, офлайн-кэш)
- **Тесты:** Vitest (**34 unit-теста** морфологического движка)
- **CI/CD:** GitHub Actions (`.github/workflows/ci-deploy.yml`) → автопроверка и деплой на GitHub Pages

---

## Команды запуска и проверки

```bash
# Установка зависимостей
npm install

# Локальный dev-сервер
npm run dev

# Проверка типов TypeScript (без генерации файлов)
npx tsc --noEmit

# Запуск unit-тестов морфологического движка
npm run test

# Production-сборка PWA в /dist
npm run build

# Локальный предпросмотр собранного бандла
npm run preview
```

---

## Структура проекта

```text
src/
├── constants/
│   └── morphemeColors.ts        # Единая палитра цветов морфем и уровней CEFR
├── types/
│   ├── grammar.ts               # GrammarTopic, Section, TopicMeta, MorphemeToken и др.
│   ├── morphology.ts            # NounSimulationResult, TenseMatrixCell, VerbPreset и др.
│   ├── verbs.ts                 # VerbGovernmentEntry, VerbCaseTag
│   └── index.ts
├── engine/
│   ├── turkishMorphology.ts     # Чистая логика фонетики, склонения и спряжения
│   ├── turkishMorphology.test.ts # 34 unit-теста (Vitest)
│   └── index.ts
├── data/
│   ├── sections.ts              # 10 разделов и 47 тем (таксономия для навигации и поиска)
│   ├── topics/
│   │   ├── topicsA1.ts
│   │   ├── topicsA2.ts
│   │   ├── topicsB1.ts
│   │   ├── topicsB2.ts
│   │   └── index.ts             # FULL_TOPICS и getTopicById()
│   ├── verbGovernment.ts        # 94 глагола с управлением
│   ├── verbPresets.ts           # 18 глаголов для матрицы времён
│   └── index.ts
├── components/                  # Layout, GlobalSearchModal, InteractiveMorphemeWord, MiniCheck и др.
└── pages/
    ├── HomePage.tsx
    ├── TopicPage.tsx
    └── tools/
        ├── NounSimulatorPage.tsx
        ├── VerbGovernmentPage.tsx
        └── TenseMatrixPage.tsx
```

---

## Как добавить новую грамматическую тему

Чтобы перевести тему из черновика в полную карточку или добавить новую тему:

### Шаг 1. Проверьте запись в `src/data/sections.ts`
Найдите тему в массиве `SECTIONS` (или добавьте новый объект `TopicMeta` в нужный раздел) и установите `isDraft: false`:

```ts
{
  id: 'my-new-topic',
  sectionId: 'section-5',
  titleRu: 'Название темы на русском',
  titleTr: 'Türkçe terim',
  level: 'B1',
  affixes: ['-affix1', '-affix2'], // используются для обратного поиска Ctrl+K
  isDraft: false,
}
```

### Шаг 2. Добавьте полную карточку в `src/data/topics/`
Откройте файл нужного уровня (`topicsA1.ts`, `topicsA2.ts`, `topicsB1.ts` или `topicsB2.ts`, либо создайте `topicsC1.ts`) и добавьте объект типа `GrammarTopic`:

```ts
import type { GrammarTopic } from '../../types';

export const myNewTopic: GrammarTopic = {
  id: 'my-new-topic', // должен точно совпадать с id в sections.ts
  sectionId: 'section-5',
  titleRu: 'Название темы на русском',
  titleTr: 'Türkçe terim',
  level: 'B1',
  affixes: ['-affix1', '-affix2'],
  summary: 'Краткое объяснение правила в 1–3 предложениях.',
  formula: [
    { text: 'Основа', type: 'root', gloss: 'корень глагола' },
    { text: '-affix', type: 'affix', gloss: 'грамматический аффикс' },
    { text: '-личн.', type: 'person', gloss: 'личное окончание' },
  ],
  conjugationTable: {
    affirmative: {
      Ben: [
        { text: 'gel', type: 'root', gloss: 'приходить' },
        { text: 'iyor', type: 'affix', gloss: 'наст. время' },
        { text: 'um', type: 'person', gloss: 'я' },
      ],
      // Sen, O, Biz, Siz, Onlar...
    },
    negative: { /* ... */ },
    question: { /* ... */ },
  },
  examples: [
    {
      id: 'ex-1',
      tr: 'Evlerimde çok kitap var.',
      ru: 'В моих домах много книг.',
      annotatedWords: [
        {
          surface: 'Evlerimde', // должно точно встречаться в строке tr
          morphemes: [
            { text: 'Ev', type: 'root', gloss: 'дом' },
            { text: 'ler', type: 'affix', gloss: 'мн.ч.' },
            { text: 'im', type: 'person', gloss: 'мой' },
            { text: 'de', type: 'affix', gloss: 'местн. падеж: в' },
          ],
        },
      ],
    },
  ],
  doNotConfuse: {
    title: 'Не путать с похожей конструкцией',
    items: [
      {
        title: 'Конструкция А',
        explanation: 'Нюанс смысла А.',
        exampleTr: 'Пример А.',
        exampleRu: 'Перевод А.',
        relatedTopicId: 'simdiki-zaman', // должен существовать в sections.ts
      },
      {
        title: 'Конструкция Б',
        explanation: 'Нюанс смысла Б.',
        exampleTr: 'Пример Б.',
        exampleRu: 'Перевод Б.',
        relatedTopicId: 'genis-zaman',
      },
    ],
  },
  miniCheck: [
    {
      id: 'q-1',
      prompt: 'Выберите правильную форму:',
      type: 'choice',
      options: ['Вариант 1', 'Вариант 2', 'Вариант 3'],
      correctAnswer: 'Вариант 1',
      explanation: 'Короткое пояснение, почему ответ верный.',
    },
  ],
};
```

### Шаг 3. Зарегистрируйте тему в `src/data/topics/index.ts`
Если тема добавлена в уже существующий массив (`TOPICS_A1`, `TOPICS_A2`, `TOPICS_B1`, `TOPICS_B2`), она подхватится в `FULL_TOPICS` автоматически. Если создан новый файл (например, `topicsC1.ts`), импортируйте массив в `src/data/topics/index.ts` и добавьте его в общий список.

### Шаг 4. Проверьте сборку и деплой
Запустите `npx tsc --noEmit` и `npm run build` локально или сделайте `git push` в ветку `main` — GitHub Actions автоматически прогонит проверки и обновит сайт на GitHub Pages.
