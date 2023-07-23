import React from 'react';
import { useUsedSpaceQuery } from '../../../api/usedSpaceApi';
import Card from '../../../styled/card/Card';
import { Btn, BtnA } from '../../../styled/btn/Btn';
import css from './UpgradeAccount.module.scss';
import { useQuery } from '@tanstack/react-query';
import { fetchPremium } from '../../../api/products/fetchPremium';
import { API } from '../../../api/api';
import { STRIPE_CUSTOMER_PORTAL } from '../../../env';

type Props = {};

const UpgradeAccount = (props: Props) => {
  const usedSpaceQuery = useUsedSpaceQuery();
  const type = usedSpaceQuery.data?.type;
  const isPremium = type !== 'FREE';

  const premium = useQuery({
    queryKey: ['premium'],
    queryFn: fetchPremium,
  });

  const generateCheckout = async () => {
    if (!premium.data) {
      return;
    }

    const response = await API.post('/account-upgrade/generate-checkout', {
      productId: premium.data.id,
    });

    window.location.href = response.data.url;
  };

  return (
    <>
      <Card>
        <div className={css.vstack}>
          <h2 className='h5'>{type} Account</h2>
          {!isPremium && <Btn onClick={generateCheckout}>Upgrade</Btn>}
        </div>
        <div>
          <BtnA href={STRIPE_CUSTOMER_PORTAL}>Stripe Customer Portal</BtnA>
        </div>
      </Card>
    </>
  );
};

export default UpgradeAccount;
