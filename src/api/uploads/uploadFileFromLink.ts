import { API } from '../api';

export const uploadFileFromLink = async (link: string, tags: string[]) =>
  API.post('/items/upload/file-from-link', { link, tags });
