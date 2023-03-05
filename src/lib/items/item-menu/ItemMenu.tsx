import React, { memo } from 'react';
import { FrontItem } from '@vanih/cerebro-contracts';
import Btn from '../../btn/Btn';
import css from './ItemMenu.module.scss';
import numeral from 'numeral';

type Props = {
  item: FrontItem;
};

const ItemMenu = ({ item }: Props) => {
  const sizeStr = numeral(item.size).format('0.00 b');
  console.log({ item });
  return (
    <section className={css.ItemMenu}>
      <h1 className='h3'>Menu</h1>
      <Btn>Share</Btn>
      <Btn>Delete</Btn>
      <Btn>Download</Btn>
      <hr />
      <p>Id: {item.id}</p>
      <p>Size: {sizeStr}</p>
      <p>Date: {new Date(item.createdAt).toLocaleString()}</p>
      {item.type === 'IMAGE' && (
        <>
          <p>Width: {item.image.width}</p>
          <p>Height: {item.image.height}</p>
        </>
      )}
      {item.type === 'VIDEO' && (
        <>
          <p>Width: {item.video.width}</p>
          <p>Height: {item.video.height}</p>
          <p>
            Duration: {numeral(item.video.durationMs / 1000).format('00:00:00')}
          </p>
          <p>
            Bitrate: {numeral(item.video.bitrateKb * 1000).format('0.00 b')}/s
          </p>
        </>
      )}
    </section>
  );
};

export default memo(ItemMenu);
