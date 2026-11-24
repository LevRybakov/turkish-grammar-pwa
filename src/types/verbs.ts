export type VerbCaseTag = '-a' | '-ı' | '-dan' | '-da' | 'ile';

export interface VerbGovernmentEntry {
  id: string;
  verbTr: string;
  caseTag: VerbCaseTag;
  caseLabelRu: string;
  translationRu: string;
  exampleTr: string;
  highlightedSegment: string;
  exampleRu: string;
  note?: string;
  isTrap: boolean;
}
