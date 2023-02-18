import React from 'react';
import Layout from '../../lib/layout/Layout';
import { useAuthStore } from '../../store/auth/authStore';

type Props = {};

const Home = (props: Props) => {
  const authState = useAuthStore();

  return (
    <Layout>
      <h1>Home page</h1>
      <p>Hello</p>
      <pre>{JSON.stringify(authState, null, 2)}</pre>
    </Layout>
  );
};

export default Home;
