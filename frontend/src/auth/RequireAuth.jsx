import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

import useAuthContext from './hooks/useAuthContext';

const RequireAuth = () => {
  const { auth } = useAuthContext();
  const location = useLocation();
  return (
    auth?.accessToken
      ? <Outlet />
      : <Navigate to="/login" state={{ from: location, sessionExpired: 'true' }} replace />
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
