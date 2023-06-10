import React, { useState } from 'react';
import Layout from '../../lib/layout/Layout';
import { useAuthStore } from '../../store/auth/authStore';
import LoginInputs from './LoginInputs';
import { useNavigate } from 'react-router';
import { logIn, logout } from '../../store/auth/authActions';
import { Btn } from '../../styled/btn/Btn';
import css from './LoginInputs.module.scss';
import UsedSpace from '../../lib/used-space/UsedSpace';

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
          <>
            {/*welcome user*/}
            <h1 className='h3'>Hey {authState.user?.email}</h1>
            <p className='body2'>You are currently using:</p>
            <UsedSpace />

            <Btn onClick={logout}>Log out</Btn>
          </>
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
