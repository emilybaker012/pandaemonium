/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, {
  useState, useRef, useEffect,
} from 'react';
import clsx from 'clsx';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './LoginForm.module.scss';
import './style.scss';

const LoginForm = ({ className, persist, togglePersist }) => {
  const formClasses = clsx({
    [className]: className,
    [styles.formContainer]: true,
  });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Click button
  };

  const handleForgotPassword = (e) => {
    // navigate to forgot password page
  };
  return (
    <Form
      className={formClasses}
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
        <Form.Label className={styles.label} ref={userRef}>USERNAME</Form.Label>
        <Form.Control
          className={styles.control}
          required
          autoComplete="username"
          value={username}
          placeholder="username"
          onChange={(e) => { return setUsername(e.target.value); }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label className={styles.label}>PASSWORD</Form.Label>
        <Form.Control
          className={styles.control}
          required
          autoComplete="current-password"
          value={password}
          type="password"
          placeholder="password"
          onChange={(e) => { return setPassword(e.target.value); }}
        />
      </Form.Group>
      <Form.Group className={styles.rememberMe}>
        <Form.Check />
        <Form.Label>Remember Me</Form.Label>
      </Form.Group>
      <Button variant="primary" style={{ width: '100%' }} type="submit" onClick={handleSubmit}>
        Login
      </Button>
      <button type="button" className={styles.noButton} onClick={handleForgotPassword}> Forgot Password</button>
    </Form>
  );
};

export default LoginForm;
