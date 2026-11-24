import type { GrammarTopic } from '../../types';

export const TOPICS_A2: GrammarTopic[] = [
  {
    id: 'izafet',
    sectionId: 'nouns',
    titleRu: 'Изафеты и цепочки изафетов',
    titleTr: 'İsim Tamlamaları',
    level: 'A2',
    levels: ['A2', 'B1'],
    affixes: ['-(n)ın', '-(n)in', '-(n)un', '-(n)ün', '-(s)ı', '-(s)i', '-(s)u', '-(s)ü'],
    summary:
      'Изафет — это связь двух существительных («окно комнаты», «учебник турецкого языка»). В определённом изафете оба слова получают аффиксы (-ın + -ı) и указывают на конкретный объект; в неопределённом первое слово остаётся в основном падеже, а второе получает -(s)ı, образуя устойчивое понятие или класс предметов.',
    formula: [
      { text: 'Зависимое + (-(n)In⁴)', type: 'affix', gloss: 'родительный падеж (только в опр. изафете)' },
      { text: 'Главное', type: 'root', gloss: 'определяемое слово' },
      { text: '+ -(s)I⁴', type: 'person', gloss: 'принадлежность 3-го лица' },
    ],
    conjugationTable: {
      affirmative: {
        'Опр. изафет (согл.)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'in', type: 'affix', gloss: 'род. падеж' },
          { text: ' kapı', type: 'root', gloss: 'дверь' },
          { text: 's', type: 'buffer', gloss: 'буфер s' },
          { text: 'ı', type: 'person', gloss: 'дверь (этого) дома' },
        ],
        'Опр. изафет (гласн.)': [
          { text: 'oda', type: 'root', gloss: 'комната' },
          { text: 'n', type: 'buffer', gloss: 'буфер n' },
          { text: 'ın', type: 'affix', gloss: 'род. падеж' },
          { text: ' pencere', type: 'root', gloss: 'окно' },
          { text: 's', type: 'buffer', gloss: 'буфер s' },
          { text: 'i', type: 'person', gloss: 'окно этой комнаты' },
        ],
        'Неопр. изафет': [
          { text: 'Türkçe', type: 'root', gloss: 'турецкий (без -nin!)' },
          { text: ' kitab', type: 'root', gloss: 'книга (p→b)' },
          { text: 'ı', type: 'person', gloss: 'учебник турецкого' },
        ],
        'Цепочка изафетов': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'in', type: 'affix', gloss: 'род. п.' },
          { text: ' yatak oda', type: 'root', gloss: 'спальная комната' },
          { text: 's', type: 'buffer', gloss: 'буфер s' },
          { text: 'ı', type: 'person', gloss: 'принадл.' },
          { text: 'n', type: 'buffer', gloss: 'буфер n' },
          { text: 'ın', type: 'affix', gloss: 'род. п.' },
          { text: ' kapı', type: 'root', gloss: 'дверь' },
          { text: 's', type: 'buffer', gloss: 'буфер s' },
          { text: 'ı', type: 'person', gloss: 'дверь спальни дома' },
        ],
        'С падежом (где?)': [
          { text: 'şehir merkez', type: 'root', gloss: 'центр города' },
          { text: 'i', type: 'person', gloss: 'принадлежность' },
          { text: 'n', type: 'buffer', gloss: 'буфер n!' },
          { text: 'de', type: 'affix', gloss: 'в центре города' },
        ],
        'С притяжанием (мой)': [
          { text: 'benim', type: 'person', gloss: 'мой' },
          { text: ' çalışma masa', type: 'root', gloss: 'письменный стол' },
          { text: 'm', type: 'person', gloss: '-sı заменяется на -m!' },
        ],
      },
      negative: {
        'Опр. изафет (согл.)': [
          { text: 'ev', type: 'root', gloss: 'дом' },
          { text: 'in', type: 'affix', gloss: 'род. п.' },
          { text: ' anahtar', type: 'root', gloss: 'ключ' },
          { text: 'ı', type: 'person', gloss: 'принадл.' },
          { text: ' yok', type: 'negation', gloss: 'ключа от дома нет' },
        ],
        'Опр. изафет (гласн.)': [
          { text: 'araba', type: 'root', gloss: 'машина' },
          { text: 'n', type: 'buffer', gloss: 'буфер n' },
          { text: 'ın', type: 'affix', gloss: 'род. п.' },
          { text: ' sigorta', type: 'root', gloss: 'страховка' },
          { text: 's', type: 'buffer', gloss: 'буфер s' },
          { text: 'ı', type: 'person', gloss: 'принадл.' },
          { text: ' değil', type: 'negation', gloss: 'не страховка машины' },
        ],
        'Неопр. изафет': [
          { text: 'kahve fincan', type: 'root', gloss: 'кофейная чашка' },
          { text: 'ı', type: 'person', gloss: 'принадл.' },
          { text: ' değil', type: 'negation', gloss: 'не кофейная чашка' },
        ],
        'Цепочка изафетов': [
          { text: 'okul müdür', type: 'root', gloss: 'директор школы' },
          { text: 'ü', type: 'person', gloss: 'принадл.' },
          { text: 'n', type: 'buffer', gloss: 'буфер n' },
          { text: 'ün', type: 'affix', gloss: 'род. п.' },
          { text: ' odası', type: 'root', gloss: 'кабинет' },
          { text: ' değil', type: 'negation', gloss: 'не кабинет директора' },
        ],
        'С падежом (где?)': [
          { text: 'otobüs durağ', type: 'root', gloss: 'автобусная остановка' },
          { text: 'ı', type: 'person', gloss: 'принадл.' },
          { text: 'n', type: 'buffer', gloss: 'буфер n' },
          { text: 'da', type: 'affix', gloss: 'на остановке' },
          { text: ' değil', type: 'negation', gloss: 'не на остановке' },
        ],
        'С притяжанием (мой)': [
          { text: 'çalışma masa', type: 'root', gloss: 'рабочий стол' },
          { text: 'm', type: 'person', gloss: 'мой' },
          { text: ' yok', type: 'negation', gloss: 'у меня нет рабочего стола' },
        ],
      },
      question: {
        'Опр. изафет (согл.)': [
          { text: 'evin kapısı', type: 'root', gloss: 'дверь дома' },
          { text: ' mı?', type: 'question', gloss: 'это дверь дома?' },
        ],
        'Опр. изафет (гласн.)': [
          { text: 'odanın penceresi', type: 'root', gloss: 'окно комнаты' },
          { text: ' mi?', type: 'question', gloss: 'окно комнаты?' },
        ],
        'Неопр. изафет': [
          { text: 'Türkçe kitabı', type: 'root', gloss: 'учебник турецкого' },
          { text: ' mı?', type: 'question', gloss: 'это учебник турецкого?' },
        ],
        'Цепочка изафетов': [
          { text: 'okul müdürünün odası', type: 'root', gloss: 'кабинет директора школы' },
          { text: ' mı?', type: 'question', gloss: 'это кабинет директора?' },
        ],
        'С падежом (где?)': [
          { text: 'şehir merkezinde', type: 'root', gloss: 'в центре города' },
          { text: ' mi?', type: 'question', gloss: 'в центре города?' },
        ],
        'С притяжанием (мой)': [
          { text: 'çalışma masan', type: 'root', gloss: 'твой рабочий стол' },
          { text: ' mı?', type: 'question', gloss: 'это твой рабочий стол?' },
        ],
      },
    },
    examples: [
      {
        id: 'iz-ex1',
        tr: 'Annemin arabasının anahtarını bulamıyorum.',
        ru: 'Я не могу найти ключ от машины моей мамы.',
        annotatedWords: [
          {
            surface: 'Annemin',
            morphemes: [
              { text: 'Anne', type: 'root', gloss: 'мама' },
              { text: 'm', type: 'person', gloss: 'моя' },
              { text: 'in', type: 'affix', gloss: 'род. падеж' },
            ],
          },
          {
            surface: 'arabasının',
            morphemes: [
              { text: 'araba', type: 'root', gloss: 'машина' },
              { text: 's', type: 'buffer', gloss: 'буфер s' },
              { text: 'ı', type: 'person', gloss: 'её машина' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'ın', type: 'affix', gloss: 'род. падеж' },
            ],
          },
          {
            surface: 'anahtarını',
            morphemes: [
              { text: 'anahtar', type: 'root', gloss: 'ключ' },
              { text: 'ı', type: 'person', gloss: 'её ключ (машины)' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'ı', type: 'affix', gloss: 'винит. падеж' },
            ],
          },
        ],
      },
      {
        id: 'iz-ex2',
        tr: 'Hafta sonu şehir merkezinde buluştuk.',
        ru: 'На выходных мы встретились в центре города.',
        annotatedWords: [
          {
            surface: 'Hafta',
            morphemes: [{ text: 'Hafta', type: 'root', gloss: 'неделя (без -nın: неопр. изафет)' }],
          },
          {
            surface: 'sonu',
            morphemes: [
              { text: 'son', type: 'root', gloss: 'конец' },
              { text: 'u', type: 'person', gloss: 'выходные (букв. конец недели)' },
            ],
          },
          {
            surface: 'merkezinde',
            morphemes: [
              { text: 'merkez', type: 'root', gloss: 'центр' },
              { text: 'i', type: 'person', gloss: 'его центр (города)' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'de', type: 'affix', gloss: 'местн. падеж' },
            ],
          },
        ],
      },
      {
        id: 'iz-ex3',
        tr: 'Benim cep telefonum masanın üstünde.',
        ru: 'Мой мобильный телефон на столе.',
        annotatedWords: [
          {
            surface: 'telefonum',
            morphemes: [
              { text: 'telefon', type: 'root', gloss: 'телефон (в cep telefonu -u вытеснено на -um!)' },
              { text: 'um', type: 'person', gloss: 'мой' },
            ],
          },
          {
            surface: 'üstünde.',
            morphemes: [
              { text: 'üst', type: 'root', gloss: 'верх' },
              { text: 'ü', type: 'person', gloss: 'его верх' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'de', type: 'affix', gloss: 'местн. п. (на)' },
            ],
          },
        ],
      },
      {
        id: 'iz-ex4',
        tr: 'Yaz tatili için güneş gözlüğü aldım.',
        ru: 'Я купил солнцезащитные очки для летнего отпуска.',
        annotatedWords: [
          {
            surface: 'tatili',
            morphemes: [
              { text: 'tatil', type: 'root', gloss: 'отпуск (yaz tatili — неопр. изафет)' },
              { text: 'i', type: 'person', gloss: 'принадл. 3 л.' },
            ],
          },
          {
            surface: 'gözlüğü',
            morphemes: [
              { text: 'gözlüğ', type: 'root', gloss: 'gözlük (k→ğ)' },
              { text: 'ü', type: 'person', gloss: 'очки (güneş gözlüğü — неопр. изафет)' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Определённый vs Неопределённый изафет',
          explanation:
            'Определённый изафет (öğretmenin kitabı) — «книга конкретного учителя». Неопределённый (öğretmen kitabı) — «книга для учителей / учительский экземпляр» (вид книги). В цепочке из трёх слов неопределённый изафет не распадается: cep telefonu → benim cep telefonum.',
          exampleTr: 'çocuğun odası (комната ребёнка) vs çocuk odası (детская комната)',
          exampleRu: 'комната конкретного ребёнка vs детская (тип комнаты)',
          relatedTopicId: 'possessive-affixes',
        },
        {
          title: 'Изафет (два существительных) vs Безаффиксное определение материала',
          explanation:
            'Если первое слово обозначает материал (золото, дерево, стекло, камень), из которого сделан предмет, оба слова стоят без аффиксов (altın yüzük, tahta masa). Если второе слово — пространственное имя (üst, alt, iç), это всегда изафет!',
          exampleTr: 'tahta masa (деревянный стол) vs masanın üstü (поверхность стола)',
          exampleRu: 'стол из дерева vs верх стола',
          relatedTopicId: 'spatial-nouns',
        },
      ],
    },
    miniCheck: [
      {
        id: 'iz-q1',
        prompt: 'Как переводится неопределённый изафет «otobüs bileti»?',
        type: 'choice',
        options: ['билет этого автобуса', 'автобусный билет (вид билета)', 'билеты в автобусе', 'у автобуса есть билет'],
        correctAnswer: 'автобусный билет (вид билета)',
        explanation: 'Отсутствие -ın у первого слова делает изафет неопределённым (класс/тип предмета).',
      },
      {
        id: 'iz-q2',
        prompt: 'Заполните пропуск: «В центре города» — şehir merkez___ (аффикс принадлежности + буфер + местный падеж):',
        type: 'input',
        correctAnswer: 'merkezinde',
        acceptedAnswers: ['merkezinde', 'şehir merkezinde'],
        explanation: 'şehir merkezi (неопределённый изафет) + буфер n перед местным падежом -de → merkezinde.',
      },
      {
        id: 'iz-q3',
        prompt: 'Как сказать «моя зубная щётка» (diş fırçası + benim)?',
        type: 'choice',
        options: ['benim diş fırçası', 'benim diş fırçasım', 'benim diş fırçam', 'benim dişim fırça'],
        correctAnswer: 'benim diş fırçam',
        explanation: 'В турецком нельзя иметь два аффикса принадлежности подряд: личный аффикс -m («мой») вытесняет -sı из неопределённого изафета.',
      },
      {
        id: 'iz-q4',
        prompt: 'Образуйте определённый изафет: «имя девушки» (kız + ad):',
        type: 'input',
        correctAnswer: 'kızın adı',
        acceptedAnswers: ['kızın adı'],
        explanation: 'Определённый изафет: kız + ın (род. п.) и ad + ı (принадл. 3 л.) → kızın adı.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'genis-zaman',
    sectionId: 'verbs-basic',
    titleRu: 'Geniş zaman (Широкое время)',
    titleTr: 'Geniş Zaman',
    level: 'A2',
    affixes: ['-r', '-ar', '-er', '-ır', '-ir', '-ur', '-ür', '-maz', '-mez', '-mam', '-mem'],
    summary:
      'Широкое время (аорист) выражает постоянные факты, привычки, расписание, свойства предметов, обещания и вежливые просьбы. Показатель зависит от слоговой структуры основы: после гласной — -r; у многосложных на согласную — -ır/-ir/-ur/-ür; у односложных на согласную — -ar/-er (кроме 13 глаголов-исключений).',
    formula: [
      { text: 'Основа', type: 'root', gloss: 'глагол' },
      { text: '+ -r / -ar / -ır', type: 'affix', gloss: 'положит. форма (в отр. -ma / -maz)' },
      { text: '+ -ım / -sın / -ız', type: 'person', gloss: 'личные окончания' },
    ],
    conjugationTable: {
      affirmative: {
        Ben: [
          { text: 'yap', type: 'root', gloss: 'делать (1 слог)' },
          { text: 'ar', type: 'affix', gloss: 'аорист (-ar)' },
          { text: 'ım', type: 'person', gloss: 'я' },
        ],
        Sen: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ar', type: 'affix', gloss: 'аорист' },
          { text: 'sın', type: 'person', gloss: 'ты' },
        ],
        O: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ar', type: 'affix', gloss: 'аорист' },
        ],
        Biz: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ar', type: 'affix', gloss: 'аорист' },
          { text: 'ız', type: 'person', gloss: 'мы' },
        ],
        Siz: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ar', type: 'affix', gloss: 'аорист' },
          { text: 'sınız', type: 'person', gloss: 'вы' },
        ],
        Onlar: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ar', type: 'affix', gloss: 'аорист' },
          { text: 'lar', type: 'person', gloss: 'они' },
        ],
      },
      negative: {
        Ben: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ma', type: 'negation', gloss: 'отриц. (1 л.: без z!)' },
          { text: 'm', type: 'person', gloss: 'я' },
        ],
        Sen: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'maz', type: 'negation', gloss: 'отриц. аорист (-maz)' },
          { text: 'sın', type: 'person', gloss: 'ты' },
        ],
        O: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'maz', type: 'negation', gloss: 'отриц. аорист' },
        ],
        Biz: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ma', type: 'negation', gloss: 'отриц. (1 л.: без z!)' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'ız', type: 'person', gloss: 'мы (yapmayız)' },
        ],
        Siz: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'maz', type: 'negation', gloss: 'отриц. аорист' },
          { text: 'sınız', type: 'person', gloss: 'вы' },
        ],
        Onlar: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'maz', type: 'negation', gloss: 'отриц. аорист' },
          { text: 'lar', type: 'person', gloss: 'они' },
        ],
      },
      question: {
        Ben: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ar', type: 'affix', gloss: 'аорист' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
          { text: 'yım', type: 'person', gloss: 'я' },
        ],
        Sen: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ar', type: 'affix', gloss: 'аорист' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
          { text: 'sın', type: 'person', gloss: 'ты' },
        ],
        O: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ar', type: 'affix', gloss: 'аорист' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
        ],
        Biz: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ar', type: 'affix', gloss: 'аорист' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
          { text: 'yız', type: 'person', gloss: 'мы' },
        ],
        Siz: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ar', type: 'affix', gloss: 'аорист' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
          { text: 'sınız', type: 'person', gloss: 'вы' },
        ],
        Onlar: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'arlar', type: 'affix', gloss: 'аорист + они' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
        ],
      },
      negativeQuestion: {
        Ben: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'maz', type: 'negation', gloss: 'в вопросе -maz сохраняет z!' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
          { text: 'yım', type: 'person', gloss: 'я' },
        ],
        Sen: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'maz', type: 'negation', gloss: 'отриц.' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
          { text: 'sın', type: 'person', gloss: 'ты' },
        ],
        O: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'maz', type: 'negation', gloss: 'отриц.' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
        ],
        Biz: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'maz', type: 'negation', gloss: 'в вопросе -maz сохраняет z!' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
          { text: 'yız', type: 'person', gloss: 'мы' },
        ],
        Siz: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'maz', type: 'negation', gloss: 'отриц.' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
          { text: 'sınız', type: 'person', gloss: 'вы' },
        ],
        Onlar: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'mazlar', type: 'negation', gloss: 'отриц. + они' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
        ],
      },
    },
    examples: [
      {
        id: 'gz-ex1',
        tr: 'Güneş doğudan doğar, batıdan batar.',
        ru: 'Солнце встаёт на востоке, садится на западе.',
        annotatedWords: [
          {
            surface: 'doğar,',
            morphemes: [
              { text: 'doğ', type: 'root', gloss: 'всходить (1 слог)' },
              { text: 'ar', type: 'affix', gloss: 'шир. время (-ar)' },
            ],
          },
          {
            surface: 'batar.',
            morphemes: [
              { text: 'bat', type: 'root', gloss: 'заходить (1 слог)' },
              { text: 'ar', type: 'affix', gloss: 'шир. время (-ar)' },
            ],
          },
        ],
      },
      {
        id: 'gz-ex2',
        tr: 'Pencereyi açar mısınız, lütfen?',
        ru: 'Не откроете ли вы окно, пожалуйста?',
        annotatedWords: [
          {
            surface: 'açar',
            morphemes: [
              { text: 'aç', type: 'root', gloss: 'открывать (1 слог)' },
              { text: 'ar', type: 'affix', gloss: 'вежливая просьба (шир. вр.)' },
            ],
          },
          {
            surface: 'mısınız,',
            morphemes: [
              { text: 'mı', type: 'question', gloss: 'вопрос' },
              { text: 'sınız', type: 'person', gloss: 'вы' },
            ],
          },
        ],
      },
      {
        id: 'gz-ex3',
        tr: 'Ben hiç yalan söylemem ama bazen geç kalırım.',
        ru: 'Я никогда не вру, но иногда опаздываю.',
        annotatedWords: [
          {
            surface: 'söylemem',
            morphemes: [
              { text: 'söyle', type: 'root', gloss: 'говорить' },
              { text: 'me', type: 'negation', gloss: 'отриц. 1 л.' },
              { text: 'm', type: 'person', gloss: 'я' },
            ],
          },
          {
            surface: 'kalırım.',
            morphemes: [
              { text: 'kal', type: 'root', gloss: 'оставаться (искл. 1 слог → -ır!)' },
              { text: 'ır', type: 'affix', gloss: 'шир. время' },
              { text: 'ım', type: 'person', gloss: 'я' },
            ],
          },
        ],
      },
      {
        id: 'gz-ex4',
        tr: 'Bu tren Ankara’ya her sabah saat yedide gider.',
        ru: 'Этот поезд идёт в Анкару каждое утро в семь часов.',
        annotatedWords: [
          {
            surface: 'gider.',
            morphemes: [
              { text: 'gid', type: 'root', gloss: 'git (t→d)' },
              { text: 'er', type: 'affix', gloss: 'шир. время' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: '13 односложных глаголов-исключений (almak, bilmek, bulmak, gelmek, görmek, kalmak, olmak, ölmek, sanmak, varmak, vermek, vurmak, durmak)',
          explanation:
            'Обычные односложные глаголы на согласную принимают -ar/-er (yapar, gider, yazar). Но 13 частых глаголов на -l/-r/-n (gelir, alır, bilir, görür, olur, kalır, verir, bulur и др.) берут узкую гласную -ır/-ir/-ur/-ür!',
          exampleTr: 'gelir (не *geler), alır (не *alar), görür (не *görer)',
          exampleRu: 'приходит, берёт, видит',
          relatedTopicId: 'simdiki-zaman',
        },
        {
          title: 'Отрицание в 1-м лице (yapmam / yapmayız) vs в вопросе (yapmaz mıyım?)',
          explanation:
            'В утверждении и обычном отрицании у Ben и Biz буква z выпадает: yapmam, yapmayız (иначе перепуталось бы). Но в отрицательном вопросе -maz возвращается: yapmaz mıyım? yapmaz mıyız?',
          exampleTr: 'Ben gitmem (я не пойду) vs Ben gitmez miyim? (разве я не пойду?)',
          exampleRu: 'я не хожу vs разве я не хожу?',
          relatedTopicId: 'ability-ebil',
        },
      ],
    },
    miniCheck: [
      {
        id: 'gz-q1',
        prompt: 'Выберите верную форму 3-го лица ед. ч. в Geniş zaman для глагола-исключения «bilmek» (знать):',
        type: 'choice',
        options: ['biler', 'bilir', 'bilr', 'biliyor'],
        correctAnswer: 'bilir',
        explanation: 'bilmek входит в список 13 односложных исключений и берёт узкую гласную -ir → bilir.',
      },
      {
        id: 'gz-q2',
        prompt: 'Образуйте отрицательную форму 1-го лица мн. ч. (Biz) в Geniş zaman от глагола «unutmak» (забывать):',
        type: 'input',
        correctAnswer: 'unutmayız',
        acceptedAnswers: ['unutmayız'],
        explanation: 'В 1-м лице мн. ч. отрицания аориста z выпадает и ставится буфер y: unut + ma + y + ız → unutmayız.',
      },
      {
        id: 'gz-q3',
        prompt: 'Как будет «Вы не поможете?» (вежливая просьба, yardım etmek, Siz):',
        type: 'choice',
        options: ['yardım eter misiniz?', 'yardım eder misiniz?', 'yardım edersiniz mi?', 'yardım edir misiniz?'],
        correctAnswer: 'yardım eder misiniz?',
        explanation: 'etmek не является исключением по гласной (односложное → -er), но t озвончается в d перед гласной → eder misiniz?',
      },
      {
        id: 'gz-q4',
        prompt: 'Образуйте форму 3-го лица ед. ч. (O) в Geniş zaman от глагола «konuşmak» (говорить):',
        type: 'input',
        correctAnswer: 'konuşur',
        acceptedAnswers: ['konuşur'],
        explanation: 'Многосложная основа на согласную (ko-nuş) всегда берёт узкую гармонию на 4 → konuşur.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'gecmis-zaman-di-mis',
    sectionId: 'verbs-basic',
    titleRu: 'Geçmiş zaman: -di vs -miş',
    titleTr: 'Belirli ve Belirsiz Geçmiş Zaman',
    level: 'A2',
    levels: ['A1', 'A2'],
    affixes: ['-dı', '-di', '-du', '-dü', '-tı', '-ti', '-tu', '-tü', '-mış', '-miş', '-muş', '-müş'],
    summary:
      'В турецком два прошедших времени, отражающие источник знания говорящего. -DI⁴ (очевидное) употребляется, когда вы сами видели событие или ручаетесь за факт. -mIş⁴ (заглазное/неочевидное) используется при пересказе чужих слов, догадке по следам/результату или внезапном удивлении.',
    formula: [
      { text: 'Основа (+ -ma/-me)', type: 'root', gloss: 'глагол (и отрицание)' },
      { text: '+ -DI⁴ / -mIş⁴', type: 'affix', gloss: 'видел сам (-dı/-tı) vs узнал/догадался (-mış)' },
      { text: '+ -m/-n/-k  или  -ım/-sın', type: 'person', gloss: 'усечённые окончания для -dı, полные для -mış' },
    ],
    conjugationTable: {
      affirmative: {
        Ben: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'di', type: 'affix', gloss: 'очевидное (-dı)' },
          { text: 'm', type: 'person', gloss: 'я (и -miş: gelmişim)' },
        ],
        Sen: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'di', type: 'affix', gloss: 'очевидное' },
          { text: 'n', type: 'person', gloss: 'ты (и -miş: gelmişsin)' },
        ],
        O: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'di', type: 'affix', gloss: 'пришёл (факт) / gelmiş (говорят)' },
        ],
        Biz: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'di', type: 'affix', gloss: 'очевидное' },
          { text: 'k', type: 'person', gloss: 'мы (и -miş: gelmişiz)' },
        ],
        Siz: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'di', type: 'affix', gloss: 'очевидное' },
          { text: 'niz', type: 'person', gloss: 'вы (и -miş: gelmişsiniz)' },
        ],
        Onlar: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'di', type: 'affix', gloss: 'очевидное' },
          { text: 'ler', type: 'person', gloss: 'они (и -miş: gelmişler)' },
        ],
      },
      negative: {
        Ben: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'me', type: 'negation', gloss: 'отриц.' },
          { text: 'di', type: 'affix', gloss: 'прош.' },
          { text: 'm', type: 'person', gloss: 'я (gelmemişim)' },
        ],
        Sen: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'me', type: 'negation', gloss: 'отриц.' },
          { text: 'di', type: 'affix', gloss: 'прош.' },
          { text: 'n', type: 'person', gloss: 'ты (gelmemişsin)' },
        ],
        O: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'me', type: 'negation', gloss: 'отриц.' },
          { text: 'di', type: 'affix', gloss: 'не пришёл / gelmemiş' },
        ],
        Biz: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'me', type: 'negation', gloss: 'отриц.' },
          { text: 'di', type: 'affix', gloss: 'прош.' },
          { text: 'k', type: 'person', gloss: 'мы (gelmemişiz)' },
        ],
        Siz: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'me', type: 'negation', gloss: 'отриц.' },
          { text: 'di', type: 'affix', gloss: 'прош.' },
          { text: 'niz', type: 'person', gloss: 'вы (gelmemişsiniz)' },
        ],
        Onlar: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'me', type: 'negation', gloss: 'отриц.' },
          { text: 'di', type: 'affix', gloss: 'прош.' },
          { text: 'ler', type: 'person', gloss: 'они (gelmemişler)' },
        ],
      },
      question: {
        Ben: [
          { text: 'geldim', type: 'root', gloss: 'пришёл' },
          { text: ' mi?', type: 'question', gloss: 'вопрос после лица! (gelmiş miyim?)' },
        ],
        Sen: [
          { text: 'geldin', type: 'root', gloss: 'ты пришёл' },
          { text: ' mi?', type: 'question', gloss: 'вопрос после лица! (gelmiş misin?)' },
        ],
        O: [
          { text: 'geldi', type: 'root', gloss: 'пришёл' },
          { text: ' mi?', type: 'question', gloss: 'вопрос (gelmiş mi?)' },
        ],
        Biz: [
          { text: 'geldik', type: 'root', gloss: 'мы пришли' },
          { text: ' mi?', type: 'question', gloss: 'вопрос после лица! (gelmiş miyiz?)' },
        ],
        Siz: [
          { text: 'geldiniz', type: 'root', gloss: 'вы пришли' },
          { text: ' mi?', type: 'question', gloss: 'вопрос после лица! (gelmiş misiniz?)' },
        ],
        Onlar: [
          { text: 'geldiler', type: 'root', gloss: 'они пришли' },
          { text: ' mi?', type: 'question', gloss: 'вопрос (gelmişler mi?)' },
        ],
      },
      negativeQuestion: {
        Ben: [
          { text: 'gelmedim', type: 'negation', gloss: 'я не пришёл' },
          { text: ' mi?', type: 'question', gloss: 'разве я не пришёл?' },
        ],
        Sen: [
          { text: 'gelmedin', type: 'negation', gloss: 'ты не пришёл' },
          { text: ' mi?', type: 'question', gloss: 'ты не пришёл?' },
        ],
        O: [
          { text: 'gelmedi', type: 'negation', gloss: 'он не пришёл' },
          { text: ' mi?', type: 'question', gloss: 'он не пришёл?' },
        ],
        Biz: [
          { text: 'gelmedik', type: 'negation', gloss: 'мы не пришли' },
          { text: ' mi?', type: 'question', gloss: 'мы не пришли?' },
        ],
        Siz: [
          { text: 'gelmediniz', type: 'negation', gloss: 'вы не пришли' },
          { text: ' mi?', type: 'question', gloss: 'вы не пришли?' },
        ],
        Onlar: [
          { text: 'gelmediler', type: 'negation', gloss: 'они не пришли' },
          { text: ' mi?', type: 'question', gloss: 'они не пришли?' },
        ],
      },
    },
    examples: [
      {
        id: 'gzdm-ex1',
        tr: 'Dün akşam sinemaya gittik, film çok güzeldi.',
        ru: 'Вчера вечером мы ходили в кино, фильм был очень хорошим (личный опыт).',
        annotatedWords: [
          {
            surface: 'gittik,',
            morphemes: [
              { text: 'git', type: 'root', gloss: 'идти (глухое t)' },
              { text: 'ti', type: 'affix', gloss: 'очевидное прош. (-di → -ti)' },
              { text: 'k', type: 'person', gloss: 'мы' },
            ],
          },
          {
            surface: 'güzeldi.',
            morphemes: [
              { text: 'güzel', type: 'root', gloss: 'красивый/хороший' },
              { text: 'di', type: 'affix', gloss: 'именное прош. (был)' },
            ],
          },
        ],
      },
      {
        id: 'gzdm-ex2',
        tr: 'Gece kar yağmış, her yer bembeyaz olmuş!',
        ru: 'Ночью, оказывается, выпал снег — всё вокруг стало белоснежным!',
        annotatedWords: [
          {
            surface: 'yağmış,',
            morphemes: [
              { text: 'yağ', type: 'root', gloss: 'идти (об осадках)' },
              { text: 'mış', type: 'affix', gloss: 'вывод по результату (утром увидели снег)' },
            ],
          },
          {
            surface: 'olmuş!',
            morphemes: [
              { text: 'ol', type: 'root', gloss: 'стать' },
              { text: 'muş', type: 'affix', gloss: 'удивление / результат' },
            ],
          },
        ],
      },
      {
        id: 'gzdm-ex3',
        tr: 'Annem söyledi: kardeşim sınavı geçmiş.',
        ru: 'Мама сказала: мой брат/сестра, оказывается, сдал(а) экзамен.',
        annotatedWords: [
          {
            surface: 'söyledi:',
            morphemes: [
              { text: 'söyle', type: 'root', gloss: 'сказать (слышал сам)' },
              { text: 'di', type: 'affix', gloss: 'очевидное прош.' },
            ],
          },
          {
            surface: 'geçmiş.',
            morphemes: [
              { text: 'geç', type: 'root', gloss: 'сдать/пройти' },
              { text: 'miş', type: 'affix', gloss: 'пересказ со слов мамы' },
            ],
          },
        ],
      },
      {
        id: 'gzdm-ex4',
        tr: 'Eyvah, anahtarımı evde unutmuşum!',
        ru: 'Ой, я, оказывается, забыл ключи дома!',
        annotatedWords: [
          {
            surface: 'unutmuşum!',
            morphemes: [
              { text: 'unut', type: 'root', gloss: 'забыть' },
              { text: 'muş', type: 'affix', gloss: 'внезапное осознание' },
              { text: 'um', type: 'person', gloss: 'я' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Место вопросительной частицы mı в -dı vs в -mış',
          explanation:
            'В -dı вопрос ставится ПОСЛЕ личного окончания (geldin mi? geldik mi?). А в -mış вопросительная частица стоит ПЕРЕД личным окончанием (gelmiş misin? gelmiş miyiz?).',
          exampleTr: 'Geldin mi? (очевидн.) vs Gelmiş misin? (оказывается, ты пришёл?)',
          exampleRu: 'Ты пришёл? vs Говорят, ты пришёл?',
          relatedTopicId: 'compound-tenses-hikaye',
        },
        {
          title: '-miş как сказуемое vs -miş как причастие определения',
          explanation:
            'Форма на -mış в конце предложения — глагол-сказуемое (пересказ). Форма на -mış перед существительным — причастие прошедшего времени («прочитанная книга», «сломанный телефон»).',
          exampleTr: 'Telefon kırılmış (телефон, похоже, сломался) vs kırılmış telefon (сломанный телефон)',
          exampleRu: 'телефон сломался vs сломанный телефон',
          relatedTopicId: 'participles-an-dik',
        },
      ],
    },
    miniCheck: [
      {
        id: 'gzdm-q1',
        prompt: 'Вы смотрите в окно утром и видите мокрый асфальт (ночью вы спали). Как сказать «Ночью шёл дождь»?',
        type: 'choice',
        options: ['Gece yağmur yağdı.', 'Gece yağmur yağmış.', 'Gece yağmur yağıyor.', 'Gece yağmur yağacak.'],
        correctAnswer: 'Gece yağmur yağmış.',
        explanation: 'Вы не видели самого дождя, а сделали вывод по результату (мокрый асфальт), поэтому нужно -mış.',
      },
      {
        id: 'gzdm-q2',
        prompt: 'Образуйте форму «мы сделали» (yapmak, очевидное прошедшее -dı):',
        type: 'input',
        correctAnswer: 'yaptık',
        acceptedAnswers: ['yaptık'],
        explanation: 'Корень yap- заканчивается на глухую p (Fıstıkçı Şahap), поэтому -dı оглушается в -tı, а 1 л. мн. ч. у -dı имеет окончание -k → yaptık.',
      },
      {
        id: 'gzdm-q3',
        prompt: 'Как правильно спросить «Вы прочитали?» (okumak, очевидное прошедшее, Siz):',
        type: 'choice',
        options: ['Okudu musunuz?', 'Okudunuz mu?', 'Okudunuz musunuz?', 'Okudunuz mı?'],
        correctAnswer: 'Okudunuz mu?',
        explanation: 'В -dı вопросительная частица стоит в самом конце после личного окончания -nuz (после u → mu).',
      },
      {
        id: 'gzdm-q4',
        prompt: 'Переведите: «Оказывается, я не выключил свет» (kapatmak, неочевидное -mış, Ben):',
        type: 'input',
        correctAnswer: 'kapatmamışım',
        acceptedAnswers: ['kapatmamışım'],
        explanation: 'kapat + ma (отрицание) + mış (осознание) + ım (я) → kapatmamışım.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'gelecek-zaman',
    sectionId: 'verbs-basic',
    titleRu: 'Gelecek zaman (Будущее время)',
    titleTr: 'Gelecek Zaman',
    level: 'A2',
    affixes: ['-(y)acak', '-(y)ecek', '-(y)acağ', '-(y)eceğ'],
    summary:
      'Обозначает запланированные действия, намерения и предсказания в будущем. Показатель -(y)acak/-(y)ecek подчиняется гармонии на 2 (a/e). Важное правило: в 1-м лице (Ben, Biz) личное окончание начинается с гласной, поэтому k в аффиксе озвончается в ğ (yapacağım, gideceğiz).',
    formula: [
      { text: 'Основа (+ -ma/-me)', type: 'root', gloss: 'глагол (и отрицание)' },
      { text: '+ (y)', type: 'buffer', gloss: 'после гласной (в т.ч. после -ma/-me)' },
      { text: '+ -acak / -ecek', type: 'affix', gloss: 'будущее время (k→ğ в 1 л.)' },
      { text: '+ -ım / -sın / -ız', type: 'person', gloss: 'личные окончания' },
    ],
    conjugationTable: {
      affirmative: {
        Ben: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'acağ', type: 'affix', gloss: '-acak (k→ğ перед -ım)' },
          { text: 'ım', type: 'person', gloss: 'я' },
        ],
        Sen: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'acak', type: 'affix', gloss: 'буд. время' },
          { text: 'sın', type: 'person', gloss: 'ты' },
        ],
        O: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'acak', type: 'affix', gloss: 'буд. время' },
        ],
        Biz: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'acağ', type: 'affix', gloss: '-acak (k→ğ перед -ız)' },
          { text: 'ız', type: 'person', gloss: 'мы' },
        ],
        Siz: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'acak', type: 'affix', gloss: 'буд. время' },
          { text: 'sınız', type: 'person', gloss: 'вы' },
        ],
        Onlar: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'acak', type: 'affix', gloss: 'буд. время' },
          { text: 'lar', type: 'person', gloss: 'они' },
        ],
      },
      negative: {
        Ben: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ma', type: 'negation', gloss: 'отриц.' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'acağ', type: 'affix', gloss: 'буд. время (k→ğ)' },
          { text: 'ım', type: 'person', gloss: 'я' },
        ],
        Sen: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ma', type: 'negation', gloss: 'отриц.' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'acak', type: 'affix', gloss: 'буд. время' },
          { text: 'sın', type: 'person', gloss: 'ты' },
        ],
        O: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ma', type: 'negation', gloss: 'отриц.' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'acak', type: 'affix', gloss: 'буд. время' },
        ],
        Biz: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ma', type: 'negation', gloss: 'отриц.' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'acağ', type: 'affix', gloss: 'буд. время (k→ğ)' },
          { text: 'ız', type: 'person', gloss: 'мы' },
        ],
        Siz: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ma', type: 'negation', gloss: 'отриц.' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'acak', type: 'affix', gloss: 'буд. время' },
          { text: 'sınız', type: 'person', gloss: 'вы' },
        ],
        Onlar: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ma', type: 'negation', gloss: 'отриц.' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'acak', type: 'affix', gloss: 'буд. время' },
          { text: 'lar', type: 'person', gloss: 'они' },
        ],
      },
      question: {
        Ben: [
          { text: 'yapacak', type: 'affix', gloss: 'буд. время (k сохраняется!)' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
          { text: 'yım', type: 'person', gloss: 'я' },
        ],
        Sen: [
          { text: 'yapacak', type: 'affix', gloss: 'буд. время' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
          { text: 'sın', type: 'person', gloss: 'ты' },
        ],
        O: [
          { text: 'yapacak', type: 'affix', gloss: 'буд. время' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
        ],
        Biz: [
          { text: 'yapacak', type: 'affix', gloss: 'буд. время (k сохраняется!)' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
          { text: 'yız', type: 'person', gloss: 'мы' },
        ],
        Siz: [
          { text: 'yapacak', type: 'affix', gloss: 'буд. время' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
          { text: 'sınız', type: 'person', gloss: 'вы' },
        ],
        Onlar: [
          { text: 'yapacaklar', type: 'affix', gloss: 'буд. время + они' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
        ],
      },
      negativeQuestion: {
        Ben: [
          { text: 'yapmayacak', type: 'negation', gloss: 'не сделает' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
          { text: 'yım', type: 'person', gloss: 'я' },
        ],
        Sen: [
          { text: 'yapmayacak', type: 'negation', gloss: 'не сделает' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
          { text: 'sın', type: 'person', gloss: 'ты' },
        ],
        O: [
          { text: 'yapmayacak', type: 'negation', gloss: 'не сделает' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
        ],
        Biz: [
          { text: 'yapmayacak', type: 'negation', gloss: 'не сделает' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
          { text: 'yız', type: 'person', gloss: 'мы' },
        ],
        Siz: [
          { text: 'yapmayacak', type: 'negation', gloss: 'не сделает' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
          { text: 'sınız', type: 'person', gloss: 'вы' },
        ],
        Onlar: [
          { text: 'yapmayacaklar', type: 'negation', gloss: 'не сделают' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
        ],
      },
    },
    examples: [
      {
        id: 'fz-ex1',
        tr: 'Gelecek hafta İstanbul’a taşınacağız.',
        ru: 'На следующей неделе мы переедем в Стамбул.',
        annotatedWords: [
          {
            surface: 'taşınacağız.',
            morphemes: [
              { text: 'taşın', type: 'root', gloss: 'переезжать' },
              { text: 'acağ', type: 'affix', gloss: 'буд. время (k→ğ)' },
              { text: 'ız', type: 'person', gloss: 'мы' },
            ],
          },
        ],
      },
      {
        id: 'fz-ex2',
        tr: 'Merak etme, sana her şeyi anlatacağım.',
        ru: 'Не волнуйся, я всё тебе расскажу.',
        annotatedWords: [
          {
            surface: 'anlatacağım.',
            morphemes: [
              { text: 'anlat', type: 'root', gloss: 'рассказывать' },
              { text: 'acağ', type: 'affix', gloss: 'буд. время (k→ğ)' },
              { text: 'ım', type: 'person', gloss: 'я' },
            ],
          },
        ],
      },
      {
        id: 'fz-ex3',
        tr: 'Yarın akşam yemeğini nerede yiyeceğiz?',
        ru: 'Где мы будем ужинать завтра?',
        annotatedWords: [
          {
            surface: 'yiyeceğiz?',
            morphemes: [
              { text: 'yi', type: 'root', gloss: 'ye (сужение e→i перед y)' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'eceğ', type: 'affix', gloss: 'буд. время (k→ğ)' },
              { text: 'iz', type: 'person', gloss: 'мы' },
            ],
          },
        ],
      },
      {
        id: 'fz-ex4',
        tr: 'Bu konuyu bir daha konuşmayacak mıyız?',
        ru: 'Мы больше не будем обсуждать эту тему?',
        annotatedWords: [
          {
            surface: 'konuşmayacak',
            morphemes: [
              { text: 'konuş', type: 'root', gloss: 'говорить/обсуждать' },
              { text: 'ma', type: 'negation', gloss: 'отриц.' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'acak', type: 'affix', gloss: 'буд. время (k перед mı сохраняется)' },
            ],
          },
          {
            surface: 'mıyız?',
            morphemes: [
              { text: 'mı', type: 'question', gloss: 'вопрос' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'ız', type: 'person', gloss: 'мы' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Сужение основы у глаголов «demek» и «yemek» перед y',
          explanation:
            'Два глагола — demek (сказать) и yemek (есть) — перед буферной y сужают свою корневую гласную e в i: diyeceğim (скажу), yiyecek (съест). В отрицании буфер y стоит после -me, поэтому корень не сужается: yemeyecek!',
          exampleTr: 'yiyeceğim (я съем) vs yemeyeceğim (я не буду есть)',
          exampleRu: 'съем vs не съем',
          relatedTopicId: 'consonant-rules',
        },
        {
          title: '-acak в будущем времени vs причастие будущего времени -acak',
          explanation:
            'В конце предложения gideceğim — глагол будущего времени («я пойду»). Перед существительным gideceğim yer — причастие («место, куда я пойду»).',
          exampleTr: 'Yarın gideceğim vs Yarın gideceğim şehir',
          exampleRu: 'Завтра я поеду vs Город, куда я поеду завтра',
          relatedTopicId: 'participles-an-dik',
        },
      ],
    },
    miniCheck: [
      {
        id: 'fz-q1',
        prompt: 'Образуйте форму 1-го лица ед. ч. (Ben) в Gelecek zaman от глагола «gitmek» (идти):',
        type: 'input',
        correctAnswer: 'gideceğim',
        acceptedAnswers: ['gideceğim'],
        explanation: 'У gitmek конечное t озвончается в d, а k в -ecek озвончается в ğ перед -im → gideceğim.',
      },
      {
        id: 'fz-q2',
        prompt: 'Как будет «он не приедет» (gelmek, O)?',
        type: 'choice',
        options: ['gelmecek', 'gelmeyecek', 'gelmiyecek', 'gelmiyacak'],
        correctAnswer: 'gelmeyecek',
        explanation: 'Основа gel + отрицание -me + буфер y + ecek → gelmeyecek (сужения e→i здесь нет, как в -yor).',
      },
      {
        id: 'fz-q3',
        prompt: 'Выберите верную форму для «мы скажем» (demek, Biz):',
        type: 'choice',
        options: ['deyeceğiz', 'diyeceğiz', 'deyeceğim', 'diyecekiz'],
        correctAnswer: 'diyeceğiz',
        explanation: 'У глагола demek перед буферной y гласная e сужается в i, а k→ğ перед -iz → diyeceğiz.',
      },
      {
        id: 'fz-q4',
        prompt: 'Образуйте вопросительную форму 1-го лица ед. ч. (Ben): «Я буду читать?» (okumak):',
        type: 'input',
        correctAnswer: 'okuyacak mıyım?',
        acceptedAnswers: ['okuyacak mıyım', 'okuyacak mıyım?'],
        explanation: 'okuyacak + mı + yım → okuyacak mıyım? (в вопросе k перед пробелом не озвончается).',
      },
    ],
    isDraft: false,
  },

  {
    id: 'necessity-mali',
    sectionId: 'verbs-basic',
    titleRu: 'Долженствование (-malı, lazım, zorunda)',
    titleTr: 'Gereklilik Kipi',
    level: 'A2',
    levels: ['A2', 'B1'],
    affixes: ['-malı', '-meli', 'lazım', 'gerek', 'zorunda', 'mecbur'],
    summary:
      'В турецком языке необходимость выражается тремя основными способами: 1) аффикс -malı/-meli — внутренний долг, совет или логическое предположение («должно быть»); 2) конструкция -ma + принадл. + lazım / gerek («нужно, чтобы...»); 3) -mak zorunda — жёсткая обязанность под давлением обстоятельств («вынужден, обязан»).',
    formula: [
      { text: 'Основа (+ -ma/-me)', type: 'root', gloss: 'глагол' },
      { text: '+ -malı / -meli', type: 'affix', gloss: 'долженствование' },
      { text: '+ (y) + -ım / -sın / -ız', type: 'person', gloss: 'личное окончание' },
    ],
    conjugationTable: {
      affirmative: {
        Ben: [
          { text: 'git', type: 'root', gloss: 'идти' },
          { text: 'meli', type: 'affix', gloss: 'должен' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'im', type: 'person', gloss: 'я (мне нужно уйти)' },
        ],
        Sen: [
          { text: 'git', type: 'root', gloss: 'идти' },
          { text: 'meli', type: 'affix', gloss: 'должен' },
          { text: 'sin', type: 'person', gloss: 'ты' },
        ],
        O: [
          { text: 'git', type: 'root', gloss: 'идти' },
          { text: 'meli', type: 'affix', gloss: 'он(а) должен(на)' },
        ],
        Biz: [
          { text: 'git', type: 'root', gloss: 'идти' },
          { text: 'meli', type: 'affix', gloss: 'должны' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'iz', type: 'person', gloss: 'мы' },
        ],
        Siz: [
          { text: 'git', type: 'root', gloss: 'идти' },
          { text: 'meli', type: 'affix', gloss: 'должны' },
          { text: 'siniz', type: 'person', gloss: 'вы' },
        ],
        Onlar: [
          { text: 'git', type: 'root', gloss: 'идти' },
          { text: 'meli', type: 'affix', gloss: 'должны' },
          { text: 'ler', type: 'person', gloss: 'они' },
        ],
      },
      negative: {
        Ben: [
          { text: 'git', type: 'root', gloss: 'идти' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'meli', type: 'affix', gloss: 'должен' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'im', type: 'person', gloss: 'я не должен идти' },
        ],
        Sen: [
          { text: 'git', type: 'root', gloss: 'идти' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'meli', type: 'affix', gloss: 'должен' },
          { text: 'sin', type: 'person', gloss: 'ты' },
        ],
        O: [
          { text: 'git', type: 'root', gloss: 'идти' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'meli', type: 'affix', gloss: 'не должен' },
        ],
        Biz: [
          { text: 'git', type: 'root', gloss: 'идти' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'meli', type: 'affix', gloss: 'должны' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'iz', type: 'person', gloss: 'мы' },
        ],
        Siz: [
          { text: 'git', type: 'root', gloss: 'идти' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'meli', type: 'affix', gloss: 'должны' },
          { text: 'siniz', type: 'person', gloss: 'вы' },
        ],
        Onlar: [
          { text: 'git', type: 'root', gloss: 'идти' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'meli', type: 'affix', gloss: 'должны' },
          { text: 'ler', type: 'person', gloss: 'они' },
        ],
      },
      question: {
        Ben: [
          { text: 'gitmeli', type: 'affix', gloss: 'должен идти' },
          { text: ' mi', type: 'question', gloss: 'вопрос' },
          { text: 'yim', type: 'person', gloss: 'я' },
        ],
        Sen: [
          { text: 'gitmeli', type: 'affix', gloss: 'должен идти' },
          { text: ' mi', type: 'question', gloss: 'вопрос' },
          { text: 'sin', type: 'person', gloss: 'ты' },
        ],
        O: [
          { text: 'gitmeli', type: 'affix', gloss: 'должен идти' },
          { text: ' mi', type: 'question', gloss: 'вопрос' },
        ],
        Biz: [
          { text: 'gitmeli', type: 'affix', gloss: 'должны идти' },
          { text: ' mi', type: 'question', gloss: 'вопрос' },
          { text: 'yiz', type: 'person', gloss: 'мы' },
        ],
        Siz: [
          { text: 'gitmeli', type: 'affix', gloss: 'должны идти' },
          { text: ' mi', type: 'question', gloss: 'вопрос' },
          { text: 'siniz', type: 'person', gloss: 'вы' },
        ],
        Onlar: [
          { text: 'gitmeliler', type: 'affix', gloss: 'должны идти + они' },
          { text: ' mi', type: 'question', gloss: 'вопрос' },
        ],
      },
      negativeQuestion: {
        Ben: [
          { text: 'gitmemeli', type: 'negation', gloss: 'не должен идти' },
          { text: ' mi', type: 'question', gloss: 'вопрос' },
          { text: 'yim', type: 'person', gloss: 'я' },
        ],
        Sen: [
          { text: 'gitmemeli', type: 'negation', gloss: 'не должен идти' },
          { text: ' mi', type: 'question', gloss: 'вопрос' },
          { text: 'sin', type: 'person', gloss: 'ты' },
        ],
        O: [
          { text: 'gitmemeli', type: 'negation', gloss: 'не должен идти' },
          { text: ' mi', type: 'question', gloss: 'вопрос' },
        ],
        Biz: [
          { text: 'gitmemeli', type: 'negation', gloss: 'не должны идти' },
          { text: ' mi', type: 'question', gloss: 'вопрос' },
          { text: 'yiz', type: 'person', gloss: 'мы' },
        ],
        Siz: [
          { text: 'gitmemeli', type: 'negation', gloss: 'не должны идти' },
          { text: ' mi', type: 'question', gloss: 'вопрос' },
          { text: 'siniz', type: 'person', gloss: 'вы' },
        ],
        Onlar: [
          { text: 'gitmemeliler', type: 'negation', gloss: 'не должны идти' },
          { text: ' mi', type: 'question', gloss: 'вопрос' },
        ],
      },
    },
    examples: [
      {
        id: 'nm-ex1',
        tr: 'Yarın erken kalkmalıyım, çünkü önemli bir toplantım var.',
        ru: 'Завтра я должен встать пораньше, потому что у меня важная встреча.',
        annotatedWords: [
          {
            surface: 'kalkmalıyım,',
            morphemes: [
              { text: 'kalk', type: 'root', gloss: 'вставать' },
              { text: 'malı', type: 'affix', gloss: 'должен' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'ım', type: 'person', gloss: 'я' },
            ],
          },
        ],
      },
      {
        id: 'nm-ex2',
        tr: 'Bu ilacı yemekten sonra alman lazım.',
        ru: 'Тебе нужно принять это лекарство после еды.',
        annotatedWords: [
          {
            surface: 'alman',
            morphemes: [
              { text: 'al', type: 'root', gloss: 'брать/принимать' },
              { text: 'ma', type: 'affix', gloss: 'имя действия (-ma)' },
              { text: 'n', type: 'person', gloss: 'твоё (тебе)' },
            ],
          },
          {
            surface: 'lazım.',
            morphemes: [{ text: 'lazım', type: 'affix', gloss: 'нужно / необходимо' }],
          },
        ],
      },
      {
        id: 'nm-ex3',
        tr: 'Havaalanına yetişmek için taksi tutmak zorunda kaldık.',
        ru: 'Чтобы успеть в аэропорт, нам пришлось взять такси.',
        annotatedWords: [
          {
            surface: 'tutmak',
            morphemes: [
              { text: 'tut', type: 'root', gloss: 'ловить/нанимать' },
              { text: 'mak', type: 'affix', gloss: 'инфинитив перед zorunda' },
            ],
          },
          {
            surface: 'zorunda',
            morphemes: [{ text: 'zorunda', type: 'affix', gloss: 'вынужден' }],
          },
        ],
      },
      {
        id: 'nm-ex4',
        tr: 'Saat beş oldu, Ali çoktan eve varmış olmalı.',
        ru: 'Уже пять часов — Али, должно быть, давно добрался до дома.',
        annotatedWords: [
          {
            surface: 'olmalı.',
            morphemes: [
              { text: 'ol', type: 'root', gloss: 'быть' },
              { text: 'malı', type: 'affix', gloss: 'предположение («должно быть»)' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Отрицание с -mamalı vs lazım değil / zorunda değil',
          explanation:
            'gitmemelisin значит «тебе НЕЛЬЗЯ идти / ты не должен идти» (запрет/совет не делать). gitmen lazım değil и gitmek zorunda değilsin значат «тебе НЕ НУЖНО идти / ты не обязан идти» (отсутствие необходимости)!',
          exampleTr: 'Bunu söylememelisin (не смей говорить) vs Söylemek zorunda değilsin (можешь не говорить)',
          exampleRu: 'Ты не должен этого говорить vs Ты не обязан этого говорить',
          relatedTopicId: 'nominal-predicate-ek-fiil',
        },
        {
          title: 'lazım с именем (-a lazım) vs с глаголом (-ması lazım)',
          explanation:
            'Если нужен предмет: Bana su lazım («мне нужна вода»). Если нужно действие: Su içmem lazım («мне нужно выпить воды») — используется имя действия на -ma с аффиксом принадлежности!',
          exampleTr: 'Bana para lazım (нужны деньги) vs Çalışmam lazım (мне нужно работать)',
          exampleRu: 'Мне нужны деньги vs Мне нужно работать',
          relatedTopicId: 'verbal-nouns-mak-ma-is',
        },
      ],
    },
    miniCheck: [
      {
        id: 'nm-q1',
        prompt: 'Как сказать «Мы должны больше заниматься» (çalışmak, -malı, Biz)?',
        type: 'input',
        correctAnswer: 'çalışmalıyız',
        acceptedAnswers: ['çalışmalıyız'],
        explanation: 'çalış + malı + y (буфер) + ız (мы) → çalışmalıyız.',
      },
      {
        id: 'nm-q2',
        prompt: 'Какая фраза переводится как «Тебе не обязательно (не нужно) ждать меня»?',
        type: 'choice',
        options: [
          'Beni beklememelisin.',
          'Beni beklemek zorunda değilsin.',
          'Beni beklemeli misin?',
          'Beni beklemem lazım.',
        ],
        correctAnswer: 'Beni beklemek zorunda değilsin.',
        explanation: 'beklememelisin означает совет/запрет «не должен ждать», а отсутствие необходимости выражает zorunda değilsin.',
      },
      {
        id: 'nm-q3',
        prompt: 'Заполните пропуск: «Ей нужно позвонить маме» — Annesini ara___ lazım.',
        type: 'input',
        correctAnswer: 'ması',
        acceptedAnswers: ['ması', 'araması'],
        explanation: 'После lazım/gerek глагол ставится в форму имени действия -ma + принадлежность 3-го лица -(s)ı → araması lazım.',
      },
      {
        id: 'nm-q4',
        prompt: 'В каком предложении -malı выражает предположение («должно быть»), а не обязанность?',
        type: 'choice',
        options: [
          'Ödevini hemen yapmalısın.',
          'Çok yorgun olmalısın, bütün gün çalıştın.',
          'Kırmızı ışıkta durmalıyız.',
          'Doktora gitmeliyim.',
        ],
        correctAnswer: 'Çok yorgun olmalısın, bütün gün çalıştın.',
        explanation: '«Ты, должно быть, очень устал, весь день работал» — логическое предположение с olmalısın.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'ability-ebil',
    sectionId: 'modality-complex-tenses',
    titleRu: 'Возможность и невозможность -(y)ebil / -(y)eme',
    titleTr: 'Yeterlilik Fiili',
    level: 'A2',
    levels: ['A2', 'B1'],
    affixes: ['-(y)ebil', '-(y)abil', '-(y)eme', '-(y)ama', '-(y)emez', '-(y)amaz'],
    summary:
      'Выражает физическую/умственную способность («умею, могу»), разрешение («можно») и вероятность («может быть»). В утверждении к основе добавляется -(y)abil / -(y)ebil. В отрицании -bil выпадает, но ПЕРЕД -ma/-me остаётся его начальная гласная -(y)a / -(y)e — именно она отличает «не могу» (yapamıyorum) от обычного «не делаю» (yapmıyorum)!',
    formula: [
      { text: 'Основа', type: 'root', gloss: 'глагол' },
      { text: '+ -(y)abil / -(y)ebil', type: 'affix', gloss: 'утверждение (в отр. только -(y)a / -(y)e!)' },
      { text: '+ (-ma/-me)', type: 'negation', gloss: 'отрицание' },
      { text: '+ Время + Лицо', type: 'person', gloss: '-yor, -r/-z, -dı, -acak…' },
    ],
    conjugationTable: {
      affirmative: {
        Ben: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'abil', type: 'affix', gloss: 'мочь' },
          { text: 'ir', type: 'affix', gloss: 'аорист (-ir!)' },
          { text: 'im', type: 'person', gloss: 'я могу' },
        ],
        Sen: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'abil', type: 'affix', gloss: 'мочь' },
          { text: 'ir', type: 'affix', gloss: 'аорист' },
          { text: 'sin', type: 'person', gloss: 'ты можешь' },
        ],
        O: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'abil', type: 'affix', gloss: 'мочь' },
          { text: 'ir', type: 'affix', gloss: 'он(а) может' },
        ],
        Biz: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'abil', type: 'affix', gloss: 'мочь' },
          { text: 'ir', type: 'affix', gloss: 'аорист' },
          { text: 'iz', type: 'person', gloss: 'мы можем' },
        ],
        Siz: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'abil', type: 'affix', gloss: 'мочь' },
          { text: 'ir', type: 'affix', gloss: 'аорист' },
          { text: 'siniz', type: 'person', gloss: 'вы можете' },
        ],
        Onlar: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'abil', type: 'affix', gloss: 'мочь' },
          { text: 'ir', type: 'affix', gloss: 'аорист' },
          { text: 'ler', type: 'person', gloss: 'они могут' },
        ],
      },
      negative: {
        Ben: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'a', type: 'affix', gloss: 'остаток -(y)abil' },
          { text: 'ma', type: 'negation', gloss: 'не (1 л. без z)' },
          { text: 'm', type: 'person', gloss: 'я не могу' },
        ],
        Sen: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'a', type: 'affix', gloss: 'остаток -(y)abil' },
          { text: 'maz', type: 'negation', gloss: 'не (аорист)' },
          { text: 'sın', type: 'person', gloss: 'ты не можешь' },
        ],
        O: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'a', type: 'affix', gloss: 'остаток -(y)abil' },
          { text: 'maz', type: 'negation', gloss: 'не может' },
        ],
        Biz: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'a', type: 'affix', gloss: 'остаток -(y)abil' },
          { text: 'ma', type: 'negation', gloss: 'не (1 л. без z)' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'ız', type: 'person', gloss: 'мы не можем' },
        ],
        Siz: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'a', type: 'affix', gloss: 'остаток -(y)abil' },
          { text: 'maz', type: 'negation', gloss: 'не (аорист)' },
          { text: 'sınız', type: 'person', gloss: 'вы не можете' },
        ],
        Onlar: [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'a', type: 'affix', gloss: 'остаток -(y)abil' },
          { text: 'maz', type: 'negation', gloss: 'не' },
          { text: 'lar', type: 'person', gloss: 'они не могут' },
        ],
      },
      question: {
        Ben: [
          { text: 'yapabilir', type: 'affix', gloss: 'могу сделать' },
          { text: ' mi', type: 'question', gloss: 'вопрос' },
          { text: 'yim', type: 'person', gloss: 'можно мне сделать?' },
        ],
        Sen: [
          { text: 'yapabilir', type: 'affix', gloss: 'можешь сделать' },
          { text: ' mi', type: 'question', gloss: 'вопрос' },
          { text: 'sin', type: 'person', gloss: 'ты можешь сделать?' },
        ],
        O: [
          { text: 'yapabilir', type: 'affix', gloss: 'может сделать' },
          { text: ' mi', type: 'question', gloss: 'вопрос' },
        ],
        Biz: [
          { text: 'yapabilir', type: 'affix', gloss: 'можем сделать' },
          { text: ' mi', type: 'question', gloss: 'вопрос' },
          { text: 'yiz', type: 'person', gloss: 'мы можем?' },
        ],
        Siz: [
          { text: 'yapabilir', type: 'affix', gloss: 'можете сделать' },
          { text: ' mi', type: 'question', gloss: 'вопрос' },
          { text: 'siniz', type: 'person', gloss: 'вы не могли бы…?' },
        ],
        Onlar: [
          { text: 'yapabilirler', type: 'affix', gloss: 'могут сделать' },
          { text: ' mi', type: 'question', gloss: 'вопрос' },
        ],
      },
      negativeQuestion: {
        Ben: [
          { text: 'yapamaz', type: 'negation', gloss: 'не могу сделать' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
          { text: 'yım', type: 'person', gloss: 'разве я не могу?' },
        ],
        Sen: [
          { text: 'yapamaz', type: 'negation', gloss: 'не можешь' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
          { text: 'sın', type: 'person', gloss: 'ты не можешь?' },
        ],
        O: [
          { text: 'yapamaz', type: 'negation', gloss: 'не может' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
        ],
        Biz: [
          { text: 'yapamaz', type: 'negation', gloss: 'не можем' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
          { text: 'yız', type: 'person', gloss: 'мы не можем?' },
        ],
        Siz: [
          { text: 'yapamaz', type: 'negation', gloss: 'не можете' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
          { text: 'sınız', type: 'person', gloss: 'вы не можете?' },
        ],
        Onlar: [
          { text: 'yapamazlar', type: 'negation', gloss: 'не могут' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
        ],
      },
    },
    examples: [
      {
        id: 'ab-ex1',
        tr: 'Türkçe konuşabiliyorum ama hızlı okuyamıyorum.',
        ru: 'Я умею говорить по-турецки, но не могу быстро читать.',
        annotatedWords: [
          {
            surface: 'konuşabiliyorum',
            morphemes: [
              { text: 'konuş', type: 'root', gloss: 'говорить' },
              { text: 'abil', type: 'affix', gloss: 'мочь/уметь' },
              { text: 'iyor', type: 'affix', gloss: 'наст. длит.' },
              { text: 'um', type: 'person', gloss: 'я' },
            ],
          },
          {
            surface: 'okuyamıyorum.',
            morphemes: [
              { text: 'oku', type: 'root', gloss: 'читать' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'a', type: 'affix', gloss: 'невозможность (остаток -abil)' },
              { text: 'mı', type: 'negation', gloss: 'отриц. (ma→mı перед yor)' },
              { text: 'yor', type: 'affix', gloss: 'наст. длит.' },
              { text: 'um', type: 'person', gloss: 'я' },
            ],
          },
        ],
      },
      {
        id: 'ab-ex2',
        tr: 'İçeri girebilir miyim? — Buyurun, geçebilirsiniz.',
        ru: 'Можно мне войти? — Пожалуйста, можете проходить.',
        annotatedWords: [
          {
            surface: 'girebilir',
            morphemes: [
              { text: 'gir', type: 'root', gloss: 'входить' },
              { text: 'ebil', type: 'affix', gloss: 'разрешение' },
              { text: 'ir', type: 'affix', gloss: 'аорист' },
            ],
          },
          {
            surface: 'miyim?',
            morphemes: [
              { text: 'mi', type: 'question', gloss: 'вопрос' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'im', type: 'person', gloss: 'я' },
            ],
          },
        ],
      },
      {
        id: 'ab-ex3',
        tr: 'Yarın yağmur yağabilir, şemsiyeni al.',
        ru: 'Завтра может пойти дождь, возьми свой зонт.',
        annotatedWords: [
          {
            surface: 'yağabilir,',
            morphemes: [
              { text: 'yağ', type: 'root', gloss: 'идти (о дожде)' },
              { text: 'abil', type: 'affix', gloss: 'вероятность («может быть»)' },
              { text: 'ir', type: 'affix', gloss: 'аорист' },
            ],
          },
        ],
      },
      {
        id: 'ab-ex4',
        tr: 'Dün çok uğraştım ama kapıyı açamadım.',
        ru: 'Вчера я очень старался, но так и не смог открыть дверь.',
        annotatedWords: [
          {
            surface: 'açamadım.',
            morphemes: [
              { text: 'aç', type: 'root', gloss: 'открывать' },
              { text: 'a', type: 'affix', gloss: 'невозможность' },
              { text: 'ma', type: 'negation', gloss: 'отриц.' },
              { text: 'dı', type: 'affix', gloss: 'прош. вр.' },
              { text: 'm', type: 'person', gloss: 'я' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Обычное отрицание (gelmiyorum) vs Невозможность (gelemiyorum)',
          explanation:
            'Одна буква перед -m- меняет смысл: gelmiyorum = «я не иду» (не хочу или не планирую), а gelemiyorum = «я не могу прийти» (хотел бы, но не получается). Ударение в gelemiyorum падает на слог перед -me (на e)!',
          exampleTr: 'Gelmiyorum (не иду) vs Gelemiyorum (не могу прийти)',
          exampleRu: 'не иду vs не могу прийти',
          relatedTopicId: 'stress-exceptions',
        },
        {
          title: '«Может не прийти» (-meyebilir) vs «Не может прийти» (-emez)',
          explanation:
            'Если вы имеете в виду вероятность того, что действие НЕ произойдёт («возможно, он не придёт»), отрицание ставится ДО -ebil: gelmeyebilir. Если действие невозможно («он не сможет прийти»), ставится -emez: gelemez.',
          exampleTr: 'Gelemeyebilir (возможно, не сможет прийти) vs Gelmeyebilir (возможно, не придёт)',
          exampleRu: 'может не суметь vs может не прийти',
          relatedTopicId: 'genis-zaman',
        },
      ],
    },
    miniCheck: [
      {
        id: 'ab-q1',
        prompt: 'Как сказать «Я не могу уснуть» (uyumak, -yor, Ben)?',
        type: 'choice',
        options: ['uyumuyorum', 'uyuyamıyorum', 'uyuyabilmiyorum', 'uyuyamam'],
        correctAnswer: 'uyuyamıyorum',
        explanation: 'Основа uyu- на гласную + буфер y + a (невозможность) + mı (отриц.) + yor + um → uyuyamıyorum.',
      },
      {
        id: 'ab-q2',
        prompt: 'Переведите: «Она смогла прийти?» (gelmek, прошлое -di, O):',
        type: 'input',
        correctAnswer: 'gelebildi mi?',
        acceptedAnswers: ['gelebildi mi', 'gelebildi mi?'],
        explanation: 'gel + ebil + di + mi? → gelebildi mi?',
      },
      {
        id: 'ab-q3',
        prompt: 'Выберите перевод предложения «Bugün geç kalmayabilirim»:',
        type: 'choice',
        options: [
          'Я сегодня не могу опоздать',
          'Возможно, я сегодня не опоздаю',
          'Я точно сегодня не опоздаю',
          'Я сегодня не смог опоздать',
        ],
        correctAnswer: 'Возможно, я сегодня не опоздаю',
        explanation: 'Отрицание (-ma) стоит перед -yabilir — это вероятность отрицательного действия («может быть, не опоздаю»).',
      },
      {
        id: 'ab-q4',
        prompt: 'Образуйте отрицательную форму аориста («мы не можем понять»): anlamak + невозможность + Biz:',
        type: 'input',
        correctAnswer: 'anlayamayız',
        acceptedAnswers: ['anlayamayız'],
        explanation: 'anla + y (буфер) + a (невозможность) + ma (отриц. 1 л. без z) + y (буфер) + ız → anlayamayız.',
      },
    ],
    isDraft: false,
  },
];
