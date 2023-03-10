import React from 'react';
import { FrontItem, ImageItem, VideoItem } from '@vanih/cerebro-contracts';
import ImageView from './types-renderers/ImageView';
import VideoView from './types-renderers/VideoView';

type Props = {
  item: FrontItem;
};

const Item = ({ item }: Props) => {
  return (
    <>
      {item?.type === 'IMAGE' && <ImageView item={item as ImageItem} />}
      {item?.type === 'VIDEO' && <VideoView item={item as VideoItem} />}
    </>
  );
};

export default Item;
