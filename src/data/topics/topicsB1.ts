import type { GrammarTopic } from '../../types';

export const TOPICS_B1: GrammarTopic[] = [
  {
    id: 'conditional-sa',
    sectionId: 'modality-complex-tenses',
    titleRu: 'Условное наклонение (-sa / -saydı)',
    titleTr: 'Şart Kipi',
    level: 'B1',
    affixes: ['-sa', '-se', '-saydı', '-seydi', '-(y)sa', '-(y)se', 'keşke', 'eğer'],
    summary:
      'Условное наклонение передаёт условие, желание или сожаление. Реальное/будущее условие строится через основу + -sa/-se (или время + -(y)sa) в придаточной части и настоящее/будущее/императив в главной. Нереальное условие и сожаление о прошлом («если бы...») строятся через -saydı/-seydi + -ardı/-acaktı.',
    formula: [
      { text: '(Eğer / Keşke)', type: 'affix', gloss: 'усилитель условия / сожаления' },
      { text: 'Основа (+ -ma/-me)', type: 'root', gloss: 'глагол' },
      { text: '+ -sa / -se', type: 'affix', gloss: 'условное наклонение' },
      { text: '+ (-ydı)', type: 'affix', gloss: 'нереальность в прошлом' },
      { text: '+ -m / -n / -k', type: 'person', gloss: 'усечённые личные окончания' },
    ],
    conjugationTable: {
      affirmative: {
        Ben: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'se', type: 'affix', gloss: 'если' },
          { text: 'm', type: 'person', gloss: 'если я приду (gelseydim)' },
        ],
        Sen: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'se', type: 'affix', gloss: 'если' },
          { text: 'n', type: 'person', gloss: 'если ты придёшь (gelseydin)' },
        ],
        O: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'se', type: 'affix', gloss: 'если он придёт (gelseydi)' },
        ],
        Biz: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'se', type: 'affix', gloss: 'если' },
          { text: 'k', type: 'person', gloss: 'если мы придём (gelseydik)' },
        ],
        Siz: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'se', type: 'affix', gloss: 'если' },
          { text: 'niz', type: 'person', gloss: 'если вы придёте (gelseydiniz)' },
        ],
        Onlar: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'se', type: 'affix', gloss: 'если' },
          { text: 'ler', type: 'person', gloss: 'если они придут (gelselerdi)' },
        ],
      },
      negative: {
        Ben: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'se', type: 'affix', gloss: 'если' },
          { text: 'm', type: 'person', gloss: 'если я не приду' },
        ],
        Sen: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'se', type: 'affix', gloss: 'если' },
          { text: 'n', type: 'person', gloss: 'если ты не придёшь' },
        ],
        O: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'se', type: 'affix', gloss: 'если не придёт' },
        ],
        Biz: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'se', type: 'affix', gloss: 'если' },
          { text: 'k', type: 'person', gloss: 'если мы не придём' },
        ],
        Siz: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'se', type: 'affix', gloss: 'если' },
          { text: 'niz', type: 'person', gloss: 'если вы не придёте' },
        ],
        Onlar: [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'se', type: 'affix', gloss: 'если' },
          { text: 'ler', type: 'person', gloss: 'если они не придут' },
        ],
      },
      question: {
        Ben: [
          { text: 'gelsem', type: 'affix', gloss: 'если я приду' },
          { text: ' mi?', type: 'question', gloss: 'прийти ли мне? (совет/раздумье)' },
        ],
        Sen: [
          { text: 'gelsen', type: 'affix', gloss: 'если ты придёшь' },
          { text: ' mi?', type: 'question', gloss: 'может, придёшь?' },
        ],
        O: [
          { text: 'gelse', type: 'affix', gloss: 'если он придёт' },
          { text: ' mi?', type: 'question', gloss: 'прийти ли ему?' },
        ],
        Biz: [
          { text: 'gelsek', type: 'affix', gloss: 'если мы придём' },
          { text: ' mi?', type: 'question', gloss: 'может, пойдём/придём?' },
        ],
        Siz: [
          { text: 'gelseniz', type: 'affix', gloss: 'если вы придёте' },
          { text: ' mi?', type: 'question', gloss: 'не зайти ли вам?' },
        ],
        Onlar: [
          { text: 'gelseler', type: 'affix', gloss: 'если они придут' },
          { text: ' mi?', type: 'question', gloss: 'прийти ли им?' },
        ],
      },
      negativeQuestion: {
        Ben: [
          { text: 'gelmesem', type: 'negation', gloss: 'если не приду' },
          { text: ' mi?', type: 'question', gloss: 'может, не приходить мне?' },
        ],
        Sen: [
          { text: 'gelmesen', type: 'negation', gloss: 'если не придёшь' },
          { text: ' mi?', type: 'question', gloss: 'может, не пойдёшь?' },
        ],
        O: [
          { text: 'gelmese', type: 'negation', gloss: 'если не придёт' },
          { text: ' mi?', type: 'question', gloss: 'может, ему не идти?' },
        ],
        Biz: [
          { text: 'gelmesek', type: 'negation', gloss: 'если не придём' },
          { text: ' mi?', type: 'question', gloss: 'может, не пойдём?' },
        ],
        Siz: [
          { text: 'gelmeseniz', type: 'negation', gloss: 'если не придёте' },
          { text: ' mi?', type: 'question', gloss: 'может, не придёте?' },
        ],
        Onlar: [
          { text: 'gelmeseler', type: 'negation', gloss: 'если не придут' },
          { text: ' mi?', type: 'question', gloss: 'может, им не приходить?' },
        ],
      },
    },
    examples: [
      {
        id: 'cs-ex1',
        tr: 'Hava yarın güzel olursa sahile gideriz.',
        ru: 'Если завтра погода будет хорошей, мы пойдём на берег.',
        annotatedWords: [
          {
            surface: 'olursa',
            morphemes: [
              { text: 'ol', type: 'root', gloss: 'быть/стать' },
              { text: 'ur', type: 'affix', gloss: 'аорист' },
              { text: 'sa', type: 'affix', gloss: 'если (открытое условие)' },
            ],
          },
        ],
      },
      {
        id: 'cs-ex2',
        tr: 'Vaktim olsaydı seninle mutlaka gelirdim.',
        ru: 'Если бы у меня было время, я бы обязательно пошёл с тобой.',
        annotatedWords: [
          {
            surface: 'olsaydı',
            morphemes: [
              { text: 'ol', type: 'root', gloss: 'быть' },
              { text: 'sa', type: 'affix', gloss: 'условие' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'dı', type: 'affix', gloss: 'нереальность (-saydı)' },
            ],
          },
          {
            surface: 'gelirdim.',
            morphemes: [
              { text: 'gel', type: 'root', gloss: 'прийти' },
              { text: 'ir', type: 'affix', gloss: 'аорист' },
              { text: 'di', type: 'affix', gloss: 'прош. связка («бы»)' },
              { text: 'm', type: 'person', gloss: 'я' },
            ],
          },
        ],
      },
      {
        id: 'cs-ex3',
        tr: 'Keşke ona bu sırrı söylemeseydim.',
        ru: 'Эх, лучше бы я не говорил ему этот секрет.',
        annotatedWords: [
          {
            surface: 'söylemeseydim.',
            morphemes: [
              { text: 'söyle', type: 'root', gloss: 'сказать' },
              { text: 'me', type: 'negation', gloss: 'не' },
              { text: 'se', type: 'affix', gloss: 'условие' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'di', type: 'affix', gloss: 'прош. сожаление' },
              { text: 'm', type: 'person', gloss: 'я' },
            ],
          },
        ],
      },
      {
        id: 'cs-ex4',
        tr: 'Yarın işin yoksa akşam bize gelsene!',
        ru: 'Если завтра у тебя нет дел, заходи вечером к нам!',
        annotatedWords: [
          {
            surface: 'yoksa',
            morphemes: [
              { text: 'yok', type: 'negation', gloss: 'нет' },
              { text: 'sa', type: 'affix', gloss: 'если нет' },
            ],
          },
          {
            surface: 'gelsene!',
            morphemes: [
              { text: 'gel', type: 'root', gloss: 'прийти' },
              { text: 'se', type: 'affix', gloss: 'мягкое побуждение' },
              { text: 'n', type: 'person', gloss: 'ты' },
              { text: 'e', type: 'affix', gloss: 'побудительная частица («ну же!»)' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Чистое -sa/-se (гипотеза/желание) vs Время + -(y)sa (реальное условие)',
          explanation:
            'Форма gidiyorsan / gidersen («если ты сейчас идёшь / если пойдёшь вообще») — реальное условие по времени. Форма gitsen («если бы ты пошёл / сходил бы ты») без показателя времени звучит более гипотетично или как мягкий совет.',
          exampleTr: 'Gidersen haber ver (если пойдёшь, дай знать) vs Gitseydin görürdün (если бы пошёл, увидел бы)',
          exampleRu: 'если пойдёшь, скажи vs если бы пошёл, увидел бы',
          relatedTopicId: 'compound-tenses-hikaye',
        },
        {
          title: 'Условие -sa vs Уступка -sa da («хотя и / даже если»)',
          explanation:
            'Добавление раздельной частицы da/de после условной формы меняет значение на уступительное: «даже если, хотя и».',
          exampleTr: 'Yağmur yağsa gitmeyiz (если пойдёт дождь, не пойдём) vs Yağmur yağsa da gideriz (даже если пойдёт дождь, пойдём)',
          exampleRu: 'если пойдёт дождь vs даже если пойдёт дождь',
          relatedTopicId: 'concession-clauses',
        },
      ],
    },
    miniCheck: [
      {
        id: 'cs-q1',
        prompt: 'Заполните пропуск в нереальном условии: «Если бы мы знали, мы бы сказали» — Bil___, söylerdik.',
        type: 'input',
        correctAnswer: 'bilseydik',
        acceptedAnswers: ['bilseydik', 'seydik'],
        explanation: 'Нереальное условие в прошлом для Biz: bil + se + y + di + k → bilseydik.',
      },
      {
        id: 'cs-q2',
        prompt: 'Как сказать «Если не торопишься, выпьем кофе» (acele etmek, несовершенное/реальное условие)?',
        type: 'choice',
        options: [
          'Acele etmiyorsan kahve içelim.',
          'Acele etmeseydin kahve içelim.',
          'Acele etseydin kahve içeriz.',
          'Acele etmişsen kahve içelim.',
        ],
        correctAnswer: 'Acele etmiyorsan kahve içelim.',
        explanation: 'Реальное условие о текущей ситуации строится на основе настоящего времени -yor + -san → etmiyorsan.',
      },
      {
        id: 'cs-q3',
        prompt: 'Переведите: «Эх, если бы у меня было время!» — Keşke zamanım ___!',
        type: 'input',
        correctAnswer: 'olsaydı',
        acceptedAnswers: ['olsaydı'],
        explanation: 'Сожаление с keşke о настоящем/прошлом требует -saydı: ol + sa + y + dı → olsaydı.',
      },
      {
        id: 'cs-q4',
        prompt: 'Что означает вопрос «Bu akşam dışarı çıksak mı?»?',
        type: 'choice',
        options: [
          'Мы вышли вчера вечером?',
          'Может, нам выйти куда-нибудь сегодня вечером?',
          'Мы обязательно выйдем сегодня вечером?',
          'Почему мы не выходим вечером?',
        ],
        correctAnswer: 'Может, нам выйти куда-нибудь сегодня вечером?',
        explanation: 'Конструкция -sak mı? (1 л. мн. ч. условного наклонения + вопрос) выражает мягкое предложение «может, сделаем…?».',
      },
    ],
    isDraft: false,
  },

  {
    id: 'compound-tenses-hikaye',
    sectionId: 'modality-complex-tenses',
    titleRu: 'Составные времена (Hikaye, Rivayet, Şart)',
    titleTr: 'Birleşik Zamanlı Fiiller',
    level: 'B1',
    levels: ['B1', 'B2'],
    affixes: ['-ıyordu', '-ardı', '-acaktı', '-mıştı', '-malıydı', '-ıyorsa', '-(y)dı', '-(y)mış', '-(y)sa'],
    summary:
      'Составные времена соединяют первичный показатель времени с одной из трёх связок ek-fiil: -(y)dı (Hikaye — действие в прошлом: -ıyordu «делал тогда», -acaktı «собирался сделать», -mıştı «сделал до этого»); -(y)mış (Rivayet — «говорят, что делал/сделает»); -(y)sa (Şart — реальное условие «если делает/сделает»).',
    formula: [
      { text: 'Основа + Время 1', type: 'root', gloss: '-yor / -r,-ar / -acak / -mış / -malı' },
      { text: '+ -(y)dı / -(y)mış / -(y)sa', type: 'affix', gloss: 'Hikaye / Rivayet / Şart' },
      { text: '+ Лицо', type: 'person', gloss: '-m/-n/-k (для -dı/-sa), -ım/-sın (для -mış)' },
    ],
    conjugationTable: {
      affirmative: {
        Ben: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'iyor', type: 'affix', gloss: 'длительность' },
          { text: 'du', type: 'affix', gloss: 'Hikaye (прош. длит.)' },
          { text: 'm', type: 'person', gloss: 'я шёл / приходил' },
        ],
        Sen: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'iyor', type: 'affix', gloss: 'длительность' },
          { text: 'du', type: 'affix', gloss: 'Hikaye' },
          { text: 'n', type: 'person', gloss: 'ты шёл' },
        ],
        O: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'iyor', type: 'affix', gloss: 'длительность' },
          { text: 'du', type: 'affix', gloss: 'он(а) шёл(шла)' },
        ],
        Biz: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'iyor', type: 'affix', gloss: 'длительность' },
          { text: 'du', type: 'affix', gloss: 'Hikaye' },
          { text: 'k', type: 'person', gloss: 'мы шли' },
        ],
        Siz: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'iyor', type: 'affix', gloss: 'длительность' },
          { text: 'du', type: 'affix', gloss: 'Hikaye' },
          { text: 'nuz', type: 'person', gloss: 'вы шли' },
        ],
        Onlar: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'iyor', type: 'affix', gloss: 'длительность' },
          { text: 'lar', type: 'person', gloss: 'они (или geliyordular)' },
          { text: 'dı', type: 'affix', gloss: 'Hikaye' },
        ],
      },
      negative: {
        Ben: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'mi', type: 'negation', gloss: 'отриц.' },
          { text: 'yor', type: 'affix', gloss: 'длительность' },
          { text: 'du', type: 'affix', gloss: 'Hikaye' },
          { text: 'm', type: 'person', gloss: 'я не шёл' },
        ],
        Sen: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'mi', type: 'negation', gloss: 'отриц.' },
          { text: 'yor', type: 'affix', gloss: 'длительность' },
          { text: 'du', type: 'affix', gloss: 'Hikaye' },
          { text: 'n', type: 'person', gloss: 'ты не шёл' },
        ],
        O: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'mi', type: 'negation', gloss: 'отриц.' },
          { text: 'yor', type: 'affix', gloss: 'длительность' },
          { text: 'du', type: 'affix', gloss: 'он(а) не шёл(шла)' },
        ],
        Biz: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'mi', type: 'negation', gloss: 'отриц.' },
          { text: 'yor', type: 'affix', gloss: 'длительность' },
          { text: 'du', type: 'affix', gloss: 'Hikaye' },
          { text: 'k', type: 'person', gloss: 'мы не шли' },
        ],
        Siz: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'mi', type: 'negation', gloss: 'отриц.' },
          { text: 'yor', type: 'affix', gloss: 'длительность' },
          { text: 'du', type: 'affix', gloss: 'Hikaye' },
          { text: 'nuz', type: 'person', gloss: 'вы не шли' },
        ],
        Onlar: [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'mi', type: 'negation', gloss: 'отриц.' },
          { text: 'yor', type: 'affix', gloss: 'длительность' },
          { text: 'lar', type: 'person', gloss: 'они' },
          { text: 'dı', type: 'affix', gloss: 'Hikaye' },
        ],
      },
      question: {
        Ben: [
          { text: 'geliyor', type: 'affix', gloss: 'приходит' },
          { text: ' mu', type: 'question', gloss: 'вопрос (связка крепится к mı!)' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'du', type: 'affix', gloss: 'Hikaye' },
          { text: 'm', type: 'person', gloss: 'я шёл?' },
        ],
        Sen: [
          { text: 'geliyor', type: 'affix', gloss: 'приходит' },
          { text: ' mu', type: 'question', gloss: 'вопрос' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'du', type: 'affix', gloss: 'Hikaye' },
          { text: 'n', type: 'person', gloss: 'ты шёл?' },
        ],
        O: [
          { text: 'geliyor', type: 'affix', gloss: 'приходит' },
          { text: ' mu', type: 'question', gloss: 'вопрос' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'du', type: 'affix', gloss: 'он шёл?' },
        ],
        Biz: [
          { text: 'geliyor', type: 'affix', gloss: 'приходит' },
          { text: ' mu', type: 'question', gloss: 'вопрос' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'du', type: 'affix', gloss: 'Hikaye' },
          { text: 'k', type: 'person', gloss: 'мы шли?' },
        ],
        Siz: [
          { text: 'geliyor', type: 'affix', gloss: 'приходит' },
          { text: ' mu', type: 'question', gloss: 'вопрос' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'du', type: 'affix', gloss: 'Hikaye' },
          { text: 'nuz', type: 'person', gloss: 'вы шли?' },
        ],
        Onlar: [
          { text: 'geliyorlar', type: 'affix', gloss: 'приходят' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'dı', type: 'affix', gloss: 'они шли?' },
        ],
      },
      negativeQuestion: {
        Ben: [
          { text: 'gelmiyor', type: 'negation', gloss: 'не идёт' },
          { text: ' mu', type: 'question', gloss: 'вопрос' },
          { text: 'ydum', type: 'affix', gloss: 'я не шёл?' },
        ],
        Sen: [
          { text: 'gelmiyor', type: 'negation', gloss: 'не идёт' },
          { text: ' mu', type: 'question', gloss: 'вопрос' },
          { text: 'ydun', type: 'affix', gloss: 'ты не шёл?' },
        ],
        O: [
          { text: 'gelmiyor', type: 'negation', gloss: 'не идёт' },
          { text: ' mu', type: 'question', gloss: 'вопрос' },
          { text: 'ydu', type: 'affix', gloss: 'он не шёл?' },
        ],
        Biz: [
          { text: 'gelmiyor', type: 'negation', gloss: 'не идёт' },
          { text: ' mu', type: 'question', gloss: 'вопрос' },
          { text: 'yduk', type: 'affix', gloss: 'мы не шли?' },
        ],
        Siz: [
          { text: 'gelmiyor', type: 'negation', gloss: 'не идёт' },
          { text: ' mu', type: 'question', gloss: 'вопрос' },
          { text: 'ydunuz', type: 'affix', gloss: 'вы не шли?' },
        ],
        Onlar: [
          { text: 'gelmiyorlar', type: 'negation', gloss: 'не идут' },
          { text: ' mı', type: 'question', gloss: 'вопрос' },
          { text: 'ydı', type: 'affix', gloss: 'они не шли?' },
        ],
      },
    },
    examples: [
      {
        id: 'ct-ex1',
        tr: 'Ben aradığımda o hâlâ uyuyordu.',
        ru: 'Когда я позвонил, он всё ещё спал (длительное действие в прошлом).',
        annotatedWords: [
          {
            surface: 'uyuyordu.',
            morphemes: [
              { text: 'uyu', type: 'root', gloss: 'спать' },
              { text: 'yor', type: 'affix', gloss: 'наст. длит.' },
              { text: 'du', type: 'affix', gloss: 'Hikaye (прошедшее)' },
            ],
          },
        ],
      },
      {
        id: 'ct-ex2',
        tr: 'Çocukken her yaz köyde bisiklet sürerdim.',
        ru: 'В детстве каждое лето я катался в деревне на велосипеде (привычка в прошлом).',
        annotatedWords: [
          {
            surface: 'sürerdim.',
            morphemes: [
              { text: 'sür', type: 'root', gloss: 'водить/кататься' },
              { text: 'er', type: 'affix', gloss: 'аорист (повторяемость)' },
              { text: 'di', type: 'affix', gloss: 'Hikaye (в прошлом)' },
              { text: 'm', type: 'person', gloss: 'я' },
            ],
          },
        ],
      },
      {
        id: 'ct-ex3',
        tr: 'Tam çıkacaktım ama telefon çaldı.',
        ru: 'Я как раз собирался выходить, но зазвонил телефон (несостоявшееся будущее в прошлом).',
        annotatedWords: [
          {
            surface: 'çıkacaktım',
            morphemes: [
              { text: 'çık', type: 'root', gloss: 'выходить' },
              { text: 'acak', type: 'affix', gloss: 'будущее' },
              { text: 'tı', type: 'affix', gloss: 'Hikaye (Fıstıkçı Şahap k→t)' },
              { text: 'm', type: 'person', gloss: 'я' },
            ],
          },
        ],
      },
      {
        id: 'ct-ex4',
        tr: 'Duyduğuma göre yarın kar yağacakmış.',
        ru: 'По слухам, завтра, говорят, пойдёт снег (Rivayet).',
        annotatedWords: [
          {
            surface: 'yağacakmış.',
            morphemes: [
              { text: 'yağ', type: 'root', gloss: 'идти (о снеге)' },
              { text: 'acak', type: 'affix', gloss: 'будущее' },
              { text: 'mış', type: 'affix', gloss: 'Rivayet (чужие слова)' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Прошедшее длительное (-ıyordu) vs Прошедшее привычное (-ardı)',
          explanation:
            '-ıyordu описывает процесс в конкретный момент прошлого («я читал, когда ты вошёл»). -ardı описывает регулярную привычку в прошлом («раньше я часто читал»), а также следствие нереального условия («я бы прочитал»).',
          exampleTr: 'Dün kitap okuyordum (читал вчера в тот момент) vs Eskiden çok okurdum (раньше много читал)',
          exampleRu: 'вчера читал (процесс) vs раньше читал (привычка)',
          relatedTopicId: 'conditional-sa',
        },
        {
          title: 'Куда крепится связка -(y)dı в вопросе',
          explanation:
            'Во всех составных временах связка -(y)dı / -(y)mış и личное окончание в вопросе отрываются от глагола и переходят к вопросительной частице mı!',
          exampleTr: 'Uyuyordu → Uyuyor muydu? (не *Uyuyordu mu?)',
          exampleRu: 'Он спал → Он спал?',
          relatedTopicId: 'gecmis-zaman-di-mis',
        },
      ],
    },
    miniCheck: [
      {
        id: 'ct-q1',
        prompt: 'Как переводится «Tam seni arayacaktım»? (aramak)',
        type: 'choice',
        options: [
          'Я уже позвонил тебе',
          'Я как раз собирался тебе позвонить',
          'Говорят, я тебе звонил',
          'Я часто тебе звонил раньше',
        ],
        correctAnswer: 'Я как раз собирался тебе позвонить',
        explanation: 'Модель -(y)acaktı (будущее в прошедшем) означает намерение в прошлом («собирался сделать»).',
      },
      {
        id: 'ct-q2',
        prompt: 'Поставьте глагол «çalışmak» в вопросительную форму прошедшего длительного времени (Sen): «Ты работал тогда?»',
        type: 'input',
        correctAnswer: 'çalışıyor muydun?',
        acceptedAnswers: ['çalışıyor muydun', 'çalışıyor muydun?'],
        explanation: 'Связка -du и лицо -n переходят на вопросительную частицу: çalışıyor muydun?',
      },
      {
        id: 'ct-q3',
        prompt: 'Что выражает связка Rivayet в предложении «Eskiden burada çok iyi çalışırmış»?',
        type: 'choice',
        options: [
          'Говорящий сам видел, как тот работал',
          'Говорящий пересказывает, что тот, по слухам, раньше хорошо работал',
          'Условие в будущем',
          'Приказ к действию',
        ],
        correctAnswer: 'Говорящий пересказывает, что тот, по слухам, раньше хорошо работал',
        explanation: 'Аорист + -mış (Rivayet) передаёт пересказ о привычках или событиях со слов других.',
      },
      {
        id: 'ct-q4',
        prompt: 'Образуйте форму «мы должны были уйти» (gitmek, -malı + Hikaye, Biz):',
        type: 'input',
        correctAnswer: 'gitmeliydik',
        acceptedAnswers: ['gitmeliydik'],
        explanation: 'git + meli + y (буфер) + di + k → gitmeliydik.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'passive-voice',
    sectionId: 'voice',
    titleRu: 'Страдательный залог (Пассив)',
    titleTr: 'Edilgen Çatı',
    level: 'B1',
    affixes: ['-ıl', '-il', '-ul', '-ül', '-ın', '-in', '-un', '-ün', '-n', 'tarafından', '-ca'],
    summary:
      'Страдательный залог показывает, что действие совершается над объектом (или автор действия не называется, как в «здесь говорят по-турецки»). Выбор пассивного аффикса зависит от конца основы: 1) после гласной → -n; 2) после согласной l → -ın/-in/-un/-ün; 3) после всех остальных согласных → -ıl/-il/-ul/-ül.',
    formula: [
      { text: 'Основа', type: 'root', gloss: 'глагол' },
      { text: '+ -n / -(I⁴)n / -(I⁴)l', type: 'affix', gloss: 'после гл. → -n; после l → -ın; иначе → -ıl' },
      { text: '+ Время + Лицо', type: 'person', gloss: 'обычное спряжение' },
    ],
    conjugationTable: {
      affirmative: {
        'После согл. (yapmak)': [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ıl', type: 'affix', gloss: 'пассив (-ıl)' },
          { text: 'dı', type: 'affix', gloss: 'прош. вр.' },
          { text: ' (сделан)', type: 'person', gloss: 'был сделан' },
        ],
        'После -l (almak)': [
          { text: 'al', type: 'root', gloss: 'брать' },
          { text: 'ın', type: 'affix', gloss: 'пассив (после l → -ın!)' },
          { text: 'dı', type: 'affix', gloss: 'прош. вр.' },
          { text: ' (взят)', type: 'person', gloss: 'был взят' },
        ],
        'После гласной (okumak)': [
          { text: 'oku', type: 'root', gloss: 'читать' },
          { text: 'n', type: 'affix', gloss: 'пассив (после гл. → -n)' },
          { text: 'du', type: 'affix', gloss: 'прош. вр.' },
          { text: ' (прочитан)', type: 'person', gloss: 'был прочитан' },
        ],
        'Озвончение (etmek)': [
          { text: 'ed', type: 'root', gloss: 'et (t→d)' },
          { text: 'il', type: 'affix', gloss: 'пассив' },
          { text: 'iyor', type: 'affix', gloss: 'наст. длит.' },
        ],
        'Безличный пассив (неперех.)': [
          { text: 'gir', type: 'root', gloss: 'входить' },
          { text: 'il', type: 'affix', gloss: 'пассив' },
          { text: 'ir', type: 'affix', gloss: 'аорист (вход разрешён)' },
        ],
        'Исполнитель (tarafından)': [
          { text: 'müdür tarafından', type: 'person', gloss: 'кем? (директором)' },
          { text: ' imzala', type: 'root', gloss: 'подписать' },
          { text: 'n', type: 'affix', gloss: 'пассив' },
          { text: 'dı', type: 'affix', gloss: 'подписан' },
        ],
      },
      negative: {
        'После согл. (yapmak)': [
          { text: 'yap', type: 'root', gloss: 'делать' },
          { text: 'ıl', type: 'affix', gloss: 'пассив' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dı', type: 'affix', gloss: 'не был сделан' },
        ],
        'После -l (almak)': [
          { text: 'al', type: 'root', gloss: 'брать' },
          { text: 'ın', type: 'affix', gloss: 'пассив' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dı', type: 'affix', gloss: 'не был взят' },
        ],
        'После гласной (okumak)': [
          { text: 'oku', type: 'root', gloss: 'читать' },
          { text: 'n', type: 'affix', gloss: 'пассив' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dı', type: 'affix', gloss: 'не был прочитан' },
        ],
        'Озвончение (etmek)': [
          { text: 'ed', type: 'root', gloss: 'et→ed' },
          { text: 'il', type: 'affix', gloss: 'пассив' },
          { text: 'mi', type: 'negation', gloss: 'не' },
          { text: 'yor', type: 'affix', gloss: 'не делается' },
        ],
        'Безличный пассив (неперех.)': [
          { text: 'gir', type: 'root', gloss: 'входить' },
          { text: 'il', type: 'affix', gloss: 'пассив' },
          { text: 'mez', type: 'negation', gloss: 'вход воспрещён' },
        ],
        'Исполнитель (tarafından)': [
          { text: 'kimse tarafından', type: 'person', gloss: 'никем' },
          { text: ' görül', type: 'root', gloss: 'быть увиденным' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'di', type: 'affix', gloss: 'не был увиден' },
        ],
      },
      question: {
        'После согл. (yapmak)': [
          { text: 'yapıldı', type: 'affix', gloss: 'сделано' },
          { text: ' mı?', type: 'question', gloss: 'сделано ли?' },
        ],
        'После -l (almak)': [
          { text: 'alındı', type: 'affix', gloss: 'взято' },
          { text: ' mı?', type: 'question', gloss: 'принято/взято ли?' },
        ],
        'После гласной (okumak)': [
          { text: 'okundu', type: 'affix', gloss: 'прочитано' },
          { text: ' mu?', type: 'question', gloss: 'прочитано ли?' },
        ],
        'Озвончение (etmek)': [
          { text: 'ediliyor', type: 'affix', gloss: 'совершается' },
          { text: ' mu?', type: 'question', gloss: 'совершается ли?' },
        ],
        'Безличный пассив (неперех.)': [
          { text: 'buradan geçilir', type: 'affix', gloss: 'здесь проходят' },
          { text: ' mi?', type: 'question', gloss: 'можно ли здесь пройти?' },
        ],
        'Исполнитель (tarafından)': [
          { text: 'onun tarafından mı', type: 'question', gloss: 'им ли?' },
          { text: ' yazıldı', type: 'affix', gloss: 'было написано' },
        ],
      },
    },
    examples: [
      {
        id: 'pv-ex1',
        tr: 'Bu bina geçen yıl ünlü bir mimar tarafından tasarlandı.',
        ru: 'Это здание было спроектировано в прошлом году известным архитектором.',
        annotatedWords: [
          {
            surface: 'tarafından',
            morphemes: [{ text: 'tarafından', type: 'affix', gloss: 'послелог «кем» (агент пассива)' }],
          },
          {
            surface: 'tasarlandı.',
            morphemes: [
              { text: 'tasarla', type: 'root', gloss: 'проектировать (на гласную)' },
              { text: 'n', type: 'affix', gloss: 'пассив (-n)' },
              { text: 'dı', type: 'affix', gloss: 'прош. время' },
            ],
          },
        ],
      },
      {
        id: 'pv-ex2',
        tr: 'Burada Türkçe ve İngilizce konuşuluyor.',
        ru: 'Здесь говорят по-турецки и по-английски.',
        annotatedWords: [
          {
            surface: 'konuşuluyor.',
            morphemes: [
              { text: 'konuş', type: 'root', gloss: 'говорить' },
              { text: 'ul', type: 'affix', gloss: 'пассив (-ul)' },
              { text: 'uyor', type: 'affix', gloss: 'наст. длит.' },
            ],
          },
        ],
      },
      {
        id: 'pv-ex3',
        tr: 'Karar henüz alınmadı, yarın açıklanacak.',
        ru: 'Решение ещё не принято, его объявят завтра.',
        annotatedWords: [
          {
            surface: 'alınmadı,',
            morphemes: [
              { text: 'al', type: 'root', gloss: 'брать/принимать (на -l!)' },
              { text: 'ın', type: 'affix', gloss: 'пассив (-ın после l)' },
              { text: 'ma', type: 'negation', gloss: 'отриц.' },
              { text: 'dı', type: 'affix', gloss: 'прош. вр.' },
            ],
          },
          {
            surface: 'açıklanacak.',
            morphemes: [
              { text: 'açıkla', type: 'root', gloss: 'объявлять (на гласную)' },
              { text: 'n', type: 'affix', gloss: 'пассив (-n)' },
              { text: 'acak', type: 'affix', gloss: 'буд. время' },
            ],
          },
        ],
      },
      {
        id: 'pv-ex4',
        tr: 'Bu kapıdan çıkılmaz, lütfen yan kapıyı kullanın.',
        ru: 'Через эту дверь выходить нельзя, пожалуйста, пользуйтесь боковой дверью.',
        annotatedWords: [
          {
            surface: 'çıkılmaz,',
            morphemes: [
              { text: 'çık', type: 'root', gloss: 'выходить (неперех. глагол)' },
              { text: 'ıl', type: 'affix', gloss: 'безличный пассив' },
              { text: 'maz', type: 'negation', gloss: 'нельзя / не выходят' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'После основы на -l ставится -ın, а не -ıl!',
          explanation:
            'Чтобы избежать двух l подряд, после глаголов на -l (almak, bulmak, bilmek, silmek, kalmak, gelmek) используется -ın/-in/-un/-ün: alındı (взято), bulundu (найдено), silindi (стёрто).',
          exampleTr: 'bulundu (найдено, не *bululdu), biliniyor (известно, не *bililiyor)',
          exampleRu: 'найдено, известно',
          relatedTopicId: 'reflexive-voice',
        },
        {
          title: 'Пассив с -n vs Возвратный залог с -n',
          explanation:
            'Формально аффикс -n/-ın одинаков у пассива и возвратного залога. Разница в контексте: если действие совершает кто-то другой над субъектом — это пассив (Kapı açıldı); если субъект сам над собой — возвратный залог (Ali yıkandı «Али умылся»).',
          exampleTr: 'Çocuk yıkandı (ребёнок умылся сам) vs Araba yıkandı (машину помыли)',
          exampleRu: 'ребёнок помылся vs машину помыли',
          relatedTopicId: 'causative-voice',
        },
      ],
    },
    miniCheck: [
      {
        id: 'pv-q1',
        prompt: 'Образуйте пассивную форму прошедшего времени от глагола «bulmak» (найти): «Ключ нашёлся» — Anahtar ___.',
        type: 'input',
        correctAnswer: 'bulundu',
        acceptedAnswers: ['bulundu'],
        explanation: 'Основа bul- оканчивается на l, поэтому аффикс пассива — -un (не -ul) → bulundu.',
      },
      {
        id: 'pv-q2',
        prompt: 'Какой вариант правильный для «Эта книга была написана в 2020 году» (yazmak)?',
        type: 'choice',
        options: ['yazındı', 'yazıldı', 'yazdı', 'yaznıldı'],
        correctAnswer: 'yazıldı',
        explanation: 'Основа yaz- заканчивается на согласную z (не l), поэтому выбираем -ıl → yazıldı.',
      },
      {
        id: 'pv-q3',
        prompt: 'Как сказать «Здесь не курят» (безличный пассив: sigara içmek)?',
        type: 'choice',
        options: [
          'Burada sigara içmez.',
          'Burada sigara içilmez.',
          'Burada sigara içinmez.',
          'Burada sigara içilir.',
        ],
        correctAnswer: 'Burada sigara içilmez.',
        explanation: 'Запреты на табличках и общие правила оформляются безличным пассивом в отрицательном аористе: içilmez.',
      },
      {
        id: 'pv-q4',
        prompt: 'Образуйте пассивную форму настоящего длительного времени от глагола «beklemek» (ждать): «Вас ждут» — Bekle___yorsunuz.',
        type: 'input',
        correctAnswer: 'bekleniyorsunuz',
        acceptedAnswers: ['bekleniyorsunuz', 'ni'],
        explanation: 'Основа bekle- на гласную принимает пассив -n → beklen-. Далее -iyor-sunuz → bekleniyorsunuz.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'participles-an-dik',
    sectionId: 'verbals',
    titleRu: 'Причастия (-an, -dık, -acak)',
    titleTr: 'Sıfat-Fiiller (Ortaçlar)',
    level: 'B1',
    levels: ['B1', 'B2'],
    affixes: [
      '-an',
      '-en',
      '-yan',
      '-yen',
      '-dık',
      '-dik',
      '-duk',
      '-dük',
      '-tık',
      '-tik',
      '-dığı',
      '-diği',
      '-acak',
      '-ecek',
      '-acağı',
      '-eceği',
    ],
    summary:
      'Турецкие причастия заменяют русские придаточные со словом «который» и всегда стоят ПЕРЕД определяемым существительным. Главное правило выбора: если определяемое слово само совершает действие (кто? что? — субъектное причастие), берём -(y)an/-(y)en; если над ним совершают действие, или это время/место/причина (кого? чего? где? когда?), берём -dık (прош./наст.) или -(y)acak (буд.) + аффикс принадлежности субъекта.',
    formula: [
      { text: 'Субъектное: Основа + -(y)an/-(y)en', type: 'affix', gloss: 'кто делает (читающий)' },
      { text: 'Объектное: Основа + -dık / -(y)acak + принадл.', type: 'person', gloss: 'которого я читаю / прочитаю' },
      { text: '+ Существительное', type: 'root', gloss: 'определяемое слово' },
    ],
    conjugationTable: {
      affirmative: {
        Ben: [
          { text: 'oku', type: 'root', gloss: 'читать' },
          { text: 'duğ', type: 'affix', gloss: '-duk (k→ğ)' },
          { text: 'um', type: 'person', gloss: 'книга, которую я читаю/читал' },
        ],
        Sen: [
          { text: 'oku', type: 'root', gloss: 'читать' },
          { text: 'duğ', type: 'affix', gloss: '-duk (k→ğ)' },
          { text: 'un', type: 'person', gloss: 'книга, которую ты читал' },
        ],
        O: [
          { text: 'oku', type: 'root', gloss: 'читать' },
          { text: 'duğ', type: 'affix', gloss: '-duk (k→ğ)' },
          { text: 'u', type: 'person', gloss: 'книга, которую он читал' },
        ],
        Biz: [
          { text: 'oku', type: 'root', gloss: 'читать' },
          { text: 'duğ', type: 'affix', gloss: '-duk (k→ğ)' },
          { text: 'umuz', type: 'person', gloss: 'книга, которую мы читали' },
        ],
        Siz: [
          { text: 'oku', type: 'root', gloss: 'читать' },
          { text: 'duğ', type: 'affix', gloss: '-duk (k→ğ)' },
          { text: 'unuz', type: 'person', gloss: 'книга, которую вы читали' },
        ],
        Onlar: [
          { text: 'oku', type: 'root', gloss: 'читать' },
          { text: 'duk', type: 'affix', gloss: '-duk' },
          { text: 'ları', type: 'person', gloss: 'книга, которую они читали' },
        ],
      },
      negative: {
        Ben: [
          { text: 'oku', type: 'root', gloss: 'читать' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dığ', type: 'affix', gloss: '-dık (k→ğ)' },
          { text: 'ım', type: 'person', gloss: 'который я не читал' },
        ],
        Sen: [
          { text: 'oku', type: 'root', gloss: 'читать' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dığ', type: 'affix', gloss: '-dık (k→ğ)' },
          { text: 'ın', type: 'person', gloss: 'который ты не читал' },
        ],
        O: [
          { text: 'oku', type: 'root', gloss: 'читать' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dığ', type: 'affix', gloss: '-dık (k→ğ)' },
          { text: 'ı', type: 'person', gloss: 'который он не читал' },
        ],
        Biz: [
          { text: 'oku', type: 'root', gloss: 'читать' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dığ', type: 'affix', gloss: '-dık (k→ğ)' },
          { text: 'ımız', type: 'person', gloss: 'который мы не читали' },
        ],
        Siz: [
          { text: 'oku', type: 'root', gloss: 'читать' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dığ', type: 'affix', gloss: '-dık (k→ğ)' },
          { text: 'ınız', type: 'person', gloss: 'который вы не читали' },
        ],
        Onlar: [
          { text: 'oku', type: 'root', gloss: 'читать' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dık', type: 'affix', gloss: '-dık' },
          { text: 'ları', type: 'person', gloss: 'который они не читали' },
        ],
      },
      question: {
        Ben: [
          { text: 'okuyacağ', type: 'affix', gloss: 'будущее прич. (k→ğ)' },
          { text: 'ım', type: 'person', gloss: 'который я прочту' },
        ],
        Sen: [
          { text: 'okuyacağ', type: 'affix', gloss: 'будущее прич.' },
          { text: 'ın', type: 'person', gloss: 'который ты прочтёшь' },
        ],
        O: [
          { text: 'okuyacağ', type: 'affix', gloss: 'будущее прич.' },
          { text: 'ı', type: 'person', gloss: 'который он прочтёт' },
        ],
        Biz: [
          { text: 'okuyacağ', type: 'affix', gloss: 'будущее прич.' },
          { text: 'ımız', type: 'person', gloss: 'который мы прочтём' },
        ],
        Siz: [
          { text: 'okuyacağ', type: 'affix', gloss: 'будущее прич.' },
          { text: 'ınız', type: 'person', gloss: 'который вы прочтёте' },
        ],
        Onlar: [
          { text: 'okuyacak', type: 'affix', gloss: 'будущее прич.' },
          { text: 'ları', type: 'person', gloss: 'который они прочтут' },
        ],
      },
    },
    examples: [
      {
        id: 'pt-ex1',
        tr: 'Türkçe konuşan öğrenci sınıfa girdi.',
        ru: 'Студент, говорящий по-турецки, вошёл в класс (студент сам говорит → -an).',
        annotatedWords: [
          {
            surface: 'konuşan',
            morphemes: [
              { text: 'konuş', type: 'root', gloss: 'говорить' },
              { text: 'an', type: 'affix', gloss: 'субъектное причастие' },
            ],
          },
        ],
      },
      {
        id: 'pt-ex2',
        tr: 'Dün okuduğum kitap çok ilginçti.',
        ru: 'Книга, которую я вчера читал, была очень интересной (объект действия → -dık + принадл.).',
        annotatedWords: [
          {
            surface: 'okuduğum',
            morphemes: [
              { text: 'oku', type: 'root', gloss: 'читать' },
              { text: 'duğ', type: 'affix', gloss: 'прич. -dık (k→ğ)' },
              { text: 'um', type: 'person', gloss: 'я (мой)' },
            ],
          },
        ],
      },
      {
        id: 'pt-ex3',
        tr: 'Yarın gideceğimiz şehir İstanbul’dur.',
        ru: 'Город, в который мы поедем завтра, — это Стамбул (будущее + не-субъект → -acak + принадл.).',
        annotatedWords: [
          {
            surface: 'gideceğimiz',
            morphemes: [
              { text: 'gid', type: 'root', gloss: 'git (t→d)' },
              { text: 'eceğ', type: 'affix', gloss: 'буд. прич. (k→ğ)' },
              { text: 'imiz', type: 'person', gloss: 'мы (наш)' },
            ],
          },
        ],
      },
      {
        id: 'pt-ex4',
        tr: 'Gelenleri salona davet ettik.',
        ru: 'Пришедших (субстантивация: тех, кто пришёл) мы пригласили в зал.',
        annotatedWords: [
          {
            surface: 'Gelenleri',
            morphemes: [
              { text: 'Gel', type: 'root', gloss: 'приходить' },
              { text: 'en', type: 'affix', gloss: 'причастие -(y)en' },
              { text: 'ler', type: 'affix', gloss: 'мн. ч. (люди)' },
              { text: 'i', type: 'affix', gloss: 'винит. падеж' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Когда брать -an, а когда -dık?',
          explanation:
            'Проверьте, является ли определяемое слово ПОДЛЕЖАЩИМ внутри причастного оборота. «Человек, который работает» (человек сам работает → çalışan adam). «Работа, которую делает человек» (человек делает работу → adamın yaptığı iş).',
          exampleTr: 'yazan adam (пишущий человек) vs adamın yazdığı mektup (письмо, которое написал человек)',
          exampleRu: 'человек, который пишет vs письмо, которое написал человек',
          relatedTopicId: 'direct-indirect-speech',
        },
        {
          title: 'Причастие -dık в определении vs -dığı için / -dığında в обстоятельствах',
          explanation:
            'База -dık + принадлежность лежит в основе множества турецких союзов: -dığı için (потому что), -dığında (когда), -dığı halde (несмотря на то что), -dığını söyledi (сказал, что).',
          exampleTr: 'geldiğim gün (день, в который я пришёл) vs geldiğimde (когда я пришёл)',
          exampleRu: 'день моего прихода vs когда я пришёл',
          relatedTopicId: 'cause-result-clauses',
        },
      ],
    },
    miniCheck: [
      {
        id: 'pt-q1',
        prompt: 'Выберите верную форму: «Девушка, сидящая у окна» (oturmak) — Pencere kenarında ___ kız.',
        type: 'choice',
        options: ['oturduğu', 'oturan', 'oturacak', 'oturduğum'],
        correctAnswer: 'oturan',
        explanation: 'Девушка сама сидит (субъект действия), поэтому используем субъектное причастие -(y)an → oturan.',
      },
      {
        id: 'pt-q2',
        prompt: 'Заполните пропуск: «Фильм, который мы посмотрели вчера» (izlemek, Biz) — Dün ___ film.',
        type: 'input',
        correctAnswer: 'izlediğimiz',
        acceptedAnswers: ['izlediğimiz'],
        explanation: 'Фильм — объект действия (мы его посмотрели), значит берём -dik (k→ğ) + -imiz → izlediğimiz.',
      },
      {
        id: 'pt-q3',
        prompt: 'Как переводится «Yarın buluşacağımız kafe»?',
        type: 'choice',
        options: [
          'Кафе, которое встретится завтра',
          'Кафе, в котором мы встретимся завтра',
          'Кафе, где мы встречались вчера',
          'Встреча в кафе завтра',
        ],
        correctAnswer: 'Кафе, в котором мы встретимся завтра',
        explanation: 'будущее действие + место (не субъект) + мы → buluşacağımız kafe.',
      },
      {
        id: 'pt-q4',
        prompt: 'Образуйте форму: «письмо, которое я НЕ отправил» (göndermek, Ben) — ___ mektup.',
        type: 'input',
        correctAnswer: 'göndermediğim',
        acceptedAnswers: ['göndermediğim'],
        explanation: 'gönder + me (отриц.) + diğ (k→ğ) + im (я) → göndermediğim.',
      },
    ],
    isDraft: false,
  },
];
