import axios from 'axios';
import { useAuthStore } from '../store/auth/authStore';

const baseURL = import.meta.env.DEV
  ? 'http://localhost:3000/'
  : 'https://api.widacki.me/';

export const API = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL,
});

const absUrlRegex = new RegExp('^(?:[a-z]+:)?//', 'i');
const isAbsoluteUrl = (url: string) => absUrlRegex.test(url);

API.interceptors.request.use(
  (request) => {
    const { token } = useAuthStore.getState();

    if (request && token) {
      if (isAbsoluteUrl(request.url || '')) {
        return request;
      } else if (request.headers) {
        request.headers.Authorization = 'Bearer ' + token;
      }
    }
    return request;
  },
  (error) => error,
);
