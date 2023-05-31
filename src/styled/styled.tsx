import React, { ComponentPropsWithRef, ElementType } from 'react';
import clsx from 'clsx';

type ComponentType =
  | keyof JSX.IntrinsicElements
  | React.ForwardRefExoticComponent<any>;

export type StyledElementProps = { as?: ComponentType; className?: string };

export function styled<T extends {} = ComponentPropsWithRef<'div'>>(
  defaultComponent: ComponentType,
  baseClassName: string,
) {
  return ({
    as = defaultComponent,
    className,
    ...props
  }: StyledElementProps & T) => {
    const _Component = as;
    return <_Component className={clsx(baseClassName, className)} {...props} />;
  };
}
