import React, { ComponentProps } from 'react';

import css from './Btn.module.scss';
import { styled, StyledElementProps } from '../styled';
import { NavLink } from 'react-router-dom';

const _Btn = styled('button', css.btnStyle);

type Props = { disabled?: boolean } & (
  | ({ as: 'a' } & StyledElementProps<'a' | typeof NavLink>)
  | StyledElementProps<'button'>
);

const Btn = (props: Props) => {
  return <_Btn tabIndex={0} {...props} />;
};

export default Btn;
