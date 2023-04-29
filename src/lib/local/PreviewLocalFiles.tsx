import React from 'react';
import { LocalFile } from '../../api/local/localApi';
import PreviewLocalFile from './PreviewLocalFile';
import css from './PreviewLocalFiles.module.scss';
import { useLocalStore } from './localStores';

type Props = {
  files: LocalFile[];
};

const PreviewLocalFiles = (props: Props) => {
  const { filePaths, toggleFilePath } = useLocalStore();
  return (
    <div className={css.previewLocalStack}>
      {props.files.map((file) => (
        <PreviewLocalFile
          key={file.path}
          file={file}
          selected={filePaths.includes(file.path)}
          onToggle={toggleFilePath}
        />
      ))}
    </div>
  );
};

export default PreviewLocalFiles;
