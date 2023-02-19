import React from 'react';

import css from './ItemGrid.module.scss';
import { FrontItem } from '@vanih/cerebro-contracts';
import Item from './item/Item';

type Props = {
  items: FrontItem[];
  onSelectItem: (id: number) => void;
};

const ItemGrid: React.FunctionComponent<Props> = ({ items, onSelectItem }) => {
  return (
    <section className={css.ItemGrid}>
      {items &&
        items.map((item, i) => (
          <Item
            key={item.id}
            item={item}
            onClick={() => onSelectItem(item.id)}
          />
        ))}
    </section>
  );
};

export default ItemGrid;
