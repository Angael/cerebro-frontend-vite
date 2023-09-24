import React, { memo } from 'react';
import { FrontItem } from '@vanih/cerebro-contracts';
import css from './ItemDetails.module.scss';
import numeral from 'numeral';

type Props = {
  item: FrontItem;
};

const ItemDetails = ({ item }: Props) => {
  const sizeStr = numeral(item.size).format('0.00 b');

  return (
    <section className={css.itemDetails}>
      <div className={css.detailRow}>
        <p className={css.label}>Created</p>
        <p className={css.value}>{new Date(item.createdAt).toLocaleString()}</p>
      </div>

      <div className={css.detailRow}>
        <p className={css.label}>Size</p>
        <p className={css.value}>{sizeStr}</p>
      </div>

      {item.type === 'IMAGE' && (
        <div className={css.detailRow}>
          <p className={css.label}>Dimensions</p>
          <p className={css.value}>
            {item.image.width}x{item.image.height}
          </p>
        </div>
      )}

      {item.type === 'VIDEO' && (
        <>
          <div className={css.detailRow}>
            <p className={css.label}>Duration</p>
            <p className={css.value}>
              {numeral(item.video.durationMs / 1000).format('00:00:00')}
            </p>
          </div>
          <div className={css.detailRow}>
            <p className={css.label}>Dimensions</p>
            <p className={css.value}>
              {item.video.width}x{item.video.height}
            </p>
          </div>
          <div className={css.detailRow}>
            <p className={css.label}>Bitrate</p>
            <p className={css.value}>
              {numeral(item.video.bitrateKb * 1000).format('0.00 b')}/s
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default memo(ItemDetails);
