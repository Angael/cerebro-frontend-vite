import React, { useState } from 'react';
import Layout from '../../lib/layout/Layout';
import { useAuthStore } from '../../store/auth/authStore';
import LoginInputs from './LoginInputs';
import { useNavigate } from 'react-router';
import { logIn, logout } from '../../store/auth/authActions';

const Login = () => {
  const authState = useAuthStore();
  const navigate = useNavigate();
  const [fetching, setFetching] = useState(false);

  const onLogin = (email: string, password: string) => {
    // setErr(null);
    setFetching(true);
    logIn(email, password)
      .then(() => navigate('/home'))
      // .catch((e) => setErr(e.code))
      .finally(() => setFetching(false));
  };

  return (
    <Layout isMaxWidth>
      <h1 className='h1'>Login</h1>
      {authState.state === 'loggedIn' ? (
        <button type='button' onClick={logout}>
          Log out
        </button>
      ) : (
        <LoginInputs
          fetching={fetching}
          onOk={onLogin}
          isRegistration={false}
        />
      )}
    </Layout>
  );
};

export default Login;
