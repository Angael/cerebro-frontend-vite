import React, { useState } from 'react';
import Layout from '../../lib/layout/Layout';
import UsedSpace from '../../lib/used-space/UsedSpace';
import { useQuery } from '@tanstack/react-query';
import { fetchLocalPath, postLocalFilesChange } from '../../api/local/localApi';
import css from './ImportLocalPage.module.scss';
import PreviewLocalFiles from '../../lib/local/PreviewLocalFiles';
import { Btn } from '../../styled/btn/Btn';
import { useLocalStore } from '../../lib/local/localStores';
import { deleteLocalFiles } from '../../api/local/deleteLocalFiles';
import Card from '../../styled/card/Card';
import { useTagInput } from '../import/useTagInput';
import { CinemaItem } from '../../lib/cinema-viewer/CinemaViewer';
import { getLocalSrc } from '../../lib/local/getLocalSrc';
import Textfield from '../../styled/textfield/Textfield';
import { queryClient } from '../../api/queryClient';

const ImportLocalPage = () => {
  const [path, setPath] = useState('');
  const [tags, setTags, tagsArr] = useTagInput();
  const [destPath, setDestPath] = useState('');
  const [onlyShowSelected, setOnlyShowSelected] = useState(false);

  const { filePaths, toggleFilePath, removeAll, addPaths } = useLocalStore();

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
    await queryClient.invalidateQueries({ queryKey: ['import-local'] });
  };

  const onSelectAll = () => {
    addPaths(fileList.map((f) => f.path));
  };

  async function deleteFiles(paths: string[]) {
    if (confirm(`Are you sure you want to delete ${paths.length} files?`)) {
      await deleteLocalFiles(paths);
      await queryClient.invalidateQueries({ queryKey: ['import-local'] });
    }
  }

  const deleteSelected = () => deleteFiles(filePaths);

  const shownFiles = onlyShowSelected
    ? fileList.filter((f) => filePaths.includes(f.path))
    : fileList;

  const cinemaFiles: CinemaItem[] = shownFiles.map((f) => ({
    src: getLocalSrc(f.path),
    type: f.type,
  }));

  return (
    <Layout isMaxWidth className={css.importLocalPageWrapper}>
      <UsedSpace />
      <Card>
        <Textfield
          label='Src path'
          input={{
            name: 'windows path',
            value: path,
            onChange: (e) => setPath(e.currentTarget.value),
            maxLength: 100,
          }}
        />
        {query.status}
      </Card>
      <Textfield
        label='Dest path'
        input={{
          name: 'windows dest path',
          value: destPath,
          onChange: (e) => setDestPath(e.currentTarget.value),
          maxLength: 100,
        }}
      />
      <Textfield
        label='Tags'
        input={{
          name: 'tags',
          value: tags,
          onChange: (e) => setTags(e.currentTarget.value),
          maxLength: 100,
        }}
      />
      <div>
        <p>Selected: {filePaths.length}</p>
      </div>
      <Card className={css.importLocalPageActions}>
        <Btn onClick={onMove}>Move + Remove from list</Btn>
        <Btn onClick={onSelectAll}>Select all</Btn>
        <Btn onClick={removeAll}>Remove selection</Btn>
        <Btn onClick={deleteSelected}>Delete files</Btn>
        <Btn onClick={() => setOnlyShowSelected(!onlyShowSelected)}>
          {onlyShowSelected ? 'Show all' : 'Show selected'}
        </Btn>
      </Card>
      <PreviewLocalFiles
        files={shownFiles}
        selectedFiles={filePaths}
        toggleSelectFile={toggleFilePath}
        onDeleteItem={deleteFiles}
      />
    </Layout>
  );
};

export default ImportLocalPage;
