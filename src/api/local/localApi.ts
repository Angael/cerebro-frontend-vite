import { API } from '../api';

export type LocalFile = {
  path: string;
  type: 'image' | 'video' | 'unknown';
};

export type LocalPath = {
  path: string;
  files: LocalFile[];
};

export const fetchLocalPath = async (path: string): Promise<LocalPath> => {
  const params = {
    path,
  };

  const response = await API.get('/local-fs/folder', { params });
  return response.data;
};
