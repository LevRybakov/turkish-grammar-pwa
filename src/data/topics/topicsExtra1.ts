import type { GrammarTopic } from '../../types';

export const TOPICS_EXTRA_1: GrammarTopic[] = [
  {
    id: 'alphabet-pronunciation',
    sectionId: 'phonetics',
    titleRu: 'Алфавит и произношение',
    titleTr: 'Türk Alfabesi',
    level: 'A1',
    affixes: [],
    summary:
      'Турецкий алфавит состоит из 29 букв (8 гласных и 21 согласная) и строится по принципу «одна буква — один звук»: слова читаются так, как пишутся. Особого внимания требуют пары i / ı, огубленные ö / ü, согласные c [дж], ç [ч], ş [ш], j [ж] и мягкая ğ (yumuşak g), которая не даёт отдельного звука, а удлиняет предыдущую гласную.',
    formula: [],
    customInteractiveBlock: 'alphabet',
    examples: [],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'I / ı (без точки) и İ / i (с точкой) — две разные буквы',
          explanation:
            'В турецком точка меняет и букву, и смысл слова, и выбор аффикса по гармонии гласных: tık («стук») и tik («тик»), sık («частый») и sik, а заглавная к i — всегда İ (İstanbul), к ı — всегда I (Irak).',
          exampleTr: 'kış (зима) vs kişi (человек); İş (работа) vs Işık (свет)',
          exampleRu: 'зима [кыш] vs человек [киши]',
          relatedTopicId: 'vowel-harmony',
        },
        {
          title: 'Буква c ([дж]) vs ç ([ч]) и беззвучная ğ',
          explanation:
            'Буква c никогда не читается как [ц] или [к] — она всегда звучит звонко [дж]. Буква ğ никогда не стоит в начале слова и не произносится как [г]: она лишь тянет предшествующую гласную (или звучит как лёгкий [й] между передними гласными, например diğer).',
          exampleTr: 'can [джан] vs çan [чан]; dağ [даа] vs dağda [даада]',
          exampleRu: 'душа vs колокол; гора vs на горе',
          relatedTopicId: 'consonant-rules',
        },
      ],
    },
    miniCheck: [
      {
        id: 'ap-q1',
        prompt: 'Как правильно пишется название города Стамбул с заглавной буквы по-турецки?',
        type: 'choice',
        options: ['İstanbul', 'Istanbul', 'İstanbül', 'Istanbül'],
        correctAnswer: 'İstanbul',
        explanation: 'Строчная буква i с точкой в заглавном виде сохраняет точку: İ → İstanbul.',
      },
      {
        id: 'ap-q2',
        prompt: 'Как произносится турецкое слово «yağmur» (дождь)?',
        type: 'choice',
        options: ['[ягмур]', '[яамур]', '[яжмур]', '[ячмур]'],
        correctAnswer: '[яамур]',
        explanation: 'Мягкая ğ не даёт согласного звука [г], а удлиняет предшествующую гласную a.',
      },
      {
        id: 'ap-q3',
        prompt: 'Какая буква в турецком алфавите передаёт звук [дж], как в слове «cam» (стекло)?',
        type: 'input',
        correctAnswer: 'c',
        acceptedAnswers: ['c', 'C'],
        explanation: 'Звук [дж] в турецком языке передаётся буквой c (тогда как ç читается как [ч]).',
      },
      {
        id: 'ap-q4',
        prompt: 'Выберите слово, в котором буква I/ı читается как твёрдый звук [ы]:',
        type: 'choice',
        options: ['ılık', 'ilgi', 'iki', 'iyi'],
        correctAnswer: 'ılık',
        explanation: 'I и ı без точки всегда обозначают твёрдую неогубленную гласную [ы]: ılık [ылык].',
      },
    ],
    isDraft: false,
  },

  {
    id: 'buffer-consonants',
    sectionId: 'phonetics',
    titleRu: 'Соединительные согласные y / ş / s / n',
    titleTr: 'Kaynaştırma Ünsüzleri',
    level: 'A1',
    affixes: ['-y-', '-s-', '-ş-', '-n-', '-(y)a', '-(y)e', '-(y)ı', '-(s)ı', '-(n)ın', '-(ş)ar'],
    summary:
      'В турецком языке две гласные не могут стоять рядом на стыке основы и аффикса. Чтобы избежать зияния, между ними вставляется соединительная (буферная) согласная из мнемонического слова YaŞaSıN: y, ş, s или n. Чаще всего работает y, но у каждого из четырёх буферов есть своя строгая зона ответственности.',
    formula: [
      { text: 'Основа на гласную', type: 'root', gloss: 'araba, oda, iki, kapı' },
      { text: '+ y / s / n / ş', type: 'buffer', gloss: 'буфер (YaŞaSıN)' },
      { text: '+ аффикс на гласную', type: 'affix', gloss: '-(y)a, -(s)ı, -(n)ın, -(ş)ar' },
    ],
    conjugationTable: {
      affirmative: {
        'y — общий буфер': [
          { text: 'araba', type: 'root', gloss: 'машина' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'a', type: 'affix', gloss: 'дат. п. (к машине)' },
        ],
        's — принадл. 3 л.': [
          { text: 'araba', type: 'root', gloss: 'машина' },
          { text: 's', type: 'buffer', gloss: 'буфер s (только 3 л.!)' },
          { text: 'ı', type: 'person', gloss: 'его/её машина' },
        ],
        'n — родит. падеж': [
          { text: 'kapı', type: 'root', gloss: 'дверь' },
          { text: 'n', type: 'buffer', gloss: 'буфер n (род. п.)' },
          { text: 'ın', type: 'affix', gloss: 'двери (чей?)' },
        ],
        'n — падеж после -(s)ı': [
          { text: 'oda', type: 'root', gloss: 'комната' },
          { text: 's', type: 'buffer', gloss: 'буфер 3 л.' },
          { text: 'ı', type: 'person', gloss: 'его комната' },
          { text: 'n', type: 'buffer', gloss: 'буфер n перед падежом' },
          { text: 'da', type: 'affix', gloss: 'в его комнате' },
        ],
        'ş — разделит. числит.': [
          { text: 'iki', type: 'root', gloss: 'два' },
          { text: 'ş', type: 'buffer', gloss: 'буфер ş (только числа)' },
          { text: 'er', type: 'affix', gloss: 'по два' },
        ],
      },
      negative: {
        'y — общий буфер': [
          { text: 'oku', type: 'root', gloss: 'читать' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'acağım', type: 'affix', gloss: 'не буду читать' },
        ],
        's — принадл. 3 л.': [
          { text: 'araba', type: 'root', gloss: 'машина' },
          { text: 's', type: 'buffer', gloss: 'буфер s' },
          { text: 'ı', type: 'person', gloss: 'его машина' },
          { text: ' yok', type: 'negation', gloss: 'нет его машины' },
        ],
        'n — родит. падеж': [
          { text: 'kapı', type: 'root', gloss: 'дверь' },
          { text: 'n', type: 'buffer', gloss: 'буфер n' },
          { text: 'ın değil', type: 'negation', gloss: 'не от двери' },
        ],
        'n — падеж после -(s)ı': [
          { text: 'oda', type: 'root', gloss: 'комната' },
          { text: 'sı', type: 'person', gloss: 'его комната' },
          { text: 'n', type: 'buffer', gloss: 'буфер n' },
          { text: 'da değil', type: 'negation', gloss: 'не в его комнате' },
        ],
        'ş — разделит. числит.': [
          { text: 'iki', type: 'root', gloss: 'два' },
          { text: 'ş', type: 'buffer', gloss: 'буфер ş' },
          { text: 'er değil', type: 'negation', gloss: 'не по два' },
        ],
      },
      question: {
        'y — общий буфер': [
          { text: 'araba', type: 'root', gloss: 'машина' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'a', type: 'affix', gloss: 'в машину' },
          { text: ' mı?', type: 'question', gloss: 'вопрос' },
        ],
        's — принадл. 3 л.': [
          { text: 'araba', type: 'root', gloss: 'машина' },
          { text: 's', type: 'buffer', gloss: 'буфер s' },
          { text: 'ı', type: 'person', gloss: 'его машина' },
          { text: ' mı?', type: 'question', gloss: 'вопрос' },
        ],
        'n — родит. падеж': [
          { text: 'kapı', type: 'root', gloss: 'дверь' },
          { text: 'n', type: 'buffer', gloss: 'буфер n' },
          { text: 'ın', type: 'affix', gloss: 'род. п.' },
          { text: ' mı?', type: 'question', gloss: 'вопрос' },
        ],
        'n — падеж после -(s)ı': [
          { text: 'oda', type: 'root', gloss: 'комната' },
          { text: 'sı', type: 'person', gloss: 'его комната' },
          { text: 'n', type: 'buffer', gloss: 'буфер n' },
          { text: 'da', type: 'affix', gloss: 'местн. п.' },
          { text: ' mı?', type: 'question', gloss: 'вопрос' },
        ],
        'ş — разделит. числит.': [
          { text: 'iki', type: 'root', gloss: 'два' },
          { text: 'ş', type: 'buffer', gloss: 'буфер ş' },
          { text: 'er', type: 'affix', gloss: 'по два' },
          { text: ' mi?', type: 'question', gloss: 'вопрос' },
        ],
      },
    },
    examples: [
      {
        id: 'bc-ex1',
        tr: 'Babam yeni arabayı bahçeye park etti.',
        ru: 'Мой папа припарковал новую машину в саду.',
        annotatedWords: [
          {
            surface: 'arabayı',
            morphemes: [
              { text: 'araba', type: 'root', gloss: 'машина' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'ı', type: 'affix', gloss: 'винит. п.' },
            ],
          },
          {
            surface: 'bahçeye',
            morphemes: [
              { text: 'bahçe', type: 'root', gloss: 'сад' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'e', type: 'affix', gloss: 'дат. п. (куда?)' },
            ],
          },
        ],
      },
      {
        id: 'bc-ex2',
        tr: 'Ayşe’nin annesi mutfakta çay yapıyor.',
        ru: 'Мама Айше готовит чай на кухне.',
        annotatedWords: [
          {
            surface: 'Ayşe’nin',
            morphemes: [
              { text: 'Ayşe’', type: 'root', gloss: 'Айше' },
              { text: 'n', type: 'buffer', gloss: 'буфер n (род. п.)' },
              { text: 'in', type: 'affix', gloss: 'род. п.' },
            ],
          },
          {
            surface: 'annesi',
            morphemes: [
              { text: 'anne', type: 'root', gloss: 'мама' },
              { text: 's', type: 'buffer', gloss: 'буфер s (принадл. 3 л.)' },
              { text: 'i', type: 'person', gloss: 'её мама' },
            ],
          },
        ],
      },
      {
        id: 'bc-ex3',
        tr: 'Kedisi masanın altında sessizce uyuyor.',
        ru: 'Его кошка тихо спит под столом.',
        annotatedWords: [
          {
            surface: 'Kedisi',
            morphemes: [
              { text: 'Kedi', type: 'root', gloss: 'кошка' },
              { text: 's', type: 'buffer', gloss: 'буфер s (3 л.)' },
              { text: 'i', type: 'person', gloss: 'его/её кошка' },
            ],
          },
          {
            surface: 'masanın',
            morphemes: [
              { text: 'masa', type: 'root', gloss: 'стол' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'ın', type: 'affix', gloss: 'род. п.' },
            ],
          },
          {
            surface: 'altında',
            morphemes: [
              { text: 'alt', type: 'root', gloss: 'низ' },
              { text: 'ı', type: 'person', gloss: 'принадл. 3 л.' },
              { text: 'n', type: 'buffer', gloss: 'буфер n перед падежом' },
              { text: 'da', type: 'affix', gloss: 'местн. п.' },
            ],
          },
        ],
      },
      {
        id: 'bc-ex4',
        tr: 'Öğrenciler sınıfa ikişer ikişer girdiler.',
        ru: 'Ученики вошли в класс по двое.',
        annotatedWords: [
          {
            surface: 'sınıfa',
            morphemes: [
              { text: 'sınıf', type: 'root', gloss: 'класс (согл. основа — без буфера)' },
              { text: 'a', type: 'affix', gloss: 'дат. п.' },
            ],
          },
          {
            surface: 'ikişer',
            morphemes: [
              { text: 'iki', type: 'root', gloss: 'два' },
              { text: 'ş', type: 'buffer', gloss: 'буфер ş (разделит. числит.)' },
              { text: 'er', type: 'affix', gloss: 'по два' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Буфер y (падежи) vs буфер s (принадлежность 3-го лица)',
          explanation:
            'Оба слова похожи на слух, но буферная буква меняет смысл: arabayı — «машину» (кого/что, винит. падеж с y), а arabası — «его/её машина» (принадлежность с s).',
          exampleTr: 'Kedi-y-i gördüm vs Kedi-s-i burada',
          exampleRu: 'Я увидел кошку vs Его кошка здесь',
          relatedTopicId: 'possessive-affixes',
        },
        {
          title: 'Скрытый буфер n после принадлежности 3-го лица -(s)ı',
          explanation:
            'Если к слову с аффиксом принадлежности 3-го лица (odası, evi) добавляется ЛЮБОЙ падеж (-a, -da, -dan, -ı), перед ним обязательно встаёт буфер n (даже перед согласным -da / -dan!).',
          exampleTr: 'oda + da → odada, но oda-sı-n-da (не *odasıda!)',
          exampleRu: 'в комнате vs в его комнате',
          relatedTopicId: 'six-cases',
        },
      ],
    },
    miniCheck: [
      {
        id: 'bc-q1',
        prompt: 'Как сказать «на стол» (masa + дательный падеж -a)?',
        type: 'choice',
        options: ['masaa', 'masaya', 'masana', 'masasa'],
        correctAnswer: 'masaya',
        explanation: 'Перед дательным, винительным падежами и прочими общими аффиксами используется буфер y.',
      },
      {
        id: 'bc-q2',
        prompt: 'Образуйте форму «его/её комната» от слова «oda» (принадлежность 3-го лица):',
        type: 'input',
        correctAnswer: 'odası',
        acceptedAnswers: ['odası'],
        explanation: 'В аффиксе принадлежности 3-го лица после гласной ставится буферная согласная s: oda + s + ı → odası.',
      },
      {
        id: 'bc-q3',
        prompt: 'Какая буферная согласная ставится в словосочетании «двери» (kapı + родительный падеж -ın)?',
        type: 'choice',
        options: ['y (kapıyın)', 'n (kapının)', 's (kapısın)', 'ş (kapışın)'],
        correctAnswer: 'n (kapının)',
        explanation: 'Родительный падеж -(n)ın после гласной всегда берёт соединительную согласную n.',
      },
      {
        id: 'bc-q4',
        prompt: 'Дополните предложение буферной согласной: Öğrenciler altışar ve yedişer değil, iki___er oturdu (по двое).',
        type: 'input',
        correctAnswer: 'ş',
        acceptedAnswers: ['ş', 'ikişer'],
        explanation: 'Разделительные числительные на гласную (iki, altı, yedi) используют буфер ş: ikişer.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'vowel-drop-epenthesis',
    sectionId: 'phonetics',
    titleRu: 'Выпадение и наращение гласных',
    titleTr: 'Ünlü Düşmesi ve Türemesi',
    level: 'A2',
    affixes: ['burun→burnu', 'şehir→şehri', 'oğul→oğlu', 'akıl→aklı', 'etmek', 'olmak'],
    summary:
      'В ряде двусложных слов с узкой гласной во втором слоге (части тела вроде burun, ağız, karın и заимствования вроде şehir, fikir, isim) при присоединении аффикса на гласную эта узкая гласная выпадает: burun + u → burnu. Обратное явление — наращение гласной (ünlü türemesi) — происходит в уменьшительных формах вроде azıcık, daracık и при соединении ряда основ с etmek/olmak (kaybetmek).',
    formula: [
      { text: 'bur(u)n / şeh(i)r', type: 'root', gloss: 'узкая гласная во 2-м слоге' },
      { text: '+ гласный аффикс', type: 'affix', gloss: '-u, -i, -a, -e (выпадение!)' },
      { text: 'az + ı + cık', type: 'buffer', gloss: 'наращение гласной (azıcık)' },
    ],
    conjugationTable: {
      affirmative: {
        'Части тела (burun, ağız)': [
          { text: 'burn', type: 'root', gloss: 'нос (из burun)' },
          { text: 'um', type: 'person', gloss: 'мой нос' },
        ],
        'Заимств. (şehir, fikir)': [
          { text: 'şehr', type: 'root', gloss: 'город (из şehir)' },
          { text: 'i', type: 'affix', gloss: 'винит. п. / его город' },
        ],
        'Сложные глаголы (etmek/olmak)': [
          { text: 'kayb', type: 'root', gloss: 'потеря (из kayıp, p→b)' },
          { text: 'et', type: 'affix', gloss: 'делать (терять)' },
          { text: 'ti', type: 'affix', gloss: 'потерял' },
        ],
        'Наращение гласной (-cık)': [
          { text: 'az', type: 'root', gloss: 'мало' },
          { text: 'ı', type: 'buffer', gloss: 'наращённая гласная' },
          { text: 'cık', type: 'affix', gloss: 'совсем чуть-чуть' },
        ],
        'Без выпадения (перед согл.)': [
          { text: 'burun', type: 'root', gloss: 'гласная сохраняется!' },
          { text: 'da', type: 'affix', gloss: 'на носу (перед -d-)' },
        ],
      },
      negative: {
        'Части тела (burun, ağız)': [
          { text: 'ağz', type: 'root', gloss: 'рот (из ağız)' },
          { text: 'ım', type: 'person', gloss: 'мой рот' },
          { text: ' değil', type: 'negation', gloss: 'не мой рот' },
        ],
        'Заимств. (şehir, fikir)': [
          { text: 'fikr', type: 'root', gloss: 'мысль (из fikir)' },
          { text: 'im', type: 'person', gloss: 'моё мнение' },
          { text: ' yok', type: 'negation', gloss: 'нет мнения' },
        ],
        'Сложные глаголы (etmek/olmak)': [
          { text: 'kayb', type: 'root', gloss: 'из kayıp' },
          { text: 'et', type: 'affix', gloss: 'делать' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'di', type: 'affix', gloss: 'не потерял' },
        ],
        'Наращение гласной (-cık)': [
          { text: 'dar', type: 'root', gloss: 'узкий' },
          { text: 'a', type: 'buffer', gloss: 'наращённая гласная' },
          { text: 'cık', type: 'affix', gloss: 'узехонький' },
          { text: ' değil', type: 'negation', gloss: 'не узенький' },
        ],
        'Без выпадения (перед согл.)': [
          { text: 'şehir', type: 'root', gloss: 'гласная на месте' },
          { text: 'ler', type: 'affix', gloss: 'города' },
          { text: 'de değil', type: 'negation', gloss: 'не в городах' },
        ],
      },
      question: {
        'Части тела (burun, ağız)': [
          { text: 'karn', type: 'root', gloss: 'живот (из karın)' },
          { text: 'ın', type: 'person', gloss: 'твой живот' },
          { text: ' mı?', type: 'question', gloss: 'вопрос' },
        ],
        'Заимств. (şehir, fikir)': [
          { text: 'ism', type: 'root', gloss: 'имя (из isim)' },
          { text: 'iniz', type: 'person', gloss: 'ваше имя' },
          { text: ' ne?', type: 'question', gloss: 'как вас зовут?' },
        ],
        'Сложные глаголы (etmek/olmak)': [
          { text: 'keşf', type: 'root', gloss: 'открытие (из keşif)' },
          { text: 'et', type: 'affix', gloss: 'открывать' },
          { text: 'ti', type: 'affix', gloss: 'прош. вр.' },
          { text: ' mi?', type: 'question', gloss: 'открыл ли?' },
        ],
        'Наращение гласной (-cık)': [
          { text: 'bir', type: 'root', gloss: 'один' },
          { text: 'i', type: 'buffer', gloss: 'наращённая гласная' },
          { text: 'cik', type: 'affix', gloss: 'единственный' },
          { text: ' mi?', type: 'question', gloss: 'вопрос' },
        ],
        'Без выпадения (перед согл.)': [
          { text: 'akıl', type: 'root', gloss: 'ум (перед согл.)' },
          { text: 'lı', type: 'affix', gloss: 'умный' },
          { text: ' mı?', type: 'question', gloss: 'умный ли?' },
        ],
      },
    },
    examples: [
      {
        id: 'vde-ex1',
        tr: 'Bu şehrin sokakları sabahları çok sakin.',
        ru: 'Улицы этого города по утрам очень спокойные.',
        annotatedWords: [
          {
            surface: 'şehrin',
            morphemes: [
              { text: 'şehr', type: 'root', gloss: 'город (şehir → выпало i)' },
              { text: 'in', type: 'affix', gloss: 'род. п. (чего?)' },
            ],
          },
          {
            surface: 'sokakları',
            morphemes: [
              { text: 'sokak', type: 'root', gloss: 'улица' },
              { text: 'lar', type: 'affix', gloss: 'мн. ч.' },
              { text: 'ı', type: 'person', gloss: 'его улицы' },
            ],
          },
        ],
      },
      {
        id: 'vde-ex2',
        tr: 'Oğlum anahtarını okulda kaybetmiş.',
        ru: 'Мой сын, оказывается, потерял свой ключ в школе.',
        annotatedWords: [
          {
            surface: 'Oğlum',
            morphemes: [
              { text: 'Oğl', type: 'root', gloss: 'сын (oğul → выпало u)' },
              { text: 'um', type: 'person', gloss: 'мой' },
            ],
          },
          {
            surface: 'kaybetmiş',
            morphemes: [
              { text: 'kayb', type: 'root', gloss: 'kayıp → выпало ı, p→b' },
              { text: 'et', type: 'affix', gloss: 'делать (вспом. глагол)' },
              { text: 'miş', type: 'affix', gloss: 'заглазн. прош. вр.' },
            ],
          },
        ],
      },
      {
        id: 'vde-ex3',
        tr: 'Aklıma harika bir fikir geldi.',
        ru: 'Мне в голову пришла отличная идея.',
        annotatedWords: [
          {
            surface: 'Aklıma',
            morphemes: [
              { text: 'Akl', type: 'root', gloss: 'ум, память (akıl → выпало ı)' },
              { text: 'ım', type: 'person', gloss: 'мой' },
              { text: 'a', type: 'affix', gloss: 'дат. п. (мне на ум)' },
            ],
          },
          {
            surface: 'fikir',
            morphemes: [{ text: 'fikir', type: 'root', gloss: 'идея (без аффикса не выпадает)' }],
          },
        ],
      },
      {
        id: 'vde-ex4',
        tr: 'Kahveme azıcık süt ekledim.',
        ru: 'Я добавил в свой кофе совсем чуть-чуть молока.',
        annotatedWords: [
          {
            surface: 'Kahveme',
            morphemes: [
              { text: 'Kahve', type: 'root', gloss: 'кофе' },
              { text: 'm', type: 'person', gloss: 'мой' },
              { text: 'e', type: 'affix', gloss: 'дат. п.' },
            ],
          },
          {
            surface: 'azıcık',
            morphemes: [
              { text: 'az', type: 'root', gloss: 'мало' },
              { text: 'ı', type: 'buffer', gloss: 'наращение гласной' },
              { text: 'cık', type: 'affix', gloss: 'уменьш. аффикс' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Выпадение происходит ТОЛЬКО перед аффиксом на гласную',
          explanation:
            'Перед согласным аффиксом (-da, -dan, -lar, -lı) основа остаётся полной! Выпадение случается только тогда, когда следующий аффикс начинается с гласной (-ım, -ı, -a, -ın).',
          exampleTr: 'şehirde (в городе) vs şehre (в город); burunda vs burnu',
          exampleRu: 'гласная на месте перед -d- vs выпадает перед -e/-u',
          relatedTopicId: 'possessive-affixes',
        },
        {
          title: 'Выпадение гласной vs озвончение согласной (p/ç/t/k)',
          explanation:
            'У некоторых слов в заимствованиях и частях тела выпадает гласная (burun → burnu), а у других срабатывает только озвончение конечной согласной (kitap → kitabı). В составных глаголах вроде kaybetmek происходят оба процесса сразу: kayıp + etmek → kaybetmek.',
          exampleTr: 'akıl → aklı (выпадение) vs ağaç → ağacı (озвончение)',
          exampleRu: 'его ум vs его дерево',
          relatedTopicId: 'consonant-rules',
        },
      ],
    },
    miniCheck: [
      {
        id: 'vde-q1',
        prompt: 'Как будет «мой город» (şehir + -im)?',
        type: 'choice',
        options: ['şehirim', 'şehrim', 'şehri', 'şehrem'],
        correctAnswer: 'şehrim',
        explanation: 'Перед гласным аффиксом принадлежности -im узкая гласная второго слога i выпадает: şehir + im → şehrim.',
      },
      {
        id: 'vde-q2',
        prompt: 'Образуйте форму «его нос» от слова «burun» (burun + -u):',
        type: 'input',
        correctAnswer: 'burnu',
        acceptedAnswers: ['burnu'],
        explanation: 'В слове burun перед гласным аффиксом выпадает вторая гласная u: burnu.',
      },
      {
        id: 'vde-q3',
        prompt: 'Как пишется слитный глагол от «kayıp» + «etmek» (потерять)?',
        type: 'choice',
        options: ['kayıpetmek', 'kaypetmek', 'kaybetmek', 'kayıbetmek'],
        correctAnswer: 'kaybetmek',
        explanation: 'Выпадает узкая гласная ı, а конечное p озвончается в b перед гласной e: kaybetmek.',
      },
      {
        id: 'vde-q4',
        prompt: 'В каком из этих слов произошло наращение гласной (ünlü türemesi)?',
        type: 'choice',
        options: ['azıcık', 'burnu', 'aklım', 'şehre'],
        correctAnswer: 'azıcık',
        explanation: 'В слове az + cık между основой и аффиксом появилась добавочная гласная ı: azıcık.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'stress-exceptions',
    sectionId: 'phonetics',
    titleRu: 'Ударение и исключения',
    titleTr: 'Vurgu ve İstisnalar',
    level: 'A2',
    affixes: ['-ma', '-me', '-yor', '-mı', '-mi', '-mu', '-mü', '-de', '-da', '-ce', '-ca', '-ken'],
    summary:
      'По умолчанию ударение в турецком языке падает на последний слог и сдвигается вправо по мере добавления новых аффиксов (ev → evler → evlerimİZ). Однако есть «безударные» аффиксы (-ma/-me отрицания, -mı вопроса, -ken, -la, -ca, личные окончания именного сказуемого), которые перебрасывают ударение на слог ПЕРЕД собой. Особое ударение также сохраняют многие географические названия и наречия.',
    formula: [
      { text: 'Обычное слово', type: 'root', gloss: 'ударение на ПОСЛЕДНИЙ слог' },
      { text: 'Ударный слог', type: 'affix', gloss: 'перед безударным аффиксом' },
      { text: '+ -ma / mı / -ken / -ım', type: 'negation', gloss: 'безударные (сдвигают влево)' },
    ],
    conjugationTable: {
      affirmative: {
        'Обычный сдвиг вправо': [
          { text: 'kitap', type: 'root', gloss: 'ki-TAP' },
          { text: 'lar', type: 'affix', gloss: 'ki-tap-LAR' },
          { text: 'ımız', type: 'person', gloss: 'ki-tap-la-rı-MIZ' },
        ],
        'Наст. время (-yor)': [
          { text: 'gel', type: 'root', gloss: 'корень' },
          { text: 'i', type: 'buffer', gloss: 'ge-Lİ-yo-rum (перед -yor!)' },
          { text: 'yorum', type: 'affix', gloss: 'безударный хвост' },
        ],
        'Аффиксы -ken / -(y)la': [
          { text: 'çalışır', type: 'root', gloss: 'ça-lı-ŞIR-ken' },
          { text: 'ken', type: 'affix', gloss: '-ken всегда безударный' },
        ],
        'Языки / способ (-ca/-ce)': [
          { text: 'Türk', type: 'root', gloss: 'TÜRK-çe (на 1-й слог!)' },
          { text: 'çe', type: 'affix', gloss: '-ca/-ce языков безударный' },
        ],
        'Личное окончание имени': [
          { text: 'mutlu', type: 'root', gloss: 'mut-LU-yum' },
          { text: 'yum', type: 'person', gloss: 'именное окончание безударно' },
        ],
        'Топонимы и наречия': [
          { text: 'Ankara', type: 'root', gloss: 'AN-ka-ra / İS-tan-bul' },
          { text: ' / şimdi', type: 'affix', gloss: 'ŞİM-di / YAL-nız' },
        ],
      },
      negative: {
        'Обычный сдвиг вправо': [
          { text: 'kitap', type: 'root', gloss: 'ki-TAP' },
          { text: 'sız', type: 'negation', gloss: 'ki-tap-SIZ (ударный -sız)' },
        ],
        'Наст. время (-yor)': [
          { text: 'gel', type: 'root', gloss: 'ГЕЛЬ-mi-yo-rum (на корень!)' },
          { text: 'm', type: 'negation', gloss: 'безударное -m-' },
          { text: 'iyorum', type: 'affix', gloss: 'перед -m-!' },
        ],
        'Аффиксы -ken / -(y)la': [
          { text: 'gel', type: 'root', gloss: 'ГЕЛЬ-me-den / ГЕЛЬ-mez-ken' },
          { text: 'mez', type: 'negation', gloss: 'безударные суффиксы' },
          { text: 'ken', type: 'affix', gloss: 'ударение на корень' },
        ],
        'Языки / способ (-ca/-ce)': [
          { text: 'İngiliz', type: 'root', gloss: 'in-gi-LİZ-ce' },
          { text: 'ce değil', type: 'negation', gloss: '-ce безударный' },
        ],
        'Личное окончание имени': [
          { text: 'mutlu', type: 'root', gloss: 'имя' },
          { text: ' değil', type: 'negation', gloss: 'de-ĞİL-im' },
          { text: 'im', type: 'person', gloss: 'безударное -im' },
        ],
        'Топонимы и наречия': [
          { text: 'Türkiye', type: 'root', gloss: 'ТЮР-ки-йе (исключение)' },
          { text: '’de değil', type: 'negation', gloss: 'ударение на ТЮР-' },
        ],
      },
      question: {
        'Обычный сдвиг вправо': [
          { text: 'kitabımız', type: 'root', gloss: 'ki-ta-bı-MIZ' },
          { text: ' mı?', type: 'question', gloss: 'mı безударная!' },
        ],
        'Наст. время (-yor)': [
          { text: 'geliyor', type: 'root', gloss: 'ge-Lİ-yor' },
          { text: ' musun?', type: 'question', gloss: 'ударение перед -yor' },
        ],
        'Аффиксы -ken / -(y)la': [
          { text: 'yürürken', type: 'root', gloss: 'yü-RÜR-ken' },
          { text: ' mi?', type: 'question', gloss: 'и -ken, и mi безударны' },
        ],
        'Языки / способ (-ca/-ce)': [
          { text: 'Türkçe', type: 'root', gloss: 'TÜRK-çe' },
          { text: ' mi?', type: 'question', gloss: 'ударение на TÜRK-' },
        ],
        'Личное окончание имени': [
          { text: 'hazır', type: 'root', gloss: 'ha-ZIR' },
          { text: ' mısın?', type: 'question', gloss: 'ударение перед mısın' },
        ],
        'Топонимы и наречия': [
          { text: 'İstanbul', type: 'root', gloss: 'İS-tan-bul' },
          { text: ' mu?', type: 'question', gloss: 'начальное ударение' },
        ],
      },
    },
    examples: [
      {
        id: 'se-ex1',
        tr: 'Bugün okula gelmiyorum çünkü biraz hastayım.',
        ru: 'Сегодня я не приду в школу, потому что немного болен.',
        annotatedWords: [
          {
            surface: 'gelmiyorum',
            morphemes: [
              { text: 'gel', type: 'root', gloss: 'ударный корень [ГЕЛЬ-ми-йо-рум]' },
              { text: 'm', type: 'negation', gloss: 'отр. (безударное)' },
              { text: 'iyor', type: 'affix', gloss: 'наст. вр.' },
              { text: 'um', type: 'person', gloss: '1 л. ед. ч.' },
            ],
          },
          {
            surface: 'hastayım',
            morphemes: [
              { text: 'hasta', type: 'root', gloss: 'больной [хас-ТА-йым]' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'ım', type: 'person', gloss: 'безударная связка' },
            ],
          },
        ],
      },
      {
        id: 'se-ex2',
        tr: 'Arkadaşım Ankara’da çok iyi Türkçe konuşuyor.',
        ru: 'Мой друг в Анкаре очень хорошо говорит по-турецки.',
        annotatedWords: [
          {
            surface: 'Ankara’da',
            morphemes: [
              { text: 'Ankara’', type: 'root', gloss: 'топоним [АН-ка-ра-да]' },
              { text: 'da', type: 'affix', gloss: 'местн. п.' },
            ],
          },
          {
            surface: 'Türkçe',
            morphemes: [
              { text: 'Türk', type: 'root', gloss: 'ударная основа [ТЮРК-че]' },
              { text: 'çe', type: 'affix', gloss: 'безударный аффикс языка' },
            ],
          },
        ],
      },
      {
        id: 'se-ex3',
        tr: 'Benimle metroyla gelirken müzik dinliyor musun?',
        ru: 'Когда едешь со мной на метро, ты слушаешь музыку?',
        annotatedWords: [
          {
            surface: 'gelirken',
            morphemes: [
              { text: 'gelir', type: 'root', gloss: 'ударение на -İR- [ге-ЛИР-кен]' },
              { text: 'ken', type: 'affix', gloss: 'безударное -ken' },
            ],
          },
          {
            surface: 'musun',
            morphemes: [
              { text: 'mu', type: 'question', gloss: 'вопрос [дин-ЛИ-йор му-сун]' },
              { text: 'sun', type: 'person', gloss: '2 л. ед. ч.' },
            ],
          },
        ],
      },
      {
        id: 'se-ex4',
        tr: 'Sen de yarın bizimle gelme.',
        ru: 'Ты тоже не ходи завтра с нами.',
        annotatedWords: [
          {
            surface: 'de',
            morphemes: [{ text: 'de', type: 'affix', gloss: 'союз «тоже» (безударный, ударение на SEN)' }],
          },
          {
            surface: 'gelme',
            morphemes: [
              { text: 'gel', type: 'root', gloss: 'ударный корень [ГЕЛЬ-ме]' },
              { text: 'me', type: 'negation', gloss: 'безударное отр.' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Отрицание -ma/-me (безударное) vs имя действия -ma/-me (ударное)',
          explanation:
            'На письме формы могут выглядеть одинаково, но в живой речи их различает ударение: в отрицательном глаголе gelme («не приходи!») ударение на корень ГЕЛЬ-ме, а в отглагольном существительном gelme («приход») — на конец гель-МЕ.',
          exampleTr: 'GÉL-me (не приходи!) vs gel-MÉ zamanı (время прихода)',
          exampleRu: 'отрицание (императив) vs имя действия',
          relatedTopicId: 'verbal-nouns-mak-ma-is',
        },
        {
          title: 'Союз de/da (безударный) vs местный падеж -de/-da (ударный)',
          explanation:
            'Раздельный союз de/da («и, тоже») не принимает ударения — ударным становится слово перед ним (BÉN de). Слитный местный падеж -de/-da («в, на») перетягивает ударение на себя (ev-DÉ).',
          exampleTr: 'EV-de (дома) vs ÉV de (и дом тоже)',
          exampleRu: 'местный падеж vs союз «тоже»',
          relatedTopicId: 'particles-de-ki-bile',
        },
      ],
    },
    miniCheck: [
      {
        id: 'se-q1',
        prompt: 'На какой слог падает ударение в глаголе «yapmıyorum» (я не делаю)?',
        type: 'choice',
        options: ['YAP-mı-yo-rum', 'yap-MI-yo-rum', 'yap-mı-YO-rum', 'yap-mı-yo-RUM'],
        correctAnswer: 'YAP-mı-yo-rum',
        explanation: 'Отрицательный аффикс -m(ı) безударный и сдвигает ударение на предшествующий слог — корень YAP-.',
      },
      {
        id: 'se-q2',
        prompt: 'Где стоит ударение в слове «Türkçe» (турецкий язык)?',
        type: 'choice',
        options: ['TÜRK-çe', 'türk-ÇE'],
        correctAnswer: 'TÜRK-çe',
        explanation: 'Аффикс -ca/-ce/-ça/-çe в названиях языков является безударным, поэтому ударение остаётся на основе TÜRK-.',
      },
      {
        id: 'se-q3',
        prompt: 'Какой слог ударный в слове «evlerimizde» (в наших домах)? Напишите этот слог:',
        type: 'input',
        correctAnswer: 'de',
        acceptedAnswers: ['de', '-de', 'DE'],
        explanation: 'В цепочке обычных аффиксов (-ler, -imiz, -de) ни один не является безударным, поэтому ударение падает на последний слог — de.',
      },
      {
        id: 'se-q4',
        prompt: 'Как правильно произносится название столицы Турции «Ankara»?',
        type: 'choice',
        options: ['AN-ka-ra', 'an-KA-ra', 'an-ka-RA'],
        correctAnswer: 'AN-ka-ra',
        explanation: 'Многие турецкие топонимы не следуют правилу конечного ударения: AN-ka-ra, İS-tan-bul, İZ-mir.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'plural-lar-ler',
    sectionId: 'nouns',
    titleRu: 'Множественное число (-lar / -ler)',
    titleTr: 'Çoğul Eki',
    level: 'A1',
    affixes: ['-lar', '-ler'],
    summary:
      'Множественное число существительных образуется с помощью аффикса -lar (после твёрдых гласных a, ı, o, u) или -ler (после мягких e, i, ö, ü). Главная особенность турецкого языка: после числительных (beş elma) и слов меры/количества (çok, birkaç, kaç) аффикс множественного числа НЕ ставится. Присоединение -lar/-ler к именам собственным обозначает семью или компанию (Ahmetler — Ахмет и его семья).',
    formula: [
      { text: 'Основа имени', type: 'root', gloss: 'существительное' },
      { text: '+ -lar / -ler', type: 'affix', gloss: 'малая гармония (A²)' },
      { text: 'Число + Основа (∅)', type: 'negation', gloss: 'после цифр -lar/-ler не ставится!' },
    ],
    conjugationTable: {
      affirmative: {
        'Твёрдая основа (-lar)': [
          { text: 'kitap', type: 'root', gloss: 'книга (посл. a)' },
          { text: 'lar', type: 'affix', gloss: 'книги (A² → a)' },
        ],
        'Мягкая основа (-ler)': [
          { text: 'kedi', type: 'root', gloss: 'кошка (посл. i)' },
          { text: 'ler', type: 'affix', gloss: 'кошки (A² → e)' },
        ],
        'Огубленные (o, u / ö, ü)': [
          { text: 'gün', type: 'root', gloss: 'день (посл. ü)' },
          { text: 'ler', type: 'affix', gloss: 'дни (A² → e, не *-lür!)' },
        ],
        'Исключения (заимств.)': [
          { text: 'saat', type: 'root', gloss: 'час (мягк. t)' },
          { text: 'ler', type: 'affix', gloss: 'часы (искл. → -ler)' },
        ],
        'Семья / группа (имя)': [
          { text: 'Ahmet', type: 'root', gloss: 'Ахмет' },
          { text: 'ler', type: 'affix', gloss: 'Ахмет с семьёй / друзьями' },
        ],
      },
      negative: {
        'Твёрдая основа (-lar)': [
          { text: 'kitap', type: 'root', gloss: 'книга' },
          { text: 'lar', type: 'affix', gloss: 'мн. ч.' },
          { text: ' yok', type: 'negation', gloss: 'книг нет' },
        ],
        'Мягкая основа (-ler)': [
          { text: 'kedi', type: 'root', gloss: 'кошка' },
          { text: 'ler', type: 'affix', gloss: 'мн. ч.' },
          { text: ' değil', type: 'negation', gloss: 'не кошки' },
        ],
        'Огубленные (o, u / ö, ü)': [
          { text: 'beş gün', type: 'root', gloss: 'пять дней (без -ler!)' },
          { text: ' yok', type: 'negation', gloss: 'нет пяти дней' },
        ],
        'Исключения (заимств.)': [
          { text: 'saat', type: 'root', gloss: 'часы' },
          { text: 'ler', type: 'affix', gloss: 'мн. ч. → e' },
          { text: ' çalışmıyor', type: 'negation', gloss: 'не работают' },
        ],
        'Семья / группа (имя)': [
          { text: 'Ahmet', type: 'root', gloss: 'Ахмет' },
          { text: 'ler', type: 'affix', gloss: 'семья Ахмета' },
          { text: ' evde değil', type: 'negation', gloss: 'не дома' },
        ],
      },
      question: {
        'Твёрдая основа (-lar)': [
          { text: 'kitap', type: 'root', gloss: 'книга' },
          { text: 'lar', type: 'affix', gloss: 'мн. ч.' },
          { text: ' mı?', type: 'question', gloss: 'книги ли?' },
        ],
        'Мягкая основа (-ler)': [
          { text: 'kedi', type: 'root', gloss: 'кошка' },
          { text: 'ler', type: 'affix', gloss: 'мн. ч.' },
          { text: ' mi?', type: 'question', gloss: 'кошки ли?' },
        ],
        'Огубленные (o, u / ö, ü)': [
          { text: 'gün', type: 'root', gloss: 'день' },
          { text: 'ler', type: 'affix', gloss: 'мн. ч.' },
          { text: ' mi?', type: 'question', gloss: 'дни ли?' },
        ],
        'Исключения (заимств.)': [
          { text: 'saat', type: 'root', gloss: 'час' },
          { text: 'ler', type: 'affix', gloss: 'мн. ч.' },
          { text: ' mi?', type: 'question', gloss: 'часы ли?' },
        ],
        'Семья / группа (имя)': [
          { text: 'Ahmet', type: 'root', gloss: 'Ахмет' },
          { text: 'ler', type: 'affix', gloss: 'Ахметовы' },
          { text: ' geldi mi?', type: 'question', gloss: 'пришли ли?' },
        ],
      },
    },
    examples: [
      {
        id: 'pl-ex1',
        tr: 'Masada üç elma ve yeni kitaplar var.',
        ru: 'На столе есть три яблока и новые книги.',
        annotatedWords: [
          {
            surface: 'elma',
            morphemes: [{ text: 'elma', type: 'root', gloss: 'яблоко (после «üç» без -lar!)' }],
          },
          {
            surface: 'kitaplar',
            morphemes: [
              { text: 'kitap', type: 'root', gloss: 'книга (посл. a)' },
              { text: 'lar', type: 'affix', gloss: 'мн. ч.' },
            ],
          },
        ],
      },
      {
        id: 'pl-ex2',
        tr: 'Bahçedeki çiçekler baharda çok güzel açıyor.',
        ru: 'Цветы в саду весной очень красиво распускаются.',
        annotatedWords: [
          {
            surface: 'çiçekler',
            morphemes: [
              { text: 'çiçek', type: 'root', gloss: 'цветок (посл. e)' },
              { text: 'ler', type: 'affix', gloss: 'мн. ч.' },
            ],
          },
          {
            surface: 'güzel',
            morphemes: [{ text: 'güzel', type: 'root', gloss: 'красивый/красиво' }],
          },
        ],
      },
      {
        id: 'pl-ex3',
        tr: 'Bu akşam Zeynepler bize yemeğe geliyor.',
        ru: 'Сегодня вечером Зейнеп с семьёй приходят к нам на ужин.',
        annotatedWords: [
          {
            surface: 'Zeynepler',
            morphemes: [
              { text: 'Zeynep', type: 'root', gloss: 'имя (без апострофа перед -ler!)' },
              { text: 'ler', type: 'affix', gloss: 'Зейнеп и её семья/компания' },
            ],
          },
          {
            surface: 'yemeğe',
            morphemes: [
              { text: 'yemek', type: 'root', gloss: 'еда (k→ğ)' },
              { text: 'e', type: 'affix', gloss: 'дат. п. (на ужин)' },
            ],
          },
        ],
      },
      {
        id: 'pl-ex4',
        tr: 'Sokakta birçok insan ve birkaç köpek gördüm.',
        ru: 'На улице я увидел много людей и несколько собак.',
        annotatedWords: [
          {
            surface: 'insan',
            morphemes: [{ text: 'insan', type: 'root', gloss: 'человек (после birçok без -lar)' }],
          },
          {
            surface: 'köpek',
            morphemes: [{ text: 'köpek', type: 'root', gloss: 'собака (после birkaç без -ler)' }],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Никакого -lar/-ler после числительных и слов много / сколько',
          explanation:
            'Если перед существительным уже стоит точное число (iki, beş, yüz) или счётное слово (kaç, birkaç, az, birçok, çok в значении «много штук»), множественность уже выражена, и -lar/-ler считается ошибкой (исключения — устойчивые названия вроде Üç Silahşorlar «Три мушкетёра»).',
          exampleTr: 'beş öğrenci (не *beş öğrenciler); kaç gün? (не *kaç günler?)',
          exampleRu: 'пять студентов; сколько дней?',
          relatedTopicId: 'numerals-time-dates',
        },
        {
          title: 'Исключения гармонии: мягкий конечный согласный в заимствованиях',
          explanation:
            'Ряд арабских и западных слов, оканчивающихся на мягкое l или t (saat, kalp, hayal, rol, alkol, misal, sembol), несмотря на гласные a/o/u в корне, берут мягкий аффикс -ler.',
          exampleTr: 'saatler (не *saatlar), kalpler, roller, hayaller',
          exampleRu: 'часы, сердца, роли, мечты',
          relatedTopicId: 'vowel-harmony',
        },
      ],
    },
    miniCheck: [
      {
        id: 'pl-q1',
        prompt: 'Как правильно сказать «семь домов» по-турецки?',
        type: 'choice',
        options: ['yedi ev', 'yedi evler', 'yediler ev', 'yediler evler'],
        correctAnswer: 'yedi ev',
        explanation: 'После числительных (yedi — семь) аффикс множественного числа -lar/-ler не используется.',
      },
      {
        id: 'pl-q2',
        prompt: 'Образуйте множественное число от слова-исключения «saat» (час):',
        type: 'input',
        correctAnswer: 'saatler',
        acceptedAnswers: ['saatler'],
        explanation: 'Слово saat оканчивается на мягкую согласную и входит в список исключений, поэтому принимает -ler.',
      },
      {
        id: 'pl-q3',
        prompt: 'Выберите правильную форму множественного числа для слова «köy» (деревня):',
        type: 'choice',
        options: ['köylar', 'köyler', 'köylür', 'köylor'],
        correctAnswer: 'köyler',
        explanation: 'Множественное число подчиняется гармонии на 2 (только a или e). После мягкой ö пишется -ler.',
      },
      {
        id: 'pl-q4',
        prompt: 'Что означает фраза «Mehmetler yarın geliyor»?',
        type: 'choice',
        options: [
          'Завтра приезжает Мехмет со своей семьёй / компанией',
          'Завтра приезжает ровно два Мехмета',
          'Вчера уехал Мехмет',
        ],
        correctAnswer: 'Завтра приезжает Мехмет со своей семьёй / компанией',
        explanation: 'Аффикс -lar/-ler с личным именем обозначает этого человека вместе с его семьёй или друзьями.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'possessive-affixes',
    sectionId: 'nouns',
    titleRu: 'Принадлежность (İyelik ekleri)',
    titleTr: 'İyelik Ekleri',
    level: 'A1',
    affixes: ['-(ı)m', '-(i)m', '-(u)m', '-(ü)m', '-(ı)n', '-(s)ı', '-(s)i', '-(ı)mız', '-(ı)nız', '-ları', '-leri'],
    summary:
      'Притяжательные аффиксы (iyelik ekleri) крепятся к обладаемому предмету и показывают, кому он принадлежит («мой, твой, его, наш, ваш, их»). Если основа оканчивается на гласную, в 1-м и 2-м лице гласная аффикса выпадает (annem, annen), а в 3-м лице ед. числа появляется соединительная s (annesi). Местоимение-владелец (benim, senin…) при этом часто опускается.',
    formula: [
      { text: '(benim / onun)', type: 'affix', gloss: 'опциональное местоимение' },
      { text: 'Предмет', type: 'root', gloss: 'с озвончением p/ç/t/k' },
      { text: '+ (s)', type: 'buffer', gloss: 'буфер s только для 3 л. ед. ч.' },
      { text: '+ -(I⁴)m / -(I⁴)n / -I⁴', type: 'person', gloss: 'аффикс принадлежности' },
    ],
    conjugationTable: {
      affirmative: {
        'Ben (мой)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'im', type: 'person', gloss: 'мой дом' },
        ],
        'Sen (твой)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'in', type: 'person', gloss: 'твой дом' },
        ],
        'O (его/её)': [
          { text: 'ev', type: 'root', gloss: 'дом (araba+s+ı)' },
          { text: 'i', type: 'person', gloss: 'его/её дом' },
        ],
        'Biz (наш)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'imiz', type: 'person', gloss: 'наш дом' },
        ],
        'Siz (ваш)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'iniz', type: 'person', gloss: 'ваш дом' },
        ],
        'Onlar (их)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'leri', type: 'person', gloss: 'их дом / дома' },
        ],
      },
      negative: {
        'Ben (мой)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'im', type: 'person', gloss: 'мой' },
          { text: ' değil', type: 'negation', gloss: 'не мой дом' },
        ],
        'Sen (твой)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'in', type: 'person', gloss: 'твой' },
          { text: ' değil', type: 'negation', gloss: 'не твой дом' },
        ],
        'O (его/её)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'i', type: 'person', gloss: 'его/её' },
          { text: ' değil', type: 'negation', gloss: 'не его дом' },
        ],
        'Biz (наш)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'imiz', type: 'person', gloss: 'наш' },
          { text: ' değil', type: 'negation', gloss: 'не наш дом' },
        ],
        'Siz (ваш)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'iniz', type: 'person', gloss: 'ваш' },
          { text: ' değil', type: 'negation', gloss: 'не ваш дом' },
        ],
        'Onlar (их)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'leri', type: 'person', gloss: 'их' },
          { text: ' değil', type: 'negation', gloss: 'не их дом' },
        ],
      },
      question: {
        'Ben (мой)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'im', type: 'person', gloss: 'мой' },
          { text: ' mi?', type: 'question', gloss: 'мой ли дом?' },
        ],
        'Sen (твой)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'in', type: 'person', gloss: 'твой' },
          { text: ' mi?', type: 'question', gloss: 'твой ли дом?' },
        ],
        'O (его/её)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'i', type: 'person', gloss: 'его/её' },
          { text: ' mi?', type: 'question', gloss: 'его ли дом?' },
        ],
        'Biz (наш)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'imiz', type: 'person', gloss: 'наш' },
          { text: ' mi?', type: 'question', gloss: 'наш ли дом?' },
        ],
        'Siz (ваш)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'iniz', type: 'person', gloss: 'ваш' },
          { text: ' mi?', type: 'question', gloss: 'ваш ли дом?' },
        ],
        'Onlar (их)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'leri', type: 'person', gloss: 'их' },
          { text: ' mi?', type: 'question', gloss: 'их ли дом?' },
        ],
      },
      negativeQuestion: {
        'Ben (мой)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'im', type: 'person', gloss: 'мой' },
          { text: ' değil mi?', type: 'negation', gloss: 'не мой ли?' },
        ],
        'Sen (твой)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'in', type: 'person', gloss: 'твой' },
          { text: ' değil mi?', type: 'negation', gloss: 'не твой ли?' },
        ],
        'O (его/её)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'i', type: 'person', gloss: 'его/её' },
          { text: ' değil mi?', type: 'negation', gloss: 'не его ли?' },
        ],
        'Biz (наш)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'imiz', type: 'person', gloss: 'наш' },
          { text: ' değil mi?', type: 'negation', gloss: 'не наш ли?' },
        ],
        'Siz (ваш)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'iniz', type: 'person', gloss: 'ваш' },
          { text: ' değil mi?', type: 'negation', gloss: 'не ваш ли?' },
        ],
        'Onlar (их)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'leri', type: 'person', gloss: 'их' },
          { text: ' değil mi?', type: 'negation', gloss: 'не их ли?' },
        ],
      },
    },
    examples: [
      {
        id: 'pa-ex1',
        tr: 'Benim kitabım çantamda, senin kitabın nerede?',
        ru: 'Моя книга в моей сумке, а где твоя книга?',
        annotatedWords: [
          {
            surface: 'kitabım',
            morphemes: [
              { text: 'kitab', type: 'root', gloss: 'книга (kitap, p→b)' },
              { text: 'ım', type: 'person', gloss: 'моя' },
            ],
          },
          {
            surface: 'çantamda',
            morphemes: [
              { text: 'çanta', type: 'root', gloss: 'сумка (гл. основа)' },
              { text: 'm', type: 'person', gloss: 'моя' },
              { text: 'da', type: 'affix', gloss: 'местн. п.' },
            ],
          },
          {
            surface: 'kitabın',
            morphemes: [
              { text: 'kitab', type: 'root', gloss: 'книга (p→b)' },
              { text: 'ın', type: 'person', gloss: 'твоя' },
            ],
          },
        ],
      },
      {
        id: 'pa-ex2',
        tr: 'Ablamın yeni arabası kırmızı.',
        ru: 'Новая машина моей старшей сестры красная.',
        annotatedWords: [
          {
            surface: 'Ablamın',
            morphemes: [
              { text: 'Abla', type: 'root', gloss: 'старшая сестра' },
              { text: 'm', type: 'person', gloss: 'моя' },
              { text: 'ın', type: 'affix', gloss: 'род. п. (чей?)' },
            ],
          },
          {
            surface: 'arabası',
            morphemes: [
              { text: 'araba', type: 'root', gloss: 'машина' },
              { text: 's', type: 'buffer', gloss: 'буфер s (3 л.)' },
              { text: 'ı', type: 'person', gloss: 'её машина' },
            ],
          },
        ],
      },
      {
        id: 'pa-ex3',
        tr: 'Bizim okulumuz şehir merkezinde bulunuyor.',
        ru: 'Наша школа находится в центре города.',
        annotatedWords: [
          {
            surface: 'okulumuz',
            morphemes: [
              { text: 'okul', type: 'root', gloss: 'школа (посл. u)' },
              { text: 'umuz', type: 'person', gloss: 'наша (I⁴ → u)' },
            ],
          },
          {
            surface: 'merkezinde',
            morphemes: [
              { text: 'merkez', type: 'root', gloss: 'центр' },
              { text: 'i', type: 'person', gloss: 'его центр' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'de', type: 'affix', gloss: 'местн. п.' },
            ],
          },
        ],
      },
      {
        id: 'pa-ex4',
        tr: 'Çocukların odaları her zaman çok düzenli.',
        ru: 'Комнаты детей всегда очень аккуратные.',
        annotatedWords: [
          {
            surface: 'Çocukların',
            morphemes: [
              { text: 'Çocuk', type: 'root', gloss: 'ребёнок' },
              { text: 'lar', type: 'affix', gloss: 'мн. ч.' },
              { text: 'ın', type: 'affix', gloss: 'род. п.' },
            ],
          },
          {
            surface: 'odaları',
            morphemes: [
              { text: 'oda', type: 'root', gloss: 'комната' },
              { text: 'ları', type: 'person', gloss: 'их комнаты' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Принадлежность 1-го лица (öğretmenim) vs именное сказуемое (öğretmenim)',
          explanation:
            'Форма öğretmenim может означать и «мой учитель» (принадлежность), и «я учитель» (именное сказуемое). Но после гласной они различаются: anne-m («моя мама» — без y) vs anne-y-im («я мама» — с буфером y!).',
          exampleTr: 'annem (моя мама) vs anneyim (я мама)',
          exampleRu: 'принадлежность vs именное сказуемое',
          relatedTopicId: 'nominal-predicate-ek-fiil',
        },
        {
          title: 'Принадлежность 3-го лица -(s)ı vs винительный падеж -(y)ı',
          explanation:
            'После согласной оба аффикса выглядят как -ı/-i/-u/-ü (evi — «его дом» или «дом» в вин. п.). После гласной различие сразу видно по буферу: s в принадлежности (kapısı — «его дверь»), y в винительном падеже (kapıyı — «дверь»).',
          exampleTr: 'kapısı (его дверь) vs kapıyı açtı (открыл дверь)',
          exampleRu: 'принадлежность vs винительный падеж',
          relatedTopicId: 'six-cases',
        },
      ],
    },
    miniCheck: [
      {
        id: 'pa-q1',
        prompt: 'Как сказать «наш дом» (ev + принадлежность 1-го лица мн. ч.)?',
        type: 'choice',
        options: ['evim', 'evimiz', 'eviniz', 'evleri'],
        correctAnswer: 'evimiz',
        explanation: 'Аффикс принадлежности для biz («мы») — -(I⁴)mIz. После мягкой e выбираем -imiz.',
      },
      {
        id: 'pa-q2',
        prompt: 'Образуйте форму «его/её мама» от слова «anne» (3-е лицо ед. ч.):',
        type: 'input',
        correctAnswer: 'annesi',
        acceptedAnswers: ['annesi'],
        explanation: 'Основа anne оканчивается на гласную, поэтому в 3-м лице ед. числа появляется буфер s: annesi.',
      },
      {
        id: 'pa-q3',
        prompt: 'Как сказать «ваш ключ» от слова «anahtar»?',
        type: 'choice',
        options: ['anahtarım', 'anahtarın', 'anahtarınız', 'anahtarımız'],
        correctAnswer: 'anahtarınız',
        explanation: 'Аффикс для siz («вы») — -(I⁴)nIz. После твёрдой a выбираем -ınız: anahtarınız.',
      },
      {
        id: 'pa-q4',
        prompt: 'Образуйте форму «моё имя» от слова «ad» (benim ___):',
        type: 'input',
        correctAnswer: 'adım',
        acceptedAnswers: ['adım'],
        explanation: 'Слово ad имеет гласную a (не озвончается, d — уже звонкая) и принимает аффикс -ım: adım.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'nominal-predicate-ek-fiil',
    sectionId: 'nouns',
    titleRu: 'Именное сказуемое: Ek-fiil и değil',
    titleTr: 'Ek-fiil ve İsim Cümlesi',
    level: 'A1',
    levels: ['A1', 'A2'],
    affixes: ['-(y)ım', '-(y)im', '-sın', '-sin', '-dır', '-dir', '-(y)ız', '-sınız', '-lar', 'değil', '-(y)dı', '-(y)mış'],
    summary:
      'В турецком предложении с именным сказуемым («Я студент», «Мы счастливы») в настоящем времени не используется отдельный глагол «быть» — к существительному или прилагательному сразу крепится личное окончание (после гласной — с буфером y). Отрицание строится при помощи отдельного слова değil, которое само принимает личные окончания, а в прошедшем времени к имени добавляется связка ek-fiil -(y)dı или -(y)mış.',
    formula: [
      { text: 'Имя / Прилагательное', type: 'root', gloss: 'именная основа' },
      { text: '(değil)', type: 'negation', gloss: 'при отрицании' },
      { text: '(y) / (mı?)', type: 'question', gloss: 'буфер y или вопросит. частица' },
      { text: '+ -ım / -sın / -ız / -(y)dı', type: 'person', gloss: 'личное окончание / связка' },
    ],
    conjugationTable: {
      affirmative: {
        Ben: [
          { text: 'mutlu', type: 'root', gloss: 'счастливый' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'um', type: 'person', gloss: 'я счастлив(а)' },
        ],
        Sen: [
          { text: 'mutlu', type: 'root', gloss: 'счастливый' },
          { text: 'sun', type: 'person', gloss: 'ты счастлив(а)' },
        ],
        O: [
          { text: 'mutlu', type: 'root', gloss: 'счастливый' },
          { text: '(dur)', type: 'affix', gloss: '0 (или -dur в официозе/догадке)' },
        ],
        Biz: [
          { text: 'mutlu', type: 'root', gloss: 'счастливый' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'uz', type: 'person', gloss: 'мы счастливы' },
        ],
        Siz: [
          { text: 'mutlu', type: 'root', gloss: 'счастливый' },
          { text: 'sunuz', type: 'person', gloss: 'вы счастливы' },
        ],
        Onlar: [
          { text: 'mutlu', type: 'root', gloss: 'счастливый' },
          { text: 'lar', type: 'person', gloss: 'они счастливы' },
        ],
      },
      negative: {
        Ben: [
          { text: 'mutlu', type: 'root', gloss: 'счастливый' },
          { text: ' değil', type: 'negation', gloss: 'не' },
          { text: 'im', type: 'person', gloss: 'я не счастлив' },
        ],
        Sen: [
          { text: 'mutlu', type: 'root', gloss: 'счастливый' },
          { text: ' değil', type: 'negation', gloss: 'не' },
          { text: 'sin', type: 'person', gloss: 'ты не счастлив' },
        ],
        O: [
          { text: 'mutlu', type: 'root', gloss: 'счастливый' },
          { text: ' değil', type: 'negation', gloss: 'он/она не счастлив(а)' },
        ],
        Biz: [
          { text: 'mutlu', type: 'root', gloss: 'счастливый' },
          { text: ' değil', type: 'negation', gloss: 'не' },
          { text: 'iz', type: 'person', gloss: 'мы не счастливы' },
        ],
        Siz: [
          { text: 'mutlu', type: 'root', gloss: 'счастливый' },
          { text: ' değil', type: 'negation', gloss: 'не' },
          { text: 'siniz', type: 'person', gloss: 'вы не счастливы' },
        ],
        Onlar: [
          { text: 'mutlu', type: 'root', gloss: 'счастливый' },
          { text: ' değil', type: 'negation', gloss: 'не' },
          { text: 'ler', type: 'person', gloss: 'они не счастливы' },
        ],
      },
      question: {
        Ben: [
          { text: 'mutlu', type: 'root', gloss: 'счастливый' },
          { text: ' mu', type: 'question', gloss: 'ли' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'um?', type: 'person', gloss: 'счастлив ли я?' },
        ],
        Sen: [
          { text: 'mutlu', type: 'root', gloss: 'счастливый' },
          { text: ' mu', type: 'question', gloss: 'ли' },
          { text: 'sun?', type: 'person', gloss: 'ты счастлив?' },
        ],
        O: [
          { text: 'mutlu', type: 'root', gloss: 'счастливый' },
          { text: ' mu?', type: 'question', gloss: 'он(а) счастлив(а)?' },
        ],
        Biz: [
          { text: 'mutlu', type: 'root', gloss: 'счастливый' },
          { text: ' mu', type: 'question', gloss: 'ли' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'uz?', type: 'person', gloss: 'мы счастливы?' },
        ],
        Siz: [
          { text: 'mutlu', type: 'root', gloss: 'счастливый' },
          { text: ' mu', type: 'question', gloss: 'ли' },
          { text: 'sunuz?', type: 'person', gloss: 'вы счастливы?' },
        ],
        Onlar: [
          { text: 'mutlu', type: 'root', gloss: 'счастливый' },
          { text: 'lar', type: 'person', gloss: 'они' },
          { text: ' mı?', type: 'question', gloss: 'они счастливы?' },
        ],
      },
      negativeQuestion: {
        Ben: [
          { text: 'mutlu', type: 'root', gloss: 'счастливый' },
          { text: ' değil', type: 'negation', gloss: 'не' },
          { text: ' mi', type: 'question', gloss: 'ли' },
          { text: 'yim?', type: 'person', gloss: 'разве я не счастлив?' },
        ],
        Sen: [
          { text: 'mutlu', type: 'root', gloss: 'счастливый' },
          { text: ' değil', type: 'negation', gloss: 'не' },
          { text: ' mi', type: 'question', gloss: 'ли' },
          { text: 'sin?', type: 'person', gloss: 'разве ты не счастлив?' },
        ],
        O: [
          { text: 'mutlu', type: 'root', gloss: 'счастливый' },
          { text: ' değil', type: 'negation', gloss: 'не' },
          { text: ' mi?', type: 'question', gloss: 'не так ли / разве нет?' },
        ],
        Biz: [
          { text: 'mutlu', type: 'root', gloss: 'счастливый' },
          { text: ' değil', type: 'negation', gloss: 'не' },
          { text: ' mi', type: 'question', gloss: 'ли' },
          { text: 'yiz?', type: 'person', gloss: 'разве мы не счастливы?' },
        ],
        Siz: [
          { text: 'mutlu', type: 'root', gloss: 'счастливый' },
          { text: ' değil', type: 'negation', gloss: 'не' },
          { text: ' mi', type: 'question', gloss: 'ли' },
          { text: 'siniz?', type: 'person', gloss: 'разве вы не счастливы?' },
        ],
        Onlar: [
          { text: 'mutlu', type: 'root', gloss: 'счастливый' },
          { text: ' değil', type: 'negation', gloss: 'не' },
          { text: 'ler', type: 'person', gloss: 'они' },
          { text: ' mi?', type: 'question', gloss: 'разве они не счастливы?' },
        ],
      },
    },
    examples: [
      {
        id: 'np-ex1',
        tr: 'Ben üniversitede öğrenciyim ve çok çalışkanım.',
        ru: 'Я студент в университете и очень старательный.',
        annotatedWords: [
          {
            surface: 'öğrenciyim',
            morphemes: [
              { text: 'öğrenci', type: 'root', gloss: 'студент (на гласную)' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'im', type: 'person', gloss: 'я (связка)' },
            ],
          },
          {
            surface: 'çalışkanım',
            morphemes: [
              { text: 'çalışkan', type: 'root', gloss: 'старательный' },
              { text: 'ım', type: 'person', gloss: 'я (связка)' },
            ],
          },
        ],
      },
      {
        id: 'np-ex2',
        tr: 'Bugün hava soğuk değil ama biraz rüzgârlı.',
        ru: 'Сегодня погода не холодная, но немного ветреная.',
        annotatedWords: [
          {
            surface: 'değil',
            morphemes: [{ text: 'değil', type: 'negation', gloss: 'не является (3 л. ед. ч.)' }],
          },
          {
            surface: 'rüzgârlı',
            morphemes: [
              { text: 'rüzgâr', type: 'root', gloss: 'ветер' },
              { text: 'lı', type: 'affix', gloss: 'ветреный' },
            ],
          },
        ],
      },
      {
        id: 'np-ex3',
        tr: 'Siz yorgun musunuz yoksa hazır mısınız?',
        ru: 'Вы устали или вы готовы?',
        annotatedWords: [
          {
            surface: 'musunuz',
            morphemes: [
              { text: 'mu', type: 'question', gloss: 'вопрос (после yorgun)' },
              { text: 'sunuz', type: 'person', gloss: 'вы (связка)' },
            ],
          },
          {
            surface: 'mısınız',
            morphemes: [
              { text: 'mı', type: 'question', gloss: 'вопрос (после hazır)' },
              { text: 'sınız', type: 'person', gloss: 'вы (связка)' },
            ],
          },
        ],
      },
      {
        id: 'np-ex4',
        tr: 'Dün biraz hastaydım ama bugün çok iyiyim.',
        ru: 'Вчера я был немного болен, но сегодня чувствую себя отлично.',
        annotatedWords: [
          {
            surface: 'hastaydım',
            morphemes: [
              { text: 'hasta', type: 'root', gloss: 'больной' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'dı', type: 'affix', gloss: 'ek-fiil прош. вр.' },
              { text: 'm', type: 'person', gloss: 'я (1 л.)' },
            ],
          },
          {
            surface: 'iyiyim',
            morphemes: [
              { text: 'iyi', type: 'root', gloss: 'хороший' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'im', type: 'person', gloss: 'я (1 л.)' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Отрицание имени (değil) vs отрицание глагола (-ma/-me)',
          explanation:
            'Аффикс -ma/-me крепится ТОЛЬКО к глаголам (gelmiyorum). Существительные, прилагательные и местоимения отрицаются исключительно через отдельное слово değil (öğretmen değilim, дома değil — evde değil).',
          exampleTr: 'Hazır değilim (не *hazırmıyorum) vs Gelmiyorum',
          exampleRu: 'Я не готов vs Я не прихожу',
          relatedTopicId: 'verb-stem-negation-question',
        },
        {
          title: 'Именное сказуемое (doktorum) vs принадлежность (doktorum)',
          explanation:
            'После согласной оба значения совпадают по форме: doktorum = «я врач» И «мой врач». Разница видна по контексту и после гласной: öğrenci-y-im («я студент», буфер y) vs öğrenci-m («мой студент», без y).',
          exampleTr: 'Öğrenciyim (я студент) vs Öğrencim geldi (пришёл мой ученик)',
          exampleRu: 'сказуемое (с буфером y) vs принадлежность',
          relatedTopicId: 'possessive-affixes',
        },
      ],
    },
    miniCheck: [
      {
        id: 'np-q1',
        prompt: 'Как сказать «Мы дома» (evde + личное окончание для biz)?',
        type: 'choice',
        options: ['evdeiz', 'evdeyiz', 'evdeuz', 'evdemiz'],
        correctAnswer: 'evdeyiz',
        explanation: 'Основа evde оканчивается на гласную e, поэтому перед личным окончанием -iz вставляется буфер y: evdeyiz.',
      },
      {
        id: 'np-q2',
        prompt: 'Переведите «Ты не устал(а)» (yorgun + отрицание + 2-е лицо): sen yorgun ___',
        type: 'input',
        correctAnswer: 'değilsin',
        acceptedAnswers: ['değilsin'],
        explanation: 'Личное окончание в отрицательном именном предложении переносится на слово değil: değil + sin → değilsin.',
      },
      {
        id: 'np-q3',
        prompt: 'Какой вариант вопроса «Вы готовы?» правильный?',
        type: 'choice',
        options: ['Hazırsınız mı?', 'Hazır mısınız?', 'Hazır misiniz?', 'Hazır musunuz?'],
        correctAnswer: 'Hazır mısınız?',
        explanation: 'В вопросе личное окончание крепится к вопросительной частице mı (после hazır с ı): Hazır mısınız?',
      },
      {
        id: 'np-q4',
        prompt: 'Закончите фразу в прошедшем времени: Dün çok meşgul___ (вчера я был очень занят).',
        type: 'input',
        correctAnswer: 'düm',
        acceptedAnswers: ['düm', 'meşguldüm'],
        explanation: 'Слово meşgul относится к исключениям с мягким l, поэтому прошедшая связка ek-fiil принимает форму -düm: meşguldüm.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'existential-var-yok',
    sectionId: 'nouns',
    titleRu: 'Конструкции var / yok',
    titleTr: 'Var ve Yok',
    level: 'A1',
    affixes: ['var', 'yok', 'vardı', 'yoktu', 'varmış', 'yokmuş', 'var mı', 'yok mu'],
    summary:
      'Слова var («есть, имеется») и yok («нет, отсутствует») — главные предикативы наличия и обладания в турецком языке. Они не изменяются по лицам в значении «у меня есть», зато предмет ставится с аффиксом принадлежности (Arabam var — «У меня есть машина»). В прошлом они принимают связку -dı/-tu (vardı, yoktu), а в вопросе сочетаются с mı/mu (var mı? / yok mu?).',
    formula: [
      { text: 'Место (-da) / Владелец', type: 'root', gloss: 'где или чей предмет' },
      { text: '+ var / yok', type: 'affix', gloss: 'имеется / отсутствует' },
      { text: '+ (-dı / -mış / mı?)', type: 'question', gloss: 'время или вопрос' },
    ],
    conjugationTable: {
      affirmative: {
        'Наличие в месте (-da)': [
          { text: 'masada', type: 'root', gloss: 'на столе' },
          { text: ' kitap ', type: 'affix', gloss: 'книга' },
          { text: 'var', type: 'affix', gloss: 'есть (имеется)' },
        ],
        'Обладание (1 л. ед.)': [
          { text: '(benim) zaman', type: 'root', gloss: 'моё время' },
          { text: 'ım', type: 'person', gloss: 'принадл. 1 л.' },
          { text: ' var', type: 'affix', gloss: 'у меня есть время' },
        ],
        'Обладание (3 л. ед.)': [
          { text: '(onun) kedi', type: 'root', gloss: 'кошка' },
          { text: 'si', type: 'person', gloss: 'его/её кошка' },
          { text: ' var', type: 'affix', gloss: 'у него/неё есть кошка' },
        ],
        'Прошедшее время (-dı)': [
          { text: 'dün vakt', type: 'root', gloss: 'вчера время' },
          { text: 'im', type: 'person', gloss: 'моё' },
          { text: ' vardı', type: 'affix', gloss: 'было (var + dı)' },
        ],
        'Заглазное время (-mış)': [
          { text: 'orada kimse', type: 'root', gloss: 'там кто-то' },
          { text: ' varmış', type: 'affix', gloss: 'говорят, был' },
        ],
      },
      negative: {
        'Наличие в месте (-da)': [
          { text: 'masada', type: 'root', gloss: 'на столе' },
          { text: ' kitap ', type: 'affix', gloss: 'книга' },
          { text: 'yok', type: 'negation', gloss: 'нет (отсутствует)' },
        ],
        'Обладание (1 л. ед.)': [
          { text: '(benim) zaman', type: 'root', gloss: 'моё время' },
          { text: 'ım', type: 'person', gloss: 'принадл. 1 л.' },
          { text: ' yok', type: 'negation', gloss: 'у меня нет времени' },
        ],
        'Обладание (3 л. ед.)': [
          { text: '(onun) kedi', type: 'root', gloss: 'кошка' },
          { text: 'si', type: 'person', gloss: 'его/её' },
          { text: ' yok', type: 'negation', gloss: 'у него/неё нет кошки' },
        ],
        'Прошедшее время (-dı)': [
          { text: 'dün vakt', type: 'root', gloss: 'вчера время' },
          { text: 'im', type: 'person', gloss: 'моё' },
          { text: ' yoktu', type: 'negation', gloss: 'не было (k→t!)' },
        ],
        'Заглазное время (-mış)': [
          { text: 'evde kimse', type: 'root', gloss: 'дома никого' },
          { text: ' yokmuş', type: 'negation', gloss: 'оказывается, не было' },
        ],
      },
      question: {
        'Наличие в месте (-da)': [
          { text: 'masada', type: 'root', gloss: 'на столе' },
          { text: ' kitap var ', type: 'affix', gloss: 'есть книга' },
          { text: 'mı?', type: 'question', gloss: 'есть ли?' },
        ],
        'Обладание (1 л. ед.)': [
          { text: 'zaman', type: 'root', gloss: 'время' },
          { text: 'ım', type: 'person', gloss: 'моё' },
          { text: ' var ', type: 'affix', gloss: 'есть' },
          { text: 'mı?', type: 'question', gloss: 'есть ли у меня время?' },
        ],
        'Обладание (3 л. ед.)': [
          { text: 'kedi', type: 'root', gloss: 'кошка' },
          { text: 'si', type: 'person', gloss: 'его' },
          { text: ' var ', type: 'affix', gloss: 'есть' },
          { text: 'mı?', type: 'question', gloss: 'есть ли у него кошка?' },
        ],
        'Прошедшее время (-dı)': [
          { text: 'vakt', type: 'root', gloss: 'время' },
          { text: 'in', type: 'person', gloss: 'твоё' },
          { text: ' var ', type: 'affix', gloss: 'было ли' },
          { text: 'mıydı?', type: 'question', gloss: 'var mı + ydı?' },
        ],
        'Заглазное время (-mış)': [
          { text: 'orada kimse', type: 'root', gloss: 'там кто-нибудь' },
          { text: ' var ', type: 'affix', gloss: 'был' },
          { text: 'mıymış?', type: 'question', gloss: 'var mı + ymış?' },
        ],
      },
      negativeQuestion: {
        'Наличие в месте (-da)': [
          { text: 'evde ekmek ', type: 'root', gloss: 'дома хлеб' },
          { text: 'yok ', type: 'negation', gloss: 'нет' },
          { text: 'mu?', type: 'question', gloss: 'разве нет?' },
        ],
        'Обладание (1 л. ед.)': [
          { text: 'zaman', type: 'root', gloss: 'время' },
          { text: 'ım', type: 'person', gloss: 'моё' },
          { text: ' yok ', type: 'negation', gloss: 'нет' },
          { text: 'mu?', type: 'question', gloss: 'разве у меня нет?' },
        ],
        'Обладание (3 л. ед.)': [
          { text: 'kedi', type: 'root', gloss: 'кошка' },
          { text: 'si', type: 'person', gloss: 'его' },
          { text: ' yok ', type: 'negation', gloss: 'нет' },
          { text: 'mu?', type: 'question', gloss: 'разве у него нет?' },
        ],
        'Прошедшее время (-dı)': [
          { text: 'vakt', type: 'root', gloss: 'время' },
          { text: 'in', type: 'person', gloss: 'твоё' },
          { text: ' yok ', type: 'negation', gloss: 'не было' },
          { text: 'muydu?', type: 'question', gloss: 'yok mu + ydu?' },
        ],
        'Заглазное время (-mış)': [
          { text: 'kimse ', type: 'root', gloss: 'никого' },
          { text: 'yok ', type: 'negation', gloss: 'не было' },
          { text: 'muymuş?', type: 'question', gloss: 'yok mu + ymuş?' },
        ],
      },
    },
    examples: [
      {
        id: 'evy-ex1',
        tr: 'Bugün boş zamanım yok ama yarın vaktim var.',
        ru: 'Сегодня у меня нет свободного времени, но завтра время есть.',
        annotatedWords: [
          {
            surface: 'zamanım',
            morphemes: [
              { text: 'zaman', type: 'root', gloss: 'время' },
              { text: 'ım', type: 'person', gloss: 'моё (у меня)' },
            ],
          },
          {
            surface: 'yok',
            morphemes: [{ text: 'yok', type: 'negation', gloss: 'нет, отсутствует' }],
          },
          {
            surface: 'vaktim',
            morphemes: [
              { text: 'vakt', type: 'root', gloss: 'время (vakit → выпало i)' },
              { text: 'im', type: 'person', gloss: 'моё (у меня)' },
            ],
          },
          {
            surface: 'var',
            morphemes: [{ text: 'var', type: 'affix', gloss: 'есть, имеется' }],
          },
        ],
      },
      {
        id: 'evy-ex2',
        tr: 'Buzdolabında taze süt var mı?',
        ru: 'В холодильнике есть свежее молоко?',
        annotatedWords: [
          {
            surface: 'Buzdolabında',
            morphemes: [
              { text: 'Buzdolab', type: 'root', gloss: 'холодильник (p→b)' },
              { text: 'ı', type: 'person', gloss: 'изафет 3 л.' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'da', type: 'affix', gloss: 'местн. п. (где?)' },
            ],
          },
          {
            surface: 'mı',
            morphemes: [{ text: 'mı', type: 'question', gloss: 'вопрос к var' }],
          },
        ],
      },
      {
        id: 'evy-ex3',
        tr: 'Geçen yıl bu mahallede hiç kafe yoktu.',
        ru: 'В прошлом году в этом районе вообще не было кафе.',
        annotatedWords: [
          {
            surface: 'mahallede',
            morphemes: [
              { text: 'mahalle', type: 'root', gloss: 'район, квартал' },
              { text: 'de', type: 'affix', gloss: 'местн. п.' },
            ],
          },
          {
            surface: 'yoktu',
            morphemes: [
              { text: 'yok', type: 'negation', gloss: 'нет (глухое k)' },
              { text: 'tu', type: 'affix', gloss: 'прош. вр. (d→t по Fıstıkçı Şahap)' },
            ],
          },
        ],
      },
      {
        id: 'evy-ex4',
        tr: 'Senin iki kardeşin varmış, doğru mu?',
        ru: 'Говорят, у тебя есть два брата/сестры, правда?',
        annotatedWords: [
          {
            surface: 'kardeşin',
            morphemes: [
              { text: 'kardeş', type: 'root', gloss: 'брат/сестра (после iki без -ler)' },
              { text: 'in', type: 'person', gloss: 'твой (у тебя)' },
            ],
          },
          {
            surface: 'varmış',
            morphemes: [
              { text: 'var', type: 'affix', gloss: 'есть' },
              { text: 'mış', type: 'affix', gloss: 'узнал / говорят' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Наличие (var / yok) vs тождество или признак (değil)',
          explanation:
            'yok отрицает наличие предмета или явления («чего-то нет здесь / у кого-то»), а değil отрицает качество, профессию или тождество («не является кем-то / каким-то»). Нельзя сказать *Bu ev büyük yok!',
          exampleTr: 'Burada su yok (воды нет) vs Bu su soğuk değil (эта вода не холодная)',
          exampleRu: 'отсутствие vs отрицание признака',
          relatedTopicId: 'nominal-predicate-ek-fiil',
        },
        {
          title: '«У меня есть» (Benim ... var) vs «Я нахожусь» (Ben ...-dayım)',
          explanation:
            'Если предмет есть у меня, используем притяжание + var (Param var — «У меня есть деньги»). Не говорите *Bende para var (это значит «при себе / у меня с собой», а не постоянное обладание). И наоборот, о месте человека говорят через -dayım, без var.',
          exampleTr: 'Arabam var (у меня есть машина) vs Evdeyim (я дома, не *Evde varım)',
          exampleRu: 'обладание vs местонахождение',
          relatedTopicId: 'six-cases',
        },
      ],
    },
    miniCheck: [
      {
        id: 'evy-q1',
        prompt: 'Как правильно сказать «У меня есть вопрос» (soru — вопрос)?',
        type: 'choice',
        options: ['Sorum var', 'Bende soru', 'Soru varım', 'Soruyum var'],
        correctAnswer: 'Sorum var',
        explanation: 'Обладание строится через аффикс принадлежности на предмете (soru + m = sorum) + неизменяемое var.',
      },
      {
        id: 'evy-q2',
        prompt: 'Образуйте прошедшее время от «yok» («не было»):',
        type: 'input',
        correctAnswer: 'yoktu',
        acceptedAnswers: ['yoktu'],
        explanation: 'Слово yok оканчивается на глухое k (из Fıstıkçı Şahap), поэтому аффикс прошедшего времени оглушается: yok + tu → yoktu.',
      },
      {
        id: 'evy-q3',
        prompt: 'Выберите верную вопросительную форму «У вас есть время?» (vakit → vaktiniz):',
        type: 'choice',
        options: ['Vaktiniz var mı?', 'Vaktiniz var mu?', 'Vaktiniz var mıydı?', 'Vaktiniz değil mi?'],
        correctAnswer: 'Vaktiniz var mı?',
        explanation: 'После слова var с гласной a вопросительная частица принимает форму mı: var mı?',
      },
      {
        id: 'evy-q4',
        prompt: 'Дополните отрицание: Benim hiç param ___ (У меня совсем нет денег).',
        type: 'input',
        correctAnswer: 'yok',
        acceptedAnswers: ['yok'],
        explanation: 'Отсутствие чего-либо (или кого-либо) всегда выражается предикативом yok.',
      },
    ],
    isDraft: false,
  },
];
