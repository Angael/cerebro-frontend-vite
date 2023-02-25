import React from 'react';
import Navbar from '../navbar/Navbar';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className }: Props) => {
  return (
    <div>
      {/*<h1 className='h2'>Here show limits</h1>*/}
      <Navbar />
      <div className={className}>{children}</div>
    </div>
  );
};

export default Layout;
