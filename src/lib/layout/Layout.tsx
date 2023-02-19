import React from 'react';
import Navbar from '../navbar/Navbar';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      {/*<h1 className='h2'>Here show limits</h1>*/}
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
