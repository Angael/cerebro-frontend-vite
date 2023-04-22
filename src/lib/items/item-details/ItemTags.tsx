import React from 'react';
import { FrontItem } from '@vanih/cerebro-contracts';
import { useItemTagsQuery } from '../../../api/item/fetchTags';
import Card from '../../../styled/card/Card';

type Props = {
  item: FrontItem;
};

const ItemTags = ({ item }: Props) => {
  const tagsQuery = useItemTagsQuery(item.id);

  return (
    <Card>
      {tagsQuery.data?.map((tag) => (
        <p key={tag.id}>{tag.name}</p>
      ))}
    </Card>
  );
};

export default ItemTags;
