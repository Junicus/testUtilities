import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import styled from 'styled-components';
import { Box } from './Box';

export const Layout: React.FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <ContentWrapper>
        <MainContainer>{children}</MainContainer>
      </ContentWrapper>
    </LayoutWrapper>
  );
};

const MainContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.onbackground};
  overflow-y: auto;
`;

const LayoutWrapper = styled(Box)`
  display: grid;
  grid-template-columns: ${({ theme }) => theme.sidebar.width}px auto;
  grid-template-areas:
    'header header'
    'sidebar main';
  height: 100vh;
  width: 100vw;
`;

const HeaderWrapper = styled(Box)`
  grid-area: header;
`;

const SidebarWrapper = styled(Box)`
  grid-area: sidebar;
`;

const ContentWrapper = styled(Box)`
  grid-area: main;
`;
