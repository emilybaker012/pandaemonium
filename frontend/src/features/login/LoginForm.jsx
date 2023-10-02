/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, {
  useState, useRef, useEffect,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './LoginForm.module.scss';
import useAuthContext from '../../auth/hooks/useAuthContext';
import useAuth from '../../auth/hooks/useAuth';
import LoginError from './LoginError';

const LoginForm = ({ className }) => {
  const formClasses = clsx({
    [className]: className,
    [styles.formContainer]: true,
  });

  // Navigator
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  // Authentication
  const auth = useAuth();
  const { setAuth, persist, setPersist } = useAuthContext();

  // Persist
  const togglePersist = () => {
    setPersist(!persist);
  };

  useEffect(() => {
    localStorage.setItem('persist', persist);
  }, [persist]);

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState(undefined);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // focus on user
    userRef.current.focus();
  }, []);

  // Clear out any error messages if user updates username or pasword field
  useEffect(() => {
    setErrMsg(undefined);
    setErrors(undefined);
  }, [username, password]);

  const findErrors = () => {
    const error = {};

    if (!username) {
      error.username = 'username cannot be blank';
    }
    if (!password) {
      error.password = 'password cannot be blank';
    }
    return Object.keys(error).length > 0 ? error : undefined;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = findErrors();
    setErrors(formErrors);

    if (!formErrors) {
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
        } else if (err.response?.status === 400) {
          setErrMsg(err.response?.data?.error);
        }
      }
    }
  };

  return (
    <Form
      className={formClasses}
      autoComplete="off"
    >
      <LoginError
        aria-live="assertive"
        hidden={!errMsg}
      >{errMsg}
      </LoginError>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label className={styles.label} ref={userRef}>USERNAME</Form.Label>
        <Form.Control
          isInvalid={errors?.username}
          className={styles.control}
          required
          autoComplete="username"
          value={username}
          placeholder="username"
          onChange={(e) => { return setUsername(e.target.value); }}
        />
        <Form.Control.Feedback type="invalid">{errors?.username}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label className={styles.label}>PASSWORD</Form.Label>
        <Form.Control
          isInvalid={errors?.password}
          className={styles.control}
          required
          autoComplete="current-password"
          value={password}
          type="password"
          placeholder="password"
          onChange={(e) => { return setPassword(e.target.value); }}
        />
        <Form.Control.Feedback type="invalid">{errors?.password}</Form.Control.Feedback>

      </Form.Group>
      <Form.Group className={styles.rememberMe}>
        <Form.Check
          id="persist"
          onChange={togglePersist}
          checked={persist}
        />
        <Form.Label>Remember Me</Form.Label>
      </Form.Group>
      <Button variant="primary" style={{ width: '100%' }} type="submit" onClick={handleSubmit}>
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
