import React, { FunctionComponent } from 'react';
import numeral from 'numeral';
import { useUsedSpaceQuery } from '../../api/usedSpaceApi';
import * as Progress from '@radix-ui/react-progress';
import css from './UsedSpace.module.scss';

type Props = {};

const UsedSpace: FunctionComponent<Props> = ({}) => {
  const limits = useUsedSpaceQuery();

  let value: number;
  if (limits.data?.bytes.max) {
    value = limits.data
      ? (100 * limits.data.bytes.used) / limits.data.bytes.max
      : 0;
  } else if (limits.data?.bytes.used) {
    value = 100;
  } else {
    value = 0;
  }

  let backgroundColor: string | undefined;
  if (value > 80 && value < 95) {
    backgroundColor = 'var(--c-warning)';
  } else if (value >= 95) {
    backgroundColor = 'var(--c-error)';
  }

  return (
    <div>
      <p>
        {limits.isFetched
          ? numeral(limits.data?.bytes.used).format('0.00 b')
          : '...'}{' '}
        / {numeral(limits.data?.bytes.max).format('0.00 b')} ({value.toFixed(2)}
        %)
      </p>
      <Progress.Root className={css.ProgressRoot} value={value}>
        <Progress.Indicator
          className={css.ProgressIndicator}
          style={{ transform: `translateX(-${100 - value}%)`, backgroundColor }}
        />
      </Progress.Root>
    </div>
  );
};

export default React.memo(UsedSpace);
