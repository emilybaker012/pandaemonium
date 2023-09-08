import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { accessToken } = await auth.login({ username, password });
    if (accessToken) {
      navigate('/');
    }
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          value={username}
          placeholder="username"
          onChange={(e) => { return setUsername(e.target.value); }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={password}
          type="password"
          placeholder="password"
          onChange={(e) => { return setPassword(e.target.value); }}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
