import type { GrammarTopic } from '../../types';

export const TOPICS_B2: GrammarTopic[] = [
  {
    id: 'causative-voice',
    sectionId: 'voice',
    titleRu: 'Понудительный залог (Каузатив и двойной каузатив)',
    titleTr: 'Ettirgen Çatı',
    level: 'B2',
    levels: ['B1', 'B2'],
    affixes: ['-dır', '-dir', '-dur', '-dür', '-tır', '-tir', '-tur', '-tür', '-t', '-r', '-ar', '-er', '-ıt', '-it'],
    summary:
      'Каузатив делает непереходный глагол переходным («упасть» → «уронить», «спать» → «уложить спать») или показывает, что действие совершено чужими руками («подстричься у парикмахера», «заставить/попросить кого-то сделать»). Двойной каузатив добавляет ещё одного посредника («попросить кого-то организовать, чтобы третье лицо сделало»).',
    formula: [
      { text: 'Основа', type: 'root', gloss: 'глагол' },
      { text: '+ -t / -DIr⁴ / -Ir / -It', type: 'affix', gloss: 'после гл. и -r/-l/-y (2+ сл.) → -t; иначе → -dır/-tır' },
      { text: '+ (-t / -dır)', type: 'affix', gloss: 'двойной каузатив (чередование -t и -dır)' },
    ],
    conjugationTable: {
      affirmative: {
        'После согл. (-DIr⁴)': [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'tır', type: 'affix', gloss: 'каузатив (заказать/заставить)' },
          { text: 'dı', type: 'affix', gloss: 'прош. вр.' },
        ],
        'После гл. / r, l (2+ сл.)': [
          { text: 'oku', type: 'root', gloss: 'читать (на гл.)' },
          { text: 't', type: 'affix', gloss: 'каузатив (-t)' },
          { text: 'tu', type: 'affix', gloss: 'заставил/попросил прочесть' },
        ],
        'Короткие на -t/-r (-Ir/-Ar)': [
          { text: 'piş', type: 'root', gloss: 'вариться (неперех.)' },
          { text: 'ir', type: 'affix', gloss: 'каузатив (-ir)' },
          { text: 'di', type: 'affix', gloss: 'сварил / приготовил' },
        ],
        'Исключения (-It / -Ar)': [
          { text: 'çık', type: 'root', gloss: 'выходить' },
          { text: 'ar', type: 'affix', gloss: 'каузатив (-ar)' },
          { text: 'dı', type: 'affix', gloss: 'вытащил / извлёк' },
        ],
        'Двойной каузатив (-t + -tır)': [
          { text: 'oku', type: 'root', gloss: 'читать' },
          { text: 't', type: 'affix', gloss: 'кауз. 1' },
          { text: 'tur', type: 'affix', gloss: 'кауз. 2 (через посредника)' },
          { text: 'du', type: 'affix', gloss: 'велел кому-то заставить прочесть' },
        ],
        'Двойной каузатив (-dır + -t)': [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'tır', type: 'affix', gloss: 'кауз. 1' },
          { text: 't', type: 'affix', gloss: 'кауз. 2' },
          { text: 'tı', type: 'affix', gloss: 'организовал изготовление через кого-то' },
        ],
      },
      negative: {
        'После согл. (-DIr⁴)': [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'tır', type: 'affix', gloss: 'каузатив' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dı', type: 'affix', gloss: 'не заставил/не заказал' },
        ],
        'После гл. / r, l (2+ сл.)': [
          { text: 'bekle', type: 'root', gloss: 'ждать' },
          { text: 't', type: 'affix', gloss: 'каузатив (заставить ждать)' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'di', type: 'affix', gloss: 'не заставил ждать' },
        ],
        'Короткие на -t/-r (-Ir/-Ar)': [
          { text: 'bit', type: 'root', gloss: 'заканчиваться' },
          { text: 'ir', type: 'affix', gloss: 'каузатив (заканчивать)' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'di', type: 'affix', gloss: 'не закончил' },
        ],
        'Исключения (-It / -Ar)': [
          { text: 'kork', type: 'root', gloss: 'бояться' },
          { text: 'ut', type: 'affix', gloss: 'каузатив (пугать)' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dı', type: 'affix', gloss: 'не напугал' },
        ],
        'Двойной каузатив (-t + -tır)': [
          { text: 'temizle', type: 'root', gloss: 'чистить' },
          { text: 't', type: 'affix', gloss: 'кауз. 1' },
          { text: 'tir', type: 'affix', gloss: 'кауз. 2' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'di', type: 'affix', gloss: 'не организовал уборку' },
        ],
        'Двойной каузатив (-dır + -t)': [
          { text: 'yaz', type: 'root', gloss: 'писать' },
          { text: 'dır', type: 'affix', gloss: 'кауз. 1' },
          { text: 't', type: 'affix', gloss: 'кауз. 2' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dı', type: 'affix', gloss: 'не поручил написать' },
        ],
      },
      question: {
        'После согл. (-DIr⁴)': [
          { text: 'yaptırdı', type: 'affix', gloss: 'сделал на заказ' },
          { text: ' mı?', type: 'question', gloss: 'заказал ли?' },
        ],
        'После гл. / r, l (2+ сл.)': [
          { text: 'okuttu', type: 'affix', gloss: 'дал/заставил прочесть' },
          { text: ' mu?', type: 'question', gloss: 'дал прочесть?' },
        ],
        'Короткие на -t/-r (-Ir/-Ar)': [
          { text: 'pişirdi', type: 'affix', gloss: 'приготовил' },
          { text: ' mi?', type: 'question', gloss: 'приготовил ли?' },
        ],
        'Исключения (-It / -Ar)': [
          { text: 'çıkardı', type: 'affix', gloss: 'вытащил' },
          { text: ' mı?', type: 'question', gloss: 'вытащил ли?' },
        ],
        'Двойной каузатив (-t + -tır)': [
          { text: 'okutturdu', type: 'affix', gloss: 'велел заставить прочесть' },
          { text: ' mu?', type: 'question', gloss: 'велел ли?' },
        ],
        'Двойной каузатив (-dır + -t)': [
          { text: 'yaptırttı', type: 'affix', gloss: 'организовал через других' },
          { text: ' mı?', type: 'question', gloss: 'организовал ли?' },
        ],
      },
    },
    examples: [
      {
        id: 'cv-ex1',
        tr: 'Saçımı kuaförde kestirdim.',
        ru: 'Я подстриг волосы в парикмахерской (сделал руками мастера).',
        annotatedWords: [
          {
            surface: 'kestirdim.',
            morphemes: [
              { text: 'kes', type: 'root', gloss: 'стричь/резать' },
              { text: 'tir', type: 'affix', gloss: 'каузатив (-dir → -tir)' },
              { text: 'di', type: 'affix', gloss: 'прош. вр.' },
              { text: 'm', type: 'person', gloss: 'я' },
            ],
          },
        ],
      },
      {
        id: 'cv-ex2',
        tr: 'Müdür, sekretere bütün belgeleri imzalattı.',
        ru: 'Директор дал секретарю подписать все документы (или: велел подписать).',
        annotatedWords: [
          {
            surface: 'sekretere',
            morphemes: [
              { text: 'sekreter', type: 'root', gloss: 'секретарь' },
              { text: 'e', type: 'affix', gloss: 'дат. п. (исполнитель при переходном каузативе!)' },
            ],
          },
          {
            surface: 'imzalattı.',
            morphemes: [
              { text: 'imzala', type: 'root', gloss: 'подписывать (на гласную)' },
              { text: 't', type: 'affix', gloss: 'каузатив (-t)' },
              { text: 'tı', type: 'affix', gloss: 'прош. вр.' },
            ],
          },
        ],
      },
      {
        id: 'cv-ex3',
        tr: 'Sizi çok beklettim, kusura bakmayın.',
        ru: 'Я заставил вас долго ждать, извините.',
        annotatedWords: [
          {
            surface: 'beklettim,',
            morphemes: [
              { text: 'bekle', type: 'root', gloss: 'ждать (на гласную)' },
              { text: 't', type: 'affix', gloss: 'каузатив (-t)' },
              { text: 'ti', type: 'affix', gloss: 'прош. вр. (-di → -ti)' },
              { text: 'm', type: 'person', gloss: 'я' },
            ],
          },
        ],
      },
      {
        id: 'cv-ex4',
        tr: 'Patron, ustabaşına arabayı tamir ettirtti.',
        ru: 'Начальник велел мастеру отдать машину в ремонт (двойной каузатив).',
        annotatedWords: [
          {
            surface: 'ettirtti.',
            morphemes: [
              { text: 'et', type: 'root', gloss: 'делать (tamir etmek)' },
              { text: 'tir', type: 'affix', gloss: 'кауз. 1' },
              { text: 't', type: 'affix', gloss: 'кауз. 2 (двойной)' },
              { text: 'ti', type: 'affix', gloss: 'прош. вр.' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Падеж исполнителя в каузативе: -ı (у неперех.) vs -a (у переходных)',
          explanation:
            'Если исходный глагол НЕПЕРЕХОДНЫЙ (gülmek, uyumak), тот, кого заставляют, ставится в винительный падеж: Çocuğu uyuttum («уложил ребёнка»). Если исходный глагол ПЕРЕХОДНЫЙ (yazmak, kesmek), у него уже есть объект в винительном падеже, поэтому исполнитель идёт в ДАТЕЛЬНЫЙ: Öğrenciye metni okuttum («попросил ученика прочитать текст»).',
          exampleTr: 'Çocuğu güldürdü (рассмешил ребёнка) vs Çocuğa süt içirdi (напоил ребёнка молоком)',
          exampleRu: 'рассмешил ребёнка vs дал ребёнку выпить молока',
          relatedTopicId: 'six-cases',
        },
        {
          title: 'Каузатив -dır vs Связка -dır («должно быть / является»)',
          explanation:
            'На основе глагола -dır образует каузатив (yaptırdı — заказал). На имени или после времени -dır является модальной/предикативной связкой (Evdedir — должно быть, дома).',
          exampleTr: 'Kapıyı açtırdı (велел открыть дверь) vs Kapı açıktır (дверь открыта)',
          exampleRu: 'велел открыть vs дверь открыта',
          relatedTopicId: 'affix-dir-meanings',
        },
      ],
    },
    miniCheck: [
      {
        id: 'cv-q1',
        prompt: 'Как образовать каузатив от глагола «uyumak» (спать → усыпить/уложить спать)?',
        type: 'input',
        correctAnswer: 'uyutmak',
        acceptedAnswers: ['uyutmak', 'uyut'],
        explanation: 'Основа uyu- заканчивается на гласную, поэтому каузатив образуется с помощью -t → uyutmak.',
      },
      {
        id: 'cv-q2',
        prompt: 'Выберите верную фразу: «Я попросил друга перевести письмо» (arkadaş, mektup, çevirtmek):',
        type: 'choice',
        options: [
          'Arkadaşımı mektubu çevirttim.',
          'Arkadaşıma mektubu çevirttim.',
          'Arkadaşımdan mektubu çevirdim.',
          'Arkadaşımla mektup çevirdim.',
        ],
        correctAnswer: 'Arkadaşıma mektubu çevirttim.',
        explanation: 'çevirmek — переходный глагол (объект mektubu в винительном падеже), поэтому исполнитель (arkadaşım) ставится в дательный падеж (-a) → Arkadaşıma.',
      },
      {
        id: 'cv-q3',
        prompt: 'Какой вариант является каузативом от глагола «korkmak» (бояться → пугать)?',
        type: 'choice',
        options: ['korkturmak', 'korkutmak', 'korkırmak', 'korkatmak'],
        correctAnswer: 'korkutmak',
        explanation: 'korkmak (и akmak, sarkmak, ürkmek) входит в группу исключений с аффиксом -(I⁴)t → korkutmak.',
      },
      {
        id: 'cv-q4',
        prompt: 'Образуйте каузатив от «temizlemek» (чистить → отдать в чистку): «Я отдал пальто в чистку» — Paltoyu temizle___dim.',
        type: 'input',
        correctAnswer: 'temizlettim',
        acceptedAnswers: ['temizlettim', 'ttim'],
        explanation: 'temizle + t (каузатив) + ti (прош. вр., t→t) + m → temizlettim.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'concession-clauses',
    sectionId: 'syntax',
    titleRu: 'Придаточные уступки (-e rağmen, -dığı halde, -sa da)',
    titleTr: 'Karşıtlık ve Ödünleme Cümleleri',
    level: 'B2',
    affixes: ['-masına rağmen', '-mesine rağmen', '-dığı halde', '-diği halde', '-sa da', '-se de', '-sa bile', 'her ne kadar'],
    summary:
      'Конструкции уступки выражают противоречие между ожиданием и реальностью («несмотря на то что…», «хотя…», «даже если…»). Основные три модели: 1) -(y)a rağmen / -masına rağmen (нейтрально-книжное «несмотря на»); 2) -dığı halde («хотя он сделал / хотя было так» — реальный факт); 3) -sa da / -sa bile («даже если / пусть и» — гипотеза или контраст).',
    formula: [
      { text: '1. -ma + принадл. + -(n)a rağmen', type: 'affix', gloss: 'несмотря на то что…' },
      { text: '2. -dık / -(y)acak + принадл. + halde', type: 'affix', gloss: 'хотя (реальный факт)' },
      { text: '3. -sa / -se + da / bile', type: 'affix', gloss: 'даже если / хотя и' },
    ],
    conjugationTable: {
      affirmative: {
        Ben: [
          { text: 'bil', type: 'root', gloss: 'знать' },
          { text: 'diğ', type: 'affix', gloss: 'прич. -dik' },
          { text: 'im', type: 'person', gloss: 'мой' },
          { text: ' halde', type: 'affix', gloss: 'хотя я знаю/знал' },
        ],
        Sen: [
          { text: 'bil', type: 'root', gloss: 'знать' },
          { text: 'diğ', type: 'affix', gloss: 'прич. -dik' },
          { text: 'in', type: 'person', gloss: 'твой' },
          { text: ' halde', type: 'affix', gloss: 'хотя ты знаешь/знал' },
        ],
        O: [
          { text: 'bil', type: 'root', gloss: 'знать' },
          { text: 'diğ', type: 'affix', gloss: 'прич. -dik' },
          { text: 'i', type: 'person', gloss: 'его' },
          { text: ' halde', type: 'affix', gloss: 'хотя он знает/знал' },
        ],
        Biz: [
          { text: 'bil', type: 'root', gloss: 'знать' },
          { text: 'diğ', type: 'affix', gloss: 'прич. -dik' },
          { text: 'imiz', type: 'person', gloss: 'наш' },
          { text: ' halde', type: 'affix', gloss: 'хотя мы знаем/знали' },
        ],
        Siz: [
          { text: 'bil', type: 'root', gloss: 'знать' },
          { text: 'diğ', type: 'affix', gloss: 'прич. -dik' },
          { text: 'iniz', type: 'person', gloss: 'ваш' },
          { text: ' halde', type: 'affix', gloss: 'хотя вы знаете/знали' },
        ],
        Onlar: [
          { text: 'bil', type: 'root', gloss: 'знать' },
          { text: 'dik', type: 'affix', gloss: 'прич. -dik' },
          { text: 'leri', type: 'person', gloss: 'их' },
          { text: ' halde', type: 'affix', gloss: 'хотя они знают/знали' },
        ],
      },
      negative: {
        Ben: [
          { text: 'bil', type: 'root', gloss: 'знать' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'me', type: 'affix', gloss: 'имя действия' },
          { text: 'm', type: 'person', gloss: 'моё' },
          { text: 'e rağmen', type: 'affix', gloss: 'несмотря на то, что я не знаю' },
        ],
        Sen: [
          { text: 'bil', type: 'root', gloss: 'знать' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'me', type: 'affix', gloss: 'имя действия' },
          { text: 'n', type: 'person', gloss: 'твоё' },
          { text: 'e rağmen', type: 'affix', gloss: 'несмотря на то, что ты не знаешь' },
        ],
        O: [
          { text: 'bil', type: 'root', gloss: 'знать' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'me', type: 'affix', gloss: 'имя действия' },
          { text: 'si', type: 'person', gloss: 'его' },
          { text: 'ne rağmen', type: 'affix', gloss: 'несмотря на то, что он не знает' },
        ],
        Biz: [
          { text: 'bil', type: 'root', gloss: 'знать' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'me', type: 'affix', gloss: 'имя действия' },
          { text: 'miz', type: 'person', gloss: 'наше' },
          { text: 'e rağmen', type: 'affix', gloss: 'несмотря на то, что мы не знаем' },
        ],
        Siz: [
          { text: 'bil', type: 'root', gloss: 'знать' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'me', type: 'affix', gloss: 'имя действия' },
          { text: 'niz', type: 'person', gloss: 'ваше' },
          { text: 'e rağmen', type: 'affix', gloss: 'несмотря на то, что вы не знаете' },
        ],
        Onlar: [
          { text: 'bil', type: 'root', gloss: 'знать' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'me', type: 'affix', gloss: 'имя действия' },
          { text: 'leri', type: 'person', gloss: 'их' },
          { text: 'ne rağmen', type: 'affix', gloss: 'несмотря на то, что они не знают' },
        ],
      },
      question: {
        Ben: [
          { text: 'bilsem', type: 'affix', gloss: 'если я знаю' },
          { text: ' de / bile', type: 'affix', gloss: 'даже если я знаю / знал бы' },
        ],
        Sen: [
          { text: 'bilsen', type: 'affix', gloss: 'если ты знаешь' },
          { text: ' de / bile', type: 'affix', gloss: 'даже если ты знаешь' },
        ],
        O: [
          { text: 'bilse', type: 'affix', gloss: 'если он знает' },
          { text: ' de / bile', type: 'affix', gloss: 'хотя он и знает / даже если' },
        ],
        Biz: [
          { text: 'bilsek', type: 'affix', gloss: 'если мы знаем' },
          { text: ' de / bile', type: 'affix', gloss: 'хотя мы и знаем' },
        ],
        Siz: [
          { text: 'bilseniz', type: 'affix', gloss: 'если вы знаете' },
          { text: ' de / bile', type: 'affix', gloss: 'даже если вы знаете' },
        ],
        Onlar: [
          { text: 'bilseler', type: 'affix', gloss: 'если они знают' },
          { text: ' de / bile', type: 'affix', gloss: 'хотя они и знают' },
        ],
      },
    },
    examples: [
      {
        id: 'cc-ex1',
        tr: 'Çok yorgun olmasına rağmen çalışmaya devam etti.',
        ru: 'Несмотря на то что он был очень усталым, он продолжил работать.',
        annotatedWords: [
          {
            surface: 'olmasına',
            morphemes: [
              { text: 'ol', type: 'root', gloss: 'быть' },
              { text: 'ma', type: 'affix', gloss: 'имя действия' },
              { text: 's', type: 'buffer', gloss: 'буфер s' },
              { text: 'ı', type: 'person', gloss: 'его' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'a', type: 'affix', gloss: 'дат. падеж перед rağmen' },
            ],
          },
          {
            surface: 'rağmen',
            morphemes: [{ text: 'rağmen', type: 'affix', gloss: 'несмотря на' }],
          },
        ],
      },
      {
        id: 'cc-ex2',
        tr: 'Söz verdiği halde toplantıya gelmedi.',
        ru: 'Хотя он и обещал, на встречу не пришёл.',
        annotatedWords: [
          {
            surface: 'verdiği',
            morphemes: [
              { text: 'ver', type: 'root', gloss: 'давать (söz vermek — обещать)' },
              { text: 'diğ', type: 'affix', gloss: 'причастие -dik (k→ğ)' },
              { text: 'i', type: 'person', gloss: 'его' },
            ],
          },
          {
            surface: 'halde',
            morphemes: [{ text: 'halde', type: 'affix', gloss: 'несмотря на то что / хотя' }],
          },
        ],
      },
      {
        id: 'cc-ex3',
        tr: 'Hava soğuk olsa da yürüyüşe çıkacağız.',
        ru: 'Даже если погода будет холодной, мы пойдём на прогулку.',
        annotatedWords: [
          {
            surface: 'olsa',
            morphemes: [
              { text: 'ol', type: 'root', gloss: 'быть' },
              { text: 'sa', type: 'affix', gloss: 'условие' },
            ],
          },
          {
            surface: 'da',
            morphemes: [{ text: 'da', type: 'affix', gloss: 'частица (даже если / хотя)' }],
          },
        ],
      },
      {
        id: 'cc-ex4',
        tr: 'Yoğun yağmura rağmen maç iptal edilmedi.',
        ru: 'Несмотря на сильный дождь, матч не отменили.',
        annotatedWords: [
          {
            surface: 'yağmura',
            morphemes: [
              { text: 'yağmur', type: 'root', gloss: 'дождь (существительное)' },
              { text: 'a', type: 'affix', gloss: 'дат. п. перед rağmen' },
            ],
          },
          {
            surface: 'iptal',
            morphemes: [{ text: 'iptal', type: 'root', gloss: 'отмена (iptal edilmek — быть отменённым)' }],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Послелог rağmen требует ДАТЕЛЬНОГО падежа (-a rağmen), а halde — БЕЗ падежа',
          explanation:
            'Перед rağmen всегда стоит существительное в дательном падеже (yağmura rağmen) или глагол с -ma + принадл. + -(n)a (yağmasına rağmen). С halde используется причастие -dık/-acak без падежного окончания (yağdığı halde).',
          exampleTr: 'geç kalmasına rağmen (несмотря на опоздание) vs geç kaldığı halde (хотя он опоздал)',
          exampleRu: 'несмотря на опоздание vs хотя опоздал',
          relatedTopicId: 'basic-postpositions',
        },
        {
          title: 'Уступка с реальным фактом (-dığı halde) vs с возможным условием (-sa bile)',
          explanation:
            '-dığı halde описывает уже состоявшийся или точный факт («хотя он знал»). -sa bile / -sa da часто относится к будущему или гипотезе («даже если он узнает»).',
          exampleTr: 'Bilmesine rağmen sustu (хотя знал, промолчал) vs Bilse bile susacak (даже если узнает, промолчит)',
          exampleRu: 'хотя знал vs даже если узнает',
          relatedTopicId: 'conditional-sa',
        },
      ],
    },
    miniCheck: [
      {
        id: 'cc-q1',
        prompt: 'Какой падеж нужен перед послелогом «rağmen» («несмотря на пробки» — trafik)?',
        type: 'choice',
        options: ['trafiği rağmen', 'trafiğe rağmen', 'trafikte rağmen', 'trafikten rağmen'],
        correctAnswer: 'trafiğe rağmen',
        explanation: 'Послелог rağmen управляет дательным падежом (-a/-e), причём k озвончается в ğ → trafiğe rağmen.',
      },
      {
        id: 'cc-q2',
        prompt: 'Заполните пропуск: «Хотя у нас не было денег, мы были счастливы» — Paramız olma___ ___ mutluyduk.',
        type: 'input',
        correctAnswer: 'olmadığı halde',
        acceptedAnswers: ['olmadığı halde', 'dığı halde'],
        explanation: 'Конструкция факта с -dığı halde: olma + dığ + ı halde → olmadığı halde (или olmasına rağmen).',
      },
      {
        id: 'cc-q3',
        prompt: 'Как переводится «Çok pahalı olsa bile alacağım»?',
        type: 'choice',
        options: [
          'Поскольку это очень дорого, я не куплю',
          'Даже если это будет очень дорого, я куплю',
          'Хотя раньше было дорого, я купил',
          'Если подешевеет, я куплю',
        ],
        correctAnswer: 'Даже если это будет очень дорого, я куплю',
        explanation: 'olsa bile означает гипотетическую уступку «даже если будет…».',
      },
      {
        id: 'cc-q4',
        prompt: 'Образуйте оборот с -masına rağmen от глагола «uyarı» / «uyarmak» (предупреждать): «Несмотря на то, что я предупредил…» — Uyar___ rağmen…',
        type: 'input',
        correctAnswer: 'uyarmama rağmen',
        acceptedAnswers: ['uyarmama rağmen', 'mama rağmen'],
        explanation: 'uyar + ma (имя действия) + m (моё) + a (дат. п.) + rağmen → uyarmama rağmen.',
      },
    ],
    isDraft: false,
  },
];
