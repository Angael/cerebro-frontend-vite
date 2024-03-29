import React from 'react';
import numeral from 'numeral';
import css from './FilePreview.module.scss';
import {
  ExtendedFile,
  UploadStatusEnum,
} from '../../../store/upload/uploadTypes';
import { Btn, BtnA } from '../../../styled/btn/Btn';
import ProgressOverlay from './ProgressOverlay';

interface IProps {
  file: ExtendedFile;
  onDelete: (id: string) => void;
}

const FilePreview = ({ file, onDelete }: IProps) => {
  const isImage = file.file.type.indexOf('image') >= 0;
  const isVideo = file.file.type.indexOf('video') >= 0;
  const tooBig = file.file.size > 15_000_000;

  const sizeStr = numeral(file.file.size).format('0 b');

  const showLoader = [
    UploadStatusEnum.started,
    UploadStatusEnum.success,
    UploadStatusEnum.failed,
  ].includes(file.uploadStatus);

  const { uploadStatus, uploadProgress } = file;

  return (
    <article className={css.filePreview}>
      {showLoader && (
        <ProgressOverlay status={uploadStatus} progress={uploadProgress} />
      )}

      {isImage && !tooBig && (
        <img alt={file.file.name} className={css.BgImg} src={file.previewSrc} />
      )}

      {isVideo && !tooBig && (
        <video className={css.BgImg} controls={false}>
          <source src={file.previewSrc} type='video/mp4' />
        </video>
      )}

      <div className={css.Content}>
        <header className={css.FileHeader}>
          <p title={file.file.name}>{file.file.name}</p>
          <p>{sizeStr}</p>
        </header>

        <div className={css.uploadFileActions}>
          <BtnA href={file.previewSrc} target='_blank'>
            Open
          </BtnA>
          <Btn color='error' onClick={() => onDelete(file.id)}>
            Delete
          </Btn>
        </div>
      </div>
    </article>
  );
};

export default React.memo(FilePreview);
