import React from 'react';

import css from './ItemGrid.module.scss';
import { FrontItem } from '@vanih/cerebro-contracts';
import ItemThumb from './item-thumb/ItemThumb';
import { useSelectItems$ } from '../../store/browse/selectItemsStore';

type Props = {
  items: FrontItem[];
};

const ItemGrid: React.FunctionComponent<Props> = ({ items }) => {
  const { turnedOn, selectedItems, selectItem } = useSelectItems$();

  return (
    <section className={css.ItemGrid}>
      {items &&
        items.map((item, i) => (
          <ItemThumb
            key={item.id}
            item={item}
            selectable={turnedOn}
            isSelected={selectedItems.includes(item.id)}
            onSelect={selectItem}
          />
        ))}
    </section>
  );
};

export default ItemGrid;
