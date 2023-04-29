import React from 'react';
import clsx from 'clsx';
import { getLocalSrc } from './getLocalSrc';
import { LocalFile } from '../../api/local/localApi';
import css from './PreviewLocalFile.module.scss';

type Props = {
  file: LocalFile;
  selected: boolean;
  onToggle: (path: string) => void;
};

const PreviewLocalFile = (props: Props) => {
  const { type, path } = props.file;
  const src = getLocalSrc(path);

  function handleClick(e: any) {
    e.preventDefault();
    props.onToggle(path);
  }

  return (
    <div
      className={clsx(css.previewLocalFile, props.selected && css.selected)}
      onMouseDown={handleClick}
    >
      {type === 'image' && <img src={src} alt='' />}

      {type === 'video' && (
        <video controls muted autoPlay loop>
          <source src={src} type='video/mp4' />
        </video>
      )}
    </div>
  );
};

export default React.memo(PreviewLocalFile);
