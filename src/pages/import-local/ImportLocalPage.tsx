import React, { useState } from 'react';
import Layout from '../../lib/layout/Layout';
import UsedSpace from '../../lib/used-space/UsedSpace';
import { useQuery } from '@tanstack/react-query';
import { fetchLocalPath, postLocalFilesChange } from '../../api/local/localApi';
import css from './ImportLocalPage.module.scss';
import PreviewLocalFiles from '../../lib/local/PreviewLocalFiles';
import Btn from '../../styled/btn/Btn';
import { useLocalStore } from '../../lib/local/localStores';
import { queryClient } from '../../App';

const ImportLocalPage = () => {
  const [path, setPath] = useState('');
  const [tags, setTags] = useState('');
  const [destPath, setDestPath] = useState('');

  const { filePaths, removeAll, addPaths } = useLocalStore();

  const query = useQuery({
    queryKey: ['import-local', path],
    queryFn: () => fetchLocalPath(path),
    refetchOnWindowFocus: true,
  });

  const fileList = query.data?.files ?? [];

  const onMove = async () => {
    removeAll();
    await postLocalFilesChange({
      type: 'move',
      filePaths,
      moveDist: destPath,
    });
    await queryClient.invalidateQueries({ queryKey: ['import-local', path] });
  };

  const onSelectAll = () => {
    addPaths(fileList.map((f) => f.path));
  };

  return (
    <Layout isMaxWidth className={css.importLocalPageWrapper}>
      <UsedSpace />
      <div>
        <input
          name='windows path'
          className='textfield'
          value={path}
          onChange={(e) => setPath(e.target.value)}
          placeholder='Windows path'
          maxLength={100}
        />
        {query.status}
      </div>
      <input
        name='windows dest path'
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
      <div>
        <p>Selected: {filePaths.length}</p>
      </div>
      <div className={css.importLocalPageActions}>
        <Btn>Upload + Move + Remove from list</Btn>
        <Btn onClick={onMove}>Move + Remove from list</Btn>
        <Btn onClick={onSelectAll}>Select all</Btn>
        <Btn onClick={removeAll}>Remove selection</Btn>
        <Btn>Delete files</Btn>
      </div>
      <PreviewLocalFiles files={fileList} />
    </Layout>
  );
};

export default ImportLocalPage;
