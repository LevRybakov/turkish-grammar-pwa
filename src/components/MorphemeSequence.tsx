import type { MorphemeToken } from '../types/grammar';
import { MORPHEME_COLORS } from '../constants/morphemeColors';

export interface MorphemeSequenceProps {
  tokens: MorphemeToken[];
  mode?: 'formula' | 'word';
  showGloss?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const FORMULA_PILL_SIZES: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base',
};

const WORD_TEXT_SIZES: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

export function MorphemeSequence({
  tokens,
  mode = 'formula',
  showGloss = false,
  size = 'md',
  className = '',
}: MorphemeSequenceProps) {
  if (tokens.length === 0) {
    return null;
  }

  if (mode === 'word') {
    return (
      <span className={`inline-flex flex-col ${className}`}>
        <span
          className={`inline-flex flex-wrap items-baseline font-semibold tracking-tight ${WORD_TEXT_SIZES[size]}`}
        >
          {tokens.map((token, idx) => {
            const cfg = MORPHEME_COLORS[token.type];
            const prevToken = idx > 0 ? tokens[idx - 1] : undefined;
            const needsSpaceBeforeQuestion =
              token.type === 'question' &&
              prevToken !== undefined &&
              !prevToken.text.endsWith(' ') &&
              !prevToken.text.endsWith('-') &&
              !token.text.startsWith(' ');

            return (
              <span
                key={`${token.type}-${idx}-${token.text}`}
                title={`${cfg.shortLabelRu}: ${token.gloss}`}
                className={`${cfg.text} whitespace-pre-wrap rounded-sm transition-colors`}
              >
                {needsSpaceBeforeQuestion ? ` ${token.text}` : token.text}
              </span>
            );
          })}
        </span>
        {showGloss && (
          <span className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-xs text-slate-500 dark:text-slate-400">
            {tokens.map((token, idx) => (
              <span key={`gloss-${idx}`} className="inline-flex items-center gap-1">
                {idx > 0 && <span aria-hidden="true">+</span>}
                <span>{token.gloss}</span>
              </span>
            ))}
          </span>
        )}
      </span>
    );
  }

  return (
    <div className={`inline-flex flex-wrap items-start gap-x-1.5 gap-y-2 ${className}`}>
      {tokens.map((token, idx) => {
        const cfg = MORPHEME_COLORS[token.type];
        const startsWithOperator = /^[+/]/.test(token.text.trimStart());
        return (
          <div
            key={`${token.type}-${idx}-${token.text}`}
            className="inline-flex items-start gap-1.5"
          >
            {idx > 0 && !startsWithOperator && (
              <span
                aria-hidden="true"
                className="self-center font-semibold text-slate-400 dark:text-slate-500 select-none"
              >
                +
              </span>
            )}
            <div className="inline-flex flex-col items-center">
              <span
                title={`${cfg.shortLabelRu}: ${token.gloss}`}
                className={`inline-flex items-center rounded-lg border font-semibold whitespace-pre ${cfg.badge} ${FORMULA_PILL_SIZES[size]}`}
              >
                {token.text}
              </span>
              {showGloss && token.gloss && (
                <span className="mt-1 max-w-[140px] text-center text-[11px] leading-tight text-slate-500 dark:text-slate-400">
                  {token.gloss}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
