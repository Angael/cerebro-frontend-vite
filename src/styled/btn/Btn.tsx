import React, { ComponentProps } from 'react';

import css from './Btn.module.scss';
import { styled, StyledElementProps } from '../styled';
import { NavLink } from 'react-router-dom';

type Props = { disabled?: boolean };

const _Btn = styled<
  Props &
    (
      | ComponentProps<'button'>
      | ComponentProps<typeof NavLink>
      | ComponentProps<'a'>
    )
>('button', css.btnStyle);

export default _Btn;
