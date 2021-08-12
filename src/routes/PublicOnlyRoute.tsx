import React, { FC, ReactNode } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { checkAuth } from './checkAuth';

interface PublicOnlyRouteProps extends RouteProps {
  children: ReactNode;
}

const PublicOnlyRoute: FC<PublicOnlyRouteProps> = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return checkAuth() ? <Redirect to={{ pathname: '/' }} /> : children;
      }}
    />
  );
};

export default PublicOnlyRoute;
