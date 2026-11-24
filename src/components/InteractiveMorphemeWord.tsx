import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import type { InteractiveWord } from '../types/grammar';
import { MORPHEME_COLORS } from '../constants/morphemeColors';
import { MorphemeSequence } from './MorphemeSequence';

export interface InteractiveMorphemeWordProps {
  word: InteractiveWord;
  displaySurface?: string;
  className?: string;
}

interface PopoverPosition {
  top: number;
  left: number;
  width: number;
}

const VIEWPORT_PADDING = 12;
const MAX_POPOVER_WIDTH = 340;
const ESTIMATED_POPOVER_HEIGHT = 200;

export function InteractiveMorphemeWord({
  word,
  displaySurface,
  className = '',
}: InteractiveMorphemeWordProps) {
  const [isPinned, setIsPinned] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState<PopoverPosition>({
    top: 0,
    left: VIEWPORT_PADDING,
    width: MAX_POPOVER_WIDTH,
  });

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const isOpen = isPinned || isHovered || isFocused;

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const scheduleHoverClose = useCallback(() => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setIsHovered(false);
    }, 90);
  }, [clearCloseTimer]);

  const closeAll = useCallback(() => {
    clearCloseTimer();
    setIsPinned(false);
    setIsHovered(false);
    setIsFocused(false);
  }, [clearCloseTimer]);

  useEffect(() => {
    return () => {
      clearCloseTimer();
    };
  }, [clearCloseTimer]);

  const updatePosition = useCallback(() => {
    const trigger = triggerRef.current;
    if (!trigger) {
      return;
    }
    const rect = trigger.getBoundingClientRect();
    const viewportW = window.innerWidth;
    const viewportH = window.innerHeight;
    const width = Math.min(MAX_POPOVER_WIDTH, viewportW - VIEWPORT_PADDING * 2);

    const rawLeft = rect.left + rect.width / 2 - width / 2;
    const clampedLeft = Math.max(
      VIEWPORT_PADDING,
      Math.min(rawLeft, viewportW - width - VIEWPORT_PADDING)
    );

    const actualHeight = popoverRef.current?.offsetHeight ?? ESTIMATED_POPOVER_HEIGHT;
    const fitsAbove = rect.top >= actualHeight + 16;
    let top = fitsAbove ? rect.top - actualHeight - 8 : rect.bottom + 8;

    if (!fitsAbove && top + actualHeight > viewportH - VIEWPORT_PADDING) {
      top = Math.max(VIEWPORT_PADDING, viewportH - actualHeight - VIEWPORT_PADDING);
    }

    setPosition({
      top: Math.max(VIEWPORT_PADDING, top),
      left: clampedLeft,
      width,
    });
  }, []);

  useLayoutEffect(() => {
    if (!isOpen) {
      return;
    }
    updatePosition();
    const rafId = window.requestAnimationFrame(updatePosition);
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [isOpen, updatePosition]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (!target) {
        return;
      }
      if (
        triggerRef.current?.contains(target) ||
        popoverRef.current?.contains(target)
      ) {
        return;
      }
      closeAll();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeAll();
        triggerRef.current?.blur();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeAll]);

  const label = displaySurface ?? word.surface;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        onClick={() => {
          clearCloseTimer();
          setIsPinned((prev) => !prev);
        }}
        onPointerEnter={(e) => {
          if (e.pointerType !== 'touch') {
            clearCloseTimer();
            setIsHovered(true);
          }
        }}
        onPointerLeave={(e) => {
          if (e.pointerType !== 'touch') {
            scheduleHoverClose();
          }
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          const nextTarget = e.relatedTarget as Node | null;
          if (!popoverRef.current?.contains(nextTarget)) {
            setIsFocused(false);
          }
        }}
        className={`inline border-b border-dashed border-blue-500 dark:border-blue-400 font-medium text-slate-900 dark:text-slate-100 hover:bg-blue-50/80 dark:hover:bg-blue-950/60 rounded-sm px-0.5 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
          isOpen ? 'bg-blue-50 dark:bg-blue-950/70' : ''
        } ${className}`}
      >
        {label}
      </button>

      {isOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            ref={popoverRef}
            role="dialog"
            aria-label={`Морфемный разбор: ${word.surface}`}
            style={{
              position: 'fixed',
              top: `${position.top}px`,
              left: `${position.left}px`,
              width: `${position.width}px`,
              zIndex: 60,
            }}
            onPointerEnter={(e) => {
              if (e.pointerType !== 'touch') {
                clearCloseTimer();
                setIsHovered(true);
              }
            }}
            onPointerLeave={(e) => {
              if (e.pointerType !== 'touch') {
                scheduleHoverClose();
              }
            }}
            className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-3 shadow-xl ring-1 ring-slate-900/5 dark:ring-white/10"
          >
            <div className="flex items-start justify-between gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
              <div className="min-w-0">
                <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                  Разбор слова
                </div>
                <div className="mt-0.5">
                  <MorphemeSequence tokens={word.morphemes} mode="word" size="md" />
                </div>
              </div>
              <button
                type="button"
                onClick={closeAll}
                aria-label="Закрыть разбор"
                className="rounded-md p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:text-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <ul className="mt-2.5 space-y-1.5">
              {word.morphemes.map((token, idx) => {
                const cfg = MORPHEME_COLORS[token.type];
                return (
                  <li
                    key={`${token.type}-${idx}-${token.text}`}
                    className="flex items-center justify-between gap-2 text-xs"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className={`inline-flex shrink-0 items-center rounded-md border px-2 py-0.5 font-semibold whitespace-pre ${cfg.badge}`}
                      >
                        {token.text}
                      </span>
                      <span className="text-slate-700 dark:text-slate-200 leading-snug">
                        {token.gloss}
                      </span>
                    </div>
                    <span className="shrink-0 text-[11px] text-slate-400 dark:text-slate-500">
                      {cfg.shortLabelRu}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>,
          document.body
        )}
    </>
  );
}
