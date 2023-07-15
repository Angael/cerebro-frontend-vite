import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { User } from 'firebase/auth';

export const AUTH_STATE = {
  wait: 'wait',
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
  state: 'wait',
}));

// Simple
export const useLoggedIn = () =>
  useAuthStore((s) => s.state === AUTH_STATE.loggedIn);

// Less simple
export const useAuth = () => {
  const { user, token, state } = useAuthStore();

  const loggedIn = state === AUTH_STATE.loggedIn;

  return {
    user,
    token,
    state,
    loggedIn,
  };
};

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
