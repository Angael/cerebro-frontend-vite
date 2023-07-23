import React, { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';
import Navbar from '../navbar/Navbar';
import clsx from 'clsx';
import css from './Layout.module.scss';

type Props = {
  children?: ReactNode;
  className?: string;
  isMaxWidth?: boolean;
} & ComponentPropsWithoutRef<'div'>;

const Layout = forwardRef<HTMLDivElement, Props>(
  ({ children, isMaxWidth, className, ...props }, ref) => (
    <div {...props} ref={ref}>
      <Navbar />
      <div className={clsx(isMaxWidth && css.Layout, className)}>
        {children}
      </div>
    </div>
  ),
);

export default Layout;
