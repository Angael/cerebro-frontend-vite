import { API } from './api';
import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '../store/auth/authStore';

type Limits = {
  type: string; //AccountType;
  bytes: {
    used: number;
    max: number;
  };
};

const fetchLimits = async (): Promise<Limits> => {
  const response = await API.get('/account/limits');
  return response.data;
};

export const ACCOUNT_LIMITS_KEY = 'accountLimits';

export const useUsedSpaceQuery = () => {
  const { state } = useAuthStore();

  return useQuery({
    enabled: state === 'loggedIn',
    queryKey: [ACCOUNT_LIMITS_KEY],
    queryFn: () => fetchLimits(),
    retry: 0,
  });
};
