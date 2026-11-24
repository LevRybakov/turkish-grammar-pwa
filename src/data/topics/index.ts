import type { GrammarTopic } from '../../types';
import { TOPICS_A1 } from './topicsA1';
import { TOPICS_A2 } from './topicsA2';
import { TOPICS_B1 } from './topicsB1';
import { TOPICS_B2 } from './topicsB2';

const ALL_FULL_TOPICS_LIST: GrammarTopic[] = [
  ...TOPICS_A1,
  ...TOPICS_A2,
  ...TOPICS_B1,
  ...TOPICS_B2,
];

export const FULL_TOPICS: Record<string, GrammarTopic> = Object.fromEntries(
  ALL_FULL_TOPICS_LIST.map((topic) => [topic.id, topic]),
);

export function getTopicById(id: string): GrammarTopic | undefined {
  return FULL_TOPICS[id];
}

export { TOPICS_A1, TOPICS_A2, TOPICS_B1, TOPICS_B2 };
