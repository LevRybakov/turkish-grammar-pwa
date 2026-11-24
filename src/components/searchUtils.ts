const TURKISH_CHAR_MAP: Record<string, string> = {
  ğ: 'g',
  ı: 'i',
  ö: 'o',
  ü: 'u',
  ş: 's',
  ç: 'c',
  â: 'a',
  î: 'i',
  û: 'u',
};

/**
 * Normalizes Turkish and Russian strings for forgiving reverse search.
 * Lowercases using tr-TR locale, maps Turkish diacritics to ASCII,
 * strips hyphens/parentheses/combining dots, and trims outer whitespace.
 *
 * Examples:
 * - "-dığı" -> "digi"
 * - "şart" -> "sart"
 * - "-(y)ebil" -> "yebil" (matches "ebil")
 * - "-ken" -> "ken"
 */
export function normalizeTurkishSearch(input: string): string {
  const lowered = input.toLocaleLowerCase('tr-TR').replace(/\u0307/g, '');
  let mapped = '';
  for (const ch of lowered) {
    mapped += TURKISH_CHAR_MAP[ch] ?? ch;
  }
  return mapped
    .replace(/[-()[\]]+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Normalizes a Turkish answer string for exact-match checking in quizzes.
 * Preserves diacritics and uses tr-TR lowercase rules.
 */
export function normalizeTurkishAnswer(input: string): string {
  return input
    .toLocaleLowerCase('tr-TR')
    .replace(/\u0307/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
