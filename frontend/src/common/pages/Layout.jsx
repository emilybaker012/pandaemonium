import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';
import { HiLogout } from 'react-icons/hi';
import styles from './Layout.module.scss';
import Sidebar from '../components/Sidebar';
import AuthContext from '../providers/AuthProvider';

const Layout = () => {
  const { auth } = useContext(AuthContext);
  return (
    <Container className={styles.container}>
      <Row className={styles.header}>
        <Col xs={6} />
        <Col xs={4} className={styles.logout}>
          Welcome {auth.username}
        </Col>
        <Col xs="auto" className={styles.logout}>
          <HiLogout size={24} />
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
