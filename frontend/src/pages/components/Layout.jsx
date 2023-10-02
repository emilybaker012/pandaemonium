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
      <Row className={styles.header}>
        <Col
          xs={6}
          style={{
            border: '1px solid red',
            display: 'flex',
            alignItems: 'start',
            justifySelf: 'flex-start',
          }}
        >
          <img
            src={logo}
            alt="pandae-logo"
            style={{
              maxWidth: '150px',
            }}
          />
        </Col>
        <Col xs={4} className={styles.logout}>
          Welcome, {auth?.username}
        </Col>
        <Col xs="auto" className={styles.logout}>
          <HiLogout onClick={handleLogOut} size={24} />
        </Col>

      </Row>
      <Row className={styles.body}>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default Layout;
