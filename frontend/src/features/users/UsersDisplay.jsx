import React from 'react';
import {
  useQuery,
} from '@tanstack/react-query'; import useUsers from './useUsers';

const UsersDisplay = () => {
  const users = useUsers();
  const { isLoading, error, data } = useQuery({
    queryKey: ['users'],
    queryFn: () => { return users.getAllUsers(); },
  });

  const userDisplay = data?.map((user) => {
    return (
      <div>
        <p>{user.username} {user.active ? 'active' : 'inactive'}</p>
      </div>
    );
  });

  if (isLoading) return 'Loading...';
  if (error) return `An Error has occured: ${error.message}`;
  return (
    <div>
      <h1>UsersDisplay</h1>
      <span>{userDisplay}</span>
    </div>

  );
};

export default UsersDisplay;
