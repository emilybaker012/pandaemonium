import React from 'react';
import PropTypes from 'prop-types';
import { BiError } from 'react-icons/bi';
import styles from './LoginError.module.scss';

const LoginError = ({ children, hidden, ref }) => {
  return (
    <div
      ref={ref}
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
  children: PropTypes.string,
  hidden: PropTypes.bool.isRequired,
  ref: PropTypes.instanceOf(Object),
};

LoginError.defaultProps = {
  children: undefined,
  ref: undefined,
};

export default LoginError;
