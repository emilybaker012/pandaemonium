/* eslint-disable no-unused-vars */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet, useNavigate } from 'react-router-dom';
import { HiLogout } from 'react-icons/hi';
import styles from './Layout.module.scss';
import Sidebar from './Sidebar';
import useAuth from '../../auth/hooks/useAuth';
import useAuthContext from '../../auth/hooks/useAuthContext';
import logo from '../../assets/pandae.svg';

const Layout = () => {
  const authy = useAuth();
  const { setAuth, auth } = useAuthContext();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    // Remove all cached data
    setAuth({});
    // Clear cookies
    await authy.logout();
    navigate('/login?logout ');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={logo} alt="logo" />
        <div>
          <span> Welcome {auth.username}</span>
          <HiLogout className={styles.logoutButton} onClick={handleLogOut} size="18" />
        </div>
      </div>
      <div className={styles.body}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
