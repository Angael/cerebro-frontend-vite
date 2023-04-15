import React, { useState } from 'react';
import Layout from '../../lib/layout/Layout';
import { useAuthStore } from '../../store/auth/authStore';
import LoginInputs from './LoginInputs';
import { useNavigate } from 'react-router';
import { logIn, logout } from '../../store/auth/authActions';
import Btn from '../../styled/btn/Btn';
import css from './LoginInputs.module.scss';

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
      <main className={css.loginStack}>
        {authState.state === 'loggedIn' ? (
          <Btn onClick={logout}>Log out</Btn>
        ) : (
          <LoginInputs
            fetching={fetching}
            onOk={onLogin}
            isRegistration={false}
          />
        )}
      </main>
    </Layout>
  );
};

export default Login;
