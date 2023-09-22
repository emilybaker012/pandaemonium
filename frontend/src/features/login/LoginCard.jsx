import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import styles from './LoginCard.module.scss';
import logo from '../../assets/panda-logo-no-line.png';
import LoginForm from './LoginForm';

const LoginCard = () => {
  return (
    <Container className={styles.cardContainer}>
      <img className={styles.logo} src={logo} alt="logo" height="100" />
      <Stack className={styles.stack}>
        <span className={styles.title}>Welcome</span>
        <Stack className={styles.stack} direction="horizontal" gap={1}>
          <span className={styles.signUpLabel}>{'Don\'t have and account?'} </span>
          <button type="button" className={styles.noButton}> Sign Up</button>
        </Stack>
        <LoginForm className={styles.loginForm} />
      </Stack>
    </Container>
  );
};

export default LoginCard;
