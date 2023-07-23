import { API } from '../api';
import { AccountProduct, AccountStatus } from '@vanih/cerebro-contracts';

export const fetchAccountStatus = async (): Promise<AccountStatus> => {
  const response = await API.get(`/account/status`);
  return response.data;
};
