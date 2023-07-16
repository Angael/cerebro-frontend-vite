import React from 'react';
import Card from '../../../styled/card/Card';
import { Btn } from '../../../styled/btn/Btn';
import { AccountProduct } from '@vanih/cerebro-contracts';

type Props = {
  accountProduct: AccountProduct;
  onClickCheckout: (id: string) => void;
  isCurrent: boolean;
};

const AccountPlan = ({ accountProduct, onClickCheckout, isCurrent }: Props) => {
  const { name, description, id, price } = accountProduct;
  return (
    <Card as='article'>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        Price: {price.amount / 100} {price.currency}
      </p>
      {isCurrent ? (
        <div style={{ color: 'var(--c-success)' }}>Current Plan</div>
      ) : (
        <Btn onClick={() => onClickCheckout(id)}>Checkout</Btn>
      )}
    </Card>
  );
};

export default AccountPlan;
