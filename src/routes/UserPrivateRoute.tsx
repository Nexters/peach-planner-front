import React, { FC, ReactNode } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { checkUserAuth } from './checkAuth';

interface UserPrivateRouteProps extends RouteProps {
  children: ReactNode;
}

const UserPrivateRoute: FC<UserPrivateRouteProps> = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return checkUserAuth() ? children : <Redirect to={{ pathname: '/login' }} />;
      }}
    />
  );
};

export default UserPrivateRoute;
