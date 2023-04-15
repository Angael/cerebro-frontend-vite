import React, { ComponentProps } from 'react';
import clsx from 'clsx';

import css from './Btn.module.scss';

// TODO: refactor to use styled
type Props = {
  component?:
    | keyof JSX.IntrinsicElements
    | React.ForwardRefExoticComponent<any>;
  [key: string]: any;
} & ComponentProps<'button'>;

const Btn = ({ component, className, ...props }: Props) => {
  const Component = component ?? 'button';
  return (
    <Component
      tabIndex={0}
      className={clsx(css.btnStyle, className)}
      {...props}
    />
  );
};

export default Btn;
