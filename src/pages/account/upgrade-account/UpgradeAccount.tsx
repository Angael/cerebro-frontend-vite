import React from 'react';
import { useUsedSpaceQuery } from '../../../api/usedSpaceApi';
import Card from '../../../styled/card/Card';
import { Btn, BtnA } from '../../../styled/btn/Btn';
import css from './UpgradeAccount.module.scss';
import { useQuery } from '@tanstack/react-query';
import { fetchPremium } from '../../../api/account/fetchPremium';
import { API } from '../../../api/api';
import { STRIPE_CUSTOMER_PORTAL } from '../../../env';
import { fetchAccountStatus } from '../../../api/account/fetchAccountStatus';

type Props = {};

const UpgradeAccount = (props: Props) => {
  const usedSpaceQuery = useUsedSpaceQuery();
  const type = usedSpaceQuery.data?.type;
  const isPremium = type !== 'FREE';

  const premium = useQuery({
    queryKey: ['premium'],
    queryFn: fetchPremium,
  });

  const accountStatus = useQuery({
    queryKey: ['account-status'],
    queryFn: fetchAccountStatus,
  });

  const generateCheckout = async () => {
    if (!premium.data) {
      return;
    }

    const response = await API.post('/account/generate-checkout', {
      productId: premium.data.id,
    });

    window.location.href = response.data.url;
  };

  const subDoesntRenew =
    accountStatus.data?.sub && !accountStatus.data.sub.renews;

  const subEndDate = accountStatus.data?.sub?.endsAt
    ? new Date(accountStatus.data.sub.endsAt)
    : null;

  const isSubDatePast = subEndDate && subEndDate < new Date();

  return (
    <Card>
      <div className={css.hstack}>
        <div>
          <h2 className='h5'>{type} Account</h2>
          {subEndDate && !isSubDatePast && (
            <p className='body2'>
              Active until <span>{subEndDate.toLocaleDateString()}</span>
            </p>
          )}
          {subDoesntRenew && (
            <p className='body2'>
              Subscription is cancelled.{' '}
              <a href={STRIPE_CUSTOMER_PORTAL}>Renew now</a>
            </p>
          )}
        </div>
        <div className={css.accountButtons}>
          {!isPremium && !accountStatus.data?.sub && (
            <Btn onClick={generateCheckout}>Upgrade</Btn>
          )}
          {accountStatus.data?.sub && (
            <BtnA href={STRIPE_CUSTOMER_PORTAL}>
              Subscription Customer Portal
            </BtnA>
          )}
        </div>
      </div>
      <div></div>
    </Card>
  );
};

export default UpgradeAccount;
