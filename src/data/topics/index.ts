import type { GrammarTopic } from '../../types';
import { TOPICS_A1 } from './topicsA1';
import { TOPICS_A2 } from './topicsA2';
import { TOPICS_B1 } from './topicsB1';
import { TOPICS_B2 } from './topicsB2';
import { TOPICS_EXTRA_1 } from './topicsExtra1';
import { TOPICS_EXTRA_2 } from './topicsExtra2';
import { TOPICS_EXTRA_3 } from './topicsExtra3';
import { TOPICS_EXTRA_4 } from './topicsExtra4';

const ALL_FULL_TOPICS_LIST: GrammarTopic[] = [
  ...TOPICS_A1,
  ...TOPICS_A2,
  ...TOPICS_B1,
  ...TOPICS_B2,
  ...TOPICS_EXTRA_1,
  ...TOPICS_EXTRA_2,
  ...TOPICS_EXTRA_3,
  ...TOPICS_EXTRA_4,
];

export const FULL_TOPICS: Record<string, GrammarTopic> = Object.fromEntries(
  ALL_FULL_TOPICS_LIST.map((topic) => [topic.id, topic]),
);

export function getTopicById(id: string): GrammarTopic | undefined {
  return FULL_TOPICS[id];
}

export {
  TOPICS_A1,
  TOPICS_A2,
  TOPICS_B1,
  TOPICS_B2,
  TOPICS_EXTRA_1,
  TOPICS_EXTRA_2,
  TOPICS_EXTRA_3,
  TOPICS_EXTRA_4,
};
