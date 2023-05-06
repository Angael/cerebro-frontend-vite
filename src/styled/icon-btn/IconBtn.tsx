import React, { ComponentProps, ComponentPropsWithRef } from 'react';

import css from './IconBtn.module.scss';
import { styled, StyledElementProps } from '../styled';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const _Btn = styled<
  ComponentPropsWithRef<'button'> | ComponentPropsWithRef<typeof NavLink>
>('button', css.iconBtn);

type Props = { filled?: boolean; disabled?: boolean } & ComponentProps<
  typeof _Btn
>;

const IconBtn = ({ filled, ...props }: Props) => {
  return (
    <_Btn
      className={clsx(props.className, filled && css.filled)}
      tabIndex={0}
      {...props}
    />
  );
};

export default IconBtn;
