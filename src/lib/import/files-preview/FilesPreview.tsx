import React, { useCallback } from 'react';
import FilePreview from './FilePreview';
import css from './FilesPreview.module.scss';
import { ExtendedFile } from '../../../store/upload/uploadTypes';
import { useDropzone } from 'react-dropzone';
import { styled } from '../../../styled/styled';
import { mdiFileMultiple, mdiImage, mdiPaperclip, mdiUpload } from '@mdi/js';
import { Icon } from '@mdi/react';

interface IProps {
  files: ExtendedFile[];
  onDelete: (id: string) => void;
  onAddFiles: (files: File[]) => void;
}

const Grid = styled('section', css.MyGrid);

const FilesPreview = ({ files, onDelete, onAddFiles }: IProps) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onAddFiles,
    noClick: true,
  });

  return (
    <Grid {...getRootProps()} className={isDragActive ? css.onDrag : undefined}>
      {files.length === 0 && (
        <div className={css.dragWatermark}>
          <Icon path={mdiFileMultiple} size={3} />
          <p>Drag & drop files</p>
        </div>
      )}
      {files.map((file) => (
        <FilePreview file={file} key={file.id} onDelete={onDelete} />
      ))}
    </Grid>
  );
};

export default React.memo(FilesPreview);
