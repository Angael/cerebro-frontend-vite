import { API } from '../api';
import { AccountProduct } from '@vanih/cerebro-contracts';

export const fetchPremium = async (): Promise<AccountProduct> => {
  const response = await API.get(`/account/premium`);
  return response.data;
};
