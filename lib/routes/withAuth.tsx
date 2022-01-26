import React from 'react';
import Router from 'next/router';
import { NextComponentType, NextPageContext } from 'next';
import { getUserMe } from 'lib/api/User';

const login = '/login'; // Define your login route address.

export function authOnly (WrappedComponent: NextComponentType) {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (context: NextPageContext) => {
    if (context.req) {
        // server
        return {};
    } else {
        // client
        const userAuth = await getUserMe();

        // Are you an authorized user or not?
        if (!userAuth) {
          // Handle server-side and client-side rendering.
          if (context.res) {
            context.res?.writeHead(302, {
              Location: login,
            });
            context.res?.end();
          } else {
            Router.replace(login);
          }
        } else if (WrappedComponent.getInitialProps) {
          const wrappedProps = await WrappedComponent.getInitialProps(context);
          return { ...wrappedProps, userAuth };
        }
    
        return { userAuth };
    }
  };

  return hocComponent;
};


export function publicOnly (WrappedComponent: NextComponentType) {
    const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;
  
    hocComponent.getInitialProps = async (context: NextPageContext) => {
      if (context.req) {
          // server
          return {};
      } else {
          // client
          const userAuth = await getUserMe();
  
          // Are you an authorized user or not?
          if (userAuth) {
            // Handle server-side and client-side rendering.
            if (context.res) {
              context.res?.writeHead(302, {
                Location: "/",
              });
              context.res?.end();
            } else {
              Router.replace("/");
            }
          } else if (WrappedComponent.getInitialProps) {
            const wrappedProps = await WrappedComponent.getInitialProps(context);
            return { ...wrappedProps, userAuth };
          }
      
          return { userAuth };
      }
    };
  
    return hocComponent;
  };
  