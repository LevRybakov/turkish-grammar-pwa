import type { GrammarTopic } from '../../types';

export const TOPICS_A1: GrammarTopic[] = [
  {
    id: 'vowel-harmony',
    sectionId: 'phonetics',
    titleRu: 'Гармония гласных на 2 и на 4',
    titleTr: 'Ünlü Uyumu',
    level: 'A1',
    affixes: ['-a', '-e', '-ı', '-i', '-u', '-ü', '-lar', '-ler', '-da', '-de', '-lı', '-li', '-lu', '-lü'],
    summary:
      'В турецком языке гласная каждого нового аффикса подстраивается под последнюю гласную основы. Гармония на 2 (A²) делит гласные только на твёрдые и мягкие (a/e), а гармония на 4 (I⁴) учитывает ещё и огубленность (ı/i/u/ü).',
    formula: [
      { text: 'Последняя гласная основы', type: 'root', gloss: 'a/ı/o/u или e/i/ö/ü' },
      { text: '+ A² (a / e)', type: 'affix', gloss: '-lar/-ler, -da/-de, -a/-e' },
      { text: '/ + I⁴ (ı / i / u / ü)', type: 'affix', gloss: '-lı/-li/-lu/-lü, -(y)ı, -ım' },
    ],
    conjugationTable: {
      affirmative: {
        'Твёрдая неогуб. (a, ı)': [
          { text: 'kitap', type: 'root', gloss: 'книга (посл. a)' },
          { text: 'lar', type: 'affix', gloss: 'A² → a' },
          { text: 'ım', type: 'person', gloss: 'I⁴ → ı (мои книги)' },
        ],
        'Мягкая неогуб. (e, i)': [
          { text: 'ev', type: 'root', gloss: 'дом (посл. e)' },
          { text: 'ler', type: 'affix', gloss: 'A² → e' },
          { text: 'im', type: 'person', gloss: 'I⁴ → i (мои дома)' },
        ],
        'Твёрдая огубл. (o, u)': [
          { text: 'yol', type: 'root', gloss: 'дорога (посл. o)' },
          { text: 'da', type: 'affix', gloss: 'A² → a (в дороге)' },
          { text: ' / yol', type: 'root', gloss: 'основа' },
          { text: 'umuz', type: 'person', gloss: 'I⁴ → u (наш путь)' },
        ],
        'Мягкая огубл. (ö, ü)': [
          { text: 'göz', type: 'root', gloss: 'глаз (посл. ö)' },
          { text: 'ler', type: 'affix', gloss: 'A² → e' },
          { text: 'im', type: 'person', gloss: 'I⁴ → i (после -ler!)' },
        ],
        'Огубл. сразу после ö/ü': [
          { text: 'göz', type: 'root', gloss: 'глаз (посл. ö)' },
          { text: 'lük', type: 'affix', gloss: 'I⁴ → ü (очки)' },
        ],
        'Исключение (заимств.)': [
          { text: 'saat', type: 'root', gloss: 'час/часы (мягк. t)' },
          { text: 'ler', type: 'affix', gloss: 'исключение → e!' },
        ],
      },
      negative: {
        'Твёрдая неогуб. (a, ı)': [
          { text: 'şeker', type: 'root', gloss: 'сахар (мягк.)' },
          { text: 'siz', type: 'negation', gloss: 'I⁴ → i (без сахара)' },
        ],
        'Мягкая неогуб. (e, i)': [
          { text: 'tuz', type: 'root', gloss: 'соль (тв. огубл.)' },
          { text: 'suz', type: 'negation', gloss: 'I⁴ → u (без соли)' },
        ],
        'Твёрдая огубл. (o, u)': [
          { text: 'süt', type: 'root', gloss: 'молоко (мягк. огубл.)' },
          { text: 'süz', type: 'negation', gloss: 'I⁴ → ü (без молока)' },
        ],
        'Мягкая огубл. (ö, ü)': [
          { text: 'para', type: 'root', gloss: 'деньги (тв. неогубл.)' },
          { text: 'sız', type: 'negation', gloss: 'I⁴ → ı (без денег)' },
        ],
        'Огубл. сразу после ö/ü': [
          { text: 'anla', type: 'root', gloss: 'понимать' },
          { text: 'ma', type: 'negation', gloss: 'A² → ma' },
          { text: 'dı', type: 'affix', gloss: 'I⁴ → ı' },
        ],
        'Исключение (заимств.)': [
          { text: 'hayal', type: 'root', gloss: 'мечта (мягк. l)' },
          { text: 'siz', type: 'negation', gloss: 'исключение → i!' },
        ],
      },
      question: {
        'Твёрдая неогуб. (a, ı)': [
          { text: 'hazır', type: 'root', gloss: 'готов' },
          { text: 'mı?', type: 'question', gloss: 'I⁴ → mı' },
        ],
        'Мягкая неогуб. (e, i)': [
          { text: 'güzel', type: 'root', gloss: 'красивый' },
          { text: 'mi?', type: 'question', gloss: 'I⁴ → mi' },
        ],
        'Твёрдая огубл. (o, u)': [
          { text: 'doğru', type: 'root', gloss: 'правильно' },
          { text: 'mu?', type: 'question', gloss: 'I⁴ → mu' },
        ],
        'Мягкая огубл. (ö, ü)': [
          { text: 'üzgün', type: 'root', gloss: 'расстроен' },
          { text: 'mü?', type: 'question', gloss: 'I⁴ → mü' },
        ],
        'Огубл. сразу после ö/ü': [
          { text: 'gün', type: 'root', gloss: 'день' },
          { text: 'lük', type: 'affix', gloss: 'I⁴ → ü' },
          { text: 'mü?', type: 'question', gloss: 'I⁴ → mü' },
        ],
        'Исключение (заимств.)': [
          { text: 'alkol', type: 'root', gloss: 'алкоголь (мягк. l)' },
          { text: 'mü?', type: 'question', gloss: 'исключение → mü' },
        ],
      },
    },
    examples: [
      {
        id: 'vh-ex1',
        tr: 'Evlerimiz çok büyük ve güneşli.',
        ru: 'Наши дома очень большие и солнечные.',
        annotatedWords: [
          {
            surface: 'Evlerimiz',
            morphemes: [
              { text: 'Ev', type: 'root', gloss: 'дом (мягкая e)' },
              { text: 'ler', type: 'affix', gloss: 'мн. ч. (A² → e)' },
              { text: 'imiz', type: 'person', gloss: 'наш (I⁴ → i)' },
            ],
          },
          {
            surface: 'güneşli.',
            morphemes: [
              { text: 'güneş', type: 'root', gloss: 'солнце (посл. e)' },
              { text: 'li', type: 'affix', gloss: 'с/обладающий (I⁴ → i)' },
            ],
          },
        ],
      },
      {
        id: 'vh-ex2',
        tr: 'Sabahları sütlü kahve içiyorum.',
        ru: 'По утрам я пью кофе с молоком.',
        annotatedWords: [
          {
            surface: 'Sabahları',
            morphemes: [
              { text: 'Sabah', type: 'root', gloss: 'утро (посл. a)' },
              { text: 'lar', type: 'affix', gloss: 'мн. ч. (A² → a)' },
              { text: 'ı', type: 'affix', gloss: 'по утрам (I⁴ → ı)' },
            ],
          },
          {
            surface: 'sütlü',
            morphemes: [
              { text: 'süt', type: 'root', gloss: 'молоко (мягк. огубл. ü)' },
              { text: 'lü', type: 'affix', gloss: 'с молоком (I⁴ → ü)' },
            ],
          },
        ],
      },
      {
        id: 'vh-ex3',
        tr: 'Saatlerde küçük bir sorun var mı?',
        ru: 'В часах есть небольшая проблема?',
        annotatedWords: [
          {
            surface: 'Saatlerde',
            morphemes: [
              { text: 'Saat', type: 'root', gloss: 'часы (искл.: мягк. l/t)' },
              { text: 'ler', type: 'affix', gloss: 'мн. ч. → e' },
              { text: 'de', type: 'affix', gloss: 'местн. п. → e' },
            ],
          },
          {
            surface: 'mı?',
            morphemes: [{ text: 'mı', type: 'question', gloss: 'после var (посл. a → ı)' }],
          },
        ],
      },
      {
        id: 'vh-ex4',
        tr: 'Çocuklar okulda yeni sözlükler okuyor.',
        ru: 'Дети в школе читают новые словари.',
        annotatedWords: [
          {
            surface: 'Çocuklar',
            morphemes: [
              { text: 'Çocuk', type: 'root', gloss: 'ребёнок (посл. u)' },
              { text: 'lar', type: 'affix', gloss: 'мн. ч. (A² → a)' },
            ],
          },
          {
            surface: 'sözlükler',
            morphemes: [
              { text: 'söz', type: 'root', gloss: 'слово (ö)' },
              { text: 'lük', type: 'affix', gloss: 'I⁴ → ü (словарь)' },
              { text: 'ler', type: 'affix', gloss: 'A² → e (мн. ч.)' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Цепочка аффиксов: смотрим на ПРЕДЫДУЩИЙ слог, а не на корень',
          explanation:
            'Каждый следующий аффикс подстраивается под гласную непосредственно перед ним. В слове göz-ler-im огубленное ö задало e в -ler, а затем -ler задало неогубленное i в -im (не *gözlerüm!).',
          exampleTr: 'gözlük (ö → ü) vs gözlerim (ö → e → i)',
          exampleRu: 'очки vs мои глаза',
          relatedTopicId: 'plural-lar-ler',
        },
        {
          title: 'Негармоничные аффиксы (-yor, -ken, -ki)',
          explanation:
            'Некоторые аффиксы никогда не меняют свою гласную по гармонии: -yor всегда с o, -ken всегда с e (кроме i- исключений), -ki почти всегда с i (кроме dünkü, bugünkü). Следующий за ними аффикс ориентируется уже на них.',
          exampleTr: 'geliyorum (e → i, но после -yor всегда -um!)',
          exampleRu: 'я иду',
          relatedTopicId: 'simdiki-zaman',
        },
      ],
    },
    miniCheck: [
      {
        id: 'vh-q1',
        prompt: 'Какой вариант множественного числа (-lar / -ler) правильный для слова «köy» (деревня)?',
        type: 'choice',
        options: ['köylar', 'köyler', 'köylür', 'köylor'],
        correctAnswer: 'köyler',
        explanation: 'Множественное число подчиняется гармонии на 2 (a/e). Гласная ö — мягкая, поэтому выбираем -ler.',
      },
      {
        id: 'vh-q2',
        prompt: 'Образуйте вопросительную форму от слова «doğru» (правильно): doğru ___?',
        type: 'input',
        correctAnswer: 'mu',
        acceptedAnswers: ['mu', 'mu?'],
        explanation: 'Вопросительная частица mı/mi/mu/mü следует гармонии на 4. После твёрдой огубленной u пишется mu.',
      },
      {
        id: 'vh-q3',
        prompt: 'Выберите правильную форму «с молоком» от слова «süt» (аффикс -lı/-li/-lu/-lü):',
        type: 'choice',
        options: ['sütlı', 'sütli', 'sütlu', 'sütlü'],
        correctAnswer: 'sütlü',
        explanation: 'Гласная ü — мягкая и огубленная. По гармонии на 4 после ü следует ü: sütlü.',
      },
      {
        id: 'vh-q4',
        prompt: 'Почему слово «saat» во множественном числе даёт «saatler», а не «saatlar»?',
        type: 'choice',
        options: [
          'Потому что все слова на -t требуют -ler',
          'Это арабское заимствование с мягким конечным согласным',
          'В турецком нет аффикса -lar после долгого a',
          'Это опечатка в словарях',
        ],
        correctAnswer: 'Это арабское заимствование с мягким конечным согласным',
        explanation: 'В группе заимствований (saat, kalp, hayal, alkol, rol, gol) конечный согласный произносится мягко, поэтому аффиксы идут по мягкому ряду.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'consonant-rules',
    sectionId: 'phonetics',
    titleRu: 'Озвончение и оглушение согласных / Fıstıkçı Şahap',
    titleTr: 'Ünsüz Benzeşmesi ve Yumuşaması',
    level: 'A1',
    affixes: ['-ta', '-te', '-tan', '-ten', '-tı', '-ti', '-tu', '-tü', 'p→b', 'ç→c', 't→d', 'k→ğ'],
    summary:
      'В турецком действуют два противоположных правила для согласных на стыке слова и аффикса: после 8 глухих согласных (Fıstıkçı Şahap) начало аффикса оглушается (d→t, c→ç, g→k), а глухие согласные основы p, ç, t, k озвончаются в b, c, d, ğ перед гласной.',
    formula: [
      { text: '…f, s, t, k, ç, ş, h, p', type: 'root', gloss: 'FıSTıKÇı ŞaHaP' },
      { text: '+ t / ç / k…', type: 'affix', gloss: 'оглушение начала аффикса' },
      { text: 'p, ç, t, k + гласная', type: 'buffer', gloss: '→ b, c, d, ğ (озвончение основы)' },
    ],
    conjugationTable: {
      affirmative: {
        'Оглушение -da → -ta': [
          { text: 'mutfak', type: 'root', gloss: 'кухня (исход -k)' },
          { text: 'ta', type: 'affix', gloss: '-da → -ta (на кухне)' },
        ],
        'Оглушение -dan → -tan': [
          { text: 'iş', type: 'root', gloss: 'работа (исход -ş)' },
          { text: 'ten', type: 'affix', gloss: '-den → -ten (с работы)' },
        ],
        'Оглушение -dı → -tı': [
          { text: 'yap', type: 'root', gloss: 'делать (исход -p)' },
          { text: 'tı', type: 'affix', gloss: '-dı → -tı (сделал)' },
        ],
        'Озвончение p → b': [
          { text: 'kitab', type: 'root', gloss: 'kitap + гласная' },
          { text: 'ı', type: 'affix', gloss: 'винит. падеж (книгу)' },
        ],
        'Озвончение ç → c': [
          { text: 'ağac', type: 'root', gloss: 'ağaç + гласная' },
          { text: 'a', type: 'affix', gloss: 'дательн. п. (к дереву)' },
        ],
        'Озвончение k → ğ': [
          { text: 'çocuğ', type: 'root', gloss: 'çocuk + гласная' },
          { text: 'um', type: 'person', gloss: 'мой ребёнок' },
        ],
      },
      negative: {
        'Оглушение -da → -ta': [
          { text: 'sokak', type: 'root', gloss: 'улица (-k)' },
          { text: 'ta', type: 'affix', gloss: 'на улице' },
        ],
        'Оглушение -dan → -tan': [
          { text: 'otobüs', type: 'root', gloss: 'автобус (-s)' },
          { text: 'ten', type: 'affix', gloss: 'из автобуса' },
        ],
        'Оглушение -dı → -tı': [
          { text: 'git', type: 'root', gloss: 'идти (-t)' },
          { text: 'me', type: 'negation', gloss: 'отриц. (теперь -m!)' },
          { text: 'di', type: 'affix', gloss: 'не оглушается: gitmedi' },
        ],
        'Озвончение p → b': [
          { text: 'top', type: 'root', gloss: 'мяч (односложное искл.)' },
          { text: 'u', type: 'affix', gloss: 'НЕ озвончается: topu' },
        ],
        'Озвончение ç → c': [
          { text: 'saç', type: 'root', gloss: 'волос (односложное искл.)' },
          { text: 'ım', type: 'person', gloss: 'НЕ озвончается: saçım' },
        ],
        'Озвончение k → ğ': [
          { text: 'park', type: 'root', gloss: 'парк (заимств. искл.)' },
          { text: 'a', type: 'affix', gloss: 'НЕ озвончается: parka' },
        ],
      },
      question: {
        'Оглушение -da → -ta': [
          { text: 'mutfak', type: 'root', gloss: 'кухня' },
          { text: 'ta', type: 'affix', gloss: 'на кухне' },
          { text: 'mı?', type: 'question', gloss: 'вопрос' },
        ],
        'Оглушение -dan → -tan': [
          { text: 'sınıf', type: 'root', gloss: 'класс (-f)' },
          { text: 'tan', type: 'affix', gloss: 'из класса' },
          { text: 'mı?', type: 'question', gloss: 'вопрос' },
        ],
        'Оглушение -dı → -tı': [
          { text: 'bak', type: 'root', gloss: 'смотреть (-k)' },
          { text: 'tı', type: 'affix', gloss: 'посмотрел (-dı → -tı)' },
          { text: 'mı?', type: 'question', gloss: 'вопрос' },
        ],
        'Озвончение p → b': [
          { text: 'mektub', type: 'root', gloss: 'mektup → b' },
          { text: 'u', type: 'affix', gloss: 'письмо (вин.)' },
        ],
        'Озвончение ç → c': [
          { text: 'ilac', type: 'root', gloss: 'ilaç → c' },
          { text: 'ı', type: 'affix', gloss: 'лекарство (вин.)' },
        ],
        'Озвончение k → ğ': [
          { text: 'ekmeğ', type: 'root', gloss: 'ekmek → ğ' },
          { text: 'i', type: 'affix', gloss: 'хлеб (вин.)' },
        ],
      },
    },
    examples: [
      {
        id: 'cr-ex1',
        tr: 'Mutfakta sıcak ekmeği masaya koydum.',
        ru: 'На кухне я положил тёплый хлеб на стол.',
        annotatedWords: [
          {
            surface: 'Mutfakta',
            morphemes: [
              { text: 'Mutfak', type: 'root', gloss: 'кухня (глухой -k)' },
              { text: 'ta', type: 'affix', gloss: 'местн. п. (-da → -ta)' },
            ],
          },
          {
            surface: 'ekmeği',
            morphemes: [
              { text: 'ekmeğ', type: 'root', gloss: 'ekmek (k → ğ перед гласной)' },
              { text: 'i', type: 'affix', gloss: 'винит. падеж' },
            ],
          },
        ],
      },
      {
        id: 'cr-ex2',
        tr: 'Çocuğum parkta topuyla oynuyor.',
        ru: 'Мой ребёнок играет в парке со своим мячом.',
        annotatedWords: [
          {
            surface: 'Çocuğum',
            morphemes: [
              { text: 'Çocuğ', type: 'root', gloss: 'çocuk (k → ğ)' },
              { text: 'um', type: 'person', gloss: 'мой' },
            ],
          },
          {
            surface: 'parkta',
            morphemes: [
              { text: 'park', type: 'root', gloss: 'парк (исход -k)' },
              { text: 'ta', type: 'affix', gloss: '-da → -ta' },
            ],
          },
          {
            surface: 'topuyla',
            morphemes: [
              { text: 'top', type: 'root', gloss: 'мяч (искл.: p сохраняется)' },
              { text: 'u', type: 'person', gloss: 'его мяч' },
              { text: 'yla', type: 'affix', gloss: 'с (ile)' },
            ],
          },
        ],
      },
      {
        id: 'cr-ex3',
        tr: 'Sabah sınıftan çıkıp otobüse bindim.',
        ru: 'Утром я вышел из класса и сел в автобус.',
        annotatedWords: [
          {
            surface: 'sınıftan',
            morphemes: [
              { text: 'sınıf', type: 'root', gloss: 'класс (исход -f из Fıstıkçı Şahap)' },
              { text: 'tan', type: 'affix', gloss: '-dan → -tan' },
            ],
          },
          {
            surface: 'bindim.',
            morphemes: [
              { text: 'bin', type: 'root', gloss: 'садиться (звонкий -n)' },
              { text: 'di', type: 'affix', gloss: 'прош. вр. (-di сохраняет d)' },
              { text: 'm', type: 'person', gloss: 'я' },
            ],
          },
        ],
      },
      {
        id: 'cr-ex4',
        tr: 'Doktor hastaya ilacı zamanında verdi.',
        ru: 'Врач вовремя дал больному лекарство.',
        annotatedWords: [
          {
            surface: 'ilacı',
            morphemes: [
              { text: 'ilac', type: 'root', gloss: 'ilaç (ç → c перед гласной)' },
              { text: 'ı', type: 'affix', gloss: 'винит. падеж' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Оглушение касается ТОЛЬКО аффиксов на d, c, g',
          explanation:
            'Не все аффиксы оглушаются! Например, аффикс -lar/-ler, -sa/-se, -malı/-meli никогда не меняются (kitaplar, gitse, bakmalı). Меняются только те, что начинаются на звонкие d, c, g (-da → -ta, -dan → -tan, -dı → -tı, -cı → -çı).',
          exampleTr: 'mutfakta (d → t), но kitaplar (l не меняется)',
          exampleRu: 'на кухне, книги',
          relatedTopicId: 'six-cases',
        },
        {
          title: 'Односложные слова и имена собственные не озвончаются на письме',
          explanation:
            'Многие односложные слова (at, süt, et, saç, top, ip, kök, ok) и заимствования (park, bank, bilet, market) сохраняют p, ç, t, k перед гласной. А собственные имена (Ahmet, Burak) на письме не меняются (Ahmet’e), хотя читаются мягче.',
          exampleTr: 'sütü (не *südü), bileti (не *biledi), Ahmet’e',
          exampleRu: 'молоко (вин.), билет (вин.), Ахмету',
          relatedTopicId: 'gecmis-zaman-di-mis',
        },
      ],
    },
    miniCheck: [
      {
        id: 'cr-q1',
        prompt: 'Как правильно сказать «на работе» (iş + -da/-de)?',
        type: 'choice',
        options: ['işde', 'işte', 'işda', 'işta'],
        correctAnswer: 'işte',
        explanation: 'Согласная ş входит в Fıstıkçı Şahap (глухая), поэтому d меняется на t, а по гармонии после i/e идёт e → işte.',
      },
      {
        id: 'cr-q2',
        prompt: 'Поставьте слово «kitap» (книга) в винительный падеж (-ı/-i):',
        type: 'input',
        correctAnswer: 'kitabı',
        acceptedAnswers: ['kitabı'],
        explanation: 'Конечная p перед гласной аффикса -ı озвончается в b → kitabı.',
      },
      {
        id: 'cr-q3',
        prompt: 'Выберите верную форму прошедшего времени от глагола «unutmak» (основа unut-):',
        type: 'choice',
        options: ['unutdu', 'unuttu', 'unudu', 'unuttı'],
        correctAnswer: 'unuttu',
        explanation: 'Основа оканчивается на глухую t (из Fıstıkçı Şahap), поэтому -du оглушается в -tu → unuttu.',
      },
      {
        id: 'cr-q4',
        prompt: 'Поставьте слово «köpek» (собака) в дательный падеж (-a/-e):',
        type: 'input',
        correctAnswer: 'köpeğe',
        acceptedAnswers: ['köpeğe'],
        explanation: 'Конечная k перед гласной -e озвончается в ğ → köpeğe.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'six-cases',
    sectionId: 'nouns',
    titleRu: '6 падежей (İsim Hâlleri)',
    titleTr: 'İsmin Hâlleri',
    level: 'A1',
    levels: ['A1', 'A2'],
    affixes: [
      '-(y)ı',
      '-(y)i',
      '-(y)u',
      '-(y)ü',
      '-(y)a',
      '-(y)e',
      '-da',
      '-de',
      '-ta',
      '-te',
      '-dan',
      '-den',
      '-tan',
      '-ten',
      '-(n)ın',
      '-(n)in',
      '-(n)un',
      '-(n)ün',
    ],
    summary:
      'В турецком языке 6 падежей. Все они присоединяются после аффиксов множественного числа и принадлежности, подчиняясь гармонии гласных, закону Fıstıkçı Şahap и правилам буферных согласных.',
    formula: [
      { text: 'Основа', type: 'root', gloss: 'имя / местоимение' },
      { text: '+ (-lar)', type: 'affix', gloss: 'мн. ч. (опц.)' },
      { text: '+ (принадл.)', type: 'person', gloss: 'опц.' },
      { text: '+ (y / n)', type: 'buffer', gloss: 'буфер после гласной' },
      { text: '+ Падеж', type: 'affix', gloss: '- / -ı / -a / -da / -dan / -ın' },
    ],
    conjugationTable: {
      affirmative: {
        'Основной (Yalın)': [
          { text: 'ev', type: 'root', gloss: 'дом (кто? что?)' },
        ],
        'Винительный (Belirtme)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'i', type: 'affix', gloss: '-(y)I⁴ (кого? что? конкр.)' },
        ],
        'Дательный (Yönelme)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'e', type: 'affix', gloss: '-(y)A² (куда? кому?)' },
        ],
        'Местный (Bulunma)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'de', type: 'affix', gloss: '-DA² (где? у кого?)' },
        ],
        'Исходный (Ayrılma)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'den', type: 'affix', gloss: '-DAn² (откуда? от кого?)' },
        ],
        'Родительный (İlgi)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'in', type: 'affix', gloss: '-(n)In⁴ (чей? кого?)' },
        ],
      },
      negative: {
        'Основной (Yalın)': [
          { text: 'araba', type: 'root', gloss: 'машина (основа на гласную)' },
        ],
        'Винительный (Belirtme)': [
          { text: 'araba', type: 'root', gloss: 'машина' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'ı', type: 'affix', gloss: 'конкретную машину' },
        ],
        'Дательный (Yönelme)': [
          { text: 'araba', type: 'root', gloss: 'машина' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'a', type: 'affix', gloss: 'к/в машину' },
        ],
        'Местный (Bulunma)': [
          { text: 'araba', type: 'root', gloss: 'машина' },
          { text: 'da', type: 'affix', gloss: 'в машине' },
        ],
        'Исходный (Ayrılma)': [
          { text: 'araba', type: 'root', gloss: 'машина' },
          { text: 'dan', type: 'affix', gloss: 'из машины' },
        ],
        'Родительный (İlgi)': [
          { text: 'araba', type: 'root', gloss: 'машина' },
          { text: 'n', type: 'buffer', gloss: 'буфер n!' },
          { text: 'ın', type: 'affix', gloss: 'машины (чей?)' },
        ],
      },
      question: {
        'Основной (Yalın)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'i', type: 'person', gloss: 'его дом (принадлежность!)' },
        ],
        'Винительный (Belirtme)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'i', type: 'person', gloss: 'его дом' },
          { text: 'n', type: 'buffer', gloss: 'буфер n после принадл. 3 л.' },
          { text: 'i', type: 'affix', gloss: 'винит. падеж' },
        ],
        'Дательный (Yönelme)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'i', type: 'person', gloss: 'его дом' },
          { text: 'n', type: 'buffer', gloss: 'буфер n' },
          { text: 'e', type: 'affix', gloss: 'в его дом' },
        ],
        'Местный (Bulunma)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'i', type: 'person', gloss: 'его дом' },
          { text: 'n', type: 'buffer', gloss: 'буфер n!' },
          { text: 'de', type: 'affix', gloss: 'в его доме' },
        ],
        'Исходный (Ayrılma)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'i', type: 'person', gloss: 'его дом' },
          { text: 'n', type: 'buffer', gloss: 'буфер n!' },
          { text: 'den', type: 'affix', gloss: 'из его дома' },
        ],
        'Родительный (İlgi)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'i', type: 'person', gloss: 'его дом' },
          { text: 'n', type: 'buffer', gloss: 'буфер n' },
          { text: 'in', type: 'affix', gloss: 'его дома' },
        ],
      },
    },
    examples: [
      {
        id: 'sc-ex1',
        tr: 'Ben bu kitabı kütüphaneden aldım.',
        ru: 'Я взял эту книгу из библиотеки.',
        annotatedWords: [
          {
            surface: 'kitabı',
            morphemes: [
              { text: 'kitab', type: 'root', gloss: 'kitap (p → b)' },
              { text: 'ı', type: 'affix', gloss: 'винительный падеж (определённый объект)' },
            ],
          },
          {
            surface: 'kütüphaneden',
            morphemes: [
              { text: 'kütüphane', type: 'root', gloss: 'библиотека' },
              { text: 'den', type: 'affix', gloss: 'исходный падеж (откуда?)' },
            ],
          },
        ],
      },
      {
        id: 'sc-ex2',
        tr: 'Yarın sabah ofise gideceğim.',
        ru: 'Завтра утром я пойду в офис.',
        annotatedWords: [
          {
            surface: 'ofise',
            morphemes: [
              { text: 'ofis', type: 'root', gloss: 'офис' },
              { text: 'e', type: 'affix', gloss: 'дательный падеж (куда?)' },
            ],
          },
        ],
      },
      {
        id: 'sc-ex3',
        tr: 'Öğrenciler sınıfta öğretmenin sorusunu cevaplıyor.',
        ru: 'Ученики в классе отвечают на вопрос учителя.',
        annotatedWords: [
          {
            surface: 'sınıfta',
            morphemes: [
              { text: 'sınıf', type: 'root', gloss: 'класс' },
              { text: 'ta', type: 'affix', gloss: 'местный п. (Fıstıkçı Şahap d→t)' },
            ],
          },
          {
            surface: 'öğretmenin',
            morphemes: [
              { text: 'öğretmen', type: 'root', gloss: 'учитель' },
              { text: 'in', type: 'affix', gloss: 'родительный п. (чей?)' },
            ],
          },
          {
            surface: 'sorusunu',
            morphemes: [
              { text: 'soru', type: 'root', gloss: 'вопрос' },
              { text: 's', type: 'buffer', gloss: 'буфер s' },
              { text: 'u', type: 'person', gloss: 'его вопрос (принадл.)' },
              { text: 'n', type: 'buffer', gloss: 'буфер n после принадл. 3 л.' },
              { text: 'u', type: 'affix', gloss: 'винительный падеж' },
            ],
          },
        ],
      },
      {
        id: 'sc-ex4',
        tr: 'Her gün bir fincan kahve içiyorum ama bugün bu kahveyi içmedim.',
        ru: 'Каждый день я пью (какую-то) чашку кофе, но сегодня этот кофе я не пил.',
        annotatedWords: [
          {
            surface: 'kahve',
            morphemes: [{ text: 'kahve', type: 'root', gloss: 'основной п. (неопределённый объект)' }],
          },
          {
            surface: 'kahveyi',
            morphemes: [
              { text: 'kahve', type: 'root', gloss: 'кофе' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'i', type: 'affix', gloss: 'винительный п. (конкретный объект с bu)' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Винительный падеж -(y)ı vs Основной падеж у прямого дополнения',
          explanation:
            'Если прямое дополнение конкретное (с bu/şu/o, притяжанием, именем собственным или уже известное из контекста), ставим -(y)ı. Если речь о предмете «вообще» или новом неопределённом (с bir), падеж остаётся основным.',
          exampleTr: 'Elma yiyorum (ем яблоко вообще) vs Elmayı yiyorum (ем это яблоко)',
          exampleRu: 'Я ем яблоко vs Я ем то самое яблоко',
          relatedTopicId: 'verb-government-reference',
        },
        {
          title: 'Местный падеж -de/-da vs Союз de/da («тоже, и»)',
          explanation:
            'Падежный аффикс пишется СЛИТНО и оглушается в -te/-ta после глухих. Союз de/da («тоже, и») всегда пишется РАЗДЕЛЬНО и никогда не оглушается в te/ta.',
          exampleTr: 'Ahmet evde (Ахмет дома) vs Ahmet de geldi (И Ахмет пришёл)',
          exampleRu: 'Ахмет дома vs Ахмет тоже пришёл',
          relatedTopicId: 'particles-de-ki-bile',
        },
      ],
    },
    miniCheck: [
      {
        id: 'sc-q1',
        prompt: 'Как сказать «в университете» (üniversite + местный падеж)?',
        type: 'input',
        correctAnswer: 'üniversitede',
        acceptedAnswers: ['üniversitede'],
        explanation: 'Местный падеж — -da/-de. Гласная e мягкая, поэтому выбираем -de (без буферного согласного).',
      },
      {
        id: 'sc-q2',
        prompt: 'Выберите верную форму винительного падежа со словом принадлежности 3-го лица: «Я видел его машину» (onun araba-sı + винительный):',
        type: 'choice',
        options: ['arabasını', 'arabasıyı', 'arabasın', 'arabası'],
        correctAnswer: 'arabasını',
        explanation: 'После аффикса принадлежности 3-го лица -(s)ı перед любым падежом ставится буферная n → araba-s-ı-n-ı.',
      },
      {
        id: 'sc-q3',
        prompt: 'Какой падеж нужен в предложении «От страха у меня задрожали руки» (korku___)?',
        type: 'choice',
        options: ['korkuya (дательный)', 'korkudan (исходный)', 'korkuda (местный)', 'korkuyu (винительный)'],
        correctAnswer: 'korkudan (исходный)',
        explanation: 'Причина («от чего?», «из-за страха») передаётся исходным падежом -dan/-den.',
      },
      {
        id: 'sc-q4',
        prompt: 'Образуйте дательный падеж («к морю») от слова «deniz»:',
        type: 'input',
        correctAnswer: 'denize',
        acceptedAnswers: ['denize'],
        explanation: 'Дательный падеж — -(y)a/-(y)e. Основа на согласную z, последняя гласная i (мягкая) → denize.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'simdiki-zaman',
    sectionId: 'verbs-basic',
    titleRu: 'Şimdiki zaman (Настоящее длительное время)',
    titleTr: 'Şimdiki Zaman',
    level: 'A1',
    affixes: ['-ıyor', '-iyor', '-uyor', '-üyor', '-yor', '-mıyor', '-miyor', '-muyor', '-müyor'],
    summary:
      'Обозначает действие, происходящее в момент речи, а также регулярное действие или ближайшие планы. Главная особенность: -yor никогда не меняет o, а если основа глагола оканчивается на широкую гласную a или e, перед -yor она сужается в ı/i/u/ü (включая отрицание -ma/-me → -mı/-mi/-mu/-mü!).',
    formula: [
      { text: 'Основа', type: 'root', gloss: 'сужение a/e → ı/i/u/ü' },
      { text: '+ (-m)', type: 'negation', gloss: 'в отр. вместо -ma/-me' },
      { text: '+ -(I⁴)yor', type: 'affix', gloss: 'узкая связка + неизменяемое -yor' },
      { text: '+ -um / -sun / -uz / -sunuz', type: 'person', gloss: 'личные окончания' },
    ],
    conjugationTable: {
      affirmative: {
        Ben: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'iyor', type: 'affix', gloss: 'наст. длит.' },
          { text: 'um', type: 'person', gloss: 'я' },
        ],
        Sen: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'iyor', type: 'affix', gloss: 'наст. длит.' },
          { text: 'sun', type: 'person', gloss: 'ты' },
        ],
        O: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'iyor', type: 'affix', gloss: 'наст. длит. (без личн. ок.)' },
        ],
        Biz: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'iyor', type: 'affix', gloss: 'наст. длит.' },
          { text: 'uz', type: 'person', gloss: 'мы' },
        ],
        Siz: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'iyor', type: 'affix', gloss: 'наст. длит.' },
          { text: 'sunuz', type: 'person', gloss: 'вы' },
        ],
        Onlar: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'iyor', type: 'affix', gloss: 'наст. длит.' },
          { text: 'lar', type: 'person', gloss: 'они' },
        ],
      },
      negative: {
        Ben: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'mi', type: 'negation', gloss: 'отриц. (me→mi)' },
          { text: 'yor', type: 'affix', gloss: 'наст. длит.' },
          { text: 'um', type: 'person', gloss: 'я' },
        ],
        Sen: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'mi', type: 'negation', gloss: 'отриц.' },
          { text: 'yor', type: 'affix', gloss: 'наст. длит.' },
          { text: 'sun', type: 'person', gloss: 'ты' },
        ],
        O: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'mi', type: 'negation', gloss: 'отриц.' },
          { text: 'yor', type: 'affix', gloss: 'наст. длит.' },
        ],
        Biz: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'mi', type: 'negation', gloss: 'отриц.' },
          { text: 'yor', type: 'affix', gloss: 'наст. длит.' },
          { text: 'uz', type: 'person', gloss: 'мы' },
        ],
        Siz: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'mi', type: 'negation', gloss: 'отриц.' },
          { text: 'yor', type: 'affix', gloss: 'наст. длит.' },
          { text: 'sunuz', type: 'person', gloss: 'вы' },
        ],
        Onlar: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'mi', type: 'negation', gloss: 'отриц.' },
          { text: 'yor', type: 'affix', gloss: 'наст. длит.' },
          { text: 'lar', type: 'person', gloss: 'они' },
        ],
      },
      question: {
        Ben: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'iyor', type: 'affix', gloss: 'наст. длит.' },
          { text: ' mu', type: 'question', gloss: 'вопрос (после o → u)' },
          { text: 'yum', type: 'person', gloss: 'буфер y + я' },
        ],
        Sen: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'iyor', type: 'affix', gloss: 'наст. длит.' },
          { text: ' mu', type: 'question', gloss: 'вопрос' },
          { text: 'sun', type: 'person', gloss: 'ты' },
        ],
        O: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'iyor', type: 'affix', gloss: 'наст. длит.' },
          { text: ' mu', type: 'question', gloss: 'вопрос' },
        ],
        Biz: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'iyor', type: 'affix', gloss: 'наст. длит.' },
          { text: ' mu', type: 'question', gloss: 'вопрос' },
          { text: 'yuz', type: 'person', gloss: 'буфер y + мы' },
        ],
        Siz: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'iyor', type: 'affix', gloss: 'наст. длит.' },
          { text: ' mu', type: 'question', gloss: 'вопрос' },
          { text: 'sunuz', type: 'person', gloss: 'вы' },
        ],
        Onlar: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'iyorlar', type: 'affix', gloss: 'наст. длит. + они' },
          { text: ' mı', type: 'question', gloss: 'после -lar → mı!' },
        ],
      },
      negativeQuestion: {
        Ben: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'mi', type: 'negation', gloss: 'отриц.' },
          { text: 'yor', type: 'affix', gloss: 'наст. длит.' },
          { text: ' mu', type: 'question', gloss: 'вопрос' },
          { text: 'yum', type: 'person', gloss: 'я' },
        ],
        Sen: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'mi', type: 'negation', gloss: 'отриц.' },
          { text: 'yor', type: 'affix', gloss: 'наст. длит.' },
          { text: ' mu', type: 'question', gloss: 'вопрос' },
          { text: 'sun', type: 'person', gloss: 'ты' },
        ],
        O: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'mi', type: 'negation', gloss: 'отриц.' },
          { text: 'yor', type: 'affix', gloss: 'наст. длит.' },
          { text: ' mu', type: 'question', gloss: 'вопрос' },
        ],
        Biz: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'mi', type: 'negation', gloss: 'отриц.' },
          { text: 'yor', type: 'affix', gloss: 'наст. длит.' },
          { text: ' mu', type: 'question', gloss: 'вопрос' },
          { text: 'yuz', type: 'person', gloss: 'мы' },
        ],
        Siz: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'mi', type: 'negation', gloss: 'отриц.' },
          { text: 'yor', type: 'affix', gloss: 'наст. длит.' },
          { text: ' mu', type: 'question', gloss: 'вопрос' },
          { text: 'sunuz', type: 'person', gloss: 'вы' },
        ],
        Onlar: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'miyorlar', type: 'affix', gloss: 'отриц. + они' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
        ],
      },
    },
    examples: [
      {
        id: 'sz-ex1',
        tr: 'Şimdi Türkçe çalışıyorum ve yeni kelimeler öğreniyorum.',
        ru: 'Сейчас я занимаюсь турецким и учу новые слова.',
        annotatedWords: [
          {
            surface: 'çalışıyorum',
            morphemes: [
              { text: 'çalış', type: 'root', gloss: 'работать/учиться' },
              { text: 'ıyor', type: 'affix', gloss: 'наст. длит. (ı после ı)' },
              { text: 'um', type: 'person', gloss: 'я' },
            ],
          },
          {
            surface: 'öğreniyorum.',
            morphemes: [
              { text: 'öğren', type: 'root', gloss: 'учить' },
              { text: 'iyor', type: 'affix', gloss: 'наст. длит.' },
              { text: 'um', type: 'person', gloss: 'я' },
            ],
          },
        ],
      },
      {
        id: 'sz-ex2',
        tr: 'Seni durakta bekliyorum, nereye gidiyorsun?',
        ru: 'Я жду тебя на остановке, куда ты идёшь?',
        annotatedWords: [
          {
            surface: 'bekliyorum,',
            morphemes: [
              { text: 'bekli', type: 'root', gloss: 'bekle (сужение e → i)' },
              { text: 'yor', type: 'affix', gloss: 'наст. длит.' },
              { text: 'um', type: 'person', gloss: 'я' },
            ],
          },
          {
            surface: 'gidiyorsun?',
            morphemes: [
              { text: 'gid', type: 'root', gloss: 'git (озвончение t → d)' },
              { text: 'iyor', type: 'affix', gloss: 'наст. длит.' },
              { text: 'sun', type: 'person', gloss: 'ты' },
            ],
          },
        ],
      },
      {
        id: 'sz-ex3',
        tr: 'Bugün erken çıkmıyor muyuz?',
        ru: 'Мы сегодня не выходим пораньше?',
        annotatedWords: [
          {
            surface: 'çıkmıyor',
            morphemes: [
              { text: 'çık', type: 'root', gloss: 'выходить' },
              { text: 'mı', type: 'negation', gloss: 'отриц. (ma → mı)' },
              { text: 'yor', type: 'affix', gloss: 'наст. длит.' },
            ],
          },
          {
            surface: 'muyuz?',
            morphemes: [
              { text: 'mu', type: 'question', gloss: 'вопрос' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'uz', type: 'person', gloss: 'мы' },
            ],
          },
        ],
      },
      {
        id: 'sz-ex4',
        tr: 'Çocuklar parkta gülüyor ve top oynuyorlar.',
        ru: 'Дети смеются в парке и играют в мяч.',
        annotatedWords: [
          {
            surface: 'gülüyor',
            morphemes: [
              { text: 'gül', type: 'root', gloss: 'смеяться' },
              { text: 'üyor', type: 'affix', gloss: 'наст. длит. (после ü → ü)' },
            ],
          },
          {
            surface: 'oynuyorlar.',
            morphemes: [
              { text: 'oynu', type: 'root', gloss: 'oyna (сужение a после o → u!)' },
              { text: 'yor', type: 'affix', gloss: 'наст. длит.' },
              { text: 'lar', type: 'person', gloss: 'они' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Сужение широких гласных (bekle → bekliyor, oyna → oynuyor)',
          explanation:
            'Если основа оканчивается на a или e, перед -yor она превращается в ı/i/u/ü в зависимости от ПРЕДЫДУЩЕЙ гласной. В отрицании (bekle-me-yor → beklemiyor) сужается уже само отрицание, а основа bekle остаётся нетронутой!',
          exampleTr: 'bekliyorum (ждёт) vs beklemiyorum (не жду)',
          exampleRu: 'жду vs не жду',
          relatedTopicId: 'verb-stem-negation-question',
        },
        {
          title: 'Şimdiki zaman (-yor) vs Geniş zaman (-r/-ar/-ır)',
          explanation:
            'Для фактов прямо сейчас и временных привычек в текущий период жизни используется -yor. Для общих истин, расписаний, вечных привычек и вежливых просьб используется Geniş zaman.',
          exampleTr: 'Şimdi kahve içiyorum (пью сейчас) vs Her sabah kahve içerim (обычно пью)',
          exampleRu: 'Сейчас пью кофе vs Каждое утро пью кофе',
          relatedTopicId: 'genis-zaman',
        },
      ],
    },
    miniCheck: [
      {
        id: 'sz-q1',
        prompt: 'Образуйте форму 1-го лица ед. ч. (Ben) в Şimdiki zaman от глагола «beklemek» (ждать):',
        type: 'input',
        correctAnswer: 'bekliyorum',
        acceptedAnswers: ['bekliyorum'],
        explanation: 'Основа bekle- оканчивается на e, поэтому перед -yor происходит сужение e → i: bekliyorum.',
      },
      {
        id: 'sz-q2',
        prompt: 'Как правильно сказать «ты не понимаешь» (anlamak)?',
        type: 'choice',
        options: ['anlamayorsun', 'anlamıyorsun', 'anlıyormusun', 'anlamiyorsun'],
        correctAnswer: 'anlamıyorsun',
        explanation: 'В отрицании сужается гласная отрицания (-ma → -mı), а основа anla- сохраняет a: anlamıyorsun.',
      },
      {
        id: 'sz-q3',
        prompt: 'Выберите верную форму от глагола «gitmek» (идти) для «O» (он/она идёт):',
        type: 'choice',
        options: ['gitiyor', 'gidiyor', 'gitıyor', 'gidıyor'],
        correctAnswer: 'gidiyor',
        explanation: 'У глагола gitmek (и etmek, tatmak, gütmek) конечное t озвончается в d перед гласной → gidiyor.',
      },
      {
        id: 'sz-q4',
        prompt: 'Переведите «Они читают?» (okumak + -yor):',
        type: 'input',
        correctAnswer: 'okuyorlar mı?',
        acceptedAnswers: ['okuyorlar mı', 'okuyorlar mı?', 'okuyor mu', 'okuyor mu?'],
        explanation: 'После -lar/-ler вопросительная частица подстраивается под -lar и пишется как mı: okuyorlar mı?',
      },
    ],
    isDraft: false,
  },
];
