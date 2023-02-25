import React from 'react';
import { ImageItem } from '@vanih/cerebro-contracts';
import ProgressiveImage from 'react-progressive-graceful-image';
import css from './ImageView.module.scss';

type Props = {
  item: ImageItem;
};

const ImageView = ({ item }: Props) => {
  if (!item.image) {
    return <div>Corrupted file</div>;
  }

  const { width, height } = item.image;

  const placeholder = item.thumbnail;

  return (
    <ProgressiveImage src={item.image.src} placeholder={placeholder ?? ''}>
      {(src: string, loading?: boolean) => (
        <img
          style={{
            objectFit: 'contain',
          }}
          src={src}
        />
      )}
    </ProgressiveImage>
  );
};

export default ImageView;
