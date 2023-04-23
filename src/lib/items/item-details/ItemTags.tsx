import React from 'react';
import { FrontItem } from '@vanih/cerebro-contracts';
import { useItemTagsQuery } from '../../../api/item/fetchTags';

type Props = {
  item: FrontItem;
};

const ItemTags = ({ item }: Props) => {
  const tagsQuery = useItemTagsQuery(item.id);

  if (!tagsQuery.data || tagsQuery.data.length === 0) {
    return null;
  }

  return (
    <section>
      <p>Tags:</p>
      <ul>
        {tagsQuery.data?.map((tag) => (
          <li className='body1' key={tag.id}>
            {tag.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ItemTags;
