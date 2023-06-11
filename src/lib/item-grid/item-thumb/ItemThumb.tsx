import React, { ChangeEvent, useState } from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';

import css from './ItemThumb.module.scss';
import { getGridSpan } from './getGridSpan';
import { mdiAlertCircleOutline, mdiClockOutline, mdiEyeOff } from '@mdi/js';
import { Icon } from '@mdi/react';
import { FrontItem } from '@vanih/cerebro-contracts';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { itemUrl } from '../../../utils/routing/itemUrl';
import Checkbox from '../../../styled/checkbox/Checkbox';

interface IProps {
  item: FrontItem;
  selectable: boolean;
  isSelected: boolean;
  onSelect: (itemId: FrontItem['id']) => void;
}

const ItemThumb = ({ item, selectable, isSelected, onSelect }: IProps) => {
  const [err1, setErr] = useState(false);

  const iconSrc = item.icon || '';
  const thumbnailSrc = item.thumbnail ?? '';

  const gridSpanClass = getGridSpan(item);

  const onError = () => {
    setErr(true);
  };

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    onSelect(item.id);
  };

  const onShiftClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.shiftKey || e.ctrlKey || e.metaKey) {
      e.preventDefault();
      handleSelect(e as any);
    }
  };

  return (
    <Link
      to={itemUrl(item.id)}
      className={clsx(css.itemBtn, gridSpanClass, isSelected && css.selected)}
      onClick={onShiftClick}
    >
      {selectable && (
        <>
          <Checkbox
            className={css.checkMark}
            checked={isSelected}
            onChange={handleSelect}
            onClick={(e) => e.stopPropagation()}
          />
          <div className={css.selectedOverlay} />
        </>
      )}
      {item.private && (
        <Icon path={mdiEyeOff} size={1} className={css.private} />
      )}
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
