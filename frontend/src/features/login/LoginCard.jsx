import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './LoginCard.module.scss';
import logo from '../../assets/panda-logo-no-line.png';
import LoginForm from './LoginForm';
import LoginLink from './LoginLink';

const LoginCard = ({ className, onSignUp, onForgotPassword }) => {
  const containerClasses = clsx({
    [className]: className,
    [styles.cardContainer]: true,
  });

  return (
    <Container className={containerClasses}>
      <img className={styles.logo} src={logo} alt="logo" height="100" />
      <Stack className={styles.stack}>
        <span className={styles.title}>Welcome</span>
        <Stack className={styles.stack} direction="horizontal" gap={1}>
          <span className={styles.signUpLabel}>{'Don\'t have an account?'} </span>
          <LoginLink onClick={onSignUp}>Sign Up</LoginLink>
        </Stack>
        <LoginForm className={styles.loginForm} />
        <LoginLink onClick={onForgotPassword}>Forgot Password</LoginLink>
      </Stack>
    </Container>
  );
};

LoginCard.propTypes = {
  className: PropTypes.string,
  onSignUp: PropTypes.func,
  onForgotPassword: PropTypes.func,
};

LoginCard.defaultProps = {
  className: undefined,
  onSignUp: () => {},
  onForgotPassword: () => {},
};

export default LoginCard;
