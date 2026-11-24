export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

export type MorphemeType =
  | 'root'
  | 'buffer'
  | 'affix'
  | 'person'
  | 'negation'
  | 'question';

export interface MorphemeToken {
  text: string;
  type: MorphemeType;
  gloss: string;
}

export interface InteractiveWord {
  surface: string;
  morphemes: MorphemeToken[];
}

export interface ExampleSentence {
  id: string;
  tr: string;
  ru: string;
  annotatedWords: InteractiveWord[];
}

export interface ContrastItem {
  title: string;
  explanation: string;
  exampleTr: string;
  exampleRu: string;
  relatedTopicId?: string;
}

export interface MiniCheckQuestion {
  id: string;
  prompt: string;
  type: 'choice' | 'input';
  options?: string[];
  correctAnswer: string;
  acceptedAnswers?: string[];
  explanation: string;
}

export interface ConjugationTable {
  affirmative: Record<string, MorphemeToken[]>;
  negative: Record<string, MorphemeToken[]>;
  question: Record<string, MorphemeToken[]>;
  negativeQuestion?: Record<string, MorphemeToken[]>;
}

export interface GrammarTopic {
  id: string;
  sectionId: string;
  titleRu: string;
  titleTr?: string;
  level: CEFRLevel;
  levels?: CEFRLevel[];
  affixes: string[];
  summary: string;
  formula: MorphemeToken[];
  conjugationTable?: ConjugationTable;
  examples: ExampleSentence[];
  doNotConfuse?: {
    title: string;
    items: [ContrastItem, ContrastItem];
  };
  miniCheck: MiniCheckQuestion[];
  isDraft?: boolean;
}

export interface TopicMeta {
  id: string;
  sectionId: string;
  titleRu: string;
  titleTr?: string;
  level: CEFRLevel;
  levels?: CEFRLevel[];
  affixes: string[];
  keywords?: string[];
  summary?: string;
  formula?: MorphemeToken[];
  isDraft: boolean;
}

export interface Section {
  id: string;
  order: number;
  titleRu: string;
  titleTr?: string;
  topics: TopicMeta[];
}
