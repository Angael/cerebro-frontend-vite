import React, { Suspense } from 'react';
import { ExtendedFile, UploadStatusEnum } from '../../store/upload/uploadTypes';
import { nanoid } from 'nanoid';
import {
  useUploadStore,
  uploadStoreActions,
} from '../../store/upload/uploadStore';
import { Btn } from '../../styled/btn/Btn';
import css from './UploadMedia.module.scss';
import FilesStats from './files-preview/FilesStats';
import {
  uploadFileToBackend,
  uploadQueue,
} from '../../store/upload/uploadQueue';
import { ITEMS_KEY } from '../../api/itemsApi';
import { queryClient } from '../../api/queryClient';

const FilesPreview = React.lazy(() => import('./files-preview/FilesPreview'));

type Props = {
  tags: string[];
};

const UploadMedia = ({ tags }: Props) => {
  const { files } = useUploadStore();

  const addFiles = (acceptedFiles: File[]) => {
    const files: ExtendedFile[] = acceptedFiles.map((file) => ({
      file,
      id: nanoid(),
      previewSrc: URL.createObjectURL(file),
      uploadProgress: 0,
      uploadStatus: UploadStatusEnum.notStarted,
    }));

    uploadStoreActions.add(files);
  };

  const onInputFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    addFiles(Array.from(event.target.files));
  };

  const upload = () => {
    files.forEach((file) => {
      uploadQueue.add(() =>
        uploadFileToBackend({ file, dir: '', private: false, tags }),
      );
    });

    uploadQueue.onIdle().then(() => {
      alert('queue stopped');
      queryClient.invalidateQueries([ITEMS_KEY]);
    });
  };

  return (
    <>
      <div className={css.importPageActions}>
        <Btn disabled={files.length <= 0} onClick={upload}>
          Upload
        </Btn>

        <label htmlFor='contained-button-file'>
          <input
            key={files.length}
            type='file'
            multiple
            id='contained-button-file'
            style={{ display: 'none' }}
            onChange={onInputFiles}
          />
          <Btn as='div'>Add files...</Btn>
        </label>

        <Btn disabled={files.length <= 0} onClick={uploadStoreActions.clear}>
          Remove all
        </Btn>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <FilesPreview
          files={files}
          onDelete={uploadStoreActions.removeOne}
          onAddFiles={addFiles}
        />
      </Suspense>

      <FilesStats files={files} />
    </>
  );
};

export default UploadMedia;
