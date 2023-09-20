import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import LoginForm from '../../features/auth/LoginForm';

const Login = () => {
  return (
    <Container style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',

    }}
    >
      <Card style={{ padding: '15px', minWidth: '500px' }}>
        <LoginForm />
      </Card>
    </Container>

  );
};

export default Login;
