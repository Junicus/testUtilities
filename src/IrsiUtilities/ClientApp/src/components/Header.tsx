import React from 'react';
import styled from 'styled-components';
import { Box } from './Box';
import { LoginMenu } from './LoginMenu';
import { Text, AnchorProps } from './Typography/Text';

export const Header: React.FC = () => {
  return (
    <header>
      <HeaderContainer>
        <NavBrand variant="Link" to="/">
          IrsiUtilities
        </NavBrand>
        <HeaderActions>
          <LoginMenu />
        </HeaderActions>
      </HeaderContainer>
    </header>
  );
};

const HeaderContainer = styled(Box)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.onprimary};
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${({ theme }) => theme.header.height}px;
  width: 100%;
`;

const NavBrand = styled<React.FC<AnchorProps>>(Text)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.onprimary};
  padding: ${({ theme }) => theme.space.m}px;
`;

const HeaderActions = styled(Box)({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'flex-end',
});
