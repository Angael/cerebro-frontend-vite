import React from 'react';
import { Icon } from '@mdi/react';
import { mdiLoading } from '@mdi/js';
import css from './CircleLoader.module.scss';
import clsx from 'clsx';

type Props = {
  isOverlay?: boolean;
};

const CircleLoader = ({ isOverlay }: Props) => {
  return (
    <div className={clsx(css.circleLoader, isOverlay && css.isOverlay)}>
      <Icon path={mdiLoading} className={css.loaderIcon} />
    </div>
  );
};

export default CircleLoader;
