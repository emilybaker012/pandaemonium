import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginCard from '../features/login/LoginCard';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const navigate = useNavigate();

  // Redirect to the signup page
  const handleSignUp = () => {
    navigate('/signup');
  };

  // Redirect to the forgot password page
  const handleForgotPassword = () => {
    navigate('/forgot');
  };

  return (
    <div
      className={styles.loginPage}
    >
      <LoginCard
        className={styles.loginCard}
        onForgotPassword={handleForgotPassword}
        onSignUp={handleSignUp}
      />
    </div>
  );
};

export default LoginPage;
