import type { MorphemeToken } from './grammar';

export type VowelHarmony2 = 'a' | 'e';
export type VowelHarmony4 = 'ı' | 'i' | 'u' | 'ü';

export type PossessivePerson =
  | 'none'
  | 'benim'
  | 'senin'
  | 'onun'
  | 'bizim'
  | 'sizin'
  | 'onlarin';

export type NounCaseId =
  | 'nominative'
  | 'accusative'
  | 'dative'
  | 'locative'
  | 'ablative'
  | 'genitive';

export interface NounDeclensionOptions {
  plural: boolean;
  possessive: PossessivePerson;
}

export interface ConsonantRuleResult {
  stem: string;
  affix: string;
  appliedRules: string[];
}

export interface NounCaseResult {
  caseId: NounCaseId;
  caseNameRu: string;
  caseNameTr: string;
  caseQuestion: string;
  surface: string;
  morphemes: MorphemeToken[];
  appliedRules: string[];
}

export interface NounSimulationResult {
  inputWord: string;
  normalizedWord: string;
  options: NounDeclensionOptions;
  cases: NounCaseResult[];
}

export type VerbPerson = 'ben' | 'sen' | 'o' | 'biz' | 'siz' | 'onlar';

export type Polarity =
  | 'affirmative'
  | 'negative'
  | 'question'
  | 'negativeQuestion';

export type SimpleTenseId =
  | 'simdiki'
  | 'genis'
  | 'gecmis_di'
  | 'gecmis_mis'
  | 'gelecek'
  | 'gereklilik'
  | 'sart';

export type CompoundType = 'none' | 'hikaye' | 'rivayet' | 'sart';

export interface VerbPreset {
  id: string;
  infinitive: string;
  stem: string;
  translationRu: string;
  isGenisException?: boolean;
  genisAoristVowel?: 'a' | 'e' | 'ı' | 'i' | 'u' | 'ü';
  stemSofteningTtoD?: boolean;
  narrowingStem?: string;
  note?: string;
}

export interface TenseMatrixCell {
  tense: SimpleTenseId;
  compoundType: CompoundType;
  person: VerbPerson;
  polarity: Polarity;
  titleRu: string;
  titleTr: string;
  surface: string;
  morphemes: MorphemeToken[];
  formula: MorphemeToken[];
  translationRu: string;
  relatedTopicId: string;
  notes?: string[];
}
