/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import useAuthContext from './hooks/useAuthContext';
import useAuth from './hooks/useAuth';

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const authy = useAuth();
  const { auth, persist } = useAuthContext();

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await authy.refresh();
      } catch (err) {
        // Error
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
    return () => {
      isMounted = false;
      return isMounted;
    };
  }, []);

  return (
    !persist
      ? <Outlet />
      : isLoading
        ? <p>Loading...</p>
        : <Outlet />

  );
};

export default PersistLogin;
