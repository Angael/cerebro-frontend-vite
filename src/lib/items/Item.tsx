import React from 'react';
import { FrontItem, ImageItem } from '@vanih/cerebro-contracts';
import ImageView from './types/ImageView';

type Props = {
  item: FrontItem;
};

const Item = ({ item }: Props) => {
  return (
    <div>
      {item?.type === 'IMAGE' && <ImageView item={item as ImageItem} />}
    </div>
  );
};

export default Item;
