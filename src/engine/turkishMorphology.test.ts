import { describe, it, expect } from 'vitest';
import {
  toTurkishLower,
  getLastVowel,
  applyConsonantRules,
  declineNoun,
  conjugateVerb,
} from './turkishMorphology';
import type { NounCaseId, VerbPreset } from '../types/morphology';

function getCase(
  word: string,
  caseId: NounCaseId,
  options: { plural?: boolean; possessive?: Parameters<typeof declineNoun>[1]['possessive'] } = {},
) {
  const result = declineNoun(word, {
    plural: options.plural ?? false,
    possessive: options.possessive ?? 'none',
  });
  const found = result.cases.find((c) => c.caseId === caseId);
  if (!found) {
    throw new Error(`Case ${caseId} not found for ${word}`);
  }
  return found;
}

const VERBS: Record<string, VerbPreset> = {
  gelmek: {
    id: 'gelmek',
    infinitive: 'gelmek',
    stem: 'gel',
    translationRu: 'приходить',
    isGenisException: true,
    genisAoristVowel: 'i',
  },
  gitmek: {
    id: 'gitmek',
    infinitive: 'gitmek',
    stem: 'git',
    translationRu: 'идти, уходить',
    stemSofteningTtoD: true,
  },
  yapmak: {
    id: 'yapmak',
    infinitive: 'yapmak',
    stem: 'yap',
    translationRu: 'делать',
  },
  okumak: {
    id: 'okumak',
    infinitive: 'okumak',
    stem: 'oku',
    translationRu: 'читать',
  },
  gormek: {
    id: 'gormek',
    infinitive: 'görmek',
    stem: 'gör',
    translationRu: 'видеть',
    isGenisException: true,
    genisAoristVowel: 'ü',
  },
  yemek: {
    id: 'yemek',
    infinitive: 'yemek',
    stem: 'ye',
    translationRu: 'есть',
    narrowingStem: 'yi',
  },
  demek: {
    id: 'demek',
    infinitive: 'demek',
    stem: 'de',
    translationRu: 'сказать',
    narrowingStem: 'di',
  },
  beklemek: {
    id: 'beklemek',
    infinitive: 'beklemek',
    stem: 'bekle',
    translationRu: 'ждать',
    narrowingStem: 'bekli',
  },
  calismak: {
    id: 'calismak',
    infinitive: 'çalışmak',
    stem: 'çalış',
    translationRu: 'работать',
  },
  almak: {
    id: 'almak',
    infinitive: 'almak',
    stem: 'al',
    translationRu: 'брать, покупать',
    isGenisException: true,
  },
};

describe('toTurkishLower', () => {
  it('корректно приводит турецкие I → ı и İ → i', () => {
    expect(toTurkishLower('İstanbul')).toBe('istanbul');
    expect(toTurkishLower('Irmak')).toBe('ırmak');
    expect(toTurkishLower('IŞIK')).toBe('ışık');
    expect(toTurkishLower('İZMİR')).toBe('izmir');
  });
});

describe('getLastVowel', () => {
  it('определяет все 4 типа гармонии гласных (ev, araba, yol, göz)', () => {
    expect(getLastVowel('ev')).toEqual({
      vowel: 'e',
      harmony2: 'e',
      harmony4: 'i',
      isSoftLoanword: false,
    });
    expect(getLastVowel('araba')).toEqual({
      vowel: 'a',
      harmony2: 'a',
      harmony4: 'ı',
      isSoftLoanword: false,
    });
    expect(getLastVowel('yol')).toEqual({
      vowel: 'o',
      harmony2: 'a',
      harmony4: 'u',
      isSoftLoanword: false,
    });
    expect(getLastVowel('göz')).toEqual({
      vowel: 'ö',
      harmony2: 'e',
      harmony4: 'ü',
      isSoftLoanword: false,
    });
  });

  it('распознаёт мягкую гармонию в заимствованиях (saat, kalp, hayal, rol, alkol)', () => {
    expect(getLastVowel('saat')).toEqual({
      vowel: 'a',
      harmony2: 'e',
      harmony4: 'i',
      isSoftLoanword: true,
    });
    expect(getLastVowel('kalp')).toEqual({
      vowel: 'a',
      harmony2: 'e',
      harmony4: 'i',
      isSoftLoanword: true,
    });
    expect(getLastVowel('hayal')).toEqual({
      vowel: 'a',
      harmony2: 'e',
      harmony4: 'i',
      isSoftLoanword: true,
    });
    expect(getLastVowel('rol')).toEqual({
      vowel: 'o',
      harmony2: 'e',
      harmony4: 'ü',
      isSoftLoanword: true,
    });
    expect(getLastVowel('alkol')).toEqual({
      vowel: 'o',
      harmony2: 'e',
      harmony4: 'ü',
      isSoftLoanword: true,
    });
  });

  it('учитывает конечный сегмент для сложных слов с мягкими заимствованиями', () => {
    expect(getLastVowel('başrol').harmony4).toBe('ü');
    expect(getLastVowel('başrol').isSoftLoanword).toBe(true);
    expect(getLastVowel('otokontrol').harmony4).toBe('ü');
    expect(getLastVowel('otokontrol').harmony2).toBe('e');
  });

  it('возвращает vowel: null для строки без гласных', () => {
    expect(getLastVowel('tr')).toEqual({
      vowel: null,
      harmony2: 'e',
      harmony4: 'i',
      isSoftLoanword: false,
    });
  });
});

describe('applyConsonantRules', () => {
  it('озвончает p→b, ç→c, k→ğ, nk→ng перед гласным аффиксом', () => {
    const kitap = applyConsonantRules('kitap', 'ı');
    expect(kitap.stem).toBe('kitab');
    expect(kitap.affix).toBe('ı');
    expect(kitap.appliedRules).toContain('озвончение p → b');

    const agac = applyConsonantRules('ağaç', 'ı');
    expect(agac.stem).toBe('ağac');
    expect(agac.appliedRules).toContain('озвончение ç → c');

    const sokak = applyConsonantRules('sokak', 'ı');
    expect(sokak.stem).toBe('sokağ');
    expect(sokak.appliedRules).toContain('озвончение k → ğ');

    const renk = applyConsonantRules('renk', 'i');
    expect(renk.stem).toBe('reng');
    expect(renk.appliedRules).toContain('озвончение nk → ng');
  });

  it('оглушает начальную согласную аффикса по Fıstıkçı Şahap (d→t, c→ç, g→k)', () => {
    const dolap = applyConsonantRules('dolap', 'da');
    expect(dolap.affix).toBe('ta');
    expect(dolap.appliedRules).toContain('Fıstıkçı Şahap: d → t');

    const turkce = applyConsonantRules('türk', 'ce');
    expect(turkce.affix).toBe('çe');
    expect(turkce.appliedRules).toContain('Fıstıkçı Şahap: c → ç');

    const bitki = applyConsonantRules('bit', 'gi');
    expect(bitki.affix).toBe('ki');
    expect(bitki.appliedRules).toContain('Fıstıkçı Şahap: g → k');
  });

  it('не озвончает слова-исключения (at, süt, hukuk, top, saat) и уважает disableSoftening', () => {
    expect(applyConsonantRules('at', 'ı').stem).toBe('at');
    expect(applyConsonantRules('süt', 'ü').stem).toBe('süt');
    expect(applyConsonantRules('hukuk', 'u').stem).toBe('hukuk');
    expect(applyConsonantRules('top', 'u').stem).toBe('top');
    expect(applyConsonantRules('saat', 'i').stem).toBe('saat');
    expect(
      applyConsonantRules('kitap', 'ı', { disableSoftening: true }).stem,
    ).toBe('kitap');
  });
});

describe('declineNoun — гармония гласных и падежи', () => {
  it('склоняет ev (передний негубной: e/i) по всем 6 падежам', () => {
    expect(getCase('ev', 'nominative').surface).toBe('ev');
    expect(getCase('ev', 'accusative').surface).toBe('evi');
    expect(getCase('ev', 'dative').surface).toBe('eve');
    expect(getCase('ev', 'locative').surface).toBe('evde');
    expect(getCase('ev', 'ablative').surface).toBe('evden');
    expect(getCase('ev', 'genitive').surface).toBe('evin');
  });

  it('склоняет araba (задний негубной + буферы y/n после гласной)', () => {
    expect(getCase('araba', 'accusative').surface).toBe('arabayı');
    expect(getCase('araba', 'dative').surface).toBe('arabaya');
    expect(getCase('araba', 'locative').surface).toBe('arabada');
    expect(getCase('araba', 'ablative').surface).toBe('arabadan');
    expect(getCase('araba', 'genitive').surface).toBe('arabanın');
  });

  it('склоняет yol (задний губной: a/u) и göz (передний губной: e/ü)', () => {
    expect(getCase('yol', 'accusative').surface).toBe('yolu');
    expect(getCase('yol', 'dative').surface).toBe('yola');
    expect(getCase('yol', 'genitive').surface).toBe('yolun');

    expect(getCase('göz', 'accusative').surface).toBe('gözü');
    expect(getCase('göz', 'dative').surface).toBe('göze');
    expect(getCase('göz', 'genitive').surface).toBe('gözün');
  });
});

describe('declineNoun — чередования согласных', () => {
  it('применяет озвончение в падежах: kitap, ağaç, sokak, dolap, renk', () => {
    expect(getCase('kitap', 'accusative').surface).toBe('kitabı');
    expect(getCase('ağaç', 'accusative').surface).toBe('ağacı');
    expect(getCase('sokak', 'accusative').surface).toBe('sokağı');
    expect(getCase('dolap', 'accusative').surface).toBe('dolabı');
    expect(getCase('renk', 'accusative').surface).toBe('rengi');
  });

  it('применяет оглушение Fıstıkçı Şahap: dolap, sınıf, iş, kitap, ağaç', () => {
    expect(getCase('dolap', 'locative').surface).toBe('dolapta');
    expect(getCase('sınıf', 'ablative').surface).toBe('sınıftan');
    expect(getCase('iş', 'locative').surface).toBe('işte');
    expect(getCase('kitap', 'locative').surface).toBe('kitapta');
    expect(getCase('ağaç', 'ablative').surface).toBe('ağaçtan');
  });

  it('сохраняет глухую согласную в исключениях без озвончения: at, süt, hukuk, top', () => {
    expect(getCase('at', 'accusative').surface).toBe('atı');
    expect(getCase('süt', 'accusative').surface).toBe('sütü');
    expect(getCase('hukuk', 'accusative').surface).toBe('hukuku');
    expect(getCase('top', 'accusative').surface).toBe('topu');
  });
});

describe('declineNoun — мягкая гармония заимствований', () => {
  it('склоняет saat без озвончения и с мягкой гармонией (saati, saatte)', () => {
    expect(getCase('saat', 'accusative').surface).toBe('saati');
    expect(getCase('saat', 'dative').surface).toBe('saate');
    expect(getCase('saat', 'locative').surface).toBe('saatte');
    expect(getCase('saat', 'ablative').surface).toBe('saatten');
    expect(getCase('saat', 'nominative', { plural: true }).surface).toBe(
      'saatler',
    );
  });

  it('склоняет kalp с озвончением p→b И мягкой гармонией (kalbi, kalbe, kalpte, kalpten, kalbin)', () => {
    expect(getCase('kalp', 'accusative').surface).toBe('kalbi');
    expect(getCase('kalp', 'dative').surface).toBe('kalbe');
    expect(getCase('kalp', 'locative').surface).toBe('kalpte');
    expect(getCase('kalp', 'ablative').surface).toBe('kalpten');
    expect(getCase('kalp', 'genitive').surface).toBe('kalbin');
  });

  it('склоняет hayal и rol с мягкой гармонией (hayali, rolü)', () => {
    expect(getCase('hayal', 'accusative').surface).toBe('hayali');
    expect(getCase('hayal', 'dative').surface).toBe('hayale');
    expect(getCase('rol', 'accusative').surface).toBe('rolü');
    expect(getCase('rol', 'dative').surface).toBe('role');
    expect(getCase('rol', 'genitive').surface).toBe('rolün');
  });
});

describe('declineNoun — выпадение узкой гласной и особое слово su', () => {
  it('выпадает узкая гласная в burun только перед гласным аффиксом на основе', () => {
    expect(getCase('burun', 'nominative', { possessive: 'benim' }).surface).toBe(
      'burnum',
    );
    expect(getCase('burun', 'accusative').surface).toBe('burnu');
    expect(getCase('burun', 'locative').surface).toBe('burunda');
    expect(
      getCase('burun', 'nominative', { plural: true, possessive: 'benim' })
        .surface,
    ).toBe('burunlarım');
  });

  it('выпадает узкая гласная в şehir, ağız, isim, vakit и kayıp', () => {
    expect(getCase('şehir', 'accusative').surface).toBe('şehri');
    expect(getCase('şehir', 'nominative', { plural: true }).surface).toBe(
      'şehirler',
    );
    expect(getCase('ağız', 'accusative').surface).toBe('ağzı');
    expect(getCase('isim', 'nominative', { possessive: 'benim' }).surface).toBe(
      'ismim',
    );
    expect(getCase('vakit', 'accusative').surface).toBe('vakti');
    expect(getCase('vakit', 'locative').surface).toBe('vakitte');
    expect(getCase('kayıp', 'accusative').surface).toBe('kaybı');
  });

  it('склоняет особое слово su с буфером y и буфером n после 3-го лица', () => {
    expect(getCase('su', 'accusative').surface).toBe('suyu');
    expect(getCase('su', 'genitive').surface).toBe('suyun');
    expect(getCase('su', 'dative').surface).toBe('suya');
    expect(getCase('su', 'nominative', { possessive: 'benim' }).surface).toBe(
      'suyum',
    );
    expect(getCase('su', 'ablative', { possessive: 'onun' }).surface).toBe(
      'suyundan',
    );
    expect(getCase('su', 'nominative', { possessive: 'onlarin' }).surface).toBe(
      'suları',
    );
  });
});

describe('declineNoun — сложные морфемные цепочки и турецкий регистр', () => {
  it('строит сложные цепочки: evlerimde, arabasından, kitaplarımızı', () => {
    const evlerimde = getCase('ev', 'locative', {
      plural: true,
      possessive: 'benim',
    });
    expect(evlerimde.surface).toBe('evlerimde');
    expect(evlerimde.morphemes.map((m) => m.text)).toEqual([
      'ev',
      'ler',
      'im',
      'de',
    ]);

    const arabasindan = getCase('araba', 'ablative', {
      plural: false,
      possessive: 'onun',
    });
    expect(arabasindan.surface).toBe('arabasından');
    expect(arabasindan.morphemes.map((m) => m.text)).toEqual([
      'araba',
      's',
      'ı',
      'n',
      'dan',
    ]);
    expect(arabasindan.morphemes.map((m) => m.type)).toEqual([
      'root',
      'buffer',
      'person',
      'buffer',
      'affix',
    ]);

    const kitaplarimizi = getCase('kitap', 'accusative', {
      plural: true,
      possessive: 'bizim',
    });
    expect(kitaplarimizi.surface).toBe('kitaplarımızı');
    expect(kitaplarimizi.morphemes.map((m) => m.text)).toEqual([
      'kitap',
      'lar',
      'ımız',
      'ı',
    ]);
  });

  it('не удваивает -lar/-ler при plural: true + possessive: onlarin', () => {
    const withPlural = getCase('ev', 'dative', {
      plural: true,
      possessive: 'onlarin',
    });
    const withoutPlural = getCase('ev', 'dative', {
      plural: false,
      possessive: 'onlarin',
    });
    expect(withPlural.surface).toBe('evlerine');
    expect(withoutPlural.surface).toBe('evlerine');
  });

  it('корректно обрабатывает заглавные турецкие буквы İstanbul и Irmak', () => {
    expect(getCase('İstanbul', 'locative').surface).toBe('istanbulda');
    expect(getCase('Irmak', 'accusative').surface).toBe('ırmağı');
  });

  it('гарантирует равенство склейки морфем и surface без дублей в appliedRules', () => {
    const res = declineNoun('kalp', { plural: false, possessive: 'onun' });
    for (const c of res.cases) {
      expect(c.morphemes.map((m) => m.text).join('')).toBe(c.surface);
      expect(new Set(c.appliedRules).size).toBe(c.appliedRules.length);
    }
  });
});

describe('conjugateVerb — простые времена', () => {
  it('спрягает Şimdiki zaman: geliyorum, gelmiyor, geliyor muyum, geliyorlar mı', () => {
    expect(
      conjugateVerb(VERBS.gelmek, 'simdiki', 'none', 'ben', 'affirmative')
        .surface,
    ).toBe('geliyorum');
    expect(
      conjugateVerb(VERBS.gelmek, 'simdiki', 'none', 'o', 'negative').surface,
    ).toBe('gelmiyor');
    expect(
      conjugateVerb(VERBS.gelmek, 'simdiki', 'none', 'ben', 'question').surface,
    ).toBe('geliyor muyum');
    expect(
      conjugateVerb(VERBS.gelmek, 'simdiki', 'none', 'onlar', 'question')
        .surface,
    ).toBe('geliyorlar mı');
  });

  it('обрабатывает озвончение gitmek и сужение гласной в yemek, demek, beklemek и отрицании перед -yor', () => {
    expect(
      conjugateVerb(VERBS.gitmek, 'simdiki', 'none', 'o', 'affirmative')
        .surface,
    ).toBe('gidiyor');
    expect(
      conjugateVerb(VERBS.gitmek, 'simdiki', 'none', 'o', 'negative').surface,
    ).toBe('gitmiyor');
    expect(
      conjugateVerb(VERBS.yemek, 'simdiki', 'none', 'o', 'affirmative').surface,
    ).toBe('yiyor');
    expect(
      conjugateVerb(VERBS.yemek, 'simdiki', 'none', 'o', 'negative').surface,
    ).toBe('yemiyor');
    expect(
      conjugateVerb(VERBS.beklemek, 'simdiki', 'none', 'o', 'affirmative')
        .surface,
    ).toBe('bekliyor');
    expect(
      conjugateVerb(VERBS.beklemek, 'simdiki', 'none', 'o', 'negative').surface,
    ).toBe('beklemiyor');
    expect(
      conjugateVerb(VERBS.okumak, 'simdiki', 'none', 'o', 'negative').surface,
    ).toBe('okumuyor');
    expect(
      conjugateVerb(VERBS.gormek, 'simdiki', 'none', 'o', 'negative').surface,
    ).toBe('görmüyor');
  });

  it('спрягает Geniş zaman: регулярные, исключения, многосложные, на гласную', () => {
    expect(
      conjugateVerb(VERBS.yapmak, 'genis', 'none', 'o', 'affirmative').surface,
    ).toBe('yapar');
    expect(
      conjugateVerb(VERBS.gitmek, 'genis', 'none', 'o', 'affirmative').surface,
    ).toBe('gider');
    expect(
      conjugateVerb(VERBS.gelmek, 'genis', 'none', 'o', 'affirmative').surface,
    ).toBe('gelir');
    expect(
      conjugateVerb(VERBS.almak, 'genis', 'none', 'o', 'affirmative').surface,
    ).toBe('alır');
    expect(
      conjugateVerb(VERBS.gormek, 'genis', 'none', 'o', 'affirmative').surface,
    ).toBe('görür');
    expect(
      conjugateVerb(VERBS.calismak, 'genis', 'none', 'o', 'affirmative')
        .surface,
    ).toBe('çalışır');
    expect(
      conjugateVerb(VERBS.okumak, 'genis', 'none', 'o', 'affirmative').surface,
    ).toBe('okur');
    expect(
      conjugateVerb(VERBS.yemek, 'genis', 'none', 'o', 'affirmative').surface,
    ).toBe('yer');
  });

  it('спрягает отрицание и отрицательный вопрос в Geniş zaman', () => {
    expect(
      conjugateVerb(VERBS.gelmek, 'genis', 'none', 'ben', 'negative').surface,
    ).toBe('gelmem');
    expect(
      conjugateVerb(VERBS.gelmek, 'genis', 'none', 'sen', 'negative').surface,
    ).toBe('gelmezsin');
    expect(
      conjugateVerb(VERBS.gelmek, 'genis', 'none', 'biz', 'negative').surface,
    ).toBe('gelmeyiz');
    expect(
      conjugateVerb(VERBS.gelmek, 'genis', 'none', 'onlar', 'negative').surface,
    ).toBe('gelmezler');
    expect(
      conjugateVerb(VERBS.gelmek, 'genis', 'none', 'ben', 'negativeQuestion')
        .surface,
    ).toBe('gelmez miyim');
    expect(
      conjugateVerb(VERBS.gelmek, 'genis', 'none', 'onlar', 'negativeQuestion')
        .surface,
    ).toBe('gelmezler mi');
    expect(
      conjugateVerb(VERBS.gelmek, 'genis', 'none', 'onlar', 'question').surface,
    ).toBe('gelirler mi');
  });

  it('спрягает Geçmiş -di (k-тип и Fıstıkçı Şahap) и Geçmiş -miş', () => {
    expect(
      conjugateVerb(VERBS.gitmek, 'gecmis_di', 'none', 'o', 'affirmative')
        .surface,
    ).toBe('gitti');
    expect(
      conjugateVerb(VERBS.gelmek, 'gecmis_di', 'none', 'sen', 'question')
        .surface,
    ).toBe('geldin mi');
    expect(
      conjugateVerb(VERBS.gelmek, 'gecmis_di', 'none', 'onlar', 'question')
        .surface,
    ).toBe('geldiler mi');
    expect(
      conjugateVerb(VERBS.gelmek, 'gecmis_mis', 'none', 'ben', 'affirmative')
        .surface,
    ).toBe('gelmişim');
    expect(
      conjugateVerb(VERBS.gelmek, 'gecmis_mis', 'none', 'onlar', 'question')
        .surface,
    ).toBe('gelmişler mi');
  });

  it('спрягает Gelecek zaman с озвончением k→ğ и сужением ye/de → yiyecek/diyecek', () => {
    expect(
      conjugateVerb(VERBS.gelmek, 'gelecek', 'none', 'ben', 'affirmative')
        .surface,
    ).toBe('geleceğim');
    expect(
      conjugateVerb(VERBS.gelmek, 'gelecek', 'none', 'biz', 'affirmative')
        .surface,
    ).toBe('geleceğiz');
    expect(
      conjugateVerb(VERBS.yapmak, 'gelecek', 'none', 'ben', 'affirmative')
        .surface,
    ).toBe('yapacağım');
    expect(
      conjugateVerb(VERBS.gitmek, 'gelecek', 'none', 'o', 'affirmative')
        .surface,
    ).toBe('gidecek');
    expect(
      conjugateVerb(VERBS.yemek, 'gelecek', 'none', 'o', 'affirmative').surface,
    ).toBe('yiyecek');
    expect(
      conjugateVerb(VERBS.demek, 'gelecek', 'none', 'o', 'affirmative').surface,
    ).toBe('diyecek');
    expect(
      conjugateVerb(VERBS.beklemek, 'gelecek', 'none', 'o', 'affirmative')
        .surface,
    ).toBe('bekleyecek');
    expect(
      conjugateVerb(VERBS.gelmek, 'gelecek', 'none', 'onlar', 'question')
        .surface,
    ).toBe('gelecekler mi');
  });

  it('спрягает Gereklilik (-malı) и Şart (-sa)', () => {
    expect(
      conjugateVerb(VERBS.gelmek, 'gereklilik', 'none', 'ben', 'affirmative')
        .surface,
    ).toBe('gelmeliyim');
    expect(
      conjugateVerb(VERBS.gelmek, 'gereklilik', 'none', 'onlar', 'question')
        .surface,
    ).toBe('gelmeliler mi');
    expect(
      conjugateVerb(VERBS.gelmek, 'sart', 'none', 'biz', 'affirmative').surface,
    ).toBe('gelsek');
    expect(
      conjugateVerb(VERBS.gelmek, 'sart', 'none', 'onlar', 'question').surface,
    ).toBe('gelseler mi');
  });
});

describe('conjugateVerb — составные времена и метаданные', () => {
  it('спрягает Hikâye (-dı): geliyordu, geliyor muydum, gelmiyor muydum, geliyorlar mıydı, geldi miydim', () => {
    expect(
      conjugateVerb(VERBS.gelmek, 'simdiki', 'hikaye', 'o', 'affirmative')
        .surface,
    ).toBe('geliyordu');
    expect(
      conjugateVerb(VERBS.gelmek, 'simdiki', 'hikaye', 'ben', 'question')
        .surface,
    ).toBe('geliyor muydum');
    expect(
      conjugateVerb(
        VERBS.gelmek,
        'simdiki',
        'hikaye',
        'ben',
        'negativeQuestion',
      ).surface,
    ).toBe('gelmiyor muydum');
    expect(
      conjugateVerb(VERBS.gelmek, 'simdiki', 'hikaye', 'onlar', 'question')
        .surface,
    ).toBe('geliyorlar mıydı');
    expect(
      conjugateVerb(VERBS.gelmek, 'gecmis_di', 'hikaye', 'ben', 'question')
        .surface,
    ).toBe('geldi miydim');
    expect(
      conjugateVerb(VERBS.gelmek, 'gecmis_mis', 'hikaye', 'o', 'affirmative')
        .surface,
    ).toBe('gelmişti');
    expect(
      conjugateVerb(VERBS.gelmek, 'gelecek', 'hikaye', 'o', 'affirmative')
        .surface,
    ).toBe('gelecekti');
  });

  it('спрягает Rivayet (-mış) и составное Şart (-sa)', () => {
    expect(
      conjugateVerb(VERBS.gelmek, 'simdiki', 'rivayet', 'o', 'affirmative')
        .surface,
    ).toBe('geliyormuş');
    expect(
      conjugateVerb(VERBS.gelmek, 'simdiki', 'rivayet', 'ben', 'question')
        .surface,
    ).toBe('geliyor muymuşum');
    expect(
      conjugateVerb(VERBS.gelmek, 'simdiki', 'sart', 'o', 'affirmative')
        .surface,
    ).toBe('geliyorsa');
    expect(
      conjugateVerb(VERBS.gelmek, 'simdiki', 'sart', 'ben', 'question').surface,
    ).toBe('geliyor muysam');
  });

  it('возвращает канонический relatedTopicId, непустую formula и русский перевод', () => {
    const simpleCell = conjugateVerb(
      VERBS.gelmek,
      'simdiki',
      'none',
      'ben',
      'affirmative',
    );
    expect(simpleCell.relatedTopicId).toBe('simdiki-zaman');
    expect(simpleCell.formula.length).toBeGreaterThan(0);
    expect(simpleCell.translationRu).toContain('приходить');

    expect(
      conjugateVerb(VERBS.gelmek, 'genis', 'none', 'o', 'affirmative')
        .relatedTopicId,
    ).toBe('genis-zaman');
    expect(
      conjugateVerb(VERBS.gelmek, 'gecmis_di', 'none', 'o', 'affirmative')
        .relatedTopicId,
    ).toBe('gecmis-zaman-di-mis');
    expect(
      conjugateVerb(VERBS.gelmek, 'gecmis_mis', 'none', 'o', 'affirmative')
        .relatedTopicId,
    ).toBe('gecmis-zaman-di-mis');
    expect(
      conjugateVerb(VERBS.gelmek, 'gelecek', 'none', 'o', 'affirmative')
        .relatedTopicId,
    ).toBe('gelecek-zaman');
    expect(
      conjugateVerb(VERBS.gelmek, 'gereklilik', 'none', 'o', 'affirmative')
        .relatedTopicId,
    ).toBe('necessity-mali');
    expect(
      conjugateVerb(VERBS.gelmek, 'sart', 'none', 'o', 'affirmative')
        .relatedTopicId,
    ).toBe('conditional-sa');
    expect(
      conjugateVerb(VERBS.gelmek, 'simdiki', 'hikaye', 'o', 'affirmative')
        .relatedTopicId,
    ).toBe('compound-tenses-hikaye');
  });
});
