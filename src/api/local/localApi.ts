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

type PostLocalChange = {
  type: 'upload' | 'move';
  filePaths: string[];
  tags?: string[];
  moveDist?: string;
};

export const postLocalFilesChange = (data: PostLocalChange) => {
  return API.post('/local-fs/files', data);
};
