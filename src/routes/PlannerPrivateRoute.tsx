import React, { FC, ReactNode } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { checkPlannerAuth } from './checkAuth';

interface PlannerPrivateRouteProps extends RouteProps {
  children: ReactNode;
}

const PlannerPrivateRoute: FC<PlannerPrivateRouteProps> = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return checkPlannerAuth() ? children : <Redirect to={{ pathname: '/login' }} />;
      }}
    />
  );
};

export default PlannerPrivateRoute;
