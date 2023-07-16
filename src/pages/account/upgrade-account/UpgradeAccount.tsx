import React from 'react';
import { useUsedSpaceQuery } from '../../../api/usedSpaceApi';
import Card from '../../../styled/card/Card';
import { Btn, BtnA } from '../../../styled/btn/Btn';
import css from './UpgradeAccount.module.scss';
import { useQuery } from '@tanstack/react-query';
import { fetchProductList } from '../../../api/products/getProductList';
import { API } from '../../../api/api';
import AccountPlan from './AccountPlan';
import { STRIPE_CUSTOMER_PORTAL } from '../../../env';

type Props = {};

const UpgradeAccount = (props: Props) => {
  const usedSpaceQuery = useUsedSpaceQuery();
  const type = usedSpaceQuery.data?.type;

  const products = useQuery({
    queryKey: ['product-list'],
    queryFn: fetchProductList,
  });

  const generateCheckout = async (productId: string) => {
    console.log(productId);
    const response = await API.post('/account-upgrade/generate-checkout', {
      productId,
    });
    const url = response.data.url;

    window.location.href = url;
  };

  return (
    <>
      <Card>
        <div>
          <h2 className='h5'>{type} Account</h2>
          <Btn>Upgrade</Btn>
        </div>
        <div className={css.vstack}>
          <div>
            <pre>{JSON.stringify(products.data, null, 2)}</pre>
          </div>
          <BtnA href={STRIPE_CUSTOMER_PORTAL}>Stripe Customer Portal</BtnA>
        </div>
      </Card>
      <div className={css.vstack}>
        {products.data?.map((product) => (
          <AccountPlan
            key={product.id}
            accountProduct={product}
            isCurrent={type === product.metadata.userType}
            onClickCheckout={generateCheckout}
          />
        ))}
      </div>
    </>
  );
};

export default UpgradeAccount;
