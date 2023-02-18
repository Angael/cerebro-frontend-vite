import React, { ComponentProps } from 'react';
import clsx from 'clsx';

import css from './IconBtn.module.scss';

type Props = {
  component?:
    | keyof JSX.IntrinsicElements
    | React.ForwardRefExoticComponent<any>;
  [key: string]: any;
} & ComponentProps<'button'>;

const IconBtn = ({ component, className, ...props }: Props) => {
  const Component = component ?? 'button';
  return <Component className={clsx(css.iconBtn, className)} {...props} />;
};

export default IconBtn;
