import type { GrammarTopic } from '../../types';

export const TOPICS_EXTRA_3: GrammarTopic[] = [
  {
    id: 'reflexive-voice',
    sectionId: 'voice',
    titleRu: 'Возвратный залог (Dönüşlü çatı)',
    titleTr: 'Dönüşlü Çatı',
    level: 'B1',
    affixes: ['-ın', '-in', '-un', '-ün', '-n'],
    summary:
      'Возвратный залог показывает, что действие совершается активным субъектом и направлено на него самого («мыться, одеваться, расчёсываться, радоваться»). Он образуется аффиксом -(I⁴)n (после гласной — -n, после согласной — -ın/-in/-un/-ün) и отличается от пассива наличием одушевлённого деятеля, который сам контролирует процесс.',
    formula: [
      { text: 'Основа', type: 'root', gloss: 'переходный глагол' },
      { text: '+ -n / -(I⁴)n', type: 'affix', gloss: 'возвратный аффикс (себя / -ся)' },
      { text: '+ Время + Лицо', type: 'person', gloss: 'обычное спряжение' },
    ],
    conjugationTable: {
      affirmative: {
        Ben: [
          { text: 'giy', type: 'root', gloss: 'надевать' },
          { text: 'in', type: 'affix', gloss: 'возвр. (одеваться)' },
          { text: 'iyor', type: 'affix', gloss: 'наст. длит.' },
          { text: 'um', type: 'person', gloss: 'я одеваюсь' },
        ],
        Sen: [
          { text: 'yıka', type: 'root', gloss: 'мыть' },
          { text: 'n', type: 'affix', gloss: 'возвр. (мыться)' },
          { text: 'ıyor', type: 'affix', gloss: 'наст. длит.' },
          { text: 'sun', type: 'person', gloss: 'ты моешься' },
        ],
        O: [
          { text: 'tara', type: 'root', gloss: 'чесать' },
          { text: 'n', type: 'affix', gloss: 'возвр. (причёсываться)' },
          { text: 'dı', type: 'affix', gloss: 'прош. вр.' },
        ],
        Biz: [
          { text: 'hazırla', type: 'root', gloss: 'готовить' },
          { text: 'n', type: 'affix', gloss: 'возвр. (готовиться)' },
          { text: 'ıyor', type: 'affix', gloss: 'наст. длит.' },
          { text: 'uz', type: 'person', gloss: 'мы готовимся' },
        ],
        Siz: [
          { text: 'sev', type: 'root', gloss: 'любить' },
          { text: 'in', type: 'affix', gloss: 'возвр. (радоваться)' },
          { text: 'di', type: 'affix', gloss: 'прош. вр.' },
          { text: 'niz', type: 'person', gloss: 'вы обрадовались' },
        ],
        Onlar: [
          { text: 'süsle', type: 'root', gloss: 'украшать' },
          { text: 'n', type: 'affix', gloss: 'возвр. (наряжаться)' },
          { text: 'iyor', type: 'affix', gloss: 'наст. длит.' },
          { text: 'lar', type: 'person', gloss: 'они наряжаются' },
        ],
      },
      negative: {
        Ben: [
          { text: 'giy', type: 'root', gloss: 'надевать' },
          { text: 'in', type: 'affix', gloss: 'возвр.' },
          { text: 'mi', type: 'negation', gloss: 'не' },
          { text: 'yor', type: 'affix', gloss: 'наст. длит.' },
          { text: 'um', type: 'person', gloss: 'я не одеваюсь' },
        ],
        Sen: [
          { text: 'yıka', type: 'root', gloss: 'мыть' },
          { text: 'n', type: 'affix', gloss: 'возвр.' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dı', type: 'affix', gloss: 'прош. вр.' },
          { text: 'n', type: 'person', gloss: 'ты не помылся' },
        ],
        O: [
          { text: 'tara', type: 'root', gloss: 'чесать' },
          { text: 'n', type: 'affix', gloss: 'возвр.' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dı', type: 'affix', gloss: 'не причесался' },
        ],
        Biz: [
          { text: 'hazırla', type: 'root', gloss: 'готовить' },
          { text: 'n', type: 'affix', gloss: 'возвр.' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dık', type: 'person', gloss: 'мы не подготовились' },
        ],
        Siz: [
          { text: 'üz', type: 'root', gloss: 'огорчать' },
          { text: 'ül', type: 'affix', gloss: 'возвр. искл. (-ül)' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'yin', type: 'person', gloss: 'не расстраивайтесь' },
        ],
        Onlar: [
          { text: 'öv', type: 'root', gloss: 'хвалить' },
          { text: 'ün', type: 'affix', gloss: 'возвр. (хвалиться)' },
          { text: 'mü', type: 'negation', gloss: 'не' },
          { text: 'yor', type: 'affix', gloss: 'наст. длит.' },
          { text: 'lar', type: 'person', gloss: 'они не хвастаются' },
        ],
      },
      question: {
        Ben: [
          { text: 'giyindim', type: 'affix', gloss: 'я оделся' },
          { text: ' mi?', type: 'question', gloss: 'я оделся?' },
        ],
        Sen: [
          { text: 'yıkandın', type: 'affix', gloss: 'ты помылся' },
          { text: ' mı?', type: 'question', gloss: 'ты помылся?' },
        ],
        O: [
          { text: 'hazırlandı', type: 'affix', gloss: 'он приготовился' },
          { text: ' mı?', type: 'question', gloss: 'он приготовился?' },
        ],
        Biz: [
          { text: 'sevindik', type: 'affix', gloss: 'мы обрадовались' },
          { text: ' mi?', type: 'question', gloss: 'мы обрадовались?' },
        ],
        Siz: [
          { text: 'düşündünüz', type: 'affix', gloss: 'вы задумались' },
          { text: ' mü?', type: 'question', gloss: 'вы подумали?' },
        ],
        Onlar: [
          { text: 'süslendiler', type: 'affix', gloss: 'они нарядились' },
          { text: ' mi?', type: 'question', gloss: 'они нарядились?' },
        ],
      },
      negativeQuestion: {
        Ben: [
          { text: 'giyinmedim', type: 'negation', gloss: 'я не оделся' },
          { text: ' mi?', type: 'question', gloss: 'разве я не оделся?' },
        ],
        Sen: [
          { text: 'yıkanmadın', type: 'negation', gloss: 'ты не помылся' },
          { text: ' mı?', type: 'question', gloss: 'ты ещё не помылся?' },
        ],
        O: [
          { text: 'hazırlanmadı', type: 'negation', gloss: 'он не подготовился' },
          { text: ' mı?', type: 'question', gloss: 'он не подготовился?' },
        ],
        Siz: [
          { text: 'sevinmediniz', type: 'negation', gloss: 'вы не обрадовались' },
          { text: ' mi?', type: 'question', gloss: 'разве вы не обрадовались?' },
        ],
      },
    },
    examples: [
      {
        id: 'rf-ex1',
        tr: 'Sabah erken kalkıp hemen yıkandım ve giyindim.',
        ru: 'Утром я рано встал, сразу умылся (помылся) и оделся.',
        annotatedWords: [
          {
            surface: 'yıkandım',
            morphemes: [
              { text: 'yıka', type: 'root', gloss: 'мыть' },
              { text: 'n', type: 'affix', gloss: 'возвратный залог' },
              { text: 'dı', type: 'affix', gloss: 'прош. вр.' },
              { text: 'm', type: 'person', gloss: 'я' },
            ],
          },
          {
            surface: 'giyindim',
            morphemes: [
              { text: 'giy', type: 'root', gloss: 'надевать' },
              { text: 'in', type: 'affix', gloss: 'возвратный залог' },
              { text: 'di', type: 'affix', gloss: 'прош. вр.' },
              { text: 'm', type: 'person', gloss: 'я' },
            ],
          },
        ],
      },
      {
        id: 'rf-ex2',
        tr: 'Bu güzel haberi duyunca hepimiz çok sevindik.',
        ru: 'Услышав эту хорошую новость, мы все очень обрадовались.',
        annotatedWords: [
          {
            surface: 'sevindik',
            morphemes: [
              { text: 'sev', type: 'root', gloss: 'любить' },
              { text: 'in', type: 'affix', gloss: 'возвр. (радоваться)' },
              { text: 'di', type: 'affix', gloss: 'прош. вр.' },
              { text: 'k', type: 'person', gloss: 'мы' },
            ],
          },
        ],
      },
      {
        id: 'rf-ex3',
        tr: 'Çocuk aynanın karşısında uzun süre tarandı.',
        ru: 'Ребёнок долго причёсывался перед зеркалом.',
        annotatedWords: [
          {
            surface: 'tarandı',
            morphemes: [
              { text: 'tara', type: 'root', gloss: 'причёсывать' },
              { text: 'n', type: 'affix', gloss: 'возвратный залог' },
              { text: 'dı', type: 'affix', gloss: 'прош. вр.' },
            ],
          },
        ],
      },
      {
        id: 'rf-ex4',
        tr: 'Yarınki sınav için bütün akşam hazırlandılar.',
        ru: 'Они весь вечер готовились к завтрашнему экзамену.',
        annotatedWords: [
          {
            surface: 'hazırlandılar',
            morphemes: [
              { text: 'hazırla', type: 'root', gloss: 'готовить' },
              { text: 'n', type: 'affix', gloss: 'возвратный залог' },
              { text: 'dı', type: 'affix', gloss: 'прош. вр.' },
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
          title: 'Возвратный залог vs Страдательный залог (-n / -ın)',
          explanation:
            'Аффикс -n/-ın одинаков для возвратного залога и пассива после гласных и l. Различие в смысле: в возвратном залоге субъект одушевлённый и сам совершает действие над собой, а в пассиве действие совершает кто-то другой.',
          exampleTr: 'Çocuk yıkandı (ребёнок помылся сам) vs Araba yıkandı (машину помыли)',
          exampleRu: 'ребёнок помылся vs машину помыли',
          relatedTopicId: 'passive-voice',
        },
        {
          title: 'Возвратный аффикс -n vs Возвратное местоимение kendi',
          explanation:
            'Глагольный аффикс -(I⁴)n закреплён только за ограниченной группой глаголов (yıkanmak, giyinmek, taranmak). С остальными глаголами (görmek, suçlamak, kesmek) используется местоимение kendini / kendine.',
          exampleTr: 'Kardeşim giyindi (брат оделся) vs Kardeşim kendini aynada gördü (увидел себя в зеркале)',
          exampleRu: 'брат оделся vs брат увидел себя в зеркале',
          relatedTopicId: 'pronouns',
        },
      ],
    },
    miniCheck: [
      {
        id: 'rf-q1',
        prompt: 'Как будет «Она оделась и вышла на улицу» (giymek — надевать)? — ___ ve sokağa çıktı.',
        type: 'input',
        correctAnswer: 'giyindi',
        acceptedAnswers: ['giyindi', 'Giyindi'],
        explanation: 'Основа giy- оканчивается на согласную y, поэтому добавляем -in + -di → giyindi.',
      },
      {
        id: 'rf-q2',
        prompt: 'В каком предложении глагол стоит в возвратном, а не в страдательном залоге?',
        type: 'choice',
        options: [
          'Bütün tabaklar mutfakta yıkandı.',
          'Misafirler gelmeden önce ev temizlendi.',
          'Ayşe aynaya bakıp güzelce tarandı.',
          'Yeni kanun mecliste onaylandı.',
        ],
        correctAnswer: 'Ayşe aynaya bakıp güzelce tarandı.',
        explanation: 'Айше сама причесала себя — субъект активен и действие направлено на него самого.',
      },
      {
        id: 'rf-q3',
        prompt: 'Заполните пропуск: «Мы готовимся к поездке» (hazırlamak) — Yolculuğa ___.',
        type: 'input',
        correctAnswer: 'hazırlanıyoruz',
        acceptedAnswers: ['hazırlanıyoruz'],
        explanation: 'hazırla + n (возвр.) + ıyor + uz → hazırlanıyoruz.',
      },
      {
        id: 'rf-q4',
        prompt: 'Как выразить возвратность с глаголом «обвинять» (suçlamak), не имеющим возвратного аффикса?',
        type: 'choice',
        options: [
          'suçlanmak',
          'kendini suçlamak',
          'suçlaşmak',
          'suçlatmak',
        ],
        correctAnswer: 'kendini suçlamak',
        explanation: 'Форма suçlanmak означает пассив («быть обвинённым кем-то»). Для возвратного значения («обвинять себя») нужно местоимение kendini.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'reciprocal-voice',
    sectionId: 'voice',
    titleRu: 'Взаимно-совместный залог (İşteş çatı)',
    titleTr: 'İşteş Çatı',
    level: 'B1',
    affixes: ['-ış', '-iş', '-uş', '-üş', '-ş', 'ile'],
    summary:
      'Взаимно-совместный залог обозначает действие, которое совершается двумя или более участниками друг с другом (görüşmek — видеться, yazışmak — переписываться) либо совместно в одной группе (gülüşmek — смеяться вместе, kaçışmak — разбегаться). Образуется аффиксом -(I⁴)ş (после гласной — -ş) и часто сочетается с послелогом ile / -(y)la.',
    formula: [
      { text: 'Основа', type: 'root', gloss: 'глагол' },
      { text: '+ -ş / -(I⁴)ş', type: 'affix', gloss: 'взаимность / совместность' },
      { text: '+ Время + Лицо', type: 'person', gloss: 'обычно мн. ч. или (имя + ile)' },
    ],
    conjugationTable: {
      affirmative: {
        'Взаимн. (görüşmek)': [
          { text: 'gör', type: 'root', gloss: 'видеть' },
          { text: 'üş', type: 'affix', gloss: 'взаимн. (видеться)' },
          { text: 'üyor', type: 'affix', gloss: 'наст. длит.' },
          { text: 'uz', type: 'person', gloss: 'мы видимся' },
        ],
        'Взаимн. (tanışmak)': [
          { text: 'tanı', type: 'root', gloss: 'знать' },
          { text: 'ş', type: 'affix', gloss: 'взаимн. (знакомиться)' },
          { text: 'tı', type: 'affix', gloss: 'прош. вр. (ş→t)' },
          { text: 'k', type: 'person', gloss: 'мы познакомились' },
        ],
        'Взаимн. (yazışmak)': [
          { text: 'yaz', type: 'root', gloss: 'писать' },
          { text: 'ış', type: 'affix', gloss: 'взаимн. (переписываться)' },
          { text: 'ıyor', type: 'affix', gloss: 'наст. длит.' },
          { text: 'lar', type: 'person', gloss: 'они переписываются' },
        ],
        'Совместн. (gülüşmek)': [
          { text: 'gül', type: 'root', gloss: 'смеяться' },
          { text: 'üş', type: 'affix', gloss: 'совместн. (вместе)' },
          { text: 'tü', type: 'affix', gloss: 'прош. вр.' },
          { text: 'ler', type: 'person', gloss: 'они дружно засмеялись' },
        ],
        'С послелогом ile': [
          { text: 'onunla', type: 'person', gloss: 'с ним' },
          { text: ' tartış', type: 'root', gloss: 'спорить (взаимн.)' },
          { text: 'tı', type: 'affix', gloss: 'прош. вр.' },
          { text: 'm', type: 'person', gloss: 'я поспорил с ним' },
        ],
      },
      negative: {
        'Взаимн. (görüşmek)': [
          { text: 'gör', type: 'root', gloss: 'видеть' },
          { text: 'üş', type: 'affix', gloss: 'взаимн.' },
          { text: 'mü', type: 'negation', gloss: 'не' },
          { text: 'yor', type: 'affix', gloss: 'наст. длит.' },
          { text: 'uz', type: 'person', gloss: 'мы не видимся' },
        ],
        'Взаимн. (tanışmak)': [
          { text: 'tanı', type: 'root', gloss: 'знать' },
          { text: 'ş', type: 'affix', gloss: 'взаимн.' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'dı', type: 'affix', gloss: 'прош. вр.' },
          { text: 'k', type: 'person', gloss: 'мы не познакомились' },
        ],
        'Взаимн. (anlaşmak)': [
          { text: 'anla', type: 'root', gloss: 'понимать' },
          { text: 'ş', type: 'affix', gloss: 'взаимн. (договариваться)' },
          { text: 'a', type: 'affix', gloss: 'невозможность' },
          { text: 'mı', type: 'negation', gloss: 'не' },
          { text: 'yor', type: 'affix', gloss: 'не можем договориться' },
          { text: 'uz', type: 'person', gloss: 'мы' },
        ],
        'Совместн. (bekleşmek)': [
          { text: 'bekle', type: 'root', gloss: 'ждать' },
          { text: 'ş', type: 'affix', gloss: 'совместн.' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'di', type: 'affix', gloss: 'не ждали толпой' },
          { text: 'ler', type: 'person', gloss: 'они' },
        ],
      },
      question: {
        'Взаимн. (görüşmek)': [
          { text: 'görüşüyor', type: 'affix', gloss: 'вы видитесь' },
          { text: ' musunuz?', type: 'question', gloss: 'вы видитесь?' },
        ],
        'Взаимн. (tanışmak)': [
          { text: 'tanıştınız', type: 'affix', gloss: 'вы познакомились' },
          { text: ' mı?', type: 'question', gloss: 'вы познакомились?' },
        ],
        'Взаимн. (yazışmak)': [
          { text: 'yazışıyor', type: 'affix', gloss: 'они переписываются' },
          { text: 'lar mı?', type: 'question', gloss: 'они переписываются?' },
        ],
        'С послелогом ile': [
          { text: 'onunla barıştın', type: 'affix', gloss: 'ты помирился с ним' },
          { text: ' mı?', type: 'question', gloss: 'ты помирился с ним?' },
        ],
      },
    },
    examples: [
      {
        id: 'rc-ex1',
        tr: 'Eski arkadaşımla hafta sonu kafede görüştük.',
        ru: 'На выходных мы увиделись со старым другом в кафе.',
        annotatedWords: [
          {
            surface: 'arkadaşımla',
            morphemes: [
              { text: 'arkadaş', type: 'root', gloss: 'друг' },
              { text: 'ım', type: 'person', gloss: 'мой' },
              { text: 'la', type: 'affix', gloss: 'с (ile)' },
            ],
          },
          {
            surface: 'görüştük',
            morphemes: [
              { text: 'gör', type: 'root', gloss: 'видеть' },
              { text: 'üş', type: 'affix', gloss: 'взаимный залог' },
              { text: 'tü', type: 'affix', gloss: 'прош. вр. (ş→t)' },
              { text: 'k', type: 'person', gloss: 'мы' },
            ],
          },
        ],
      },
      {
        id: 'rc-ex2',
        tr: 'İki kardeş akşamları telefonda sık sık mesajlaşıyor.',
        ru: 'Два брата по вечерам часто переписываются по телефону.',
        annotatedWords: [
          {
            surface: 'mesajlaşıyor',
            morphemes: [
              { text: 'mesaj', type: 'root', gloss: 'сообщение' },
              { text: 'laş', type: 'affix', gloss: 'глаг. + взаимн. (-la + -ş)' },
              { text: 'ıyor', type: 'affix', gloss: 'наст. длит.' },
            ],
          },
        ],
      },
      {
        id: 'rc-ex3',
        tr: 'Yağmur başlayınca meydandaki kuşlar bir anda uçuştu.',
        ru: 'Когда начался дождь, птицы на площади вмиг разлетелись.',
        annotatedWords: [
          {
            surface: 'uçuştu',
            morphemes: [
              { text: 'uç', type: 'root', gloss: 'лететь' },
              { text: 'uş', type: 'affix', gloss: 'совместность (вразнобой/вместе)' },
              { text: 'tu', type: 'affix', gloss: 'прош. вр.' },
            ],
          },
        ],
      },
      {
        id: 'rc-ex4',
        tr: 'Yeni komşularla dün apartmanın önünde tanıştık.',
        ru: 'Мы вчера познакомились с новыми соседями перед домом.',
        annotatedWords: [
          {
            surface: 'komşularla',
            morphemes: [
              { text: 'komşu', type: 'root', gloss: 'сосед' },
              { text: 'lar', type: 'affix', gloss: 'мн. ч.' },
              { text: 'la', type: 'affix', gloss: 'с (ile)' },
            ],
          },
          {
            surface: 'tanıştık',
            morphemes: [
              { text: 'tanı', type: 'root', gloss: 'знать' },
              { text: 'ş', type: 'affix', gloss: 'взаимн. (познакомиться)' },
              { text: 'tı', type: 'affix', gloss: 'прош. вр.' },
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
          title: 'Взаимный залог -(I⁴)ş vs İsim-fiil -(y)I⁴ş (имя действия)',
          explanation:
            'У глагола görüşmek (видеться) -üş- — залоговый аффикс перед временем и лицом. У имени действия bakış («взгляд») или yürüyüş («прогулка/походка») -(y)ış превращает глагол в существительное.',
          exampleTr: 'Yolda gülüştük (мы посмеялись вместе) vs Güzel bir gülüşü var (у неё красивая улыбка)',
          exampleRu: 'мы посмеялись vs красивая улыбка',
          relatedTopicId: 'verbal-nouns-mak-ma-is',
        },
        {
          title: 'Взаимный залог vs Возвратное/взаимное местоимение birbiri',
          explanation:
            'Не от каждого глагола образуется взаимный залог: вместо этого используется местоимение birbirini / birbirine («друг друга»). Например, «любить друг друга» — birbirini sevmek, а не *sevişmek (у sevişmek интимное значение).',
          exampleTr: 'Onlar birbirine yardım ediyor (они помогают друг другу) vs Onlar yazışıyor (они переписываются)',
          exampleRu: 'помогают друг другу vs переписываются',
          relatedTopicId: 'basic-postpositions',
        },
      ],
    },
    miniCheck: [
      {
        id: 'rc-q1',
        prompt: 'Как будет «Мы переписываемся каждую неделю» (yazmak → взаимный залог)? — Her hafta ___.',
        type: 'input',
        correctAnswer: 'yazışıyoruz',
        acceptedAnswers: ['yazışıyoruz'],
        explanation: 'yaz + ış (взаимный залог) + ıyor + uz → yazışıyoruz.',
      },
      {
        id: 'rc-q2',
        prompt: 'Какой глагол в этом списке выражает совместное действие группы (не друг на друга)?',
        type: 'choice',
        options: [
          'selamlaşmak (здороваться друг с другом)',
          'ağlaşmak (плакать вместе)',
          'öpüşmek (целоваться)',
          'mektuplaşmak (переписываться)',
        ],
        correctAnswer: 'ağlaşmak (плакать вместе)',
        explanation: 'Глаголы ağlaşmak, gülüşmek, uçuşmak обозначают совместное действие множества субъектов.',
      },
      {
        id: 'rc-q3',
        prompt: 'Заполните пропуск: «Мы с Али договорились встретиться в пять» (anlamak → взаимн. прош.) — Ali ile saat beşte buluşmak için ___.',
        type: 'input',
        correctAnswer: 'anlaştık',
        acceptedAnswers: ['anlaştık'],
        explanation: 'anla + ş + tı (оглушение ş→t) + k → anlaştık.',
      },
      {
        id: 'rc-q4',
        prompt: 'Как правильно сказать «Они хорошо понимают друг друга»?',
        type: 'choice',
        options: [
          'Birbirlerini iyi anlıyorlar.',
          'Birbirlerini iyi anlaşıyorlar.',
          'Kendiyle iyi anlıyorlar.',
          'Birbiri anlaşılıyorlar.',
        ],
        correctAnswer: 'Birbirlerini iyi anlıyorlar.',
        explanation: 'Взаимное местоимение birbirlerini уже передаёт значение «друг друга», поэтому ставится обычный глагол anlamak.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'verbal-nouns-mak-ma-is',
    sectionId: 'verbals',
    titleRu: 'Имена действия (-mak, -ma, -iş)',
    titleTr: 'İsim-Fiiller',
    level: 'A2',
    levels: ['A2', 'B1'],
    affixes: ['-mak', '-mek', '-ma', '-me', '-yış', '-yiş', '-yuş', '-yüş', '-ış', '-iş'],
    summary:
      'Имена действия (İsim-Fiiller) превращают глагол в существительное и отвечают на падежные вопросы («чтение, плавание, твой приезд»). Трёхступенчатая система: -mak/-mek выражает общее действие без лица и не принимает аффикс принадлежности; -ma/-me принимает принадлежность и выражает конкретный факт или побуждение (gelmeni istiyorum); -(y)ış/-(y)iş акцентирует образ или способ выполнения действия.',
    formula: [
      { text: 'Основа (+ -ma)', type: 'root', gloss: 'глагол (в отр. -mama / -mamak)' },
      { text: '+ -mak / -ma / -(y)ış', type: 'affix', gloss: 'имя действия' },
      { text: '+ (принадл. + падеж)', type: 'person', gloss: '-ma и -ış принимают принадлежность' },
    ],
    conjugationTable: {
      affirmative: {
        '-mak (инфинитив)': [
          { text: 'yüz', type: 'root', gloss: 'плавать' },
          { text: 'mek', type: 'affix', gloss: 'общее действие (плавание)' },
        ],
        '-mak + падеж (-dan / -a)': [
          { text: 'oku', type: 'root', gloss: 'читать' },
          { text: 'mak', type: 'affix', gloss: 'чтение' },
          { text: 'tan', type: 'affix', gloss: 'исходн. падеж (от чтения)' },
        ],
        '-ma (1 л. Benim)': [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'me', type: 'affix', gloss: 'имя действия' },
          { text: 'm', type: 'person', gloss: 'мой приход' },
        ],
        '-ma (2 л. Senin + вин.)': [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'me', type: 'affix', gloss: 'имя действия' },
          { text: 'n', type: 'person', gloss: 'твой' },
          { text: 'i', type: 'affix', gloss: 'вин. падеж (хочу, чтобы ты пришёл)' },
        ],
        '-ma (3 л. Onun)': [
          { text: 'git', type: 'root', gloss: 'уйти' },
          { text: 'me', type: 'affix', gloss: 'имя действия' },
          { text: 'si', type: 'person', gloss: 'его уход' },
        ],
        '-(y)ış (способ)': [
          { text: 'bak', type: 'root', gloss: 'смотреть' },
          { text: 'ış', type: 'affix', gloss: 'манера, взгляд' },
          { text: 'ı', type: 'person', gloss: 'его взгляд' },
        ],
      },
      negative: {
        '-mamak (не делать)': [
          { text: 'unut', type: 'root', gloss: 'забыть' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'mak', type: 'affix', gloss: 'не забывать' },
        ],
        '-mama (Benim)': [
          { text: 'git', type: 'root', gloss: 'уходить' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'me', type: 'affix', gloss: 'имя действия' },
          { text: 'm', type: 'person', gloss: 'то, что я не ухожу' },
        ],
        '-mama (Senin + вин.)': [
          { text: 'geç kal', type: 'root', gloss: 'опаздывать' },
          { text: 'ma', type: 'negation', gloss: 'не' },
          { text: 'ma', type: 'affix', gloss: 'имя действия' },
          { text: 'n', type: 'person', gloss: 'твой' },
          { text: 'ı', type: 'affix', gloss: 'чтобы ты не опоздал' },
        ],
        '-mayış (Onun)': [
          { text: 'gel', type: 'root', gloss: 'приходить' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'iş', type: 'affix', gloss: 'имя действия' },
          { text: 'i', type: 'person', gloss: 'его неприход' },
        ],
      },
      question: {
        '-mak + mi?': [
          { text: 'yüzmek', type: 'affix', gloss: 'плавать' },
          { text: ' hoşuna gidiyor mu?', type: 'question', gloss: 'тебе нравится плавать?' },
        ],
        '-ma + принадлежит': [
          { text: 'kalmamı', type: 'affix', gloss: 'чтобы я остался' },
          { text: ' istiyor musun?', type: 'question', gloss: 'хочешь, чтобы я остался?' },
        ],
        '-makta (в процессе)': [
          { text: 'çalışmakta', type: 'affix', gloss: 'в работе' },
          { text: ' zorlanıyor musun?', type: 'question', gloss: 'тебе трудно работать?' },
        ],
        '-(y)ış (способ)': [
          { text: 'gelişini', type: 'affix', gloss: 'его приезд' },
          { text: ' gördün mü?', type: 'question', gloss: 'ты видел, как он приехал?' },
        ],
      },
    },
    examples: [
      {
        id: 'vn-ex1',
        tr: 'Sabahları denizde yüzmek bana çok iyi geliyor.',
        ru: 'Плавать по утрам в море очень полезно для меня.',
        annotatedWords: [
          {
            surface: 'yüzmek',
            morphemes: [
              { text: 'yüz', type: 'root', gloss: 'плавать' },
              { text: 'mek', type: 'affix', gloss: 'имя действия (инфинитив)' },
            ],
          },
        ],
      },
      {
        id: 'vn-ex2',
        tr: 'Doktor hastanın günde üç litre su içmesini tavsiye etti.',
        ru: 'Врач посоветовал пациенту пить по три литра воды в день.',
        annotatedWords: [
          {
            surface: 'hastanın',
            morphemes: [
              { text: 'hasta', type: 'root', gloss: 'пациент' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'ın', type: 'affix', gloss: 'род. п. (субъект в изафете)' },
            ],
          },
          {
            surface: 'içmesini',
            morphemes: [
              { text: 'iç', type: 'root', gloss: 'пить' },
              { text: 'me', type: 'affix', gloss: 'имя действия' },
              { text: 's', type: 'buffer', gloss: 'буфер s' },
              { text: 'i', type: 'person', gloss: 'его (принадл.)' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'i', type: 'affix', gloss: 'вин. падеж' },
            ],
          },
        ],
      },
      {
        id: 'vn-ex3',
        tr: 'Yeni müdürün konuşma tarzı ve gülüşü herkesi etkiledi.',
        ru: 'Манера речи и улыбка нового директора впечатлили всех.',
        annotatedWords: [
          {
            surface: 'konuşma',
            morphemes: [
              { text: 'konuş', type: 'root', gloss: 'говорить' },
              { text: 'ma', type: 'affix', gloss: 'имя действия (речь)' },
            ],
          },
          {
            surface: 'gülüşü',
            morphemes: [
              { text: 'gül', type: 'root', gloss: 'улыбаться/смеяться' },
              { text: 'üş', type: 'affix', gloss: 'имя действия (манера)' },
              { text: 'ü', type: 'person', gloss: 'его' },
            ],
          },
        ],
      },
      {
        id: 'vn-ex4',
        tr: 'Toplantıya geç kalmamak için evden erken çıktık.',
        ru: 'Чтобы не опоздать на собрание, мы вышли из дома пораньше.',
        annotatedWords: [
          {
            surface: 'kalmamak',
            morphemes: [
              { text: 'kal', type: 'root', gloss: 'оставаться' },
              { text: 'ma', type: 'negation', gloss: 'не' },
              { text: 'mak', type: 'affix', gloss: 'инфинитив' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Имя действия -ma/-me vs Отрицание -ma/-me',
          explanation:
            'Они пишутся одинаково, но различаются местом в слове и ударением. В имени действия -má ударное и стоит в конце (или перед падежом/принадлежностью: okuma), а отрицание безударное и стоит перед другим аффиксом (okúma — «не читай», okumama — «нечтение»).',
          exampleTr: 'Buraya gelme! (Не приходи сюда!) vs Senin gelmen beni mutlu etti (Твой приход меня обрадовал)',
          exampleRu: 'Не приходи! vs твой приход',
          relatedTopicId: 'verb-stem-negation-question',
        },
        {
          title: 'Имя действия -ma (хочу, чтобы…) vs Причастие -dık (знаю, что…)',
          explanation:
            'Для передачи желаний, приказов и советов («хочу, чтобы ты пришёл») используется -ma + принадлежность. Для передачи фактов и сообщений («знаю, что ты пришёл») — причастие -dık / -(y)acak.',
          exampleTr: 'Gelmeni istiyorum (Хочу, чтобы ты пришёл) vs Geldiğini biliyorum (Знаю, что ты пришёл)',
          exampleRu: 'хочу, чтобы пришёл vs знаю, что пришёл',
          relatedTopicId: 'participles-an-dik',
        },
      ],
    },
    miniCheck: [
      {
        id: 'vn-q1',
        prompt: 'Вставьте правильную форму: «Я хочу, чтобы вы помогли мне» — Bana yardım ___ istiyorum.',
        type: 'input',
        correctAnswer: 'etmenizi',
        acceptedAnswers: ['etmenizi'],
        explanation: 'Для пожелания третьему лицу берём -me + принадлежность (siz → -niz) + винительный падеж (-i) → etmenizi.',
      },
      {
        id: 'vn-q2',
        prompt: 'Почему форма *yapmağım неверна для значения «моё делание»?',
        type: 'choice',
        options: [
          'Глагол yapmak не образует имён действия',
          'Аффикс -mak/-mek не принимает аффиксы принадлежности — нужно yapmam',
          'Буква k озвончается только в будущем времени',
          'Нужен аффикс -(y)ış в любом значении',
        ],
        correctAnswer: 'Аффикс -mak/-mek не принимает аффиксы принадлежности — нужно yapmam',
        explanation: 'Инфинитив на -mak/-mek никогда не соединяется с принадлежностью или родительным падежом; для этого используется -ma/-me.',
      },
      {
        id: 'vn-q3',
        prompt: 'Заполните пропуск: «Я боюсь опоздать» (geç kalmak, требует исходного падежа -dan) — Geç ___ korkuyorum.',
        type: 'input',
        correctAnswer: 'kalmaktan',
        acceptedAnswers: ['kalmaktan'],
        explanation: 'Общее действие с падежом от одного лица: kalmak + tan (оглушение d→t после k) → kalmaktan.',
      },
      {
        id: 'vn-q4',
        prompt: 'Какое слово означает «улыбка / манера смеяться» как существительное?',
        type: 'choice',
        options: [
          'gülmek',
          'gülüş',
          'gülen',
          'güldük',
        ],
        correctAnswer: 'gülüş',
        explanation: 'Аффикс -(y)ış/-(y)üş образует имя действия со значением манеры, способа или результата (gülüş — улыбка, bakış — взгляд).',
      },
    ],
    isDraft: false,
  },

  {
    id: 'converbs-gerunds',
    sectionId: 'verbals',
    titleRu: 'Деепричастия (-ıp, -arak, -madan, -ınca, -ken, -dığında, -dıktan sonra, -alı, -dıkça)',
    titleTr: 'Zarf-Fiiller (Ulaçlar)',
    level: 'B1',
    levels: ['B1', 'B2', 'C1'],
    affixes: [
      '-ıp',
      '-ip',
      '-up',
      '-üp',
      '-arak',
      '-erek',
      '-madan',
      '-meden',
      '-ınca',
      '-ince',
      '-ken',
      '-dığında',
      '-diğinde',
      '-dıktan sonra',
      '-alı',
      '-eli',
      '-dıkça',
      '-dikçe',
    ],
    summary:
      'Деепричастия (Zarf-Fiiller) связывают два действия в одном предложении без союзов, выражая последовательность (-ıp, -dıktan sonra), способ действия (-arak, -madan), момент времени (-ınca, -dığında, -(y)ken), точку отсчёта (-alı) и постепенность (-dıkça). Они не изменяются по лицам и числам (кроме форм на -dığında / -dıktan sonra с притяжанием при смене субъекта) и перенимают время и наклонение главного глагола.',
    formula: [
      { text: 'Основа', type: 'root', gloss: 'глагол' },
      { text: '+ -ıp / -arak / -ınca / -madan', type: 'affix', gloss: 'деепричастие от основы' },
      { text: 'Время + -(y)ken / -dık + (прин.) + -da', type: 'person', gloss: 'для -ken, -dığında, -dıkça' },
    ],
    conjugationTable: {
      affirmative: {
        '-ıp (последовательность)': [
          { text: 'al', type: 'root', gloss: 'взять' },
          { text: 'ıp', type: 'affix', gloss: 'взяв / взял и…' },
        ],
        '-arak (способ)': [
          { text: 'koş', type: 'root', gloss: 'бежать' },
          { text: 'arak', type: 'affix', gloss: 'бегом / бежа' },
        ],
        '-ınca (как только)': [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'ince', type: 'affix', gloss: 'как только пришёл' },
        ],
        '-(y)ken (во время)': [
          { text: 'gid', type: 'root', gloss: 'идти (git→gid)' },
          { text: 'er', type: 'affix', gloss: 'аорист' },
          { text: 'ken', type: 'affix', gloss: 'по пути, когда шёл' },
        ],
        '-dığında / -dıktan sonra': [
          { text: 'bit', type: 'root', gloss: 'закончиться' },
          { text: 'tiğ', type: 'affix', gloss: '-tik (k→ğ)' },
          { text: 'inde', type: 'person', gloss: 'когда закончилось (bitirdikten sonra)' },
        ],
        '-alı / -dıkça': [
          { text: 'çalış', type: 'root', gloss: 'учиться/работать' },
          { text: 'tıkça', type: 'affix', gloss: 'по мере того как (ср. -alı — с тех пор как)' },
        ],
      },
      negative: {
        '-madan (не делая / до)': [
          { text: 'bak', type: 'root', gloss: 'смотреть' },
          { text: 'madan', type: 'negation', gloss: 'не глядя / прежде чем' },
        ],
        '-mayıp (не сделав и…)': [
          { text: 'söyle', type: 'root', gloss: 'сказать' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'ip', type: 'affix', gloss: 'не сказав, а…' },
        ],
        '-mayınca (если/пока не)': [
          { text: 'gör', type: 'root', gloss: 'увидеть' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'y', type: 'buffer', gloss: 'буфер y' },
          { text: 'ince', type: 'affix', gloss: 'пока не увидел' },
        ],
        '-mazken / -mıyorken': [
          { text: 'bekle', type: 'root', gloss: 'ждать' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'z', type: 'affix', gloss: 'отр. аорист' },
          { text: 'ken', type: 'affix', gloss: 'когда не ждал' },
        ],
        '-madığında': [
          { text: 'gel', type: 'root', gloss: 'прийти' },
          { text: 'me', type: 'negation', gloss: 'не' },
          { text: 'diğ', type: 'affix', gloss: '-dik (k→ğ)' },
          { text: 'inde', type: 'person', gloss: 'когда он не приходит' },
        ],
      },
      question: {
        '-ıp (вопрос к сказ.)': [
          { text: 'Eve gidip', type: 'affix', gloss: 'придя домой' },
          { text: ' uyudun mu?', type: 'question', gloss: 'ты пошёл домой и уснул?' },
        ],
        '-arak (способ)': [
          { text: 'Yürüyerek', type: 'affix', gloss: 'пешком' },
          { text: ' mi geldin?', type: 'question', gloss: 'ты пришёл пешком?' },
        ],
        '-madan (без/до)': [
          { text: 'Kahvaltı yapmadan', type: 'negation', gloss: 'не позавтракав' },
          { text: ' mı çıktın?', type: 'question', gloss: 'ты вышел не позавтракав?' },
        ],
        '-alı (сколько времени)': [
          { text: 'Buraya geleli', type: 'affix', gloss: 'с тех пор как приехал' },
          { text: ' kaç yıl oldu?', type: 'question', gloss: 'сколько лет прошло?' },
        ],
      },
    },
    examples: [
      {
        id: 'cg-ex1',
        tr: 'Markete uğrayıp ekmek aldıktan sonra eve döndüm.',
        ru: 'Заглянув в магазин и купив хлеб, я вернулся домой.',
        annotatedWords: [
          {
            surface: 'uğrayıp',
            morphemes: [
              { text: 'uğra', type: 'root', gloss: 'заглянуть' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'ıp', type: 'affix', gloss: 'заглянув (и…)' },
            ],
          },
          {
            surface: 'aldıktan',
            morphemes: [
              { text: 'al', type: 'root', gloss: 'купить/взять' },
              { text: 'dık', type: 'affix', gloss: 'причастие' },
              { text: 'tan', type: 'affix', gloss: 'исх. п. (перед sonra)' },
            ],
          },
        ],
      },
      {
        id: 'cg-ex2',
        tr: 'Dün akşam eve yürüyerek giderken eski bir arkadaşımla karşılaştım.',
        ru: 'Вчера вечером, когда я шёл домой пешком, я встретил старого друга.',
        annotatedWords: [
          {
            surface: 'yürüyerek',
            morphemes: [
              { text: 'yürü', type: 'root', gloss: 'идти' },
              { text: 'y', type: 'buffer', gloss: 'буфер y' },
              { text: 'erek', type: 'affix', gloss: 'дееприч. образа действия (пешком)' },
            ],
          },
          {
            surface: 'giderken',
            morphemes: [
              { text: 'gid', type: 'root', gloss: 'идти (git→gid)' },
              { text: 'er', type: 'affix', gloss: 'аорист' },
              { text: 'ken', type: 'affix', gloss: 'в то время как' },
            ],
          },
        ],
      },
      {
        id: 'cg-ex3',
        tr: 'İyice düşünmeden karar verme, yoksa pişman olursun.',
        ru: 'Не принимай решения, хорошенько не подумав, иначе пожалеешь.',
        annotatedWords: [
          {
            surface: 'düşünmeden',
            morphemes: [
              { text: 'düşün', type: 'root', gloss: 'думать' },
              { text: 'meden', type: 'negation', gloss: 'не подумав / до того как' },
            ],
          },
        ],
      },
      {
        id: 'cg-ex4',
        tr: 'Türkçe pratik yaptıkça kendini çok daha rahat ifade edersin.',
        ru: 'По мере того как ты будешь практиковать турецкий, ты станешь выражаться гораздо свободнее.',
        annotatedWords: [
          {
            surface: 'yaptıkça',
            morphemes: [
              { text: 'yap', type: 'root', gloss: 'делать' },
              { text: 'tıkça', type: 'affix', gloss: 'по мере того как (d→t)' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Деепричастие -ıp (цепочка) vs -arak (способ)',
          explanation:
            'Форма на -ıp описывает два последовательных действия («взял и пошёл»), а форма на -arak показывает, КАК или КАКИМ СПОСОБОМ совершается основное действие («пришёл, напевая / пешком»).',
          exampleTr: 'Kapıyı açıp içeri girdi (открыл дверь и вошёл) vs Gülümseyerek içeri girdi (вошёл с улыбкой)',
          exampleRu: 'открыл и вошёл vs вошёл улыбаясь',
          relatedTopicId: 'participles-an-dik',
        },
        {
          title: 'Отрицательное деепричастие -madan («не делая») vs -madan önce («до того как»)',
          explanation:
            'Само по себе -madan значит «без того чтобы / не сделав» (при одном субъекте). Добавление послелога önce даёт временное значение «прежде чем», а сам -madan может стоять и при разных субъектах (Güneş doğmadan — до рассвета).',
          exampleTr: 'Kahve içmeden uyuyamam (не могу уснуть, не выпив кофе) vs Çıkmadan önce ışığı kapat (выключи свет перед выходом)',
          exampleRu: 'не выпив кофе vs перед тем как выйти',
          relatedTopicId: 'basic-postpositions',
        },
      ],
    },
    miniCheck: [
      {
        id: 'cg-q1',
        prompt: 'Заполните пропуск: «Когда мы вышли из дома, пошёл дождь» (çıkmak, -ınca) — Evden ___ yağmur başladı.',
        type: 'input',
        correctAnswer: 'çıkınca',
        acceptedAnswers: ['çıkınca'],
        explanation: 'çık + ınca → çıkınca («как только вышли»). Форма на -ınca не меняется по лицам.',
      },
      {
        id: 'cg-q2',
        prompt: 'Какое деепричастие НЕ ставится прямо на чистую основу глагола, а требует основы времени (чаще аориста -r/-ar/-ır) или именной основы?',
        type: 'choice',
        options: [
          '-ıp / -ip',
          '-arak / -erek',
          '-(y)ken',
          '-madan / -meden',
        ],
        correctAnswer: '-(y)ken',
        explanation: 'Аффикс -(y)ken всегда крепится к основе времени (giderken, okurken, uyuyorken) или к имени (çocukken, evdeyken).',
      },
      {
        id: 'cg-q3',
        prompt: 'Переведите «С тех пор как я приехал в Стамбул, прошёл год» (gelmek, -alı) — İstanbul’a ___ bir yıl oldu.',
        type: 'input',
        correctAnswer: 'geleli',
        acceptedAnswers: ['geleli'],
        explanation: 'Аффикс -(y)alı/-(y)eli означает «с тех пор как»: gel + eli → geleli.',
      },
      {
        id: 'cg-q4',
        prompt: 'Что означает фраза «Sana sormadan hiçbir şey yapmam»?',
        type: 'choice',
        options: [
          'После того как спрошу тебя, сделаю всё.',
          'Не спросив тебя, я ничего не сделаю.',
          'По мере того как спрашиваю тебя, ничего не делаю.',
          'Когда я тебя спрашиваю, я ничего не делаю.',
        ],
        correctAnswer: 'Не спросив тебя, я ничего не сделаю.',
        explanation: 'Деепричастие -madan/-meden переводится как «не сделав чего-либо» (без спроса).',
      },
    ],
    isDraft: false,
  },

  {
    id: 'basic-postpositions',
    sectionId: 'postpositions-particles',
    titleRu: 'Базовые послелоги (ile, için, gibi, kadar, göre, rağmen)',
    titleTr: 'Temel Edatlar',
    level: 'A2',
    levels: ['A2', 'B1', 'B2'],
    affixes: [
      'ile',
      '-(y)la',
      '-(y)le',
      'için',
      'gibi',
      'kadar',
      '-a göre',
      '-a rağmen',
      '-dan beri',
      '-dan önce',
      '-dan sonra',
    ],
    summary:
      'Турецкие послелоги выполняют роль русских предлогов, но стоят ПОСЛЕ слова и управляют строгим падежом. Основная группа (ile, için, gibi, kadar) требует основного падежа у существительных, но родительного у личных местоимений (benim için, seninle). Другие послелоги требуют дательного (-a göre, -a rağmen, -a doğru, -a kadar) или исходного падежа (-dan beri, -dan önce, -dan sonra).',
    formula: [
      { text: 'Сущ. / Местоимение', type: 'root', gloss: 'зависимое слово' },
      { text: '+ (-(n)ın / -a / -dan)', type: 'affix', gloss: 'падеж, требуемый послелогом' },
      { text: '+ Послелог', type: 'affix', gloss: 'ile / için / gibi / göre / beri' },
    ],
    conjugationTable: {
      affirmative: {
        'ile / -(y)la (с, на чём)': [
          { text: 'otobüs', type: 'root', gloss: 'автобус' },
          { text: 'le', type: 'affix', gloss: 'на автобусе (ile)' },
        ],
        'için (для, ради)': [
          { text: 'sen', type: 'root', gloss: 'ты' },
          { text: 'in', type: 'person', gloss: 'род. п. (у местоимений!)' },
          { text: ' için', type: 'affix', gloss: 'для тебя' },
        ],
        'gibi / kadar (как / до)': [
          { text: 'kar', type: 'root', gloss: 'снег' },
          { text: ' gibi', type: 'affix', gloss: 'белый как снег (kadar — сколько)' },
        ],
        '-a göre (по мнению / по)': [
          { text: 'ban', type: 'root', gloss: 'ben (дательный)' },
          { text: 'a', type: 'affix', gloss: 'дат. падеж' },
          { text: ' göre', type: 'affix', gloss: 'по-моему' },
        ],
        '-a rağmen (несмотря на)': [
          { text: 'yağmur', type: 'root', gloss: 'дождь' },
          { text: 'a', type: 'affix', gloss: 'дат. падеж' },
          { text: ' rağmen', type: 'affix', gloss: 'несмотря на дождь' },
        ],
        '-dan beri / önce / sonra': [
          { text: 'sabah', type: 'root', gloss: 'утро' },
          { text: 'tan', type: 'affix', gloss: 'исх. п. (d→t)' },
          { text: ' beri', type: 'affix', gloss: 'с самого утра' },
        ],
      },
      negative: {
        'Местоимение без -ın (ОШИБКА)': [
          { text: 'sen', type: 'root', gloss: 'ты (неверно: *sen için)' },
          { text: 'in', type: 'person', gloss: 'обязателен -in у ben/sen/o/biz!' },
          { text: ' gibi', type: 'affix', gloss: 'как ты (senin gibi)' },
        ],
        'onlar + için / ile': [
          { text: 'onlar', type: 'root', gloss: 'они (исключение!)' },
          { text: ' için', type: 'affix', gloss: 'без -ın (но: onlar + la)' },
        ],
        'Неопр. время + önce/sonra': [
          { text: 'iki gün', type: 'root', gloss: 'два дня (без -dan)' },
          { text: ' önce', type: 'affix', gloss: 'два дня назад (не *-den önce!)' },
        ],
        '-meksizin / -madan (без)': [
          { text: 'dur', type: 'root', gloss: 'останавливаться' },
          { text: 'madan', type: 'negation', gloss: 'без остановки' },
        ],
      },
      question: {
        'kim + için / ile': [
          { text: 'kimin', type: 'question', gloss: 'кого / для кого' },
          { text: ' için?', type: 'affix', gloss: 'для кого? (kiminle — с кем?)' },
        ],
        'ne + kadar / zaman': [
          { text: 'ne', type: 'question', gloss: 'что' },
          { text: ' kadar?', type: 'affix', gloss: 'сколько? / как долго?' },
        ],
        'ne + zamandan beri': [
          { text: 'ne zamandan', type: 'question', gloss: 'с какого времени' },
          { text: ' beri?', type: 'affix', gloss: 'с каких пор?' },
        ],
        'kime + göre': [
          { text: 'kim', type: 'question', gloss: 'кто' },
          { text: 'e', type: 'affix', gloss: 'дат. падеж' },
          { text: ' göre?', type: 'affix', gloss: 'по чьему мнению?' },
        ],
      },
    },
    examples: [
      {
        id: 'bp-ex1',
        tr: 'Bana göre bu film senin için biraz sıkıcı olabilir.',
        ru: 'По-моему, этот фильм может показаться тебе немного скучным.',
        annotatedWords: [
          {
            surface: 'Bana',
            morphemes: [
              { text: 'ban', type: 'root', gloss: 'я (ben→ban)' },
              { text: 'a', type: 'affix', gloss: 'дат. падеж' },
            ],
          },
          {
            surface: 'göre',
            morphemes: [
              { text: 'göre', type: 'affix', gloss: 'по (управляет -a)' },
            ],
          },
          {
            surface: 'senin',
            morphemes: [
              { text: 'sen', type: 'root', gloss: 'ты' },
              { text: 'in', type: 'person', gloss: 'род. п. перед için' },
            ],
          },
          {
            surface: 'için',
            morphemes: [
              { text: 'için', type: 'affix', gloss: 'для' },
            ],
          },
        ],
      },
      {
        id: 'bp-ex2',
        tr: 'Yoğun trafiğe rağmen toplantıya tam vaktinde yetiştik.',
        ru: 'Несмотря на плотное движение, мы успели на встречу точно вовремя.',
        annotatedWords: [
          {
            surface: 'trafiğe',
            morphemes: [
              { text: 'trafiğ', type: 'root', gloss: 'трафик (k→ğ)' },
              { text: 'e', type: 'affix', gloss: 'дат. п. для rağmen' },
            ],
          },
          {
            surface: 'rağmen',
            morphemes: [
              { text: 'rağmen', type: 'affix', gloss: 'несмотря на' },
            ],
          },
        ],
      },
      {
        id: 'bp-ex3',
        tr: 'Üç yıldan beri aynı şirkette kardeşimle birlikte çalışıyorum.',
        ru: 'Вот уже три года я работаю в одной компании вместе с братом.',
        annotatedWords: [
          {
            surface: 'yıldan',
            morphemes: [
              { text: 'yıl', type: 'root', gloss: 'год' },
              { text: 'dan', type: 'affix', gloss: 'исх. п. для beri' },
            ],
          },
          {
            surface: 'beri',
            morphemes: [
              { text: 'beri', type: 'affix', gloss: 'с (каких пор)' },
            ],
          },
          {
            surface: 'kardeşimle',
            morphemes: [
              { text: 'kardeş', type: 'root', gloss: 'брат/сестра' },
              { text: 'im', type: 'person', gloss: 'мой' },
              { text: 'le', type: 'affix', gloss: 'с (слитное ile)' },
            ],
          },
        ],
      },
      {
        id: 'bp-ex4',
        tr: 'Akşama kadar bu raporu buz gibi bir kahve eşliğinde bitireceğim.',
        ru: 'До вечера я закончу этот отчёт за ледяным (как лёд) кофе.',
        annotatedWords: [
          {
            surface: 'Akşama',
            morphemes: [
              { text: 'akşam', type: 'root', gloss: 'вечер' },
              { text: 'a', type: 'affix', gloss: 'дат. п. (время до…)' },
            ],
          },
          {
            surface: 'kadar',
            morphemes: [
              { text: 'kadar', type: 'affix', gloss: 'до (включительно)' },
            ],
          },
          {
            surface: 'gibi',
            morphemes: [
              { text: 'gibi', type: 'affix', gloss: 'как, подобно' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'kadar (основной падеж — сравнение «столько же, как») vs -a kadar (дательный — предел «до»)',
          explanation:
            'Без падежа kadar выражает меру или сравнение («размером с дом, как ты»). С дательным падежом (-a/-e kadar) указывает на пространственную или временную границу («до вокзала, до понедельника»).',
          exampleTr: 'Senin kadar çalışkan (трудолюбивый, как ты) vs Akşama kadar çalıştım (работал до вечера)',
          exampleRu: 'как ты vs до вечера',
          relatedTopicId: 'six-cases',
        },
        {
          title: 'ile / -(y)la как союз «и» vs как послелог «с / посредством»',
          explanation:
            'Между двумя существительными ile/-(y)la может означать «и» (Ali ile Ayşe — Али и Айше). При глаголе оно означает «с кем-то» или «при помощи чего-то» (kalemle yazmak).',
          exampleTr: 'Çay ile simit aldık (купили чай и симит) vs Trenle Ankara’ya gittik (поехали в Анкару на поезде)',
          exampleRu: 'чай и симит vs на поезде',
          relatedTopicId: 'conjunctions',
        },
      ],
    },
    miniCheck: [
      {
        id: 'bp-q1',
        prompt: 'Как правильно сказать «По моему мнению»? — ___ göre.',
        type: 'input',
        correctAnswer: 'Bana',
        acceptedAnswers: ['Bana', 'bana'],
        explanation: 'Послелог göre требует дательного падежа; у местоимения ben дательный падеж — bana.',
      },
      {
        id: 'bp-q2',
        prompt: 'Выберите правильный вариант для фразы «Этот подарок для тебя»:',
        type: 'choice',
        options: [
          'Bu hediye sen için.',
          'Bu hediye senin için.',
          'Bu hediye sana için.',
          'Bu hediye senden için.',
        ],
        correctAnswer: 'Bu hediye senin için.',
        explanation: 'Единственные числа местоимений (ben, sen, o, biz, siz) перед için, gibi, ile, kadar стоят в родительном падеже.',
      },
      {
        id: 'bp-q3',
        prompt: 'Заполните пропуск: «Я жду автобус с утра» — Sabah___ beri otobüs bekliyorum.',
        type: 'input',
        correctAnswer: 'sabahtan',
        acceptedAnswers: ['sabahtan', 'tan'],
        explanation: 'Послелог beri требует исходного падежа (-dan/-tan); после глухой h идёт -tan → sabahtan.',
      },
      {
        id: 'bp-q4',
        prompt: 'Какой падеж нужен перед послелогом rağmen («несмотря на»)?',
        type: 'choice',
        options: [
          'Винительный (-ı/-i)',
          'Местный (-da/-de)',
          'Дательный (-a/-e)',
          'Исходный (-dan/-den)',
        ],
        correctAnswer: 'Дательный (-a/-e)',
        explanation: 'Послелог rağmen всегда управляет дательным падежом: soğuğa rağmen, her şeye rağmen.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'spatial-nouns',
    sectionId: 'postpositions-particles',
    titleRu: 'Служебные имена (üstünde, içinde, yanında, altında)',
    titleTr: 'Yer Yön İsimleri',
    level: 'A1',
    levels: ['A1', 'A2'],
    affixes: [
      'üstünde',
      'altında',
      'içinde',
      'dışında',
      'yanında',
      'önünde',
      'arkasında',
      'arasında',
      'karşısında',
    ],
    summary:
      'В турецком языке нет предлогов «на, под, внутри, рядом, перед, за». Вместо них используются служебные существительные (üst — верх, alt — низ, iç — нутро, yan — бок, ön — перед, arka — зад), которые связываются с главным предметом через изафет (-(n)ın + -(s)ı) и обязательно получают буфер -n- перед пространственным падежом (-da/-a/-dan).',
    formula: [
      { text: 'Предмет (+ -(n)ın)', type: 'affix', gloss: 'опционально род. п. (опр. изафет)' },
      { text: 'üst / alt / iç / yan', type: 'root', gloss: 'служебное имя' },
      { text: '+ -(s)ı', type: 'person', gloss: 'принадлежность 3-го лица' },
      { text: '+ -n- + -da / -a / -dan', type: 'affix', gloss: 'буфер n + где / куда / откуда' },
    ],
    conjugationTable: {
      affirmative: {
        'üstünde (наверху / на)': [
          { text: 'masanın ', type: 'affix', gloss: 'стола (род. п.)' },
          { text: 'üst', type: 'root', gloss: 'верх' },
          { text: 'ü', type: 'person', gloss: 'его верх' },
          { text: 'n', type: 'buffer', gloss: 'буфер n!' },
          { text: 'de', type: 'affix', gloss: 'на столе (где?)' },
        ],
        'altında (внизу / под)': [
          { text: 'sandalyenin ', type: 'affix', gloss: 'стула' },
          { text: 'alt', type: 'root', gloss: 'низ' },
          { text: 'ı', type: 'person', gloss: 'его низ' },
          { text: 'n', type: 'buffer', gloss: 'буфер n' },
          { text: 'da', type: 'affix', gloss: 'под стулом (где?)' },
        ],
        'içine (внутрь / в)': [
          { text: 'çantanın ', type: 'affix', gloss: 'сумки' },
          { text: 'iç', type: 'root', gloss: 'нутро' },
          { text: 'i', type: 'person', gloss: 'его нутро' },
          { text: 'n', type: 'buffer', gloss: 'буфер n' },
          { text: 'e', type: 'affix', gloss: 'в сумку (куда?)' },
        ],
        'yanından (от / мимо)': [
          { text: 'evin ', type: 'affix', gloss: 'дома' },
          { text: 'yan', type: 'root', gloss: 'бок, сторона' },
          { text: 'ı', type: 'person', gloss: 'его сторона' },
          { text: 'n', type: 'buffer', gloss: 'буфер n' },
          { text: 'dan', type: 'affix', gloss: 'от дома / мимо (откуда?)' },
        ],
        '1–2 лицо (рядом со мной)': [
          { text: 'benim ', type: 'affix', gloss: 'мой' },
          { text: 'yan', type: 'root', gloss: 'бок' },
          { text: 'ım', type: 'person', gloss: 'моя сторона' },
          { text: 'da', type: 'affix', gloss: 'рядом со мной (без буфера n!)' },
        ],
        'arasında (между)': [
          { text: 'iki bina ', type: 'affix', gloss: 'два здания' },
          { text: 'ara', type: 'root', gloss: 'промежуток' },
          { text: 'sı', type: 'person', gloss: 'их промежуток' },
          { text: 'n', type: 'buffer', gloss: 'буфер n' },
          { text: 'da', type: 'affix', gloss: 'между двумя зданиями' },
        ],
      },
      negative: {
        'var / yok (нет на столе)': [
          { text: 'üstünde ', type: 'affix', gloss: 'на нём' },
          { text: 'yok', type: 'negation', gloss: 'нет, отсутствует' },
        ],
        'dışında (вне / кроме)': [
          { text: 'şehrin ', type: 'affix', gloss: 'города' },
          { text: 'dış', type: 'root', gloss: 'внешняя сторона' },
          { text: 'ı', type: 'person', gloss: 'его' },
          { text: 'n', type: 'buffer', gloss: 'буфер n' },
          { text: 'da', type: 'affix', gloss: 'за городом / кроме' },
        ],
        'değil (не перед…)': [
          { text: 'önünde ', type: 'affix', gloss: 'перед ним' },
          { text: 'değil', type: 'negation', gloss: 'не (впереди)' },
        ],
        'Пропуск буфера n (ОШИБКА)': [
          { text: 'üst', type: 'root', gloss: 'верх' },
          { text: 'ü', type: 'person', gloss: 'его' },
          { text: 'n', type: 'buffer', gloss: 'не *üstüde, а üstünde!' },
          { text: 'de', type: 'affix', gloss: 'обязательный буфер' },
        ],
      },
      question: {
        'Где? (neresinde / üstünde mi?)': [
          { text: 'masanın üstünde', type: 'affix', gloss: 'на столе' },
          { text: ' mi?', type: 'question', gloss: 'на столе ли?' },
        ],
        'Куда? (içine mi?)': [
          { text: 'dolabın içine', type: 'affix', gloss: 'в шкаф' },
          { text: ' mi koydun?', type: 'question', gloss: 'ты положил в шкаф?' },
        ],
        'Рядом с кем?': [
          { text: 'kimin yanında', type: 'question', gloss: 'рядом с кем' },
          { text: ' oturuyorsun?', type: 'affix', gloss: 'ты сидишь?' },
        ],
        'Напротив?': [
          { text: 'parkın karşısında', type: 'affix', gloss: 'напротив парка' },
          { text: ' mı?', type: 'question', gloss: 'напротив парка?' },
        ],
      },
    },
    examples: [
      {
        id: 'sn-ex1',
        tr: 'Anahtarlar yemek masasının üstünde, bardağın yanında duruyor.',
        ru: 'Ключи лежат на обеденном столе, рядом со стаканом.',
        annotatedWords: [
          {
            surface: 'üstünde',
            morphemes: [
              { text: 'üst', type: 'root', gloss: 'верх' },
              { text: 'ü', type: 'person', gloss: 'его' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'de', type: 'affix', gloss: 'местн. п. (на)' },
            ],
          },
          {
            surface: 'yanında',
            morphemes: [
              { text: 'yan', type: 'root', gloss: 'бок' },
              { text: 'ı', type: 'person', gloss: 'его' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'da', type: 'affix', gloss: 'местн. п. (рядом)' },
            ],
          },
        ],
      },
      {
        id: 'sn-ex2',
        tr: 'Kedi yağmurdan kaçıp park etmiş arabanın altına girdi.',
        ru: 'Кот убежал от дождя и залез под припаркованную машину.',
        annotatedWords: [
          {
            surface: 'arabanın',
            morphemes: [
              { text: 'araba', type: 'root', gloss: 'машина' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'ın', type: 'affix', gloss: 'род. п. (изафет)' },
            ],
          },
          {
            surface: 'altına',
            morphemes: [
              { text: 'alt', type: 'root', gloss: 'низ' },
              { text: 'ı', type: 'person', gloss: 'её' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'a', type: 'affix', gloss: 'дат. п. (под — куда?)' },
            ],
          },
        ],
      },
      {
        id: 'sn-ex3',
        tr: 'Eczane bankanın tam karşısında, okulun ise biraz arkasında.',
        ru: 'Аптека прямо напротив банка, а школа — чуть позади него.',
        annotatedWords: [
          {
            surface: 'karşısında',
            morphemes: [
              { text: 'karşı', type: 'root', gloss: 'противоположная сторона' },
              { text: 's', type: 'buffer', gloss: 'буфер s' },
              { text: 'ı', type: 'person', gloss: 'его' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'da', type: 'affix', gloss: 'местн. п. (напротив)' },
            ],
          },
          {
            surface: 'arkasında',
            morphemes: [
              { text: 'arka', type: 'root', gloss: 'задняя часть' },
              { text: 's', type: 'buffer', gloss: 'буфер s' },
              { text: 'ı', type: 'person', gloss: 'его' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'da', type: 'affix', gloss: 'местн. п. (позади)' },
            ],
          },
        ],
      },
      {
        id: 'sn-ex4',
        tr: 'Kutunun içinden eski fotoğraflar ve bir mektup çıktı.',
        ru: 'Из коробки (изнутри коробки) достали старые фотографии и письмо.',
        annotatedWords: [
          {
            surface: 'içinden',
            morphemes: [
              { text: 'iç', type: 'root', gloss: 'нутро' },
              { text: 'i', type: 'person', gloss: 'его' },
              { text: 'n', type: 'buffer', gloss: 'буфер n' },
              { text: 'den', type: 'affix', gloss: 'исх. п. (изнутри)' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'masada («за столом / в столе») vs masanın üstünde («на поверхности стола»)',
          explanation:
            'Обычный местный падеж (-da) часто обозначает нахождение «за столом» (masada oturuyorum) или в пространстве вообще. Чтобы точно сказать «на поверхности чего-то», используйте üstünde.',
          exampleTr: 'Masada çalışıyorum (я работаю за столом) vs Kitap masanın üstünde (книга лежит на столе)',
          exampleRu: 'за столом vs на столе',
          relatedTopicId: 'six-cases',
        },
        {
          title: 'Трёхкомпонентный изафет + буфер n (masanın üstü-n-de) vs Простое слово',
          explanation:
            'Служебное имя всегда является главным словом изафета, поэтому перед падежами -da/-a/-dan после принадлежности 3-го лица -(s)ı обязательно встаёт буферная согласная -n-.',
          exampleTr: 'Evin önü + n + de → Evin önünde (перед домом), но Benim yanımda (рядом со мной, 1 л.)',
          exampleRu: 'перед домом vs рядом со мной',
          relatedTopicId: 'izafet',
        },
      ],
    },
    miniCheck: [
      {
        id: 'sn-q1',
        prompt: 'Как будет «внутри сумки (где?)» (çanta + iç)? — Çantanın ___.',
        type: 'input',
        correctAnswer: 'içinde',
        acceptedAnswers: ['içinde'],
        explanation: 'iç + i (принадл.) + n (буфер) + de (местный падеж) → içinde.',
      },
      {
        id: 'sn-q2',
        prompt: 'Какую форму нужно поставить в предложение «Положи книгу под кровать» (yatak + alt)?',
        type: 'choice',
        options: [
          'yatağın altında',
          'yatağın altına',
          'yatağın altından',
          'yatağa altı',
        ],
        correctAnswer: 'yatağın altına',
        explanation: 'Глагол koymak («положить куда?») требует дательного падежа: alt + ı + n + a → altına.',
      },
      {
        id: 'sn-q3',
        prompt: 'Заполните пропуск: «Автобусная остановка прямо напротив школы» (karşı) — Otobüs durağı okulun tam ___.',
        type: 'input',
        correctAnswer: 'karşısında',
        acceptedAnswers: ['karşısında'],
        explanation: 'karşı + s (буфер после гласной) + ı + n (буфер перед падежом) + da → karşısında.',
      },
      {
        id: 'sn-q4',
        prompt: 'Как правильно сказать «сядь рядом со мной»?',
        type: 'choice',
        options: [
          'Benim yanına otur.',
          'Benim yanıma otur.',
          'Bana yanında otur.',
          'Benim yanımına otur.',
        ],
        correctAnswer: 'Benim yanıma otur.',
        explanation: 'Для 1-го лица (benim) используется притяжательный аффикс -ım и дательный падеж -a без буфера n → yanıma.',
      },
    ],
    isDraft: false,
  },

  {
    id: 'conjunctions',
    sectionId: 'postpositions-particles',
    titleRu: 'Сочинительные и подчинительные союзы',
    titleTr: 'Bağlaçlar',
    level: 'A2',
    levels: ['A2', 'B1', 'B2'],
    affixes: ['ve', 'ama', 'fakat', 'ancak', 'çünkü', 'oysa', 'hem...hem', 'ne...ne', 'ya...ya', 'hatta'],
    summary:
      'Союзы соединяют однородные члены и целые предложения, задавая логическую связь: соединение (ve, ayrıca, hatta), противопоставление (ama, fakat, ancak, oysa), причину (çünkü) и двойной выбор (hem… hem… «и… и…», ya… ya… «или… или…», ne… ne… «ни… ни…»). Важная особенность союза ne… ne… — глагол после него обычно стоит в утвердительной форме.',
    formula: [
      { text: 'Часть / Слово 1', type: 'root', gloss: 'первый элемент' },
      { text: '+ ve / ama / çünkü / oysa', type: 'affix', gloss: 'союз между частями' },
      { text: '(hem… hem / ne… ne)', type: 'buffer', gloss: 'парный союз перед обоими элементами' },
      { text: 'Часть / Слово 2', type: 'root', gloss: 'второй элемент' },
    ],
    conjugationTable: {
      affirmative: {
        've / hatta (и / даже)': [
          { text: 'Türkçe', type: 'root', gloss: 'турецкий' },
          { text: ' ve ', type: 'affix', gloss: 'и' },
          { text: 'İngilizce', type: 'root', gloss: 'английский (hatta — и даже)' },
        ],
        'ama / fakat / ancak (но)': [
          { text: 'istiyorum ', type: 'root', gloss: 'хочу' },
          { text: 'ama ', type: 'affix', gloss: 'но (fakat — но, ancak — однако)' },
          { text: 'vaktim yok', type: 'negation', gloss: 'времени нет' },
        ],
        'çünkü (потому что)': [
          { text: 'gelmedim ', type: 'negation', gloss: 'не пришёл' },
          { text: 'çünkü ', type: 'affix', gloss: 'потому что' },
          { text: 'hastaydım', type: 'root', gloss: 'я болел' },
        ],
        'oysa (тогда как / а ведь)': [
          { text: 'çok çalıştı ', type: 'root', gloss: 'много работал' },
          { text: 'oysa ', type: 'affix', gloss: 'однако же, а ведь' },
          { text: 'dinlenmeliydi', type: 'affix', gloss: 'ему следовало отдохнуть' },
        ],
        'hem… hem… (и… и…)': [
          { text: 'hem ', type: 'affix', gloss: 'и (как)' },
          { text: 'ucuz ', type: 'root', gloss: 'дёшево' },
          { text: 'hem ', type: 'affix', gloss: 'и (так и)' },
          { text: 'lezzetli', type: 'root', gloss: 'вкусно' },
        ],
        'ya… ya… (или… или…)': [
          { text: 'ya ', type: 'affix', gloss: 'или' },
          { text: 'bugün ', type: 'root', gloss: 'сегодня' },
          { text: 'ya ', type: 'affix', gloss: 'или' },
          { text: 'yarın', type: 'root', gloss: 'завтра' },
        ],
      },
      negative: {
        'ne… ne… + утверд. глагол': [
          { text: 'ne ', type: 'negation', gloss: 'ни' },
          { text: 'çay ', type: 'root', gloss: 'чай' },
          { text: 'ne ', type: 'negation', gloss: 'ни' },
          { text: 'kahve ', type: 'root', gloss: 'кофе' },
          { text: 'içti', type: 'affix', gloss: 'пил (= не пил ни того, ни другого)' },
        ],
        'ancak (только / но)': [
          { text: 'gelirim ', type: 'root', gloss: 'приду' },
          { text: 'ancak ', type: 'affix', gloss: 'но только / однако' },
          { text: 'geç kalmam', type: 'negation', gloss: 'опаздывать не буду' },
        ],
        'yoksa (иначе / а то)': [
          { text: 'acele et ', type: 'root', gloss: 'поторопись' },
          { text: 'yoksa ', type: 'negation', gloss: 'иначе' },
          { text: 'yetişemezsin', type: 'negation', gloss: 'не успеешь' },
        ],
      },
      question: {
        'ya… ya… (выбор)': [
          { text: 'ya ', type: 'affix', gloss: 'или' },
          { text: 'tren ', type: 'root', gloss: 'поезд' },
          { text: 'ya ', type: 'affix', gloss: 'или' },
          { text: 'uçak mı?', type: 'question', gloss: 'самолёт?' },
        ],
        'ama + вопрос': [
          { text: 'güzel ', type: 'root', gloss: 'красивый' },
          { text: 'ama ', type: 'affix', gloss: 'но' },
          { text: 'pahalı değil mi?', type: 'question', gloss: 'разве не дорогой?' },
        ],
        'yoksa (или же?)': [
          { text: 'gidecek misin ', type: 'question', gloss: 'ты пойдёшь' },
          { text: 'yoksa ', type: 'affix', gloss: 'или же' },
          { text: 'kalacak mısın?', type: 'question', gloss: 'останешься?' },
        ],
        'hem… hem…': [
          { text: 'hem ', type: 'affix', gloss: 'и' },
          { text: 'okuyor ', type: 'root', gloss: 'учится' },
          { text: 'hem ', type: 'affix', gloss: 'и' },
          { text: 'çalışıyor mu?', type: 'question', gloss: 'работает?' },
        ],
      },
    },
    examples: [
      {
        id: 'cj-ex1',
        tr: 'Hafta sonu hem dinlendik hem de evdeki işleri bitirdik.',
        ru: 'На выходных мы и отдохнули, и закончили домашние дела.',
        annotatedWords: [
          {
            surface: 'hem',
            morphemes: [
              { text: 'hem', type: 'affix', gloss: 'и (первый из парных союзов)' },
            ],
          },
          {
            surface: 'de',
            morphemes: [
              { text: 'de', type: 'affix', gloss: 'усилительная частица (в hem… hem de)' },
            ],
          },
        ],
      },
      {
        id: 'cj-ex2',
        tr: 'Dışarı çıkmak istedim ama hava çok soğuk olduğu için vazgeçtim.',
        ru: 'Я хотел выйти на улицу, но передумал, так как на улице было очень холодно.',
        annotatedWords: [
          {
            surface: 'ama',
            morphemes: [
              { text: 'ama', type: 'affix', gloss: 'но (противопоставление)' },
            ],
          },
          {
            surface: 'için',
            morphemes: [
              { text: 'için', type: 'affix', gloss: 'по причине (в -dığı için)' },
            ],
          },
        ],
      },
      {
        id: 'cj-ex3',
        tr: 'Sabah o kadar acele ettim ki ne kahvaltı yaptım ne kahve içtim.',
        ru: 'Утром я так спешил, что ни позавтракал, ни выпил кофе.',
        annotatedWords: [
          {
            surface: 'ne',
            morphemes: [
              { text: 'ne', type: 'negation', gloss: 'ни (парный отрицательный союз)' },
            ],
          },
          {
            surface: 'yaptım',
            morphemes: [
              { text: 'yap', type: 'root', gloss: 'делать' },
              { text: 'tı', type: 'affix', gloss: 'прош. вр. (утверд. форма!)' },
              { text: 'm', type: 'person', gloss: 'я' },
            ],
          },
          {
            surface: 'içtim',
            morphemes: [
              { text: 'iç', type: 'root', gloss: 'пить' },
              { text: 'ti', type: 'affix', gloss: 'прош. вр. (утверд. форма!)' },
              { text: 'm', type: 'person', gloss: 'я' },
            ],
          },
        ],
      },
      {
        id: 'cj-ex4',
        tr: 'Bu konuyu bir daha tekrar etmeliyiz, çünkü yarınki sınavda çıkabilir.',
        ru: 'Нам нужно повторить эту тему ещё раз, потому что она может попасться на завтрашнем экзамене.',
        annotatedWords: [
          {
            surface: 'çünkü',
            morphemes: [
              { text: 'çünkü', type: 'affix', gloss: 'потому что (после следствия)' },
            ],
          },
          {
            surface: 'çıkabilir',
            morphemes: [
              { text: 'çık', type: 'root', gloss: 'выходить / попадаться' },
              { text: 'abil', type: 'affix', gloss: 'возможность' },
              { text: 'ir', type: 'affix', gloss: 'аорист' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'çünkü (причина ПОСЛЕ факта) vs bu yüzden (следствие)',
          explanation:
            'После çünkü всегда идёт ПРИЧИНА («не пришёл, потому что заболел»). После bu yüzden / bu nedenle всегда идёт СЛЕДСТВИЕ («заболел, поэтому не пришёл»).',
          exampleTr: 'Gelmedim çünkü hastaydım (потому что болел) vs Hastaydım, bu yüzden gelmedim (поэтому не пришёл)',
          exampleRu: 'потому что болел vs поэтому не пришёл',
          relatedTopicId: 'cause-result-clauses',
        },
        {
          title: 'ancak как союз («но / однако») vs как наречие («лишь / только»)',
          explanation:
            'В начале второй части предложения ancak означает «но, однако» (синоним ama/fakat). Перед числительным или словом ancak значит «всего лишь, максимум, еле-еле».',
          exampleTr: 'Çok uğraştık ancak başaramadık (старались, но не смогли) vs Ancak beş kişi geldi (пришло всего пять человек)',
          exampleRu: 'однако не смогли vs всего пять человек',
          relatedTopicId: 'particles-de-ki-bile',
        },
      ],
    },
    miniCheck: [
      {
        id: 'cj-q1',
        prompt: 'Заполните пропуск в парном союзе «ни… ни…»: «Я не видел ни Али, ни Айше» — Ne Ali’yi ___ Ayşe’yi gördüm.',
        type: 'input',
        correctAnswer: 'ne',
        acceptedAnswers: ['ne', 'ne de'],
        explanation: 'Парный союз ne… ne… (или ne… ne de…) соединяет два отрицаемых элемента и ставит глагол в утвердительную форму.',
      },
      {
        id: 'cj-q2',
        prompt: 'Какой вариант грамматически естественнее для «Она не умеет ни петь, ни танцевать»?',
        type: 'choice',
        options: [
          'Ne şarkı söyleyebiliyor ne dans edebiliyor.',
          'Ne şarkı söyleyemiyor ne dans edemiyor.',
          'Hem şarkı söyleyemiyor hem dans edemiyor.',
          'Ya şarkı söyleyebiliyor ya dans edebiliyor.',
        ],
        correctAnswer: 'Ne şarkı söyleyebiliyor ne dans edebiliyor.',
        explanation: 'Союз ne… ne… уже несёт отрицание, поэтому глаголы после него ставятся в утвердительной форме.',
      },
      {
        id: 'cj-q3',
        prompt: 'Вставьте подходящий союз причины: «Мы взяли зонт, потому что по прогнозу будет дождь» — Şemsiye aldık, ___ hava yağmurlu olacakmış.',
        type: 'input',
        correctAnswer: 'çünkü',
        acceptedAnswers: ['çünkü'],
        explanation: 'Объяснение причины после факта вводится союзом çünkü.',
      },
      {
        id: 'cj-q4',
        prompt: 'Какой союз переводится как «а ведь / тогда как» и подчёркивает контраст ожиданий?',
        type: 'choice',
        options: [
          'çünkü',
          'oysa',
          'hatta',
          'veya',
        ],
        correctAnswer: 'oysa',
        explanation: 'Союз oysa (oysaki) вводит неожиданное противоречие: «а ведь, между тем как».',
      },
    ],
    isDraft: false,
  },

  {
    id: 'particles-de-ki-bile',
    sectionId: 'postpositions-particles',
    titleRu: 'Частицы (de/da, ki, bile, sanki, ise)',
    titleTr: 'Edat ve Bağlaç İşlevli Sözcükler',
    level: 'A2',
    levels: ['A2', 'B1', 'B2'],
    affixes: ['de', 'da', 'ki', 'bile', 'sanki', 'ise', 'meğer', 'acaba'],
    summary:
      'Частицы и служебные слова придают речи важные смысловые оттенки и пишутся РАЗДЕЛЬНО. Союз-частица de/da («тоже, и, же») подчиняется только гармонии на 2 (никогда не оглушается в *te/*ta!), а bile значит «даже». Раздельное ki связывает придаточные фразы или выражает сомнение/эмоцию, sanki («будто»), meğer («оказывается»), acaba («интересно, неужели») задают отношение говорящего к факту.',
    formula: [
      { text: 'Слово / Клауза', type: 'root', gloss: 'выделяемый элемент' },
      { text: 'de / da / bile / ki / ise', type: 'affix', gloss: 'всегда раздельно!' },
      { text: '(sanki / meğer / acaba)', type: 'buffer', gloss: 'модальные слова в начале/середине' },
    ],
    conjugationTable: {
      affirmative: {
        'de / da (тоже, и)': [
          { text: 'ben ', type: 'person', gloss: 'я' },
          { text: 'de', type: 'affix', gloss: 'тоже (после твёрдых — da)' },
        ],
        'de после глухих (НЕ -te!)': [
          { text: 'Ahmet ', type: 'root', gloss: 'Ахмет (глухая -t)' },
          { text: 'de', type: 'affix', gloss: 'тоже (всегда de/da!)' },
        ],
        'bile (даже)': [
          { text: 'çocuklar ', type: 'root', gloss: 'дети' },
          { text: 'bile', type: 'affix', gloss: 'даже (дети)' },
        ],
        'ki (раздельное: так…, что…)': [
          { text: 'o kadar güzel ', type: 'root', gloss: 'настолько красиво' },
          { text: 'ki', type: 'affix', gloss: 'что… (или в конце: «откуда мне знать!»)' },
        ],
        'ise (что касается / а)': [
          { text: 'ben ', type: 'person', gloss: 'я' },
          { text: 'ise', type: 'affix', gloss: 'а я / что касается меня' },
        ],
        'sanki / meğer (будто / оказывается)': [
          { text: 'meğer', type: 'affix', gloss: 'оказывается (sanki — словно)' },
          { text: ' biliyormuş', type: 'root', gloss: 'он, оказывается, знал' },
        ],
      },
      negative: {
        'bile + отрицание (даже не…)': [
          { text: 'hiç ', type: 'negation', gloss: 'совсем' },
          { text: 'sormadı ', type: 'negation', gloss: 'не спросил' },
          { text: 'bile', type: 'affix', gloss: 'даже не спросил' },
        ],
        'de… de… (ни…, ни… / и не)': [
          { text: 'gelmedi ', type: 'negation', gloss: 'не пришёл' },
          { text: 'de', type: 'affix', gloss: 'к тому же и не пришёл' },
        ],
        'ki (сомнение: разве?)': [
          { text: 'bilmiyorum ', type: 'negation', gloss: 'не знаю' },
          { text: 'ki', type: 'affix', gloss: 'да откуда же я знаю' },
        ],
        'sanki + отрицание (будто не)': [
          { text: 'sanki', type: 'affix', gloss: 'будто бы' },
          { text: ' görmemiş', type: 'negation', gloss: 'не видел' },
        ],
      },
      question: {
        'acaba (интересно, ли?)': [
          { text: 'acaba', type: 'question', gloss: 'интересно' },
          { text: ' gelecek mi?', type: 'question', gloss: 'придёт ли он?' },
        ],
        'de / da в вопросе': [
          { text: 'sen ', type: 'person', gloss: 'ты' },
          { text: 'de', type: 'affix', gloss: 'тоже' },
          { text: ' geliyor musun?', type: 'question', gloss: 'ты тоже идёшь?' },
        ],
        'ki в вопросе (неужели?)': [
          { text: 'doğru mu ', type: 'question', gloss: 'правда ли' },
          { text: 'ki?', type: 'affix', gloss: 'да неужели это правда?' },
        ],
        'bile в вопросе': [
          { text: 'bunu ', type: 'root', gloss: 'это' },
          { text: 'bile', type: 'affix', gloss: 'даже это' },
          { text: ' unuttun mu?', type: 'question', gloss: 'ты и это забыл?' },
        ],
      },
    },
    examples: [
      {
        id: 'pk-ex1',
        tr: 'Ahmet de yarınki toplantıda bizimle birlikte olacak.',
        ru: 'Ахмет тоже будет завтра вместе с нами на собрании.',
        annotatedWords: [
          {
            surface: 'de',
            morphemes: [
              { text: 'de', type: 'affix', gloss: 'частица «тоже» (не оглушается!)' },
            ],
          },
          {
            surface: 'toplantıda',
            morphemes: [
              { text: 'toplantı', type: 'root', gloss: 'собрание' },
              { text: 'da', type: 'affix', gloss: 'местн. падеж (слитно!)' },
            ],
          },
        ],
      },
      {
        id: 'pk-ex2',
        tr: 'Hava o kadar sıcaktı ki dışarı adım bile atamadık.',
        ru: 'На улице было так жарко, что мы не смогли сделать даже шага.',
        annotatedWords: [
          {
            surface: 'ki',
            morphemes: [
              { text: 'ki', type: 'affix', gloss: 'союз «что» после o kadar' },
            ],
          },
          {
            surface: 'bile',
            morphemes: [
              { text: 'bile', type: 'affix', gloss: 'даже' },
            ],
          },
        ],
      },
      {
        id: 'pk-ex3',
        tr: 'Acaba bu konu hakkında öğretmenimiz ne düşünüyor?',
        ru: 'Интересно, что думает об этой теме наш преподаватель?',
        annotatedWords: [
          {
            surface: 'Acaba',
            morphemes: [
              { text: 'acaba', type: 'question', gloss: 'интересно, интересно ли' },
            ],
          },
        ],
      },
      {
        id: 'pk-ex4',
        tr: 'Meğer bütün bu olanları en başından beri biliyormuş.',
        ru: 'Оказывается, он знал обо всём этом с самого начала.',
        annotatedWords: [
          {
            surface: 'Meğer',
            morphemes: [
              { text: 'meğer', type: 'affix', gloss: 'оказывается (неожиданное открытие)' },
            ],
          },
          {
            surface: 'biliyormuş',
            morphemes: [
              { text: 'bil', type: 'root', gloss: 'знать' },
              { text: 'iyor', type: 'affix', gloss: 'наст. длит.' },
              { text: 'muş', type: 'affix', gloss: 'неочевидное открытие' },
            ],
          },
        ],
      },
    ],
    doNotConfuse: {
      title: 'Не путай',
      items: [
        {
          title: 'Частица de/da («тоже», раздельно) vs Местный падеж -de/-da/-te/-ta (слитно)',
          explanation:
            'Падеж -de/-da пишется слитно и оглушается после глухих (parkta — в парке). Частица de/da («тоже, и») всегда пишется раздельно и НИКОГДА не начинается с t (Park da çok güzel — парк тоже красивый).',
          exampleTr: 'Kitap da aldım (я и книгу купил) vs Kitapta yazıyor (написано в книге)',
          exampleRu: 'и книгу купил vs написано в книге',
          relatedTopicId: 'six-cases',
        },
        {
          title: 'Союз ki (раздельно) vs Аффикс принадлежности/местоположения -ki (слитно)',
          explanation:
            'Союз ki пишется раздельно (Düşündüm ki…, Öyle yorgunum ki…). Слитный аффикс -ki (исключения belki, çünkü, sanki, oysaki, halbuki) образует определения места/времени (masadaki — тот, что на столе) или замену слова (benimki — мой).',
          exampleTr: 'İyi ki geldin! (Хорошо, что ты пришёл!) vs Evdeki hesap (расчёт дома / домашний расчёт)',
          exampleRu: 'хорошо, что пришёл vs расчёт дома',
          relatedTopicId: 'pronouns',
        },
      ],
    },
    miniCheck: [
      {
        id: 'pk-q1',
        prompt: 'Выберите правильное написание для «Мурат тоже пошёл в кино»:',
        type: 'choice',
        options: [
          'Murat ta sinemaya gitti.',
          'Murat da sinemaya gitti.',
          'Muratda sinemaya gitti.',
          'Muratta sinemaya gitti.',
        ],
        correctAnswer: 'Murat da sinemaya gitti.',
        explanation: 'Союз-частица da/de («тоже») всегда пишется раздельно и никогда не оглушается в *ta/*te.',
      },
      {
        id: 'pk-q2',
        prompt: 'Заполните пропуск словом «даже»: «Он даже не позвонил мне» — Beni aramadı ___.',
        type: 'input',
        correctAnswer: 'bile',
        acceptedAnswers: ['bile'],
        explanation: 'Слово bile («даже») обычно ставится сразу после выделяемого слова или после сказуемого.',
      },
      {
        id: 'pk-q3',
        prompt: 'Вставьте частицу, выражающую неожиданное открытие («оказывается»): ___ o da aynı şehirde yaşıyormuş!',
        type: 'input',
        correctAnswer: 'Meğer',
        acceptedAnswers: ['Meğer', 'meğer'],
        explanation: 'Слово meğer («оказывается») обычно сочетается с прошедшим временем на -mış/-yormuş.',
      },
      {
        id: 'pk-q4',
        prompt: 'В каком предложении ki написано правильно?',
        type: 'choice',
        options: [
          'Masa da ki kalem senin mi?',
          'O kadar hızlı koştu ki yetişemedim.',
          'Seninki de gel di ki?',
          'Bugün ki ders çok ilginçti.',
        ],
        correctAnswer: 'O kadar hızlı koştu ki yetişemedim.',
        explanation: 'Союз ki («что») после o kadar пишется раздельно, а аффикс -ki в masadaki и bugünkü пишется слитно.',
      },
    ],
    isDraft: false,
  },
];
