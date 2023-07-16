import { API } from '../api';
import { AccountProduct } from '@vanih/cerebro-contracts';

export const fetchProductList = async (): Promise<AccountProduct[]> => {
  const response = await API.get(`/account-upgrade/products`);
  return response.data;
};
