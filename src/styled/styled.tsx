import React, { ComponentPropsWithRef, ElementType } from 'react';
import clsx from 'clsx';

type ComponentType =
  | keyof JSX.IntrinsicElements
  | React.ForwardRefExoticComponent<any>;

type Props<T extends ElementType> = ComponentPropsWithRef<T> & {
  as?: ComponentType;
  className?: string;
};

export function styled(defaultComponent: ComponentType, baseClassName: string) {
  const Component = ({
    as = defaultComponent,
    className,
    ...props
  }: Props<ComponentType>) => {
    const _Component = as;
    return <_Component className={clsx(baseClassName, className)} {...props} />;
  };

  return Component;
}
