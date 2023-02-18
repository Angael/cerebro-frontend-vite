import * as envs from '../../env';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: envs.FIREBASE_KEY,
  authDomain: envs.FIREBASE_DOMAIN,
  databaseURL: envs.FIREBASE_DATABASE,
  projectId: envs.FIREBASE_PROJECT_ID,
  storageBucket: envs.FIREBASE_BUCKET,
  messagingSenderId: envs.FIREBASE_SENDER_ID,
  appId: envs.FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

setPersistence(auth, browserLocalPersistence);
