import React, { ComponentProps } from 'react';

import css from './Btn.module.scss';
import { styled, StyledElementProps } from '../styled';

const _Btn = styled('button', css.btnStyle);

type Props =
  | ({ as: 'a' } & StyledElementProps<'a'>)
  | StyledElementProps<'button'>;

const Btn = (props: Props) => {
  return <_Btn tabIndex={0} {...props} />;
};

export default Btn;
