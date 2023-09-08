import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './common/pages/Layout';
import Public from './common/components/Public';
import UsersDisplay from './features/users/UsersDisplay';
import ClientProvider from './common/providers/ClientProvider';
import Login from './common/pages/Login';
import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route element={<ClientProvider />}>
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<UsersDisplay />} />
          </Route>
          {/* End Users */}
        </Route>
        {/* End Client Provider */}
      </Route>
      {/* End Layout */}
    </Routes>
  );
};

export default App;
