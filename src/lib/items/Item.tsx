import React from 'react';
import { FrontItem, ImageItem, VideoItem } from '@vanih/cerebro-contracts';
import ImageView from './item-view/ImageView';
import VideoView from './item-view/VideoView';
import ItemMenu from './item-menu/ItemMenu';
import css from './Item.module.scss';

type Props = {
  item: FrontItem;
};

const Item = ({ item }: Props) => {
  return (
    <>
      {item?.type === 'IMAGE' && <ImageView item={item as ImageItem} />}
      {item?.type === 'VIDEO' && <VideoView item={item as VideoItem} />}
      <ItemMenu item={item} />
    </>
  );
};

export default Item;
