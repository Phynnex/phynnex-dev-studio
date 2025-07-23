import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mt-20">{children}</main>
    </>
  );
};

export default Layout;
