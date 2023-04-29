import { baseURL } from '../../api/api';

export function getLocalSrc(path: string): string {
  return baseURL + '/local-fs/file?path=' + encodeURIComponent(path);
}
