import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../store/types';
// import { NavItem, NavLink } from "reactstrap";
import { Link } from 'react-router-dom';

interface AuthenticatedViewProps {
  userName?: string;
}

interface AnonymousViewProps {}

const AuthenticatedView: React.FC<AuthenticatedViewProps> = ({ userName }) => {
  return (
    <>
      {/* <NavItem>
        <NavLink tag={Link} className="text-dark" to="/">
          Hello {userName}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} className="text-dark" to="/logout">
          Logout
        </NavLink>
      </NavItem> */}
    </>
  );
};

const AnonymousView: React.FC<AnonymousViewProps> = () => {
  return (
    <>{/* <NavItem>
        <NavLink tag={Link} className="text-dark" to="/login">
          Login
        </NavLink>
      </NavItem> */}</>
  );
};

export const LoginMenu = () => {
  const isAuthenticated = useSelector<AppState, boolean>(state => !!state.oidc.user);
  const userName = useSelector<AppState, string | undefined>(state => state.oidc.user?.profile?.name);

  if (isAuthenticated) {
    return <AuthenticatedView userName={userName} />;
  } else {
    return <AnonymousView />;
  }
};
