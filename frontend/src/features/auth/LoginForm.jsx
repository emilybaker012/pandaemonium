/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, {
  useState, useRef, useEffect,
} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import useAuthContext from '../../common/hooks/useAuthContext';

const LoginForm = () => {
  const { setAuth, persist, setPersist } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const userRef = useRef();
  const errRef = useRef();

  const auth = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState(undefined);

  const togglePersist = () => {
    setPersist(!persist);
  };

  useEffect(() => {
    localStorage.setItem('persist', persist);
  }, [persist]);

  useEffect(() => {
    // focus on user
    userRef.current.focus();
  }, []);

  // Clear out any error messages if user updates username or pasword field
  useEffect(() => {
    setErrMsg(undefined);
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { accessToken } = await auth.login(
        { username, password },
      );
      if (accessToken) {
        setAuth({ username, accessToken });
        setUsername('');
        setPassword('');
        navigate(from, { replace: true });
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
      <div>
        <input
          type="checkbox"
          id="persist"
          onChange={togglePersist}
          checked={persist}
        />
        <label htmlFor="persist" style={{ padding: '12px' }}> Trust This Device</label>
      </div>
    </Form>
  );
};

export default LoginForm;
