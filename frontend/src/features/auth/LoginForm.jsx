/* eslint-disable no-unused-vars */
import React, {
  useState, useRef, useEffect, useContext,
} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import AuthContext from '../../common/providers/AuthProvider';

const LoginForm = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState(undefined);

  useEffect(() => {
    // focus on user
    userRef.current.focus();
  }, []);

  // Clear out any error messages if user updates username or pasword field
  useEffect(() => {
    setErrMsg(undefined);
  }, [username, password]);

  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { accessToken } = await auth.login(
        { username, password },
      );
      if (accessToken) {
        setAuth({ username, accessToken });
        navigate('/dash');
      } else {
        setErrMsg('Invalid username and/or password');
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 401) {
        setErrMsg('Invalid username and/or password');
      }

      errRef?.current.focus();
    }
  };
  return (
    <Form
      autoComplete="off"
    >
      <p
        ref={errRef}
        aria-live="assertive"
        style={{
          display: errMsg ? 'Block' : 'none',
        }}
      >Error: {errMsg}
      </p>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label ref={userRef}>Username</Form.Label>
        <Form.Control
          required
          autoComplete="username"
          value={username}
          placeholder="username"
          onChange={(e) => { return setUsername(e.target.value); }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          autoComplete="current-password"
          value={password}
          type="password"
          placeholder="password"
          onChange={(e) => { return setPassword(e.target.value); }}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
