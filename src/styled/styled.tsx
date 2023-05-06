import React, { ComponentPropsWithRef, ElementType } from 'react';
import clsx from 'clsx';

type ComponentType =
  | keyof JSX.IntrinsicElements
  | React.ForwardRefExoticComponent<any>;

export type StyledElementProps<T extends ElementType> =
  ComponentPropsWithRef<T> & {
    as?: ComponentType;
    className?: string;
  };

// TODO accept generic type for props
export function styled(defaultComponent: ComponentType, baseClassName: string) {
  return ({
    as = defaultComponent,
    className,
    ...props
  }: StyledElementProps<ComponentType>) => {
    const _Component = as;
    return <_Component className={clsx(baseClassName, className)} {...props} />;
  };
}
