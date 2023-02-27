import React from 'react';
import Navbar from '../navbar/Navbar';
import clsx from 'clsx';
import css from './Layout.module.scss';

type Props = {
  children?: React.ReactNode;
  className?: string;
  isMaxWidth?: boolean;
};

const Layout = ({ children, isMaxWidth, className }: Props) => {
  return (
    <div>
      <Navbar />
      <div className={clsx(isMaxWidth && css.Layout, className)}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
