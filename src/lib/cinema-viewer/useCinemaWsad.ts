import { useEventListener } from 'usehooks-ts';

type CinemaWsadHook = {
  onPrev: () => void;
  onNext: () => void;
};

export const useCinemaWsad = ({ onPrev, onNext }: CinemaWsadHook) => {
  function handleKey({ key }: KeyboardEvent) {
    switch (key) {
      case 'd':
      case 'ArrowRight':
        onNext();
        break;
      case 'a':
      case 'ArrowLeft':
        onPrev();
        break;
    }
  }

  useEventListener('keydown', handleKey);
};
