import React from 'react';
import { ExtendedFile, UploadStatusEnum } from '../../store/upload/uploadTypes';
import { nanoid } from 'nanoid';
import { addUploadFiles, useUploadStore } from '../../store/upload/uploadStore';
import Btn from '../btn/Btn';
import FilesPreview from './files-preview/FilesPreview';

type Props = {};

const UploadMedia = (props: Props) => {
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

    addUploadFiles(files);
  };

  return (
    <div>
      {files.length}
      <label htmlFor='contained-button-file' style={{ marginLeft: 8 }}>
        <input
          key={files.length}
          type='file'
          multiple
          id='contained-button-file'
          style={{ display: 'none' }}
          onChange={handleChangeFileImage}
        />
        <br />
        <Btn component='div'>Add files...</Btn>
      </label>

      <FilesPreview files={files} onDelete={console.log} />
    </div>
  );
};

export default UploadMedia;
