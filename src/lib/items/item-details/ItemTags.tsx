import React from 'react';
import { FrontItem } from '@vanih/cerebro-contracts';
import { useItemTagsQuery } from '../../../api/item/fetchTags';
import css from './ItemTags.module.scss';

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
      <ul className={css.tagsWrapper}>
        {tagsQuery.data?.map((tag) => (
          <li className={css.tag} key={tag.id}>
            {tag.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ItemTags;
