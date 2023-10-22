import React from 'react';
import css from './StatsFromLink.module.scss';
import Card from '../../../styled/card/Card';
import { isProd } from '../../../env';

type Props = {
  stats: any;
};

const StatsFromLink = ({ stats }: Props) => {
  const { title, description, duration, thumbnail, resolution, fps, ext } =
    stats;

  if (!isProd) {
    console.log(stats);
  }

  return (
    <Card>
      <img src={thumbnail} alt='thumbnail' />
      <header className='h3'>Nazwa filmu: {title}</header>
      <p className='body2'>Description: {description}</p>
      <p className='body2'>Duration: {duration}</p>
      <p className='body2'>Resolution: {resolution}</p>
      <p className='body2'>FPS: {fps}</p>
      <p className='body2'>Ext: {ext}</p>
    </Card>
  );
};

export default StatsFromLink;
