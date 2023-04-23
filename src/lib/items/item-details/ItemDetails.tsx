import React, { memo } from 'react';
import { FrontItem } from '@vanih/cerebro-contracts';
// import css from './ItemDetails.module.scss';
import numeral from 'numeral';

type Props = {
  item: FrontItem;
};

const ItemDetails = ({ item }: Props) => {
  const sizeStr = numeral(item.size).format('0.00 b');

  return (
    <section>
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

export default memo(ItemDetails);
