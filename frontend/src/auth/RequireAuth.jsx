import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

import useAuthContext from './hooks/useAuthContext';

const RequireAuth = () => {
  const { auth } = useAuthContext();
  const location = useLocation();

  if (auth.accessToken) {
    console.log('Already Logged in!');
  } else {
    console.log('Need to login... should be rerouted to login page');
  }

  return (
    auth?.accessToken
      ? <Outlet />
      : <Navigate to="/login" state={{ from: location }} replace />
  );

  /* For role based authorization
    auth?.roles?.find(role => allowedRoles?.includes(role))
    ? <Outlet />
    : auth?.user
        ? <Navigate to="/unathorized state={{from: location}} replace"
        : <Navigate to="/login" state={{from: location}} replace />
  */
};

export default RequireAuth;
