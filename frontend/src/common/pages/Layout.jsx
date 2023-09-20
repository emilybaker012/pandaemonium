import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet, useNavigate } from 'react-router-dom';
import { HiLogout } from 'react-icons/hi';
import { useQueryClient } from '@tanstack/react-query';
import styles from './Layout.module.scss';
import Sidebar from '../components/Sidebar';
import useAuthContext from '../hooks/useAuthContext';
import useAuth from '../../features/auth/useAuth';

const Layout = () => {
  const navigate = useNavigate();
  const { auth } = useAuthContext();
  const authy = useAuth();
  const queryClient = useQueryClient();
  const handleLogOut = async () => {
    console.log('logging out');
    // Remove all cached data
    queryClient.removeQueries();

    // Clear cookies
    await authy.logout();
    navigate('login');
  };

  return (
    <Container className={styles.container}>
      <Row className={styles.header}>
        <Col xs={6} />
        <Col xs={4} className={styles.logout}>
          Welcome {auth.username}
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
    </Container>
  );
};

export default Layout;
