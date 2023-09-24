import React from 'react';
import LoginCard from '../features/login/LoginCard';

const LoginPage = () => {
  return (
    <div
      style={{
        backgroundColor: 'gray',
        width: '100%',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <LoginCard />
    </div>

  );
};

export default LoginPage;
