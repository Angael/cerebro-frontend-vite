import React from 'react';
import { FrontItem } from '@vanih/cerebro-contracts';
import ImageView from './item-view/ImageView';
import VideoView from './item-view/VideoView';

type Props = {
  item: FrontItem;
};

const ItemView = ({ item }: Props) => {
  return (
    <>
      {item?.type === 'IMAGE' && <ImageView item={item} />}
      {item?.type === 'VIDEO' && <VideoView item={item} />}
    </>
  );
};

export default ItemView;
