import type { MorphemeToken } from '../types/grammar';
import type {
  CompoundType,
  ConsonantRuleResult,
  NounCaseId,
  NounCaseResult,
  NounDeclensionOptions,
  NounSimulationResult,
  Polarity,
  SimpleTenseId,
  TenseMatrixCell,
  VerbPerson,
  VerbPreset,
  VowelHarmony2,
  VowelHarmony4,
} from '../types/morphology';

export interface LastVowelInfo {
  vowel: string | null;
  harmony2: VowelHarmony2;
  harmony4: VowelHarmony4;
  isSoftLoanword: boolean;
}

const ALL_VOWELS = new Set([
  'a',
  'ı',
  'o',
  'u',
  'e',
  'i',
  'ö',
  'ü',
  'â',
  'î',
  'û',
]);

const NARROW_VOWELS = new Set(['ı', 'i', 'u', 'ü', 'î', 'û']);

const FISTIKCI_SAHAP = new Set(['f', 's', 't', 'k', 'ç', 'ş', 'h', 'p']);

const HARDENING_MAP: Record<string, string> = {
  d: 't',
  c: 'ç',
  g: 'k',
};

const SOFTENING_MAP: Record<string, string> = {
  p: 'b',
  ç: 'c',
  t: 'd',
  k: 'ğ',
};

const SOFT_HARMONY_LOANWORDS: readonly string[] = [
  'saat',
  'hayal',
  'kalp',
  'kalb',
  'alkol',
  'rol',
  'harf',
  'gol',
  'sembol',
  'seyahat',
  'dikkat',
  'hakikat',
  'festival',
  'ideal',
  'normal',
  'metal',
  'moral',
  'petrol',
  'kontrol',
  'protokol',
  'misal',
  'ihal',
  'istisna',
];

const NO_SOFTENING_WORDS = new Set([
  // Односложные исключения
  'at',
  'süt',
  'top',
  'ip',
  'çöp',
  'et',
  'ot',
  'saç',
  'maç',
  'koç',
  'üç',
  'iç',
  'güç',
  'suç',
  'tek',
  'ek',
  'kök',
  'ok',
  'yük',
  'tok',
  'yok',
  'ak',
  'kırk',
  'türk',
  'kart',
  'sert',
  'park',
  'tank',
  'bank',
  'sepet',
  // Заимствования без озвончения
  'hukuk',
  'saat',
  'millet',
  'devlet',
  'sanat',
  'hayat',
  'dikkat',
  'bilet',
  'paket',
  'seyahat',
  'hakikat',
  'evrak',
  'merak',
  'ahlak',
  'ittifak',
  'cumhuriyet',
  'hürriyet',
  'şefkat',
  // Усечённая основа vakit → vakt (vakti, не *vakdi)
  'vakt',
]);

const VOWEL_DROP_MAP: Record<string, string> = {
  burun: 'burn',
  şehir: 'şehr',
  ağız: 'ağz',
  karın: 'karn',
  oğul: 'oğl',
  beyin: 'beyn',
  isim: 'ism',
  vakit: 'vakt',
  akıl: 'akl',
  fikir: 'fikr',
  ömür: 'ömr',
  nehir: 'nehr',
  resim: 'resm',
  göğüs: 'göğs',
  boyun: 'boyn',
  omuz: 'omz',
  alın: 'aln',
  kayıp: 'kayp',
};

const GENIS_MONOSYLLABIC_EXCEPTIONS = new Set([
  'al',
  'bil',
  'bul',
  'dur',
  'gel',
  'gör',
  'kal',
  'ol',
  'öl',
  'san',
  'var',
  'ver',
  'vur',
]);

interface CaseMetadata {
  caseId: NounCaseId;
  caseNameRu: string;
  caseNameTr: string;
  caseQuestion: string;
}

const NOUN_CASES: readonly CaseMetadata[] = [
  {
    caseId: 'nominative',
    caseNameRu: 'Основной',
    caseNameTr: 'Yalın hal',
    caseQuestion: 'кто? что?',
  },
  {
    caseId: 'accusative',
    caseNameRu: 'Винительный',
    caseNameTr: 'Belirtme hali',
    caseQuestion: 'кого? что?',
  },
  {
    caseId: 'dative',
    caseNameRu: 'Дательный',
    caseNameTr: 'Yönelme hali',
    caseQuestion: 'кому? куда?',
  },
  {
    caseId: 'locative',
    caseNameRu: 'Местный',
    caseNameTr: 'Bulunma hali',
    caseQuestion: 'где? у кого?',
  },
  {
    caseId: 'ablative',
    caseNameRu: 'Исходный',
    caseNameTr: 'Ayrılma hali',
    caseQuestion: 'откуда? от чего?',
  },
  {
    caseId: 'genitive',
    caseNameRu: 'Родительный',
    caseNameTr: 'İlgi hali',
    caseQuestion: 'чей? кого?',
  },
];

const POSSESSIVE_GLOSS: Record<
  Exclude<NounDeclensionOptions['possessive'], 'none'>,
  string
> = {
  benim: 'принадлежность (1 л. ед.ч. — мой)',
  senin: 'принадлежность (2 л. ед.ч. — твой)',
  onun: 'принадлежность (3 л. ед.ч. — его/её)',
  bizim: 'принадлежность (1 л. мн.ч. — наш)',
  sizin: 'принадлежность (2 л. мн.ч. — ваш)',
  onlarin: 'принадлежность (3 л. мн.ч. — их)',
};

const VERB_PERSON_GLOSS: Record<VerbPerson, string> = {
  ben: '1 л. ед.ч. (ben)',
  sen: '2 л. ед.ч. (sen)',
  o: '3 л. ед.ч. (o)',
  biz: '1 л. мн.ч. (biz)',
  siz: '2 л. мн.ч. (siz)',
  onlar: '3 л. мн.ч. (onlar)',
};

const VERB_PERSON_RU: Record<VerbPerson, string> = {
  ben: 'Я',
  sen: 'Ты',
  o: 'Он/она',
  biz: 'Мы',
  siz: 'Вы',
  onlar: 'Они',
};

const SIMPLE_TENSE_META: Record<
  SimpleTenseId,
  { titleRu: string; titleTr: string; topicId: string }
> = {
  simdiki: {
    titleRu: 'Настоящее длительное',
    titleTr: 'Şimdiki zaman',
    topicId: 'simdiki-zaman',
  },
  genis: {
    titleRu: 'Настоящее-будущее (широкое)',
    titleTr: 'Geniş zaman',
    topicId: 'genis-zaman',
  },
  gecmis_di: {
    titleRu: 'Прошедшее категорическое',
    titleTr: 'Belirli geçmiş zaman',
    topicId: 'gecmis-zaman-di-mis',
  },
  gecmis_mis: {
    titleRu: 'Прошедшее субъективное',
    titleTr: 'Belirsiz geçmiş zaman',
    topicId: 'gecmis-zaman-di-mis',
  },
  gelecek: {
    titleRu: 'Будущее время',
    titleTr: 'Gelecek zaman',
    topicId: 'gelecek-zaman',
  },
  gereklilik: {
    titleRu: 'Долженствование',
    titleTr: 'Gereklilik kipi',
    topicId: 'necessity-mali',
  },
  sart: {
    titleRu: 'Условное наклонение',
    titleTr: 'Şart kipi',
    topicId: 'conditional-sa',
  },
};

function isVowel(char: string): boolean {
  return ALL_VOWELS.has(toTurkishLower(char));
}

function endsWithVowel(word: string): boolean {
  if (word.length === 0) return false;
  return isVowel(word[word.length - 1]);
}

function startsWithVowel(word: string): boolean {
  if (word.length === 0) return false;
  return isVowel(word[0]);
}

function countSyllables(word: string): number {
  const lower = toTurkishLower(word);
  let count = 0;
  for (const ch of lower) {
    if (ALL_VOWELS.has(ch)) {
      count += 1;
    }
  }
  return count;
}

function uniqueStrings(items: string[]): string[] {
  return Array.from(new Set(items));
}

function joinVerbMorphemes(morphemes: MorphemeToken[]): string {
  let result = '';
  for (let i = 0; i < morphemes.length; i += 1) {
    const token = morphemes[i];
    if (token.type === 'question' && i > 0) {
      result += ' ';
    }
    result += token.text;
  }
  return result;
}

/**
 * Приводит турецкую строку к нижнему регистру с учётом локали tr-TR (I → ı, İ → i).
 */
export function toTurkishLower(word: string): string {
  return word.normalize('NFC').toLocaleLowerCase('tr-TR');
}

/**
 * Определяет последнюю гласную слова, 2-вариантную (a/e) и 4-вариантную (ı/i/u/ü)
 * гармонию гласных, а также проверяет словарь мягкой гармонии в заимствованиях.
 */
export function getLastVowel(word: string): LastVowelInfo {
  const lower = toTurkishLower(word).trim();
  const cleanedForMatch = lower.replace(/['’\-]+$/u, '');

  let lastVowel: string | null = null;
  for (let i = lower.length - 1; i >= 0; i -= 1) {
    const ch = lower[i];
    if (ALL_VOWELS.has(ch)) {
      lastVowel = ch;
      break;
    }
  }

  if (lastVowel === null) {
    return {
      vowel: null,
      harmony2: 'e',
      harmony4: 'i',
      isSoftLoanword: false,
    };
  }

  const isSoftLoanword = SOFT_HARMONY_LOANWORDS.some(
    (loanword) =>
      cleanedForMatch === loanword || cleanedForMatch.endsWith(loanword),
  );

  if (isSoftLoanword) {
    if (lastVowel === 'o' || lastVowel === 'u' || lastVowel === 'û') {
      return {
        vowel: lastVowel,
        harmony2: 'e',
        harmony4: 'ü',
        isSoftLoanword: true,
      };
    }
    return {
      vowel: lastVowel,
      harmony2: 'e',
      harmony4: 'i',
      isSoftLoanword: true,
    };
  }

  switch (lastVowel) {
    case 'a':
    case 'ı':
    case 'â':
      return {
        vowel: lastVowel,
        harmony2: 'a',
        harmony4: 'ı',
        isSoftLoanword: false,
      };
    case 'o':
    case 'u':
    case 'û':
      return {
        vowel: lastVowel,
        harmony2: 'a',
        harmony4: 'u',
        isSoftLoanword: false,
      };
    case 'e':
    case 'i':
    case 'î':
      return {
        vowel: lastVowel,
        harmony2: 'e',
        harmony4: 'i',
        isSoftLoanword: false,
      };
    case 'ö':
    case 'ü':
      return {
        vowel: lastVowel,
        harmony2: 'e',
        harmony4: 'ü',
        isSoftLoanword: false,
      };
    default:
      return {
        vowel: lastVowel,
        harmony2: 'e',
        harmony4: 'i',
        isSoftLoanword: false,
      };
  }
}

/**
 * Применяет правила чередования согласных на стыке основы и аффикса:
 * 1) Оглушение начальной согласной аффикса по правилу Fıstıkçı Şahap (d→t, c→ç, g→k).
 * 2) Озвончение конечной согласной основы перед гласным аффиксом (nk→ng, p→b, ç→c, t→d, k→ğ),
 *    с учётом словаря исключений без озвончения.
 */
export function applyConsonantRules(
  stem: string,
  affix: string,
  options?: { disableSoftening?: boolean },
): ConsonantRuleResult {
  if (stem.length === 0 || affix.length === 0) {
    return { stem, affix, appliedRules: [] };
  }

  const appliedRules: string[] = [];
  let nextStem = stem;
  let nextAffix = affix;

  const lowerStem = toTurkishLower(stem);
  const lowerAffix = toTurkishLower(affix);

  const stemWithoutTrailingApostrophe = lowerStem.replace(/['’]+$/u, '');
  const lastStemChar =
    stemWithoutTrailingApostrophe[stemWithoutTrailingApostrophe.length - 1] ??
    '';
  const firstAffixChar = lowerAffix[0] ?? '';

  // 1. Оглушение (Fıstıkçı Şahap)
  if (FISTIKCI_SAHAP.has(lastStemChar) && firstAffixChar in HARDENING_MAP) {
    const hardened = HARDENING_MAP[firstAffixChar];
    nextAffix = hardened + affix.slice(1);
    appliedRules.push(`Fıstıkçı Şahap: ${firstAffixChar} → ${hardened}`);
    return {
      stem: nextStem,
      affix: nextAffix,
      appliedRules,
    };
  }

  // 2. Озвончение конечной согласной основы перед гласным аффиксом
  const hasTrailingApostrophe = /['’]$/u.test(lowerStem);
  if (
    !options?.disableSoftening &&
    !hasTrailingApostrophe &&
    startsWithVowel(lowerAffix) &&
    lowerStem.length > 1
  ) {
    const segments = lowerStem.split(/\s+/u);
    const lastSegment = segments[segments.length - 1] ?? lowerStem;

    if (!NO_SOFTENING_WORDS.has(lastSegment)) {
      if (lowerStem.endsWith('nk')) {
        nextStem = stem.slice(0, -1) + 'g';
        appliedRules.push('озвончение nk → ng');
      } else if (lastStemChar in SOFTENING_MAP) {
        const softened = SOFTENING_MAP[lastStemChar];
        nextStem = stem.slice(0, -1) + softened;
        appliedRules.push(`озвончение ${lastStemChar} → ${softened}`);
      }
    }
  }

  return {
    stem: nextStem,
    affix: nextAffix,
    appliedRules,
  };
}

/**
 * Склоняет турецкое существительное по всем 6 падежам с учётом множественного числа,
 * принадлежности, гармонии гласных, чередования согласных, выпадения узкой гласной
 * и особого слова su.
 */
export function declineNoun(
  word: string,
  options: NounDeclensionOptions,
): NounSimulationResult {
  const normalizedWord = toTurkishLower(word.trim());

  if (normalizedWord.length === 0) {
    return {
      inputWord: word,
      normalizedWord,
      options,
      cases: NOUN_CASES.map((meta) => ({
        ...meta,
        surface: '',
        morphemes: [],
        appliedRules: [],
      })),
    };
  }

  const isSu = normalizedWord === 'su';
  const rootHarmony = getLastVowel(normalizedWord);

  const cases: NounCaseResult[] = NOUN_CASES.map((caseMeta) => {
    const { caseId } = caseMeta;
    const appliedRules: string[] = [];
    let rootText = normalizedWord;
    const trailingTokens: MorphemeToken[] = [];

    // Определяем, присоединяется ли сразу к корню (без -lar/-ler) аффикс, начинающийся с гласной
    const willAttachVowelDirectlyToRoot =
      !options.plural &&
      ((options.possessive !== 'none' &&
        options.possessive !== 'onlarin' &&
        !endsWithVowel(normalizedWord)) ||
        (options.possessive === 'none' &&
          !endsWithVowel(normalizedWord) &&
          (caseId === 'accusative' ||
            caseId === 'dative' ||
            caseId === 'genitive')));

    // Выпадение узкой гласной в двусложных словах
    let harmonySourceForFirstAffix = normalizedWord;
    if (willAttachVowelDirectlyToRoot && normalizedWord in VOWEL_DROP_MAP) {
      const dropped = VOWEL_DROP_MAP[normalizedWord];
      appliedRules.push(
        `выпадение узкой гласной: ${normalizedWord} → ${dropped}`,
      );
      rootText = dropped;
      // Сохраняем исходное слово для расчёта гармонии первого аффикса (критично для vakit → vakti)
      harmonySourceForFirstAffix = normalizedWord;
    }

    // Текущая текстовая форма, к которой присоединяется следующий аффикс
    let currentSurface = rootText;
    let isDirectlyAfterRoot = true;

    const getCurrentHarmony = (): LastVowelInfo => {
      if (isDirectlyAfterRoot) {
        return getLastVowel(harmonySourceForFirstAffix);
      }
      return getLastVowel(currentSurface);
    };

    const appendAffix = (
      rawAffix: string,
      type: MorphemeToken['type'],
      gloss: string,
      opts?: { disableSoftening?: boolean },
    ): void => {
      if (isDirectlyAfterRoot) {
        const res = applyConsonantRules(rootText, rawAffix, opts);
        rootText = res.stem;
        appliedRules.push(...res.appliedRules);
        trailingTokens.push({ text: res.affix, type, gloss });
        currentSurface = rootText + res.affix;
        isDirectlyAfterRoot = false;
      } else {
        const res = applyConsonantRules(currentSurface, rawAffix, {
          disableSoftening: true,
        });
        appliedRules.push(...res.appliedRules);
        trailingTokens.push({ text: res.affix, type, gloss });
        currentSurface += res.affix;
      }
    };

    const appendBuffer = (
      bufferChar: string,
      gloss: string,
      ruleText: string,
    ): void => {
      trailingTokens.push({ text: bufferChar, type: 'buffer', gloss });
      currentSurface += bufferChar;
      isDirectlyAfterRoot = false;
      appliedRules.push(ruleText);
    };

    // 1. Множественное число (-lar / -ler)
    if (options.plural) {
      const h = getCurrentHarmony();
      if (h.isSoftLoanword) {
        appliedRules.push('мягкая гармония заимствования');
      }
      const pluralAffix = `l${h.harmony2}r`;
      appliedRules.push(`гармония гласных на 2 (${h.harmony2})`);
      appendAffix(pluralAffix, 'affix', 'множественное число', {
        disableSoftening: true,
      });
    }

    // 2. Принадлежность
    const isThirdPersonPossessive =
      options.possessive === 'onun' || options.possessive === 'onlarin';

    if (options.possessive !== 'none') {
      const h = getCurrentHarmony();
      if (isDirectlyAfterRoot && h.isSoftLoanword) {
        appliedRules.push('мягкая гармония заимствования');
      }
      const gloss = POSSESSIVE_GLOSS[options.possessive];

      if (options.possessive === 'onlarin') {
        if (options.plural) {
          // Не удваиваем -lar/-ler: ev + ler + i
          appliedRules.push(`гармония гласных на 4 (${h.harmony4})`);
          appendAffix(h.harmony4, 'person', gloss, { disableSoftening: true });
        } else {
          // ev + leri
          const lari = `l${h.harmony2}r${h.harmony2 === 'a' ? 'ı' : 'i'}`;
          appliedRules.push(`гармония гласных на 2 (${h.harmony2})`);
          appendAffix(lari, 'person', gloss, { disableSoftening: true });
        }
      } else if (isSu && !options.plural) {
        // Особое слово su: su + y + um / un / u / umuz / unuz
        appendBuffer('y', 'буферная согласная', 'особый буфер y для слова su');
        appliedRules.push(`гармония гласных на 4 (${h.harmony4})`);
        switch (options.possessive) {
          case 'benim':
            appendAffix(`${h.harmony4}m`, 'person', gloss);
            break;
          case 'senin':
            appendAffix(`${h.harmony4}n`, 'person', gloss);
            break;
          case 'onun':
            appendAffix(h.harmony4, 'person', gloss);
            break;
          case 'bizim':
            appendAffix(`${h.harmony4}m${h.harmony4}z`, 'person', gloss);
            break;
          case 'sizin':
            appendAffix(`${h.harmony4}n${h.harmony4}z`, 'person', gloss);
            break;
          default:
            break;
        }
      } else if (endsWithVowel(currentSurface)) {
        // Основа на гласную
        switch (options.possessive) {
          case 'benim':
            appendAffix('m', 'person', gloss, { disableSoftening: true });
            break;
          case 'senin':
            appendAffix('n', 'person', gloss, { disableSoftening: true });
            break;
          case 'onun':
            appendBuffer(
              's',
              'буферная согласная',
              'буферная согласная s (3-е лицо после гласной)',
            );
            appliedRules.push(`гармония гласных на 4 (${h.harmony4})`);
            appendAffix(h.harmony4, 'person', gloss);
            break;
          case 'bizim':
            appliedRules.push(`гармония гласных на 4 (${h.harmony4})`);
            appendAffix(`m${h.harmony4}z`, 'person', gloss, {
              disableSoftening: true,
            });
            break;
          case 'sizin':
            appliedRules.push(`гармония гласных на 4 (${h.harmony4})`);
            appendAffix(`n${h.harmony4}z`, 'person', gloss, {
              disableSoftening: true,
            });
            break;
          default:
            break;
        }
      } else {
        // Основа на согласную
        appliedRules.push(`гармония гласных на 4 (${h.harmony4})`);
        switch (options.possessive) {
          case 'benim':
            appendAffix(`${h.harmony4}m`, 'person', gloss);
            break;
          case 'senin':
            appendAffix(`${h.harmony4}n`, 'person', gloss);
            break;
          case 'onun':
            appendAffix(h.harmony4, 'person', gloss);
            break;
          case 'bizim':
            appendAffix(`${h.harmony4}m${h.harmony4}z`, 'person', gloss);
            break;
          case 'sizin':
            appendAffix(`${h.harmony4}n${h.harmony4}z`, 'person', gloss);
            break;
          default:
            break;
        }
      }
    }

    // 3. Падежный аффикс
    if (caseId !== 'nominative') {
      const h = getCurrentHarmony();
      if (isDirectlyAfterRoot && h.isSoftLoanword) {
        appliedRules.push('мягкая гармония заимствования');
      }

      if (isThirdPersonPossessive) {
        appendBuffer(
          'n',
          'буферная согласная',
          'буферная согласная n (после принадлежности 3-го лица)',
        );
      }

      switch (caseId) {
        case 'accusative': {
          if (!isThirdPersonPossessive && endsWithVowel(currentSurface)) {
            appendBuffer(
              'y',
              'буферная согласная',
              isSu && !options.plural
                ? 'особый буфер y для слова su'
                : 'буферная согласная y (после гласной)',
            );
          }
          appliedRules.push(`гармония гласных на 4 (${h.harmony4})`);
          appendAffix(h.harmony4, 'affix', 'винительный падеж');
          break;
        }
        case 'dative': {
          if (!isThirdPersonPossessive && endsWithVowel(currentSurface)) {
            appendBuffer(
              'y',
              'буферная согласная',
              isSu && !options.plural
                ? 'особый буфер y для слова su'
                : 'буферная согласная y (после гласной)',
            );
          }
          appliedRules.push(`гармония гласных на 2 (${h.harmony2})`);
          appendAffix(h.harmony2, 'affix', 'дательный падеж');
          break;
        }
        case 'locative': {
          appliedRules.push(`гармония гласных на 2 (${h.harmony2})`);
          appendAffix(`d${h.harmony2}`, 'affix', 'местный падеж', {
            disableSoftening: true,
          });
          break;
        }
        case 'ablative': {
          appliedRules.push(`гармония гласных на 2 (${h.harmony2})`);
          appendAffix(`d${h.harmony2}n`, 'affix', 'исходный падеж', {
            disableSoftening: true,
          });
          break;
        }
        case 'genitive': {
          if (!isThirdPersonPossessive && endsWithVowel(currentSurface)) {
            if (isSu && !options.plural && options.possessive === 'none') {
              appendBuffer(
                'y',
                'буферная согласная',
                'особый буфер y для слова su',
              );
            } else {
              appendBuffer(
                'n',
                'буферная согласная',
                'буферная согласная n (родительный падеж после гласной)',
              );
            }
          }
          appliedRules.push(`гармония гласных на 4 (${h.harmony4})`);
          appendAffix(`${h.harmony4}n`, 'affix', 'родительный падеж');
          break;
        }
        default:
          break;
      }
    } else if (
      rootHarmony.isSoftLoanword &&
      (options.plural || options.possessive !== 'none')
    ) {
      appliedRules.push('мягкая гармония заимствования');
    }

    const morphemes: MorphemeToken[] = [
      { text: rootText, type: 'root', gloss: 'основа' },
      ...trailingTokens,
    ];

    const surface = morphemes.map((token) => token.text).join('');

    return {
      ...caseMeta,
      surface,
      morphemes,
      appliedRules: uniqueStrings(appliedRules),
    };
  });

  return {
    inputWord: word,
    normalizedWord,
    options,
    cases,
  };
}

function getNarrowedStemForYor(
  rawStem: string,
  verb: VerbPreset,
): { stem: string; narrowed: boolean } {
  if (verb.narrowingStem) {
    const custom = toTurkishLower(verb.narrowingStem.trim());
    return { stem: custom, narrowed: custom !== rawStem };
  }

  if (rawStem === 'ye') {
    return { stem: 'yi', narrowed: true };
  }
  if (rawStem === 'de') {
    return { stem: 'di', narrowed: true };
  }

  if (rawStem.endsWith('a') || rawStem.endsWith('e')) {
    const prefix = rawStem.slice(0, -1);
    const h4 = getLastVowel(prefix).harmony4;
    return { stem: prefix + h4, narrowed: true };
  }

  return { stem: rawStem, narrowed: false };
}

function buildZTypePersonTokens(
  precedingText: string,
  person: VerbPerson,
  options?: { allowKSoftening?: boolean },
): {
  tokens: MorphemeToken[];
  softenedPreceding?: string;
  notes: string[];
} {
  const h = getLastVowel(precedingText);
  const gloss = VERB_PERSON_GLOSS[person];
  const notes: string[] = [];

  switch (person) {
    case 'ben': {
      if (endsWithVowel(precedingText)) {
        return {
          tokens: [
            { text: 'y', type: 'buffer', gloss: 'буферная согласная' },
            { text: `${h.harmony4}m`, type: 'person', gloss },
          ],
          notes,
        };
      }
      if (options?.allowKSoftening && precedingText.endsWith('k')) {
        notes.push(
          'Озвончение -acak/-ecek → -acağ/-eceğ перед гласным личным окончанием',
        );
        return {
          tokens: [{ text: `${h.harmony4}m`, type: 'person', gloss }],
          softenedPreceding: precedingText.slice(0, -1) + 'ğ',
          notes,
        };
      }
      return {
        tokens: [{ text: `${h.harmony4}m`, type: 'person', gloss }],
        notes,
      };
    }
    case 'sen':
      return {
        tokens: [{ text: `s${h.harmony4}n`, type: 'person', gloss }],
        notes,
      };
    case 'o':
      return { tokens: [], notes };
    case 'biz': {
      if (endsWithVowel(precedingText)) {
        return {
          tokens: [
            { text: 'y', type: 'buffer', gloss: 'буферная согласная' },
            { text: `${h.harmony4}z`, type: 'person', gloss },
          ],
          notes,
        };
      }
      if (options?.allowKSoftening && precedingText.endsWith('k')) {
        notes.push(
          'Озвончение -acak/-ecek → -acağ/-eceğ перед гласным личным окончанием',
        );
        return {
          tokens: [{ text: `${h.harmony4}z`, type: 'person', gloss }],
          softenedPreceding: precedingText.slice(0, -1) + 'ğ',
          notes,
        };
      }
      return {
        tokens: [{ text: `${h.harmony4}z`, type: 'person', gloss }],
        notes,
      };
    }
    case 'siz':
      return {
        tokens: [
          {
            text: `s${h.harmony4}n${h.harmony4}z`,
            type: 'person',
            gloss,
          },
        ],
        notes,
      };
    case 'onlar':
      return {
        tokens: [{ text: `l${h.harmony2}r`, type: 'person', gloss }],
        notes,
      };
    default:
      return { tokens: [], notes };
  }
}

function buildKTypePersonTokens(
  precedingText: string,
  person: VerbPerson,
): MorphemeToken[] {
  const h = getLastVowel(precedingText);
  const gloss = VERB_PERSON_GLOSS[person];

  switch (person) {
    case 'ben':
      return [{ text: 'm', type: 'person', gloss }];
    case 'sen':
      return [{ text: 'n', type: 'person', gloss }];
    case 'o':
      return [];
    case 'biz':
      return [{ text: 'k', type: 'person', gloss }];
    case 'siz':
      return [{ text: `n${h.harmony4}z`, type: 'person', gloss }];
    case 'onlar':
      return [{ text: `l${h.harmony2}r`, type: 'person', gloss }];
    default:
      return [];
  }
}

function buildVerbTranslationRu(
  verb: VerbPreset,
  tense: SimpleTenseId,
  compoundType: CompoundType,
  person: VerbPerson,
  polarity: Polarity,
): string {
  const personLabel = VERB_PERSON_RU[person];

  const simpleTimeMap: Record<SimpleTenseId, string> = {
    simdiki: 'сейчас',
    genis: 'обычно / вообще',
    gecmis_di: 'в прошлом',
    gecmis_mis: 'оказывается, в прошлом',
    gelecek: 'в будущем',
    gereklilik: 'нужно / должен',
    sart: 'если бы',
  };

  const hikayeTimeMap: Record<SimpleTenseId, string> = {
    simdiki: 'раньше, в процессе',
    genis: 'раньше обычно',
    gecmis_di: 'давно, предпрошедшее',
    gecmis_mis: 'уже к тому моменту',
    gelecek: 'собирался в прошлом',
    gereklilik: 'должен был',
    sart: 'если бы в прошлом',
  };

  const rivayetTimeMap: Record<SimpleTenseId, string> = {
    simdiki: 'говорят, сейчас в процессе',
    genis: 'говорят, обычно',
    gecmis_di: 'говорят, в прошлом',
    gecmis_mis: 'говорят, уже',
    gelecek: 'говорят, будет',
    gereklilik: 'говорят, нужно',
    sart: 'говорят, если бы',
  };

  const sartTimeMap: Record<SimpleTenseId, string> = {
    simdiki: 'если сейчас',
    genis: 'если обычно',
    gecmis_di: 'если в прошлом',
    gecmis_mis: 'если уже',
    gelecek: 'если будет',
    gereklilik: 'если нужно',
    sart: 'если бы',
  };

  let timeLabel: string;
  switch (compoundType) {
    case 'none':
      timeLabel = simpleTimeMap[tense];
      break;
    case 'hikaye':
      timeLabel = hikayeTimeMap[tense];
      break;
    case 'rivayet':
      timeLabel = rivayetTimeMap[tense];
      break;
    case 'sart':
      timeLabel = sartTimeMap[tense];
      break;
  }

  switch (polarity) {
    case 'affirmative':
      return `${personLabel} (${timeLabel}): ${verb.translationRu}`;
    case 'negative':
      return `${personLabel} (${timeLabel}): не ${verb.translationRu}`;
    case 'question':
      return `${personLabel} (${timeLabel}): ${verb.translationRu}?`;
    case 'negativeQuestion':
      return `${personLabel} (${timeLabel}): не ${verb.translationRu}?`;
  }
}

function buildVerbFormula(
  tense: SimpleTenseId,
  compoundType: CompoundType,
  person: VerbPerson,
  polarity: Polarity,
): MorphemeToken[] {
  const isNeg = polarity === 'negative' || polarity === 'negativeQuestion';
  const isQ = polarity === 'question' || polarity === 'negativeQuestion';
  const tokens: MorphemeToken[] = [
    { text: 'Kök', type: 'root', gloss: 'основа глагола' },
  ];

  const isSimpleGenisNegBenBiz =
    tense === 'genis' &&
    compoundType === 'none' &&
    polarity === 'negative' &&
    (person === 'ben' || person === 'biz');

  if (isNeg) {
    if (tense === 'simdiki') {
      tokens.push({
        text: '-mI',
        type: 'negation',
        gloss: 'отрицание перед -yor',
      });
    } else if (tense === 'genis') {
      tokens.push({
        text: isSimpleGenisNegBenBiz ? '-mA' : '-mAz',
        type: 'negation',
        gloss: 'отрицание широкого времени',
      });
    } else {
      tokens.push({ text: '-mA', type: 'negation', gloss: 'отрицание' });
    }
  }

  const tenseAffixLabel: Record<SimpleTenseId, string> = {
    simdiki: isNeg ? '-yor' : '-(I)yor',
    genis: '-(A/I)r',
    gecmis_di: '-DI',
    gecmis_mis: '-mIş',
    gelecek: '-(y)AcAk',
    gereklilik: '-mAlI',
    sart: '-sA',
  };

  if (!(tense === 'genis' && isNeg)) {
    tokens.push({
      text: tenseAffixLabel[tense],
      type: 'affix',
      gloss: SIMPLE_TENSE_META[tense].titleRu,
    });
  }

  const compoundLabelMap: Record<Exclude<CompoundType, 'none'>, string> = {
    hikaye: '-(y)DI',
    rivayet: '-(y)mIş',
    sart: '-(y)sA',
  };

  const compoundGlossMap: Record<Exclude<CompoundType, 'none'>, string> = {
    hikaye: 'прошедшее повествовательное (hikâye)',
    rivayet: 'пересказывательное (rivayet)',
    sart: 'составное условие (şart)',
  };

  if (compoundType === 'none') {
    const isKType = tense === 'gecmis_di' || tense === 'sart';
    if (!isQ) {
      if (person !== 'o') {
        tokens.push({
          text: isKType ? 'kişi (k)' : 'kişi',
          type: 'person',
          gloss: VERB_PERSON_GLOSS[person],
        });
      }
    } else if (isKType) {
      if (person !== 'o') {
        tokens.push({
          text: 'kişi (k)',
          type: 'person',
          gloss: VERB_PERSON_GLOSS[person],
        });
      }
      tokens.push({
        text: 'mI',
        type: 'question',
        gloss: 'вопросительная частица',
      });
    } else if (person === 'onlar') {
      tokens.push({
        text: '-lAr',
        type: 'person',
        gloss: VERB_PERSON_GLOSS.onlar,
      });
      tokens.push({
        text: 'mI',
        type: 'question',
        gloss: 'вопросительная частица',
      });
    } else {
      tokens.push({
        text: 'mI',
        type: 'question',
        gloss: 'вопросительная частица',
      });
      if (person !== 'o') {
        tokens.push({
          text: 'kişi',
          type: 'person',
          gloss: VERB_PERSON_GLOSS[person],
        });
      }
    }
  } else {
    if (person === 'onlar') {
      tokens.push({
        text: '-lAr',
        type: 'person',
        gloss: VERB_PERSON_GLOSS.onlar,
      });
    }
    if (isQ) {
      tokens.push({
        text: 'mI',
        type: 'question',
        gloss: 'вопросительная частица',
      });
    }
    tokens.push({
      text: compoundLabelMap[compoundType],
      type: 'affix',
      gloss: compoundGlossMap[compoundType],
    });
    if (person !== 'o' && person !== 'onlar') {
      tokens.push({
        text: compoundType === 'rivayet' ? 'kişi' : 'kişi (k)',
        type: 'person',
        gloss: VERB_PERSON_GLOSS[person],
      });
    }
  }

  return tokens;
}

/**
 * Спрягает турецкий глагол в одном из 7 простых времён (и 3 составных наклонениях)
 * для всех 6 лиц и 4 полярностей.
 */
export function conjugateVerb(
  verb: VerbPreset,
  tense: SimpleTenseId,
  compoundType: CompoundType,
  person: VerbPerson,
  polarity: Polarity,
): TenseMatrixCell {
  const rawStem = toTurkishLower(verb.stem.trim());
  const isNeg = polarity === 'negative' || polarity === 'negativeQuestion';
  const isQ = polarity === 'question' || polarity === 'negativeQuestion';
  const shouldSoftenTtoD =
    verb.stemSofteningTtoD ?? (rawStem === 'git' || rawStem === 'et');

  const notes: string[] = [];
  if (verb.note) {
    notes.push(verb.note);
  }
  if (tense === 'gecmis_di' && compoundType === 'rivayet') {
    notes.push(
      'В современном турецком языке сочетание -dı + -mış практически не употребляется.',
    );
  }
  if (tense === 'sart' && compoundType === 'sart') {
    notes.push(
      'В современном турецком языке удвоение условного аффикса -sa + -sa не употребляется.',
    );
  }

  const baseTokens: MorphemeToken[] = [];
  let canSoftenGelecekK = false;

  // Особый случай: простое отрицание Geniş zaman для ben (-mam/-mem) и biz (-mayız/-meyiz)
  const isSimpleGenisNegSpecial =
    tense === 'genis' &&
    compoundType === 'none' &&
    polarity === 'negative' &&
    (person === 'ben' || person === 'biz');

  if (isSimpleGenisNegSpecial) {
    const h2 = getLastVowel(rawStem).harmony2;
    const negAffix = `m${h2}`;
    baseTokens.push({ text: rawStem, type: 'root', gloss: 'основа глагола' });
    baseTokens.push({
      text: negAffix,
      type: 'negation',
      gloss: 'отрицание широкого времени',
    });

    if (person === 'ben') {
      baseTokens.push({
        text: 'm',
        type: 'person',
        gloss: VERB_PERSON_GLOSS.ben,
      });
    } else {
      const h4 = h2 === 'a' ? 'ı' : 'i';
      baseTokens.push({
        text: 'y',
        type: 'buffer',
        gloss: 'буферная согласная',
      });
      baseTokens.push({
        text: `${h4}z`,
        type: 'person',
        gloss: VERB_PERSON_GLOSS.biz,
      });
    }

    const simpleMeta = SIMPLE_TENSE_META[tense];
    return {
      tense,
      compoundType,
      person,
      polarity,
      titleRu: simpleMeta.titleRu,
      titleTr: simpleMeta.titleTr,
      surface: joinVerbMorphemes(baseTokens),
      morphemes: baseTokens,
      formula: buildVerbFormula(tense, compoundType, person, polarity),
      translationRu: buildVerbTranslationRu(
        verb,
        tense,
        compoundType,
        person,
        polarity,
      ),
      relatedTopicId: simpleMeta.topicId,
      notes: notes.length > 0 ? uniqueStrings(notes) : undefined,
    };
  }

  // Строим базовую основу времени (корень + [отрицание] + [аффикс времени])
  switch (tense) {
    case 'simdiki': {
      if (isNeg) {
        const h4 = getLastVowel(rawStem).harmony4;
        baseTokens.push({
          text: rawStem,
          type: 'root',
          gloss: 'основа глагола',
        });
        baseTokens.push({
          text: `m${h4}`,
          type: 'negation',
          gloss: 'отрицание (-mı/-mi/-mu/-mü)',
        });
        baseTokens.push({
          text: 'yor',
          type: 'affix',
          gloss: 'настоящее длительное (-yor)',
        });
        notes.push(
          'Отрицание -ma/-me сужается перед -yor до -mı/-mi/-mu/-mü',
        );
      } else {
        const { stem: narrowedStem, narrowed } = getNarrowedStemForYor(
          rawStem,
          verb,
        );
        if (narrowed) {
          notes.push(
            `Сужение конечной гласной основы перед -yor: ${rawStem} → ${narrowedStem}`,
          );
          baseTokens.push({
            text: narrowedStem,
            type: 'root',
            gloss: 'основа глагола',
          });
          baseTokens.push({
            text: 'yor',
            type: 'affix',
            gloss: 'настоящее длительное (-yor)',
          });
        } else if (
          endsWithVowel(rawStem) &&
          NARROW_VOWELS.has(rawStem[rawStem.length - 1])
        ) {
          baseTokens.push({
            text: rawStem,
            type: 'root',
            gloss: 'основа глагола',
          });
          baseTokens.push({
            text: 'yor',
            type: 'affix',
            gloss: 'настоящее длительное (-yor)',
          });
        } else {
          let activeStem = rawStem;
          if (shouldSoftenTtoD && activeStem.endsWith('t')) {
            activeStem = activeStem.slice(0, -1) + 'd';
            notes.push(`Озвончение основы перед гласной: ${rawStem} → ${activeStem}`);
          }
          const h4 = getLastVowel(rawStem).harmony4;
          baseTokens.push({
            text: activeStem,
            type: 'root',
            gloss: 'основа глагола',
          });
          baseTokens.push({
            text: `${h4}yor`,
            type: 'affix',
            gloss: 'настоящее длительное (-(I)yor)',
          });
        }
      }
      break;
    }

    case 'genis': {
      if (isNeg) {
        const h2 = getLastVowel(rawStem).harmony2;
        baseTokens.push({
          text: rawStem,
          type: 'root',
          gloss: 'основа глагола',
        });
        baseTokens.push({
          text: `m${h2}z`,
          type: 'negation',
          gloss: 'отрицание широкого времени (-maz/-mez)',
        });
      } else if (endsWithVowel(rawStem)) {
        baseTokens.push({
          text: rawStem,
          type: 'root',
          gloss: 'основа глагола',
        });
        baseTokens.push({
          text: 'r',
          type: 'affix',
          gloss: 'широкое время (-r)',
        });
      } else {
        let activeStem = rawStem;
        if (shouldSoftenTtoD && activeStem.endsWith('t')) {
          activeStem = activeStem.slice(0, -1) + 'd';
          notes.push(`Озвончение основы перед гласной: ${rawStem} → ${activeStem}`);
        }
        const vowelInfo = getLastVowel(rawStem);
        let aoristVowel: string;
        if (verb.genisAoristVowel) {
          aoristVowel = verb.genisAoristVowel;
          if (verb.isGenisException) {
            notes.push(
              'Исключение широкого времени (Geniş zaman): гармония на 4',
            );
          }
        } else if (
          verb.isGenisException ||
          GENIS_MONOSYLLABIC_EXCEPTIONS.has(rawStem)
        ) {
          aoristVowel = vowelInfo.harmony4;
          notes.push(
            'Исключение широкого времени (Geniş zaman): гармония на 4',
          );
        } else if (countSyllables(rawStem) > 1) {
          aoristVowel = vowelInfo.harmony4;
        } else {
          aoristVowel = vowelInfo.harmony2;
        }
        baseTokens.push({
          text: activeStem,
          type: 'root',
          gloss: 'основа глагола',
        });
        baseTokens.push({
          text: `${aoristVowel}r`,
          type: 'affix',
          gloss: 'широкое время (-(A/I)r)',
        });
      }
      break;
    }

    case 'gecmis_di': {
      baseTokens.push({ text: rawStem, type: 'root', gloss: 'основа глагола' });
      let preceding = rawStem;
      if (isNeg) {
        const h2 = getLastVowel(rawStem).harmony2;
        const negAffix = `m${h2}`;
        baseTokens.push({
          text: negAffix,
          type: 'negation',
          gloss: 'отрицание (-ma/-me)',
        });
        preceding += negAffix;
      }
      const h4 = getLastVowel(preceding).harmony4;
      const ruleRes = applyConsonantRules(preceding, `d${h4}`, {
        disableSoftening: true,
      });
      notes.push(...ruleRes.appliedRules);
      baseTokens.push({
        text: ruleRes.affix,
        type: 'affix',
        gloss: 'прошедшее категорическое (-dı/-ti)',
      });
      break;
    }

    case 'gecmis_mis': {
      baseTokens.push({ text: rawStem, type: 'root', gloss: 'основа глагола' });
      let preceding = rawStem;
      if (isNeg) {
        const h2 = getLastVowel(rawStem).harmony2;
        const negAffix = `m${h2}`;
        baseTokens.push({
          text: negAffix,
          type: 'negation',
          gloss: 'отрицание (-ma/-me)',
        });
        preceding += negAffix;
      }
      const h4 = getLastVowel(preceding).harmony4;
      baseTokens.push({
        text: `m${h4}ş`,
        type: 'affix',
        gloss: 'прошедшее субъективное (-mış)',
      });
      break;
    }

    case 'gelecek': {
      canSoftenGelecekK = true;
      if (isNeg) {
        const h2 = getLastVowel(rawStem).harmony2;
        baseTokens.push({
          text: rawStem,
          type: 'root',
          gloss: 'основа глагола',
        });
        baseTokens.push({
          text: `m${h2}`,
          type: 'negation',
          gloss: 'отрицание (-ma/-me)',
        });
        baseTokens.push({
          text: 'y',
          type: 'buffer',
          gloss: 'буферная согласная',
        });
        baseTokens.push({
          text: `${h2}c${h2}k`,
          type: 'affix',
          gloss: 'будущее время (-acak/-ecek)',
        });
      } else if (rawStem === 'ye' || rawStem === 'de') {
        const narrowed = rawStem === 'ye' ? 'yi' : 'di';
        notes.push(
          `Сужение гласной основы перед -(y)ecek: ${rawStem} → ${narrowed}`,
        );
        baseTokens.push({
          text: narrowed,
          type: 'root',
          gloss: 'основа глагола',
        });
        baseTokens.push({
          text: 'y',
          type: 'buffer',
          gloss: 'буферная согласная',
        });
        baseTokens.push({
          text: 'ecek',
          type: 'affix',
          gloss: 'будущее время (-ecek)',
        });
      } else {
        const h2 = getLastVowel(rawStem).harmony2;
        let activeStem = rawStem;
        if (!endsWithVowel(rawStem) && shouldSoftenTtoD && activeStem.endsWith('t')) {
          activeStem = activeStem.slice(0, -1) + 'd';
          notes.push(`Озвончение основы перед гласной: ${rawStem} → ${activeStem}`);
        }
        baseTokens.push({
          text: activeStem,
          type: 'root',
          gloss: 'основа глагола',
        });
        if (endsWithVowel(rawStem)) {
          baseTokens.push({
            text: 'y',
            type: 'buffer',
            gloss: 'буферная согласная',
          });
        }
        baseTokens.push({
          text: `${h2}c${h2}k`,
          type: 'affix',
          gloss: 'будущее время (-acak/-ecek)',
        });
      }
      break;
    }

    case 'gereklilik': {
      baseTokens.push({ text: rawStem, type: 'root', gloss: 'основа глагола' });
      let preceding = rawStem;
      if (isNeg) {
        const h2 = getLastVowel(rawStem).harmony2;
        const negAffix = `m${h2}`;
        baseTokens.push({
          text: negAffix,
          type: 'negation',
          gloss: 'отрицание (-ma/-me)',
        });
        preceding += negAffix;
      }
      const h2 = getLastVowel(preceding).harmony2;
      const h4 = h2 === 'a' ? 'ı' : 'i';
      baseTokens.push({
        text: `m${h2}l${h4}`,
        type: 'affix',
        gloss: 'долженствование (-malı/-meli)',
      });
      break;
    }

    case 'sart': {
      baseTokens.push({ text: rawStem, type: 'root', gloss: 'основа глагола' });
      let preceding = rawStem;
      if (isNeg) {
        const h2 = getLastVowel(rawStem).harmony2;
        const negAffix = `m${h2}`;
        baseTokens.push({
          text: negAffix,
          type: 'negation',
          gloss: 'отрицание (-ma/-me)',
        });
        preceding += negAffix;
      }
      const h2 = getLastVowel(preceding).harmony2;
      baseTokens.push({
        text: `s${h2}`,
        type: 'affix',
        gloss: 'условное наклонение (-sa/-se)',
      });
      break;
    }
  }

  // Присоединяем личные окончания, вопросительную частицу и составную копулу
  const morphemes: MorphemeToken[] = [...baseTokens];
  const baseText = morphemes.map((t) => t.text).join('');

  if (compoundType === 'none') {
    const isKType = tense === 'gecmis_di' || tense === 'sart';

    if (!isQ) {
      if (isKType) {
        morphemes.push(...buildKTypePersonTokens(baseText, person));
      } else {
        const zRes = buildZTypePersonTokens(baseText, person, {
          allowKSoftening: canSoftenGelecekK,
        });
        if (zRes.softenedPreceding) {
          const lastIdx = morphemes.length - 1;
          morphemes[lastIdx] = {
            ...morphemes[lastIdx],
            text: morphemes[lastIdx].text.slice(0, -1) + 'ğ',
          };
        }
        notes.push(...zRes.notes);
        morphemes.push(...zRes.tokens);
      }
    } else if (isKType) {
      // В k-типе (-dı, -sa) вопросительная частица стоит ПОСЛЕ личного окончания
      const personTokens = buildKTypePersonTokens(baseText, person);
      morphemes.push(...personTokens);
      const fullBeforeQ = morphemes.map((t) => t.text).join('');
      const qVowel = getLastVowel(fullBeforeQ).harmony4;
      morphemes.push({
        text: `m${qVowel}`,
        type: 'question',
        gloss: 'вопросительная частица',
      });
    } else if (person === 'onlar') {
      // onlar + вопрос: -lar/-ler стоит на глаголе, затем mI
      const lar = `l${getLastVowel(baseText).harmony2}r`;
      morphemes.push({
        text: lar,
        type: 'person',
        gloss: VERB_PERSON_GLOSS.onlar,
      });
      const qVowel = getLastVowel(baseText + lar).harmony4;
      morphemes.push({
        text: `m${qVowel}`,
        type: 'question',
        gloss: 'вопросительная частица',
      });
    } else {
      // z-тип + вопрос (ben, sen, o, biz, siz): mI + личное окончание
      const qVowel = getLastVowel(baseText).harmony4;
      const qText = `m${qVowel}`;
      morphemes.push({
        text: qText,
        type: 'question',
        gloss: 'вопросительная частица',
      });
      const zRes = buildZTypePersonTokens(qText, person);
      notes.push(...zRes.notes);
      morphemes.push(...zRes.tokens);
    }
  } else {
    // Составные времена: hikaye (-(y)DI), rivayet (-(y)mIş), sart (-(y)sA)
    let textBeforeCopula = baseText;

    if (person === 'onlar') {
      const lar = `l${getLastVowel(textBeforeCopula).harmony2}r`;
      morphemes.push({
        text: lar,
        type: 'person',
        gloss: VERB_PERSON_GLOSS.onlar,
      });
      textBeforeCopula += lar;
    }

    if (isQ) {
      const qVowel = getLastVowel(textBeforeCopula).harmony4;
      const qText = `m${qVowel}`;
      morphemes.push({
        text: qText,
        type: 'question',
        gloss: 'вопросительная частица',
      });
      textBeforeCopula = qText;
    }

    const needsBufferY = endsWithVowel(textBeforeCopula);
    if (needsBufferY) {
      morphemes.push({
        text: 'y',
        type: 'buffer',
        gloss: 'буферная согласная',
      });
    }

    const copulaHarmony = getLastVowel(textBeforeCopula);
    let copulaText = '';

    if (compoundType === 'hikaye') {
      const rawCopula = `d${copulaHarmony.harmony4}`;
      if (needsBufferY) {
        copulaText = rawCopula;
      } else {
        const res = applyConsonantRules(textBeforeCopula, rawCopula, {
          disableSoftening: true,
        });
        notes.push(...res.appliedRules);
        copulaText = res.affix;
      }
      morphemes.push({
        text: copulaText,
        type: 'affix',
        gloss: 'повествовательное прошедшее (hikâye)',
      });
      if (person !== 'onlar') {
        morphemes.push(...buildKTypePersonTokens(copulaText, person));
      }
    } else if (compoundType === 'rivayet') {
      copulaText = `m${copulaHarmony.harmony4}ş`;
      morphemes.push({
        text: copulaText,
        type: 'affix',
        gloss: 'пересказывательное наклонение (rivayet)',
      });
      if (person !== 'onlar') {
        const zRes = buildZTypePersonTokens(copulaText, person);
        notes.push(...zRes.notes);
        morphemes.push(...zRes.tokens);
      }
    } else {
      copulaText = `s${copulaHarmony.harmony2}`;
      morphemes.push({
        text: copulaText,
        type: 'affix',
        gloss: 'составное условие (şart)',
      });
      if (person !== 'onlar') {
        morphemes.push(...buildKTypePersonTokens(copulaText, person));
      }
    }
  }

  const simpleMeta = SIMPLE_TENSE_META[tense];
  const compoundTitleSuffix: Record<
    Exclude<CompoundType, 'none'>,
    { ru: string; tr: string }
  > = {
    hikaye: { ru: ' + прошедшее (Hikâye)', tr: ' + Hikâye' },
    rivayet: { ru: ' + пересказ (Rivayet)', tr: ' + Rivayet' },
    sart: { ru: ' + условие (Şart)', tr: ' + Şart' },
  };

  const titleRu =
    compoundType === 'none'
      ? simpleMeta.titleRu
      : simpleMeta.titleRu + compoundTitleSuffix[compoundType].ru;
  const titleTr =
    compoundType === 'none'
      ? simpleMeta.titleTr
      : simpleMeta.titleTr + compoundTitleSuffix[compoundType].tr;

  const relatedTopicId =
    compoundType !== 'none' ? 'compound-tenses-hikaye' : simpleMeta.topicId;

  return {
    tense,
    compoundType,
    person,
    polarity,
    titleRu,
    titleTr,
    surface: joinVerbMorphemes(morphemes),
    morphemes,
    formula: buildVerbFormula(tense, compoundType, person, polarity),
    translationRu: buildVerbTranslationRu(
      verb,
      tense,
      compoundType,
      person,
      polarity,
    ),
    relatedTopicId,
    notes: notes.length > 0 ? uniqueStrings(notes) : undefined,
  };
}
