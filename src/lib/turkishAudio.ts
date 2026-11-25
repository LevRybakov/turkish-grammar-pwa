let activeAudio: HTMLAudioElement | null = null;

function buildAlphabetAudioUrl(audioId: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  return `${normalizedBase}audio/alphabet/${audioId}.mp3`;
}

function findTurkishSpeechVoice(): SpeechSynthesisVoice | null {
  if (
    typeof window === 'undefined' ||
    !('speechSynthesis' in window) ||
    typeof SpeechSynthesisUtterance === 'undefined'
  ) {
    return null;
  }
  try {
    const voices = window.speechSynthesis.getVoices();
    return (
      voices.find((v) => /^tr([-_]|$)/i.test(v.lang)) ?? null
    );
  } catch {
    return null;
  }
}

function speakWithStrictTurkishVoice(text: string): void {
  const trVoice = findTurkishSpeechVoice();
  if (!trVoice) {
    // Never fall back to a non-Turkish (e.g. English) voice, which mispronounces Turkish words.
    return;
  }
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = trVoice;
    utterance.lang = trVoice.lang || 'tr-TR';
    utterance.rate = 0.88;
    window.speechSynthesis.speak(utterance);
  } catch {
    // Ignore errors in restricted audio contexts
  }
}

/**
 * Plays a pre-generated native Turkish (tr-TR) MP3 clip from public/audio/alphabet/.
 * Only falls back to Web Speech API if an actual Turkish voice is installed on the device.
 */
export function playTurkishAudio(
  audioId: string,
  fallbackText?: string,
  onEnd?: () => void
): void {
  if (typeof window === 'undefined') {
    onEnd?.();
    return;
  }

  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
    activeAudio = null;
  }

  if ('speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {
      // ignore
    }
  }

  const audio = new Audio(buildAlphabetAudioUrl(audioId));
  activeAudio = audio;

  audio.addEventListener(
    'ended',
    () => {
      if (activeAudio === audio) {
        activeAudio = null;
      }
      onEnd?.();
    },
    { once: true }
  );

  audio.addEventListener(
    'error',
    () => {
      if (activeAudio === audio) {
        activeAudio = null;
      }
      if (fallbackText) {
        speakWithStrictTurkishVoice(fallbackText);
      }
      onEnd?.();
    },
    { once: true }
  );

  const playPromise = audio.play();
  if (playPromise && typeof playPromise.catch === 'function') {
    playPromise.catch(() => {
      if (activeAudio === audio) {
        activeAudio = null;
      }
      if (fallbackText) {
        speakWithStrictTurkishVoice(fallbackText);
      }
      onEnd?.();
    });
  }
}
