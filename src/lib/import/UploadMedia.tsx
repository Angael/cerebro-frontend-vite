import React from 'react';
import { ExtendedFile, UploadStatusEnum } from '../../store/upload/uploadTypes';
import { nanoid } from 'nanoid';
import {
  useUploadStore,
  uploadStoreActions,
} from '../../store/upload/uploadStore';
import Btn from '../btn/Btn';
import FilesPreview from './files-preview/FilesPreview';
import css from './UploadMedia.module.scss';
import FilesStats from './files-preview/FilesStats';

const UploadMedia = () => {
  const { files } = useUploadStore();

  const handleChangeFileImage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!event.target.files) {
      return;
    }

    const files: ExtendedFile[] = Array.from(event.target.files).map(
      (file) => ({
        file,
        id: nanoid(),
        previewSrc: URL.createObjectURL(file),
        uploadProgress: 0,
        uploadStatus: UploadStatusEnum.notStarted,
      }),
    );

    uploadStoreActions.add(files);
  };

  return (
    <>
      <div className={css.importPageActions}>
        <Btn disabled={files.length <= 0}>Upload</Btn>

        <label htmlFor='contained-button-file'>
          <input
            key={files.length}
            type='file'
            multiple
            id='contained-button-file'
            style={{ display: 'none' }}
            onChange={handleChangeFileImage}
          />
          <Btn component='div'>Add files...</Btn>
        </label>

        <Btn disabled={files.length <= 0} onClick={uploadStoreActions.clear}>
          Remove all
        </Btn>
      </div>

      <FilesPreview files={files} onDelete={uploadStoreActions.removeOne} />

      <FilesStats files={files} />
    </>
  );
};

export default UploadMedia;
