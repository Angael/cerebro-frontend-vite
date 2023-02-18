import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import {
  onAuthStateChanged,
  onIdTokenChanged,
  getIdToken,
  User,
} from 'firebase/auth';

export const AUTH_STATE = {
  loggedOut: 'loggedOut',
  loggedIn: 'loggedIn',
} as const;

interface AuthStore {
  user: User | null;
  token: string | null;
  state: keyof typeof AUTH_STATE;
}

export const useAuthStore = create<AuthStore>()(
  devtools((set) => ({
    user: null,
    token: null,
    state: AUTH_STATE.loggedOut,
  })),
);

// API

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
