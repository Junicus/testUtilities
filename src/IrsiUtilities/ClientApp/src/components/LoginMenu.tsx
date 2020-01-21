import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AppState } from '../store/types';
import { Text, AnchorProps } from './Typography/Text';

interface AuthenticatedViewProps {
  userName?: string;
}

interface AnonymousViewProps {}

const AuthenticatedView: React.FC<AuthenticatedViewProps> = ({ userName }) => {
  return <></>;
};

const AnonymousView: React.FC<AnonymousViewProps> = () => {
  return (
    <>
      <NavAction variant="Link" to="/login">
        Login
      </NavAction>
    </>
  );
};

export const LoginMenu: React.FC = () => {
  const isAuthenticated = useSelector<AppState, boolean>(state => !!state.oidc.user);
  const userName = useSelector<AppState, string | undefined>(state => state.oidc.user?.profile?.name);

  if (isAuthenticated) {
    return <AuthenticatedView userName={userName} />;
  } else {
    return <AnonymousView />;
  }
};

const NavAction = styled<React.FC<AnchorProps>>(Text)({});
