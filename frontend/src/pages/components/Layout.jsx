import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';
import { HiLogout } from 'react-icons/hi';
import styles from './Layout.module.scss';
import Sidebar from './Sidebar';

const Layout = () => {
  const handleLogOut = async () => {
    // Remove all cached data
    // Clear cookies
  };

  return (
    <Container className={styles.container}>
      <Row className={styles.header}>
        <Col xs={6} />
        <Col xs={4} className={styles.logout}>
          Welcome, Herp Derp
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
