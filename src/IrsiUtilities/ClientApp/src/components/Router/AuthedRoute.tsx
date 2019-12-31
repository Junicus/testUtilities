import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../store/types";
import { User } from "oidc-client";
import {
  RouteComponentProps,
  RouteProps,
  Redirect,
  Route
} from "react-router-dom";

interface AuthedRouteProps extends RouteProps {
  component: any;
}

export const AuthedRoute: React.FC<AuthedRouteProps> = ({
  component: Component,
  ...otherProps
}) => {
  const user = useSelector<AppState, User | undefined>(
    state => state.oidc.user
  );

  const { path } = otherProps;

  return (
    <Route
      {...otherProps}
      render={props => {
        return !user || user.expired ? (
          <Redirect to={{ pathname: "/login", state: { returnUrl: path } }} />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};
