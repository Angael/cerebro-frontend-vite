import React from 'react';
import Layout from '../../lib/layout/Layout';
import UsedSpace from '../../lib/used-space/UsedSpace';
import { useQuery } from '@tanstack/react-query';
import { fetchLocalPath } from '../../api/local/localApi';
import css from './ImportLocalPage.module.scss';

const ImportLocalPage = () => {
  const [path, setPath] = React.useState('');

  const query = useQuery({
    queryKey: ['import-local', path],
    queryFn: () => fetchLocalPath(path),
  });

  return (
    <Layout isMaxWidth className={css.importLocalPageWrapper}>
      <UsedSpace />
      <div>
        <input
          className='textfield'
          value={path}
          onChange={(e) => setPath(e.target.value)}
          placeholder='Windows path'
          maxLength={100}
        />
        {query.status}
      </div>
      {query.data && <pre>{JSON.stringify(query.data, null, 2)}</pre>}
    </Layout>
  );
};

export default ImportLocalPage;
