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

const MainContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.onbackground};
  display: flex;
  flex-direction: row;
  padding-top: ${({ theme }) => theme.header.height}px;
`;
