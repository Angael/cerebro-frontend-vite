import React from 'react';
import IconBtn from '../../styled/icon-btn/IconBtn';
import { Icon } from '@mdi/react';
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import css from './CinemaControls.module.scss';

type Props = {
  onNext: () => void;
  onPrev: () => void;
};

const CinemaControls = ({ onNext, onPrev }: Props) => {
  return (
    <>
      <IconBtn className={css.arrowLeft} onClick={onPrev}>
        <Icon path={mdiArrowLeft} size={3} />
      </IconBtn>

      <IconBtn className={css.arrowRight} onClick={onNext}>
        <Icon path={mdiArrowRight} size={3} />
      </IconBtn>
    </>
  );
};

export default CinemaControls;
