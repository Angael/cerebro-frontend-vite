import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { User } from 'firebase/auth';

export const AUTH_STATE = {
  loggedOut: 'loggedOut',
  loggedIn: 'loggedIn',
} as const;

interface AuthStore {
  user: User | null;
  token: string | null;
  state: keyof typeof AUTH_STATE;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: null,
  state: AUTH_STATE.loggedOut,
}));

// API

// TODO: this has the same name as authActions FIX THIS WITH ONE EXPORT
export function logIn(user: AuthStore['user'], token: AuthStore['token']) {
  useAuthStore.setState({
    user,
    token,
    state: 'loggedIn',
  });
}

export function logOut() {
  useAuthStore.setState({
    user: null,
    token: null,
    state: 'loggedOut',
  });
}
