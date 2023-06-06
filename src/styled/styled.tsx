import React, { ComponentPropsWithRef, forwardRef } from 'react';
import clsx from 'clsx';

type ComponentType =
  | keyof JSX.IntrinsicElements
  | React.ForwardRefExoticComponent<any>;

export type StyledElementProps = { as?: ComponentType; className?: string };

export const styled = <T extends {} = ComponentPropsWithRef<'div'>>(
  defaultComponent: ComponentType,
  baseClassName: string,
  defaultProps = {},
) => {
  return forwardRef(
    (
      { as = defaultComponent, className, ...props }: StyledElementProps & T,
      ref,
    ) => {
      const _Component = as;
      return (
        <_Component
          ref={ref}
          className={clsx(baseClassName, className)}
          {...defaultProps}
          {...props}
        />
      );
    },
  );
};
