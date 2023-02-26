import React from 'react';
import Icon from '@mdi/react';
import { mdiLoading } from '@mdi/js';
import css from './CircleLoader.module.scss';
import clsx from 'clsx';

type Props = {
  centered?: boolean;
};

const CircleLoader = ({ centered }: Props) => {
  return (
    <div className={clsx(css.circleLoader, centered && css.centered)}>
      <Icon path={mdiLoading} className={css.loaderIcon} />
    </div>
  );
};

export default CircleLoader;
