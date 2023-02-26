import React, { FunctionComponent } from 'react';
import numeral from 'numeral';
import { useUsedSpaceQuery } from '../../api/usedSpaceApi';
import * as Progress from '@radix-ui/react-progress';
import css from './UsedSpace.module.scss';

type Props = {};

const UsedSpace: FunctionComponent<Props> = ({}) => {
  const limits = useUsedSpaceQuery();

  const value = limits.data
    ? (100 * limits.data.bytes.used) / limits.data.bytes.max
    : 0;

  return (
    <div>
      <p>
        {limits.isFetched
          ? numeral(limits.data?.bytes.used).format('0.00 b')
          : '...'}{' '}
        / {numeral(limits.data?.bytes.max).format('0.00 b')}
      </p>
      <Progress.Root className={css.ProgressRoot} value={value}>
        <Progress.Indicator
          className={css.ProgressIndicator}
          style={{ transform: `translateX(-${100 - value}%)` }}
        />
      </Progress.Root>
    </div>
  );
};

export default React.memo(UsedSpace);
