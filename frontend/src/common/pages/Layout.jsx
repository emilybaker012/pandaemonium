import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import Sidebar from '../components/Sidebar';

const Layout = () => {
  return (
    <Container className={styles.container}>
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
