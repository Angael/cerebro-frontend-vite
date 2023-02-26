import React from 'react';
import numeral from 'numeral';
import css from './FilePreview.module.scss';
import {
  ExtendedFile,
  UploadStatusEnum,
} from '../../../store/upload/uploadTypes';
import CircleLoader from '../../loaders/CircleLoader';
import Btn from '../../btn/Btn';

interface IProps {
  file: ExtendedFile;
  onDelete: (id: string) => void;
}

const loadingColors = {
  [UploadStatusEnum.success]: 'success',
  [UploadStatusEnum.failed]: 'error',
  [UploadStatusEnum.started]: 'primary',
  [UploadStatusEnum.notStarted]: 'grey',
};

const FilePreview = ({ file, onDelete }: IProps) => {
  const isImage = file.file.type.indexOf('image') >= 0;
  const isVideo = file.file.type.indexOf('video') >= 0;
  const tooBig = file.file.size > 10_000_000;

  const sizeStr = numeral(file.file.size).format('0 b');

  const showLoader = [
    UploadStatusEnum.started,
    UploadStatusEnum.success,
    UploadStatusEnum.failed,
  ].includes(file.uploadStatus);

  const color = loadingColors[file.uploadStatus] as
    | 'primary'
    | 'success'
    | 'error';

  return (
    <article className={css.filePreview}>
      {showLoader && <CircleLoader centered />}

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
          <Btn
            variant='contained'
            component='a'
            href={file.previewSrc}
            target='_blank'
          >
            Open
          </Btn>
          <Btn
            variant='contained'
            color='error'
            onClick={() => onDelete(file.id)}
          >
            Delete
          </Btn>
        </div>
      </div>
    </article>
  );
};

export default React.memo(FilePreview);
