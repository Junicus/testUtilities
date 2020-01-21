import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import styled from 'styled-components';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <MainContainer>
        <Sidebar />
        {children}
      </MainContainer>
    </>
  );
};

const MainContainer = styled.main({
  display: 'flex',
  flexDirection: 'row',
});
