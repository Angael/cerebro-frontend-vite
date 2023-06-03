import React from 'react';

import css from './ItemGrid.module.scss';
import { FrontItem } from '@vanih/cerebro-contracts';
import ItemThumb from './item-thumb/ItemThumb';
import { useSelectItems$ } from '../../store/browse/selectItems';

type Props = {
  items: FrontItem[];
};

const ItemGrid: React.FunctionComponent<Props> = ({ items }) => {
  const selectedItems = useSelectItems$();
  return (
    <section className={css.ItemGrid}>
      {items &&
        items.map((item, i) => (
          <ItemThumb
            key={item.id}
            item={item}
            isSelected={selectedItems.items.includes(item.id)}
            onSelect={selectedItems.selectItem}
          />
        ))}
    </section>
  );
};

export default ItemGrid;
