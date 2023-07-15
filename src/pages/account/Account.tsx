import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

import UsedSpace from '../../lib/used-space/UsedSpace';
import { Btn } from '../../styled/btn/Btn';
import { logout } from '../../store/auth/authActions';
import { useAuth } from '../../store/auth/authStore';
import Card from '../../styled/card/Card';
import Layout from '../../lib/layout/Layout';
import css from './Account.module.scss';

type Props = {};

const Account = (props: Props) => {
  const { user, loggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate('/login');
    }
  }, [loggedIn]);

  return (
    <Layout isMaxWidth className={css.stack}>
      <Card>
        <div>
          <h1 className='h3'>Hey </h1>
          <p>{user?.email}</p>
        </div>
      </Card>
      <Card>
        <div>
          <p className='body2'>You are currently using:</p>
          <UsedSpace />
        </div>
      </Card>
      <Btn onClick={logout} style={{ marginLeft: 'auto' }}>
        Log out
      </Btn>
    </Layout>
  );
};

export default Account;
