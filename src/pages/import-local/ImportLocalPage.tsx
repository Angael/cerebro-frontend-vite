import React, { useState } from 'react';
import Layout from '../../lib/layout/Layout';
import UsedSpace from '../../lib/used-space/UsedSpace';
import { useQuery } from '@tanstack/react-query';
import { fetchLocalPath } from '../../api/local/localApi';
import css from './ImportLocalPage.module.scss';
import PreviewLocalFiles from '../../lib/local/PreviewLocalFiles';

const ImportLocalPage = () => {
  const [path, setPath] = useState('');
  const [tags, setTags] = useState('');
  const [destPath, setDestPath] = useState('');

  const query = useQuery({
    queryKey: ['import-local', path],
    queryFn: () => fetchLocalPath(path),
    retry: false,
  });

  const fileList = query.data?.files ?? [];

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
      <input
        className='textfield'
        value={destPath}
        onChange={(e) => setDestPath(e.target.value)}
        placeholder='Where to move the files after upload'
        maxLength={100}
      />
      <input
        className='textfield'
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder='Tags'
        maxLength={100}
      />
      <PreviewLocalFiles files={fileList} />
      {query.data && <pre>{JSON.stringify(query.data, null, 2)}</pre>}
    </Layout>
  );
};

export default ImportLocalPage;
