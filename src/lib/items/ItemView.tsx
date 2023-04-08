import React from 'react';
import { FrontItem, ImageItem, VideoItem } from '@vanih/cerebro-contracts';
import ImageView from './item-view/ImageView';
import VideoView from './item-view/VideoView';

type Props = {
  item: FrontItem;
};

const ItemView = ({ item }: Props) => {
  return (
    <>
      {item?.type === 'IMAGE' && <ImageView item={item as ImageItem} />}
      {item?.type === 'VIDEO' && <VideoView item={item as VideoItem} />}
    </>
  );
};

export default ItemView;
