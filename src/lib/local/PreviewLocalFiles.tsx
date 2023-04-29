import React from 'react';
import { LocalFile } from '../../api/local/localApi';
import PreviewLocalFile from './PreviewLocalFile';
import css from './PreviewLocalFiles.module.scss';

type Props = {
  files: LocalFile[];
};

const PreviewLocalFiles = (props: Props) => {
  return (
    <div className={css.previewLocalStack}>
      {props.files.map((file) => (
        <PreviewLocalFile key={file.path} file={file} />
      ))}
    </div>
  );
};

export default PreviewLocalFiles;
