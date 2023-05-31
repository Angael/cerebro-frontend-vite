import React, { useState } from 'react';
import css from './CinemaViewer.module.scss';
import CinemaControls from './CinemaControls';
import { useCinemaWsad } from './useCinemaWsad';

export type CinemaItem = {
  src: string;
  type: 'image' | 'video' | string;
};

type Props = {
  items: CinemaItem[];
};

const CinemaViewer = ({ items }: Props) => {
  const [index, setIndex] = useState(0);

  const item = items[index] as CinemaItem | undefined;
  const { type, src } = item ?? {};

  function onPrev() {
    setIndex((index - 1 + items.length) % items.length);
  }

  function onNext() {
    setIndex((index + 1) % items.length);
  }

  useCinemaWsad({ onNext, onPrev });

  return (
    <div className={css.cinemaViewer}>
      {type === 'image' && <img src={src} alt='' />}

      {type === 'video' && (
        <video controls muted autoPlay loop>
          <source src={src} type='video/mp4' />
        </video>
      )}

      <CinemaControls {...{ onNext, onPrev }} />
    </div>
  );
};

export default CinemaViewer;
