import React from 'react';
import FilePreview from './FilePreview';
import css from './FilesPreview.module.scss';
import { ExtendedFile } from '../../../store/upload/uploadTypes';

interface IProps {
  files: ExtendedFile[];
  onDelete: (id: string) => void;
}

const FilesPreview = ({ files, onDelete }: IProps) => {
  return (
    <div>
      <div className={css.MyGrid}>
        {files.map((file) => (
          <FilePreview file={file} key={file.id} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default FilesPreview;
