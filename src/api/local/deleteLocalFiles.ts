import { API } from '../api';

export const deleteLocalFiles = async (paths: string[]) => {
  return API.delete('/local-fs/files', { data: { paths } });
};
