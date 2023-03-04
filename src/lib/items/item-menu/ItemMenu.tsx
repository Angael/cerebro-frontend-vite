import React, { memo } from 'react';
import { FrontItem } from '@vanih/cerebro-contracts';
import Btn from '../../btn/Btn';

type Props = {
  item: FrontItem;
};

const ItemMenu = ({ item }: Props) => {
  console.log({ item });
  return (
    <section>
      <h1 className='h3'>Menu</h1>
      <Btn>Share</Btn>
      <Btn>Delete</Btn>
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
    </section>
  );
};

export default memo(ItemMenu);
