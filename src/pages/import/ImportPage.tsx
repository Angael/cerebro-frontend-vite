import React from 'react';
import Layout from '../../lib/layout/Layout';
import UsedSpace from '../../lib/used-space/UsedSpace';
import css from './ImportPage.module.scss';

type Props = {};

const ImportPage = (props: Props) => {
  return (
    <Layout className={css.importPage}>
      <h1 className='h1'>Import page</h1>
      <UsedSpace />
    </Layout>
  );
};

export default ImportPage;
