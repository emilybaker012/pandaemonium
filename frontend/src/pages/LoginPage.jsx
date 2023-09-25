import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginCard from '../features/login/LoginCard';
import styles from './LoginPage.module.scss';
import useAuth from '../auth/hooks/useAuth';

const LoginPage = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  // Redirect to the signup page
  const handleSignUp = () => {
    navigate('/signup');
  };

  // Redirect to the forgot password page
  const handleForgotPassword = () => {
    navigate('/forgot');
  };

  const verifyRefreshToken = async () => {
    try {
      const refresh = await auth.refresh();
      return refresh.accessToken && navigate('/');
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    verifyRefreshToken();
    return () => {
      return false;
    };
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
