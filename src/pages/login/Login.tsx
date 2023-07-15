import React, { useEffect, useState } from 'react';
import Layout from '../../lib/layout/Layout';
import { useLoggedIn } from '../../store/auth/authStore';
import LoginInputs from './LoginInputs';
import { useNavigate } from 'react-router';
import { logIn } from '../../store/auth/authActions';
import css from './LoginInputs.module.scss';

const Login = () => {
  const loggedIn = useLoggedIn();
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

  useEffect(() => {
    if (loggedIn) {
      navigate('/');
    }
  }, [loggedIn]);

  return (
    <Layout isMaxWidth>
      <main className={css.loginStack}>
        <LoginInputs
          fetching={fetching}
          onOk={onLogin}
          isRegistration={false}
        />
      </main>
    </Layout>
  );
};

export default Login;
