import React, { useEffect, useState } from 'react';
import Layout from '../../lib/layout/Layout';
import { useLoggedIn } from '../../store/auth/authStore';
import LoginInputs from './LoginInputs';
import { useNavigate } from 'react-router';
import { logIn, register } from '../../store/auth/authActions';
import css from './LoginInputs.module.scss';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const loggedIn = useLoggedIn();
  const navigate = useNavigate();
  const [fetching, setFetching] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const onLogin = (email: string, password: string) => {
    setErr(null);
    setFetching(true);
    register(email, password)
      .then(() => navigate('/home'))
      .catch((e) => setErr(e.code))
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
        <h1 className='h1' style={{ textAlign: 'center', marginBottom: 16 }}>
          Register
        </h1>
        <LoginInputs
          fetching={fetching}
          onOk={onLogin}
          err={err}
          isRegistration
        />
        <NavLink to={'/login'} style={{ marginLeft: 'auto' }}>
          Log in
        </NavLink>
      </main>
    </Layout>
  );
};

export default Login;
