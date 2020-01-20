import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        {children}
      </main>
    </>
  );
};
