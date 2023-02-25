import React from 'react';
import Layout from '../../lib/layout/Layout';
import UsedSpace from '../../lib/used-space/UsedSpace';
import css from './ImportPage.module.scss';
import UploadMedia from '../../lib/import/UploadMedia';

type Props = {};

const ImportPage = (props: Props) => {
  return (
    <Layout className={css.importPage}>
      <h1 className='h1'>Import page</h1>
      <UsedSpace />
      <UploadMedia />
    </Layout>
  );
};

export default ImportPage;
