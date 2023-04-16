import React, { useState } from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';

import css from './ItemThumb.module.scss';
import { getGridSpan } from './getGridSpan';
import { mdiAlertCircleOutline, mdiClockOutline } from '@mdi/js';
import { Icon } from '@mdi/react';
import { FrontItem } from '@vanih/cerebro-contracts';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { itemUrl } from '../../../utils/routing/itemUrl';

interface IProps {
  item: FrontItem;
}

const ItemThumb = ({ item }: IProps) => {
  const [err1, setErr] = useState(false);

  const iconSrc = item.icon || '';
  const thumbnailSrc = item.thumbnail ?? '';

  const gridSpanClass = getGridSpan(item);

  const onError = () => {
    setErr(true);
  };

  return (
    <Link to={itemUrl(item.id)} className={clsx(css.itemBtn, gridSpanClass)}>
      <div className={css.thumbnailContainer}>
        {!thumbnailSrc && !iconSrc ? (
          <div
            className={css.centerContainer}
            style={{ backgroundColor: 'grey' }}
          >
            <Icon path={mdiClockOutline} size={2} color={'white'} />
            <p>Thumbnail not ready...</p>
          </div>
        ) : (
          <ProgressiveImage
            src={thumbnailSrc}
            placeholder={iconSrc}
            rootMargin='0%'
            threshold={[0.3]}
            onError={onError}
          >
            {(src: string, loading?: boolean) =>
              err1 ? (
                <div className={css.centerContainer}>
                  <Icon path={mdiAlertCircleOutline} size={2} color={'white'} />
                  <p>Thumbnail Error</p>
                </div>
              ) : (
                <img
                  alt={'item ' + item.id}
                  src={src}
                  className={clsx(css.thumbnail, loading && 'loading')}
                />
              )
            }
          </ProgressiveImage>
        )}
      </div>
    </Link>
  );
};

export default ItemThumb;
