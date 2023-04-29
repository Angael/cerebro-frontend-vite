import React from 'react';
import { getLocalSrc } from './getLocalSrc';
import { LocalFile } from '../../api/local/localApi';
import css from './PreviewLocalFile.module.scss';

type Props = {
  file: LocalFile;
};

const PreviewLocalFile = (props: Props) => {
  const { type, path } = props.file;
  const src = getLocalSrc(path);
  if (type === 'image') {
    return <img className={css.previewLocalFile} src={src} alt='' />;
  } else if (type === 'video') {
    return (
      <video controls className={css.previewLocalFile}>
        <source src={src} type='video/mp4' />
      </video>
    );
  } else {
    return <div className={css.previewLocalFile}>Unknown type: {type}</div>;
  }
};

export default PreviewLocalFile;
