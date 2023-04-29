import { API } from '../api';

export type LocalPath = {
  path: string;
  items: string[];
};

export const fetchLocalPath = async (path: string): Promise<LocalPath> => {
  const params = {
    path,
  };

  const response = await API.get('/local-fs/', { params });
  return response.data;
};
