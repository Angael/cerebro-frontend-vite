import {
  onAuthStateChanged,
  onIdTokenChanged,
  getIdToken,
  User,
} from 'firebase/auth';
import { auth } from './firebase';
import { logIn, logOut, useAuthStore } from './authStore';

const updateAuthStore = async (user: User | null) => {
  if (user) {
    const token = await user.getIdToken();

    logIn(user, token);
  } else {
    logOut();
  }
};

onAuthStateChanged(auth, updateAuthStore);

onIdTokenChanged(auth, updateAuthStore);

const twentyMinutes = 20 * 60 * 1000;

// https://github.com/firebase/firebaseui-web/issues/142
export function startAutoRefreshAuth() {
  setInterval(async () => {
    const { user } = useAuthStore.getState();

    if (user) {
      try {
        const newToken = await getIdToken(user, true);

        logIn(user, newToken);

        console.log('Refreshed token');
      } catch (e) {
        console.error('Failed to refresh token');
        logOut();
        console.error(e);
      }
    }
  }, twentyMinutes);
}
