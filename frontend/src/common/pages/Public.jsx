import React from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from 'react-router-dom';
import styles from './Public.module.scss';

const Public = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/login');
  };
  return (
    <div className={styles.container}>
      <Stack gap={2} className={styles.stack}>
        <h1> Welcome to the Internet </h1>
        <Button
          onClick={handleOnClick}
        >
          Login
        </Button>
      </Stack>
    </div>
  );
};

export default Public;
