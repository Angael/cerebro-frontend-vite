import { API } from '../api';

export const getStatsFromLink = async (link: string) => {
  const response = await API.get('/items/upload/file-from-link', {
    params: { link },
  });

  return response.data;
};
