import React from 'react';
import Button from 'react-bootstrap/Button';
import useAuth from '../../features/auth/useAuth';

const Dash = () => {
  const auth = useAuth();
  return (
    <div>
      <Button onClick={() => { return auth.refresh(); }}>
        Refresh
      </Button>
    </div>
  );
};

export default Dash;
