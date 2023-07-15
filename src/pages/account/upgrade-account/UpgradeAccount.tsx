import React from 'react';
import { useUsedSpaceQuery } from '../../../api/usedSpaceApi';
import Card from '../../../styled/card/Card';
import { Btn } from '../../../styled/btn/Btn';
import css from './UpgradeAccount.module.scss';

type Props = {};

const UpgradeAccount = (props: Props) => {
  const usedSpaceQuery = useUsedSpaceQuery();
  const type = usedSpaceQuery.data?.type;

  return (
    <Card
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h2 className='h5'>{type} Account</h2>
      <Btn>Upgrade</Btn>
    </Card>
  );
};

export default UpgradeAccount;
