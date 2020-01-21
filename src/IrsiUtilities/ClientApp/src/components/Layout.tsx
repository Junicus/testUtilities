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

const MainContainer = styled.main(({ theme }) => ({
  backgroundColor: theme.colors.background,
  color: theme.colors.onbackground,
  display: 'flex',
  flexDirection: 'row',
}));
