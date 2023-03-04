import React from 'react';
import { VideoItem } from '@vanih/cerebro-contracts';
import css from './VideoView.module.scss';

type Props = {
  item: VideoItem;
};

const ImageView = ({ item }: Props) => {
  if (!item.video) {
    return <div>Corrupted file</div>;
  }

  const { width, height, bitrateKb, durationMs, src } = item.video;
  const style = {
    '--width': `${width}px`,
    '--height': `${height}px`,
  } as React.CSSProperties;

  return (
    <video
      key={src}
      controls
      poster={item.thumbnail || ''}
      autoPlay
      loop
      style={style}
      className={css.videoItem}
    >
      <source src={src} />
    </video>
  );
};

export default ImageView;
