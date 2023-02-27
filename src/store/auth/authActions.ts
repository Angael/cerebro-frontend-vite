import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from './firebase';
import { API } from '../../api/api';

export const logout = () => signOut(auth);

export const logIn = async (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password).then(
    (userCredentials) => {
      const { uid, email } = userCredentials.user;
      return API.post('/account/register', { email, uid }).catch((err) => {
        return Promise.reject({ code: 'auth/failed_to_register_in_api' });
      });
    },
  );

export const sendPasswordReset = (email: string) =>
  sendPasswordResetEmail(auth, email);
