import React from 'react';
import { FrontItem, ImageItem } from '@vanih/cerebro-contracts';
import { API } from '../../api/api';
import ImageView from './types/ImageView';

type Props = {
  item: FrontItem;
};

const fetchItem = async (id: string): Promise<FrontItem> => {
  const response = await API.get(`/items/item/${id}`);
  return response.data;
};

// const components = {
//   IMAGE: ImageView,
//   //   VIDEO: ViewVideo,
// } as const;

const Item = ({ item }: Props) => {
  return (
    <div>
      {item?.type === 'IMAGE' && <ImageView item={item as ImageItem} />}
    </div>
  );
};

export default Item;
