import type { GrammarTopic } from '../../types';

export const TOPICS_EXTRA_2: GrammarTopic[] = [
  {
    id: 'pronouns',
    sectionId: 'pronouns-modifiers',
    titleRu: 'Местоимения (личные, указательные, возвратные)',
    titleTr: 'Zamirler',
    level: 'A1',
    levels: ['A1', 'A2'],
    affixes: ['ben', 'sen', 'o', 'biz', 'siz', 'onlar', 'bu', 'şu', 'kendi', 'bana', 'sana', 'ona', 'buna'],
    summary:
      'В турецком языке личные местоимения (ben, sen, o, biz, siz, onlar) не различают грамматического рода, а их роль в предложении передают падежные и личные аффиксы. Указательные местоимения (bu, şu, o) при склонении принимают буферную согласную -n-, а возвратное местоимение kendi («сам») обязательно получает аффикс принадлежности.',
    formula: [
      { text: 'ben / sen / bu / kendi', type: 'root', gloss: 'основа местоимения' },
      { text: '+ (n)', type: 'buffer', gloss: 'буфер у bu/şu/o и 3 л. перед падежом' },
      { text: '+ (принадлежность)', type: 'person', gloss: 'у kendi: kendim, kendin…' },
      { text: '+ падеж', type: 'affix', gloss: '-a/-e, -ı/-i, -da/-de, -dan/-den, -ın/-in' },
    ],
    conjugationTable: {
      affirmative: {
        ben: [
          { text: 'ben', type: 'root', gloss: 'я (осн.)' },
          { text: ' / b', type: 'root', gloss: 'супплетивная основа' },
          { text: 'ana', type: 'affix', gloss: 'мне (дат. п., искл.!)' },
        ],
        sen: [
          { text: 'sen', type: 'root', gloss: 'ты (осн.)' },
          { text: ' / s', type: 'root', gloss: 'супплетивная основа' },
          { text: 'ana', type: 'affix', gloss: 'тебе (дат. п., искл.!)' },
        ],
        o: [
          { text: 'o', type: 'root', gloss: 'он / она / оно' },
          { text: 'n', type: 'buffer', gloss: 'буфер n' },
          { text: 'a', type: 'affix', gloss: 'ему / ей' },
        ],
        bu: [
          { text: 'bu', type: 'root', gloss: 'это (близко)' },
          { text: 'n', type: 'buffer', gloss: 'буфер n' },
          { text: 'lar', type: 'affix', gloss: 'эти (мн. ч.)' },
        ],
        şu: [
          { text: 'şu', type: 'root', gloss: 'вон то (чуть дальше)' },
          { text: 'n', type: 'buffer', gloss: 'буфер n' },
          { text: 'u', type: 'affix', gloss: 'вон то (вин. п.)' },
        ],
        kendi: [
          { text: 'kendi', type: 'root', gloss: 'сам' },
          { text: 'm', type: 'person', gloss: 'я сам (1 л. ед. ч.)' },
        ],
      },
      negative: {
        ben: [
          { text: 'ben', type: 'root', gloss: 'я' },
          { text: ' değil', type: 'negation', gloss: 'не' },
          { text: 'im', type: 'person', gloss: 'это не я' },
        ],
        sen: [
          { text: 'sen', type: 'root', gloss: 'ты' },
          { text: ' değil', type: 'negation', gloss: 'не' },
          { text: 'sin', type: 'person', gloss: 'это не ты' },
        ],
        o: [
          { text: 'o', type: 'root', gloss: 'он/она' },
          { text: ' değil', type: 'negation', gloss: 'это не он/она' },
        ],
        bu: [
          { text: 'bu', type: 'root', gloss: 'это' },
          { text: ' değil', type: 'negation', gloss: 'не это' },
        ],
        şu: [
          { text: 'şu', type: 'root', gloss: 'вон то' },
          { text: 'n', type: 'buffer', gloss: 'буфер n' },
          { text: 'dan', type: 'affix', gloss: 'от вон того' },
          { text: ' değil', type: 'negation', gloss: 'не от того' },
        ],
        kendi: [
          { text: 'kendi', type: 'root', gloss: 'сам' },
          { text: 'si', type: 'person', gloss: 'он сам' },
          { text: ' değil', type: 'negation', gloss: 'не он сам' },
        ],
      },
      question: {
        ben: [
          { text: 'ben', type: 'root', gloss: 'я' },
          { text: ' mi', type: 'question', gloss: 'вопрос' },
          { text: 'yim?', type: 'person', gloss: 'это я?' },
        ],
        sen: [
          { text: 's', type: 'root', gloss: 'ты' },
          { text: 'ana', type: 'affix', gloss: 'тебе' },
          { text: ' mı?', type: 'question', gloss: 'тебе?' },
        ],
        o: [
          { text: 'o', type: 'root', gloss: 'он/она' },
          { text: 'n', type: 'buffer', gloss: 'буфер n' },
          { text: 'u', type: 'affix', gloss: 'его/её (вин. п.)' },
          { text: ' mu?', type: 'question', gloss: 'его/её?' },
        ],
        bu: [
          { text: 'bu', type: 'root', gloss: 'это' },
          { text: ' mu?', type: 'question', gloss: 'это?' },
        ],
        şu: [
          { text: 'şu', type: 'root', gloss: 'вон то' },
          { text: 'n', type: 'buffer', gloss: 'буфер n' },
          { text: 'lar', type: 'affix', gloss: 'те' },
          { text: ' mı?', type: 'question', gloss: 'вон те?' },
        ],
        kendi: [
          { text: 'kendi', type: 'root', gloss: 'сам' },
          { text: 'n', type: 'person', gloss: 'ты сам' },
          { text: ' mi?', type: 'question', gloss: 'ты сам?' },
        ],
      },
    },
    examples: [
      {
        id: 'pron-ex1',
        tr: 'Bana yarın sabah telefon eder misin?',
        ru: 'Ты позвонишь мне завтра утром?',
        annotatedWords: [
          {
            surface: 'Bana',
            morphemes: [
              { text: 'B', type: 'root', gloss: 'ben (я)' },
              { text: 'ana', type: 'affix', gloss: 'дат. падеж (мне, искл.)' },
            ],
          },
          {
            surface: 'misin',
            morphemes: [
              { text: 'mi', type: 'question', gloss: 'вопросит. частица' },
              { text: 'sin', type: 'person', gloss: '2 л. ед. ч. (ты)' },
            ],
          },
        ],
      },
      {
        id: 'pron-ex2',
        tr: 'Bunları masanın üstüne koyabilirsin.',
        ru: 'Ты можешь положить эти вещи на стол.',
        annotatedWords: [
          {
            surface: 'Bunları',
            morphemes: [
              { text: 'Bu', type: 'root', gloss: 'это' },
              { text: 'n', type: 'buffer', gloss: 'буфер перед -lar и падежом' },
              { text: 'lar', type: 'affix', gloss: 'мн. число (эти)' },
              { text: 'ı', type: 'affix', gloss: 'опред. винит. падеж' },
            ],
          },
          {
            surface: 'üstüne',
            morphemes: [
              { text: 'üst', type: 'root', gloss: 'верх' },
              { text: 'ü', type: 'person', gloss: 'принадлежность 3 л.' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'e', type: 'affix', gloss: 'направление (куда?)' },
            ],
          },
        ],
      },
      {
        id: 'pron-ex3',
        tr: 'Bu yemeği kendim pişirdim.',
        ru: 'Это блюдо я приготовил(а) сам(а).',
        annotatedWords: [
          {
            surface: 'yemeği',
            morphemes: [
              { text: 'yeme', type: 'root', gloss: 'yemek (еда, k→ğ)' },
              { text: 'ğ', type: 'buffer', gloss: 'озвончение k→ğ' },
              { text: 'i', type: 'affix', gloss: 'опред. винит. падеж' },
            ],
          },
          {
            surface: 'kendim',
            morphemes: [
              { text: 'kendi', type: 'root', gloss: 'сам' },
              { text: 'm', type: 'person', gloss: '1 л. ед. ч. (я сам)' },
            ],
          },
        ],
      },
      {
        id: 'pron-ex4',
        tr: 'Onların evi bizimkinden daha büyük.',
        ru: 'Их дом больше нашего.',
        annotatedWords: [
          {
            surface: 'Onların',
            morphemes: [
              { text: 'O', type: 'root', gloss: 'он/она' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'lar', type: 'affix', gloss: 'мн. ч. (они)' },
              { text: 'ın', type: 'affix', gloss: 'род. падеж (их)' },
            ],
          },
          {
            surface: 'bizimkinden',
            morphemes: [
              { text: 'biz', type: 'root', gloss: 'мы' },
              { text: 'im', type: 'affix', gloss: 'род. падеж (наш)' },
              { text: 'ki', type: 'affix', gloss: 'субстантивация (наше)' },
              { text: 'n', type: 'buffer', gloss: 'буфер n после -ki' },
              { text: 'den', type: 'affix', gloss: 'исходн. падеж (чем наш)' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'benim / bizim вместо *benın / *bizın и bana / sana',
          explanation:
            'В родительном падеже у ben и biz вместо обычного -ın используется -im (benim, bizim). В дательном падеже основа гласной меняется: ben → bana, sen → sana (не *bene и не *sene!).',
          exampleTr: 'Bana ve sana güveniyorlar, bizim evde buluşuyoruz.',
          exampleRu: 'Они доверяют мне и тебе, мы встречаемся у нас дома.',
          relatedTopicId: 'six-cases',
        },
        {
          title: 'Указательное местоимение o vs личное местоимение o',
          explanation:
            'Местоимение o («он/она/оно» и «тот/та/то») перед падежами и -lar всегда берёт буфер -n- (onu, ona, onda, ondan, onlar). В позиции определения перед существительным оно остаётся неизменным (o adam, o kitaplar).',
          exampleTr: 'O kitabı okudum, onu sana veriyorum.',
          exampleRu: 'Я прочитал(а) ту книгу и отдаю её тебе.',
          relatedTopicId: 'buffer-consonants',
        },
      ],
    },
    miniCheck: [
      {
        id: 'pron-q1',
        prompt: 'Как правильно сказать «тебе» (дательный падеж от sen)?',
        type: 'input',
        correctAnswer: 'sana',
        acceptedAnswers: ['sana', 'Sana'],
        explanation: 'У местоимений ben и sen в дательном падеже происходит особое чередование корня: ben → bana, sen → sana.',
      },
      {
        id: 'pron-q2',
        prompt: 'Выберите правильную форму множественного числа от указательного местоимения «bu» («эти»):',
        type: 'choice',
        options: ['bular', 'bunlar', 'bunar', 'buler'],
        correctAnswer: 'bunlar',
        explanation: 'Указательные местоимения bu, şu, o перед аффиксами -lar и падежами требуют буферной согласной n: bunlar, şunlar, onlar.',
      },
      {
        id: 'pron-q3',
        prompt: 'Дополните предложение возвратным местоимением «он сам»: Ahmet bu işi ___ yaptı.',
        type: 'input',
        correctAnswer: 'kendisi',
        acceptedAnswers: ['kendisi', 'kendi'],
        explanation: 'Возвратное местоимение kendi в 3-м лице ед. ч. обычно принимает аффикс принадлежности -si: kendisi («он сам»).',
      },
      {
        id: 'pron-q4',
        prompt: 'Какая форма означает «у нас» (местный падеж от biz)?',
        type: 'choice',
        options: ['bizde', 'bizne', 'bizimda', 'bizede'],
        correctAnswer: 'bizde',
        explanation: 'Личное местоимение biz в местном падеже образует форму bizde («у нас»); буфер n здесь не нужен, так как основа оканчивается на согласную.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'adjectives-comparison',
    sectionId: 'pronouns-modifiers',
    titleRu: 'Прилагательные и степени сравнения',
    titleTr: 'Sıfatlar ve Karşılaştırma',
    level: 'A1',
    levels: ['A1', 'A2', 'B1'],
    affixes: ['daha', 'en', '-dan daha', '-ca', '-ce', 'kadar'],
    summary:
      'Турецкие прилагательные стоят перед существительным и не изменяются ни по числам, ни по родам, ни по падежам (büyük evler — большие дома). Степени сравнения образуются аналитически: сравнительная с помощью слова daha («более») и исходного падежа -dan («чем»), а превосходная — с помощью частицы en («самый»).',
    formula: [
      { text: 'Объект сравнения + -DAn', type: 'affix', gloss: 'исходный падеж («чем кто/что»)' },
      { text: 'daha / en', type: 'affix', gloss: 'более / самый' },
      { text: '+ Прилагательное', type: 'root', gloss: 'неизменяемая форма' },
      { text: '+ (Существительное)', type: 'root', gloss: 'без согласования' },
    ],
    conjugationTable: {
      affirmative: {
        'Обычное опред.': [
          { text: 'güzel', type: 'root', gloss: 'красивый' },
          { text: ' bir şehir', type: 'root', gloss: 'один город (bir после прил.)' },
        ],
        'Сравнительная': [
          { text: 'Ankara', type: 'root', gloss: 'Анкара' },
          { text: 'dan', type: 'affix', gloss: 'чем Анкара' },
          { text: ' daha büyük', type: 'affix', gloss: 'больше' },
        ],
        'Превосходная': [
          { text: 'en', type: 'affix', gloss: 'самый' },
          { text: ' yüksek dağ', type: 'root', gloss: 'высокая гора' },
        ],
        'Равенство (kadar)': [
          { text: 'sen', type: 'root', gloss: 'ты' },
          { text: ' kadar hızlı', type: 'affix', gloss: 'такой же быстрый, как ты' },
        ],
        'Ослабление (-ca)': [
          { text: 'büyük', type: 'root', gloss: 'большой' },
          { text: 'çe', type: 'affix', gloss: 'довольно большой' },
        ],
        'Усиление (pekiştirme)': [
          { text: 'bembeyaz', type: 'root', gloss: 'белоснежный (be+m+beyaz)' },
        ],
      },
      negative: {
        'Обычное опред.': [
          { text: 'güzel', type: 'root', gloss: 'красивый' },
          { text: ' değil', type: 'negation', gloss: 'не красивый' },
        ],
        'Сравнительная': [
          { text: 'daha', type: 'affix', gloss: 'более' },
          { text: ' ucuz', type: 'root', gloss: 'дешёвый' },
          { text: ' değil', type: 'negation', gloss: 'не дешевле' },
        ],
        'Превосходная': [
          { text: 'en', type: 'affix', gloss: 'самый' },
          { text: ' pahalı', type: 'root', gloss: 'дорогой' },
          { text: ' değil', type: 'negation', gloss: 'не самый дорогой' },
        ],
        'Равенство (kadar)': [
          { text: 'onun', type: 'root', gloss: 'он' },
          { text: ' kadar uzun', type: 'affix', gloss: 'такой же высокий' },
          { text: ' değil', type: 'negation', gloss: 'не такой высокий, как он' },
        ],
        'Ослабление (-ca)': [
          { text: 'soğuk', type: 'root', gloss: 'холодный' },
          { text: 'ça', type: 'affix', gloss: 'прохладный' },
          { text: ' değil', type: 'negation', gloss: 'не прохладный' },
        ],
        'Усиление (pekiştirme)': [
          { text: 'yemyeşil', type: 'root', gloss: 'ярко-зелёный' },
          { text: ' değil', type: 'negation', gloss: 'не ярко-зелёный' },
        ],
      },
      question: {
        'Обычное опред.': [
          { text: 'yeni', type: 'root', gloss: 'новый' },
          { text: ' mi?', type: 'question', gloss: 'новый ли?' },
        ],
        'Сравнительная': [
          { text: 'daha', type: 'affix', gloss: 'более' },
          { text: ' iyi', type: 'root', gloss: 'хороший' },
          { text: ' mi?', type: 'question', gloss: 'лучше ли?' },
        ],
        'Превосходная': [
          { text: 'en', type: 'affix', gloss: 'самый' },
          { text: ' yakın', type: 'root', gloss: 'близкий' },
          { text: ' mı?', type: 'question', gloss: 'ближайший ли?' },
        ],
        'Равенство (kadar)': [
          { text: 'kardeşin', type: 'root', gloss: 'твой брат' },
          { text: ' kadar çalışkan', type: 'affix', gloss: 'настолько же старательный' },
          { text: ' mı?', type: 'question', gloss: 'ли?' },
        ],
        'Ослабление (-ca)': [
          { text: 'kolay', type: 'root', gloss: 'лёгкий' },
          { text: 'ca', type: 'affix', gloss: 'довольно лёгкий' },
          { text: ' mı?', type: 'question', gloss: 'ли?' },
        ],
        'Усиление (pekiştirme)': [
          { text: 'tertemiz', type: 'root', gloss: 'кристально чистый' },
          { text: ' mi?', type: 'question', gloss: 'чистейший ли?' },
        ],
      },
    },
    examples: [
      {
        id: 'adj-ex1',
        tr: 'İstanbul İzmir’den daha kalabalık bir şehir.',
        ru: 'Стамбул — более многолюдный город, чем Измир.',
        annotatedWords: [
          {
            surface: 'İzmir’den',
            morphemes: [
              { text: 'İzmir', type: 'root', gloss: 'Измир' },
              { text: 'den', type: 'affix', gloss: 'исходн. падеж (чем Измир)' },
            ],
          },
          {
            surface: 'daha',
            morphemes: [{ text: 'daha', type: 'affix', gloss: 'более (сравн. ст.)' }],
          },
          {
            surface: 'kalabalık',
            morphemes: [{ text: 'kalabalık', type: 'root', gloss: 'многолюдный' }],
          },
        ],
      },
      {
        id: 'adj-ex2',
        tr: 'Bu mahalledeki en sessiz kafe burası.',
        ru: 'Самое тихое кафе в этом районе — здесь.',
        annotatedWords: [
          {
            surface: 'mahalledeki',
            morphemes: [
              { text: 'mahalle', type: 'root', gloss: 'район' },
              { text: 'de', type: 'affix', gloss: 'местн. падеж (в)' },
              { text: 'ki', type: 'affix', gloss: 'прил. («находящийся в»)' },
            ],
          },
          {
            surface: 'en',
            morphemes: [{ text: 'en', type: 'affix', gloss: 'самый (превосх. ст.)' }],
          },
          {
            surface: 'sessiz',
            morphemes: [
              { text: 'ses', type: 'root', gloss: 'звук' },
              { text: 'siz', type: 'negation', gloss: 'без (тихий)' },
            ],
          },
        ],
      },
      {
        id: 'adj-ex3',
        tr: 'Yeni telefonum eskisi kadar hafif değil.',
        ru: 'Мой новый телефон не такой лёгкий, как старый.',
        annotatedWords: [
          {
            surface: 'telefonum',
            morphemes: [
              { text: 'telefon', type: 'root', gloss: 'телефон' },
              { text: 'um', type: 'person', gloss: 'мой (1 л. ед. ч.)' },
            ],
          },
          {
            surface: 'eskisi',
            morphemes: [
              { text: 'eski', type: 'root', gloss: 'старый' },
              { text: 's', type: 'buffer', gloss: 'буфер s' },
              { text: 'i', type: 'person', gloss: 'старый из них (субстантивация)' },
            ],
          },
          {
            surface: 'kadar',
            morphemes: [{ text: 'kadar', type: 'affix', gloss: 'настолько же, как' }],
          },
        ],
      },
      {
        id: 'adj-ex4',
        tr: 'Çocuklar tertemiz odada mışıl mışıl uyuyor.',
        ru: 'Дети крепко спят в идеально чистой комнате.',
        annotatedWords: [
          {
            surface: 'tertemiz',
            morphemes: [
              { text: 'ter', type: 'affix', gloss: 'усилительная приставка (pekiştirme)' },
              { text: 'temiz', type: 'root', gloss: 'чистый (чистейший)' },
            ],
          },
          {
            surface: 'odada',
            morphemes: [
              { text: 'oda', type: 'root', gloss: 'комната' },
              { text: 'da', type: 'affix', gloss: 'местн. падеж (в)' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Место неопределённого артикля bir с прилагательным',
          explanation:
            'Когда перед существительным стоит прилагательное, слово bir («один/некий») ставится МЕЖДУ прилагательным и существительным: güzel bir gün («прекрасный день»), а не *bir güzel gün (что означает «один-единственный прекрасный день»).',
          exampleTr: 'Soğuk bir kış akşamıydı.',
          exampleRu: 'Был холодный зимний вечер.',
          relatedTopicId: 'word-order-sov',
        },
        {
          title: 'Сравнение с местоимением + kadar',
          explanation:
            'Послелог kadar с личными и указательными местоимениями (ben, sen, o, bu) требует родительного падежа: benim kadar («как я»), senin kadar («как ты»), onun kadar («как он»), но с существительными используется основной падеж: Ali kadar («как Али»).',
          exampleTr: 'Senin kadar sabırlı değilim.',
          exampleRu: 'Я не такой терпеливый, как ты.',
          relatedTopicId: 'basic-postpositions',
        },
      ],
    },
    miniCheck: [
      {
        id: 'adj-q1',
        prompt: 'Как сказать «самая длинная улица» (uzun — длинный, cadde — улица)?',
        type: 'choice',
        options: ['daha uzun cadde', 'en uzun cadde', 'uzunca cadde', 'uzundan cadde'],
        correctAnswer: 'en uzun cadde',
        explanation: 'Превосходная степень в турецком языке всегда образуется постановкой слова en перед прилагательным.',
      },
      {
        id: 'adj-q2',
        prompt: 'Заполните пропуск, чтобы получилось «чай горячее кофе» (kahve — кофе, sıcak — горячий): Çay kahve___ daha sıcak.',
        type: 'input',
        correctAnswer: 'den',
        acceptedAnswers: ['den', 'kahveden'],
        explanation: 'Объект сравнения («чем кофе») ставится в исходном падеже -dan/-den. После мягкой гласной e в kahve выбираем -den.',
      },
      {
        id: 'adj-q3',
        prompt: 'Выберите правильный порядок слов для фразы «интересная книга» (ilginç — интересный, kitap — книга):',
        type: 'choice',
        options: ['bir ilginç kitap', 'ilginç bir kitap', 'ilginç kitaplar bir', 'kitap ilginç bir'],
        correctAnswer: 'ilginç bir kitap',
        explanation: 'В нейтральной речи неопределённый артикль bir ставится после качественного прилагательного, прямо перед существительным.',
      },
      {
        id: 'adj-q4',
        prompt: 'Заполните пропуск в конструкции равенства «он не такой быстрый, как я»: O ___ kadar hızlı değil.',
        type: 'input',
        correctAnswer: 'benim',
        acceptedAnswers: ['benim'],
        explanation: 'Личные местоимения единственного числа перед послелогом kadar принимают родительный падеж: benim kadar.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'adverbs',
    sectionId: 'pronouns-modifiers',
    titleRu: 'Наречия (места, времени, образа действия)',
    titleTr: 'Zarflar',
    level: 'A2',
    levels: ['A2', 'B1'],
    affixes: ['-ca', '-ce', '-ça', '-çe', '-la', '-le', '-arak', '-erek'],
    summary:
      'В турецком языке большинство качественных прилагательных могут без изменений выступать как наречия образа действия, если стоят перед глаголом (hızlı koşuyor — быстро бегает). Специальные наречия образуются с помощью аффиксов -ca/-ce (hızlıca, Türkçe), -la/-le (dikkatle) или деепричастий на -(y)arak, а для усиления часто используется удвоение слова (yavaş yavaş).',
    formula: [
      { text: 'Прилагательное / Существительное', type: 'root', gloss: 'основа (или удвоение)' },
      { text: '+ (-CA² / -lA²)', type: 'affix', gloss: 'способ / язык / манера' },
      { text: '+ Глагол', type: 'root', gloss: 'наречие ставится до глагола' },
    ],
    conjugationTable: {
      affirmative: {
        'Образ действия': [
          { text: 'iyi', type: 'root', gloss: 'хорошо (перед глаголом)' },
          { text: ' anlıyor', type: 'affix', gloss: 'понимает' },
        ],
        'Аффикс -ca/-ce': [
          { text: 'sessiz', type: 'root', gloss: 'тихий' },
          { text: 'ce', type: 'affix', gloss: 'тихонько, беззвучно' },
        ],
        'С послелогом ile': [
          { text: 'dikkat', type: 'root', gloss: 'внимание' },
          { text: 'le', type: 'affix', gloss: 'внимательно' },
        ],
        'Удвоение (ikileme)': [
          { text: 'yavaş yavaş', type: 'root', gloss: 'медленно-медленно, постепенно' },
        ],
        'Время': [
          { text: 'hemen', type: 'root', gloss: 'сразу же, немедленно' },
        ],
        'Место (без падежа)': [
          { text: 'dışarı', type: 'root', gloss: 'наружу (наречие направления)' },
        ],
      },
      negative: {
        'Образ действия': [
          { text: 'kötü', type: 'root', gloss: 'плохо' },
          { text: ' davran', type: 'root', gloss: 'вести себя' },
          { text: 'ma', type: 'negation', gloss: 'не веди себя плохо' },
        ],
        'Аффикс -ca/-ce': [
          { text: 'açık', type: 'root', gloss: 'открытый' },
          { text: 'ça', type: 'affix', gloss: 'откровенно' },
          { text: ' söyle', type: 'root', gloss: 'говорить' },
          { text: 'me', type: 'negation', gloss: 'не говорит прямо' },
          { text: 'di', type: 'affix', gloss: 'прош. вр.' },
        ],
        'С послелогом ile': [
          { text: 'sabır', type: 'root', gloss: 'терпение' },
          { text: 'la', type: 'affix', gloss: 'терпеливо' },
          { text: ' bekle', type: 'root', gloss: 'ждать' },
          { text: 'me', type: 'negation', gloss: 'не ждёт' },
          { text: 'yor', type: 'affix', gloss: 'наст. вр.' },
        ],
        'Удвоение (ikileme)': [
          { text: 'hızlı hızlı', type: 'root', gloss: 'очень быстро' },
          { text: ' yürü', type: 'root', gloss: 'идти' },
          { text: 'me', type: 'negation', gloss: 'не иди быстро' },
        ],
        'Время': [
          { text: 'henüz', type: 'root', gloss: 'ещё не (только с отриц.)' },
          { text: ' gel', type: 'root', gloss: 'приходить' },
          { text: 'me', type: 'negation', gloss: 'не пришёл' },
          { text: 'di', type: 'affix', gloss: 'прош. вр.' },
        ],
        'Место (без падежа)': [
          { text: 'içeri', type: 'root', gloss: 'внутрь' },
          { text: ' gir', type: 'root', gloss: 'входить' },
          { text: 'me', type: 'negation', gloss: 'не входи' },
        ],
      },
      question: {
        'Образ действия': [
          { text: 'nasıl', type: 'question', gloss: 'как?' },
          { text: ' gidiyor?', type: 'root', gloss: 'как идут дела?' },
        ],
        'Аффикс -ca/-ce': [
          { text: 'Türk', type: 'root', gloss: 'турок' },
          { text: 'çe', type: 'affix', gloss: 'по-турецки' },
          { text: ' biliyor', type: 'root', gloss: 'знает' },
          { text: ' musun?', type: 'question', gloss: 'знаешь ли?' },
        ],
        'С послелогом ile': [
          { text: 'kolaylık', type: 'root', gloss: 'лёгкость' },
          { text: 'la', type: 'affix', gloss: 'с лёгкостью' },
          { text: ' buldun', type: 'root', gloss: 'нашёл' },
          { text: ' mu?', type: 'question', gloss: 'ли?' },
        ],
        'Удвоение (ikileme)': [
          { text: 'teker teker', type: 'root', gloss: 'по одному' },
          { text: ' anlattı', type: 'root', gloss: 'рассказал' },
          { text: ' mı?', type: 'question', gloss: 'ли?' },
        ],
        'Время': [
          { text: 'ne zaman', type: 'question', gloss: 'когда?' },
          { text: ' başlıyor?', type: 'root', gloss: 'начинается?' },
        ],
        'Место (без падежа)': [
          { text: 'yukarı', type: 'root', gloss: 'наверх' },
          { text: ' çıkıyor', type: 'root', gloss: 'поднимается' },
          { text: ' musunuz?', type: 'question', gloss: 'поднимаетесь ли?' },
        ],
      },
    },
    examples: [
      {
        id: 'adv-ex1',
        tr: 'Öğretmenimiz konuyu çok açıkça anlattı.',
        ru: 'Наш учитель очень ясно и откровенно объяснил тему.',
        annotatedWords: [
          {
            surface: 'Öğretmenimiz',
            morphemes: [
              { text: 'Öğretmen', type: 'root', gloss: 'учитель' },
              { text: 'imiz', type: 'person', gloss: 'наш (1 л. мн. ч.)' },
            ],
          },
          {
            surface: 'açıkça',
            morphemes: [
              { text: 'açık', type: 'root', gloss: 'открытый/ясный (глух. k)' },
              { text: 'ça', type: 'affix', gloss: 'наречие (-ca с оглушением)' },
            ],
          },
        ],
      },
      {
        id: 'adv-ex2',
        tr: 'Hava ısınınca dışarı çıktık ve yavaş yavaş yürüdük.',
        ru: 'Когда потеплело, мы вышли на улицу и неспешно прогулялись.',
        annotatedWords: [
          {
            surface: 'ısınınca',
            morphemes: [
              { text: 'ısın', type: 'root', gloss: 'теплеть' },
              { text: 'ınca', type: 'affix', gloss: 'деепричастие («когда»)' },
            ],
          },
          {
            surface: 'dışarı',
            morphemes: [{ text: 'dışarı', type: 'root', gloss: 'наружу (наречие места)' }],
          },
          {
            surface: 'yavaş',
            morphemes: [{ text: 'yavaş', type: 'root', gloss: 'медленно (часть удвоения)' }],
          },
        ],
      },
      {
        id: 'adv-ex3',
        tr: 'Tren henüz istasyona gelmedi ama birazdan gelir.',
        ru: 'Поезд ещё не прибыл на станцию, но скоро прибудет.',
        annotatedWords: [
          {
            surface: 'henüz',
            morphemes: [{ text: 'henüz', type: 'root', gloss: 'ещё (только с отрицанием)' }],
          },
          {
            surface: 'gelmedi',
            morphemes: [
              { text: 'gel', type: 'root', gloss: 'приходить' },
              { text: 'me', type: 'negation', gloss: 'отрицание' },
              { text: 'di', type: 'affix', gloss: 'прош. время' },
            ],
          },
          {
            surface: 'birazdan',
            morphemes: [
              { text: 'biraz', type: 'root', gloss: 'немного' },
              { text: 'dan', type: 'affix', gloss: 'вскоре, через минуту' },
            ],
          },
        ],
      },
      {
        id: 'adv-ex4',
        tr: 'Bu metni dikkatle okuyup soruları cevaplayın.',
        ru: 'Внимательно прочитайте этот текст и ответьте на вопросы.',
        annotatedWords: [
          {
            surface: 'dikkatle',
            morphemes: [
              { text: 'dikkat', type: 'root', gloss: 'внимание' },
              { text: 'le', type: 'affix', gloss: 'с вниманием (внимательно)' },
            ],
          },
          {
            surface: 'okuyup',
            morphemes: [
              { text: 'oku', type: 'root', gloss: 'читать' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'up', type: 'affix', gloss: 'деепричастие («прочитав»)' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Наречия направления (içeri, dışarı, yukarı, aşağı) с падежом и без',
          explanation:
            'Когда слова içeri, dışarı, yukarı, aşağı, ileri, geri указывают направление («куда?»), они употребляются как наречия БЕЗ падежных аффиксов (içeri gir — войди внутрь). Если добавить падеж (içeriye, dışarıda), они ведут себя как существительные места.',
          exampleTr: 'Lütfen içeri girin! vs İçeride kimse yok.',
          exampleRu: 'Пожалуйста, заходите внутрь! vs Внутри никого нет.',
          relatedTopicId: 'spatial-nouns',
        },
        {
          title: 'Позиция наречия степени çok и прилагательного',
          explanation:
            'Слово çok перед глаголом означает «очень / много» (çok çalıştım — много работал), а перед прилагательным или другим наречием — «очень» (çok hızlı — очень быстро). Если поставить iyi перед существительным — это прилагательное («хороший»), перед глаголом — наречие («хорошо»).',
          exampleTr: 'İyi bir arkadaş (прил.) vs Türkçe iyi konuşuyor (нареч.).',
          exampleRu: 'Хороший друг vs Он хорошо говорит по-турецки.',
          relatedTopicId: 'adjectives-comparison',
        },
      ],
    },
    miniCheck: [
      {
        id: 'adv-q1',
        prompt: 'Как правильно сказать «по-турецки» с помощью наречного аффикса -ca/-ce/-ça/-çe?',
        type: 'input',
        correctAnswer: 'Türkçe',
        acceptedAnswers: ['Türkçe', 'türkçe'],
        explanation: 'Основа Türk оканчивается на глухую k (Fıstıkçı Şahap), поэтому аффикс -ce оглушается в -çe: Türkçe.',
      },
      {
        id: 'adv-q2',
        prompt: 'Какое наречие времени требует обязательного отрицательного сказуемого в значении «ещё не»?',
        type: 'choice',
        options: ['hemen', 'birazdan', 'henüz', 'şimdi'],
        correctAnswer: 'henüz',
        explanation: 'Слово henüz («ещё / пока не») в турецком языке употребляется в связке с отрицательным глаголом: Henüz gelmedi.',
      },
      {
        id: 'adv-q3',
        prompt: 'Выберите верный вариант фразы «идите прямо» / «заходите внутрь» без лишнего падежа:',
        type: 'choice',
        options: ['İçeride girin', 'İçeri girin', 'İçeriden girin', 'İçerisi girin'],
        correctAnswer: 'İçeri girin',
        explanation: 'Наречие места içeri в чистом виде уже обозначает направление «внутрь» при глаголах движения.',
      },
      {
        id: 'adv-q4',
        prompt: 'Образуйте наречие «тихо, беззвучно» от прилагательного «sessiz» с помощью -ca/-ce:',
        type: 'input',
        correctAnswer: 'sessizce',
        acceptedAnswers: ['sessizce'],
        explanation: 'Конечная z — звонкая, гласная i — мягкая, поэтому прибавляем -ce: sessizce.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'numerals-time-dates',
    sectionId: 'pronouns-modifiers',
    titleRu: 'Числительные, дроби, время и даты',
    titleTr: 'Sayılar, Saatler ve Tarihler',
    level: 'A1',
    levels: ['A1', 'A2'],
    affixes: ['-(ı)ncı', '-(i)nci', '-(ş)ar', '-(ş)er', 'geçiyor', 'var', 'geçe', 'kala', 'buçuk', 'çeyrek'],
    summary:
      'Существительное после турецких числительных ВСЕГДА остаётся в единственном числе (beş elma, не *beş elmalar). Порядковые числительные образуются аффиксом -(I⁴)ncI⁴, разделительные («по сколько») — -(ş)Ar², а для обозначения времени различаются конструкции «который час» (var / geçiyor) и «во сколько» (kala / geçe).',
    formula: [
      { text: 'Число', type: 'root', gloss: 'количественное (bir, iki…)' },
      { text: '+ -(I⁴)ncI⁴ / -(ş)Ar²', type: 'affix', gloss: 'порядковое / разделительное' },
      { text: 'или Час + -(y)I⁴ geçiyor / -(y)A² var', type: 'affix', gloss: 'сколько сейчас времени' },
    ],
    conjugationTable: {
      affirmative: {
        'Количественное': [
          { text: 'üç', type: 'root', gloss: 'три' },
          { text: ' kitap', type: 'root', gloss: 'три книги (без -lar!)' },
        ],
        'Порядковое': [
          { text: 'ik', type: 'root', gloss: 'iki (два)' },
          { text: 'i', type: 'root', gloss: 'конечная гл. основы' },
          { text: 'nci', type: 'affix', gloss: 'второй (только -ncı/-nci!)' },
        ],
        'Разделительное': [
          { text: 'iki', type: 'root', gloss: 'два' },
          { text: 'ş', type: 'buffer', gloss: 'буфер ş после гласной' },
          { text: 'er', type: 'affix', gloss: 'по два' },
        ],
        'Дробь / Процент': [
          { text: 'yüz', type: 'root', gloss: 'сто' },
          { text: 'de', type: 'affix', gloss: 'местн. п.' },
          { text: ' yirmi', type: 'root', gloss: '20 процентов (20%)' },
        ],
        'Время (после пол.)': [
          { text: 'saat üçe on', type: 'root', gloss: 'без десяти три' },
          { text: ' var', type: 'affix', gloss: 'сейчас 2:50 (дат. п.)' },
        ],
        'Во сколько?': [
          { text: 'saat beşi on', type: 'root', gloss: 'в десять минут шестого' },
          { text: ' geçe', type: 'affix', gloss: 'во сколько (вин. п. + geçe)' },
        ],
      },
      negative: {
        'Количественное': [
          { text: 'beş', type: 'root', gloss: 'пять' },
          { text: ' kişi', type: 'root', gloss: 'человек' },
          { text: ' yok', type: 'negation', gloss: 'пяти человек нет' },
        ],
        'Порядковое': [
          { text: 'bir', type: 'root', gloss: 'один' },
          { text: 'inci', type: 'affix', gloss: 'первый' },
          { text: ' değil', type: 'negation', gloss: 'не первый' },
        ],
        'Разделительное': [
          { text: 'bir', type: 'root', gloss: 'один' },
          { text: 'er', type: 'affix', gloss: 'по одному' },
          { text: ' değil', type: 'negation', gloss: 'не по одному' },
        ],
        'Дробь / Процент': [
          { text: 'yüz', type: 'root', gloss: 'сто' },
          { text: 'de', type: 'affix', gloss: 'в' },
          { text: ' elli', type: 'root', gloss: 'пятьдесят' },
          { text: ' değil', type: 'negation', gloss: 'не 50%' },
        ],
        'Время (после пол.)': [
          { text: 'saat üç', type: 'root', gloss: 'три часа' },
          { text: ' değil', type: 'negation', gloss: 'ещё не три часа' },
        ],
        'Во сколько?': [
          { text: 'saat dokuz', type: 'root', gloss: 'девять' },
          { text: 'da', type: 'affix', gloss: 'в девять' },
          { text: ' değil', type: 'negation', gloss: 'не в девять' },
        ],
      },
      question: {
        'Количественное': [
          { text: 'kaç', type: 'question', gloss: 'сколько?' },
          { text: ' tane?', type: 'root', gloss: 'сколько штук?' },
        ],
        'Порядковое': [
          { text: 'kaç', type: 'question', gloss: 'который' },
          { text: 'ıncı', type: 'affix', gloss: 'по счёту' },
          { text: ' kat?', type: 'root', gloss: 'на каком этаже?' },
        ],
        'Разделительное': [
          { text: 'kaç', type: 'question', gloss: 'по сколько' },
          { text: 'ar', type: 'affix', gloss: 'разделительный' },
          { text: ' lira?', type: 'root', gloss: 'по сколько лир?' },
        ],
        'Дробь / Процент': [
          { text: 'yüz', type: 'root', gloss: 'сто' },
          { text: 'de', type: 'affix', gloss: 'в' },
          { text: ' kaç?', type: 'question', gloss: 'сколько процентов?' },
        ],
        'Время (после пол.)': [
          { text: 'saat', type: 'root', gloss: 'час' },
          { text: ' kaç?', type: 'question', gloss: 'который час?' },
        ],
        'Во сколько?': [
          { text: 'saat kaç', type: 'question', gloss: 'в котором часу' },
          { text: 'ta?', type: 'affix', gloss: 'во сколько?' },
        ],
      },
    },
    examples: [
      {
        id: 'num-ex1',
        tr: 'Dersimiz saat dokuzu çeyrek geçe başlıyor.',
        ru: 'Наш урок начинается в четверть десятого (09:15).',
        annotatedWords: [
          {
            surface: 'Dersimiz',
            morphemes: [
              { text: 'Ders', type: 'root', gloss: 'урок' },
              { text: 'imiz', type: 'person', gloss: 'наш' },
            ],
          },
          {
            surface: 'dokuzu',
            morphemes: [
              { text: 'dokuz', type: 'root', gloss: 'девять' },
              { text: 'u', type: 'affix', gloss: 'вин. падеж для geçe' },
            ],
          },
          {
            surface: 'geçe',
            morphemes: [
              { text: 'geç', type: 'root', gloss: 'проходить' },
              { text: 'e', type: 'affix', gloss: 'в ... минут после часа' },
            ],
          },
        ],
      },
      {
        id: 'num-ex2',
        tr: 'Şimdi saat ikiye yirmi var, otobüs birazdan gelir.',
        ru: 'Сейчас без двадцати два (01:40), автобус скоро придёт.',
        annotatedWords: [
          {
            surface: 'ikiye',
            morphemes: [
              { text: 'iki', type: 'root', gloss: 'два' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'e', type: 'affix', gloss: 'дат. падеж для var/kala' },
            ],
          },
          {
            surface: 'var',
            morphemes: [{ text: 'var', type: 'affix', gloss: 'осталось («без...»)' }],
          },
        ],
      },
      {
        id: 'num-ex3',
        tr: 'Dördüncü kattaki dairede ikişer oda boş kaldı.',
        ru: 'В квартире на четвёртом этаже свободными остались по две комнаты.',
        annotatedWords: [
          {
            surface: 'Dördüncü',
            morphemes: [
              { text: 'Dörd', type: 'root', gloss: 'dört (четыре, t→d)' },
              { text: 'üncü', type: 'affix', gloss: 'порядковое (-üncü)' },
            ],
          },
          {
            surface: 'ikişer',
            morphemes: [
              { text: 'iki', type: 'root', gloss: 'два' },
              { text: 'ş', type: 'buffer', gloss: 'буфер ş' },
              { text: 'er', type: 'affix', gloss: 'по два' },
            ],
          },
        ],
      },
      {
        id: 'num-ex4',
        tr: 'Cumhuriyet 29 Ekim 1923 tarihinde ilan edildi.',
        ru: 'Республика была провозглашена 29 октября 1923 года.',
        annotatedWords: [
          {
            surface: 'tarihinde',
            morphemes: [
              { text: 'tarih', type: 'root', gloss: 'дата' },
              { text: 'i', type: 'person', gloss: 'принадлежность (изафет)' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'de', type: 'affix', gloss: 'местн. падеж (в дату)' },
            ],
          },
          {
            surface: 'edildi',
            morphemes: [
              { text: 'ed', type: 'root', gloss: 'etmek (делать, t→d)' },
              { text: 'il', type: 'affix', gloss: 'пассивный залог' },
              { text: 'di', type: 'affix', gloss: 'прош. время' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Который час? (geçiyor / var) vs Во сколько? (geçe / kala)',
          explanation:
            'Когда вы просто называете текущее время, ставьте в конце geçiyor («прошло») или var («осталось»). Когда отвечаете на вопрос «во сколько?» (saat kaçta?), меняйте их на деепричастия geçe и kala — аффикс -da уже НЕ добавляется!',
          exampleTr: 'Saat üçü on geçiyor (03:10) vs Saat üçü on geçe gel (в 03:10).',
          exampleRu: 'Сейчас десять минут четвёртого vs Приходи в десять минут четвёртого.',
          relatedTopicId: 'six-cases',
        },
        {
          title: 'Существительные после чисел и слова yarım vs buçuk',
          explanation:
            'После чисел и слова kaç не ставьте -lar/-ler (üç kitap, kaç kişi?). Для дроби 0,5 перед существительным используется yarım (yarım saat — полчаса), а с часами — только buçuk (saat iki buçuk — половина третьего).',
          exampleTr: 'Yarım elma yedim. Saat dört buçukta çıkıyoruz.',
          exampleRu: 'Я съел(а) пол-яблока. Мы выходим в половине пятого.',
          relatedTopicId: 'plural-lar-ler',
        },
      ],
    },
    miniCheck: [
      {
        id: 'num-q1',
        prompt: 'Как образовать порядковое числительное «четвёртый» от dört (четыре)?',
        type: 'input',
        correctAnswer: 'dördüncü',
        acceptedAnswers: ['dördüncü', '4.'],
        explanation: 'Конечная t озвончается в d перед гласным аффиксом -üncü: dört + üncü → dördüncü.',
      },
      {
        id: 'num-q2',
        prompt: 'Выберите правильный перевод фразы «Сейчас 07:45 (без четверти восемь)»:',
        type: 'choice',
        options: [
          'Saat sekize çeyrek kala',
          'Saat sekize çeyrek var',
          'Saat yediyi çeyrek geçiyor',
          'Saat sekizi çeyrek var',
        ],
        correctAnswer: 'Saat sekize çeyrek var',
        explanation: 'Для ответа на вопрос «который час?» до следующего часа используется дательный падеж + var: sekize çeyrek var.',
      },
      {
        id: 'num-q3',
        prompt: 'Как сказать «по пять лир» от beş (пять)?',
        type: 'input',
        correctAnswer: 'beşer',
        acceptedAnswers: ['beşer'],
        explanation: 'Разделительные числительные от слов на согласную образуются с -ar/-er без буфера ş: beş + er → beşer.',
      },
      {
        id: 'num-q4',
        prompt: 'В каком варианте словосочетание «пять студентов» написано грамматически верно?',
        type: 'choice',
        options: ['beş öğrenciler', 'beş öğrenci', 'beşinci öğrenciler', 'beşer öğrenciler'],
        correctAnswer: 'beş öğrenci',
        explanation: 'После количественных числительных в турецком языке существительное всегда стоит в единственном числе.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'verb-stem-negation-question',
    sectionId: 'verbs-basic',
    titleRu: 'Основа глагола, отрицание и вопрос',
    titleTr: 'Fiil Kökü, Olumsuzluk ve Soru',
    level: 'A1',
    affixes: ['-mak', '-mek', '-ma', '-me', 'mı', 'mi', 'mu', 'mü'],
    summary:
      'В словарях турецкий глагол даётся в форме инфинитива с окончанием -mak или -mek (yazmak, gelmek). Чтобы получить чистую основу для спряжения, отбросьте -mak/-mek. Отрицание всегда встаёт сразу после основы через безударный аффикс -ma/-me, а общий вопрос строится отдельной частицей mı/mi/mu/mü по гармонии на 4.',
    formula: [
      { text: 'Основа глагола', type: 'root', gloss: 'инфинитив без -mak/-mek' },
      { text: '+ (-mA²)', type: 'negation', gloss: 'отрицание (-ma/-me, перед -yor → -m)' },
      { text: '+ Время', type: 'affix', gloss: 'показатель времени/наклонения' },
      { text: '+ Лицо / mı?', type: 'question', gloss: 'раздельная вопросительная частица' },
    ],
    conjugationTable: {
      affirmative: {
        ben: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'di', type: 'affix', gloss: 'прош. время' },
          { text: 'm', type: 'person', gloss: 'я пришёл' },
        ],
        sen: [
          { text: 'yaz', type: 'root', gloss: 'писать' },
          { text: 'dı', type: 'affix', gloss: 'прош. время' },
          { text: 'n', type: 'person', gloss: 'ты написал' },
        ],
        o: [
          { text: 'oku', type: 'root', gloss: 'читать' },
          { text: 'du', type: 'affix', gloss: 'он/она прочитал(а)' },
        ],
        biz: [
          { text: 'gör', type: 'root', gloss: 'видеть' },
          { text: 'dü', type: 'affix', gloss: 'прош. время' },
          { text: 'k', type: 'person', gloss: 'мы увидели' },
        ],
        siz: [
          { text: 'al', type: 'root', gloss: 'брать' },
          { text: 'dı', type: 'affix', gloss: 'прош. время' },
          { text: 'nız', type: 'person', gloss: 'вы взяли' },
        ],
        onlar: [
          { text: 'git', type: 'root', gloss: 'идти' },
          { text: 'ti', type: 'affix', gloss: 'прош. время (оглуш.)' },
          { text: 'ler', type: 'person', gloss: 'они ушли' },
        ],
      },
      negative: {
        ben: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'me', type: 'negation', gloss: 'отрицание' },
          { text: 'di', type: 'affix', gloss: 'прош. время' },
          { text: 'm', type: 'person', gloss: 'я не пришёл' },
        ],
        sen: [
          { text: 'yaz', type: 'root', gloss: 'писать' },
          { text: 'ma', type: 'negation', gloss: 'отрицание' },
          { text: 'dı', type: 'affix', gloss: 'прош. время' },
          { text: 'n', type: 'person', gloss: 'ты не написал' },
        ],
        o: [
          { text: 'oku', type: 'root', gloss: 'читать' },
          { text: 'ma', type: 'negation', gloss: 'отрицание' },
          { text: 'dı', type: 'affix', gloss: 'он не прочитал' },
        ],
        biz: [
          { text: 'gör', type: 'root', gloss: 'видеть' },
          { text: 'me', type: 'negation', gloss: 'отрицание' },
          { text: 'di', type: 'affix', gloss: 'прош. время' },
          { text: 'k', type: 'person', gloss: 'мы не увидели' },
        ],
        siz: [
          { text: 'al', type: 'root', gloss: 'брать' },
          { text: 'ma', type: 'negation', gloss: 'отрицание' },
          { text: 'dı', type: 'affix', gloss: 'прош. время' },
          { text: 'nız', type: 'person', gloss: 'вы не взяли' },
        ],
        onlar: [
          { text: 'git', type: 'root', gloss: 'идти' },
          { text: 'me', type: 'negation', gloss: 'отрицание' },
          { text: 'di', type: 'affix', gloss: 'прош. время' },
          { text: 'ler', type: 'person', gloss: 'они не ушли' },
        ],
      },
      question: {
        ben: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'di', type: 'affix', gloss: 'прош. время' },
          { text: 'm', type: 'person', gloss: 'я' },
          { text: ' mi?', type: 'question', gloss: 'пришёл ли я?' },
        ],
        sen: [
          { text: 'yaz', type: 'root', gloss: 'писать' },
          { text: 'dı', type: 'affix', gloss: 'прош. время' },
          { text: 'n', type: 'person', gloss: 'ты' },
          { text: ' mı?', type: 'question', gloss: 'написал ли ты?' },
        ],
        o: [
          { text: 'oku', type: 'root', gloss: 'читать' },
          { text: 'du', type: 'affix', gloss: 'прош. время' },
          { text: ' mu?', type: 'question', gloss: 'прочитал ли он?' },
        ],
        biz: [
          { text: 'gör', type: 'root', gloss: 'видеть' },
          { text: 'dü', type: 'affix', gloss: 'прош. время' },
          { text: 'k', type: 'person', gloss: 'мы' },
          { text: ' mü?', type: 'question', gloss: 'увидели ли мы?' },
        ],
        siz: [
          { text: 'al', type: 'root', gloss: 'брать' },
          { text: 'dı', type: 'affix', gloss: 'прош. время' },
          { text: 'nız', type: 'person', gloss: 'вы' },
          { text: ' mı?', type: 'question', gloss: 'взяли ли вы?' },
        ],
        onlar: [
          { text: 'git', type: 'root', gloss: 'идти' },
          { text: 'ti', type: 'affix', gloss: 'прош. время' },
          { text: 'ler', type: 'person', gloss: 'они' },
          { text: ' mi?', type: 'question', gloss: 'ушли ли они?' },
        ],
      },
      negativeQuestion: {
        ben: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'di', type: 'affix', gloss: 'прош. время' },
          { text: 'm', type: 'person', gloss: 'я' },
          { text: ' mi?', type: 'question', gloss: 'разве я не пришёл?' },
        ],
        sen: [
          { text: 'yaz', type: 'root', gloss: 'писать' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dı', type: 'affix', gloss: 'прош. время' },
          { text: 'n', type: 'person', gloss: 'ты' },
          { text: ' mı?', type: 'question', gloss: 'ты не написал?' },
        ],
        o: [
          { text: 'oku', type: 'root', gloss: 'читать' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dı', type: 'affix', gloss: 'прош. время' },
          { text: ' mı?', type: 'question', gloss: 'он не прочитал?' },
        ],
        biz: [
          { text: 'gör', type: 'root', gloss: 'видеть' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'di', type: 'affix', gloss: 'прош. время' },
          { text: 'k', type: 'person', gloss: 'мы' },
          { text: ' mü?', type: 'question', gloss: 'разве мы не увидели?' },
        ],
        siz: [
          { text: 'al', type: 'root', gloss: 'брать' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dı', type: 'affix', gloss: 'прош. время' },
          { text: 'nız', type: 'person', gloss: 'вы' },
          { text: ' mı?', type: 'question', gloss: 'вы не взяли?' },
        ],
        onlar: [
          { text: 'git', type: 'root', gloss: 'идти' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'di', type: 'affix', gloss: 'прош. время' },
          { text: 'ler', type: 'person', gloss: 'они' },
          { text: ' mi?', type: 'question', gloss: 'они не ушли?' },
        ],
      },
    },
    examples: [
      {
        id: 'vsnq-ex1',
        tr: 'Bugün kahve içmek istemiyorum.',
        ru: 'Сегодня я не хочу пить кофе.',
        annotatedWords: [
          {
            surface: 'içmek',
            morphemes: [
              { text: 'iç', type: 'root', gloss: 'пить (основа)' },
              { text: 'mek', type: 'affix', gloss: 'инфинитив' },
            ],
          },
          {
            surface: 'istemiyorum',
            morphemes: [
              { text: 'iste', type: 'root', gloss: 'хотеть' },
              { text: 'm', type: 'negation', gloss: 'отрицание (-me усечено)' },
              { text: 'iyor', type: 'affix', gloss: 'наст. длит. время' },
              { text: 'um', type: 'person', gloss: '1 л. ед. ч.' },
            ],
          },
        ],
      },
      {
        id: 'vsnq-ex2',
        tr: 'Bu filmi daha önce izledin mi?',
        ru: 'Ты уже смотрел(а) этот фильм раньше?',
        annotatedWords: [
          {
            surface: 'izledin',
            morphemes: [
              { text: 'izle', type: 'root', gloss: 'смотреть' },
              { text: 'di', type: 'affix', gloss: 'прош. время' },
              { text: 'n', type: 'person', gloss: '2 л. ед. ч.' },
            ],
          },
          {
            surface: 'mi',
            morphemes: [{ text: 'mi', type: 'question', gloss: 'вопросительная частица' }],
          },
        ],
      },
      {
        id: 'vsnq-ex3',
        tr: 'Ödevini hâlâ bitirmedin mi?',
        ru: 'Ты всё ещё не закончил(а) своё домашнее задание?',
        annotatedWords: [
          {
            surface: 'Ödevini',
            morphemes: [
              { text: 'Ödev', type: 'root', gloss: 'домашнее задание' },
              { text: 'in', type: 'person', gloss: 'твоё' },
              { text: 'i', type: 'affix', gloss: 'вин. падеж' },
            ],
          },
          {
            surface: 'bitirmedin',
            morphemes: [
              { text: 'bitir', type: 'root', gloss: 'заканчивать' },
              { text: 'me', type: 'negation', gloss: 'отрицание' },
              { text: 'di', type: 'affix', gloss: 'прош. время' },
              { text: 'n', type: 'person', gloss: '2 л. ед. ч.' },
            ],
          },
          {
            surface: 'mi',
            morphemes: [{ text: 'mi', type: 'question', gloss: 'вопросительная частица' }],
          },
        ],
      },
      {
        id: 'vsnq-ex4',
        tr: 'Akşam bizimle sinemaya geliyor musunuz?',
        ru: 'Вы идёте с нами вечером в кино?',
        annotatedWords: [
          {
            surface: 'sinemaya',
            morphemes: [
              { text: 'sinema', type: 'root', gloss: 'кинотеатр' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'a', type: 'affix', gloss: 'дат. падеж (куда?)' },
            ],
          },
          {
            surface: 'geliyor',
            morphemes: [
              { text: 'gel', type: 'root', gloss: 'идти/приходить' },
              { text: 'iyor', type: 'affix', gloss: 'наст. длит. время' },
            ],
          },
          {
            surface: 'musunuz',
            morphemes: [
              { text: 'mu', type: 'question', gloss: 'вопрос (после o → u)' },
              { text: 'sunuz', type: 'person', gloss: '2 л. мн. ч. (вы)' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Вопросительная частица mı пишется ВСЕГДА раздельно, но берёт личные окончания',
          explanation:
            'Частица mı/mi/mu/mü всегда отделяется пробелом от глагола. При этом в настоящем, широком и будущем времени личные окончания переходят к частице (geliyor musun?), а в прошедшем на -dı — остаются на глаголе (geldin mi?).',
          exampleTr: 'Gidiyor musun? vs Gittin mi?',
          exampleRu: 'Ты идёшь? vs Ты ходил?',
          relatedTopicId: 'simdiki-zaman',
        },
        {
          title: 'Постановка вопроса: если есть вопросительное слово, частица mı НЕ нужна',
          explanation:
            'Частица mı/mi/mu/mü используется только для общих вопросов («да/нет»). Если в предложении уже есть ne, kim, nerede, ne zaman, nasıl, kaç, частицу mı ставить нельзя!',
          exampleTr: 'Ne zaman geldin? (НЕ *Ne zaman geldin mi?)',
          exampleRu: 'Когда ты пришёл?',
          relatedTopicId: 'word-order-sov',
        },
      ],
    },
    miniCheck: [
      {
        id: 'vsnq-q1',
        prompt: 'Выделите чистую основу глагола от инфинитива «beklemek» (ждать):',
        type: 'input',
        correctAnswer: 'bekle',
        acceptedAnswers: ['bekle'],
        explanation: 'Инфинитив оканчивается на -mak/-mek. Отбросив -mek, получаем основу bekle.',
      },
      {
        id: 'vsnq-q2',
        prompt: 'Выберите правильную форму отрицания от «okuduk» («мы прочитали» → «мы не прочитали»):',
        type: 'choice',
        options: ['okumadık', 'okumedik', 'okumudık', 'okudumadık'],
        correctAnswer: 'okumadık',
        explanation: 'Аффикс отрицания -ma/-me ставится перед показателем времени и следует гармонии на 2: oku + ma + dı + k → okumadık.',
      },
      {
        id: 'vsnq-q3',
        prompt: 'Дополните общий вопрос в прошедшем времени: Siz bu kitabı okudunuz ___?',
        type: 'input',
        correctAnswer: 'mu',
        acceptedAnswers: ['mu', 'mu?'],
        explanation: 'Последняя гласная слова okudunuz — твёрдая огубленная u, значит, по гармонии на 4 выбираем mu.',
      },
      {
        id: 'vsnq-q4',
        prompt: 'В каком предложении допущена грамматическая ошибка?',
        type: 'choice',
        options: [
          'Dün akşam eve geç geldin mi?',
          'Yarın nereye gidiyorsun?',
          'Bugün kaç saat çalıştın mı?',
          'Kahveni şekersiz mi içiyorsun?',
        ],
        correctAnswer: 'Bugün kaç saat çalıştın mı?',
        explanation: 'В предложении уже есть вопросительное слово kaç («сколько»), поэтому вопросительная частица mı здесь лишняя.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'imperative-optative',
    sectionId: 'verbs-basic',
    titleRu: 'Повелительное и желательное наклонения',
    titleTr: 'Emir ve İstek Kipi',
    level: 'A1',
    levels: ['A1', 'A2'],
    affixes: ['-sın', '-sin', '-sun', '-sün', '-(y)ın', '-(y)ınız', '-(y)ayım', '-(y)eyim', '-(y)alım', '-(y)elim'],
    summary:
      'Повелительное наклонение (Emir kipi) выражает приказ, совет или просьбу ко 2-му лицу (gel — приходи, gelin — приходите, geliniz — вежливая форма) и 3-му лицу (gelsin — пусть придёт). Для 1-го лица («давай я сделаю / давайте сделаем») в турецком языке вместо императива используется желательное наклонение (İstek kipi) с аффиксом -(y)a/-(y)e: gideyim, gidelim.',
    formula: [
      { text: 'Основа глагола', type: 'root', gloss: 'глагол' },
      { text: '+ (-mA²)', type: 'negation', gloss: 'отрицание (-ma/-me)' },
      { text: '+ -(y)A² / Ø', type: 'affix', gloss: 'желательное (1 л.) / императив (2–3 л.)' },
      { text: '+ -yIm / -lIm / -(y)In / -sIn', type: 'person', gloss: 'личное окончание' },
    ],
    conjugationTable: {
      affirmative: {
        ben: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'a', type: 'affix', gloss: 'желат. накл.' },
          { text: 'yım', type: 'person', gloss: 'сделаю-ка я' },
        ],
        sen: [
          { text: 'yap', type: 'root', gloss: 'делай! (чистая основа)' },
        ],
        o: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'sın', type: 'person', gloss: 'пусть делает (3 л.)' },
        ],
        biz: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'a', type: 'affix', gloss: 'желат. накл.' },
          { text: 'lım', type: 'person', gloss: 'давайте сделаем' },
        ],
        siz: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ın', type: 'person', gloss: 'делайте! (вежл. -ınız)' },
        ],
        onlar: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'sınlar', type: 'person', gloss: 'пусть делают' },
        ],
      },
      negative: {
        ben: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ma', type: 'negation', gloss: 'отрицание' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'ayım', type: 'person', gloss: 'не буду делать' },
        ],
        sen: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ma', type: 'negation', gloss: 'не делай!' },
        ],
        o: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ma', type: 'negation', gloss: 'отрицание' },
          { text: 'sın', type: 'person', gloss: 'пусть не делает' },
        ],
        biz: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ma', type: 'negation', gloss: 'отрицание' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'alım', type: 'person', gloss: 'давайте не будем делать' },
        ],
        siz: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ma', type: 'negation', gloss: 'отрицание' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'ın', type: 'person', gloss: 'не делайте!' },
        ],
        onlar: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ma', type: 'negation', gloss: 'отрицание' },
          { text: 'sınlar', type: 'person', gloss: 'пусть не делают' },
        ],
      },
      question: {
        ben: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'a', type: 'affix', gloss: 'желат. накл.' },
          { text: 'yım', type: 'person', gloss: 'я' },
          { text: ' mı?', type: 'question', gloss: 'мне сделать?' },
        ],
        sen: [
          { text: '—', type: 'root', gloss: 'у 2 л. императива вопроса нет' },
        ],
        o: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'sın', type: 'person', gloss: 'он' },
          { text: ' mı?', type: 'question', gloss: 'пусть он сделает?' },
        ],
        biz: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'a', type: 'affix', gloss: 'желат. накл.' },
          { text: 'lım', type: 'person', gloss: 'мы' },
          { text: ' mı?', type: 'question', gloss: 'сделаем?' },
        ],
        siz: [
          { text: '—', type: 'root', gloss: 'у 2 л. императива вопроса нет' },
        ],
        onlar: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'sınlar', type: 'person', gloss: 'они' },
          { text: ' mı?', type: 'question', gloss: 'пусть они сделают?' },
        ],
      },
      negativeQuestion: {
        ben: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'ayım', type: 'person', gloss: 'я' },
          { text: ' mı?', type: 'question', gloss: 'мне не делать?' },
        ],
        sen: [
          { text: '—', type: 'root', gloss: 'нет формы' },
        ],
        o: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'sın', type: 'person', gloss: 'он' },
          { text: ' mı?', type: 'question', gloss: 'пусть он не делает?' },
        ],
        biz: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'alım', type: 'person', gloss: 'мы' },
          { text: ' mı?', type: 'question', gloss: 'не делать ли нам?' },
        ],
        siz: [
          { text: '—', type: 'root', gloss: 'нет формы' },
        ],
        onlar: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'sınlar', type: 'person', gloss: 'они' },
          { text: ' mı?', type: 'question', gloss: 'пусть не делают?' },
        ],
      },
    },
    examples: [
      {
        id: 'imp-ex1',
        tr: 'Hava çok güzel, haydi sahile gidelim!',
        ru: 'Погода прекрасная, давай пойдём на набережную!',
        annotatedWords: [
          {
            surface: 'sahile',
            morphemes: [
              { text: 'sahil', type: 'root', gloss: 'берег/набережная' },
              { text: 'e', type: 'affix', gloss: 'дат. падеж (куда?)' },
            ],
          },
          {
            surface: 'gidelim',
            morphemes: [
              { text: 'gid', type: 'root', gloss: 'gitmek (идти, t→d)' },
              { text: 'e', type: 'affix', gloss: 'желат. накл.' },
              { text: 'lim', type: 'person', gloss: 'мы (давайте пойдём)' },
            ],
          },
        ],
      },
      {
        id: 'imp-ex2',
        tr: 'İstersen pencereyi açayım, oda biraz havalansın.',
        ru: 'Если хочешь, я открою окно, пусть комната немного проветрится.',
        annotatedWords: [
          {
            surface: 'açayım',
            morphemes: [
              { text: 'aç', type: 'root', gloss: 'открывать' },
              { text: 'a', type: 'affix', gloss: 'желат. накл.' },
              { text: 'yım', type: 'person', gloss: '1 л. ед. ч. (давай открою)' },
            ],
          },
          {
            surface: 'havalansın',
            morphemes: [
              { text: 'havalan', type: 'root', gloss: 'проветриваться' },
              { text: 'sın', type: 'person', gloss: 'повел. 3 л. («пусть...»)' },
            ],
          },
        ],
      },
      {
        id: 'imp-ex3',
        tr: 'Lütfen sıraya geçiniz ve kimliğinizi gösteriniz.',
        ru: 'Пожалуйста, пройдите в очередь и предъявите удостоверение личности.',
        annotatedWords: [
          {
            surface: 'geçiniz',
            morphemes: [
              { text: 'geç', type: 'root', gloss: 'проходить' },
              { text: 'iniz', type: 'person', gloss: 'вежливый императив (2 л. мн. ч.)' },
            ],
          },
          {
            surface: 'gösteriniz',
            morphemes: [
              { text: 'göster', type: 'root', gloss: 'показывать' },
              { text: 'iniz', type: 'person', gloss: 'вежливый императив' },
            ],
          },
        ],
      },
      {
        id: 'imp-ex4',
        tr: 'Geç kalmayın, otobüs saat sekizde kalkıyor.',
        ru: 'Не опаздывайте, автобус отправляется в восемь часов.',
        annotatedWords: [
          {
            surface: 'kalmayın',
            morphemes: [
              { text: 'kal', type: 'root', gloss: 'оставаться (geç kalmak — опаздывать)' },
              { text: 'ma', type: 'negation', gloss: 'отрицание' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'ın', type: 'person', gloss: 'императив (вы)' },
            ],
          },
          {
            surface: 'sekizde',
            morphemes: [
              { text: 'sekiz', type: 'root', gloss: 'восемь' },
              { text: 'de', type: 'affix', gloss: 'местн. падеж (в 8)' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Озвончение t → d в gitmek, etmek, tatmak при желательном наклонении',
          explanation:
            'Перед гласным аффиксом -(y)a/-(y)e у глаголов gitmek, etmek, tatmak, gütmek конечная t озвончается в d: gidelim («пойдёмте»), edeyim («сделаю-ка я»). В повелительном наклонении на согласную этого не происходит: git! gitsin!',
          exampleTr: 'Şimdi git, yarın birlikte gidelim.',
          exampleRu: 'Сейчас иди, а завтра пойдём вместе.',
          relatedTopicId: 'consonant-rules',
        },
        {
          title: 'Императив 3-го лица (-sın) vs личное окончание именного сказуемого (-sın)',
          explanation:
            'Один и тот же аффикс -sın/-sin после глагольной основы означает повелительное наклонение 3-го лица («пусть он сделает»: gelsin), а после имени или времени — 2-е лицо ед. ч. («ты»: doktor-sun, geliyorsun).',
          exampleTr: 'Ahmet gelsin (пусть придёт) vs Sen çok iyi bir doktorsun (ты врач).',
          exampleRu: 'Пусть Ахмет придёт vs Ты очень хороший врач.',
          relatedTopicId: 'nominal-predicate-ek-fiil',
        },
      ],
    },
    miniCheck: [
      {
        id: 'imp-q1',
        prompt: 'Как перевести фразу «Давайте выпьем кофе!» (içmek — пить)?',
        type: 'choice',
        options: ['Kahve için!', 'Kahve içelim!', 'Kahve içsin!', 'Kahve içeyim!'],
        correctAnswer: 'Kahve içelim!',
        explanation: 'Приглашение к совместному действию («давайте…») выражается желательным наклонением 1-го лица мн. ч. -(y)alım/-(y)elim: içelim.',
      },
      {
        id: 'imp-q2',
        prompt: 'Образуйте форму желательного наклонения 1-го лица ед. ч. от глагола «beklemek» (подождать-ка мне / подождать мне?):',
        type: 'input',
        correctAnswer: 'bekleyeyim',
        acceptedAnswers: ['bekleyeyim', 'bekleyeyim mi', 'bekleyeyim mi?'],
        explanation: 'Основа bekle оканчивается на гласную e, поэтому перед -eyim ставится буферная согласная y: bekle + y + eyim → bekleyeyim.',
      },
      {
        id: 'imp-q3',
        prompt: 'Как будет «Не забудьте!» (от unutmak — забывать, обращение на «вы»)?',
        type: 'input',
        correctAnswer: 'unutmayın',
        acceptedAnswers: ['unutmayın', 'unutmayınız', 'Unutmayın', 'Unutmayınız'],
        explanation: 'К основе unut прибавляется отрицание -ma, буфер y и личное окончание 2-го лица мн. ч. -ın (или вежливое -ınız): unutmayın.',
      },
      {
        id: 'imp-q4',
        prompt: 'Что означает форма «Beklesinler»?',
        type: 'choice',
        options: ['Подождите!', 'Давайте подождём!', 'Пусть они подождут', 'Вы ждёте?'],
        correctAnswer: 'Пусть они подождут',
        explanation: 'Аффикс -sınlar/-sinler у глагольной основы образует повелительное наклонение 3-го лица мн. ч. («пусть они…»).',
      },
    ],
    isDraft: false,
  },

  {
    id: 'aspectual-verbs',
    sectionId: 'modality-complex-tenses',
    titleRu: 'Оттенки действия (-mekte, -ıp durmak, -egelmek, -evermek)',
    titleTr: 'Sürerlik, Tezlik ve Yaklaşma Fiilleri',
    level: 'B2',
    levels: ['B2', 'C1'],
    affixes: ['-makta', '-mekte', '-ıp durmak', '-agelmek', '-egelmek', '-ıvermek', '-ivermek', '-ayazmak'],
    summary:
      'Помимо базовых времён, в турецком языке оттенки протекания действия передаются формой -makta/-mekte (книжный/официальный процесс, аналогичный -yor) и составными глаголами: деепричастие на -(y)ı/-(y)a + вспомогательный глагол. Так выражаются стремительность или внезапность (-ıvermek), длительность или традиция (-agelmek, -ekalmak, -edurmak), повторяемость (-ıp durmak) и действие «чуть было не…» (-ayazmak).',
    formula: [
      { text: 'Основа глагола', type: 'root', gloss: 'смысловой глагол' },
      { text: '+ -(y)I⁴ / -(y)A² / -mAktA', type: 'affix', gloss: 'деепричастная связка или форма процесса' },
      { text: '+ vermek / gelmek / kalmak / durmak', type: 'root', gloss: 'модификатор способа действия' },
      { text: '+ Время + Лицо', type: 'person', gloss: 'спряжение вспомогательного глагола' },
    ],
    conjugationTable: {
      affirmative: {
        'Процесс (-mekte)': [
          { text: 'geliş', type: 'root', gloss: 'развиваться' },
          { text: 'mekte', type: 'affix', gloss: 'длительный процесс (офиц.)' },
          { text: 'dir', type: 'person', gloss: 'связка факта (3 л.)' },
        ],
        'Быстрота (-ıvermek)': [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ı', type: 'affix', gloss: 'связка I⁴' },
          { text: 'ver', type: 'root', gloss: 'быстро/легко сделать' },
          { text: 'di', type: 'affix', gloss: 'сразу сделал' },
        ],
        'Традиция (-egelmek)': [
          { text: 'sür', type: 'root', gloss: 'длиться' },
          { text: 'e', type: 'affix', gloss: 'связка A²' },
          { text: 'gel', type: 'root', gloss: 'продолжаться издавна' },
          { text: 'miş', type: 'affix', gloss: 'издавна тянется' },
        ],
        'Непрерывность (-ekalmak)': [
          { text: 'bak', type: 'root', gloss: 'смотреть' },
          { text: 'a', type: 'affix', gloss: 'связка A²' },
          { text: 'kal', type: 'root', gloss: 'застыть в действии' },
          { text: 'dı', type: 'affix', gloss: 'замер, глядя' },
        ],
        'Повтор (-ıp durmak)': [
          { text: 'sor', type: 'root', gloss: 'спрашивать' },
          { text: 'up', type: 'affix', gloss: 'деепричастие' },
          { text: ' dur', type: 'root', gloss: 'вспом. глагол' },
          { text: 'uyor', type: 'affix', gloss: 'без конца спрашивает' },
        ],
        'Почти (-ayazmak)': [
          { text: 'düş', type: 'root', gloss: 'падать' },
          { text: 'e', type: 'affix', gloss: 'связка A²' },
          { text: 'yaz', type: 'root', gloss: 'чуть было не…' },
          { text: 'dı', type: 'affix', gloss: 'чуть не упал' },
        ],
      },
      negative: {
        'Процесс (-mekte)': [
          { text: 'geliş', type: 'root', gloss: 'развиваться' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'mekte', type: 'affix', gloss: 'не развивается' },
          { text: 'dir', type: 'person', gloss: 'связка' },
        ],
        'Быстрота (-ıvermek)': [
          { text: 'git', type: 'root', gloss: 'уходить' },
          { text: 'me', type: 'negation', gloss: 'отрицание' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'iver', type: 'root', gloss: 'взять и не уйти' },
          { text: 'di', type: 'affix', gloss: 'прош. время' },
        ],
        'Традиция (-egelmek)': [
          { text: 'sür', type: 'root', gloss: 'длиться' },
          { text: 'e', type: 'affix', gloss: 'связка' },
          { text: 'gel', type: 'root', gloss: 'продолжаться' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'miş', type: 'affix', gloss: 'не продолжалось' },
        ],
        'Непрерывность (-ekalmak)': [
          { text: 'şaş', type: 'root', gloss: 'удивляться' },
          { text: 'a', type: 'affix', gloss: 'связка' },
          { text: 'kal', type: 'root', gloss: 'застыть' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dı', type: 'affix', gloss: 'не замер от удивления' },
        ],
        'Повтор (-ıp durmak)': [
          { text: 'ağla', type: 'root', gloss: 'плакать' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'ıp dur', type: 'affix', gloss: 'беспрестанно' },
          { text: 'ma', type: 'negation', gloss: 'хватит без конца плакать!' },
        ],
        'Почти (-ayazmak)': [
          { text: 'öl', type: 'root', gloss: 'умереть' },
          { text: 'e', type: 'affix', gloss: 'связка' },
          { text: 'yaz', type: 'root', gloss: 'чуть не' },
          { text: 'ma', type: 'negation', gloss: 'редк. отриц.' },
          { text: 'dı', type: 'affix', gloss: 'прош. время' },
        ],
      },
      question: {
        'Процесс (-mekte)': [
          { text: 'çalış', type: 'root', gloss: 'работать' },
          { text: 'makta', type: 'affix', gloss: 'в процессе' },
          { text: ' mı', type: 'question', gloss: 'ли' },
          { text: 'sınız?', type: 'person', gloss: 'вы работаете?' },
        ],
        'Быстрота (-ıvermek)': [
          { text: 'uzat', type: 'root', gloss: 'протянуть' },
          { text: 'ı', type: 'affix', gloss: 'связка' },
          { text: 'ver', type: 'root', gloss: 'по-быстрому' },
          { text: 'ir', type: 'affix', gloss: 'шир. время' },
          { text: ' misin?', type: 'question', gloss: 'не передашь ли быстро?' },
        ],
        'Традиция (-egelmek)': [
          { text: 'söylen', type: 'root', gloss: 'говориться' },
          { text: 'e', type: 'affix', gloss: 'связка' },
          { text: 'gel', type: 'root', gloss: 'бытует' },
          { text: 'miş', type: 'affix', gloss: 'прош. время' },
          { text: ' mi?', type: 'question', gloss: 'бытовало ли?' },
        ],
        'Непрерывность (-ekalmak)': [
          { text: 'uyu', type: 'root', gloss: 'спать' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'a', type: 'affix', gloss: 'связка' },
          { text: 'kal', type: 'root', gloss: 'проспать/уснуть' },
          { text: 'dı', type: 'affix', gloss: 'прош.' },
          { text: ' mı?', type: 'question', gloss: 'он уснул?' },
        ],
        'Повтор (-ıp durmak)': [
          { text: 'aynı şeyi', type: 'root', gloss: 'то же самое' },
          { text: ' tekrarlayıp dur', type: 'affix', gloss: 'всё повторяет' },
          { text: 'uyor mu?', type: 'question', gloss: 'повторяет ли?' },
        ],
        'Почти (-ayazmak)': [
          { text: 'düş', type: 'root', gloss: 'падать' },
          { text: 'e', type: 'affix', gloss: 'связка' },
          { text: 'yaz', type: 'root', gloss: 'чуть не' },
          { text: 'dı', type: 'affix', gloss: 'прош.' },
          { text: ' mı?', type: 'question', gloss: 'чуть не упал?' },
        ],
      },
    },
    examples: [
      {
        id: 'asp-ex1',
        tr: 'Şu tuzu bana uzatıverir misin?',
        ru: 'Не передашь ли мне побыстрее вон ту соль?',
        annotatedWords: [
          {
            surface: 'uzatıverir',
            morphemes: [
              { text: 'uzat', type: 'root', gloss: 'протягивать/передавать' },
              { text: 'ı', type: 'affix', gloss: 'связка быстроты' },
              { text: 'ver', type: 'root', gloss: 'вспом. глагол лёгкости' },
              { text: 'ir', type: 'affix', gloss: 'широкое время' },
            ],
          },
          {
            surface: 'misin',
            morphemes: [
              { text: 'mi', type: 'question', gloss: 'вопрос' },
              { text: 'sin', type: 'person', gloss: '2 л. ед. ч.' },
            ],
          },
        ],
      },
      {
        id: 'asp-ex2',
        tr: 'Şirketimiz yeni projeler üzerinde çalışmaktadır.',
        ru: 'Наша компания в настоящее время работает над новыми проектами.',
        annotatedWords: [
          {
            surface: 'Şirketimiz',
            morphemes: [
              { text: 'Şirket', type: 'root', gloss: 'компания' },
              { text: 'imiz', type: 'person', gloss: 'наша' },
            ],
          },
          {
            surface: 'çalışmaktadır',
            morphemes: [
              { text: 'çalış', type: 'root', gloss: 'работать' },
              { text: 'makta', type: 'affix', gloss: 'длительный процесс' },
              { text: 'dır', type: 'person', gloss: 'официальная констатация' },
            ],
          },
        ],
      },
      {
        id: 'asp-ex3',
        tr: 'Bu gelenek yüzyıllardır süregelmiştir.',
        ru: 'Эта традиция сохраняется и тянется на протяжении веков.',
        annotatedWords: [
          {
            surface: 'yüzyıllardır',
            morphemes: [
              { text: 'yüzyıl', type: 'root', gloss: 'век' },
              { text: 'lar', type: 'affix', gloss: 'мн. ч.' },
              { text: 'dır', type: 'affix', gloss: 'на протяжении веков' },
            ],
          },
          {
            surface: 'süregelmiştir',
            morphemes: [
              { text: 'sür', type: 'root', gloss: 'длиться' },
              { text: 'e', type: 'affix', gloss: 'связка A²' },
              { text: 'gel', type: 'root', gloss: 'тянуться из прошлого' },
              { text: 'miş', type: 'affix', gloss: 'результативное прош.' },
              { text: 'tir', type: 'person', gloss: 'констатация' },
            ],
          },
        ],
      },
      {
        id: 'asp-ex4',
        tr: 'Bütün gün saate bakıp duruyor, çok heyecanlı.',
        ru: 'Он весь день без конца смотрит на часы, очень волнуется.',
        annotatedWords: [
          {
            surface: 'saate',
            morphemes: [
              { text: 'saat', type: 'root', gloss: 'часы (мягк. t)' },
              { text: 'e', type: 'affix', gloss: 'дат. падеж (на часы)' },
            ],
          },
          {
            surface: 'bakıp',
            morphemes: [
              { text: 'bak', type: 'root', gloss: 'смотреть' },
              { text: 'ıp', type: 'affix', gloss: 'деепричастие' },
            ],
          },
          {
            surface: 'duruyor',
            morphemes: [
              { text: 'dur', type: 'root', gloss: 'повторяемость действия' },
              { text: 'uyor', type: 'affix', gloss: 'наст. длит. время' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Слитное написание -(y)ıvermek vs раздельное -ıp durmak',
          explanation:
            'Составные глаголы с -ıvermek, -egelmek, -ekalmak, -edurmak, -ayazmak пишутся в одно слово (yazıverdi, bakakaldı, uyuyakaldı). А вот конструкция с деепричастием на -ıp (bakıp duruyor, gidip geliyor) всегда пишется раздельно!',
          exampleTr: 'Kapıda donakaldı (слитно) vs Kapıda bekleyip duruyor (раздельно).',
          exampleRu: 'Он застыл у двери vs Он всё стоит и ждёт у двери.',
          relatedTopicId: 'converbs-gerunds',
        },
        {
          title: 'Нейтральное -yor vs книжное/официальное -makta/-mekte',
          explanation:
            'В разговорной речи для действия «прямо сейчас» говорят geliyor, çalışıyor. Форма -makta/-mekte (-maktadır) характерна для новостей, инструкций, объявлений и деловой переписки.',
          exampleTr: 'Tren yaklaşıyor (в разговоре) vs Tren yaklaşmaktadır (объявление на вокзале).',
          exampleRu: 'Поезд приближается.',
          relatedTopicId: 'affix-dir-meanings',
        },
      ],
    },
    miniCheck: [
      {
        id: 'asp-q1',
        prompt: 'Какой оттенок значения вносит вспомогательный глагол «-ıvermek» (например, yazıverdi, geliverdi)?',
        type: 'choice',
        options: [
          'Традиция из глубины веков',
          'Быстрота, внезапность или лёгкость действия',
          'Действие, которое чуть было не произошло',
          'Мучительное повторение одного и того же',
        ],
        correctAnswer: 'Быстрота, внезапность или лёгкость действия',
        explanation: 'Tezlik fiili -(y)ıvermek обозначает стремительное, внезапное или непринуждённо выполненное действие.',
      },
      {
        id: 'asp-q2',
        prompt: 'Образуйте официальную форму настоящего времени с -makta/-mekte от «artmak» (расти): Fiyatlar art___dır.',
        type: 'input',
        correctAnswer: 'makta',
        acceptedAnswers: ['makta', 'artmaktadır'],
        explanation: 'Основа art- с твёрдой гласной a принимает -makta, а затем связку -dır: artmaktadır.',
      },
      {
        id: 'asp-q3',
        prompt: 'Как переводится глагол «uyuyakalmak»?',
        type: 'choice',
        options: [
          'Проснуться пораньше',
          'Уснуть ненадолго по-быстрому',
          'Уснуть (случайно проспать / задремать)',
          'Притворяться спящим',
        ],
        correctAnswer: 'Уснуть (случайно проспать / задремать)',
        explanation: 'Модификатор -(y)akalmak передаёт длительное застывание в состоянии: uyuyakalmak — заснув, проспать.',
      },
      {
        id: 'asp-q4',
        prompt: 'Заполните пропуск в составном глаголе повторения «беспрестанно говорить»: Durmadan konuş___ duruyor.',
        type: 'input',
        correctAnswer: 'up',
        acceptedAnswers: ['up', 'konuşup'],
        explanation: 'Глагол konuşmak (последняя гласная u) образует деепричастие на -ıp/-ip/-up/-üp: konuşup duruyor.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'active-voice',
    sectionId: 'voice',
    titleRu: 'Действительный залог (Etken çatı)',
    titleTr: 'Etken Çatı',
    level: 'A1',
    affixes: [],
    summary:
      'Действительный залог (Etken çatı) — это базовая форма турецкого глагола без специальных залоговых аффиксов, при которой действие совершает само подлежащее. В действительном залоге выступают как переходные глаголы с прямым дополнением (kitabı okudu — прочитал книгу), так и непереходные (çocuk uyudu — ребёнок уснул).',
    formula: [
      { text: 'Подлежащее (кто?)', type: 'person', gloss: 'именительный (основной) падеж' },
      { text: '+ (Дополнение + падеж)', type: 'affix', gloss: 'для переходных глаголов (-(y)I⁴ и др.)' },
      { text: '+ Глагол (без залога)', type: 'root', gloss: 'чистая основа + время + лицо' },
    ],
    conjugationTable: {
      affirmative: {
        ben: [
          { text: 'kapıyı aç', type: 'root', gloss: 'открыть дверь (перех.)' },
          { text: 'tı', type: 'affix', gloss: 'прош. время' },
          { text: 'm', type: 'person', gloss: 'я открыл дверь' },
        ],
        sen: [
          { text: 'mektubu yaz', type: 'root', gloss: 'написать письмо' },
          { text: 'ıyor', type: 'affix', gloss: 'наст. время' },
          { text: 'sun', type: 'person', gloss: 'ты пишешь письмо' },
        ],
        o: [
          { text: 'çocuk uyu', type: 'root', gloss: 'спать (неперех.)' },
          { text: 'du', type: 'affix', gloss: 'ребёнок уснул' },
        ],
        biz: [
          { text: 'yemeği pişir', type: 'root', gloss: 'приготовить еду' },
          { text: 'eceğ', type: 'affix', gloss: 'буд. время (k→ğ)' },
          { text: 'iz', type: 'person', gloss: 'мы приготовим еду' },
        ],
        siz: [
          { text: 'parkta koş', type: 'root', gloss: 'бегать в парке (неперех.)' },
          { text: 'ar', type: 'affix', gloss: 'шир. время' },
          { text: 'sınız', type: 'person', gloss: 'вы бегаете в парке' },
        ],
        onlar: [
          { text: 'evi temizle', type: 'root', gloss: 'убрать дом' },
          { text: 'di', type: 'affix', gloss: 'прош. время' },
          { text: 'ler', type: 'person', gloss: 'они убрали дом' },
        ],
      },
      negative: {
        ben: [
          { text: 'kapıyı aç', type: 'root', gloss: 'открывать' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dı', type: 'affix', gloss: 'прош. время' },
          { text: 'm', type: 'person', gloss: 'я не открыл дверь' },
        ],
        sen: [
          { text: 'mektubu yaz', type: 'root', gloss: 'писать' },
          { text: 'm', type: 'negation', gloss: 'не' },
          { text: 'ıyor', type: 'affix', gloss: 'наст. время' },
          { text: 'sun', type: 'person', gloss: 'ты не пишешь письмо' },
        ],
        o: [
          { text: 'çocuk uyu', type: 'root', gloss: 'спать' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dı', type: 'affix', gloss: 'ребёнок не уснул' },
        ],
        biz: [
          { text: 'yemeği pişir', type: 'root', gloss: 'готовить' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'yeceğ', type: 'affix', gloss: 'буд. время' },
          { text: 'iz', type: 'person', gloss: 'мы не будем готовить' },
        ],
        siz: [
          { text: 'parkta koş', type: 'root', gloss: 'бегать' },
          { text: 'maz', type: 'negation', gloss: 'не (шир. вр.)' },
          { text: 'sınız', type: 'person', gloss: 'вы не бегаете' },
        ],
        onlar: [
          { text: 'evi temizle', type: 'root', gloss: 'убирать' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'di', type: 'affix', gloss: 'прош. время' },
          { text: 'ler', type: 'person', gloss: 'они не убрали дом' },
        ],
      },
      question: {
        ben: [
          { text: 'kapıyı aç', type: 'root', gloss: 'открывать' },
          { text: 'tı', type: 'affix', gloss: 'прош. время' },
          { text: 'm', type: 'person', gloss: 'я' },
          { text: ' mı?', type: 'question', gloss: 'открыл ли я дверь?' },
        ],
        sen: [
          { text: 'mektubu yaz', type: 'root', gloss: 'писать' },
          { text: 'ıyor', type: 'affix', gloss: 'наст. время' },
          { text: ' musun?', type: 'question', gloss: 'пишешь ли ты?' },
        ],
        o: [
          { text: 'çocuk uyu', type: 'root', gloss: 'спать' },
          { text: 'du', type: 'affix', gloss: 'прош. время' },
          { text: ' mu?', type: 'question', gloss: 'уснул ли ребёнок?' },
        ],
        biz: [
          { text: 'yemeği pişir', type: 'root', gloss: 'готовить' },
          { text: 'ecek', type: 'affix', gloss: 'буд. время' },
          { text: ' miyiz?', type: 'question', gloss: 'приготовим ли мы?' },
        ],
        siz: [
          { text: 'parkta koş', type: 'root', gloss: 'бегать' },
          { text: 'ar', type: 'affix', gloss: 'шир. время' },
          { text: ' mısınız?', type: 'question', gloss: 'бегаете ли вы?' },
        ],
        onlar: [
          { text: 'evi temizle', type: 'root', gloss: 'убирать' },
          { text: 'di', type: 'affix', gloss: 'прош. время' },
          { text: 'ler mi?', type: 'question', gloss: 'убрали ли они дом?' },
        ],
      },
      negativeQuestion: {
        ben: [
          { text: 'kapıyı aç', type: 'root', gloss: 'открывать' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dı', type: 'affix', gloss: 'прош. время' },
          { text: 'm', type: 'person', gloss: 'я' },
          { text: ' mı?', type: 'question', gloss: 'разве я не открыл?' },
        ],
        sen: [
          { text: 'mektubu yaz', type: 'root', gloss: 'писать' },
          { text: 'm', type: 'negation', gloss: 'не' },
          { text: 'ıyor', type: 'affix', gloss: 'наст. время' },
          { text: ' musun?', type: 'question', gloss: 'разве ты не пишешь?' },
        ],
        o: [
          { text: 'çocuk uyu', type: 'root', gloss: 'спать' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dı', type: 'affix', gloss: 'прош. время' },
          { text: ' mı?', type: 'question', gloss: 'ребёнок не уснул?' },
        ],
        biz: [
          { text: 'yemeği pişir', type: 'root', gloss: 'готовить' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'yecek', type: 'affix', gloss: 'буд. время' },
          { text: ' miyiz?', type: 'question', gloss: 'не приготовим ли мы?' },
        ],
        siz: [
          { text: 'parkta koş', type: 'root', gloss: 'бегать' },
          { text: 'maz', type: 'negation', gloss: 'не' },
          { text: ' mısınız?', type: 'question', gloss: 'вы не бегаете?' },
        ],
        onlar: [
          { text: 'evi temizle', type: 'root', gloss: 'убирать' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'di', type: 'affix', gloss: 'прош. время' },
          { text: 'ler mi?', type: 'question', gloss: 'они не убрали?' },
        ],
      },
    },
    examples: [
      {
        id: 'act-ex1',
        tr: 'Annem her sabah taze ekmek alıyor.',
        ru: 'Моя мама каждое утро покупает свежий хлеб.',
        annotatedWords: [
          {
            surface: 'Annem',
            morphemes: [
              { text: 'Anne', type: 'root', gloss: 'мама' },
              { text: 'm', type: 'person', gloss: 'моя (подлежащее)' },
            ],
          },
          {
            surface: 'alıyor',
            morphemes: [
              { text: 'al', type: 'root', gloss: 'брать/покупать (актив)' },
              { text: 'ıyor', type: 'affix', gloss: 'наст. длит. время' },
            ],
          },
        ],
      },
      {
        id: 'act-ex2',
        tr: 'Ali pencereyi açtı ve odayı havalandırdı.',
        ru: 'Али открыл окно и проветрил комнату.',
        annotatedWords: [
          {
            surface: 'pencereyi',
            morphemes: [
              { text: 'pencere', type: 'root', gloss: 'окно' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'i', type: 'affix', gloss: 'прямое дополнение (вин. п.)' },
            ],
          },
          {
            surface: 'açtı',
            morphemes: [
              { text: 'aç', type: 'root', gloss: 'открывать (актив)' },
              { text: 'tı', type: 'affix', gloss: 'прош. время (оглуш.)' },
            ],
          },
        ],
      },
      {
        id: 'act-ex3',
        tr: 'Öğrenciler kütüphanede sessizce ders çalışıyorlar.',
        ru: 'Студенты тихо занимаются в библиотеке.',
        annotatedWords: [
          {
            surface: 'Öğrenciler',
            morphemes: [
              { text: 'Öğrenci', type: 'root', gloss: 'студент' },
              { text: 'ler', type: 'affix', gloss: 'мн. ч. (подлежащее)' },
            ],
          },
          {
            surface: 'kütüphanede',
            morphemes: [
              { text: 'kütüphane', type: 'root', gloss: 'библиотека' },
              { text: 'de', type: 'affix', gloss: 'местн. падеж (где?)' },
            ],
          },
          {
            surface: 'çalışıyorlar',
            morphemes: [
              { text: 'çalış', type: 'root', gloss: 'работать/учиться (актив)' },
              { text: 'ıyor', type: 'affix', gloss: 'наст. время' },
              { text: 'lar', type: 'person', gloss: '3 л. мн. ч.' },
            ],
          },
        ],
      },
      {
        id: 'act-ex4',
        tr: 'Yarın akşam arkadaşlarla buluşup yemek yiyeceğiz.',
        ru: 'Завтра вечером мы встретимся с друзьями и поедим.',
        annotatedWords: [
          {
            surface: 'arkadaşlarla',
            morphemes: [
              { text: 'arkadaş', type: 'root', gloss: 'друг' },
              { text: 'lar', type: 'affix', gloss: 'мн. ч.' },
              { text: 'la', type: 'affix', gloss: 'с кем? (-ile)' },
            ],
          },
          {
            surface: 'yiyeceğiz',
            morphemes: [
              { text: 'y', type: 'root', gloss: 'ye- (есть, сужение e→i)' },
              { text: 'i', type: 'root', gloss: 'корневая гласная' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'eceğ', type: 'affix', gloss: 'буд. время (k→ğ)' },
              { text: 'iz', type: 'person', gloss: 'мы' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Действительный залог (Etken) vs Страдательный (Edilgen)',
          explanation:
            'В действительном залоге подлежащее само выполняет действие, а объект стоит в дополнении (Ali kapıyı açtı). Если добавить -ıl/-il/-ın/-n (Kapı açıldı — «дверь открылась / была открыта»), глагол переходит в страдательный залог, и субъект исчезает из подлежащего.',
          exampleTr: 'Usta arabayı tamir etti (Etken) vs Araba tamir edildi (Edilgen).',
          exampleRu: 'Мастер починил машину vs Машину починили (машина была починена).',
          relatedTopicId: 'passive-voice',
        },
        {
          title: 'Переходные глаголы без -ı/-i vs с определённым винительным падежом',
          explanation:
            'Даже в действительном залоге переходный глагол не всегда требует -ı/-i: неопределённый объект стоит в основном падеже (kitap okuyorum — читаю какую-то книгу), а конкретный — в винительном (kitabı okuyorum — читаю эту книгу).',
          exampleTr: 'Her gün gazete okurum vs Bu gazeteyi yeni aldım.',
          exampleRu: 'Каждый день я читаю газету vs Эту газету я только что купил.',
          relatedTopicId: 'six-cases',
        },
      ],
    },
    miniCheck: [
      {
        id: 'act-q1',
        prompt: 'Какой аффикс добавляется для образования действительного залога (Etken çatı)?',
        type: 'choice',
        options: [
          '-ıl / -il',
          '-dır / -tir',
          'Никакого специального залогового аффикса нет',
          '-ış / -iş',
        ],
        correctAnswer: 'Никакого специального залогового аффикса нет',
        explanation: 'Действительный залог — это исходная, немаркированная форма глагола, в которой подлежащее само выполняет действие.',
      },
      {
        id: 'act-q2',
        prompt: 'Определите залог глагола в предложении «Kardeşim yeni bir bisiklet aldı»:',
        type: 'choice',
        options: ['Etken (действительный)', 'Edilgen (страдательный)', 'Dönüşlü (возвратный)', 'Ettirgen (понудительный)'],
        correctAnswer: 'Etken (действительный)',
        explanation: 'Подлежащее kardeşim («мой брат») само совершило действие (aldı — купил), а у глагола нет залоговых суффиксов.',
      },
      {
        id: 'act-q3',
        prompt: 'Превратите пассивную форму «Kapı açıldı» («дверь открылась») обратно в основу действительного залога (инфинитив на -mak/-mek):',
        type: 'input',
        correctAnswer: 'açmak',
        acceptedAnswers: ['açmak', 'aç'],
        explanation: 'Убрав пассивный аффикс -ıl и время -dı от açıldı, получаем основу действительного залога aç (инфинитив açmak).',
      },
      {
        id: 'act-q4',
        prompt: 'В предложении действительного залога «Ayşe ___ okuyor» поставьте слово «mektup» (конкретное «это письмо») в правильном падеже:',
        type: 'input',
        correctAnswer: 'mektubu',
        acceptedAnswers: ['mektubu'],
        explanation: 'Конкретное прямое дополнение при переходном глаголе в действительном залоге ставится в винительный падеж, причём p озвончается в b: mektup + u → mektubu.',
      },
    ],
    isDraft: false,
  },
];
