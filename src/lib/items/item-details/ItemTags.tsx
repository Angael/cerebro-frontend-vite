import React from 'react';
import { FrontItem } from '@vanih/cerebro-contracts';
import { useTagsQuery } from '../../../api/item/fetchTags';
import Card from '../../../styled/card/Card';

type Props = {
  item: FrontItem;
};

const ItemTags = ({ item }: Props) => {
  const tagsQuery = useTagsQuery(item.id);

  return (
    <Card>
      {tagsQuery.data?.map((tag) => (
        <p>{tag.name}</p>
      ))}
    </Card>
  );
};

export default ItemTags;
