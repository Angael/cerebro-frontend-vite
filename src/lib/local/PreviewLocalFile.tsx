import React from 'react';
import clsx from 'clsx';
import { getLocalSrc } from './getLocalSrc';
import { LocalFile } from '../../api/local/localApi';
import css from './PreviewLocalFile.module.scss';
import IconBtn from '../../styled/icon-btn/IconBtn';
import { Icon } from '@mdi/react';
import { mdiDelete } from '@mdi/js';

type Props = {
  file: LocalFile;
  selected: boolean;
  onToggle: (path: string) => void;
  onDelete: (paths: string[]) => void;
};

const PreviewLocalFile = (props: Props) => {
  const { type, path } = props.file;
  const src = getLocalSrc(path);

  function handleClick(e: any) {
    e.preventDefault();
    props.onToggle(path);
  }

  function deleteMe(e: any) {
    e.stopPropagation();
    props.onDelete([path]);
  }

  return (
    <div
      className={clsx(css.previewLocalFile, props.selected && css.selected)}
      onClick={handleClick}
    >
      {type === 'image' && <img src={src} alt='' />}

      {type === 'video' && (
        <video controls muted autoPlay loop>
          <source src={src} type='video/mp4' />
        </video>
      )}

      <IconBtn className={css.deleteBtn} onClick={deleteMe}>
        <Icon path={mdiDelete} size={1} />
      </IconBtn>
    </div>
  );
};

export default React.memo(PreviewLocalFile);
