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

const HeaderContainer = styled(Box)({
  background: '#333',
  display: 'flex',
  flexDirection: 'row',
});

const NavBrand = styled<React.FC<AnchorProps>>(Text)({
  textTransform: 'uppercase',
  textDecoration: 'none',
});

const HeaderActions = styled(Box)({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'flex-end',
});
