import React, { FC, ReactNode } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { checkAuth } from './checkAuth';

interface PrivateRouteProps extends RouteProps {
  children: ReactNode;
}

const PrivateRout: FC<PrivateRouteProps> = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return checkAuth() ? children : <Redirect to={{ pathname: '/login' }} />;
      }}
    />
  );
};

export default PrivateRout;
