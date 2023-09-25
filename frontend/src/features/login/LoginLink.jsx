import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoginLink.module.scss';

const LoginLink = ({ children, onClick }) => {
  return (
    <button type="button" onClick={onClick} className={styles.link}> {children}</button>
  );
};

LoginLink.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

LoginLink.defaultProps = {
  onClick: () => {},
};

export default LoginLink;
