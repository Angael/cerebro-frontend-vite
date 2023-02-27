import React from 'react';
import Layout from '../../lib/layout/Layout';
import UsedSpace from '../../lib/used-space/UsedSpace';
import css from './ImportPage.module.scss';
import UploadMedia from '../../lib/import/UploadMedia';

const ImportPage = () => {
  return (
    <Layout isMaxWidth>
      <div className={css.titleAndLimit}>
        <h1 className='h1'>Import files</h1>
        <UsedSpace />
      </div>
      <UploadMedia />
    </Layout>
  );
};

export default ImportPage;
