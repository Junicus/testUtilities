import React from 'react';
import styled from 'styled-components';
import { Box } from './Box';
import { Text, AnchorProps } from './Typography/Text';

export const Sidebar: React.FC = () => {
  return (
    <nav>
      <SidebarContainer>
        <Nav>
          <SidebarLink variant="Link" to="/">
            Home
          </SidebarLink>
          <SidebarLink variant="Link" to="/stores">
            Stores
          </SidebarLink>
          <SidebarLink variant="Link" to="/water">
            Water
          </SidebarLink>
          <SidebarLink variant="Link" to="/electricity">
            Electricity
          </SidebarLink>
        </Nav>
      </SidebarContainer>
    </nav>
  );
};

const SidebarContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.colors.surface,
  color: theme.colors.onsurface,
  width: theme.sidebar.width,
  height: `calc(100vh - ${theme.header.height}px)`,
}));

const Nav = styled(Box)({ display: 'flex', flexDirection: 'column' });

const SidebarLink = styled<React.FC<AnchorProps>>(Text)`
  margin-left: ${({ theme }) => theme.space.m}px;
  padding: ${({ theme }) => theme.space.m}px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.onsurface};
`;
