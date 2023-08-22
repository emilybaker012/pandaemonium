import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import styles from './Layout.module.scss';
import Sidebar from '../components/Sidebar';

const Layout = ({ children }) => {
  return (
    <Container className={styles.container}>
      <Row className={styles.body}>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

Layout.propTypes = {
  // must have at least one child
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
