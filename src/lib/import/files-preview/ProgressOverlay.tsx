import React from 'react';
import { UploadStatusEnum } from '../../../store/upload/uploadTypes';
import css from './ProgressOverlay.module.scss';
import clsx from 'clsx';

type Props = {
  status: UploadStatusEnum;
  progress: number;
};

const ProgressOverlay = ({ status, progress }: Props) => {
  return (
    <div
      className={clsx(css.ProgressOverlay, {
        [css.notStarted]: status === UploadStatusEnum.notStarted,
        [css.started]: status === UploadStatusEnum.started,
        [css.success]: status === UploadStatusEnum.success,
        [css.failed]: status === UploadStatusEnum.failed,
      })}
      style={
        {
          '--progress': `${100 - progress}%`,
        } as React.CSSProperties
      }
    >
      {Math.round(progress * 100) / 100}%
    </div>
  );
};

export default React.memo(ProgressOverlay);
