import React from 'react';
import css from './StatsFromLink.module.scss';
import Card from '../../../styled/card/Card';
import { isProd } from '../../../env';

type Props = {
  stats: any;
};

const StatsFromLink = ({ stats }: Props) => {
  const {
    title,
    description,
    duration,
    thumbnail,
    resolution,
    fps,
    ext,
    filesize_approx,
  } = stats;

  if (!isProd) {
    console.log(stats);
  }

  return (
    <Card className={css.StatsFromLink}>
      <img src={thumbnail} alt='thumbnail' className={css.thumbnail} />
      <div className={css.content}>
        <header className={'h3 ' + css.title}>{title}</header>
        <div className='desc'>
          {description && <p className='body2'>{description}</p>}
          <p className='body2'>Duration: {duration}s</p>
          <p className='body2'>Resolution: {resolution}</p>
          <p className='body2'>FPS: {fps}</p>
          <p className='body2'>Ext: {ext}</p>
          <p className='body2'>
            Filesize: {Math.round(filesize_approx / 1000000)}MB
          </p>
        </div>
      </div>
    </Card>
  );
};

export default StatsFromLink;
