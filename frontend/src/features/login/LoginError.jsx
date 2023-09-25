import React from 'react';
import PropTypes from 'prop-types';
import { BiError } from 'react-icons/bi';
import styles from './LoginError.module.scss';

const LoginError = ({ children, hidden }) => {
  return (
    <div
      className={styles.formErrorContainer}
      style={{
        display: hidden ? 'none' : 'flex',
      }}
    >
      <BiError style={{ margin: '5px' }} /> {children}
    </div>
  );
};

LoginError.propTypes = {
  children: PropTypes.string.isRequired,
  hidden: PropTypes.bool.isRequired,
};

export default LoginError;
