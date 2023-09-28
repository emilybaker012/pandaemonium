import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LoginCard from '../features/login/LoginCard';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect to the signup page
  const handleSignUp = () => {
    navigate('/signup');
  };

  // Redirect to the forgot password page
  const handleForgotPassword = () => {
    navigate('/forgot');
  };

  useEffect(() => {
    if (!location.state?.sessionExpired) {
      navigate('/');
    }
  }, []);

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
