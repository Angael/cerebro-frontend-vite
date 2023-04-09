import React, { memo } from 'react';
import { FrontItem } from '@vanih/cerebro-contracts';
// import Btn from '../../btn/Btn';
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
      {/*<Btn>Share</Btn>*/}
      {/*<Btn>Delete</Btn>*/}
      {/*<Btn>Download</Btn>*/}
      <p>Created: {new Date(item.createdAt).toLocaleString()}</p>
      <hr />
      <p>Size: {sizeStr}</p>

      {item.type === 'IMAGE' && (
        <>
          <p>
            {item.image.width}x{item.image.height}
          </p>
        </>
      )}

      {item.type === 'VIDEO' && (
        <>
          <p>
            Duration: {numeral(item.video.durationMs / 1000).format('00:00:00')}
          </p>
          <p>
            {item.video.width}x{item.video.height}
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
