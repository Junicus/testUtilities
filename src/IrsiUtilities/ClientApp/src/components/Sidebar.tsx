import React from 'react';
import styled from 'styled-components';
import { Box } from './Box';
import { Text } from './Typography/Text';

export const Sidebar: React.FC = () => {
  return (
    <nav>
      <SidebarContainer>
        <Nav>
          <Text variant="Link" to="/">
            Home
          </Text>
          <Text variant="Link" to="/stores">
            Stores
          </Text>
          <Text variant="Link" to="/water">
            Water
          </Text>
          <Text variant="Link" to="/electricity">
            Electricity
          </Text>
        </Nav>
      </SidebarContainer>
    </nav>
  );
};

const SidebarContainer = styled(Box)({ width: 240 });

const Nav = styled(Box)({ display: 'flex', flexDirection: 'column' });
