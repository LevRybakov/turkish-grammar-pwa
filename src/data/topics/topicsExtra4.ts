import type { GrammarTopic } from '../../types';

export const TOPICS_EXTRA_4: GrammarTopic[] = [
  {
    id: 'word-order-sov',
    sectionId: 'syntax',
    titleRu: 'Порядок слов SOV и актуальное членение',
    titleTr: 'Cümle Dizimi (Özne-Nesne-Yüklem)',
    level: 'A2',
    levels: ['A2', 'B1'],
    affixes: [],
    summary:
      'Базовый порядок слов в турецком предложении — SOV: подлежащее, затем обстоятельства времени и места, дополнение и сказуемое в самом конце. Главная смысловая нагрузка (фокус, новая информация и вопросительные слова) ставится непосредственно перед сказуемым. В живой речи известное уточнение или тему иногда выносят после глагола (инверсия — devrik cümle).',
    formula: [
      { text: 'Подлежащее (Özne)', type: 'person', gloss: 'кто действует (опц.)' },
      { text: 'Время / Место', type: 'affix', gloss: 'когда и где' },
      { text: 'Фокус / Дополнение', type: 'buffer', gloss: 'новая информация перед глаголом' },
      { text: 'Сказуемое (Yüklem)', type: 'root', gloss: 'глагол или имя в конце' },
    ],
    conjugationTable: {
      affirmative: {
        'Нейтральный SOV': [
          { text: 'Ali ', type: 'person', gloss: 'подлежащее' },
          { text: 'dün ', type: 'affix', gloss: 'время' },
          { text: 'kitap ', type: 'buffer', gloss: 'фокус (неопр. объект)' },
          { text: 'okudu', type: 'root', gloss: 'сказуемое в конце' },
        ],
        'Фокус на месте': [
          { text: 'Ali ', type: 'person', gloss: 'подлежащее' },
          { text: 'kitabı ', type: 'affix', gloss: 'опр. объект' },
          { text: 'evde ', type: 'buffer', gloss: 'фокус: именно дома' },
          { text: 'okudu', type: 'root', gloss: 'сказуемое' },
        ],
        'Фокус на времени': [
          { text: 'Ali ', type: 'person', gloss: 'подлежащее' },
          { text: 'evde ', type: 'affix', gloss: 'место' },
          { text: 'dün ', type: 'buffer', gloss: 'фокус: именно вчера' },
          { text: 'okudu', type: 'root', gloss: 'сказуемое' },
        ],
        'Фокус на субъекте': [
          { text: 'Kitabı ', type: 'affix', gloss: 'известный объект' },
          { text: 'dün ', type: 'affix', gloss: 'время' },
          { text: 'Ali ', type: 'buffer', gloss: 'фокус: именно Али' },
          { text: 'okudu', type: 'root', gloss: 'сказуемое' },
        ],
        'Инверсия (Devrik)': [
          { text: 'Okudum ', type: 'root', gloss: 'сказуемое в начале (эмоция)' },
          { text: 'o ', type: 'affix', gloss: 'указ. местоим.' },
          { text: 'kitabı ', type: 'affix', gloss: 'фоновое уточнение' },
          { text: 'dün', type: 'person', gloss: 'после сказуемого' },
        ],
      },
      negative: {
        'Отрицание SOV': [
          { text: 'Ben ', type: 'person', gloss: 'я' },
          { text: 'bugün ', type: 'affix', gloss: 'сегодня' },
          { text: 'işe ', type: 'buffer', gloss: 'на работу' },
          { text: 'gitmedim', type: 'negation', gloss: 'не пошёл' },
        ],
        'Фокус на субъекте': [
          { text: 'İşe ', type: 'affix', gloss: 'на работу' },
          { text: 'bugün ', type: 'affix', gloss: 'сегодня' },
          { text: 'ben ', type: 'buffer', gloss: 'именно я' },
          { text: 'gitmedim', type: 'negation', gloss: 'не пошёл' },
        ],
        'Фокус с hiç': [
          { text: 'Dün ', type: 'affix', gloss: 'вчера' },
          { text: 'hiç ', type: 'affix', gloss: 'совсем' },
          { text: 'kahve ', type: 'buffer', gloss: 'кофе' },
          { text: 'içmedim', type: 'negation', gloss: 'не пил' },
        ],
        'Фокус на времени': [
          { text: 'Ben ', type: 'person', gloss: 'я' },
          { text: 'oraya ', type: 'affix', gloss: 'туда' },
          { text: 'dün ', type: 'buffer', gloss: 'именно вчера' },
          { text: 'gitmedim', type: 'negation', gloss: 'не ходил' },
        ],
      },
      question: {
        'Вопр. слово (кто)': [
          { text: 'Bu ', type: 'affix', gloss: 'это' },
          { text: 'mektubu ', type: 'affix', gloss: 'письмо' },
          { text: 'kim ', type: 'question', gloss: 'кто (в фокусе!)' },
          { text: 'yazdı?', type: 'root', gloss: 'написал' },
        ],
        'Вопр. слово (куда)': [
          { text: 'Sen ', type: 'person', gloss: 'ты' },
          { text: 'sabah ', type: 'affix', gloss: 'утром' },
          { text: 'nereye ', type: 'question', gloss: 'куда (в фокусе!)' },
          { text: 'gittin?', type: 'root', gloss: 'пошёл' },
        ],
        'Фокус с mı (место)': [
          { text: 'Sen ', type: 'person', gloss: 'ты' },
          { text: 'dün ', type: 'affix', gloss: 'вчера' },
          { text: 'sinemaya mı ', type: 'question', gloss: 'в кино ли?' },
          { text: 'gittin?', type: 'root', gloss: 'ходила' },
        ],
        'Фокус с mi (лицо)': [
          { text: 'Kitabı ', type: 'affix', gloss: 'книгу' },
          { text: 'dün ', type: 'affix', gloss: 'вчера' },
          { text: 'sen mi ', type: 'question', gloss: 'именно ты ли?' },
          { text: 'okudun?', type: 'root', gloss: 'читал' },
        ],
      },
      negativeQuestion: {
        'Общий отр. вопрос': [
          { text: 'Sen ', type: 'person', gloss: 'ты' },
          { text: 'bugün ', type: 'affix', gloss: 'сегодня' },
          { text: 'evde ', type: 'affix', gloss: 'дома' },
          { text: 'kalmadın mı?', type: 'question', gloss: 'разве не остался?' },
        ],
        'Фокус на объекте': [
          { text: 'O ', type: 'person', gloss: 'он' },
          { text: 'sana ', type: 'affix', gloss: 'тебе' },
          { text: 'bunu ', type: 'buffer', gloss: 'это' },
          { text: 'söylemedi mi?', type: 'question', gloss: 'разве не сказал?' },
        ],
        'Фокус на лице': [
          { text: 'Ödevi ', type: 'affix', gloss: 'задание' },
          { text: 'sen ', type: 'buffer', gloss: 'именно ты' },
          { text: 'yapmadın mı?', type: 'question', gloss: 'разве не сделал?' },
        ],
        'С наречием hiç': [
          { text: 'Daha ', type: 'affix', gloss: 'ещё' },
          { text: 'hiç ', type: 'affix', gloss: 'совсем' },
          { text: 'uyumadın mı?', type: 'question', gloss: 'ты ещё совсем не спал?' },
        ],
      },
    },
    examples: [
      {
        id: 'wo-ex1',
        tr: 'Ayşe her sabah kütüphanede ders çalışıyor.',
        ru: 'Айше каждое утро занимается в библиотеке.',
        annotatedWords: [
          {
            surface: 'sabah',
            morphemes: [{ text: 'sabah', type: 'root', gloss: 'утро (обст. времени)' }],
          },
          {
            surface: 'kütüphanede',
            morphemes: [
              { text: 'kütüphane', type: 'root', gloss: 'библиотека' },
              { text: 'de', type: 'affix', gloss: 'местн. п. (где?)' },
            ],
          },
          {
            surface: 'çalışıyor',
            morphemes: [
              { text: 'çalış', type: 'root', gloss: 'заниматься / работать' },
              { text: 'ıyor', type: 'affix', gloss: 'наст. длит. вр. (3 л.)' },
            ],
          },
        ],
      },
      {
        id: 'wo-ex2',
        tr: "Yarın Ankara'ya uçakla değil, hızlı trenle gideceğim.",
        ru: 'Завтра я поеду в Анкару не на самолёте, а на скоростном поезде.',
        annotatedWords: [
          {
            surface: "Ankara'ya",
            morphemes: [
              { text: 'Ankara', type: 'root', gloss: 'Анкара' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'a', type: 'affix', gloss: 'дат. п. (куда?)' },
            ],
          },
          {
            surface: 'trenle',
            morphemes: [
              { text: 'tren', type: 'root', gloss: 'поезд (фокус перед глаголом)' },
              { text: 'le', type: 'affix', gloss: 'послелог ile (на чём)' },
            ],
          },
          {
            surface: 'gideceğim',
            morphemes: [
              { text: 'gid', type: 'root', gloss: 'идти/ехать (t→d)' },
              { text: 'eceğ', type: 'affix', gloss: 'будущее вр. (k→ğ)' },
              { text: 'im', type: 'person', gloss: 'я' },
            ],
          },
        ],
      },
      {
        id: 'wo-ex3',
        tr: 'Bu önemli haberi sana dün akşam kim verdi?',
        ru: 'Кто сообщил тебе эту важную новость вчера вечером?',
        annotatedWords: [
          {
            surface: 'haberi',
            morphemes: [
              { text: 'haber', type: 'root', gloss: 'новость' },
              { text: 'i', type: 'affix', gloss: 'вин. п. (опр. объект)' },
            ],
          },
          {
            surface: 'sana',
            morphemes: [
              { text: 'sen', type: 'root', gloss: 'ты (sen+e → sana)' },
              { text: 'a', type: 'affix', gloss: 'дат. п. (кому)' },
            ],
          },
          {
            surface: 'kim',
            morphemes: [{ text: 'kim', type: 'question', gloss: 'кто (в фокусе перед глаголом)' }],
          },
          {
            surface: 'verdi',
            morphemes: [
              { text: 'ver', type: 'root', gloss: 'давать / сообщать' },
              { text: 'di', type: 'affix', gloss: 'прош. вр.' },
            ],
          },
        ],
      },
      {
        id: 'wo-ex4',
        tr: 'Çok beğendim bu yeni filmi.',
        ru: 'Мне очень понравился этот новый фильм (разговорная инверсия).',
        annotatedWords: [
          {
            surface: 'beğendim',
            morphemes: [
              { text: 'beğen', type: 'root', gloss: 'нравиться (одобрять)' },
              { text: 'di', type: 'affix', gloss: 'прош. вр.' },
              { text: 'm', type: 'person', gloss: 'я' },
            ],
          },
          {
            surface: 'filmi',
            morphemes: [
              { text: 'film', type: 'root', gloss: 'фильм' },
              { text: 'i', type: 'affix', gloss: 'вин. п. (вынесен в конец)' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Вопросительное слово перед глаголом vs в начале фразы',
          explanation:
            'В русском языке вопросительные слова обычно стоят в начале предложения («Куда ты идёшь?»). В турецком языке вопросительное слово (kim, ne, nereye, neden) стремится занять фокусную позицию непосредственно перед сказуемым.',
          exampleTr: 'Sen yarın nereye gidiyorsun? (норм.) — Nereye gidiyorsun?',
          exampleRu: 'Куда ты завтра идёшь? (nereye стоит прямо перед gidiyorsun)',
          relatedTopicId: 'pronouns',
        },
        {
          title: 'Частица mı после фокуса vs в конце предложения',
          explanation:
            'Если вопросительная частица mı/mi/mu/mü стоит в конце после глагола, вопрос относится ко всему действию. Если переместить её сразу после конкретного члена предложения, вы уточняете именно этот элемент.',
          exampleTr: 'Dün sinemaya mı gittin? (Именно в кино?) vs Dün sinemaya gittin mi? (Ты сходил в кино?)',
          exampleRu: 'в кино ли ты ходил vs сходил ли ты в кино',
          relatedTopicId: 'verb-stem-negation-question',
        },
      ],
    },
    miniCheck: [
      {
        id: 'wo-q1',
        prompt: 'Где в нейтральном турецком предложении находится главная новая информация (фокус)?',
        type: 'choice',
        options: [
          'В самом начале предложения',
          'Непосредственно перед сказуемым',
          'После сказуемого в конце',
          'Сразу после подлежащего',
        ],
        correctAnswer: 'Непосредственно перед сказуемым',
        explanation:
          'Позиция перед глаголом (сказуемым) является фокусной: туда ставятся новая информация, неопределённое дополнение и вопросительные слова.',
      },
      {
        id: 'wo-q2',
        prompt: 'Дополните предложение с правильным порядком слов: «Куда ты вчера ходил?» (nereye, gittin) — Sen dün ___ ___?',
        type: 'input',
        correctAnswer: 'nereye gittin',
        acceptedAnswers: ['nereye gittin', 'Sen dün nereye gittin', 'Sen dün nereye gittin?'],
        explanation:
          'Вопросительное слово nereye ставится в фокус прямо перед сказуемым gittin → Sen dün nereye gittin?',
      },
      {
        id: 'wo-q3',
        prompt: 'Какой вариант подчёркивает, что в Стамбул завтра поедет ИМЕННО Мехмет (а не кто-то другой)?',
        type: 'choice',
        options: [
          "Mehmet yarın İstanbul'a gidecek mi?",
          "Mehmet yarın mı İstanbul'a gidecek?",
          "Yarın İstanbul'a Mehmet mi gidecek?",
          "Mehmet mi yarın İstanbul'a gidecek?",
        ],
        correctAnswer: "Yarın İstanbul'a Mehmet mi gidecek?",
        explanation:
          'Выделяемый элемент (Mehmet) ставится в фокус перед глаголом и сразу за ним идёт частица mi → Mehmet mi gidecek?',
      },
      {
        id: 'wo-q4',
        prompt: 'Как в турецкой грамматике называется разговорная конструкция с инверсией, когда сказуемое стоит не в конце (например: Unuttum anahtarımı)?',
        type: 'input',
        correctAnswer: 'devrik cümle',
        acceptedAnswers: ['devrik cümle', 'devrik'],
        explanation:
          'Предложение с обратным порядком слов, где сказуемое не на последнем месте, называется devrik cümle (в отличие от прямого kurallı cümle).',
      },
    ],
    isDraft: false,
  },

  {
    id: 'cause-result-clauses',
    sectionId: 'syntax',
    titleRu: 'Придаточные причины и следствия (-dığı için, çünkü, bu yüzden)',
    titleTr: 'Neden-Sonuç Cümleleri',
    level: 'B1',
    affixes: ['-dığı için', '-diği için', '-acağından', '-dığından', 'çünkü', 'bu yüzden', 'dolayı'],
    summary:
      'Для выражения причины перед главным предложением используются причастные обороты -dığı için / -dığından (dolayı) (прошлое и настоящее) или -acağı için / -acağından (будущее). Союз çünkü («потому что») всегда вводит объяснение ПОСЛЕ результата. Следствие («поэтому, из-за этого») оформляется связками bu yüzden, bu nedenle, dolayısıyla.',
    formula: [
      { text: 'Основа + -dık / -(y)acak', type: 'affix', gloss: 'причастие (факт / будущее)' },
      { text: '+ принадл.', type: 'person', gloss: 'лицо субъекта причины' },
      { text: '+ için / -dan (dolayı)', type: 'affix', gloss: 'по причине того, что…' },
    ],
    conjugationTable: {
      affirmative: {
        Ben: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'diğ', type: 'affix', gloss: 'прич. -dik (k→ğ)' },
          { text: 'im', type: 'person', gloss: 'мой' },
          { text: ' için', type: 'affix', gloss: 'так как я пришёл/прихожу' },
        ],
        Sen: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'diğ', type: 'affix', gloss: 'прич. -dik' },
          { text: 'in', type: 'person', gloss: 'твой' },
          { text: ' için', type: 'affix', gloss: 'так как ты пришёл/приходишь' },
        ],
        O: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'diğ', type: 'affix', gloss: 'прич. -dik' },
          { text: 'i', type: 'person', gloss: 'его' },
          { text: ' için', type: 'affix', gloss: 'так как он пришёл/приходит' },
        ],
        Biz: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'diğ', type: 'affix', gloss: 'прич. -dik' },
          { text: 'imiz', type: 'person', gloss: 'наш' },
          { text: ' için', type: 'affix', gloss: 'так как мы пришли/приходим' },
        ],
        Siz: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'diğ', type: 'affix', gloss: 'прич. -dik' },
          { text: 'iniz', type: 'person', gloss: 'ваш' },
          { text: ' için', type: 'affix', gloss: 'так как вы пришли/приходите' },
        ],
        Onlar: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'dik', type: 'affix', gloss: 'прич. -dik' },
          { text: 'leri', type: 'person', gloss: 'их' },
          { text: ' için', type: 'affix', gloss: 'так как они пришли/приходят' },
        ],
      },
      negative: {
        Ben: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'diğ', type: 'affix', gloss: 'прич. -dik' },
          { text: 'im', type: 'person', gloss: 'мой' },
          { text: ' için', type: 'affix', gloss: 'так как я не пришёл' },
        ],
        Sen: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'diğ', type: 'affix', gloss: 'прич. -dik' },
          { text: 'in', type: 'person', gloss: 'твой' },
          { text: ' için', type: 'affix', gloss: 'так как ты не пришёл' },
        ],
        O: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'diğ', type: 'affix', gloss: 'прич. -dik' },
          { text: 'i', type: 'person', gloss: 'его' },
          { text: ' için', type: 'affix', gloss: 'так как он не пришёл' },
        ],
        Biz: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'diğ', type: 'affix', gloss: 'прич. -dik' },
          { text: 'imiz', type: 'person', gloss: 'наш' },
          { text: ' için', type: 'affix', gloss: 'так как мы не пришли' },
        ],
        Siz: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'diğ', type: 'affix', gloss: 'прич. -dik' },
          { text: 'iniz', type: 'person', gloss: 'ваш' },
          { text: ' için', type: 'affix', gloss: 'так как вы не пришли' },
        ],
        Onlar: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'dik', type: 'affix', gloss: 'прич. -dik' },
          { text: 'leri', type: 'person', gloss: 'их' },
          { text: ' için', type: 'affix', gloss: 'так как они не пришли' },
        ],
      },
      question: {
        'Причина ли (Sen)': [
          { text: 'geç ', type: 'affix', gloss: 'поздно' },
          { text: 'kaldığın', type: 'root', gloss: 'что ты опоздал' },
          { text: ' için mi?', type: 'question', gloss: 'из-за того ли, что опоздал?' },
        ],
        'Причина ли (O)': [
          { text: 'yağmur ', type: 'root', gloss: 'дождь' },
          { text: 'yağdığı', type: 'affix', gloss: 'что пошёл' },
          { text: ' için mi?', type: 'question', gloss: 'из-за дождя ли?' },
        ],
        'Причина ли (Biz)': [
          { text: 'unuttuğumuz', type: 'root', gloss: 'что мы забыли' },
          { text: ' için mi?', type: 'question', gloss: 'потому ли, что мы забыли?' },
        ],
        'С -dığından dolayı': [
          { text: 'hasta ', type: 'root', gloss: 'болен' },
          { text: 'olduğundan', type: 'affix', gloss: 'из-за того, что он болен' },
          { text: ' mı?', type: 'question', gloss: 'из-за болезни ли?' },
        ],
      },
      negativeQuestion: {
        'Не потому ли (Sen)': [
          { text: 'çalışmadığın', type: 'negation', gloss: 'что ты не готовился' },
          { text: ' için mi?', type: 'question', gloss: 'из-за того ли, что не учил?' },
        ],
        'Не потому ли (O)': [
          { text: 'gelmediği', type: 'negation', gloss: 'что он не пришёл' },
          { text: ' için mi?', type: 'question', gloss: 'из-за того ли, что не пришёл?' },
        ],
        'Не потому ли (Siz)': [
          { text: 'duymadığınız', type: 'negation', gloss: 'что вы не услышали' },
          { text: ' için mi?', type: 'question', gloss: 'потому ли, что не слышали?' },
        ],
        'Не потому ли (Onlar)': [
          { text: 'sormadıkları', type: 'negation', gloss: 'что они не спросили' },
          { text: ' için mi?', type: 'question', gloss: 'потому ли, что не спросили?' },
        ],
      },
    },
    examples: [
      {
        id: 'crc-ex1',
        tr: 'Yağmur çok şiddetli yağdığı için maç ertelendi.',
        ru: 'Поскольку дождь шёл очень сильно, матч перенесли.',
        annotatedWords: [
          {
            surface: 'yağdığı',
            morphemes: [
              { text: 'yağ', type: 'root', gloss: 'идти (об осадках)' },
              { text: 'dığ', type: 'affix', gloss: 'причастие -dık (k→ğ)' },
              { text: 'ı', type: 'person', gloss: 'его (дождя)' },
            ],
          },
          {
            surface: 'için',
            morphemes: [{ text: 'için', type: 'affix', gloss: 'из-за того что / так как' }],
          },
          {
            surface: 'ertelendi',
            morphemes: [
              { text: 'ertele', type: 'root', gloss: 'переносить/откладывать' },
              { text: 'n', type: 'affix', gloss: 'пассив' },
              { text: 'di', type: 'affix', gloss: 'прош. вр.' },
            ],
          },
        ],
      },
      {
        id: 'crc-ex2',
        tr: 'Yarın erken kalkacağımdan dolayı bu akşam erken yatacağım.',
        ru: 'Так как завтра я встану рано, сегодня вечером лягу пораньше.',
        annotatedWords: [
          {
            surface: 'kalkacağımdan',
            morphemes: [
              { text: 'kalk', type: 'root', gloss: 'вставать' },
              { text: 'acağ', type: 'affix', gloss: 'прич. буд. вр. (k→ğ)' },
              { text: 'ım', type: 'person', gloss: 'мой' },
              { text: 'dan', type: 'affix', gloss: 'исх. п. (перед dolayı)' },
            ],
          },
          {
            surface: 'dolayı',
            morphemes: [{ text: 'dolayı', type: 'affix', gloss: 'вследствие / из-за' }],
          },
          {
            surface: 'yatacağım',
            morphemes: [
              { text: 'yat', type: 'root', gloss: 'ложиться спать' },
              { text: 'acağ', type: 'affix', gloss: 'будущее вр.' },
              { text: 'ım', type: 'person', gloss: 'я' },
            ],
          },
        ],
      },
      {
        id: 'crc-ex3',
        tr: 'Toplantıya katılamadım, çünkü uçağım rötar yaptı.',
        ru: 'Я не смог присутствовать на встрече, потому что мой самолёт задержался.',
        annotatedWords: [
          {
            surface: 'katılamadım',
            morphemes: [
              { text: 'katıl', type: 'root', gloss: 'участвовать' },
              { text: 'a', type: 'affix', gloss: 'невозможность -(y)a' },
              { text: 'ma', type: 'negation', gloss: 'не' },
              { text: 'dı', type: 'affix', gloss: 'прош. вр.' },
              { text: 'm', type: 'person', gloss: 'я' },
            ],
          },
          {
            surface: 'çünkü',
            morphemes: [{ text: 'çünkü', type: 'affix', gloss: 'потому что (после результата)' }],
          },
          {
            surface: 'uçağım',
            morphemes: [
              { text: 'uçağ', type: 'root', gloss: 'самолёт (uçak, k→ğ)' },
              { text: 'ım', type: 'person', gloss: 'мой' },
            ],
          },
        ],
      },
      {
        id: 'crc-ex4',
        tr: 'Bütün biletler tükendi, bu yüzden konsere gidemedik.',
        ru: 'Все билеты закончились, поэтому мы не смогли пойти на концерт.',
        annotatedWords: [
          {
            surface: 'tükendi',
            morphemes: [
              { text: 'tüken', type: 'root', gloss: 'заканчиваться/иссякать' },
              { text: 'di', type: 'affix', gloss: 'прош. вр.' },
            ],
          },
          {
            surface: 'yüzden',
            morphemes: [
              { text: 'yüz', type: 'root', gloss: 'причина (bu yüzden — поэтому)' },
              { text: 'den', type: 'affix', gloss: 'исх. п.' },
            ],
          },
          {
            surface: 'gidemedik',
            morphemes: [
              { text: 'gid', type: 'root', gloss: 'идти (t→d)' },
              { text: 'e', type: 'affix', gloss: 'невозможность -(y)e' },
              { text: 'me', type: 'negation', gloss: 'не' },
              { text: 'di', type: 'affix', gloss: 'прош. вр.' },
              { text: 'k', type: 'person', gloss: 'мы' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Порядок частей: -dığı için (Сначала причина) vs çünkü (Сначала результат)',
          explanation:
            'Оборот -dığı için / -dığından стоит в начале фразы (Причина → Следствие). Союз çünkü («потому что») не начинает нейтральное предложение: сначала звучит факт/результат, а затем объяснение после çünkü.',
          exampleTr: 'Hasta olduğum için gelmedim (Заболел → не пришёл) vs Gelmedim, çünkü hastaydım (Не пришёл, т. к. был болен)',
          exampleRu: 'Так как заболел, не пришёл vs Не пришёл, потому что был болен',
          relatedTopicId: 'conjunctions',
        },
        {
          title: 'Причина (-dığı için) vs Цель (-mak için)',
          explanation:
            'Оба оборота используют послелог için, но с разными формами глагола. Причастие -dık/-acak + принадлежность + için выражает ПРИЧИНУ («потому что»), а инфинитив -mak/-ma + için — ЦЕЛЬ («чтобы»).',
          exampleTr: 'Çok çalıştığım için yoruldum (Устал, потому что много работал) vs Başarmak için çok çalıştım (Работал, чтобы добиться успеха)',
          exampleRu: 'устал, так как работал vs работал, чтобы преуспеть',
          relatedTopicId: 'purpose-clauses',
        },
      ],
    },
    miniCheck: [
      {
        id: 'crc-q1',
        prompt: 'Выберите верный перевод: «Так как мы опоздали на автобус, мы взяли такси» (otobüsü kaçırmak):',
        type: 'choice',
        options: [
          'Otobüsü kaçırmak için taksiye bindik.',
          'Otobüsü kaçırdığımız için taksiye bindik.',
          'Otobüsü kaçırdığımız çünkü taksiye bindik.',
          'Otobüsü kaçırdık bu yüzden için taksiye bindik.',
        ],
        correctAnswer: 'Otobüsü kaçırdığımız için taksiye bindik.',
        explanation:
          'Причина для «мы» в прошлом/настоящем строится через -dık + -ımız + için → kaçırdığımız için.',
      },
      {
        id: 'crc-q2',
        prompt: 'Заполните пропуск формой будущего причастия от «gitmek»: «Так как я завтра уеду, сегодня собираю чемодан» — Yarın ___ için bugün bavul topluyorum.',
        type: 'input',
        correctAnswer: 'gideceğim',
        acceptedAnswers: ['gideceğim', 'gideceğim için'],
        explanation:
          'Для причины в будущем вместо -dığı используется -(y)acak + принадлежность: gid + eceğ + im → gideceğim (t→d, k→ğ).',
      },
      {
        id: 'crc-q3',
        prompt: 'Какая связка вводит СЛЕДСТВИЕ («поэтому»)?',
        type: 'choice',
        options: ['çünkü', 'bu yüzden', 'rağmen', 'amacıyla'],
        correctAnswer: 'bu yüzden',
        explanation:
          'bu yüzden (как и bu nedenle, dolayısıyla) стоит перед результатом и переводится «поэтому, из-за этого».',
      },
      {
        id: 'crc-q4',
        prompt: 'Образуйте отрицательную форму причины (3 л. ед. ч.) от «bilmek»: «так как он не знает» — ___ için…',
        type: 'input',
        correctAnswer: 'bilmediği',
        acceptedAnswers: ['bilmediği', 'bilmediği için'],
        explanation:
          'bil + me (отрицание) + diğ (причастие) + i (его) → bilmediği için.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'purpose-clauses',
    sectionId: 'syntax',
    titleRu: 'Придаточные цели (-mak için, diye)',
    titleTr: 'Amaç-Sonuç Cümleleri',
    level: 'B1',
    affixes: ['-mak için', '-mek için', '-ması için', '-mesi için', 'diye', 'amacıyla'],
    summary:
      'Способ выражения цели («чтобы») зависит от того, совпадает ли субъект действия в обеих частях предложения. Если действие выполняет один и тот же субъект, ставится инфинитив -mak/-mek + için (или amacıyla). Если субъекты разные («чтобы ты, чтобы он»), используется имя действия -ma + принадлежность + için или желательно-повелительное наклонение + diye.',
    formula: [
      { text: 'Основа + -mAk²', type: 'root', gloss: 'один субъект (-mak için)' },
      { text: '/ -mA² + принадл.', type: 'person', gloss: 'разные субъекты (-ması için)' },
      { text: '+ için / amacıyla / diye', type: 'affix', gloss: 'цель («чтобы / ради»)' },
    ],
    conjugationTable: {
      affirmative: {
        'Один субъект (-mAk)': [
          { text: 'anla', type: 'root', gloss: 'понять' },
          { text: 'mak', type: 'affix', gloss: 'инфинитив' },
          { text: ' için', type: 'affix', gloss: 'чтобы понять (самому)' },
        ],
        'Разн. субъекты (Ben)': [
          { text: 'anla', type: 'root', gloss: 'понять' },
          { text: 'ma', type: 'affix', gloss: 'имя действия' },
          { text: 'm', type: 'person', gloss: 'моё' },
          { text: ' için', type: 'affix', gloss: 'чтобы я понял' },
        ],
        'Разн. субъекты (Sen)': [
          { text: 'anla', type: 'root', gloss: 'понять' },
          { text: 'ma', type: 'affix', gloss: 'имя действия' },
          { text: 'n', type: 'person', gloss: 'твоё' },
          { text: ' için', type: 'affix', gloss: 'чтобы ты понял' },
        ],
        'Разн. субъекты (O)': [
          { text: 'anla', type: 'root', gloss: 'понять' },
          { text: 'ma', type: 'affix', gloss: 'имя действия' },
          { text: 's', type: 'buffer', gloss: 'буфер s' },
          { text: 'ı', type: 'person', gloss: 'его' },
          { text: ' için', type: 'affix', gloss: 'чтобы он понял' },
        ],
        'Разговорное (diye)': [
          { text: 'anla', type: 'root', gloss: 'понять' },
          { text: 'sın', type: 'person', gloss: 'пусть поймёт (3 л.)' },
          { text: ' diye', type: 'affix', gloss: 'чтобы он понял' },
        ],
        'Официальное (amacıyla)': [
          { text: 'anla', type: 'root', gloss: 'понять' },
          { text: 'mak', type: 'affix', gloss: 'инфинитив' },
          { text: ' amacıyla', type: 'affix', gloss: 'с целью понять' },
        ],
      },
      negative: {
        'Один субъект (отр.)': [
          { text: 'geç kal', type: 'root', gloss: 'опоздать' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'mak', type: 'affix', gloss: 'инфинитив' },
          { text: ' için', type: 'affix', gloss: 'чтобы не опоздать' },
        ],
        'Разн. субъекты (Sen)': [
          { text: 'geç kal', type: 'root', gloss: 'опоздать' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'ma', type: 'affix', gloss: 'имя действия' },
          { text: 'n', type: 'person', gloss: 'твоё' },
          { text: ' için', type: 'affix', gloss: 'чтобы ты не опоздал' },
        ],
        'Разн. субъекты (O)': [
          { text: 'geç kal', type: 'root', gloss: 'опоздать' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'ma', type: 'affix', gloss: 'имя действия' },
          { text: 's', type: 'buffer', gloss: 'буфер s' },
          { text: 'ı', type: 'person', gloss: 'его' },
          { text: ' için', type: 'affix', gloss: 'чтобы он не опоздал' },
        ],
        'Разг. с diye (отр.)': [
          { text: 'üşüt', type: 'root', gloss: 'простудиться' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'sin', type: 'person', gloss: 'пусть не' },
          { text: ' diye', type: 'affix', gloss: 'чтобы не простудился' },
        ],
      },
      question: {
        'Цель (один субъект)': [
          { text: 'dinlen', type: 'root', gloss: 'отдохнуть' },
          { text: 'mek', type: 'affix', gloss: 'инфинитив' },
          { text: ' için mi?', type: 'question', gloss: 'чтобы отдохнуть ли?' },
        ],
        'Цель (Sen)': [
          { text: 'gör', type: 'root', gloss: 'увидеть' },
          { text: 'me', type: 'affix', gloss: 'имя действия' },
          { text: 'n', type: 'person', gloss: 'твоё' },
          { text: ' için mi?', type: 'question', gloss: 'чтобы ты увидел ли?' },
        ],
        'Цель (O)': [
          { text: 'git', type: 'root', gloss: 'уйти' },
          { text: 'me', type: 'affix', gloss: 'имя действия' },
          { text: 'si', type: 'person', gloss: 'его' },
          { text: ' için mi?', type: 'question', gloss: 'чтобы он ушёл ли?' },
        ],
        'Цель с diye': [
          { text: 'duy', type: 'root', gloss: 'услышать' },
          { text: 'sun', type: 'person', gloss: 'пусть' },
          { text: ' diye mi?', type: 'question', gloss: 'чтобы услышал ли?' },
        ],
      },
      negativeQuestion: {
        'Отриц. цель (один суб.)': [
          { text: 'unut', type: 'root', gloss: 'забыть' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'mak', type: 'affix', gloss: 'инфинитив' },
          { text: ' için mi?', type: 'question', gloss: 'чтобы не забыть ли?' },
        ],
        'Отриц. цель (O)': [
          { text: 'üzül', type: 'root', gloss: 'расстроиться' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'mesi', type: 'affix', gloss: 'его не-расстройство' },
          { text: ' için mi?', type: 'question', gloss: 'чтобы он не расстроился ли?' },
        ],
        'Отриц. цель с diye': [
          { text: 'uyan', type: 'root', gloss: 'проснуться' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'sın', type: 'person', gloss: 'пусть не' },
          { text: ' diye mi?', type: 'question', gloss: 'чтобы не проснулся ли?' },
        ],
        'Уточнение': [
          { text: 'görüş', type: 'root', gloss: 'увидеться' },
          { text: 'mek', type: 'affix', gloss: 'инфинитив' },
          { text: ' için', type: 'affix', gloss: 'чтобы' },
          { text: ' değil mi?', type: 'question', gloss: 'ведь так?' },
        ],
      },
    },
    examples: [
      {
        id: 'pc-ex1',
        tr: 'Türkçeyi akıcı konuşmak için her gün pratik yapıyorum.',
        ru: 'Чтобы свободно говорить по-турецки, я практикуюсь каждый день.',
        annotatedWords: [
          {
            surface: 'Türkçeyi',
            morphemes: [
              { text: 'Türkçe', type: 'root', gloss: 'турецкий язык' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'i', type: 'affix', gloss: 'вин. п.' },
            ],
          },
          {
            surface: 'konuşmak',
            morphemes: [
              { text: 'konuş', type: 'root', gloss: 'говорить' },
              { text: 'mak', type: 'affix', gloss: 'инфинитив (один субъект)' },
            ],
          },
          {
            surface: 'için',
            morphemes: [{ text: 'için', type: 'affix', gloss: 'чтобы' }],
          },
        ],
      },
      {
        id: 'pc-ex2',
        tr: 'Öğrencilerin konuyu iyi anlaması için öğretmeni dinlemeleri gerekiyor.',
        ru: 'Чтобы ученики хорошо поняли тему, им нужно слушать учителя.',
        annotatedWords: [
          {
            surface: 'Öğrencilerin',
            morphemes: [
              { text: 'Öğrenci', type: 'root', gloss: 'ученик' },
              { text: 'ler', type: 'affix', gloss: 'мн. ч.' },
              { text: 'in', type: 'affix', gloss: 'род. п. (субъект в -ması)' },
            ],
          },
          {
            surface: 'anlaması',
            morphemes: [
              { text: 'anla', type: 'root', gloss: 'понимать' },
              { text: 'ma', type: 'affix', gloss: 'имя действия' },
              { text: 's', type: 'buffer', gloss: 'буфер s' },
              { text: 'ı', type: 'person', gloss: 'принадл. 3 л.' },
            ],
          },
          {
            surface: 'dinlemeleri',
            morphemes: [
              { text: 'dinle', type: 'root', gloss: 'слушать' },
              { text: 'me', type: 'affix', gloss: 'имя действия' },
              { text: 'ler', type: 'affix', gloss: 'мн. ч.' },
              { text: 'i', type: 'person', gloss: 'их' },
            ],
          },
        ],
      },
      {
        id: 'pc-ex3',
        tr: 'Bebek uyanmasın diye kapıyı yavaşça kapattım.',
        ru: 'Чтобы малыш не проснулся, я тихо закрыл дверь.',
        annotatedWords: [
          {
            surface: 'uyanmasın',
            morphemes: [
              { text: 'uyan', type: 'root', gloss: 'просыпаться' },
              { text: 'ma', type: 'negation', gloss: 'не' },
              { text: 'sın', type: 'person', gloss: 'пусть не (3 л.)' },
            ],
          },
          {
            surface: 'diye',
            morphemes: [{ text: 'diye', type: 'affix', gloss: 'чтобы (цель)' }],
          },
          {
            surface: 'kapattım',
            morphemes: [
              { text: 'kapat', type: 'root', gloss: 'закрывать' },
              { text: 'tı', type: 'affix', gloss: 'прош. вр. (d→t)' },
              { text: 'm', type: 'person', gloss: 'я' },
            ],
          },
        ],
      },
      {
        id: 'pc-ex4',
        tr: 'Yeni projeyi tanıtmak amacıyla bir toplantı düzenledik.',
        ru: 'Мы организовали встречу с целью представить новый проект.',
        annotatedWords: [
          {
            surface: 'tanıtmak',
            morphemes: [
              { text: 'tanıt', type: 'root', gloss: 'представлять/знакомить' },
              { text: 'mak', type: 'affix', gloss: 'инфинитив' },
            ],
          },
          {
            surface: 'amacıyla',
            morphemes: [
              { text: 'amaç', type: 'root', gloss: 'цель (ç→c)' },
              { text: 'ı', type: 'person', gloss: 'его (изафет)' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'la', type: 'affix', gloss: 'с (ile) — с целью' },
            ],
          },
          {
            surface: 'düzenledik',
            morphemes: [
              { text: 'düzenle', type: 'root', gloss: 'организовывать' },
              { text: 'di', type: 'affix', gloss: 'прош. вр.' },
              { text: 'k', type: 'person', gloss: 'мы' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Один субъект (-mak için) vs Разные субъекты (-ması için)',
          explanation:
            'Если оба действия совершает один и тот же человек, используйте -mak için. Если же вы хотите, чтобы действие выполнил КТО-ТО ДРУГОЙ («чтобы ты, чтобы он»), обязательно ставьте усечённое имя действия -ma + принадлежность + için.',
          exampleTr: 'Erken gitmek için koştum (Бежал, чтобы прийти) vs Erken gitmen için taksi çağırdım (Вызвал такси, чтобы ТЫ приехал)',
          exampleRu: 'чтобы прийти самому vs чтобы ты пришёл',
          relatedTopicId: 'verbal-nouns-mak-ma-is',
        },
        {
          title: 'Цель (-mak için / -mamak için) vs Причина (-dığı için / -madığı için)',
          explanation:
            'Внешне обе конструкции оканчиваются на için, но передают разные смыслы: -mak/-ma + için относится к желаемому будущему (цель «чтобы»), а -dık + принадлежность + için — к причине («так как / потому что»).',
          exampleTr: 'Unutmamak için not aldım (Записал, чтобы не забыть) vs Unuttuğum için almadım (Не купил, так как забыл)',
          exampleRu: 'чтобы не забыть vs потому что забыл',
          relatedTopicId: 'cause-result-clauses',
        },
      ],
    },
    miniCheck: [
      {
        id: 'pc-q1',
        prompt: 'Выберите верную фразу: «Я говорю громко, чтобы вы меня слышали» (разные субъекты — я и вы):',
        type: 'choice',
        options: [
          'Beni duymak için yüksek sesle konuşuyorum.',
          'Beni duymanız için yüksek sesle konuşuyorum.',
          'Beni duyduğunuz için yüksek sesle konuşuyorum.',
          'Beni duyacak için yüksek sesle konuşuyorum.',
        ],
        correctAnswer: 'Beni duymanız için yüksek sesle konuşuyorum.',
        explanation:
          'Поскольку субъекты разные (я говорю, а вы слышите), нужна форма -ma + принадлежность 2 л. мн. ч. (-nız) + için → duymanız için.',
      },
      {
        id: 'pc-q2',
        prompt: 'Заполните пропуск (один субъект, «чтобы не опоздать» от «geç kalmak»): Evden erken çıktım, ___ için.',
        type: 'input',
        correctAnswer: 'geç kalmamak',
        acceptedAnswers: ['geç kalmamak', 'kalmamak'],
        explanation:
          'Субъект один («я вышел, чтобы я не опоздал»), поэтому к основе geç kal- ставим отрицание -ma + инфинитив -mak → geç kalmamak için.',
      },
      {
        id: 'pc-q3',
        prompt: 'Какой вариант с частицей «diye» верный: «Чтобы он не замёрз, я дал ему куртку»?',
        type: 'choice',
        options: [
          'Üşümek diye ona montumu verdim.',
          'Üşüdü diye ona montumu verdim.',
          'Üşümesin diye ona montumu verdim.',
          'Üşümesi diye ona montumu verdim.',
        ],
        correctAnswer: 'Üşümesin diye ona montumu verdim.',
        explanation:
          'Перед целевым diye в 3-м лице ставится форма повелительно-желательного наклонения (-sın/-sin, в отриц. -masın/-mesin) → Üşümesin diye.',
      },
      {
        id: 'pc-q4',
        prompt: 'Вставьте книжный синоним «için» со значением «с целью» (форма от слова «amaç»): Toplantı yapmak ___ bir araya geldik.',
        type: 'input',
        correctAnswer: 'amacıyla',
        acceptedAnswers: ['amacıyla'],
        explanation:
          'amaç + ı + y + la → amacıyla («с целью»).',
      },
    ],
    isDraft: false,
  },

  {
    id: 'direct-indirect-speech',
    sectionId: 'syntax',
    titleRu: 'Прямая и косвенная речь (diye, -dığını söyledi)',
    titleTr: 'Doğrudan ve Dolaylı Anlatım',
    level: 'B2',
    levels: ['B2', 'C1'],
    affixes: ['diye', '-dığını', '-diğini', '-acağını', '-eceğini', '-masını', '-mesini', 'söyledi', 'sordu'],
    summary:
      'Прямая речь (Doğrudan anlatım) передаёт чьи-то слова дословно перед глаголом demek или связкой diye («…» dedi / diye sordu). Косвенная речь (Dolaylı anlatım) преобразует сказуемое в номинализацию с притяжательным аффиксом и винительным падежом: факты настоящего/прошлого передаются через -dığını, будущее — через -acağını, а просьбы и приказы — через -masını.',
    formula: [
      { text: 'Основа + -dık / -(y)acak / -ma', type: 'affix', gloss: 'факт / будущее / просьба' },
      { text: '+ принадл. + -(n)ı', type: 'person', gloss: 'лицо говорящего + вин. п.' },
      { text: 'söyledi / sordu / istedi', type: 'root', gloss: 'глагол речи (или «…» diye)' },
    ],
    conjugationTable: {
      affirmative: {
        'Прямая речь (dedi)': [
          { text: '«Yarın ', type: 'affix', gloss: 'завтра' },
          { text: 'geliyorum» ', type: 'root', gloss: 'дословная цитата' },
          { text: 'dedi', type: 'root', gloss: 'сказал (он/она)' },
        ],
        'Прямая с diye': [
          { text: '«Dikkatli ', type: 'affix', gloss: 'будьте' },
          { text: 'olun!» ', type: 'root', gloss: 'осторожны' },
          { text: 'diye ', type: 'affix', gloss: 'связка цитаты' },
          { text: 'uyardı', type: 'root', gloss: 'предупредил' },
        ],
        'Косв. факт (-dık)': [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'diğ', type: 'affix', gloss: 'прич. наст./прош.' },
          { text: 'i', type: 'person', gloss: 'его' },
          { text: 'ni', type: 'affix', gloss: 'вин. п. (что он пришёл/приходит)' },
        ],
        'Косв. будущее (-acak)': [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'eceğ', type: 'affix', gloss: 'прич. буд. (k→ğ)' },
          { text: 'i', type: 'person', gloss: 'его' },
          { text: 'ni', type: 'affix', gloss: 'вин. п. (что он придёт)' },
        ],
        'Косв. просьба (-ma)': [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'me', type: 'affix', gloss: 'имя действия' },
          { text: 's', type: 'buffer', gloss: 'буфер s' },
          { text: 'i', type: 'person', gloss: 'его' },
          { text: 'ni', type: 'affix', gloss: 'вин. п. (чтобы он пришёл)' },
        ],
        'Косв. да/нет (-ıp -madığı)': [
          { text: 'gelip ', type: 'affix', gloss: 'придя' },
          { text: 'gelmediğ', type: 'negation', gloss: 'или не придя' },
          { text: 'i', type: 'person', gloss: 'его' },
          { text: 'ni', type: 'affix', gloss: 'пришёл ли он' },
        ],
      },
      negative: {
        'Отриц. факт (-madığı)': [
          { text: 'bil', type: 'root', gloss: 'знать' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'diğ', type: 'affix', gloss: 'прич. -dik' },
          { text: 'i', type: 'person', gloss: 'его' },
          { text: 'ni', type: 'affix', gloss: 'что он не знает/не знал' },
        ],
        'Отриц. буд. (-mayacağı)': [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'yeceğ', type: 'affix', gloss: 'прич. буд.' },
          { text: 'i', type: 'person', gloss: 'его' },
          { text: 'ni', type: 'affix', gloss: 'что он не придёт' },
        ],
        'Отриц. просьба (-maması)': [
          { text: 'geç kal', type: 'root', gloss: 'опоздать' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'ma', type: 'affix', gloss: 'имя действия' },
          { text: 'sını', type: 'person', gloss: 'чтобы не опаздывал' },
        ],
        'Отриц. глагол речи': [
          { text: 'geleceğini ', type: 'affix', gloss: 'что придёт' },
          { text: 'söyle', type: 'root', gloss: 'сказать' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'di', type: 'affix', gloss: 'не сказал' },
        ],
      },
      question: {
        'С вопр. словом': [
          { text: 'kimin ', type: 'question', gloss: 'кто (род. п.)' },
          { text: 'geldiğini ', type: 'affix', gloss: 'пришёл' },
          { text: 'sordu', type: 'root', gloss: 'спросил' },
        ],
        'Да/нет (-ıp -madığını)': [
          { text: 'beğenip ', type: 'root', gloss: 'понравилось' },
          { text: 'beğenmediğini ', type: 'question', gloss: 'или нет (ли)' },
          { text: 'sordu', type: 'root', gloss: 'спросил' },
        ],
        'Прямой вопрос с diye': [
          { text: '«Hazır mısın?» ', type: 'question', gloss: 'ты готов?' },
          { text: 'diye ', type: 'affix', gloss: 'связка' },
          { text: 'sordu', type: 'root', gloss: 'спросил' },
        ],
        'О будущем (ne zaman)': [
          { text: 'ne zaman ', type: 'question', gloss: 'когда' },
          { text: 'döneceğini ', type: 'affix', gloss: 'вернётся' },
          { text: 'sordun mu?', type: 'question', gloss: 'ты спросил?' },
        ],
      },
      negativeQuestion: {
        'Разве не сказал?': [
          { text: 'ne zaman ', type: 'question', gloss: 'когда' },
          { text: 'başlayacağını ', type: 'affix', gloss: 'начнётся' },
          { text: 'söylemedi mi?', type: 'question', gloss: 'разве не сказал?' },
        ],
        'Разве не попросил?': [
          { text: 'beklememizi ', type: 'affix', gloss: 'чтобы мы подождали' },
          { text: 'istemedi mi?', type: 'question', gloss: 'разве не попросил?' },
        ],
        'Разве не спросил?': [
          { text: 'gidip ', type: 'root', gloss: 'ходил' },
          { text: 'gitmediğimizi ', type: 'question', gloss: 'ли мы' },
          { text: 'sormadı mı?', type: 'question', gloss: 'разве не спросил?' },
        ],
        'С прямой цитатой': [
          { text: '«Yapma!» ', type: 'negation', gloss: 'не делай!' },
          { text: 'diye ', type: 'affix', gloss: 'связка' },
          { text: 'demedi mi?', type: 'question', gloss: 'разве не говорил?' },
        ],
      },
    },
    examples: [
      {
        id: 'dis-ex1',
        tr: 'Doktor, hastaya mutlaka dinlenmesi gerektiğini söyledi.',
        ru: 'Врач сказал пациенту, что ему обязательно нужно отдохнуть.',
        annotatedWords: [
          {
            surface: 'hastaya',
            morphemes: [
              { text: 'hasta', type: 'root', gloss: 'пациент' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'a', type: 'affix', gloss: 'дат. п. (кому)' },
            ],
          },
          {
            surface: 'dinlenmesi',
            morphemes: [
              { text: 'dinlen', type: 'root', gloss: 'отдыхать' },
              { text: 'me', type: 'affix', gloss: 'имя действия' },
              { text: 's', type: 'buffer', gloss: 'буфер s' },
              { text: 'i', type: 'person', gloss: 'его' },
            ],
          },
          {
            surface: 'gerektiğini',
            morphemes: [
              { text: 'gerek', type: 'root', gloss: 'быть нужным' },
              { text: 'tiğ', type: 'affix', gloss: 'прич. -dik (d→t, k→ğ)' },
              { text: 'i', type: 'person', gloss: 'его' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'i', type: 'affix', gloss: 'вин. п.' },
            ],
          },
        ],
      },
      {
        id: 'dis-ex2',
        tr: 'Müdür yardımcısı toplantının saat üçte başlayacağını bildirdi.',
        ru: 'Заместитель директора сообщил, что встреча начнётся в три часа.',
        annotatedWords: [
          {
            surface: 'toplantının',
            morphemes: [
              { text: 'toplantı', type: 'root', gloss: 'собрание/встреча' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'ın', type: 'affix', gloss: 'род. п. (субъект причастия)' },
            ],
          },
          {
            surface: 'başlayacağını',
            morphemes: [
              { text: 'başla', type: 'root', gloss: 'начинаться' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'acağ', type: 'affix', gloss: 'прич. буд. (k→ğ)' },
              { text: 'ı', type: 'person', gloss: 'его' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'ı', type: 'affix', gloss: 'вин. п.' },
            ],
          },
          {
            surface: 'bildirdi',
            morphemes: [
              { text: 'bildir', type: 'root', gloss: 'сообщать/уведомлять' },
              { text: 'di', type: 'affix', gloss: 'прош. вр.' },
            ],
          },
        ],
      },
      {
        id: 'dis-ex3',
        tr: 'Öğretmen öğrencilerden sessiz olmalarını istedi.',
        ru: 'Учитель попросил учеников вести себя тихо.',
        annotatedWords: [
          {
            surface: 'öğrencilerden',
            morphemes: [
              { text: 'öğrenci', type: 'root', gloss: 'ученик' },
              { text: 'ler', type: 'affix', gloss: 'мн. ч.' },
              { text: 'den', type: 'affix', gloss: 'исх. п. (у кого попросил)' },
            ],
          },
          {
            surface: 'olmalarını',
            morphemes: [
              { text: 'ol', type: 'root', gloss: 'быть' },
              { text: 'ma', type: 'affix', gloss: 'имя действия (просьба)' },
              { text: 'lar', type: 'affix', gloss: 'мн. ч.' },
              { text: 'ı', type: 'person', gloss: 'их' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'ı', type: 'affix', gloss: 'вин. п.' },
            ],
          },
          {
            surface: 'istedi',
            morphemes: [
              { text: 'iste', type: 'root', gloss: 'просить / хотеть' },
              { text: 'di', type: 'affix', gloss: 'прош. вр.' },
            ],
          },
        ],
      },
      {
        id: 'dis-ex4',
        tr: 'Arkadaşım bana «Yarın görüşürüz» diye mesaj attı.',
        ru: 'Мой друг прислал мне сообщение: «Увидимся завтра».',
        annotatedWords: [
          {
            surface: 'Arkadaşım',
            morphemes: [
              { text: 'Arkadaş', type: 'root', gloss: 'друг' },
              { text: 'ım', type: 'person', gloss: 'мой' },
            ],
          },
          {
            surface: 'görüşürüz',
            morphemes: [
              { text: 'görüş', type: 'root', gloss: 'увидеться (взаимн.)' },
              { text: 'ür', type: 'affix', gloss: 'шир. время' },
              { text: 'üz', type: 'person', gloss: 'мы' },
            ],
          },
          {
            surface: 'diye',
            morphemes: [{ text: 'diye', type: 'affix', gloss: 'связка прямой речи' }],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Глагол demek (прямая цитата) vs söylemek (косвенная речь)',
          explanation:
            'Глагол demek принимает прямую речь без падежных изменений («…» dedi). Глаголы söylemek, bildirmek, açıklamak требуют косвенного придаточного оборота на -dığını / -acağını в винительном падеже.',
          exampleTr: '«Geliyorum» dedi (Он сказал: «Иду») vs Geleceğini söyledi (Он сказал, что придёт)',
          exampleRu: 'сказал «Иду» vs сказал, что придёт',
          relatedTopicId: 'participles-an-dik',
        },
        {
          title: 'Передача факта (-dığını) vs передача приказа/просьбы (-masını)',
          explanation:
            'Утверждение (изъявительное наклонение) в косвенной речи переходит в -dık или -acak. Просьба или приказ (повелительное наклонение) всегда передаются через имя действия -ma + принадлежность + винительный падеж.',
          exampleTr: '«Eve geldim» → Eve geldiğini söyledi vs «Eve gel!» → Eve gelmesini söyledi',
          exampleRu: 'сказал, что пришёл домой vs велел прийти домой',
          relatedTopicId: 'imperative-optative',
        },
      ],
    },
    miniCheck: [
      {
        id: 'dis-q1',
        prompt: 'Преобразуйте в косвенную речь: Ali: «Yarın Ankara\'ya gideceğim.»',
        type: 'choice',
        options: [
          "Ali yarın Ankara'ya gittiğini söyledi.",
          "Ali yarın Ankara'ya gideceğini söyledi.",
          "Ali yarın Ankara'ya gitmesini söyledi.",
          "Ali yarın Ankara'ya gidecek dedi.",
        ],
        correctAnswer: "Ali yarın Ankara'ya gideceğini söyledi.",
        explanation:
          'Обещание или план в будущем времени (-eceğim) передаётся в косвенной речи через -eceğini → gideceğini söyledi.',
      },
      {
        id: 'dis-q2',
        prompt: 'Передайте приказ в косвенной речи: «Kapıyı kapat!» (закрыть — kapatmak, 3 л. ед. ч.) — Anne çocuğa kapıyı ___ söyledi.',
        type: 'input',
        correctAnswer: 'kapatmasını',
        acceptedAnswers: ['kapatmasını'],
        explanation:
          'Приказ и просьба в косвенной речи оформляются через -ma + принадлежность + -(n)ı: kapat + ma + sı + n + ı → kapatmasını.',
      },
      {
        id: 'dis-q3',
        prompt: 'Как правильно перевести косвенный общий вопрос: «Он спросил, придёшь ли ты»?',
        type: 'choice',
        options: [
          'Gelecek misin sordu.',
          'Gelip gelmeyeceğini sordu.',
          'Geldiğini mi sordu.',
          'Gelmeni sordu.',
        ],
        correctAnswer: 'Gelip gelmeyeceğini sordu.',
        explanation:
          'Косвенный вопрос «ли» строится через двойную форму «деепричастие -(y)ıp + отрицательное причастие -madık/-mayacak» → gelip gelmeyeceğini.',
      },
      {
        id: 'dis-q4',
        prompt: 'Вставьте связку после прямой цитаты: «Hava çok soğuk» ___ şikâyet etti.',
        type: 'input',
        correctAnswer: 'diye',
        acceptedAnswers: ['diye'],
        explanation:
          'После дословной цитаты перед любым глаголом речи (кроме demek) ставится связка diye.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'productive-affixes',
    sectionId: 'word-formation-appendix',
    titleRu: 'Продуктивные аффиксы (-lık, -lı, -sız, -cı, -laş, -la, -ca)',
    titleTr: 'Üretken Yapım Ekleri',
    level: 'A2',
    levels: ['A2', 'B1', 'B2'],
    affixes: [
      '-lık',
      '-lik',
      '-luk',
      '-lük',
      '-lı',
      '-li',
      '-lu',
      '-lü',
      '-sız',
      '-siz',
      '-suz',
      '-süz',
      '-cı',
      '-ci',
      '-çı',
      '-çi',
      '-laş',
      '-leş',
      '-la',
      '-le',
      '-ca',
      '-ce',
    ],
    summary:
      'Словообразовательные аффиксы (yapım ekleri) крепятся к корню раньше окончаний числа и падежа и могут выстраиваться в цепочки. Семь самых продуктивных моделей — -lı (обладающий/с), -sız (без), -lık (свойство/предмет/место), -cı (профессия/приверженец), -la и -laş (глаголы от имён), -ca (язык/наречие) — позволяют понимать и строить сотни слов.',
    formula: [
      { text: 'Основа', type: 'root', gloss: 'существительное / прилагательное' },
      { text: '+ -lI⁴ / -sIz⁴ / -lIk⁴ / -CI⁴', type: 'affix', gloss: 'именное словообразование' },
      { text: '/ + -lA² / -lAş² / -CA²', type: 'affix', gloss: 'глаголы и наречия' },
    ],
    conjugationTable: {
      affirmative: {
        '-lI⁴ (с / обладающий)': [
          { text: 'şeker', type: 'root', gloss: 'сахар' },
          { text: 'li', type: 'affix', gloss: 'с сахаром / сладкий' },
        ],
        '-lIk⁴ (предмет / свойство)': [
          { text: 'göz', type: 'root', gloss: 'глаз' },
          { text: 'lük', type: 'affix', gloss: 'очки (предназначено для глаз)' },
        ],
        '-CI⁴ (профессия / род деят.)': [
          { text: 'kitap', type: 'root', gloss: 'книга' },
          { text: 'çı', type: 'affix', gloss: 'книготорговец / книжный магазин (c→ç)' },
        ],
        '-lA² (делать / действовать)': [
          { text: 'temiz', type: 'root', gloss: 'чистый' },
          { text: 'le', type: 'affix', gloss: 'чистить / убирать' },
        ],
        '-lAş² (становиться / взаимн.)': [
          { text: 'kolay', type: 'root', gloss: 'лёгкий' },
          { text: 'laş', type: 'affix', gloss: 'упрощаться / становиться легче' },
        ],
        '-CA² (язык / наречие)': [
          { text: 'Türk', type: 'root', gloss: 'турок' },
          { text: 'çe', type: 'affix', gloss: 'турецкий язык (c→ç)' },
        ],
      },
      negative: {
        '-sIz⁴ (без / отсутствие)': [
          { text: 'şeker', type: 'root', gloss: 'сахар' },
          { text: 'siz', type: 'negation', gloss: 'без сахара / несладкий' },
        ],
        '-sIz⁴ + -lIk⁴ (отсутствие)': [
          { text: 'iş', type: 'root', gloss: 'работа' },
          { text: 'siz', type: 'negation', gloss: 'без работы' },
          { text: 'lik', type: 'affix', gloss: 'безработица' },
        ],
        'Имя с -lI⁴ + değil': [
          { text: 'süt', type: 'root', gloss: 'молоко' },
          { text: 'lü ', type: 'affix', gloss: 'с молоком' },
          { text: 'değil', type: 'negation', gloss: 'не с молоком' },
        ],
        'Глагол -lA² + отриц.': [
          { text: 'baş', type: 'root', gloss: 'начало' },
          { text: 'la', type: 'affix', gloss: 'начинать' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dı', type: 'affix', gloss: 'не начал' },
        ],
        'Глагол -lAş² + отриц.': [
          { text: 'güzel', type: 'root', gloss: 'красивый' },
          { text: 'leş', type: 'affix', gloss: 'хорошеть' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'di', type: 'affix', gloss: 'не похорошел' },
        ],
      },
      question: {
        'С -lI⁴ (ли с…)': [
          { text: 'kahve ', type: 'root', gloss: 'кофе' },
          { text: 'süt', type: 'root', gloss: 'молоко' },
          { text: 'lü ', type: 'affix', gloss: 'с молоком' },
          { text: 'mü?', type: 'question', gloss: 'ли?' },
        ],
        'С -sIz⁴ (ли без…)': [
          { text: 'çay ', type: 'root', gloss: 'чай' },
          { text: 'şeker', type: 'root', gloss: 'сахар' },
          { text: 'siz ', type: 'negation', gloss: 'без сахара' },
          { text: 'mi?', type: 'question', gloss: 'ли?' },
        ],
        'С -lIk⁴ (на сколько)': [
          { text: 'kaç ', type: 'question', gloss: 'сколько' },
          { text: 'kişi', type: 'root', gloss: 'человек' },
          { text: 'lik ', type: 'affix', gloss: 'на сколько человек' },
          { text: 'masa?', type: 'root', gloss: 'стол' },
        ],
        'С -lAş² (процесс)': [
          { text: 'Türkçe ', type: 'root', gloss: 'турецкий' },
          { text: 'kolay', type: 'root', gloss: 'лёгкий' },
          { text: 'laştı ', type: 'affix', gloss: 'стал легче' },
          { text: 'mı?', type: 'question', gloss: 'ли?' },
        ],
      },
      negativeQuestion: {
        'С -sIz⁴ + değil mi?': [
          { text: 'yemek ', type: 'root', gloss: 'еда' },
          { text: 'tuz', type: 'root', gloss: 'соль' },
          { text: 'suz ', type: 'negation', gloss: 'несолёная' },
          { text: 'değil mi?', type: 'question', gloss: 'не так ли?' },
        ],
        'С -lI⁴ + değil mi?': [
          { text: 'bu ', type: 'affix', gloss: 'это' },
          { text: 'önem', type: 'root', gloss: 'важность' },
          { text: 'li ', type: 'affix', gloss: 'важно' },
          { text: 'değil mi?', type: 'question', gloss: 'ведь важно?' },
        ],
        'Отриц. -lA² + mı?': [
          { text: 'odayı ', type: 'affix', gloss: 'комнату' },
          { text: 'temiz', type: 'root', gloss: 'чистый' },
          { text: 'le', type: 'affix', gloss: 'убирать' },
          { text: 'medi ', type: 'negation', gloss: 'не' },
          { text: 'mi?', type: 'question', gloss: 'разве не убрал?' },
        ],
        'Отриц. -lAş² + mı?': [
          { text: 'hava ', type: 'root', gloss: 'погода' },
          { text: 'soğuk', type: 'root', gloss: 'холодный' },
          { text: 'laş', type: 'affix', gloss: 'холодать' },
          { text: 'madı ', type: 'negation', gloss: 'не' },
          { text: 'mı?', type: 'question', gloss: 'разве не похолодало?' },
        ],
      },
    },
    examples: [
      {
        id: 'pa-ex1',
        tr: 'Gözlükçüden kendime yeni bir güneş gözlüğü aldım.',
        ru: 'Я купил себе в оптике новые солнцезащитные очки.',
        annotatedWords: [
          {
            surface: 'Gözlükçüden',
            morphemes: [
              { text: 'Göz', type: 'root', gloss: 'глаз' },
              { text: 'lük', type: 'affix', gloss: 'очки' },
              { text: 'çü', type: 'affix', gloss: 'оптика / продавец очков (c→ç)' },
              { text: 'den', type: 'affix', gloss: 'исх. п. (откуда)' },
            ],
          },
          {
            surface: 'gözlüğü',
            morphemes: [
              { text: 'göz', type: 'root', gloss: 'глаз' },
              { text: 'lüğ', type: 'affix', gloss: 'очки (k→ğ)' },
              { text: 'ü', type: 'person', gloss: 'изафет 3 л. (солнечные очки)' },
            ],
          },
          {
            surface: 'aldım',
            morphemes: [
              { text: 'al', type: 'root', gloss: 'покупать/брать' },
              { text: 'dı', type: 'affix', gloss: 'прош. вр.' },
              { text: 'm', type: 'person', gloss: 'я' },
            ],
          },
        ],
      },
      {
        id: 'pa-ex2',
        tr: 'Şekersiz ve sütsüz bir Türk kahvesi içmek istiyorum.',
        ru: 'Я хочу выпить турецкий кофе без сахара и без молока.',
        annotatedWords: [
          {
            surface: 'Şekersiz',
            morphemes: [
              { text: 'Şeker', type: 'root', gloss: 'сахар' },
              { text: 'siz', type: 'negation', gloss: 'без' },
            ],
          },
          {
            surface: 'sütsüz',
            morphemes: [
              { text: 'süt', type: 'root', gloss: 'молоко' },
              { text: 'süz', type: 'negation', gloss: 'без' },
            ],
          },
          {
            surface: 'kahvesi',
            morphemes: [
              { text: 'kahve', type: 'root', gloss: 'кофе' },
              { text: 's', type: 'buffer', gloss: 'буфер s' },
              { text: 'i', type: 'person', gloss: 'изафет 3 л.' },
            ],
          },
        ],
      },
      {
        id: 'pa-ex3',
        tr: 'Son yıllarda şehirdeki yaşam oldukça pahalılaştı.',
        ru: 'В последние годы жизнь в городе заметно подорожала.',
        annotatedWords: [
          {
            surface: 'şehirdeki',
            morphemes: [
              { text: 'şehir', type: 'root', gloss: 'город' },
              { text: 'de', type: 'affix', gloss: 'местн. п.' },
              { text: 'ki', type: 'affix', gloss: 'находящийся в' },
            ],
          },
          {
            surface: 'oldukça',
            morphemes: [
              { text: 'ol', type: 'root', gloss: 'быть' },
              { text: 'duk', type: 'affix', gloss: 'прич. -duk' },
              { text: 'ça', type: 'affix', gloss: 'довольно / весьма' },
            ],
          },
          {
            surface: 'pahalılaştı',
            morphemes: [
              { text: 'pahalı', type: 'root', gloss: 'дорогой' },
              { text: 'laş', type: 'affix', gloss: 'становиться' },
              { text: 'tı', type: 'affix', gloss: 'прош. вр. (d→t)' },
            ],
          },
        ],
      },
      {
        id: 'pa-ex4',
        tr: 'İngilizce ve İspanyolca bilen deneyimli bir rehber arıyoruz.',
        ru: 'Мы ищем опытного гида, знающего английский и испанский языки.',
        annotatedWords: [
          {
            surface: 'İngilizce',
            morphemes: [
              { text: 'İngiliz', type: 'root', gloss: 'англичанин' },
              { text: 'ce', type: 'affix', gloss: 'язык (английский)' },
            ],
          },
          {
            surface: 'deneyimli',
            morphemes: [
              { text: 'deneyim', type: 'root', gloss: 'опыт' },
              { text: 'li', type: 'affix', gloss: 'обладающий (опытный)' },
            ],
          },
          {
            surface: 'arıyoruz',
            morphemes: [
              { text: 'ara', type: 'root', gloss: 'искать (a→ı)' },
              { text: 'ıyor', type: 'affix', gloss: 'наст. длит. вр.' },
              { text: 'uz', type: 'person', gloss: 'мы' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Именной аффикс -cı/-çi (профессия) vs отглагольный -(y)ıcı/-(y)ici',
          explanation:
            'Аффикс -cı/-ci/-çı/-çi присоединяется к СУЩЕСТВИТЕЛЬНЫМ (kitapçı — книготорговец, yalancı — лжец). После глухих согласных по правилу Fıstıkçı Şahap начальная c меняется на ç. От глаголов же деятеля образует -(y)ıcı (satıcı — продавец).',
          exampleTr: 'kitapçı (продавец книг, от kitap) vs okuyucu (читатель, от okumak)',
          exampleRu: 'книготорговец vs читатель',
          relatedTopicId: 'consonant-rules',
        },
        {
          title: 'Аффикс -ca/-ce: язык vs наречие образа действия',
          explanation:
            'Присоединяясь к названиям народов, -ca/-ce образует язык (Rusça, Türkçe). Присоединяясь к прилагательным, он образует наречия способа («быстро, тихо» — hızlıca, sessizce), а с местоимениями — мнение («по-моему» — bence).',
          exampleTr: 'Türkçe konuşuyor (говорит по-турецки) vs Bence haklısın (по-моему, ты прав)',
          exampleRu: 'говорит по-турецки vs по-моему, ты прав',
          relatedTopicId: 'adverbs',
        },
      ],
    },
    miniCheck: [
      {
        id: 'pa-q1',
        prompt: 'Как переводится слово «evsizlik» (корень ev — дом)?',
        type: 'choice',
        options: ['большой дом', 'бездомность', 'домохозяин', 'домашний'],
        correctAnswer: 'бездомность',
        explanation:
          'ev (дом) + siz (без → бездомный) + lik (абстрактное существительное) → бездомность.',
      },
      {
        id: 'pa-q2',
        prompt: 'Образуйте слово «цветочник / продавец цветов» от «çiçek» (учитывайте оглушение согласных):',
        type: 'input',
        correctAnswer: 'çiçekçi',
        acceptedAnswers: ['çiçekçi'],
        explanation:
          'Корень çiçek оканчивается на глухую k, поэтому -ci оглушается в -çi → çiçekçi.',
      },
      {
        id: 'pa-q3',
        prompt: 'Какой глагол означает «упрощаться / становиться легче» (от прилагательного kolay)?',
        type: 'choice',
        options: ['kolaylık', 'kolaylamak', 'kolaylaşmak', 'kolaysız'],
        correctAnswer: 'kolaylaşmak',
        explanation:
          'Аффикс -laş/-leş образует от прилагательных глаголы со значением «становиться каким-либо» → kolaylaşmak.',
      },
      {
        id: 'pa-q4',
        prompt: 'Образуйте прилагательное «солёный» от слова «tuz» (соль):',
        type: 'input',
        correctAnswer: 'tuzlu',
        acceptedAnswers: ['tuzlu'],
        explanation:
          'Гармония гласных на 4 после u даёт -lu → tuzlu.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'affix-dir-meanings',
    sectionId: 'word-formation-appendix',
    titleRu: 'Аффикс -dır/-dir во всех значениях',
    titleTr: '-DIr Ekinin İşlevleri',
    level: 'B1',
    levels: ['B1', 'B2', 'C1'],
    affixes: ['-dır', '-dir', '-dur', '-dür', '-tır', '-tir', '-tur', '-tür'],
    summary:
      'Похожий на первый взгляд аффикс -DIr⁴ (после глухих — -tır/-tir/-tur/-tür) выполняет в турецком 4 совершенно разные функции. На имени в 3-м лице он означает официальный факт или догадку («должно быть»); после времени (-yor, -mış, -acak) — уверенность или предположение; со словами времени — длительность («уже …»); а сразу на корне глагола — каузатив («велеть/попросить сделать»).',
    formula: [
      { text: 'Имя / Прилаг.', type: 'root', gloss: '1. офиц. факт или догадка' },
      { text: '/ Время (-yor/-mış/-acak)', type: 'affix', gloss: '2. предположение / уверенность' },
      { text: '/ Отрезок времени', type: 'buffer', gloss: '3. длительность («уже X»)' },
      { text: '+ -DIr⁴', type: 'affix', gloss: '4. на корне глагола = каузатив' },
    ],
    conjugationTable: {
      affirmative: {
        '1. Офиц. факт / определение': [
          { text: 'Ankara ', type: 'root', gloss: 'Анкара' },
          { text: 'başkent', type: 'root', gloss: 'столица' },
          { text: 'tir', type: 'affix', gloss: 'является (факт)' },
        ],
        '2а. Догадка (на имени)': [
          { text: 'Ahmet ', type: 'person', gloss: 'Ахмет' },
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'de', type: 'affix', gloss: 'местн. п.' },
          { text: 'dir', type: 'affix', gloss: 'наверное, дома' },
        ],
        '2б. Догадка (после времени)': [
          { text: 'Şimdi ', type: 'affix', gloss: 'сейчас' },
          { text: 'uyuyor', type: 'root', gloss: 'спит' },
          { text: 'dur', type: 'affix', gloss: 'должно быть, спит' },
        ],
        '3. Длительность (уже X)': [
          { text: 'İki ', type: 'affix', gloss: 'два' },
          { text: 'yıl', type: 'root', gloss: 'год' },
          { text: 'dır ', type: 'affix', gloss: 'уже два года' },
          { text: 'buradayım', type: 'person', gloss: 'я здесь' },
        ],
        '4. Каузатив (на глаголе)': [
          { text: 'Mektubu ', type: 'affix', gloss: 'письмо' },
          { text: 'yaz', type: 'root', gloss: 'писать' },
          { text: 'dır', type: 'affix', gloss: 'каузатив (велел написать)' },
          { text: 'dı', type: 'affix', gloss: 'прош. вр.' },
        ],
      },
      negative: {
        'Офиц. факт (değildir)': [
          { text: 'Bu ', type: 'affix', gloss: 'это' },
          { text: 'doğru ', type: 'root', gloss: 'верный' },
          { text: 'değil', type: 'negation', gloss: 'не' },
          { text: 'dir', type: 'affix', gloss: 'не является (книжн.)' },
        ],
        'Догадка с отриц. глаголом': [
          { text: 'Henüz ', type: 'affix', gloss: 'ещё' },
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'miş', type: 'affix', gloss: 'прош. вр.' },
          { text: 'tir', type: 'affix', gloss: 'наверное, ещё не пришёл' },
        ],
        'Догадка (değildir)': [
          { text: 'Evde ', type: 'root', gloss: 'дома' },
          { text: 'değil', type: 'negation', gloss: 'не' },
          { text: 'dir', type: 'affix', gloss: 'наверное, его нет дома' },
        ],
        'Длительность + отриц.': [
          { text: 'Aylar', type: 'root', gloss: 'месяцы' },
          { text: 'dır ', type: 'affix', gloss: 'уже месяцами' },
          { text: 'görüş', type: 'root', gloss: 'видеться' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'dik', type: 'affix', gloss: 'мы не виделись' },
        ],
      },
      question: {
        'Догадка в вопросе (имя)': [
          { text: 'Acaba ', type: 'affix', gloss: 'интересно' },
          { text: 'evde ', type: 'root', gloss: 'дома' },
          { text: 'mi', type: 'question', gloss: 'ли' },
          { text: 'dir?', type: 'affix', gloss: 'дома ли он?' },
        ],
        'Определение (nedir)': [
          { text: 'Bunun ', type: 'affix', gloss: 'этого' },
          { text: 'anlamı ', type: 'root', gloss: 'смысл' },
          { text: 'ne', type: 'question', gloss: 'что' },
          { text: 'dir?', type: 'affix', gloss: 'что это значит?' },
        ],
        'Длительность (сколько?)': [
          { text: 'Ne ', type: 'question', gloss: 'сколько' },
          { text: 'kadar', type: 'affix', gloss: 'времени' },
          { text: 'dır ', type: 'affix', gloss: 'уже' },
          { text: 'bekliyorsun?', type: 'root', gloss: 'ждёшь?' },
        ],
        'Догадка с глаголом': [
          { text: 'Sizce ', type: 'affix', gloss: 'по-вашему' },
          { text: 'gitmiş ', type: 'root', gloss: 'ушёл' },
          { text: 'mi', type: 'question', gloss: 'ли' },
          { text: 'dir?', type: 'affix', gloss: 'наверное, уже ушёл?' },
        ],
      },
      negativeQuestion: {
        'Риторический факт': [
          { text: 'Bu ', type: 'affix', gloss: 'это' },
          { text: 'kural ', type: 'root', gloss: 'правило' },
          { text: 'geçerli ', type: 'root', gloss: 'действительно' },
          { text: 'değil ', type: 'negation', gloss: 'не' },
          { text: 'mi', type: 'question', gloss: 'ли' },
          { text: 'dir?', type: 'affix', gloss: 'разве не действует?' },
        ],
        'Недоумение / догадка': [
          { text: 'Haber ', type: 'root', gloss: 'весть' },
          { text: 'almamış ', type: 'negation', gloss: 'не получил' },
          { text: 'mı', type: 'question', gloss: 'ли' },
          { text: 'dır?', type: 'affix', gloss: 'неужели не получил?' },
        ],
        'Длительность + отриц.': [
          { text: 'Yıllar', type: 'root', gloss: 'годы' },
          { text: 'dır ', type: 'affix', gloss: 'уже годами' },
          { text: 'çalış', type: 'root', gloss: 'работать' },
          { text: 'mı', type: 'negation', gloss: 'не' },
          { text: 'yor mu?', type: 'question', gloss: 'разве не работает?' },
        ],
        'Уточнение смысла': [
          { text: 'Amaç ', type: 'root', gloss: 'цель' },
          { text: 'bu ', type: 'affix', gloss: 'это' },
          { text: 'değil ', type: 'negation', gloss: 'не' },
          { text: 'mi', type: 'question', gloss: 'ли' },
          { text: 'dir?', type: 'affix', gloss: 'разве цель не в этом?' },
        ],
      },
    },
    examples: [
      {
        id: 'adm-ex1',
        tr: "Türkiye Cumhuriyeti'nin başkenti Ankara'dır.",
        ru: 'Столицей Турецкой Республики является Анкара (официальный факт).',
        annotatedWords: [
          {
            surface: "Cumhuriyeti'nin",
            morphemes: [
              { text: 'Cumhuriyet', type: 'root', gloss: 'республика' },
              { text: 'i', type: 'person', gloss: 'изафет 3 л.' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'in', type: 'affix', gloss: 'род. п.' },
            ],
          },
          {
            surface: 'başkenti',
            morphemes: [
              { text: 'başkent', type: 'root', gloss: 'столица' },
              { text: 'i', type: 'person', gloss: 'её (изафет)' },
            ],
          },
          {
            surface: "Ankara'dır",
            morphemes: [
              { text: 'Ankara', type: 'root', gloss: 'Анкара' },
              { text: 'dır', type: 'affix', gloss: 'связка официального факта' },
            ],
          },
        ],
      },
      {
        id: 'adm-ex2',
        tr: 'Saat beş oldu, Ali çoktan eve varmıştır.',
        ru: 'Уже пять часов, Али, должно быть, давно добрался до дома.',
        annotatedWords: [
          {
            surface: 'oldu',
            morphemes: [
              { text: 'ol', type: 'root', gloss: 'стать/наступить' },
              { text: 'du', type: 'affix', gloss: 'прош. вр.' },
            ],
          },
          {
            surface: 'varmıştır',
            morphemes: [
              { text: 'var', type: 'root', gloss: 'добираться / прибывать' },
              { text: 'mış', type: 'affix', gloss: 'прош. (неочевидн.)' },
              { text: 'tır', type: 'affix', gloss: 'догадка («должно быть»)' },
            ],
          },
        ],
      },
      {
        id: 'adm-ex3',
        tr: "Beş yıldır İstanbul'da yaşıyorum ama hâlâ her sokağı bilmiyorum.",
        ru: 'Я живу в Стамбуле уже пять лет, но до сих пор знаю не каждую улицу.',
        annotatedWords: [
          {
            surface: 'yıldır',
            morphemes: [
              { text: 'yıl', type: 'root', gloss: 'год' },
              { text: 'dır', type: 'affix', gloss: 'длительность («уже …»)' },
            ],
          },
          {
            surface: "İstanbul'da",
            morphemes: [
              { text: 'İstanbul', type: 'root', gloss: 'Стамбул' },
              { text: 'da', type: 'affix', gloss: 'местн. п.' },
            ],
          },
          {
            surface: 'yaşıyorum',
            morphemes: [
              { text: 'yaşa', type: 'root', gloss: 'жить (a→ı)' },
              { text: 'ıyor', type: 'affix', gloss: 'наст. длит. вр.' },
              { text: 'um', type: 'person', gloss: 'я' },
            ],
          },
        ],
      },
      {
        id: 'adm-ex4',
        tr: 'Dün bütün kırık pencereleri ustaya tamir ettirdik.',
        ru: 'Вчера мы поручили мастеру починить все разбитые окна (каузатив).',
        annotatedWords: [
          {
            surface: 'pencereleri',
            morphemes: [
              { text: 'pencere', type: 'root', gloss: 'окно' },
              { text: 'ler', type: 'affix', gloss: 'мн. ч.' },
              { text: 'i', type: 'affix', gloss: 'вин. п.' },
            ],
          },
          {
            surface: 'ustaya',
            morphemes: [
              { text: 'usta', type: 'root', gloss: 'мастер' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'a', type: 'affix', gloss: 'дат. п. (исполнитель)' },
            ],
          },
          {
            surface: 'ettirdik',
            morphemes: [
              { text: 'et', type: 'root', gloss: 'делать (tamir etmek)' },
              { text: 'tir', type: 'affix', gloss: 'каузатив' },
              { text: 'di', type: 'affix', gloss: 'прош. вр.' },
              { text: 'k', type: 'person', gloss: 'мы' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Связка -dır после времени/имени vs каузатив -dır на корне глагола',
          explanation:
            'Если -dır идёт ПОСЛЕ показателя времени (-mıştır, -acaktır) или имени (evdedir), это предикативно-модальный аффикс (факт или догадка). Если же -dır крепится ДО времени прямо к основе глагола (yaptırdı), он образует понудительный залог (каузатив).',
          exampleTr: 'Yazmıştır (Наверное, он написал) vs Yazdırmıştır (Наверное, он велел кому-то написать)',
          exampleRu: 'наверное, написал vs наверное, велел написать',
          relatedTopicId: 'causative-voice',
        },
        {
          title: 'Длительность с -dır («уже 3 часа») vs исходный падеж + beri («с такого-то времени»)',
          explanation:
            'С мерой длительности (iki saat, üç yıl, beş gün) используется -dır («уже два часа»). Когда названа начальная точка отсчёта (saat iki, dün, 2020 yılı), ставится -dan beri («с двух часов, со вчера»).',
          exampleTr: 'Üç saattir bekliyorum (Жду уже три часа) vs Saat ikiden beri bekliyorum (Жду с двух часов)',
          exampleRu: 'уже три часа vs с двух часов',
          relatedTopicId: 'basic-postpositions',
        },
      ],
    },
    miniCheck: [
      {
        id: 'adm-q1',
        prompt: 'Какую роль выполняет «-dır» в предложении «Misafirler şimdi yoldadır»?',
        type: 'choice',
        options: [
          'Каузатив (заставить пойти)',
          'Предположение / догадка («должно быть, они в пути»)',
          'Длительность действия («уже в пути»)',
          'Прошедшее время',
        ],
        correctAnswer: 'Предположение / догадка («должно быть, они в пути»)',
        explanation:
          'В разговорной речи на именном сказуемом с указанием на неизвестную ситуацию -dır выражает уверенное предположение («должно быть, сейчас…»).',
      },
      {
        id: 'adm-q2',
        prompt: 'Заполните пропуск со значением длительности («Уже две недели идёт дождь»): İki ___ yağmur yağıyor.',
        type: 'input',
        correctAnswer: 'haftadır',
        acceptedAnswers: ['haftadır', 'dır'],
        explanation:
          'К существительному hafta (отрезок времени) добавляется -dır → İki haftadır («уже две недели»).',
      },
      {
        id: 'adm-q3',
        prompt: 'В каком предложении «-dır/-tir» является показателем КАУЗАТИВА (действие чужими руками)?',
        type: 'choice',
        options: [
          'Dışarıda hava soğuktur.',
          'Uçak çoktan inmiştir.',
          'Saçını kestirdi.',
          'Üç gündür buradayım.',
        ],
        correctAnswer: 'Saçını kestirdi.',
        explanation:
          'В слове kestirdi аффикс -tir стоит прямо на корне глагола kes- («стричь») перед временем -di, образуя каузатив («подстригся у мастера»).',
      },
      {
        id: 'adm-q4',
        prompt: 'Добавьте аффикс официального утверждения/факта к слову «mümkün»: Bu sorun çözülebilir, yani çözüm ___.',
        type: 'input',
        correctAnswer: 'mümkündür',
        acceptedAnswers: ['mümkündür', 'dür'],
        explanation:
          'По гармонии гласных на 4 после ü аффикс имеет форму -dür → mümkündür.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'verb-government-reference',
    sectionId: 'word-formation-appendix',
    titleRu: 'Управление глаголов — справочник',
    titleTr: 'Fiil İstemi (Durum Ekleri)',
    level: 'A2',
    levels: ['A2', 'B1', 'B2'],
    affixes: ['-a', '-e', '-ı', '-i', '-dan', '-den', '-da', '-de', 'ile'],
    summary:
      'В турецком языке глаголы управляют строго определёнными падежами дополнений, которые часто расходятся с русским языком: «бояться кого/чего» требует исходного падежа (-dan korkmak), «помогать кому» и «садиться во что» — дательного (-a yardım etmek, -a binmek), а «ждать кого» — винительного (-ı beklemek). Учить новый глагол лучше сразу с его падежным вопросом (kimi, kime, kimden, kimde, kiminle).',
    formula: [
      { text: 'Дополнение', type: 'root', gloss: 'имя / местоимение' },
      { text: '+ -(y)I⁴ / -(y)A² / -DAn² / -DA² / ile', type: 'affix', gloss: 'падеж, требуемый глаголом' },
      { text: '+ Глагол', type: 'root', gloss: 'beklemek, binmek, korkmak…' },
    ],
    conjugationTable: {
      affirmative: {
        'Дательный (-(y)A²): yardım': [
          { text: 'arkadaş', type: 'root', gloss: 'друг' },
          { text: 'ım', type: 'person', gloss: 'мой' },
          { text: 'a ', type: 'affix', gloss: 'дат. п. (кому)' },
          { text: 'yardım ediyorum', type: 'root', gloss: 'помогаю' },
        ],
        'Дательный (-(y)A²): binmek': [
          { text: 'otobüs', type: 'root', gloss: 'автобус' },
          { text: 'e ', type: 'affix', gloss: 'дат. п. (на/в что)' },
          { text: 'biniyorum', type: 'root', gloss: 'сажусь (в транспорт)' },
        ],
        'Исходный (-DAn²): korkmak': [
          { text: 'köpek', type: 'root', gloss: 'собака' },
          { text: 'ten ', type: 'affix', gloss: 'исх. п. (чего/кого)' },
          { text: 'korkuyorum', type: 'root', gloss: 'боюсь' },
        ],
        'Винительный (-(y)I⁴): beklemek': [
          { text: 'sen', type: 'root', gloss: 'ты' },
          { text: 'i ', type: 'affix', gloss: 'вин. п. (кого)' },
          { text: 'bekliyorum', type: 'root', gloss: 'жду' },
        ],
        'Местный (-DA²): ısrar etmek': [
          { text: 'karar', type: 'root', gloss: 'решение' },
          { text: 'da ', type: 'affix', gloss: 'местн. п. (на чём)' },
          { text: 'ısrar ediyorum', type: 'root', gloss: 'настаиваю' },
        ],
        'Союзн. (ile): ilgilenmek': [
          { text: 'müzik', type: 'root', gloss: 'музыка' },
          { text: 'le ', type: 'affix', gloss: 'с чем (ile)' },
          { text: 'ilgileniyorum', type: 'root', gloss: 'интересуюсь / занимаюсь' },
        ],
      },
      negative: {
        'Дательный + отриц.': [
          { text: 'bana ', type: 'affix', gloss: 'мне (дат. п.)' },
          { text: 'inan', type: 'root', gloss: 'верить' },
          { text: 'mı', type: 'negation', gloss: 'не' },
          { text: 'yor', type: 'affix', gloss: 'не верит' },
        ],
        'Исходный + отриц.': [
          { text: 'soğuk', type: 'root', gloss: 'холод' },
          { text: 'tan ', type: 'affix', gloss: 'исх. п.' },
          { text: 'kork', type: 'root', gloss: 'бояться' },
          { text: 'mu', type: 'negation', gloss: 'не' },
          { text: 'yorum', type: 'person', gloss: 'я не боюсь' },
        ],
        'Винительный + отриц.': [
          { text: 'onu ', type: 'affix', gloss: 'его (вин. п.)' },
          { text: 'hatırla', type: 'root', gloss: 'помнить' },
          { text: 'mı', type: 'negation', gloss: 'не' },
          { text: 'yorum', type: 'person', gloss: 'я не помню' },
        ],
        'Местный + отриц.': [
          { text: 'bu ', type: 'affix', gloss: 'это' },
          { text: 'konu', type: 'root', gloss: 'тема' },
          { text: 'da ', type: 'affix', gloss: 'местн. п.' },
          { text: 'anlaşa', type: 'root', gloss: 'договориться' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dık', type: 'person', gloss: 'мы не договорились' },
        ],
        'ile + отриц.': [
          { text: 'spor', type: 'root', gloss: 'спорт' },
          { text: 'la ', type: 'affix', gloss: 'с (ile)' },
          { text: 'ilgilen', type: 'root', gloss: 'интересоваться' },
          { text: 'mi', type: 'negation', gloss: 'не' },
          { text: 'yor', type: 'affix', gloss: 'не интересуется' },
        ],
      },
      question: {
        'Дательный (kime / neye)': [
          { text: 'kim', type: 'question', gloss: 'кто' },
          { text: 'e ', type: 'affix', gloss: 'кому (дат. п.)' },
          { text: 'güveniyorsun?', type: 'root', gloss: 'ты доверяешь?' },
        ],
        'Исходный (kimden / neden)': [
          { text: 'ne', type: 'question', gloss: 'что' },
          { text: 'den ', type: 'affix', gloss: 'от чего (исх. п.)' },
          { text: 'korkuyorsun?', type: 'root', gloss: 'ты боишься?' },
        ],
        'Винительный (kimi / neyi)': [
          { text: 'kim', type: 'question', gloss: 'кто' },
          { text: 'i ', type: 'affix', gloss: 'кого (вин. п.)' },
          { text: 'bekliyorsun?', type: 'root', gloss: 'ты ждёшь?' },
        ],
        'Местный (kimde / nerede)': [
          { text: 'nerede ', type: 'question', gloss: 'где (местн. п.)' },
          { text: 'yaşıyorsunuz?', type: 'root', gloss: 'вы живёте?' },
        ],
        'Союзн. (kiminle / neyle)': [
          { text: 'ne', type: 'question', gloss: 'что' },
          { text: 'yle ', type: 'affix', gloss: 'чем (ile)' },
          { text: 'ilgileniyorsun?', type: 'root', gloss: 'ты увлекаешься?' },
        ],
      },
      negativeQuestion: {
        'Дательный (отр. вопр.)': [
          { text: 'bana ', type: 'affix', gloss: 'мне' },
          { text: 'güven', type: 'root', gloss: 'доверять' },
          { text: 'mi', type: 'negation', gloss: 'не' },
          { text: 'yor ', type: 'affix', gloss: 'наст. вр.' },
          { text: 'musun?', type: 'question', gloss: 'разве не доверяешь?' },
        ],
        'Исходный (отр. вопр.)': [
          { text: 'bu ', type: 'affix', gloss: 'это' },
          { text: 'durum', type: 'root', gloss: 'ситуация' },
          { text: 'dan ', type: 'affix', gloss: 'исх. п.' },
          { text: 'sıkıl', type: 'root', gloss: 'уставать' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dın mı?', type: 'question', gloss: 'разве не устал?' },
        ],
        'Винительный (отр. вопр.)': [
          { text: 'beni ', type: 'affix', gloss: 'меня (вин. п.)' },
          { text: 'duy', type: 'root', gloss: 'слышать' },
          { text: 'mu', type: 'negation', gloss: 'не' },
          { text: 'yor ', type: 'affix', gloss: 'наст. вр.' },
          { text: 'musun?', type: 'question', gloss: 'разве не слышишь?' },
        ],
        'ile (отр. вопр.)': [
          { text: 'biz', type: 'root', gloss: 'мы' },
          { text: 'im', type: 'person', gloss: 'наш' },
          { text: 'le ', type: 'affix', gloss: 'с нами' },
          { text: 'gel', type: 'root', gloss: 'идти' },
          { text: 'mi', type: 'negation', gloss: 'не' },
          { text: 'yor ', type: 'affix', gloss: 'наст. вр.' },
          { text: 'musun?', type: 'question', gloss: 'разве не идёшь с нами?' },
        ],
      },
    },
    examples: [
      {
        id: 'vgr-ex1',
        tr: 'Karanlıktan korktuğum için gece lambayı açık bırakıyorum.',
        ru: 'Так как я боюсь темноты, на ночь оставляю лампу включённой.',
        annotatedWords: [
          {
            surface: 'Karanlıktan',
            morphemes: [
              { text: 'Karanlık', type: 'root', gloss: 'темнота' },
              { text: 'tan', type: 'affix', gloss: 'исх. п. (korkmak -dan)' },
            ],
          },
          {
            surface: 'korktuğum',
            morphemes: [
              { text: 'kork', type: 'root', gloss: 'бояться' },
              { text: 'tuğ', type: 'affix', gloss: 'прич. -dık (d→t, k→ğ)' },
              { text: 'um', type: 'person', gloss: 'мой' },
            ],
          },
          {
            surface: 'lambayı',
            morphemes: [
              { text: 'lamba', type: 'root', gloss: 'лампа' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'ı', type: 'affix', gloss: 'вин. п.' },
            ],
          },
        ],
      },
      {
        id: 'vgr-ex2',
        tr: 'Anneme mutfakta yemek yaparken yardım etmeyi çok seviyorum.',
        ru: 'Я очень люблю помогать маме, когда она готовит на кухне.',
        annotatedWords: [
          {
            surface: 'Anneme',
            morphemes: [
              { text: 'Anne', type: 'root', gloss: 'мама' },
              { text: 'm', type: 'person', gloss: 'моя' },
              { text: 'e', type: 'affix', gloss: 'дат. п. (yardım etmek -a)' },
            ],
          },
          {
            surface: 'mutfakta',
            morphemes: [
              { text: 'mutfak', type: 'root', gloss: 'кухня' },
              { text: 'ta', type: 'affix', gloss: 'местн. п. (где?)' },
            ],
          },
          {
            surface: 'seviyorum',
            morphemes: [
              { text: 'sev', type: 'root', gloss: 'любить' },
              { text: 'iyor', type: 'affix', gloss: 'наст. длит. вр.' },
              { text: 'um', type: 'person', gloss: 'я' },
            ],
          },
        ],
      },
      {
        id: 'vgr-ex3',
        tr: 'Havaalanında yarım saattir arkadaşımı bekliyorum.',
        ru: 'Я уже полчаса жду своего друга в аэропорту.',
        annotatedWords: [
          {
            surface: 'Havaalanında',
            morphemes: [
              { text: 'Havaalanı', type: 'root', gloss: 'аэропорт' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'da', type: 'affix', gloss: 'местн. п.' },
            ],
          },
          {
            surface: 'saattir',
            morphemes: [
              { text: 'saat', type: 'root', gloss: 'час (мягкая основа)' },
              { text: 'tir', type: 'affix', gloss: 'длительность («уже …»)' },
            ],
          },
          {
            surface: 'arkadaşımı',
            morphemes: [
              { text: 'arkadaş', type: 'root', gloss: 'друг' },
              { text: 'ım', type: 'person', gloss: 'мой' },
              { text: 'ı', type: 'affix', gloss: 'вин. п. (beklemek -ı)' },
            ],
          },
        ],
      },
      {
        id: 'vgr-ex4',
        tr: 'Kardeşim çocukluğundan beri resimle ve müzikle ilgileniyor.',
        ru: 'Мой брат с детства увлекается рисованием и музыкой.',
        annotatedWords: [
          {
            surface: 'çocukluğundan',
            morphemes: [
              { text: 'çocuk', type: 'root', gloss: 'ребёнок' },
              { text: 'luğ', type: 'affix', gloss: 'детство (k→ğ)' },
              { text: 'u', type: 'person', gloss: 'его' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'dan', type: 'affix', gloss: 'исх. п. (перед beri)' },
            ],
          },
          {
            surface: 'resimle',
            morphemes: [
              { text: 'resim', type: 'root', gloss: 'рисование / картина' },
              { text: 'le', type: 'affix', gloss: 'послелог ile (ilgilenmek ile)' },
            ],
          },
          {
            surface: 'ilgileniyor',
            morphemes: [
              { text: 'ilgilen', type: 'root', gloss: 'интересоваться / заниматься' },
              { text: 'iyor', type: 'affix', gloss: 'наст. длит. вр.' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Ловушки управления: beklemek (-ı), binmek (-a), hoşlanmak (-dan)',
          explanation:
            'Русский падеж часто вводит в заблуждение: «ждать друга» (в тур. винительный — arkadaşımı bekliyorum), «садиться в автобус» (в тур. дательный — otobüse biniyorum), «нравится музыка» (в тур. исходный — müzikten hoşlanıyorum).',
          exampleTr: 'Seni bekliyorum (Жду тебя — вин. п.) vs Otobüse biniyorum (Сажусь в автобус — дат. п.)',
          exampleRu: 'жду тебя vs сажусь в автобус',
          relatedTopicId: 'six-cases',
        },
        {
          title: 'Смена падежа меняет значение глагола (bakmak, geçmek)',
          explanation:
            'Некоторые глаголы меняют смысл в зависимости от падежа: -a bakmak — «смотреть на / присматривать за», а -ı geçmek — «сдать экзамен / обогнать», тогда как -dan geçmek — «проходить мимо / отказываться от».',
          exampleTr: 'Çocuğa bakıyor (Присматривает за ребёнком) vs Sınavı geçti (Сдал экзамен) vs Evin önünden geçti (Прошёл мимо дома)',
          exampleRu: 'присматривает за ребёнком vs сдал экзамен vs прошёл мимо дома',
          relatedTopicId: 'basic-postpositions',
        },
      ],
    },
    miniCheck: [
      {
        id: 'vgr-q1',
        prompt: 'Какой падеж нужен для слова «yükseklik» (высота) с глаголом «korkmak» («Я боюсь высоты»)?',
        type: 'choice',
        options: [
          'Yüksekliği korkuyorum.',
          'Yüksekliğe korkuyorum.',
          'Yükseklikten korkuyorum.',
          'Yükseklikte korkuyorum.',
        ],
        correctAnswer: 'Yükseklikten korkuyorum.',
        explanation:
          'Глагол korkmak («бояться») всегда управляет исходным падежом (-dan/-tan) → Yükseklikten korkuyorum.',
      },
      {
        id: 'vgr-q2',
        prompt: 'Заполните пропуск падежной формой от «arkadaşım»: «Я доверяю своему другу» — ___ güveniyorum.',
        type: 'input',
        correctAnswer: 'arkadaşıma',
        acceptedAnswers: ['arkadaşıma', 'Arkadaşıma'],
        explanation:
          'Глагол güvenmek («доверять кому») требует дательного падежа (-a/-e) → arkadaşım + a → arkadaşıma.',
      },
      {
        id: 'vgr-q3',
        prompt: 'Выберите верный перевод: «Я сажусь в поезд» (tren, binmek):',
        type: 'choice',
        options: [
          'Treni biniyorum.',
          'Trene biniyorum.',
          'Trende biniyorum.',
          'Trenden biniyorum.',
        ],
        correctAnswer: 'Trene biniyorum.',
        explanation:
          'Глагол binmek («садиться на/в транспорт») управляет дательным падежом (-a/-e) → Trene biniyorum.',
      },
      {
        id: 'vgr-q4',
        prompt: 'Вставьте правильную форму местоимения «sen» с глаголом «özlemek» (скучать по кому): «Я очень по тебе скучаю» — ___ çok özlüyorum.',
        type: 'input',
        correctAnswer: 'Seni',
        acceptedAnswers: ['Seni', 'seni'],
        explanation:
          'Глагол özlemek («скучать по кому/чему») требует винительного падежа → Seni çok özlüyorum.',
      },
    ],
    isDraft: false,
  },
];
